import { motion } from "framer-motion";
import { ChevronDown, Play, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Shield, value: "25+", label: "Years Experience" },
  { icon: Award, value: "100+", label: "Expert Doctors" },
  { icon: Clock, value: "24/7", label: "Emergency Care" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(135deg, hsla(195, 40%, 18%, 0.97) 0%, hsla(200, 35%, 25%, 0.92) 50%, hsla(195, 30%, 30%, 0.88) 100%)"
          }}
        />
        
        {/* Abstract patterns */}
        <div className="absolute inset-0 z-0">
          {/* Large gradient orb */}
          <div 
            className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-30"
            style={{ 
              background: "radial-gradient(circle, hsl(175, 50%, 40%) 0%, transparent 70%)",
              filter: "blur(80px)"
            }}
          />
          {/* Gold accent orb */}
          <div 
            className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ 
              background: "radial-gradient(circle, hsl(40, 70%, 50%) 0%, transparent 70%)",
              filter: "blur(60px)"
            }}
          />
        </div>

        {/* Subtle grid */}
        <div 
          className="absolute inset-0 z-5 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px),
                              linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[hsl(175,50%,50%)] animate-pulse" />
              <span className="text-sm text-white/80 font-medium">World Class Healthcare in Nigeria</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Welcome to{" "}
              <span className="relative inline-block">
                <span className="text-[hsl(175,50%,50%)]">Cedarcare</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[hsl(40,70%,50%)] origin-left"
                />
              </span>{" "}
              Group
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              We are a reputable team of world class professionals who are passionate about improving the state of healthcare systems both nationally and internationally.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg"
                className="bg-[hsl(175,50%,45%)] hover:bg-[hsl(175,50%,40%)] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-8">Why Choose Us</h3>
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-[hsl(175,50%,45%)]/20 flex items-center justify-center group-hover:bg-[hsl(175,50%,45%)]/30 transition-colors">
                        <stat.icon className="w-6 h-6 text-[hsl(175,50%,50%)]" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-[hsl(40,70%,50%)] rounded-2xl p-6 shadow-xl"
              >
                <div className="text-white font-bold text-2xl">15,000+</div>
                <div className="text-white/80 text-sm">Patients Treated Annually</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
