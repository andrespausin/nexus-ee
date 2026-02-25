import Image from "next/image"

export const ComingSoon = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-black overflow-hidden">
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="flex flex-col items-center text-center max-w-2xl gap-3">
        <h1 className="
          text-4xl 
          sm:text-5xl 
          md:text-6xl 
          lg:text-7xl 
          font-black 
          text-transparent 
          bg-clip-text 
          bg-linear-to-r from-blue-400 to-blue-700 
          tracking-tight
        ">
          PRÓXIMAMENTE
        </h1>
        <p className="
          text-gray-400 
          text-base 
          sm:text-lg 
          md:text-xl 
          leading-relaxed
        ">
          Estamos renovando nuestra plataforma.
          <br className="hidden sm:block" />
          En breve podrás conocer nuestros servicios, proyectos y soluciones.
          <br className="hidden sm:block" />
          Para consultas, contáctanos en:
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:administracion@nexusee.com?subject=Consulta desde la web"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            administracion@nexusee.com
          </a>
          <a
            href="tel:+34624951014"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            +34 624 95 10 14
          </a>
        </div>
      </div>
      <div className="relative mt-12 w-64 md:w-80 lg:w-96 aspect-square hover:scale-105 transition-transform duration-500">
        <Image
          src="/nexus.png"
          alt="Nexus Logo"
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          priority
        />
      </div>

      {/* Badge inferior */}
      <div className="mt-10 px-6 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
        <span className="text-xs sm:text-sm text-gray-300 tracking-widest uppercase">
          Nexus Project 2026
        </span>
      </div>

    </section>
  )
}