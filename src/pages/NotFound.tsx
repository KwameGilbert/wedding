import { motion } from "framer-motion";
import { Home, ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const floatingElements = [
    { id: 1, delay: 0 },
    { id: 2, delay: 0.5 },
    { id: 3, delay: 1 },
    { id: 4, delay: 1.5 },
    { id: 5, delay: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream-100 via-white to-purple-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(244,114,182,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-wedding-olive-400 via-wedding-purple-500 to-wedding-olive-400 bg-clip-text text-transparent leading-none"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            404
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <Heart className="w-12 h-12 text-pink-400/30 fill-pink-400/30" />
            <span className="text-xl sm:text-2xl text-pink-600 font-light">
              Page Not Found
            </span>
            <Heart className="w-12 h-12 text-pink-400/30 fill-pink-400/30" />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-700 mb-6">
            Oops! Love took a wrong turn.
          </h2>
          <p className="text-lg sm:text-xl text-pink-600 max-w-2xl mx-auto leading-relaxed">
            Looks like you've wandered away from our love story. Don't worry,
            even cupid's arrows sometimes miss their mark. Let's get you back to
            the celebration!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-wedding-olive-500 to-wedding-purple-600 hover:from-wedding-olive-600 hover:to-wedding-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Wedding
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-pink-300 bg-pink-50 hover:bg-pink-100 text-pink-700 font-semibold px-8 py-4 text-lg rounded-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </motion.div>
      </div>

      {/* Floating Hearts */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${20 + index * 15}%`,
            top: `${20 + (index % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        >
          <Heart className="w-8 h-8 text-pink-300/30 fill-pink-300/30" />
        </motion.div>
      ))}

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3"
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-4xl">💕</div>
      </motion.div>
    </div>
  );
};

export default NotFound;
