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
    phone: "",
    hasPartner: "",
    partnerName: "",
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
        <div className="bg-wedding-cream-100 rounded-lg p-8 shadow-lg max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
            className="w-16 h-16 bg-wedding-olive-200 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span className="text-2xl">🍃</span>
          </motion.div>
          <h3 className="text-2xl font-rochester mb-4 text-wedding-terracotta-600">
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
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-3 py-2 bg-transparent text-gray-700 font-semibold text-base leading-6 border-0 border-b transition-all duration-150 ease-in-out focus:outline-none focus:ring-0 border-wedding-terracotta-300 focus:border-wedding-terracotta-500"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-3 py-2 bg-transparent text-gray-700 font-semibold text-base leading-6 border-0 border-b transition-all duration-150 ease-in-out focus:outline-none focus:ring-0 border-wedding-terracotta-300 focus:border-wedding-terracotta-500"
              />
            </motion.div>

            {/* Phone Field */}
            <motion.div variants={itemVariants}>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-3 py-2 bg-transparent text-gray-700 font-semibold text-base leading-6 border-0 border-b transition-all duration-150 ease-in-out focus:outline-none focus:ring-0 border-wedding-terracotta-300 focus:border-wedding-terracotta-500"
              />
            </motion.div>

            {/* Partner Question */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Are you coming with a partner?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="hasPartner"
                    value="yes"
                    checked={formData.hasPartner === "yes"}
                    onChange={handleInputChange}
                    className="mr-2 text-wedding-terracotta-500 focus:ring-wedding-terracotta-400"
                  />
                  <span className="text-wedding-terracotta-600 font-medium">
                    Yes
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="hasPartner"
                    value="no"
                    checked={formData.hasPartner === "no"}
                    onChange={handleInputChange}
                    className="mr-2 text-wedding-terracotta-500 focus:ring-wedding-terracotta-400"
                  />
                  <span className="text-wedding-terracotta-600 font-medium">
                    No
                  </span>
                </label>
              </div>
            </motion.div>

            {/* Partner Name Field - Show only if "yes" is selected */}
            {formData.hasPartner === "yes" && (
              <motion.div
                variants={itemVariants}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  name="partnerName"
                  placeholder="Partner's Full Name"
                  value={formData.partnerName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 px-3 py-2 bg-transparent text-gray-700 font-semibold text-base leading-6 border-0 border-b transition-all duration-150 ease-in-out focus:outline-none focus:ring-0 border-wedding-terracotta-300 focus:border-wedding-terracotta-500"
                />
              </motion.div>
            )}

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
                    <div className="w-4 h-4 border-2 border-wedding-cream-50 border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Confirm Attendance
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
                🍃
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
