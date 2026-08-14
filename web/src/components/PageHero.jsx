import { useLead } from '../context/LeadContext.jsx'

export default function PageHero({ eyebrow, title, titleDim, sub, cta }) {
  const { openLead } = useLead()
  return (
    <header className="page-hero">
      <div className="page-hero-glow" aria-hidden />
      <div className="page-hero-inner sr on">
        {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
        <h1 className="hf page-h">
          {title}
          {titleDim ? (
            <>
              <br />
              <span className="dim">{titleDim}</span>
            </>
          ) : null}
        </h1>
        {sub ? <p className="page-sub">{sub}</p> : null}
        {cta ? (
          <button className="btn" type="button" onClick={openLead} style={{ marginTop: 28 }}>
            {cta}
          </button>
        ) : null}
      </div>
    </header>
  )
}
