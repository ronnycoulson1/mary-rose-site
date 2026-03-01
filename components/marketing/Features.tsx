"use client";

import { useState } from "react";

const features = [
  {
    icon: "📋",
    title: "Case Management",
    desc: "Every detail of every family's case — organized, trackable, and accessible in one place. Filter by status, staff, and date range instantly.",
    detail:
      "Create and edit cases with all relevant details. Assign staff, track progress from first call to final service, and never miss a step.",
  },
  {
    icon: "📅",
    title: "Shared Calendar",
    desc: "Coordinate services, viewings, and appointments across your entire team with a shared calendar linked directly to cases.",
    detail:
      "Day, week, or month views. Create events tied to specific cases. Everyone stays aligned — no more scheduling conflicts.",
  },
  {
    icon: "📁",
    title: "Document Center",
    desc: "Upload, tag, and retrieve death certificates, contracts, authorizations, and more — all linked to the right case.",
    detail:
      "Centralized repository with search and tagging. Every document where it belongs, always findable in seconds.",
  },
  {
    icon: "✅",
    title: "Task Tracking",
    desc: "Personal and team tasks with due dates, statuses, and assignments. Nothing falls through the cracks.",
    detail:
      "View all tasks across cases in one place. Set deadlines, update statuses, and keep every team member accountable.",
  },
  {
    icon: "💳",
    title: "Payments & Invoices",
    desc: "Manage invoices, track outstanding balances, and view payment statuses without switching to another app.",
    detail:
      "Full payment management integrated into every case. Know exactly what's been paid, what's pending, and what's overdue.",
  },
  {
    icon: "👥",
    title: "Team & Roles",
    desc: "Invite staff, assign roles (Admin, Manager, Staff), and control exactly who sees and does what.",
    detail:
      "Role-based permissions keep sensitive information secure while giving each team member exactly the access they need.",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section
      id="features"
      style={{ padding: "7rem 5%", background: "#FAFAF7" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#B8864E",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Everything in one place
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: "#1C1917",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Tools built around the way
            <br />
            <em style={{ color: "#B8864E" }}>you actually work</em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                onClick={() => setActiveFeature(i)}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: "8px",
                  border: `1px solid ${
                    activeFeature === i
                      ? "rgba(196,169,125,0.4)"
                      : "rgba(196,169,125,0.15)"
                  }`,
                  background: activeFeature === i ? "#FDF8F2" : "#fff",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (activeFeature !== i) {
                    e.currentTarget.style.borderColor =
                      "rgba(196,169,125,0.3)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFeature !== i) {
                    e.currentTarget.style.borderColor =
                      "rgba(196,169,125,0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: activeFeature === i ? "0.75rem" : 0,
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{f.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 500,
                      color: activeFeature === i ? "#8B6F47" : "#1C1917",
                      fontSize: "0.95rem",
                    }}
                  >
                    {f.title}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "#C4A97D",
                      transition: "transform 0.2s",
                      transform:
                        activeFeature === i
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                      display: "inline-block",
                    }}
                  >
                    ›
                  </span>
                </div>
                {activeFeature === i && (
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.875rem",
                      color: "#6B5E52",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {f.detail}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Feature visual card */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                border: "1px solid rgba(196,169,125,0.2)",
                boxShadow: "0 16px 48px rgba(28,25,23,0.08)",
                padding: "2.5rem",
                minHeight: "340px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {features[activeFeature].icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "#1C1917",
                  marginBottom: "0.75rem",
                }}
              >
                {features[activeFeature].title}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  color: "#6B5E52",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {features[activeFeature].desc}
              </p>
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  background: "#F9F4EC",
                  borderRadius: "6px",
                  borderLeft: "3px solid #C4A97D",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.85rem",
                    color: "#8B6F47",
                    fontStyle: "italic",
                    lineHeight: 1.65,
                  }}
                >
                  {features[activeFeature].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}