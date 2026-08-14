import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { api } from '../api.js'

const LABELS = {
  new: 'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  proposal: 'Proposal',
  won: 'Won',
  lost: 'Lost',
}

export default function Overview() {
  const nav = useNavigate()
  const [stats, setStats] = useState(null)
  const [err, setErr] = useState('')

  useEffect(() => {
    api('/api/crm/stats', { auth: true })
      .then(setStats)
      .catch((e) => setErr(e.message))
  }, [])

  if (err) return <div className="form-err">{err}</div>
  if (!stats) return <div className="muted">Loading…</div>

  return (
    <>
      <div className="stat-grid">
        <div className="stat">
          <b>{stats.total}</b>
          <span>Total leads</span>
        </div>
        <div className="stat">
          <b>{stats.newThisWeek}</b>
          <span>This week</span>
        </div>
        <div className="stat">
          <b>{stats.pipeline}</b>
          <span>Open pipeline</span>
        </div>
        <div className="stat">
          <b>{stats.won}</b>
          <span>Won</span>
        </div>
      </div>
      <div className="panel">
        <div className="panel-hd">
          <strong style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Pipeline by stage</strong>
          <button className="btn-crm" type="button" onClick={() => nav('/leads')}>
            Open leads
          </button>
        </div>
        <table className="leads">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(stats.byStatus).map(([k, v]) => (
              <tr key={k} onClick={() => nav(`/leads?status=${k}`)}>
                <td>
                  <span className={`badge st-${k}`}>{LABELS[k] || k}</span>
                </td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
