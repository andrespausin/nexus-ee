export const Items = [
  {
    id: 0,
    content: "Home",
    reference: "/"
  },
  {
    id: 1,
    content: "Sobre nosotros",
    reference: "/about",
  },
  {
    id: 2,
    content: "Servicios",
    dropdown: [
      {
        id: 1,
        title: "Ingeniería, Arquitectura y Consultoría",
        description: "Diseño integral y soluciones técnicas para proyectos de alta complejidad.",
        reference: "/services/engineering"
      },
      {
        id: 2,
        title: "Gestión de proyectos",
        description: "Gestión estratégica de recursos y tiempos para asegurar el éxito operativo.",
        reference: "/services/project-management"
      },
      {
        id: 3,
        title: "Ejecución de obras civiles",
        description: "Construcción y soluciones de infraestructura con los más altos estándares.",
        reference: "/services/civil-engineer"
      }
    ]
  },
  {
    id: 3,
    content: "Contáctanos",
    reference: "/#contact_us"
  },
]