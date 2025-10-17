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
  color: string;
}

const SparkleRain = ({ zIndex = 10 }: { zIndex?: number } = {}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Specific colors for gift page
  const palette = ["#FFD700", "#FFB400", "#FFFFFF"]; // gold, amber, white

  useEffect(() => {
    // Generate sparkles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 40;
    
    const newSparkles: Sparkle[] = Array.from({ length: particleCount }, (_, i) => {
      const size = 10 + Math.random() * 18; // 10-28px
      return {
        id: i,
        x: Math.random() * 100, // percentage across screen
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 8, // 8-16 seconds
        size,
        opacity: 0.6 + Math.random() * 0.4, // 0.6-1.0 for stronger visibility
        drift: -20 + Math.random() * 40, // -20 to 20px horizontal drift
        rotation: Math.random() * 360,
        type: ["star", "sparkle", "diamond"][Math.floor(Math.random() * 3)] as "star" | "sparkle" | "diamond",
        color: palette[Math.floor(Math.random() * palette.length)],
      };
    });

    setSparkles(newSparkles);
    
    // Force re-render on window resize to ensure particles are properly positioned
    const handleResize = () => {
      setSparkles([]);
      setTimeout(() => {
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 25 : 40;
        
        const newSparkles: Sparkle[] = Array.from({ length: particleCount }, (_, i) => {
          const size = 10 + Math.random() * 18; // 10-28px
          return {
            id: i,
            x: Math.random() * 100, // percentage across screen
            delay: Math.random() * 5,
            duration: 8 + Math.random() * 8, // 8-16 seconds
            size,
            opacity: 0.6 + Math.random() * 0.4, // 0.6-1.0 for stronger visibility
            drift: -20 + Math.random() * 40, // -20 to 20px horizontal drift
            rotation: Math.random() * 360,
            type: ["star", "sparkle", "diamond"][Math.floor(Math.random() * 3)] as "star" | "sparkle" | "diamond",
            color: palette[Math.floor(Math.random() * palette.length)],
          };
        });
        
        setSparkles(newSparkles);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSparkleSvg = (type: string, size: number, color: string) => {
    const common = { width: size, height: size };
    switch (type) {
      case "star":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l2.9 6.24L21 9.27l-5 3.86L17.8 21 12 17.77 6.2 21 8 13.13 3 9.27l6.1-1.03L12 2z" fill={color} />
          </svg>
        );
      case "diamond":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l7 7-7 13L5 9l7-7z" fill={color} />
          </svg>
        );
      case "sparkle":
      default:
        return (
          <svg {...common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l1.5 3.5L17 7l-3.5 1.5L12 12l-1.5-3.5L7 7l3.5-1.5L12 2z" fill={color} />
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex }}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: "-50px",
            fontSize: `${sparkle.size}px`,
            opacity: sparkle.opacity,
            // Enhanced glow effect based on particle color
            filter: `drop-shadow(0 0 ${Math.max(5, sparkle.size / 4)}px ${sparkle.color})`,
            willChange: "transform",
          }}
          initial={{
            y: -50,
            x: 0,
            rotate: sparkle.rotation,
          }}
          animate={{
            y: ["120vh", "100vh", "120vh"],
            x: [sparkle.drift, sparkle.drift * -0.5, sparkle.drift],
            rotate: sparkle.rotation + 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.span
            style={{ display: "inline-block", lineHeight: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [sparkle.opacity, Math.min(1, sparkle.opacity * 1.3), sparkle.opacity],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* glow layer (blurred, behind) */}
            <span style={{ display: "inline-block", transform: "translateZ(0)", filter: `blur(${Math.max(6, sparkle.size / 5)}px)`, opacity: 0.85 }} aria-hidden>
              {getSparkleSvg(sparkle.type, Math.round(sparkle.size * 1.3), sparkle.color)}
            </span>
            {/* crisp foreground */}
            <span style={{ display: "inline-block", position: "relative", top: 0, left: 0 }}>
              {getSparkleSvg(sparkle.type, sparkle.size, sparkle.color)}
            </span>
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default SparkleRain;
