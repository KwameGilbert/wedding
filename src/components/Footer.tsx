import { rudilogo } from "@/assets";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-r from-wedding-cream-300 to-wedding-olive-400">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <img 
              src={rudilogo} 
              alt="Rudolf & Jemima Wedding Logo" 
              className="w-16 h-16 object-contain mx-auto rounded-lg border-white border-2 shadow-lg bg-white"
            />
            <h3 className="text-2xl font-rochester text-pink-700">
              Rudolf &amp; Jemima
            </h3>
            <p className="text-gray-600">
              Thank you for being part of our love story
            </p>
            <p className="text-sm text-gray-500">
              June 15, 2024 • Garden Villa Resort
            </p>
          </motion.div>
        </div>
      </footer>
  )
}

export default Footer