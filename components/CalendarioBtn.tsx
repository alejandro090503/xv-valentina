"use client";

const GCAL_URL = (() => {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const title = encodeURIComponent("XV Años de Valentina");
  const details = encodeURIComponent(
    "Celebración de XV Años de Valentina · Durango, Dgo."
  );
  const location = encodeURIComponent("Durango, Dgo., México");
  // 2026-06-19 20:45 CST → UTC = 2026-06-20T02:45:00Z
  const dates = "20260620T024500Z/20260621T080000Z";
  return `${base}&text=${title}&dates=${dates}&details=${details}&location=${location}`;
})();

export default function CalendarioBtn() {
  return (
    <section style={{ padding: "40px 26px 64px", textAlign: "center" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 13,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#d4478a",
        marginBottom: 8,
        opacity: 0.85,
      }}>
        No lo olvides
      </p>
      <h2 style={{
        fontFamily: "var(--font-great-vibes), cursive",
        fontSize: 48,
        lineHeight: 1.25,
        marginBottom: 16,
        padding: "4px 20px 8px",
        background: "linear-gradient(135deg,#8b1a52 0%,#d4478a 45%,#efcb6d 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        overflow: "visible",
        display: "inline-block",
      }}>
        Guárdalo
      </h2>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 17,
        color: "#3a0f26",
        opacity: 0.70,
        marginBottom: 20,
      }}>
        Agrega el evento a tu calendario
      </p>
      <a
        href={GCAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
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
          boxShadow: "0 4px 16px rgba(139,26,82,0.30)",
          transition: "opacity .3s,transform .3s",
        }}
      >
        Añadir a Google Calendar
      </a>
    </section>
  );
}
