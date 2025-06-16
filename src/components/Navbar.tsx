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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
       className={`fixed top-0 left-0 right-0 z-50 bg-wedding-cream-100/40 backdrop-blur-md border-b border-wedding-terracotta-200/30 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
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
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative block text-sm font-semibold text-wedding-terracotta-600 uppercase transition-colors duration-300 hover:text-wedding-terracotta-400"
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
            className="md:hidden bg-wedding-cream-100 text-wedding-terracotta-600 flex flex-col items-center space-y-5 py-6"
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                onClick={() => setOpen(false)}
                className="text-wedding-terracotta-600 font-medium hover:text-pink-300 transition"
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

//     {/* Mobile Menu */}
//     <motion.div
//       initial={false}
//       animate={
//         isMenuOpen
//           ? { height: "auto", opacity: 1 }
//           : { height: 0, opacity: 0 }
//       }
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className="lg:hidden overflow-hidden bg-wedding-cream-100/98 backdrop-blur-md border-t border-wedding-terracotta-200/30"
//       id="mobile-nav"
//     >
//       <div className="max-w-[1100px] mx-auto px-4 py-6 space-y-2">
//         {navItems.map((item, index) => (
//           <motion.a
//             key={item.name}
//             href={item.href}
//             className="block py-3 px-2 text-sm font-semibold text-wedding-terracotta-600 uppercase tracking-wide transition-colors duration-300 hover:text-wedding-terracotta-500 hover:bg-wedding-cream-200 rounded-md"
//             initial={{ x: -20, opacity: 0 }}
//             animate={
//               isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
//             }
//             transition={{ delay: index * 0.1 }}
//             onClick={(e) => {
//               e.preventDefault();
//               handleNavClick(item.href);
//             }}
//           >
//             {item.name}
//           </motion.a>
//         ))}

//         {/* Mobile RSVP Button */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
//           transition={{ delay: navItems.length * 0.1 }}
//           className="pt-4"
//         >
//           <Button
//             className="w-full bg-gradient-to-r from-wedding-terracotta-500 to-wedding-olive-600 hover:from-wedding-terracotta-600 hover:to-wedding-olive-700 text-wedding-cream-50 font-semibold rounded-full"
//             onClick={() => {
//               handleNavClick("#rsvp-section");
//             }}
//           >
//             <span className="w-4 h-4 mr-2">🍃</span>
//             RSVP Now
//           </Button>
//         </motion.div>
//       </div>
//     </motion.div>
//   </motion.nav>
