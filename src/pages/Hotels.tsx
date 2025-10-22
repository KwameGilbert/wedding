import WeddingNavigation from "../components/Navbar";
import HotelsSection from "../components/HotelsSection";
import Footer from "@/components/Footer";
import SparkleRain from "@/components/SparkleRain";

const Hotels = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50">
      <SparkleRain showBackground={false} />
      <WeddingNavigation />

      <section className="pt-28">
        <HotelsSection />
      </section>

      <Footer />
    </div>
  );
};

export default Hotels;
