import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Monitor, Code2, Camera, Video } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Grafica',
    desc: 'Identità visiva, brand system e direzione creativa con impatto.',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    desc: 'Interfacce eleganti, responsive e orientate alla conversione.',
  },
  {
    icon: Code2,
    title: 'Programmazione',
    desc: 'Sviluppo full‑stack performante e scalabile per il tuo business.',
  },
  { icon: Camera, title: 'Foto', desc: 'Shooting, post‑produzione e look & feel contemporaneo.' },
  { icon: Video, title: 'Video', desc: 'Storytelling dinamico, motion e contenuti social‑ready.' },
];

const Card = ({ Icon, title, desc }) => (
  <motion.div
    whileHover={{ rotateX: 6, rotateY: -6, y: -4 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    className="group relative rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 shadow-2xl shadow-black/40 ring-1 ring-white/5"
  >
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <Icon className="h-6 w-6 text-[#0A3D2E]" />
    <h3 className="mt-4 text-lg font-semibold text-[#F4F4F4]">{title}</h3>
    <p className="mt-2 text-sm text-[#F4F4F4]/70">{desc}</p>
    <button className="mt-5 inline-flex items-center gap-2 text-sm text-[#F4F4F4] transition-colors hover:text-[#0A3D2E]">
      Scopri di più
      <span className="h-px w-6 bg-[#F4F4F4]/40 group-hover:bg-[#0A3D2E]" />
    </button>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-[#F4F4F4]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#F4F4F4] md:text-3xl">
              Servizi
            </h2>
            <p className="mt-2 max-w-2xl text-[#F4F4F4]/70">
              Creiamo la tua identità digitale e facciamo crescere il tuo business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(10,61,46,0.15),transparent_60%)]" />
    </section>
  );
};

export default Services;
