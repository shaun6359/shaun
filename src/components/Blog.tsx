import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section id="about" className="py-20 bg-navy-light px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-light mb-12 font-inter"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-navy p-6 rounded-lg border border-slate-dark hover:border-bmw-blue transition-all hover:scale-105 lg:col-span-3"
          >
            <p className="text-slate-light mb-4">
              Hi, I'm Shaun Arulanandam—a tech enthusiast, entrepreneur, and problem solver. With expertise in machine learning, software development, and algorithmic trading, I love creating impactful solutions, from training AI models to designing financial systems.
            </p>
            <p className="text-slate-light mb-4">
              I've founded businesses like a mobile car detailing service, a math tutoring company, and Classify, a startup focused on intelligent solutions for note taking. Recently, I co-launched AfterDark Creatives, a web development company helping businesses shine online with sleek, functional designs.
            </p>
            <p className="text-slate-light mb-4">
              Outside of work, you'll find me experimenting with car mods, hitting the gym or pursuing projects that push my technical and creative limits.
            </p>
            <p className="text-slate-light">
              Let's build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;