"use client";
import { useRef, useState } from "react";

interface Props {
  jobTitle: string,
  content: string,
  name: string,
  imageURL: string,
}

const StyledCard = ({ jobTitle, content, name, imageURL }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isReversed, setIsReversed] = useState(false);

  // AHORA RECIBIMOS EL EVENTO DEL MOUSE (e)
  const handleMouseEnter = (e: React.MouseEvent) => {

    // 1. LÓGICA BASADA EN EL CURSOR (INFALIBLE)
    // Ignoramos la posición de la tarjeta (que puede ser engañosa por el carrusel).
    // Nos fiamos exclusivamente de dónde está tu mano.
    const screenWidth = window.innerWidth;
    const cursorX = e.clientX;

    // Si el mouse está en la mitad derecha de la pantalla (> 50%)
    if (cursorX > screenWidth / 2) {
      setIsReversed(true); // Abre hacia la Izquierda
    } else {
      setIsReversed(false); // Abre hacia la Derecha (Normal)
    }

    // 2. PEQUEÑO SCROLL DE SEGURIDAD
    // Mantenemos esto porque es muy útil si la carta está rozando el borde
    setTimeout(() => {
      cardRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }, 50);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      className={`
        group flex flex-col items-center
        
        /* ANCHO BASE */
        w-[300px] md:w-[350px] xl:w-fit
        
        bg-white rounded-2xl overflow-hidden shadow-2xl 
        
        transition-all duration-500 ease-in-out
        
        /* DIRECCIÓN DINÁMICA */
        ${isReversed ? "xl:flex-row-reverse" : "xl:flex-row"}
        
        /* MARGEN NEGATIVO INTELIGENTE */
        ${isReversed ? "xl:hover:-ml-[400px]" : "xl:hover:ml-0"}
      `}
    >

      {/* SECCIÓN IMAGEN */}
      <div className="relative flex items-center justify-center p-6 shrink-0 z-10 bg-white">
        <div className="relative w-64 h-64 md:w-72 md:h-72 xl:w-80 xl:h-96">
          <div className="absolute inset-0 bg-green-300 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"></div>
          <img
            src={imageURL}
            alt="Trabajador"
            className="relative z-10 w-full h-full object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
          />
        </div>
      </div>

      {/* SECCIÓN TEXTO */}
      <div className={`
          flex flex-col justify-center
          w-full px-6 pb-8
          
          /* Estado inicial Desktop: oculto */
          xl:w-0 xl:p-0 xl:opacity-0 xl:overflow-hidden
          
          xl:transition-all xl:duration-500 xl:ease-in-out
          
          /* AL HACER HOVER */
          xl:group-hover:w-[400px] 
          xl:group-hover:p-10 
          xl:group-hover:opacity-100
      `}>
        <div className="flex flex-col gap-4 text-center xl:text-left min-w-[300px]">
          <h1 className="text-black text-2xl xl:text-4xl font-extrabold leading-tight">
            {jobTitle}
          </h1>
          <p className="text-gray-700 text-sm xl:text-base text-justify leading-relaxed">
            {content}
          </p>
          <h3 className="text-green-600 font-semibold text-xl xl:text-2xl">
            {name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default StyledCard;