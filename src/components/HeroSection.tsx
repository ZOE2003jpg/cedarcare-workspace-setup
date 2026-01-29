import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroDoctors from "@/assets/hero-doctors.jpg";
import ctScan from "@/assets/ct-scan.jpg";
import doctorPatient from "@/assets/doctor-patient.jpg";
import hospitalBuilding from "@/assets/hospital-building.jpg";

const slides = [
  {
    image: heroDoctors,
    headline: "Caring With Excellence. Healing With Compassion.",
    subtitle: "Experience world-class healthcare with our dedicated team"
  },
  {
    image: ctScan,
    headline: "Modern Diagnostics & Treatment",
    subtitle: "State-of-the-art equipment for accurate diagnosis"
  },
  {
    image: doctorPatient,
    headline: "Patient-Centered Healthcare",
    subtitle: "Every decision focused on improving patient outcomes"
  },
  {
    image: hospitalBuilding,
    headline: "Trusted by Families & HMOs",
    subtitle: "Multiple locations serving communities across Lagos"
  }
];

const stats = [
  { value: "24/7", label: "Emergency Care" },
  { value: "2", label: "Locations" },
  { value: "HMOs", label: "Accepted" },
  { value: "Modern", label: "Diagnostics" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].headline}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,50%,10%)]/95 via-[hsl(210,50%,10%)]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,50%,10%)]/80 via-transparent to-[hsl(210,50%,10%)]/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary/50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary/50 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-28 md:bottom-40 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-6 md:w-8 bg-[hsl(40,70%,50%)]" 
                : "w-1.5 md:w-2 bg-white/40 hover:bg-[hsl(40,70%,50%)]/60"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-8 md:pt-20 pb-32 md:pb-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 md:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(40,70%,50%)] animate-pulse" />
            <span className="text-xs md:text-sm text-white/90 font-medium">Excellence in Healthcare</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight"
            >
              {slides[currentSlide].headline}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${currentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-xl lg:text-2xl text-[hsl(40,70%,55%)] font-medium mb-2 md:mb-4"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-lg lg:text-xl text-white/70 mb-6 md:mb-10 max-w-2xl leading-relaxed hidden sm:block"
          >
            Cedarcare Hospital is a modern healthcare facility committed to providing safe, reliable, 
            and compassionate medical services. We combine clinical excellence with advanced technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <Button
              size="lg"
              className="bg-[hsl(175,50%,40%)] hover:bg-[hsl(175,50%,35%)] text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base font-semibold group"
            >
              Book Appointment
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white/20 hover:border-white px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base font-semibold"
            >
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="py-6 md:py-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
