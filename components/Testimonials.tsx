import React from 'react';

const REVIEWS = [
  {
    name: 'Aina Rahman',
    area: 'Bandar Tun Hussein Onn',
    quote: 'The deep clean made our condo feel brand new. Fast WhatsApp replies and the team was careful with every room.',
  },
  {
    name: 'Mr Lim',
    area: 'Taman Connaught',
    quote: 'Booked for my office pantry and washrooms. The quote was clear, the timing was punctual, and the finish was excellent.',
  },
  {
    name: 'Sarah Tan',
    area: 'Alam Damai',
    quote: 'Loved the checklist approach. They focused on bathrooms, windows and the kitchen exactly as requested.',
  },
];

const BEFORE_AFTER = [
  {
    title: 'Kitchen reset',
    before: 'Grease, counter clutter and sink stains',
    after: 'Bright counters, polished fixtures and fresh floors',
  },
  {
    title: 'Bathroom sparkle',
    before: 'Water marks, mirror haze and tile build-up',
    after: 'Sanitised surfaces, clear glass and hotel-style shine',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="proof" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-cyan-600">Social Proof</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Proof points that build confidence before booking.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Use testimonials, before/after promises and local area names to make the site more credible and conversion-focused.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {BEFORE_AFTER.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100">
                <div className="grid grid-cols-2">
                  <div className="bg-slate-200 p-5">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Before</p>
                    <p className="mt-8 text-sm font-semibold text-slate-600">{item.before}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-5 text-white">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-blue-100">After</p>
                    <p className="mt-8 text-sm font-semibold">{item.after}</p>
                  </div>
                </div>
                <p className="p-5 font-display text-xl font-extrabold text-slate-950">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-glow">
              <div className="text-2xl text-amber-400">★★★★★</div>
              <blockquote className="mt-5 text-base leading-8 text-slate-600">“{review.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 font-extrabold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-extrabold text-slate-950">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.area}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
