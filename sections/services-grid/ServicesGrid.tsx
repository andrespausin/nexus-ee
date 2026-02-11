import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Ingeniería y Consultoría",
    description: "Modelado 3D, cálculos estructurales y memorias técnicas.",
    image: "/ing-referencia.png",
    link: "/servicios#ingenieria"
  },
  {
    title: "Sistemas de Andamiaje",
    description: "Suministro y montaje certificado bajo normativa ANSI/OSHA.",
    image: "/andamios.webp",
    link: "/servicios#andamios"
  },
  {
    title: "Project Management",
    description: "Supervisión técnica y control operativo integral de obra.",
    image: "/pm.jpg",
    link: "/servicios#gestion"
  },
];

const ServicesGrid = () => {
  return (
    <section className="w-full py-10 bg-black flex flex-col items-center">
      <div className="max-w-7xl px-4 w-full">
        <h2 className="text-white text-3xl md:text-6xl font-extrabold uppercase tracking-tighter mb-12 text-center xl:text-left">
          Nuestras <span className="text-blue-500">Soluciones</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="group relative h-112.5 overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-bold uppercase mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {service.description}
                </p>
                <div className="mt-4 w-10 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;