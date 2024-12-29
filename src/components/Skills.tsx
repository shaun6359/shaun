import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "Javascript", "MATLAB", "C/C++", "Assembly", "HTML", "Verilog"],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "TensorFlow",
      "Keras",
      "Pandas",
      "Flask",
      "SciKit Learn",
      "SciPy",
      "Hugging Face",
      "Matplotlib",
      "Node.js",
      "React",
      "Tailwind CSS",
      "JavaFX",
      "PyTorch",
    ],
  },
  {
    title: "Developer Tools",
    skills: ["Arduino", "Raspberry Pi", "Fusion 360", "ONSHAPE"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-navy-light px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-light mb-12 font-inter"
        >
          Technical Skills
        </motion.h2>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-bmw-blue mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-navy px-4 py-2 rounded-lg text-slate border border-slate-dark hover:border-bmw-blue transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;