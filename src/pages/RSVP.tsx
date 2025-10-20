import WeddingNavigation from "../components/Navbar";
import RSVPForm from "../components/RSVPForm";
import Footer from "@/components/Footer";
import SparkleRain from "@/components/SparkleRain";

const RSVP = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-700">
      <SparkleRain showBackground={false} />
      <WeddingNavigation />

      <section className="pt-28">
        <RSVPForm />
      </section>

      <Footer />
    </div>
  );
};

export default RSVP;
