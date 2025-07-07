import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Success() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Anonymous";
  const amount = searchParams.get("amount") || "0";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-amber-50 px-4 text-center">
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="bg-pink-100 text-pink-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md"
      >
        <Heart className="w-10 h-10 fill-pink-600" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold text-wedding-terracotta-600 mb-2"
      >
        Thank You, {name}!
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-700 text-lg max-w-md"
      >
        Your generous contribution of <span className="font-semibold text-rose-600">€{amount}</span> has been received. 
        We are truly grateful for your love and support!
      </motion.p>

      {/* Button to go back */}
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
