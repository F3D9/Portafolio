import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// ─── Reemplazá estos valores con los de tu cuenta EmailJS ───
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--c8)",
    borderRadius: 0,
    padding: "0.85rem 1rem",
    color: "var(--c2)",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
};

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<Status>("idle");
    const [focused, setFocused] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            formRef.current.reset();
        } catch {
            setStatus("error");
        }
    };

    const borderColor = (field: string) =>
        focused === field ? "var(--c3)" : "var(--c8)";

    return (
        <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            id="contacto"
            style={{
                background: "var(--c1)",
                padding: "7rem var(--section-padding)",
                borderTop: "1px solid var(--c8)",
            }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="contact-grid">

                {/* Columna izquierda — texto */}
                <div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--c3)", margin: "0 0 1.25rem" }}>
                        Contacto
                    </p>

                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--c2)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 2rem" }}>
                        Hablemos<br />
                        <span style={{ color: "var(--c4)" }}>de tu proyecto.</span>
                    </h2>

                    <div style={{ width: "40px", height: "2px", background: "var(--c3)", marginBottom: "2rem" }} />

                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--c4)", lineHeight: 1.8, margin: "0 0 2.5rem" }}>
                        Si tenés un proyecto en mente o querés hablar de trabajo, escribime.
                    </p>

                    {/* Info directa */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {[
                            { label: "Idiomas", value: "Español · Inglés" },
                            { label: "Ubicación", value: "Buenos Aires, Argentina" },
                        ].map(({ label, value }) => (
                            <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c3)", minWidth: "90px" }}>
                                    {label}
                                </span>
                                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--c5)" }}>
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Columna derecha — formulario */}
                <div>
                    <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                        <div>
                            <label style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c4)", display: "block", marginBottom: "0.5rem" }}>
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                required
                                placeholder="Tu nombre"
                                style={{ ...inputStyle, borderColor: borderColor("nombre") }}
                                onFocus={() => setFocused("nombre")}
                                onBlur={() => setFocused(null)}
                            />
                        </div>

                        <div>
                            <label style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c4)", display: "block", marginBottom: "0.5rem" }}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                required
                                placeholder="tu@email.com"
                                style={{ ...inputStyle, borderColor: borderColor("email") }}
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                            />
                        </div>

                        <div>
                            <label style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c4)", display: "block", marginBottom: "0.5rem" }}>
                                Mensaje
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                placeholder="Contame de qué se trata..."
                                style={{ ...inputStyle, borderColor: borderColor("mensaje"), resize: "vertical" }}
                                onFocus={() => setFocused("mensaje")}
                                onBlur={() => setFocused(null)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            style={{
                                marginTop: "0.5rem",
                                padding: "0.85rem 2rem",
                                background: status === "sending" ? "rgba(104,106,255,0.5)" : "var(--c3)",
                                color: "var(--c2)",
                                border: "none",
                                fontFamily: "var(--font-body)",
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                cursor: status === "sending" ? "not-allowed" : "pointer",
                                transition: "opacity 0.2s",
                                width: "100%",
                            }}
                            onMouseEnter={(e) => { if (status !== "sending") (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                        >
                            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                        </button>

                        {/* Feedback */}
                        {status === "success" && (
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "#6bff6b", textAlign: "center", margin: 0 }}>
                                ✓ Mensaje enviado correctamente.
                            </p>
                        )}
                        {status === "error" && (
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "#ff6b6b", textAlign: "center", margin: 0 }}>
                                Algo salió mal. Intentá de nuevo o escribime directo al mail.
                            </p>
                        )}

                    </form>
                </div>
            </div>
        </motion.section>
    );
}