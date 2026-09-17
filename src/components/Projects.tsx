import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "./projects-data";
import { Language, t } from "../i18n";

function ProjectCard({ title, status, description, tags, images, github, demo, lang }: Project & { lang: Language }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  const isAssetto = title[lang].includes("Assetto Corsa");

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--c8)", position: "relative", overflow: "hidden", background: "var(--c1)" }} className="project-card">
      <div style={{ padding: "3rem", borderRight: "1px solid var(--c8)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem" }}>
        <div >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c3)", display: "block", marginBottom: "1rem" }}>{status[lang]}</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--c2)", margin: "0 0 1.25rem", letterSpacing: "-0.02em", lineHeight: 1.1, fontWeight: 700 }}>{title[lang]}</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--c4)", lineHeight: 1.7, margin: 0 }}>{description[lang]}</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--c2)", background: "var(--c6)", padding: "0.3rem 0.8rem", letterSpacing: "0.02em" }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem", background: "var(--c9)" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", border: "1px solid var(--c8)" }}>
          <img src={images[current]} alt={`${title[lang]} preview ${current + 1}`} style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
          {images.length > 1 && (
            <>
              <button onClick={prev} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", background: "var(--c1)", border: "1px solid var(--c8)", color: "var(--c2)", width: "2rem", height: "2rem", cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>‹</button>
              <button onClick={next} style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", background: "var(--c1)", border: "1px solid var(--c8)", color: "var(--c2)", width: "2rem", height: "2rem", cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>›</button>
              <div style={{ position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.4rem", zIndex: 10 }}>
                {images.map((_, i) => (
                  <span key={i} onClick={() => setCurrent(i)} style={{ width: "6px", height: "6px", borderRadius: "50%", background: i === current ? "var(--c3)" : "var(--c8)", cursor: "pointer", display: "block", transition: "background 0.2s" }} />
                ))}
              </div>
            </>
          )}
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href={github} target="_blank" rel="noopener noreferrer" style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            padding: "0.7rem 1.5rem", 
            background: isAssetto ? "var(--c6)" : "var(--c3)", 
            color: isAssetto ? "var(--c5)" : "var(--c2)", 
            textDecoration: "none", 
            fontFamily: "var(--font-mono)", 
            fontWeight: 600, 
            fontSize: "0.8rem", 
            pointerEvents: isAssetto ? "none" : "auto",
            opacity: isAssetto ? 0.5 : 1,
            transition: "opacity 0.2s" 
          }}>GitHub →</a>
          <a href={demo} target="_blank" rel="noopener noreferrer" style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            padding: "0.7rem 1.5rem", 
            border: "1px solid",
            borderColor: isAssetto ? "var(--c8)" : "var(--c3)", 
            color: isAssetto ? "var(--c5)" : "var(--c3)", 
            textDecoration: "none", 
            fontFamily: "var(--font-mono)", 
            fontSize: "0.8rem", 
            pointerEvents: isAssetto ? "none" : "auto",
            opacity: isAssetto ? 0.5 : 1,
            transition: "background 0.2s" 
          }}>Demo →</a>
        </div>
      </div>
    </div>
  );
}

interface ProjectsProps {
  projects: Project[];
  lang: Language;
}

export default function Projects({ projects, lang }: ProjectsProps) {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} id="proyectos" style={{ background: "var(--c1)", padding: "7rem var(--section-padding)", borderTop: "1px solid var(--c8)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c3)", margin: "0 0 1.25rem" }}>{t(lang, 'projects.title')}</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--c2)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: 0, fontWeight: 700 }}>
              {t(lang, 'projects.headline')}<br /><span style={{ color: "var(--c4)" }}>{t(lang, 'projects.subheadline')}</span>
            </h2>
            <div style={{ width: "40px", height: "2px", background: "var(--c3)", flexShrink: 0 }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {projects.map((project) => (
            <ProjectCard key={project.title.es} {...project} lang={lang} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}