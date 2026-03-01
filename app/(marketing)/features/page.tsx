"use client";

import { useState } from "react";

const features = [
  {
    icon: "📋",
    title: "Case Management",
    tagline: "Every case. Every detail. Always organized.",
    desc: "From the first call to the final service, CaseFlow keeps every detail of every family's case organized, trackable, and accessible in one place. No more sticky notes, scattered spreadsheets, or missed details.",
    bullets: [
      "Create and edit cases with all relevant details",
      "Filter by status, assigned staff, and date range",
      "Full activity log on every case",
      "Assign multiple staff members per case",
      "Case status tracking from intake to completion",
    ],
    color: "#B8864E",
    bg: "#FDF8F2",
  },
  {
    icon: "📅",
    title: "Shared Calendar",
    tagline: "Your whole team. One schedule.",
    desc: "Coordinate services, viewings, transfers, and appointments across your entire team with a shared calendar linked directly to cases. Everyone stays aligned — no more double bookings or missed appointments.",
    bullets: [
      "Day, week, and month views",
      "Events linked directly to specific cases",
      "Team-wide visibility with role-based access",
      "Create events from within any case",
      "Upcoming events on your dashboard",
    ],
    color: "#059669",
    bg: "#F0FDF9",
  },
  {
    icon: "📁",
    title: "Document Center",
    tagline: "Every document. Exactly where it belongs.",
    desc: "Upload, tag, and retrieve death certificates, contracts, authorizations, embalming reports, and more — all linked to the right case and findable in seconds.",
    bullets: [
      "Centralized document repository",
      "Tag and search documents instantly",
      "Documents linked to specific cases",
      "Secure cloud storage with backups",
      "Upload from any device",
    ],
    color: "#7C3AED",
    bg: "#FAF5FF",
  },
  {
    icon: "✅",
    title: "Task Tracking",
    tagline: "Nothing falls through the cracks.",
    desc: "Personal and team tasks with due dates, statuses, and assignments — all in one place. Know exactly what needs to happen next on every case, and who's responsible for it.",
    bullets: [
      "Create tasks linked to cases",
      "Assign tasks to specific staff members",
      "Due dates and status updates",
      "Personal and team task views",
      "Dashboard overview of all pending tasks",
    ],
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: "💳",
    title: "Payments & Invoices",
    tagline: "Get paid. Stay organized. No chasing.",
    desc: "Manage invoices, track outstanding balances, and view payment statuses without ever leaving CaseFlow. Know exactly what's been paid, what's pending, and what's overdue.",
    bullets: [
      "Create and send invoices per case",
      "Track outstanding balances",
      "Payment status at a glance",
      "Full payment history per case",
      "Outstanding balance dashboard",
    ],
    color: "#DC2626",
    bg: "#FFF5F5",
  },
  {
    icon: "👥",
    title: "Team & Roles",
    tagline: "The right access for the right people.",
    desc: "Invite staff, assign roles, and control exactly who sees and does what. Role-based permissions keep sensitive information secure while giving each team member exactly what they need.",
    bullets: [
      "Admin, Manager, and Staff roles",
      "Role-based permissions",
      "Invite team members by email",
      "Activity tracking per staff member",
      "Manage roles from settings anytime",
    ],
    color: "#0891B2",
    bg: "#F0F9FF",
  },
];

