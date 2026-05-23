"use client";
import { useEffect, useRef, useState } from "react";

const PARTICLES = [
  { left: "7%",  size: 4, dur: 9,  del: 0,   color: "#d4478a" },
  { left: "21%", size: 3, dur: 12, del: 1.4, color: "#efcb6d" },
  { left: "36%", size: 5, dur: 8,  del: 0.6, color: "#ff7dc6" },
  { left: "54%", size: 3, dur: 10, del: 2.2, color: "#d4478a" },
  { left: "69%", size: 5, dur: 11, del: 0.9, color: "#efcb6d" },
  { left: "84%", size: 3, dur: 9,  del: 1.8, color: "#ff7dc6" },
  { left: "13%", size: 6, dur: 13, del: 3.1, color: "#d4478a" },
  { left: "47%", size: 4, dur: 10, del: 2.7, color: "#efcb6d" },
  { left: "75%", size: 5, dur: 12, del: 0.4, color: "#ff7dc6" },
  { left: "91%", size: 3, dur: 8,  del: 1.6, color: "#d4478a" },
];

/** Esquina ornamental */
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
        <path d="M1 1 L1 17" stroke="#c4920a" strokeWidth="1"   opacity="0.85" strokeLinecap="round" />
        <path d="M1 1 L17 1" stroke="#c4920a" strokeWidth="1"   opacity="0.85" strokeLinecap="round" />
        <path d="M5 5 L5 13" stroke="#c4920a" strokeWidth="0.5" opacity="0.45" strokeLinecap="round" />
        <path d="M5 5 L13 5" stroke="#c4920a" strokeWidth="0.5" opacity="0.45" strokeLinecap="round" />
        <circle cx="1"  cy="1"  r="2"   fill="#c4920a" opacity="0.95" />
        <circle cx="1"  cy="17" r="0.9" fill="#c4920a" opacity="0.55" />
        <circle cx="17" cy="1"  r="0.9" fill="#c4920a" opacity="0.55" />
        <circle cx="5"  cy="5"  r="1.2" fill="#c4920a" opacity="0.65" />
      </svg>
    </div>
  );
}

/** Separador ornamental con diamante hueco */
function OrnamentBar() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "center", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
        <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, transparent, rgba(196,146,10,0.65))" }} />
        <svg width="5" height="5" viewBox="0 0 5 5">
          <rect width="5" height="5" fill="#c4920a" transform="rotate(45 2.5 2.5)" opacity="0.70" />
        </svg>
        <svg width="11" height="11" viewBox="0 0 11 11">
          <rect x="1.5" y="1.5" width="8" height="8" fill="#c4920a" transform="rotate(45 5.5 5.5)" opacity="0.95" />
          <rect x="3.5" y="3.5" width="4" height="4" fill="#fff5f9" transform="rotate(45 5.5 5.5)" />
          <rect x="4.5" y="4.5" width="2" height="2" fill="#c4920a" transform="rotate(45 5.5 5.5)" opacity="0.80" />
        </svg>
        <svg width="5" height="5" viewBox="0 0 5 5">
          <rect width="5" height="5" fill="#c4920a" transform="rotate(45 2.5 2.5)" opacity="0.70" />
        </svg>
        <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, rgba(196,146,10,0.65), transparent)" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
        <div style={{ flex: 1, height: 0.4, background: "linear-gradient(90deg, transparent, rgba(196,146,10,0.30))" }} />
        <div style={{ width: 21 }} />
        <div style={{ flex: 1, height: 0.4, background: "linear-gradient(90deg, rgba(196,146,10,0.30), transparent)" }} />
      </div>
    </div>
  );
}

function MicroBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, margin: "8px 0 10px" }}>
      <div style={{ width: 22, height: 0.5, background: "rgba(196,146,10,0.55)" }} />
      <svg width="5" height="5" viewBox="0 0 5 5">
        <rect width="5" height="5" fill="#c4920a" transform="rotate(45 2.5 2.5)" opacity="0.80" />
      </svg>
      <div style={{ width: 22, height: 0.5, background: "rgba(196,146,10,0.55)" }} />
    </div>
  );
}

function TopOrnamentLine() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0 36px", marginBottom: 14 }}>
      <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, transparent, rgba(196,146,10,0.55))" }} />
      <svg width="5" height="5"  viewBox="0 0 5 5"><rect width="5" height="5" fill="#c4920a" transform="rotate(45 2.5 2.5)" opacity="0.75"/></svg>
      <div style={{ width: 14, height: 0.5, background: "rgba(196,146,10,0.55)" }} />
      <svg width="8" height="8"  viewBox="0 0 8 8"><rect x="1" y="1" width="6" height="6" fill="#c4920a" transform="rotate(45 4 4)" opacity="0.95"/></svg>
      <div style={{ width: 14, height: 0.5, background: "rgba(196,146,10,0.55)" }} />
      <svg width="5" height="5"  viewBox="0 0 5 5"><rect width="5" height="5" fill="#c4920a" transform="rotate(45 2.5 2.5)" opacity="0.75"/></svg>
      <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, rgba(196,146,10,0.55), transparent)" }} />
    </div>
  );
}

