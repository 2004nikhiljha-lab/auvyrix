import { useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import { WORK } from '../data.js'

export default function Work() {
  useEffect(() => {
    document.title = 'Work | Auvyrix Softwares'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Real briefs."
        titleDim="Shipped systems."
        sub="Selected engagements where the brief was clear, the budget was honest, and the software had to earn its keep."
        cta="Start a project"
      />
      <section className="page-section">
        <div className="work-list page-wide">
          {WORK.map((w, i) => (
            <article className={`work-row sr ${i % 2 ? 'rev' : ''}`} key={w.client}>
              <div className="work-row-img">
                <img className="img-f" src={w.img} alt={w.client} />
              </div>
              <div className="work-row-copy">
                <span className="ic-tag">{w.type}</span>
                <h2>{w.client}</h2>
                <p className="work-result">{w.result}</p>
                <p className="work-detail">{w.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
