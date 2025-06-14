import { motion } from "framer-motion";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  image: string;
  isRight?: boolean;
  index: number;
}

const TimelineItem = ({
  date,
  title,
  description,
  image,
  isRight = false,
  index,
}: TimelineItemProps) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      x: isRight ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: index * 0.2 + 0.3,
      },
    },
  };

  return (
    <li className="relative mb-5 lg:mb-0 lg:-mt-12 first:mt-0">
      {/* Timeline Image */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute left-1/2 transform -translate-x-1/2 w-[120px] h-[120px] rounded-full bg-cover bg-center bg-no-repeat z-10 border-4 border-white shadow-lg"
        style={{
          backgroundImage: `url("${image}")`,
          top: "0px",
        }}
      />

      {/* Content Box */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`relative z-0 ${
          isRight
            ? "lg:float-right lg:text-left lg:ml-auto lg:pl-16"
            : "lg:float-left lg:text-right lg:mr-auto lg:pr-16"
        } w-full lg:w-[43%] p-6 lg:p-12 lg:pt-12 lg:pb-12`}
        style={{
          backgroundColor: "rgb(212, 116, 79)",
          boxShadow: "rgba(0, 0, 0, 0.36) 0px 10px 32px -19px",
        }}
      >
        {/* Large Background Number */}
        <div
          className={`absolute ${
            isRight ? "lg:right-5" : "lg:left-5"
          } top-0 -z-10 opacity-30`}
        >
          <span className="text-[120px] leading-none text-white/30 font-bold">
            {index + 1}
          </span>
        </div>

        {/* Content */}
        <div className={isRight ? "lg:text-left" : "lg:text-right"}>
          <span className="block text-wedding-cream-50 text-sm font-black uppercase tracking-wider mb-2 lg:mb-2">
            {date}
          </span>
          <h3 className="text-wedding-cream-50 font-rochester text-2xl lg:text-4xl leading-tight mb-2 lg:mb-4">
            {title}
          </h3>
        </div>

        <div className={isRight ? "lg:text-left" : "lg:text-right"}>
          <p className="text-wedding-cream-100/90 leading-relaxed text-sm lg:text-base">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Clear floats */}
      <div className="clear-both" />
    </li>
  );
};

export default TimelineItem;
