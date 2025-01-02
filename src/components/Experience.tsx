import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Freelance Web Development Startup",
    company: "AfterDark Creatives",
    location: "Toronto, ON",
    period: "12/2024 - Present",
    badge: { text: "In Progress", color: "bg-[#9b87f5] hover:bg-[#9b87f5]/80" },
    description: [
      "Coming Soon...",
    ],
  },
  {
    title: "Undergraduate Finance and ML Research",
    company: "King Mongkut's University of Technology Thonburi",
    location: "Bangkok, Thailand",
    period: "05/2024 - 08/2024",
    badge: { text: "Completed", color: "bg-[#F2FCE2] hover:bg-[#F2FCE2]/80 text-green-800" },
    description: [
      "Researched Generative AI's ability to generate realistic, synthetic stock charts",
      "Developed and trained a custom TimeGAN model achieving 91% accuracy",
      "Conducted hyperparameter optimization using random grid search",
      "Developed datasets from S&P 500 using Signal Processing Algorithms",
    ],
  },
  {
    title: "Business Founder - Mobile Car Detailing",
    company: "S&P Detailing",
    location: "Whitby, ON",
    period: "06/2023 - 09/2024",
    badge: { text: "Seasonal", color: "bg-[#FEC6A1] hover:bg-[#FEC6A1]/80 text-orange-800" },
    description: [
      "Founded and scaled a profitable mobile car detailing business, achieving consistent 5-figure monthly revenue",
      "Oversaw all business operations, including financial planning and resource allocation, ensuring growth and profitability",
      "Led a team of employees, fostering a collaborative environment to deliver high-quality services and ensure customer satisfaction, resulting in a strong client retention rate",
      "Led marketing strategies, using data analytics to boost efficiency and repeat business",
    ],
  },
  {
    title: "Business Founder - Advanced Mathematics Tutor",
    company: "Shaun's Tutoring",
    location: "Whitby, ON",
    period: "04/2023 - Present",
    badge: { text: "Active", color: "bg-[#FEC6A1] hover:bg-[#FEC6A1]/80 text-orange-800" },
    description: [
      "Founded an independent tutoring company, achieving a 4-figure monthly revenue, specializing in advanced-level mathematics for higher level students",
      "Provided extensive support, fostering a conductive learning environment and contributing to academic success",
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
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-bmw-blue">
                  {exp.title}
                </h3>
                <Badge className={`ml-2 ${exp.badge.color}`}>
                  {exp.badge.text}
                </Badge>
              </div>
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