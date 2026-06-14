import ReactMarkdown from "react-markdown";import React, { useState } from 'react'

const MODE_LABELS = {
  hr: '👥 HR Interview Questions',
  technical: '💻 Technical Questions',
  mock: '🎙️ Mock Interview Session',
  roadmap: '🗺️ Preparation Roadmap',
  evaluation: '📝 Answer Evaluation',
  top10: '🏆 Top 10 Questions',
}

export default function ResponseCard({ result, onCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(result.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simple markdown-ish renderer
  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (/^\*\*(.+)\*\*$/.test(line.trim())) {
        return <p key={i} style={{ fontWeight: 700, color: 'var(--text)', marginTop: '14px', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>{line.replace(/\*\*/g, '')}</p>
      }
      if (/^\d+\./.test(line.trim())) {
        return <p key={i} style={{ color: 'var(--text)', margin: '8px 0', paddingLeft: '4px' }}>
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '13px', marginRight: '8px', fontWeight: 600 }}>
            {line.match(/^\d+/)[0]}.
          </span>
          {line.replace(/^\d+\./, '').trim()}
        </p>
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return <p key={i} style={{ color: 'var(--text-dim)', margin: '5px 0', paddingLeft: '16px' }}>
          <span style={{ color: 'var(--accent-2)', marginRight: '8px' }}>›</span>
          {line.slice(2)}
        </p>
      }
      if (line.startsWith('#')) {
        const level = line.match(/^#+/)[0].length
        const text = line.replace(/^#+\s/, '')
        return <p key={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: level === 1 ? '18px' : level === 2 ? '16px' : '14px',
          color: 'var(--text)', margin: '18px 0 8px', borderBottom: level <= 2 ? '1px solid var(--border)' : 'none', paddingBottom: level <= 2 ? '6px' : '0' }}>{text}</p>
      }
      if (line.trim() === '') return <div key={i} style={{ height: '8px' }} />
      return <p key={i} style={{ color: 'var(--text-dim)', margin: '4px 0', lineHeight: 1.7 }}>{line}</p>
    })
  }

  return (
    <div style={{
      background: 'var(--surface)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)',
      overflow: 'hidden', animation: 'fadeIn 0.3s ease',
    }}>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }`}</style>

      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'var(--surface-2)' }}>
        <div>
          <div>
  <div
    style={{
      fontSize: "18px",
      fontWeight: "700",
      color: "white",
      marginBottom: "6px",
    }}
  >
    ✨ AI Generated Response
  </div>

  <div
    style={{
      color: "#94a3b8",
      fontSize: "14px",
    }}
  >
    {MODE_LABELS[result.mode] || result.mode}
  </div>
</div>
          <div style={{ marginTop: '4px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[result.role, result.experience, result.topic].map((tag, i) => (
              <span key={i} style={{ background: 'rgba(59,130,246,.15)',
border: '1px solid rgba(59,130,246,.3)',
padding: '5px 12px',
fontWeight: '500', color: 'var(--accent)',
                fontSize: '11px', padding: '2px 10px', borderRadius: '20px',
                fontFamily: 'var(--font-mono)', border: '1px solid rgba(59,130,246,0.25)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button onClick={handleCopy} style={{
  background: copied
    ? "rgba(16,185,129,.15)"
    : "rgba(255,255,255,.04)",

  border: copied
    ? "1px solid #10b981"
    : "1px solid rgba(255,255,255,.08)",

  borderRadius: "14px",

  padding: "10px 18px",

  color: copied
    ? "#10b981"
    : "#e2e8f0",

  cursor: "pointer",

  fontWeight: "600",
}}>
          {copied ? '✓ Copied' : '⎘ Copy'}
        </button>
      </div>

     {/* Content */}
<div
  className="response-content"
  style={{
    padding: '32px',
    maxHeight: '700px',
    overflowY: 'auto',
    lineHeight: 1.8
  }}
>
  {renderContent(result.content)}
</div>
    </div>
  )
}
