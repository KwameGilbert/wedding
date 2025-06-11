import HeroCarousel from "../components/HeroCarousel";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HelpWidget from "../components/HelpWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <Footer />
      <HelpWidget />
    </div>
  );
};

export default Index;
