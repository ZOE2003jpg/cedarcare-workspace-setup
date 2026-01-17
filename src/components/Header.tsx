import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cedarcarelogo from "@/assets/cedarcare-logo.png";

const navItems = [
  { name: "Hospital", href: "#hospital" },
  { name: "Health Supplies", href: "#supplies" },
  { name: "Health Recruitment", href: "#recruitment" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="relative z-50 flex items-center space-x-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Logo Image */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <img 
                  src={cedarcarelogo} 
                  alt="Cedarcare Logo" 
                  className="w-full h-full object-contain"
                  style={{ 
                    filter: isScrolled ? "none" : "brightness(0) invert(1)",
                    transition: "filter 0.5s ease"
                  }}
                />
              </div>
              <div>
                <span
                  className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  The Cedarcare Group
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-colors duration-300 group ${
                    isScrolled 
                      ? "text-foreground/80 hover:text-primary" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[hsl(175,50%,45%)] transition-all duration-300 group-hover:w-3/4" />
                </motion.a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsSearchOpen(true)}
                className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "bg-secondary hover:bg-secondary/80 text-primary"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <Search className="w-4 h-4" />
              </motion.button>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="hidden md:block"
              >
                <Button
                  className={`relative overflow-hidden group px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    isScrolled
                      ? "bg-primary text-primary-foreground hover:shadow-lg"
                      : "bg-white text-primary hover:shadow-xl"
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2 inline" />
                  <span>Book Appointment</span>
                </Button>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "bg-white/10 text-white"
                    : isScrolled
                    ? "bg-secondary text-primary"
                    : "bg-white/10 text-white"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[hsl(195,35%,22%)] p-8 pt-24"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 text-lg text-white/90 hover:text-white border-b border-white/10 transition-colors group"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-5 h-5 text-[hsl(175,50%,45%)] group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Button className="w-full bg-[hsl(175,50%,45%)] hover:bg-[hsl(175,50%,40%)] text-white rounded-full py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </motion.div>

              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-5 py-4 bg-white/10 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[hsl(175,50%,45%)]"
                  />
                  <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(175,50%,45%)]" />
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-32 px-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/80 backdrop-blur-xl"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="relative w-full max-w-2xl"
            >
              <input
                type="text"
                placeholder="Search for services, doctors, information..."
                autoFocus
                className="w-full px-8 py-5 bg-white rounded-2xl text-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-[hsl(175,50%,45%)]/30 shadow-2xl"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <X className="w-5 h-5 text-primary" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
