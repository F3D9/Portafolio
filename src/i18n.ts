export type Language = 'es' | 'en';

export const translations = {
  es: {
    hero: {
      role: 'Estudiante de Ingeniería Informática',
      title: 'Federico Salgado',
      description: 'Busco unirme a un equipo en el que pueda aprender, enriquecer mi carrera profesional y sumar valor a través del desarrollo de software.',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Estudiante de Ingeniería Informática',
      education: 'en Universidad de Buenos Aires',
      description: 'Soy Federico, estudiante de tercer año de Ingeniería Informática en la UBA. Me apasiona el desarrollo de software y actualmente enfoco mi aprendizaje en el ecosistema backend. Mi objetivo es seguir creciendo técnica y profesionalmente, aportando mis conocimientos mientras aprendo de equipos experimentados. Tengo disponibilidad para modalidades presencial, híbrida o remota en CABA.',
      stackTitle: 'Habilidades Técnicas',
    },
    projects: {
      title: 'Proyectos',
      headline: 'Desarrollos',
      subheadline: 'Personales.',
    },
    contact: {
      title: 'Contacto',
      headline: 'Hablemos',
      subheadline: 'estoy disponible para nuevas oportunidades.',
      inputName: 'Nombre',
      inputEmail: 'Email',
      inputMessage: 'Mensaje',
      buttonSend: 'Enviar mensaje',
      success: '¡Mensaje enviado con éxito!',
      error: 'Hubo un error al enviar el mensaje.',
    },
    navbar: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
    }
  },
  en: {
    hero: {
      role: 'Computer Engineering Student',
      title: 'Federico Salgado',
      description: 'Looking to join a team where I can learn, enrich my professional career, and add value through software development.',
    },
    about: {
      title: 'About me',
      subtitle: 'Computer Engineering Student ',
      education: 'at University of Buenos Aires',
      description: 'I am Federico, a third-year Computer Engineering student at UBA. I am passionate about software development and currently focusing my learning on the backend ecosystem. My goal is to continue growing technically and professionally, contributing my knowledge while learning from experienced teams. Available for on-site, hybrid, or remote work in CABA.',
      stackTitle: 'Technical Skills',
    },
    projects: {
      title: 'Projects',
      headline: 'Personal',
      subheadline: 'Developments.',
    },
    contact: {
      title: 'Contact',
      headline: 'Let\'s talk',
      subheadline: 'I am available for new opportunities.',
      inputName: 'Name',
      inputEmail: 'Email',
      inputMessage: 'Message',
      buttonSend: 'Send message',
      success: 'Message sent successfully!',
      error: 'There was an error sending the message.',
    },
    navbar: {
      inicio: 'Home',
      sobreMi: 'About',
      proyectos: 'Projects',
      contacto: 'Contact',
    }
  }
};

export function t(lang: Language, key: string) {
  const keys = key.split('.');
  let result: any = translations[lang];
  
  for (const k of keys) {
    result = result?.[k];
  }
  
  return result || key;
}