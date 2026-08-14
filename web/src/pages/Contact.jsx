import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { useLead } from '../context/LeadContext.jsx'
import { BUDGETS, FAQ } from '../data.js'
import { api } from '../api.js'

const WANT_OPTIONS = [
  'Mobile App',
  'Website',
  'Custom CRM',
  'Custom Software',
  'E-commerce',
  'ERP / Operations',
  'AI / Automation',
  'UI/UX Design',
  'Staff Augmentation',
  'Other',
]
export default function Contact() {
  const { openLead } = useLead()
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', want: '', wantDetails: '', budget: '' })
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [ok, setOk] = useState(false)

  useEffect(() => {
    document.title = 'Contact | Auvyrix Softwares'
  }, [])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setErr('')
    setBusy(true)
    try {
      await api('/api/leads', { method: 'POST', body: form })
      setOk(true)
    } catch (ex) {
      setErr(ex.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Name the build."
        titleDim="We will tell you if it is real."
        sub="Share what you want and the budget. A specialist replies — usually within one business day."
      />
      <section className="page-section">
        <div className="contact-grid page-wide">
          <div className="contact-form-wrap sr">
            {ok ? (
              <div className="form-ok">
                <h2>Brief received.</h2>
                <p>
                  Thank you, <strong>{form.name}</strong>. We will review and reach out.
                </p>
                <button className="btn" type="button" onClick={openLead} style={{ marginTop: 16 }}>
                  Send another brief
                </button>
              </div>
            ) : (
              <form className="pop-form" onSubmit={submit}>
                <h2 style={{ marginBottom: 8 }}>Project brief</h2>
                <p className="page-sub" style={{ marginBottom: 18 }}>
                  Same form that opens a lead for our team.
                </p>
                <div className="fl">
                  <span>Name</span>
                  <input required value={form.name} onChange={set('name')} placeholder="Your name" />
                </div>
                <div className="form-row">
                  <div className="fl">
                    <span>Email</span>
                    <input type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" />
                  </div>
                  <div className="fl">
                    <span>Phone</span>
                    <input value={form.phone} onChange={set('phone')} placeholder="+91 …" />
                  </div>
                </div>
                <div className="fl">
                  <span>What you want</span>
                  <select required value={form.want} onChange={set('want')}>
                    <option value="">Select a solution</option>
                    {WANT_OPTIONS.map((w) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="fl">
                  <span>Tell us more</span>
                  <textarea value={form.wantDetails} onChange={set('wantDetails')} placeholder="What should it do?" />
                </div>
                <div className="fl">
                  <span>Budget</span>
                  <select required value={form.budget} onChange={set('budget')}>
                    <option value="">Select a range</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                {err ? <div className="form-err">{err}</div> : null}
                <button className="btn" disabled={busy} type="submit" style={{ width: '100%', justifyContent: 'center', borderRadius: 12 }}>
                  {busy ? 'Sending…' : 'Send brief'}
                </button>
              </form>
            )}
          </div>
          <div className="faq-list sr">
            <h2 style={{ marginBottom: 18 }}>Questions?</h2>
            {FAQ.map((f, i) => (
              <div className={`fi ${openFaq === i ? 'op' : ''}`} key={f.q}>
                <button className="fq" type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="fq-t">{f.q}</span>
                  <span className="fq-ic">{openFaq === i ? '×' : '+'}</span>
                </button>
                <div className="fa" style={{ maxHeight: openFaq === i ? 240 : 0 }}>
                  <div className="fai">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
