import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Grazie! Ti ricontatteremo a breve.');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-20 text-[#F4F4F4]">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#0A3D2E]/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contatti</h2>
          <p className="mt-2 max-w-2xl text-[#F4F4F4]/70">
            Raccontaci la tua idea: creeremo insieme qualcosa di straordinario.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 shadow-2xl ring-1 ring-white/5"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-[#F4F4F4]/70">Nome</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-[#F4F4F4] placeholder:text-[#F4F4F4]/40 focus:border-[#0A3D2E] focus:outline-none"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label className="text-sm text-[#F4F4F4]/70">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-[#F4F4F4] placeholder:text-[#F4F4F4]/40 focus:border-[#0A3D2E] focus:outline-none"
                  placeholder="nome@azienda.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-[#F4F4F4]/70">Messaggio</label>
              <textarea
                rows={5}
                required
                className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-[#F4F4F4] placeholder:text-[#F4F4F4]/40 focus:border-[#0A3D2E] focus:outline-none"
                placeholder="Raccontaci del tuo progetto..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0A3D2E] px-5 py-2.5 text-sm font-medium text-[#F4F4F4] shadow-[0_0_20px_rgba(10,61,46,0.35)] transition-transform hover:scale-[1.02]"
            >
              Invia
              <Send className="h-4 w-4" />
            </button>
            {status && <p className="mt-3 text-sm text-[#F4F4F4]/70">{status}</p>}
          </motion.form>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A3D2E]/20 to-black p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(10,61,46,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.06),transparent_45%)]" />
            <div className="relative">
              <h3 className="text-lg font-semibold">Mission</h3>
              <p className="mt-2 max-w-lg text-sm text-[#F4F4F4]/80">
                "Creiamo la tua identità digitale e facciamo crescere il tuo business." —
                strategia, design e tecnologia in perfetto equilibrio.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-[#F4F4F4]/70">
                <li>• Progetti su misura</li>
                <li>• Performance e SEO</li>
                <li>• Motion e 3D</li>
                <li>• Full‑stack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
