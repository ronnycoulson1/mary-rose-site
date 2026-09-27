"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bird,
  LayoutDashboard,
  FolderOpen,
  CheckSquare,
  FileText,
  Users,
  Share2,
  FilePlus,
  ArrowRight,
  Check,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  AlertCircle,
  Plus,
  Clock,
} from "lucide-react";

// ── DEMO DATA ──
const stats = [
  { icon: FolderOpen, label: "Active Cases", value: "12", color: "#B8864E", bg: "rgba(184,134,78,0.08)" },
  { icon: CheckSquare, label: "Tasks Due Today", value: "4", color: "#DC2626", bg: "rgba(220,38,38,0.08)" },
  { icon: FileText, label: "Pending Docs", value: "7", color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { icon: AlertCircle, label: "Overdue Tasks", value: "2", color: "#D97706", bg: "rgba(217,119,6,0.08)" },
];

const cases = [
  { id: "MR-2024-001", name: "Johnson, Mary", status: "Arrangement", tasks: "3/5", staff: "RC", daysOpen: 2, statusColor: "#B8864E", statusBg: "rgba(184,134,78,0.1)" },
  { id: "MR-2024-002", name: "Williams, Robert", status: "First Call", tasks: "1/3", staff: "JD", daysOpen: 0, statusColor: "#059669", statusBg: "rgba(5,150,105,0.1)" },
  { id: "MR-2024-003", name: "Davis, Helen", status: "Service", tasks: "5/5", staff: "RC", daysOpen: 5, statusColor: "#7C3AED", statusBg: "rgba(124,58,237,0.1)" },
  { id: "MR-2024-004", name: "Miller, James", status: "Closed", tasks: "6/6", staff: "JD", daysOpen: 12, statusColor: "#6B7280", statusBg: "rgba(107,114,128,0.1)" },
  { id: "MR-2024-005", name: "Thompson, Sarah", status: "Arrangement", tasks: "2/4", staff: "RC", daysOpen: 1, statusColor: "#B8864E", statusBg: "rgba(184,134,78,0.1)" },
];

const recentTasks = [
  { case: "Johnson, Mary", task: "Obtain death certificate", due: "Today", overdue: true },
  { case: "Williams, Robert", task: "Schedule removal", due: "Today", overdue: false },
  { case: "Thompson, Sarah", task: "Coordinate clergy", due: "Tomorrow", overdue: false },
  { case: "Davis, Helen", task: "Prepare obituary", due: "Tomorrow", overdue: false },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: FolderOpen, label: "Cases" },
  { icon: CheckSquare, label: "Tasks" },
  { icon: FileText, label: "Documents" },
  { icon: Users, label: "Team" },
];

const features = [
  { icon: LayoutDashboard, label: "Case Dashboard", desc: "All active cases at a glance" },
  { icon: FilePlus, label: "Case Creation", desc: "Open a new case in 2 minutes" },
  { icon: CheckSquare, label: "Task Management", desc: "Per-case checklists with due dates" },
  { icon: FolderOpen, label: "Document Hub", desc: "Every file attached to its case" },
  { icon: Users, label: "Team Collaboration", desc: "Assign staff, add internal notes" },
  { icon: Share2, label: "Family Sharing", desc: "Secure status link for families" },
];

const includes = [
  "Full access to all 6 launch features",
  "Lifetime pricing — pay once, never again",
  "Direct line to the founding team",
  "Priority feature requests — you shape the roadmap",
  "Free personal onboarding session",
  "Full refund if not launched by June 2026",
];

