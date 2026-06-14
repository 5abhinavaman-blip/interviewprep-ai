import React from "react";

const ROLES = [
  "Backend Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "Data Analyst",
  "ML Engineer",
  "DevOps Engineer",
  "Software Engineer",
];

const EXPERIENCES = [
  "Student",
  "Fresher (< 1 year)",
  "Junior (1-2 years)",
  "Mid-Level (3-5 years)",
];

const TOPICS = [
  "React",
  "Python",
  "Java",
  "DSA",
  "SQL",
  "FastAPI",
  "Node.js",
  "System Design",
];

export default function InputForm({ form, onChange }) {
  const inputStyle = {
    width: "100%",
    height: "64px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "0 20px",
    color: "white",
    fontSize: "16px",
    outline: "none",
    cursor: "pointer",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
    color: "#94a3b8",
    fontSize: "13px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontWeight: "600",
  };

  const optionStyle = {
    background: "#0f172a",
    color: "white",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "24px",
        marginBottom: "35px",
      }}
    >
      {/* ROLE */}
      <div>
        <label style={labelStyle}>Target Role</label>

        <select
          style={inputStyle}
          value={form.role}
          onChange={(e) => onChange("role", e.target.value)}
        >
          <option value="" style={optionStyle}>
            Select Role
          </option>

          {ROLES.map((role) => (
            <option
              key={role}
              value={role}
              style={optionStyle}
            >
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* EXPERIENCE */}
      <div>
        <label style={labelStyle}>Experience</label>

        <select
          style={inputStyle}
          value={form.experience}
          onChange={(e) =>
            onChange("experience", e.target.value)
          }
        >
          <option value="" style={optionStyle}>
            Select Experience
          </option>

          {EXPERIENCES.map((exp) => (
            <option
              key={exp}
              value={exp}
              style={optionStyle}
            >
              {exp}
            </option>
          ))}
        </select>
      </div>

      {/* TOPIC */}
      <div>
        <label style={labelStyle}>Topic / Stack</label>

        <select
          style={inputStyle}
          value={form.topic}
          onChange={(e) =>
            onChange("topic", e.target.value)
          }
        >
          <option value="" style={optionStyle}>
            Select Topic
          </option>

          {TOPICS.map((topic) => (
            <option
              key={topic}
              value={topic}
              style={optionStyle}
            >
              {topic}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}