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
    jobTitle: "Director de Innovación Tecnológica",
    content: "Líder técnico especializado en la digitalización de procesos de ingeniería. Con más de 10 años de experiencia, coordina la implementación de herramientas BIM avanzadas y soluciones de software personalizadas que optimizan la comunicación entre la fase de diseño y la ejecución en campo, garantizando una trazabilidad total del proyecto.",
    imageURL: "/pausin.jpeg",
    category: "nacional"
  },
  {
    id: 2,
    name: "Andrea Chacin",
    jobTitle: "Directora de Arquitectura y Urbanismo",
    content: "Arquitecta con enfoque en diseño sostenible y eficiencia energética. Su trayectoria destaca por integrar soluciones arquitectónicas de vanguardia en entornos urbanos complejos, priorizando siempre la funcionalidad y el cumplimiento estricto de las normativas internacionales de construcción verde y habitabilidad.",
    imageURL: "/andrea.jpeg",
    category: "nacional"
  },
  {
    id: 3,
    name: "Carlos Augusto",
    jobTitle: "CEO & Senior Project Advisor",
    content: "Estratega de negocios con visión global en el sector de la infraestructura. Se encarga de la expansión internacional de la firma, estableciendo alianzas de alto nivel en mercados emergentes. Su liderazgo se centra en la excelencia operativa y en asegurar que cada proyecto de Nexus cumpla con los estándares de rentabilidad y calidad técnica exigidos por inversores globales.",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 4,
    name: "Juana Perez",
    jobTitle: "Senior Project Manager (PMO)",
    content: "Especialista en la gestión de la triple restricción: alcance, tiempo y costo. Dirige la oficina de gestión de proyectos (PMO), asegurando que las metodologías ágiles y el control de ruta crítica se apliquen de forma rigurosa, mitigando riesgos financieros y operativos desde la etapa de licitación hasta la entrega llave en mano.",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 5,
    name: "Miguel Ángel Ruiz",
    jobTitle: "Especialista en Rescate de Proyectos",
    content: "Ingeniero consultor experto en la reactivación de obras paralizadas y auditoría de crisis. Su labor se centra en desatascar nudos contractuales y técnicos, reestructurando presupuestos y cronogramas para devolver la viabilidad económica a proyectos con desviaciones críticas o conflictos de contratistas.",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 6,
    name: "Luisana Rivas",
    jobTitle: "Especialista Senior en Estructuras",
    content: "Ingeniero civil dedicada al cálculo avanzado y análisis sísmico de infraestructuras complejas. Experta en el diseño de sistemas estructurales para naves industriales y edificios de gran altura, utilizando software de última generación para garantizar la seguridad y la optimización de materiales en cada obra.",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 7,
    name: "Elena Martínez",
    jobTitle: "Coordinadora de Diseño BIM",
    content: "Arquitecta experta en metodologías colaborativas. Gestiona el ciclo de vida de la información del edificio, permitiendo una visualización precisa de colisiones técnicas antes de la construcción. Su trabajo reduce drásticamente los errores en obra y facilita el mantenimiento preventivo de la infraestructura terminada.",
    imageURL: "/andrea.jpeg",
    category: "nacional"
  },
  {
    id: 8,
    name: "Roberto Vallenilla",
    jobTitle: "Director de Operaciones Internacionales",
    content: "Encargado de la logística y suministro en proyectos transfronterizos. Supervisa que la cadena de suministro y los equipos de montaje certificados cumplan con las normativas locales e internacionales (ANSI/OSHA), garantizando que la excelencia técnica de Nexus se replique en cualquier ubicación geográfica.",
    imageURL: "/pausin.jpeg",
    category: "internacional"
  },
  {
    id: 9,
    name: "Juana Perez",
    jobTitle: "Gerente de Control de Costos",
    content: "Analista financiero especializado en auditorías preventivas de obra. Se dedica a la detección de partidas infladas y al seguimiento de curvas S de inversión, proporcionando al promotor reportes de transparencia total sobre el uso de recursos y asegurando que no existan desviaciones presupuestarias.",
    imageURL: "/pausin.jpeg",
    category: "nacional"
  },
  {
    id: 10,
    name: "Juana Perez",
    jobTitle: "Supervisora de Seguridad y Salud (HSE)",
    content: "Responsable de la integridad física en todos nuestros frentes de trabajo. Implementa protocolos de seguridad de 'Cero Accidentes', supervisando personalmente los sistemas de andamiaje y acceso seguro, asegurando que cada operario y técnico trabaje bajo los estándares de protección más altos de la industria.",
    imageURL: "/pausin.jpeg",
    category: "nacional"
  }
];