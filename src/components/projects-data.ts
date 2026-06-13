import preview from "../assets/chatbot5.png";
import preview2 from "../assets/chatbot2.png";
import preview3 from "../assets/chatbot3.png";
import GymTracker from "../assets/GymTracker.png";

export interface Project {
  title: string;
  status: string;
  description: string;
  tags: string[];
  images: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "AI Chatbot",
    status: "En producción",
    description:
      "Chatbot conversacional con integración a la API de Gemini. Incluye autenticación de usuarios, historial de conversaciones persistido en PostgreSQL y suite de tests con Vitest. Desplegado en Railway.",
    tags: ["Node.js", "TypeScript", "Gemini API", "PostgreSQL","Docker", "Vitest", "Railway"],
    images: [preview, preview2, preview3],
    github: "https://github.com/F3D9/ChatBotNodeJs",
    demo: "https://chatbotnodejs.up.railway.app",
  },
  {
    title: "Gym Tracker",
    status: "En desarollo",
    description:
      "Aplicación para registrar rutinas de entrenamiento, con backend en NestJS y frontend en React. Utiliza PostgreSQL para almacenamiento de datos y Prisma como ORM. Desplegado con Docker. Todavia no hay demo disponible",
    tags: ["Nestjs", "TypeScript","PostgreSQL", "React","Vite","Prisma","Dcker"],
    images: [GymTracker],
    github: "",
    demo: "",
  },
  // agregá más proyectos acá con la misma estructura
  
];