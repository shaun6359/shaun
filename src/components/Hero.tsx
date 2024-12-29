import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-light"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-inter mb-4">
            Hi, I'm{" "}
            <span className="text-bmw-blue">Shaun Arulanandam</span>
          </h1>
          <p className="text-xl md:text-2xl font-space mb-6 text-slate">
            Engineering Science Student at UofT
          </p>
          <p className="text-lg text-slate mb-8">
            Specializing in AI, Machine Learning, and Financial Technology
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:shaun.arulanandam@gmail.com"
              className="bg-bmw-blue hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-bmw-blue text-bmw-blue hover:bg-bmw-blue hover:text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-bmw-blue">
            <img
              src="/placeholder.svg"
              alt="Shaun Arulanandam"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;