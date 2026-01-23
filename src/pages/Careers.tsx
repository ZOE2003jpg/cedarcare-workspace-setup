import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Heart, BookOpen, Briefcase, GraduationCap, Clock, MapPin, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const whyWorkWithUs = [
  {
    icon: Heart,
    title: "Purpose-Driven Work",
    description: "Make a real difference in people's lives every day through compassionate healthcare delivery.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Join a supportive environment where teamwork and mutual respect are core values.",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Access continuous learning opportunities, training programs, and career advancement.",
  },
  {
    icon: BookOpen,
    title: "Modern Facilities",
    description: "Work with state-of-the-art medical equipment and technology in well-maintained facilities.",
  },
];

const currentVacancies = [
  {
    title: "Registered Nurse",
    department: "Nursing Services",
    type: "Full-time",
    location: "Agungi, Lekki",
  },
  {
    title: "Medical Officer",
    department: "Medical Services",
    type: "Full-time",
    location: "Ogombo",
  },
  {
    title: "Pharmacist",
    department: "Pharmacy",
    type: "Full-time",
    location: "Agungi, Lekki",
  },
  {
    title: "Laboratory Technician",
    department: "Diagnostics",
    type: "Full-time",
    location: "Both Locations",
  },
  {
    title: "Patient Care Assistant",
    department: "Nursing Services",
    type: "Full-time",
    location: "Agungi, Lekki",
  },
];

const Careers = () => {
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
              <span className="text-sm text-white/90 font-medium">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-[hsl(175,50%,45%)]">Careers</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Join Our Team. Cedarcare Hospital is always seeking dedicated professionals passionate about patient care. Build a rewarding career with us and make a difference in healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Cedarcare, we invest in our people because we know that exceptional care starts with exceptional staff.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Vacancies */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Vacancies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our open positions and find the role that matches your skills and passion.
            </p>
          </motion.div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {currentVacancies.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                    <p className="text-muted-foreground text-sm">{job.department}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.type}
                  </span>
                  <span className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                    Apply <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship & Training */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-4">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Internship & Training</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Start Your Healthcare Career
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We offer internship and training opportunities for medical students, nursing students, and other healthcare trainees. Gain hands-on experience in a supportive learning environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 rounded-full bg-[hsl(175,50%,45%)] mr-3" />
                  Clinical rotations for medical students
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 rounded-full bg-[hsl(175,50%,45%)] mr-3" />
                  Nursing internship programs
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 rounded-full bg-[hsl(175,50%,45%)] mr-3" />
                  Laboratory training opportunities
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 rounded-full bg-[hsl(175,50%,45%)] mr-3" />
                  Pharmacy attachments
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Apply for Internship
              </Button>
            </motion.div>
            
            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Application</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter email" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="position">Position Interested In</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nurse">Registered Nurse</SelectItem>
                      <SelectItem value="doctor">Medical Officer</SelectItem>
                      <SelectItem value="pharmacist">Pharmacist</SelectItem>
                      <SelectItem value="lab-tech">Laboratory Technician</SelectItem>
                      <SelectItem value="intern">Internship</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Cover Letter / Message</Label>
                  <Textarea id="message" placeholder="Tell us about yourself..." className="mt-1 min-h-[100px]" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
