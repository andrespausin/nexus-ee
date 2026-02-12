import TeamSection from "@/sections/team/TeamSection";


export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 mt-20">
      <h1 className="font-extrabold text-white text-8xl">SOBRE NOSOTROS</h1>
      <TeamSection />
    </section>
  );
}
