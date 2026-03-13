"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Rocket,
  Infinity,
  Target,
  Star,
  Handshake,
  MessageCircle,
  LayoutDashboard,
  FilePlus,
  CheckSquare,
  FolderOpen,
  Users,
  Share2,
  Lock,
  ChevronDown,
  Bird,
} from "lucide-react";

const whatYouGet = [
  { icon: Rocket, title: "Early access to the platform", desc: "Be the first to use CaseFlow before public launch" },
  { icon: Infinity, title: "Lifetime founding partner pricing", desc: "Pay once. Never pay monthly. Ever." },
  { icon: Target, title: "Direct influence on development", desc: "Your feedback shapes what we build next" },
  { icon: Star, title: "Priority feature requests", desc: "Your requests go to the top of our list" },
  { icon: Users, title: "Free onboarding & setup", desc: "We personally set up your workspace with you" },
  { icon: MessageCircle, title: "Private beta community access", desc: "Direct line to the founders and other partners" },
];

const willManage = [
  { icon: LayoutDashboard, label: "Centralized case dashboard" },
  { icon: FilePlus, label: "Case creation & family info tracking" },
  { icon: CheckSquare, label: "Staff task management & checklists" },
  { icon: FolderOpen, label: "Secure document storage" },
  { icon: Users, label: "Team collaboration within each case" },
  { icon: Share2, label: "Optional family status sharing" },
];

const steps = [
  { num: "01", title: "Reserve your founding partner spot", desc: "Secure your place with a one-time payment of $299" },
  { num: "02", title: "Join the early partner group", desc: "Get added to our private partner community immediately" },
  { num: "03", title: "Get access to the MVP platform", desc: "Be among the first to use CaseFlow before public launch" },
  { num: "04", title: "Provide feedback & feature requests", desc: "Tell us what works and what you need next" },
  { num: "05", title: "Help shape the future", desc: "Your input drives every product decision we make" },
];

const faqs = [
  { q: "What is the Founding Partner Program?", a: "It's our early access program for the first 20 funeral homes to join CaseFlow. Instead of waiting for a public launch, founding partners get in early, help shape the product, and lock in lifetime pricing for a one-time payment." },
  { q: "What exactly is the $299?", a: "It's a one-time payment. No monthly fees, no annual renewals — ever. You pay $299 once and have lifetime access to CaseFlow and all future features included in the platform." },
  { q: "What if you don't launch on time?", a: "You get a full refund. No questions asked. We are committed to launching by June 2026 but we would rather refund you than rush a product that isn't ready." },
  { q: "What features are included at launch?", a: "The full MVP: case dashboard, case creation, task management, document hub, team collaboration, and family status sharing. Everything your team needs to run daily operations." },
  { q: "Will founding partners keep their pricing forever?", a: "Yes — permanently. After launch, pricing moves to $49–$149/month for new customers. Founding partners keep their one-time deal no matter how the product grows." },
  { q: "When do I get access?", a: "You will receive beta access before public launch. We will personally email you with your login credentials and onboarding call details as soon as the beta is ready." },
];

