"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <section style={{
      padding: "7rem 5%",
      background: "#1C1917",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.1)", border: "1px solid rgba(196,169,125,0.25)", padding: "0.4rem 1.25rem", borderRadius: "100px", marginBottom: "2rem" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4A97D", display: "inline-block", boxShadow: "0 0 8px rgba(196,169,125,0.6)" }} />
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#C4A97D", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Founding Partner Program</span>
        </div>

        {/* Headline */}
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, color: "#F5EFE4", lineHeight: 1.15, marginBottom: "1.25rem" }}>
          Simple. One price.<br />
          <em style={{ color: "#C4A97D" }}>No surprises.</em>
        </h2>

        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(245,240,232,0.5)", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "480px", margin: "0 auto 3rem" }}>
          We are inviting the first 20 funeral homes to join as founding partners and help shape the platform. One payment. Lifetime access. Your pricing locked in forever.
        </p>

        {/* Price display */}
        <div style={{ display: "inline-flex", flexDirection: "column" as const, alignItems: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(196,169,125,0.2)", borderRadius: "12px", padding: "2rem 3rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "0.5rem" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "4rem", color: "#F5EFE4", lineHeight: 1 }}>$299</span>
          </div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "rgba(245,240,232,0.35)", marginBottom: "1.25rem" }}>one-time payment · no monthly fees · ever</div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" as const, justifyContent: "center" }}>
            {["Lifetime access", "Limited to 20 homes", "Full refund guarantee"].map((t) => (
              <span key={t} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(245,240,232,0.4)", display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ color: "#C4A97D" }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "1rem" }}>
          <Link
            href="/pricing"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "4px", fontSize: "1rem", fontFamily: "'Jost', sans-serif", fontWeight: 500, boxShadow: "0 8px 28px rgba(139,111,71,0.35)", transition: "all 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(139,111,71,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(139,111,71,0.35)"; }}
          >
            See the Founding Partner Program →
          </Link>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "rgba(245,240,232,0.25)" }}>
            After launch: $49–$149/mo · Founding partners keep early pricing forever
          </span>
        </div>

      </div>
    </section>
  );
}