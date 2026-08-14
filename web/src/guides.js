export const GUIDES = [
  {
    slug: 'software-development-pricing-india',
    title: 'Software development pricing in India (startup guide)',
    description:
      'What custom software, websites, and apps typically cost in India — and how Auvyrix Softwares scopes a first version without a fake “package”.',
    date: '14 August 2026',
    services: ['software-development', 'custom-software'],
    sections: [
      {
        h: 'There is no honest flat price',
        p: 'A brochure website and a multi-user CRM are not the same product. Anyone selling “software for ₹X only” without a brief is selling a template. We ask for the outcome and the budget first, then say what v1 can include.',
      },
      {
        h: 'Ranges we actually work in',
        p: 'On our brief form the bands start at ₹10k–₹30k (tight landing or a very small tool), ₹30k–₹60k, ₹70k–₹1.5L, and ₹2 Lakh+. Higher is not “better” — it is more surface area: users, roles, payments, stores, or integrations.',
      },
      {
        h: 'What moves the number',
        p: 'iOS + Android together cost more than a web app. Payments, real-time, and messy legacy data cost more than a clean CRUD admin. Design-from-zero costs more than extending a system that already has a visual language.',
      },
      {
        h: 'How to brief us so the quote is real',
        p: 'Name the users, the job the software must do in week one, and the budget you can actually spend. If the ask and the budget do not match, we say so on the first call — that is cheaper than a six-month stall.',
      },
    ],
  },
  {
    slug: 'website-vs-web-application',
    title: 'Website vs web application: which should a startup build?',
    description:
      'A website explains and converts. A web application is software people log into. Choose the right one before you spend the MVP budget.',
    date: '14 August 2026',
    services: ['website-development', 'web-development'],
    sections: [
      {
        h: 'Website',
        p: 'Service pages, about, contact, SEO, WhatsApp. Visitors do not get an account. This is what Google and sales need so the company looks real. See our website development service if that is the gap.',
      },
      {
        h: 'Web application',
        p: 'Logins, roles, dashboards, data that changes every day. If your team or your customers will work inside the product, you need web application development — not only a pretty homepage.',
      },
      {
        h: 'The usual startup mistake',
        p: 'Paying for a “platform” when you still need a site that ranks, or launching a site with no way to capture and manage leads. Many Auvyrix briefs are both: a marketing site that writes into a CRM.',
      },
      {
        h: 'A simple test',
        p: 'If the user never signs in, start with a website. If they must sign in to get value, start with a web app and a thin marketing site in front of it.',
      },
    ],
  },
  {
    slug: 'mvp-app-development-for-startups',
    title: 'MVP app development for startups',
    description:
      'How to cut an iOS/Android or web MVP that can ship — without building a fake store listing or an infinite backlog.',
    date: '14 August 2026',
    services: ['mobile-app-development', 'software-development'],
    sections: [
      {
        h: 'MVP means shippable, not ugly',
        p: 'An MVP is the smallest product a real user can finish a job in. It is not a pile of screenshots. Payments, login, and one core flow beat ten half-features.',
      },
      {
        h: 'Phone app vs web app first',
        p: 'If customers already live in the app stores and need push or camera, go mobile. If operators and early users will tolerate a browser, a web app is usually cheaper and faster to change.',
      },
      {
        h: 'What we cut',
        p: 'Admin that only the founder uses can wait. Fancy animation can wait. A second platform can wait if 90% of users are on one OS. We write that cut down so nobody is surprised at launch.',
      },
      {
        h: 'After v1',
        p: 'Keep the same codebase and add. The failure mode is rewriting because v1 was a prototype theatre. We build v1 as production with a short, named v2 list.',
      },
    ],
  },
]

export function getGuide(slug) {
  return GUIDES.find((g) => g.slug === slug)
}
