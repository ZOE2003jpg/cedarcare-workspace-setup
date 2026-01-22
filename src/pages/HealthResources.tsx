import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HealthResources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm text-white/90 font-medium">Stay Informed</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Health <span className="text-[hsl(175,50%,45%)]">Resources</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Educational materials and resources to help you maintain optimal health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Health resources and articles will be added here.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthResources;
