
interface Props {
  jobTitle: string,
  content: string,
  name: string,
  imageURL: string
}

const StyledCard = ({ jobTitle, content, name, imageURL }: Props) => {
  return (
    <div className="group flex flex-col lg:flex-row max-w-[90vw] lg:max-w-4xl bg-white rounded-2xl w-full lg:w-fit transition-all duration-500 ease-in-out overflow-hidden">
      <div className="relative flex items-center justify-center p-6 lg:p-10 shrink-0">
        <div className="relative w-64 h-64 lg:w-100 lg:h-112.5">
          <div className="absolute inset-0 bg-green-300 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"></div>
          <img
            src={imageURL}
            alt="Trabajador"
            className="relative z-10 w-full h-full object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
          />
        </div>
      </div>
      <div className="
          flex flex-col justify-center text-black gap-3 lg:gap-5 px-6 pb-6 lg:p-0
          w-full max-w-full opacity-100
          lg:max-w-0 lg:opacity-0 xl:overflow-hidden xl:whitespace-nowrap
          xl:transition-all xl:duration-700 xl:ease-in-out
          xl:group-hover:max-w-xl xl:group-hover:opacity-100 xl:group-hover:p-10 xl:group-hover:whitespace-normal
      ">
        <div className="lg:min-w-75 flex flex-col gap-2 lg:gap-5 text-center lg:text-left">
          <h1 className="text-black text-2xl lg:text-4xl whitespace-normal lg:whitespace-nowrap font-extrabold">{jobTitle}</h1>
          <p className="text-gray-700 text-sm lg:text-base text-justify lg:pr-0">
            {content}
          </p>
          <h3 className="text-green-600 font-semibold text-xl lg:text-2xl">{name}</h3>
        </div>

      </div>
    </div>
  )
}

export default StyledCard;