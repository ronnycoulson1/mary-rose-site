"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [animated, setAnimated] = useState(false);
  const spotsLeft = 17;

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 50%, #EDE0CC 100%)",
      display: "flex",
      alignItems: "center",
      padding: "8rem 5% 5rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background glows */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-60px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

        {/* LEFT — Copy */}
        <div style={{ opacity: animated ? 1 : 0, transform: animated ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s ease" }}>

          {/* Founding badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.12)", border: "1px solid rgba(196,169,125,0.35)", padding: "0.45rem 1.1rem", borderRadius: "100px", marginBottom: "2rem" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C4A97D", display: "inline-block", boxShadow: "0 0 8px rgba(196,169,125,0.8)" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8B6F47", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              Early access — only {spotsLeft} founding spots left
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "1.5rem" }}>
            Every case organized.<br />
            Every family{" "}
            <em style={{ color: "#B8864E" }}>taken care of.</em>
          </h1>

          {/* Subheadline */}
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.85, color: "#6B5E52", marginBottom: "2rem", maxWidth: "480px" }}>
            CaseFlow is a simple, reliable case management platform built for independent funeral homes. One place for every case, task, document, and team member — so you can focus entirely on the families in your care.
          </p>

          {/* MVP feature list */}
          <div style={{ marginBottom: "2.5rem", display: "flex", flexDirection: "column" as const, gap: "0.65rem" }}>
            {[
              "Centralized case dashboard — all active cases at a glance",
              "Task & workflow checklists per case with due dates",
              "Secure document hub — certs, permits, contracts",
              "Team collaboration — assign, comment, track updates",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#C4A97D", fontSize: "0.85rem", marginTop: "3px", flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "#6B5E52", fontWeight: 300, lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" as const, marginBottom: "1.75rem" }}>
            <Link
              href="/signup"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "1rem 2.25rem", borderRadius: "4px", fontSize: "1rem", fontFamily: "'Jost', sans-serif", fontWeight: 500, boxShadow: "0 8px 28px rgba(139,111,71,0.35)", transition: "all 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(139,111,71,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(139,111,71,0.35)"; }}
            >
              Apply for Early Access
            </Link>
            <Link
              href="/features"
              style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#8B6F47", textDecoration: "none", fontWeight: 400, display: "flex", alignItems: "center", gap: "6px" }}
              onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none"; }}
            >
              See what's included →
            </Link>
          </div>

          {/* Trust signals */}
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "1.25rem" }}>
            {["One-time payment", "Lifetime access", "Full refund if not launched by June 2026"].map((t) => (
              <span key={t} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#9B8E84", display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ color: "#C4A97D" }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — Dashboard mockup */}
        <div style={{ opacity: animated ? 1 : 0, transform: animated ? "translateY(0)" : "translateY(32px)", transition: "all 1s ease 0.25s", position: "relative" }}>

          {/* Urgency card */}
          <div style={{ position: "absolute", top: "-18px", right: "-18px", zIndex: 10, background: "#1C1917", borderRadius: "8px", padding: "0.75rem 1.25rem", border: "1px solid rgba(196,169,125,0.25)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#C4A97D", fontWeight: 600, marginBottom: "3px" }}> {spotsLeft} of 20 founding spots left</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "rgba(245,240,232,0.4)" }}>Price increases after launch</div>
          </div>

          {/* Founding perks card */}
          <div style={{ position: "absolute", bottom: "-18px", left: "-18px", zIndex: 10, background: "#fff", borderRadius: "8px", padding: "0.75rem 1.25rem", border: "1px solid rgba(196,169,125,0.25)", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "#8B6F47", fontWeight: 600, marginBottom: "3px" }}>Founding member perks</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "#9B8E84" }}>Priority requests · Free onboarding · Shape the product</div>
          </div>

          {/* Browser chrome */}
          <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 32px 80px rgba(28,25,23,0.14), 0 8px 24px rgba(28,25,23,0.07)", overflow: "hidden", border: "1px solid rgba(196,169,125,0.15)" }}>

            {/* Browser bar */}
            <div style={{ background: "#F5F0E8", padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid rgba(196,169,125,0.15)" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                {["#FF5F57", "#FFBD2E", "#28CA41"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ flex: 1, background: "#fff", borderRadius: "4px", padding: "0.25rem 0.75rem", border: "1px solid rgba(196,169,125,0.2)" }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "#9B8E84" }}>app.caseflow.com/dashboard</span>
              </div>
            </div>

            {/* App layout */}
            <div style={{ display: "flex", height: "400px" }}>

              {/* Sidebar */}
              <div style={{ width: "175px", background: "#1C1917", padding: "1rem 0", flexShrink: 0 }}>
                <div style={{ padding: "0 1rem 1rem", borderBottom: "1px solid rgba(196,169,125,0.1)", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1rem", color: "#F5EFE4" }}>Case<span style={{ color: "#C4A97D" }}>Flow</span></span>
                </div>
                {[
                  { icon: "⊞", label: "Dashboard", active: true },
                  { icon: "📋", label: "Cases", active: false },
                  { icon: "✅", label: "Tasks", active: false },
                  { icon: "📁", label: "Documents", active: false },
                  { icon: "👥", label: "Team", active: false },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0.55rem 1rem", background: item.active ? "rgba(196,169,125,0.12)" : "transparent", borderLeft: item.active ? "2px solid #C4A97D" : "2px solid transparent", marginBottom: "2px" }}>
                    <span style={{ fontSize: "0.75rem" }}>{item.icon}</span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: item.active ? "#C4A97D" : "rgba(245,240,232,0.35)", fontWeight: item.active ? 500 : 300 }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, padding: "1.25rem", background: "#FAFAF7", overflow: "hidden" }}>

                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem", color: "#1C1917" }}>Good morning, Ronny</span>
                  <div style={{ background: "linear-gradient(135deg, #C4A97D, #8B6F47)", color: "#fff", padding: "0.35rem 0.85rem", borderRadius: "4px", fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 500 }}>+ New Case</div>
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.6rem", marginBottom: "1rem" }}>
                  {[
                    { label: "Active Cases", value: "12", color: "#B8864E" },
                    { label: "Due Today", value: "4", color: "#DC2626" },
                    { label: "Pending Docs", value: "7", color: "#7C3AED" },
                  ].map((s) => (
                    <div key={s.label} style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "6px", padding: "0.65rem" }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", color: s.color, lineHeight: 1 }}>{s.value}</div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", color: "#9B8E84", marginTop: "2px" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Case list */}
                <div style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "6px", overflow: "hidden" }}>
                  <div style={{ padding: "0.6rem 0.75rem", borderBottom: "1px solid rgba(196,169,125,0.1)" }}>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#1C1917" }}>Active Cases</span>
                  </div>
                  {[
                    { name: "Johnson, Mary", status: "Arrangement", color: "#C4A97D", tasks: "3/5 tasks" },
                    { name: "Williams, Robert", status: "First Call", color: "#059669", tasks: "1/3 tasks" },
                    { name: "Davis, Helen", status: "Service", color: "#7C3AED", tasks: "5/5 tasks" },
                    { name: "Miller, James", status: "Closed", color: "#9B8E84", tasks: "6/6 tasks" },
                  ].map((c) => (
                    <div key={c.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0.75rem", borderBottom: "1px solid rgba(196,169,125,0.06)" }}>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#1C1917" }}>{c.name}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", color: "#9B8E84" }}>{c.tasks}</span>
                        <span style={{ background: `${c.color}18`, color: c.color, padding: "2px 7px", borderRadius: "100px", fontSize: "0.6rem", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>{c.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}