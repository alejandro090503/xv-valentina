"use client";
import { useEffect, useRef } from "react";

interface Props {
  onOpen: () => void;
}

export default function SplashScreen({ onOpen }: Props) {
  const monogramRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLButtonElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;

    // Fade-in screen
    requestAnimationFrame(() => {
      if (el) el.style.opacity = "1";
    });

    const delays = [
      { ref: monogramRef, delay: 300, styles: { opacity: "1", transform: "scale(1)" } },
      { ref: nameRef, delay: 700, styles: { opacity: "1" } },
      { ref: lineRef, delay: 1000, styles: { opacity: "1" } },
      { ref: hintRef, delay: 1400, styles: { opacity: "1" } },
    ];

    const timers = delays.map(({ ref, delay, styles }) =>
      setTimeout(() => {
        if (ref.current) Object.assign(ref.current.style, styles);
      }, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      ref={screenRef}
      onClick={onOpen}
      role="button"
      aria-label="Toca para ver la invitación"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        overflow: "hidden",
        cursor: "pointer",
        background: "linear-gradient(160deg,#3a0f26 0%,#5c1a40 50%,#3a0f26 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        opacity: 0,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Partículas decorativas */}
      <Particles />

      {/* Monograma */}
      <div
        ref={monogramRef}
        style={{
          fontFamily: "var(--font-great-vibes), cursive",
          fontSize: 120,
          lineHeight: 1.2,
          padding: "0 24px",
          background: "linear-gradient(135deg,#ffa8c5,#efcb6d 50%,#ff7dc6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 4px 32px rgba(212,71,138,0.55))",
          opacity: 0,
          transform: "scale(0.88)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        V
      </div>

      {/* Nombre */}
      <div
        ref={nameRef}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontSize: 15,
          letterSpacing: 8,
          textTransform: "uppercase",
          color: "rgba(255,168,197,0.70)",
          marginTop: 6,
          opacity: 0,
          transition: "opacity 0.7s ease",
        }}
      >
        Valentina · XV Años
      </div>

      {/* Línea divisoria */}
      <div
        ref={lineRef}
        style={{
          width: 60,
          height: 1,
          margin: "22px auto 20px",
          background: "linear-gradient(90deg,transparent,#d4478a,transparent)",
          opacity: 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Botón hint */}
      <button
        ref={hintRef}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 11,
          letterSpacing: 8,
          textTransform: "uppercase",
          color: "rgba(255,168,197,0.85)",
          opacity: 0,
          cursor: "pointer",
          whiteSpace: "nowrap",
          padding: "14px 40px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(212,71,138,0.30)",
          borderRadius: 40,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          overflow: "hidden",
          position: "relative",
          animation: "hintFloat 3.2s ease-in-out infinite",
          transition: "opacity 0.7s ease",
        }}
      >
        Toca para abrir
      </button>
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 6 + 3,
    duration: Math.random() * 6 + 6,
    delay: Math.random() * 4,
    color: i % 3 === 0 ? "#efcb6d" : i % 3 === 1 ? "#ffa8c5" : "#ff7dc6",
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: "-10px",
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            opacity: 0.4,
            animation: `floatUp ${p.duration}s ${p.delay}s linear infinite`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}
