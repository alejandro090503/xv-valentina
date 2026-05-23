"use client";

export default function InstagramSection() {
  return (
    <section style={{ padding: "64px 26px" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#8b1a52",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.9,
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
          opacity: 0.55,
        }} />

        <div style={{ padding: "34px 26px 32px" }}>
          {/* Mensaje principal */}
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 18,
            color: "#8b1a52",
            lineHeight: 1.6,
            letterSpacing: 0.4,
            marginBottom: 24,
            maxWidth: 320,
            margin: "0 auto 24px",
          }}>
            Escanea el código y comparte los mejores momentos de la fiesta en el álbum.
          </p>

          {/* Caja del QR con marco dorado */}
          <div style={{
            display: "inline-block",
            padding: 14,
            background: "#fff5f9",
            border: "1px solid rgba(196,146,10,0.45)",
            borderRadius: 18,
            boxShadow: "0 4px 22px rgba(196,146,10,0.20), inset 0 0 0 4px rgba(255,255,255,0.7)",
            position: "relative",
            marginBottom: 18,
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
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M2 2 L2 11" stroke="#c4920a" strokeWidth="1.3" strokeLinecap="round" opacity="0.9"/>
                    <path d="M2 2 L11 2" stroke="#c4920a" strokeWidth="1.3" strokeLinecap="round" opacity="0.9"/>
                    <circle cx="2" cy="2" r="1.8" fill="#c4920a" opacity="1"/>
                  </svg>
                </div>
              );
            })}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=440x440&data=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Ftags%2FVale15&color=8b1a52&bgcolor=fff5f9&margin=8&format=png"
              alt="Código QR del álbum compartido — escanea para entrar"
              width={220}
              height={220}
              style={{ display: "block", borderRadius: 8 }}
            />
          </div>

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: 15,
            color: "rgba(58,15,38,0.65)",
            letterSpacing: 0.4,
            lineHeight: 1.55,
            marginBottom: 0,
          }}>
            Cada foto que captures hará este día aún más especial.
          </p>

          <div style={{
            width: 40,
            height: 1,
            margin: "20px auto 14px",
            background: "linear-gradient(90deg,transparent,rgba(212,71,138,0.45),transparent)",
          }} />

          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 13,
            color: "rgba(58,15,38,0.50)",
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
