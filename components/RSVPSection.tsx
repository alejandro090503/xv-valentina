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
            gap: 10,
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Confirmar Asistencia
        </button>
      </div>
    </section>
  );
}
