import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import GalleryModal from "./GalleryModal";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  className?: string;
}

const Gallery = ({ className = "" }: GalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const galleryRef = useRef<HTMLDivElement>(null);
  const visibleCount = 1; // Show 1 image at a time by default

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
      alt: "Leonardo and Marianna's engagement photo",
      caption: "Our engagement day - the moment we said yes to forever",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      alt: "Romantic couple portrait",
      caption: "A quiet moment together during our engagement session",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
      alt: "Wedding rings on flowers",
      caption: "Our beautiful wedding rings, symbols of our eternal love",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?q=80&w=2074&auto=format&fit=crop",
      alt: "Bridal bouquet",
      caption: "Marianna's stunning bridal bouquet with pink roses",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2187&auto=format&fit=crop",
      alt: "Wedding venue setup",
      caption: "The beautiful ceremony setup at Garden Villa Resort",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1594736797933-d0bf7ba1b44e?q=80&w=2071&auto=format&fit=crop",
      alt: "Wedding dress detail",
      caption: "Details of Marianna's gorgeous wedding dress",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      alt: "Couple walking together",
      caption: "Taking our first steps into married life",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2187&auto=format&fit=crop",
      alt: "Wedding reception",
      caption: "Celebrating with our family and friends",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop",
      alt: "Bride and groom dancing",
      caption: "Our first dance as husband and wife",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
      alt: "Wedding cake",
      caption: "Our beautiful three-tier wedding cake",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
      alt: "Sunset couple portrait",
      caption: "Golden hour magic during our photo session",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069&auto=format&fit=crop",
      alt: "Wedding party group photo",
      caption: "With our amazing bridal party and groomsmen",
    },
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // auto-slide every 3s
    return () => clearInterval(interval);
  }, []);

  const sliderVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <>
      <div className={`relative overflow-hidden w-full ${className}`}>
        <div className="flex justify-center items-center gap-4 mb-4">
          <button
            onClick={prevSlide}
            className="bg-wedding-terracotta-800/30 text-white px-3 py-1 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="bg-black/30 text-white px-3 py-1 rounded-full"
          >
            ▶
          </button>
        </div>

        <div className="relative w-full h-[400px] overflow-hidden">
          <motion.div
            key={galleryImages[startIndex].id}
            className="absolute inset-0"
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            onClick={() => openModal(startIndex)}
          >
            <img
              src={galleryImages[startIndex].src}
              alt={galleryImages[startIndex].alt}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded">
              {galleryImages[startIndex].caption}
            </div>
          </motion.div>
        </div>
      </div>

      <GalleryModal
        images={galleryImages}
        isOpen={isModalOpen}
        currentIndex={currentImageIndex}
        onClose={closeModal}
        onNavigate={setCurrentImageIndex}
      />
    </>
  );
};

export default Gallery;
