"use client";
import { useEffect, useRef } from "react";

const PARTICLES = [
  { left: "7%",  size: 4, dur: 9,  del: 0,    color: "#efcb6d" },
  { left: "21%", size: 3, dur: 12, del: 1.4,  color: "#ffa8c5" },
  { left: "36%", size: 5, dur: 8,  del: 0.6,  color: "#ff7dc6" },
  { left: "54%", size: 3, dur: 10, del: 2.2,  color: "#efcb6d" },
  { left: "69%", size: 5, dur: 11, del: 0.9,  color: "#ffa8c5" },
  { left: "84%", size: 3, dur: 9,  del: 1.8,  color: "#ff7dc6" },
  { left: "13%", size: 6, dur: 13, del: 3.1,  color: "#efcb6d" },
  { left: "47%", size: 4, dur: 10, del: 2.7,  color: "#ffa8c5" },
  { left: "75%", size: 5, dur: 12, del: 0.4,  color: "#ff7dc6" },
  { left: "91%", size: 3, dur: 8,  del: 1.6,  color: "#efcb6d" },
];

function CornerOrnament({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const rot = { tl: "0deg", tr: "90deg", br: "180deg", bl: "270deg" }[pos];
  const base: React.CSSProperties = { position: "absolute", transform: `rotate(${rot})` };
  const placement: React.CSSProperties =
    pos === "tl" ? { top: 0, left: 0 }
    : pos === "tr" ? { top: 0, right: 0 }
    : pos === "br" ? { bottom: 0, right: 0 }
    : { bottom: 0, left: 0 };

  return (
    <div style={{ ...base, ...placement }}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M4 4 L4 22" stroke="#efcb6d" strokeWidth="1.2" opacity="0.72" strokeLinecap="round" />
        <path d="M4 4 L22 4" stroke="#efcb6d" strokeWidth="1.2" opacity="0.72" strokeLinecap="round" />
        <path d="M4 4 L13 13" stroke="#efcb6d" strokeWidth="0.6" opacity="0.32" strokeLinecap="round" />
        <circle cx="4"  cy="4"  r="2.2" fill="#efcb6d" opacity="0.88" />
        <circle cx="22" cy="4"  r="1"   fill="#efcb6d" opacity="0.38" />
        <circle cx="4"  cy="22" r="1"   fill="#efcb6d" opacity="0.38" />
      </svg>
    </div>
  );
}

function DiamondDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
      <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, transparent, rgba(239,203,109,0.55))" }} />
      <svg width="9" height="9" viewBox="0 0 9 9">
        <rect x="1" y="1" width="7" height="7" fill="#efcb6d" transform="rotate(45 4.5 4.5)" opacity="0.85" />
      </svg>
      <div style={{ flex: 1, height: 0.5, background: "linear-gradient(90deg, rgba(239,203,109,0.55), transparent)" }} />
    </div>
  );
}

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const nameRef  = useRef<HTMLHeadingElement>(null);
  const xvRef    = useRef<HTMLDivElement>(null);
  const dateRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const schedule = [
      { el: frameRef, delay: 180,  styles: { opacity: "1", transform: "scale(1)" } },
      { el: nameRef,  delay: 500,  styles: { opacity: "1", transform: "translateY(0)" } },
      { el: xvRef,    delay: 860,  styles: { opacity: "1", transform: "translateY(0)" } },
      { el: dateRef,  delay: 1160, styles: { opacity: "1", transform: "translateY(0)" } },
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
        background: "linear-gradient(160deg, #3a0f26 0%, #5c1a40 50%, #3a0f26 100%)",
        overflow: "hidden",
        padding: "60px 28px",
      }}
    >
      {/* Central radial glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 55% at 50% 46%, rgba(212,71,138,0.22) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          bottom: -10,
          left: p.left,
          width: p.size,
          height: p.size,
          borderRadius: "50%",
          background: p.color,
          opacity: 0.4,
          animation: `floatUp ${p.dur}s ${p.del}s linear infinite`,
          pointerEvents: "none",
        }} />
      ))}

      {/* Ornamental frame */}
      <div
        ref={frameRef}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 390,
          opacity: 0,
          transform: "scale(0.95)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <CornerOrnament pos="tl" />
        <CornerOrnament pos="tr" />
        <CornerOrnament pos="bl" />
        <CornerOrnament pos="br" />

        {/* Outer border */}
        <div style={{
          margin: "18px",
          border: "1px solid rgba(239,203,109,0.38)",
          borderRadius: 3,
          padding: "42px 30px 38px",
          position: "relative",
          textAlign: "center",
        }}>
          {/* Inner thin border */}
          <div style={{
            position: "absolute",
            inset: 7,
            border: "0.5px solid rgba(239,203,109,0.17)",
            borderRadius: 2,
            pointerEvents: "none",
          }} />

          {/* Top divider */}
          <div style={{ marginBottom: 26 }}>
            <DiamondDivider />
          </div>

          {/* Name — Valentina */}
          <h1
            ref={nameRef}
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "clamp(68px, 19vw, 96px)",
              lineHeight: 1.1,
              background: "linear-gradient(140deg, #ffa8c5 0%, #efcb6d 45%, #ff7dc6 80%, #ffa8c5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 24px rgba(212,71,138,0.52))",
              margin: "0 0 6px",
              padding: "0 8px 6px",
              opacity: 0,
              transform: "translateY(26px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            Valentina
          </h1>

          {/* Mid mini-separator */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            margin: "10px 0 18px",
          }}>
            <div style={{ width: 26, height: 0.5, background: "rgba(239,203,109,0.38)" }} />
            <svg width="5" height="5" viewBox="0 0 5 5">
              <rect x="0.5" y="0.5" width="4" height="4" fill="none"
                stroke="rgba(239,203,109,0.68)" strokeWidth="0.8"
                transform="rotate(45 2.5 2.5)" />
            </svg>
            <div style={{ width: 26, height: 0.5, background: "rgba(239,203,109,0.38)" }} />
          </div>

          {/* XV — large */}
          <div
            ref={xvRef}
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <div style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 700,
              fontSize: "clamp(60px, 17vw, 86px)",
              letterSpacing: 18,
              lineHeight: 1,
              textIndent: 18,
              background: "linear-gradient(135deg, #efcb6d 0%, #fff8e0 50%, #efcb6d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              XV
            </div>
            <div style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(22px, 6vw, 30px)",
              letterSpacing: 10,
              textTransform: "uppercase",
              color: "rgba(255,168,197,0.82)",
              marginTop: 4,
              textIndent: 10,
            }}>
              Años
            </div>
          </div>

          {/* Date pill */}
          <div
            ref={dateRef}
            style={{
              opacity: 0,
              transform: "translateY(14px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
              marginTop: 24,
            }}
          >
            <span style={{
              display: "inline-block",
              padding: "5px 22px",
              border: "0.5px solid rgba(239,203,109,0.28)",
              borderRadius: 40,
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontSize: 14,
              letterSpacing: 4,
              color: "rgba(255,168,197,0.72)",
            }}>
              19 · Junio · 2026
            </span>
          </div>

          {/* Bottom divider */}
          <div style={{ marginTop: 26 }}>
            <DiamondDivider />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        animation: "hintFloat 3s ease-in-out infinite",
      }}>
        <div style={{
          width: 1,
          height: 34,
          background: "linear-gradient(to bottom, transparent, rgba(255,168,197,0.48))",
        }} />
      </div>
    </section>
  );
}
