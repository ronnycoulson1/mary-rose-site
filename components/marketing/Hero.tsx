"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "7rem 5% 5rem",
        position: "relative",
        background:
          "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 50%, #FAFAF7 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,169,125,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,111,71,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        {/* Left — Copy */}
        <div style={{ animation: "fadeUp 0.8s ease both" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(196,169,125,0.12)",
              border: "1px solid rgba(196,169,125,0.3)",
              padding: "0.4rem 1rem",
              borderRadius: "100px",
              marginBottom: "1.75rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#C4A97D",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#8B6F47",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Built for funeral professionals
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#1C1917",
              marginBottom: "1.5rem",
            }}
          >
            Every family
            <br />
            deserves your{" "}
            <em style={{ color: "#B8864E" }}>full attention</em>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#6B5E52",
              maxWidth: "460px",
              marginBottom: "2.5rem",
            }}
          >
            CaseFlow brings together case management, documents, tasks,
            payments, and scheduling into one calm, organized workspace — so
            you can focus on the families you serve.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/signup"
              style={{
                textDecoration: "none",
                background:
                  "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)",
                color: "#fff",
                padding: "0.9rem 2.25rem",
                borderRadius: "4px",
                fontSize: "0.95rem",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.25s",
                boxShadow: "0 4px 20px rgba(139,111,71,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(139,111,71,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(139,111,71,0.3)";
              }}
            >
              Start free — no card needed →
            </Link>

            <a
              href="#features"
              style={{
                textDecoration: "none",
                color: "#6B5E52",
                fontSize: "0.9rem",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderBottom: "1px solid rgba(107,94,82,0.3)",
                paddingBottom: "2px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1C1917")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B5E52")}
            >
              See how it works
            </a>
          </div>

          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.8rem",
              color: "#9B8E84",
            }}
          >
            Trusted by 200+ funeral homes across the country
          </p>
        </div>

        {/* Right — Dashboard Mockup */}
        <div
          style={{
            animation: "fadeUp 1s 0.3s ease both",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid rgba(196,169,125,0.2)",
              boxShadow:
                "0 24px 80px rgba(28,25,23,0.12), 0 0 0 1px rgba(196,169,125,0.1)",
              overflow: "hidden",
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                background: "#F5EFE6",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderBottom: "1px solid rgba(196,169,125,0.2)",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF6058", "#FFBD2E", "#28C840"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: c,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  background: "#EDE7DC",
                  borderRadius: "4px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontFamily: "'Jost', sans-serif",
                  color: "#9B8E84",
                  marginLeft: "8px",
                }}
              >
                app.caseflow.io/dashboard
              </div>
            </div>

            {/* App layout */}
            <div style={{ display: "flex", height: "360px" }}>
              {/* Sidebar */}
              <div
                style={{
                  width: "180px",
                  background: "#1C1917",
                  padding: "20px 12px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "#C4A97D",
                    fontSize: "1.1rem",
                    marginBottom: "24px",
                    paddingLeft: "8px",
                  }}
                >
                  CaseFlow
                </div>
                {[
                  { icon: "⊞", label: "Dashboard", active: true },
                  { icon: "📋", label: "Cases", active: false },
                  { icon: "📅", label: "Calendar", active: false },
                  { icon: "📁", label: "Documents", active: false },
                  { icon: "✅", label: "Tasks", active: false },
                  { icon: "💳", label: "Payments", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 10px",
                      borderRadius: "4px",
                      marginBottom: "2px",
                      background: item.active
                        ? "rgba(196,169,125,0.15)"
                        : "transparent",
                      fontSize: "12px",
                      fontFamily: "'Jost', sans-serif",
                      color: item.active
                        ? "#C4A97D"
                        : "rgba(245,242,237,0.45)",
                    }}
                  >
                    <span style={{ fontSize: "11px" }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div
                style={{
                  flex: 1,
                  padding: "20px",
                  background: "#FAFAF7",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.2rem",
                      color: "#1C1917",
                    }}
                  >
                    Good morning, Sarah
                  </span>
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #C4A97D, #8B6F47)",
                      color: "#fff",
                      padding: "5px 12px",
                      borderRadius: "3px",
                      fontSize: "11px",
                      fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    + New Case
                  </div>
                </div>

                {/* Stats */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                    marginBottom: "16px",
                  }}
                >
                  {[
                    { label: "Active Cases", value: "24", color: "#B8864E" },
                    { label: "Due Today", value: "7", color: "#D97706" },
                    { label: "Pending Docs", value: "12", color: "#059669" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: "#fff",
                        border: "1px solid rgba(196,169,125,0.2)",
                        borderRadius: "6px",
                        padding: "10px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "9px",
                          color: "#9B8E84",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "1.6rem",
                          color: s.color,
                          lineHeight: 1.2,
                          marginTop: "2px",
                        }}
                      >
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Case rows */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(196,169,125,0.15)",
                    borderRadius: "6px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      padding: "8px 12px",
                      borderBottom: "1px solid rgba(196,169,125,0.12)",
                      fontSize: "10px",
                      fontFamily: "'Jost', sans-serif",
                      color: "#9B8E84",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Recent Cases
                  </div>
                  {[
                    {
                      name: "Anderson, Robert J.",
                      date: "Mar 12",
                      status: "In Progress",
                      color: "#D97706",
                    },
                    {
                      name: "Williams, Mary E.",
                      date: "Mar 11",
                      status: "Awaiting Docs",
                      color: "#8B6F47",
                    },
                    {
                      name: "Chen, William K.",
                      date: "Mar 10",
                      status: "Complete",
                      color: "#059669",
                    },
                  ].map((c) => (
                    <div
                      key={c.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "8px 12px",
                        borderBottom: "1px solid rgba(196,169,125,0.08)",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: "11px",
                            color: "#1C1917",
                            fontWeight: 500,
                          }}
                        >
                          {c.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: "9px",
                            color: "#9B8E84",
                          }}
                        >
                          {c.date}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "9px",
                          color: c.color,
                          background: `${c.color}15`,
                          padding: "2px 8px",
                          borderRadius: "100px",
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {c.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}