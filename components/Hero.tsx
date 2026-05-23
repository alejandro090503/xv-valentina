"use client";
import { useEffect, useRef } from "react";

const PARTICLES = [
  { left: "7%",  size: 4, dur: 9,  del: 0,   color: "#efcb6d" },
  { left: "21%", size: 3, dur: 12, del: 1.4, color: "#ffa8c5" },
  { left: "36%", size: 5, dur: 8,  del: 0.6, color: "#ff7dc6" },
  { left: "54%", size: 3, dur: 10, del: 2.2, color: "#efcb6d" },
  { left: "69%", size: 5, dur: 11, del: 0.9, color: "#ffa8c5" },
  { left: "84%", size: 3, dur: 9,  del: 1.8, color: "#ff7dc6" },
  { left: "13%", size: 6, dur: 13, del: 3.1, color: "#efcb6d" },
  { left: "47%", size: 4, dur: 10, del: 2.7, color: "#ffa8c5" },
  { left: "75%", size: 5, dur: 12, del: 0.4, color: "#ff7dc6" },
  { left: "91%", size: 3, dur: 8,  del: 1.6, color: "#efcb6d" },
];

/** Esquina ornamental doble L con punto focal */
function CornerOrnament({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const rot = { tl: "0deg", tr: "90deg", br: "180deg", bl: "270deg" }[pos];
  const placement: React.CSSProperties =
    pos === "tl" ? { top: -1, left: -1 } :
    pos === "tr" ? { top: -1, right: -1, transform: `rotate(${rot})`, transformOrigin: "top right" } :
    pos === "br" ? { bottom: -1, right: -1, transform: `rotate(${rot})`, transformOrigin: "bottom right" } :
                   { bottom: -1, left: -1, transform: `rotate(${rot})`, transformOrigin: "bottom left" };

  const base: React.CSSProperties = pos === "tl"
    ? { position: "absolute", transform: `rotate(${rot})`, transformOrigin: "top left" }
    : { position: "absolute" };

  return (
    <div style={{ ...base, ...placement }}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        {/* Outer L */}
        <path d="M1 1 L1 17" stroke="#efcb6d" strokeWidth="1"   opacity="0.82" strokeLinecap="round" />
        <path d="M1 1 L17 1" stroke="#efcb6d" strokeWidth="1"   opacity="0.82" strokeLinecap="round" />
        {/* Inner L */}
        <path d="M5 5 L5 13" stroke="#efcb6d" strokeWidth="0.5" opacity="0.40" strokeLinecap="round" />
        <path d="M5 5 L13 5" stroke="#efcb6d" strokeWidth="0.5" opacity="0.40" strokeLinecap="round" />
        {/* Anchor dot */}
        <circle cx="1"  cy="1"  r="2"   fill="#efcb6d" opacity="0.92" />
        {/* End ticks */}
        <circle cx="1"  cy="17" r="0.9" fill="#efcb6d" opacity="0.50" />
        <circle cx="17" cy="1"  r="0.9" fill="#efcb6d" opacity="0.50" />
        {/* Inner anchor */}
        <circle cx="5"  cy="5"  r="1.2" fill="#efcb6d" opacity="0.55" />
      </svg>
    </div>
  );
}

/** Separador ornamental: líneas + diamante + líneas */
function OrnamentBar() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "center", width: "100%" }}>
      {/* Fila superior */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
        <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, transparent, rgba(239,203,109,0.55))" }} />
        <svg width="5" height="5" viewBox="0 0 5 5">
          <rect width="5" height="5" fill="#efcb6d" transform="rotate(45 2.5 2.5)" opacity="0.60" />
        </svg>
        <svg width="11" height="11" viewBox="0 0 11 11">
          <rect x="1.5" y="1.5" width="8" height="8" fill="#efcb6d" transform="rotate(45 5.5 5.5)" opacity="0.95" />
          <rect x="3.5" y="3.5" width="4" height="4" fill="#2a0a1c"  transform="rotate(45 5.5 5.5)" />
          <rect x="4.5" y="4.5" width="2" height="2" fill="#efcb6d" transform="rotate(45 5.5 5.5)" opacity="0.75" />
        </svg>
        <svg width="5" height="5" viewBox="0 0 5 5">
          <rect width="5" height="5" fill="#efcb6d" transform="rotate(45 2.5 2.5)" opacity="0.60" />
        </svg>
        <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, rgba(239,203,109,0.55), transparent)" }} />
      </div>
      {/* Fila inferior eco */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
        <div style={{ flex: 1, height: 0.4, background: "linear-gradient(90deg, transparent, rgba(239,203,109,0.22))" }} />
        <div style={{ width: 21 }} />
        <div style={{ flex: 1, height: 0.4, background: "linear-gradient(90deg, rgba(239,203,109,0.22), transparent)" }} />
      </div>
    </div>
  );
}

