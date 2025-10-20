import { motion } from "framer-motion";
import WeddingNavigation from "../components/Navbar";
import Footer from "@/components/Footer";
import SparkleRain from "@/components/SparkleRain";
import { hero3, hero7, hero8, hero10 } from "@/assets";

const Greetings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <SparkleRain showBackground={false} />
      <WeddingNavigation />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-28 pb-12 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-rochester text-4xl md:text-5xl leading-tight text-wedding-terracotta-500 mb-6"
          >
            A Message From Our Hearts
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl italic">
              "We are so grateful for the love and support of our family and friends. Your presence in our lives has shaped who we are today, and we cannot imagine celebrating this special day without you."
            </p>
            <p>
              From the bottom of our hearts, thank you for being part of our journey. We look forward to celebrating with you and creating beautiful memories that will last a lifetime.
            </p>
            <p className="text-wedding-olive-600 font-semibold">
              With all our love,
              <br />
              Rudulf & Jemima
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Gallery */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-xl border border-gray-700">
            <img src={hero3} alt="Couple" className="w-full h-64 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-hidden rounded-xl border border-gray-700">
            <img src={hero7} alt="Bride" className="w-full h-64 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="overflow-hidden rounded-xl border border-gray-700">
            <img src={hero8} alt="Moments" className="w-full h-64 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="overflow-hidden rounded-xl border border-gray-700">
            <img src={hero10} alt="Joy" className="w-full h-64 object-cover" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Greetings;
