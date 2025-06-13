import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface WeddingPartyMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface WeddingPartyCarouselProps {
  className?: string;
}

const WeddingPartyCarousel = ({
  className = "",
}: WeddingPartyCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Wedding party data organized by groups
  const partyGroups = [
    {
      title: "Bridesmaids",
      members: [
        {
          name: "Sarah Johnson",
          role: "Maid of Honor",
          description:
            "Marianna's sister and best friend since childhood. A talented lawyer who always brings joy and laughter to every gathering.",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b612b302?q=80&w=387&auto=format&fit=crop",
        },
        {
          name: "Emma Davis",
          role: "Bridesmaid",
          description:
            "College roommate and lifelong friend. A creative designer who helped plan every detail of this beautiful wedding.",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Lisa Chen",
          role: "Bridesmaid",
          description:
            "Childhood friend and adventure buddy. A travel blogger who introduced Marianna to many wonderful places around the world.",
          image:
            "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=387&auto=format&fit=crop",
        },
        {
          name: "Anna Martinez",
          role: "Bridesmaid",
          description:
            "Work colleague turned dear friend. A marketing executive with an infectious smile and a heart full of love.",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop",
        },
      ],
    },
    {
      title: "Groomsmen",
      members: [
        {
          name: "Michael Thompson",
          role: "Best Man",
          description:
            "Leonardo's brother and partner in crime. A software engineer who always has the best advice and the worst dad jokes.",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop",
        },
        {
          name: "David Rodriguez",
          role: "Groomsman",
          description:
            "College best friend and photography mentor. A professional photographer who taught Leonardo everything he knows about capturing love.",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop",
        },
        {
          name: "James Wilson",
          role: "Groomsman",
          description:
            "Childhood friend and adventure seeker. A travel photographer who joins Leonardo on epic hiking and photography expeditions.",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Robert Kim",
          role: "Groomsman",
          description:
            "Work colleague and coffee enthusiast. A marketing director who shares Leonardo's passion for the perfect cup of coffee.",
          image:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=2070&auto=format&fit=crop",
        },
      ],
    },
  ];

  const slideVariants = {
    enter: {
      x: "100%",
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const memberVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={`text-center ${className}`}>
      {/* Pagination Dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center gap-2 mb-8"
      >
        {partyGroups.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300"
            style={{
              backgroundColor:
                index === currentSlide
                  ? "rgb(210, 145, 188)"
                  : "rgb(230, 230, 230)",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Carousel Content */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            {/* Group Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-rochester mb-8 lg:mb-12"
              style={{ color: "rgb(210, 145, 188)" }}
            >
              {partyGroups[currentSlide].title}
            </motion.h3>

            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {partyGroups[currentSlide].members.map((member, index) => (
                <motion.div
                  key={member.name}
                  custom={index}
                  variants={memberVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center group"
                >
                  {/* Member Photo */}
                  <motion.div
                    className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  {/* Member Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-700 mb-1">
                      {member.name}
                    </h4>
                    <p
                      className="text-sm font-medium mb-3 uppercase tracking-wider"
                      style={{ color: "rgb(210, 145, 188)" }}
                    >
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed px-2">
                      {member.description}
                    </p>
                  </motion.div>

                  {/* Decorative Heart */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="mt-4 flex justify-center"
                  >
                    <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 text-sm text-gray-500"
      >
        Click the dots above to switch between Bridesmaids and Groomsmen
      </motion.div>
    </div>
  );
};

export default WeddingPartyCarousel;
