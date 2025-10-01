import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { hero3 } from "@/assets";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple client validation
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Scroll to top after submit
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inputClass =
    "w-full h-12 px-3 py-2 border-b border-wedding-terracotta-400 focus:border-wedding-terracotta-600 bg-transparent text-gray-800 font-semibold focus:outline-none";

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // ✅ Thank You Screen
  if (isSubmitted) {
    return (
      <div className="relative h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage:`url(${hero3})`}}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`relative z-10 text-center ${className}`}
        >
          <div className="bg-wedding-cream-100 rounded-lg p-8 shadow-xl max-w-md mx-auto">
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
              We've received your RSVP and can't wait to celebrate with you on our special day!
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // ✅ Form Screen
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${hero3})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-wedding-terracotta-900/50 to-wedding-olive-700/40" />

      {/* Form Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`relative z-10 max-w-[1100px] w-full mx-auto px-4 ${className}`}
      >
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-6/12 px-4">
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-6 text-center lg:text-left">
              <span className="inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-wedding-cream-100 border-wedding-terracotta-300">
                Invitation
              </span>
              <h2 className="font-rochester text-4xl lg:text-6xl leading-tight mb-4 text-wedding-cream-100">
                Will You Attend?
              </h2>
            </motion.div>

            {/* Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4 bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            >
              <label>
                <span className="sr-only">Full Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                />
              </label>

              <label>
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                />
              </label>

              <label>
                <span className="sr-only">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                />
              </label>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-wedding-terracotta-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-wedding-terracotta-600 transition disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Confirm Attendance
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RSVPForm;