/** Separador micro entre XV y Años */
function MicroBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, margin: "8px 0 10px" }}>
      <div style={{ width: 22, height: 0.5, background: "rgba(239,203,109,0.42)" }} />
      <svg width="5" height="5" viewBox="0 0 5 5">
        <rect width="5" height="5" fill="#efcb6d" transform="rotate(45 2.5 2.5)" opacity="0.70" />
      </svg>
      <div style={{ width: 22, height: 0.5, background: "rgba(239,203,109,0.42)" }} />
    </div>
  );
}

/** Barra de ornamentos sobre el nombre */
function TopOrnamentLine() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0 36px", marginBottom: 12 }}>
      <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, transparent, rgba(239,203,109,0.50))" }} />
      <svg width="5" height="5"  viewBox="0 0 5 5"><rect width="5" height="5" fill="#efcb6d" transform="rotate(45 2.5 2.5)" opacity="0.65"/></svg>
      <div style={{ width: 14, height: 0.5, background: "rgba(239,203,109,0.50)" }} />
      <svg width="8" height="8"  viewBox="0 0 8 8"><rect x="1" y="1" width="6" height="6" fill="#efcb6d" transform="rotate(45 4 4)" opacity="0.90"/></svg>
      <div style={{ width: 14, height: 0.5, background: "rgba(239,203,109,0.50)" }} />
      <svg width="5" height="5"  viewBox="0 0 5 5"><rect width="5" height="5" fill="#efcb6d" transform="rotate(45 2.5 2.5)" opacity="0.65"/></svg>
      <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, rgba(239,203,109,0.50), transparent)" }} />
    </div>
  );
}

