import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = ["Inicio", "Sobre mí","Proyectos", "Contacto"];

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
                backgroundColor: "rgba(8, 8, 12, 0.75)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            {/* Logo */}
            <span
                style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.4rem",
                    color: "var(--c2)",
                    letterSpacing: "-0.02em",
                }}
            >
                Federico<span style={{ color: "var(--c3)" }}>.</span>
            </span>

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
                    <li key={l}>
                        <a
                            href={`#${l.toLowerCase().replace(" ", "-")}`}
                            style={{
                                color: "rgba(240,237,230,0.55)",
                                textDecoration: "none",
                                fontSize: "0.85rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                transition: "color 0.2s",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color = "var(--c3)")
                            }
                            onMouseLeave={(e) =>
                            ((e.target as HTMLElement).style.color =
                                "rgba(240,237,230,0.55)")
                            }
                        >
                            {l}
                        </a>
                    </li>
                ))}
            </ul>

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

            {/* Mobile menu */}
            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "rgba(8,8,12,0.97)",
                        padding: "1.5rem 2.5rem",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                    className="mobile-menu"
                >
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase().replace(" ", "-")}`}
                            onClick={() => setOpen(false)}
                            style={{
                                display: "block",
                                padding: "0.75rem 0",
                                color: "rgba(240,237,230,0.7)",
                                textDecoration: "none",
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "1rem",
                                borderBottom: "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            {l}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}