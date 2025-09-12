import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const RSV = (probs: any) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      {/* RSVP Section */}
      <motion.section
        id="rsvp-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 bg-gradient-to-r from-pink-100 via-purple-50 to-pink-100"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-rochester text-4xl md:text-5xl leading-tight text-wedding-terracotta-500"
          >
            Will You Join Us?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your presence would make our special day even more meaningful.
            Please let us know if you can celebrate with us!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#rsvp-section">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
                RSVP Yes
              </Button>
            </a>
            <a href="/registry">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-pink-300 bg-white hover:bg-pink-50 text-pink-700 font-semibold px-8 py-4 text-lg rounded-full"
              >
                View Registry
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default RSV;
