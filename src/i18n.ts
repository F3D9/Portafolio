export type Language = 'es' | 'en';

export const translations = {
  es: {
    hero: {
      role: 'Backend Developer · Buenos Aires',
      title: 'Federico Salgado',
      description: 'Enfocado en la construcción de sistemas escalables, arquitectura de software y la optimización de procesos en el servidor.',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Backend Developer',
      education: 'Ingeniería en la UBA.',
      description: 'Soy Federico, un apasionado por la ingeniería de software con especialización en el desarrollo de sistemas robustos y escalables. Actualmente curso la carrera de Ingeniería Informática en la UBA, enfocando mi crecimiento profesional en el ecosistema de Java y Spring, y la implementación de arquitecturas en la nube con AWS. Cuento con experiencia desplegando soluciones reales en producción y busco integrarme a equipos donde la calidad del código y el diseño de sistemas sean la prioridad.',
      stackTitle: 'Core Stack',
    },
    projects: {
      title: 'Proyectos',
      headline: 'Engineering',
      subheadline: 'Showcase.',
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
      role: 'Backend Developer · Buenos Aires',
      title: 'Federico Salgado',
      description: 'Focused on building scalable systems, software architecture, and server-side process optimization.',
    },
    about: {
      title: 'About me',
      subtitle: 'Backend Developer',
      education: 'Engineering at UBA.',
      description: 'I am Federico, a software engineering enthusiast specializing in the development of robust and scalable systems. I am currently studying Computer Engineering at UBA, focusing my professional growth on the Java and Spring ecosystem, and implementing cloud architectures with AWS. I have experience deploying real-world solutions in production and I am looking to join teams where code quality and system design are the priority.',
      stackTitle: 'Core Stack',
    },
    projects: {
      title: 'Projects',
      headline: 'Engineering',
      subheadline: 'Showcase.',
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