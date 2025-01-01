import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-navy-light px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-light mb-12 font-inter"
        >
          Blog
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-navy p-6 rounded-lg border border-slate-dark hover:border-bmw-blue transition-all hover:scale-105"
          >
            <p className="text-slate-light mb-4">Coming soon...</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;