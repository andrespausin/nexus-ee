import AboutHero from "@/sections/about-hero/AboutHero";
import MissionVision from "@/sections/mission-vision/MissionVission";
import TeamSection from "@/sections/team/TeamSection";


export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 mt-20">
      <AboutHero />
      <MissionVision />
      <TeamSection />
    </section>
  );
}
