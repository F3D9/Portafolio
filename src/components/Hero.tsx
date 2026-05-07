import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="inicio"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "0 2.5rem 5rem",
                position: "relative",
                overflow: "hidden",
                background: "var(--c1)",
            }}
        >
            {/* Fondo con imagen placeholder (reemplazá la URL con tu foto) */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.35,
                }}
            />

            {/* Gradiente overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to top, var(--c1) 40%, rgba(8,8,12,0.3) 100%)",
                }}
            />

            {/* Línea decorativa superior derecha */}
            <div
                style={{
                    position: "absolute",
                    top: "2.5rem",
                    right: "2.5rem",
                    width: "80px",
                    height: "2px",
                    background: "var(--c3)",
                }}
            />

            {/* Contenido */}
            <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
                <motion.p
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1.5rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--c3)",
                        marginBottom: "1.25rem",
                        margin: "0 0 1.25rem",
                    }}
                >
                    Backend Developer · Buenos Aires
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "clamp(3rem, 8vw, 6rem)",
                        lineHeight: 1.0,
                        color: "var(--c2)",
                        margin: "0 0 1.75rem",
                        letterSpacing: "-0.03em",
                    }}
                >
                    Federico
                    <br />
                    <span
                        style={{
                            WebkitTextStroke: "1px var(--c4)",
                            color: "transparent",
                        }}
                    >
                        Salgado
                    </span>

                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1rem",
                        color: "var(--c4)",
                        maxWidth: "480px",
                        lineHeight: 1.7,
                        margin: "0 0 2.5rem",
                    }}
                >
                    Node.js · TypeScript · PostgreSQL · Docker.
                    APIs limpias, código que se entiende, proyectos que llegan a
                    producción.
                </motion.p>

                <motion.div 
                    style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.5 }}
                    >
                    <a
                        href="https://linkedin.com/in/federico-salgado"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.75rem 2rem",
                            background: "var(--c3)",
                            color: "var(--c1)",
                            textDecoration: "none",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            letterSpacing: "0.04em",
                            transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    >
                        <FaLinkedin size={16} /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/F3D9"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.75rem 2rem",
                            border: "1px solid var(--c4)",
                            color: "var(--c5)",
                            textDecoration: "none",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.85rem",
                            letterSpacing: "0.04em",
                            transition: "border-color 0.2s, color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--c5)";
                            (e.currentTarget as HTMLElement).style.color = "var(--c2)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--c4)";
                            (e.currentTarget as HTMLElement).style.color = "var(--c5)";
                        }}
                    >
                        <FaGithub size={16} /> GitHub
                    </a>
                </motion.div>
            </div >
        </section >
    );
}