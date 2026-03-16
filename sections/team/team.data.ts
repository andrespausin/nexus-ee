export interface TeamType {
  id: number;
  name: string;
  jobTitle: string;
  content: string;
  cardImageURL: string;
  dialogImageURL?: string;
  zoom?: string;
  category: "internacional" | "nacional";
}

export const TeamData: TeamType[] = [
  {
    id: 1,
    name: "Miguel Rodríguez Pausin",
    jobTitle: "Director General",
    content: "<b>Ingeniero Civil</b> (Universidad de Carabobo) con <b>Máster en Finanzas (IESA)</b> y <b>MBA (EAE Business School)</b>. Su perfil cuenta con la homologación oficial en España como <b>Ingeniero Técnico de Obras Públicas</b>, lo que le permite operar bajo el marco regulatorio europeo integrando una sólida base técnica con una visión avanzada en gestión de capital y estrategia corporativa.<br/><br/>Con más de una década de experiencia, ha liderado grandes proyectos de <b>infraestructura industrial, obra civil y energía</b>. Se especializa en optimizar procesos constructivos y la <b>digitalización de proyectos</b>, aplicando criterios de <b>viabilidad financiera y eficiencia técnica</b> para maximizar la rentabilidad operativa en entornos exigentes.<br/><br/>Como <b>Director General y Fundador</b> de <b>Nexus Engineering & Energy</b>, actúa como socio técnico estratégico en la <b>dirección de obra y gestión integral</b> de infraestructuras complejas, garantizando precisión técnica y operativa desde la planificación hasta la entrega final.</p>",
    cardImageURL: "/MIGUEL-1.JPG",
    dialogImageURL: "/MIGUEL-3.JPG",
    category: "nacional"
  }, {
    id: 2,
    name: "Claudia Arvelaiz",
    jobTitle: "Gerente de Proyectos y Planificación de Obras",
    content: "<b>Ingeniera Civil</b> (Universidad de Oriente) con <b>Máster en Project Management</b>. Se especializa en la planificación, control y gestión estratégica de proyectos de infraestructura, integrando metodologías avanzadas para el aseguramiento de objetivos técnicos y operativos.<br/><br/>Cuenta con una sólida trayectoria en sectores <b>industriales y energéticos</b>, liderando proyectos de alta complejidad como refinerías y grandes instalaciones. Destaca por su dominio en la <b>planificación integral, coordinación multidisciplinaria y gestión de riesgos</b>, garantizando la eficiencia operativa y el cumplimiento de plazos en entornos de alta exigencia técnica.<br/><br/>En <b>Nexus Engineering & Energy</b>, actúa como <b>Gerente de Proyectos</b> especializada en planificación. Lidera la estructuración de cronogramas y la optimización de recursos, implementando sistemas de control que aseguran la ejecución de proyectos complejos bajo los más altos estándares de calidad y seguridad.</p>",
    cardImageURL: "/CLAUDIA-1.JPG",
    dialogImageURL: "/CLAUDIA-2.JPG",
    category: "nacional"
  },
  {
    id: 3,
    name: "Cesar Pausin",
    jobTitle: "Director de Innovación Tecnológica",
    content: "<b>Ingeniero de Software Fullstack</b> (Universidad José Antonio Páez) experto en la <b>conceptualización y desarrollo de MVPs</b> desde su fase inicial hasta el despliegue en producción. Se especializa en optimizar el rendimiento de plataformas digitales y automatizar procesos operativos para reducir la carga técnica y maximizar la eficiencia del negocio.<br/><br/>Cuenta con una trayectoria en la <b>digitalización de procesos administrativos e industriales</b>, logrando optimizar los sistemas antes de llevarlos a producción. Ha liderado la resolución de incidencias críticas y la formación técnica de ingenieros, destacando por su capacidad para traducir requerimientos complejos en soluciones funcionales y escalables.<br/><br/>Responsable de <b>diseñar arquitecturas técnicas desde cero</b> y configurar infraestructuras de despliegue para productos en fase de lanzamiento. Su gestión asegura la transición fluida hacia entornos de producción, garantizando la mantenibilidad a largo plazo y la implementación de modelos predictivos para la toma de decisiones estratégicas.</p>",
    cardImageURL: "/CESAR-1.JPG",
    dialogImageURL: "/CESAR-2.JPG",
    zoom: "center 0%",
    category: "nacional"
  },
  {
    id: 4,
    name: "Andrea Chacin",
    jobTitle: "Directora de Arquitectura y Urbanismo",
    content: "<b>Arquitecta</b> (Universidad José Antonio Páez) y <b>Máster en Arquitectura Sostenible</b> por la Universidad Antonio de Nebrija (Madrid, España). Su formación especializada integra el desarrollo técnico de proyectos, eficiencia energética y el uso avanzado de <b>metodologías BIM</b> aplicadas al diseño y coordinación integral. <br/><br/> Con una sólida trayectoria en arquitectura e interiorismo, destaca por su dominio en el modelado 3D y la visualización arquitectónica, gestionando con precisión herramientas como Revit, AutoCAD y software de renderizado para transformar conceptos en documentación técnica detallada. <br/><br/> Actualmente, se desempeña en la <b>coordinación de modelos BIM</b> dentro de entornos multidisciplinarios, garantizando la integración eficiente de información y el cumplimiento de altos estándares de precisión en proyectos complejos de ingeniería y arquitectura.",
    cardImageURL: "/ANDREA-1.JPG",
    dialogImageURL: "/ANDREA-2.JPG",
    zoom: "object-[center_20%]",
    category: "nacional"
  },
  {
    id: 5,
    name: "Elisa Odreman",
    jobTitle: "Gerente de planificación",
    content: "<b>Arquitecta</b> (Universidad Simón Bolívar) con <b>Máster en Comunicación Arquitectónica (UPM)</b> y <b>Máster en Project Management</b> (IEAD, Madrid). Su formación combina el diseño técnico avanzado con la gestión estratégica y planificación de proyectos de construcción y desarrollo inmobiliario.<br/><br/>Con más de <b>30 años de experiencia</b>, ha destacado como Directora Técnica y Project Manager en proyectos residenciales y comerciales de gran escala. Es experta en el <b>control de presupuestos, optimización de recursos y coordinación de equipos</b>, garantizando siempre el cumplimiento de objetivos en procesos complejos de construcción y rehabilitación.<br/><br/>Su sólida trayectoria en dirección de obras aporta a <b>Nexus Engineering & Energy</b> una visión integral para la gestión eficiente de proyectos. Lidera la coordinación técnica y la optimización de procesos, asegurando resultados de alta precisión en entornos exigentes de ingeniería y desarrollo inmobiliario.</p>",
    cardImageURL: "/ELISA-2.JPG",
    dialogImageURL: "/ELISA.JPG",
    zoom: "object-[center_20%]",
    category: "nacional"
  },
  // {
  //   id: 6,
  //   name: "Jesús Medina",
  //   jobTitle: "Jefe de Producción",
  //   content: "<b>Arquitecta</b> (UJAP, Venezuela) y <b>Máster en Arquitectura Sostenible</b> por la Universidad Antonio de Nebrija (Madrid, España). Su formación especializada integra el desarrollo técnico de proyectos, eficiencia energética y el uso avanzado de <b>metodologías BIM</b> aplicadas al diseño y coordinación integral. <br/><br/> Con una sólida trayectoria en arquitectura e interiorismo, destaca por su dominio en el modelado 3D y la visualización arquitectónica, gestionando con precisión herramientas como Revit, AutoCAD y software de renderizado para transformar conceptos en documentación técnica detallada. <br/><br/> Actualmente, se desempeña en la <b>coordinación de modelos BIM</b> dentro de entornos multidisciplinarios, garantizando la integración eficiente de información y el cumplimiento de altos estándares de precisión en proyectos complejos de ingeniería y arquitectura.",
  //   cardImageURL: "/JESUS-1.JPG",
  //   dialogImageURL: "/JESUS-2.JPG",
  //   zoom: "object-[center_20%]",
  //   category: "nacional"
  // },
  {
    id: 7,
    name: "Mary Aldana",
    jobTitle: "Project Manager",
    content: "<b>Project Manager</b> e <b>Ingeniero Civil</b> (Universidad de Oriente, Venezuela), con más de 8 años de experiencia en planificación y control de proyectos de infraestructura a nivel internacional.<br/></br/>Con <b>amplia experiencia en entornos PMO</b>, ha gestionado <b>cronogramas, curvas S, KPIs y análisis de desvíos</b> en proyectos multidisciplinarios de gran envergadura, incluyendo obras de infraestructura hidráulica en Argentina, proyectos eléctricos de alta tensión en Venezuela y operaciones B2B de alto volumen. Su experiencia abarca desde la inspección de campo hasta la coordinación técnica y contractual, integrando herramientas como <b>MS Project, Primavera P6, Power BI y Excel avanzado</b> para la generación de reportes y soporte en la toma de decisiones.<br/><br/>Como <b>Project Manager</b>, aporta a Nexus capacidad de control operativo, visión analítica orientada a la mejora continua y experiencia en la gestión de equipos multiculturales bajo altos estándares técnicos",
    cardImageURL: "/MARY-1.JPG",
    dialogImageURL: "/MARY-2.JPG",
    zoom: "object-[center_20%]",
    category: "nacional"
  },
];