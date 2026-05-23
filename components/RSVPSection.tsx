"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const WA_NUMBER = "526181594377";

function buildWhatsAppMessage(pases: number, names: string[]): string {
  const acompLines = names
    .slice(1)
    .map((n, i) => `\n${i + 2}. ${n || `Acompañante ${i + 2}`}`)
    .join("");

  const msg =
    `¡Hola! Con mucho gusto confirmo mi asistencia a la celebración de Valentina. 🎉\n` +
    `✅ Asistiré con ${pases} pase${pases > 1 ? "s" : ""}.\n` +
    `Mis acompañantes:\n` +
    `1. ${names[0] || "Invitado principal"}` +
    acompLines +
    `\n¡Nos vemos pronto! 💫`;

  return encodeURIComponent(msg);
}

export default function RSVPSection() {
  const searchParams = useSearchParams();
  const [pases, setPases] = useState(1);
  const [names, setNames] = useState<string[]>([""]);

  useEffect(() => {
    const raw = searchParams.get("pases");
    const n = raw ? parseInt(raw, 10) : 1;
    const validated = isNaN(n) || n < 1 || n > 5 ? 1 : n;
    setPases(validated);
    setNames(Array.from({ length: validated }, () => ""));
  }, [searchParams]);

  const handleName = (i: number, val: string) => {
    setNames((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const handleConfirm = () => {
    const msgEncoded = buildWhatsAppMessage(pases, names);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msgEncoded}`, "_blank");
  };

  return (
    <section style={{ padding: "64px 26px" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 13,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#d4478a",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.85,
      }}>
        Confirmación de Asistencia
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 1.1,
        marginBottom: 30,
        background: "linear-gradient(135deg,#8b1a52 0%,#d4478a 45%,#efcb6d 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}>
        Confirmación
      </h2>

      <div style={{
        background: "linear-gradient(145deg,rgba(255,255,255,0.88),rgba(255,245,249,0.97))",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(212,71,138,0.18)",
        borderRadius: 24,
        padding: "28px 22px",
        boxShadow: "0 4px 20px rgba(139,26,82,0.08)",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Barra superior */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "15%",
          right: "15%",
          height: 1.5,
          background: "linear-gradient(90deg,transparent,#d4478a 25%,#efcb6d 50%,#ffa8c5 75%,transparent)",
        }} />

        {/* Badge de pases */}
        <div style={{
          display: "block",
          width: "fit-content",
          margin: "0 auto 22px",
          background: "linear-gradient(135deg,#d4478a,#8b1a52)",
          color: "#fff",
          borderRadius: 30,
          padding: "5px 20px",
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontSize: 15,
          letterSpacing: 2,
          textAlign: "center",
        }}>
          {pases === 1 ? "1 pase disponible" : `${pases} pases disponibles`}
        </div>

        {/* Fecha límite */}
        <p style={{
          textAlign: "center",
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 15,
          color: "#d4478a",
          letterSpacing: 2,
          marginBottom: 22,
        }}>
          Confirma antes del 28 de mayo de 2026
        </p>

        {/* Campos de nombre */}
        <div style={{ marginBottom: 8 }}>
          {Array.from({ length: pases }).map((_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              {/* Número */}
              <div style={{
                flexShrink: 0,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#d4478a,#ffa8c5)",
                color: "#fff",
                fontSize: 13,
                fontFamily: "var(--font-cormorant), serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}>
                {i + 1}
              </div>

              <input
                type="text"
                placeholder={i === 0 ? "Tu nombre completo" : `Nombre acompañante ${i + 1}`}
                value={names[i] ?? ""}
                onChange={(e) => handleName(i, e.target.value)}
                style={{
                  flex: 1,
                  padding: "14px 16px",
                  minHeight: 50,
                  border: "1.5px solid rgba(212,71,138,0.25)",
                  borderRadius: 12,
                  background: "rgba(255,245,249,0.80)",
                  fontFamily: "var(--font-lato), sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#3a0f26",
                  outline: "none",
                  transition: "border-color 0.3s",
                  WebkitAppearance: "none",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#d4478a")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(212,71,138,0.25)")}
              />
            </div>
          ))}
        </div>

        {/* Botón confirmar */}
        <button
          onClick={handleConfirm}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: 8,
            padding: "16px",
            minHeight: 52,
            background: "linear-gradient(135deg,#d4478a,#8b1a52)",
            color: "#fff",
            borderRadius: 30,
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: 15,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            transition: "opacity .3s,transform .3s",
            boxShadow: "0 4px 22px rgba(139,26,82,0.28)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.88";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Confirmar Asistencia
        </button>
      </div>
    </section>
  );
}
