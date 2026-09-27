"use client";

import Link from "next/link";
import { Bird, ShieldCheck, Target, MessageCircle } from "lucide-react";

const values = [
  {
    icon: Bird,
    title: "Dignity in every detail",
    desc: "We believe the families funeral professionals serve deserve nothing less than perfection. That starts with giving those professionals the tools to be fully present — not buried in paperwork.",
    color: "#B8864E",
  },
  {
    icon: ShieldCheck,
    title: "Built on trust",
    desc: "Funeral homes handle some of the most sensitive moments in people's lives. We take that responsibility seriously — in how we build our software, protect data, and support our customers.",
    color: "#059669",
  },
  {
    icon: Target,
    title: "Simplicity over complexity",
    desc: "We could build a hundred features. We choose to build the right ones, done exceptionally well. Every screen, every workflow is designed to reduce friction — not add it.",
    color: "#7C3AED",
  },
  {
    icon: MessageCircle,
    title: "Customers shape the product",
    desc: "Our best ideas come from funeral directors and their staff. We listen obsessively, iterate constantly, and never ship something we wouldn't be proud to put in front of the people we serve.",
    color: "#0891B2",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#FAFAF7", paddingTop: "68px" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "7rem 5% 6rem", background: "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 60%, #FAFAF7 100%)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.12)", border: "1px solid rgba(196,169,125,0.3)", padding: "0.4rem 1rem", borderRadius: "100px", marginBottom: "1.75rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4A97D", display: "inline-block" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8B6F47", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Our story</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "1.5rem" }}>
            We saw the chaos.<br />
            <em style={{ color: "#B8864E" }}>We built the calm.</em>
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8, color: "#6B5E52" }}>
            Mary Rose was born from a simple observation — funeral professionals were spending hours every week wrestling with spreadsheets, paper files, and disconnected tools, when they should have been focused entirely on the families in their care.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: "7rem 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ background: "linear-gradient(135deg, #F5EFE4 0%, #EDE0CC 100%)", borderRadius: "12px", padding: "3rem", border: "1px solid rgba(196,169,125,0.2)" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "5rem", color: "rgba(196,169,125,0.3)", lineHeight: 1, marginBottom: "1rem" }}>"</div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 400, color: "#1C1917", lineHeight: 1.6, fontStyle: "italic" }}>
                We kept asking funeral directors what their biggest daily frustration was. Every single one said the same thing — managing the details while trying to stay present for families.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}>RC</div>
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, color: "#1C1917", fontSize: "0.9rem" }}>Ronny Coulson</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", color: "#9B8E84", fontSize: "0.8rem" }}>Founder & CEO, Mary Rose</div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "-24px", right: "-24px", background: "#1C1917", borderRadius: "8px", padding: "1.25rem 1.5rem", border: "1px solid rgba(196,169,125,0.2)" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", color: "#C4A97D", lineHeight: 1 }}>2025</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(245,240,232,0.5)", marginTop: "4px" }}>Founded</div>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>How it started</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              A problem too important<br />
              <em style={{ color: "#B8864E" }}>to leave unsolved</em>
            </h2>
            {[
              { year: "2024", text: "We spent months talking to funeral directors, sitting in their offices, watching how they worked. The inefficiency was striking — and completely avoidable." },
              { year: "2025", text: "We started building Mary Rose with one goal: make it so simple that picking it up feels like a relief. Our founding partners are shaping everything." },
              { year: "2026", text: "We're launching to the public this year. 20 founding funeral homes are helping us build the right product before we scale." },
            ].map((item) => (
              <div key={item.year} style={{ display: "flex", gap: "1.25rem", marginBottom: "1.75rem" }}>
                <div style={{ flexShrink: 0, paddingTop: "4px" }}>
                  <div style={{ width: 48, height: 24, background: "rgba(196,169,125,0.15)", borderRadius: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#8B6F47" }}>{item.year}</span>
                  </div>
                </div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "#6B5E52", lineHeight: 1.75, fontWeight: 300 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ padding: "5rem 5%", background: "#1C1917", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#C4A97D", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1.25rem" }}>Our mission</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, color: "#F5EFE4", lineHeight: 1.2 }}>
            To give funeral professionals the freedom to do what they do best —{" "}
            <em style={{ color: "#C4A97D" }}>care for people.</em>
          </h2>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "7rem 5%", background: "#FAFAF7" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>What we stand for</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.15 }}>
              Our values aren't a poster.<br />
              <em style={{ color: "#B8864E" }}>They're how we build.</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.2)", borderRadius: "10px", padding: "2rem", transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: "12px", background: `${v.color}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon size={22} strokeWidth={1.5} color={v.color} />
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", fontWeight: 400, color: "#1C1917", marginBottom: "0.75rem" }}>{v.title}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#6B5E52", lineHeight: 1.75, fontWeight: 300 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 5%", background: "#fff", textAlign: "center", borderTop: "1px solid rgba(196,169,125,0.15)" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 400, color: "#1C1917", marginBottom: "1rem", lineHeight: 1.15 }}>
            Come build with us.<br />
            <em style={{ color: "#B8864E" }}>Your families will feel it.</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", color: "#6B5E52", marginBottom: "2.5rem", lineHeight: 1.75, fontWeight: 300 }}>
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
          <p style={{ fontFamily: "'Jost', sans-serif", marginTop: "1rem", fontSize: "0.8rem", color: "#9B8E84" }}>Only 17 spots left at founding partner pricing.</p>
        </div>
      </section>

    </div>
  );
}