export const experienceData = [
  {
    id: 1,
    company: "TTL Engineering Pvt. Ltd",
    role: "Freelance Full-Stack Developer",
    period: "Mar 2024 – Present",
    description:
      "Working as a freelance full-stack developer delivering scalable, production-ready web applications with a strong focus on performance, usability, and clean architecture.",
    points: [
      "Designed and developed end-to-end web applications using React, Node.js, and RESTful APIs",
      "Built reusable, modular frontend components with efficient state management using Redux Toolkit",
      "Developed and integrated backend services, ensuring secure and reliable data flow",
      "Optimized application performance and code quality, achieving ~25% improvement in load times",
      "Collaborated closely with designers and stakeholders to deliver 10+ responsive, user-focused pages",
      "Implemented authentication, role-based access control, and deployment workflows for production environments",
    ],
  },
  {
    id: 2,
    company: "Civil-AI",
    role: "Frontend Developer (Freelance Project)",
    period: "Jan 2024 – Apr 2024",
    description:
      "Built the complete frontend for an AI-powered construction management platform focused on productivity and automation.",
    points: [
      "Developed the entire frontend using React.js, Tailwind CSS, and CSS Modules",
      "Implemented project creation, task assignment, and user management modules",
      "Integrated Django REST APIs for seamless backend communication",
      "Added dark/light mode, email notifications, and an AI chatbot for project queries",
      "Delivered a fully responsive and performance-optimized user interface",
    ],
  },

  {
    id: 3,
    company: "Coding Ninjas",
    role: "Teaching Assistant – React.js & Web Development",
    period: "May 2023 – Nov 2023",
    description:
      "Mentored learners in frontend development fundamentals and modern React practices.",
    points: [
      "Guided 80+ learners in React.js, HTML5, CSS3, and JavaScript",
      "Assisted with debugging, code reviews, and responsive design improvements",
      "Explained React hooks, state management concepts, and project workflows",
      "Supported students through hands-on, project-based learning sessions",
    ],
  },
];



export const projectsData = [
  {
    id: 6,
    title: "BuyBusy ",
    image: "/Images/project/buybusy.png",
    tech: [
      "React.js",
      "Firebase Authentication",
      "Firestore",
      "React Router",
      "CSS Modules",
    ],
    description:
      "A full-featured e-commerce web application demonstrating secure authentication, real-time database operations, and scalable state management with a clean, responsive UI.",
    points: [
      "Implemented user authentication and session management using Firebase Authentication with secure login and signup flows.",
      "Built complete CRUD functionality for cart and orders using Firestore with real-time data synchronization.",
      "Designed global state management using React Context API to handle authentication, cart, and product data efficiently.",
      "Integrated React Router to enable seamless navigation across Home, Cart, Orders, Login, Signup, and Error pages.",
      "Implemented optimized UI/UX with loading states, error handling, and reusable component architecture.",
      "Ensured responsive design and clean code structure with modular components and maintainable styling using CSS Modules.",
    ],
    live: "https://buybusy-onlineshopping.netlify.app/",
    github: "https://github.com/SriHariJagan/BuyBusy-OnlineShopping",
  },
  {
    id: 5,
    title: "TinyLink",
    image: "/Images/project/tinylink.png",
    tech: ["React.js", "Node.js", "MongoDB", "CSS Modules", "Tailwind CSS"],
    description:
      "A full-featured URL shortening app enabling users to create, track, and manage links with responsive, user-friendly UI.",
    points: [
      "Implemented end-to-end link management: create, redirect, delete, and view stats.",
      "Ensured unique short codes [A-Za-z0-9]{6,8} with proper validation and HTTP responses.",
      "Built responsive dashboard with search, filter, copy buttons, and sortable tables.",
      "Developed stats page showing total clicks and last clicked timestamp for each link.",
      "Created /healthz endpoint returning system status and version for monitoring.",
      "Deployed frontend on Netlify and backend on Render with MongoDB database.",
    ],
    live: "https://tinylk.netlify.app/",
    github: "https://github.com/SriHariJagan/TinyLink-Frontend",
  },
  {
    id: 4,
    title: "Eccellenza ",
    image: "/Images/project/eccellenza.png",
    tech: ["React", "Framer Motion", "CSS Modules", "SEO"],
    description:
      "Developed a corporate website for a commercial interior design and construction firm, focusing on a clean UI, smooth animations, backend integrations, and strong SEO performance.",
    points: [
      "Architected reusable React components to create a scalable and maintainable UI system.",
      "Integrated backend services including dynamic testimonials, email automation, and SEO enhancements.",
      "Implemented project galleries with category-based filtering to improve navigation, user engagement, and overall UX.",
      "Delivered a fully responsive, cross-device website with interactive UI animations.",
    ],
    live: "https://eccellenzainfra.com",
    github: null,
  },

  {
    id: 3,
    title: "Civil-AI",
    image: "/Images/project/civilai.png",
    tech: ["React", "Tailwind CSS", "Django REST", "AI Chatbot"],
    description:
      "Developed the frontend for an AI-powered construction management platform to enhance project tracking, team collaboration, and operational efficiency.",
    points: [
      "Led end-to-end frontend development using React.js, Tailwind CSS, and CSS Modules, creating a scalable and maintainable UI.",
      "Integrated Django REST APIs for project management, task assignment, and workflow automation, improving team efficiency.",
      "Implemented dark/light mode, email notifications, and an AI-powered chatbot to enhance user engagement and productivity.",
      "Delivered a fully responsive, production-ready interface optimized for performance, usability, and cross-device compatibility.",
    ],
    live: null,
    github: "https://github.com/SriHariJagan/CIVIL-AI",
  },
  {
    id: 2,
    title: "Maanjo Farm",
    image: "/Images/project/manjuufarming.png", // Replace with actual project image
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "An agritourism platform enabling users to purchase products and book villas, with a fast, SEO-friendly, and responsive interface.",
    points: [
      "Developed product purchase and villa booking modules to enhance customer experience",
      "Integrated backend APIs for inventory management, bookings, and real-time updates",
    ],
    live: null,
    github: "https://github.com/SriHariJagan/MaanjuFarms",
  },
  {
    id: 1,
    title: "JK Grani Marmo",
    image: "/Images/project/jkgranimarmo.png", // Replace with actual project image
    tech: ["React", "Vite", "Django", "CSS3"],
    description:
      "A business website for a marble and stone company featuring responsive design, inquiry forms, and automated email notifications for leads.",
    points: [
      "Built a fully responsive website with interactive UI elements",
      "Implemented automated email notifications using Django SMTP for lead management",
    ],
    live: "https://jkgranimarmo.in",
    github: null,
  },

];
