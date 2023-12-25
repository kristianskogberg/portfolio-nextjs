import About from "./components/About";
import Skills from "./components/skills/Skills";

import Hero from "./components/Hero";

import Projects from "./components/projects/Projects";
import GridBackground from "./components/GridBackground";

export default function Home() {
  return (
    <div className="h-screen scrollbar px-0 scrollbar-track-gray-400/20 scrollbar-thumb-accent/80">
      <Hero />
      <div className="px-4 md:px-8">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}
