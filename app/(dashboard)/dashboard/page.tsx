"use client";

import Link from "next/link";
import {
  FolderOpen,
  CheckSquare,
  FileText,
  AlertCircle,
  Plus,
  ArrowRight,
  Clock,
} from "lucide-react";

const stats = [
  { icon: FolderOpen, label: "Active Cases", value: "12", color: "#B8864E", bg: "rgba(184,134,78,0.08)" },
  { icon: CheckSquare, label: "Tasks Due Today", value: "4", color: "#DC2626", bg: "rgba(220,38,38,0.08)" },
  { icon: FileText, label: "Pending Docs", value: "7", color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { icon: AlertCircle, label: "Overdue Tasks", value: "2", color: "#D97706", bg: "rgba(217,119,6,0.08)" },
];

const cases = [
  { id: "CF-2024-001", name: "Johnson, Mary", status: "Arrangement", tasks: "3/5", staff: "RC", daysOpen: 2, statusColor: "#B8864E", statusBg: "rgba(184,134,78,0.1)" },
  { id: "CF-2024-002", name: "Williams, Robert", status: "First Call", tasks: "1/3", staff: "JD", daysOpen: 0, statusColor: "#059669", statusBg: "rgba(5,150,105,0.1)" },
  { id: "CF-2024-003", name: "Davis, Helen", status: "Service", tasks: "5/5", staff: "RC", daysOpen: 5, statusColor: "#7C3AED", statusBg: "rgba(124,58,237,0.1)" },
  { id: "CF-2024-004", name: "Miller, James", status: "Closed", tasks: "6/6", staff: "JD", daysOpen: 12, statusColor: "#6B7280", statusBg: "rgba(107,114,128,0.1)" },
  { id: "CF-2024-005", name: "Thompson, Sarah", status: "Arrangement", tasks: "2/4", staff: "RC", daysOpen: 1, statusColor: "#B8864E", statusBg: "rgba(184,134,78,0.1)" },
];

const recentTasks = [
  { case: "Johnson, Mary", task: "Obtain death certificate", due: "Today", overdue: true },
  { case: "Williams, Robert", task: "Schedule removal", due: "Today", overdue: false },
  { case: "Thompson, Sarah", task: "Coordinate clergy", due: "Tomorrow", overdue: false },
  { case: "Davis, Helen", task: "Prepare obituary", due: "Tomorrow", overdue: false },
];

export default function DashboardPage() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 400, color: "#1C1917", marginBottom: "0.25rem" }}>
            {greeting}, Ronny
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", color: "#9B8E84", fontWeight: 300 }}>
            Here's what's happening across your cases today.
          </p>
        </div>
        <Link
          href="/cases/new"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", background: "linear-gradient(135deg, #C4A97D 0%, #8B6F47 100%)", color: "#fff", padding: "0.7rem 1.25rem", borderRadius: "6px", fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", fontWeight: 500, boxShadow: "0 4px 14px rgba(139,111,71,0.25)", transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(139,111,71,0.35)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(139,111,71,0.25)"; }}
        >
          <Plus size={16} strokeWidth={2} />
          New Case
        </Link>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "10px", padding: "1.5rem", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", fontWeight: 400, color: s.color, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#9B8E84", fontWeight: 300, marginTop: "0.35rem" }}>{s.label}</div>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: "8px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={17} strokeWidth={1.5} color={s.color} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "1.5rem" }}>

        {/* Active Cases */}
        <div style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "10px", overflow: "hidden" }}>
          <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(196,169,125,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", fontWeight: 500, color: "#1C1917" }}>Active Cases</h2>
            <Link href="/cases" style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#B8864E", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
              View all <ArrowRight size={12} strokeWidth={2} />
            </Link>
          </div>
          <div>
            {/* Table header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 80px 60px 60px", gap: "1rem", padding: "0.75rem 1.5rem", borderBottom: "1px solid rgba(196,169,125,0.08)" }}>
              {["Deceased", "Status", "Tasks", "Staff", "Days"].map((h) => (
                <span key={h} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 500, color: "#9B8E84", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>{h}</span>
              ))}
            </div>
            {cases.map((c, i) => (
              <Link
                key={c.id}
                href={`/cases/${c.id}`}
                style={{ display: "grid", gridTemplateColumns: "1fr 120px 80px 60px 60px", gap: "1rem", padding: "1rem 1.5rem", borderBottom: i < cases.length - 1 ? "1px solid rgba(196,169,125,0.07)" : "none", textDecoration: "none", transition: "background 0.15s", alignItems: "center" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#FAFAF7"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "#1C1917" }}>{c.name}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#9B8E84", fontWeight: 300, marginTop: "1px" }}>{c.id}</div>
                </div>
                <div>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", fontWeight: 500, color: c.statusColor, background: c.statusBg, padding: "3px 10px", borderRadius: "100px" }}>{c.status}</span>
                </div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#6B5E52", fontWeight: 300 }}>{c.tasks} tasks</div>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #C4A97D, #8B6F47)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "#fff" }}>{c.staff}</span>
                </div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#9B8E84", fontWeight: 300 }}>{c.daysOpen}d</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tasks due */}
        <div style={{ background: "#fff", border: "1px solid rgba(196,169,125,0.15)", borderRadius: "10px", overflow: "hidden" }}>
          <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(196,169,125,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", fontWeight: 500, color: "#1C1917" }}>Upcoming Tasks</h2>
            <Link href="/tasks" style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#B8864E", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
              View all <ArrowRight size={12} strokeWidth={2} />
            </Link>
          </div>
          <div style={{ padding: "0.75rem" }}>
            {recentTasks.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "0.875rem 0.75rem", borderRadius: "8px", transition: "background 0.15s", cursor: "pointer" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#FAFAF7"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ width: 18, height: 18, borderRadius: "4px", border: `1.5px solid ${t.overdue ? "#DC2626" : "rgba(196,169,125,0.4)"}`, flexShrink: 0, marginTop: "1px" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", fontWeight: 400, color: "#1C1917", marginBottom: "2px" }}>{t.task}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#9B8E84", fontWeight: 300 }}>{t.case}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
                  <Clock size={11} strokeWidth={1.5} color={t.overdue ? "#DC2626" : "#9B8E84"} />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: t.overdue ? "#DC2626" : "#9B8E84", fontWeight: t.overdue ? 500 : 300 }}>{t.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}