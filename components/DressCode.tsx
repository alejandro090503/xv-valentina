"use client";

export default function DressCode() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(155deg,#3a0f26 0%,#250a18 55%,#3a0f26 100%)",
        borderRadius: 28,
        padding: "36px 24px 32px",
        boxShadow: "0 18px 60px rgba(58,15,38,0.28)",
      }}>
        {/* Luces de fondo */}
        <div style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse at 18% 18%,rgba(212,71,138,0.13) 0%,transparent 60%), radial-gradient(ellipse at 82% 82%,rgba(239,203,109,0.09) 0%,transparent 60%)",
        }} />
        {/* Línea superior dorada */}
        <div style={{
          position: "absolute",
          top: -1,
          left: "18%",
          right: "18%",
          height: 2,
          background: "linear-gradient(90deg,transparent,#d4478a 30%,#efcb6d 70%,transparent)",
          opacity: 0.55,
        }} />

        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontSize: 11,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "rgba(255,168,197,0.55)",
          textAlign: "center",
          marginBottom: 4,
          position: "relative",
        }}>
          Etiqueta
        </p>
        <h2 style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 50,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.05,
          marginBottom: 6,
          position: "relative",
          filter: "drop-shadow(0 2px 14px rgba(212,71,138,0.45))",
        }}>
          Dress Code
        </h2>
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 16,
          letterSpacing: 5,
          textTransform: "uppercase",
          color: "rgba(255,168,197,0.75)",
          textAlign: "center",
          marginBottom: 22,
          position: "relative",
        }}>
          Formal
        </p>

        {/* Barra de paleta */}
        <div style={{
          display: "flex",
          height: 5,
          borderRadius: 3,
          overflow: "hidden",
          marginBottom: 26,
          boxShadow: "0 2px 10px rgba(0,0,0,0.35)",
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
          padding: "15px 18px",
          border: "1px solid rgba(255,168,197,0.22)",
          borderRadius: 14,
          background: "rgba(255,168,197,0.06)",
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
            background: "#250a18",
            border: "1px solid rgba(255,168,197,0.32)",
            fontSize: 10,
            lineHeight: "22px",
            textAlign: "center",
            color: "rgba(255,168,197,0.65)",
          }}>
            ✕
          </div>
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: 500,
            color: "rgba(255,168,197,0.80)",
            letterSpacing: 1,
            lineHeight: 1.65,
          }}>
            Por favor evitar el color rosado pastel claro
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#ffc6e2",
              border: "2px solid rgba(255,255,255,0.18)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
