import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import MouseEffect from "@/components/MouseEffect";

const Index = () => {
  return (
    <div className="bg-navy min-h-screen">
      <MouseEffect />
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;