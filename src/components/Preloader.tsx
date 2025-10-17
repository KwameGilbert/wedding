import React, { useEffect, useState } from "react";
import SparkleRain from "./SparkleRain";
import { rudilogo } from "@/assets";

const Preloader: React.FC = () => {
  const [scale, setScale] = useState(0.8);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScale(prev => prev === 0.8 ? 1 : 0.8);
    }, 800);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: "#000", zIndex: 9999 }}>
      <SparkleRain zIndex={9998} />
      <div className="flex items-center justify-center flex-col">
        <img 
          src={rudilogo} 
          alt="logo" 
          className="w-28 h-28 rounded-full shadow-lg" 
          style={{ 
            transform: `scale(${scale})`,
            transition: 'transform 0.8s ease-in-out',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
