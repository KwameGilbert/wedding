import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const members = [
  {
    name: "Michael Thompson",
    role: "Best Man",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop",
  },
  {
    name: "David Rodriguez",
    role: "Groomsman",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Groomsman",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Robert Kim",
    role: "Groomsman",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Sarah Johnson",
    role: "Maid of Honor",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b302?q=80&w=387&auto=format&fit=crop",
  },
  {
    name: "Emma Davis",
    role: "Bridesmaid",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Lisa Chen",
    role: "Bridesmaid",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=387&auto=format&fit=crop",
  },
  {
    name: "Anna Martinez",
    role: "Bridesmaid",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop",
  },
];

const cardVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const WeddingCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5); // default to 5

  const updateVisibleCards = () => {
    if (window.innerWidth < 640) {
      // Tailwind's sm breakpoint
      setVisibleCards(1);
    } else if (window.innerWidth < 1024) {
      // Tailwind's md to lg
      setVisibleCards(3);
    } else {
      setVisibleCards(5);
    }
  };

  useEffect(() => {
    updateVisibleCards(); // Set on mount
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % members.length);
  };

  const getVisibleMembers = () => {
    const extended = [...members, ...members];
    return extended.slice(startIndex, startIndex + visibleCards);
  };

  // ⏱ Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative px-4 py-10 max-w-6xl mx-auto">
      <div className="flex gap-6 justify-center overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          {getVisibleMembers().map((member, idx) => (
            <motion.div
              key={member.name + idx}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="border-[8px] border-wedding-terracotta-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[200px] h-[200px] object-cover"
                />
              </div>
              <h3 className="font-rochester text-xl lg:text-xl xl:text-2xl leading-tight mt-4 text-wedding-terracotta-500">
                {member.name}
              </h3>
              <p className="text-wedding-olive-600">{member.role}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {members.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === startIndex % members.length
                ? "bg-wedding-olive-600"
                : "bg-wedding-terracotta-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCarousel;
