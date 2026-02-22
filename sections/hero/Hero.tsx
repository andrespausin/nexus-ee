"use client"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityTitle = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const yTitle = useTransform(scrollYProgress, [0, 0.1], [0, -40]);

  const opacityDesc = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const yDesc = useTransform(scrollYProgress, [0.15, 0.25], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black w-full">
      <div className="sticky top-0 h-screen w-screen left-0 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.webp"
            alt="Ingeniería Nexus"
            fill
            priority
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
        </div>
        <div className="relative z-10 w-full flex items-center justify-center">
          <motion.div
            style={{
              opacity: opacityTitle,
              y: yTitle,
              display: useTransform(scrollYProgress, [0, 0.12], ["block", "none"])
            }}
            className="w-full max-w-7xl px-6 text-center"
          >
            <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] xl:mt-50">
              Gerencia, Dirección y <br /> Ejecución <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                Responsable
              </span>
            </h1>
            <div className="relative w-32 h-32 md:w-60 md:h-60 mx-auto">
              <Image
                src="/nexus-bg.png"
                alt="Logo Nexus"
                fill
                className="object-contain"
              />

            </div>
          </motion.div>
          <motion.div
            style={{
              opacity: opacityDesc,
              y: yDesc,
              display: useTransform(scrollYProgress, [0, 0.13], ["none", "block"])
            }}
            className="absolute w-full max-w-4xl px-6 text-center"
          >
            <p className="text-white text-lg md:text-5xl mb-10 max-w-5xl mx-auto font-extrabold">
              Controlamos tu obra de principio a fin para que tu inversión esté siempre bajo control.
            </p>
            <Link
              className="inline-block p-2 px-4 rounded-full bg-blue-600 text-white font-bold text-md transition-all hover:bg-blue-500 hover:scale-105"
              href="#contact_us"
            >
              Hablemos de tu proyecto
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;