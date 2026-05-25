"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const PANEL_API = "https://panel-invitados.vercel.app/api/confirmar";
const RSVP_URL  = "https://xv-valentina-three.vercel.app";
/* Deadline: 1 jun 2026 23:59:59 — desde 2 jun 00:00 se congela */
const RSVP_DEADLINE = new Date(2026, 5, 1, 23, 59, 59, 999);

type Choice = "yes" | "no" | "";

export default function RSVPSection() {
  const searchParams = useSearchParams();
  const [pases, setPases]     = useState(1);
  const [para, setPara]       = useState<string | null>(null);
  const [names, setNames]     = useState<string[]>([""]);
  const [choice, setChoice]   = useState<Choice>("yes");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ msg: string; color: string } | null>(null);
  const [frozen, setFrozen]   = useState(false);
  const [btnText, setBtnText] = useState("Confirmar");

  /* Parse query params + check deadline */
  useEffect(() => {
    const rawP    = searchParams.get("pases");
    const n       = rawP ? parseInt(rawP, 10) : 1;
    const validN  = isNaN(n) || n < 1 || n > 20 ? 1 : n;
    const paraQ   = searchParams.get("para");

    setPases(validN);
    setNames(Array.from({ length: validN }, () => ""));
    setPara(paraQ);
    setFrozen(Date.now() > RSVP_DEADLINE.getTime());
  }, [searchParams]);

  /* Pre-fill desde el panel si hay ?para= */
  const preFill = useCallback(async () => {
    if (!para) return;
    try {
      const url = `${PANEL_API}?nombre=${encodeURIComponent(para)}&url_boda=${encodeURIComponent(RSVP_URL)}`;
      const r = await fetch(url);
      const d = await r.json();
      if (!d?.ok || !d.invitado) return;
      const inv = d.invitado;
      if (inv.estado === "confirmado") {
        setChoice("yes");
        const nm: string[] = Array.isArray(inv.nombres_confirmados) ? inv.nombres_confirmados : [];
        setNames(prev => prev.map((_, i) => nm[i] ?? ""));
      } else if (inv.estado === "declino") {
        setChoice("no");
      }
    } catch { /* silencioso */ }
  }, [para]);

  useEffect(() => { preFill(); }, [preFill]);

  const handleName = (i: number, val: string) => {
    setNames(prev => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  function setFb(msg: string, color: string) {
    setFeedback({ msg, color });
  }

  async function postConfirm(estado: "confirmado" | "declino", nombresArr: string[]) {
    setLoading(true);
    setBtnText("Enviando…");
    setFeedback(null);
    try {
      const r = await fetch(PANEL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre:              para || "Invitado",
          estado,
          pases_confirmados:   estado === "confirmado" ? nombresArr.length : 0,
          nombres_confirmados: estado === "confirmado" ? nombresArr : [],
          url_boda:            RSVP_URL,
        }),
      });
      const d = await r.json();
      if (d?.ok) {
        setBtnText(estado === "confirmado" ? "¡Confirmado! ✦" : "Respuesta enviada ✦");
        setFb(
          estado === "confirmado"
            ? "¡Gracias por confirmar! Si cambias de opinión puedes actualizar tu respuesta cuando quieras."
            : "Gracias por avisarnos. Si cambias de opinión puedes actualizar tu respuesta cuando quieras.",
          "#8b1a52"
        );
        setTimeout(() => setBtnText("Actualizar respuesta"), 2400);
      } else {
        setBtnText("Confirmar");
        setFb("Hubo un problema al enviar. Intenta de nuevo.", "#b91c1c");
      }
    } catch {
      setBtnText("Confirmar");
      setFb("Sin conexión. Verifica tu internet e intenta de nuevo.", "#b91c1c");
    } finally {
      setLoading(false);
    }
  }

  const handleConfirm = () => {
    if (frozen) { setFb("El plazo para confirmar ya cerró.", "#b91c1c"); return; }
    if (!choice) { setFb("Selecciona si asistirás o no.", "#b91c1c"); return; }
    if (choice === "no") { postConfirm("declino", []); return; }
    const filled = names.map(n => n.trim()).filter(n => n);
    if (filled.length === 0) {
      setFb("Por favor escribe al menos un nombre.", "#b91c1c");
      return;
    }
    postConfirm("confirmado", filled);
  };

  /* === Estilos compartidos === */
  const toggleBtnStyle = (active: boolean, isYes: boolean): React.CSSProperties => ({
    flex: 1,
    padding: "12px 8px",
    minHeight: 44,
    borderRadius: 12,
    border: active
      ? `1.5px solid ${isYes ? "#d4478a" : "#8b1a52"}`
      : "1.5px solid rgba(212,71,138,0.20)",
    background: active
      ? (isYes ? "linear-gradient(135deg,rgba(212,71,138,0.14),rgba(255,168,197,0.18))"
               : "rgba(139,26,82,0.10)")
      : "rgba(255,245,249,0.60)",
    fontFamily: "var(--font-cormorant), serif",
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: 1.5,
    color: active ? (isYes ? "#8b1a52" : "#8b1a52") : "#a3678b",
    cursor: frozen ? "not-allowed" : "pointer",
    transition: "all .2s",
    opacity: frozen ? 0.55 : 1,
  });

  return (
    <section style={{ padding: "64px 26px" }}>
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
        Confirmación
      </h2>

      <div style={{
        background: "linear-gradient(145deg,rgba(255,255,255,0.88),rgba(255,245,249,0.97))",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(212,71,138,0.18)",
        borderRadius: 24,
        padding: "28px 22px",
        boxShadow: "0 4px 20px rgba(139,26,82,0.08)",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Barra superior */}
        <div style={{
          position: "absolute", top: 0, left: "15%", right: "15%",
          height: 1.5,
          background: "linear-gradient(90deg,transparent,#d4478a 25%,#efcb6d 50%,#ffa8c5 75%,transparent)",
        }} />

        {/* Banner deadline si está congelado */}
        {frozen && (
          <div style={{
            marginBottom: 18,
            padding: "14px 16px",
            borderRadius: 12,
            background: "rgba(196,146,10,0.10)",
            border: "1px solid rgba(196,146,10,0.30)",
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: 14,
            lineHeight: 1.5,
            color: "#8b1a52",
            textAlign: "center",
          }}>
            ✦ El plazo para confirmar cerró el <strong style={{ fontStyle: "normal" }}>1 de junio de 2026</strong>.<br />
            Si necesitas ajustar tu respuesta, por favor contacta directamente.
          </div>
        )}

        {/* Badge de pases */}
        <div style={{
          display: "block", width: "fit-content",
          margin: "0 auto 18px",
          background: "linear-gradient(135deg,#d4478a,#8b1a52)",
          color: "#fff", borderRadius: 30,
          padding: "5px 20px",
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic", fontSize: 15, letterSpacing: 2,
          textAlign: "center",
        }}>
          {pases === 1 ? "1 pase disponible" : `${pases} pases disponibles`}
        </div>

        {/* Fecha límite */}
        <p style={{
          textAlign: "center",
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic", fontWeight: 500, fontSize: 15,
          color: "#d4478a", letterSpacing: 2, marginBottom: 18,
        }}>
          Confirma antes del 1 de junio de 2026
        </p>

        {/* Toggle Sí/No asistiré */}
        <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
          <button
            type="button"
            disabled={frozen}
            onClick={() => { setChoice("yes"); setFeedback(null); }}
            style={toggleBtnStyle(choice === "yes", true)}
          >
            Sí asistiré
          </button>
          <button
            type="button"
            disabled={frozen}
            onClick={() => { setChoice("no"); setFeedback(null); }}
            style={toggleBtnStyle(choice === "no", false)}
          >
            No asistiré
          </button>
        </div>

        {/* Campos de nombre — solo si choice === yes */}
        {choice === "yes" && (
          <div style={{ marginBottom: 8 }}>
            {Array.from({ length: pases }).map((_, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{
                  flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
                  background: "linear-gradient(135deg,#d4478a,#ffa8c5)",
                  color: "#fff", fontSize: 13,
                  fontFamily: "var(--font-cormorant), serif",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700,
                  opacity: frozen ? 0.55 : 1,
                }}>
                  {i + 1}
                </div>

                <input
                  type="text"
                  disabled={frozen}
                  placeholder={i === 0 ? "Tu nombre completo" : `Nombre acompañante ${i + 1}`}
                  value={names[i] ?? ""}
                  onChange={(e) => handleName(i, e.target.value)}
                  style={{
                    flex: 1, padding: "14px 16px", minHeight: 50,
                    border: "1.5px solid rgba(212,71,138,0.25)",
                    borderRadius: 12,
                    background: frozen ? "rgba(241,237,231,0.7)" : "rgba(255,245,249,0.80)",
                    fontFamily: "var(--font-lato), sans-serif",
                    fontWeight: 500, fontSize: 16, color: "#3a0f26",
                    outline: "none", transition: "border-color 0.3s",
                    WebkitAppearance: "none",
                    cursor: frozen ? "not-allowed" : "text",
                  }}
                  onFocus={(e) => { if (!frozen) e.currentTarget.style.borderColor = "#d4478a"; }}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(212,71,138,0.25)")}
                />
              </div>
            ))}
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <p style={{
            textAlign: "center", marginTop: 12, marginBottom: 4,
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic", fontSize: 14,
            color: feedback.color,
          }}>
            {feedback.msg}
          </p>
        )}

        {/* Botón confirmar */}
        <button
          onClick={handleConfirm}
          disabled={loading || frozen}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", marginTop: 12, padding: "16px", minHeight: 52,
            background: frozen
              ? "linear-gradient(135deg,#bba,#998)"
              : "linear-gradient(135deg,#d4478a,#8b1a52)",
            color: "#fff", borderRadius: 30, border: "none",
            cursor: (loading || frozen) ? "not-allowed" : "pointer",
            fontFamily: "var(--font-lato), sans-serif",
            fontSize: 15, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 3,
            transition: "opacity .3s, transform .3s",
            boxShadow: "0 4px 22px rgba(139,26,82,0.28)",
            opacity: (loading || frozen) ? 0.55 : 1,
          }}
          onMouseEnter={(e) => {
            if (loading || frozen) return;
            e.currentTarget.style.opacity = "0.88";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            if (loading || frozen) return;
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {frozen ? "Plazo cerrado" : btnText}
        </button>
      </div>
    </section>
  );
}
