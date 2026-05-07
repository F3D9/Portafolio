import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "./projects-data";

function ProjectCard({ title, status, description, tags, images, github, demo }: Project) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }} className="project-card">
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, var(--c3), var(--c6))" }} />

      <div style={{ padding: "3rem", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem" }}>
        <div>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--c6)", display: "block", marginBottom: "1rem" }}>{status}</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--c2)", margin: "0 0 1.25rem", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{title}</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--c4)", lineHeight: 1.8, margin: 0 }}>{description}</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--c5)", border: "1px solid rgba(255,255,255,0.1)", padding: "0.3rem 0.8rem", letterSpacing: "0.03em" }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "200px" }}>
          <img src={images[current]} alt={`${title} preview ${current + 1}`} style={{ width: "100%", height: "100%", minHeight: "200px", display: "block", objectFit: "cover" }} />
          {images.length > 1 && (
            <>
              <button onClick={prev} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", background: "rgba(8,8,12,0.6)", border: "1px solid var(--c8)", color: "var(--c2)", width: "2rem", height: "2rem", cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
              <button onClick={next} style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", background: "rgba(8,8,12,0.6)", border: "1px solid var(--c8)", color: "var(--c2)", width: "2rem", height: "2rem", cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
              <div style={{ position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.4rem" }}>
                {images.map((_, i) => (
                  <span key={i} onClick={() => setCurrent(i)} style={{ width: "6px", height: "6px", borderRadius: "50%", background: i === current ? "var(--c3)" : "var(--c8)", cursor: "pointer", display: "block", transition: "background 0.2s" }} />
                ))}
              </div>
            </>
          )}
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href={github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.5rem", background: "var(--c3)", color: "var(--c2)", textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.04em", transition: "opacity 0.2s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}>GitHub →</a>
          <a href={demo} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.5rem", border: "1px solid var(--c6)", color: "var(--c6)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: "0.82rem", letterSpacing: "0.04em", transition: "background 0.2s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(77,180,240,0.1)")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}>Ver demo →</a>
        </div>
      </div>
    </div>
  );
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <motion.section initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} id="proyectos" style={{ background: "var(--c1)", padding: "7rem var(--section-padding)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--c3)", margin: "0 0 1.25rem" }}>Proyectos</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--c2)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>
              Lo que construí<br /><span style={{ color: "var(--c4)" }}>hasta ahora.</span>
            </h2>
            <div style={{ width: "40px", height: "2px", background: "var(--c3)", flexShrink: 0 }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}