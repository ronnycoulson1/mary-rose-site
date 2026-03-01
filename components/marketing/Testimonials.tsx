"use client"
const testimonials = [
  {
    quote:
      "We went from spiral notebooks to having everything in one place. The families we serve can feel the difference in how organized and present we are.",
    name: "Margaret T.",
    role: "Owner, Thornton Family Funeral Home",
    initials: "MT",
  },
  {
    quote:
      "During our busiest weeks, CaseFlow keeps us from dropping any details. It's like having an extra set of hands that never forgets anything.",
    name: "David R.",
    role: "Director, Riverside Memorial Services",
    initials: "DR",
  },
  {
    quote:
      "The document management alone was worth it. Finding a signed authorization used to take 20 minutes. Now it's 10 seconds.",
    name: "Sandra K.",
    role: "Office Manager, Keller & Sons",
    initials: "SK",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "7rem 5%",
        background: "#1C1917",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#C4A97D",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            From funeral professionals
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 400,
              color: "#F5EFE4",
              lineHeight: 1.15,
            }}
          >
            They trust CaseFlow
            <br />
            <em style={{ color: "#C4A97D" }}>with every family</em>
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
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(196,169,125,0.2)",
                borderRadius: "8px",
                padding: "2rem",
                transition: "transform 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor =
                  "rgba(196,169,125,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor =
                  "rgba(196,169,125,0.2)";
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "#C4A97D",
                  fontSize: "3rem",
                  lineHeight: 1,
                  marginBottom: "1rem",
                  opacity: 0.5,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  color: "rgba(245,240,232,0.75)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  borderTop: "1px solid rgba(196,169,125,0.12)",
                  paddingTop: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #C4A97D, #8B6F47)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    fontFamily: "'Jost', sans-serif",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      color: "#F5EFE4",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      color: "#9B8E84",
                      fontSize: "0.75rem",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}