import { motion } from "framer-motion";
import WeddingHero from "../components/WeddingHero";
import WeddingNavigation from "../components/WeddingNavigation";
import CountdownTimer from "../components/CountdownTimer";
import TimelineItem from "../components/TimelineItem";
import BrideGroomProfile from "../components/BrideGroomProfile";
import WeddingPartyCarousel from "../components/WeddingPartyCarousel";
import RSVPForm from "../components/RSVPForm";
import WhenWhereSection from "../components/WhenWhereSection";
import Gallery from "../components/Gallery";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Heart, Gift } from "lucide-react";

const Wedding = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50">
      {/* Wedding Navigation */}
      <WeddingNavigation />

      {/* Wedding Hero Section */}
      <section id="home-section" className="relative">
        <WeddingHero />

        {/* Countdown Timer - Positioned to span hero and next section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-20">
          <CountdownTimer />
        </div>
      </section>

      {/* Groom & Bride Section */}
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
              className="inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed"
              style={{
                color: "rgb(210, 145, 188)",
                borderColor: "rgb(210, 145, 188)",
              }}
            >
              About Bride &amp; Groom
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight"
              style={{ color: "rgb(210, 145, 188)" }}
            >
              Bride &amp; Groom
            </motion.h2>
          </motion.div>

          {/* Profiles */}
          <div className="space-y-12 lg:space-y-20">
            {/* Groom Profile */}
            <BrideGroomProfile
              name="Rudolf Agustus"
              description="A passionate photographer and adventure seeker, Rudolf captures life's most precious moments through his lens. When he's not behind the camera, you'll find him exploring new places, brewing the perfect cup of coffee, or planning the next surprise for Jemima. His infectious smile and warm heart make everyone around him feel like family."
              image="https://preview.colorlib.com/theme/twohearts/images/groom.jpg"
              isGroom={true}
              index={0}
            />

            {/* Bride Profile */}
            <BrideGroomProfile
              name="Jemima Reyes"
              description="A talented artist and creative soul, Jemima brings beauty and inspiration to everything she touches. Whether she's painting a masterpiece, designing something magical, or dancing to her favorite song, her creativity knows no bounds. Her kindness, grace, and radiant spirit light up every room she enters, making the world a more beautiful place."
              image="https://preview.colorlib.com/theme/twohearts/images/bride.jpg"
              isGroom={false}
              index={1}
            />
          </div>
        </div>
      </section>
      {/* Our Story Section - Timeline */}
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
      {/* Gallery Section */}
      <section id="gallery-section" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-rochester text-pink-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Memories
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Moments captured, memories treasured - Click any photo to view
            </motion.p>
          </div>

          <Gallery />
        </div>
      </section>

      {/* When & Where Section */}
      <section id="when-where-section">
        <WhenWhereSection />
      </section>

      {/* Greetings Section */}
      <motion.section
        id="greeting-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-rochester text-pink-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A Message From Our Hearts
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl italic">
              "We are so grateful for the love and support of our family and
              friends. Your presence in our lives has shaped who we are today,
              and we cannot imagine celebrating this special day without you."
            </p>
            <p>
              From the bottom of our hearts, thank you for being part of our
              journey. We look forward to celebrating with you and creating
              beautiful memories that will last a lifetime.
            </p>
            <p className="text-pink-600 font-semibold">
              With all our love,
              <br />
              Leonardo & Marianna
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Bridesmaid & Groomsmen Section */}
      <section id="people-section" className="py-20 px-4 bg-white">
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
              className="inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed"
              style={{
                color: "rgb(210, 145, 188)",
                borderColor: "rgb(210, 145, 188)",
              }}
            >
              Bridesmaid &amp; Groomsmen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight"
              style={{ color: "rgb(210, 145, 188)" }}
            >
              Family &amp; Friends
            </motion.h2>
          </motion.div>

          {/* Wedding Party Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <WeddingPartyCarousel />
          </motion.div>
        </div>
      </section>
      {/* RSVP Section */}
      <section
        id="rsvp-section"
        className="py-20 bg-gradient-to-r from-pink-100 via-purple-50 to-pink-100"
      >
        <RSVPForm />
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-pink-200 to-purple-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <Heart className="w-8 h-8 text-pink-600 mx-auto" />
            <h3 className="text-2xl font-rochester text-pink-700">
              Leonardo &amp; Marianna
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
    </div>
  );
};

export default Wedding;
