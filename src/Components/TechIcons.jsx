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
} from "react-icons/si";
import { FaRobot, FaSearch, FaDatabase, FaRoute } from "react-icons/fa";
import { MdCss } from "react-icons/md";

const techIcons = {
  // Core
  "React": SiReact,
  "React.js": SiReact,
  "Next": SiNextdotjs,
  "Next.js": SiNextdotjs,
  "JavaScript": SiJavascript,

  // Backend
  "Node": SiNodedotjs,
  "Node.js": SiNodedotjs,
  "Django": SiDjango,
  "Django REST": SiDjango,

  // Databases
  "MongoDB": SiMongodb,
  "Firestore": FaDatabase,
  "Firebase Authentication": SiFirebase,

  // Styling
  "Tailwind CSS": SiTailwindcss,
  "CSS3": SiCss3,
  "CSS Modules": MdCss,
  "HTML5": SiHtml5,

  // Animations & UI
  "Framer Motion": SiFramer,
  "LightGallery": FaSearch,

  // Tools
  "Vite": SiVite,
  "React Router": FaRoute,
  "Context API": FaRoute,

  // AI & SEO
  "AI Chatbot": FaRobot,
  "SEO": FaSearch,

  // Languages
  "Python": SiPython,
};

export default techIcons;
