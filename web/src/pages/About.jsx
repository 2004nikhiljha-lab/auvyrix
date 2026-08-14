import { useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import { WHO } from '../data.js'

export default function About() {
  useEffect(() => {
    document.title = 'About | Auvyrix Softwares'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Auvyrix Softwares"
        titleDim="is a product studio, not a staffing marketplace."
        sub="We design and build commercial software for companies that have already tried generic SaaS, offshore lottery, or an internal build that never launched."
        cta="Work with us"
      />
      <section className="page-section">
        <div className="about-grid page-wide">
          <div className="about-copy sr">
            <h2>What we believe</h2>
            <p>
              If the tool almost works, it does not. Softwares should feel expensive because the craft is expensive — type,
              motion, architecture, and follow-through. We ask for the budget up front so the plan can be honest.
            </p>
            <p>
              Discovery, design, engineering, and commercial follow-through stay in one studio. That is how leads do not get
              lost and products do not stall at v1.
            </p>
          </div>
          <div className="about-stats sr">
            <div>
              <strong>100+</strong>
              <span>Solution types</span>
            </div>
            <div>
              <strong>8–16</strong>
              <span>Weeks typical MVP</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Studio, end to end</span>
            </div>
          </div>
        </div>
        <div className="who-cards page-wide sr" style={{ marginTop: 64 }}>
          {WHO.map((w) => (
            <div className="wc lift" key={w.t}>
              <div>
                <div className="wc-t">{w.t}</div>
                <div className="wc-d">{w.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
