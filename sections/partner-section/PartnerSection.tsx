import Image from "next/image";
import { Partners } from "./partner.data";

const PartnersSection = () => {
  return (
    <section className="w-full py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="mb-32">
          <div className="mb-16 border-l-2 border-blue-600 pl-6">
            <span className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase block mb-4">
              NUESTRAS
            </span>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
              ALIANZAS <span className="text-blue-600">ESTRATÉGICAS</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center text-white max-w-7xl mx-auto px-6">
        {Partners.map((partner) => (
          <div
            key={partner.id}
            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110 flex flex-col items-center justify-center"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={160}
              height={80}
              className="h-40 w-auto object-contain"
            />
            <h1 className="text-sm mt-4">{partner.name}</h1>
          </div>
        ))}
      </div>
    </section >

  );
};

export default PartnersSection;