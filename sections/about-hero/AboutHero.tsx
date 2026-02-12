import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/team.avif"
          alt="Equipo Nexus"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-blue-900/80 to-slate-900/90 mix-blend-multiply" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono tracking-[0.3em] uppercase backdrop-blur-md">
          Sobre Nosotros
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Ingeniería que <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">Construye el Futuro</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          En Nexus, fusionamos la innovación técnica con la energía sostenible para desarrollar soluciones que impulsan el progreso industrial.
        </p>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-linear-to-t from-[#0a0a0a] to-transparent z-20" />
    </section>
  );
};

export default AboutHero;