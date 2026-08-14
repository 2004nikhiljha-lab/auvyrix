import { Link } from 'react-router'
import PageHero from '../components/PageHero.jsx'
import { GUIDES } from '../guides.js'

export default function Guides() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Pricing, MVPs,"
        titleDim="and what to build first."
        sub="Short, practical notes for founders in India — written the way we scope real briefs."
      />
      <section className="page-section">
        <div className="guide-list page-wide">
          {GUIDES.map((g) => (
            <Link className="guide-card lift sr" to={`/guides/${g.slug}`} key={g.slug}>
              <span className="ic-tag">{g.date}</span>
              <h2>{g.title}</h2>
              <p>{g.description}</p>
              <span className="svc-hub-go">Read guide →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
