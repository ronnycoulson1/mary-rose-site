"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 5%",
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(250,250,247,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(196,169,125,0.2)"
          : "1px solid transparent",
        transition: "all 0.35s ease",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
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
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "#1C1917",
            letterSpacing: "-0.01em",
          }}
        >
          Case<span style={{ color: "#B8864E" }}>Flow</span>
        </span>
      </Link>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {[
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "About", href: "/about" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              textDecoration: "none",
              color: "#6B5E52",
              fontSize: "0.875rem",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1C1917")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6B5E52")}
          >
            {link.label}
          </a>
        ))}

        <Link
          href="/login"
          style={{
            textDecoration: "none",
            color: "#6B5E52",
            fontSize: "0.875rem",
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1C1917")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6B5E52")}
        >
          Log in
        </Link>

        <Link
          href="/signup"
          style={{
            textDecoration: "none",
            background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)",
            color: "#fff",
            padding: "0.55rem 1.5rem",
            borderRadius: "4px",
            fontSize: "0.875rem",
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.03em",
            transition: "all 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(139,111,71,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}