import WeddingNavigation from "../components/Navbar";
import WhenWhereSection from "../components/WhenWhereSection";
import Footer from "@/components/Footer";
import SparkleRain from "@/components/SparkleRain";

const WhenWhere = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream-200 via-wedding-cream-100 to-wedding-cream-50">
      <SparkleRain showBackground={false} />
      <WeddingNavigation />

      <section className="pt-28">
        <WhenWhereSection />
      </section>

      <Footer />
    </div>
  );
};

export default WhenWhere;
