import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/80 shadow-sm backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Cheras Sparkle home">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-500/25">
              <span className="text-2xl">✦</span>
            </div>
            <div>
              <span className="block font-display text-xl font-extrabold tracking-tight text-slate-950">Cheras<span className="text-blue-600">Sparkle</span></span>
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600">Premium Cleaners</span>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">Services</a>
            <a href="#quote" className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">Demo Quote</a>
            <a href="#proof" className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">Proof</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">About</a>
            <a href="https://wa.me/60123456789" className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:shadow-xl">
              Book via WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-slate-200 p-3 text-slate-700 md:hidden"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white/95 px-4 pb-6 pt-2 shadow-xl backdrop-blur-xl md:hidden">
          {[
            ['Services', '#services'],
            ['Demo Quote', '#quote'],
            ['Proof', '#proof'],
            ['About', '#about'],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-4 font-semibold text-slate-700 hover:bg-slate-50">
              {label}
            </a>
          ))}
          <a href="https://wa.me/60123456789" className="mt-3 block rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-center font-bold text-white shadow-lg">
            Book via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
