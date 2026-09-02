// ============================================================
//  PORTFOLIO DATA — Sri Hari Jagan Mushini
//  16 projects — MetaDev full-stack (1) + suite (5) + Yoga (2) + core 8 — priority ordered
// ============================================================

export const experienceData = [
  {
    id: 1,
    company: "TTL Engineering Pvt. Ltd",
    role: "Full Stack Developer",
    period: "Apr 2024 – Present",
    location: "Andhra Pradesh",
    type: "Full-time",
    description:
      "Building and shipping production-grade web applications across healthcare, business automation, and CMS domains — spanning hospital management, booking systems, and workflow platforms — with full ownership from requirement gathering to deployment.",
    points: [
      "Shipped 5+ production applications across healthcare, business automation, and CMS domains, building 100+ reusable React components to accelerate feature delivery and maintain UI consistency.",
      "Designed and developed 45+ REST APIs using Node.js, Express.js, and FastAPI for authentication, RBAC, payments, and business workflows, improving API performance through query optimization and caching.",
      "Delivered core modules for a multi-role Hospital Management platform supporting Doctor, Pharmacy, Lab, Blood Bank, Ambulance, and Admin workflows with secure role-based access control.",
      "Implemented Razorpay payment flows, server-side verification, and webhooks for secure production transactions, while managing Docker-based deployments, Nginx, PM2, and VPS infrastructure.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "FastAPI", "MongoDB", "MySQL", "Redux Toolkit", "Tailwind CSS", "JWT", "Razorpay", "Docker", "Nginx", "PM2", "Vercel", "Netlify"],
  },
  {
    id: 2,
    company: "Civil-AI",
    role: "Frontend Developer",
    period: "Jan 2024 – Mar 2024",
    location: "Remote",
    type: "Contract",
    description:
      "Built the complete frontend for an AI-powered construction management platform, focused on productivity, team collaboration, and automation.",
    points: [
      "Built 40+ reusable React components and integrated 20+ REST endpoints, implementing robust loading, error handling, and API-driven UI states.",
      "Translated UI/UX designs into accessible, responsive production interfaces, collaborating with designers and cross-functional teams in an Agile development environment.",
    ],
    tech: ["React.js", "Tailwind CSS", "CSS Modules", "REST APIs"],
  },
  {
    id: 3,
    company: "Coding Ninjas",
    role: "Teaching Assistant — React.js & Web Development",
    period: "May 2023 – Nov 2023",
    location: "Remote",
    type: "Part-time",
    description:
      "Mentored 150+ learners in modern frontend development, React.js, and web fundamentals through structured, project-based learning.",
    points: [
      "Mentored 150+ students in JavaScript and React.js through code reviews, debugging support, and hands-on project guidance.",
      "Conducted weekly code reviews and debugging sessions, improving student assignment pass rates.",
      "Explained React hooks, component lifecycle, state management, and REST API integration concepts.",
      "Supported learners with hands-on project reviews and architecture best practices.",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
];


export const projectsData = [
  {
    id: 9,
    title: "MetaDev — Global Digital Platform",
    image: "/Images/project/metaDev.jpg",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "MUI", "Ant Design", "Framer Motion", "React Router", "Node.js", "Express.js", "Prisma", "PostgreSQL", "JWT", "Zod", "Swagger"],
    category: "SaaS",
    group: "Flagship SaaS",
    featured: true,
    description:
      "Flagship full-stack platform for MetaDev — global digital ecosystem spanning web, mobile, AI and enterprise. Production marketing site plus central backend API managing auth, users, organizations, modules, plans, subscriptions, jobs and audit across 9+ services at metadev.in.",
    points: [
      "Built marketing site with React 19, TypeScript, Vite, Tailwind CSS, MUI and Ant Design — fast, accessible, design-system-driven with SEO (canonical/OG/Twitter/JSON-LD), GA4 SPA tracking and light/dark theming.",
      "Engineered central backend with Node.js 20+, Express 5, TypeScript (strict), Prisma 7 and PostgreSQL — modular config, middleware, modules and shared layers with Pino logging and Helmet/CORS/rate-limit.",
      "Exposed 9 route groups (/auth, /admin/users, /modules, /organizations, /plans, /subscriptions, /jobs, /audit, /contact) with Zod validation, JWT access/refresh (Argon2id), Swagger at /api/docs and /health with graceful shutdown.",
      "Validated env with fail-fast Zod schema, prepared Docker/CI pipeline (tsc, Prisma generate, Vitest/Supertest) and deployed website on Vercel with API-ready integration.",
      "Architected reusable sections (Hero, Ecosystem, Solutions, Legal) with React Router and Framer Motion — live at https://metadev.in with ecosystem navigation across all Meta products.",
    ],
    live: "https://metadev.in",
    github: null,
  },
  {
    id: 15,
    title: "Pragya Yoga — Alliance Platform",
    image: "/Images/project/pragya.jpg",
    tech: ["React.js", "Vite", "TanStack Query", "Framer Motion", "React Router", "Tailwind CSS", "Razorpay", "REST APIs"],
    category: "Websites",
    group: "Flagship SaaS",
    featured: true,
    description:
      "Flagship website for Pragya Yoga Alliance — a content-rich platform for yoga education, training and community with a fully functional Razorpay payment gateway. Top project.",
    points: [
      "Built with React 19, Vite, TanStack Query, Framer Motion and React Router — lazy-loaded routes (About/Classes/YTTC/Events/Payment/Books) with AnimatePresence, lotus branding and responsive, accessible layouts.",
      "Implemented fully functional Razorpay Standard Checkout: dynamic script injection (checkout.razorpay.com/v1/checkout.js), create-order via POST /create-order (amount in paise, auth headers), Razorpay modal with prefill and theme #7a5cff, and server verification via POST /verify-payment (order_id/payment_id/signature) before confirming booking.",
      "Delivered end-to-end booking + e-commerce flows: Cart (getCart, removeFromCart, applyCouponToCart, checkoutCart, verifyPayment), Book checkout, Bulk Orders, Order Tracking, bookings via POST /bookings with paymentMethod/transactionId/status — handling both payable (Razorpay Card/UPI/NetBanking/Wallet) and enquiry-only (Cash/Pending) paths.",
      "Added admin suite (YogaAdmin, DashboardInsights, ReportsInvoices, BookingsCalendar, StudentProfileWorkspace, CouponManagement, StoreOrders, EmailHealth) — 30+ admin components, RBAC-ready, with DOMPurify, React Calendar, Sharp image optimization and Docker-ready builds.",
    ],
    live: "https://pragyayoga.in/",
    github: null,
  },
  {
    id: 16,
    title: "Soma Wellness — Yoga & Wellness",
    image: "/Images/project/somawell.jpg",
    tech: ["React.js", "Vite", "TanStack Query", "i18next", "Framer Motion", "React Router", "M-Pesa", "REST APIs"],
    category: "Websites",
    group: "Flagship SaaS",
    featured: true,
    description:
      "Flagship website for Soma Wellness — a yoga and wellness platform with internationalization and a fully functional M-Pesa payment gateway. Top project.",
    points: [
      "Built with React 19, Vite, TanStack Query, i18next + BrowserLanguageDetector (EN/SW), Framer Motion and React Router — code-split with lazy routes, floating WhatsApp, ScrollProgress and BackToTop, lotus branding.",
      "Implemented fully functional M-Pesa Checkout (MpesaCheckout, PaymentPreviewModal, CheckoutGate with isLoggedIn): parsePrice, STK push via checkoutRequestId/mpesaReceiptNumber, saveBooking to POST /api/bookings (paymentMethod: 'M-PESA', transactionId, status: 'Confirmed'), with success/error handling and i18n (paymentSuccessful/bookingReceived). Razorpay removed — M-Pesa only.",
      "Delivered comprehensive e-commerce + wellness flows: Books, Bulk Orders, Order Tracking, Cart/Checkout, class bookings, consultation management, plus ChatbotWidget, PaymentPage and multilingual content.",
      "Achieved production-grade quality: Vitest + coverage, Playwright e2e, Testing Library, MSW mocks, axe-core a11y, Sharp, LightningCSS, Docker and CI-ready scripts — shared patterns with Pragya Yoga but with full i18n and M-Pesa specialization.",
    ],
    live: null,
    github: null,
  },
  {
    id: 1,
    title: "GeoTech Project Management System",
    image: "/Images/project/geotech.png",
    tech: ["React.js", "FastAPI", "MySQL", "SQLAlchemy", "JWT", "Python"],
    category: "SaaS",
    group: "Engineering Systems",
    featured: true,
    description:
      "A full-stack project management platform built for geotechnical field workflows, supporting role-based multi-user operations with secure API access and real-time reporting.",
    points: [
      "Architected a modular FastAPI backend with routers, services, schemas, and SQLAlchemy ORM — enabling clean separation of concerns and straightforward feature extension.",
      "Built role-based dashboards for Super Admin and Supervisors with distinct data views, permissions, and workflow controls.",
      "Implemented JWT authentication with role-scoped API access, protecting sensitive project data per user tier.",
      "Delivered project tracking, reporting dashboards, and workflow management features integrated end-to-end with the React.js frontend.",
      "Designed normalised MySQL schema to handle projects, tasks, users, and reporting relationships efficiently.",
    ],
    live: null,
    github: "https://github.com/SriHariJagan/GeoTech-Backend",
  },
  {
    id: 3,
    title: "Eccellenza Infra — Business Website",
    image: "/Images/project/eccellenza.png",
    tech: ["React.js", "Framer Motion", "CSS Modules", "SEO"],
    category: "Websites",
    group: "Production & Business",
    featured: true,
    description:
      "A production business website for a commercial interior design and construction company — featuring animated UI, a dynamic project gallery, and strong SEO performance.",
    points: [
      "Architected reusable React components to create a scalable, maintainable UI system used live in production.",
      "Built animated UI sections and a category-filtered project gallery using Framer Motion, enhancing brand perception and UX.",
      "Integrated backend services for dynamic testimonials, email automation via contact forms, and SEO meta enhancements.",
      "Implemented SEO-friendly structure and performance optimisations, improving Lighthouse scores for the live site.",
      "Delivered a fully responsive, cross-device website — live at eccellenzainfra.com.",
    ],
    live: "https://eccellenzainfra.com",
    github: null,
  },
  {
    id: 2,
    title: "Maanjo Farm — Agritourism Platform",
    image: "/Images/project/manjuufarming.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: "Websites",
    group: "Production & Business",
    featured: true,
    description:
      "A full-stack agritourism platform enabling users to browse and purchase agro products and book villas — with a fast, SEO-friendly, and fully responsive interface.",
    points: [
      "Developed a dual-purpose platform for agro-product e-commerce and villa booking, handling product listings, cart workflows, and booking confirmations.",
      "Designed and integrated MongoDB schemas and Express.js APIs for dynamic content management and booking state tracking.",
      "Built product purchase and villa booking modules with real-time inventory updates via backend APIs.",
      "Optimised UI performance and responsiveness across mobile and desktop for a smooth checkout and booking experience.",
    ],
    live: null,
    github: "https://github.com/SriHariJagan/MaanjuFarms",
  },
  {
    id: 4,
    title: "JK Grani Marmo — Granite Manufacturing Website",
    image: "/Images/project/jkgranimarmo.png",
    tech: ["React.js", "Vite", "Django", "CSS3"],
    category: "Websites",
    group: "Production & Business",
    featured: false,
    description:
      "A business website for a marble and granite manufacturing company — featuring multi-category product showcases, inquiry forms, and automated lead management.",
    points: [
      "Developed a responsive, multi-category product showcase website now live in production at jkgranimarmo.in.",
      "Implemented automated email notifications using Django SMTP for seamless lead capture and management.",
      "Optimised page loading speed through image compression and code-splitting, reducing load time on product-heavy pages.",
      "Built interactive UI elements with clean, maintainable CSS3 and React component architecture.",
    ],
    live: "https://jkgranimarmo.in",
    github: null,
  },
  {
    id: 12,
    title: "MetaHire — Hiring & Talent Platform",
    image: "/Images/project/metaHire.jpg",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Lucide React"],
    category: "SaaS",
    group: "Product Ecosystem",
    featured: false,
    description:
      "SaaS hiring and talent management frontend — an 8-step workflow from Create Job to Hire, live at metahire.in.",
    points: [
      "Crafted an 8-step hiring flow: Create Job → Find Candidates → Screen → Shortlist → Interview → Evaluate → Offer → Hire — with animated sections and progress tracking.",
      "Built platform features for Job Management, Candidate Management, pipeline analytics, collaboration, compliance and security — all component-driven.",
      "Implemented custom useInView hooks for reveal animations, Lucide iconography and EcosystemSection for cross-product navigation.",
      "Stacked on React 18, TypeScript, Vite and Tailwind CSS — ready to connect to MetaDev Backend /jobs and /users APIs.",
    ],
    live: "https://metahire.in",
    github: null,
  },
  {
    id: 10,
    title: "MetaPe — Payments Platform",
    image: "/Images/project/metaPe.jpg",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    category: "SaaS",
    group: "Product Ecosystem",
    featured: false,
    description:
      "SaaS product frontend for payments workflows — part of the MetaDev ecosystem alongside MetaHire, MetaCheck, MetaLedger and MetaAds. Live at metape.in.",
    points: [
      "Built with React 18, TypeScript, Vite, Tailwind CSS and React Router — type-safe, component-driven and SEO-ready.",
      "Delivered product landing with Hero, TrustedBy, Features, Stats, SolutionsOverview, Testimonials, EcosystemSection and CTA — consistent with MetaDev design system.",
      "Integrated SEO module with per-page meta and page-tracking, plus shared Navbar/Footer and legal pages (Privacy, Terms, Compliance, Sitemap).",
      "Prepared for integration with MetaDev Backend via REST APIs — auth, subscriptions and product-specific modules.",
    ],
    live: "https://metape.in",
    github: null,
  },
  {
    id: 11,
    title: "MetaCheck — Verification Platform",
    image: "/Images/project/metaCheck.jpg",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    category: "SaaS",
    group: "Product Ecosystem",
    featured: false,
    description:
      "SaaS product frontend for verification and compliance workflows — live at metacheck.in, one of five dedicated frontends in the MetaDev ecosystem.",
    points: [
      "Developed with React 18, TypeScript, Vite and Tailwind CSS — fast, responsive and maintainable.",
      "Shares MetaDev ecosystem patterns: SEO, analytics, theming and legal/compliance pages for production readiness.",
      "Designed for API-driven verification flows that will connect to the central MetaDev Backend.",
      "Structured for scalable product isolation while reusing shared components and design tokens.",
    ],
    live: "https://metacheck.in",
    github: null,
  },
  {
    id: 14,
    title: "MetaAds — Campaign Manager",
    image: "/Images/project/metaAds.png",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    category: "SaaS",
    group: "Product Ecosystem",
    featured: false,
    description:
      "SaaS campaign and ads management frontend — live at metaads.in, part of the MetaDev product suite.",
    points: [
      "Built as a focused product frontend with React 18, TypeScript, Vite and Tailwind CSS — consistent with the MetaDev design system.",
      "Shares SEO, routing, layout and legal foundations used across all MetaDev products for rapid, consistent delivery.",
      "Designed for campaign lifecycle workflows that will integrate with MetaDev Backend modules and subscriptions.",
      "Optimized for performance and maintainability with Vite and TypeScript strict mode.",
    ],
    live: "https://metaads.in",
    github: null,
  },
  {
    id: 13,
    title: "MetaLedger — Financial Ledger",
    image: "/Images/project/metaledger.jpg",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    category: "SaaS",
    group: "Product Ecosystem",
    featured: false,
    description:
      "SaaS financial operations frontend — ledger, reconciliation, intelligence and automation — live at metaledger.in.",
    points: [
      "Delivered 12 dedicated sections: Hero, Trust, Workflow, Platform, Ledger, Reconciliation, Intelligence, Automation, Security, Industries, Integrations, Executive and Why — all in React + TypeScript.",
      "Positioned for finance teams needing structure, visibility and intelligence — with CTA 'Your Financial Data Deserves a Better System.'",
      "Integrated EcosystemSection and CTASection for unified MetaDev navigation and conversion.",
      "Prepared for backend integration with MetaDev Ledger/Finance APIs and audit trails.",
    ],
    live: "https://metaledger.in",
    github: null,
  },
  {
    id: 5,
    title: "Civil-AI — Construction Management Platform",
    image: "/Images/project/civilai.png",
    tech: ["React.js", "Tailwind CSS", "CSS Modules", "Django REST API", "AI Chatbot"],
    category: "SaaS",
    group: "Other",
    featured: false,
    description:
      "Frontend for an AI-powered construction management platform, built to enhance project tracking, team collaboration, and operational efficiency.",
    points: [
      "Led end-to-end frontend development using React.js, Tailwind CSS, and CSS Modules with a scalable component architecture.",
      "Integrated Django REST APIs for project management, task assignment, and workflow automation.",
      "Implemented dark/light mode toggle, email notification system, and an AI-powered chatbot for project queries.",
      "Delivered a fully responsive, production-ready interface optimised for performance and cross-device usability.",
    ],
    live: null,
    github: "https://github.com/SriHariJagan/newCivil-AI.git",
  },
  {
    id: 6,
    title: "TinyLink — URL Shortener",
    image: "/Images/project/tinylink.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "CSS Modules"],
    category: "SaaS",
    group: "Other",
    featured: false,
    description:
      "A full-featured URL shortening application with link analytics, responsive dashboard, and a clean user interface — deployed on Netlify and Render.",
    points: [
      "Built end-to-end link management: create, redirect, delete, and track click statistics per link.",
      "Implemented unique short-code generation [A-Za-z0-9]{6–8} with validation and correct HTTP redirect responses.",
      "Built a responsive dashboard with search, filter, copy buttons, and sortable data tables.",
      "Developed a stats page displaying total clicks and last-clicked timestamp for every link.",
      "Created a /healthz monitoring endpoint returning system status and version info.",
      "Deployed frontend on Netlify and backend on Render with MongoDB Atlas as the database.",
    ],
    live: "https://tinylk.netlify.app/",
    github: "https://github.com/SriHariJagan/TinyLink-Frontend",
  },
  {
    id: 7,
    title: "Payment Gateway UI",
    image: "/Images/project/payment-gateway.png",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Lucide React",
    ],
    category: "SaaS",
    group: "Other",
    featured: true,
    description:
      "A modern, fully responsive payment gateway frontend featuring real-time form validation, automatic card type detection, multi-currency support, and professional payment simulation with animated state transitions.",
    points: [
      "Built a production-quality payment UI with Next.js and TypeScript, demonstrating type-safe component architecture and scalable project structure.",
      "Implemented real-time card type detection (Visa, Mastercard, Amex) and auto-formatting (e.g. 4242424242424242 → 4242 4242 4242 4242) for a polished user experience.",
      "Integrated React Hook Form with Zod schema validation for robust, type-safe form handling — validating cardholder name, card number, expiry, CVV, and amount.",
      "Managed global payment state (idle → processing → success / failure) using Zustand, keeping UI transitions clean and predictable.",
      "Supported multi-currency transactions (INR ₹, USD $, EUR €) with a dynamic transaction summary panel.",
      "Designed a modern glassmorphism-inspired UI with Tailwind CSS, smooth loading animations, and fully responsive layout across all devices.",
    ],
    live: "https://payment-gateway-assignment.vercel.app/",
    github: "https://github.com/SriHariJagan/Payment-Gateway-Assignment",
    highlights: [
      "TypeScript throughout",
      "Zod + React Hook Form",
      "Zustand state machine",
      "Card auto-detection",
      "Multi-currency",
    ],
  },
  {
    id: 8,
    title: "BuyBusy — E-Commerce Web App",
    image: "/Images/project/buybusy.png",
    tech: ["React.js", "Firebase Authentication", "Firestore", "React Router", "CSS Modules"],
    category: "SaaS",
    group: "Other",
    featured: false,
    highlights: ["Firebase Auth", "Firestore CRUD", "Context API", "React Router"],
    description:
      "A full-featured e-commerce web application demonstrating secure authentication, real-time database operations, and scalable state management with a clean responsive UI.",
    points: [
      "Implemented secure user authentication and session management using Firebase Authentication.",
      "Built complete CRUD functionality for cart and orders using Firestore with real-time data synchronisation.",
      "Designed global state management using React Context API to handle auth, cart, and product data efficiently.",
      "Integrated React Router for seamless navigation across Home, Cart, Orders, Login, Signup, and Error pages.",
      "Implemented optimised UI/UX with loading states, error handling, and a reusable component architecture.",
      "Ensured responsive design and clean code structure with modular components and CSS Modules.",
    ],
    live: "https://buybusy-onlineshopping.netlify.app/",
    github: "https://github.com/SriHariJagan/BuyBusy-OnlineShopping",
  },
];


// ============================================================
//  SKILLS DATA
// ============================================================

export const skillsData = {
  frontend: [
    "React.js", "JavaScript (ES6+)", "HTML5", "CSS3",
    "Tailwind CSS", "Redux Toolkit", "Framer Motion", "CSS Modules",
  ],
  backend: [
    "Node.js", "Express.js", "FastAPI", "REST APIs",
    "JWT Authentication", "Django REST API",
  ],
  database: [
    "MongoDB", "MySQL", "Firebase Firestore", "SQLite",
  ],
  tools: [
    "Git", "GitHub", "Postman", "Vercel", "Netlify",
    "VS Code", "Vite",
  ],
  concepts: [
    "RBAC", "API Integration", "Responsive Design",
    "SEO Optimisation", "Performance Optimisation",
    "Lazy Loading", "Code Splitting", "Component Architecture",
  ],
};


// ============================================================
//  PERSONAL / META
// ============================================================

export const personalData = {
  name: "Sri Hari Jagan Mushini",
  title: "React.js / MERN Stack Developer",
  summary:
    "Results-driven React.js / MERN Stack Developer with 2+ years of hands-on experience delivering production-grade web applications for real businesses. Built and shipped admin dashboards, booking systems, e-commerce platforms, and SEO-optimised business websites using React.js, Node.js, Express.js, MongoDB, and FastAPI. Proven ability to own full delivery — from requirements gathering and API design to deployment and production maintenance.",
  email: "sriharijagan04@gmail.com",
  phone: "+91 95052 22778",
  linkedin: "https://www.linkedin.com/in/sri-hari-jagan-mushini",
  github: "https://github.com/SriHariJagan",
  portfolio: "https://sriharijagan.vercel.app/",
  location: "Andhra Pradesh, India",
  available: true,
};
