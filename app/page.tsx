import About from "./components/About";
import Skills from "./components/skills/Skills";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <div className="h-screen scrollbar px-4 md:px-8 scrollbar-track-gray-400/20 scrollbar-thumb-accent/80">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
