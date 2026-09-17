import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { projects } from "./components/projects-data";
import Contact from "./components/Contact";
import { Language } from "./i18n";

export default function App() {
  const [lang, setLang] = useState<Language>('es');

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div style={{ background: "var(--c1)", minHeight: "100vh" }}>
      <Navbar lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects projects={projects} lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}