import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export default function Cancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-rose-50 to-amber-50 px-4 text-center">
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 12 }}
        className="bg-rose-100 text-rose-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md"
      >
        <XCircle className="w-10 h-10" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold text-rose-600 mb-2"
      >
        Payment Cancelled
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-700 text-lg max-w-md"
      >
        It looks like your gift wasn’t completed. Don’t worry, you can try again anytime.
      </motion.p>

      {/* Return Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-8"
      >
        <Link to="/">
          <button className="bg-wedding-terracotta-500 hover:bg-wedding-terracotta-600 text-white px-6 py-3 rounded-full shadow transition">
            Back to Wedding Page
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
