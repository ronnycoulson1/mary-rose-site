"use client"
export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create your workspace",
      desc: "Sign up and set up your funeral home's workspace in minutes. No technical knowledge needed.",
    },
    {
      step: "02",
      title: "Invite your team",
      desc: "Add staff and assign roles — Admin, Manager, or Staff. Everyone gets exactly the access they need.",
    },
    {
      step: "03",
      title: "Add your first case",
      desc: "Enter case details, assign staff, upload documents, and start tracking from day one.",
    },
    {
      step: "04",
      title: "Serve families better",
      desc: "Everything organized. Nothing missed. Every family receives the full attention they deserve.",
    },
  ];

  return (
    <section
      style={{
        padding: "7rem 5%",
        background: "#F5EFE4",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
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
          Simple onboarding
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            color: "#1C1917",
            marginBottom: "3.5rem",
            lineHeight: 1.15,
          }}
        >
          Up and running in minutes
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.step}
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "1.75rem 1.5rem",
                border: "1px solid rgba(196,169,125,0.2)",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Background step number */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "4rem",
                  color: "rgba(196,169,125,0.12)",
                  position: "absolute",
                  top: "-10px",
                  right: "10px",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {s.step}
              </div>

              {/* Step circle */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #C4A97D, #8B6F47)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                {i + 1}
              </div>

              <h4
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  color: "#1C1917",
                  marginBottom: "0.5rem",
                  fontSize: "0.95rem",
                }}
              >
                {s.title}
              </h4>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.85rem",
                  color: "#9B8E84",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}