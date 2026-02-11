const SafetyBanner = () => {
  return (
    <section className="w-full bg-blue-600 py-12 md:my-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4">
            La seguridad no es una opción, <br />
            <span className="text-blue-200">es nuestro estándar</span>
          </h2>
          <p className="text-blue-50 text-lg md:text-xl font-medium max-w-2xl">
            Garantizamos cero accidentes mediante el cumplimiento estricto de normativas
            internacionales ANSI/OSHA en cada proyecto.
          </p>
        </div>
        <div className="shrink-0 border-2 border-blue-400 rounded-full p-8 flex items-center justify-center bg-blue-700/50">
          <div className="text-center">
            <span className="block text-white font-black text-3xl leading-none">100%</span>
            <span className="block text-blue-200 text-xs uppercase font-bold tracking-widest">Certificado</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SafetyBanner;