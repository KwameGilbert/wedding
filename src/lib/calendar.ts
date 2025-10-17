interface IcsEvent {
  title: string;
  description?: string;
  start: string; // human readable date string
  end?: string; // optional
  location?: string;
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
  return [
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
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export default generateICS;
