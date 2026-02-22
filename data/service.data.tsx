import { CirclePoundSterling, Clock, AlertTriangle, SearchCheck, ShieldCheck, BarChart3, LifeBuoy, Grid3X3, HardHat } from "lucide-react";

export const serviceData = [
  {
    slug: "engineering",
    hero: {
      firstTitle: "Ingeniería, Arquitectura y Consultoría",
      description: "Transformamos la complejidad técnica en activos rentables mediante el control riguroso de cada fase del proyecto, desde el diseño conceptual hasta la validación final.",
      ImageURL: "/ing-referencia.png"
    },
    features: [
      {
        title: "Control Técnico (Owner’s Engineer)",
        desc: "Protegemos los intereses del promotor mediante la validación técnica de mediciones y certificaciones de obra en tiempo real.",
        icon: <ShieldCheck />
      },
      {
        title: "Auditoría de Licitaciones",
        desc: "Análisis comparativo de ofertas para detectar partidas infladas y asegurar la contratación de proveedores bajo condiciones justas.",
        icon: <SearchCheck />
      },
      {
        title: "Optimización de Costes",
        desc: "Ingeniería de valor aplicada para reducir el presupuesto sin comprometer la integridad estructural ni la calidad técnica.",
        icon: <BarChart3 />
      }
    ],
    details: {
      title: "Su aliado técnico independiente",
      text: "En Nexus, no solo diseñamos estructuras; blindamos su inversión. Nuestra consultoría actúa como un filtro de calidad que previene desviaciones presupuestarias y asegura que lo proyectado en planos se ejecute con precisión quirúrgica en el campo.",
      image: "/ing-referencia.png"
    }
  },
  {
    slug: "project-management",
    hero: {
      firstTitle: "Gestión de Proyectos",
      description: "Dirección estratégica de activos y proyectos de construcción. Maximizamos la eficiencia operativa mediante un control riguroso de la triple restricción: alcance, tiempo y costo.",
      ImageURL: "/project-management.jpg"
    },
    features: [
      {
        title: "Blindaje Financiero",
        desc: "Implementamos sistemas de monitoreo en tiempo real para neutralizar desviaciones presupuestarias y optimizar el flujo de caja.",
        icon: <CirclePoundSterling />
      },
      {
        title: "Planificación y Control",
        desc: "Programación avanzada (Primavera / MS Project) y análisis de Curvas S para garantizar el cumplimiento estricto de los hitos.",
        icon: <Clock />
      },
      {
        title: "Recuperación de Plazos",
        desc: "Identificación de rutas críticas y ejecución de planes de contingencia para mitigar retrasos y asegurar la continuidad operativa.",
        icon: <AlertTriangle />
      }
    ],
    details: {
      title: "Control absoluto sobre el cronograma",
      text: "No solo monitoreamos el avance; lo garantizamos. Utilizamos herramientas de clase mundial para medir el rendimiento real frente al planificado, permitiéndonos tomar decisiones proactivas para recuperar tiempos y blindar la fecha de entrega de su inversión.",
      image: "/project-management.jpg"
    }
  },
  {
    slug: "civil-engineer",
    hero: {
      firstTitle: "Ejecución de",
      secondTitle: "Obras y Sistemas de Acceso",
      description: "Construcción de infraestructura en el sector público y privado. Expertos en sistemas de andamiaje certificado y soluciones técnicas para la continuidad de proyectos complejos.",
      ImageURL: "/andamios.jpg"
    },
    features: [
      {
        title: "Obras Públicas y Privadas",
        desc: "Ejecución integral de proyectos de infraestructura y edificación, adaptándonos a las normativas y exigencias de cada sector.",
        icon: <HardHat />
      },
      {
        title: "Sistemas de Andamiaje",
        desc: "Diseño, suministro y montaje de estructuras de acceso seguro bajo normativa ANSI/OSHA para trabajos de alta complejidad.",
        icon: <Grid3X3 />
      },
      {
        title: "Rescate de Proyectos",
        desc: "Intervención en obras paralizadas y resolución de conflictos con contratistas para frenar desviaciones de coste y tiempo.",
        icon: <LifeBuoy />
      }
    ],
    details: {
      title: "Capacidad operativa sin fronteras",
      text: "Desde el desarrollo de obra civil para el sector público hasta infraestructuras privadas de alta gama, aportamos la logística y el rigor técnico necesario. Nuestros sistemas de andamiaje propios nos permiten garantizar la seguridad en altura, mientras que nuestra unidad de rescate asegura que ningún proyecto quede en el olvido por problemas de gestión previos.",
      image: "/andamios.webp"
    }
  }
];