import React from 'react';

const TRUST_BADGES = ['Same-day slots', 'Eco-safe supplies', 'Cheras local team'];

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 pt-10">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="absolute left-1/2 top-20 hidden h-24 w-24 rounded-full border border-blue-200/70 lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulseGlow" />
            Premium cleaning for Cheras homes & offices
          </div>

          <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Hotel-level clean for{' '}
            <span className="shimmer-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Cheras living.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Impress guests, tenants, clients, and your own family with a spotless space. Get a transparent demo estimate, then book fast on WhatsApp with a local team that knows Cheras properties.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#quote" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-extrabold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-2xl">
              ✨ Calculate Demo Quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-8 py-4 text-base font-extrabold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700">
              Explore Services
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur">
                <span className="mr-2 text-cyan-500">✓</span>{badge}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <div className="flex -space-x-3">
              {['A', 'L', 'S', 'M'].map((letter, index) => (
                <div key={letter} className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${index % 2 ? 'from-cyan-400 to-blue-500' : 'from-blue-500 to-indigo-500'} text-sm font-extrabold text-white shadow-md`}>
                  {letter}
                </div>
              ))}
            </div>
            <p><span className="font-extrabold text-slate-900">500+ local bookings</span> across Taman Connaught, Alam Damai & Cheras Selatan</p>
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute left-4 top-6 h-[440px] w-[82%] rotate-3 rounded-[2.5rem] bg-gradient-to-br from-blue-500 to-cyan-300 opacity-20 blur-sm" />
          <img
            className="relative z-10 h-[560px] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-blue-900/20"
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85"
            alt="Cleaner refreshing a bright modern home"
          />

          <div className="animate-float absolute -left-2 top-16 z-20 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-glow backdrop-blur-xl sm:-left-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">Rating</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-950">★★★★★ 4.9</p>
            <p className="text-sm text-slate-500">Average customer score</p>
          </div>

          <div className="absolute -bottom-4 right-2 z-20 rounded-3xl border border-white/70 bg-slate-950/90 p-5 text-white shadow-2xl backdrop-blur-xl sm:right-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Demo quote</p>
            <p className="mt-1 text-3xl font-extrabold">30 sec</p>
            <p className="text-sm text-slate-300">No API key needed</p>
          </div>

          <div className="absolute right-4 top-8 z-20 rounded-full bg-white/90 px-5 py-3 text-sm font-extrabold text-blue-700 shadow-xl backdrop-blur">
            🧼 Eco-safe products
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
