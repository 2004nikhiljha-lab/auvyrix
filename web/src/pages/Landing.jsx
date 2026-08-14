import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useLead } from '../context/LeadContext.jsx'
import { SERVICES, STEPS, WORK } from '../data.js'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

export default function Landing() {
  const { openLead } = useLead()
  const [live, setLive] = useState(1840)
  const heroRef = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    document.title = 'Auvyrix Softwares | Software that looks as premium as it ships'
    const tick = setInterval(() => setLive((n) => n + 1), 2800)
    const v = document.getElementById('v1')
    if (v) {
      v.muted = true
      v.play()?.catch(() => {})
    }
    return () => clearInterval(tick)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    const stage = stageRef.current
    if (!hero || !stage) return undefined

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      stage.style.setProperty('--px', `${x * 18}px`)
      stage.style.setProperty('--py', `${y * 12}px`)
      stage.style.setProperty('--rx', `${y * -4}deg`)
      stage.style.setProperty('--ry', `${x * 6}deg`)
    }
    const onLeave = () => {
      stage.style.setProperty('--px', '0px')
      stage.style.setProperty('--py', '0px')
      stage.style.setProperty('--rx', '0deg')
      stage.style.setProperty('--ry', '0deg')
    }

    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', onLeave)
    return () => {
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="hero-vid">
          <video id="v1" loop muted playsInline preload="auto">
            <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-mesh" aria-hidden />
        <div className="hero-orbs" aria-hidden>
          <span className="orb o1" />
          <span className="orb o2" />
          <span className="orb o3" />
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <p className="hero-kicker anim-fade-up" style={{ animationDelay: '.05s' }}>
              <span className="live-dot" />
              <span className="count-pop" key={live}>
                {live.toLocaleString()}
              </span>
              &nbsp;briefs this year · 100+ solution types
            </p>
            <h1 className="hf hero-h">
              <span className="anim-line">
                <span className="anim-line-inner" style={{ animationDelay: '.12s' }}>
                  Software that looks
                </span>
              </span>
              <span className="anim-line">
                <span className="anim-line-inner dim" style={{ animationDelay: '.28s' }}>
                  as premium as it ships.
                </span>
              </span>
            </h1>
            <p className="hero-sub anim-fade-up" style={{ animationDelay: '.45s' }}>
              Auvyrix designs and builds apps, websites, CRMs, and custom platforms for teams that refuse generic tools.
            </p>
            <div className="hero-acts anim-fade-up" style={{ animationDelay: '.58s' }}>
              <button className="btn btn-pulse btn-shine" type="button" onClick={openLead}>
                Tell us what you want
                <Arrow />
              </button>
              <Link className="btn-ghost btn-ghost-glow" to="/solutions">
                Browse solutions
              </Link>
            </div>
            <div className="hero-trust anim-fade-up" style={{ animationDelay: '.72s' }}>
              <div className="trust-avs">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80" alt="" />
              </div>
              <div className="trust-txt">
                Trusted by <strong>founders & operators</strong> shipping real products
              </div>
            </div>
          </div>
          <div className="hero-right anim-float-in" ref={stageRef}>
            <div className="hero-stage">
              <img
                className="hero-img img-f"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85"
                alt="Auvyrix product team"
              />
              <div className="hero-ring" aria-hidden />
              <div className="wa f1 float-y" style={{ top: 32, left: 0 }}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="" />
                <div>
                  <div className="wa-hd">
                    <span className="wa-nm">Auvyrix PM</span>
                    <span className="wa-time">Now</span>
                  </div>
                  <div className="wa-msg typing-msg">Scope locked. Pipeline + follow-ups in sprint one.</div>
                  <div className="wa-on">
                    <span />
                    Online
                  </div>
                </div>
              </div>
              <div className="wa f2 float-y-delay" style={{ bottom: 80, left: 12 }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="" />
                <div>
                  <div className="wa-hd">
                    <span className="wa-nm">Lead Engineer</span>
                    <span className="wa-time">2m ago</span>
                  </div>
                  <div className="wa-msg">Staging is live. Payments and roles are wired.</div>
                </div>
              </div>
              <div className="res-badge float-y-slow">
                <div className="res-ico">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <div>
                  <div className="res-v">100+ solutions</div>
                  <div className="res-l">Apps · Web · CRM · Custom</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-cue anim-fade-up" style={{ animationDelay: '.9s' }} aria-hidden>
          <span />
          Scroll
        </div>
      </section>

      <div className="mq mq-glow">
        <div className="mq-track">
          {[0, 1].flatMap((k) =>
            ['Mobile Apps', 'Websites', 'Custom CRMs', 'Custom Software', 'E-commerce', 'AI & Automation', 'ERP', 'UI/UX'].map(
              (item, i) => (
                <div className="mq-item" key={`${k}-${i}`}>
                  <span className="mq-dot" />
                  {item}
                </div>
              ),
            ),
          )}
        </div>
      </div>

      <section className="agit agit-motion">
        <div className="agit-inner sr">
          <h2>
            Templates are not a product strategy.
            <br />
            <em className="agit-em">A system is.</em>
          </h2>
          <p>
            Most companies buy software that almost fits — then hire people to work around it. You need a studio that asks what
            you want, respects the budget, and builds the actual system.
          </p>
        </div>
      </section>

      <section className="inc home-preview">
        <div className="inc-inner">
          <div className="inc-hd sr">
            <h2>Eight solutions clients ask for first.</h2>
            <p>
              The catalogue is wider. <Link to="/solutions">See all solutions →</Link>
            </p>
          </div>
          <div className="inc-grid">
            {SERVICES.slice(0, 4).map((item, i) => (
              <div className="ic lift ic-stagger sr" style={{ '--d': `${i * 0.08}s` }} key={item.h}>
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
        </div>
      </section>

      <section className="sys home-steps">
        <div className="sys-inner">
          <div className="sys-hd sr">
            <h2>How an Auvyrix build works.</h2>
            <p>
              Brief in. Scope honest. Software that ships. <Link to="/system">Full system →</Link>
            </p>
          </div>
          <div className="home-step-grid">
            {STEPS.map((s, i) => (
              <article className="home-step sr lift step-stagger" style={{ '--d': `${i * 0.1}s` }} key={s.n}>
                <div className="step-num">
                  <span className="step-n-glow">{s.n}</span> — {s.t}
                </div>
                <h3 className="step-h">{s.h}</h3>
                <p className="step-p">{s.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-preview">
        <div className="work-preview-inner">
          <div className="inc-hd sr">
            <h2>Work that changed how teams operate.</h2>
            <p>
              Real briefs. Shipped systems. <Link to="/work">View work →</Link>
            </p>
          </div>
          <div className="work-grid">
            {WORK.slice(0, 3).map((w, i) => (
              <article className="work-card sr lift work-tilt" style={{ '--d': `${i * 0.1}s` }} key={w.client}>
                <div className="work-img-w">
                  <img className="img-f" src={w.img} alt={w.client} />
                  <div className="work-shine" aria-hidden />
                </div>
                <div className="work-meta">
                  <span className="ic-tag">{w.type}</span>
                  <h3>{w.client}</h3>
                  <p>{w.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="xcta">
        <div className="cta-bg cta-anim" aria-hidden />
        <div className="cta-particles" aria-hidden>
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="cta-in sr">
          <h2 className="cta-title">
            NAME THE BUILD.
            <br />
            <span className="gc">WE WILL TELL YOU</span>
            <br />
            IF IT IS REAL.
          </h2>
          <p>
            Apps. Websites. CRMs. Custom software. <strong>One brief. One specialist.</strong>
          </p>
          <button className="btn btn-pulse btn-shine" type="button" onClick={openLead} style={{ padding: '18px 48px', fontSize: 14 }}>
            Start a project
            <Arrow />
          </button>
        </div>
      </section>
    </>
  )
}
