import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Stethoscope, Baby, Heart, FlaskConical, Pill, Ambulance, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ctScan from "@/assets/ct-scan.jpg";
import doctorPatient from "@/assets/doctor-patient.jpg";
import hospitalBuilding from "@/assets/hospital-building.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation / Family Medicine",
    description: "Our family medicine physicians provide holistic care for all ages, focusing on prevention, diagnosis, and long-term health management.",
    image: doctorPatient,
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Expert medical care for infants, children, and adolescents, including immunization, growth monitoring, and childhood illness management.",
    image: hospitalBuilding,
  },
  {
    icon: Heart,
    title: "Obstetrics & Gynecology",
    description: "Comprehensive women's healthcare, including antenatal care, safe delivery, postnatal services, and gynecological treatments.",
    image: doctorPatient,
  },
  {
    icon: FlaskConical,
    title: "Diagnostics & Laboratory",
    description: "Accurate diagnostic services using modern equipment for fast, reliable test results.",
    image: ctScan,
  },
  {
    icon: Pill,
    title: "Pharmacy Services",
    description: "Safe and professional medication dispensing with strict quality control and patient counseling.",
    image: hospitalBuilding,
  },
  {
    icon: Ambulance,
    title: "Emergency & Inpatient Care",
    description: "24/7 medical attention with well-trained staff and fully equipped inpatient facilities.",
    image: ctScan,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(175,50%,45%)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(175,50%,45%)] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm text-white/90 font-medium">What We Offer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-[hsl(175,50%,45%)]">Services</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Comprehensive Healthcare Services at Cedarcare Hospital. We offer a full spectrum of medical services designed to meet the healthcare needs of individuals, families, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-xl bg-[hsl(175,50%,45%)] flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Medical Assistance?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experienced medical professionals is ready to help you. Book an appointment today or contact us for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="px-8 py-6 rounded-full text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
