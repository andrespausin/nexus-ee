"use client"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"; // Asegúrate de usar la librería correcta

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Efecto Parallax para la imagen y el texto por separado
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] xl:h-[90vh] overflow-hidden bg-black flex items-center justify-center">
      {/* CAPA DE IMAGEN CON PARALLAX */}
      <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Ingeniería Nexus"
          fill
          priority
          className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-blue-900/20 to-black" />
      </motion.div>
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 w-full max-w-7xl px-6 md:px-12 text-center md:text-left"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-blue-500 font-mono text-xs md:text-sm tracking-[0.5em] uppercase mb-4 block"
        >
          Nexus Engineering & Energy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]"
        >
          Gerencia y <br /> Dirección <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
            Responsable
          </span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-1 bg-blue-500 mt-8 hidden md:block"
        />
      </motion.div>

    </section>
  );
};

export default Hero;