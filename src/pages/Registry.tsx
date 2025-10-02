import { motion } from "framer-motion";
import { ArrowLeft, Heart, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import StripeGift from "./StripeGift";

const Registry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50">
      {/* Header */}
      <header className="bg-wedding-cream-100/80 backdrop-blur-sm border-b border-wedding-terracotta-200/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button
                variant="ghost"
                className="text-wedding-terracotta-600 hover:text-wedding-terracotta-700 hover:bg-wedding-cream-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Wedding
              </Button>
            </Link>

            <div className="text-center">
              <h1 className="text-2xl lg:text-3xl font-rochester text-wedding-terracotta-500">
                Wedding Registry
              </h1>
              <p className="text-sm text-gray-600">Rudolf & Jemima</p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-600">Wedding Date</p>
              <p className="font-semibold text-wedding-terracotta-600">
                March 7, 2026
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-5 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
            className="w-20 h-20 bg-gradient-to-br from-wedding-terracotta-400 to-wedding-olive-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Gift className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl lg:text-4xl font-rochester mb-4 text-wedding-terracotta-500"
          >
            Contribute to Our Wedding Gift Fund
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Your presence is the real gift, but if you’d like to contribute,
            we’ve made it simple below.
          </motion.p>
        </div>
      </motion.section>

      <StripeGift/>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-200 to-purple-200 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <Heart className="w-8 h-8 text-pink-600 mx-auto fill-pink-600" />
            <h3 className="text-2xl font-rochester text-pink-700">
              Thank You for Your Love & Support
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are so grateful for your thoughtfulness and generosity. Every
              gift, big or small, helps us start our married life together with
              joy and gratitude in our hearts.
            </p>
            <p className="text-sm text-gray-500">
              With love, Rudolf &amp; Jemima
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Registry;
