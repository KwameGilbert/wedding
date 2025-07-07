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
            <Heart className="w-8 h-8 text-wedding-terracotta-600 mx-auto" />
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