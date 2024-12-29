import { motion } from "framer-motion";

const experiences = [
  {
    title: "Undergraduate Finance and ML Research",
    company: "King Mongkut's University of Technology Thonburi",
    location: "Bangkok, Thailand",
    period: "05/2024 - 08/2024",
    description: [
      "Researched Generative AI's ability to generate realistic, synthetic stock charts",
      "Developed and trained a custom TimeGAN model achieving 91% accuracy",
      "Conducted hyperparameter optimization using random grid search",
      "Developed datasets from S&P 500 using Signal Processing Algorithms",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-navy-light px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-light mb-12 font-inter"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy p-6 rounded-lg border border-slate-dark"
            >
              <h3 className="text-xl font-bold text-bmw-blue mb-2">
                {exp.title}
              </h3>
              <p className="text-slate mb-4">
                {exp.company} | {exp.location}
              </p>
              <p className="text-slate-dark mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-slate">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;