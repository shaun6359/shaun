import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "next-themes";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" enableSystem>
      <div className="bg-navy dark:bg-navy-dark min-h-screen transition-colors duration-300">
        <Navigation />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default Index;