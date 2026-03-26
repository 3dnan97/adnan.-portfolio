export type Locale = "en" | "de" | "ar";

export type Project = {
  id: string;
  title: string;
  summary: string;
  year: number;
  impact?: string;
  stacks: string[];
};

export type Metric = {
  id: string;
  before: string;
  after: string;
  description: string;
};

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

type SkillCategory = {
  title: string;
  items: string[];
};

export type PortfolioContent = {
  locale: Locale;
  direction: "ltr" | "rtl";
  pageTitle: string;
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  identity: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    githubUrl: string;
    linkedinUrl: string;
  };
  hero: {
    heading: string;
    summary: string;
  };
  sectionLabels: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    metrics: Metric[];
  };
  experience: {
    heading: string;
    items: ExperienceItem[];
  };
  projects: {
    heading: string;
    items: Project[];
  };
  skills: {
    heading: string;
    categories: SkillCategory[];
  };
  contact: {
    heading: string;
    intro: string;
    footerNote: string;
  };
  ui: {
    projectSearchPlaceholder: string;
    projectSearchAria: string;
    projectFilterAria: string;
    allStacks: string;
    impactLabel: string;
    noProjectsFound: string;
    baselineLabel: string;
    optimizedLabel: string;
    contactFormNameLabel: string;
    contactFormEmailLabel: string;
    contactFormMessageLabel: string;
    contactFormSubmitLabel: string;
    contactFormRequiredError: string;
    contactFormEmailInvalidError: string;
    contactFormSuccess: string;
  };
};

export const locales: Locale[] = ["en", "de", "ar"];

const sharedIdentity = {
  name: "Adnan Al-Khlaki",
  email: "adnanalkhlaki@gmail.com",
  phone: "",
  githubUrl: "https://github.com/3dnan97",
  linkedinUrl: "https://www.linkedin.com/in/3dnan997/",
};

const sharedStacks = ["Astro", "TypeScript", "Tailwind CSS", "Netlify"];

