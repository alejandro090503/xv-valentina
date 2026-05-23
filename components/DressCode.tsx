"use client";

export default function DressCode() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(155deg,#fff5f9 0%,#fde4ee 55%,#fff5f9 100%)",
        borderRadius: 28,
        padding: "36px 24px 32px",
        border: "1px solid rgba(196,146,10,0.30)",
        boxShadow: "0 18px 60px rgba(212,71,138,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}>
        {/* Luces de fondo suaves */}
        <div style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse at 18% 18%,rgba(212,71,138,0.10) 0%,transparent 60%), radial-gradient(ellipse at 82% 82%,rgba(239,203,109,0.14) 0%,transparent 60%)",
        }} />
        {/* Línea superior dorada */}
        <div style={{
          position: "absolute",
          top: -1,
          left: "18%",
          right: "18%",
          height: 2,
          background: "linear-gradient(90deg,transparent,#d4478a 30%,#efcb6d 70%,transparent)",
          opacity: 0.75,
        }} />

        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#8b1a52",
          textAlign: "center",
          marginBottom: 4,
          position: "relative",
          opacity: 0.85,
        }}>
          Etiqueta
        </p>
        <h2 style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 50,
          textAlign: "center",
          lineHeight: 1.1,
          marginBottom: 6,
          position: "relative",
          background: "linear-gradient(135deg,#8b1a52 0%,#d4478a 45%,#efcb6d 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 2px 14px rgba(212,71,138,0.25))",
        }}>
          Dress Code
        </h2>
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 17,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#8b1a52",
          textAlign: "center",
          marginBottom: 22,
          position: "relative",
          opacity: 0.92,
        }}>
          Formal
        </p>

        {/* Barra de paleta */}
        <div style={{
          display: "flex",
          height: 6,
          borderRadius: 3,
          overflow: "hidden",
          marginBottom: 26,
          boxShadow: "0 2px 10px rgba(139,26,82,0.20)",
          position: "relative",
        }}>
          {["#ffa8c5", "#efcb6d", "#ff7dc6", "#ffffff"].map((c, i) => (
            <div key={i} style={{ flex: 1, background: c }} />
          ))}
        </div>

        {/* Nota de colores a evitar */}
        <div style={{
          position: "relative",
          textAlign: "center",
          padding: "16px 18px",
          border: "1px solid rgba(212,71,138,0.30)",
          borderRadius: 14,
          background: "rgba(255,255,255,0.55)",
          marginTop: 8,
        }}>
          <div style={{
            position: "absolute",
            top: -11,
            left: "50%",
            transform: "translateX(-50%)",
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#fff5f9",
            border: "1.5px solid rgba(212,71,138,0.45)",
            fontSize: 11,
            lineHeight: "20px",
            textAlign: "center",
            color: "#8b1a52",
            fontWeight: 700,
          }}>
            ✕
          </div>
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 17,
            fontStyle: "italic",
            fontWeight: 600,
            color: "#8b1a52",
            letterSpacing: 0.5,
            lineHeight: 1.55,
          }}>
            Por favor evitar el color rosado pastel claro
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
            <div style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#ffc6e2",
              border: "2px solid rgba(255,255,255,0.95)",
              boxShadow: "0 2px 8px rgba(212,71,138,0.25)",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
