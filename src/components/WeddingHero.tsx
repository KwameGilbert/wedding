import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hero1, hero10, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9 } from "@/assets";

interface WeddingHeroProps {
  images?: string[];
  groomName?: string;
  brideName?: string;
  subtitle?: string;
  className?: string;
}

const WeddingHero = ({
  images = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
    hero7,
    hero8,
    hero9,
    hero10,
  ],
  groomName = "Rudolf",
  brideName = "Jemima",
  subtitle = "Are Getting Married",
  className = "",
}: WeddingHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className={`relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden ${className}`}
    >
      {/* Carousel Backgrounds */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
  </AnimatePresence>
  <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-wedding-terracotta-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1100px] mx-auto px-4 flex items-center justify-center">
        <div className="text-center">
          {/* Wedding Logo */}
          {/* <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut", delay: 0.3 }}
            className="relative mx-auto mb-8 w-[140px] h-[140px] rounded-full flex items-center justify-center"
          >
            <img
              src="/src/assets/rudilogo.jpg"
              alt="Rudolf & Jemima Wedding Logo"
              className="w-28 h-28 object-contain relative z-10"
            />
            <motion.div
              className="absolute inset-0 bg-wedding-terracotta-400/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div> */}

          {/* Names */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-wedding-cream-500 font-rochester text-6xl sm:text-7xl md:text-8xl lg:text-[102.4px] mb-2"
            style={{
              fontFamily: "Rochester, cursive",
              lineHeight: "1.5",
            }}
          >
            {groomName} &amp; {brideName}
          </motion.h1>

          {/* Subtitle */}
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="inline-block bg-wedding-cream-100 text-wedding-terracotta-500 px-4 py-2 rounded-sm text-sm font-black tracking-[7px] uppercase"
          >
            {subtitle}
          </motion.span>
        </div>
      </div>

      {/* Floating Leaves */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
      </div> */}
    </section>
  );
};

export default WeddingHero;
