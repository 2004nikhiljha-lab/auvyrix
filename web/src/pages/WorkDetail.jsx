import { Link, Navigate, useParams } from 'react-router'
import PageHero from '../components/PageHero.jsx'
import { useLead } from '../context/LeadContext.jsx'
import { WORK } from '../data.js'
import { SERVICE_PAGES } from '../services.js'

export default function WorkDetail() {
  const { slug } = useParams()
  const { openLead } = useLead()
  const work = WORK.find((w) => w.slug === slug)
  if (!work) return <Navigate to="/work" replace />
  const service = SERVICE_PAGES[work.service]

  return (
    <>
      <PageHero eyebrow={work.type} title={work.client} sub={work.result} />
      <section className="page-section">
        <article className="case page-wide sr">
          <img className="case-hero img-f" src={work.img} alt={work.client} />
          <div className="case-grid">
            <section>
              <h2>Problem</h2>
              <p>{work.problem}</p>
            </section>
            <section>
              <h2>Solution</h2>
              <p>{work.solution}</p>
            </section>
          </div>
          <section>
            <h2>Technologies</h2>
            <div className="case-tags">
              {work.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </section>
          <section>
            <h2>Features</h2>
            <ul className="svc-list">
              {work.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Screenshots</h2>
            <div className="case-shots">
              {work.screenshots.map((s) => (
                <figure key={s.src}>
                  <img className="img-f" src={s.src} alt={s.alt} />
                  <figcaption>{s.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>
          <section className="case-result">
            <h2>Result</h2>
            <p>{work.result}</p>
            <p>{work.detail}</p>
          </section>
          <div className="case-actions">
            {service ? (
              <Link className="btn-ghost" to={`/services/${work.service}`}>
                {service.eyebrow}
              </Link>
            ) : null}
            <button className="btn" type="button" onClick={openLead}>
              Start a similar project
            </button>
          </div>
        </article>
      </section>
    </>
  )
}
