import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

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
            {/* Fondo color plano azul */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "var(--c9)",
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
                    Full Stack Developer · Buenos Aires
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
                    Salgado
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
                    APIs limpias, código que se entiende, proyectos que llegan a
                    producción.
                </motion.p>

                <motion.div 
                    style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.5 }}
                    >
                    <HeroButtons />
                </motion.div>
            </div >
        </section >
    );
}