import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Phone, MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface WhatsAppFormData {
  name: string;
  phone: string;
  message: string;
}

const HelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [formData, setFormData] = useState<WhatsAppFormData>({
    name: "",
    phone: "",
    message: "",
  });

  const handlePhoneClick = () => {
    // Open phone contacts
    window.open("tel:+1-555-123-4567", "_self");
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    setShowWhatsAppForm(true);
    setIsOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Hi! I'm ${formData.name}.\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/15551234567?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form and close
    setFormData({ name: "", phone: "", message: "" });
    setShowWhatsAppForm(false);
  };

  const handleInputChange = (field: keyof WhatsAppFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Main Help Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <HelpCircle className="w-6 h-6" />
          )}
        </motion.button>

        {/* Phone and WhatsApp buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3"
            >
              {/* Phone Button */}
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.1 }}
                onClick={handlePhoneClick}
                className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
              </motion.button>

              {/* WhatsApp Button */}
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2 }}
                onClick={handleWhatsAppClick}
                className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* WhatsApp Form Modal */}
      <AnimatePresence>
        {showWhatsAppForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowWhatsAppForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800 border border-eek-blue-400/20 rounded-2xl p-6 w-full max-w-md shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Contact via WhatsApp
                    </h3>
                    <p className="text-sm text-gray-400">
                      Send us a quick message
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowWhatsAppForm(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white text-sm">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-slate-700/50 border-eek-blue-400/30 text-white placeholder-gray-400 focus:border-eek-blue-400"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white text-sm">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-slate-700/50 border-eek-blue-400/30 text-white placeholder-gray-400 focus:border-eek-blue-400"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white text-sm">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="bg-slate-700/50 border-eek-blue-400/30 text-white placeholder-gray-400 focus:border-eek-blue-400 min-h-[80px]"
                    placeholder="How can we help you with your solar energy needs?"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowWhatsAppForm(false)}
                    className="flex-1 border-white/20 bg-white/10 hover:bg-white/20 text-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send to WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip Labels */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-6 right-20 z-40 flex flex-col gap-3 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.15 }}
              className="bg-slate-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg border border-eek-blue-400/20 mt-12"
            >
              Call Us
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.25 }}
              className="bg-slate-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg border border-eek-blue-400/20"
            >
              WhatsApp
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HelpWidget;
