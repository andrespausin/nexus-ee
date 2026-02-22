
interface Props {
  data: {
    title: string;
    text: string;
    image: string;
  }
}

const ServiceDetails = ({ data }: Props) => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Detalles Operativos
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              {data.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400 text-justify max-w-3xl">
              {data.text}
            </p>
            <div className="mt-10">
              <a href="/#contact_us" className="text-sm font-semibold leading-6 text-blue-600">
                Solicitar asesoría técnica <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;