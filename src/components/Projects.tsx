import { motion } from "framer-motion";

const projects = [
  {
    title: "MediScan Pro",
    description: "AI-driven system using ResNet-50 for X-ray classification of pneumonia with automated medical report generation.",
    tech: ["Python", "Flask", "ResNet-50", "HTML/CSS/JavaScript"],
    highlights: [
      "80% accuracy on test data",
      "Secure user login system",
      "Real-time diagnostic feedback",
      "PDF report generation",
    ],
  },
  {
    title: "Sentivest AI Trading Bot",
    description: "Algorithmic Trading Bot using Python, Alpaca API, and sentiment analysis for automated trading decisions.",
    tech: ["Python", "Alpaca API", "FinBERT", "Machine Learning"],
    highlights: [
      "99.9% confidence thresholds",
      "Automated bracket orders",
      "Sentiment-driven decisions",
      "Profitable backtesting results",
    ],
  },
  {
    title: "Investors Centre",
    description: "Responsive web application for stock price prediction and financial insights.",
    tech: ["Python", "Flask", "React JS", "Tailwind CSS", "LSTM"],
    highlights: [
      "80% LSTM prediction accuracy",
      "Interactive finance chatbot",
      "Real-time financial data",
      "GPT-3.5 integration",
    ],
  },
  {
    title: "Classify",
    description: "A startup focused on revolutionizing note-taking for STEM students. Classify automatically captures and rewrites board content in the user's handwriting, featuring powerful search functionality, auto-solving for math equations, and AI-powered summaries.",
    tech: ["React", "Python", "Machine Learning", "OCR"],
    highlights: [
      "Automatic board content capture",
      "Handwriting replication",
      "AI-powered summaries",
      "Math equation solver",
    ],
  },
  {
    title: "3D Automated Plant Watering System",
    description: "Custom 3D-printed vase system for UofT Engineering Science plant mascot.",
    tech: ["Fusion 360", "Arduino", "Raspberry Pi", "3D Printing"],
    highlights: [
      "Precision water sensor integration",
      "Custom 3D-printed design",
      "Automated misting system",
      "Plant-specific programming",
    ],
  },
  {
    title: "Zootopia Multiplayer Game",
    description: "Turn-based, two-player combat game with unique characters and strategic gameplay.",
    tech: ["Java", "JavaFX", "OOP"],
    highlights: [
      "Randomized maps with bonuses",
      "8 specialized characters",
      "Collaborative development",
      "Intuitive UI/UX design",
    ],
  },
  {
    title: "LexiLink",
    description: "Python-based semantic similarity predictor using cosine similarity.",
    tech: ["Python", "NLP", "Vector Mathematics"],
    highlights: [
      "80% accuracy rate",
      "Context-aware word analysis",
      "Large dataset processing",
      "AI text enhancement",
    ],
  },
  {
    title: "GamerGram",
    description: "Social media platform specialized for Gaming enthusiasts (In Development).",
    tech: ["React", "Node.js", "MongoDB"],
    highlights: [
      "Gaming-focused features",
      "Social connectivity",
      "User engagement tools",
      "Community building",
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