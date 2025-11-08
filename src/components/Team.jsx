import React from 'react';
import { motion } from 'framer-motion';

const people = [
  { name: 'Isabella C.', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Sam A.', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Alex R.', role: 'UX Designer', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Chiara P.', role: 'Photo & Video', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop' },
];

const Team = () => {
  return (
    <section id="team" className="relative bg-[#0B0B0B] py-20 text-[#F4F4F4]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">Team & Collaboratori</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-black/40"
            >
              <div className="relative">
                <img src={p.img} alt={p.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm text-[#F4F4F4]/70">{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(10,61,46,0.18),transparent_60%)]" />
    </section>
  );
};

export default Team;
