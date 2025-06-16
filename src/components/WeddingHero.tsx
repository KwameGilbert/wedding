import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface WeddingHeroProps {
  backgroundImage?: string;
  groomName?: string;
  brideName?: string;
  subtitle?: string;
  className?: string;
}

const WeddingHero = ({
  backgroundImage = "https://preview.colorlib.com/theme/twohearts/images/bg_1.jpg",
  groomName = "Rudolf",
  brideName = "Jemima",
  subtitle = "Are Getting Married",
  className = "",
}: WeddingHeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
      },
    },
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const heartVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "backOut",
        delay: 0.5,
      },
    },
  };

  const namesVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.1,
      },
    },
  };

  return (
    <section
      className={`relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden ${className}`}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition: "50% 0%",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/40 to-pink-500/57 opacity-40" />

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1100px] mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center h-full"
        >
          <div className="text-center w-full">
            {/* Heart Icon Circle */}
            <motion.div
              variants={heartVariants}
              className="relative mx-auto mb-4 w-[120px] h-[120px] bg-wedding-terracotta-400 rounded-full flex items-center justify-center z-0"
            >
            <img src="/logo.png" alt="" />
              <motion.div
                className="absolute inset-0 bg-wedding-terracotta-400/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Names */}
            <motion.h1
              variants={namesVariants}
              className="text-wedding-terracotta-500 text-center font-rochester text-6xl sm:text-7xl md:text-8xl lg:text-[102.4px] leading-tight mb-2"
              style={{
                fontFamily: "Rochester, cursive",
                lineHeight: "1.5",
              }}
            >
              {groomName} &amp; {brideName}
            </motion.h1>

            {/* Subtitle Badge */}
            <motion.span
              variants={subtitleVariants}
              className="inline-block bg-wedding-cream-100 text-wedding-terracotta-600 px-4 py-2 rounded-sm text-sm font-black tracking-[7px] uppercase relative"
              style={{
                fontSize: "14px",
                fontWeight: "900",
                letterSpacing: "7px",
                lineHeight: "25.2px",
              }}
            >
              {subtitle}
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-wedding-olive-400/40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          >
            <span className="text-2xl">🍃</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WeddingHero;
