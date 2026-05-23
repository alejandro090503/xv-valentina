"use client";

export default function MesaRegalos() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 50,
        textAlign: "center",
        lineHeight: 1.1,
        marginBottom: 16,
        background: "linear-gradient(135deg,#8b1a52 0%,#d4478a 45%,#efcb6d 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}>
        Mesa de Regalos
      </h2>

      {/* Frase intro */}
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: 19,
        color: "#8b1a52",
        lineHeight: 1.65,
        letterSpacing: 0.4,
        textAlign: "center",
        maxWidth: 360,
        margin: "0 auto 30px",
      }}>
        Tu cariño y presencia son el mejor regalo que puedo recibir. Si deseas obsequiarme algo, estas son mis sugerencias.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "center" }}>

        {/* Lluvia de sobres */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "28px 24px",
          background: "linear-gradient(145deg,rgba(255,168,197,0.10),rgba(239,203,109,0.14))",
          borderRadius: 26,
          border: "1px solid rgba(212,71,138,0.22)",
          boxShadow: "0 6px 28px rgba(212,71,138,0.08)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: 0, left: "10%", right: "10%",
            height: 2,
            background: "linear-gradient(90deg,transparent,#d4478a 30%,#efcb6d 70%,transparent)",
            opacity: 0.50,
          }} />

          {/* Ícono sobre */}
          <div style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg,rgba(212,71,138,0.20),rgba(239,203,109,0.32))",
            border: "1.5px solid rgba(212,71,138,0.32)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 18px rgba(212,71,138,0.16)",
          }}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#8b1a52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <polyline points="2,7 12,14 22,7" />
              <path d="M2 19 L9 13" opacity="0.6" />
              <path d="M22 19 L15 13" opacity="0.6" />
            </svg>
          </div>

          <h3 style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: 38,
            color: "#3a0f26",
            marginBottom: 6,
            lineHeight: 1.1,
          }}>
            Lluvia de Sobres
          </h3>

          <div style={{
            width: 42,
            height: 1,
            margin: "10px auto 12px",
            background: "linear-gradient(90deg,transparent,rgba(212,71,138,0.55),transparent)",
          }} />

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 18,
            color: "#8b1a52",
            lineHeight: 1.55,
            letterSpacing: 0.4,
          }}>
            Un sobre con tu bendición llenará mi corazón de alegría.
          </p>
        </div>

        {/* Obsequio de tu Elección */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "28px 24px",
          background: "linear-gradient(145deg,rgba(239,203,109,0.14),rgba(255,168,197,0.10))",
          borderRadius: 26,
          border: "1px solid rgba(196,146,10,0.28)",
          boxShadow: "0 6px 28px rgba(196,146,10,0.10)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: 0, left: "10%", right: "10%",
            height: 2,
            background: "linear-gradient(90deg,transparent,#efcb6d 30%,#d4478a 70%,transparent)",
            opacity: 0.55,
          }} />

          {/* Ícono regalo */}
          <div style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg,rgba(239,203,109,0.28),rgba(212,71,138,0.20))",
            border: "1.5px solid rgba(196,146,10,0.40)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 18px rgba(196,146,10,0.18)",
          }}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#8b1a52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Caja regalo */}
              <rect x="3" y="9" width="18" height="12" rx="1" />
              {/* Tapa */}
              <rect x="2" y="6" width="20" height="4" rx="1" />
              {/* Listón vertical */}
              <line x1="12" y1="6" x2="12" y2="21" />
              {/* Moño */}
              <path d="M12 6 C 9 3, 7 5, 8 6 L 12 6" />
              <path d="M12 6 C 15 3, 17 5, 16 6 L 12 6" />
            </svg>
          </div>

          <h3 style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: 38,
            color: "#3a0f26",
            marginBottom: 6,
            lineHeight: 1.1,
          }}>
            Obsequio de tu Elección
          </h3>

          <div style={{
            width: 42,
            height: 1,
            margin: "10px auto 12px",
            background: "linear-gradient(90deg,transparent,rgba(196,146,10,0.60),transparent)",
          }} />

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 18,
            color: "#8b1a52",
            lineHeight: 1.55,
            letterSpacing: 0.4,
          }}>
            Cualquier detalle elegido con cariño será atesorado por siempre.
          </p>
        </div>

      </div>
    </section>
  );
}
