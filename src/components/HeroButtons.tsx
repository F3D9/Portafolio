import { FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ButtonProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    solid?: boolean;
    download?: boolean;
}

const PortfolioButton = ({ href, icon, label, solid = false, download = false }: ButtonProps) => {
    const baseStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem 2rem",
        textDecoration: "none",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        letterSpacing: "0.04em",
        cursor: "pointer",
        transition: "opacity 0.2s",
    };

    const solidStyle: React.CSSProperties = {
        background: "var(--c3)",
        color: "var(--c1)",
        fontWeight: 600,
    };

    const outlineStyle: React.CSSProperties = {
        border: "1px solid var(--c4)",
        color: "var(--c5)",
        fontWeight: 400,
    };

    return (
        <a
            href={href}
            {...(download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
            style={{ ...baseStyle, ...(solid ? solidStyle : outlineStyle) }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        >
            {icon}
            {label}
        </a>
    );
};

const HeroButtons = () => {
    return (
        <motion.div
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <PortfolioButton
                href="/Portafolio/CV_Federico_Salgado.pdf"
                icon={<FaFileAlt size={16} />}
                label="Descargar CV"
                solid
                download
            />
            <PortfolioButton
                href="https://linkedin.com/in/federico-salgado"
                icon={<FaLinkedin size={16} />}
                label="LinkedIn"
            />
            <PortfolioButton
                href="https://github.com/F3D9"
                icon={<FaGithub size={16} />}
                label="GitHub"
            />
        </motion.div>
    );
};

export default HeroButtons;