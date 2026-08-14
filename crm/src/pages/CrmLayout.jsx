import { NavLink, Outlet, useLocation, useNavigate } from 'react-router'
import { setToken } from '../api.js'
import { SITE_URL } from '../config.js'

export default function CrmLayout() {
  const nav = useNavigate()
  const loc = useLocation()
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem('auvyrix_user') || '{}')
    } catch {
      return {}
    }
  })()

  const title = loc.pathname.includes('/leads') ? 'Lead management' : 'Dashboard'

  function logout() {
    setToken(null)
    localStorage.removeItem('auvyrix_user')
    nav('/login')
  }

  return (
    <div className="crm-shell">
      <aside className="crm-side">
        <div className="crm-brand">
          <img src="/logo.png" alt="Auvyrix" />
          <span>
            AUVYRIX <em>CRM</em>
          </span>
        </div>
        <nav className="crm-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Overview
          </NavLink>
          <NavLink to="/leads" className={({ isActive }) => (isActive ? 'active' : '')}>
            Leads
          </NavLink>
          <a href={SITE_URL} target="_blank" rel="noreferrer">
            View site
          </a>
          <button type="button" onClick={logout}>
            Sign out
          </button>
        </nav>
        <div className="crm-user">
          <strong>{user.name || 'Auvyrix'}</strong>
          {user.email}
        </div>
      </aside>
      <div className="crm-main">
        <header className="crm-top">
          <div>
            <h1>{title}</h1>
            <p>Website form leads — name, what they want, budget.</p>
          </div>
        </header>
        <div className="crm-body">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
