import React from 'react';

const FEATURES = [
  {
    title: 'Local Cheras expertise',
    description: 'We understand condo layouts, landed homes, shoplots, parking access, lift bookings and the fast pace of Cheras neighbourhoods.',
    icon: '📍',
  },
  {
    title: 'Detail-first checklist',
    description: 'Every visit follows a room-by-room checklist so kitchens, bathrooms, floors and high-touch areas are handled consistently.',
    icon: '✅',
  },
  {
    title: 'Eco-conscious products',
    description: 'Pet-friendly and family-safe cleaning supplies are available for homes with kids, elders and sensitive noses.',
    icon: '🌿',
  },
  {
    title: 'WhatsApp-first booking',
    description: 'Send your demo quote, photos and preferred date. We confirm scope, team size and arrival window quickly.',
    icon: '💬',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-cyan-100 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-cyan-600">Why Choose Us</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Designed for busy Cheras families, tenants and teams.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A stunning website is only useful when the service promise is clear. This refreshed section puts trust, locality and booking simplicity front and centre.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-glow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">{feature.icon}</div>
                <h3 className="font-display text-lg font-extrabold text-slate-950">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-blue-100 to-cyan-100" />
          <img
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85"
            alt="Professional cleaner preparing supplies"
            className="relative h-[560px] w-full rounded-[2.5rem] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-8 left-6 right-6 rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:left-10 md:right-auto md:w-96">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-amber-400">★★★★★</div>
              <div>
                <p className="font-display text-xl font-extrabold text-slate-950">4.9/5 average rating</p>
                <p className="text-sm text-slate-500">Inspired by real customer expectations: punctual, polite and spotless.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
