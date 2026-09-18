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
        es: "Assetto Corsa Racing Platform", 
        en: "Assetto Corsa Racing Platform" 
    },
    status: { 
        es: "En Desarrollo", 
        en: "In Development" 
    },
    description: {
        es: "Arquitectura y desarrollo de un ecosistema escalable para la gestión de ligas y competencias. Implementación de una API REST robusta utilizando Spring Boot, enfocada en la optimización de procesos de inscripción, persistencia de datos compleja y gestión de rankings en tiempo real.",
        en: "Architecture and development of a scalable ecosystem for league and competition management. Implementation of a robust REST API using Spring Boot, focusing on registration process optimization, complex data persistence, and real-time ranking management."
    },
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Software Architecture"],
    images: [asseto],
    github: "https://github.com/F3D9",
    demo: "#",
  },
  {
    title: { 
        es: "Gym Tracker", 
        en: "Gym Tracker" 
    },
    status: { 
        es: "En Produccion", 
        en: "In Production" 
    },
    description: {
        es: "Sistema de gestión de rutinas con arquitectura desacoplada. Implementación de un backend robusto en NestJS con PostgreSQL y Prisma ORM, asegurando la integridad de los datos y un flujo de autenticación seguro mediante JWT.",
        en: "Routine management system with decoupled architecture. Implementation of a robust NestJS backend with PostgreSQL and Prisma ORM, ensuring data integrity and a secure authentication flow using JWT."
    },
    tags: ["Nestjs", "TypeScript","PostgreSQL", "React","Vite","Prisma","Docker"],
    images: [gymtracker1, gymtracker2, gymtracker3, gymtracker4],
    github: "https://github.com/F3D9/Gym-Tracker-Frontend",
    demo: "https://f3d9.github.io/Gym-Tracker-Frontend/",
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
        es: "Simulador de gestión automovilística basado en lógica de negocio compleja. Implementación de motores de estado y validaciones rigurosas para garantizar la coherencia de la simulación en el cliente.",
        en: "Automotive management simulator based on complex business logic. Implementation of state engines and rigorous validations to ensure simulation consistency on the client side."
    },
    tags: ["React","TypeScript","Docker", "Vitest"],
    images: [fierrero1,fierrero2,fierrero3,fierrero4],
    github: "https://github.com/fierrero-game/Fierrero",
    demo: "https://fierrero-game.github.io/Fierrero/",
  },
  {
    title: { 
        es: "AI Chatbot", 
        en: "AI Chatbot" 
    },
    status: { 
        es: "En producción", 
        en: "In Production" 
    },
    description: {
        es: "Integración de modelos de lenguaje (Gemini API) mediante un middleware en Node.js. Diseño de persistencia de historial en PostgreSQL y validación de flujos mediante una suite de tests automatizados con Vitest.",
        en: "Integration of language models (Gemini API) through a Node.js middleware. Design of history persistence in PostgreSQL and flow validation using an automated test suite with Vitest."
    },
    tags: ["Node.js", "TypeScript", "Gemini API", "PostgreSQL","Docker", "Vitest", "Railway"],
    images: [preview, preview2, preview3],
    github: "https://github.com/F3D9/ChatBotNodeJs",
    demo: "https://chatbotnodejs.up.railway.app",
  },
];