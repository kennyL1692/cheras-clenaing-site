import React from 'react';

const TRUST_BADGES = ['Same-day slots', 'Eco-safe supplies', 'Cheras local team'];
const STATS = [
  { value: '500+', label: 'local bookings' },
  { value: '4.9★', label: 'average rating' },
  { value: '30s', label: 'demo estimate' },
];

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#f7fbff] pt-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_20%,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(20,184,166,0.16),transparent_26%),linear-gradient(135deg,#f8fbff_0%,#ffffff_46%,#ecfeff_100%)]" />
      <div className="absolute left-1/2 top-16 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-blue-100/80" />
      <div className="absolute -right-24 bottom-8 -z-10 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute -left-24 top-36 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/90 px-5 py-3 text-sm font-extrabold text-blue-700 shadow-lg shadow-blue-100/60 backdrop-blur-xl">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </span>
            Premium cleaning for Cheras homes & offices
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-extrabold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl">
            A spotless home,
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
              booked in minutes.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Premium Cheras cleaners for condos, landed homes, and offices. Try the instant demo quote, then confirm your preferred slot on WhatsApp with a local team.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#quote" className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-extrabold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-2xl">
              <span className="transition group-hover:rotate-12">✨</span>
              Calculate Demo Quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-8 py-4 text-base font-extrabold text-slate-800 shadow-lg shadow-slate-200/50 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200 hover:text-blue-700">
              Explore Services
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="rounded-2xl border border-white bg-white/85 px-4 py-3 text-sm font-extrabold text-slate-700 shadow-sm backdrop-blur">
                <span className="mr-2 text-cyan-500">✓</span>{badge}
              </div>
            ))}
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-[2rem] border border-slate-100 bg-white/85 shadow-xl shadow-blue-100/40 backdrop-blur-xl">
            {STATS.map((stat, index) => (
              <div key={stat.label} className={`p-5 ${index !== 0 ? 'border-l border-slate-100' : ''}`}>
                <p className="font-display text-2xl font-extrabold text-slate-950">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[620px] lg:min-h-[680px]">
          <div className="absolute inset-x-6 bottom-4 top-16 rounded-[3rem] bg-gradient-to-br from-blue-600/20 via-cyan-300/20 to-teal-200/30 blur-2xl" />

          <div className="absolute right-0 top-6 hidden rounded-[2rem] border border-white/70 bg-white/90 px-5 py-4 text-sm font-extrabold text-blue-700 shadow-xl backdrop-blur-xl sm:block">
            🧼 Eco-safe supplies included
          </div>

          <div className="relative mx-auto h-[620px] max-w-[620px] rounded-[3rem] border border-white/80 bg-white/80 p-4 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-6 lg:h-[660px]">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-100 via-white to-cyan-100">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/90 to-transparent" />
              <div className="absolute left-10 top-10 h-40 w-32 rounded-b-[2rem] rounded-t-full bg-white/70 shadow-inner" />
              <div className="absolute right-12 top-12 h-44 w-36 rounded-b-[2rem] rounded-t-full bg-white/70 shadow-inner" />
              <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-3xl" />

              <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-blue-100/80 to-transparent" />
              <div className="absolute bottom-24 left-12 right-12 h-20 rounded-[2rem] bg-white/80 shadow-xl" />
              <div className="absolute bottom-40 left-20 h-24 w-28 rounded-t-[2rem] bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl" />
              <div className="absolute bottom-40 right-20 h-24 w-28 rounded-t-[2rem] bg-gradient-to-br from-cyan-400 to-teal-300 shadow-xl" />
              <div className="absolute bottom-12 left-20 h-14 w-48 rounded-full bg-slate-900/10 blur-xl" />
              <div className="absolute bottom-14 left-24 h-8 w-40 rounded-full bg-white/90" />

              <div className="absolute right-12 top-44 flex h-32 w-32 items-center justify-center rounded-full bg-white/80 shadow-xl">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-300 to-cyan-400" />
                <div className="absolute bottom-4 h-16 w-4 rounded-full bg-emerald-700/70" />
              </div>

              <div className="animate-float absolute left-6 top-44 rounded-[2rem] border border-white/80 bg-white/95 p-5 shadow-glow backdrop-blur-xl sm:left-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cyan-600">Today</p>
                <div className="mt-3 space-y-3">
                  {['Living room reset', 'Bathroom sparkle', 'Kitchen wipe-down'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-8 right-7 rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl sm:right-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-300">Demo quote</p>
                <p className="mt-2 font-display text-4xl font-extrabold">RM 260</p>
                <p className="mt-1 text-sm text-slate-300">2 cleaners • 3 hours</p>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-8 rounded-[2rem] border border-white/80 bg-white/95 p-5 shadow-2xl backdrop-blur-xl sm:left-2 lg:-left-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cyan-600">Rating</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-2xl text-amber-400">★★★★★</span>
              <span className="font-display text-3xl font-extrabold text-slate-950">4.9</span>
            </div>
            <p className="text-sm font-semibold text-slate-500">Loved by Cheras families</p>
          </div>

          <div className="absolute bottom-0 left-6 hidden rounded-[2rem] border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:block">
            <div className="flex -space-x-3">
              {['A', 'L', 'S', 'M'].map((letter, index) => (
                <div key={letter} className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${index % 2 ? 'from-cyan-400 to-blue-500' : 'from-blue-500 to-indigo-500'} text-sm font-extrabold text-white shadow-md`}>
                  {letter}
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm font-extrabold text-slate-700">Trusted by local homes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
