import { Link } from 'react-router'
import PageHero from '../components/PageHero.jsx'
import { WORK } from '../data.js'

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects."
        titleDim="Problem, solution, result."
        sub="Each case study covers the brief, the build, technologies, features, screenshots, and what changed after launch."
        cta="Start a project"
      />
      <section className="page-section">
        <div className="work-list page-wide">
          {WORK.map((w, i) => (
            <Link className={`work-row sr ${i % 2 ? 'rev' : ''}`} to={`/work/${w.slug}`} key={w.slug}>
              <div className="work-row-img">
                <img className="img-f" src={w.img} alt={w.client} />
              </div>
              <div className="work-row-copy">
                <span className="ic-tag">{w.type}</span>
                <h2>{w.client}</h2>
                <p className="work-result">{w.result}</p>
                <p className="work-detail">{w.detail}</p>
                <span className="svc-hub-go">Read case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