export default function PricingPage() {
  const [spotsLeft] = useState(17);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [animated, setAnimated] = useState(false);
  const spotsTotal = 20;
  const spotsTaken = spotsTotal - spotsLeft;

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  return (
    <div style={{ background: "#FAFAF7", paddingTop: "68px" }}>

      {/* ── 1. HERO ── */}
      <section style={{ padding: "7rem 5% 5rem", background: "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 60%, #FAFAF7 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative", zIndex: 1, opacity: animated ? 1 : 0, transform: animated ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.12)", border: "1px solid rgba(196,169,125,0.35)", padding: "0.45rem 1.25rem", borderRadius: "100px", marginBottom: "2rem" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C4A97D", display: "inline-block", boxShadow: "0 0 8px rgba(196,169,125,0.8)" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8B6F47", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              Limited to 20 funeral homes — {spotsLeft} spots remaining
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "1.25rem" }}>
            Founding Partner<br />
            <em style={{ color: "#B8864E" }}>Program</em>
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.85, color: "#6B5E52", marginBottom: "1.5rem", maxWidth: "560px", margin: "0 auto 1.5rem" }}>
            We are inviting a limited number of funeral homes to join as founding partners and help shape the future of the platform.
          </p>
          <div style={{ maxWidth: "420px", margin: "0 auto 2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#9B8E84" }}>{spotsTaken} funeral homes joined</span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#C4A97D", fontWeight: 500 }}>{spotsLeft} spots left</span>
            </div>
            <div style={{ height: "6px", background: "rgba(196,169,125,0.15)", borderRadius: "100px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(spotsTaken / spotsTotal) * 100}%`, background: "linear-gradient(90deg, #C4A97D, #8B6F47)", borderRadius: "100px" }} />
            </div>
          </div>
          <Link
            href="/signup"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "4px", fontSize: "1rem", fontFamily: "'Jost', sans-serif", fontWeight: 500, boxShadow: "0 8px 28px rgba(139,111,71,0.35)", transition: "all 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(139,111,71,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(139,111,71,0.35)"; }}
          >
            Apply for Early Access →
          </Link>
        </div>
      </section>

      {/* ── 2. WHY THIS EXISTS ── */}
      <section style={{ padding: "6rem 5%", background: "#fff", borderBottom: "1px solid rgba(196,169,125,0.15)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>Why this program exists</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Built with you,<br />
              <em style={{ color: "#B8864E" }}>not just for you.</em>
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#6B5E52", lineHeight: 1.85 }}>
              Instead of building in isolation, we want to work directly with a small group of funeral homes from day one. Founding partners receive early access and help guide every product decision we make.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
            {["The product is new and we want real feedback", "Spots are limited to ensure personal attention", "Early partners help shape the product roadmap", "You receive special pricing that never changes"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "#FAFAF7", borderRadius: "8px", padding: "1rem 1.25rem", border: "1px solid rgba(196,169,125,0.15)" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", color: "rgba(196,169,125,0.5)", flexShrink: 0, lineHeight: 1.4 }}>0{i + 1}</span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "#6B5E52", fontWeight: 300, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PRICING CARD ── */}
      <section style={{ padding: "6rem 5%", background: "#FAFAF7" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
          <div style={{ background: "#1C1917", borderRadius: "16px", padding: "2.75rem", border: "2px solid rgba(196,169,125,0.3)", boxShadow: "0 32px 80px rgba(28,25,23,0.2)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(196,169,125,0.15)", border: "1px solid rgba(196,169,125,0.3)", padding: "0.35rem 1rem", borderRadius: "100px", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#C4A97D", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>Founding Partner Access</span>
            </div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "rgba(245,240,232,0.4)", marginBottom: "0.5rem" }}>Limited to 20 funeral homes</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "0.25rem" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "5rem", color: "#F5EFE4", lineHeight: 1 }}>$299</span>
            </div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "rgba(245,240,232,0.35)", marginBottom: "2rem", fontWeight: 300 }}>one-time payment · no monthly fees · ever</div>
            <Link
              href="/signup"
              style={{ display: "block", textAlign: "center" as const, textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "1rem", borderRadius: "6px", fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 500, marginBottom: "2rem", boxShadow: "0 8px 28px rgba(139,111,71,0.4)", transition: "all 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Apply for Early Access →
            </Link>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem", marginBottom: "2rem" }}>
              {whatYouGet.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Icon size={14} strokeWidth={1.5} color="#C4A97D" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "rgba(245,240,232,0.6)", fontWeight: 300 }}>{item.title}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ background: "rgba(196,169,125,0.08)", border: "1px solid rgba(196,169,125,0.2)", borderRadius: "8px", padding: "1rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <Lock size={14} strokeWidth={1.5} color="#C4A97D" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#C4A97D", fontWeight: 600, marginBottom: "0.3rem", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Risk-Free Guarantee</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "rgba(245,240,232,0.45)", fontWeight: 300, lineHeight: 1.6 }}>Full refund if the platform is not launched by June 2026.</div>
              </div>
            </div>
          </div>

          {/* What you get detail */}
          <div style={{ background: "#fff", borderRadius: "12px", padding: "2rem", border: "1px solid rgba(196,169,125,0.2)" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", color: "#1C1917", marginBottom: "1.5rem", fontWeight: 400 }}>What you get</h3>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
              {whatYouGet.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "8px", background: "rgba(196,169,125,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} strokeWidth={1.5} color="#B8864E" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "#1C1917", marginBottom: "2px" }}>{item.title}</div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#9B8E84", fontWeight: 300, lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT IT MANAGES ── */}
      <section style={{ padding: "6rem 5%", background: "#fff", borderTop: "1px solid rgba(196,169,125,0.15)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>At launch</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.15 }}>
              What the platform<br />
              <em style={{ color: "#B8864E" }}>will help you manage</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {willManage.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "12px", background: "#FAFAF7", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "8px", padding: "1.25rem" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "8px", background: "rgba(196,169,125,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} strokeWidth={1.5} color="#B8864E" />
                  </div>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#1C1917", fontWeight: 400, lineHeight: 1.5 }}>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. STEPS ── */}
      <section style={{ padding: "6rem 5%", background: "#FAFAF7" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>The process</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.15 }}>
              How the program <em style={{ color: "#B8864E" }}>works</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "#fff", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "10px", padding: "1.5rem" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", color: "rgba(196,169,125,0.3)", flexShrink: 0, lineHeight: 1 }}>{step.num}</div>
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#1C1917", marginBottom: "0.35rem" }}>{step.title}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#9B8E84", fontWeight: 300, lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FUTURE PRICING ── */}
      <section style={{ padding: "5rem 5%", background: "#1C1917" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#C4A97D", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>After public launch</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "#F5EFE4", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Pricing will move to a <em style={{ color: "#C4A97D" }}>monthly subscription</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "rgba(245,240,232,0.5)", fontWeight: 300, lineHeight: 1.8, marginBottom: "2rem" }}>
            New customers will pay <strong style={{ color: "#C4A97D", fontWeight: 500 }}>$49–$149 per month</strong>. Founding partners keep their pricing permanently.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            {[
              { label: "Founding Partners", price: "$299", sub: "one-time · forever", highlight: true },
              { label: "After Launch", price: "$149", sub: "per month · ongoing", highlight: false },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${item.highlight ? "rgba(196,169,125,0.3)" : "rgba(196,169,125,0.1)"}`, borderRadius: "10px", padding: "1.5rem", textAlign: "center" as const }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "rgba(245,240,232,0.35)", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "0.75rem" }}>{item.label}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", color: item.highlight ? "#C4A97D" : "rgba(245,240,232,0.4)", lineHeight: 1 }}>{item.price}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "rgba(245,240,232,0.25)", marginTop: "0.35rem" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SCARCITY ── */}
      <section style={{ padding: "5rem 5%", background: "#F5EFE4", borderTop: "1px solid rgba(196,169,125,0.2)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
            <Lock size={22} strokeWidth={1.5} color="#fff" />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.15, marginBottom: "1rem" }}>Limited Availability</h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "#6B5E52", fontWeight: 300, lineHeight: 1.8, marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Only <strong style={{ color: "#1C1917", fontWeight: 500 }}>20 founding partners</strong> for the first development phase. This allows us to work closely with each funeral home before scaling.
          </p>
          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "#9B8E84" }}>{spotsTaken} of {spotsTotal} spots filled</span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "#B8864E", fontWeight: 500 }}>{spotsLeft} remaining</span>
            </div>
            <div style={{ height: "8px", background: "rgba(196,169,125,0.2)", borderRadius: "100px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(spotsTaken / spotsTotal) * 100}%`, background: "linear-gradient(90deg, #C4A97D, #8B6F47)", borderRadius: "100px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "6rem 5%", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.15 }}>
              Honest answers to <em style={{ color: "#B8864E" }}>your questions</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#FAFAF7", border: `1px solid ${openFaq === i ? "rgba(196,169,125,0.4)" : "rgba(196,169,125,0.15)"}`, borderRadius: "8px", overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" as const }}>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#1C1917" }}>{faq.q}</span>
                  <ChevronDown size={16} strokeWidth={1.5} color="#C4A97D" style={{ transition: "transform 0.2s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0, marginLeft: "1rem" }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 1.5rem 1.25rem" }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "#6B5E52", lineHeight: 1.75, fontWeight: 300 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "7rem 5%", background: "#1C1917", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
         
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 400, color: "#F5EFE4", marginBottom: "1rem", lineHeight: 1.1 }}>
            Become a <em style={{ color: "#C4A97D" }}>Founding Partner</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", color: "rgba(245,240,232,0.5)", marginBottom: "2.5rem", lineHeight: 1.75, fontWeight: 300 }}>
            Help shape the future of funeral home case management. Reserve your spot today.
          </p>
          <Link
            href="/signup"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "1.1rem 2.75rem", borderRadius: "4px", fontSize: "1.05rem", fontFamily: "'Jost', sans-serif", fontWeight: 500, boxShadow: "0 8px 28px rgba(139,111,71,0.35)", transition: "all 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(139,111,71,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(139,111,71,0.35)"; }}
          >
            Apply for Early Access →
          </Link>
          <p style={{ fontFamily: "'Jost', sans-serif", marginTop: "1rem", fontSize: "0.78rem", color: "rgba(245,240,232,0.25)" }}>Full refund guaranteed if not launched by June 2026. {spotsLeft} spots remaining.</p>
        </div>
      </section>

    </div>
  );
}