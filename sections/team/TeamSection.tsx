import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/ui/carousel/carousel"
import StyledCard from "@/shared/components/ui/styled-card/StyledCard"
import { TeamData } from "./team.data"

const TeamSection = () => {
  return (
    <section className="w-full px-4 md:px-8 py-30 overflow-hidden">
      <main className="flex flex-col  items-center" >
        <h1 className="text-white text-3xl md:text-6xl font-extrabold uppercase">Nuestro equipo</h1>
        <Carousel
          opts={{ align: "start", loop: false }}
          className="w-full max-w-[100vw] md:max-w-6xl overflow-x-hidden md:overflow-visible lg:basis-auto"
        >
          <CarouselContent className="-ml-4 py-10">
            {
              TeamData.map((item) => {
                return (
                  <CarouselItem key={item.id} className="pl-4 basis-auto transition-all duration-500 ease-in-out">
                    <div className="h-full">
                      <StyledCard
                        jobTitle={item.jobTitle}
                        content={item.content}
                        name={item.name}
                        imageURL={item.imageURL}
                      />
                    </div>
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
          <div className="hidden xl:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </main>
    </section >
  )
}

export default TeamSection;