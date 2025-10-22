import { motion } from "framer-motion";
import WeddingNavigation from "../components/Navbar";
import BrideGroomProfile from "../components/BrideGroomProfile";
import Footer from "@/components/Footer";
import SparkleRain from "@/components/SparkleRain";
import { hero3, hero7 } from "@/assets";

const GroomBride = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50">
      <SparkleRain showBackground={false} />
      <WeddingNavigation />

      <section className="pt-28 pb-20 px-4" style={{ backgroundColor: "#333333" }}>
        <div className="max-w-[1100px] mx-auto">
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
              About Bride & Groom
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-rochester text-4xl lg:text-6xl xl:text-[80px] leading-tight text-white"
            >
              Bride & Groom
            </motion.h2>
          </motion.div>

          <div className="space-y-12 lg:space-y-20">
            <BrideGroomProfile
              name="Rudolf"
              description="Rudolf’s the kind of guy who brings a calm, steady vibe wherever he goes. He genuinely cares, gets involved, and is always ready to jump in and help out. When he commits to something or someone he’s all in, no hesitation. He shows his love through actions more than words, always showing up and following through. He’s the type who plans ahead, stays wise, and somehow still cracks a good joke when you need it. Rudolf’s also smart, the kind of intelligent that earns real respect—but he never brags about it. He’s humble about his accomplishments and always quick to lift others up instead of talking about himself. He’s got big dreams but stays grounded, never forgetting what really matters. And at the heart of it all is his strong Christian faith—you can feel it in everything he does: how he loves, leads, and lives."
              image={hero7}
              isGroom={true}
              index={0}
            />

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

      <Footer />
    </div>
  );
};

export default GroomBride;
