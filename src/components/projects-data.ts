import preview from "../assets/chatbot5.png";
import preview2 from "../assets/chatbot2.png";
import preview3 from "../assets/chatbot3.png";

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
    tags: ["Node.js", "TypeScript", "Gemini API", "PostgreSQL", "Vitest", "Railway"],
    images: [preview, preview2, preview3],
    github: "https://github.com/F3D9/ChatBotNodeJs",
    demo: "https://chatbotnodejs.up.railway.app",
  },
  // agregá más proyectos acá con la misma estructura
  
];