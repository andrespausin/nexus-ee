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
  const handleMouseEnter = (e: React.MouseEvent) => {
    const screenWidth = window.innerWidth;
    const cursorX = e.clientX;
    if (cursorX > screenWidth / 2) {
      setIsReversed(true);
    } else {
      setIsReversed(false);
    }
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
        w-75 md:w-87.5 xl:w-fit
        bg-white rounded-2xl overflow-hidden shadow-2xl 
        transition-all duration-500 ease-in-out
        ${isReversed ? "xl:flex-row-reverse" : "xl:flex-row"}
        ${isReversed ? "xl:hover:-ml-100" : "xl:hover:ml-0"}
      `}
    >
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
      <div className={`
          flex flex-col justify-center
          w-full px-6 pb-8
          xl:w-0 xl:p-0 xl:opacity-0 xl:overflow-hidden
          xl:transition-all xl:duration-500 xl:ease-in-out
          xl:group-hover:w-100 
          xl:group-hover:p-10 
          xl:group-hover:opacity-100
      `}>
        <div className="flex flex-col gap-4 text-center xl:text-left min-w-50">
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