"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FilePlus,
  CheckSquare,
  FolderOpen,
  Users,
  Share2,
  CreditCard,
  Calendar,
  Smartphone,
  Sparkles,
  BarChart2,
  Globe,
} from "lucide-react";

const launchFeatures = [
  {
    icon: LayoutDashboard,
    number: "01",
    title: "Case Dashboard",
    tagline: "Every case. One screen. Always organized.",
    desc: "Funeral homes currently juggle paper files, spreadsheets, and emails. The case dashboard becomes the single place where everything lives — visible at a glance, accessible in one click.",
    bullets: [
      "List of all active cases on one screen",
      "Status of each case — First Call, Arrangement, Service, Completed",
      "Basic family information at a glance",
      "Quick access to documents and tasks per case",
    ],
    color: "#B8864E",
    bg: "#FDF8F2",
  },
  {
    icon: FilePlus,
    number: "02",
    title: "Case Creation & Family Information",
    tagline: "Open a new case in minutes. Every detail captured.",
    desc: "Every funeral starts with a first call. Staff need to capture information fast, accurately, and in one place. No more duplicating data across forms and spreadsheets.",
    bullets: [
      "Name of deceased, date of death, basic vitals",
      "Next of kin contact — name, phone, email",
      "Service preferences and special notes",
      "Automatically generated unique case ID",
    ],
    color: "#059669",
    bg: "#F0FDF9",
  },
  {
    icon: CheckSquare,
    number: "03",
    title: "Task & Workflow Management",
    tagline: "Nothing falls through the cracks. Ever.",
    desc: "Funeral homes rely on manual checklists today — sticky notes, printed sheets, memory. Mary Rose turns every case into a structured workflow that your whole team can follow.",
    bullets: [
      "Per-case task checklists — obtain death cert, coordinate clergy, prepare obituary, schedule removal",
      "Assign tasks to specific staff members",
      "Set due dates and track completion",
      "Automatic reminders for overdue tasks",
    ],
    color: "#C4A97D",
    bg: "#FDF8F2",
  },
  {
    icon: FolderOpen,
    number: "04",
    title: "Document Hub",
    tagline: "Every document. Exactly where it belongs.",
    desc: "Right now documents are scattered across email, shared drives, and paper files. The document hub puts everything in one secure place — organized by case, findable in seconds.",
    bullets: [
      "Upload certificates, permits, authorization forms, obituaries, service documents",
      "Supports PDF and common document formats",
      "Tag and organize documents by case",
      "Encrypted secure storage with automatic backups",
    ],
    color: "#7C3AED",
    bg: "#FAF5FF",
  },
  {
    icon: Users,
    number: "05",
    title: "Team Collaboration",
    tagline: "Your whole team. One shared workspace.",
    desc: "Instead of calling each other or sending emails to update a case, staff can leave notes, comments, and updates directly inside Mary Rose. Everyone stays aligned.",
    bullets: [
      "Internal notes and comments per case",
      "Full activity history — see who updated what and when",
      "Assign cases and responsibilities to team members",
      "No more status update phone calls",
    ],
    color: "#0891B2",
    bg: "#F0F9FF",
  },
  {
    icon: Share2,
    number: "06",
    title: "Family Status Sharing",
    tagline: "Reduce phone calls. Keep families informed.",
    desc: "Families constantly call asking — 'Has the obituary been published? What time is the service?' A secure link gives them updates directly, without interrupting your staff.",
    bullets: [
      "Generate a secure, read-only link per case",
      "Families see service information and updates in real time",
      "Share important documents with the family",
      "No login required for families",
    ],
    color: "#DC2626",
    bg: "#FFF5F5",
  },
];

