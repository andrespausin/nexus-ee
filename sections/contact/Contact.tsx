import ContactForm from "./component/ContactForm";

const ContactSection = () => {
  return (
    <section className="w-full py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="mb-20 text-center md:text-left">
          <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase block mb-4">
            CONTÁCTANOS
          </span>
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Iniciemos un <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
              Proyecto
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-10 bg-white/3 backdrop-blur-xl border border-white/10 rounded-[2.5rem] h-full flex flex-col justify-between">
              <div className="space-y-12">
                <div>
                  <h3 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                    Localización Física
                  </h3>
                  <p className="text-white text-2xl font-bold tracking-tight">
                    Av. de la Castellana, 14 <br />
                    <span className="text-gray-500">Madrid, España.</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
                    Enlace directo
                  </h3>
                  <div className="space-y-2">
                    <p className="text-white text-2xl font-bold hover:text-blue-400 transition-colors cursor-pointer">
                      +34 661 466 765
                    </p>
                    <p className="text-gray-400 text-lg hover:text-blue-400 transition-colors cursor-pointer">
                      administracion@nexusee.com
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="lg:col-span-7 p-10 bg-white/3 backdrop-blur-xl border border-white/10 rounded-[2.5rem]">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;