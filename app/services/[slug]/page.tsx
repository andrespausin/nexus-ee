import { notFound } from "next/navigation"
import ServiceHero from "@/sections/service-hero/ServiceHero"
import ServiceFeature from "@/sections/service-feature/ServiceFeature";
import ServiceDetails from "@/sections/service-detail/ServiceDetail";
import { serviceData } from "@/data/service.data";

export function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params;
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    notFound()
  }
  return (
    <section className="flex flex-col justify-center items-center gap-5 ">
      <ServiceHero
        imageURL={service.hero.ImageURL}
        firstTitle={service.hero.firstTitle}
        secondTitle={service.hero.secondTitle}
        description={service.hero.description}
      />
      <ServiceFeature
        data={service.features}
      />
      <ServiceDetails
        data={service.details}
      />
    </section>
  )
}

