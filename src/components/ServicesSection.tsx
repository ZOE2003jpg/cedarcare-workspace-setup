import { motion } from "framer-motion";
import { Building2, Pill, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Hospital",
    subtitle: "Cedarcare Hospital",
    description: "Our World Class Medical Center that is at the center of providing significant healthcare reforms within Nigeria and beyond. Our services include both inpatient and outpatient care, ambulance services, specialist consultation and public health education.",
    color: "hsl(195, 35%, 30%)",
    accent: "hsl(175, 50%, 45%)",
    features: ["Inpatient & Outpatient Care", "Ambulance Services", "Specialist Consultation", "Public Health Education"]
  },
  {
    icon: Pill,
    title: "Health Supplies",
    subtitle: "Cedarcare Health Supplies",
    description: "We supply healthcare products including hospital and laboratory equipments with the latest technology, medical devices, and consumables at competitive prices. We offer very high quality products which are sourced from the USA, UK and Germany.",
    color: "hsl(40, 70%, 50%)",
    accent: "hsl(35, 80%, 55%)",
    features: ["Hospital Equipment", "Laboratory Equipment", "Medical Devices", "Quality Consumables"]
  },
  {
    icon: Users,
    title: "Recruitment",
    subtitle: "Cedarcare Health Recruitment",
    description: "Cedarcare Recruitment is a leading national and international provider of healthcare staffing. We are unique in our commitment to delivering the highest quality service through placing the best people in healthcare providers across the country.",
    color: "hsl(175, 50%, 40%)",
    accent: "hsl(195, 35%, 30%)",
    features: ["National Placement", "International Staffing", "Quality Candidates", "Healthcare Specialists"]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, hsl(175, 50%, 45%) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
          >
            <span className="text-sm text-primary font-medium">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Comprehensive Healthcare{" "}
            <span className="text-[hsl(175,50%,45%)]">Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Our group comprises of Cedarcare Hospital, Cedarcare Health Recruitment and Cedarcare Health Supplies, all working together to transform healthcare.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full bg-card rounded-3xl border border-border/50 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}05 0%, transparent 100%)`
                  }}
                />

                {/* Icon */}
                <div 
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon 
                    className="w-8 h-8" 
                    style={{ color: service.color }}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: service.accent }}>
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <span 
                          className="w-1.5 h-1.5 rounded-full mr-3"
                          style={{ backgroundColor: service.accent }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-medium group/btn"
                    style={{ color: service.color }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
