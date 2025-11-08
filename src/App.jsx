import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMove = (e) => setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }));
    const onEnter = () => setCursor((c) => ({ ...c, active: true }));
    const onLeave = () => setCursor((c) => ({ ...c, active: false }));
    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, .hoverable').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a, button, .hoverable').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-[#F4F4F4]">
      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[999] grid place-items-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="mx-auto mb-3 h-16 w-16 rounded-xl bg-gradient-to-br from-[#0A3D2E] to-[#0A3D2E]/50 shadow-[0_0_60px_rgba(10,61,46,0.45)]" />
              <div className="text-sm tracking-widest text-[#F4F4F4]/70">ISAC.AGENCY</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header (inline to keep 4 component imports) */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex h-16 items-center justify-between rounded-b-2xl border-x border-b border-white/10 bg-black/50 px-4">
            <a href="#home" className="text-sm font-semibold tracking-widest text-[#F4F4F4]">ISAC<span className="text-[#0A3D2E]">.</span>AGENCY</a>
            <ul className="hidden items-center gap-6 text-sm text-[#F4F4F4]/80 md:flex">
              <li><a className="hover:text-[#F4F4F4]" href="#services">Servizi</a></li>
              <li><a className="hover:text-[#F4F4F4]" href="#portfolio">Portfolio</a></li>
              <li><a className="hover:text-[#F4F4F4]" href="#team">Team</a></li>
              <li><a className="hover:text-[#F4F4F4]" href="#contact">Contatti</a></li>
            </ul>
            <a href="#contact" className="rounded-full bg-[#0A3D2E] px-4 py-1.5 text-xs font-medium text-[#F4F4F4]">Parliamo</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="space-y-0">
        <Hero />
        <section className="bg-black py-14">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-xl font-semibold tracking-tight">Chi Siamo</h2>
            <p className="mx-auto mt-3 max-w-3xl text-[#F4F4F4]/70">
              Siamo un collettivo di designer, developer e storyteller che uniscono creatività e tecnologia per progettare esperienze digitali performanti, belle e misurabili.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[1,2,3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="rounded-xl border border-white/10 bg-[#0B0B0B] p-6 text-left"
                >
                  <h3 className="font-medium">Approccio {i}</h3>
                  <p className="mt-2 text-sm text-[#F4F4F4]/70">Strategia, design e codice in un unico flusso iterativo.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Services />
        <Portfolio />
        {/* Team inline to keep component imports to four */}
        <section id="team" className="relative bg-[#0B0B0B] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">Team & Collaboratori</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: 'Isabella C.', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop' },
                { name: 'Sam A.', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1200&auto=format&fit=crop' },
                { name: 'Alex R.', role: 'UX Designer', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop' },
                { name: 'Chiara P.', role: 'Photo & Video', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop' },
              ].map((p) => (
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
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-10 text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="font-semibold tracking-widest">ISAC<span className="text-[#0A3D2E]">.</span>AGENCY</div>
          <div className="flex items-center gap-4 text-[#F4F4F4]/70">
            <a href="#" aria-label="Instagram" className="hover:text-[#F4F4F4]">Instagram</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#F4F4F4]">LinkedIn</a>
            <a href="#" aria-label="Behance" className="hover:text-[#F4F4F4]">Behance</a>
            <a href="mailto:hello@isac.agency" className="hover:text-[#F4F4F4]">hello@isac.agency</a>
          </div>
          <div className="text-[#F4F4F4]/60">© ISAC.AGENCY — Future starts now.</div>
        </div>
      </footer>

      {/* Custom cursor */}
      <div
        style={{ left: cursor.x, top: cursor.y, transform: 'translate(-50%, -50%)' }}
        className={`pointer-events-none fixed z-[200] h-6 w-6 rounded-full border border-[#0A3D2E]/70 bg-[#0A3D2E]/10 transition-all duration-150 ${cursor.active ? 'h-10 w-10 bg-[#0A3D2E]/20' : ''}`}
      />
    </div>
  );
}

export default App;
