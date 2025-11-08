import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
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
          <motion.a whileHover={{ scale: 1.03 }} href="#contact" className="rounded-full bg-[#0A3D2E] px-4 py-1.5 text-xs font-medium text-[#F4F4F4]">Parliamo</motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
