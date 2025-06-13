import { useState } from "react";
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

  // Wedding photo gallery
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

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <div className={className}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openModal(index)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                >
                  <Eye className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Image Number */}
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        images={galleryImages}
        isOpen={isModalOpen}
        currentIndex={currentImageIndex}
        onClose={closeModal}
        onNavigate={navigateToImage}
      />
    </>
  );
};

export default Gallery;
