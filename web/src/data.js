export const BUDGETS = ['₹10k – ₹30k', '₹30k – ₹60k', '₹70k – ₹1.5L', '₹2 Lakh+', 'Other']

export const SERVICES = [
  { href: '/services/mobile-app-development', ico: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', h: 'MOBILE APPS', d: 'Native and cross-platform iOS & Android products built for growth, payments, and retention.', tag: 'iOS & Android' },
  { href: '/services/website-development', ico: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', h: 'WEBSITES', d: 'Premium marketing sites and web platforms that convert — not templates with a new logo.', tag: 'High-converting' },
  { href: '/services/web-development', ico: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', h: 'CUSTOM CRMS', d: 'Pipelines, lead capture, follow-ups, and reporting designed around how your team actually sells.', tag: 'Sales-ready' },
  { href: '/services/software-development', ico: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', h: 'CUSTOM SOFTWARE', d: 'Internal tools, portals, and workflows that replace spreadsheets and disconnected vendors.', tag: 'Bespoke' },
  { href: '/services/web-development', ico: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0', h: 'E-COMMERCE', d: 'Storefronts, catalogues, inventory, and checkout flows built to take orders at scale.', tag: 'Commerce' },
  { href: '/services/software-development', ico: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z', h: 'ERP / OPERATIONS', d: 'Operations software that connects finance, inventory, field teams, and leadership dashboards.', tag: 'Ops layer' },
  { href: '/services/software-development', ico: 'M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4zM4 14a8 8 0 0016 0', h: 'AI & AUTOMATION', d: 'Agents, document workflows, and automations that remove repetitive work from your business.', tag: 'AI-ready' },
  { href: '/services/website-development', ico: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z', h: 'UI / UX DESIGN', d: 'Product design that feels premium on first glance and obvious on first use.', tag: 'Design system' },
]

export const WHO = [
  { t: 'Founders shipping the first product', d: 'You need a real app or platform, not a freelancer who disappears after sprint one.' },
  { t: 'Teams drowning in spreadsheets', d: 'Sales, ops, and support live in WhatsApp and Excel. We replace that with a CRM or custom system.' },
  { t: 'Brands that look cheaper than they are', d: 'Your product is premium. Your website is not. We close that gap.' },
  { t: 'Companies with a unique workflow', d: 'Off-the-shelf SaaS almost works. Custom software actually does.' },
  { t: 'Operators scaling past 10 people', d: 'Process is breaking. You need software that matches how the business runs now.' },
  { t: 'Enterprises needing a specialist partner', d: 'You want one studio that can design, build, and maintain — not 6 vendors.' },
]

export const FAQ = [
  { q: 'Are you GST registered?', a: 'Not yet. Auvyrix Softwares is an early-stage studio and does not hold GST registration at this time. Quotes are professional service fees. We do not issue GST invoices until we have a GSTIN. If registration happens later, any tax that then applies will be told to you before payment.' },
  { q: 'What happens after I submit the form?', a: 'A brief lands with our team instantly. An Auvyrix specialist reviews what you want and your budget, then contacts you — usually within one business day — with a clear next step. You can also email codekraft@outlook.com or WhatsApp +91 97179 17758.' },
  { q: 'Do you only build from scratch?', a: 'No. We ship new products, rebuild legacy tools, and extend existing CRMs or apps. Tell us what you want — we recommend the fastest path that still looks and feels premium.' },
  { q: 'What does “100+ software solutions” mean?', a: 'We deliver across a catalogue of proven product types — apps, websites, CRMs, ERPs, commerce, automation, and custom systems — then tailor each one to your workflow instead of selling a generic package.' },
  { q: 'How do you use the budget field?', a: 'Budget tells us which architecture, team size, and timeline are realistic. We never force a package. If the budget and the ask do not match, we say so on the first call.' },
  { q: 'Can you work with our in-house team?', a: 'Yes. Many clients use us as a specialist product studio alongside internal engineers — design, delivery, or a full build.' },
  { q: 'How long does a typical project take?', a: 'Marketing sites: weeks. CRMs and apps: typically 8–16 weeks for an MVP. Complex custom platforms are scoped after the first conversation.' },
  { q: 'Do you support after launch?', a: 'Yes. Maintenance, feature sprints, and SLA-based support are available so the product does not freeze the day it goes live.' },
  { q: 'Is the consultation a sales pitch?', a: 'No. You tell us the name of the initiative, what you want built, and the budget. We tell you what is possible, what we would not do, and whether we are the right partner.' },
]

export const WORK = [
  {
    slug: 'auvyrix-lead-crm',
    client: 'Auvyrix Lead CRM',
    type: 'Website + Custom CRM',
    service: 'software-development',
    result: 'Website briefs land in the same CRM pipeline the studio uses to follow up — no spreadsheet in between.',
    detail: 'Public marketing site, login CRM, filters, notes, and a Node + MongoDB API on Hostinger with Atlas.',
    seoDescription:
      'Case study: Auvyrix Softwares built its own website and lead CRM — React, Node.js, MongoDB Atlas, JWT auth, and WhatsApp enquiry flow.',
    problem:
      'Leads from a static site die in inbox or Excel. The studio needed one place to capture name, ask, and budget — and a dashboard to manage the pipeline.',
    solution:
      'We shipped a public website with a project brief form and a protected CRM (overview, lead table, status, notes). Both talk to the same Express API and MongoDB Atlas database.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'Hostinger'],
    features: [
      'Public lead form on the website',
      'Admin login and session',
      'Lead list with search and filters',
      'Status pipeline and internal notes',
      'WhatsApp enquiry button with a preset message',
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
    screenshots: [
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85', alt: 'Marketing website layout for Auvyrix Softwares' },
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85', alt: 'CRM-style dashboard and metrics UI' },
      { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85', alt: 'Team reviewing a lead pipeline on laptops' },
    ],
  },
  {
    slug: 'northpeak-studio-crm',
    client: 'Northpeak Studio',
    type: 'Custom CRM',
    service: 'software-development',
    result: 'Closed two deals in week one that would have died in Excel.',
    detail: 'Sales pipeline, WhatsApp follow-ups, and role-based dashboards for a 12-person team.',
    seoDescription: 'Custom CRM for a 12-person sales team — pipeline, WhatsApp follow-ups, and role-based dashboards by Auvyrix Softwares.',
    problem: 'Leads lived in Excel and personal WhatsApp chats. Nobody could see the real pipeline or who owned the next follow-up.',
    solution:
      'A CRM built around their stages, not a generic clone — capture, owners, WhatsApp-oriented follow-ups, and a dashboard leadership actually opens.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST API'],
    features: ['Pipeline stages', 'Lead capture from the website', 'Follow-up notes', 'Role-based views', 'Weekly pipeline stats'],
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85',
    screenshots: [
      { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85', alt: 'Sales team working from a shared pipeline' },
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85', alt: 'CRM dashboard with pipeline metrics' },
    ],
  },
  {
    slug: 'helix-labs-app',
    client: 'Helix Labs',
    type: 'Mobile App',
    service: 'mobile-app-development',
    result: 'iOS + Android live with payments and push in one MVP cycle.',
    detail: 'Customer app with checkout, notifications, and an admin console for ops.',
    seoDescription: 'iOS and Android MVP with payments, push notifications, and an admin console — mobile app development by Auvyrix Softwares.',
    problem: 'The brand needed a real customer app on both stores. A previous vendor left a prototype that could not take payments or send push.',
    solution: 'A scoped MVP: accounts, checkout, push, and an ops console. Both stores in one cycle instead of an endless redesign.',
    tech: ['React Native', 'Node.js', 'Push notifications', 'Payments'],
    features: ['iOS and Android builds', 'In-app checkout', 'Push notifications', 'Admin console', 'Store listing support'],
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85',
    screenshots: [
      { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85', alt: 'Mobile app screens on a smartphone' },
      { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85', alt: 'Product team reviewing a mobile prototype' },
    ],
  },
  {
    slug: 'orbit-retail-website',
    client: 'Orbit Retail',
    type: 'Website + Commerce',
    service: 'website-development',
    result: 'Brand finally matched the product — and checkout stopped leaking.',
    detail: 'Premium storefront, catalogue sync, and inventory that matches the warehouse.',
    seoDescription: 'Premium retail website and checkout rebuild — catalogue, inventory sync, and conversion-focused pages by Auvyrix Softwares.',
    problem: 'The live site looked dated. Checkout leaked. Inventory on the site did not match the warehouse.',
    solution: 'A new storefront and catalogue flow, then checkout and stock that follow the real warehouse — not a theme fighting the data.',
    tech: ['React', 'Node.js', 'Catalogue API', 'Checkout'],
    features: ['Premium marketing + storefront', 'Catalogue sync', 'Checkout rebuild', 'Inventory accuracy', 'Mobile-first product pages'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    screenshots: [
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85', alt: 'Analytics and commerce dashboard' },
      { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85', alt: 'Retail brand and product presentation' },
    ],
  },
  {
    slug: 'fieldops-india',
    client: 'FieldOps India',
    type: 'Custom Software',
    service: 'web-development',
    result: 'One source of truth across departments that never shared tools.',
    detail: 'Workflow mapping first, then a single operations layer for finance, field, and leadership.',
    seoDescription: 'Custom operations web software for field, finance, and leadership — one system replacing disconnected department tools.',
    problem: 'Finance, field, and leadership each had a different tool. Nothing talked to anything. Reporting was a monthly reconstruction.',
    solution: 'Map the real workflow first, then one operations layer with the views each team needs — not another login to ignore.',
    tech: ['React', 'Node.js', 'MongoDB', 'Role-based access'],
    features: ['Shared operations database', 'Field and finance views', 'Leadership dashboard', 'Role-based access', 'Replace ad-hoc spreadsheets'],
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85',
    screenshots: [
      { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85', alt: 'Operations team collaborating around software' },
      { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=85', alt: 'Leadership reviewing operational reports' },
    ],
  },
]

export const STEPS = [
  {
    n: '01',
    t: 'Capture the brief',
    h: 'NAME. ASK. BUDGET.',
    p: 'We start with what you want and what you can spend — not a 40-page RFP.',
    points: ['Brief lands with the studio instantly', 'Specialist reviews within a business day', 'Honest fit — we decline bad-scope work'],
  },
  {
    n: '02',
    t: 'Design the product',
    h: 'PREMIUM UI. OBVIOUS UX.',
    p: 'Interfaces get the same standard as a flagship consumer brand: tight type, restrained motion, zero clutter.',
    points: ['Product design before waste code', 'Flows mapped to how your team works', 'Reviewable prototypes, not slideware'],
  },
  {
    n: '03',
    t: 'Build & launch',
    h: 'SHIP THE SYSTEM. KEEP IT ALIVE.',
    p: 'Apps, websites, CRMs, custom platforms — engineered for the budget you named, with a path to v2.',
    points: ['Production-grade web & mobile', 'Admin for your operators', 'Support and iteration after go-live'],
  },
]

export const CHATS = [
  {
    av: 'RK',
    nm: 'Riya K.',
    rl: 'Founder, Northpeak',
    tag: 'Custom CRM',
    msgs: [
      { s: 0, t: '10:12 AM', txt: 'We are still tracking leads in Excel. It is a mess.' },
      { s: 1, t: '10:14 AM', txt: 'We can replace that with a CRM built around your pipeline — not a generic one.' },
      { s: 0, t: 'Week 8', txt: 'Team is live. First week we closed two deals we would have lost in the sheet.' },
      { s: 1, t: '', txt: '<strong>That is the point of custom software.</strong> It fits how you sell.' },
    ],
  },
  {
    av: 'AM',
    nm: 'Arjun M.',
    rl: 'CEO, Helix Labs',
    tag: 'Mobile App',
    msgs: [
      { s: 0, t: '9:02 AM', txt: 'Need iOS + Android. Payments. Push. Can you actually ship?' },
      { s: 1, t: '9:05 AM', txt: 'Yes. Scope the MVP against your budget so v1 is real, not a prototype graveyard.' },
      { s: 0, t: 'Launch', txt: 'App is on both stores. Retention in week 1 is already above our last vendor.' },
    ],
  },
  {
    av: 'SQ',
    nm: 'Sana Q.',
    rl: 'Director, Orbit Retail',
    tag: 'Website',
    msgs: [
      { s: 0, t: '4:40 PM', txt: 'Our site looks like 2019. Brand is not matching.' },
      { s: 1, t: '4:42 PM', txt: 'We rebuild the surface and the checkout. Premium first impression, then conversion.' },
      { s: 0, t: 'Go-live', txt: 'Clients mentioned the new site on three sales calls this week.' },
    ],
  },
  {
    av: 'VK',
    nm: 'Vikram K.',
    rl: 'Ops Head',
    tag: 'Custom Software',
    msgs: [
      { s: 0, t: '11:20 AM', txt: 'Every department has a different tool. Nothing talks to anything.' },
      { s: 1, t: '11:22 AM', txt: 'We map the workflow first. Then we build one system, not another login.' },
      { s: 0, t: 'Month 3', txt: '<strong>Operations finally has one source of truth.</strong>' },
    ],
  },
  {
    av: 'NP',
    nm: 'Neha P.',
    rl: 'Product Lead',
    tag: 'AI Automation',
    msgs: [
      { s: 0, t: '8:15 AM', txt: 'Support is drowning in the same 40 tickets every day.' },
      { s: 1, t: '8:17 AM', txt: 'We automate the repeatable layer. Humans keep the exceptions.' },
      { s: 0, t: 'Week 4', txt: 'Volume down. Team actually has time to talk to customers.' },
    ],
  },
  {
    av: 'HS',
    nm: 'Harsh S.',
    rl: 'Founder',
    tag: 'E-commerce',
    msgs: [
      { s: 0, t: '2:10 PM', txt: 'Shopify theme is fighting our catalogue. Inventory is wrong.' },
      { s: 1, t: '2:12 PM', txt: 'Then we do not fight the theme. We build the store around the catalogue.' },
      { s: 0, t: 'Launch', txt: 'Checkout is clean. Stock finally matches the warehouse.' },
    ],
  },
]
