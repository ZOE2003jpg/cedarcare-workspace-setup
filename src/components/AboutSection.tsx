import { motion } from "framer-motion";
import { Check, Heart, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every decision we make is focused on improving patient outcomes and experience."
  },
  {
    icon: Target,
    title: "Excellence in Service",
    description: "We maintain the highest standards in medical care, equipment, and staffing."
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Our practices and products meet international healthcare benchmarks."
  },
];

const highlights = [
  "State-of-the-art medical facilities",
  "Internationally trained medical professionals",
  "24/7 emergency care services",
  "Comprehensive health insurance partnerships",
  "Modern diagnostic and treatment equipment",
  "Compassionate patient support programs"
];

const AboutSection = () => {
  return (
    <section id="hospital" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
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
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-primary to-[hsl(175,50%,35%)]">
              {/* Abstract medical visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Heartbeat line */}
                  <svg className="w-80 h-40 text-white/20" viewBox="0 0 320 80">
                    <motion.path
                      d="M0 40 L60 40 L80 20 L100 60 L120 40 L140 40 L160 10 L180 70 L200 40 L260 40 L280 20 L300 60 L320 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                  
                  {/* Central icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <div className="text-3xl font-bold text-[hsl(175,50%,40%)]">15K+</div>
                    <div className="text-sm text-muted-foreground">Patients Yearly</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <div className="text-3xl font-bold text-[hsl(40,70%,50%)]">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Gold accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[hsl(40,70%,50%)] flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-xl">CC</span>
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
              <span className="text-sm text-primary font-medium">About Cedarcare</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transforming Healthcare{" "}
              <span className="text-[hsl(175,50%,45%)]">Across Africa</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our world class medical centre is at the centre of providing significant healthcare reforms within Nigeria and beyond. We are committed to delivering exceptional healthcare services that meet international standards.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[hsl(175,50%,45%)]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[hsl(175,50%,45%)]" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
