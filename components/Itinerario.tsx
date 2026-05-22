"use client";

const ITEMS = [
  { time: "8:45 pm", event: "Recepción de Invitados", gem: 0 },
  { time: "9:25 pm", event: "Entrada de la Quinceañera & Valses", gem: 1 },
  { time: "10:05 pm", event: "Cena", gem: 2 },
  { time: "10:40 pm", event: "¡Inicio de la Fiesta! 🎉", gem: 0 },
  { time: "2:00 am", event: "Fin del Evento", gem: 1 },
];

const GEM_COLORS = [
  { bg: "linear-gradient(135deg,#ffa8c5 30%,#8b1a52)", shadow: "0 0 0 4px rgba(212,71,138,0.10),0 0 18px rgba(212,71,138,0.40)" },
  { bg: "linear-gradient(135deg,#efcb6d 30%,#c9a93a)", shadow: "0 0 0 4px rgba(239,203,109,0.12),0 0 18px rgba(239,203,109,0.42)" },
  { bg: "linear-gradient(135deg,#ff7dc6 30%,#d4478a)", shadow: "0 0 0 4px rgba(255,125,198,0.12),0 0 18px rgba(255,125,198,0.42)" },
];

export default function Itinerario() {
  return (
    <section style={{ padding: "64px 24px", overflow: "visible" }}>
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontStyle: "italic",
        fontSize: 14,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "#ff7dc6",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.85,
      }}>
        Programa del Día
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
        Itinerario
      </h2>

      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0" }}>
        {/* Línea central */}
        <div style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
          bottom: 0,
          width: 1,
          background: "linear-gradient(to bottom,transparent 0%,rgba(255,125,198,0.30) 10%,rgba(212,71,138,0.22) 45%,rgba(255,168,197,0.28) 80%,transparent 100%)",
        }} />

        {ITEMS.map((item, i) => {
          const gem = GEM_COLORS[item.gem];
          return (
            <div key={i} style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "30px 16px 4px",
              width: "100%",
            }}>
              {/* Gema */}
              <div style={{
                width: 9,
                height: 9,
                background: gem.bg,
                transform: "rotate(45deg)",
                borderRadius: 2,
                boxShadow: gem.shadow,
                marginBottom: 18,
                flexShrink: 0,
              }} />

              {/* Hora */}
              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 36,
                fontWeight: 600,
                letterSpacing: 8,
                color: "#3a0f26",
                lineHeight: 1,
                marginBottom: 6,
                textIndent: 8,
              }}>
                {item.time}
              </div>

              {/* Evento */}
              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 17,
                color: "rgba(58,15,38,0.65)",
                letterSpacing: 2,
                lineHeight: 1.5,
              }}>
                {item.event}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
