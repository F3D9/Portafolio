import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import { Language, t } from "../i18n";

export default function Hero({ lang }: { lang: Language }) {
    return (
        <section
            id="inicio"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 2.5rem",
                position: "relative",
                overflow: "hidden",
                background: "var(--c1)",
            }}
        >
            {/* Subtle Grid Background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(var(--c8) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                    opacity: 0.5,
                    zIndex: 1,
                }}
            />
            
            {/* Glow Effect */}
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    right: "-10%",
                    width: "500px",
                    height: "500px",
                    background: "radial-gradient(circle, var(--c7) 0%, transparent 70%)",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />

            <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--c3)",
                        marginBottom: "1.5rem",
                        display: "block",
                    }}
                >
                    &gt; {t(lang, 'hero.role')}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(3.5rem, 10vw, 7rem)",
                        lineHeight: 0.9,
                        color: "var(--c2)",
                        margin: "0 0 2rem",
                        letterSpacing: "-0.04em",
                        fontWeight: 800,
                    }}
                >
                    {t(lang, 'hero.title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1.1rem",
                        color: "var(--c4)",
                        maxWidth: "550px",
                        lineHeight: 1.6,
                        margin: "0 0 3rem",
                    }}
                >
                    {t(lang, 'hero.description')}
                </motion.p>

                <motion.div 
                    style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.6 }}
                    >
                    <HeroButtons lang={lang} />
                </motion.div>
            </div >
        </section >
    );
}