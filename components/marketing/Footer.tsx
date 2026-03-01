"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1C1917",
        borderTop: "1px solid rgba(196,169,125,0.1)",
      }}
    >
      {/* CTA Band */}
      <div
        style={{
          padding: "7rem 5%",
          background:
            "linear-gradient(135deg, #F5EFE4 0%, #EDE0CC 100%)",
          textAlign: "center",
          borderTop: "1px solid rgba(196,169,125,0.2)",
        }}
      >
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1.25rem" }}>
            🕊️
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: "#1C1917",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            Ready to serve families
            <br />
            <em style={{ color: "#B8864E" }}>with more care?</em>
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#6B5E52",
              marginBottom: "2.5rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Join hundreds of funeral professionals who use CaseFlow to stay
            organized, reduce stress, and give every family the attention
            they deserve.
          </p>
          <Link
            href="/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              background:
                "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)",
              color: "#fff",
              padding: "1rem 2.5rem",
              borderRadius: "4px",
              fontSize: "1rem",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              boxShadow: "0 8px 28px rgba(139,111,71,0.35)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 36px rgba(139,111,71,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 28px rgba(139,111,71,0.35)";
            }}
          >
            Start your free 14-day trial →
          </Link>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: "#9B8E84",
            }}
          >
            No credit card required. Setup in under 5 minutes.
          </p>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          padding: "2.5rem 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>🕊️</span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.25rem",
              color: "#F5EFE4",
            }}
          >
            Case<span style={{ color: "#C4A97D" }}>Flow</span>
          </span>
        </div>

        <div style={{ display: "flex", gap: "2rem" }}>
          {["Privacy", "Terms", "Contact", "Support"].map((l) => (
            <Link
              key={l}
              href={`/${l.toLowerCase()}`}
              style={{
                textDecoration: "none",
                fontFamily: "'Jost', sans-serif",
                color: "rgba(245,240,232,0.4)",
                fontSize: "0.8rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(245,240,232,0.8)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(245,240,232,0.4)")
              }
            >
              {l}
            </Link>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            color: "rgba(245,240,232,0.3)",
            fontSize: "0.75rem",
          }}
        >
          © {new Date().getFullYear()} CaseFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}