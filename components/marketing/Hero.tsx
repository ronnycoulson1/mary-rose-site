"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [animated, setAnimated] = useState(false);

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

          {/* Headline */}
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "1.5rem" }}>
            Every case organized.<br />
            Every family{" "}
            <em style={{ color: "#B8864E" }}>taken care of.</em>
          </h1>

          {/* Subheadline */}
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.85, color: "#6B5E52", marginBottom: "2rem", maxWidth: "480px" }}>
            Mary Rose is a simple, reliable case management platform built for independent funeral homes. One place for every case, task, document, and team member — so you can focus entirely on the families in your care.
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
        <div style={{ opacity: animated ? 1 : 0, transform: animated ? "translateY(0) scale(1)" : "translateY(28px) scale(0.98)", transition: "all 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s", position: "relative" }}>

          <div style={{ background: "#FBF9F5", borderRadius: "16px", boxShadow: "0 40px 100px rgba(28,25,23,0.12), 0 12px 32px rgba(28,25,23,0.06)", overflow: "hidden", border: "1px solid rgba(28,25,23,0.06)" }}>

            {/* Browser bar */}
            <div style={{ background: "rgba(28,25,23,0.03)", padding: "0.7rem 1rem", display: "flex", alignItems: "center", gap: "0.65rem", borderBottom: "1px solid rgba(28,25,23,0.05)" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {["#D4CFC6", "#D4CFC6", "#D4CFC6"].map((c, i) => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ flex: 1, background: "rgba(255,255,255,0.7)", borderRadius: "6px", padding: "0.3rem 0.85rem" }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", color: "#A89B8F", letterSpacing: "0.01em" }}>app.maryrose.com</span>
              </div>
            </div>

            {/* App layout */}
            <div style={{ display: "flex", height: "420px" }}>

              {/* Sidebar */}
              <div style={{ width: "148px", background: "#161412", padding: "1.15rem 0.65rem", flexShrink: 0, display: "flex", flexDirection: "column" as const, gap: "2px" }}>
                <div style={{ padding: "0 0.5rem 1.15rem", marginBottom: "0.35rem" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "0.95rem", color: "#F5EFE4", letterSpacing: "0.01em" }}>Mary <span style={{ color: "#C4A97D" }}>Rose</span></span>
                </div>
                {[
                  { label: "Dashboard", active: true },
                  { label: "Cases", active: false },
                  { label: "Tasks", active: false },
                  { label: "Documents", active: false },
                  { label: "Team", active: false },
                ].map((item) => (
                  <div key={item.label} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "0.55rem 0.65rem",
                    borderRadius: "6px",
                    background: item.active ? "rgba(196,169,125,0.14)" : "transparent",
                  }}>
                    <span style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: item.active ? "#C4A97D" : "rgba(245,240,232,0.2)",
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.72rem",
                      color: item.active ? "#E8D5B5" : "rgba(245,240,232,0.38)",
                      fontWeight: item.active ? 450 : 300,
                      letterSpacing: "0.01em",
                    }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, padding: "1.35rem 1.4rem", background: "#F7F4EF", overflow: "hidden" }}>

                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.35rem" }}>
                  <div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", color: "#A89B8F", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "0.2rem" }}>Dashboard</div>
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", color: "#1C1917", fontWeight: 400 }}>Good morning, Ronny</span>
                  </div>
                  <div style={{ color: "#8B6F47", padding: "0.4rem 0.9rem", borderRadius: "5px", fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", fontWeight: 500, border: "1px solid rgba(139,111,71,0.35)", letterSpacing: "0.02em" }}>New case</div>
                </div>

                {/* Stats — quiet, monochrome */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  {[
                    { label: "Active", value: "12" },
                    { label: "Due today", value: "4" },
                    { label: "Pending", value: "7" },
                  ].map((s) => (
                    <div key={s.label} style={{ padding: "0.15rem 0" }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.75rem", color: "#1C1917", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.02em" }}>{s.value}</div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", color: "#A89B8F", marginTop: "0.3rem", letterSpacing: "0.04em", textTransform: "uppercase" as const }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Case list — no pills, no rainbow */}
                <div style={{ borderTop: "1px solid rgba(28,25,23,0.08)" }}>
                  <div style={{ padding: "0.75rem 0 0.55rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", fontWeight: 500, color: "#A89B8F", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Cases</span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", color: "#C4B8AA" }}>4 open</span>
                  </div>
                  {[
                    { name: "Johnson, Mary", status: "Arrangement", tasks: "3 of 5" },
                    { name: "Williams, Robert", status: "First call", tasks: "1 of 3" },
                    { name: "Davis, Helen", status: "Service", tasks: "5 of 5" },
                    { name: "Miller, James", status: "Closed", tasks: "Complete" },
                  ].map((c, i) => (
                    <div key={c.name} style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto auto",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.65rem 0",
                      borderTop: i === 0 ? "none" : "1px solid rgba(28,25,23,0.05)",
                    }}>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#1C1917", fontWeight: 400 }}>{c.name}</span>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "#A89B8F", textAlign: "right" as const }}>{c.tasks}</span>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "#8B6F47", fontWeight: 400, minWidth: "4.5rem", textAlign: "right" as const }}>{c.status}</span>
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