import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
const footerLinks = {
  services: [
    { name: "Our Services", href: "/services" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Departments", href: "/departments" },
    { name: "Emergency Care", href: "/contact" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Health Resources", href: "/health-resources" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ],
  support: [
    { name: "Book Appointment", href: "/contact" },
    { name: "HMO Information", href: "/health-resources" },
    { name: "Patient Rights", href: "/health-resources" },
    { name: "Find a Doctor", href: "/doctors" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[hsl(200,25%,12%)] text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none"
        style={{ 
          background: "radial-gradient(ellipse, hsl(175, 50%, 45%) 0%, transparent 70%)"
        }}
      />

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="inline-flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={logo} 
                alt="Cedarcare Hospital" 
                className="h-14 w-auto"
              />
            </motion.a>

            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              A reputable team of world class professionals passionate about improving healthcare systems both nationally and internationally.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:info@cedarcare.com" className="flex items-center space-x-3 text-white/60 hover:text-[hsl(175,50%,50%)] transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@cedarcare.com</span>
              </a>
              <a href="tel:+2341234567890" className="flex items-center space-x-3 text-white/60 hover:text-[hsl(175,50%,50%)] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+234 123 456 7890</span>
              </a>
              <div className="flex items-center space-x-3 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[hsl(175,50%,50%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[hsl(175,50%,50%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[hsl(175,50%,50%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Cedarcare Group. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[hsl(175,50%,45%)]/20 flex items-center justify-center text-white/60 hover:text-[hsl(175,50%,50%)] transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-white/60 hover:text-[hsl(175,50%,50%)] transition-colors"
            whileHover={{ y: -2 }}
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
