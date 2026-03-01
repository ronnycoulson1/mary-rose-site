import Hero from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import HowItWorks from "@/components/marketing/HowItWorks";
import Testimonials from "@/components/marketing/Testimonials";
import Pricing from "@/components/marketing/Pricing";

function SocialProofBar() {
  return (
    <div style={{ background: "#F0E8DC", borderTop: "1px solid rgba(196,169,125,0.2)", borderBottom: "1px solid rgba(196,169,125,0.2)", padding: "1.25rem 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#9B8E84", letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
          Trusted by funeral professionals at
        </span>
        {["Heritage Memorial", "Riverside Chapel", "Grace & Sons", "Eternal Rest Services", "Family First Funerals"].map((name) => (
          <span key={name} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#6B5E52", fontWeight: 500 }}>{name}</span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div style={{ background: "#fff", padding: "5rem 5%", borderBottom: "1px solid rgba(196,169,125,0.15)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" as const }}>
        {[
          { value: "200+", label: "Funeral homes" },
          { value: "50K+", label: "Cases managed" },
          { value: "98%",  label: "Customer satisfaction" },
          { value: "4hrs", label: "Saved per week" },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", fontWeight: 400, color: "#B8864E", lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#9B8E84", marginTop: "0.5rem", fontWeight: 300 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
    </>
  );
}