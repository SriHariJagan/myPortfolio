import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiFramer,
  SiPython,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiTypescript,
  SiMui,
  SiAntdesign,
  SiPrisma,
  SiPostgresql,
  SiSwagger,
  SiJsonwebtokens,
  SiZod,
  SiExpress,
} from "react-icons/si";
import { FaRobot, FaSearch, FaDatabase, FaRoute, FaCode } from "react-icons/fa";
import { MdCss } from "react-icons/md";

const techIcons = {
  // Core
  "React": SiReact,
  "React.js": SiReact,
  "Next": SiNextdotjs,
  "Next.js": SiNextdotjs,
  "JavaScript": SiJavascript,
  "JavaScript (ES6+)": SiJavascript,
  "TypeScript": SiTypescript,

  // Backend
  "Node": SiNodedotjs,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "Express.js": SiExpress,
  "Django": SiDjango,
  "Django REST": SiDjango,
  "Django REST API": SiDjango,

  // Databases
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "MySQL": FaDatabase,
  "Prisma": SiPrisma,
  "Firestore": FaDatabase,
  "Firebase Firestore": SiFirebase,
  "Firebase Authentication": SiFirebase,

  // Styling
  "Tailwind CSS": SiTailwindcss,
  "CSS3": SiCss3,
  "CSS Modules": MdCss,
  "HTML5": SiHtml5,
  "MUI": SiMui,
  "Ant Design": SiAntdesign,

  // Animations & UI
  "Framer Motion": SiFramer,
  "LightGallery": FaSearch,

  // Tools & Auth
  "Vite": SiVite,
  "React Router": FaRoute,
  "Context API": FaRoute,
  "JWT": SiJsonwebtokens,
  "JWT Authentication": SiJsonwebtokens,
  "Zod": SiZod,
  "Swagger": SiSwagger,
  "TanStack Query": FaCode,
  "i18next": FaCode,

  // AI & SEO
  "AI Chatbot": FaRobot,
  "SEO": FaSearch,
  "SEO Optimisation": FaSearch,

  // Languages
  "Python": SiPython,
  "SQLAlchemy": FaDatabase,
};

export default techIcons;
