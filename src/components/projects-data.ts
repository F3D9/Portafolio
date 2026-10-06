import preview from "../assets/chatbot5.png";
import preview2 from "../assets/chatbot2.png";
import preview3 from "../assets/chatbot3.png";
import gymtracker1 from "../assets/gymtracker1.png";
import gymtracker2 from "../assets/gymtracker2.png";
import gymtracker3 from "../assets/gymtracker3.png";
import gymtracker4 from "../assets/gymtracker4.png";
import fierrero1 from "../assets/fierrero1.png";
import fierrero2 from "../assets/fierrero2.png";
import fierrero3 from "../assets/fierrero3.png";
import fierrero4 from "../assets/fierrero4.png";
import asseto from "../assets/asseto.png";

export interface Project {
  title: { es: string; en: string };
  status: { es: string; en: string };
  description: { es: string; en: string };
  tags: string[];
  images: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: { 
        es: "GymTracker — App de Seguimiento de Entrenamientos", 
        en: "GymTracker — Workout Tracking App" 
    },
    status: { 
        es: "En Produccion", 
        en: "In Production" 
    },
    description: {
        es: "API REST con más de 30 endpoints organizada en módulos. Implementa autenticación mediante JWT en cookies httpOnly y CORS para seguridad. Modelado de datos con PostgreSQL y Prisma, con despliegue automatizado vía GitHub Actions.",
        en: "REST API with 30+ endpoints organized in modules. Implements authentication via httpOnly cookies and CORS for security. Data modeling with PostgreSQL and Prisma, with automated deployment via GitHub Actions."
    },
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "JWT"],
    images: [gymtracker1, gymtracker2, gymtracker3, gymtracker4],
    github: "https://github.com/F3D9/Gym-Tracker-Frontend",
    demo: "https://f3d9.github.io/Gym-Tracker-Frontend/",
  },
  {
    title: { 
        es: "Chatbot Web con IA", 
        en: "AI Web Chatbot" 
    },
    status: { 
        es: "En producción", 
        en: "In Production" 
    },
    description: {
        es: "API REST con autorización por roles e integración con Gemini API para respuestas con contexto multiturno. Implementa persistencia de historial en PostgreSQL y validaciones estrictas con Zod y tests unitarios con Vitest.",
        en: "REST API with role-based authorization and Gemini API integration for multi-turn context responses. Implements history persistence in PostgreSQL and strict validations with Zod and unit tests using Vitest."
    },
    tags: ["Node.js", "TypeScript", "Gemini API", "PostgreSQL", "Docker", "Vitest"],
    images: [preview, preview2, preview3],
    github: "https://github.com/F3D9/ChatBotNodeJs",
    demo: "https://chatbotnodejs.up.railway.app",
  },
  {
    title: { 
        es: "Fierrero", 
        en: "Fierrero" 
    },
    status: { 
        es: "En producción", 
        en: "In Production" 
    },
    description: {
        es: "Juego de gestión automovilística basado en lógica de negocio compleja y simulaciones en el navegador.",
        en: "Automotive management game based on complex business logic and browser-based simulations."
    },
    tags: ["React", "TypeScript", "Docker", "Vitest"],
    images: [fierrero1,fierrero2,fierrero3,fierrero4],
    github: "https://github.com/fierrero-game/Fierrero",
    demo: "https://fierrero-game.github.io/Fierrero/",
  },
  {
    title: { 
        es: "Assetto Corsa Racing Platform", 
        en: "Assetto Corsa Racing Platform" 
    },
    status: { 
        es: "En Desarrollo", 
        en: "In Development" 
    },
    description: {
        es: "Desarrollo de una API REST con Spring Boot para la gestión de ligas de carreras, enfocándose en la robustez del backend y la persistencia de datos.",
        en: "Development of a Spring Boot REST API for racing league management, focusing on backend robustness and data persistence."
    },
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
    images: [asseto],
    github: "https://github.com/F3D9",
    demo: "#",
  },
];