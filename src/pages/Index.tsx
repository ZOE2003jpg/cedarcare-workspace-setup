import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      
      <div className={`min-h-screen ${showSplash ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
