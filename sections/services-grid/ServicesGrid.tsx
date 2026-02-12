import Image from "next/image";
import Link from "next/link";
import { servicesData } from "./services.data";

const ServicesGrid = () => {
  return (
    <section className="w-full py-24 bg-black">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="mb-32">
          <span className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase block mb-4">
            NUESTRAS SOLUCIONES
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Nuestros <span className="text-blue-600">Servicios</span>
          </h2>
        </div>
        <div className="flex flex-col gap-40 md:gap-64">
          {servicesData.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className={`group relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-24`}
            >
              <div className="relative w-full md:w-[45%] aspect-video md:aspect-square overflow-visible group">
                <div
                  className="relative w-full h-full overflow-hidden transition-all duration-700 ease-in-out shadow-2xl shadow-blue-900/20"
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

              </div>
              <div className="w-full md:w-2/5 flex flex-col">
                <span className="text-blue-600 font-mono text-4xl font-black mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
                <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8 group-hover:translate-x-4 transition-transform duration-500">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-sm">
                  {service.description}
                </p>
                <div className="flex items-center gap-4 group/btn">
                  <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">
                    Explorar más
                  </span>
                  <div className="h-px grow bg-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;