// ── EMBEDDED REAL DASHBOARD ──
function EmbeddedDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.35)", border: "1px solid rgba(196,169,125,0.15)", height: "580px", display: "flex", flexDirection: "column" as const }}>

      {/* Browser bar */}
      <div style={{ background: "#141210", padding: "0.65rem 1rem", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(255,255,255,0.05)", flexShrink: 0 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA41" }} />
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "4px", padding: "2px 20px", fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.25)" }}>
            app.maryrose.com/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard shell */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* Sidebar */}
        <aside style={{ width: collapsed ? "60px" : "220px", background: "#1C1917", display: "flex", flexDirection: "column" as const, transition: "width 0.25s ease", flexShrink: 0, position: "relative" }}>
          <div style={{ padding: collapsed ? "1rem 0" : "1.25rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "8px", justifyContent: collapsed ? "center" : "flex-start" }}>
            <div style={{ width: 28, height: 28, borderRadius: "7px", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Bird size={14} color="#fff" strokeWidth={1.5} />
            </div>
            {!collapsed && <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", fontWeight: 500, color: "#F5EFE4", whiteSpace: "nowrap" as const }}>Mary <span style={{ color: "#C4A97D" }}>Rose</span></span>}
          </div>

          <nav style={{ flex: 1, padding: "0.75rem 0.6rem", display: "flex", flexDirection: "column" as const, gap: "2px" }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeNav === item.label;
              return (
                <button key={item.label} onClick={() => setActiveNav(item.label)}
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: collapsed ? "0.65rem" : "0.6rem 0.8rem", borderRadius: "7px", border: active ? "1px solid rgba(196,169,125,0.2)" : "1px solid transparent", background: active ? "rgba(196,169,125,0.15)" : "transparent", cursor: "pointer", width: "100%", justifyContent: collapsed ? "center" : "flex-start" as const, transition: "all 0.15s" }}
                >
                  <Icon size={15} strokeWidth={1.5} color={active ? "#C4A97D" : "rgba(245,240,232,0.4)"} />
                  {!collapsed && <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", fontWeight: active ? 500 : 400, color: active ? "#F5EFE4" : "rgba(245,240,232,0.4)", whiteSpace: "nowrap" as const }}>{item.label}</span>}
                </button>
              );
            })}
          </nav>

          <div style={{ padding: "0.6rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: collapsed ? "0.6rem" : "0.6rem 0.8rem", borderRadius: "7px", justifyContent: collapsed ? "center" : "flex-start" as const }}>
              <Settings size={14} strokeWidth={1.5} color="rgba(245,240,232,0.3)" />
              {!collapsed && <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "rgba(245,240,232,0.3)" }}>Settings</span>}
            </div>
            {!collapsed && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0.6rem 0.8rem", borderRadius: "7px" }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "#fff" }}>RC</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#F5EFE4", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>Ronny Coulson</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "rgba(245,240,232,0.3)" }}>Admin</div>
                </div>
                <LogOut size={13} strokeWidth={1.5} color="rgba(245,240,232,0.2)" />
              </div>
            )}
          </div>

          <button onClick={() => setCollapsed(!collapsed)}
            style={{ position: "absolute", top: "1.25rem", right: "-11px", width: 22, height: 22, borderRadius: "50%", background: "#2C2724", border: "1px solid rgba(196,169,125,0.2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 20 }}>
            <ChevronDown size={11} color="#C4A97D" strokeWidth={2} style={{ transform: collapsed ? "rotate(-90deg)" : "rotate(90deg)", transition: "transform 0.25s" }} />
          </button>
        </aside>

        {/* Main */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" as const, overflow: "hidden", background: "#F5F3EF" }}>
          <header style={{ height: "52px", background: "#fff", borderBottom: "1px solid rgba(196,169,125,0.15)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem", flexShrink: 0 }}>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#9B8E84", fontWeight: 300 }}>
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ position: "relative" }}>
                <Bell size={16} strokeWidth={1.5} color="#9B8E84" />
                <span style={{ position: "absolute", top: -2, right: -2, width: 6, height: 6, borderRadius: "50%", background: "#C4A97D", border: "1.5px solid #fff" }} />
              </div>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "#fff" }}>RC</span>
              </div>
            </div>
          </header>

          <main style={{ flex: 1, overflow: "auto", padding: "1.5rem" }}>
            {activeNav === "Dashboard" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <div>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 400, color: "#1C1917" }}>Good morning, Ronny</h1>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#9B8E84", fontWeight: 300 }}>Here's what's happening across your cases today.</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", color: "#fff", padding: "0.5rem 0.9rem", borderRadius: "5px", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, cursor: "pointer" }}>
                    <Plus size={13} strokeWidth={2} /> New Case
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  {stats.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "8px", padding: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div>
                            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 400, color: s.color, lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", color: "#9B8E84", fontWeight: 300, marginTop: "2px" }}>{s.label}</div>
                          </div>
                          <div style={{ width: 30, height: 30, borderRadius: "7px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Icon size={14} strokeWidth={1.5} color={s.color} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "1rem" }}>
                  <div style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "8px", overflow: "hidden" }}>
                    <div style={{ padding: "0.875rem 1.25rem", borderBottom: "1px solid rgba(196,169,125,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", fontWeight: 500, color: "#1C1917" }}>Active Cases</span>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#B8864E", cursor: "pointer" }}>View all →</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 70px 50px 50px", gap: "0.75rem", padding: "0.6rem 1.25rem", borderBottom: "1px solid rgba(196,169,125,0.08)" }}>
                      {["Deceased", "Status", "Tasks", "Staff", "Days"].map((h) => (
                        <span key={h} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", fontWeight: 500, color: "#9B8E84", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>{h}</span>
                      ))}
                    </div>
                    {cases.map((c, i) => (
                      <div key={c.id} style={{ display: "grid", gridTemplateColumns: "1fr 100px 70px 50px 50px", gap: "0.75rem", padding: "0.75rem 1.25rem", borderBottom: i < cases.length - 1 ? "1px solid rgba(196,169,125,0.07)" : "none", alignItems: "center", cursor: "pointer", transition: "background 0.1s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#FAFAF7"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                      >
                        <div>
                          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "#1C1917" }}>{c.name}</div>
                          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "#9B8E84", fontWeight: 300 }}>{c.id}</div>
                        </div>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 500, color: c.statusColor, background: c.statusBg, padding: "2px 8px", borderRadius: "100px", whiteSpace: "nowrap" as const }}>{c.status}</span>
                        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#6B5E52", fontWeight: 300 }}>{c.tasks}</div>
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", fontWeight: 600, color: "#fff" }}>{c.staff}</span>
                        </div>
                        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#9B8E84", fontWeight: 300 }}>{c.daysOpen}d</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "8px", overflow: "hidden" }}>
                    <div style={{ padding: "0.875rem 1.25rem", borderBottom: "1px solid rgba(196,169,125,0.1)", display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", fontWeight: 500, color: "#1C1917" }}>Upcoming Tasks</span>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#B8864E", cursor: "pointer" }}>View all →</span>
                    </div>
                    <div style={{ padding: "0.5rem" }}>
                      {recentTasks.map((t, i) => (
                        <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "0.75rem", borderRadius: "6px", cursor: "pointer", transition: "background 0.1s" }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "#FAFAF7"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                        >
                          <div style={{ width: 15, height: 15, borderRadius: "3px", border: `1.5px solid ${t.overdue ? "#DC2626" : "rgba(196,169,125,0.4)"}`, flexShrink: 0, marginTop: "1px" }} />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#1C1917" }}>{t.task}</div>
                            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", color: "#9B8E84", marginTop: "1px" }}>{t.case}</div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                            <Clock size={10} strokeWidth={1.5} color={t.overdue ? "#DC2626" : "#9B8E84"} />
                            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: t.overdue ? "#DC2626" : "#9B8E84", fontWeight: t.overdue ? 500 : 300 }}>{t.due}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeNav !== "Dashboard" && (
              <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", height: "100%", gap: "1rem" }}>
                <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(196,169,125,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {activeNav === "Cases" && <FolderOpen size={22} strokeWidth={1.5} color="#B8864E" />}
                  {activeNav === "Tasks" && <CheckSquare size={22} strokeWidth={1.5} color="#B8864E" />}
                  {activeNav === "Documents" && <FileText size={22} strokeWidth={1.5} color="#B8864E" />}
                  {activeNav === "Team" && <Users size={22} strokeWidth={1.5} color="#B8864E" />}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "#1C1917" }}>{activeNav}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "#9B8E84", fontWeight: 300 }}>Coming in the full build</div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// ── MAIN PAGE ──
