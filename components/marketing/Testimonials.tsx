"use client";

import { useState } from "react";
import { Mail, Users, MessageSquare, Sparkles } from "lucide-react";

const perks = [
  { icon: Sparkles, title: "3 months free", sub: "For founding members" },
  { icon: Users, title: "Direct access", sub: "To our founding team" },
  { icon: MessageSquare, title: "Shape the product", sub: "Your feedback matters" },
];

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const spotsTotal = 50;
  const spotsJoined = 31;
  const spotsLeft = spotsTotal - spotsJoined;

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section style={{
      padding: "7rem 5%",
      background: "#1C1917",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.1)", border: "1px solid rgba(196,169,125,0.25)", padding: "0.45rem 1.25rem", borderRadius: "100px" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C4A97D", display: "inline-block", boxShadow: "0 0 8px rgba(196,169,125,0.6)" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#C4A97D", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              Early access — {spotsLeft} spots left
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, color: "#F5EFE4", lineHeight: 1.15, textAlign: "center", marginBottom: "1.25rem" }}>
          Be one of the first 50<br />
          <em style={{ color: "#C4A97D" }}>funeral homes on Mary Rose</em>
        </h2>

        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(245,240,232,0.5)", lineHeight: 1.8, textAlign: "center", marginBottom: "2.5rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
          Join our founding member waitlist and get 3 months free when we launch — plus direct access to our team to shape the product around your workflow.
        </p>

        {/* Form */}
        {!submitted ? (
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ flex: 1, position: "relative" as const }}>
                <Mail size={16} strokeWidth={1.5} color="rgba(245,240,232,0.25)" style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                <input
                  type="email"
                  placeholder="your@funeralhome.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  style={{
                    width: "100%",
                    padding: "0.9rem 1rem 0.9rem 2.75rem",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(196,169,125,0.2)",
                    borderRadius: "4px",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.9rem",
                    color: "#F5EFE4",
                    outline: "none",
                    boxSizing: "border-box" as const,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.2)")}
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)",
                  color: "#fff",
                  border: "none",
                  padding: "0.9rem 1.75rem",
                  borderRadius: "4px",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  cursor: loading ? "not-allowed" : "pointer",
                  whiteSpace: "nowrap" as const,
                  opacity: loading ? 0.7 : 1,
                  boxShadow: "0 4px 16px rgba(139,111,71,0.3)",
                  transition: "all 0.25s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(139,111,71,0.4)"; }}}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(139,111,71,0.3)"; }}
              >
                {loading ? "Joining..." : "Join waitlist →"}
              </button>
            </div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(245,240,232,0.25)", textAlign: "center" as const, fontWeight: 300 }}>
              No spam. No credit card. We'll email you personally before launch.
            </p>
          </div>
        ) : (
          <div style={{ background: "rgba(196,169,125,0.08)", border: "1px solid rgba(196,169,125,0.25)", borderRadius: "8px", padding: "1.5rem", textAlign: "center" as const, marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "#C4A97D", marginBottom: "0.5rem" }}>You're on the list.</div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "rgba(245,240,232,0.45)", fontWeight: 300 }}>We'll reach out personally before launch. Thank you for believing in this early.</p>
          </div>
        )}

        {/* Progress bar */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "rgba(245,240,232,0.3)", fontWeight: 300 }}>{spotsJoined} funeral homes joined</span>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#C4A97D", fontWeight: 500 }}>{spotsLeft} spots left</span>
          </div>
          <div style={{ height: "5px", background: "rgba(255,255,255,0.06)", borderRadius: "100px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(spotsJoined / spotsTotal) * 100}%`, background: "linear-gradient(90deg, #C4A97D, #8B6F47)", borderRadius: "100px" }} />
          </div>
        </div>

        {/* Perks */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div key={perk.title} style={{ textAlign: "center" as const, padding: "1.5rem 1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(196,169,125,0.1)", borderRadius: "10px" }}>
                <div style={{ width: 40, height: 40, borderRadius: "10px", background: "rgba(196,169,125,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
                  <Icon size={18} strokeWidth={1.5} color="#C4A97D" />
                </div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "#F5EFE4", marginBottom: "0.25rem" }}>{perk.title}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(245,240,232,0.35)", fontWeight: 300 }}>{perk.sub}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}