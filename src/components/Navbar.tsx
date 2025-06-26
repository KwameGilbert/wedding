import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-gold-400/30 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="#home-section"
          className="text-gold-600 text-xl font-bold uppercase tracking-wider transition-colors duration-300 hover:text-gold-500 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home-section");
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl font-script">💍</span>
            <span className="text-wedding-terracotta-600  font-rochester">R&J</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative block text-sm font-semibold text-wedding-terracotta-600  uppercase transition-colors duration-300 hover:hover:text-wedding-olive-600"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-wedding-terracotta-600 ">
          {open ? (
            <X size={24} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={24} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-wedding-terracotta-600  flex flex-col items-center space-y-5 py-6"
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavClick(item.href)}
                className="font-medium hover:text-wedding-olive-600 transition"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

