import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-light mb-12 font-inter text-center"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-navy-light p-8 rounded-lg border border-slate-dark"
        >
          <div className="space-y-6">
            <a
              href="mailto:shaun.arulanandam@gmail.com"
              className="flex items-center gap-4 text-slate hover:text-bmw-blue transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>shaun.arulanandam@gmail.com</span>
            </a>
            <a
              href="tel:+16479221412"
              className="flex items-center gap-4 text-slate hover:text-bmw-blue transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>(647) - 922 - 1412</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-slate hover:text-bmw-blue transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;