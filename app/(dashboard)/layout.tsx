"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  CheckSquare,
  FileText,
  Users,
  Settings,
  Bird,
  LogOut,
  Bell,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FolderOpen, label: "Cases", href: "/cases" },
  { icon: CheckSquare, label: "Tasks", href: "/tasks" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Users, label: "Team", href: "/team" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", background: "#F5F3EF", overflow: "hidden" }}>

      {/* ── SIDEBAR ── */}
      <aside style={{
        width: collapsed ? "68px" : "240px",
        background: "#1C1917",
        display: "flex",
        flexDirection: "column" as const,
        transition: "width 0.25s ease",
        flexShrink: 0,
        position: "relative",
        zIndex: 10,
      }}>

        {/* Logo */}
        <div style={{ padding: collapsed ? "1.25rem 0" : "1.5rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "10px", justifyContent: collapsed ? "center" : "flex-start" }}>
          <div style={{ width: 32, height: 32, borderRadius: "8px", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Bird size={16} color="#fff" strokeWidth={1.5} />
          </div>
          {!collapsed && (
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", fontWeight: 500, color: "#F5EFE4", whiteSpace: "nowrap" as const }}>
              Case<span style={{ color: "#C4A97D" }}>Flow</span>
            </span>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "1rem 0.75rem", display: "flex", flexDirection: "column" as const, gap: "2px" }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                title={collapsed ? item.label : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: collapsed ? "0.75rem" : "0.7rem 0.9rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  background: active ? "rgba(196,169,125,0.15)" : "transparent",
                  border: active ? "1px solid rgba(196,169,125,0.2)" : "1px solid transparent",
                  transition: "all 0.15s",
                  justifyContent: collapsed ? "center" : "flex-start",
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
              >
                <Icon size={17} strokeWidth={1.5} color={active ? "#C4A97D" : "rgba(245,240,232,0.45)"} style={{ flexShrink: 0 }} />
                {!collapsed && (
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", fontWeight: active ? 500 : 400, color: active ? "#F5EFE4" : "rgba(245,240,232,0.45)", whiteSpace: "nowrap" as const }}>
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div style={{ padding: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Link
            href="/settings"
            style={{ display: "flex", alignItems: "center", gap: "10px", padding: collapsed ? "0.75rem" : "0.7rem 0.9rem", borderRadius: "8px", textDecoration: "none", transition: "all 0.15s", justifyContent: collapsed ? "center" : "flex-start" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <Settings size={17} strokeWidth={1.5} color="rgba(245,240,232,0.35)" />
            {!collapsed && <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "rgba(245,240,232,0.35)" }}>Settings</span>}
          </Link>

          {/* User */}
          {!collapsed && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0.7rem 0.9rem", marginTop: "4px", borderRadius: "8px", cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#fff" }}>RC</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "#F5EFE4", whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis" }}>Ronny Coulson</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "rgba(245,240,232,0.3)", whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis" }}>Admin</div>
              </div>
              <LogOut size={14} strokeWidth={1.5} color="rgba(245,240,232,0.25)" />
            </div>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{ position: "absolute", top: "1.5rem", right: "-12px", width: 24, height: 24, borderRadius: "50%", background: "#2C2724", border: "1px solid rgba(196,169,125,0.2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 20 }}
        >
          <ChevronDown size={12} color="#C4A97D" strokeWidth={2} style={{ transform: collapsed ? "rotate(-90deg)" : "rotate(90deg)", transition: "transform 0.25s" }} />
        </button>
      </aside>

      {/* ── MAIN ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" as const, overflow: "hidden" }}>

        {/* Top bar */}
        <header style={{ height: "60px", background: "#fff", borderBottom: "1px solid rgba(196,169,125,0.15)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.75rem", flexShrink: 0 }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#9B8E84", fontWeight: 300 }}>
            {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: "6px", borderRadius: "6px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F5F3EF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
            >
              <Bell size={18} strokeWidth={1.5} color="#9B8E84" />
              <span style={{ position: "absolute", top: 4, right: 4, width: 7, height: 7, borderRadius: "50%", background: "#C4A97D", border: "1.5px solid #fff" }} />
            </button>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#fff" }}>RC</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, overflow: "auto", padding: "2rem 1.75rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
}