export default function Hero() {
  const nameRef  = useRef<HTMLHeadingElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const xvRef    = useRef<HTMLDivElement>(null);
  const dateRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const schedule = [
      { el: nameRef,  delay: 200,  styles: { opacity: "1", transform: "translateY(0) scale(1)" } },
      { el: frameRef, delay: 580,  styles: { opacity: "1", transform: "scaleY(1)" } },
      { el: xvRef,    delay: 880,  styles: { opacity: "1", transform: "translateY(0)" } },
      { el: dateRef,  delay: 1180, styles: { opacity: "1", transform: "translateY(0)" } },
    ];
    const timers = schedule.map(({ el, delay, styles }) =>
      setTimeout(() => { if (el.current) Object.assign(el.current.style, styles); }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #28091a 0%, #4a1535 40%, #3a0f28 70%, #28091a 100%)",
        overflow: "hidden",
        padding: "52px 0 72px",
      }}
    >
      {/* Radial glow central */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 75% 50% at 50% 42%, rgba(212,71,138,0.20) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Ambient golden top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "38%",
        background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(239,203,109,0.06) 0%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Partículas */}
      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          bottom: -10, left: p.left,
          width: p.size, height: p.size,
          borderRadius: "50%",
          background: p.color,
          opacity: 0.4,
          animation: `floatUp ${p.dur}s ${p.del}s linear infinite`,
          pointerEvents: "none",
        }} />
      ))}

      {/* ══════════ NOMBRE — fuera del frame, overflow libre ══════════ */}
      <div style={{
        width: "100%",
        textAlign: "center",
        overflow: "visible",          /* crítico: nunca recortar la V ni la a final */
        padding: "0 0 4px",
      }}>
        <TopOrnamentLine />

        <h1
          ref={nameRef}
          style={{
            fontFamily: "var(--font-great-vibes), cursive",
            /* fontSize sin clamp de viewport — usa % del contenedor para no clippar */
            fontSize: "min(22vw, 100px)",
            lineHeight: 1.2,
            background: "linear-gradient(140deg, #ffa8c5 0%, #efcb6d 38%, #fff8e8 55%, #efcb6d 72%, #ff7dc6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 3px 28px rgba(212,71,138,0.55))",
            margin: 0,
            /*
             * Padding asimétrico: Great Vibes "V" tiene swash izquierdo largo
             * y la "a" final tiene cola derecha. Ambos necesitan espacio extra.
             */
            padding: "4px 28px 10px 20px",
            opacity: 0,
            transform: "translateY(22px) scale(0.97)",
            transition: "opacity 0.95s ease, transform 0.95s ease",
            display: "block",
            overflowWrap: "normal",
            whiteSpace: "nowrap",
          }}
        >
          Valentina
        </h1>
      </div>

      {/* ══════════ MARCO ORNAMENTAL TRIPLE ══════════ */}
      <div style={{ width: "100%", maxWidth: 360, padding: "0 24px" }}>
        <div
          ref={frameRef}
          style={{
            position: "relative",
            border: "1px solid rgba(239,203,109,0.44)",
            borderRadius: 2,
            opacity: 0,
            transform: "scaleY(0.94)",
            transition: "opacity 0.85s ease, transform 0.85s ease",
          }}
        >
          {/* Segunda capa del borde */}
          <div style={{
            position: "absolute", inset: 5,
            border: "0.5px solid rgba(239,203,109,0.22)",
            borderRadius: 1,
            pointerEvents: "none",
          }} />
          {/* Tercera capa (innermost) */}
          <div style={{
            position: "absolute", inset: 10,
            border: "0.3px solid rgba(239,203,109,0.10)",
            borderRadius: 1,
            pointerEvents: "none",
          }} />

          {/* Esquinas */}
          <CornerOrnament pos="tl" />
          <CornerOrnament pos="tr" />
          <CornerOrnament pos="bl" />
          <CornerOrnament pos="br" />

          {/* Contenido del marco */}
          <div style={{ padding: "26px 26px 24px", textAlign: "center" }}>

            {/* Separador ornamental superior */}
            <div style={{ marginBottom: 18 }}>
              <OrnamentBar />
            </div>

            {/* XV y Años */}
            <div
              ref={xvRef}
              style={{
                opacity: 0,
                transform: "translateY(18px)",
                transition: "opacity 0.9s ease, transform 0.9s ease",
              }}
            >
              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 700,
                fontSize: "clamp(62px, 17vw, 82px)",
                letterSpacing: 20,
                lineHeight: 1,
                textIndent: 20,
                background: "linear-gradient(135deg, #efcb6d 0%, #fff8e0 50%, #efcb6d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                XV
              </div>

              <MicroBar />

              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(20px, 5.5vw, 26px)",
                letterSpacing: 11,
                textTransform: "uppercase",
                color: "rgba(255,168,197,0.84)",
                textIndent: 11,
              }}>
                Años
              </div>
            </div>

            {/* Separador ornamental inferior */}
            <div style={{ margin: "18px 0 14px" }}>
              <OrnamentBar />
            </div>

            {/* Fecha */}
            <div
              ref={dateRef}
              style={{
                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 0.9s ease, transform 0.9s ease",
              }}
            >
              <span style={{
                display: "inline-block",
                padding: "5px 22px",
                border: "0.5px solid rgba(239,203,109,0.28)",
                borderRadius: 40,
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontSize: 13,
                letterSpacing: 4,
                color: "rgba(255,168,197,0.72)",
              }}>
                19 · Junio · 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute",
        bottom: 26,
        left: "50%",
        transform: "translateX(-50%)",
        animation: "hintFloat 3s ease-in-out infinite",
      }}>
        <div style={{ width: 1, height: 30, background: "linear-gradient(to bottom, transparent, rgba(255,168,197,0.45))" }} />
      </div>
    </section>
  );
}
