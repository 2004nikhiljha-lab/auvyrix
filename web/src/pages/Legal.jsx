import { Link } from 'react-router'
import PageHero from '../components/PageHero.jsx'
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, WHATSAPP_DISPLAY } from '../site.js'

const PAGES = {
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updated: '14 August 2026',
    blocks: [
      {
        h: 'Who we are',
        p: `${SITE_NAME} (“we”, “us”) is an early-stage software studio operating from India. We are not GST-registered at this time. This policy explains how we handle information when you use ${SITE_URL.replace('https://', '')}, submit a project brief, or contact us by email or WhatsApp.`,
      },
      {
        h: 'What we collect',
        p: 'If you send an enquiry we may collect your name, email, phone number, company context, project description, budget range, and any files or messages you choose to share. If you message us on WhatsApp, Meta/WhatsApp also processes that chat under their own terms. Our site may store a login or lead token in your browser if you use the CRM, and basic technical logs (browser type, pages viewed) needed to run the site.',
      },
      {
        h: 'Why we use it',
        p: 'We use enquiry data only to reply, scope work, prepare a proposal, deliver a project, and keep records of the engagement. We do not sell personal data. We do not run advertising pixels on this site.',
      },
      {
        h: 'Legal basis (India)',
        p: 'We process enquiry data because you asked us to respond (legitimate use of information you submitted) and, where required, with your consent when you send the form or start a WhatsApp chat. You may email us to access, correct, or delete your enquiry data, subject to records we must keep for accounting or dispute resolution.',
      },
      {
        h: 'Sharing',
        p: 'We may share data with infrastructure providers (hosting, email, database) strictly to operate the service, and with professionals (legal, accounting) if required. We will disclose information if Indian law requires it.',
      },
      {
        h: 'Retention',
        p: 'Unused enquiries are typically removed or archived within 24 months. Project files and invoices for paid work are kept as long as needed for delivery, support, and legal record-keeping.',
      },
      {
        h: 'Children',
        p: 'Our services are for businesses and adult clients. We do not knowingly collect data from children.',
      },
      {
        h: 'Contact',
        p: `Privacy requests: ${CONTACT_EMAIL}. WhatsApp: ${WHATSAPP_DISPLAY}.`,
      },
    ],
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms of Service',
    updated: '14 August 2026',
    blocks: [
      {
        h: 'Agreement',
        p: `These terms apply when you browse this website or engage ${SITE_NAME} for software, websites, CRMs, design, or related services. A signed proposal, statement of work, or written WhatsApp/email confirmation of scope and fees forms part of the contract and prevails if it conflicts with this page.`,
      },
      {
        h: 'Early-stage studio / GST',
        p: 'We are an early-stage technology studio and are not registered under GST at this time. Quotes are shown as professional service fees. If we become GST-registered later, any tax that then applies will be stated before you are asked to pay. We do not issue GST invoices until we hold a GSTIN.',
      },
      {
        h: 'Services',
        p: 'Work is custom and scoped from your brief. Timelines and features depend on the budget and information you provide. We may decline work that is illegal, harmful, or a poor fit.',
      },
      {
        h: 'Your responsibilities',
        p: 'You must provide timely feedback, content, access, and truthful requirements. You confirm you have rights to materials you send us. Delay on your side may move the schedule.',
      },
      {
        h: 'Fees and payment',
        p: 'Fees are typically billed in milestones (for example discovery, design, build, launch). Work for a milestone starts after that milestone is paid, unless we agree otherwise in writing. Unpaid invoices may pause delivery.',
      },
      {
        h: 'Intellectual property',
        p: 'Until fees for a deliverable are paid in full, we retain IP in that work. After full payment for a scoped deliverable, you receive a licence (or assignment, if the proposal says so) to use that deliverable for your business. We retain the right to reuse general know-how, non-secret patterns, and tools we already owned. Third-party software (libraries, APIs, app-store accounts) stays under its own licences.',
      },
      {
        h: 'No ranking or revenue guarantee',
        p: 'We do not guarantee Google rankings, app-store featured placement, lead volume, or revenue. SEO and marketing outcomes depend on competition, content, budget, and factors outside our control.',
      },
      {
        h: 'Limitation of liability',
        p: 'To the extent permitted by Indian law, our total liability for a project is limited to the fees you paid us for that project in the three months before the claim. We are not liable for indirect loss, lost profits, or data loss except where the law does not allow that limit.',
      },
      {
        h: 'Governing law',
        p: 'These terms are governed by the laws of India. Courts in India have exclusive jurisdiction, unless a signed proposal names another venue.',
      },
      {
        h: 'Contact',
        p: `${CONTACT_EMAIL} · ${WHATSAPP_DISPLAY}`,
      },
    ],
  },
  disclaimer: {
    eyebrow: 'Legal',
    title: 'Disclaimer',
    updated: '14 August 2026',
    blocks: [
      {
        h: 'Startup disclosure',
        p: `${SITE_NAME} is an early-stage software studio. We currently do not hold GST registration, a public CIN display, or third-party quality certifications. Nothing on this website is a government licence, ISO mark, or investment solicitation.`,
      },
      {
        h: 'Website content',
        p: 'Case studies, timelines, and “typical” ranges are illustrative. Your result will differ. Screens, names, and metrics may be anonymised or composite where needed to protect clients.',
      },
      {
        h: 'No professional advice',
        p: 'Content here is general information about software services. It is not legal, tax, accounting, or investment advice. Confirm GST, incorporation, and contracting with your own advisor.',
      },
      {
        h: 'External services',
        p: 'WhatsApp, email hosts, app stores, and cloud providers are third parties. Their outages or policies are outside our control.',
      },
      {
        h: 'Contact',
        p: `${CONTACT_EMAIL} · WhatsApp ${WHATSAPP_DISPLAY}`,
      },
    ],
  },
  refund: {
    eyebrow: 'Legal',
    title: 'Refund & cancellation',
    updated: '14 August 2026',
    blocks: [
      {
        h: 'Custom work',
        p: 'Software and design are made to your brief. Once a paid milestone has started, that milestone fee is generally non-refundable because time and production have already been used. Unused future milestones can be cancelled with written notice and will not be charged.',
      },
      {
        h: 'Before work starts',
        p: 'If you cancel in writing before we begin the first paid milestone, we refund that unused advance (minus any non-recoverable third-party cost we already paid with your approval, such as licences).',
      },
      {
        h: 'Change of scope',
        p: 'New features after sign-off are a change request, not a defect. They are quoted separately. Asking for extra work is not grounds for a refund of work already delivered.',
      },
      {
        h: 'Quality issues',
        p: 'If a paid deliverable materially fails the written scope, we will remediate within a reasonable period. A refund is considered only if we cannot reasonably complete the agreed scope and only for the undelivered portion.',
      },
      {
        h: 'How to cancel',
        p: `Email ${CONTACT_EMAIL} from the address on your brief, or message WhatsApp ${WHATSAPP_DISPLAY}. We will confirm in writing.`,
      },
    ],
  },
}

export default function LegalPage({ slug }) {
  const page = PAGES[slug]
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} sub={`Last updated ${page.updated}.`} />
      <section className="page-section">
        <article className="legal-prose page-wide sr">
          {page.blocks.map((b) => (
            <section key={b.h}>
              <h2>{b.h}</h2>
              <p>{b.p}</p>
            </section>
          ))}
          <p className="legal-back">
            <Link to="/contact">Contact</Link>
            {' · '}
            <Link to="/privacy">Privacy</Link>
            {' · '}
            <Link to="/terms">Terms</Link>
            {' · '}
            <Link to="/disclaimer">Disclaimer</Link>
            {' · '}
            <Link to="/refund-policy">Refunds</Link>
          </p>
        </article>
      </section>
    </>
  )
}
