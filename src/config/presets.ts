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
]

export const presetSlugs = presets.map((preset) => preset.slug)

export function getPreset(slug?: string): Preset {
  const match = presets.find((preset) => preset.slug === slug)
  return match ?? presets[0]
}
