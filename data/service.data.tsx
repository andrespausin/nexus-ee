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
        title: "Licitaciones",
        desc: "Análisis comparativo de ofertas para detectar partidas sobrevaloradas y asegurar la contratación de proveedores bajo condiciones justas.",
        icon: <SearchCheck />
      },
      {
        title: "Optimización de Costes",
        desc: "Ingeniería Financiera aplicada, con capacidad de optimizar el presupuesto de obra, sin comprometer la calidad de los entregables finales.",
        icon: <BarChart3 />
      }
    ],
    details: {
      title: "Asesoría Técnica Profesional",
      text: "En Nexus, no solo diseñamos estructuras; blindamos su inversión. Nuestra consultoría actúa como un filtro de calidad que previene desviaciones presupuestarias y asegura que lo proyectado en planos se ejecute con precisión quirúrgica en el campo.",
      image: "/ing-referencia.png"
    }
  },
  {
    slug: "project-management",
    hero: {
      firstTitle: "Gestión de Proyectos",
      description: "Dirección estratégica de activos y proyectos de construcción. Maximizamos la eficiencia operativa mediante un control riguroso de la triple restricción: alcance, tiempo y costo.",
      ImageURL: "/pm.png"
    },
    features: [
      {
        title: "Indicadores de Gestión",
        desc: "Implementamos sistemas de monitoreo en tiempo real para neutralizar desviaciones presupuestarias y optimizar el flujo de caja.",
        icon: <CirclePoundSterling />
      },
      {
        title: "Control de Proyectos",
        desc: "Desarrollamos una programación avanzada de obra mediante herramientas líderes del sector como Primavera P6 y Microsoft Project, integrando metodologías profesionales de gestión de proyectos.",
        icon: <Clock />
      },
      {
        title: "Recuperación de Plazos",
        desc: "Identificación de rutas críticas y ejecución de planes de contingencia para mitigar retrasos y asegurar la continuidad operativa.",
        icon: <AlertTriangle />
      }
    ],
    details: {
      title: "Control total del cronograma",
      text: "Gestionamos activamente el cumplimiento del plazo, aplicando metodologías avanzadas de planificación y control, apoyadas en herramientas de gestión de proyectos de estándar internacional, que nos permiten comparar el progreso real con el planificado en tiempo real.",
      image: "/project-management.jpg"
    }
  },
  {
    slug: "civil-engineer",
    hero: {
      firstTitle: "EJECUCION DE OBRAS CIVILES Y TRABAJOS EN ALTURA",
      description: "Construcción de infraestructura en el sector público y privado. Expertos en sistemas de andamiaje certificado y soluciones técnicas para la continuidad de proyectos complejos.",
      ImageURL: "/andamiaje-1.jpeg"
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
      text: "Desde proyectos de obra civil para el sector público hasta infraestructuras privadas de alto nivel, aportamos la capacidad técnica, logística y organizativa necesaria para ejecutar proyectos complejos con máxima eficiencia. Disponemos de sistemas de andamiaje propios y soluciones especializadas para trabajos en altura, garantizando seguridad, control operativo y rapidez de ejecución. Además, nuestra experiencia en gestión y recuperación de proyectos nos permite intervenir de forma estratégica para reconducir obras con retrasos o desviaciones, asegurando la continuidad y el éxito de cada proyecto.",
      image: "/andamiaje.jpeg"
    }
  }
];