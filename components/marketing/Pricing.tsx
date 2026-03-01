"use client";

import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$79",
    per: "/month",
    desc: "Perfect for small, independent funeral homes.",
    features: [
      "Up to 3 staff members",
      "Unlimited cases",
      "Document storage (10GB)",
      "Calendar & tasks",
      "Email support",
    ],
    cta: "Get started",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$149",
    per: "/month",
    desc: "For growing homes that need more power.",
    features: [
      "Up to 10 staff members",
      "Unlimited cases",
      "Document storage (50GB)",
      "Payments & invoicing",
      "Priority support",
      "Role management",
    ],
    cta: "Start free trial",
    href: "/signup",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "",
    desc: "For multi-location funeral home groups.",
    features: [
      "Unlimited staff",
      "Multi-location support",
      "Unlimited storage",
      "Dedicated onboarding",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact us",
    href: "/contact",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: "7rem 5%", background: "#FAFAF7" }}
    >
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            Simple pricing
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 400,
              color: "#1C1917",
              lineHeight: 1.15,
            }}
          >
            One flat price.
            <br />
            <em style={{ color: "#B8864E" }}>No surprises.</em>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlight ? "#1C1917" : "#fff",
                border: plan.highlight
                  ? "2px solid #C4A97D"
                  : "1px solid rgba(196,169,125,0.2)",
                borderRadius: "10px",
                padding: "2rem",
                position: "relative",
                boxShadow: plan.highlight
                  ? "0 20px 60px rgba(28,25,23,0.15)"
                  : "none",
                transition: "transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background:
                      "linear-gradient(135deg, #C4A97D, #8B6F47)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    padding: "4px 16px",
                    borderRadius: "100px",
                    fontFamily: "'Jost', sans-serif",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 600,
                  color: plan.highlight ? "#C4A97D" : "#B8864E",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {plan.name}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "4px",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "2.8rem",
                    color: plan.highlight ? "#F5EFE4" : "#1C1917",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    color: "#9B8E84",
                    fontSize: "0.875rem",
                  }}
                >
                  {plan.per}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.8rem",
                  color: plan.highlight
                    ? "rgba(245,240,232,0.55)"
                    : "#9B8E84",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                }}
              >
                {plan.desc}
              </p>

              <div
                style={{
                  borderTop: `1px solid ${
                    plan.highlight
                      ? "rgba(196,169,125,0.2)"
                      : "rgba(196,169,125,0.15)"
                  }`,
                  paddingTop: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {plan.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-start",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <span
                      style={{ color: "#C4A97D", fontSize: "0.9rem", flexShrink: 0 }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.85rem",
                        color: plan.highlight
                          ? "rgba(245,240,232,0.7)"
                          : "#6B5E52",
                        fontWeight: 300,
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={plan.href}
                style={{
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: "0.8rem",
                  borderRadius: "4px",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  background: plan.highlight
                    ? "linear-gradient(135deg, #C4A97D, #8B6F47)"
                    : "transparent",
                  color: plan.highlight ? "#fff" : "#8B6F47",
                  border: plan.highlight
                    ? "none"
                    : "1px solid rgba(196,169,125,0.4)",
                }}
                onMouseEnter={(e) => {
                  if (!plan.highlight) {
                    e.currentTarget.style.background = "#F5EFE4";
                  } else {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(139,111,71,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlight) {
                    e.currentTarget.style.background = "transparent";
                  } else {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}