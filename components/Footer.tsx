import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-2xl text-white">✦</div>
              <div>
                <p className="font-display text-xl font-extrabold text-white">Cheras<span className="text-cyan-300">Sparkle</span></p>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Premium Cleaners</p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-7 text-slate-400">
              A redesigned premium cleaning landing page for Cheras with a front-end demo quote calculator, stronger trust sections, polished visuals and WhatsApp-first conversion.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-extrabold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#services" className="hover:text-cyan-300">Basic Cleaning</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Move-In / Move-Out</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Office Cleaning</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-extrabold text-white">Book</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#quote" className="hover:text-cyan-300">Demo Quote</a></li>
              <li><a href="#proof" className="hover:text-cyan-300">Testimonials</a></li>
              <li><a href="https://wa.me/60123456789" className="hover:text-cyan-300">WhatsApp Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cheras Sparkle Cleaners. All rights reserved.</p>
          <p>Demo calculator only — final quotes confirmed by team review.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
