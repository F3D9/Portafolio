import { FaNodeJs, FaDocker, FaGitAlt, FaJava, } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiRailway, SiReact, SiVitest, SiPython, SiExpress, SiTailwindcss} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: FaJava },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Docker", icon: FaDocker },
    { name: "React", icon: SiReact },
    { name: "Railway", icon: SiRailway },
    { name: "Vitest", icon: SiVitest },
    { name: "Git", icon: FaGitAlt },
    { name: "Tailwind CSS", icon: SiTailwindcss }
];

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            id="sobre-mí"
            style={{
                background: "var(--c1)",
                padding: "7rem 2.5rem",
                borderTop: "1px solid var(--c8)",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "5rem",
                    alignItems: "start",
                }}
                className="about-grid"
            >
                {/* Columna izquierda */}
                <div>
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.72rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--c3)",
                            margin: "0 0 1.25rem",
                        }}
                    >
                        Sobre mí
                    </p>

                    <h2
                        style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            color: "var(--c2)",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                            margin: "0 0 2rem",
                        }}
                    >
                        Desarrollador Fullstack 
                        <br />
                        <span style={{ color: "var(--c4)" }}>
                            Estudiante en UBA.
                        </span>
                    </h2>

                    <div
                        style={{
                            width: "40px",
                            height: "2px",
                            background: "var(--c3)",
                            marginBottom: "2rem",
                        }}
                    />

                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1rem",
                            color: "var(--c4)",
                            lineHeight: 1.8,
                            margin: "0 0 1.25rem",
                        }}
                    >
                        Soy Federico, desarrollador Fullstack Junior con foco en backend — Node.js, TypeScript
                        y PostgreSQL. Estoy cursando Ingeniería Informática en la UBA y ya tengo proyectos
                        deployados en producción. Busco sumarme a un equipo donde pueda crecer y aportar
                        desde el día uno. Disponible para CABA presencial o remoto.
                    </p>

                </div>

                {/* Columna derecha — skills */}
                <div>
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.72rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--c3)",
                            margin: "0 0 1.25rem",
                        }}
                    >
                        Stack
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "3.5rem" }}>
                        {skills.map(({ name, icon: Icon }) => (
                            <div
                                key={name}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    height: "7rem",
                                    padding: "1rem 1.25rem",
                                    border: "1px solid var(--c3)",
                                    paddingTop: "2rem",
                                    color: "var(--c3)",

                                }}
                            >
                                <Icon size={28} />
                                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.03em" }}>
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.section>
    );
}