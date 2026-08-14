import { Link, Navigate, useParams } from 'react-router'
import PageHero from '../components/PageHero.jsx'
import { useLead } from '../context/LeadContext.jsx'
import { getGuide } from '../guides.js'
import { SERVICE_PAGES } from '../services.js'

export default function GuideDetail() {
  const { slug } = useParams()
  const { openLead } = useLead()
  const guide = getGuide(slug)
  if (!guide) return <Navigate to="/guides" replace />

  return (
    <>
      <PageHero eyebrow="Guide" title={guide.title} sub={guide.description} />
      <section className="page-section">
        <article className="legal-prose page-wide sr">
          <p className="guide-date">Updated {guide.date}</p>
          {guide.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </section>
          ))}
          <div className="case-actions" style={{ marginTop: 32 }}>
            {guide.services.map((id) =>
              SERVICE_PAGES[id] ? (
                <Link className="btn-ghost" key={id} to={`/services/${id}`}>
                  {SERVICE_PAGES[id].eyebrow}
                </Link>
              ) : null,
            )}
            <button className="btn" type="button" onClick={openLead}>
              Get a scoped quote
            </button>
          </div>
        </article>
      </section>
    </>
  )
}
