"use client";

export default function Ubicacion() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 14,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#d4478a",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.85,
      }}>
        Te esperamos en
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
        Ubicación
      </h2>

      <div style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(158deg,rgba(255,255,255,0.92),rgba(255,245,249,0.97))",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        borderRadius: 28,
        border: "1px solid rgba(212,71,138,0.16)",
        boxShadow: "0 14px 56px rgba(139,26,82,0.10),inset 0 1px 0 rgba(255,255,255,0.96)",
      }}>
        {/* Barra lateral izquierda */}
        <div style={{
          position: "absolute",
          left: 0,
          top: "12%",
          bottom: "12%",
          width: 2.5,
          background: "linear-gradient(to bottom,transparent,#ff7dc6 25%,#d4478a 55%,#ffa8c5 80%,transparent)",
          opacity: 0.52,
        }} />

        <div style={{ padding: "34px 28px 0", textAlign: "center" }}>
          {/* Ícono PIN */}
          <div style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg,rgba(212,71,138,0.14),rgba(212,71,138,0.26))",
            border: "1.5px solid rgba(212,71,138,0.30)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(139,26,82,0.13)",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#d4478a">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>

          <div style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: 42,
            background: "linear-gradient(135deg,#3a0f26 20%,#d4478a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.15,
            marginBottom: 10,
          }}>
            Recepción
          </div>

          <div style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 17,
            color: "rgba(58,15,38,.75)",
            letterSpacing: 0.4,
            lineHeight: 1.75,
            marginBottom: 8,
          }}>
            Durango, Dgo.
          </div>

          <div style={{
            fontFamily: "var(--font-lato), sans-serif",
            fontWeight: 700,
            fontSize: 18,
            color: "#8b1a52",
            letterSpacing: 3,
            marginBottom: 4,
          }}>
            8:45 PM
          </div>

          <div style={{
            width: 48,
            height: 1,
            margin: "18px auto 22px",
            background: "linear-gradient(90deg,transparent,#d4478a,transparent)",
            opacity: 0.32,
          }} />
        </div>

        <div style={{ textAlign: "center", padding: "0 22px 26px" }}>
          <a
            href="https://maps.app.goo.gl/GydTXjvnz2FJQQbg7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: 8,
              padding: "14px 32px",
              background: "linear-gradient(135deg,#d4478a,#8b1a52)",
              color: "#FFFFFF",
              borderRadius: 30,
              fontFamily: "var(--font-lato), sans-serif",
              fontSize: 14,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 3,
              textDecoration: "none",
              transition: "opacity .3s,transform .3s",
              boxShadow: "0 4px 16px rgba(139,26,82,0.30)",
            }}
          >
            Cómo Llegar
          </a>
        </div>

        <iframe
          style={{
            width: "100%",
            height: 215,
            border: 0,
            display: "block",
            borderRadius: "0 0 28px 28px",
            opacity: 0.92,
            filter: "saturate(0.85)",
          }}
          src="https://maps.google.com/maps?q=Durango,+Dgo.,+Mexico&output=embed&hl=es&z=14"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de la recepción"
        />
      </div>
    </section>
  );
}
