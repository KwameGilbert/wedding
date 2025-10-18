import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import HeroCarousel from "@/components/Drawer";
import { rudilogo } from "@/assets";



const navItems = [
  { name: "Home", href: "#home-section" },
  { name: "Groom & Bride", href: "#groom-bride-section" },
  { name: "Greetings", href: "#greeting-section" },
  { name: "When & Where", href: "#when-where-section" },
  { name: "Hotels", href: "#hotels-section" },
  { name: "RSVP", href: "#rsvp-section" },
  { name: "Gift", href: "/gift" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    // Check if it's a route (starts with /) or a section (starts with #)
    if (href.startsWith('/')) {
      // This will be handled by Link component
      return;
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-md border-b border-sidebar-border/30 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <motion.a href="#home-section" className="text-wedding-terracotta-500 text-xl font-bold uppercase tracking-wider transition-colors duration-300 hover:text-wedding-terracotta-600 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home-section");
          }}
        >
          <img src={rudilogo} alt="Rudolf & Jemima Wedding Logo" className="h-14 rounded-full bg-wedding-cream-100 border-2 border-wedding-cream-100 w-14 object-contain" />
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden items-center md:flex space-x-6">
          {navItems.map((item, idx) => (
            item.href.startsWith('/') ? (
              <Link key={idx} to={item.href}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative block text-sm font-semibold text-wedding-cream-500 uppercase transition-colors duration-300 hover:text-wedding-terracotta-500 cursor-pointer"
                >
                  {item.name}
                </motion.div>
              </Link>
            ) : (
              <motion.a
                key={idx}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative block text-sm font-semibold text-wedding-cream-500 uppercase transition-colors duration-300 hover:text-wedding-terracotta-500"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </motion.a>
            )
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-wedding-cream-500 ">
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
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="md:hidden bg-background text-wedding-cream-500 flex flex-col items-center space-y-5 py-6">
            {navItems.map((item, idx) => (
              item.href.startsWith('/') ? (
                <Link key={idx} to={item.href} onClick={() => setOpen(false)}>
                  <motion.div whileHover={{ scale: 1.05 }} className="font-medium hover:text-wedding-olive-600 transition cursor-pointer">
                    {item.name}
                  </motion.div>
                </Link>
              ) : (
                <motion.a key={idx} href={item.href} whileHover={{ scale: 1.05 }} onClick={() => handleNavClick(item.href)} className="font-medium hover:text-wedding-olive-600 transition">
                  {item.name}
                </motion.a>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

