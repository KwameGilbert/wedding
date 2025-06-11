import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gradient: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Digital Innovation Experts",
    subtitle: "EEK - Engineering Excellence",
    description:
      "Transform your vision into powerful digital solutions with cutting-edge technology and exceptional design.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    gradient: "from-eek-blue-500/20 via-eek-blue-600/20 to-eek-blue-700/20",
  },
  {
    id: 2,
    title: "Advanced Technology Stack",
    subtitle: "Modern Development Solutions",
    description:
      "Leverage React, TypeScript, and cloud technologies to build scalable applications that drive business growth.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
    gradient: "from-eek-blue-400/20 via-eek-blue-500/20 to-eek-blue-600/20",
  },
  {
    id: 3,
    title: "Enterprise-Grade Solutions",
    subtitle: "Scalable & Secure",
    description:
      "Build robust applications designed for enterprise scale with industry-leading security and performance standards.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    gradient: "from-eek-blue-600/20 via-eek-blue-700/20 to-eek-blue-800/20",
  },
  {
    id: 4,
    title: "Future-Ready Applications",
    subtitle: "Innovation Meets Excellence",
    description:
      "Experience the next generation of digital solutions with AI-powered features and intuitive user interfaces.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    gradient: "from-eek-blue-300/20 via-eek-blue-500/20 to-eek-blue-700/20",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const slideVariants = {
    enter: {
      y: "100%",
      opacity: 0,
      scale: 1.1,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const contentVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`}
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8"
            >
              {/* Subtitle with icon */}
              <motion.div
                custom={0}
                variants={textVariants}
                className="flex items-center justify-center gap-2 text-eek-blue-400 font-medium tracking-wide"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-sm sm:text-base uppercase">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                custom={1}
                variants={textVariants}
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                custom={2}
                variants={textVariants}
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                custom={3}
                variants={textVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-eek-blue-400/30 bg-eek-blue-400/10 backdrop-blur-sm hover:bg-eek-blue-400/20 text-eek-blue-400 font-semibold px-8 py-4 text-lg rounded-full"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-6">
          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-eek-blue-400 shadow-lg shadow-eek-blue-400/50"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className={`p-2 rounded-full transition-all duration-300 ${
              isAutoPlay
                ? "bg-eek-blue-500/20 text-eek-blue-400"
                : "bg-white/10 text-white/70 hover:text-white"
            }`}
          >
            <Play
              className={`w-4 h-4 ${isAutoPlay ? "opacity-100" : "opacity-50"}`}
            />
          </button>
        </div>
      </div>

      {/* Next Slide Hint */}
      <motion.button
        onClick={nextSlide}
        className="absolute bottom-4 right-8 text-white/50 hover:text-eek-blue-400 transition-colors duration-300 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-eek-blue-400 to-eek-blue-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
