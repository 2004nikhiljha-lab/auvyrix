import { Link, Navigate, useParams } from 'react-router'
import PageHero from '../components/PageHero.jsx'
import { useLead } from '../context/LeadContext.jsx'
import { WORK } from '../data.js'
import { GUIDES } from '../guides.js'
import { SERVICE_PAGES, SERVICE_SLUGS } from '../services.js'

export default function ServicePage() {
  const { slug } = useParams()
  const { openLead } = useLead()
  const page = SERVICE_PAGES[slug]
  if (!page) return <Navigate to="/solutions" replace />

  const related = WORK.filter((w) => w.service === slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.h1} titleDim={page.h1Dim} sub={page.intro} cta="Start a project" />
      <section className="page-section">
        <div className="svc-layout page-wide">
          <article className="svc-copy sr">
            <h2>Who this is for</h2>
            <ul className="svc-list">
              {page.forWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2>What we build</h2>
            <ul className="svc-list">
              {page.weBuild.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2>How an engagement runs</h2>
            <div className="svc-steps">
              {page.process.map((s) => (
                <div key={s.t}>
                  <strong>{s.t}</strong>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
            <h2>Questions</h2>
            {page.faqs.map((f) => (
              <div className="svc-faq" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </article>
          <aside className="svc-side sr">
            <p className="svc-intent">{page.intent}</p>
            <nav className="svc-nav">
              {SERVICE_SLUGS.map((s) => (
                <Link key={s} className={s === slug ? 'on' : ''} to={`/services/${s}`}>
                  {SERVICE_PAGES[s].eyebrow}
                </Link>
              ))}
            </nav>
            <button className="btn" type="button" onClick={openLead} style={{ width: '100%', justifyContent: 'center' }}>
              Get a quote
            </button>
          </aside>
        </div>
        {related.length ? (
          <div className="page-wide sr" style={{ marginTop: 64 }}>
            <h2 className="svc-related-h">Related work</h2>
            <div className="work-grid">
              {related.map((w) => (
                <Link className="work-card lift" to={`/work/${w.slug}`} key={w.slug}>
                  <div className="work-img-w">
                    <img className="img-f" src={w.img} alt={w.client} />
                  </div>
                  <div className="work-meta">
                    <span className="ic-tag">{w.type}</span>
                    <h3>{w.client}</h3>
                    <p>{w.result}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
        {GUIDES.filter((g) => g.services.includes(slug)).length ? (
          <div className="page-wide sr" style={{ marginTop: 40 }}>
            <h2 className="svc-related-h">Related guides</h2>
            <div className="guide-list" style={{ marginTop: 16 }}>
              {GUIDES.filter((g) => g.services.includes(slug)).map((g) => (
                <Link className="guide-card lift" to={`/guides/${g.slug}`} key={g.slug}>
                  <h2>{g.title}</h2>
                  <p>{g.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}
