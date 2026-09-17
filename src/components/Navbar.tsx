import { useState } from "react";
import { Language, t } from "../i18n";
import { LanguageBadge } from "./LanguageBadge";

export default function Navbar({ lang, toggleLang }: { lang: Language, toggleLang: () => void }) {
    const [open, setOpen] = useState(false);

    const links = [
        { key: "navbar.inicio", href: "inicio" },
        { key: "navbar.sobreMi", href: "sobre-mí" },
        { key: "navbar.proyectos", href: "proyectos" },
        { key: "navbar.contacto", href: "contacto" },
    ];

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: "1.25rem 2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backdropFilter: "blur(12px)",
                backgroundColor: "rgba(5, 5, 5, 0.75)",
                borderBottom: "1px solid var(--c8)",
            }}
        >
            {/* Logo */}
            <span
                style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    color: "var(--c2)",
                    letterSpacing: "-0.02em",
                    fontWeight: 700,
                }}
            >
                Federico<span style={{ color: "var(--c3)" }}>.</span>
            </span>

            {/* Right section */}
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
                {/* Desktop links */}
                <ul
                    style={{
                        display: "flex",
                        gap: "2.5rem",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                    }}
                    className="nav-links"
                >
                    {links.map((l) => (
                        <li key={l.key}>
                            <a
                                href={`#${l.href}`}
                                style={{
                                    color: "rgba(226, 232, 240, 0.55)",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    transition: "color 0.2s",
                                    fontFamily: "var(--font-mono)",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.target as HTMLElement).style.color = "var(--c3)")
                                }
                                onMouseLeave={(e) =>
                                    ((e.target as HTMLElement).style.color =
                                        "rgba(226, 232, 240, 0.55)")
                                }
                            >
                                {t(lang, l.key)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Language Switcher */}
                <button
                    onClick={toggleLang}
                    style={{
                        background: "var(--c6)",
                        border: "1px solid var(--c8)",
                        color: "var(--c2)",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.9rem",
                        transition: "background 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--c8)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--c6)")}
                >
                    <LanguageBadge lang={lang} />
                    {lang === 'es' ? 'ES' : 'EN'}
                </button>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--c2)",
                        fontSize: "1.4rem",
                    }}
                    className="nav-toggle"
                    aria-label="Menú"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "rgba(5, 5, 5, 0.97)",
                        padding: "1.5rem 2.5rem",
                        borderBottom: "1px solid var(--c8)",
                    }}
                    className="mobile-menu"
                >
                    {links.map((l) => (
                        <a
                            key={l.key}
                            href={`#${l.href}`}
                            onClick={() => setOpen(false)}
                            style={{
                                display: "block",
                                padding: "0.75rem 0",
                                color: "rgba(226, 232, 240, 0.7)",
                                textDecoration: "none",
                                fontFamily: "var(--font-mono)",
                                fontSize: "1rem",
                                borderBottom: "1px solid var(--c8)",
                            }}
                        >
                            {t(lang, l.key)}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}