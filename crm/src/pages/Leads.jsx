import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router'
import { api } from '../api.js'

const STATUSES = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost']
const BUDGETS = ['₹10k – ₹30k', '₹30k – ₹60k', '₹70k – ₹1.5L', '₹2 Lakh+', 'Other']

function fmt(d) {
  if (!d) return ''
  return new Date(d).toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
}

export default function Leads() {
  const nav = useNavigate()
  const { id } = useParams()
  const [sp] = useSearchParams()
  const [leads, setLeads] = useState([])
  const [q, setQ] = useState('')
  const [status, setStatus] = useState(sp.get('status') || '')
  const [budget, setBudget] = useState(sp.get('budget') || '')
  const [want, setWant] = useState(sp.get('want') || '')
  const [err, setErr] = useState('')
  const [selected, setSelected] = useState(null)
  const [note, setNote] = useState('')

  async function load() {
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (status) params.set('status', status)
    if (budget) params.set('budget', budget)
    if (want) params.set('want', want)
    const data = await api(`/api/crm/leads?${params}`, { auth: true })
    setLeads(data.leads)
  }

  useEffect(() => {
    load().catch((e) => setErr(e.message))
  }, [q, status, budget, want])

  useEffect(() => {
    if (!id) {
      setSelected(null)
      return
    }
    api(`/api/crm/leads/${id}`, { auth: true })
      .then((d) => setSelected(d.lead))
      .catch(() => setSelected(null))
  }, [id])

  const open = selected
  const wantOptions = useMemo(() => {
    const set = new Set(leads.map((l) => l.want).filter(Boolean))
    ;['Mobile App', 'Website', 'Custom CRM', 'Custom Software', 'E-commerce', 'ERP / Operations', 'AI / Automation', 'UI/UX Design', 'Staff Augmentation', 'Other'].forEach((w) => set.add(w))
    return [...set]
  }, [leads])

  async function patch(body) {
    const data = await api(`/api/crm/leads/${open.id}`, { method: 'PATCH', auth: true, body })
    setSelected(data.lead)
    load()
  }

  async function addNote(e) {
    e.preventDefault()
    if (!note.trim()) return
    const data = await api(`/api/crm/leads/${open.id}/notes`, { method: 'POST', auth: true, body: { text: note } })
    setSelected(data.lead)
    setNote('')
    load()
  }

  async function removeLead() {
    if (!confirm('Delete this lead?')) return
    await api(`/api/crm/leads/${open.id}`, { method: 'DELETE', auth: true })
    nav('/leads')
    load()
  }

  return (
    <>
      <div className="panel">
        <div className="panel-hd">
          <div className="filters">
            <button className={`chip ${status === '' ? 'on' : ''}`} type="button" onClick={() => setStatus('')}>
              All
            </button>
            {STATUSES.map((s) => (
              <button key={s} className={`chip ${status === s ? 'on' : ''}`} type="button" onClick={() => setStatus(s)}>
                {s}
              </button>
            ))}
          </div>
          <div className="filter-row">
            <select className="filter-select" value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">All budgets</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <select className="filter-select" value={want} onChange={(e) => setWant(e.target.value)}>
              <option value="">All solutions</option>
              {wantOptions.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
            <input className="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, email, ask…" />
          </div>
        </div>
        {err ? (
          <div className="form-err" style={{ margin: 16 }}>
            {err}
          </div>
        ) : null}
        {leads.length === 0 ? (
          <div className="empty">No leads yet. Submissions from the main website appear here.</div>
        ) : (
          <table className="leads">
            <thead>
              <tr>
                <th>Name</th>
                <th>What they want</th>
                <th>Budget</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id} onClick={() => nav(`/leads/${l.id}`)}>
                  <td>
                    <strong>{l.name}</strong>
                    <div className="muted">{l.email || l.phone || '—'}</div>
                  </td>
                  <td>
                    {l.want}
                    {l.wantDetails ? <div className="muted">{l.wantDetails.slice(0, 80)}</div> : null}
                  </td>
                  <td>{l.budget}</td>
                  <td>
                    <span className={`badge st-${l.status}`}>{l.status}</span>
                  </td>
                  <td className="muted">{fmt(l.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {open ? (
        <div className="drawer-bg" onClick={(e) => e.target === e.currentTarget && nav('/leads')}>
          <aside className="drawer">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 16 }}>
              <div>
                <h2>{open.name}</h2>
                <p className="muted">
                  {open.email || 'No email'} · {open.phone || 'No phone'}
                </p>
              </div>
              <button className="btn-ghost-crm" type="button" onClick={() => nav('/leads')}>
                Close
              </button>
            </div>
            <div className="field">
              <span>Status</span>
              <select value={open.status} onChange={(e) => patch({ status: e.target.value })}>
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <span>What they want</span>
              <input value={open.want} onChange={(e) => setSelected({ ...open, want: e.target.value })} onBlur={() => patch({ want: open.want })} />
            </div>
            <div className="field">
              <span>Details</span>
              <textarea
                value={open.wantDetails || ''}
                onChange={(e) => setSelected({ ...open, wantDetails: e.target.value })}
                onBlur={() => patch({ wantDetails: open.wantDetails })}
              />
            </div>
            <div className="field">
              <span>Budget</span>
              <input value={open.budget} onChange={(e) => setSelected({ ...open, budget: e.target.value })} onBlur={() => patch({ budget: open.budget })} />
            </div>
            <div className="btn-row">
              <button className="btn-ghost-crm" type="button" onClick={removeLead}>
                Delete lead
              </button>
            </div>
            <form onSubmit={addNote}>
              <div className="field">
                <span>Add note</span>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Call outcome, next step…" />
              </div>
              <button className="btn-crm" type="submit">
                Save note
              </button>
            </form>
            <div style={{ marginTop: 22 }}>
              <span className="muted" style={{ letterSpacing: '.1em', textTransform: 'uppercase', fontSize: 11, fontWeight: 700 }}>
                Timeline
              </span>
              {(open.notes || []).map((n) => (
                <div className="note" key={n.id}>
                  <div className="muted">
                    {n.by} · {fmt(n.at)}
                  </div>
                  <div style={{ marginTop: 6 }}>{n.text}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      ) : null}
    </>
  )
}
