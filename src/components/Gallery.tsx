import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import GalleryModal from "./GalleryModal";
import { images } from "@/data/images";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardSpacing, setCardSpacing] = useState(150); // default mobile spacing

  // Dynamically adjust spacing based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setCardSpacing(250); // more spread on desktop
      } else {
        setCardSpacing(150); // tighter on mobile
      }
    };

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rotateCard = (index: number) => {
    const offset = index - activeIndex;
    return {
      x: offset * cardSpacing,
      scale: index === activeIndex ? 1 : 0.85,
      rotateY: offset * -25,
      zIndex: 10 - Math.abs(offset),
      opacity: Math.abs(offset) > 2 ? 0 : 1,
    };
  };

  const next = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const autoSlide = setInterval(next, 4000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            className="absolute w-[250px] h-[360px] bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            style={{ perspective: "1000px" }}
            animate={rotateCard(index)}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded">
              {img.caption}
            </div>
          </motion.div>
        ))}
      </div>

      <GalleryModal
        images={images}
        isOpen={isModalOpen}
        currentIndex={activeIndex}
        onClose={() => setIsModalOpen(false)}
        onNavigate={setActiveIndex}
      />
    </div>
  );
};

export default Gallery;
