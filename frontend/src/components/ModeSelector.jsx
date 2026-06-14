import React from "react";

const MODES = [
  {
    id: "hr",
    icon: "👥",
    title: "HR Interview",
    desc: "Behavioral & culture fit questions",
  },
  {
    id: "technical",
    icon: "💻",
    title: "Technical",
    desc: "Core technical interview prep",
  },
  {
    id: "mock",
    icon: "🎙️",
    title: "Mock Interview",
    desc: "Simulated interview experience",
  },
  {
    id: "roadmap",
    icon: "🗺️",
    title: "Roadmap",
    desc: "4-week preparation plan",
  },
  {
    id: "evaluation",
    icon: "📝",
    title: "Evaluation",
    desc: "AI grades your answers",
  },
  {
    id: "top10",
    icon: "🏆",
    title: "Top 10",
    desc: "Most important questions",
  },
];

export default function ModeSelector({
  selected,
  onChange,
}) {
  return (
    <div style={{ marginBottom: "35px" }}>
      <h3
        style={{
          marginBottom: "18px",
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "var(--text-muted)",
        }}
      >
        Select Interview Mode
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "18px",
        }}
      >
        {MODES.map((mode) => {
          const active = selected === mode.id;

          return (
            <div
              key={mode.id}
              onClick={() => onChange(mode.id)}
              style={{
                cursor: "pointer",

                minHeight: "160px",

                padding: "24px",

                borderRadius: "22px",

                transition: "0.25s",

                background: active
                  ? "linear-gradient(135deg, rgba(59,130,246,.15), rgba(139,92,246,.15))"
                  : "rgba(255,255,255,.03)",

                border: active
                  ? "1px solid rgba(59,130,246,.6)"
                  : "1px solid rgba(255,255,255,.08)",

                boxShadow: active
                  ? "0 0 30px rgba(59,130,246,.25)"
                  : "none",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "16px",
                }}
              >
                {mode.icon}
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "8px",
                  color: active
                    ? "#60a5fa"
                    : "#fff",
                }}
              >
                {mode.title}
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {mode.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}