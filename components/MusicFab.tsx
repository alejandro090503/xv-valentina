"use client";
import { useState, useRef, useEffect } from "react";

export default function MusicFab() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/musica.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pausar música" : "Reproducir música"}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 998,
        width: 56,
        height: 56,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: "linear-gradient(135deg,#d4478a,#8b1a52)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(139,26,82,0.40)",
        animation: "fabpulse 2.8s infinite ease-out",
      }}
    >
      {playing ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <rect x="6" y="4" width="4" height="16"/>
          <rect x="14" y="4" width="4" height="16"/>
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M9 4l10 8-10 8V4z"/>
          <path d="M9 4l10 8-10 8V4z" fill="none" stroke="white" strokeWidth="1"/>
        </svg>
      )}
    </button>
  );
}
