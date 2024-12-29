import { motion } from "framer-motion";

const projects = [
  {
    title: "MediScan Pro",
    description: "AI-driven system for X-ray classification of pneumonia with automated medical reports.",
    tech: ["ResNet-50", "Flask", "HTML/CSS/JavaScript"],
    highlights: [
      "80% accuracy on test data",
      "Secure user login",
      "Real-time diagnostic feedback",
    ],
  },
  {
    title: "Sentivest AI Trading Bot",
    description: "Algorithmic Trading Bot using sentiment analysis for automated trading decisions.",
    tech: ["Python", "Alpaca API", "FinBERT"],
    highlights: [
      "99.9% confidence thresholds",
      "Automated bracket orders",
      "Profitable backtesting results",
    ],
  },
  {
    title: "Investors Centre",
    description: "Responsive web application for stock price prediction and financial insights.",
    tech: ["Flask", "React JS", "Tailwind CSS", "LSTM"],
    highlights: [
      "80% prediction accuracy",
      "Interactive finance chatbot",
      "Real-time financial information",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-navy px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-light mb-12 font-inter"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-light p-6 rounded-lg border border-slate-dark hover:border-bmw-blue transition-colors"
            >
              <h3 className="text-xl font-bold text-bmw-blue mb-4">
                {project.title}
              </h3>
              <p className="text-slate mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-slate-light font-bold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-navy px-3 py-1 rounded-full text-sm text-slate"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-slate-light font-bold mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;