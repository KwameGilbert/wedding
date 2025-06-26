import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate?: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({
  targetDate = "2024-06-15T16:00:00", // June 15, 2024 at 4:00 PM
  className = "",
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, [targetDate]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`relative w-full bg-wedding-terracotta-500 rounded shadow-lg flex ${className}`}
    >
      {/* Save the Day Section */}
      <motion.div
        variants={itemVariants}
        className="w-1/5 bg-wedding-olive-500 flex items-center justify-center py-2 text-wedding-cream-50 text-center"
      >
        <h3 className="font-rochester text-lg sm:text-xl md:text-3xl leading-tight text-center w-full px-2">
          <span>Save</span>
          <br />
          <span>the Day</span>
        </h3>
      </motion.div>

      {/* Days */}
      <motion.div
        variants={itemVariants}
        className="w-1/5 flex flex-col items-center justify-center py-2 text-white text-center border-l border-white/20"
      >
        <span className="font-rochester text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          {timeLeft.days.toString().padStart(2, "0")}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider mt-1">
          Days
        </span>
      </motion.div>

      {/* Hours */}
      <motion.div
        variants={itemVariants}
        className="w-1/5 flex flex-col items-center justify-center py-2 text-white text-center border-l border-white/20"
      >
        <span className="font-rochester text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          {timeLeft.hours.toString().padStart(2, "0")}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider mt-1">
          Hours
        </span>
      </motion.div>

      {/* Minutes */}
      <motion.div
        variants={itemVariants}
        className="w-1/5 flex flex-col items-center justify-center py-2 text-white text-center border-l border-white/20"
      >
        <span className="font-rochester text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider mt-1">
          Minutes
        </span>
      </motion.div>

      {/* Seconds */}
      <motion.div
        variants={itemVariants}
        className="w-1/5 flex flex-col items-center justify-center py-2 text-white text-center border-l border-white/20"
      >
        <motion.span
          key={timeLeft.seconds}
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-rochester text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
        >
          {timeLeft.seconds.toString().padStart(2, "0")}
        </motion.span>
        <span className="text-xs font-semibold uppercase tracking-wider mt-1">
          Seconds
        </span>
      </motion.div>

      {/* Animated Hearts */}
      <div className="absolute -top-2 -left-2 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-4 h-4 text-wedding-olive-300"
        >
          ❤️
        </motion.div>
      </div>

      <div className="absolute -bottom-2 -right-2 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="w-4 h-4 text-wedding-olive-300"
        >
          💕
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
