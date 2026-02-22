import ContactForm from "./component/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact_us" className="w-full py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="mb-32">
          <div className="mb-16 border-l-2 border-blue-600 pl-6">
            <span className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase block mb-4">
              CONTÁCTANOS
            </span>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Trabajemos <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">Juntos</span>
            </h2>
          </div>
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
                  <p className="text-white lg:text-2xl font-bold tracking-tight">
                    Av. de la Castellana, 14 <br />
                    <span className="text-gray-500">Madrid, España.</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
                    Enlace directo
                  </h3>
                  <div className="space-y-2 lg:text-2xl">
                    <p className="text-white font-bold hover:text-blue-400 transition-colors cursor-pointer">
                      +XX XXX XXX XXX
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