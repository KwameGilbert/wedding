import { motion } from "framer-motion";
import TimelineItem from './TimelineItem'

const Story = () => {
  return (
   <section
        id="lovestory-section"
        className="relative py-20 lg:py-32 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/twohearts/images/bg_2.jpg")`,
          backgroundPosition: "50% 50%",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center mb-12 lg:mb-16"
          >
            <div className="w-full text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block text-sm font-black uppercase tracking-wider text-white border-b border-dashed border-pink-300 pb-1 mb-2"
                style={{ borderColor: "rgb(210, 145, 188)" }}
              >
                Love Story
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight mb-4"
              >
                Timeline of Love
              </motion.h2>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line - Hidden on mobile, visible on large screens */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-white/30" />

            <ul className="relative space-y-8 lg:space-y-20">
              <TimelineItem
                date="June 10, 2017"
                title="First We Meet"
                description="It was a rainy afternoon in a cozy downtown coffee shop. Rudolf was capturing the perfect shot of raindrops on windows while Jemima sketched the bustling street scene. When their eyes met across the crowded café, time stood still."
                image="https://preview.colorlib.com/theme/twohearts/images/couple-1.jpg"
                isRight={false}
                index={0}
              />

              <TimelineItem
                date="June 15, 2017"
                title="First Date"
                description="Our first official date was a sunset walk along the beach. We talked for hours about our dreams, passions, and discovered how perfectly our souls aligned. That evening, we both knew something magical was beginning."
                image="https://preview.colorlib.com/theme/twohearts/images/couple-2.jpg"
                isRight={true}
                index={1}
              />

              <TimelineItem
                date="August 20, 2017"
                title="In A Relationship"
                description="Under the stars on a warm summer night, we officially became a couple. It was during a romantic picnic where Rudolf had prepared all of Jemima's favorite foods, and she surprised him with a sketch of their first meeting."
                image="https://preview.colorlib.com/theme/twohearts/images/couple-3.jpg"
                isRight={false}
                index={2}
              />

              <TimelineItem
                date="May 10, 2023"
                title="We're Engaged"
                description="On the same beach where we had our first date, during a breathtaking sunset, Rudolf got down on one knee. With tears of joy and overwhelming love, Jemima said yes to forever. Our love story was ready for its next beautiful chapter."
                image="https://preview.colorlib.com/theme/twohearts/images/couple-4.jpg"
                isRight={true}
                index={3}
              />

              <TimelineItem
                date="June 15, 2024"
                title="Our Wedding Day"
                description="Today we celebrate our love surrounded by family and friends. This is not the end of our story, but the beginning of our greatest adventure together as husband and wife. Here's to forever and always."
                image="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop"
                isRight={false}
                index={4}
              />
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Story