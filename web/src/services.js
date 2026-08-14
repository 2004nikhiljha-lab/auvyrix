export const SERVICE_PAGES = {
  'software-development': {
    slug: 'software-development',
    eyebrow: 'Custom software development',
    h1: 'Custom software development',
    h1Dim: 'for startups and growing businesses.',
    intent: 'People searching for a software development company to build internal tools, CRMs, and business systems — not a mobile app store listing and not a 5-page brochure site.',
    seo: {
      title: 'Software Development Company in Delhi | Auvyrix Softwares',
      description:
        'Software development company in Delhi NCR. Auvyrix Softwares builds affordable custom software, CRMs, and internal tools for startups and businesses across India.',
    },
    intro:
      'Auvyrix Softwares is a software development studio in Delhi NCR serving startups and businesses across India. Off-the-shelf SaaS almost fits — then your team lives in Excel and WhatsApp. We build around the real workflow, at a budget you name up front.',
    forWho: [
      'Founders who need an internal product, not another generic subscription',
      'Sales and ops teams drowning in spreadsheets',
      'Companies whose process is unique enough that Shopify-or-Salesforce clones fail',
    ],
    weBuild: [
      'Custom CRMs and lead pipelines',
      'Admin portals and role-based dashboards',
      'Operations / workflow software',
      'Customer and vendor portals',
      'Integrations between the tools you already pay for',
    ],
    process: [
      { t: 'Brief', d: 'What the software must do, who uses it, and the budget.' },
      { t: 'Scope', d: 'We say what v1 includes — and what we will not fake in the first release.' },
      { t: 'Build', d: 'Design + engineering in one studio. You review working software, not slide decks.' },
      { t: 'Launch', d: 'Training, handover, and a path to v2 without rebuilding from zero.' },
    ],
    faqs: [
      { q: 'Is custom software only for large companies?', a: 'No. Many of our briefs start in the ₹30k–₹1.5L range for a focused v1. Budget tells us the architecture, not whether you “qualify”.' },
      { q: 'Do you rebuild existing tools?', a: 'Yes. We replace spreadsheet stacks, extend a CRM you already use, or rebuild a tool that stalled with another vendor.' },
    ],
  },
  'web-development': {
    slug: 'web-development',
    eyebrow: 'Web application development',
    h1: 'Web application development',
    h1Dim: 'portals, dashboards, and products that run in the browser.',
    intent: 'Search intent is web apps and platforms (login, data, workflows) — distinct from a marketing website.',
    seo: {
      title: 'Web Application Development | Auvyrix Softwares',
      description:
        'Custom web application development for startups and businesses — dashboards, client portals, SaaS-style products, and browser-based tools built by Auvyrix Softwares.',
    },
    intro:
      'A web application is software your team or customers use every day: logins, roles, data, and workflows. We build those products in the browser so you do not need a native app on day one.',
    forWho: [
      'Teams that need a portal their clients can log into',
      'Operators who want one dashboard instead of five tabs',
      'Startups validating a SaaS idea with a real web product',
    ],
    weBuild: [
      'Client and partner portals',
      'Internal web dashboards',
      'Multi-user web products with auth and roles',
      'Lead and operations consoles',
      'API-backed web apps (React + Node)',
    ],
    process: [
      { t: 'Flows', d: 'Who logs in, what they can see, what they can change.' },
      { t: 'UI', d: 'Screens that stay obvious after the tenth use, not only the first demo.' },
      { t: 'Stack', d: 'Modern web front end, secure API, and a database you actually own.' },
      { t: 'Ship', d: 'Staging, launch, and monitoring so the app does not freeze on go-live.' },
    ],
    faqs: [
      { q: 'Web app vs website — what is the difference?', a: 'A website explains and converts. A web app is a product: accounts, data, and work getting done. If people will log in daily, you want web development, not only a brochure site.' },
      { q: 'Can you connect our existing database or CRM?', a: 'Yes. Many web apps start by sitting on top of the data you already have, then we replace the painful parts.' },
    ],
  },
  'mobile-app-development': {
    slug: 'mobile-app-development',
    eyebrow: 'Mobile app development',
    h1: 'iOS and Android app development',
    h1Dim: 'for products that need to live on a phone.',
    intent: 'Search intent is native/cross-platform mobile apps with store listing, payments, and push — not a responsive website.',
    seo: {
      title: 'Mobile App Development (iOS & Android) | Auvyrix Softwares',
      description:
        'Affordable iOS and Android app development for startups and businesses. Auvyrix Softwares builds customer apps with payments, push notifications, and an admin console.',
    },
    intro:
      'If your customers should book, pay, or track from a phone, a mobile app is the product — a responsive website is not a substitute. We scope an MVP that can actually ship to both stores.',
    forWho: [
      'Founders who need iOS + Android without two separate agencies',
      'Brands whose customers already live in WhatsApp and the app store',
      'Teams that need push, payments, and an ops console behind the app',
    ],
    weBuild: [
      'Customer iOS and Android apps',
      'Checkout and in-app payments',
      'Push notifications and session flows',
      'Admin / ops consoles for the same product',
      'Store-ready MVPs with a path to v2',
    ],
    process: [
      { t: 'MVP cut', d: 'What must be in v1 for the stores vs what waits.' },
      { t: 'Design', d: 'Mobile-first UI, not a squashed desktop dashboard.' },
      { t: 'Build', d: 'Cross-platform where it saves budget; native where it matters.' },
      { t: 'Release', d: 'TestFlight / Play internal testing, then production listing support.' },
    ],
    faqs: [
      { q: 'Do you publish to the App Store and Play Store?', a: 'We prepare the builds and listing assets. You keep the developer accounts; we guide the first submission.' },
      { q: 'Can v1 be Android-only to save cost?', a: 'Yes, if that matches how your users actually buy. We will say so on the first call instead of forcing both stores.' },
    ],
  },
  'website-development': {
    slug: 'website-development',
    eyebrow: 'Website development',
    h1: 'Website development',
    h1Dim: 'business sites that look premium and convert.',
    intent: 'Search intent is marketing and company websites — SEO pages, contact, services — distinct from web apps and mobile apps.',
    seo: {
      title: 'Website Development Company | Auvyrix Softwares',
      description:
        'Auvyrix Softwares designs and builds affordable business websites for startups — service pages, contact flows, and high-converting sites that match a premium brand.',
    },
    intro:
      'Your website is often the first proof that the company is real. We build fast, clear marketing sites with proper service pages, contact paths, and SEO basics — not a reused template with a new logo.',
    forWho: [
      'Startups whose brand looks cheaper than the product',
      'Local and India-wide businesses that need to rank for their services',
      'Studios that need a site plus a lead form that actually reaches the team',
    ],
    weBuild: [
      'Company and startup websites',
      'Service and landing pages for search intent',
      'Contact, WhatsApp, and lead-capture flows',
      'SEO foundations: titles, sitemap, schema',
      'Lightweight sites that stay fast on mobile',
    ],
    process: [
      { t: 'Sitemap', d: 'Which pages must exist for Google and for sales.' },
      { t: 'Design', d: 'Type, layout, and motion at the same standard as the product.' },
      { t: 'Build', d: 'Production pages, forms, and analytics you can trust.' },
      { t: 'Launch', d: 'Domain, SSL, sitemap, and a path to add pages without a rebuild.' },
    ],
    faqs: [
      { q: 'Will a new website make us #1 on Google?', a: 'No honest studio can promise rankings. We ship the technical and content foundations; rankings still need reviews, local presence, and links over time.' },
      { q: 'Can the website send leads into a CRM?', a: 'Yes. That is how this studio runs — the public site writes into the same lead pipeline we build for clients.' },
    ],
  },
  'custom-software': {
    slug: 'custom-software',
    eyebrow: 'Custom software',
    h1: 'Custom software',
    h1Dim: 'when off-the-shelf tools almost work — and fail.',
    intent: 'Search intent is bespoke/custom software vs SaaS: unique workflows, CRMs, and internal products built to spec.',
    seo: {
      title: 'Custom Software Company | Auvyrix Softwares',
      description:
        'Custom software for Indian startups and businesses — bespoke CRMs, internal tools, and workflows when generic SaaS does not fit. Built in Delhi NCR by Auvyrix Softwares.',
    },
    intro:
      'Custom software is not “an app for the store.” It is the system your team uses because Excel, WhatsApp, and a rented CRM cannot match how you actually sell or operate.',
    forWho: [
      'Operators whose process is the product advantage',
      'Teams paying for four tools that still do not talk',
      'Founders who were quoted enterprise prices for a focused v1',
    ],
    weBuild: [
      'Bespoke CRMs and pipelines',
      'Internal tools that replace spreadsheets',
      'Workflow software unique to one company',
      'Portals for customers, vendors, or field staff',
      'The unglamorous glue between existing systems',
    ],
    process: [
      { t: 'Map', d: 'We write down the real workflow before we name a stack.' },
      { t: 'Cut v1', d: 'Custom does not mean infinite. We ship the painful 20% first.' },
      { t: 'Own the data', d: 'Your database, your logins, your export — not a locked vendor.' },
      { t: 'Iterate', d: 'v2 is a feature list, not a rebuild.' },
    ],
    faqs: [
      { q: 'How is this different from software development?', a: 'Software development is the whole practice (including apps and platforms). Custom software is the slice that is built only for your workflow — not a template, not a white-label SaaS.' },
      { q: 'Will you lock us into Auvyrix forever?', a: 'No. After paid milestones, you should be able to run and extend the system. We document enough that another engineer can continue.' },
    ],
  },
}

export const SERVICE_SLUGS = Object.keys(SERVICE_PAGES)
