import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  drift: number;
  rotation: number;
  type: "star" | "sparkle" | "diamond";
}

const SparkleRain = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate sparkles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 40;
    
    const newSparkles: Sparkle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across screen
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 8, // 8-16 seconds
      size: 8 + Math.random() * 16, // 8-24px
      opacity: 0.3 + Math.random() * 0.5, // 0.3-0.8
      drift: -20 + Math.random() * 40, // -20 to 20px horizontal drift
      rotation: Math.random() * 360,
      type: ["star", "sparkle", "diamond"][Math.floor(Math.random() * 3)] as "star" | "sparkle" | "diamond",
    }));

    setSparkles(newSparkles);
  }, []);

  const getSparkleIcon = (type: string) => {
    switch (type) {
      case "star":
        return "⭐";
      case "sparkle":
        return "✨";
      case "diamond":
        return "💎";
      default:
        return "✨";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: "-50px",
            fontSize: `${sparkle.size}px`,
            opacity: sparkle.opacity,
            filter: "drop-shadow(0 0 3px rgba(251, 191, 36, 0.6))",
            willChange: "transform",
          }}
          initial={{
            y: -50,
            x: 0,
            rotate: sparkle.rotation,
          }}
          animate={{
            y: "120vh",
            x: sparkle.drift,
            rotate: sparkle.rotation + 360,
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              opacity: [sparkle.opacity, sparkle.opacity * 1.3, sparkle.opacity],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {getSparkleIcon(sparkle.type)}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default SparkleRain;
