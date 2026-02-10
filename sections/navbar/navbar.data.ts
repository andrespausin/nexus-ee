export const Items = [
  {
    id: 1,
    content: "Sobre nosotros",
    reference: "/#about",
  },
  {
    id: 2,
    content: "Servicios",
    reference: "services",
    dropdown: [
      {
        id: 1,
        title: "Servicio de Ingenieria civil",
        description: "Descripcion del servicio de Ingenieria Civil",
        reference: "/services/#engineer"
      },
      {
        id: 2,
        title: "Servicio de Project Manager",
        description: "Descripcion del servicio de Project Manager",
        reference: "/services/#pm"

      },
      {
        id: 3,
        title: "Servicio de Andamios",
        description: "Descripcion del servicio de Andamios",
        reference: "/services/#andamios"

      }
    ]
  },
  {
    id: 4,
    content: "Proyectos",
    reference: "/#projects"
  },
  {
    id: 3,
    content: "Contáctanos",
    reference: "/#contact_us"
  },
]
