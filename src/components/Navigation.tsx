import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Solar Solutions", href: "/services" },
    { name: "Electrical Systems", href: "/about" },
    { name: "Software Platform", href: "/portfolio" },
    { name: "Get Quote", href: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-eek-blue-400 to-eek-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-black text-white">E</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-eek-blue-500 rounded-full opacity-70"></div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-eek-blue-400 to-eek-blue-600 bg-clip-text text-transparent">
                EEK
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.name} to={item.href}>
                <motion.span
                  className={`font-medium transition-colors duration-300 relative ${
                    location.pathname === item.href
                      ? "text-eek-blue-400"
                      : "text-gray-300 hover:text-eek-blue-400"
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-eek-blue-400 rounded-full"
                      layoutId="activeTab"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button
                className="bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                size="sm"
              >
                Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-eek-blue-400 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
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
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <Link key={item.name} to={item.href}>
              <motion.span
                className={`block font-medium py-2 transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-eek-blue-400"
                    : "text-gray-300 hover:text-eek-blue-400"
                }`}
                initial={{ x: -20, opacity: 0 }}
                animate={
                  isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                }
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            className="pt-4"
          >
            <Link to="/contact">
              <Button
                className="w-full bg-gradient-to-r from-eek-blue-500 to-eek-blue-600 hover:from-eek-blue-600 hover:to-eek-blue-700 text-white font-semibold rounded-full"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
