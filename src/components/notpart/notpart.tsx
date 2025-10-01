import React from 'react'
import { motion } from "framer-motion"
import Gallery from "./Gallery"

const NotPart = () => {
  return (
    <div>
           {/* Gallery Section */}
      <section id="gallery-section" className="py-10 px-4 bg-white">
        <section id="groom-bride-section" className="pt-32 pb-20 px-4 bg-white">
          <div className="max-w-[1100px] mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-wedding-terracotta-600 border-wedding-terracotta-400"
              >
                Moments captured, memories treasured - Click any photo to view
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight text-wedding-terracotta-500"
              >
                Our Memories
              </motion.h2>
            </motion.div>
            <Gallery />
          </div>
        </section>
      </section>



          {/* Bridesmaid & Groomsmen Section */}
      <section id="people-section" className="py-20 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-wedding-terracotta-600 border-wedding-terracotta-400"
            >
              Bridesmaid &amp; Groomsmen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight mb-4 text-wedding-terracotta-500"
            >
              Family &amp; Friends
            </motion.h2>
          </motion.div> */}

          {/* Wedding Party Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* <WeddingPartyCarousel /> */}
          </motion.div>
        </div>
      </section>



      
    </div>
  )
}

export default NotPart