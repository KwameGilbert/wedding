import { motion } from "framer-motion";
import WeddingHero from "../components/WeddingHero";
import WeddingNavigation from "../components/Navbar";
import CountdownTimer from "../components/CountdownTimer";
import BrideGroomProfile from "../components/BrideGroomProfile";
import RSVPForm from "../components/RSVPForm";
import WhenWhereSection from "../components/WhenWhereSection";
import HotelsSection from "../components/HotelsSection";
import RSV from "@/components/RSV";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/Drawer";
import Gift from "@/components/Gifticon";
import SparkleRain from "@/components/SparkleRain";
import { hero3, hero7 } from "@/assets";

const Wedding = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50">
      {/* Sparkling Rain Animation */}
      <SparkleRain showBackground={false} />
      
      {/* Wedding Navigation */}
      <WeddingNavigation />

      {/* <HeroCarousel/> */}

      {/* Wedding Hero Section */}
      <section id="home-section" className="relative">
        <WeddingHero />

        {/* Countdown Timer - Positioned to span hero and next section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-20">
          <CountdownTimer />
        </div>
      </section>

      {/* Groom & Bride Section */}
      <section id="groom-bride-section" className="pt-32 pb-20 px-4" style={{ backgroundColor: "#333333" }}>
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
              className="inline-block text-sm font-black uppercase tracking-wider mb-2 px-2 border-b border-dashed text-gray-300 border-gray-500"
            >
              About Bride &amp; Groom
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight text-white"
            >
              Bride &amp; Groom
            </motion.h2>
          </motion.div>

          {/* Profiles */}
          <div className="space-y-12 lg:space-y-20">
            {/* Groom Profile */}
            <BrideGroomProfile
              name="Rudolf"
              description="Rudolf’s the kind of guy who brings a calm, steady vibe wherever he goes. He genuinely cares, gets involved, and is always ready to jump in and help out. When he commits to something or someone he’s all in, no hesitation. He shows his love through actions more than words, always showing up and following through. He’s the type who plans ahead, stays wise, and somehow still cracks a good joke when you need it. Rudolf’s also smart, the kind of intelligent that earns real respect—but he never brags about it. He’s humble about his accomplishments and always quick to lift others up instead of talking about himself. He’s got big dreams but stays grounded, never forgetting what really matters. And at the heart of it all is his strong Christian faith—you can feel it in everything he does: how he loves, leads, and lives."
              image={hero7}
              isGroom={true}
              index={0}
            />

            {/* Bride Profile */}
            <BrideGroomProfile
              name="Jemima"
              description="She’s incredibly loving and caring—always checking in and making sure the people around her feel welcomed, supported, and valued. She’s the kind of person you can count on for a warm hug, a listening ear, or a good laugh when you need it most. Friendly and down-to-earth, she makes everyone feel like they’ve known her forever. She’s smart, thoughtful, artistic, quick-witted, and full of great ideas. Above all, her love for God shines through—in the way she loves with grace, kindness, and quiet strength. Being around her is easy, comforting, and inspiring all at once. And a tip for visitors: bring her flowers and a box of chocolates—you’ll be in her good books."
              image={hero3}
              isGroom={false}
              index={1}
            />
          </div>
        </div>
      </section>

      {/* When & Where Section */}
      <section id="when-where-section">
        <WhenWhereSection />
      </section>

      {/* Hotels Section */}
      <section id="hotels-section">
        <HotelsSection />
      </section>

      {/* Greetings Section */}
      <motion.section
        id="greeting-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-rochester text-4xl md:text-5xl leading-tight text-wedding-terracotta-500"
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
            <p className="text-wedding-olive-600 font-semibold">
              With all our love,
              <br />
              Rudolf & Jemima
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* RSVP Section */}
      <section
        id="rsvp-section"
        className="bg-gradient-to-r from-black via-gray-800 to-gray-700"
      >
        <RSVPForm />
      </section>

      <RSV />

      {/* Footer */}
      <Footer />

      <Gift />
    </div>
  );
};

export default Wedding;
