import React, { useState } from 'react'
import InputForm from '../components/InputForm'
import ModeSelector from '../components/ModeSelector'
import ResponseCard from '../components/ResponseCard'
import Hero from '../components/Hero'

export default function Home() {
  const [form, setForm] = useState({ role: '', experience: '', topic: '' })
  const [mode, setMode] = useState('technical')
  const [evalForm, setEvalForm] = useState({ question: '', answer: '' })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const handleGenerate = async () => {
    if (!form.role || !form.experience || !form.topic) {
      setError('Please fill in Role, Experience, and Topic.')
      return
    }
    if (mode === 'evaluation' && (!evalForm.question || !evalForm.answer)) {
      setError('Please enter both the question and your answer for evaluation.')
      return
    }
    setError('')
    setLoading(true)
    setResult(null)
    try {
      const body = { ...form, mode, ...(mode === 'evaluation' ? { question: evalForm.question, user_answer: evalForm.answer } : {}) }
      const res = await fetch('/api/interview/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (!res.ok) throw new Error(`Server error: ${res.status}`)
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setError(e.message || 'Something went wrong. Make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '0 0 60px' }}>
      <div className="ai-orb orb-1"></div>
    <div className="ai-orb orb-2"></div>

      {/* Navbar */}
      <nav
  style={{
    borderBottom: '1px solid rgba(255,255,255,.08)',
    padding: '0 40px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: '72px',

    backdropFilter: 'blur(20px)',

    position: 'sticky',
    top: 0,
    zIndex: 100,

    background: 'rgba(5,8,22,.75)'
  }}
>
  <div>
    <div
      style={{
        fontWeight: 700,
        fontSize: '20px',
        color: '#fff'
      }}
    >
      ⚡ InterviewPrep AI
    </div>

    <div
      style={{
        fontSize: '12px',
        color: 'var(--text-muted)'
      }}
    >
      AI Interview Coach
    </div>
  </div>

  <div
    style={{
      padding: '8px 14px',
      borderRadius: '999px',
      background: 'rgba(59,130,246,.12)',
      border: '1px solid rgba(59,130,246,.25)',
      color: '#60a5fa',
      fontSize: '13px'
    }}
  >
    Gemini Powered
  </div>
</nav>
<Hero />


      {/* Main Card */}
      <div style={{maxWidth: '1300px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{background: 'rgba(15,23,42,.6)',

backdropFilter: 'blur(20px)',

border: '1px solid rgba(255,255,255,.08)',

borderRadius: '24px',

padding: '45px', marginBottom: '24px' }}>

          <ModeSelector selected={mode} onChange={setMode} />
          <InputForm form={form} onChange={handleChange} />

          {/* Evaluation extra fields */}
          {mode === 'evaluation' && (
            <div style={{ marginBottom: '24px', display: 'grid', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '12px',
                  fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em',
                  textTransform: 'uppercase', marginBottom: '7px' }}>Interview Question</label>
                <input placeholder="Paste the interview question here…"
                  value={evalForm.question} onChange={e => setEvalForm(f => ({ ...f, question: e.target.value }))}
                  style={{ width: '100%', background: 'var(--surface-2)', border: '1.5px solid var(--border)',
                    borderRadius: 'var(--radius-sm)', padding: '11px 14px', color: 'var(--text)',
                    fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '12px',
                  fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em',
                  textTransform: 'uppercase', marginBottom: '7px' }}>Your Answer</label>
                <textarea placeholder="Write your answer here — the AI will evaluate and grade it…"
                  value={evalForm.answer} onChange={e => setEvalForm(f => ({ ...f, answer: e.target.value }))}
                  rows={5}
                  style={{ width: '100%', background: 'var(--surface-2)', border: '1.5px solid var(--border)',
                    borderRadius: 'var(--radius-sm)', padding: '11px 14px', color: 'var(--text)',
                    fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none',
                    resize: 'vertical', lineHeight: 1.6 }} />
              </div>
            </div>
          )}

          {error && (
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 'var(--radius-sm)', padding: '12px 16px', marginBottom: '18px',
              color: '#f87171', fontSize: '14px' }}>
              ⚠ {error}
            </div>
          )}

          <button onClick={handleGenerate} disabled={loading}
            style={{ width: '100%', padding: '14px', background: loading ? 'var(--surface-2)' : 'var(--accent)',
              border: 'none', borderRadius: 'var(--radius-sm)', color: '#fff', fontSize: '15px',
              fontFamily: 'var(--font-display)', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s', letterSpacing: '0.02em',
              boxShadow: loading ? 'none' : '0 0 24px rgba(59,130,246,0.35)',
            }}>
            {loading ? '⏳  Generating…' : '⚡  Generate'}
          </button>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div style={{ background: 'var(--surface)', border: '1.5px solid var(--border)',
            borderRadius: 'var(--radius)', padding: '28px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
              <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span>
              AI is crafting your response…
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {result && <ResponseCard result={result} />}
      </div>
    </div>
  )
}
