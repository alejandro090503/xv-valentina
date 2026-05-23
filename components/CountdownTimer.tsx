"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-19T20:45:00-06:00");

function getRemainingTime() {
  const now = new Date();
  const diff = TARGET.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    total: diff,
  };
}

const TOTAL_DAYS = Math.ceil(
  (TARGET.getTime() - new Date("2026-01-01").getTime()) / (1000 * 60 * 60 * 24)
);

interface RingProps {
  value: number;
  label: string;
  max: number;
  color: string;
  glowColor: string;
}

function Ring({ value, label, max, color, glowColor }: RingProps) {
  const r = 50;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = circ * (1 - pct);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: 78, height: 78 }}>
        <svg viewBox="0 0 120 120" style={{ width: "100%", height: "100%", overflow: "visible", filter: "drop-shadow(0 2px 8px rgba(139,26,82,0.08))" }}>
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(212,71,138,0.07)" strokeWidth="3" />
          <circle cx="60" cy="60" r={r} fill="none" stroke={glowColor} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={offset}
            transform="rotate(-90 60 60)"
            style={{ filter: "blur(7px)", opacity: 0.3 }}
          />
          <circle cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="3.4" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={offset}
            transform="rotate(-90 60 60)"
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <span style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 26,
            fontWeight: 600,
            color: "#3a0f26",
            lineHeight: 1,
            fontVariantNumeric: "tabular-nums",
            letterSpacing: 0.6,
          }}>
            {String(value).padStart(2, "0")}
          </span>
          <span style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: 8,
            letterSpacing: "1.6px",
            textTransform: "uppercase",
            color: "#d4478a",
            marginTop: 2,
            opacity: 0.78,
          }}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getRemainingTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getRemainingTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ padding: "64px 26px" }}>
      <h2 className="sec-title rv" style={{
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
        Cuenta Regresiva
      </h2>

      <div style={{
        background: "linear-gradient(145deg,rgba(255,255,255,0.78),rgba(255,245,249,0.92))",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(212,71,138,0.13)",
        borderRadius: 28,
        padding: "40px 20px 36px",
        boxShadow: "0 12px 48px rgba(139,26,82,0.07),inset 0 1px 0 rgba(255,255,255,0.85)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Barra superior */}
        <div style={{ position: "absolute", top: -1, left: "15%", right: "15%", height: 1.5,
          background: "linear-gradient(90deg,transparent,#d4478a 25%,#efcb6d 50%,#ffa8c5 75%,transparent)",
        }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px", maxWidth: 380, margin: "0 auto", justifyItems: "center" }}>
          <Ring value={time.days} label="Días" max={TOTAL_DAYS} color="#d4478a" glowColor="#d4478a" />
          <Ring value={time.hours} label="Horas" max={24} color="#ff7dc6" glowColor="#ff7dc6" />
          <Ring value={time.minutes} label="Minutos" max={60} color="#efcb6d" glowColor="#efcb6d" />
          <Ring value={time.seconds} label="Segundos" max={60} color="#ffa8c5" glowColor="#ffa8c5" />
        </div>

        <div style={{ textAlign: "center", marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(212,71,138,0.10)" }}>
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: 16,
            color: "#3a0f26",
            opacity: 0.65,
            letterSpacing: 1,
            lineHeight: 1.6,
          }}>
            Cada segundo más cerca de este día especial
          </p>
        </div>
      </div>
    </section>
  );
}
