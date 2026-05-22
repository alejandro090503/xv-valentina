"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (nameRef.current) {
        nameRef.current.style.opacity = "1";
        nameRef.current.style.transform = "translateY(0)";
      }
      if (subRef.current) {
        subRef.current.style.opacity = "1";
        subRef.current.style.transform = "translateY(0)";
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "#f9e0ec",
        padding: 0,
      }}
    >
      {/* Fondo hero */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Degradado inferior */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255,245,249,0) 0%, rgba(255,245,249,0) 30%, rgba(255,245,249,0.45) 55%, rgba(255,245,249,0.90) 75%, #fff5f9 100%)",
        }}
      />

      {/* Contenido inferior */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          marginTop: "auto",
          padding: "0 28px 62px",
          textAlign: "center",
        }}
      >
        <h1
          ref={nameRef}
          style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: "clamp(52px, 16vw, 82px)",
            lineHeight: 1.05,
            background:
              "linear-gradient(135deg,#fff5f9,#ffa8c5 40%,#fff5f9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 10,
            padding: "0 16px",
            filter: "drop-shadow(0 2px 18px rgba(139,26,82,.50))",
            transform: "translateY(30px)",
            opacity: 0,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          Valentina
        </h1>

        <div
          ref={subRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            transform: "translateY(16px)",
            opacity: 0,
            transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 600,
              fontSize: 68,
              letterSpacing: 12,
              lineHeight: 1,
              background:
                "linear-gradient(135deg,#8b1a52 0%,#efcb6d 45%,#8b1a52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              position: "relative",
              display: "inline-block",
            }}
          >
            XV
          </span>
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: 20,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#8b1a52",
              marginTop: 8,
            }}
          >
            Años
          </span>
        </div>
      </div>
    </section>
  );
}
