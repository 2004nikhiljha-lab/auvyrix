import { useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import { STEPS } from '../data.js'

export default function System() {
  useEffect(() => {
    document.title = 'System | Auvyrix Softwares'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="System"
        title="Lead in."
        titleDim="Scope honest. Ship."
        sub="Three layers we never split across six vendors — product, engineering, and follow-through in one studio."
        cta="Start a project"
      />
      <section className="page-section">
        <div className="system-list page-wide">
          {STEPS.map((s) => (
            <article className="system-block sr" key={s.n}>
              <div className="step-num">
                {s.n} — {s.t}
              </div>
              <h2 className="step-h">{s.h}</h2>
              <p className="step-p">{s.p}</p>
              <ul className="system-points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
