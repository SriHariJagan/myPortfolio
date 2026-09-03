// ============================================================
//  PORTFOLIO DATA — Sri Hari Jagan Mushini
//  Backend / Full-Stack positioning — honest, production-verified
// ============================================================

export const experienceData = [
  {
    id: 1,
    company: "TTL Engineering Pvt. Ltd",
    role: "Full Stack Developer",
    period: "Apr 2024 – Present",
    location: "Andhra Pradesh, India",
    type: "Full-time",
    description:
      "Building and shipping production-grade web applications across healthcare, business automation, and CMS domains — spanning hospital management, booking systems, and workflow platforms — with full ownership from requirement gathering to deployment.",
    points: [
      "Developed and maintained RESTful APIs using Node.js, Express.js, TypeScript and FastAPI for production business applications handling authentication, payments and workflow operations.",
      "Implemented JWT authentication and role-based access control for multi-role applications, securing routes and data by user tier.",
      "Designed and integrated database models and API workflows using MySQL, PostgreSQL and MongoDB with normalized schemas and relationship handling.",
      "Integrated third-party services including Razorpay for payment verification, email services and booking/communication APIs for production flows.",
      "Built reusable React component systems and integrated frontend with REST APIs for admin dashboards, booking and reporting workflows.",
      "Assisted with containerization and production deployment using Docker, Linux, Nginx, PM2 and VPS infrastructure on Vercel / Netlify / Render.",
    ],
    tech: ["Node.js", "TypeScript", "Express.js", "FastAPI", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Prisma", "JWT", "RBAC", "Razorpay", "React.js", "Docker", "Nginx", "PM2", "Vercel", "Netlify"],
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
      "Translated UI/UX designs into accessible, responsive production interfaces, collaborating with designers and cross-functional teams in an Agile environment.",
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
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
];


export const projectsData = [
  // ========== FEATURED / PRODUCTION — Backend & Full-Stack ==========
  {
    id: 100,
    title: "Healthcare Operations Platform — Multi-Role Hospital Workflows",
    image: "/Images/project/metaDev.jpg",
    tech: ["Node.js", "Express.js", "TypeScript", "FastAPI", "MySQL", "MongoDB", "Prisma", "PostgreSQL", "JWT", "REST APIs", "React.js", "Docker", "Nginx"],
    category: "Healthcare Platform",
    group: "Featured / Production",
    featured: true,
    description:
      "Multi-organization healthcare management platform with role-based workflows for Super Admin, Hospital Admin, Doctors, Nurses, Reception, Pharmacy, Laboratory and Blood Bank operations — shipped at TTL Engineering as production business software.",
    problem: "Hospitals needed a unified system to manage users, staff roles, patient-facing workflows and department operations (pharmacy, lab, blood bank) without fragmented tools and insecure access.",
    solution: "Built a modular platform with authenticated REST APIs, role-scoped data access and department workflows, backed by normalized database schemas and a React admin interface — covering the full organization → hospital → department → user lifecycle.",
    myContribution: "Developed REST APIs and integrated frontend workflows for multiple roles, implemented JWT authentication and RBAC, designed database models and validated API contracts, and assisted with Docker/Nginx deployment for production use.",
    keyFeatures: [
      "Multi-role architecture with JWT authentication and role-based access control",
      "REST APIs with validation and error handling for healthcare workflows",
      "Database design for users, organizations, hospitals and department entities",
      "Role-specific workflows for doctors, nurses, pharmacy, laboratory and blood bank",
      "Secure user and hospital management with scoped access",
      "Production deployment with Docker, Nginx and VPS infrastructure",
    ],
    techStack: "Node.js / Express / TypeScript / FastAPI · MySQL / PostgreSQL / MongoDB · Prisma · JWT & RBAC · React · Docker / Nginx",
    architecture: `Frontend (React)\n    ↓\nAPI / Nginx\n    ↓\nNode.js / Express + FastAPI\n    ↓\nControllers → Services → Schemas\n    ↓\nMySQL / PostgreSQL / MongoDB\n    ↓\nJWT Auth · RBAC · Validation`,
    points: [
      "Scoped as production healthcare software at TTL Engineering spanning Super Admin, Hospital Admin, Doctor, Pharmacy, Lab and Blood Bank workflows with secure role-based access.",
      "Developed RESTful APIs using Node.js, Express.js, TypeScript and FastAPI with validation, error handling and JWT access control per role.",
      "Designed normalized database models and API workflows using MySQL, PostgreSQL and MongoDB with Prisma / SQLAlchemy patterns.",
      "Implemented authentication and authorization flows securing department-level operations and user management.",
      "Integrated frontend workflows with backend APIs for end-to-end hospital operations and reporting views.",
      "Assisted with Docker-based builds and Nginx/PM2 production deployment for live business usage.",
    ],
    engineeringHighlights: [
      "RBAC for 6+ roles",
      "JWT + validation",
      "Normalized DB schemas",
      "Modular API architecture",
      "Docker / Nginx deploy",
    ],
    live: null,
    github: null,
    privateNote: "Private production build — architecture and responsibilities verified via TTL Engineering experience. Demo available on request.",
  },
  {
    id: 15,
    title: "Pragya Yoga Alliance — Membership & Payment Platform",
    image: "/Images/project/pragya.jpg",
    tech: ["React.js", "Vite", "TanStack Query", "Framer Motion", "React Router", "Tailwind CSS", "Razorpay", "REST APIs", "Node.js", "Express.js"],
    category: "Full-Stack Platform",
    group: "Featured / Production",
    featured: true,
    description:
      "Full-stack membership and payment platform with secure authentication, subscription/payment workflows and booking management for yoga education and community operations.",
    problem: "Pragya Yoga needed a content-rich platform that could handle course bookings, book e-commerce, coupons, order tracking and admin operations with reliable payment collection.",
    solution: "Built a React frontend with lazy-loaded routes and integrated Razorpay Standard Checkout for order creation and server-side verification, plus cart, booking and bulk-order APIs for payable and enquiry-only flows.",
    myContribution: "Implemented Razorpay checkout (dynamic script, create-order, verify-payment), built cart/booking/bulk-order workflows, and delivered admin suite components with validation and responsive layouts.",
    keyFeatures: [
      "Razorpay Standard Checkout with create-order and signature verification",
      "Cart, book checkout, bulk orders and order tracking flows",
      "Payable (Card/UPI/NetBanking/Wallet) and enquiry-only (Cash/Pending) paths",
      "Admin suite: bookings, reports, coupons, orders and email health",
      "Lazy-loaded routes, accessible layouts and lotus branding",
    ],
    techStack: "React 19 / Vite / TanStack Query / React Router · Express.js / Node.js REST APIs · Razorpay · Tailwind CSS · Docker-ready",
    architecture: `Frontend (React + Vite + TanStack Query)\n    ↓\nREST APIs (Express / Node.js)\n    ↓\nPOST /create-order → Razorpay Checkout\n    ↓\nPOST /verify-payment (signature)\n    ↓\nPOST /bookings · Cart → Orders → Tracking\n    ↓\nValidation · Auth · Error handling`,
    points: [
      "Built with React 19, Vite, TanStack Query, Framer Motion and React Router — lazy-loaded routes (About/Classes/YTTC/Events/Payment/Books) with AnimatePresence, lotus branding and responsive, accessible layouts.",
      "Implemented fully functional Razorpay Standard Checkout: dynamic script injection (checkout.razorpay.com/v1/checkout.js), create-order via POST /create-order (amount in paise, auth headers), Razorpay modal with prefill and theme #7a5cff, and server verification via POST /verify-payment (order_id/payment_id/signature) before confirming booking.",
      "Delivered end-to-end booking + e-commerce flows: Cart (getCart, removeFromCart, applyCouponToCart, checkoutCart, verifyPayment), Book checkout, Bulk Orders, Order Tracking, bookings via POST /bookings with paymentMethod/transactionId/status — handling both payable (Razorpay Card/UPI/NetBanking/Wallet) and enquiry-only (Cash/Pending) paths.",
      "Added admin suite (YogaAdmin, DashboardInsights, ReportsInvoices, BookingsCalendar, StudentProfileWorkspace, CouponManagement, StoreOrders, EmailHealth) — 30+ admin components, RBAC-ready, with DOMPurify, React Calendar, Sharp image optimization and Docker-ready builds.",
    ],
    engineeringHighlights: [
      "Razorpay order + verification",
      "TanStack Query data layer",
      "RBAC-ready admin suite",
      "Payable + enquiry flows",
    ],
    live: "https://pragyayoga.in/",
    github: null,
  },
  {
    id: 1,
    title: "GeoTech — Project Execution & Workforce Management Platform",
    image: "/Images/project/geotech.png",
    tech: ["React.js", "FastAPI", "MySQL", "SQLAlchemy", "JWT", "Python", "REST APIs"],
    category: "Project Execution Platform",
    group: "Featured / Production",
    featured: true,
    description:
      "Project execution and workforce management platform for geotechnical field operations — Admin → Users → Vendors → Machinery → Projects → Supervisor → Daily Execution Reports → Attendance and Cost Tracking.",
    problem: "Geotechnical field teams tracked projects, vendors, machinery and daily execution manually — lacking role-based visibility, reporting and cost/work tracking.",
    solution: "Built a full-stack platform with FastAPI backend (routers → services → schemas, SQLAlchemy ORM) and React frontend, exposing JWT-secured, role-scoped APIs and dashboards for Admin vs Supervisor workflows.",
    myContribution: "Architected FastAPI backend structure, designed normalized MySQL schema, implemented JWT RBAC and built project tracking/reporting features integrated end-to-end with React.",
    keyFeatures: [
      "Role-based access: Admin and Supervisor dashboards with distinct permissions",
      "Vendor, machinery and project management modules",
      "Daily execution reports, attendance and work tracking",
      "Cost and execution tracking with reporting dashboards",
      "JWT authentication with role-scoped API protection",
      "Normalized MySQL schema for projects, tasks, users and reporting",
    ],
    techStack: "FastAPI (routers/services/schemas) · SQLAlchemy · MySQL · JWT · React.js",
    architecture: `Frontend (React)\n    ↓\nREST APIs (FastAPI — routers → services → schemas)\n    ↓\nSQLAlchemy ORM\n    ↓\nMySQL (normalized: projects/tasks/users/reports)\n    ↓\nJWT Auth · RBAC (Super Admin vs Supervisor)`,
    points: [
      "Architected a modular FastAPI backend with routers, services, schemas, and SQLAlchemy ORM — enabling clean separation of concerns and straightforward feature extension.",
      "Built role-based dashboards for Super Admin and Supervisors with distinct data views, permissions, and workflow controls.",
      "Implemented JWT authentication with role-scoped API access, protecting sensitive project data per user tier.",
      "Delivered Admin → Users → Vendors → Machinery → Projects → Supervisor → Daily Execution Reports → Attendance/Cost tracking workflow integrated end-to-end with the React.js frontend.",
      "Designed normalised MySQL schema to handle projects, tasks, users, and reporting relationships efficiently.",
    ],
    engineeringHighlights: [
      "FastAPI modular architecture",
      "SQLAlchemy + normalized MySQL",
      "JWT RBAC dashboards",
      "Execution → cost tracking",
    ],
    live: null,
    github: "https://github.com/SriHariJagan/GeoTech-Backend",
  },
  // ========== OTHER — production but not top-featured (keeps 3 featured as requested) ==========
  {
    id: 9,
    title: "MetaDev — Global Digital Platform",
    image: "/Images/project/metaDev.jpg",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "MUI", "Ant Design", "Framer Motion", "React Router", "Node.js", "Express.js", "Prisma", "PostgreSQL", "JWT", "Zod", "Swagger"],
    category: "SaaS Platform",
    group: "Other / Production",
    featured: false,
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
    id: 16,
    title: "Soma Wellness — Yoga & Wellness",
    image: "/Images/project/somawell.jpg",
    tech: ["React.js", "Vite", "TanStack Query", "i18next", "Framer Motion", "React Router", "M-Pesa", "REST APIs"],
    category: "Websites",
    group: "Other / Production",
    featured: false,
    description:
      "Flagship website for Soma Wellness — a yoga and wellness platform with internationalization and a fully functional M-Pesa payment gateway. Shares patterns with Pragya Yoga with full i18n and M-Pesa specialization.",
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
    id: 3,
    title: "Eccellenza Infra — Business Website",
    image: "/Images/project/eccellenza.png",
    tech: ["React.js", "Framer Motion", "CSS Modules", "SEO"],
    category: "Websites",
    group: "Other / Production",
    featured: false,
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
    group: "Other / Production",
    featured: false,
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
    group: "Other / Production",
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
  // Ecosystem — not featured individually
  {
    id: 12,
    title: "MetaHire — Hiring & Talent Platform",
    image: "/Images/project/metaHire.jpg",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Lucide React"],
    category: "SaaS",
    group: "Product Ecosystem",
    featured: false,
    description:
      "SaaS hiring and talent management frontend — an 8-step workflow from Create Job to Hire, live at metahire.in. Part of MetaDev ecosystem.",
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
    featured: false,
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
//  SKILLS DATA — grouped professionally, no percentages
// ============================================================

export const skillsData = {
  languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication", "RBAC"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  frontend: ["React", "React Router", "React Query (TanStack)", "Zustand", "Redux Toolkit", "Tailwind CSS"],
  devops: ["Docker", "Linux", "Nginx", "PM2", "Git", "GitHub", "Vercel", "Netlify"],
  integrations: ["Razorpay", "M-Pesa", "Email APIs", "REST API Integrations"],
  concepts: ["API Design", "Database Design", "Validation (Zod)", "Error Handling", "SEO", "Performance Optimization"],
};


// ============================================================
//  BACKEND ENGINEERING — for dedicated section
// ============================================================

export const backendEngineeringData = [
  {
    title: "API Development",
    desc: "RESTful APIs with Zod validation, centralized error handling, pagination and JWT authentication — modular router → service → schema architecture.",
    icon: "api",
  },
  {
    title: "Security",
    desc: "JWT access/refresh, Argon2id hashing, role-based authorization, RBAC guards per route and input validation to protect sensitive workflows.",
    icon: "security",
  },
  {
    title: "Database",
    desc: "Schema design with Prisma / SQLAlchemy, relationships and transactions, normalized MySQL/PostgreSQL/MongoDB models and query optimization where applicable.",
    icon: "database",
  },
  {
    title: "Performance",
    desc: "Query optimization, caching strategies and asynchronous workflows for responsive APIs — with attention to indexing and payload design.",
    icon: "performance",
  },
  {
    title: "Infrastructure",
    desc: "Docker builds, Linux VPS, Nginx reverse proxy, PM2 process management and Vercel/Netlify/Render deployments with health checks and graceful shutdown.",
    icon: "infra",
  },
  {
    title: "Integrations",
    desc: "Razorpay and M-Pesa payment gateways with server-side verification, email services and external REST API integrations for real business flows.",
    icon: "integrations",
  },
];


// ============================================================
//  PERSONAL / META
// ============================================================

export const personalData = {
  name: "Sri Hari Jagan Mushini",
  shortName: "Sri Hari Jagan",
  title: "Backend / Full-Stack Developer",
  headline: "Building secure, scalable backend systems and production-ready web applications using Node.js, TypeScript, Express.js, React and modern databases.",
  summary:
    "I'm a Backend / Full-Stack Developer with hands-on experience building production-oriented web applications using Node.js, TypeScript, Express.js, React and relational/non-relational databases. I've worked on healthcare, project management, payment and business platforms, with experience spanning API development, authentication, role-based access control, database design, third-party integrations and deployment.",
  email: "sriharijagan04@gmail.com",
  phone: "+91 95052 22778",
  linkedin: "https://www.linkedin.com/in/sri-hari-jagan-mushini",
  github: "https://github.com/SriHariJagan",
  portfolio: "https://sriharijagan.vercel.app/",
  location: "Andhra Pradesh, India",
  available: true,
  targetRoles: ["Backend Developer", "Node.js Developer", "TypeScript Developer", "Full-Stack Developer", "Software Engineer"],
  resumePath: "/resume/SriHariJaganMushini.pdf",
};
