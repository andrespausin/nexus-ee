import { ReactNode } from "react";

interface Props {
  data: {
    title: string;
    desc: string;
    icon: ReactNode
  }[]
}

const ServiceFeature = ({ data }: Props) => (
  <section className="py-20 px-10 bg-black">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-justify">
          <div className="w-12 h-12 bg-blue-600 mb-4 rounded-lg flex items-center justify-center text-white">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-300 mb-2">{item.title}</h3>
          <p className="text-slate-400">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceFeature;

