"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/next-js/hero-construction.png"
          alt="Prelaje - Construção e pré-moldados"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-block font-semibold text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
            style={{ backgroundColor: 'hsla(38, 92%, 55%, 0.2)', borderColor: 'hsla(38, 92%, 55%, 0.3)', color: 'hsl(38, 92%, 55%)', border: '1px solid' }}
          >
            Desde 1977 no mercado
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Ajudando a{" "}
            <span className="text-gradient-accent">concretizar</span>{" "}
            seus sonhos
          </h1>

          <p className="text-lg md:text-xl text-white max-w-xl mx-auto mb-10 font-body">
            Pré-moldados de concreto com qualidade, tradição e entrega rápida
            em todo o Sul Fluminense.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#servicos"
              className="font-bold text-base px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 shadow-accent"
              style={{ backgroundColor: 'hsl(38, 92%, 55%)', color: 'hsl(215, 60%, 12%)' }}
            >
              Conheça Nossos Produtos
            </a>
            <a
              href="#sobre"
              className="border border-white/30 font-medium text-base px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm"
              style={{ color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Quem Somos
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="text-white" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
