import { FaNodeJs, FaDocker, FaGitAlt, FaJava, } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiRailway, SiReact, SiVitest, SiPython, SiExpress, SiTailwindcss} from "react-icons/si";
import { motion } from "framer-motion";
import { Language, t } from "../i18n";

const skills = [
    { name: "Java", icon: FaJava },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Spring Boot", icon: FaJava }, // Reuso el icono de Java ya que no importamos Spring
    { name: "Docker", icon: FaDocker },
    { name: "Node.js", icon: FaNodeJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Express", icon: SiExpress },
    { name: "Python", icon: SiPython },
    { name: "React", icon: SiReact },
    { name: "Vitest", icon: SiVitest },
    { name: "Git", icon: FaGitAlt },
    { name: "Tailwind CSS", icon: SiTailwindcss }
];

export default function About({ lang }: { lang: Language }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            id="sobre-mí"
            style={{
                background: "var(--c9)",
                padding: "7rem 2.5rem",
                borderTop: "1px solid var(--c8)",
                borderBottom: "1px solid var(--c8)",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1.2fr 0.8fr",
                    gap: "6rem",
                    alignItems: "center",
                }}
                className="about-grid"
            >
                {/* Columna izquierda */}
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--c3)",
                            marginBottom: "1.5rem",
                            display: "block",
                        }}
                    >
                        {t(lang, 'about.title')}
                    </p>

                    <h2
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            color: "var(--c2)",
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            margin: "0 0 2rem",
                            fontWeight: 700,
                        }}
                    >
                        {t(lang, 'about.subtitle')} 
                        <br />
                        <span style={{ color: "var(--c4)", fontWeight: 400 }}>
                            {t(lang, 'about.education')}
                        </span>
                    </h2>

                    <p
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "1.05rem",
                            color: "var(--c4)",
                            lineHeight: 1.8,
                            margin: "0 0 1.25rem",
                            maxWidth: "600px",
                        }}
                    >
                        {t(lang, 'about.description')}
                    </p>
                </div>

                {/* Columna derecha — skills */}
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--c3)",
                            marginBottom: "1.5rem",
                            display: "block",
                        }}
                    >
                        {t(lang, 'about.stackTitle')}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                        {skills.map(({ name, icon: Icon }) => (
                            <div
                                key={name}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "1.5rem 0.5rem",
                                    background: "var(--c1)",
                                    border: "1px solid var(--c8)",
                                    transition: "border-color 0.2s",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--c3)")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--c8)")}
                            >
                                <Icon size={24} color="var(--c3)" />
                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--c4)", textAlign: "center" }}>
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