export default function FeaturesPage() {
  const [active, setActive] = useState(0);

  return (
    <div style={{ background: "#FAFAF7", paddingTop: "68px" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "7rem 5% 5rem", background: "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 60%, #FAFAF7 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.12)", border: "1px solid rgba(196,169,125,0.3)", padding: "0.4rem 1rem", borderRadius: "100px", marginBottom: "1.75rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4A97D", display: "inline-block" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8B6F47", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Everything you need</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "1.5rem" }}>
            Built for the way<br />
            <em style={{ color: "#B8864E" }}>funeral homes work</em>
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8, color: "#6B5E52", maxWidth: "520px", margin: "0 auto" }}>
            Every feature in CaseFlow was designed around real conversations with funeral directors. No fluff — just the tools you actually need.
          </p>
        </div>
      </section>

      {/* ── FEATURE TABS ── */}
      <section style={{ padding: "5rem 5%", background: "#fff", borderBottom: "1px solid rgba(196,169,125,0.15)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Tab bar */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "3rem", overflowX: "auto", paddingBottom: "4px" }}>
            {features.map((f, i) => (
              <button
                key={f.title}
                onClick={() => setActive(i)}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "0.6rem 1.25rem", borderRadius: "100px",
                  border: active === i ? "1px solid rgba(196,169,125,0.4)" : "1px solid rgba(196,169,125,0.15)",
                  background: active === i ? "#FDF8F2" : "transparent",
                  cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" as const,
                  fontFamily: "'Jost', sans-serif", fontSize: "0.875rem",
                  fontWeight: active === i ? 500 : 400,
                  color: active === i ? "#8B6F47" : "#6B5E52",
                }}
              >
                <span>{f.icon}</span>
                <span>{f.title}</span>
              </button>
            ))}
          </div>

          {/* Feature detail */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${features[active].color}15`, padding: "0.35rem 1rem", borderRadius: "100px", marginBottom: "1.25rem" }}>
                <span>{features[active].icon}</span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 600, color: features[active].color, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{features[active].title}</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.2, marginBottom: "1rem" }}>
                {features[active].tagline}
              </h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", color: "#6B5E52", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
                {features[active].desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
                {features[active].bullets.map((b) => (
                  <div key={b} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: features[active].color, fontSize: "1rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#6B5E52", fontWeight: 300, lineHeight: 1.6 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual card */}
            <div style={{ background: features[active].bg, borderRadius: "12px", border: `1px solid ${features[active].color}20`, padding: "3rem", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", minHeight: "360px", textAlign: "center" as const, transition: "all 0.3s ease" }}>
              <div style={{ fontSize: "5rem", marginBottom: "1.5rem" }}>{features[active].icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 400, color: "#1C1917", marginBottom: "0.75rem" }}>{features[active].title}</h3>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "#9B8E84", fontWeight: 300, lineHeight: 1.7, maxWidth: "280px" }}>{features[active].tagline}</p>
              <div style={{ marginTop: "2rem", padding: "0.6rem 1.5rem", background: features[active].color, borderRadius: "4px" }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "#fff" }}>Included in all plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL FEATURES GRID ── */}
      <section style={{ padding: "7rem 5%", background: "#FAFAF7" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>The full picture</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.15 }}>
              Everything in one place.<br />
              <em style={{ color: "#B8864E" }}>Nothing left out.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                onClick={() => { setActive(i); window.scrollTo({ top: 400, behavior: "smooth" }); }}
                style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.2)", borderRadius: "10px", padding: "2rem", cursor: "pointer", transition: "all 0.25s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = "rgba(196,169,125,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(196,169,125,0.2)"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", fontWeight: 400, color: "#1C1917", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#9B8E84", lineHeight: 1.65, fontWeight: 300 }}>{f.tagline}</p>
                <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "6px", color: f.color, fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500 }}>
                  Learn more <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 5%", background: "#1C1917", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1.25rem" }}>🕊️</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 400, color: "#F5EFE4", marginBottom: "1rem", lineHeight: 1.15 }}>
            Ready to see it<br />
            <em style={{ color: "#C4A97D" }}>in action?</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", color: "rgba(245,240,232,0.6)", marginBottom: "2.5rem", lineHeight: 1.75, fontWeight: 300 }}>
            Start your free 14-day trial. No credit card required. Setup in under 5 minutes.
          </p>
          <a
            href="/signup"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "4px", fontSize: "1rem", fontFamily: "'Jost', sans-serif", fontWeight: 500, boxShadow: "0 8px 28px rgba(139,111,71,0.35)", transition: "all 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(139,111,71,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(139,111,71,0.35)"; }}
          >
            Start free trial →
          </a>
        </div>
      </section>

    </div>
  );
}