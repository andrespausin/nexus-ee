import {
  Card,
  CardDescription,
  CardTitle,
} from "@/shared/components/ui/card"
import { featureData } from "./feature.data"

const Features = () => {
  return (
    <section className="w-full bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-l-2 border-blue-600 pl-6">
          <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-2 block">
            NUESTRO COMPROMISO
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Ingeniería que <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
              construye confianza
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map((item) => (
            <Card
              key={item.id}
              className="group relative bg-[#0a0a0a] border-gray-900 text-white min-h-80 flex flex-col justify-end p-8 transition-all duration-500 hover:border-blue-600/50 overflow-hidden"
            >
              <span className="absolute -right-4 -top-8 text-[120px] font-black text-white/3 group-hover:text-blue-600/10 transition-colors duration-500">
                0{item.id}
              </span>
              <div className="relative z-10">
                <div className="w-12 h-0.5 bg-blue-600 mb-6 group-hover:w-20 transition-all duration-500" />
                <CardTitle className="text-2xl font-bold uppercase mb-4 tracking-tight group-hover:text-blue-500 transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {item.description}
                </CardDescription>

                {/* Detalle de métricas que ya tenías pensado */}
                <div className="mt-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] font-mono text-blue-400 border border-blue-400/30 px-2 py-0.5">ESTÁNDAR_ISO</span>
                  <span className="text-[10px] font-mono text-blue-400 border border-blue-400/30 px-2 py-0.5">OPTIM_COST</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Features;