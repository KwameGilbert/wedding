interface IcsEvent {
  title: string;
  description?: string;
  start: string; // human readable date string or ISO
  end?: string; // optional
  location?: string;
  // reminders in minutes before the event start (e.g. [1440, 60] for 1 day and 1 hour)
  reminders?: number[];
}

function formatDateForICS(dateStr: string) {
  // Try parsing ISO-like or common date formats; fall back to today
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) {
    return new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  }
  // Return in basic UTC format YYYYMMDDTHHMMSSZ
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function generateICS({ title, description = "", start, end, location = "" }: IcsEvent) {
  const dtStart = formatDateForICS(start);
  const dtEnd = end ? formatDateForICS(end) : dtStart;
  const uid = `${Date.now()}@local`;
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//equip-for-excellence//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatDateForICS(new Date().toISOString())}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
  ];

  // If reminders were provided in the optional field reminders, add VALARM blocks
  const anyArg = (arguments[0] as unknown) as IcsEvent;
  const reminders = anyArg?.reminders ?? [];
  if (Array.isArray(reminders) && reminders.length > 0) {
    for (const mins of reminders) {
      // VALARM with TRIGGER negative duration before the event
      const trigger = `-PT${Math.abs(Math.round(mins))}M`;
      lines.push("BEGIN:VALARM");
      lines.push("ACTION:DISPLAY");
      lines.push(`DESCRIPTION:Reminder for ${title}`);
      lines.push(`TRIGGER:${trigger}`);
      lines.push("END:VALARM");
    }
  }

  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.join("\r\n");
}

export default generateICS;
