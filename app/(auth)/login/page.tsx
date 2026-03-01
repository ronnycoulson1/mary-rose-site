"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up your auth here (Supabase, NextAuth, Clerk, etc.)
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 100%)", display: "flex" }}>

      {/* ── LEFT — Branding panel ── */}
      <div style={{ width: "45%", background: "#1C1917", padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
        {/* Background decoration */}
        <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🕊️</div>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 500, color: "#F5EFE4" }}>
            Case<span style={{ color: "#C4A97D" }}>Flow</span>
          </span>
        </Link>

        {/* Center quote */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "4rem", color: "rgba(196,169,125,0.2)", lineHeight: 1, marginBottom: "1rem" }}>"</div>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 400, color: "#F5EFE4", lineHeight: 1.6, fontStyle: "italic", marginBottom: "1.5rem" }}>
            CaseFlow gave us back the hours we were losing to paperwork — and gave those hours to the families who needed us.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>MT</div>
            <div>
              <div style={{ fontFamily: "'Jost', sans-serif", color: "#F5EFE4", fontSize: "0.85rem", fontWeight: 500 }}>Margaret T.</div>
              <div style={{ fontFamily: "'Jost', sans-serif", color: "#9B8E84", fontSize: "0.75rem" }}>Thornton Family Funeral Home</div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div style={{ display: "flex", gap: "2rem" }}>
          {[{ value: "200+", label: "Funeral homes" }, { value: "98%", label: "Satisfaction" }, { value: "14-day", label: "Free trial" }].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", color: "#C4A97D", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "rgba(245,240,232,0.4)", marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — Form panel ── */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>

          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", fontWeight: 400, color: "#1C1917", lineHeight: 1.1, marginBottom: "0.75rem" }}>
              Welcome back
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#9B8E84", fontWeight: 300 }}>
              Sign in to your CaseFlow workspace
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "#6B5E52", marginBottom: "0.5rem", letterSpacing: "0.03em" }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@funeralhome.com"
                required
                style={{ width: "100%", padding: "0.85rem 1rem", border: "1px solid rgba(196,169,125,0.3)", borderRadius: "6px", background: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#1C1917", outline: "none", transition: "border-color 0.2s", }}
                onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "#6B5E52", letterSpacing: "0.03em" }}>
                  Password
                </label>
                <Link href="/forgot-password" style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "#B8864E", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                >
                  Forgot password?
                </Link>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  style={{ width: "100%", padding: "0.85rem 3rem 0.85rem 1rem", border: "1px solid rgba(196,169,125,0.3)", borderRadius: "6px", background: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#1C1917", outline: "none", transition: "border-color 0.2s" }}
                  onFocus={(e) => (e.target.style.borderColor = "#C4A97D")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(196,169,125,0.3)")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9B8E84", fontSize: "0.8rem", fontFamily: "'Jost', sans-serif" }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{ width: "100%", padding: "0.9rem", background: loading ? "#C4A97D" : "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", border: "none", borderRadius: "6px", fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 500, cursor: loading ? "not-allowed" : "pointer", transition: "all 0.2s", marginTop: "1.25rem", boxShadow: "0 4px 16px rgba(139,111,71,0.25)", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(139,111,71,0.35)"; } }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(139,111,71,0.25)"; }}
            >
              {loading ? "Signing in..." : "Sign in →"}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.75rem 0" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(196,169,125,0.2)" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#9B8E84" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "rgba(196,169,125,0.2)" }} />
          </div>

          {/* Google SSO */}
          <button
            style={{ width: "100%", padding: "0.85rem", background: "#fff", border: "1px solid rgba(196,169,125,0.3)", borderRadius: "6px", fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#1C1917", fontWeight: 400, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C4A97D"; e.currentTarget.style.background = "#FDF8F2"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(196,169,125,0.3)"; e.currentTarget.style.background = "#fff"; }}
          >
            <span style={{ fontSize: "1.1rem" }}>G</span>
            Continue with Google
          </button>

          {/* Sign up link */}
          <p style={{ textAlign: "center", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#9B8E84", marginTop: "2rem" }}>
            Don't have an account?{" "}
            <Link href="/signup" style={{ color: "#B8864E", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Start free trial
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}