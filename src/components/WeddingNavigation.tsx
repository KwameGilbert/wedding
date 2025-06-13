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

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white font-bold text-xl tracking-wide"
        >
          TWOHEARTS
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white font-semibold text-sm hover:text-pink-300 transition"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white">
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
            className="md:hidden bg-black/90 text-white flex flex-col items-center space-y-5 py-6"
          >
            {navItems.map((item, idx) => (
              <motion.a
                     key={item.name}
              href={item.href}
                whileHover={{ scale: 1.05 }}
                onClick={() => setOpen(false)}
                className="text-white font-medium hover:text-pink-300 transition"
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
