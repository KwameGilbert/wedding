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
              description="A passionate photographer and adventure seeker, Rudolf captures life's most precious moments through his lens. When he's not behind the camera, you'll find him exploring new places, brewing the perfect cup of coffee, or planning the next surprise for Jemima. His infectious smile and warm heart make everyone around him feel like family."
              image={hero7}
              isGroom={true}
              index={0}
            />

            <BrideGroomProfile
              name="Jemima"
              description="A talented artist and creative soul, Jemima brings beauty and inspiration to everything she touches. Whether she's painting a masterpiece, designing something magical, or dancing to her favorite song, her creativity knows no bounds. Her kindness, grace, and radiant spirit light up every room she enters, making the world a more beautiful place."
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
