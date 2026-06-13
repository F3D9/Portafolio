import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { projects } from "./components/projects-data";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div style={{ background: "var(--c1)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}