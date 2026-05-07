import React from 'react';

const STEPS = [
  {
    title: 'Try the demo quote',
    description: 'Pick property type, rooms, package and add-ons to see an instant front-end estimate.',
    icon: '🧮',
  },
  {
    title: 'Send details on WhatsApp',
    description: 'Share photos, access notes, parking details and your preferred cleaning date.',
    icon: '💬',
  },
  {
    title: 'Enjoy the sparkle',
    description: 'Our team arrives with supplies, follows the checklist and leaves your space guest-ready.',
    icon: '✨',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-950 to-blue-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-cyan-300">How It Works</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">From quote to clean in three simple steps.</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-3xl shadow-glow">{step.icon}</div>
                <span className="font-display text-6xl font-extrabold text-white/10">0{index + 1}</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
