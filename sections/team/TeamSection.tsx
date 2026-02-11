"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel/carousel"
import StyledCard from "@/shared/components/ui/styled-card/StyledCard"
import { TeamData } from "./team.data"

const TeamSection = () => {
  return (
    <section className="w-full px-4 md:px-15 py-30 overflow-hidden">
      <main className="flex flex-col items-center">
        <h1 className="text-white text-3xl md:text-6xl font-extrabold uppercase mb-10">
          Nuestro <span className="text-blue-500">equipo</span>
        </h1>

        <Carousel
          opts={{ align: "start", loop: false }}
          className="w-full max-w-[100vw] overflow-visible"
        >
          <CarouselContent className="
    -ml-4 
    /* 1. Eliminamos h-150 y usamos py para dar espacio arriba/abajo si es necesario */
    py-10 
    items-center 
    pr-10 md:pr-40
    xl:[&:has(.card-wrapper:hover)_.card-wrapper:not(:hover)]:scale-75 
    xl:[&:has(.card-wrapper:hover)_.card-wrapper:not(:hover)]:opacity-30 
    xl:[&:has(.card-wrapper:hover)_.card-wrapper:not(:hover)]:grayscale-[0.8]
">
            {TeamData.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-auto flex items-center justify-center" // 2. Centramos el contenido internamente
              >
                <div className="
            card-wrapper relative
            transition-all duration-500 ease-out
            xl:hover:z-50
            origin-center
            /* 3. Aseguramos que el wrapper no se estire locamente */
            h-fit 
          ">
                  <StyledCard
                    jobTitle={item.jobTitle}
                    content={item.content}
                    name={item.name}
                    imageURL={item.imageURL}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden xl:flex justify-end gap-4 mt-2 px-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </main>
    </section>
  )
}

export default TeamSection;