const futureFeatures = [
  { icon: CreditCard, title: "Payments & Invoicing", desc: "Create and send invoices, track outstanding balances, and manage payment status per case." },
  { icon: Calendar, title: "Advanced Scheduling", desc: "Staff calendars, service scheduling, vehicle logistics, and conflict detection." },
  { icon: Smartphone, title: "Mobile App", desc: "Full access to Mary Rose from any phone or tablet — on the go, at the home, anywhere." },
  { icon: Sparkles, title: "AI Form Automation", desc: "Auto-fill forms using case data, scan handwritten documents, and speed up paperwork." },
  { icon: BarChart2, title: "Reports & Analytics", desc: "Monthly case volume, staff performance, revenue trends, and operational insights." },
  { icon: Globe, title: "Online Family Portal", desc: "A full arrangement portal where families can review options and e-sign forms online." },
];

export default function FeaturesPage() {
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  const ActiveIcon = launchFeatures[active].icon;

  return (
    <div style={{ background: "#FAFAF7", paddingTop: "68px" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "7rem 5% 5rem", background: "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 60%, #FAFAF7 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", opacity: animated ? 1 : 0, transform: animated ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.12)", border: "1px solid rgba(196,169,125,0.3)", padding: "0.4rem 1rem", borderRadius: "100px", marginBottom: "1.75rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4A97D", display: "inline-block" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8B6F47", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>What's included</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "1.25rem" }}>
            Built around how<br />
            <em style={{ color: "#B8864E" }}>funeral homes actually work</em>
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, color: "#6B5E52", maxWidth: "520px", margin: "0 auto 1.25rem" }}>
            6 core features at launch. Everything your team needs to run daily operations — done simply and reliably. More is coming, shaped by you.
          </p>
        </div>
      </section>

      {/* ── FEATURE TABS ── */}
      <section style={{ padding: "5rem 5%", background: "#fff", borderBottom: "1px solid rgba(196,169,125,0.15)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FDF8F2", border: "1px solid rgba(196,169,125,0.3)", padding: "0.4rem 1.25rem", borderRadius: "100px", marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#8B6F47", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>✓ All included at launch — founding partners get everything</span>
          </div>

          {/* Tab bar */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "3rem", flexWrap: "wrap" as const }}>
            {launchFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "0.6rem 1.25rem", borderRadius: "100px",
                    border: active === i ? "1px solid rgba(196,169,125,0.4)" : "1px solid rgba(196,169,125,0.15)",
                    background: active === i ? "#FDF8F2" : "transparent",
                    cursor: "pointer", transition: "all 0.2s",
                    fontFamily: "'Jost', sans-serif", fontSize: "0.875rem",
                    fontWeight: active === i ? 500 : 400,
                    color: active === i ? "#8B6F47" : "#6B5E52",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  <Icon size={15} strokeWidth={1.5} />
                  <span>{f.title}</span>
                </button>
              );
            })}
          </div>

          {/* Feature detail */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem", color: "rgba(196,169,125,0.4)" }}>{launchFeatures[active].number}</span>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: `${launchFeatures[active].color}15`, padding: "0.3rem 0.9rem", borderRadius: "100px" }}>
                  <ActiveIcon size={13} strokeWidth={1.5} color={launchFeatures[active].color} />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: launchFeatures[active].color, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{launchFeatures[active].title}</span>
                </div>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.2, marginBottom: "1rem" }}>
                {launchFeatures[active].tagline}
              </h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "#6B5E52", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.75rem" }}>
                {launchFeatures[active].desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
                {launchFeatures[active].bullets.map((b) => (
                  <div key={b} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: launchFeatures[active].color, fontSize: "0.9rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "#6B5E52", fontWeight: 300, lineHeight: 1.6 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div style={{ background: launchFeatures[active].bg, borderRadius: "12px", border: `1px solid ${launchFeatures[active].color}20`, padding: "3rem", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", minHeight: "340px", textAlign: "center" as const, transition: "all 0.3s ease" }}>
              <div style={{ width: 72, height: 72, borderRadius: "16px", background: `${launchFeatures[active].color}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <ActiveIcon size={32} strokeWidth={1.25} color={launchFeatures[active].color} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 400, color: "#1C1917", marginBottom: "0.75rem" }}>{launchFeatures[active].title}</h3>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "#9B8E84", fontWeight: 300, lineHeight: 1.7, maxWidth: "260px", marginBottom: "1.5rem" }}>{launchFeatures[active].tagline}</p>
              <div style={{ padding: "0.5rem 1.25rem", background: launchFeatures[active].color, borderRadius: "4px" }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#fff" }}>Included at launch ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL 6 GRID ── */}
      <section style={{ padding: "6rem 5%", background: "#FAFAF7" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>Launching with</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.15 }}>
              6 features founding<br />
              <em style={{ color: "#B8864E" }}>partners get at launch</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {launchFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  onClick={() => { setActive(i); window.scrollTo({ top: 500, behavior: "smooth" }); }}
                  style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.2)", borderRadius: "10px", padding: "1.75rem", cursor: "pointer", transition: "all 0.25s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.07)"; e.currentTarget.style.borderColor = "rgba(196,169,125,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(196,169,125,0.2)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "10px", background: `${f.color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={20} strokeWidth={1.5} color={f.color} />
                    </div>
                    <span style={{ background: "#FDF8F2", border: "1px solid rgba(196,169,125,0.2)", color: "#8B6F47", padding: "2px 10px", borderRadius: "100px", fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 500 }}>At launch</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "#1C1917", marginBottom: "0.5rem" }}>{f.title}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "#9B8E84", lineHeight: 1.65, fontWeight: 300 }}>{f.tagline}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FUTURE ROADMAP ── */}
      <section style={{ padding: "6rem 5%", background: "#1C1917" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.1)", border: "1px solid rgba(196,169,125,0.2)", padding: "0.4rem 1.25rem", borderRadius: "100px", marginBottom: "1rem" }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#C4A97D", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>Coming in future versions</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#F5EFE4", lineHeight: 1.15, marginBottom: "1rem" }}>
              The platform will grow<br />
              <em style={{ color: "#C4A97D" }}>with your feedback</em>
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "rgba(245,240,232,0.4)", fontWeight: 300, maxWidth: "500px", margin: "0 auto" }}>
              Founding partners get priority input on what we build next.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {futureFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(196,169,125,0.12)", borderRadius: "10px", padding: "1.75rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "10px", background: "rgba(196,169,125,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon size={20} strokeWidth={1.5} color="rgba(196,169,125,0.5)" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "rgba(245,240,232,0.5)" }}>{f.title}</h3>
                    <span style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(245,240,232,0.25)", padding: "2px 10px", borderRadius: "100px", fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 500, flexShrink: 0, marginLeft: "0.5rem" }}>Future</span>
                  </div>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "rgba(245,240,232,0.3)", lineHeight: 1.65, fontWeight: 300 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>

          <p style={{ textAlign: "center", fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "rgba(245,240,232,0.25)", fontWeight: 300, fontStyle: "italic", marginTop: "2.5rem" }}>
            These are planned for future versions and are not included in the founding partner launch.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 5%", background: "#F5EFE4", textAlign: "center", borderTop: "1px solid rgba(196,169,125,0.2)" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 400, color: "#1C1917", marginBottom: "1rem", lineHeight: 1.15 }}>
            Help us build this<br />
            <em style={{ color: "#B8864E" }}>the right way.</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", color: "#6B5E52", marginBottom: "2.5rem", lineHeight: 1.75, fontWeight: 300, fontSize: "0.95rem" }}>
            Join the Founding Partner Program — lifetime access for a one-time payment of $299.
          </p>
          <Link
            href="/pricing"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "4px", fontSize: "1rem", fontFamily: "'Jost', sans-serif", fontWeight: 500, boxShadow: "0 8px 28px rgba(139,111,71,0.35)", transition: "all 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(139,111,71,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(139,111,71,0.35)"; }}
          >
            Apply for Early Access →
          </Link>
          <p style={{ fontFamily: "'Jost', sans-serif", marginTop: "1rem", fontSize: "0.78rem", color: "#9B8E84" }}>Full refund if not launched by June 2026. Only 17 spots left.</p>
        </div>
      </section>

    </div>
  );
}