export default function DemoPage() {
  const [animated, setAnimated] = useState(false);
  const spotsLeft = 17;

  useEffect(() => { setTimeout(() => setAnimated(true), 100); }, []);

  return (
    <div style={{ background: "#FAFAF7", fontFamily: "'Jost', sans-serif" }}>

      {/* HERO */}
      <section style={{ background: "#1C1917", padding: "4rem 5% 5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(196,169,125,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(196,169,125,0.04) 0%, transparent 40%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto", opacity: animated ? 1 : 0, transform: animated ? "translateY(0)" : "translateY(24px)", transition: "all 0.9s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "2.5rem" }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Bird size={19} color="#fff" strokeWidth={1.5} />
            </div>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 500, color: "#F5EFE4" }}>
              Mary <span style={{ color: "#C4A97D" }}>Rose</span>
            </span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(196,169,125,0.1)", border: "1px solid rgba(196,169,125,0.25)", padding: "0.4rem 1.1rem", borderRadius: "100px", marginBottom: "2rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4A97D", display: "inline-block", boxShadow: "0 0 8px rgba(196,169,125,0.8)" }} />
            <span style={{ fontSize: "0.72rem", fontWeight: 500, color: "#C4A97D", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Founding Partner Program · {spotsLeft} spots left</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", fontWeight: 400, color: "#F5EFE4", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            Case management built<br /><em style={{ color: "#C4A97D" }}>for funeral homes.</em>
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(245,240,232,0.5)", lineHeight: 1.85, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Replace your spreadsheets, sticky notes, and disconnected tools with one simple platform — built specifically for how your team works.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "0.75rem" }}>
            <Link href="/signup"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "4px", fontSize: "1rem", fontWeight: 500, boxShadow: "0 8px 28px rgba(139,111,71,0.4)", transition: "all 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Apply for Early Access — $299 <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.2)", fontWeight: 300 }}>One-time · Lifetime access · Full refund if not launched by June 2026</span>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section style={{ padding: "5rem 5%", background: "#F0EBE2" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>Live preview</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#1C1917", lineHeight: 1.15 }}>
              See exactly what you're getting.<br /><em style={{ color: "#B8864E" }}>Click the sidebar — it's interactive.</em>
            </h2>
          </div>
          <EmbeddedDashboard />
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "5rem 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 500, color: "#B8864E", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>What's included</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#1C1917" }}>
              6 features. <em style={{ color: "#B8864E" }}>Everything you need to start.</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} style={{ background: "#FAFAF7", border: "1px solid rgba(196,169,125,0.18)", borderRadius: "10px", padding: "1.5rem", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: "9px", background: "rgba(196,169,125,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <Icon size={19} strokeWidth={1.5} color="#B8864E" />
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.15rem", color: "#1C1917", marginBottom: "0.35rem" }}>{f.label}</div>
                  <div style={{ fontSize: "0.8rem", color: "#9B8E84", fontWeight: 300, lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section style={{ padding: "5rem 5%", background: "#1C1917" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 500, color: "#C4A97D", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>The offer</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 400, color: "#F5EFE4", lineHeight: 1.2, marginBottom: "1rem" }}>
              We're looking for 20 founding partners<br /><em style={{ color: "#C4A97D" }}>to build this with us.</em>
            </h2>
            <p style={{ fontSize: "0.875rem", fontWeight: 300, color: "rgba(245,240,232,0.45)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              Your feedback shapes the roadmap. In return, you get lifetime access for a one-time payment that never changes.
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3.5rem", color: "#C4A97D", lineHeight: 1 }}>$299</span>
              <span style={{ fontSize: "0.82rem", color: "rgba(245,240,232,0.3)", fontWeight: 300 }}>one-time · vs $149/mo after launch</span>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(196,169,125,0.2)", borderRadius: "12px", padding: "2rem" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#C4A97D", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "1.25rem" }}>Includes</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.875rem", marginBottom: "1.75rem" }}>
              {includes.map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(196,169,125,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                    <Check size={10} strokeWidth={2.5} color="#C4A97D" />
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "rgba(245,240,232,0.55)", fontWeight: 300, lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span style={{ fontSize: "0.72rem", color: "rgba(245,240,232,0.25)" }}>{20 - spotsLeft} of 20 spots filled</span>
                <span style={{ fontSize: "0.72rem", color: "#C4A97D", fontWeight: 500 }}>{spotsLeft} remaining</span>
              </div>
              <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "100px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${((20 - spotsLeft) / 20) * 100}%`, background: "linear-gradient(90deg, #C4A97D, #8B6F47)", borderRadius: "100px" }} />
              </div>
            </div>
            <Link href="/signup"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "0.9rem", borderRadius: "6px", fontSize: "0.9rem", fontWeight: 500, boxShadow: "0 8px 24px rgba(139,111,71,0.4)", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Reserve my spot <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <p style={{ textAlign: "center" as const, fontSize: "0.7rem", color: "rgba(245,240,232,0.18)", marginTop: "0.6rem" }}>Full refund guaranteed if not launched by June 2026</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div style={{ padding: "2.5rem 5%", background: "#141210", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "0.5rem" }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Bird size={13} color="#fff" strokeWidth={1.5} />
          </div>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem", color: "#F5EFE4" }}>Mary <span style={{ color: "#C4A97D" }}>Rose</span></span>
        </div>
        <p style={{ fontSize: "0.72rem", color: "rgba(245,240,232,0.2)", fontWeight: 300 }}>
          Questions? <a href="mailto:hello@maryrose.com" style={{ color: "#C4A97D", textDecoration: "none" }}>hello@maryrose.com</a>
        </p>
      </div>
    </div>
  );
}