"use client"
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react"

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(20px)"]
  )
  return (
    <motion.section style={{ filter }} className="relative w-full h-100 md:h-150 xl:h-200 overflow-hidden bg-black mt-10 xl:mt-0">
      <Image
        src="/hero.webp"
        alt="Ejemplo"
        fill
        priority
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold max-w-4xl px-4 md:px-8 uppercase tracking-tighter">
          Gerencia y Dirección <span className="text-blue-500">Responsable</span>
        </h1>
      </div>

    </motion.section>
  );
};

export default Hero;