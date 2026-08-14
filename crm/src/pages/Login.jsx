import { useState } from 'react'
import { useNavigate } from 'react-router'
import { api, setToken } from '../api.js'
import { SITE_URL } from '../config.js'

export default function Login() {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setErr('')
    setBusy(true)
    try {
      const data = await api('/api/auth/login', { method: 'POST', body: { email, password } })
      setToken(data.token)
      localStorage.setItem('auvyrix_user', JSON.stringify(data.user))
      nav('/')
    } catch (ex) {
      setErr(ex.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="nav-brand" style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="Auvyrix" style={{ width: 42, height: 42, borderRadius: 10 }} />
          AUVYRIX <em>SOFTWARES</em>
        </div>
        <h1>Lead CRM</h1>
        <p>Sign in to manage website leads — the same pipeline the main site writes into.</p>
        <form className="pop-form" onSubmit={submit}>
          <div className="fl">
            <span>Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              autoComplete="username"
              placeholder="Email"
            />
          </div>
          <div className="fl">
            <span>Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          {err ? <div className="form-err">{err}</div> : null}
          <button className="btn" disabled={busy} type="submit" style={{ width: '100%', justifyContent: 'center', borderRadius: 12 }}>
            {busy ? 'Signing in…' : 'Enter dashboard'}
          </button>
        </form>
        <p style={{ marginTop: 18, textAlign: 'center' }}>
          <a className="nav-crm" href={SITE_URL}>
            ← Back to main site
          </a>
        </p>
      </div>
    </div>
  )
}
