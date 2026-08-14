import { Link } from 'react-router'
import PageHero from '../components/PageHero.jsx'
import { useLead } from '../context/LeadContext.jsx'
import { SERVICES } from '../data.js'
import { SERVICE_PAGES, SERVICE_SLUGS } from '../services.js'

export default function Solutions() {
  const { openLead } = useLead()

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Software, web, apps,"
        titleDim="and websites — each with its own page."
        sub="Four core search intents. Pick the one that matches what you need built."
        cta="Start a project"
      />
      <section className="page-section">
        <div className="svc-hub page-wide">
          {SERVICE_SLUGS.map((slug) => {
            const p = SERVICE_PAGES[slug]
            return (
              <Link className="svc-hub-card lift sr" to={`/services/${slug}`} key={slug}>
                <span className="ic-tag">Service</span>
                <h2>{p.h1}</h2>
                <p>{p.intro}</p>
                <span className="svc-hub-go">View service →</span>
              </Link>
            )
          })}
        </div>
        <div className="inc-grid page-wide" style={{ marginTop: 48 }}>
          {SERVICES.map((item) => (
            <Link className="ic lift sr" key={item.h} to={item.href}>
              <div className="ic-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                  <path d={item.ico} />
                </svg>
              </div>
              <div className="ic-h">{item.h}</div>
              <div className="ic-d">{item.d}</div>
              <div className="ic-tag">{item.tag}</div>
            </Link>
          ))}
        </div>
        <div className="page-band sr">
          <h2>Do not see your category?</h2>
          <p>Most of our best work starts as “we need something that does not exist yet.” Tell us the outcome — we will name the build.</p>
          <button className="btn" type="button" onClick={openLead}>
            Describe your build
          </button>
        </div>
      </section>
    </>
  )
}
