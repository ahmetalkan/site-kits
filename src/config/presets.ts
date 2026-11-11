export type Vertical = 'clinic' | 'trade' | 'charter'

export interface Palette {
  bg: string
  surface: string
  ink: string
  muted: string
  brand: string
  brandInk: string
  accent: string
  border: string
}

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  body: string
}

export interface Preset {
  slug: string
  site: string
  demoUrl: string
  brand: string
  themeName: string
  vertical: Vertical
  schemaType: string
  locale: 'en' | 'de'
  palette: Palette
  seo: { title: string; description: string }
  hero: {
    eyebrow: string
    title: string
    body: string
    primaryCta: string
    primaryHref: string
    secondaryCta: string
    secondaryHref: string
  }
  stats: { value: string; label: string }[]
  services: { title: string; body: string; icon: string }[]
  about: { title: string; body: string[]; bullets: string[] }
  faqs: { q: string; a: string }[]
  contact: {
    title: string
    body: string
    email: string
    phone: string
    address: string
    hours: string
  }
  footer: { phrase: string; label: string; href: string }
  posts: Post[]
}

const p = (palette: Palette): Palette => palette

export const presets: Preset[] = [
  {
    slug: 'sleep',
    site: 'https://sleepclinicdirectory.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/sleep/',
    brand: 'SleepClinicDirectory',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'MedicalClinic',
    locale: 'en',
    palette: p({
      bg: '#F7F4EE',
      surface: '#FFFDF8',
      ink: '#1C2433',
      muted: '#5C6475',
      brand: '#2F4B7C',
      brandInk: '#F7F4EE',
      accent: '#C9A227',
      border: '#E3DDD1',
    }),
    seo: {
      title: 'SleepClinicDirectory — Find an accredited sleep clinic',
      description:
        'A curated directory of sleep centers, home sleep testing providers and board-certified sleep physicians.',
    },
    hero: {
      eyebrow: 'Sleep clinic directory',
      title: 'Sleep better, starting with the right clinic.',
      body: 'Find accredited sleep centers, home sleep testing providers and board-certified sleep physicians — with plain-language guidance on what each service actually involves.',
      primaryCta: 'Find a clinic',
      primaryHref: '/contact/',
      secondaryCta: 'How it works',
      secondaryHref: '/about/',
    },
    stats: [
      { value: '21,000+', label: 'clinicians listed' },
      { value: '6', label: 'countries covered' },
      { value: '50', label: 'US states' },
    ],
    services: [
      {
        title: 'Sleep studies',
        body: 'Overnight polysomnography in accredited labs, with clear notes on what is measured and what to expect.',
        icon: 'moon',
      },
      {
        title: 'Home sleep tests',
        body: 'Portable apnea testing for eligible patients, including setup guidance and follow-up pathways.',
        icon: 'home',
      },
      {
        title: 'CPAP setup',
        body: 'Mask fitting, pressure titration and follow-up support from clinicians who work with sleep therapy daily.',
        icon: 'wind',
      },
      {
        title: 'Insomnia care',
        body: 'CBT-I and behavioural sleep medicine for people who cannot switch off at night.',
        icon: 'spark',
      },
      {
        title: 'Pediatric sleep',
        body: 'Specialists for children with sleep-disordered breathing, parasomnias and bedtime resistance.',
        icon: 'heart',
      },
      {
        title: 'Telehealth',
        body: 'Remote consultations for follow-ups, second opinions and areas without a local sleep lab.',
        icon: 'screen',
      },
    ],
    about: {
      title: 'A directory built around clarity.',
      body: [
        'Sleep medicine is full of acronyms. A referral for a “PSG” does not tell you whether you will sleep in a lab, what it costs, or how long the results take.',
        'We publish structured clinic profiles: services, accreditation, insurance notes and the practical details that make a decision easier.',
      ],
      bullets: [
        'Accredited centers and board-certified physicians',
        'Insurance and Medicare notes on every profile',
        'Home test versus lab study, explained',
        'Telehealth options for follow-up care',
      ],
    },
    faqs: [
      {
        q: 'Do I need a referral to see a sleep specialist?',
        a: 'It depends on your insurance and the clinic. Many centers accept self-referrals; others require a primary-care referral for coverage. Each profile notes the common pathway.',
      },
      {
        q: 'What is a home sleep test?',
        a: 'A portable device you take home for one night. It measures breathing, oxygen and effort, and is often used for suspected obstructive sleep apnea in otherwise healthy adults.',
      },
      {
        q: 'How much does a sleep study cost?',
        a: 'Costs vary widely by country and coverage. Lab studies are usually more expensive than home tests. Ask for the self-pay price and the insurance estimate in writing.',
      },
      {
        q: 'How do I choose a clinic?',
        a: 'Start with accreditation, the services you need, waiting time and coverage. Distance matters less if follow-up can be done by telehealth.',
      },
    ],
    contact: {
      title: 'Tell us what you need.',
      body: 'We will point you to the right clinic or provider, or help you compare two options.',
      email: 'hello@sleepclinicdirectory.com',
      phone: '+1 (555) 010-0000',
      address: 'Remote consultations across the United States',
      hours: 'Monday to Friday, 9am–5pm ET',
    },
    footer: {
      phrase: 'Powered by',
      label: 'SleepClinicDirectory',
      href: 'https://sleepclinicdirectory.com/',
    },
    posts: [
      {
        slug: 'prepare-for-a-sleep-study',
        title: 'How to prepare for a sleep study',
        description: 'What to bring, what to avoid and how to make an overnight lab study feel less strange.',
        date: '2026-10-02',
        body: '<p>A sleep study is not a test you can cram for. The goal is an ordinary night, measured. Pack loose clothing, your usual pillow if allowed, and any medication you take at night.</p><p>Skip caffeine after noon and avoid alcohol — both change the sleep you are trying to measure. Arrive early enough to settle in, and tell the technician if you usually sleep on your side or need a fan.</p>',
      },
      {
        slug: 'home-test-or-lab-study',
        title: 'Home sleep test or lab study?',
        description: 'A practical comparison of portable testing and overnight polysomnography.',
        date: '2026-09-18',
        body: '<p>Home tests are convenient and cheaper, but they measure fewer channels. They work best for adults with a high likelihood of obstructive sleep apnea and no major heart or lung disease.</p><p>A lab study is the better choice when the diagnosis is unclear, when central apnea or a movement disorder is suspected, or when treatment needs titration overnight.</p>',
      },
    ],
  },
  {
    slug: 'doctors',
    site: 'https://findsleepdoctors.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/doctors/',
    brand: 'FindSleepDoctors',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'Physician',
    locale: 'en',
    palette: p({
      bg: '#F4F7F6',
      surface: '#FFFFFF',
      ink: '#122B2A',
      muted: '#55706D',
      brand: '#0F6B5F',
      brandInk: '#FFFFFF',
      accent: '#E0A458',
      border: '#D8E3E0',
    }),
    seo: {
      title: 'FindSleepDoctors — Find a sleep doctor near you',
      description:
        'Search sleep physicians, clinics and telehealth providers by city, condition and insurance.',
    },
    hero: {
      eyebrow: 'Sleep physician search',
      title: 'Find a sleep doctor who listens.',
      body: 'Search by city, condition or insurance. Compare credentials, wait times and telehealth options before you book.',
      primaryCta: 'Search doctors',
      primaryHref: '/contact/',
      secondaryCta: 'What we verify',
      secondaryHref: '/about/',
    },
    stats: [
      { value: '21,000+', label: 'clinicians' },
      { value: '6', label: 'countries' },
      { value: '50', label: 'US states' },
    ],
    services: [
      {
        title: 'Physician search',
        body: 'Filter by specialty, location, language and insurance. Every listing shows the source of the credential.',
        icon: 'search',
      },
      {
        title: 'Clinic profiles',
        body: 'Services, accreditation, waiting times and practical notes, not just a name and a phone number.',
        icon: 'building',
      },
      {
        title: 'Insurance guidance',
        body: 'Plain-language notes on referral rules, coverage and self-pay estimates.',
        icon: 'shield',
      },
      {
        title: 'Telehealth visits',
        body: 'Remote consultations for follow-ups and second opinions, including cross-state licensing notes.',
        icon: 'screen',
      },
      {
        title: 'Second opinions',
        body: 'A structured way to compare a diagnosis, a study or a treatment plan before committing.',
        icon: 'spark',
      },
      {
        title: 'Travel care',
        body: 'Find a clinician who can support CPAP or insomnia care while you are away from home.',
        icon: 'compass',
      },
    ],
    about: {
      title: 'Search that respects your time.',
      body: [
        'Most doctor directories stop at a name and a map pin. You still have to call three offices to learn whether they treat insomnia, accept your insurance or have an opening this year.',
        'We collect the details that decide whether a visit is worth the trip — and we show where each detail came from.',
      ],
      bullets: [
        'Board certification and specialty',
        'Languages and telehealth availability',
        'Insurance and referral notes',
        'Source and last-verified date',
      ],
    },
    faqs: [
      {
        q: 'What does a sleep doctor treat?',
        a: 'Sleep physicians diagnose and manage sleep apnea, insomnia, restless legs, narcolepsy, parasomnias and circadian rhythm disorders.',
      },
      {
        q: 'Do I need a sleep study before booking?',
        a: 'Not always. Many clinicians will assess symptoms first and decide whether a home test, lab study or behavioural treatment is appropriate.',
      },
      {
        q: 'Can I see a sleep doctor online?',
        a: 'Yes for many follow-ups and initial consultations. Licensing rules vary by state and country, so check the clinician’s permitted locations.',
      },
      {
        q: 'How are doctors verified?',
        a: 'We match names against public licensing and credential sources, then record the source and the date it was checked.',
      },
    ],
    contact: {
      title: 'Need help choosing?',
      body: 'Send us your city, insurance and the reason for the visit. We will narrow the list.',
      email: 'hello@findsleepdoctors.com',
      phone: '+1 (555) 010-0000',
      address: 'Remote support across six countries',
      hours: 'Monday to Friday, 9am–5pm ET',
    },
    footer: {
      phrase: 'Built by',
      label: 'FindSleepDoctors',
      href: 'https://findsleepdoctors.com/',
    },
    posts: [
      {
        slug: 'when-to-see-a-sleep-doctor',
        title: 'When to see a sleep doctor',
        description: 'Four signals that a primary-care visit is not enough.',
        date: '2026-10-06',
        body: '<p>Loud snoring is common; waking with a sore throat, headaches or a partner’s report of paused breathing is not. Daytime sleepiness that persists despite seven or eight hours in bed deserves a clinical look.</p><p>Book a consultation if symptoms affect work, driving or mood, or if you have already tried the obvious fixes without relief.</p>',
      },
      {
        slug: 'questions-before-booking',
        title: 'Questions to ask before booking',
        description: 'A short list that saves a wasted appointment.',
        date: '2026-09-22',
        body: '<p>Ask whether the clinician treats your specific problem, whether they accept your insurance, and what the first visit includes. If a sleep study is likely, ask which type they recommend and why.</p><p>Also ask who handles follow-up: the physician, a nurse practitioner, a CPAP technician or a remote team.</p>',
      },
    ],
  },
  {
    slug: 'au',
    site: 'https://sleepclinicsau.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/au/',
    brand: 'SleepClinics AU',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'MedicalClinic',
    locale: 'en',
    palette: p({
      bg: '#F6F3EC',
      surface: '#FFFDF7',
      ink: '#22301F',
      muted: '#5E6B57',
      brand: '#3E6B4F',
      brandInk: '#FFFFFF',
      accent: '#D9A441',
      border: '#E0DACB',
    }),
    seo: {
      title: 'SleepClinics AU — Sleep clinics across Australia',
      description:
        'Find sleep clinics, sleep studies and CPAP support in every Australian state and territory.',
    },
    hero: {
      eyebrow: 'Australian sleep clinics',
      title: 'A sleep clinic in every Australian state.',
      body: 'From bulk-billing options to private labs and home testing, compare what is available where you live — without the runaround.',
      primaryCta: 'Find a clinic',
      primaryHref: '/contact/',
      secondaryCta: 'Medicare basics',
      secondaryHref: '/about/',
    },
    stats: [
      { value: '180+', label: 'clinics listed' },
      { value: '8', label: 'states & territories' },
      { value: '1–3', label: 'weeks typical wait' },
    ],
    services: [
      {
        title: 'Sleep studies',
        body: 'Overnight lab studies and home testing, with notes on Medicare and private billing.',
        icon: 'moon',
      },
      {
        title: 'CPAP therapy',
        body: 'Mask fitting, machine setup and follow-up support from Australian providers.',
        icon: 'wind',
      },
      {
        title: 'Paediatric sleep',
        body: 'Clinics experienced with children, from infants to teenagers.',
        icon: 'heart',
      },
      {
        title: 'CBT-I',
        body: 'Structured insomnia treatment without medication, available in person and online.',
        icon: 'spark',
      },
      {
        title: 'Home testing',
        body: 'Portable sleep apnea testing for eligible patients, including rural and remote options.',
        icon: 'home',
      },
      {
        title: 'Medicare guidance',
        body: 'Plain-language notes on referrals, rebates and what a study may cost out of pocket.',
        icon: 'shield',
      },
    ],
    about: {
      title: 'Built for the Australian system.',
      body: [
        'A sleep study in Australia can be a public hospital wait, a private lab booking or a home test posted to your door. The right choice depends on your symptoms, your GP and your coverage.',
        'We map the options by state, note the common referral pathways and keep the practical details in one place.',
      ],
      bullets: [
        'Public and private clinic options',
        'Medicare and private billing notes',
        'Rural and remote telehealth',
        'Paediatric and adult services',
      ],
    },
    faqs: [
      {
        q: 'Is a sleep study covered by Medicare?',
        a: 'Some studies attract a Medicare rebate when criteria are met, often through a specialist referral. Private labs may charge above the rebate. Ask for a written estimate.',
      },
      {
        q: 'Do I need a GP referral?',
        a: 'Many private clinics accept direct bookings, but a referral can affect your rebate. Check both the clinic and your insurer before booking.',
      },
      {
        q: 'What happens at a sleep clinic?',
        a: 'You arrive in the evening, have sensors applied, sleep overnight and leave in the morning. Results are reviewed by a sleep physician and sent to your referrer.',
      },
      {
        q: 'Can I do a home test instead?',
        a: 'Sometimes. Home tests suit adults with a high likelihood of obstructive sleep apnea. Complex cases still need a lab study.',
      },
    ],
    contact: {
      title: 'Find the right clinic.',
      body: 'Tell us your state, symptoms and whether you have a referral. We will shortlist options.',
      email: 'hello@sleepclinicsau.com',
      phone: '+61 (02) 5550 0000',
      address: 'Supporting patients across Australia',
      hours: 'Monday to Friday, 9am–5pm AEST',
    },
    footer: {
      phrase: 'Powered by',
      label: 'SleepClinics AU',
      href: 'https://sleepclinicsau.com/',
    },
    posts: [
      {
        slug: 'medicare-and-sleep-studies',
        title: 'Medicare and sleep studies: what is covered',
        description: 'Rebates, referrals and the gap you may still pay.',
        date: '2026-10-04',
        body: '<p>Medicare covers some sleep study item numbers when specific criteria are met, usually with a specialist referral. The rebate is not the same as the clinic’s fee, so a gap can remain.</p><p>Ask the clinic for the item number, the fee and the expected out-of-pocket amount before you book.</p>',
      },
      {
        slug: 'first-night-at-a-sleep-clinic',
        title: 'Your first night at a sleep clinic',
        description: 'What to bring and what the sensors actually do.',
        date: '2026-09-15',
        body: '<p>Expect a private room, a technician who applies sensors to your head, face, chest and legs, and a night of broken but usable sleep. Bring comfortable clothing and your usual pillow if the clinic allows it.</p><p>In the morning the sensors come off and you go home. Results usually take one to two weeks.</p>',
      },
    ],
  },
  {
    slug: 'de',
    site: 'https://schlafklinikfinder.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/de/',
    brand: 'Schlafklinikfinder',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'MedicalClinic',
    locale: 'de',
    palette: p({
      bg: '#F5F7FA',
      surface: '#FFFFFF',
      ink: '#1B2430',
      muted: '#5A6678',
      brand: '#2B5B8A',
      brandInk: '#FFFFFF',
      accent: '#C96F4A',
      border: '#DCE3EC',
    }),
    seo: {
      title: 'Schlafklinikfinder — Schlaflabore und Schlafmediziner finden',
      description:
        'Schlaflabore, Schlafmediziner und ambulante Schlafdiagnostik in Deutschland vergleichen.',
    },
    hero: {
      eyebrow: 'Schlaflabore in Deutschland',
      title: 'Die passende Schlafklinik finden.',
      body: 'Schlaflabore, Schlafmediziner und ambulante Diagnostik — mit klaren Angaben zu Leistungen, Kosten und Wartezeiten.',
      primaryCta: 'Klinik finden',
      primaryHref: '/contact/',
      secondaryCta: 'So funktioniert es',
      secondaryHref: '/about/',
    },
    stats: [
      { value: '900+', label: 'Schlaflabore' },
      { value: '16', label: 'Bundesländer' },
      { value: 'Kasse', label: 'Leistung möglich' },
    ],
    services: [
      {
        title: 'Polysomnografie',
        body: 'Stationäre Schlafdiagnostik mit Messung von Hirnwellen, Atmung, Sauerstoff und Bewegungen.',
        icon: 'moon',
      },
      {
        title: 'Ambulante Polygrafie',
        body: 'Schlafmessung zu Hause für geeignete Patientinnen und Patienten.',
        icon: 'home',
      },
      {
        title: 'CPAP-Einstellung',
        body: 'Maskenanpassung, Drucktitration und Nachsorge bei obstruktiver Schlafapnoe.',
        icon: 'wind',
      },
      {
        title: 'Insomnie-Therapie',
        body: 'Kognitive Verhaltenstherapie bei Schlafstörungen, in Präsenz oder online.',
        icon: 'spark',
      },
      {
        title: 'Pädiatrische Schlafmedizin',
        body: 'Spezialisierte Sprechstunden für Kinder mit Atem- und Schlafproblemen.',
        icon: 'heart',
      },
      {
        title: 'Telemedizin',
        body: 'Video-Sprechstunden für Befundgespräche und Verlaufskontrollen.',
        icon: 'screen',
      },
    ],
    about: {
      title: 'Klarheit vor der ersten Nacht.',
      body: [
        'Ein Schlaflabor-Termin ist mit Aufwand verbunden: Überweisung, Wartezeit, Anfahrt und eine Nacht außerhalb des eigenen Bettes.',
        'Wir bündeln die Informationen, die diese Entscheidung leichter machen — Leistungen, Kostenträger, Wartezeiten und die Frage, ob eine ambulante Messung ausreicht.',
      ],
      bullets: [
        'Gesetzlich und privat versichert',
        'Stationär und ambulant',
        'Wartezeiten nach Bundesland',
        'Kinder- und Erwachsenensprechstunden',
      ],
    },
    faqs: [
      {
        q: 'Brauche ich eine Überweisung?',
        a: 'Für viele Kassenleistungen ist eine Überweisung vom Hausarzt oder von einer Fachärztin erforderlich. Privatpraxen haben oft andere Regeln.',
      },
      {
        q: 'Was kostet ein Schlaflabor?',
        a: 'Gesetzlich Versicherte zahlen in der Regel keinen oder einen geringen Eigenanteil. Privat Versicherte erhalten eine Rechnung nach GOÄ. Fragen Sie vorab nach einem Kostenvoranschlag.',
      },
      {
        q: 'Wie lange dauert ein Termin?',
        a: 'Die Wartezeit variiert stark. Großstädte haben oft längere Wartezeiten als ländliche Regionen. Einige Kliniken führen Wartelisten für kurzfristige Absagen.',
      },
      {
        q: 'Was ist ein ambulantes Screening?',
        a: 'Eine vereinfachte Messung zu Hause, die bei klarem Verdacht auf Schlafapnoe eingesetzt wird. Bei komplexen Befunden ist eine stationäre Untersuchung nötig.',
      },
    ],
    contact: {
      title: 'Die richtige Klinik finden.',
      body: 'Nennen Sie uns Ihr Bundesland, Ihre Beschwerden und Ihre Versicherungsart. Wir schlagen passende Einrichtungen vor.',
      email: 'kontakt@schlafklinikfinder.com',
      phone: '+49 (30) 5550 0000',
      address: 'Unterstützung in ganz Deutschland',
      hours: 'Montag bis Freitag, 9–17 Uhr',
    },
    footer: {
      phrase: 'Ein Theme von',
      label: 'Schlafklinikfinder',
      href: 'https://schlafklinikfinder.com/',
    },
    posts: [
      {
        slug: 'vorbereitung-schlaflabor',
        title: 'Vorbereitung auf die Nacht im Schlaflabor',
        description: 'Was Sie mitbringen sollten und was Sie besser vermeiden.',
        date: '2026-10-01',
        body: '<p>Nehmen Sie bequeme Kleidung, Ihre üblichen Medikamente und, wenn erlaubt, Ihr eigenes Kissen mit. Auf Koffein am Nachmittag und Alkohol am Abend sollten Sie verzichten.</p><p>Planen Sie am Morgen danach nicht zu viel ein. Nach einer Messnacht sind viele Menschen müder als sonst.</p>',
      },
      {
        slug: 'ambulant-oder-stationaer',
        title: 'Ambulant oder stationär?',
        description: 'Wann eine Messung zu Hause ausreicht und wann nicht.',
        date: '2026-09-12',
        body: '<p>Die ambulante Polygrafie ist einfacher und näher am Alltag. Sie erfasst aber weniger Signale als eine stationäre Polysomnografie.</p><p>Bei Begleiterkrankungen, unklaren Befunden oder dem Verdacht auf andere Schlafstörungen ist die stationäre Untersuchung die sicherere Wahl.</p>',
      },
    ],
  },
  {
    slug: 'guide',
    site: 'https://sleepclinicguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/guide/',
    brand: 'SleepClinicGuide',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'Organization',
    locale: 'en',
    palette: p({
      bg: '#F4F2E9',
      surface: '#FFFDF6',
      ink: '#232B22',
      muted: '#5E6759',
      brand: '#2F5D3A',
      brandInk: '#FFFFFF',
      accent: '#B98A2E',
      border: '#DED9C9',
    }),
    seo: {
      title: 'SleepClinicGuide — Sleep care, explained',
      description:
        'Evidence-based guides to sleep studies, CPAP, insomnia and finding the right clinic.',
    },
    hero: {
      eyebrow: 'Sleep guides',
      title: 'Sleep care, explained.',
      body: 'Clear, sourced guides to sleep studies, CPAP, insomnia and the clinics that treat them — written for people, not for search engines.',
      primaryCta: 'Browse guides',
      primaryHref: '/blog/',
      secondaryCta: 'About the project',
      secondaryHref: '/about/',
    },
    stats: [
      { value: '120+', label: 'guides published' },
      { value: '2026', label: 'last full review' },
      { value: '0', label: 'sponsored rankings' },
    ],
    services: [
      {
        title: 'Sleep basics',
        body: 'What normal sleep looks like, why it changes with age and what the numbers actually mean.',
        icon: 'moon',
      },
      {
        title: 'Clinic finder',
        body: 'A directory of sleep centers and clinicians, with notes on services and coverage.',
        icon: 'search',
      },
      {
        title: 'CPAP guide',
        body: 'Machines, masks, pressure settings and the first month of therapy.',
        icon: 'wind',
      },
      {
        title: 'Insomnia',
        body: 'CBT-I, sleep restriction and the habits that help without making things worse.',
        icon: 'spark',
      },
      {
        title: 'Sleep hygiene',
        body: 'What the evidence supports, what is overhyped and what to try first.',
        icon: 'leaf',
      },
      {
        title: 'For clinicians',
        body: 'Patient-education pages you can share without rewriting them for your practice.',
        icon: 'book',
      },
    ],
    about: {
      title: 'A guide, not a gatekeeper.',
      body: [
        'Most sleep content online is either a clinic advert or a list of generic tips. We wanted something closer to a well-edited handbook: short, sourced and honest about uncertainty.',
        'Every guide names its sources and its review date. Directory listings are never ranked by payment.',
      ],
      bullets: [
        'Sources cited on every guide',
        'Review dates shown publicly',
        'No paid rankings in the directory',
        'Plain language, no jargon walls',
      ],
    },
    faqs: [
      {
        q: 'Where do you get your sources?',
        a: 'Clinical guidelines, peer-reviewed reviews and public health bodies. Each guide lists its sources at the bottom.',
      },
      {
        q: 'Is this medical advice?',
        a: 'No. It is general information to help you ask better questions. Diagnosis and treatment belong with a qualified clinician.',
      },
      {
        q: 'How do you pick clinics?',
        a: 'Listings are based on public information and verification, not payment. We remove entries that cannot be verified.',
      },
      {
        q: 'Can I suggest a topic?',
        a: 'Yes. Send it through the contact page. We prioritise questions that keep coming up.',
      },
    ],
    contact: {
      title: 'Suggest a topic or a correction.',
      body: 'We read every message. Corrections with a source get priority.',
      email: 'hello@sleepclinicguide.com',
      phone: '+1 (555) 010-0000',
      address: 'Independent editorial project',
      hours: 'Replies within two business days',
    },
    footer: {
      phrase: 'Built by',
      label: 'SleepClinicGuide',
      href: 'https://sleepclinicguide.com/',
    },
    posts: [
      {
        slug: 'sleep-cycle-without-jargon',
        title: 'The sleep cycle, without the jargon',
        description: 'REM, deep sleep and why the clock matters less than you think.',
        date: '2026-10-07',
        body: '<p>Sleep moves through cycles of light sleep, deep sleep and REM. Deep sleep dominates the early night; REM dominates the hours before waking.</p><p>That is why cutting a night short costs more REM than deep sleep, and why “eight hours” is a useful average rather than a rule.</p>',
      },
      {
        slug: 'what-a-sleep-study-measures',
        title: 'What a sleep study measures',
        description: 'Breathing, oxygen, brain waves and the numbers behind a diagnosis.',
        date: '2026-09-20',
        body: '<p>A polysomnogram records brain activity, eye movement, muscle tone, airflow, breathing effort, oxygen saturation and heart rhythm.</p><p>The report turns those signals into an apnea-hypopnea index, an oxygen nadir and a sleep architecture summary. Those three numbers drive most treatment decisions.</p>',
      },
    ],
  },
  {
    slug: 'peds',
    site: 'https://frenectomyguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/peds/',
    brand: 'Frenectomy Guide',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'MedicalClinic',
    locale: 'en',
    palette: p({
      bg: '#FFF7F2',
      surface: '#FFFFFF',
      ink: '#33231E',
      muted: '#7A5E55',
      brand: '#B85C4A',
      brandInk: '#FFFFFF',
      accent: '#4F8FA8',
      border: '#F0DCD3',
    }),
    seo: {
      title: 'Frenectomy Guide — Tongue-tie and lip-tie care',
      description:
        'Find frenectomy providers, understand the procedure and plan recovery for children and adults.',
    },
    hero: {
      eyebrow: 'Tongue-tie and lip-tie',
      title: 'Frenectomy care, explained.',
      body: 'What a frenectomy is, who needs one, how recovery works and where to find a provider — for infants, children and adults.',
      primaryCta: 'Find a provider',
      primaryHref: '/contact/',
      secondaryCta: 'Recovery guide',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '300+', label: 'providers listed' },
      { value: '50', label: 'states covered' },
      { value: 'All ages', label: 'infant to adult' },
    ],
    services: [
      {
        title: 'Laser frenectomy',
        body: 'A quick release using a soft-tissue laser, with less bleeding and a short recovery.',
        icon: 'spark',
      },
      {
        title: 'Pediatric evaluation',
        body: 'Assessment of feeding, speech and oral function before any procedure is recommended.',
        icon: 'heart',
      },
      {
        title: 'Adult tongue-tie',
        body: 'Release for adults with speech, breathing or dental symptoms that were never addressed.',
        icon: 'user',
      },
      {
        title: 'Post-op care',
        body: 'Stretching, pain relief and feeding support for the first two weeks.',
        icon: 'shield',
      },
      {
        title: 'Feeding support',
        body: 'Lactation and feeding specialists who work alongside the releasing provider.',
        icon: 'leaf',
      },
      {
        title: 'Provider finder',
        body: 'Search by city, age group and procedure type, with notes on insurance and wait times.',
        icon: 'search',
      },
    ],
    about: {
      title: 'A calm path through a stressful decision.',
      body: [
        'Tongue-tie advice online swings between “it is overdiagnosed” and “release it immediately”. The truth is that the decision depends on function: feeding, breathing, speech and comfort.',
        'We explain the assessment, the procedure and the recovery in plain language, and we list providers who can evaluate rather than simply operate.',
      ],
      bullets: [
        'Assessment before procedure',
        'Infant, child and adult providers',
        'Feeding and speech support',
        'Clear recovery instructions',
      ],
    },
    faqs: [
      {
        q: 'What is a frenectomy?',
        a: 'A minor procedure that releases a tight lingual or labial frenulum — the tissue under the tongue or upper lip — to improve movement.',
      },
      {
        q: 'Is laser or scissors better?',
        a: 'Both work. Lasers often mean less bleeding and a slightly faster recovery; scissors are quick and widely available. The provider’s experience matters more than the tool.',
      },
      {
        q: 'What is recovery like?',
        a: 'Most infants feed immediately and are fussy for a day or two. Adults may have soreness for a week. Stretching exercises help prevent reattachment.',
      },
      {
        q: 'When should a baby be evaluated?',
        a: 'If feeding is painful or inefficient, if the baby cannot latch deeply, or if weight gain is slow. A lactation consultant is often the first stop.',
      },
    ],
    contact: {
      title: 'Find a provider who assesses first.',
      body: 'Tell us the age, symptoms and city. We will shortlist clinicians who evaluate before recommending release.',
      email: 'hello@frenectomyguide.com',
      phone: '+1 (555) 010-0000',
      address: 'Providers across the United States',
      hours: 'Monday to Friday, 9am–5pm ET',
    },
    footer: {
      phrase: 'Website by',
      label: 'Frenectomy Guide',
      href: 'https://frenectomyguide.com/',
    },
    posts: [
      {
        slug: 'signs-of-tongue-tie',
        title: 'Signs of a tongue-tie in newborns',
        description: 'What feeding specialists look for before referral.',
        date: '2026-10-03',
        body: '<p>Signs include a shallow latch, clicking during feeds, milk leaking from the mouth, maternal pain and slow weight gain. Not every baby with a visible frenulum has a functional problem.</p><p>A proper assessment looks at tongue movement, suck mechanics and feeding outcomes — not just the shape of the tissue.</p>',
      },
      {
        slug: 'after-a-frenectomy',
        title: 'What to expect after a frenectomy',
        description: 'The first 48 hours, stretches and when to call the clinician.',
        date: '2026-09-14',
        body: '<p>Most infants feed immediately after release and are fussy for a day or two. Adults can expect soreness, minor swelling and a soft diet for a few days.</p><p>Stretching exercises are usually taught for the first two weeks. Call the clinician if bleeding persists, feeding worsens or the tissue looks infected.</p>',
      },
    ],
  },
  {
    slug: 'dental',
    site: 'https://qsedationdentistry.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/dental/',
    brand: 'Q Sedation',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'Dentist',
    locale: 'en',
    palette: p({
      bg: '#F2F8F6',
      surface: '#FFFFFF',
      ink: '#1B2B2A',
      muted: '#5A6E6B',
      brand: '#1F6F62',
      brandInk: '#FFFFFF',
      accent: '#D7A84A',
      border: '#D5E6E1',
    }),
    seo: {
      title: 'Q Sedation — Calm dental care for anxious patients',
      description:
        'IV sedation, oral sedation and nitrous oxide for patients who avoid the dentist.',
    },
    hero: {
      eyebrow: 'Sedation dentistry',
      title: 'Calm dental care for anxious patients.',
      body: 'IV sedation, oral sedation and nitrous oxide — explained honestly, with a clear plan for consultation, treatment and recovery.',
      primaryCta: 'Book a consult',
      primaryHref: '/contact/',
      secondaryCta: 'How sedation works',
      secondaryHref: '/about/',
    },
    stats: [
      { value: 'Board', label: 'certified teams' },
      { value: 'Same day', label: 'consults available' },
      { value: 'All ages', label: 'with assessment' },
    ],
    services: [
      {
        title: 'IV sedation',
        body: 'Moderate to deep sedation for longer or more complex treatment, monitored throughout.',
        icon: 'moon',
      },
      {
        title: 'Oral sedation',
        body: 'A pill taken before the appointment for a relaxed, drowsy state without IV lines.',
        icon: 'pill',
      },
      {
        title: 'Nitrous oxide',
        body: 'Light, fast-acting relaxation that wears off quickly — good for shorter visits.',
        icon: 'wind',
      },
      {
        title: 'Wisdom teeth',
        body: 'Removal under sedation when position, anxiety or complexity call for it.',
        icon: 'tooth',
      },
      {
        title: 'Implants',
        body: 'Routine or complex implant treatment with comfort options matched to the case.',
        icon: 'shield',
      },
      {
        title: 'Sedation for children',
        body: 'Assessed carefully, with specialist teams and clear fasting instructions.',
        icon: 'heart',
      },
    ],
    about: {
      title: 'Comfort is a clinical decision.',
      body: [
        'Sedation is not a shortcut or a luxury. It is a way to complete necessary treatment for people whose anxiety, gag reflex or medical history would otherwise make care impossible.',
        'Every patient is assessed first: medical history, medications, airway and the treatment plan. The lightest effective option is the default.',
      ],
      bullets: [
        'Medical assessment before sedation',
        'The lightest effective option first',
        'Monitored recovery and escort rules',
        'Clear fasting and medication instructions',
      ],
    },
    faqs: [
      {
        q: 'Is sedation safe?',
        a: 'Moderate sedation is safe for most healthy patients when delivered by a trained team with monitoring. The assessment is what makes it safe or unsuitable.',
      },
      {
        q: 'Can I drive home?',
        a: 'No. After IV or oral sedation you need a responsible adult to escort you home and stay with you for the rest of the day.',
      },
      {
        q: 'Does insurance cover sedation?',
        a: 'Coverage varies. Some plans cover sedation when medically necessary; others treat it as elective. Ask for a pre-treatment estimate.',
      },
      {
        q: 'What happens during IV sedation?',
        a: 'A clinician places a small IV, monitors your breathing and oxygen, and adjusts the medication. Most patients remember little of the appointment.',
      },
    ],
    contact: {
      title: 'Talk to a sedation dentist.',
      body: 'Tell us what treatment you need and what has stopped you before. We will explain the options.',
      email: 'hello@qsedationdentistry.com',
      phone: '+1 (555) 010-0000',
      address: 'Consultations across the United States',
      hours: 'Monday to Saturday, by appointment',
    },
    footer: {
      phrase: 'Website by',
      label: 'Q Sedation',
      href: 'https://qsedationdentistry.com/',
    },
    posts: [
      {
        slug: 'what-iv-sedation-feels-like',
        title: 'IV sedation: what actually happens',
        description: 'From the consult to the ride home, step by step.',
        date: '2026-10-05',
        body: '<p>You arrive fasting, meet the clinician and have your vitals checked. A small IV is placed and the medication is titrated until you are relaxed and drowsy.</p><p>Monitoring continues throughout. Afterwards you rest, receive written instructions and go home with your escort.</p>',
      },
      {
        slug: 'dental-anxiety-options',
        title: 'Dental anxiety: options beyond nitrous',
        description: 'A ladder of comfort options, from behaviour to IV sedation.',
        date: '2026-09-19',
        body: '<p>Options range from a longer first appointment and stop signals, to oral sedation, nitrous oxide and IV sedation. The right level depends on the procedure and the person.</p><p>Tell the team what specifically frightens you — the sound, the needle, the loss of control. It changes the plan.</p>',
      },
    ],
  },
  {
    slug: 'eye',
    site: 'https://chalazionguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/eye/',
    brand: 'Chalazion Guide',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'MedicalClinic',
    locale: 'en',
    palette: p({
      bg: '#F8F4F8',
      surface: '#FFFFFF',
      ink: '#2A1F2E',
      muted: '#6B5A70',
      brand: '#6B3F6E',
      brandInk: '#FFFFFF',
      accent: '#D08A3E',
      border: '#E7D9E6',
    }),
    seo: {
      title: 'Chalazion Guide — Eyelid bumps, clearly explained',
      description:
        'Chalazion and stye treatment, warm compress guidance and when to see an eye doctor.',
    },
    hero: {
      eyebrow: 'Eyelid care',
      title: 'Eyelid bumps, clearly explained.',
      body: 'Chalazion or stye? Warm compresses, when to wait, when to see a doctor and what treatment actually works.',
      primaryCta: 'Find an eye doctor',
      primaryHref: '/contact/',
      secondaryCta: 'Chalazion vs. stye',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '50', label: 'states covered' },
      { value: '6', label: 'treatment options' },
      { value: '2026', label: 'reviewed' },
    ],
    services: [
      {
        title: 'Chalazion treatment',
        body: 'From conservative care to injection and excision, matched to size and duration.',
        icon: 'eye',
      },
      {
        title: 'Stye care',
        body: 'Warm compresses, hygiene and when an infection needs medical attention.',
        icon: 'shield',
      },
      {
        title: 'Warm compress guide',
        body: 'The right temperature, duration and frequency — with a simple routine.',
        icon: 'spark',
      },
      {
        title: 'Injection therapy',
        body: 'Steroid injection for persistent chalazia, with realistic expectations.',
        icon: 'pill',
      },
      {
        title: 'Surgery',
        body: 'Minor excision for large or recurrent lumps that do not respond to other care.',
        icon: 'scalpel',
      },
      {
        title: 'Pediatric eye care',
        body: 'Gentle assessment for children with recurring eyelid bumps or blepharitis.',
        icon: 'heart',
      },
    ],
    about: {
      title: 'Most eyelid bumps are not emergencies.',
      body: [
        'A chalazion is a blocked oil gland; a stye is an infected lash follicle. They look similar, behave differently and rarely need urgent surgery.',
        'We explain the difference, the timeline and the point at which a doctor should look at it — without the alarmist language.',
      ],
      bullets: [
        'Chalazion versus stye',
        'Warm compress routine',
        'When to see an ophthalmologist',
        'Prevention and recurrence',
      ],
    },
    faqs: [
      {
        q: 'Chalazion or stye?',
        a: 'A stye is usually tender and near the lash line; a chalazion is a firmer, less painful lump deeper in the eyelid. Both can start similarly.',
      },
      {
        q: 'How long does a chalazion take to heal?',
        a: 'Many improve within two to four weeks with warm compresses. A lump that persists beyond six weeks or keeps returning should be examined.',
      },
      {
        q: 'When should I see a doctor?',
        a: 'If vision changes, the eyelid is very swollen, the lump grows quickly, or it persists after a month of home care.',
      },
      {
        q: 'Can I prevent them?',
        a: 'Eyelid hygiene, warm compresses and treating blepharitis help. Some people are simply prone to blocked glands.',
      },
    ],
    contact: {
      title: 'Find an eye doctor.',
      body: 'Tell us your city and how long the lump has been there. We will suggest the right type of clinician.',
      email: 'hello@chalazionguide.com',
      phone: '+1 (555) 010-0000',
      address: 'Eye care providers across the United States',
      hours: 'Monday to Friday, 9am–5pm ET',
    },
    footer: {
      phrase: 'Made by',
      label: 'Chalazion Guide',
      href: 'https://chalazionguide.com/',
    },
    posts: [
      {
        slug: 'chalazion-vs-stye',
        title: 'Chalazion vs. stye: the difference',
        description: 'Two eyelid bumps, two different paths.',
        date: '2026-10-08',
        body: '<p>A stye is an infection of a lash follicle or oil gland at the lid margin. It is often tender, red and points outward. A chalazion is a blocked gland deeper in the lid, usually firmer and less painful.</p><p>Both can be treated with warm compresses first. A stye may drain on its own; a chalazion may take weeks to resolve.</p>',
      },
      {
        slug: 'warm-compress-routine',
        title: 'Warm compresses: how to do them properly',
        description: 'Temperature, timing and the mistake most people make.',
        date: '2026-09-17',
        body: '<p>Use a clean cloth or compress at a comfortable warm temperature — not hot — for 10 to 15 minutes, three to four times a day. The heat softens the blocked oil.</p><p>The common mistake is doing it once for 20 minutes. Frequency matters more than duration.</p>',
      },
    ],
  },
  {
    slug: 'sauna',
    site: 'https://dipandheat.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/sauna/',
    brand: 'Dip & Heat',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: p({
      bg: '#F6F1EA',
      surface: '#FFFDF8',
      ink: '#2A2320',
      muted: '#6B5B52',
      brand: '#8A4B2F',
      brandInk: '#FFFFFF',
      accent: '#D9A441',
      border: '#E6D8C8',
    }),
    seo: {
      title: 'Dip & Heat — Sauna and cold plunge builds',
      description:
        'Backyard sauna builds, cold plunge installs, electrical planning and water care.',
    },
    hero: {
      eyebrow: 'Sauna & cold plunge',
      title: 'Sauna and cold plunge, done right.',
      body: 'Backyard builds, electrical planning and water care for people who want the ritual to last longer than the first winter.',
      primaryCta: 'Plan your build',
      primaryHref: '/contact/',
      secondaryCta: 'See services',
      secondaryHref: '/services/',
    },
    stats: [
      { value: 'Backyard', label: 'first design' },
      { value: 'Permit', label: 'aware builds' },
      { value: '10+ yr', label: 'materials' },
    ],
    services: [
      {
        title: 'Sauna builds',
        body: 'Cedar and thermowood saunas sized to the space, the heater and the way you actually use it.',
        icon: 'flame',
      },
      {
        title: 'Cold plunge installs',
        body: 'Chillers, filtration and drainage planned before the first tile is laid.',
        icon: 'droplet',
      },
      {
        title: 'Contrast therapy',
        body: 'A layout that makes the hot-to-cold transition safe, comfortable and repeatable.',
        icon: 'spark',
      },
      {
        title: 'Maintenance',
        body: 'Water chemistry, filter schedules and heater care for the long haul.',
        icon: 'wrench',
      },
      {
        title: 'Electrical planning',
        body: 'Load calculations, dedicated circuits and coordination with your electrician.',
        icon: 'bolt',
      },
      {
        title: 'Backyard design',
        body: 'Siting, drainage, privacy and landscaping around the build.',
        icon: 'tree',
      },
    ],
    about: {
      title: 'Built for the second winter.',
      body: [
        'A sauna is easy to love in January and easy to neglect by March. The difference is usually planning: drainage, ventilation, heater access and a water-care routine that takes minutes.',
        'We design backyard builds around maintenance, not just the reveal photo.',
      ],
      bullets: [
        'Drainage and ventilation planned first',
        'Heater and chiller access panels',
        'Permit and electrical coordination',
        'Water-care routine included',
      ],
    },
    faqs: [
      {
        q: 'Do I need a permit?',
        a: 'Often, yes — especially for structures over a certain size or for new electrical circuits. Rules vary by municipality; we check before quoting.',
      },
      {
        q: 'What electrical service do I need?',
        a: 'A dedicated circuit is typical. Heater size, chiller and lighting determine the load. Your electrician confirms the final calculation.',
      },
      {
        q: 'How do I keep the water clean?',
        a: 'Filtration, circulation and a simple test routine. Ozone or UV can reduce chemical use; neither replaces basic hygiene.',
      },
      {
        q: 'Can I install a cold plunge indoors?',
        a: 'Yes with the right ventilation, drainage and floor protection. Indoor builds need more planning, not less.',
      },
    ],
    contact: {
      title: 'Plan the build before the quote.',
      body: 'Send a photo of the space and tell us how you want to use it. We will outline the options.',
      email: 'hello@dipandheat.com',
      phone: '+1 (555) 010-0000',
      address: 'Backyard builds across the United States',
      hours: 'Monday to Friday, 8am–5pm',
    },
    footer: {
      phrase: 'Made by',
      label: 'Dip & Heat',
      href: 'https://dipandheat.com/',
    },
    posts: [
      {
        slug: 'sauna-heater-sizing',
        title: 'Sauna heater sizing, simplified',
        description: 'Cubic feet, insulation and the mistake that makes a sauna feel cold.',
        date: '2026-10-02',
        body: '<p>Heater size is based on room volume, insulation, glass area and whether the walls are cedar or thermowood. An undersized heater runs constantly and never reaches a comfortable temperature.</p><p>Size up one step for large glass panels or uninsulated walls. The extra cost is smaller than rebuilding the room.</p>',
      },
      {
        slug: 'cold-plunge-water-care',
        title: 'Cold plunge water care',
        description: 'Filtration, sanitiser and the weekly routine.',
        date: '2026-09-13',
        body: '<p>A cold plunge needs circulation, filtration and a sanitiser. Cold water slows bacterial growth but does not stop it.</p><p>Test weekly, clean the filter, and change the water on a schedule rather than waiting for it to look cloudy.</p>',
      },
    ],
  },
  {
    slug: 'garage',
    site: 'https://garagevertical.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/garage/',
    brand: 'GarageVertical',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: p({
      bg: '#F3F4F4',
      surface: '#FFFFFF',
      ink: '#1C2124',
      muted: '#5C666B',
      brand: '#2E4A5A',
      brandInk: '#FFFFFF',
      accent: '#E07A2F',
      border: '#DDE2E4',
    }),
    seo: {
      title: 'GarageVertical — Garage storage that fits',
      description:
        'Overhead racks, wall systems, cabinets and floor coatings designed around your garage.',
    },
    hero: {
      eyebrow: 'Garage storage',
      title: 'Garage storage that fits your life.',
      body: 'Overhead racks, wall systems and cabinets planned around your ceiling, your joists and the things you actually store.',
      primaryCta: 'Plan your garage',
      primaryHref: '/contact/',
      secondaryCta: 'Browse systems',
      secondaryHref: '/services/',
    },
    stats: [
      { value: 'Ceiling', label: 'first design' },
      { value: 'Load', label: 'rated hardware' },
      { value: 'HOA', label: 'aware' },
    ],
    services: [
      {
        title: 'Overhead racks',
        body: 'Ceiling-mounted storage for seasonal boxes, bikes and bins, sized to the joists.',
        icon: 'layers',
      },
      {
        title: 'Wall systems',
        body: 'Rail, hook and panel systems that keep the floor clear and the tools visible.',
        icon: 'grid',
      },
      {
        title: 'Cabinets',
        body: 'Closed storage for tools, chemicals and anything you do not want on display.',
        icon: 'box',
      },
      {
        title: 'Bike storage',
        body: 'Hooks, lifts and floor racks for road, mountain and kids’ bikes.',
        icon: 'bike',
      },
      {
        title: 'Floor coatings',
        body: 'Epoxy and polyaspartic finishes prepped for the way garages actually get dirty.',
        icon: 'shield',
      },
      {
        title: 'Custom builds',
        body: 'Workbenches, folding stations and built-ins for awkward dimensions.',
        icon: 'wrench',
      },
    ],
    about: {
      title: 'Measure the ceiling before you buy the rack.',
      body: [
        'Most garage storage fails for a boring reason: the ceiling height, joist direction or door clearance was never measured. The rack fits the wall but not the car.',
        'We start with the room — dimensions, joists, door travel and what you store — then choose the system.',
      ],
      bullets: [
        'Ceiling height and joist check',
        'Load ratings explained',
        'Door and car clearance',
        'HOA and rental constraints',
      ],
    },
    faqs: [
      {
        q: 'How much weight can an overhead rack hold?',
        a: 'It depends on the anchors and the joists, not just the rack. A professional install with the right hardware typically supports several hundred pounds; the exact rating belongs in the spec.',
      },
      {
        q: 'Do I need a permit?',
        a: 'Usually not for surface-mounted storage, but structural changes, electrical work or new walls may require one. Check locally.',
      },
      {
        q: 'What ceiling height do I need?',
        a: 'Enough for the rack, the stored items and the car bonnet. A 9-foot ceiling is comfortable; lower ceilings need low-profile systems.',
      },
      {
        q: 'Can I install it myself?',
        a: 'Some wall systems are DIY-friendly. Overhead racks and anything load-bearing are better installed by someone who can verify the joists.',
      },
    ],
    contact: {
      title: 'Send us a photo of your garage.',
      body: 'Include the ceiling height and what you need to store. We will suggest a layout.',
      email: 'hello@garagevertical.com',
      phone: '+1 (555) 010-0000',
      address: 'Garage projects across the United States',
      hours: 'Monday to Friday, 8am–5pm',
    },
    footer: {
      phrase: 'Built by',
      label: 'GarageVertical',
      href: 'https://garagevertical.com/',
    },
    posts: [
      {
        slug: 'measure-garage-overhead-storage',
        title: 'How to measure your garage for overhead storage',
        description: 'Ceiling height, joists and door travel in five minutes.',
        date: '2026-10-06',
        body: '<p>Measure floor to ceiling at the highest and lowest points, note the joist direction and spacing, and check the garage door’s travel. A rack that blocks the door is worse than no rack.</p><p>Then measure what you store: bin height, bike length and the tallest box. The rack’s clearance is the number that matters.</p>',
      },
      {
        slug: 'joist-load-limits',
        title: 'Joist load limits, explained',
        description: 'Why the anchor matters as much as the rack.',
        date: '2026-09-21',
        body: '<p>Joists are designed for the roof and ceiling, not for point loads. A rack spreads weight across several joists; a single hook does not.</p><p>Use rated anchors, hit the centre of the joist and keep heavy items close to the walls. When in doubt, add a header.</p>',
      },
    ],
  },
  {
    slug: 'golf',
    site: 'https://golfbayguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/golf/',
    brand: 'GolfBayGuide',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: p({
      bg: '#F4F7EF',
      surface: '#FFFFFF',
      ink: '#1F2A1C',
      muted: '#5E6B56',
      brand: '#3C6B3F',
      brandInk: '#FFFFFF',
      accent: '#C9A227',
      border: '#DCE5D3',
    }),
    seo: {
      title: 'GolfBayGuide — Build a golf simulator worth practicing in',
      description:
        'Bay dimensions, launch monitors, projectors and mats for garage and basement simulators.',
    },
    hero: {
      eyebrow: 'Golf simulators',
      title: 'Build a simulator worth practicing in.',
      body: 'Ceiling height, bay dimensions, launch monitors and the bits that actually change your game — planned before you buy.',
      primaryCta: 'Plan your bay',
      primaryHref: '/contact/',
      secondaryCta: 'See the checklist',
      secondaryHref: '/services/',
    },
    stats: [
      { value: '9–10 ft', label: 'ideal ceiling' },
      { value: 'Garage', label: '& basement' },
      { value: '3', label: 'budget tiers' },
    ],
    services: [
      {
        title: 'Bay design',
        body: 'Dimensions, netting, framing and swing clearance for the space you have.',
        icon: 'grid',
      },
      {
        title: 'Launch monitors',
        body: 'Camera, radar and overhead systems compared by space, budget and practice goal.',
        icon: 'target',
      },
      {
        title: 'Projectors & screens',
        body: 'Throw distance, brightness and screen material for a sharp, bright image.',
        icon: 'screen',
      },
      {
        title: 'Mats',
        body: 'Hitting mats that protect your wrists and give useful feedback.',
        icon: 'layers',
      },
      {
        title: 'Software',
        body: 'Practice ranges, course play and subscription trade-offs.',
        icon: 'spark',
      },
      {
        title: 'Installation',
        body: 'Framing, electrical, lighting and calibration in one plan.',
        icon: 'wrench',
      },
    ],
    about: {
      title: 'The room decides the simulator.',
      body: [
        'A launch monitor that needs 10 feet of ball flight will not work in an 8-foot garage, no matter how good the reviews are. Start with the room, then choose the tech.',
        'We plan the bay around ceiling height, swing clearance, projector throw and the practice you actually want to do.',
      ],
      bullets: [
        'Ceiling height and swing clearance',
        'Launch monitor space requirements',
        'Projector throw and lighting',
        'Budget tiers, no surprises',
      ],
    },
    faqs: [
      {
        q: 'How much ceiling height do I need?',
        a: 'Nine feet is comfortable for most swings; ten is better. Below eight feet, shorter clubs and a compact setup are safer.',
      },
      {
        q: 'Can I build one in a garage?',
        a: 'Yes, if the ceiling and door clearance work. Many garages need a high-lift door conversion or a side-mounted opener.',
      },
      {
        q: 'What does a good setup cost?',
        a: 'It ranges from a mat-and-net practice bay to a full enclosure with a premium launch monitor. Set the budget before choosing the monitor.',
      },
      {
        q: 'Do I need a gaming PC?',
        a: 'Not always. Some monitors run standalone; others need a PC or console for course software. Check the software requirement before buying.',
      },
    ],
    contact: {
      title: 'Send your room dimensions.',
      body: 'Ceiling height, width, depth and a photo. We will tell you what fits.',
      email: 'hello@golfbayguide.com',
      phone: '+1 (555) 010-0000',
      address: 'Simulator builds across the United States',
      hours: 'Monday to Friday, 8am–5pm',
    },
    footer: {
      phrase: 'Powered by',
      label: 'GolfBayGuide',
      href: 'https://golfbayguide.com/',
    },
    posts: [
      {
        slug: 'ceiling-height-bay-dimensions',
        title: 'Ceiling height and bay dimensions',
        description: 'The numbers to measure before buying anything.',
        date: '2026-10-07',
        body: '<p>Measure ceiling height at the swing point, not the doorway. Add clearance for the driver and the follow-through. Width matters for the enclosure; depth matters for ball flight and projector throw.</p><p>A 10-foot ceiling, 12-foot width and 15-foot depth is a comfortable starting point for a full bay.</p>',
      },
      {
        slug: 'launch-monitor-tiers',
        title: 'Launch monitor tiers',
        description: 'Camera, radar and overhead systems without the marketing.',
        date: '2026-09-16',
        body: '<p>Camera systems tend to be accurate indoors and need less ball flight; radar systems need more space but excel outdoors. Overhead systems are convenient but expensive.</p><p>Match the monitor to the room and the data you will actually use, not the longest feature list.</p>',
      },
    ],
  },
  {
    slug: 'charter',
    site: 'https://superyachtcharterguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/charter/',
    brand: 'SYC Guide',
    themeName: 'CharterKit',
    vertical: 'charter',
    schemaType: 'TravelAgency',
    locale: 'en',
    palette: p({
      bg: '#F4F1EA',
      surface: '#FFFFFF',
      ink: '#15202E',
      muted: '#5A6677',
      brand: '#1C3557',
      brandInk: '#FFFFFF',
      accent: '#C39A4A',
      border: '#DCD5C6',
    }),
    seo: {
      title: 'SYC Guide — Charter a superyacht with confidence',
      description:
        'Crewed charters, catamarans, destination guides and honest budget planning.',
    },
    hero: {
      eyebrow: 'Superyacht charter',
      title: 'Charter a superyacht with confidence.',
      body: 'Crewed charters, catamarans and destination planning — with the budget details most brokers leave for the contract.',
      primaryCta: 'Plan a charter',
      primaryHref: '/contact/',
      secondaryCta: 'Budget guide',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '2', label: 'oceans covered' },
      { value: 'Crewed', label: '& bareboat' },
      { value: 'APA', label: 'explained' },
    ],
    services: [
      {
        title: 'Crewed charters',
        body: 'Captain, chef and crew included, with a clear breakdown of what the base rate covers.',
        icon: 'anchor',
      },
      {
        title: 'Catamarans',
        body: 'Stable, spacious and shallow-draft options for families and island hopping.',
        icon: 'sail',
      },
      {
        title: 'Destination guides',
        body: 'Mediterranean, Caribbean and Indian Ocean routes with seasonality notes.',
        icon: 'compass',
      },
      {
        title: 'Budget planning',
        body: 'Base rate, APA, VAT, gratuity and the costs that appear after signing.',
        icon: 'chart',
      },
      {
        title: 'Contracts',
        body: 'What to check before paying a deposit, from cancellation terms to delivery fees.',
        icon: 'shield',
      },
      {
        title: 'Concierge',
        body: 'Transfers, provisioning, diving and shore experiences arranged around the itinerary.',
        icon: 'spark',
      },
    ],
    about: {
      title: 'The budget is part of the itinerary.',
      body: [
        'A charter quote usually shows the base rate. The real cost includes APA, VAT, gratuity, fuel and the odd delivery fee. None of it should be a surprise after the deposit.',
        'We explain the structure before you fall in love with a yacht, and we help you compare routes on what they actually cost.',
      ],
      bullets: [
        'Base rate versus APA',
        'VAT and gratuity expectations',
        'Delivery and relocation fees',
        'Seasonality by destination',
      ],
    },
    faqs: [
      {
        q: 'How much does a charter cost?',
        a: 'It depends on the yacht, season and itinerary. A crewed catamaran in the Caribbean costs far less than a 50-metre superyacht in the Mediterranean. Budget the APA on top of the base rate.',
      },
      {
        q: 'What is APA?',
        a: 'Advance Provisioning Allowance — an upfront fund for fuel, food, port fees and similar expenses. The crew accounts for it and returns any unused balance.',
      },
      {
        q: 'Do I need insurance?',
        a: 'The yacht is insured, but you should check cancellation cover and personal travel insurance. Ask what the charter contract excludes.',
      },
      {
        q: 'How far ahead should I book?',
        a: 'For peak season and popular yachts, six to twelve months. Off-season and smaller catamarans can be booked closer to the date.',
      },
    ],
    contact: {
      title: 'Start with the budget, not the yacht.',
      body: 'Tell us the dates, the destination and the budget range. We will outline what is realistic.',
      email: 'hello@superyachtcharterguide.com',
      phone: '+1 (555) 010-0000',
      address: 'Charter planning across the Mediterranean and Caribbean',
      hours: 'Monday to Friday, 9am–6pm CET',
    },
    footer: {
      phrase: 'A theme by',
      label: 'SYC Guide',
      href: 'https://superyachtcharterguide.com/',
    },
    posts: [
      {
        slug: 'charter-budget-base-rate-apa',
        title: 'Charter budgets: base rate vs. APA',
        description: 'The two numbers that decide what a charter really costs.',
        date: '2026-10-01',
        body: '<p>The base rate is the yacht and crew. The APA covers fuel, food, port fees and provisioning. VAT and gratuity come on top, and the percentages vary by country.</p><p>Ask for a sample budget for your itinerary, not just the weekly rate. It is the only way to compare two yachts fairly.</p>',
      },
      {
        slug: 'choosing-a-crewed-yacht',
        title: 'Choosing a crewed yacht',
        description: 'Size, crew ratio and the questions brokers should answer.',
        date: '2026-09-11',
        body: '<p>More cabins do not always mean more comfort. Crew ratio, water toys, dining space and air conditioning matter more than length for most groups.</p><p>Ask how many crew are dedicated to guests, whether the chef has a sample menu, and what the yacht’s realistic cruising speed is.</p>',
      },
    ],
  },

  {
    slug: 'vasectomy',
    site: 'https://vasectomycostguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/vasectomy/',
    brand: 'Vasectomy Cost Guide',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'MedicalClinic',
    locale: 'en',
    palette: {
      bg: '#F4F7F7',
      surface: '#FFFFFF',
      ink: '#1E2A2E',
      muted: '#5A6B6E',
      brand: '#1E4E5A',
      brandInk: '#FFFFFF',
      accent: '#C98A2E',
      border: '#D8E2E3',
    },
    seo: {
      title: 'Vasectomy Cost Guide — Vasectomy cost, procedure and recovery',
      description:
        'What a vasectomy costs, how the procedure works, what recovery looks like and how insurance usually handles it.',
    },
    hero: {
      eyebrow: 'Vasectomy costs & care',
      title: 'Vasectomy costs, clearly explained.',
      body: 'What the procedure costs, how it works, what recovery looks like and how insurance usually handles it — in plain language, before you book a consultation.',
      primaryCta: 'Find a provider',
      primaryHref: '/contact/',
      secondaryCta: 'Cost guide',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'topics covered' },
      { value: '3', label: 'guides published' },
      { value: '2026', label: 'reviewed' },
    ],
    services: [
      {
        title: 'Cost guide',
        body: 'What typically goes into the price — consultation, procedure, follow-up and semen analysis — and what to ask for in a written estimate.',
        icon: 'chart',
      },
      {
        title: 'The procedure',
        body: 'How a vasectomy is done, what no-scalpel means, how long it takes and what anaesthesia usually involves.',
        icon: 'scalpel',
      },
      {
        title: 'Recovery planning',
        body: 'The first days after the procedure, activity limits, pain relief and when to call the clinician.',
        icon: 'heart',
      },
      {
        title: 'Insurance & coverage',
        body: 'How plans usually treat vasectomy, what to check before booking and which questions to ask your insurer.',
        icon: 'shield',
      },
      {
        title: 'Reversal, honestly',
        body: 'What reversal involves, why success is not guaranteed and why vasectomy should be treated as permanent.',
        icon: 'compass',
      },
      {
        title: 'Provider finder',
        body: 'Find urologists and family-planning clinics by city, with notes on consultation, cost and follow-up testing.',
        icon: 'search',
      },
    ],
    about: {
      title: 'A permanent decision deserves clear information.',
      body: [
        'A vasectomy is a short, common procedure — and a decision that is meant to last. Cost pages rarely say what is included, recovery guides disagree on timelines, and insurance answers depend on the plan.',
        'We explain the procedure, the costs, the recovery and the follow-up test in plain language, so the consultation can focus on your questions rather than the basics.',
      ],
      bullets: [
        'Cost breakdowns without invented prices',
        'Procedure and recovery, step by step',
        'Insurance questions to ask first',
        'Follow-up testing explained',
      ],
    },
    faqs: [
      {
        q: 'How much does a vasectomy cost?',
        a: 'It varies by provider, location and insurance. Ask for a written estimate that lists the consultation, the procedure, follow-up visits and the semen analysis separately.',
      },
      {
        q: 'Is a vasectomy permanent?',
        a: 'It should be treated as permanent. Reversal is possible in some cases, but it is a more complex procedure, it is not always successful and it is usually not covered by insurance.',
      },
      {
        q: 'What is recovery like?',
        a: 'Most people rest for a day or two and return to desk work within a few days, avoiding heavy lifting and strenuous exercise for about a week. Follow the specific instructions your clinician gives you.',
      },
      {
        q: 'Does a vasectomy affect hormones or sex drive?',
        a: 'No. A vasectomy blocks sperm from reaching the semen; it does not change testosterone levels, erections or sex drive. Semen volume looks and feels the same.',
      },
    ],
    contact: {
      title: 'Find a vasectomy provider.',
      body: 'Tell us your city and whether you have insurance. We will point you to providers and the questions to ask first.',
      email: '',
      phone: '',
      address: 'Vasectomy providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Vasectomy Cost Guide',
      href: 'https://vasectomycostguide.com/',
    },
    posts: [
      {
        slug: 'vasectomy-cost-what-to-expect',
        title: 'Vasectomy cost: what to expect',
        description: 'What is usually included in the price and what to ask before you book.',
        date: '2026-10-09',
        body: '<p>A vasectomy quote usually covers the consultation, the procedure itself and at least one follow-up visit. The semen analysis that confirms sterility is sometimes billed separately, so ask whether it is included.</p><p>Insurance coverage varies widely. Some plans cover the procedure fully, others apply a deductible or copay, and some do not cover it at all. Get the estimate in writing before the appointment.</p>',
      },
      {
        slug: 'vasectomy-recovery-first-week',
        title: 'Vasectomy recovery: the first week',
        description: 'Rest, activity limits and the signs that need a call to the clinic.',
        date: '2026-09-19',
        body: '<p>Plan to rest on the day of the procedure and take it easy for the next day or two. Supportive underwear, ice packs and over-the-counter pain relief are usually enough; your clinician will confirm what to use.</p><p>Avoid heavy lifting, running and other strenuous activity for about a week. Call the clinic if swelling or pain worsens after the first few days, or if you develop a fever.</p>',
      },
      {
        slug: 'vasectomy-vs-other-options',
        title: 'Vasectomy vs. other contraception options',
        description: 'How vasectomy compares with condoms, partner methods and reversal.',
        date: '2026-09-02',
        body: '<p>Vasectomy is one of the most effective forms of contraception once the follow-up semen analysis confirms sterility. Unlike condoms it requires no ongoing action, and unlike hormonal methods for a partner it involves no daily medication.</p><p>The trade-off is permanence. If there is any chance you may want biological children later, other methods — or waiting — are the safer choice, because reversal is uncertain and expensive.</p>',
      },
    ],
  },

  {
    slug: 'crown',
    site: 'https://crownlengtheningcost.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/crown/',
    brand: 'Crown Lengthening Cost',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'Dentist',
    locale: 'en',
    palette: {
      bg: '#F8F5F0',
      surface: '#FFFFFF',
      ink: '#2A2320',
      muted: '#6B5B52',
      brand: '#8A5A2B',
      brandInk: '#FFFFFF',
      accent: '#2F6B5F',
      border: '#E6DCD0',
    },
    seo: {
      title: 'Crown Lengthening Cost — Price factors, procedure and recovery',
      description:
        'What crown lengthening costs, what affects the price, how the procedure works and what recovery looks like.',
    },
    hero: {
      eyebrow: 'Crown lengthening',
      title: 'Crown lengthening costs, clearly explained.',
      body: 'How much crown lengthening costs, what drives the price, how the procedure works and what recovery actually looks like — before you book a consultation.',
      primaryCta: 'Find a periodontist',
      primaryHref: '/contact/',
      secondaryCta: 'Cost factors',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'topics covered' },
      { value: '4', label: 'questions answered' },
      { value: '2026', label: 'reviewed' },
    ],
    services: [
      {
        title: 'Crown lengthening explained',
        body: 'What the procedure reshapes — gum and sometimes bone — and when a dentist or periodontist recommends it.',
        icon: 'book',
      },
      {
        title: 'Cost factors',
        body: 'How the number of teeth, the reason for treatment and your location affect the final price.',
        icon: 'chart',
      },
      {
        title: 'Procedure steps',
        body: 'Consultation, planning, the appointment itself and what happens in the chair, step by step.',
        icon: 'scalpel',
      },
      {
        title: 'Recovery and aftercare',
        body: 'Healing time, pain management, eating and brushing rules, and when to call the clinician.',
        icon: 'shield',
      },
      {
        title: 'Gummy smile correction',
        body: 'When crown lengthening is done for appearance rather than to fit a crown or filling.',
        icon: 'spark',
      },
      {
        title: 'Finding a periodontist',
        body: 'Who performs the procedure, what to ask at the consultation and how to compare quotes.',
        icon: 'search',
      },
    ],
    about: {
      title: 'A cost guide, not a sales pitch.',
      body: [
        'Crown lengthening is a minor surgical procedure, usually performed by a periodontist, that removes a small amount of gum tissue — and sometimes bone — to expose more of a tooth. It is done to fit a crown or filling, or to correct a gummy smile.',
        'Prices vary widely because the work varies: one tooth is different from several, and a functional case is different from a cosmetic one. We explain the factors so you can read a quote with confidence.',
      ],
      bullets: [
        'Functional and cosmetic reasons explained',
        'Price factors, not a single invented figure',
        'Procedure and recovery in plain language',
        'Questions to ask before you agree',
      ],
    },
    faqs: [
      {
        q: 'How much does crown lengthening cost?',
        a: 'There is no single price. Cost depends on the number of teeth, whether bone needs reshaping, the provider and your location. Ask for a written estimate that separates the consultation, the procedure and follow-up visits.',
      },
      {
        q: 'Does insurance cover crown lengthening?',
        a: 'It may, when the procedure is needed to restore a tooth — for example to fit a crown. Cosmetic-only treatment is usually not covered. Ask your insurer and the provider for a pre-treatment estimate.',
      },
      {
        q: 'How long is recovery?',
        a: 'Most people return to normal activities within a day or two, with soreness and swelling for about a week. Full gum healing takes longer, and a final crown is usually placed after the tissue has settled.',
      },
      {
        q: 'Is crown lengthening painful?',
        a: 'The procedure is done under local anaesthetic, so you should not feel pain during it. Afterwards, over-the-counter pain relief is usually enough, and your clinician will give specific aftercare instructions.',
      },
    ],
    contact: {
      title: 'Find a periodontist.',
      body: 'Tell us your city and whether the treatment is for a crown or for appearance. We will point you to the right type of clinician.',
      email: '',
      phone: '',
      address: 'Dental providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Crown Lengthening Cost',
      href: 'https://crownlengtheningcost.com/',
    },
    posts: [
      {
        slug: 'crown-lengthening-cost-factors',
        title: 'What affects the cost of crown lengthening?',
        description: 'Teeth treated, bone work, location and what a quote should include.',
        date: '2026-10-09',
        body: '<p>The biggest cost driver is how many teeth are treated. A single tooth is a smaller procedure than reshaping the gum line across several front teeth, and removing bone adds time and complexity.</p><p>Location and provider type matter too. A periodontist in a large city usually charges more than a general dentist in a smaller town. Always ask what the quote includes: consultation, imaging, the procedure itself and follow-up visits.</p>',
      },
      {
        slug: 'crown-lengthening-recovery',
        title: 'Crown lengthening recovery: what to expect',
        description: 'The first week, eating, brushing and when to call your clinician.',
        date: '2026-09-21',
        body: '<p>Expect mild soreness and swelling for a few days. Most people manage with over-the-counter pain relief and return to work the next day. Soft foods, gentle brushing around the area and avoiding smoking help healing.</p><p>Stitches, if used, usually dissolve or are removed within a week or two. Call your clinician if bleeding persists, swelling worsens after the third day, or you develop a fever.</p>',
      },
    ],
  },
  {
    slug: 'gumgraft',
    site: 'https://gumgraftcostguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/gumgraft/',
    brand: 'Gum Graft Cost Guide',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'Dentist',
    locale: 'en',
    palette: {
      bg: '#F5F7F5',
      surface: '#FFFFFF',
      ink: '#22302A',
      muted: '#5A6E64',
      brand: '#A34A5E',
      brandInk: '#FFFFFF',
      accent: '#D9A441',
      border: '#E0D5D8',
    },
    seo: {
      title: 'Gum Graft Cost Guide — Types, prices and recovery',
      description:
        'Gum graft types, what affects the cost, how the procedure works and what recovery looks like.',
    },
    hero: {
      eyebrow: 'Gum graft surgery',
      title: 'Gum graft costs, types and recovery.',
      body: 'Which gum graft you might need, what affects the price, how the procedure works and how long recovery takes — explained before your consultation.',
      primaryCta: 'Find a periodontist',
      primaryHref: '/contact/',
      secondaryCta: 'Graft types',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '3', label: 'graft types explained' },
      { value: '6', label: 'topics covered' },
      { value: '2026', label: 'reviewed' },
    ],
    services: [
      {
        title: 'Graft types',
        body: 'Connective tissue, free gingival and pedicle grafts — how they differ and when each is used.',
        icon: 'layers',
      },
      {
        title: 'Cost factors',
        body: 'How the number of teeth, the graft type and donor tissue choice affect the price.',
        icon: 'chart',
      },
      {
        title: 'Recovery timeline',
        body: 'The first days, the first two weeks and when the graft is considered healed.',
        icon: 'clock',
      },
      {
        title: 'Donor site care',
        body: 'How to care for the roof of the mouth when tissue is taken from there.',
        icon: 'shield',
      },
      {
        title: 'Alternatives',
        body: 'When a graft is the right call, and when monitoring, cleaning or other treatment comes first.',
        icon: 'compass',
      },
      {
        title: 'Finding a periodontist',
        body: 'Who performs gum grafts, what to ask at the consultation and how to compare quotes.',
        icon: 'search',
      },
    ],
    about: {
      title: 'Receding gums, explained honestly.',
      body: [
        'A gum graft covers an exposed tooth root with tissue, usually taken from the roof of the mouth or from a donor source. It protects the root, reduces sensitivity and can improve the look of the gum line.',
        'The procedure sounds intimidating, but it is a routine periodontal surgery. We explain the three main graft types, the real cost factors and the recovery timeline so you can go into the consultation informed.',
      ],
      bullets: [
        'Three graft types compared',
        'Price factors, not a single invented figure',
        'Recovery timeline in plain language',
        'Questions to ask before you agree',
      ],
    },
    faqs: [
      {
        q: 'How much does a gum graft cost?',
        a: 'There is no single price. Cost depends on the number of teeth, the graft type, whether donor tissue is used and your location. Ask for a written estimate that separates the consultation, the procedure and follow-up visits.',
      },
      {
        q: 'Does insurance cover gum grafts?',
        a: 'Often, at least in part, when the graft is medically necessary — for example to protect an exposed root. Purely cosmetic grafts are usually not covered. Ask for a pre-treatment estimate from both the provider and your insurer.',
      },
      {
        q: 'How painful is a gum graft?',
        a: 'The procedure is done under local anaesthetic. Afterwards most people have soreness at both the graft site and the donor site for several days, managed with prescribed or over-the-counter pain relief. Discomfort usually improves noticeably within a week.',
      },
      {
        q: 'How long does recovery take?',
        a: 'Soft foods and gentle care are needed for about two weeks. The graft is usually considered settled after several weeks, though full tissue maturation takes longer. Your periodontist will check healing at follow-up visits.',
      },
    ],
    contact: {
      title: 'Find a periodontist.',
      body: 'Tell us your city and how many teeth are affected. We will point you to the right type of clinician.',
      email: '',
      phone: '',
      address: 'Dental providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Gum Graft Cost Guide',
      href: 'https://gumgraftcostguide.com/',
    },
    posts: [
      {
        slug: 'gum-graft-types-compared',
        title: 'Gum graft types compared',
        description: 'Connective tissue, free gingival and pedicle grafts — and when each is used.',
        date: '2026-10-11',
        body: '<p>A connective tissue graft takes tissue from under the surface of the roof of the mouth and is the most common choice for covering exposed roots. A free gingival graft takes tissue from the surface and is often used to thicken thin gums.</p><p>A pedicle graft moves gum from tissue next to the affected tooth, so it only works when enough healthy gum is nearby. The choice depends on the size of the recession, the thickness of your gums and the goal of treatment.</p>',
      },
      {
        slug: 'gum-graft-recovery-timeline',
        title: 'Gum graft recovery: a week-by-week timeline',
        description: 'What the first two weeks look like, and when healing is considered complete.',
        date: '2026-09-25',
        body: '<p>The first two or three days are the most uncomfortable, especially at the donor site on the roof of the mouth. Soft, cool foods and avoiding hot drinks help. Brushing near the graft is paused until your clinician says otherwise.</p><p>By two weeks most people are eating normally and the graft looks settled, though it keeps maturing for months. Follow-up visits check that the tissue has attached and that the root stays covered.</p>',
      },
    ],
  },
  {
    slug: 'tmj',
    site: 'https://tmjspecialistguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/tmj/',
    brand: 'TMJ Specialist Guide',
    themeName: 'ClinicKit',
    vertical: 'clinic',
    schemaType: 'Dentist',
    locale: 'en',
    palette: {
      bg: '#F4F6F8',
      surface: '#FFFFFF',
      ink: '#1F2A36',
      muted: '#5A6678',
      brand: '#3B5B7A',
      brandInk: '#FFFFFF',
      accent: '#D08A3E',
      border: '#DCE3E8',
    },
    seo: {
      title: 'TMJ Specialist Guide — Symptoms, specialists and treatment options',
      description:
        'TMJ disorder symptoms, how to find the right specialist and the treatment options that actually help.',
    },
    hero: {
      eyebrow: 'TMJ and jaw pain',
      title: 'Jaw pain? Find the right TMJ specialist.',
      body: 'TMJ symptoms, who treats them, which treatments work and when to seek help — so you stop guessing and start with the right clinician.',
      primaryCta: 'Find a specialist',
      primaryHref: '/contact/',
      secondaryCta: 'Symptoms and causes',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'topics covered' },
      { value: '4', label: 'questions answered' },
      { value: '2026', label: 'reviewed' },
    ],
    services: [
      {
        title: 'TMJ symptoms',
        body: 'Jaw pain, clicking, locking, headaches and ear symptoms — what points to a TMJ disorder.',
        icon: 'target',
      },
      {
        title: 'Finding a specialist',
        body: 'Dentists, oral surgeons, physical therapists and pain specialists — who does what, and where to start.',
        icon: 'search',
      },
      {
        title: 'Splints and oral appliances',
        body: 'Night guards and stabilisation splints: what they do, what they do not do, and how they are fitted.',
        icon: 'shield',
      },
      {
        title: 'Physical therapy',
        body: 'Jaw exercises, posture and manual therapy for muscle-related jaw pain.',
        icon: 'heart',
      },
      {
        title: 'Self-care at home',
        body: 'Heat, soft foods, jaw rest and stress management — the measures that help while you wait for care.',
        icon: 'leaf',
      },
      {
        title: 'When surgery is considered',
        body: 'Why surgery is rare, what it involves and the questions to ask before considering it.',
        icon: 'scalpel',
      },
    ],
    about: {
      title: 'Jaw pain has many causes. The specialist matters.',
      body: [
        'TMJ disorders affect the jaw joint and the muscles around it. Symptoms range from clicking and stiffness to headaches, ear pain and a jaw that locks. The causes vary too — teeth grinding, arthritis, injury, stress and bite problems can all play a role.',
        'Because the causes differ, so does the right clinician. Some people need a dentist, others a physical therapist or a pain specialist. We explain the pathways so you start with the right one.',
      ],
      bullets: [
        'Symptoms and likely causes explained',
        'Which specialist treats which problem',
        'Conservative treatment first',
        'When to seek urgent care',
      ],
    },
    faqs: [
      {
        q: 'What is TMJ disorder?',
        a: 'TMJ disorder is a group of conditions affecting the temporomandibular joint — the joint in front of each ear that connects the jaw to the skull — and the muscles that move it. It can cause pain, clicking, stiffness and difficulty opening the mouth.',
      },
      {
        q: 'Which doctor should I see for TMJ?',
        a: 'A dentist is often the first step, especially if grinding or bite problems are suspected. Depending on the cause, you may be referred to an oral and maxillofacial surgeon, a physical therapist or a pain specialist.',
      },
      {
        q: 'Do I need surgery for TMJ?',
        a: 'Usually not. Most TMJ disorders improve with conservative treatment: self-care, splints, physical therapy and addressing grinding. Surgery is reserved for a small number of cases that do not respond to other treatment.',
      },
      {
        q: 'When should I seek urgent care?',
        a: 'If your jaw locks open or closed and will not move, if you cannot open your mouth enough to eat, or if pain follows a recent injury or comes with swelling and fever, seek care promptly.',
      },
    ],
    contact: {
      title: 'Find a TMJ specialist.',
      body: 'Tell us your city and your main symptoms — pain, clicking, locking or headaches. We will point you to the right type of clinician.',
      email: '',
      phone: '',
      address: 'Dental providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'TMJ Specialist Guide',
      href: 'https://tmjspecialistguide.com/',
    },
    posts: [
      {
        slug: 'tmj-symptoms-when-to-see-a-doctor',
        title: 'TMJ symptoms: when to see a doctor',
        description: 'Clicking, locking, headaches and the signs that need a clinician.',
        date: '2026-10-12',
        body: '<p>Occasional clicking without pain is common and often needs no treatment. Pain, stiffness, a jaw that catches or locks, and headaches or ear pain that keep returning are the signs to take seriously.</p><p>See a clinician if symptoms last more than a few weeks, interfere with eating or sleep, or follow an injury. Bring a note of when symptoms started and what makes them better or worse.</p>',
      },
      {
        slug: 'tmj-self-care-that-helps',
        title: 'TMJ self-care that actually helps',
        description: 'Heat, soft foods, jaw rest and the habits worth changing.',
        date: '2026-09-28',
        body: '<p>Resting the jaw helps: soft foods, smaller bites, avoiding chewing gum and keeping teeth slightly apart during the day. Warm compresses relax the muscles, and gentle stretching can reduce stiffness.</p><p>Stress matters because it drives clenching, often at night. A splint can protect the teeth, but it does not replace addressing the cause — which is why a proper assessment comes first.</p>',
      },
    ],
  },
  {
    slug: 'walkin-tub',
    site: 'https://walkintublab.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/walkin-tub/',
    brand: 'Walk-In Tub Lab',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F6F1EA',
      surface: '#FFFDF8',
      ink: '#2A2320',
      muted: '#6B5B52',
      brand: '#6E5B3E',
      brandInk: '#FFFFFF',
      accent: '#C97B4A',
      border: '#E6D8C8',
    },
    seo: {
      title: 'Walk-In Tub Lab — Walk-in tub costs, installation and safety',
      description:
        'Walk-in tub models, what affects the cost, how installation works and the safety features that matter.',
    },
    hero: {
      eyebrow: 'Accessible bathing',
      title: 'A walk-in tub that fits your home.',
      body: 'Walk-in tub models, costs, installation and the safety features that matter — for older adults and anyone who needs a safer bath.',
      primaryCta: 'Plan your install',
      primaryHref: '/contact/',
      secondaryCta: 'Models and features',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '5', label: 'topics covered' },
      { value: '4', label: 'questions answered' },
      { value: '2026', label: 'reviewed' },
    ],
    services: [
      {
        title: 'Walk-in tub models',
        body: 'Soaking, hydrotherapy and bariatric models — sizes, door styles and what fits a standard bathroom.',
        icon: 'box',
      },
      {
        title: 'Installation',
        body: 'Removing the old tub, plumbing, electrical work and what a typical install day looks like.',
        icon: 'wrench',
      },
      {
        title: 'Safety features',
        body: 'Low thresholds, grab bars, non-slip floors, anti-scald valves and seated bathing.',
        icon: 'shield',
      },
      {
        title: 'Cost factors',
        body: 'How the tub model, the bathroom condition and the scope of work affect the final price.',
        icon: 'chart',
      },
      {
        title: 'Maintenance',
        body: 'Cleaning, seal care and keeping jets, heaters and drains working year after year.',
        icon: 'check',
      },
    ],
    about: {
      title: 'A safer bath, without rebuilding the bathroom.',
      body: [
        'A walk-in tub has a low step-in threshold and a watertight door, so you sit down inside it instead of climbing over a high tub wall. For older adults and people with limited mobility, that one change removes the most dangerous moment of bathing.',
        'Most walk-in tubs fit the space of a standard bathtub, though plumbing and electrical work may still be needed. We explain the models, the install and the costs so you can plan with confidence.',
      ],
      bullets: [
        'Low threshold and seated bathing',
        'Fits most standard tub spaces',
        'Safety features that actually matter',
        'Installation and cost factors explained',
      ],
    },
    faqs: [
      {
        q: 'How much does a walk-in tub cost?',
        a: 'There is no single price. Cost depends on the tub model, the condition of the bathroom, plumbing and electrical work, and whether the walls or floor need changes. Ask for a written quote after an in-home assessment.',
      },
      {
        q: 'How long does installation take?',
        a: 'A straightforward replacement can often be done in one to two days. If plumbing, electrical work or wall repairs are needed, the project takes longer. The installer should give a written schedule before work starts.',
      },
      {
        q: 'Will a walk-in tub fit my bathroom?',
        a: 'Most walk-in tubs are designed to fit a standard bathtub space. The installer measures the room, checks the door swing, the drain location and the water heater capacity before confirming the model.',
      },
      {
        q: 'Does Medicare cover a walk-in tub?',
        a: 'Generally no — Medicare usually classifies walk-in tubs as home modifications rather than medical equipment. Some Medicaid waiver programs or veterans benefits may help in specific cases, so check your own coverage before buying.',
      },
    ],
    contact: {
      title: 'Plan your walk-in tub.',
      body: 'Tell us your bathroom size and who will use the tub. We will outline the options and the questions to ask an installer.',
      email: '',
      phone: '',
      address: 'Walk-in tub installers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Walk-In Tub Lab',
      href: 'https://walkintublab.com/',
    },
    posts: [
      {
        slug: 'walk-in-tub-cost-factors',
        title: 'What affects the cost of a walk-in tub?',
        description: 'Tub model, bathroom condition and the scope of installation work.',
        date: '2026-10-14',
        body: '<p>The tub itself is only part of the price. Hydrotherapy jets, a heater, a wider door and a bariatric size all add cost, and the bathroom condition matters just as much: old plumbing, damaged walls or an undersized water heater can add significant work.</p><p>Get quotes after an in-home assessment, not over the phone, and ask what is included: removal of the old tub, plumbing, electrical, tiling and cleanup.</p>',
      },
      {
        slug: 'walk-in-tub-safety-features',
        title: 'Walk-in tub safety features that matter',
        description: 'Threshold height, grab bars, anti-scald valves and non-slip surfaces.',
        date: '2026-09-30',
        body: '<p>The most important features are the ones you use every time: a low threshold, a door that seals reliably, grab bars placed where your hands naturally reach, and a non-slip floor. An anti-scald valve and a hand-held shower head are also worth having.</p><p>Hydrotherapy jets are a comfort feature, not a safety one. Choose the safety features first, then decide which extras are worth the price.</p>',
      },
    ],
  },

  {
    slug: 'foundation',
    site: 'https://foundationrepairlab.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/foundation/',
    brand: 'Foundation Repair Lab',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F5F1EA',
      surface: '#FFFDF8',
      ink: '#26221C',
      muted: '#6B6156',
      brand: '#6B4A2F',
      brandInk: '#FFFFFF',
      accent: '#C98A3B',
      border: '#E4D9C8',
    },
    seo: {
      title: 'Foundation Repair Lab — Foundation repair, cracks and costs explained',
      description:
        'Plain-language guides to foundation cracks, water damage, piering and repair costs — so you can tell a real problem from a cosmetic one.',
    },
    hero: {
      eyebrow: 'Foundation repair',
      title: 'A cracked foundation, explained before the quote.',
      body: 'Which cracks matter, what causes them, how repairs work and what drives the cost — in plain language, before a contractor walks through the door.',
      primaryCta: 'Get repair guidance',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'repair topics covered' },
      { value: '4', label: 'FAQs answered' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Crack assessment',
        body: 'How to tell a hairline shrinkage crack from a structural one, and when an engineer should look at it.',
        icon: 'search',
      },
      {
        title: 'Piering and underpinning',
        body: 'Steel and helical piers, how they stabilise a sinking foundation and what installation involves.',
        icon: 'layers',
      },
      {
        title: 'Waterproofing and drainage',
        body: 'Interior and exterior drainage, grading and sump systems that keep water away from the footing.',
        icon: 'droplet',
      },
      {
        title: 'Basement wall repair',
        body: 'Bowing and leaning walls: carbon fibre straps, wall anchors and when replacement is the honest answer.',
        icon: 'shield',
      },
      {
        title: 'Slab repair',
        body: 'Slab jacking, polyurethane foam lifting and crack injection for settled or uneven concrete slabs.',
        icon: 'wrench',
      },
      {
        title: 'Repair cost guides',
        body: 'What drives foundation repair pricing — method, depth, access and region — and how to compare quotes.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'Not every crack is an emergency. Some are.',
      body: [
        'Concrete shrinks as it cures, so hairline cracks are common in new foundations. Horizontal cracks, stair-step cracks in brickwork and doors that stop closing are different — they point to movement, pressure or settlement.',
        'We explain the signs, the repair methods and the cost drivers in plain language, so a homeowner can ask a contractor the right questions instead of accepting the first quote.',
      ],
      bullets: [
        'Crack types and what each one means',
        'Repair methods, from piers to anchors',
        'Drainage and waterproofing basics',
        'How to compare contractor quotes',
      ],
    },
    faqs: [
      {
        q: 'Are small foundation cracks normal?',
        a: 'Hairline vertical cracks are often the result of concrete shrinkage and may be cosmetic. Horizontal cracks, wide cracks, or cracks that keep growing should be inspected by a structural engineer.',
      },
      {
        q: 'What causes a foundation to settle?',
        a: 'Usually soil movement: expansive clay that swells and shrinks with moisture, poor compaction during construction, or water pooling near the footing. Plumbing leaks can also wash out soil beneath a slab.',
      },
      {
        q: 'How long does foundation repair take?',
        a: 'It depends on the method and the extent of the damage. Small crack repairs can take a day; piering a whole corner of a house usually takes several days, plus time for any follow-up monitoring.',
      },
      {
        q: 'What affects foundation repair cost?',
        a: 'The repair method, the depth of the piers, access to the work area, the extent of the damage and local labour rates. Costs vary widely by region, so get several written quotes that itemise the work.',
      },
    ],
    contact: {
      title: 'Describe the crack or the symptom.',
      body: 'Tell us what you are seeing — crack direction, width, water in the basement — and we will point you to the right guide.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Foundation Repair Lab',
      href: 'https://foundationrepairlab.com/',
    },
    posts: [
      {
        slug: 'foundation-cracks-which-ones-matter',
        title: 'Foundation cracks: which ones matter?',
        description: 'Hairline, horizontal and stair-step cracks — and what each one means.',
        date: '2026-10-05',
        body: '<p>Hairline vertical cracks are usually shrinkage and rarely structural. Horizontal cracks in a basement wall often mean lateral soil pressure, and stair-step cracks in brickwork can signal settlement.</p><p>The key is change: photograph and measure a crack, then check it again in a few months. A crack that is growing, letting in water or paired with sticking doors deserves a professional look.</p>',
      },
      {
        slug: 'how-much-does-foundation-repair-cost',
        title: 'How much does foundation repair cost?',
        description: 'The factors that move a quote up or down, and how to compare them.',
        date: '2026-09-19',
        body: '<p>Foundation repair costs vary widely by method and region. A simple crack injection is at the low end; piering an entire side of a house is at the high end, and poor access or deep piers add to the bill.</p><p>Compare quotes by method, number of piers, warranty terms and what is excluded — excavation, landscaping and interior finishes are common surprises.</p>',
      },
      {
        slug: 'water-around-the-foundation',
        title: 'Water around the foundation: the quiet cause of most damage',
        description: 'Grading, gutters and drainage — the cheapest foundation repair is prevention.',
        date: '2026-09-02',
        body: '<p>Most foundation problems start with water: soil that swells when wet and shrinks when dry, or hydrostatic pressure pushing against basement walls. Grading soil away from the house and keeping gutters clear are the first lines of defence.</p><p>A sump pump and interior drain tile help where water tables are high, but they manage water rather than stop it — the outside drainage still matters.</p>',
      },
    ],
  },
  {
    slug: 'garage-door',
    site: 'https://garagedoorlabs.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/garage-door/',
    brand: 'Garage Door Labs',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F3F4F2',
      surface: '#FFFFFF',
      ink: '#1F2422',
      muted: '#5C6660',
      brand: '#33544A',
      brandInk: '#FFFFFF',
      accent: '#D07A2E',
      border: '#DCE2DE',
    },
    seo: {
      title: 'Garage Door Labs — Garage door repair, replacement and costs',
      description:
        'Garage door springs, openers, panels and replacement costs explained — plus when to call a pro and when to leave it alone.',
    },
    hero: {
      eyebrow: 'Garage doors',
      title: 'Garage door trouble, diagnosed before the visit.',
      body: 'Springs, openers, tracks and panels — what breaks, what it costs to fix, and what you should never try to repair yourself.',
      primaryCta: 'Get repair guidance',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'repair topics covered' },
      { value: '4', label: 'FAQs answered' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Spring replacement',
        body: 'Torsion and extension springs: why they fail, why the repair is dangerous and what a safe replacement involves.',
        icon: 'wrench',
      },
      {
        title: 'Opener repair and replacement',
        body: 'Chain, belt and screw-drive openers, remotes, sensors and smart controls — repair or replace?',
        icon: 'bolt',
      },
      {
        title: 'Track and roller repair',
        body: 'Bent tracks, worn rollers and a door that sticks or jumps — causes, fixes and lubrication basics.',
        icon: 'layers',
      },
      {
        title: 'Panel replacement',
        body: 'Dented or damaged panels: when a single panel can be swapped and when the whole door makes more sense.',
        icon: 'grid',
      },
      {
        title: 'Insulated doors',
        body: 'Insulation ratings, attached-garage comfort and how a better door changes energy use.',
        icon: 'home',
      },
      {
        title: 'Cost guides',
        body: 'What drives garage door pricing — size, material, opener type and labour — and how to compare quotes.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'The biggest moving part of your house.',
      body: [
        'A garage door opens and closes thousands of times a year, weighs well over a hundred pounds and is held in tension by springs that store serious energy. Most failures are predictable: a worn spring, a dry roller, a sensor out of alignment.',
        'We explain each component, the warning signs and the cost drivers — and we are blunt about the one repair that should never be a DIY job.',
      ],
      bullets: [
        'Springs, openers and tracks explained',
        'Warning signs before a failure',
        'Repair versus replacement, honestly',
        'How to compare installer quotes',
      ],
    },
    faqs: [
      {
        q: 'Can I replace a garage door spring myself?',
        a: 'No. Torsion springs store enough energy to cause serious injury. Spring replacement is one of the few home repairs that should always be left to a trained technician with the right tools.',
      },
      {
        q: 'Why does my garage door only open halfway?',
        a: 'Common causes are a broken spring, a misaligned safety sensor, a stripped opener gear or a track obstruction. If the door is heavy to lift by hand, the spring is the likely culprit.',
      },
      {
        q: 'How long should a garage door opener last?',
        a: 'Most openers last around 10 to 15 years with basic maintenance. Noisy operation, intermittent failure and outdated safety features are signs it is time to consider a replacement.',
      },
      {
        q: 'What affects the cost of a new garage door?',
        a: 'Size, material (steel, wood, aluminium, composite), insulation, windows, opener type and installation labour. Costs vary by region, so get itemised quotes from more than one installer.',
      },
    ],
    contact: {
      title: 'Describe the door problem.',
      body: 'Tell us what the door is doing — or not doing — and we will point you to the right guide.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Garage Door Labs',
      href: 'https://garagedoorlabs.com/',
    },
    posts: [
      {
        slug: 'broken-garage-door-spring-signs',
        title: 'Signs your garage door spring is broken',
        description: 'The loud bang, the heavy door and what to do next.',
        date: '2026-10-07',
        body: '<p>A broken torsion spring often announces itself with a loud bang from the garage, followed by a door that will not lift or feels extremely heavy. You may also see a visible gap in the spring coil.</p><p>Do not keep running the opener — it can burn out the motor. Disconnect the opener, leave the door down and call a technician.</p>',
      },
      {
        slug: 'garage-door-opener-types-compared',
        title: 'Garage door opener types, compared',
        description: 'Chain, belt and screw drive — noise, maintenance and cost.',
        date: '2026-09-22',
        body: '<p>Chain-drive openers are affordable and durable but the noisiest. Belt drives are quieter and a good choice for bedrooms above the garage. Screw-drive openers have fewer moving parts but need more maintenance in extreme temperatures.</p><p>Smart openers add phone control and alerts. Choose by noise tolerance and how often the door cycles, not by features alone.</p>',
      },
      {
        slug: 'garage-door-maintenance-checklist',
        title: 'A garage door maintenance checklist',
        description: 'The ten-minute routine that prevents most breakdowns.',
        date: '2026-09-08',
        body: '<p>Twice a year, check the safety sensors, lubricate rollers and hinges, tighten loose bolts and test the auto-reverse feature with a roll of paper towels under the door.</p><p>Listen for grinding or popping sounds — they usually mean a roller or hinge is wearing out. Catching it early is a small repair; ignoring it is a new opener.</p>',
      },
    ],
  },
  {
    slug: 'gutter',
    site: 'https://gutterguardlabs.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/gutter/',
    brand: 'Gutter Guard Labs',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F4F6F1',
      surface: '#FFFFFF',
      ink: '#20261E',
      muted: '#5B6656',
      brand: '#3E6B35',
      brandInk: '#FFFFFF',
      accent: '#C9A227',
      border: '#DDE5D5',
    },
    seo: {
      title: 'Gutter Guard Labs — Gutter guards, clogs and costs explained',
      description:
        'Mesh, screen, foam and reverse-curve gutter guards compared — plus cleaning, clog prevention and real costs.',
    },
    hero: {
      eyebrow: 'Gutter protection',
      title: 'Gutters that stay clear, season after season.',
      body: 'Which gutter guard actually works, what it costs, and why even the best guard still needs a look once a year.',
      primaryCta: 'Get guard guidance',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '5', label: 'guard topics covered' },
      { value: '4', label: 'FAQs answered' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Guard types compared',
        body: 'Mesh, screen, foam inserts and reverse-curve systems — what each one blocks and where each one fails.',
        icon: 'grid',
      },
      {
        title: 'Clog prevention',
        body: 'Leaves, pine needles, shingle grit and seeds: which debris causes the most trouble and how to manage it.',
        icon: 'leaf',
      },
      {
        title: 'Gutter cleaning',
        body: 'How often gutters really need cleaning, what a cleaning includes and how to tell it was done properly.',
        icon: 'droplet',
      },
      {
        title: 'Downspout and drainage',
        body: 'Extensions, splash blocks and underground drains that move water away from the foundation.',
        icon: 'arrow',
      },
      {
        title: 'Cost guides',
        body: 'Guard pricing by type and linear foot, installation labour and how to compare quotes fairly.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'No guard is maintenance-free. The honest ones admit it.',
      body: [
        'Gutter guards reduce cleaning; they do not eliminate it. Fine mesh blocks most debris but can clog with shingle grit; reverse-curve systems shed leaves well but struggle with pine needles.',
        'We compare guard types by the debris your trees actually drop, explain installation and pricing, and say plainly when a guard is not worth the money.',
      ],
      bullets: [
        'Guard types compared by debris',
        'Realistic cleaning expectations',
        'Downspout and drainage basics',
        'Cost per linear foot, explained',
      ],
    },
    faqs: [
      {
        q: 'Do gutter guards really work?',
        a: 'They reduce how often gutters clog, especially with large leaves. They work best when matched to the debris on your roof — mesh for small debris, screens for large leaves. No guard eliminates cleaning entirely.',
      },
      {
        q: 'How often should gutters be cleaned?',
        a: 'Most homes need cleaning at least twice a year, in spring and autumn. Homes under large trees may need more. Guards can stretch the interval, but an annual inspection is still wise.',
      },
      {
        q: 'Can I install gutter guards myself?',
        a: 'Many screen and foam guards are DIY-friendly. Mesh systems that slide under shingles are trickier and can affect a roof warranty if installed incorrectly.',
      },
      {
        q: 'What affects gutter guard cost?',
        a: 'The guard type, the total length of gutter, roof pitch and height, and installation labour. Prices are usually quoted per linear foot and vary by region.',
      },
    ],
    contact: {
      title: 'Tell us about your gutters.',
      body: 'Roof type, nearby trees and the clog problem you keep having — we will point you to the right guide.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Gutter Guard Labs',
      href: 'https://gutterguardlabs.com/',
    },
    posts: [
      {
        slug: 'gutter-guard-types-compared',
        title: 'Gutter guard types, compared honestly',
        description: 'Mesh, screen, foam and reverse curve — strengths and weak points.',
        date: '2026-10-04',
        body: '<p>Fine mesh blocks the smallest debris but can be overwhelmed by shingle grit. Screens are cheap and easy to install but let pine needles through. Foam inserts are simple but can hold moisture and need regular replacement.</p><p>Reverse-curve systems use surface tension to shed leaves, but they are the most expensive and perform worst with heavy pine needle drop.</p>',
      },
      {
        slug: 'signs-your-gutters-are-clogged',
        title: 'Signs your gutters are clogged',
        description: 'Overflow, sagging and the foundation damage that follows.',
        date: '2026-09-16',
        body: '<p>Water spilling over the edge during rain, gutters pulling away from the fascia, plants growing in the trough and damp patches on the foundation are all signs of a clog.</p><p>Clogged gutters do more than look bad — overflowing water erodes soil at the foundation and can find its way into the basement.</p>',
      },
    ],
  },
  {
    slug: 'driveway',
    site: 'https://drivewaysealinglab.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/driveway/',
    brand: 'Driveway Sealing Lab',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F5F3F0',
      surface: '#FFFFFF',
      ink: '#23211E',
      muted: '#645E57',
      brand: '#4A4A48',
      brandInk: '#FFFFFF',
      accent: '#B4552D',
      border: '#E2DDD7',
    },
    seo: {
      title: 'Driveway Sealing Lab — Driveway sealing, crack repair and costs',
      description:
        'Asphalt and concrete driveway sealing, crack repair and resurfacing — timing, materials and costs explained.',
    },
    hero: {
      eyebrow: 'Driveway care',
      title: 'A driveway that lasts starts with the seal.',
      body: 'When to seal, what to fill cracks with, and how to tell a resurface from a full replacement — before you pay for either.',
      primaryCta: 'Get sealing guidance',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '5', label: 'driveway topics covered' },
      { value: '4', label: 'FAQs answered' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Asphalt sealing',
        body: 'Coal tar and asphalt-emulsion sealers: what each one does, how long it lasts and when to apply it.',
        icon: 'shield',
      },
      {
        title: 'Crack repair',
        body: 'Hairline cracks, wide cracks and alligator cracking — the right filler for each, and the ones that mean deeper trouble.',
        icon: 'wrench',
      },
      {
        title: 'Concrete sealing',
        body: 'Penetrating and film-forming sealers for concrete driveways, patios and walkways.',
        icon: 'layers',
      },
      {
        title: 'Resurfacing',
        body: 'When an overlay fixes the surface and when the base has failed and replacement is the honest answer.',
        icon: 'grid',
      },
      {
        title: 'Cost guides',
        body: 'Sealing, repair and resurfacing pricing by square footage, condition and region — and how to compare quotes.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'Seal the surface, protect the base.',
      body: [
        'A driveway fails from the top down: water enters small cracks, freezes, widens them, and eventually undermines the base. Sealing is cheap insurance against that cycle — if it is done at the right time and on a properly cleaned surface.',
        'We explain sealers, crack fillers and resurfacing in plain language, with realistic timing and costs, so you can judge whether a quote is fair.',
      ],
      bullets: [
        'Sealer types and their trade-offs',
        'Crack repair by crack type',
        'When to resurface, when to replace',
        'Cost per square foot, explained',
      ],
    },
    faqs: [
      {
        q: 'How often should a driveway be sealed?',
        a: 'Asphalt driveways typically need sealing every two to three years, depending on climate, traffic and the sealer used. Concrete driveways need it less often. If water no longer beads on the surface, it is time.',
      },
      {
        q: 'Can I seal my driveway myself?',
        a: 'Yes, for a driveway in decent shape. Cleaning and crack filling matter more than the sealer itself. Large cracks, alligator cracking or drainage problems are better handled by a professional.',
      },
      {
        q: 'What is the best weather for sealing?',
        a: 'Dry, warm weather — usually above 50°F (10°C) with no rain for at least 24 hours after application. Sealer applied in cold or damp conditions will not cure properly.',
      },
      {
        q: 'What affects driveway sealing cost?',
        a: 'Driveway size, surface condition, crack repair needed, sealer type and local labour rates. Costs vary by region, so get quotes that itemise preparation separately from the sealer.',
      },
    ],
    contact: {
      title: 'Tell us about your driveway.',
      body: 'Asphalt or concrete, age, cracks and size — we will point you to the right guide.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Driveway Sealing Lab',
      href: 'https://drivewaysealinglab.com/',
    },
    posts: [
      {
        slug: 'when-to-seal-asphalt-driveway',
        title: 'When to seal an asphalt driveway',
        description: 'Timing, weather and the signs the seal has worn off.',
        date: '2026-10-01',
        body: '<p>New asphalt should cure for at least 90 days before sealing. After that, reseal every two to three years — sooner in harsh winters or under heavy use.</p><p>The test is simple: sprinkle water on the surface. If it beads, the seal is still working. If it soaks in and darkens the asphalt, it is time.</p>',
      },
      {
        slug: 'driveway-cracks-what-they-mean',
        title: 'Driveway cracks: what they mean',
        description: 'Hairline, edge and alligator cracks — and the right fix for each.',
        date: '2026-09-14',
        body: '<p>Hairline cracks are normal ageing and take a simple filler. Edge cracks often mean the base is too thin or water is undermining the side. Alligator cracking — a web of small cracks — usually means the base has failed.</p><p>Filling alligator cracks without fixing the base is cosmetic. That pattern is the one to get a professional opinion on before spending money.</p>',
      },
    ],
  },
  {
    slug: 'epoxy-floor',
    site: 'https://epoxygaragefloorlab.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/epoxy-floor/',
    brand: 'Epoxy Garage Floor Lab',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F2F4F5',
      surface: '#FFFFFF',
      ink: '#1D2226',
      muted: '#5A646B',
      brand: '#2F5D6B',
      brandInk: '#FFFFFF',
      accent: '#E07A2F',
      border: '#DCE3E6',
    },
    seo: {
      title: 'Epoxy Garage Floor Lab — Epoxy garage floors, coatings and costs',
      description:
        'Epoxy, polyaspartic and concrete coatings for garage floors — prep, durability, flakes and costs explained.',
    },
    hero: {
      eyebrow: 'Garage floors',
      title: 'An epoxy floor that actually sticks.',
      body: 'Prep is everything. Grinding, moisture testing and the right coating system — explained before you buy a kit or hire a crew.',
      primaryCta: 'Get coating guidance',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '5', label: 'coating topics covered' },
      { value: '4', label: 'FAQs answered' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Epoxy coatings',
        body: 'Two-part epoxy systems: durability, chemical resistance and where they make sense.',
        icon: 'layers',
      },
      {
        title: 'Polyaspartic coatings',
        body: 'Faster-curing, UV-stable topcoats that resist yellowing — and when they are worth the premium.',
        icon: 'spark',
      },
      {
        title: 'Surface preparation',
        body: 'Grinding versus acid etching, crack repair and moisture testing — the step that decides whether a floor peels.',
        icon: 'wrench',
      },
      {
        title: 'Flake and quartz finishes',
        body: 'Decorative flakes, quartz broadcast and solid colours: grip, looks and cleanability compared.',
        icon: 'grid',
      },
      {
        title: 'Cost guides',
        body: 'DIY kits versus professional installs, pricing by square footage and prep, and how to compare quotes.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'The floor fails at the prep, not the paint.',
      body: [
        'Most peeling epoxy floors were not applied badly — they were applied to a surface that was never properly prepared. Concrete needs grinding, crack repair and a moisture test before any coating goes down.',
        'We explain the coating systems, the prep steps and the cost drivers honestly, including when a DIY kit is fine and when a professional crew is the better spend.',
      ],
      bullets: [
        'Grinding, etching and moisture testing',
        'Epoxy versus polyaspartic, honestly',
        'Flake, quartz and solid finishes',
        'DIY kit versus professional install',
      ],
    },
    faqs: [
      {
        q: 'How long does an epoxy garage floor last?',
        a: 'A professionally installed system typically lasts many years with normal use; a DIY kit on a well-prepared floor lasts less, and on a poorly prepared floor it can peel within a season. Prep and product quality decide the lifespan.',
      },
      {
        q: 'Can I apply epoxy over old paint or sealer?',
        a: 'Usually not without removing it first. Epoxy bonds to bare, profiled concrete. Old paint, sealer or oil stains must be ground off or the coating will delaminate.',
      },
      {
        q: 'What is the difference between epoxy and polyaspartic?',
        a: 'Epoxy is a two-part resin that cures slowly and is very hard; polyaspartic cures much faster, resists UV yellowing and is often used as a topcoat over epoxy. Polyaspartic usually costs more.',
      },
      {
        q: 'What affects epoxy floor cost?',
        a: 'Square footage, surface condition and prep needed, coating system and flake finish, and local labour rates. Quotes vary widely by region, so compare itemised estimates that separate prep from materials.',
      },
    ],
    contact: {
      title: 'Tell us about your garage floor.',
      body: 'Size, current condition and how you use the garage — we will point you to the right guide.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Epoxy Garage Floor Lab',
      href: 'https://epoxygaragefloorlab.com/',
    },
    posts: [
      {
        slug: 'epoxy-floor-prep-mistakes',
        title: 'Epoxy floor prep mistakes that cause peeling',
        description: 'The five prep errors behind most failed garage floors.',
        date: '2026-10-03',
        body: '<p>Skipping the moisture test is the most common mistake: vapour rising through the slab lifts the coating from below. Acid etching instead of grinding is a close second — it rarely opens the concrete pores enough.</p><p>Clean oil stains, repair cracks and grind the surface to a proper profile. Prep is most of the job; the coating itself is the easy part.</p>',
      },
      {
        slug: 'epoxy-vs-polyaspartic',
        title: 'Epoxy vs. polyaspartic: which coating for your garage?',
        description: 'Cure time, UV stability, cost and durability — compared.',
        date: '2026-09-20',
        body: '<p>Epoxy is the workhorse: hard, chemical-resistant and affordable, but slow to cure and prone to yellowing in sunlight. Polyaspartic cures in hours, resists UV and handles temperature swings better.</p><p>Many professional systems use both — epoxy as the base coat, polyaspartic as the topcoat. That combination is the usual reason professional floors outlast DIY kits.</p>',
      },
    ],
  },
  {
    slug: 'pavers',
    site: 'https://paverlabs.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/pavers/',
    brand: 'Paver Labs',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F6F2EB',
      surface: '#FFFDF8',
      ink: '#272219',
      muted: '#6A6252',
      brand: '#7A5A33',
      brandInk: '#FFFFFF',
      accent: '#4F7A4A',
      border: '#E5DBC9',
    },
    seo: {
      title: 'Paver Labs — Paver patios, walkways and driveways explained',
      description:
        'Concrete, brick and stone pavers for patios, walkways and driveways — patterns, base prep, sealing and costs.',
    },
    hero: {
      eyebrow: 'Paver installation',
      title: 'Patios and walkways built on a proper base.',
      body: 'Paver types, patterns, base prep and sealing — the details that decide whether a patio stays level for decades.',
      primaryCta: 'Get paver guidance',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '5', label: 'paver topics covered' },
      { value: '4', label: 'FAQs answered' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Paver patios',
        body: 'Concrete, brick and natural stone patios — material trade-offs, patterns and drainage.',
        icon: 'grid',
      },
      {
        title: 'Walkways and paths',
        body: 'Stepping stones, running bond and herringbone: layout, edging and the right width for the space.',
        icon: 'compass',
      },
      {
        title: 'Paver driveways',
        body: 'Thicker pavers, a deeper base and edge restraint — what makes a driveway different from a patio.',
        icon: 'home',
      },
      {
        title: 'Base preparation',
        body: 'Excavation, compacted gravel and bedding sand: the hidden structure that keeps pavers level.',
        icon: 'layers',
      },
      {
        title: 'Sealing and maintenance',
        body: 'Polymeric sand, sealing and weed control — the upkeep that keeps joints tight and colours rich.',
        icon: 'shield',
      },
      {
        title: 'Cost guides',
        body: 'Paver pricing by material and square footage, base work and labour — and how to compare quotes.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'A paver patio is only as good as its base.',
      body: [
        'Pavers themselves are durable; failures almost always come from underneath — a shallow base, poor compaction or missing edge restraint. A patio that sinks or spreads was usually underbuilt, not under-bought.',
        'We explain materials, patterns, base prep and maintenance in plain language, so you can judge a quote by the base specification, not just the paver colour.',
      ],
      bullets: [
        'Concrete, brick and stone compared',
        'Base depth and compaction, explained',
        'Patterns and drainage basics',
        'Sealing and joint maintenance',
      ],
    },
    faqs: [
      {
        q: 'How long do paver patios last?',
        a: 'With a proper base and edge restraint, a paver patio can last decades. Individual pavers can be lifted and reset if they settle, which is one of the main advantages over poured concrete.',
      },
      {
        q: 'Do pavers need sealing?',
        a: 'Sealing is optional but helps with stain resistance, colour retention and weed growth in the joints. Polymeric sand in the joints matters more than the sealer itself.',
      },
      {
        q: 'Why do pavers sink or shift?',
        a: 'Usually an inadequate or poorly compacted base, missing edge restraint, or water undermining the bedding layer. Settlement in one spot can often be fixed by lifting and re-levelling those pavers.',
      },
      {
        q: 'What affects paver installation cost?',
        a: 'Material type, square footage, base depth and excavation, pattern complexity, edging and local labour rates. Costs vary by region, so get itemised quotes that separate base work from the pavers.',
      },
    ],
    contact: {
      title: 'Tell us about your project.',
      body: 'Patio, walkway or driveway — size, material preference and site conditions — and we will point you to the right guide.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Paver Labs',
      href: 'https://paverlabs.com/',
    },
    posts: [
      {
        slug: 'paver-base-prep-explained',
        title: 'Paver base prep, explained',
        description: 'Why the gravel under your patio matters more than the pavers on top.',
        date: '2026-10-06',
        body: '<p>A paver base is typically several inches of compacted crushed gravel topped with a thin layer of bedding sand. Each layer is compacted in lifts — dumping it all at once and compacting once is not the same thing.</p><p>Edge restraint keeps the whole field from spreading. Without it, pavers creep outward and gaps open up, usually within the first year.</p>',
      },
      {
        slug: 'concrete-vs-brick-vs-stone-pavers',
        title: 'Concrete vs. brick vs. stone pavers',
        description: 'Cost, looks and durability — the honest trade-offs.',
        date: '2026-09-18',
        body: '<p>Concrete pavers are the most affordable and come in the widest range of shapes and colours. Clay brick pavers hold their colour best and age gracefully, but cost more. Natural stone is the most expensive and the most variable in thickness.</p><p>For driveways, thickness matters more than material: a paver rated for pedestrian use will crack under a car. Check the load rating before falling in love with a colour.</p>',
      },
    ],
  },
  {
    slug: 'pool',
    site: 'https://poolresurfacingguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/pool/',
    brand: 'Pool Resurfacing Guide',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F2F6F7',
      surface: '#FFFFFF',
      ink: '#1C262B',
      muted: '#5A686E',
      brand: '#1F6B7A',
      brandInk: '#FFFFFF',
      accent: '#E0A458',
      border: '#D9E4E7',
    },
    seo: {
      title: 'Pool Resurfacing Guide — Pool resurfacing, finishes and costs',
      description:
        'Plaster, pebble, tile and fiberglass pool finishes compared — when to resurface, how long it lasts and what it costs.',
    },
    hero: {
      eyebrow: 'Pool resurfacing',
      title: 'A pool surface that lasts, not just looks new.',
      body: 'Plaster, pebble and tile finishes compared — when to resurface, how the work is done and what drives the cost.',
      primaryCta: 'Get resurfacing guidance',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '5', label: 'resurfacing topics covered' },
      { value: '4', label: 'FAQs answered' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Plaster finishes',
        body: 'White and coloured plaster: the classic finish, its lifespan and the water chemistry that protects it.',
        icon: 'droplet',
      },
      {
        title: 'Pebble finishes',
        body: 'Exposed aggregate and pebble surfaces — durability, texture and why they cost more than plaster.',
        icon: 'layers',
      },
      {
        title: 'Tile and coping',
        body: 'Waterline tile, coping and deck edges: repair, replacement and the details that stop leaks.',
        icon: 'grid',
      },
      {
        title: 'Fiberglass and coatings',
        body: 'Fiberglass shells and epoxy coatings for older pools — when they work and when they do not.',
        icon: 'shield',
      },
      {
        title: 'Cost guides',
        body: 'Resurfacing pricing by pool size, finish type and prep work — and how to compare contractor quotes.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'Resurface at the right time, not a year too late.',
      body: [
        'A pool surface wears slowly: stains, roughness, exposed aggregate and eventually leaks at the shell. Resurfacing too early wastes money; waiting too long turns a surface job into structural repair.',
        'We explain the finish options, the resurfacing process and the cost drivers in plain language, so you can tell a fair quote from a rushed one.',
      ],
      bullets: [
        'Plaster, pebble, tile and fiberglass compared',
        'Signs it is time to resurface',
        'The resurfacing process, step by step',
        'Cost by pool size and finish',
      ],
    },
    faqs: [
      {
        q: 'How do I know my pool needs resurfacing?',
        a: 'Rough or stained plaster, visible cracks, exposed aggregate, persistent leaks or water chemistry that is hard to balance are common signs. A professional inspection can tell surface wear from structural damage.',
      },
      {
        q: 'How long does a resurfaced pool last?',
        a: 'It depends on the finish and the water chemistry. Plaster typically lasts around a decade; pebble and aggregate finishes often last longer. Balanced water chemistry is the biggest factor in any finish’s lifespan.',
      },
      {
        q: 'Can I use the pool during resurfacing?',
        a: 'No. The pool is drained, prepped and refinished, then refilled and cured. The whole process usually takes a couple of weeks, depending on the finish and the weather.',
      },
      {
        q: 'What affects pool resurfacing cost?',
        a: 'Pool size and shape, finish type, the amount of prep and repair work needed, tile and coping replacement, and local labour rates. Costs vary widely by region, so get itemised written quotes.',
      },
    ],
    contact: {
      title: 'Tell us about your pool.',
      body: 'Size, surface type and what you are seeing — stains, cracks, roughness — and we will point you to the right guide.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Pool Resurfacing Guide',
      href: 'https://poolresurfacingguide.com/',
    },
    posts: [
      {
        slug: 'pool-finish-types-compared',
        title: 'Pool finishes compared: plaster, pebble and tile',
        description: 'Cost, texture, lifespan and maintenance — the real differences.',
        date: '2026-10-08',
        body: '<p>Plaster is the most affordable finish and the smoothest underfoot, but it stains and etches more easily. Pebble and aggregate finishes cost more up front, last longer and hide stains better, with a rougher texture.</p><p>Tile is the most durable at the waterline but is rarely used for the whole shell because of cost. Most pools pair a plaster or pebble interior with tile at the waterline.</p>',
      },
      {
        slug: 'when-to-resurface-your-pool',
        title: 'When to resurface your pool',
        description: 'The signs that matter and the ones that can wait.',
        date: '2026-09-21',
        body: '<p>Stains and a rough surface are cosmetic at first, but they are also early warnings. Cracks, delamination and water loss are the signs that should not wait — they can mean the shell itself is at risk.</p><p>Resurfacing in the off-season is often cheaper and faster, since crews are less busy. Plan the work before the swimming season, not during it.</p>',
      },
    ],
  },
  {
    slug: 'landscaping',
    site: 'https://landscapingcostguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/landscaping/',
    brand: 'Landscaping Cost Guide',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F4F6EF',
      surface: '#FFFFFF',
      ink: '#222B1D',
      muted: '#5C6753',
      brand: '#4A6B3A',
      brandInk: '#FFFFFF',
      accent: '#C9A227',
      border: '#DDE4D2',
    },
    seo: {
      title: 'Landscaping Cost Guide — Landscaping design, installation and maintenance costs',
      description:
        'Landscaping costs explained: design, planting, hardscaping and maintenance — what drives the price and how to budget.',
    },
    hero: {
      eyebrow: 'Landscaping costs',
      title: 'Landscaping costs, without the guesswork.',
      body: 'Design, planting, hardscaping and maintenance — what each one costs, what drives the price and how to plan a project in phases.',
      primaryCta: 'Get cost guidance',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'landscaping topics covered' },
      { value: '4', label: 'FAQs answered' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Landscape design',
        body: 'Site analysis, planting plans and phased designs that fit the budget instead of blowing past it.',
        icon: 'compass',
      },
      {
        title: 'Planting and lawns',
        body: 'Native plants, sod and seed, trees and shrubs — what thrives in your climate and soil.',
        icon: 'tree',
      },
      {
        title: 'Hardscaping',
        body: 'Patios, paths, retaining walls and fire features — the built elements that structure a yard.',
        icon: 'layers',
      },
      {
        title: 'Irrigation and drainage',
        body: 'Drip and sprinkler systems, grading and drainage that keep plants alive and water off the house.',
        icon: 'droplet',
      },
      {
        title: 'Maintenance plans',
        body: 'Mowing, pruning, mulching and seasonal cleanups — what a maintenance plan should actually include.',
        icon: 'leaf',
      },
      {
        title: 'Cost guides',
        body: 'Project pricing by scope and region, and how to compare landscaper quotes line by line.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'A good landscape is planned in phases, not bought in one go.',
      body: [
        'The most common landscaping mistake is spending the whole budget on plants and leaving nothing for grading, drainage and soil. The second is designing for the garden centre, not for the yard you actually have.',
        'We explain costs by project type, show what drives each price, and explain how to phase a project so the structure comes first and the planting follows.',
      ],
      bullets: [
        'Costs by project type and scope',
        'Design, drainage and soil first',
        'Native and climate-appropriate planting',
        'Phasing a project over seasons',
      ],
    },
    faqs: [
      {
        q: 'What affects landscaping cost the most?',
        a: 'Scope, site access, soil and grading work, plant size and maturity, hardscaping, and local labour rates. A sloped or hard-to-access yard costs more than a flat one, even for the same design.',
      },
      {
        q: 'Should I hire a designer or go straight to an installer?',
        a: 'For larger projects, a design first usually saves money: it fixes the layout, materials and phasing before anyone digs. Small projects can often go straight to an installer with a clear brief.',
      },
      {
        q: 'How do I keep landscaping costs down?',
        a: 'Phase the project, use smaller plants that grow in, choose native species that need less water and care, and invest in grading and drainage first — rework is the expensive part.',
      },
      {
        q: 'How much maintenance does a new landscape need?',
        a: 'New plantings need regular watering for the first season or two. After establishment, a maintenance plan of seasonal pruning, mulching and cleanups keeps the design in shape.',
      },
    ],
    contact: {
      title: 'Tell us about your yard.',
      body: 'Size, slope, sun exposure and what you want from the space — we will point you to the right guide.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Landscaping Cost Guide',
      href: 'https://landscapingcostguide.com/',
    },
    posts: [
      {
        slug: 'how-to-budget-a-landscaping-project',
        title: 'How to budget a landscaping project',
        description: 'Phasing, contingencies and where the money actually goes.',
        date: '2026-10-09',
        body: '<p>Start with the structure: grading, drainage, soil and hardscaping. Those are the expensive, hard-to-change items. Planting comes after, and smaller plants are a legitimate way to save — they catch up faster than most people expect.</p><p>Hold back a contingency of around ten percent for what the digging reveals. Every old yard hides something: buried concrete, poor soil or a drainage surprise.</p>',
      },
      {
        slug: 'native-plants-lower-maintenance',
        title: 'Native plants, lower maintenance',
        description: 'Why plants that belong in your region cost less to keep alive.',
        date: '2026-09-25',
        body: '<p>Native plants are adapted to local rainfall, soil and pests, so they usually need less water, fertiliser and intervention once established. That is the real saving — not the purchase price, but the years of care after it.</p><p>Mix natives with a few favourites for structure and colour, and group plants by water need so you are not overwatering the drought-tolerant ones to keep the thirsty ones alive.</p>',
      },
      {
        slug: 'landscaping-mistakes-to-avoid',
        title: 'Landscaping mistakes to avoid',
        description: 'Grading, planting too close and the lawn that eats the budget.',
        date: '2026-09-11',
        body: '<p>The most expensive mistake is grading toward the house. Water that pools at the foundation causes damage no planting can hide. The second is planting trees and shrubs too close to the house or to each other — they grow, and then they have to be moved or removed.</p><p>Finally, do not let lawn dominate the budget. A smaller, well-kept lawn with defined beds usually looks better and costs less to maintain than wall-to-wall turf.</p>',
      },
    ],
  },
  {
    slug: 'retaining-wall',
    site: 'https://retainingwalllab.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/retaining-wall/',
    brand: 'Retaining Wall Lab',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F5F2EC',
      surface: '#FFFDF8',
      ink: '#26241D',
      muted: '#66604F',
      brand: '#5C4A2E',
      brandInk: '#FFFFFF',
      accent: '#8A6D3B',
      border: '#E3DACA',
    },
    seo: {
      title: 'Retaining Wall Lab — Retaining walls, materials and costs explained',
      description:
        'Concrete block, timber, stone and gabion retaining walls — height limits, drainage, permits and costs.',
    },
    hero: {
      eyebrow: 'Retaining walls',
      title: 'A wall that holds — because the drainage does.',
      body: 'Block, timber, stone and gabion walls compared. Height, drainage and permits explained before you build.',
      primaryCta: 'Get wall guidance',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '5', label: 'wall topics covered' },
      { value: '4', label: 'FAQs answered' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Concrete block walls',
        body: 'Segmental blocks and poured concrete: the most common choice, and how height changes the engineering.',
        icon: 'layers',
      },
      {
        title: 'Timber walls',
        body: 'Treated timber and sleeper walls — affordable and quick, with a shorter lifespan than masonry.',
        icon: 'tree',
      },
      {
        title: 'Stone walls',
        body: 'Natural stone and dry-stack walls: the look, the cost and the craftsmanship they demand.',
        icon: 'grid',
      },
      {
        title: 'Drainage and backfill',
        body: 'Gravel backfill, drain pipe and weep holes — the system that stops a wall from leaning or failing.',
        icon: 'droplet',
      },
      {
        title: 'Cost guides',
        body: 'Wall pricing by material, height and length, plus engineering and permit costs — and how to compare quotes.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'Water kills retaining walls. Drainage saves them.',
      body: [
        'A retaining wall does not fail because the blocks were weak — it fails because water built up behind it. Hydrostatic pressure pushes, soil swells, and a wall that looked fine for years leans in one wet season.',
        'We explain materials, height limits, drainage and permits in plain language, so you can judge a quote by the drainage specification, not just the wall face.',
      ],
      bullets: [
        'Block, timber, stone and gabion compared',
        'Height limits and when engineering is required',
        'Drainage and backfill, explained',
        'Permits and property-line rules',
      ],
    },
    faqs: [
      {
        q: 'How high can a retaining wall be without engineering?',
        a: 'It depends on local rules, but many areas require engineering and a permit above around four feet. Taller walls, surcharge loads from a driveway or building above, and poor soils lower that threshold.',
      },
      {
        q: 'Do I need a permit for a retaining wall?',
        a: 'Often, yes — especially for taller walls or walls near a property line. Rules vary by municipality, so check before building. An unpermitted wall can cause problems when selling the house.',
      },
      {
        q: 'Why do retaining walls lean or fail?',
        a: 'Usually poor drainage: water builds up behind the wall and pushes it forward. Inadequate footing, the wrong block for the height, or a surcharge load above the wall are the other common causes.',
      },
      {
        q: 'What affects retaining wall cost?',
        a: 'Material, wall height and length, excavation and access, drainage work, engineering and permits, and local labour rates. Costs vary by region, so get itemised quotes that separate the wall from the drainage.',
      },
    ],
    contact: {
      title: 'Tell us about your slope.',
      body: 'Wall height, length, soil and what sits above the wall — we will point you to the right guide.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Retaining Wall Lab',
      href: 'https://retainingwalllab.com/',
    },
    posts: [
      {
        slug: 'retaining-wall-materials-compared',
        title: 'Retaining wall materials, compared',
        description: 'Block, timber, stone and gabion — cost, lifespan and looks.',
        date: '2026-10-10',
        body: '<p>Concrete block is the most common choice: durable, consistent and available in many styles. Timber is cheaper and faster to build but has the shortest lifespan. Natural stone looks best and costs most, and demands a skilled builder.</p><p>Gabion walls — stone-filled wire baskets — handle drainage well and suit a rustic look, but they need space and are not right for every site.</p>',
      },
      {
        slug: 'retaining-wall-drainage-explained',
        title: 'Retaining wall drainage, explained',
        description: 'The gravel, pipe and weep holes that keep a wall standing.',
        date: '2026-09-24',
        body: '<p>Every retaining wall needs drainage: a perforated pipe at the base, gravel backfill that lets water through, and weep holes or outlets to carry it away. Without them, water pressure builds until the wall leans or fails.</p><p>Ask any contractor for the drainage specification in writing. A quote that does not mention drainage is a quote to be suspicious of.</p>',
      },
    ],
  },

  {
    slug: 'sewer',
    site: 'https://sewerlinelabs.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/sewer/',
    brand: 'Sewer Line Labs',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F2F4F1',
      surface: '#FFFFFF',
      ink: '#1E2622',
      muted: '#5A6660',
      brand: '#2F5D50',
      brandInk: '#FFFFFF',
      accent: '#C98A2E',
      border: '#D9E0D8',
    },
    seo: {
      title: 'Sewer Line Labs — Sewer line repair, replacement and costs',
      description:
        'Sewer line inspection, repair and replacement guidance, with plain-language notes on trenchless options and what affects cost.',
    },
    hero: {
      eyebrow: 'Sewer line repair & replacement',
      title: 'A sewer problem, diagnosed before you dig.',
      body: 'Camera inspection, trenchless repair and full replacement — explained in plain language, with honest notes on what drives the cost.',
      primaryCta: 'Get an inspection',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'services covered' },
      { value: '4', label: 'common questions answered' },
      { value: '2026', label: 'last reviewed' },
    ],
    services: [
      {
        title: 'Camera inspection',
        body: 'A camera run through the line shows the blockage, the break or the root intrusion — before anyone starts digging.',
        icon: 'search',
      },
      {
        title: 'Drain clearing',
        body: 'Snaking and hydro-jetting for recurring clogs, with notes on what the clog says about the line.',
        icon: 'droplet',
      },
      {
        title: 'Trenchless repair',
        body: 'Pipe lining and pipe bursting that fix a damaged line with far less digging than open excavation.',
        icon: 'layers',
      },
      {
        title: 'Full replacement',
        body: 'When repair no longer makes sense: excavation, new pipe and the permits that go with it.',
        icon: 'wrench',
      },
      {
        title: 'Root intrusion',
        body: 'Roots find the smallest joint gap. Removal, lining and the tree decisions that prevent a repeat.',
        icon: 'tree',
      },
      {
        title: 'Cost guidance',
        body: 'What affects the price — depth, length, access, material and local permits — and how to compare quotes fairly.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'Start with the camera, not the shovel.',
      body: [
        'Most sewer quotes are guesses until someone looks inside the pipe. A camera inspection turns a vague “probably the line” into a location, a cause and a fix.',
        'We explain the options the way a good contractor would: what can be lined, what has to be replaced, and what the work will cost in your area.',
      ],
      bullets: [
        'Camera inspection before any digging',
        'Trenchless versus open-trench, compared',
        'Permits and municipal rules explained',
        'Quotes compared on the same scope',
      ],
    },
    faqs: [
      {
        q: 'How do I know if the sewer line is the problem?',
        a: 'Multiple drains backing up at once, gurgling toilets, sewage smells in the yard and slow drains across the house usually point to the main line rather than a single fixture.',
      },
      {
        q: 'What is trenchless sewer repair?',
        a: 'A repair done through small access points instead of a full trench. Pipe lining coats the inside of the old pipe; pipe bursting pulls a new pipe through the old one. Not every line qualifies — it depends on the damage and the pipe layout.',
      },
      {
        q: 'How much does sewer line replacement cost?',
        a: 'It varies widely by length, depth, access, pipe material and local permits. Trenchless methods can cost more per foot but save on restoring the yard. Get at least two itemised quotes for the same scope.',
      },
      {
        q: 'Can tree roots be kept out of the line?',
        a: 'Roots enter through joints and cracks. Clearing them helps for a while, but a lasting fix is lining or replacing the damaged section. In some cases the tree itself has to be managed.',
      },
    ],
    contact: {
      title: 'Describe the symptoms.',
      body: 'Tell us which drains are affected, how long it has been happening and whether there is any smell or backup. We will outline the likely next step.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Sewer Line Labs',
      href: 'https://sewerlinelabs.com/',
    },
    posts: [
      {
        slug: 'signs-your-sewer-line-is-failing',
        title: 'Signs your sewer line is failing',
        description: 'The symptoms that point to the main line, not a single drain.',
        date: '2026-10-05',
        body: '<p>One slow sink is usually a local clog. Every drain slowing at once, toilets gurgling when the washer runs, or sewage smells in the yard point to the main sewer line.</p><p>Do not ignore a backup that clears and returns. That pattern usually means a partial blockage or a damaged section, and it gets worse rather than better on its own.</p>',
      },
      {
        slug: 'trenchless-vs-open-trench',
        title: 'Trenchless vs. open-trench sewer repair',
        description: 'When lining works, when it does not, and what each costs in disruption.',
        date: '2026-09-19',
        body: '<p>Trenchless lining leaves the yard mostly intact and is often faster, but it needs a pipe that is still structurally sound enough to line. A collapsed or badly bellied section usually needs excavation.</p><p>Compare quotes on the same scope: length repaired, material, warranty and who restores the surface afterwards.</p>',
      },
    ],
  },
  {
    slug: 'water',
    site: 'https://watertreatmentpro.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/water/',
    brand: 'Water Treatment Pro',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F1F5F7',
      surface: '#FFFFFF',
      ink: '#1B2733',
      muted: '#556670',
      brand: '#2B6CB0',
      brandInk: '#FFFFFF',
      accent: '#2E9E8B',
      border: '#D8E2E8',
    },
    seo: {
      title: 'Water Treatment Pro — Water filtration, softening and costs',
      description:
        'Whole-house filtration, water softeners and reverse osmosis, with plain-language guidance on testing, sizing and cost.',
    },
    hero: {
      eyebrow: 'Water treatment & filtration',
      title: 'Better water starts with a test.',
      body: 'Filtration, softening and reverse osmosis — matched to what your water actually contains, not to a generic package.',
      primaryCta: 'Get a water test',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'services covered' },
      { value: '4', label: 'common questions answered' },
      { value: '2026', label: 'last reviewed' },
    ],
    services: [
      {
        title: 'Water testing',
        body: 'Hardness, iron, chlorine, sediment and the contaminants that decide which system makes sense.',
        icon: 'search',
      },
      {
        title: 'Whole-house filtration',
        body: 'Carbon and sediment systems that treat every tap, sized to the home and the water supply.',
        icon: 'droplet',
      },
      {
        title: 'Water softeners',
        body: 'Ion-exchange systems for hard water, with sizing based on hardness and household use.',
        icon: 'layers',
      },
      {
        title: 'Reverse osmosis',
        body: 'Point-of-use filtration for drinking water, with honest notes on waste water and maintenance.',
        icon: 'shield',
      },
      {
        title: 'Iron & sulfur removal',
        body: 'Systems for orange stains, metallic taste and rotten-egg smell from well water.',
        icon: 'spark',
      },
      {
        title: 'Maintenance',
        body: 'Filter changes, salt top-ups and annual checks that keep a system working as designed.',
        icon: 'wrench',
      },
    ],
    about: {
      title: 'Test first, buy second.',
      body: [
        'A filter that removes chlorine does nothing for hardness, and a softener does nothing for bacteria. The right system follows the test result, not the other way around.',
        'We explain what each technology removes, what it does not, and what it costs to own over five years — not just to install.',
      ],
      bullets: [
        'Lab or field testing before a recommendation',
        'City water versus well water, treated differently',
        'Running costs shown alongside install cost',
        'Maintenance schedule included',
      ],
    },
    faqs: [
      {
        q: 'Do I need a water test before buying a system?',
        a: 'Yes. Hardness, iron, chlorine, pH and sediment are the minimum. Without numbers you are guessing, and the wrong system is an expensive guess.',
      },
      {
        q: 'What is the difference between a filter and a softener?',
        a: 'A filter removes particles, chlorine and some chemicals. A softener removes calcium and magnesium — the minerals that make water hard. They solve different problems and are often installed together.',
      },
      {
        q: 'How much does a whole-house system cost?',
        a: 'It depends on the water, the flow rate, the technology and the installation. Budget for the equipment, the install and the ongoing filter or salt costs, which vary by region and usage.',
      },
      {
        q: 'Is reverse osmosis water safe to drink?',
        a: 'Yes. It removes most dissolved solids, including minerals, which is why some systems add minerals back for taste. Check the filter schedule — an overdue membrane protects nothing.',
      },
    ],
    contact: {
      title: 'Send your water test results.',
      body: 'Tell us whether you are on city or well water, what the test showed and what bothers you most — taste, stains, hardness or smell.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Water Treatment Pro',
      href: 'https://watertreatmentpro.com/',
    },
    posts: [
      {
        slug: 'hard-water-signs',
        title: 'Hard water: the signs and the fix',
        description: 'Scale, spots and dry skin — and what actually softens water.',
        date: '2026-10-04',
        body: '<p>Hard water leaves scale on fixtures, spots on glass and soap that never quite rinses. It also shortens the life of water heaters and dishwashers.</p><p>Only a softener removes hardness. Filters, magnets and conditioners may change how scale forms, but they do not remove the minerals.</p>',
      },
      {
        slug: 'well-water-testing-basics',
        title: 'Well water testing basics',
        description: 'What to test, how often and why the result decides the system.',
        date: '2026-09-16',
        body: '<p>Well water should be tested annually for bacteria, nitrates and the minerals that affect taste and equipment. Test again after flooding or any change in taste, colour or smell.</p><p>The test result is the shopping list. Iron, sulfur, hardness and pH each point to a different treatment — and some combinations need more than one stage.</p>',
      },
    ],
  },
  {
    slug: 'windows',
    site: 'https://windowreplacementlab.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/windows/',
    brand: 'Window Replacement Lab',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F6F2EC',
      surface: '#FFFDF8',
      ink: '#26221E',
      muted: '#6B6156',
      brand: '#8A5A2B',
      brandInk: '#FFFFFF',
      accent: '#4E7A5A',
      border: '#E4DACB',
    },
    seo: {
      title: 'Window Replacement Lab — Window replacement, efficiency and costs',
      description:
        'Window replacement guidance: frame materials, glass options, energy ratings and what affects the cost.',
    },
    hero: {
      eyebrow: 'Window replacement',
      title: 'New windows, chosen on the numbers.',
      body: 'Frame materials, glass packages and energy ratings — compared on what they actually do for comfort and bills.',
      primaryCta: 'Get a quote',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'services covered' },
      { value: '4', label: 'common questions answered' },
      { value: '2026', label: 'last reviewed' },
    ],
    services: [
      {
        title: 'Full-frame replacement',
        body: 'Old frame out, new unit in — the right choice when frames are rotted, out of square or poorly sealed.',
        icon: 'grid',
      },
      {
        title: 'Insert replacement',
        body: 'A new window inside the existing frame. Less disruption and lower cost when the frame is sound.',
        icon: 'box',
      },
      {
        title: 'Energy-efficient glass',
        body: 'Double and triple glazing, low-E coatings and gas fills, explained by U-factor and solar gain.',
        icon: 'leaf',
      },
      {
        title: 'Vinyl windows',
        body: 'Low-maintenance, well-insulated and the most common choice for whole-house replacement.',
        icon: 'home',
      },
      {
        title: 'Wood & fiberglass',
        body: 'Wood for period homes, fiberglass for stability and paintability — with honest notes on upkeep.',
        icon: 'tree',
      },
      {
        title: 'Cost guidance',
        body: 'What drives the price — size, material, glass package, access and the number of windows in the job.',
        icon: 'chart',
      },
    ],
    about: {
      title: 'The frame matters as much as the glass.',
      body: [
        'A premium glass package in a poorly installed frame still drafts. Most window disappointment comes from the install, not the window.',
        'We compare materials and glass on their ratings, and we explain what a good installation looks like — flashing, insulation and square, level, plumb.',
      ],
      bullets: [
        'U-factor and SHGC, explained plainly',
        'Insert versus full-frame, compared',
        'Installation quality checklist',
        'Warranty terms worth reading',
      ],
    },
    faqs: [
      {
        q: 'When should windows be replaced rather than repaired?',
        a: 'Replace when frames are rotted or warped, seals have failed and glass fogs between panes, or the window no longer opens and closes properly. Single-pane glass in a cold climate is also a strong candidate.',
      },
      {
        q: 'What is a good U-factor?',
        a: 'Lower is better. In most of the United States a U-factor of 0.30 or below is a reasonable target for new windows; colder climates benefit from lower still. Check the NFRC label rather than a sales claim.',
      },
      {
        q: 'How much does window replacement cost?',
        a: 'It varies by size, material, glass package and the number of windows. Full-frame replacement costs more than inserts. Compare itemised quotes that list each window separately.',
      },
      {
        q: 'Will new windows lower my energy bills?',
        a: 'They can, especially when replacing single-pane or failed-seal windows. The saving depends on the climate, the old windows and the rest of the house — air sealing and insulation often matter more.',
      },
    ],
    contact: {
      title: 'Tell us about your windows.',
      body: 'How many windows, what material and age they are, and what bothers you — drafts, condensation, noise or sticking sashes.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Window Replacement Lab',
      href: 'https://windowreplacementlab.com/',
    },
    posts: [
      {
        slug: 'insert-vs-full-frame',
        title: 'Insert vs. full-frame window replacement',
        description: 'The cheaper option is not always the right one.',
        date: '2026-10-07',
        body: '<p>An insert window fits inside the existing frame, which keeps the trim and siding intact and the cost down. It works when the frame is square, sound and well sealed.</p><p>Full-frame replacement removes everything down to the rough opening. It costs more and disturbs more, but it fixes rot, bad flashing and out-of-square openings properly.</p>',
      },
      {
        slug: 'reading-the-nfrc-label',
        title: 'Reading the NFRC label',
        description: 'U-factor, SHGC and the two numbers that actually matter.',
        date: '2026-09-20',
        body: '<p>The NFRC label lists the U-factor, which measures heat loss, and the solar heat gain coefficient, which measures how much sun heat comes through. Lower U-factor means better insulation.</p><p>In hot climates a low SHGC matters more; in cold climates a low U-factor matters more. Visible transmittance tells you how much light the glass lets in.</p>',
      },
    ],
  },
  {
    slug: 'radon',
    site: 'https://theradonlab.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/radon/',
    brand: 'The Radon Lab',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F4F2F6',
      surface: '#FFFFFF',
      ink: '#241F2E',
      muted: '#5F5A6E',
      brand: '#5B4B7A',
      brandInk: '#FFFFFF',
      accent: '#C98A2E',
      border: '#DDD8E6',
    },
    seo: {
      title: 'The Radon Lab — Radon testing and mitigation',
      description:
        'Radon testing, mitigation systems and health guidance, with plain-language notes on levels, costs and what to do next.',
    },
    hero: {
      eyebrow: 'Radon testing & mitigation',
      title: 'Radon is invisible. Testing is simple.',
      body: 'Radon is a naturally occurring radioactive gas and a leading cause of lung cancer in non-smokers. A test takes days; a mitigation system brings levels down.',
      primaryCta: 'Test your home',
      primaryHref: '/contact/',
      secondaryCta: 'Radon basics',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '5', label: 'services covered' },
      { value: '4', label: 'common questions answered' },
      { value: '2026', label: 'last reviewed' },
    ],
    services: [
      {
        title: 'Short-term testing',
        body: 'Two-to-seven-day tests that give a first reading, using charcoal canisters or continuous monitors.',
        icon: 'search',
      },
      {
        title: 'Long-term testing',
        body: 'Tests over ninety days that average out seasonal and weather variation for a more reliable result.',
        icon: 'clock',
      },
      {
        title: 'Mitigation systems',
        body: 'Sub-slab depressurisation: a fan and pipe that draw radon from beneath the slab and vent it outside.',
        icon: 'wind',
      },
      {
        title: 'New-build protection',
        body: 'Radon-resistant construction — a gas-permeable layer, sealed joints and a capped vent pipe ready for a fan.',
        icon: 'home',
      },
      {
        title: 'Post-mitigation retesting',
        body: 'A follow-up test after installation confirms the system is working and levels are down.',
        icon: 'check',
      },
    ],
    about: {
      title: 'You cannot smell radon. You can measure it.',
      body: [
        'Radon comes from uranium in soil and rock, enters through cracks and gaps in the foundation, and builds up indoors. It is colourless and odourless, so the only way to know your level is to test.',
        'The US Environmental Protection Agency recommends fixing homes at or above 4 pCi/L, and considering action between 2 and 4 pCi/L. Mitigation is a proven, routine fix.',
      ],
      bullets: [
        'EPA action level of 4 pCi/L',
        'Short-term and long-term testing options',
        'Mitigation by licensed or certified professionals',
        'Retesting after every mitigation',
      ],
    },
    faqs: [
      {
        q: 'What is radon?',
        a: 'A naturally occurring radioactive gas produced by the decay of uranium in soil and rock. It enters homes through cracks in the foundation and openings around pipes, and it is the second leading cause of lung cancer overall.',
      },
      {
        q: 'What level is considered safe?',
        a: 'There is no known completely safe level. The EPA recommends fixing homes at or above 4 pCi/L and considering action between 2 and 4 pCi/L. The average indoor level in the United States is about 1.3 pCi/L.',
      },
      {
        q: 'How long does a radon test take?',
        a: 'A short-term test runs two to seven days. A long-term test runs more than ninety days and gives a better average. For a home purchase, a short-term test with a continuous monitor is common.',
      },
      {
        q: 'How does mitigation work?',
        a: 'The standard system, sub-slab depressurisation, uses a fan and a pipe to pull radon from beneath the foundation and vent it above the roofline. A qualified installer sizes the fan and seals the entry points first.',
      },
    ],
    contact: {
      title: 'Order a test or ask about mitigation.',
      body: 'Tell us the state, the age and foundation type of the home, and whether you already have a test result.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'The Radon Lab',
      href: 'https://theradonlab.com/',
    },
    posts: [
      {
        slug: 'radon-levels-explained',
        title: 'Radon levels, explained',
        description: 'What pCi/L means and when to act.',
        date: '2026-10-03',
        body: '<p>Radon is measured in picocuries per litre (pCi/L). The EPA action level is 4 pCi/L; the average US indoor level is about 1.3 pCi/L. Levels vary by geology, season and how tightly the house is built.</p><p>A result above 4 pCi/L calls for mitigation. Between 2 and 4 pCi/L, the EPA suggests considering a fix, especially if the home will be occupied for many years.</p>',
      },
      {
        slug: 'buying-a-home-radon-test',
        title: 'Buying a home? Get a radon test',
        description: 'Why the test belongs in the inspection, not after closing.',
        date: '2026-09-14',
        body: '<p>Radon testing is a standard part of a home inspection in many regions. A short-term test during the inspection period gives the buyer a number before closing.</p><p>If the result is high, mitigation can be negotiated before purchase. A system typically costs in the low thousands, depending on the home, and is a routine fix rather than a reason to walk away.</p>',
      },
    ],
  },
  {
    slug: 'furnace',
    site: 'https://thefurnacelab.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/furnace/',
    brand: 'The Furnace Lab',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F7F1EC',
      surface: '#FFFDF9',
      ink: '#2A211C',
      muted: '#6B5D52',
      brand: '#A84A2F',
      brandInk: '#FFFFFF',
      accent: '#C9A227',
      border: '#E6D7C9',
    },
    seo: {
      title: 'The Furnace Lab — Furnace repair, replacement and efficiency',
      description:
        'Furnace repair, replacement and efficiency guidance, with plain-language notes on AFUE, sizing and cost.',
    },
    hero: {
      eyebrow: 'Furnace repair & replacement',
      title: 'Heat that works, sized to the house.',
      body: 'Repair or replace, single-stage or modulating, gas or electric — with the sizing and efficiency numbers that decide the answer.',
      primaryCta: 'Book a diagnosis',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'services covered' },
      { value: '4', label: 'common questions answered' },
      { value: '2026', label: 'last reviewed' },
    ],
    services: [
      {
        title: 'Furnace repair',
        body: 'Ignition failures, short cycling, noisy blowers and no-heat calls — diagnosed before parts are ordered.',
        icon: 'wrench',
      },
      {
        title: 'Furnace replacement',
        body: 'When repair stops paying: age, efficiency and the cost of the next breakdown, weighed together.',
        icon: 'flame',
      },
      {
        title: 'Efficiency & AFUE',
        body: 'What AFUE ratings mean, and when a high-efficiency unit pays back — and when it does not.',
        icon: 'chart',
      },
      {
        title: 'Sizing & load calculation',
        body: 'A Manual J calculation beats a rule of thumb. Oversized furnaces short-cycle and wear out early.',
        icon: 'target',
      },
      {
        title: 'Maintenance',
        body: 'Annual inspection, filter changes, burner cleaning and the checks that catch carbon monoxide risks early.',
        icon: 'shield',
      },
      {
        title: 'Thermostat & controls',
        body: 'Smart thermostats, zoning and the settings that actually save fuel without making the house uncomfortable.',
        icon: 'bolt',
      },
    ],
    about: {
      title: 'Repair or replace is a numbers question.',
      body: [
        'A fifteen-year-old furnace with a failed heat exchanger is a different decision from a five-year-old one with a bad ignitor. Age, repair cost and efficiency all belong in the same calculation.',
        'We explain AFUE, sizing and the common failure points in plain language, so a quote is something you can compare rather than something you have to trust blindly.',
      ],
      bullets: [
        'Load calculation before any replacement',
        'AFUE and running costs, compared honestly',
        'Carbon monoxide safety checks',
        'Warranty and lifespan, in writing',
      ],
    },
    faqs: [
      {
        q: 'How long does a furnace last?',
        a: 'Typically 15 to 20 years for a gas furnace, depending on maintenance and usage. Regular filter changes and annual service are the two things that most affect lifespan.',
      },
      {
        q: 'Repair or replace?',
        a: 'A common rule is the 50 percent rule: if the repair costs more than half the price of a new unit and the furnace is over 10 to 15 years old, replacement usually makes more sense. A cracked heat exchanger is almost always a replacement.',
      },
      {
        q: 'What does AFUE mean?',
        a: 'Annual Fuel Utilization Efficiency — the percentage of fuel converted to heat over a season. An 80 percent AFUE furnace wastes about 20 percent; a 95 percent condensing furnace wastes about 5 percent. Higher AFUE costs more upfront.',
      },
      {
        q: 'Why is my furnace short-cycling?',
        a: 'Common causes are a dirty filter, an oversized unit, a faulty thermostat or a flame sensor problem. Short cycling wastes fuel and wears parts, so it is worth diagnosing rather than living with.',
      },
    ],
    contact: {
      title: 'Describe the symptoms.',
      body: 'Tell us the furnace age and fuel type, the symptoms, and whether there is any error code on the unit.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'The Furnace Lab',
      href: 'https://thefurnacelab.com/',
    },
    posts: [
      {
        slug: 'furnace-repair-or-replace',
        title: 'Furnace repair or replace? The honest math',
        description: 'Age, repair cost and efficiency in one decision.',
        date: '2026-10-06',
        body: '<p>Start with the repair quote and the age of the unit. A 300 dollar repair on a six-year-old furnace is easy; the same repair on a seventeen-year-old furnace with a 70 percent AFUE rating is money toward a unit you will replace soon anyway.</p><p>Also ask about the heat exchanger. A crack there is a safety issue, not a maintenance item, and it usually ends the repair-versus-replace debate.</p>',
      },
      {
        slug: 'afue-explained',
        title: 'AFUE, explained',
        description: 'What the efficiency number means for your bill.',
        date: '2026-09-18',
        body: '<p>AFUE is the share of fuel a furnace turns into heat over a heating season. An 80 percent unit sends about a fifth of the fuel up the flue; a 96 percent condensing unit sends about four percent.</p><p>High-efficiency units need a drain for condensate and a different venting setup, so the install costs more. In a cold climate with a long heating season the payback is faster than in a mild one.</p>',
      },
    ],
  },
  {
    slug: 'chimney',
    site: 'https://chimneylabguide.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/chimney/',
    brand: 'Chimney Lab Guide',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F3F2EF',
      surface: '#FFFFFF',
      ink: '#22262A',
      muted: '#5E656C',
      brand: '#3E4A54',
      brandInk: '#FFFFFF',
      accent: '#B4552D',
      border: '#DCE0E2',
    },
    seo: {
      title: 'Chimney Lab Guide — Chimney cleaning, repair and safety',
      description:
        'Chimney sweeping, inspection, repair and fire safety guidance, with plain-language notes on creosote, liners and cost.',
    },
    hero: {
      eyebrow: 'Chimney cleaning & repair',
      title: 'A clean chimney is a safe chimney.',
      body: 'Sweeping, inspection and repair — with the creosote, liner and cap basics that keep a fireplace safe to use.',
      primaryCta: 'Book an inspection',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'services covered' },
      { value: '4', label: 'common questions answered' },
      { value: '2026', label: 'last reviewed' },
    ],
    services: [
      {
        title: 'Chimney sweeping',
        body: 'Soot and creosote removal from the flue, with a camera check of what the brush cannot reach.',
        icon: 'spark',
      },
      {
        title: 'Level 1 & 2 inspection',
        body: 'A visual inspection for regular use, and a camera inspection when buying a home or after a chimney fire.',
        icon: 'search',
      },
      {
        title: 'Creosote removal',
        body: 'Glazed creosote needs more than a brush. Chemical treatment and mechanical removal, done safely.',
        icon: 'flame',
      },
      {
        title: 'Masonry repair',
        body: 'Repointing, crown repair and brick replacement for chimneys damaged by water and freeze-thaw cycles.',
        icon: 'layers',
      },
      {
        title: 'Liner installation',
        body: 'Stainless steel liners for damaged flues, new inserts and gas conversions — sized to the appliance.',
        icon: 'shield',
      },
      {
        title: 'Caps & dampers',
        body: 'Rain caps that keep water and animals out, and dampers that stop conditioned air escaping up the flue.',
        icon: 'home',
      },
    ],
    about: {
      title: 'The flue is the part you cannot see.',
      body: [
        'Most chimney problems hide inside the flue: creosote buildup, cracked liners and blocked caps. The outside can look fine while the inside is a fire risk.',
        'We explain the inspection levels, what creosote is, and when a repair is urgent versus routine — so a sweep is a safety check, not a sales call.',
      ],
      bullets: [
        'Annual sweeping for regular wood use',
        'Camera inspection before buying a home',
        'Creosote stages, explained',
        'Water damage is the main enemy',
      ],
    },
    faqs: [
      {
        q: 'How often should a chimney be swept?',
        a: 'At least once a year if it is used regularly for wood burning. Heavy use, unseasoned wood or a smoky fire may need more frequent sweeping.',
      },
      {
        q: 'What is creosote?',
        a: 'A tar-like deposit left by burning wood. It builds up in the flue and is highly flammable. Thin soot is normal; thick or glazed creosote is a chimney fire risk and needs professional removal.',
      },
      {
        q: 'What is a Level 2 inspection?',
        a: 'A camera inspection of the flue interior, recommended when buying a home, after a chimney fire or earthquake, or when changing the heating appliance. A Level 1 inspection is a visual check of accessible parts.',
      },
      {
        q: 'Why is water damaging my chimney?',
        a: 'Water enters through a cracked crown, missing cap or damaged flashing, then freezes and thaws inside the masonry. A cap, a sound crown and good flashing prevent most of it.',
      },
    ],
    contact: {
      title: 'Tell us about your chimney.',
      body: 'What fuel you burn, how often you use it, and whether there is any smoke, smell or visible damage.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Chimney Lab Guide',
      href: 'https://chimneylabguide.com/',
    },
    posts: [
      {
        slug: 'creosote-stages',
        title: 'Creosote: the three stages',
        description: 'From normal soot to a glazed fire hazard.',
        date: '2026-10-01',
        body: '<p>Stage one creosote is a light, flaky soot that a brush removes easily. Stage two is harder and tar-like. Stage three is a glazed, shiny coating that a brush barely touches.</p><p>Burning dry, seasoned wood and keeping the fire hot reduces buildup. A glazed flue needs chemical treatment or mechanical removal by a professional.</p>',
      },
      {
        slug: 'chimney-inspection-levels',
        title: 'Chimney inspection levels, explained',
        description: 'Level 1, 2 and 3 — and which one you actually need.',
        date: '2026-09-15',
        body: '<p>A Level 1 inspection is a visual check of the accessible parts, suitable for a chimney that is used regularly and has no known problems. Level 2 adds a camera run through the flue and is the standard for home sales.</p><p>Level 3 involves removing parts of the chimney or wall to reach a suspected defect. It is rare and only used when a serious problem is suspected but cannot be reached any other way.</p>',
      },
    ],
  },
  {
    slug: 'asbestos',
    site: 'https://asbestosremovallab.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/asbestos/',
    brand: 'Asbestos Removal Lab',
    themeName: 'TradeKit',
    vertical: 'trade',
    schemaType: 'HomeAndConstructionBusiness',
    locale: 'en',
    palette: {
      bg: '#F2F3EE',
      surface: '#FFFFFF',
      ink: '#232A20',
      muted: '#5B6656',
      brand: '#5F6B3A',
      brandInk: '#FFFFFF',
      accent: '#A8542F',
      border: '#D9DFD2',
    },
    seo: {
      title: 'Asbestos Removal Lab — Asbestos testing and safe removal',
      description:
        'Asbestos testing, abatement and safe removal guidance, with plain-language notes on regulations and why licensed professionals are required.',
    },
    hero: {
      eyebrow: 'Asbestos testing & removal',
      title: 'Asbestos is not a DIY job.',
      body: 'Testing, containment and licensed removal — with the regulations and the health risks explained before anyone touches the material.',
      primaryCta: 'Get a test',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '5', label: 'services covered' },
      { value: '4', label: 'common questions answered' },
      { value: '2026', label: 'last reviewed' },
    ],
    services: [
      {
        title: 'Asbestos testing',
        body: 'Sampling by a trained professional and lab analysis, because asbestos cannot be identified by sight alone.',
        icon: 'search',
      },
      {
        title: 'Licensed abatement',
        body: 'Removal by licensed professionals using containment, negative air pressure and proper disposal.',
        icon: 'shield',
      },
      {
        title: 'Encapsulation',
        body: 'Sealing asbestos-containing material in place when it is intact and removal would create more risk.',
        icon: 'layers',
      },
      {
        title: 'Renovation surveys',
        body: 'A survey before demolition or renovation, required in many jurisdictions for buildings of a certain age.',
        icon: 'building',
      },
      {
        title: 'Safe disposal',
        body: 'Double-bagged, labelled and taken to a licensed facility. Asbestos waste never goes in household bins.',
        icon: 'check',
      },
    ],
    about: {
      title: 'Leave it alone until a professional tests it.',
      body: [
        'Asbestos is dangerous when fibres become airborne — during cutting, breaking, sanding or demolition. Material that is intact and undisturbed is usually far less risky than material that has been disturbed.',
        'Removal is regulated work. Licensed abatement professionals use containment and protective equipment, and the law in most states limits who may do it. This site explains the process; it does not replace a licensed survey.',
      ],
      bullets: [
        'Never cut, sand or break suspect material',
        'Lab testing is the only confirmation',
        'Removal requires licensed professionals',
        'Disposal is regulated and documented',
      ],
    },
    faqs: [
      {
        q: 'How do I know if my home has asbestos?',
        a: 'You cannot tell by looking. Asbestos was used in insulation, floor tiles, roofing, siding and pipe wrap, mostly in homes built before the 1980s. Only a lab test of a sample taken by a trained person confirms it.',
      },
      {
        q: 'Can I remove asbestos myself?',
        a: 'In most states, no — removal is restricted to licensed abatement professionals, and some jurisdictions ban homeowner removal entirely. Even where it is not banned, the health risk and the disposal rules make it a job for professionals.',
      },
      {
        q: 'Is asbestos dangerous if left alone?',
        a: 'Intact, undisturbed asbestos-containing material is generally considered low risk. The danger comes when fibres are released by damage, renovation or demolition. That is why testing before any work matters.',
      },
      {
        q: 'How much does asbestos removal cost?',
        a: 'It depends on the amount, the type of material, accessibility and local disposal rules. Small jobs and large abatements differ by an order of magnitude, so get an itemised quote from a licensed contractor after a survey.',
      },
    ],
    contact: {
      title: 'Ask before you disturb anything.',
      body: 'Tell us the age of the building, the material you are worried about and whether any work is planned. Do not cut or break a sample yourself.',
      email: '',
      phone: '',
      address: 'Home service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Asbestos Removal Lab',
      href: 'https://asbestosremovallab.com/',
    },
    posts: [
      {
        slug: 'where-asbestos-hides',
        title: 'Where asbestos hides in older homes',
        description: 'The common materials — and why only a lab test confirms it.',
        date: '2026-10-08',
        body: '<p>Asbestos appears in pipe insulation, floor tiles and their adhesive, roofing felt, cement siding, textured ceilings and vermiculite attic insulation. Homes built before the 1980s are the most likely to contain it.</p><p>None of these can be identified by sight. A sample must be taken by someone trained to do it safely and analysed in an accredited lab.</p>',
      },
      {
        slug: 'renovation-asbestos-survey',
        title: 'Before you renovate: the asbestos survey',
        description: 'Why the survey comes before the sledgehammer.',
        date: '2026-09-12',
        body: '<p>Demolition and renovation disturb exactly the materials that may contain asbestos. A survey before work starts identifies what needs licensed removal and what can stay.</p><p>Many jurisdictions require a survey for commercial buildings and recommend one for older homes. Skipping it risks exposure, a stop-work order and far higher costs later.</p>',
      },
    ],
  },

  {
    slug: 'boatlift',
    site: 'https://boatliftlabs.com/',
    demoUrl: 'https://ahmetalkan.github.io/site-kits/boatlift/',
    brand: 'Boat Lift Labs',
    themeName: 'CharterKit',
    vertical: 'charter',
    schemaType: 'Organization',
    locale: 'en',
    palette: {
      bg: '#EFF4F6',
      surface: '#FFFFFF',
      ink: '#14242F',
      muted: '#54686F',
      brand: '#14506B',
      brandInk: '#FFFFFF',
      accent: '#2E8B8B',
      border: '#D5E0E4',
    },
    seo: {
      title: 'Boat Lift Labs — Boat lifts, explained',
      description:
        'Boat lift types, capacity sizing, installation and maintenance for waterfront owners.',
    },
    hero: {
      eyebrow: 'Boat lifts',
      title: 'The right lift keeps your boat out of the water.',
      body: 'Lift types, capacity sizing, installation and maintenance — explained plainly, so you can choose a system that fits your boat, your dock and your water.',
      primaryCta: 'Plan your lift',
      primaryHref: '/contact/',
      secondaryCta: 'Read the guides',
      secondaryHref: '/blog/',
    },
    stats: [
      { value: '6', label: 'lift types covered' },
      { value: '4', label: 'sizing checks' },
      { value: '2026', label: 'guides reviewed' },
    ],
    services: [
      {
        title: 'Lift types',
        body: 'Cradle, cantilever, floating and elevator lifts compared by water depth, boat weight and dock layout.',
        icon: 'anchor',
      },
      {
        title: 'Capacity sizing',
        body: 'How to size a lift to your boat’s wet weight — hull, fuel, gear and passengers included — with a safety margin.',
        icon: 'chart',
      },
      {
        title: 'Installation',
        body: 'Piling, beams, power and water-depth requirements, and what to check before the first launch.',
        icon: 'wrench',
      },
      {
        title: 'Maintenance',
        body: 'Cables, bunks, motors and drives: the inspection routine that keeps a lift safe season after season.',
        icon: 'shield',
      },
      {
        title: 'Saltwater care',
        body: 'Corrosion, galvanic protection and materials that hold up in salt water versus fresh water.',
        icon: 'droplet',
      },
      {
        title: 'Lift accessories',
        body: 'Canopies, guides, remote controls and solar charging, matched to how you actually use the lift.',
        icon: 'sail',
      },
    ],
    about: {
      title: 'A lift is a decision about the water, not just the boat.',
      body: [
        'A boat stored in the water grows fouling, blisters and corrosion. A boat on a lift stays dry, cleaner and easier to maintain — but only if the lift matches the boat and the water it sits in.',
        'We explain the systems in plain language: how each lift works, what it costs to run, what can go wrong and how to size one before you buy.',
      ],
      bullets: [
        'Lift types compared by water depth',
        'Capacity sizing with a safety margin',
        'Saltwater versus freshwater guidance',
        'Maintenance routines that prevent failure',
      ],
    },
    faqs: [
      {
        q: 'What size boat lift do I need?',
        a: 'Size by the boat’s wet weight: hull weight plus fuel, water, gear and passengers. Then add a margin — a lift rated only just above the boat’s dry weight is undersized. Check the manufacturer’s rating for the exact configuration.',
      },
      {
        q: 'Cradle, cantilever or floating lift — which is right for me?',
        a: 'It depends on water depth and fluctuation. Cradle lifts suit deeper, stable water; cantilever lifts work in shallow water; floating lifts suit areas with large tidal or water-level changes and no fixed dock.',
      },
      {
        q: 'Do I need a permit to install a boat lift?',
        a: 'Often, yes — especially for new pilings, electrical work or installations in regulated waterways. Rules vary by state, county and waterway authority; check before ordering.',
      },
      {
        q: 'How do I maintain a boat lift?',
        a: 'Inspect cables, bunks, pulleys and the drive regularly, grease moving parts as the manufacturer directs, and rinse saltwater equipment. Replace worn cables before they fail — a snapped cable is the most common serious failure.',
      },
    ],
    contact: {
      title: 'Tell us about your boat and your water.',
      body: 'Boat type and weight, water depth and whether the water is fresh or salt. We will point you to the right lift type.',
      email: '',
      phone: '',
      address: 'Marine service providers across the United States',
      hours: '',
    },
    footer: {
      phrase: 'Made by',
      label: 'Boat Lift Labs',
      href: 'https://boatliftlabs.com/',
    },
    posts: [
      {
        slug: 'boat-lift-types-compared',
        title: 'Boat lift types, compared',
        description: 'Cradle, cantilever, floating and elevator lifts — and the water each one suits.',
        date: '2026-10-05',
        body: '<p>Cradle lifts lower a frame under the boat and raise it with cables or hydraulics. They need enough water depth for the cradle to submerge and are common on fixed docks.</p><p>Cantilever lifts use a pivoting frame and work in shallow water. Floating lifts need no pilings and ride with water-level changes, which makes them a good fit for tidal or fluctuating water.</p>',
      },
      {
        slug: 'how-to-size-a-boat-lift',
        title: 'How to size a boat lift',
        description: 'Wet weight, safety margin and the mistakes that lead to an undersized lift.',
        date: '2026-09-19',
        body: '<p>Start with wet weight, not dry weight: add fuel, water, gear and passengers to the hull weight. A full fuel tank alone can add hundreds of pounds.</p><p>Choose a lift rated comfortably above that number. A lift that is only just big enough works harder, wears faster and leaves no room for a heavier boat later.</p>',
      },
      {
        slug: 'boat-lift-maintenance-checklist',
        title: 'Boat lift maintenance checklist',
        description: 'Cables, bunks and drives — the routine that prevents the expensive failure.',
        date: '2026-09-02',
        body: '<p>Inspect cables for fraying and corrosion, check bunks for worn carpet, and look at pulleys and the drive for wear or leaks. Do this at the start of the season and once more mid-season.</p><p>Rinse saltwater gear with fresh water, grease moving parts as the manufacturer directs, and replace a worn cable before it snaps — never after.</p>',
      },
    ],
  },
]

export const presetSlugs = presets.map((preset) => preset.slug)

export function getPreset(slug?: string): Preset {
  const match = presets.find((preset) => preset.slug === slug)
  return match ?? presets[0]
}
