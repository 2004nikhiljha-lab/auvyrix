import { useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import { useLead } from '../context/LeadContext.jsx'
import { SERVICES } from '../data.js'

export default function Solutions() {
  const { openLead } = useLead()
  useEffect(() => {
    document.title = 'Solutions | Auvyrix Softwares'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="100+ solution types."
        titleDim="Eight you will recognise immediately."
        sub="The catalogue is wide. The craft is the same on every engagement — tailored to your workflow, not a generic package."
        cta="Start a project"
      />
      <section className="page-section">
        <div className="inc-grid page-wide">
          {SERVICES.map((item) => (
            <div className="ic lift sr" key={item.h}>
              <div className="ic-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                  <path d={item.ico} />
                </svg>
              </div>
              <div className="ic-h">{item.h}</div>
              <div className="ic-d">{item.d}</div>
              <div className="ic-tag">{item.tag}</div>
            </div>
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
