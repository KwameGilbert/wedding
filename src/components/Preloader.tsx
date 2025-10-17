import React from "react";
import SparkleRain from "./SparkleRain";
import { rudilogo } from "@/assets";

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: "#000", zIndex: 9999 }}>
      <SparkleRain zIndex={9998} />
      <div className="flex items-center justify-center flex-col">
        <img src={rudilogo} alt="logo" className="w-28 h-28 rounded-full mb-4" />
        <div className="text-wedding-cream-500 font-bold">Loading...</div>
      </div>
    </div>
  );
};

export default Preloader;
