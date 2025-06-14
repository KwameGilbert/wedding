import { motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface WeddingNavigationProps {
  className?: string;
}

const WeddingNavigation = ({ className = "" }: WeddingNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home-section" },
    { name: "Groom & Bride", href: "#groom-bride-section" },
    { name: "Our Story", href: "#lovestory-section" },
    { name: "Greetings", href: "#greeting-section" },
    { name: "Bridesmaid & Groomsmen", href: "#people-section" },
    { name: "When & Where", href: "#when-where-section" },
    { name: "RSVP", href: "#rsvp-section" },
    { name: "Gallery", href: "#gallery-section" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-wedding-cream-100/95 backdrop-blur-md border-b border-wedding-terracotta-200/30 shadow-sm ${className}`}
    >
      <div className="max-w-[1100px] mx-auto px-4 w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.a
            href="#home-section"
            className="text-wedding-terracotta-500 text-xl font-bold uppercase tracking-wider transition-colors duration-300 hover:text-wedding-terracotta-600 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home-section");
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-script">🍃</span>
              <span className="text-wedding-terracotta-600 font-rochester">
                R&J
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-grow">
            <ul className="flex flex-wrap ml-auto space-x-0">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className="relative block px-3 py-3 text-sm font-semibold text-wedding-terracotta-600 uppercase tracking-wide transition-colors duration-300 hover:text-wedding-terracotta-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span className="relative pb-0.5">{item.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMenu}
            className="lg:hidden border-pink-300 bg-pink-50/50 text-pink-700 hover:bg-pink-100"
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
            <span className="ml-2 text-sm uppercase tracking-widest">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-md border-t border-pink-200/30"
        id="mobile-nav"
      >
        <div className="max-w-[1100px] mx-auto px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block py-3 px-2 text-sm font-semibold text-pink-700 uppercase tracking-wide transition-colors duration-300 hover:text-pink-500 hover:bg-pink-50 rounded-md"
              initial={{ x: -20, opacity: 0 }}
              animate={
                isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
              }
              transition={{ delay: index * 0.1 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.name}
            </motion.a>
          ))}

          {/* Mobile RSVP Button */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            className="pt-4"
          >
            <Button
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full"
              onClick={() => {
                handleNavClick("#rsvp-section");
              }}
            >
              <Heart className="w-4 h-4 mr-2" />
              RSVP Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default WeddingNavigation;
