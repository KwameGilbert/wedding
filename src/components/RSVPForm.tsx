import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send } from "lucide-react";
import { Button } from "./ui/button";

interface RSVPFormProps {
  className?: string;
}

const RSVPForm = ({ className = "" }: RSVPFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`text-center ${className}`}
      >
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
            className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Heart className="w-8 h-8 text-pink-600 fill-pink-600" />
          </motion.div>
          <h3
            className="text-2xl font-rochester mb-4"
            style={{ color: "rgb(210, 145, 188)" }}
          >
            Thank You!
          </h3>
          <p className="text-gray-600">
            We've received your RSVP and can't wait to celebrate with you on our
            special day!
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`max-w-[1100px] mx-auto px-4 ${className}`}
    >
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-5/12 px-4">
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-wedding-terracotta-600 border-wedding-terracotta-400"
            >
              Invitation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-rochester text-4xl lg:text-6xl leading-tight mb-4 text-wedding-terracotta-500"
            >
              Will You Attend?
            </motion.h2>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-3 py-2 bg-transparent text-gray-700 font-semibold text-base leading-6 border-0 border-b transition-all duration-150 ease-in-out focus:outline-none focus:ring-0"
                style={{
                  borderBottomColor: "rgba(210, 145, 188, 0.5)",
                  borderBottomWidth: "0.666667px",
                  borderBottomStyle: "solid",
                }}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-3 py-2 bg-transparent text-gray-700 font-semibold text-base leading-6 border-0 border-b transition-all duration-150 ease-in-out focus:outline-none focus:ring-0"
                style={{
                  borderBottomColor: "rgba(210, 145, 188, 0.5)",
                  borderBottomWidth: "0.666667px",
                  borderBottomStyle: "solid",
                }}
              />
            </motion.div>

            {/* Guest Count Dropdown */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 px-3 py-2 bg-transparent text-gray-700 font-semibold text-base leading-6 border-0 border-b transition-all duration-150 ease-in-out focus:outline-none focus:ring-0 appearance-none cursor-pointer"
                  style={{
                    borderBottomColor: "rgba(210, 145, 188, 0.5)",
                    borderBottomWidth: "0.666667px",
                    borderBottomStyle: "solid",
                  }}
                >
                  <option value="">Number of Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <span style={{ color: "rgb(210, 145, 188)" }}>▼</span>
                </div>
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 bg-transparent text-gray-700 font-semibold text-base leading-6 border-0 border-b transition-all duration-150 ease-in-out focus:outline-none focus:ring-0 resize-vertical"
                style={{
                  borderBottomColor: "rgba(210, 145, 188, 0.5)",
                  borderBottomWidth: "0.666667px",
                  borderBottomStyle: "solid",
                }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full lg:w-auto px-6 py-4 text-wedding-cream-50 font-normal text-base leading-6 uppercase tracking-wide rounded transition-all duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed bg-wedding-terracotta-500 border-wedding-terracotta-500 hover:bg-wedding-terracotta-600"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.09) 0px 24px 36px -11px",
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />I am attending
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>

        {/* Decorative Side Content */}
        <div className="hidden lg:block w-7/12 px-4">
          <motion.div
            variants={itemVariants}
            className="h-full flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-8xl mb-4 opacity-20"
              >
                💕
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed"
              >
                Your presence would make our special day even more meaningful.
                We can't wait to celebrate with you!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RSVPForm;
