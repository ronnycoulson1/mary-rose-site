"use client";

import { useState } from "react";
import Link from "next/link";

const steps = ["Your account", "Your funeral home", "Invite your team"];

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    funeralHomeName: "",
    phone: "",
    city: "",
    state: "",
    teamEmails: ["", ""],
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const updateTeamEmail = (i: number, value: string) => {
    const updated = [...form.teamEmails];
    updated[i] = value;
    setForm((prev) => ({ ...prev, teamEmails: updated }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) { setStep(step + 1); return; }
    setLoading(true);
    // TODO: wire up your auth + workspace creation here
    setTimeout(() => setLoading(false), 1500);
  };

  const inputStyle = {
    width: "100%", padding: "0.85rem 1rem",
    border: "1px solid rgba(196,169,125,0.3)", borderRadius: "6px",
    background: "#fff", fontFamily: "'Jost', sans-serif",
    fontSize: "0.9rem", color: "#1C1917", outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block", fontFamily: "'Jost', sans-serif",
    fontSize: "0.8rem", fontWeight: 500, color: "#6B5E52",
    marginBottom: "0.5rem", letterSpacing: "0.03em",
  } as React.CSSProperties;

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 100%)", display: "flex" }}>

      {/* ── LEFT — Branding panel ── */}
      <div style={{ width: "40%", background: "#1C1917", padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🕊️</div>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 500, color: "#F5EFE4" }}>
            Mary <span style={{ color: "#C4A97D" }}>Rose</span>
          </span>
        </Link>

        {/* Steps indicator */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(245,240,232,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2rem" }}>Setup progress</p>
          {steps.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                background: i < step ? "linear-gradient(135deg, #C4A97D, #8B6F47)" : i === step ? "rgba(196,169,125,0.2)" : "rgba(255,255,255,0.05)",
                border: i === step ? "2px solid #C4A97D" : "2px solid transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 600,
                color: i <= step ? "#fff" : "rgba(245,240,232,0.25)",
                transition: "all 0.3s",
              }}>
                {i < step ? "✓" : i + 1}
              </div>
              <div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", fontWeight: i === step ? 500 : 400, color: i === step ? "#F5EFE4" : i < step ? "#C4A97D" : "rgba(245,240,232,0.35)", transition: "color 0.3s" }}>{s}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ padding: "1.25rem", background: "rgba(196,169,125,0.08)", borderRadius: "8px", border: "1px solid rgba(196,169,125,0.15)" }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "rgba(245,240,232,0.5)", marginBottom: "0.75rem" }}>✓ 14-day free trial</div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "rgba(245,240,232,0.5)", marginBottom: "0.75rem" }}>✓ No credit card required</div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "rgba(245,240,232,0.5)" }}>✓ Cancel anytime</div>
        </div>
      </div>

      {/* ── RIGHT — Form ── */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
        <div style={{ width: "100%", maxWidth: "460px" }}>

          {/* Step header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>
              Step {step + 1} of {steps.length}
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.3rem", fontWeight: 400, color: "#1C1917", lineHeight: 1.1, marginBottom: "0.5rem" }}>
              {step === 0 && "Create your account"}
              {step === 1 && "Your funeral home"}
              {step === 2 && "Invite your team"}
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "#9B8E84", fontWeight: 300 }}>
              {step === 0 && "Set up your personal login details"}
              {step === 1 && "Tell us about your funeral home"}
              {step === 2 && "Add team members — you can always do this later"}
            </p>
          </div>

          <form onSubmit={handleNext}>

            {/* ── STEP 0 ── */}
            {step === 0 && (
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>First name</label>
                    <input type="text" placeholder="Sarah" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last name</label>
                    <input type="text" placeholder="Johnson" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Work email</label>
                  <input type="email" placeholder="you@funeralhome.com" required value={form.email} onChange={(e) => update("email", e.target.value)} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")} />
                </div>
                <div>
                  <label style={labelStyle}>Password</label>
                  <div style={{ position: "relative" }}>
                    <input type={showPassword ? "text" : "password"} placeholder="Min. 8 characters" required value={form.password} onChange={(e) => update("password", e.target.value)} style={{ ...inputStyle, paddingRight: "3.5rem" }}
                      onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9B8E84", fontSize: "0.8rem", fontFamily: "'Jost', sans-serif" }}>
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 1 ── */}
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>Funeral home name</label>
                  <input type="text" placeholder="Thornton Family Funeral Home" required value={form.funeralHomeName} onChange={(e) => update("funeralHomeName", e.target.value)} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")} />
                </div>
                <div>
                  <label style={labelStyle}>Phone number</label>
                  <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>City</label>
                    <input type="text" placeholder="Chicago" value={form.city} onChange={(e) => update("city", e.target.value)} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>State</label>
                    <select value={form.state} onChange={(e) => update("state", e.target.value)} style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">Select state</option>
                      {["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 2 ── */}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
                <div style={{ background: "#FDF8F2", border: "1px solid rgba(196,169,125,0.2)", borderRadius: "8px", padding: "1rem 1.25rem" }}>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#8B6F47", fontWeight: 300, lineHeight: 1.6 }}>
                    Team members will receive an email invite to join your Mary Rose workspace. You can add more from settings anytime.
                  </p>
                </div>
                {form.teamEmails.map((email, i) => (
                  <div key={i}>
                    <label style={labelStyle}>Team member {i + 1} email <span style={{ color: "#9B8E84", fontWeight: 300 }}>(optional)</span></label>
                    <input type="email" placeholder={`staff${i + 1}@funeralhome.com`} value={email} onChange={(e) => updateTeamEmail(i, e.target.value)} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")} />
                  </div>
                ))}
                <button type="button" onClick={() => setForm(prev => ({ ...prev, teamEmails: [...prev.teamEmails, ""] }))} style={{ background: "transparent", border: "1px dashed rgba(196,169,125,0.4)", borderRadius: "6px", padding: "0.75rem", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#B8864E", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FDF8F2")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  + Add another team member
                </button>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              {step > 0 && (
                <button type="button" onClick={() => setStep(step - 1)} style={{ flex: 1, padding: "0.9rem", background: "transparent", border: "1px solid rgba(196,169,125,0.3)", borderRadius: "6px", fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#6B5E52", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C4A97D")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(196,169,125,0.3)")}
                >
                  ← Back
                </button>
              )}
              <button type="submit" disabled={loading} style={{ flex: 2, padding: "0.9rem", background: loading ? "#C4A97D" : "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", border: "none", borderRadius: "6px", fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 500, cursor: loading ? "not-allowed" : "pointer", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(139,111,71,0.25)" }}
                onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(139,111,71,0.35)"; } }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(139,111,71,0.25)"; }}
              >
                {loading ? "Creating workspace..." : step === 2 ? "Launch my workspace →" : "Continue →"}
              </button>
            </div>
          </form>

          {/* Login link */}
          <p style={{ textAlign: "center", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#9B8E84", marginTop: "2rem" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#B8864E", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}