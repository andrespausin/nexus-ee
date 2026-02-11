import {
  Card,
  CardDescription,
  CardTitle,
} from "@/shared/components/ui/card"

const featureData = [
  {
    id: 1,
    title: "Rigor técnico",
    description: "Diseños y cálculos estructurales precisos, optimizando cada recurso de su proyecto."
  },
  {
    id: 2,
    title: "Seguridad certificada",
    description: "Sistemas de acceso que cumplen estrictamente con normativas ANSI/OSHA para garantizar cero accidentes."
  },
  {
    id: 3,
    title: "Eficiencia en gestión",
    description: "Proyectos entregados en tiempo y forma mediante metodologías avanzadas de Project Management."
  }
]

const Features = () => {
  return (
    <section className="w-full flex flex-col items-center text-center mt-20">
      <div className="max-w-4xl px-4 md:px-8 mx-auto mb-12">
        <h1 className="text-white text-3xl md:text-6xl font-extrabold uppercase tracking-tighter">
          <span className="text-blue-500">Ingeniería</span> que construye confianza
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 w-full px-4">
        {featureData.map((item) => {
          return (
            <Card
              key={item.id}
              className="bg-white text-black w-64 h-64 flex flex-col justify-center items-center">
              <div className="p-6 flex flex-col items-center justify-center text-center space-y-2">
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                <CardDescription className="text-gray-600">{item.description}
                </CardDescription>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Features;