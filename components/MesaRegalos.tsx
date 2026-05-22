"use client";

export default function MesaRegalos() {
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
        Tu presencia es mi regalo
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
        Mesa de Regalos
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "center" }}>

        {/* Lluvia de sobres */}
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "28px 24px",
          background: "linear-gradient(145deg,rgba(255,168,197,0.08),rgba(239,203,109,0.12))",
          borderRadius: 26,
          border: "1px solid rgba(212,71,138,0.20)",
          boxShadow: "0 6px 28px rgba(212,71,138,0.08)",
        }}>
          {/* Barra superior */}
          <div style={{
            display: "block",
            height: 2,
            background: "linear-gradient(90deg,transparent,#d4478a 30%,#efcb6d 70%,transparent)",
            opacity: 0.48,
            borderRadius: "2px 2px 0 0",
            margin: "-28px -24px 28px",
          }} />

          {/* Ícono sobre */}
          <div style={{
            width: 68,
            height: 68,
            borderRadius: "50%",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg,rgba(212,71,138,0.18),rgba(239,203,109,0.28))",
            border: "1.5px solid rgba(212,71,138,0.30)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 18px rgba(212,71,138,0.16)",
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4478a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>

          <h3 style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: 36,
            color: "#3a0f26",
            marginBottom: 8,
          }}>
            Lluvia de Sobres
          </h3>

          <div style={{
            width: 36,
            height: 1,
            margin: "14px auto",
            background: "linear-gradient(90deg,transparent,rgba(212,71,138,0.5),transparent)",
          }} />

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 17,
            color: "rgba(58,15,38,0.72)",
            lineHeight: 1.70,
            letterSpacing: 0.3,
          }}>
            Tu cariño y presencia son el mejor regalo que puedo recibir. Si deseas obsequiarme algo, un sobre con tu bendición llenará mi corazón de alegría.
          </p>
        </div>

      </div>
    </section>
  );
}
