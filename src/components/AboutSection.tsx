import { motion } from "framer-motion";
import { Heart, Award, Shield, Users, Star, Eye, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

import doctorPatient from "@/assets/doctor-patient.jpg";
import ctScan from "@/assets/ct-scan.jpg";

const coreValues = [
  { icon: Heart, title: "Compassion", description: "Treating every patient with empathy and kindness" },
  { icon: Award, title: "Excellence", description: "Maintaining the highest standards in medical care" },
  { icon: Shield, title: "Integrity", description: "Honest, ethical practice in everything we do" },
  { icon: Users, title: "Accountability", description: "Taking responsibility for patient outcomes" },
  { icon: Star, title: "Faith & Service", description: "Healthcare rooted in purpose and dedication" },
];

const missionPoints = [
  "Skilled professionals dedicated to your care",
  "Modern medical technology for accurate diagnosis",
  "Ethical practice in all our services",
  "A culture of continuous improvement",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src={doctorPatient}
                alt="Doctor consulting with patient"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />

              {/* Floating Vision card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Our Vision</h4>
                    <p className="text-sm text-muted-foreground">
                      To be a leading healthcare institution known for clinical excellence, compassion, and integrity.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:-right-8 w-40 md:w-56 aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-2xl"
            >
              <img
                src={ctScan}
                alt="CT Scan machine"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Gold accent badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[hsl(40,70%,50%)] flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-lg md:text-xl">CC</span>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-sm text-primary font-medium">About Cedarcare Hospital</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Who We{" "}
              <span className="text-[hsl(175,50%,45%)]">Are</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cedarcare Hospital is a patient-focused healthcare provider committed to delivering accessible, 
              ethical, and high-quality medical services. We believe healthcare should be compassionate, 
              professional, and rooted in integrity.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Our approach blends medical excellence with personalized attention, ensuring every patient 
              is treated with dignity, respect, and care.
            </p>

            {/* Mission Section */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[hsl(175,50%,45%)]/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[hsl(175,50%,45%)]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                To provide high-quality, affordable, and patient-centered healthcare services through:
              </p>
              <ul className="space-y-2">
                {missionPoints.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(175,50%,45%)]" />
                    <span className="text-sm text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Core Values
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at Cedarcare Hospital
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
