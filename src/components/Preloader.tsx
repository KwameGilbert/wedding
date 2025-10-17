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
      className="fixed inset-0 flex items-center justify-center" 
      style={{ background: "#000000", zIndex: 9999 }}
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
          alt="logo" 
          className="w-28 h-28 rounded-full mb-4 z-[9999]" 
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
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
