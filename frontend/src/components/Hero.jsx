export default function Hero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "90px 20px 60px",
        position: "relative",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.22), transparent 70%)",
          filter: "blur(120px)",
          zIndex: -1,
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: "inline-block",
          padding: "8px 18px",
          borderRadius: "999px",
          border: "1px solid rgba(59,130,246,.3)",
          background: "rgba(59,130,246,.08)",
          color: "#60a5fa",
          fontSize: "13px",
          marginBottom: "28px",
        }}
      >
        ⚡ 6 AI Modes • Personalized • Instant Feedback
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(48px,8vw,88px)",
          fontWeight: 800,
          lineHeight: 1,
          marginBottom: "20px",
          color: "#fff",
        }}
      >
        Prepare Smarter.
        <br />
        <span
          style={{
            background:
              "linear-gradient(90deg,#3b82f6,#8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Interview Better.
        </span>
      </h1>

      {/* Description */}
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: "var(--text-muted)",
          fontSize: "20px",
          lineHeight: 1.8,
        }}
      >
        AI-powered interview preparation platform
        that generates technical questions,
        HR questions, study roadmaps and
        answer evaluations tailored specifically
        to your role and experience.
      </p>

      {/* Stats */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          flexWrap: "wrap",
        }}
      >
        {[
          "⚡ 6 Modes",
          "🎯 Personalized",
          "🚀 Instant",
          "🤖 AI Powered",
        ].map((item) => (
          <div
            key={item}
            style={{
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.08)",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}