"use client";

import { useState } from "react";
import Link from "next/link";
import { Bird, Lock, Users, MessageCircle } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #FDFBF7 0%, #F5EFE4 100%)", display: "flex" }}>

      {/* ── LEFT — Branding panel ── */}
      <div style={{ width: "45%", background: "#1C1917", padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,169,125,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #C4A97D, #8B6F47)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          🕊️
        </div>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 500, color: "#F5EFE4" }}>
            Case<span style={{ color: "#C4A97D" }}>Flow</span>
          </span>
        </Link>

        {/* Center content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.1)", border: "1px solid rgba(196,169,125,0.2)", padding: "0.4rem 1rem", borderRadius: "100px", marginBottom: "1.75rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4A97D", display: "inline-block", boxShadow: "0 0 6px rgba(196,169,125,0.6)" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", fontWeight: 500, color: "#C4A97D", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Founding Partner Access</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 400, color: "#F5EFE4", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            You're helping build<br />
            <em style={{ color: "#C4A97D" }}>something meaningful.</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "rgba(245,240,232,0.45)", fontWeight: 300, lineHeight: 1.8, marginBottom: "2.5rem" }}>
            CaseFlow is in early access. As a founding partner, your feedback directly shapes what we build next.
          </p>

          {/* What founding partners get */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
            {[
              { icon: Lock, text: "Lifetime access — pay once, never again" },
              { icon: Users, text: "Direct line to the founding team" },
              { icon: MessageCircle, text: "Your feedback shapes the product" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "8px", background: "rgba(196,169,125,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={14} strokeWidth={1.5} color="#C4A97D" />
                  </div>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "rgba(245,240,232,0.5)", fontWeight: 300 }}>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(196,169,125,0.1)", paddingTop: "1.5rem" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(245,240,232,0.25)", fontWeight: 300 }}>
            Not a founding partner yet?{" "}
            <Link href="/pricing" style={{ color: "#C4A97D", textDecoration: "none" }}>See the program →</Link>
          </p>
        </div>
      </div>

      {/* ── RIGHT — Form panel ── */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>

          <div style={{ marginBottom: "2.5rem" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", fontWeight: 400, color: "#1C1917", lineHeight: 1.1, marginBottom: "0.75rem" }}>
              Welcome back
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#9B8E84", fontWeight: 300 }}>
              Sign in to your CaseFlow workspace
            </p>
          </div>

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
                style={{ width: "100%", padding: "0.85rem 1rem", border: "1px solid rgba(196,169,125,0.3)", borderRadius: "6px", background: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#1C1917", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" as const }}
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
              <div style={{ position: "relative" as const }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  style={{ width: "100%", padding: "0.85rem 3rem 0.85rem 1rem", border: "1px solid rgba(196,169,125,0.3)", borderRadius: "6px", background: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#1C1917", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" as const }}
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
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Sign up link */}
          <p style={{ textAlign: "center" as const, fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#9B8E84", marginTop: "2rem" }}>
            Not a founding partner yet?{" "}
            <Link href="/pricing" style={{ color: "#B8864E", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Apply for early access →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}