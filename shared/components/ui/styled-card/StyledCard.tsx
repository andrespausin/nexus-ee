
interface Props {
  jobTitle: string,
  content: string,
  name: string,
  imageURL: string
}

const StyledCard = ({ jobTitle, content, name, imageURL }: Props) => {
  return (
    <div className="
        group flex flex-col xl:flex-row 
        /* En tablet limitamos el ancho para que no ocupe toda la pantalla */
        w-full max-w-[85vw] md:max-w-125 xl:max-w-4xl 
        bg-white rounded-2xl 
        xl:w-fit transition-all duration-500 ease-in-out overflow-hidden
    ">
      <div className="relative flex items-center justify-center p-6 xl:p-10 shrink-0">
        <div className="relative w-64 h-64 md:w-72 md:h-72 xl:w-100 xl:h-112.5">
          <div className="absolute inset-0 bg-green-300 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"></div>
          <img
            src={imageURL}
            alt="Trabajador"
            className="relative z-10 w-full h-full object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
          />
        </div>
      </div>
      <div className="
          flex flex-col justify-center text-black gap-3 xl:gap-5 px-6 pb-8 xl:p-0
          w-full max-w-full opacity-100
          /* Animación solo en pantallas extra grandes (Desktop) */
          xl:max-w-0 xl:opacity-0 xl:overflow-hidden xl:whitespace-nowrap
          xl:transition-all xl:duration-700 xl:ease-in-out
          xl:group-hover:max-w-xl xl:group-hover:opacity-100 xl:group-hover:p-10 xl:group-hover:whitespace-normal
      ">
        <div className="md:px-10 xl:px-0 xl:min-w-75 flex flex-col gap-2 xl:gap-5 text-center xl:text-left">
          <h1 className="text-black text-2xl xl:text-4xl whitespace-normal xl:whitespace-nowrap font-extrabold leading-tight">
            {jobTitle}
          </h1>
          <p className="text-gray-700 text-sm xl:text-base text-justify">
            {content}
          </p>
          <h3 className="text-green-600 font-semibold text-xl xl:text-2xl mt-2">
            {name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default StyledCard;