export default function Hero() {
  const nameRef    = useRef<HTMLHeadingElement>(null);
  const frameRef   = useRef<HTMLDivElement>(null);
  const xvRef      = useRef<HTMLDivElement>(null);
  const dateRef    = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const [persona, setPersona] = useState<{ para: string; pases: number } | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const para = params.get("para");
    const rawP = params.get("pases");
    const n = rawP ? parseInt(rawP, 10) : 1;
    const validN = isNaN(n) || n < 1 || n > 20 ? 1 : n;
    if (para) setPersona({ para, pases: validN });
  }, []);

  useEffect(() => {
    const schedule = [
      { el: messageRef, delay: 180,  styles: { opacity: "1", transform: "translateY(0)" } },
      { el: nameRef,    delay: 480,  styles: { opacity: "1", transform: "translateY(0) scale(1)" } },
      { el: frameRef,   delay: 820,  styles: { opacity: "1", transform: "scaleY(1)" } },
      { el: xvRef,      delay: 1100, styles: { opacity: "1", transform: "translateY(0)" } },
      { el: dateRef,    delay: 1380, styles: { opacity: "1", transform: "translateY(0)" } },
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
        background: "linear-gradient(165deg, #fff5f9 0%, #fde4ee 50%, #fff5f9 100%)",
        overflow: "hidden",
        padding: "62px 0 48px",
      }}
    >
      {/* Glow radial central */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 75% 50% at 50% 42%, rgba(255,168,197,0.35) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Ambient golden top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "38%",
        background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(239,203,109,0.18) 0%, transparent 100%)",
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
          opacity: 0.55,
          animation: `floatUp ${p.dur}s ${p.del}s linear infinite`,
          pointerEvents: "none",
        }} />
      ))}

      {/* ══════════ MENSAJE — ahora arriba del nombre ══════════ */}
      <p
        ref={messageRef}
        style={{
          maxWidth: 360,
          padding: "0 28px 24px",
          margin: 0,
          textAlign: "center",
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 18,
          lineHeight: 1.72,
          letterSpacing: 0.5,
          color: "#8b1a52",
          opacity: 0,
          transform: "translateY(14px)",
          transition: "opacity 0.95s ease, transform 0.95s ease",
        }}
      >
        Hoy comienza una nueva etapa llena de sueños, ilusiones y momentos que guardaré por siempre en mi corazón. Quiero compartir contigo la emoción, la magia y la alegría de esta noche tan especial.
      </p>

      {/* ══════════ NOMBRE — fuera del frame ══════════ */}
      <div style={{
        width: "100%",
        textAlign: "center",
        overflow: "visible",
        padding: "0 0 4px",
      }}>
        <TopOrnamentLine />

        <h1
          ref={nameRef}
          style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: "min(26vw, 120px)",
            lineHeight: 1.2,
            background: "linear-gradient(135deg, #d4478a 0%, #efcb6d 45%, #8b1a52 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 3px 22px rgba(212,71,138,0.30))",
            margin: 0,
            padding: "4px 28px 12px 22px",
            opacity: 0,
            transform: "translateY(22px) scale(0.97)",
            transition: "opacity 0.95s ease, transform 0.95s ease",
            display: "block",
            whiteSpace: "nowrap",
          }}
        >
          Valentina
        </h1>
      </div>

      {/* ══════════ MARCO ORNAMENTAL ══════════ */}
      <div style={{ width: "100%", maxWidth: 360, padding: "0 24px" }}>
        <div
          ref={frameRef}
          style={{
            position: "relative",
            border: "1px solid rgba(196,146,10,0.55)",
            borderRadius: 2,
            background: "rgba(255,255,255,0.35)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            opacity: 0,
            transform: "scaleY(0.94)",
            transition: "opacity 0.85s ease, transform 0.85s ease",
          }}
        >
          <div style={{
            position: "absolute", inset: 5,
            border: "0.5px solid rgba(196,146,10,0.30)",
            borderRadius: 1,
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: 10,
            border: "0.3px solid rgba(196,146,10,0.16)",
            borderRadius: 1,
            pointerEvents: "none",
          }} />

          <CornerOrnament pos="tl" />
          <CornerOrnament pos="tr" />
          <CornerOrnament pos="bl" />
          <CornerOrnament pos="br" />

          <div style={{ padding: "26px 26px 24px", textAlign: "center" }}>
            <div style={{ marginBottom: 18 }}>
              <OrnamentBar />
            </div>

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
                fontSize: "clamp(64px, 18vw, 86px)",
                letterSpacing: 22,
                lineHeight: 1,
                textIndent: 22,
                background: "linear-gradient(135deg, #c4920a 0%, #efcb6d 50%, #c4920a 100%)",
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
                color: "#8b1a52",
                textIndent: 11,
              }}>
                Años
              </div>
            </div>

            <div style={{ margin: "18px 0 14px" }}>
              <OrnamentBar />
            </div>

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
                border: "0.6px solid rgba(196,146,10,0.40)",
                borderRadius: 40,
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontSize: 14,
                letterSpacing: 4,
                color: "#8b1a52",
                background: "rgba(255,255,255,0.5)",
              }}>
                19 · Junio · 2026
              </span>

              {persona && (
                <p style={{
                  marginTop: 18,
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: 14,
                  lineHeight: 1.55,
                  letterSpacing: 0.6,
                  color: "#8b1a52",
                  textAlign: "center",
                }}>
                  Esta invitación es para
                  <br />
                  <strong style={{
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: 16,
                    background: "linear-gradient(135deg,#c4920a,#efcb6d,#c4920a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: 1,
                  }}>
                    {persona.para}
                  </strong>
                  <br />
                  con {persona.pases === 1 ? "1 pase" : `${persona.pases} pases`}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute",
        bottom: 22,
        left: "50%",
        transform: "translateX(-50%)",
        animation: "hintFloat 3s ease-in-out infinite",
      }}>
        <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, transparent, rgba(139,26,82,0.55))" }} />
      </div>
    </section>
  );
}
