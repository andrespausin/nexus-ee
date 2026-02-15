import { Calculator, Scale, HousePlug, Lock, FastForward, Pickaxe, CirclePoundSterling, Clock, AlertTriangle } from "lucide-react";

export const serviceData = [
  {
    slug: "civil-engineer",
    hero: {
      firstTitle: "Servicios de",
      secondTitle: "Ingeniería civil",
      description: "Diseño, planificación y supervisión de infraestructuras sólidas, garantizando estándares de seguridad y eficiencia técnica en cada obra.",
      ImageURL: "/ing-referencia.png"
    },
    features: [
      { title: "Cálculo Estructural", desc: "Análisis preciso para edificaciones e industrias.", icon: <Calculator /> },
      { title: "Normativa Legal", desc: "Cumplimiento estricto de estándares nacionales e internacionales.", icon: <Scale /> },
      { title: "Sostenibilidad", desc: "Diseños optimizados para reducir el impacto ambiental.", icon: <HousePlug /> }
    ],
    details: {
      title: "Excelencia en cada plano",
      text: "Nuestra metodología combina software de última generación con años de experiencia en campo. Nos especializamos en convertir desafíos complejos en soluciones habitables y funcionales.",
      image: "/ing-referencia.png"
    }
  },
  {
    slug: "project-management",
    hero: {
      firstTitle: "Servicios de ",
      secondTitle: "project management",
      description: "Gestión integral de proyectos desde la concepción hasta la entrega, optimizando recursos, plazos y presupuestos para asegurar el éxito operativo.",
      ImageURL: "/project-management.jpg"
    },
    features: [
      { title: "Control de Costos", desc: "Monitoreo financiero para evitar desviaciones presupuestarias.", icon: <CirclePoundSterling /> },
      { title: "Gestión de Plazos", desc: "Metodologías ágiles para entregas siempre a tiempo.", icon: <Clock /> },
      { title: "Mitigación de Riesgos", desc: "Identificación temprana de obstáculos en la ejecución.", icon: <AlertTriangle /> }
    ],
    details: {
      title: "Tu visión, bajo nuestro control",
      text: "Actuamos como el brazo ejecutor de tus ideas. Coordinamos equipos multidisciplinarios y proveedores para que tú solo te preocupes por ver crecer tu inversión.",
      image: "/project-management.jpg"
    }
  },
  {
    slug: "scaffolding",
    hero: {
      firstTitle: "Servicios de",
      secondTitle: "Sistemas de andamiaje",
      description: "Soluciones de acceso seguro y estructuras temporales certificadas, diseñadas para facilitar trabajos en altura con máxima estabilidad y protección.",
      ImageURL: "/andamios.jpg"
    },
    features: [
      { title: "Seguridad Certificada", desc: "Equipos que cumplen con las normas más exigentes de protección.", icon: <Lock /> },
      { title: "Montaje Rápido", desc: "Personal calificado para instalaciones eficientes y seguras.", icon: <FastForward /> },
      { title: "Versatilidad", desc: "Sistemas adaptables a cualquier tipo de fachada o estructura.", icon: <Pickaxe /> }
    ],
    details: {
      title: "Soporte robusto para tus proyectos",
      text: "No solo alquilamos estructuras; ofrecemos ingeniería de acceso. Evaluamos las cargas y el terreno para garantizar que cada operario trabaje con total confianza.",
      image: "/andamios.webp"
    }
  }
];