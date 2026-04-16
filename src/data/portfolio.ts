export type Locale = "en" | "de" | "ar";

export type Project = {
  id: string;
  title: string;
  summary: string;
  year: number;
  impact?: string;
  stacks: string[];
  url?: string;
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
    contactFormSending: string;
    contactFormRequiredError: string;
    contactFormEmailInvalidError: string;
    contactFormSuccess: string;
    contactFormError: string;
    viewProjectLabel: string;
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
          title: "Bachelor Thesis: GenAI Observability & Monitoring",
          company: "FEV Europe GmbH",
          period: "15 Jan 2026 – Present (contract until 14 Jun 2026)",
          bullets: [
            "Research Focus: Investigating practical approaches to track, evaluate, and explain LLM pipeline behavior in production.",
            "Platform Evaluation: Assessing observability tooling such as Langfuse for tracing, latency, and feedback visibility.",
            "Implementation: Building a telemetry SDK prototype and integrating it into internal workflows.",
            "Data Architecture: Designing a unified telemetry model for usage, latency, and feedback signals.",
          ],
        },
        {
          title: "Frontend Developer — Working Student (External at FEV)",
          company: "RWTH MMP (Employer of Record) · FEV Europe GmbH (Workplace)",
          period: "15 Sep 2025 – 14 Jan 2026",
          bullets: [
            "Performance Engineering: Optimized a backend-heavy review pipeline, reducing analysis runtime from ~4.5 min to ~1 min by parallelizing independent AI/API calls.",
            "Feature Ownership: Integrated chat-based exploration features for AI-generated reports and analysis outputs.",
            "Cross-Tool Impact: Maintained and refined responsive UI components (complex steppers and proprietary workflows) across 10+ internal tools in total across internship + working-student periods.",
            "Backend Quality: Refactored Flask components and improved API interaction performance for analysis pipelines.",
          ],
        },
        {
          title: "Frontend Developer — Intern",
          company: "FEV Europe GmbH",
          period: "14 Apr 2025 – 29 Aug 2025",
          bullets: [
            "Full-Stack Development: Built an end-to-end internal finder tool with map visualizations, advanced filtering, and skeleton loaders.",
            "Latency Optimization: Reduced perceived pagination latency from ~1.5s to nearly 0ms using caching and prefetching strategies.",
            "Real-Time Systems: Solved timeout issues by moving long-running checks to background Python threads and sending progress updates via WebSocket (Socket.IO).",
            "Data Pipeline: Implemented dynamic backend querying with chunked/streamed responses for large filtered datasets.",
            "Architectural Prototyping: Prototyped a React-based pilot to evaluate migration paths from vanilla JavaScript.",
            "Team Enablement: Supported onboarding of new team members into internal tools and workflows.",
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
          summary: "EN/AR corporate site with full RTL/LTR support and a scalable i18n content architecture.",
          year: 2026,
          impact: "Astro + TypeScript + Tailwind, shipped with static delivery and excellent performance",
          stacks: sharedStacks,
          url: "https://asaspower.net",
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
          items: ["Python", "Flask", "REST APIs"],
        },
        {
          title: "Data & Infra",
          items: ["Azure Cosmos DB", "PostgreSQL", "WebSockets", "Caching / Performance", "Concurrency"],
        },
        {
          title: "Tools & Other",
          items: ["Git / GitHub", "Netlify", "Linux / Bash", "GenAI / LLMs", "Agile / Scrum"],
        },
        {
          title: "Additional Knowledge",
          items: ["Node.js / Express", "FastAPI", "Docker"],
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
      contactFormSending: "Sending...",
      contactFormRequiredError: "This field is required.",
      contactFormEmailInvalidError: "Please enter a valid email address.",
      contactFormSuccess: "Message sent successfully.",
      contactFormError: "Something went wrong. Please try again.",
      viewProjectLabel: "Visit Site",
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
          title: "Bachelorarbeit: GenAI Observability & Monitoring",
          company: "FEV Europe GmbH",
          period: "15.01.2026 – Heute (Vertrag bis 14.06.2026)",
          bullets: [
            "Forschungsschwerpunkt: Praktische Ansätze untersucht, um LLM-Pipelines in Produktion nachvollziehbar zu messen, zu bewerten und erklärbar zu machen.",
            "Plattform-Evaluierung: Observability-Werkzeuge wie Langfuse für Tracing, Latenz und Feedback-Transparenz bewertet.",
            "Implementierung: Einen Telemetrie-SDK-Prototypen entwickelt und in interne Workflows integriert.",
            "Datenarchitektur: Ein einheitliches Telemetrie-Modell für Nutzungs-, Latenz- und Feedback-Signale entworfen.",
          ],
        },
        {
          title: "Frontend Developer — Werkstudent (extern bei FEV)",
          company: "RWTH MMP (Arbeitgeber) · FEV Europe GmbH (Einsatzort)",
          period: "15.09.2025 – 14.01.2026",
          bullets: [
            "Performance Engineering: Eine backend-lastige interne Review-Pipeline optimiert und die Analyselaufzeit durch Parallelisierung unabhängiger AI/API-Aufrufe von ~4,5 Minuten auf ~1 Minute reduziert.",
            "Feature Ownership: Chatbasierte Explorationsfunktionen für AI-generierte Reports und Analyseergebnisse integriert.",
            "Cross-Tool Impact: Responsive UI-Komponenten (komplexe Stepper und proprietäre Workflows) über insgesamt 10+ interne Tools aus Praktikums- und Werkstudentenphase hinweg gepflegt und weiterentwickelt.",
            "Backend-Qualität: Flask-Komponenten refaktoriert und die API-Interaktionsperformance in Analysepipelines verbessert.",
          ],
        },
        {
          title: "Frontend Developer — Praktikum",
          company: "FEV Europe GmbH",
          period: "14.04.2025 – 29.08.2025",
          bullets: [
            "Full-Stack Development: Ein internes Finder-Tool end-to-end (Frontend + Backend) mit Kartenvisualisierung, erweitertem Filtering und Skeleton Loadern umgesetzt.",
            "Latency Optimization: Die wahrgenommene Pagination-Latenz durch Caching und Prefetching von ~1,5s auf nahezu 0ms reduziert.",
            "Real-Time Systems: Timeout-Probleme gelöst, indem langlaufende Checks in Python-Hintergrundthreads liefen und Fortschritt via WebSocket (Socket.IO) übertragen wurde.",
            "Data Pipeline: Dynamisches Backend-Querying mit chunked/streaming Antworten für große gefilterte Datensätze implementiert.",
            "Architektur-Prototyping: Einen React-Pilot (Routing + Chat-UI) zur Evaluierung von Migrationspfaden aus Vanilla JavaScript erstellt.",
            "Team Enablement: Onboarding neuer Teammitglieder in interne Tools und Workflows unterstützt.",
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
          summary: "EN/AR-Unternehmenswebsite mit vollständiger RTL/LTR-Unterstützung und skalierbarer i18n-Content-Struktur.",
          year: 2026,
          impact: "Astro + TypeScript + Tailwind, statisch ausgeliefert mit starker Performance",
          stacks: sharedStacks,
          url: "https://asaspower.net",
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
          items: ["Python", "Flask", "REST APIs"],
        },
        {
          title: "Daten & Infrastruktur",
          items: ["Azure Cosmos DB", "PostgreSQL", "WebSockets", "Caching / Performance", "Concurrency"],
        },
        {
          title: "Tools & Weitere",
          items: ["Git / GitHub", "Netlify", "Linux / Bash", "GenAI / LLMs", "Agile / Scrum"],
        },
        {
          title: "Zusätzliche Kenntnisse",
          items: ["Node.js / Express", "FastAPI", "Docker"],
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
      contactFormSending: "Wird gesendet...",
      contactFormRequiredError: "Dieses Feld ist erforderlich.",
      contactFormEmailInvalidError: "Bitte gib eine gültige E-Mail-Adresse ein.",
      contactFormSuccess: "Nachricht erfolgreich gesendet.",
      contactFormError: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
      viewProjectLabel: "Zur Website",
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
          title: "رسالة البكالوريوس: مراقبة وتتبع GenAI",
          company: "FEV Europe GmbH",
          period: "15 يناير 2026 – الآن (العقد حتى 14 يونيو 2026)",
          bullets: [
            "محور البحث: دراسة أساليب عملية لتتبّع سلوك مسارات LLM في الإنتاج وقياسه وشرحه بشكل واضح.",
            "تقييم المنصات: تقييم أدوات المراقبة مثل Langfuse لتحسين تتبع التنفيذ ورؤية الكمون والتغذية الراجعة.",
            "التنفيذ: بناء نموذج أولي لـ SDK تليمترية ودمجه في مسارات عمل داخلية.",
            "معمارية البيانات: تصميم نموذج تليمترية موحّد لإشارات الاستخدام والكمون والتغذية الراجعة.",
          ],
        },
        {
          title: "مطوّر واجهات أمامية — عمل طالب (خارجي لدى FEV)",
          company: "RWTH MMP (صاحب العقد) · FEV Europe GmbH (مكان العمل)",
          period: "15 سبتمبر 2025 – 14 يناير 2026",
          bullets: [
            "هندسة الأداء: تحسين مسار مراجعة داخلي كثيف على مستوى الـBackend وتقليص زمن التحليل من ~4.5 دقائق إلى ~1 دقيقة عبر موازاة الاستدعاءات المستقلة لـ AI/API.",
            "ملكية الميزة: دمج ميزات الاستكشاف عبر المحادثة للتقارير الناتجة بالذكاء الاصطناعي ومخرجات التحليل.",
            "أثر متعدد الأدوات: صيانة وتطوير مكونات واجهة responsive (Stepper معقد وعمليات داخلية خاصة) عبر 10+ أدوات داخلية إجمالًا خلال فترتي التدريب وعمل الطالب.",
            "جودة الـBackend: إعادة هيكلة مكونات Flask وتحسين أداء التفاعل مع API ضمن مسارات التحليل.",
          ],
        },
        {
          title: "مطوّر واجهات أمامية — تدريب",
          company: "FEV Europe GmbH",
          period: "14 أبريل 2025 – 29 أغسطس 2025",
          bullets: [
            "تطوير Full-Stack: بناء أداة Finder داخلية بشكل متكامل (Frontend + Backend) مع خرائط، فلاتر متقدمة، وSkeleton Loaders.",
            "تحسين الكمون: خفض الكمون المحسوس في pagination من ~1.5 ثانية إلى ما يقارب 0ms عبر caching وprefetching.",
            "أنظمة لحظية: معالجة مشاكل timeout بنقل الفحوصات طويلة المدة إلى خيوط Python في الخلفية مع بث التقدم عبر WebSocket (Socket.IO).",
            "مسار البيانات: تنفيذ استعلام Backend ديناميكي مع استجابات chunked/streaming لبيانات كبيرة بعد التصفية.",
            "نمذجة معمارية: إنشاء نموذج React تجريبي (تنقل + واجهة محادثة) لتقييم مسار الانتقال من Vanilla JavaScript.",
            "تمكين الفريق: دعم إدماج أعضاء جدد ضمن الأدوات الداخلية ومسارات العمل.",
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
          summary: "موقع شركة EN/AR مع دعم كامل RTL/LTR وبنية محتوى قابلة للتوسع.",
          year: 2026,
          impact: "Astro + TypeScript + Tailwind مع نشر ثابت وأداء قوي",
          stacks: sharedStacks,
          url: "https://asaspower.net",
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
          items: ["Python", "Flask", "REST APIs"],
        },
        {
          title: "البيانات والبنية التحتية",
          items: ["Azure Cosmos DB", "PostgreSQL", "WebSockets", "Caching / Performance", "Concurrency"],
        },
        {
          title: "الأدوات وأخرى",
          items: ["Git / GitHub", "Netlify", "Linux / Bash", "GenAI / LLMs", "Agile / Scrum"],
        },
        {
          title: "معرفة إضافية",
          items: ["Node.js / Express", "FastAPI", "Docker"],
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
      contactFormSending: "جارٍ الإرسال...",
      contactFormRequiredError: "هذا الحقل مطلوب.",
      contactFormEmailInvalidError: "يرجى إدخال بريد إلكتروني صالح.",
      contactFormSuccess: "تم إرسال الرسالة بنجاح.",
      contactFormError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      viewProjectLabel: "زيارة الموقع",
    },
  },
};

export const getPortfolioContent = (locale: Locale): PortfolioContent => portfolioContent[locale];
