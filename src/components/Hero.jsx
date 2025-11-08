import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black text-[#F4F4F4]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette and subtle gradient lights - do not block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,rgba(10,61,46,0.35),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold tracking-tight text-5xl md:text-7xl"
        >
          ISAC<span className="text-[#0A3D2E]">.</span>AGENCY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-[#F4F4F4]/80"
        >
          Costruiamo la tua identità digitale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0A3D2E] px-6 py-3 text-sm font-medium text-[#F4F4F4] shadow-[0_0_30px_rgba(10,61,46,0.35)] transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#0A3D2E]/60"
          >
            Inizia il tuo progetto
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="h-10 w-[1px] animate-pulse bg-[#F4F4F4]/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
