// ============================================================
//  PORTFOLIO DATA — Sri Hari Jagan Mushini
//  Fully aligned with resume · 8 projects included
// ============================================================

export const experienceData = [
  {
    id: 1,
    company: "TTL Engineering Pvt. Ltd",
    role: "Full Stack Developer",
    period: "Mar 2024 – Present",
    location: "Andhra Pradesh",
    type: "Full-time",
    description:
      "Building and shipping production-grade web applications for real business clients — spanning admin dashboards, booking systems, e-commerce platforms, and workflow management tools — with full ownership from requirement gathering to deployment.",
    points: [
      "Engineered and deployed 5+ production web applications (admin dashboards, booking systems, workflow managers) actively used by business clients daily.",
      "Designed and built RESTful APIs using FastAPI and Express.js, enabling seamless and secure frontend–backend communication.",
      "Implemented JWT-based authentication and role-based access control (RBAC) for multi-tier user systems — Super Admin, Supervisor, and Client roles.",
      "Improved frontend bundle performance using lazy loading, code splitting, and reusable component architecture, achieving ~25% reduction in initial load times.",
      "Owned end-to-end delivery: requirement gathering, UI development, API integration, SEO setup, Vercel/Netlify deployment, and production maintenance.",
      "Collaborated directly with non-technical stakeholders to translate business requirements into working features, consistently delivering on schedule.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "FastAPI", "MongoDB", "MySQL", "Redux Toolkit", "Tailwind CSS", "JWT", "Vercel", "Netlify"],
  },
  {
    id: 2,
    company: "Civil-AI",
    role: "Frontend Developer",
    period: "Jan 2024 – Apr 2024",
    location: "Remote",
    type: "Contract",
    description:
      "Built the complete frontend for an AI-powered construction management platform, focused on productivity, team collaboration, and automation.",
    points: [
      "Developed the entire frontend using React.js, Tailwind CSS, and CSS Modules — creating a scalable and maintainable UI architecture.",
      "Integrated Django REST APIs for project management, task assignment, and workflow automation modules.",
      "Built a reusable component library with dark/light mode support, reducing UI development time for new features by ~30%.",
      "Integrated an AI-powered chatbot for project queries, enhancing user engagement and reducing support overhead.",
      "Delivered a fully responsive, production-ready interface optimised for performance and cross-device compatibility.",
    ],
    tech: ["React.js", "Tailwind CSS", "CSS Modules", "Django REST API", "AI Chatbot"],
  },
  {
    id: 3,
    company: "Coding Ninjas",
    role: "Teaching Assistant — React.js & Web Development",
    period: "May 2023 – Nov 2023",
    location: "Remote",
    type: "Part-time",
    description:
      "Mentored 100+ learners in modern frontend development, React.js, and web fundamentals through structured, project-based learning.",
    points: [
      "Guided 100+ students in React.js, JavaScript (ES6+), HTML5, CSS3 through project-based modules.",
      "Conducted weekly code reviews and debugging sessions, improving student assignment pass rates.",
      "Explained React hooks, component lifecycle, state management, and REST API integration concepts.",
      "Supported learners with hands-on project reviews and architecture best practices.",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
];


export const projectsData = [
  {
    id: 1,
    title: "GeoTech Project Management System",
    image: "/Images/project/geotech.png",
    tech: ["React.js", "FastAPI", "MySQL", "SQLAlchemy", "JWT", "Python"],
    category: "Full Stack",
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
    id: 2,
    title: "Maanjo Farm — Agritourism Platform",
    image: "/Images/project/manjuufarming.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
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
    id: 3,
    title: "Eccellenza Infra — Business Website",
    image: "/Images/project/eccellenza.png",
    tech: ["React.js", "Framer Motion", "CSS Modules", "SEO"],
    category: "Frontend",
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
    id: 4,
    title: "JK Grani Marmo — Granite Manufacturing Website",
    image: "/Images/project/jkgranimarmo.png",
    tech: ["React.js", "Vite", "Django", "CSS3"],
    category: "Full Stack",
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
    id: 5,
    title: "Civil-AI — Construction Management Platform",
    image: "/Images/project/civilai.png",
    tech: ["React.js", "Tailwind CSS", "CSS Modules", "Django REST API", "AI Chatbot"],
    category: "Frontend",
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
    category: "Full Stack",
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
    category: "Frontend",
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
    category: "Frontend",
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