"use client";
import { useState } from "react";

export default function InstagramSection() {
  const [copied, setCopied] = useState(false);
  const HASHTAG = "#Vale15";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(HASHTAG);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section style={{ padding: "64px 26px" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 13,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#ff7dc6",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.85,
      }}>
        Comparte el momento
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
        Álbum Compartido
      </h2>

      <div style={{
        background: "linear-gradient(145deg,rgba(255,255,255,0.85),rgba(255,245,249,0.95))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 26,
        border: "1px solid rgba(212,71,138,0.16)",
        boxShadow: "0 8px 36px rgba(139,26,82,0.09)",
        textAlign: "center",
        overflow: "hidden",
      }}>
        {/* Barra superior */}
        <div style={{
          height: 2,
          background: "linear-gradient(90deg,transparent,#d4478a 30%,#efcb6d 70%,transparent)",
          opacity: 0.48,
        }} />

        <div style={{ padding: "28px 26px 30px" }}>
          {/* Ícono Instagram */}
          <div style={{
            width: 66,
            height: 66,
            borderRadius: 22,
            margin: "0 auto 16px",
            background: "linear-gradient(135deg,#ffa8c5,#d4478a,#efcb6d)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 22px rgba(212,71,138,0.28)",
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
            </svg>
          </div>

          <h3 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 600,
            fontSize: 22,
            color: "#3a0f26",
            marginBottom: 6,
            letterSpacing: 1,
          }}>
            Comparte tus fotos del evento
          </h3>

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 17,
            color: "rgba(58,15,38,0.65)",
            lineHeight: 1.65,
            marginBottom: 20,
          }}>
            Usa el hashtag en tus publicaciones y stories para que todos podamos ver y revivir este día tan especial.
          </p>

          {/* Hashtag destacado */}
          <button
            onClick={handleCopy}
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              fontSize: 26,
              fontWeight: 900,
              background: "linear-gradient(135deg,#d4478a,#8b1a52)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: 2,
              border: "2px solid rgba(212,71,138,0.25)",
              borderRadius: 16,
              padding: "12px 28px",
              cursor: "pointer",
              display: "block",
              width: "100%",
              marginBottom: 8,
              backgroundColor: "transparent",
              transition: "transform 0.2s ease, border-color 0.3s ease",
              borderColor: copied ? "rgba(212,71,138,0.55)" : "rgba(212,71,138,0.25)",
            }}
            aria-label={`Copiar hashtag ${HASHTAG}`}
          >
            {HASHTAG}
          </button>

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: 14,
            color: copied ? "#d4478a" : "rgba(58,15,38,0.45)",
            letterSpacing: 1,
            transition: "color 0.3s",
          }}>
            {copied ? "¡Copiado! ✓" : "Toca para copiar el hashtag"}
          </p>

          <div style={{
            width: 36,
            height: 1,
            margin: "22px auto 18px",
            background: "linear-gradient(90deg,transparent,rgba(212,71,138,0.4),transparent)",
          }} />

          {/* ══════════ QR DEL ÁLBUM COMPARTIDO ══════════ */}
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: 13,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#d4478a",
            marginBottom: 14,
            opacity: 0.85,
          }}>
            Escanea & comparte
          </p>

          {/* Caja del QR con marco dorado */}
          <div style={{
            display: "inline-block",
            padding: 14,
            background: "#fff5f9",
            border: "1px solid rgba(196,146,10,0.42)",
            borderRadius: 18,
            boxShadow: "0 4px 18px rgba(196,146,10,0.18), inset 0 0 0 4px rgba(255,255,255,0.6)",
            position: "relative",
            marginBottom: 14,
          }}>
            {/* Esquinas decorativas doradas */}
            {(["tl","tr","bl","br"] as const).map((corner) => {
              const pos: React.CSSProperties =
                corner === "tl" ? { top: -1, left: -1 } :
                corner === "tr" ? { top: -1, right: -1, transform: "rotate(90deg)", transformOrigin: "top right" } :
                corner === "br" ? { bottom: -1, right: -1, transform: "rotate(180deg)", transformOrigin: "bottom right" } :
                                  { bottom: -1, left: -1, transform: "rotate(270deg)", transformOrigin: "bottom left" };
              return (
                <div key={corner} style={{ position: "absolute", ...pos }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 2 L2 10" stroke="#c4920a" strokeWidth="1.2" strokeLinecap="round" opacity="0.85"/>
                    <path d="M2 2 L10 2" stroke="#c4920a" strokeWidth="1.2" strokeLinecap="round" opacity="0.85"/>
                    <circle cx="2" cy="2" r="1.5" fill="#c4920a" opacity="0.95"/>
                  </svg>
                </div>
              );
            })}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Ftags%2FVale15&color=8b1a52&bgcolor=fff5f9&margin=8&format=png"
              alt="Código QR del álbum compartido — escanea para ver las fotos del evento"
              width={200}
              height={200}
              style={{ display: "block", borderRadius: 8 }}
            />
          </div>

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 15,
            color: "rgba(58,15,38,0.72)",
            lineHeight: 1.6,
            letterSpacing: 0.3,
            maxWidth: 280,
            margin: "0 auto",
          }}>
            Escanea con tu cámara para entrar al álbum compartido y ver todas las fotos del evento.
          </p>

          <div style={{
            width: 36,
            height: 1,
            margin: "20px auto 16px",
            background: "linear-gradient(90deg,transparent,rgba(212,71,138,0.4),transparent)",
          }} />

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 14,
            color: "rgba(58,15,38,0.45)",
            letterSpacing: 1,
            fontStyle: "italic",
          }}>
            Con mucho cariño por{" "}
            <a
              href="https://www.instagram.com/elysium.invitaciones"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d4478a", textDecoration: "none", fontWeight: 600 }}
            >
              @elysium.invitaciones
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
