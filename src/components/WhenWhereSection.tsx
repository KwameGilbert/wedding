import { motion } from "framer-motion";
import { MapPin, Phone, Calendar, Clock } from "lucide-react";

interface EventDetailsProps {
  title: string;
  date: string;
  time: string;
  address: string;
  phone: string;
  mapUrl: string;
  icon: React.ReactNode;
  index: number;
}

const EventDetails = ({
  title,
  date,
  time,
  address,
  phone,
  mapUrl,
  icon,
  index,
}: EventDetailsProps) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex justify-center w-full lg:w-1/2 px-4"
    >
      <div className="text-center max-w-sm">
        {/* Icon Circle */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.6,
            ease: "backOut",
            delay: index * 0.2 + 0.3,
          }}
          className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.75) 0px 10px 32px -30px",
            color: "rgb(210, 145, 188)",
          }}
        >
          <span className="text-5xl leading-none">{icon}</span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
          className="text-2xl lg:text-[28px] leading-tight mb-2 text-gray-900 font-semibold"
        >
          {title}
        </motion.h3>

        {/* Date & Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
          className="mb-4 text-gray-700"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
        </motion.div>

        {/* Address */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
          className="mb-4 text-gray-600 leading-relaxed"
        >
          <MapPin className="w-4 h-4 inline mr-1" />
          {address}
        </motion.p>

        {/* Phone */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
          className="mb-4"
        >
          <a
            href={`tel:${phone}`}
            className="transition-colors duration-300 hover:opacity-80"
            style={{ color: "rgb(210, 145, 188)" }}
          >
            <Phone className="w-4 h-4 inline mr-1" />
            {phone}
          </a>
        </motion.p>

        {/* See Map Button */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
          className="mb-4"
        >
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-80"
            style={{
              color: "rgb(210, 145, 188)",
              borderBottom: "0.666667px solid rgb(240, 217, 232)",
            }}
          >
            See Map
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
};

interface WhenWhereSectionProps {
  className?: string;
}

const WhenWhereSection = ({ className = "" }: WhenWhereSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      className={`py-12 px-4 ${className}`}
      style={{ backgroundColor: "rgb(241, 243, 244)" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap -mx-4"
      >
        {/* Section Header */}
        <div className="w-full px-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-wedding-terracotta-600 border-wedding-terracotta-400"
            >
              Planning
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight"
              style={{ color: "rgb(210, 145, 188)" }}
            >
              When &amp; Where
            </motion.h2>
          </motion.div>
        </div>

        {/* Event Details */}
        <div className="w-full px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-4 justify-center">
            <EventDetails
              title="The Ceremony"
              date="Saturday, June 15, 2024"
              time="4:00 PM - 5:00 PM"
              address="Garden Villa Resort, 123 Romantic Lane, Love City, CA 90210"
              phone="+1 (555) 123-4567"
              mapUrl="https://maps.google.com/?q=Garden+Villa+Resort+123+Romantic+Lane+Love+City+CA"
              icon="💒"
              index={0}
            />

            <EventDetails
              title="The Reception"
              date="Saturday, June 15, 2024"
              time="6:00 PM - 11:00 PM"
              address="Garden Villa Resort, 123 Romantic Lane, Love City, CA 90210"
              phone="+1 (555) 123-4567"
              mapUrl="https://maps.google.com/?q=Garden+Villa+Resort+123+Romantic+Lane+Love+City+CA"
              icon="🍾"
              index={1}
            />
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full px-4 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.765892!2d-118.2576!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE1JzI3LjQiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            />
          </motion.div>

          {/* Map Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-6 space-y-2"
          >
            <h4 className="text-lg font-semibold text-gray-800">
              Garden Villa Resort
            </h4>
            <p className="text-gray-600">
              123 Romantic Lane, Love City, CA 90210
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span>Parking Available</span>
              <span>•</span>
              <span>Wheelchair Accessible</span>
              <span>•</span>
              <span>Garden Setting</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhenWhereSection;