const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    locale: "en",
    direction: "ltr",
    pageTitle: "Adnan Al-Khlaki — Portfolio",
    nav: {
      about: "About",
      experience: "Work",
      projects: "Projects",
      contact: "Contact",
    },
    identity: {
      ...sharedIdentity,
      role: "Frontend-leaning Full-Stack Developer",
      location: "Aachen, Germany",
    },
    hero: {
      heading: "Building reliable web products, one careful component at a time.",
      summary: "I build fast, accessible web experiences with a strong frontend focus — currently at FEV Europe GmbH in Aachen.",
    },
    sectionLabels: {
      about: "02 — About",
      experience: "03 — Experience",
      projects: "04 — Projects",
      skills: "05 — Skills",
      contact: "06 — Contact",
    },
    about: {
      heading: "Building for the web — one careful component at a time.",
      paragraphs: [
        "I’m a junior full-stack developer based in Aachen, frontend-leaning, with a focus on clean implementation and interfaces that feel effortless to use.",
        "Alongside my role at FEV Europe GmbH, I’m completing a B.Sc. in Computer Science at FH Aachen and building production-oriented internal tooling.",
        "My thesis explores GenAI observability and monitoring — how to track, evaluate, and explain LLM behavior in real-world systems.",
      ],
      metrics: [
        {
          id: "load",
          before: "50s",
          after: "<1s",
          description: "Production cold-start and loading time reduced through frontend optimization",
        },
        {
          id: "transition-delay",
          before: "~1.5s",
          after: "0ms",
          description: "Perceived page transition delay removed via aggressive prefetching",
        },
      ],
    },
    experience: {
      heading: "Where I’ve built things.",
      items: [
        {
          title: "Frontend Developer — Intern / Working Student",
          company: "FEV Europe GmbH",
          period: "Apr 2025 – Present",
          bullets: [
            "Rebuilt a bilingual corporate website with Astro, TypeScript, and Tailwind, including EN/AR and RTL/LTR support.",
            "Reduced internal tool pagination load from 50s to under 1s through frontend optimization and data handling improvements.",
            "Cut AI workflow runtime from 4.5 min to around 1 min using Python threading and concurrency.",
            "Built responsive internal interfaces and data-heavy views combining tables, filters, and maps.",
          ],
        },
        {
          title: "Bachelor Thesis: GenAI Observability & Monitoring",
          company: "FEV Europe GmbH",
          period: "Jan 2026 – Present",
          bullets: [
            "Researching practical approaches to track, evaluate, and explain LLM pipeline behavior in production.",
            "Evaluating observability platforms such as Langfuse.",
            "Building a telemetry SDK prototype and integrating it into internal tools.",
            "Designing a unified telemetry structure for usage, latency, and feedback signals.",
          ],
        },
        {
          title: "B.Sc. Computer Science",
          company: "FH Aachen",
          period: "Sep 2020 – Present",
          bullets: [],
        },
      ],
    },
    projects: {
      heading: "Things I’ve built.",
      items: [
        {
          id: "solar-site",
          title: "Bilingual Corporate Website",
          summary: "EN/AR corporate site with full RTL/LTR support and a scalable i18n content architecture, built at FEV Europe GmbH.",
          year: 2026,
          impact: "Astro + TypeScript + Tailwind, shipped with static delivery and excellent performance",
          stacks: sharedStacks,
        },
        {
          id: "data-explorer",
          title: "Internal Data Explorer",
          summary: "Data visualization tool for internal workflows, combining maps, filters, and table-heavy interfaces.",
          year: 2025,
          impact: "Reduced load time from ~50s to under 1s for pagination-heavy flows",
          stacks: ["JavaScript", "Bootstrap", "Flask", "Cosmos DB"],
        },
        {
          id: "portfolio-site",
          title: "This Portfolio",
          summary: "A fast, editorial-style personal website focused on clarity, motion, and bilingual readiness.",
          year: 2026,
          impact: "Structured content model and reusable sections for quick iteration",
          stacks: ["Astro", "TypeScript", "Tailwind", "Netlify"],
        },
      ],
    },
    skills: {
      heading: "My toolkit.",
      categories: [
        {
          title: "Frontend",
          items: ["JavaScript", "TypeScript", "React", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "Astro"],
        },
        {
          title: "Backend",
          items: ["Python", "Node.js / Express", "Flask", "FastAPI", "REST APIs"],
        },
        {
          title: "Data & Infra",
          items: ["Azure Cosmos DB", "PostgreSQL", "WebSockets", "Caching / Performance", "Concurrency"],
        },
        {
          title: "Tools & Other",
          items: ["Git / GitHub", "Netlify", "Docker", "Linux / Bash", "GenAI / LLMs", "Agile / Scrum"],
        },
      ],
    },
    contact: {
      heading: "Let’s work together.",
      intro: "Open to junior frontend or full-stack roles, freelance collaborations, or a good conversation about something meaningful you’re building.",
      footerNote: "Built by Adnan Al-Khlaki · Aachen · 2026",
    },
    ui: {
      projectSearchPlaceholder: "Search projects, stack, or keyword",
      projectSearchAria: "Search projects",
      projectFilterAria: "Filter by stack",
      allStacks: "All stacks",
      impactLabel: "Impact",
      noProjectsFound: "No projects match this filter.",
      baselineLabel: "Baseline",
      optimizedLabel: "Optimized",
      contactFormNameLabel: "Name",
      contactFormEmailLabel: "Email",
      contactFormMessageLabel: "Message",
      contactFormSubmitLabel: "Send message",
      contactFormRequiredError: "This field is required.",
      contactFormEmailInvalidError: "Please enter a valid email address.",
      contactFormSuccess: "Opening your email client...",
    },
  },
  de: {
    locale: "de",
    direction: "ltr",
    pageTitle: "Adnan Al-Khlaki — Portfolio (DE)",
    nav: {
      about: "Über mich",
      experience: "Arbeit",
      projects: "Projekte",
      contact: "Kontakt",
    },
    identity: {
      ...sharedIdentity,
      role: "Frontend-orientierter Full-Stack-Entwickler",
      location: "Aachen, Deutschland",
    },
    hero: {
      heading: "Ich baue zuverlässige Webprodukte – sorgfältig, Komponente für Komponente.",
      summary: "Ich entwickle schnelle, barrierearme Web-Erlebnisse mit starkem Frontend-Fokus – aktuell bei FEV Europe GmbH in Aachen.",
    },
    sectionLabels: {
      about: "02 — Über mich",
      experience: "03 — Erfahrung",
      projects: "04 — Projekte",
      skills: "05 — Skills",
      contact: "06 — Kontakt",
    },
    about: {
      heading: "Webentwicklung – sorgfältig, Komponente für Komponente.",
      paragraphs: [
        "Ich bin ein junior Full-Stack-Entwickler in Aachen mit Frontend-Fokus und einem klaren Anspruch an saubere Umsetzung und verständliche Interfaces.",
        "Parallel zu meiner Rolle bei FEV Europe GmbH schließe ich meinen B.Sc. in Informatik an der FH Aachen ab und arbeite an produktionsnahen internen Tools.",
        "In meiner Bachelorarbeit befasse ich mich mit GenAI-Observability und Monitoring – also damit, wie man LLM-Verhalten in realen Systemen nachvollziehbar misst und bewertet.",
      ],
      metrics: [
        {
          id: "load",
          before: "50s",
          after: "<1s",
          description: "Cold-Start- und Ladezeit in produktiven Abläufen durch Frontend-Optimierung deutlich reduziert",
        },
        {
          id: "transition-delay",
          before: "~1.5s",
          after: "0ms",
          description: "Wahrgenommene Seitenwechsel-Verzögerung durch konsequentes Prefetching eliminiert",
        },
      ],
    },
    experience: {
      heading: "Wo ich Dinge gebaut habe.",
      items: [
        {
          title: "Frontend Developer — Praktikum / Werkstudent",
          company: "FEV Europe GmbH",
          period: "Apr 2025 – Heute",
          bullets: [
            "Eine zweisprachige Unternehmenswebsite mit Astro, TypeScript und Tailwind umgesetzt, inklusive EN/AR sowie RTL/LTR-Unterstützung.",
            "Ladezeit bei pagination-lastigen internen Tools von rund 50 Sekunden auf unter 1 Sekunde gesenkt.",
            "Laufzeit eines AI-Workflows von 4,5 Minuten auf etwa 1 Minute reduziert durch Python-Threading und Concurrency.",
            "Responsive interne Interfaces und datenintensive Ansichten mit Tabellen, Filtern und Karten entwickelt.",
          ],
        },
        {
          title: "Bachelorarbeit: GenAI Observability & Monitoring",
          company: "FEV Europe GmbH",
          period: "Jan 2026 – Heute",
          bullets: [
            "Praktische Ansätze erforscht, um LLM-Pipelines in Produktion nachzuvollziehen, zu bewerten und erklärbar zu machen.",
            "Observability-Plattformen wie Langfuse evaluiert.",
            "Einen Telemetrie-SDK-Prototypen entwickelt und in interne Tools integriert.",
            "Ein einheitliches Datenmodell für Nutzung, Latenz und Feedback-Signale entworfen.",
          ],
        },
        {
          title: "B.Sc. Informatik",
          company: "FH Aachen",
          period: "Sep 2020 – Heute",
          bullets: [],
        },
      ],
    },
    projects: {
      heading: "Was ich gebaut habe.",
      items: [
        {
          id: "solar-site",
          title: "Zweisprachige Unternehmenswebsite",
          summary: "EN/AR-Unternehmenswebsite mit vollständiger RTL/LTR-Unterstützung und skalierbarer i18n-Content-Struktur, umgesetzt bei FEV Europe GmbH.",
          year: 2026,
          impact: "Astro + TypeScript + Tailwind, statisch ausgeliefert mit starker Performance",
          stacks: sharedStacks,
        },
        {
          id: "data-explorer",
          title: "Interner Data Explorer",
          summary: "Datenvisualisierungstool für interne Workflows mit Karten, Filtern und tabellenintensiven Oberflächen.",
          year: 2025,
          impact: "Ladezeit in pagination-lastigen Abläufen von ~50s auf unter 1s reduziert",
          stacks: ["JavaScript", "Bootstrap", "Flask", "Cosmos DB"],
        },
        {
          id: "portfolio-site",
          title: "Dieses Portfolio",
          summary: "Schnelle, editorial geprägte persönliche Website mit Fokus auf Klarheit, Motion und zweisprachiger Erweiterbarkeit.",
          year: 2026,
          impact: "Strukturiertes Content-Modell und wiederverwendbare Sektionen für schnelle Iteration",
          stacks: ["Astro", "TypeScript", "Tailwind", "Netlify"],
        },
      ],
    },
    skills: {
      heading: "Mein Toolkit.",
      categories: [
        {
          title: "Frontend",
          items: ["JavaScript", "TypeScript", "React", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "Astro"],
        },
        {
          title: "Backend",
          items: ["Python", "Node.js / Express", "Flask", "FastAPI", "REST APIs"],
        },
        {
          title: "Daten & Infrastruktur",
          items: ["Azure Cosmos DB", "PostgreSQL", "WebSockets", "Caching / Performance", "Concurrency"],
        },
        {
          title: "Tools & Weitere",
          items: ["Git / GitHub", "Netlify", "Docker", "Linux / Bash", "GenAI / LLMs", "Agile / Scrum"],
        },
      ],
    },
    contact: {
      heading: "Lass uns zusammenarbeiten.",
      intro: "Ich bin offen für Junior-Frontend- oder Full-Stack-Rollen, Freelance-Zusammenarbeit oder ein gutes Gespräch über ein sinnvolles Produkt.",
      footerNote: "Erstellt von Adnan Al-Khlaki · Aachen · 2026",
    },
    ui: {
      projectSearchPlaceholder: "Projekte, Stack oder Stichwort suchen",
      projectSearchAria: "Projekte durchsuchen",
      projectFilterAria: "Nach Stack filtern",
      allStacks: "Alle Stacks",
      impactLabel: "Impact",
      noProjectsFound: "Keine Projekte für diesen Filter gefunden.",
      baselineLabel: "Ausgangswert",
      optimizedLabel: "Optimiert",
      contactFormNameLabel: "Name",
      contactFormEmailLabel: "E-Mail",
      contactFormMessageLabel: "Nachricht",
      contactFormSubmitLabel: "Nachricht senden",
      contactFormRequiredError: "Dieses Feld ist erforderlich.",
      contactFormEmailInvalidError: "Bitte gib eine gültige E-Mail-Adresse ein.",
      contactFormSuccess: "E-Mail-Programm wird geöffnet...",
    },
  },
  ar: {
    locale: "ar",
    direction: "rtl",
    pageTitle: "عدنان الخلاقي — معرض الأعمال",
    nav: {
      about: "نبذة",
      experience: "الخبرة",
      projects: "المشاريع",
      contact: "تواصل",
    },
    identity: {
      ...sharedIdentity,
      role: "مطوّر واجهات أمامية مع خبرة Full-Stack",
      location: "آخن، ألمانيا",
    },
    hero: {
      heading: "أبني منتجات ويب موثوقة، بعناية من أول مكوّن إلى آخره.",
      summary: "أطوّر تجارب ويب سريعة وسهلة الاستخدام بتركيز قوي على الواجهة الأمامية — حاليًا في FEV Europe GmbH في آخن.",
    },
    sectionLabels: {
      about: "02 — نبذة",
      experience: "03 — الخبرة",
      projects: "04 — المشاريع",
      skills: "05 — المهارات",
      contact: "06 — تواصل",
    },
    about: {
      heading: "تطوير ويب بعناية، مكوّنًا بعد مكوّن.",
      paragraphs: [
        "أنا مطوّر Full-Stack مبتدئ في آخن بتركيز على الواجهة الأمامية، وأهتم بالتنفيذ النظيف والواجهات الواضحة.",
        "إلى جانب عملي في FEV Europe GmbH، أستكمل بكالوريوس علوم الحاسوب في FH Aachen وأعمل على أدوات داخلية قريبة من بيئات الإنتاج.",
        "في رسالة البكالوريوس أركز على GenAI Observability & Monitoring: كيف نقيس سلوك نماذج اللغة الكبيرة في الأنظمة الحقيقية ونقيّمه بشكل واضح.",
      ],
      metrics: [
        {
          id: "load",
          before: "50s",
          after: "<1s",
          description: "خفض وقت البدء والتحميل في بيئات الإنتاج عبر تحسينات الواجهة الأمامية",
        },
        {
          id: "transition-delay",
          before: "~1.5s",
          after: "0ms",
          description: "إزالة تأخير الانتقال المحسوس بين الصفحات عبر prefetching مكثّف",
        },
      ],
    },
    experience: {
      heading: "أين قمت ببناء المنتجات.",
      items: [
        {
          title: "مطوّر واجهات أمامية — تدريب / عمل طالب",
          company: "FEV Europe GmbH",
          period: "أبريل 2025 – الآن",
          bullets: [
            "إعادة بناء موقع شركة ثنائي اللغة باستخدام Astro وTypeScript وTailwind مع دعم EN/AR وRTL/LTR.",
            "خفض وقت تحميل أدوات داخلية تعتمد على pagination من حوالي 50 ثانية إلى أقل من ثانية.",
            "تقليص زمن سير عمل ذكاء اصطناعي من 4.5 دقيقة إلى قرابة دقيقة واحدة باستخدام threading وconcurrency في Python.",
            "تطوير واجهات داخلية responsive وواجهات بيانات كثيفة تجمع بين الجداول والفلاتر والخرائط.",
          ],
        },
        {
          title: "رسالة البكالوريوس: مراقبة وتتبع GenAI",
          company: "FEV Europe GmbH",
          period: "يناير 2026 – الآن",
          bullets: [
            "بحث أساليب عملية لتتبّع سلوك مسارات LLM في الإنتاج وقياسه وشرحه.",
            "تقييم منصات المراقبة مثل Langfuse.",
            "بناء نموذج أولي لـ SDK تليمترية ودمجه داخل أدوات داخلية.",
            "تصميم نموذج بيانات موحّد لإشارات الاستخدام والكمون والتغذية الراجعة.",
          ],
        },
        {
          title: "بكالوريوس علوم الحاسوب",
          company: "FH Aachen",
          period: "سبتمبر 2020 – الآن",
          bullets: [],
        },
      ],
    },
    projects: {
      heading: "ما الذي قمت ببنائه.",
      items: [
        {
          id: "solar-site",
          title: "موقع شركة ثنائي اللغة",
          summary: "موقع شركة EN/AR مع دعم كامل RTL/LTR وبنية محتوى قابلة للتوسع، تم تنفيذه ضمن FEV Europe GmbH.",
          year: 2026,
          impact: "Astro + TypeScript + Tailwind مع نشر ثابت وأداء قوي",
          stacks: sharedStacks,
        },
        {
          id: "data-explorer",
          title: "مستكشف بيانات داخلي",
          summary: "أداة عرض بيانات لسير عمل داخلي تجمع الخرائط والفلاتر والواجهات المعتمدة على الجداول.",
          year: 2025,
          impact: "خفض زمن التحميل من ~50 ثانية إلى أقل من ثانية في التدفقات المعتمدة على pagination",
          stacks: ["JavaScript", "Bootstrap", "Flask", "Cosmos DB"],
        },
        {
          id: "portfolio-site",
          title: "هذا المعرض",
          summary: "موقع شخصي سريع بطابع تحريري، يركز على الوضوح والحركة وقابلية التوسع ثنائي اللغة.",
          year: 2026,
          impact: "نموذج محتوى منظم وأقسام قابلة لإعادة الاستخدام لتسريع التطوير",
          stacks: ["Astro", "TypeScript", "Tailwind", "Netlify"],
        },
      ],
    },
    skills: {
      heading: "أدواتي التقنية.",
      categories: [
        {
          title: "الواجهة الأمامية",
          items: ["JavaScript", "TypeScript", "React", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "Astro"],
        },
        {
          title: "الواجهة الخلفية",
          items: ["Python", "Node.js / Express", "Flask", "FastAPI", "REST APIs"],
        },
        {
          title: "البيانات والبنية التحتية",
          items: ["Azure Cosmos DB", "PostgreSQL", "WebSockets", "Caching / Performance", "Concurrency"],
        },
        {
          title: "الأدوات وأخرى",
          items: ["Git / GitHub", "Netlify", "Docker", "Linux / Bash", "GenAI / LLMs", "Agile / Scrum"],
        },
      ],
    },
    contact: {
      heading: "دعنا نعمل معًا.",
      intro: "منفتح على فرص Junior Frontend أو Full-Stack، أو تعاون مستقل، أو حتى نقاش جيد حول منتج مفيد تعمل عليه.",
      footerNote: "تم التطوير بواسطة عدنان الخلاقي · آخن · 2026",
    },
    ui: {
      projectSearchPlaceholder: "ابحث عن مشروع أو تقنية أو كلمة مفتاحية",
      projectSearchAria: "بحث في المشاريع",
      projectFilterAria: "تصفية حسب التقنية",
      allStacks: "كل التقنيات",
      impactLabel: "الأثر",
      noProjectsFound: "لا توجد مشاريع مطابقة لهذا الفلتر.",
      baselineLabel: "قبل التحسين",
      optimizedLabel: "بعد التحسين",
      contactFormNameLabel: "الاسم",
      contactFormEmailLabel: "البريد الإلكتروني",
      contactFormMessageLabel: "الرسالة",
      contactFormSubmitLabel: "إرسال الرسالة",
      contactFormRequiredError: "هذا الحقل مطلوب.",
      contactFormEmailInvalidError: "يرجى إدخال بريد إلكتروني صالح.",
      contactFormSuccess: "جارٍ فتح برنامج البريد...",
    },
  },
};

export const getPortfolioContent = (locale: Locale): PortfolioContent => portfolioContent[locale];
