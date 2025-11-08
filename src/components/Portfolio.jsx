import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: 1, title: 'Branding NeoTech', cat: 'Grafica', img: 'https://images.unsplash.com/photo-1521123845560-14093637aa7a?q=80&w=1400&auto=format&fit=crop' },
  { id: 2, title: 'E‑commerce Flux', cat: 'Web', img: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=1400&auto=format&fit=crop' },
  { id: 3, title: 'App NextGen', cat: 'Programmazione', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop' },
  { id: 4, title: 'Editoriale Vision', cat: 'Foto', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1400&auto=format&fit=crop' },
  { id: 5, title: 'Launch Teaser', cat: 'Video', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop' },
  { id: 6, title: 'Landing Quantum', cat: 'Web', img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop' },
];

const categories = ['Tutti', 'Grafica', 'Web', 'Programmazione', 'Foto', 'Video'];

const Portfolio = () => {
  const [active, setActive] = useState('Tutti');
  const filtered = useMemo(() => (
    active === 'Tutti' ? items : items.filter(i => i.cat === active)
  ), [active]);

  return (
    <section id="portfolio" className="relative bg-[#0B0B0B] py-20 text-[#F4F4F4]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Portfolio</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${active === cat ? 'border-[#0A3D2E] bg-[#0A3D2E]/20 text-[#F4F4F4]' : 'border-white/10 text-[#F4F4F4]/70 hover:text-[#F4F4F4]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map(card => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40"
              >
                <img src={card.img} alt={card.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs uppercase tracking-wider text-[#0A3D2E]">{card.cat}</p>
                  <h3 className="mt-1 text-lg font-semibold">{card.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,61,46,0.2),transparent_60%)]" />
    </section>
  );
};

export default Portfolio;
