import { FaNodeJs, FaDocker, FaJava, FaCertificate } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiReact, SiPython, SiExpress} from "react-icons/si";
import { motion } from "framer-motion";
import { Language, t } from "../i18n";

const skills = [
    { name: "Java", icon: FaJava },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Spring Boot", icon: FaJava }, 
    { name: "Node.js", icon: FaNodeJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "NestJS", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Docker", icon: FaDocker },
    { name: "React", icon: SiReact },
];

const certifications = {
    es: [
        { name: "Java para Principiantes", issuer: "TodoCode Academy", date: "Octubre 2026", link: "https://todocodeacademy.com/certificate/java-para-principiantes-nqk/" },
        { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "En proceso", link: "#" },
    ],
    en: [
        { name: "Java for Beginners", issuer: "TodoCode Academy", date: "October 2026", link: "https://todocodeacademy.com/certificate/java-para-principiantes-nqk/" },
        { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "In Progress", link: "#" },
    ]
};

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
                    alignItems: "start",
                }}
                className="about-grid"
            >
                {/* Columna izquierda */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
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
                                margin: "0",
                                maxWidth: "600px",
                            }}
                        >
                            {t(lang, 'about.description')}
                        </p>
                    </div>

                    {/* Certificaciones integradas */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                            <FaCertificate size={18} color="var(--c3)" />
                            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c3)", margin: 0 }}>
                                {lang === 'es' ? 'Certificaciones' : 'Certifications'}
                            </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {certifications[lang].map((cert, index) => (
                                <a 
                                    key={index} 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ 
                                        display: "flex", 
                                        justifyContent: "space-between", 
                                        alignItems: "center", 
                                        padding: "1.25rem 1.5rem", 
                                        background: "var(--c1)", 
                                        border: "1px solid var(--c8)", 
                                        borderRadius: "4px",
                                        textDecoration: "none",
                                        transition: "all 0.2s",
                                        cursor: "pointer"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "var(--c3)";
                                        e.currentTarget.style.background = "rgba(59, 130, 246, 0.05)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "var(--c8)";
                                        e.currentTarget.style.background = "var(--c1)";
                                    }}
                                >
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <p style={{ fontFamily: "var(--font-body)", color: "var(--c2)", fontSize: "1rem", fontWeight: 600, margin: 0 }}>{cert.name}</p>
                                        <p style={{ fontFamily: "var(--font-body)", color: "var(--c4)", fontSize: "0.8rem", margin: 0 }}>{cert.issuer}</p>
                                    </div>
                                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--c5)", fontSize: "0.7rem", marginLeft: "1rem" }}>{cert.date}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Columna derecha — skills */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <p
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--c3)",
                            marginBottom: "0",
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