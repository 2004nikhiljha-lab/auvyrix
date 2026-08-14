import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { LeadProvider, useLead } from '../context/LeadContext.jsx'
import LeadModal from './LeadModal.jsx'
import Seo from './Seo.jsx'
import WhatsAppFloat from './WhatsAppFloat.jsx'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../site.js'
import '../styles/landing.css'
import '../styles/pages.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Shell() {
  const { openLead } = useLead()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const sro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on')
            sro.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('.sr').forEach((el) => sro.observe(el))
    return () => sro.disconnect()
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menu])

  const closeMenu = () => setMenu(false)

  return (
    <>
      <div className="noise" />
      <div className="aurora" aria-hidden />
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link className="nav-logo" to="/" onClick={closeMenu}>
          <img src="/logo.png" alt="Auvyrix" />
          <div className="nav-brand">
            AUVYRIX <em>SOFTWARES</em>
          </div>
        </Link>
        <ul className={`nav-links ${menu ? 'open' : ''}`}>
          <li>
            <NavLink to="/system" onClick={closeMenu}>
              System
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions" onClick={closeMenu}>
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" onClick={closeMenu}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="btn nav-cta" type="button" onClick={openLead}>
            Start a project
          </button>
          <button className={`nav-burger ${menu ? 'on' : ''}`} type="button" aria-label="Menu" onClick={() => setMenu((v) => !v)}>
            <span />
            <span />
          </button>
        </div>
      </nav>

      <Outlet />

      <footer className="foot">
        <div className="foot-inner">
          <div className="foot-top">
            <div>
              <div className="foot-logo">
                <img src="/logo.png" alt="Auvyrix Softwares" />
                <div className="foot-brand">
                  AUVYRIX <em>SOFTWARES</em>
                </div>
              </div>
              <p className="foot-desc">
                Early-stage software studio in India — apps, websites, CRMs, and custom systems. Not GST-registered at this time.
              </p>
              <div className="foot-contact">
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
            <div className="foot-cols">
              <div className="foot-links">
                <Link to="/solutions">Solutions</Link>
                <Link to="/system">System</Link>
                <Link to="/work">Work</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="foot-links">
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/disclaimer">Disclaimer</Link>
                <Link to="/refund-policy">Refunds</Link>
              </div>
            </div>
          </div>
          <div className="foot-bot">
            <p className="foot-disc">
              Quotes are professional service fees. GST invoices are issued only after GST registration. Timelines depend on the brief
              you share.
            </p>
            <p className="foot-copy">© {new Date().getFullYear()} Auvyrix Softwares. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <WhatsAppFloat />
      <LeadModal />
    </>
  )
}

export default function SiteLayout() {
  return (
    <LeadProvider>
      <ScrollToTop />
      <Seo />
      <Shell />
    </LeadProvider>
  )
}
