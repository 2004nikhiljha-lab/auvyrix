import { useEffect, useState } from 'react'
import { api } from '../api.js'
import { BUDGETS } from '../data.js'
import { useLead } from '../context/LeadContext.jsx'

const WANT_OPTIONS = [
  'Mobile App',
  'Website',
  'Custom CRM',
  'Custom Software',
  'E-commerce',
  'ERP / Operations',
  'AI / Automation',
  'UI/UX Design',
  'Staff Augmentation',
  'Other',
]

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

export default function LeadModal() {
  const { open, closeLead } = useLead()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    want: '',
    wantDetails: '',
    budget: '',
  })
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [ok, setOk] = useState(false)

  useEffect(() => {
    if (!open) {
      setOk(false)
      setErr('')
      return undefined
    }
    const onKey = (e) => {
      if (e.key === 'Escape') closeLead()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeLead])

  if (!open) return null

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setErr('')
    setBusy(true)
    try {
      await api('/api/leads', { method: 'POST', body: form })
      setOk(true)
    } catch (ex) {
      setErr(ex.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="pop open" onClick={(e) => e.target === e.currentTarget && closeLead()}>
      <div className="pop-box pop-anim" style={{ maxWidth: 560 }}>
        <button className="pop-x" type="button" onClick={closeLead}>
          ×
        </button>
        <div className="pop-ico">
          <img src="/logo.png" alt="Auvyrix" />
        </div>
        {ok ? (
          <div className="form-ok">
            <h4 className="pop-h hf">Brief received.</h4>
            <p>
              Thank you, <strong>{form.name}</strong>. An Auvyrix specialist will review what you want and your budget, then
              reach out.
            </p>
            <button className="btn" type="button" onClick={closeLead} style={{ width: '100%', justifyContent: 'center', marginTop: 18 }}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="pop-h hf">
              Tell us what to build.
              <br />
              <em>We will scope it honestly.</em>
            </h3>
            <p className="pop-sub">Name. What you want. Budget. Enough to start a real conversation.</p>
            <form className="pop-form" onSubmit={submit}>
              <div className="fl">
                <span>Name</span>
                <input required value={form.name} onChange={set('name')} placeholder="Your name" />
              </div>
              <div className="form-row">
                <div className="fl">
                  <span>Email</span>
                  <input type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" />
                </div>
                <div className="fl">
                  <span>Phone</span>
                  <input value={form.phone} onChange={set('phone')} placeholder="+91 …" />
                </div>
              </div>
              <div className="fl">
                <span>What you want</span>
                <select required value={form.want} onChange={set('want')}>
                  <option value="">Select a solution</option>
                  {WANT_OPTIONS.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
              <div className="fl">
                <span>Tell us more</span>
                <textarea
                  value={form.wantDetails}
                  onChange={set('wantDetails')}
                  placeholder="App, website, CRM, custom software — what should it do?"
                />
              </div>
              <div className="fl">
                <span>Budget</span>
                <select required value={form.budget} onChange={set('budget')}>
                  <option value="">Select a range</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              {err ? <div className="form-err">{err}</div> : null}
              <button className="btn" disabled={busy} type="submit" style={{ width: '100%', justifyContent: 'center', borderRadius: 12 }}>
                {busy ? 'Sending…' : 'Send my brief'}
                <Arrow />
              </button>
              <p className="pop-note">No spam · Specialist reply · Usually within one business day</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
