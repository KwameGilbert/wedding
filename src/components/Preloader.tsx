import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SparkleRain from "./SparkleRain";
import { rudilogo } from "@/assets";

const Preloader: React.FC = () => {
  // Force a re-render after component mounts to ensure animations work
  useEffect(() => {
    const timer = setTimeout(() => {
      // This forces a re-render
      window.dispatchEvent(new Event('resize'));
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800" 
      style={{ zIndex: 9999 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <SparkleRain zIndex={9998} showBackground={false} />
      <motion.div 
        className="flex items-center justify-center flex-col"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.img 
          src={rudilogo} 
          alt="Rudolf & Jemima Wedding Logo" 
          className="w-28 h-28 rounded-full mb-6 shadow-2xl z-[9999]" 
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.h1
          className="text-3xl font-rochester text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Rudolf & Jemima
        </motion.h1>
        
        <motion.p
          className="text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Wedding Celebration
        </motion.p>
        
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
