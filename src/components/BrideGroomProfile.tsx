import { motion } from "framer-motion";

interface BrideGroomProfileProps {
  name: string;
  description: string;
  image: string;
  isGroom?: boolean;
  index: number;
}

const BrideGroomProfile = ({
  name,
  description,
  image,
  isGroom = false,
  index,
}: BrideGroomProfileProps) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      x: isGroom ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
        delay: index * 0.3 + 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col lg:flex-row w-full relative mb-8 lg:mb-0"
    >
      {/* Profile Image */}
      <motion.div
        variants={imageVariants}
        className={`w-full lg:w-[400px] h-[300px] lg:h-[400px] bg-cover bg-center bg-no-repeat ${
          isGroom
            ? "lg:order-2 lg:ml-12 lg:mr-auto"
            : "lg:order-1 lg:mr-12 lg:ml-auto"
        }`}
        style={{
          backgroundImage: `url("${image}")`,
          borderBottom: "14.6667px solid rgb(240, 217, 232)",
        }}
      />

      {/* Content Area */}
      <motion.div
        className={`relative pt-6 lg:pt-8 ${
          isGroom
            ? "lg:order-1 lg:text-right lg:pr-12"
            : "lg:order-2 lg:text-left lg:pl-12"
        } w-full lg:w-[calc(100%-400px)]`}
      >
        {/* Background Number/Letter */}
        <div
          className={`hidden lg:block absolute ${
            isGroom ? "right-5" : "left-5"
          } bottom-0 opacity-10 pointer-events-none`}
        >
          <span
            className="text-[100px] leading-none font-bold"
            style={{ color: "rgb(210, 145, 188)" }}
          >
            {isGroom ? "G" : "B"}
          </span>
        </div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
          className={`font-rochester text-3xl lg:text-5xl leading-tight mb-4 ${
            isGroom ? "lg:text-right" : "lg:text-left"
          } text-center lg:text-left`}
          style={{ color: "rgb(210, 145, 188)" }}
        >
          {name}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 + 0.6 }}
          className={`text-gray-600 leading-relaxed mb-4 ${
            isGroom ? "lg:text-right" : "lg:text-left"
          } text-center lg:text-left`}
        >
          {description}
        </motion.p>

        {/* Decorative Elements */}
        <div className="flex justify-center lg:justify-start items-center gap-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.3 + 0.8 + i * 0.1,
                ease: "backOut",
              }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "rgb(210, 145, 188)" }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BrideGroomProfile;
