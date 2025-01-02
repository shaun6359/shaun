import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result.text);
      toast.success("Message sent successfully!");
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-navy-light p-8 rounded-lg border border-slate-dark"
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
                href="https://ca.linkedin.com/in/shaun-arulanandam-85a43b266"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate hover:text-bmw-blue transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-navy-light p-8 rounded-lg border border-slate-dark"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-slate mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded bg-navy border border-slate-dark text-slate focus:outline-none focus:border-bmw-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded bg-navy border border-slate-dark text-slate focus:outline-none focus:border-bmw-blue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-navy border border-slate-dark text-slate focus:outline-none focus:border-bmw-blue"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-bmw-blue text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;