"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 79,
    yearlyPrice: 63,
    desc: "Perfect for small, independent funeral homes just getting started.",
    features: [
      "Up to 3 staff members",
      "Unlimited cases",
      "Document storage (10GB)",
      "Calendar & task management",
      "Email support",
      "Mobile access",
    ],
    notIncluded: ["Payments & invoicing", "Priority support", "Multi-location", "Custom integrations"],
    cta: "Start free trial",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Professional",
    monthlyPrice: 149,
    yearlyPrice: 119,
    desc: "For growing homes that need more power and team collaboration.",
    features: [
      "Up to 10 staff members",
      "Unlimited cases",
      "Document storage (50GB)",
      "Calendar & task management",
      "Payments & invoicing",
      "Priority support",
      "Role management",
      "Mobile access",
    ],
    notIncluded: ["Multi-location", "Custom integrations"],
    cta: "Start free trial",
    href: "/signup",
    highlight: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    desc: "For multi-location funeral home groups with custom needs.",
    features: [
      "Unlimited staff members",
      "Unlimited cases",
      "Unlimited document storage",
      "Calendar & task management",
      "Payments & invoicing",
      "Dedicated onboarding",
      "SLA guarantee",
      "Multi-location support",
      "Custom integrations",
      "24/7 phone support",
    ],
    notIncluded: [],
    cta: "Contact us",
    href: "/contact",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — every plan starts with a 14-day free trial. No credit card required. You get full access to all features during the trial.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time from your settings. Changes take effect immediately.",
  },
  {
    q: "How does billing work?",
    a: "You're billed monthly or annually depending on your preference. Annual billing saves you 20%. We accept all major credit cards.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted in transit and at rest. We use enterprise-grade cloud infrastructure with daily backups and 99.9% uptime.",
  },
  {
    q: "Can I add more staff later?",
    a: "Yes. You can add staff at any time. If you exceed your plan's limit, we'll prompt you to upgrade — no surprise charges.",
  },
  {
    q: "Do you offer discounts for non-profits?",
    a: "Yes. Reach out to our team and we'll work something out. We deeply respect the work funeral homes do for their communities.",
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "#FAFAF7", paddingTop: "68px" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "7rem 5% 5rem", background: "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 60%, #FAFAF7 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "620px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.12)", border: "1px solid rgba(196,169,125,0.3)", padding: "0.4rem 1rem", borderRadius: "100px", marginBottom: "1.75rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4A97D", display: "inline-block" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8B6F47", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Simple pricing</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "1.25rem" }}>
            One flat price.<br />
            <em style={{ color: "#B8864E" }}>No surprises.</em>
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, color: "#6B5E52", marginBottom: "2.5rem" }}>
            Start free for 14 days. No credit card required. Cancel anytime.
          </p>

          {/* Toggle */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", background: "#fff", border: "1px solid rgba(196,169,125,0.25)", borderRadius: "100px", padding: "6px 6px 6px 16px" }}>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: !yearly ? "#1C1917" : "#9B8E84", fontWeight: !yearly ? 500 : 400 }}>Monthly</span>
            <div
              onClick={() => setYearly(!yearly)}
              style={{ width: 44, height: 24, borderRadius: "100px", background: yearly ? "linear-gradient(135deg, #C4A97D, #8B6F47)" : "#E8E0D5", cursor: "pointer", position: "relative", transition: "background 0.25s", flexShrink: 0 }}
            >
              <div style={{ position: "absolute", top: 3, left: yearly ? 23 : 3, width: 18, height: 18, borderRadius: "50%", background: "#fff", transition: "left 0.25s", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
            </div>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: yearly ? "#1C1917" : "#9B8E84", fontWeight: yearly ? 500 : 400 }}>Annual</span>
            <div style={{ background: "rgba(196,169,125,0.15)", border: "1px solid rgba(196,169,125,0.3)", borderRadius: "100px", padding: "3px 10px" }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#8B6F47" }}>Save 20%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section style={{ padding: "4rem 5% 7rem", background: "#FAFAF7" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", alignItems: "start" }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlight ? "#1C1917" : "#fff",
                border: plan.highlight ? "2px solid #C4A97D" : "1px solid rgba(196,169,125,0.2)",
                borderRadius: "12px",
                padding: "2.25rem",
                position: "relative",
                boxShadow: plan.highlight ? "0 24px 60px rgba(28,25,23,0.18)" : "0 2px 12px rgba(0,0,0,0.04)",
                transform: plan.highlight ? "translateY(-12px)" : "none",
                transition: "box-shadow 0.25s ease",
              }}
            >
              {plan.highlight && (
                <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", color: "#fff", fontSize: "0.7rem", fontWeight: 600, padding: "4px 18px", borderRadius: "100px", fontFamily: "'Jost', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600, color: plan.highlight ? "#C4A97D" : "#B8864E", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>{plan.name}</div>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "0.5rem" }}>
                {plan.monthlyPrice ? (
                  <>
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3.2rem", color: plan.highlight ? "#F5EFE4" : "#1C1917", lineHeight: 1 }}>
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span style={{ fontFamily: "'Jost', sans-serif", color: "#9B8E84", fontSize: "0.875rem" }}>/mo</span>
                  </>
                ) : (
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", color: plan.highlight ? "#F5EFE4" : "#1C1917", lineHeight: 1 }}>Custom</span>
                )}
              </div>

              {yearly && plan.monthlyPrice && (
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#C4A97D", marginBottom: "0.5rem" }}>
                  Billed ${(plan.yearlyPrice! * 12)} annually
                </div>
              )}

              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: plan.highlight ? "rgba(245,240,232,0.5)" : "#9B8E84", marginBottom: "1.75rem", lineHeight: 1.65 }}>{plan.desc}</p>

              {/* CTA */}
              <a
                href={plan.href}
                style={{
                  display: "block", textAlign: "center" as const, textDecoration: "none", padding: "0.85rem", borderRadius: "4px", fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", fontWeight: 500, marginBottom: "1.75rem",
                  background: plan.highlight ? "linear-gradient(135deg, #C4A97D, #8B6F47)" : "transparent",
                  color: plan.highlight ? "#fff" : "#8B6F47",
                  border: plan.highlight ? "none" : "1px solid rgba(196,169,125,0.4)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(139,111,71,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div style={{ borderTop: `1px solid ${plan.highlight ? "rgba(196,169,125,0.15)" : "rgba(196,169,125,0.15)"}`, paddingTop: "1.5rem" }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: plan.highlight ? "rgba(245,240,232,0.4)" : "#9B8E84", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "1rem" }}>What's included</div>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "0.65rem" }}>
                    <span style={{ color: "#C4A97D", fontSize: "0.9rem", flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: plan.highlight ? "rgba(245,240,232,0.7)" : "#6B5E52", fontWeight: 300 }}>{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "0.65rem", opacity: 0.35 }}>
                    <span style={{ color: "#9B8E84", fontSize: "0.9rem", flexShrink: 0 }}>✕</span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: plan.highlight ? "rgba(245,240,232,0.5)" : "#9B8E84", fontWeight: 300, textDecoration: "line-through" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BAND ── */}
      <section style={{ padding: "4rem 5%", background: "#F5EFE4", borderTop: "1px solid rgba(196,169,125,0.2)", borderBottom: "1px solid rgba(196,169,125,0.2)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" as const }}>
          {[
            { icon: "🔒", label: "Bank-grade encryption" },
            { icon: "☁️", label: "Daily cloud backups" },
            { icon: "⚡", label: "99.9% uptime SLA" },
            { icon: "💬", label: "Real human support" },
          ].map((t) => (
            <div key={t.label}>
              <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{t.icon}</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#6B5E52", fontWeight: 400 }}>{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "7rem 5%", background: "#fff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>Got questions?</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.15 }}>
              Frequently asked<br />
              <em style={{ color: "#B8864E" }}>questions</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ background: "#FAFAF7", border: `1px solid ${openFaq === i ? "rgba(196,169,125,0.4)" : "rgba(196,169,125,0.15)"}`, borderRadius: "8px", overflow: "hidden", transition: "border-color 0.2s" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" as const }}
                >
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#1C1917" }}>{faq.q}</span>
                  <span style={{ color: "#C4A97D", fontSize: "1.25rem", transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", flexShrink: 0, marginLeft: "1rem" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 1.5rem 1.25rem" }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#6B5E52", lineHeight: 1.75, fontWeight: 300 }}>{faq.a}</p>
                  </div>
                )}
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
            Start free today.<br />
            <em style={{ color: "#C4A97D" }}>No card needed.</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", color: "rgba(245,240,232,0.55)", marginBottom: "2.5rem", lineHeight: 1.75, fontWeight: 300 }}>
            14 days free. Full access. Cancel anytime.
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