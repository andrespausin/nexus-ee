export interface TeamType {
  id: number;
  name: string;
  jobTitle: string;
  content: string;
  imageURL: string;
  category: "internacional" | "nacional";
}

export const TeamData: TeamType[] = [
  {
    id: 1,
    name: "Cesar Pausin",
    jobTitle: "Fullstack Engineer",
    content: "Especialista en desarrollo de soluciones escalables y arquitecturas de alto rendimiento. Enfoque en tecnologías modernas y experiencia de usuario fluida.",
    imageURL: "/pausin.jpeg",
    category: "nacional"
  },
  {
    id: 2,
    name: "Andrea Chacin",
    jobTitle: "Arquitecto",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero esse doloribus sed neque magnam similique voluptates in unde cumque minus illum earum laborum.",
    imageURL: "/andrea.jpeg",
    category: "nacional"
  },
  {
    id: 3,
    name: "Carlos Augusto",
    jobTitle: "CEO",
    content: "Liderazgo estratégico enfocado en la innovación y el crecimiento global. Impulsando la visión de la empresa hacia nuevos horizontes tecnológicos.",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 4,
    name: "Juana Perez",
    jobTitle: "Project Manager",
    content: "Gestión eficiente de recursos y tiempos para asegurar la entrega exitosa de proyectos. Coordinación de equipos multidisciplinarios con metodología ágil.",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 5,
    name: "Juana Perez",
    jobTitle: "Project Manager",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero esse doloribus sed neque magnam similique voluptates in unde cumque minus illum earum laborum!",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 6,
    name: "Cesar Pausin",
    jobTitle: "Fullstack Engineer",
    content: "Desarrollo de interfaces interactivas y optimización de rendimiento backend. Pasión por el código limpio y las mejores prácticas de la industria.",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 7,
    name: "Andrea Chacin",
    jobTitle: "Arquitecto",
    content: "Diseño arquitectónico sostenible y funcional. Creación de espacios que inspiran y mejoran la calidad de vida de las personas.",
    imageURL: "/andrea.jpeg",
    category: "nacional"
  },
  {
    id: 8,
    name: "Carlos Augusto",
    jobTitle: "CEO",
    content: "Experiencia en el mercado local con visión global. Transformando retos en oportunidades de negocio sólidas y duraderas.",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 9,
    name: "Juana Perez",
    jobTitle: "Project Manager",
    content: "Supervisión detallada de cada etapa del proyecto. Comunicación constante con stakeholders para garantizar la alineación con los objetivos comerciales.",
    imageURL: "/pausin.jpeg",
    category: "nacional"
  },
  {
    id: 10,
    name: "Juana Perez",
    jobTitle: "Project Manager",
    content: "Organización y liderazgo en proyectos de alto impacto nacional. Compromiso con la excelencia y la satisfacción del cliente final.",
    imageURL: "/pausin.jpeg",
    category: "nacional"
  }
];