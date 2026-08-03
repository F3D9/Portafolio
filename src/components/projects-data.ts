import preview from "../assets/chatbot5.png";
import preview2 from "../assets/chatbot2.png";
import preview3 from "../assets/chatbot3.png";
import gymtracker1 from "../assets/gymtracker1.png";
import gymtracker2 from "../assets/gymtracker2.png";
import gymtracker3 from "../assets/gymtracker3.png";
import gymtracker4 from "../assets/gymtracker4.png";

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
    title: "Gym Tracker",
    status: "En Produccion",
    description:
      "Aplicación para registrar rutinas de entrenamiento, con backend en NestJS y frontend en React. Utiliza PostgreSQL para almacenamiento de datos y Prisma como ORM. Desplegado en Render para el Backend y Github Pages para el Frontend. Incluye autenticación de usuarios y manejo de sesiones.",
    tags: ["Nestjs", "TypeScript","PostgreSQL", "React","Vite","Prisma","Docker"],
    images: [gymtracker1, gymtracker2, gymtracker3, gymtracker4],
    github: "https://github.com/F3D9/Gym-Tracker-Frontend",
    demo: "https://f3d9.github.io/Gym-Tracker-Frontend/",
  },
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
  
  // agregá más proyectos acá con la misma estructura
  
];