"use client";

export default function Footer() {
  return (
    <footer style={{ padding: "50px 20px", textAlign: "center" }}>
      <div style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 200,
        lineHeight: 1.4,
        background: "linear-gradient(135deg,#d4478a 0%,#efcb6d 50%,#8b1a52 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        padding: "28px 60px 28px 48px",
        filter: "drop-shadow(0 4px 22px rgba(212,71,138,0.30))",
        overflow: "visible",
        display: "inline-block",
      }}>
        V
      </div>
      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: "#d4478a",
        marginTop: 6,
      }}>
        XIX · Junio · MMXXVI
      </div>
      <div style={{
        width: 48,
        height: 1,
        margin: "18px auto 14px",
        background: "linear-gradient(90deg,transparent,#d4478a,transparent)",
        opacity: 0.35,
      }} />
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 13,
        color: "rgba(58,15,38,0.40)",
        letterSpacing: 1,
      }}>
        Con mucho cariño por{" "}
        <a
          href="https://www.instagram.com/elysium.invitaciones"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#d4478a", textDecoration: "none" }}
        >
          @elysium.invitaciones
        </a>
      </p>
    </footer>
  );
}
