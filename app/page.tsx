import ContactSection from "@/sections/contact/Contact";
import Features from "@/sections/features/Features";
import Hero from "@/sections/hero/Hero";
import SafetyBanner from "@/sections/safety-banner/SafetyBanner";
import ServicesGrid from "@/sections/services-grid/ServicesGrid";


export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <Hero />
      <Features />
      <SafetyBanner />
      <ServicesGrid />
      <ContactSection />
    </section>
  );
}
