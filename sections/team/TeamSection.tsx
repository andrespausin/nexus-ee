"use client";
import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight, Terminal, Globe, MapPin } from "lucide-react";
import { TeamData } from "./team.data";

const TeamSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [activeTab, setActiveTab] = useState<'nacional' | 'internacional'>('nacional');

  const filteredData = useMemo(() => {
    return TeamData.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* --- FONDO --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">

        {/* --- CABECERA --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <div className="mb-16 border-l-2 border-blue-600 pl-6">
              <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-2 block">
                NUESTRO EQUIPO
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                NUESTROS <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
                  CONSULTORES
                </span>
              </h2>
            </div>

            {/* TABS */}
            <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <button
                onClick={() => setActiveTab('nacional')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'nacional' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <MapPin className="w-3.5 h-3.5" /> Nacionales
              </button>
              <button
                onClick={() => setActiveTab('internacional')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'internacional' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Globe className="w-3.5 h-3.5" /> Internacionales
              </button>
            </div>
          </div>

          {/* Botones */}
          <div className="hidden md:flex gap-3">
            <button ref={prevRef} className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 transition-colors z-20">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button ref={nextRef} className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 transition-colors z-20">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- SWIPER --- */}
        <div className="w-full max-w-[1380px] mx-auto" key={activeTab}>
          {filteredData.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={30} // Espacio entre tarjetas
              slidesPerView={1}
              loop={filteredData.length > 3}
              speed={600}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3, // EXACTAMENTE 3
                },
              }}
              // AQUÍ ESTABA EL ERROR: He quitado !overflow-visible.
              // Dejamos py-12 para que quepa la animación hover, pero el swiper cortará los lados.
              className="py-12"
            >
              {filteredData.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  {/* CARD */}
                  <div className="
                    group relative h-[450px] w-full overflow-hidden rounded-2xl 
                    bg-neutral-900 border border-white/10 
                    transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 hover:z-50
                  ">

                    {/* Imagen */}
                    <div className="absolute inset-0 h-full w-full">
                      <Image
                        src={item.imageURL}
                        alt={item.name}
                        fill
                        className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
                      />
                    </div>

                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Texto */}
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-widest text-blue-400 uppercase">
                        {item.category === 'internacional' ? <Globe className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                        {item.jobTitle}
                      </p>
                      <h3 className="text-3xl font-bold text-white mb-2">{item.name}</h3>

                      <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                        <div className="overflow-hidden">
                          <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="py-20 text-center border border-white/10 rounded-2xl">
              <p className="text-gray-500">No hay datos disponibles.</p>
            </div>
          )}
        </div>

      </div>
    </section >
  );
};

export default TeamSection;