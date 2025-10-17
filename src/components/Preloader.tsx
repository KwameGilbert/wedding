import React from "react";
import { motion } from "framer-motion";
import SparkleRain from "./SparkleRain";
import { rudilogo } from "@/assets";

const Preloader: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center" 
      style={{ background: "#000", zIndex: 9999 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <SparkleRain zIndex={9998} />
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
          className="w-28 h-28 rounded-full mb-4" 
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
