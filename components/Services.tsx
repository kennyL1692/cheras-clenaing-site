import React from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Basic Home Cleaning',
    description: 'Weekly or bi-weekly upkeep for floors, dust, bathrooms, kitchen surfaces and tidy finishing touches.',
    icon: '🏠',
    priceStart: 'RM 120',
    duration: '2–4 hours',
  },
  {
    id: '2',
    title: 'Deep Sparkle Cleaning',
    description: 'A detailed reset for fans, windows, skirting, stubborn bathroom stains, kitchen grease and hidden dust.',
    icon: '✨',
    priceStart: 'RM 350',
    duration: '4–7 hours',
    highlight: 'Most Popular',
  },
  {
    id: '3',
    title: 'Move-In / Move-Out',
    description: 'Vacant-home sanitation for tenants, landlords and new owners who want a clean handover.',
    icon: '📦',
    priceStart: 'RM 450',
    duration: '5–8 hours',
  },
  {
    id: '4',
    title: 'Office & Retail Cleaning',
    description: 'Flexible after-hours cleaning for desks, meeting rooms, pantry areas, washrooms and shopfronts.',
    icon: '🏢',
    priceStart: 'RM 200',
    duration: 'Custom plan',
  },
  {
    id: '5',
    title: 'Post-Renovation Reset',
    description: 'Fine dust removal, debris clearing, windows, floor wash and careful finishing after contractors leave.',
    icon: '🔨',
    priceStart: 'RM 600',
    duration: '1 full day',
  },
  {
    id: '6',
    title: 'Sofa, Mattress & Carpet',
    description: 'Fabric refresh add-ons for odours, stains, dust mites and high-use upholstery.',
    icon: '🛋️',
    priceStart: 'RM 150',
    duration: '1–3 hours',
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-cyan-600">What We Offer</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Premium packages for every kind of clean.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Choose a service, estimate your visit in the demo calculator, then confirm the details with us on WhatsApp.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.id} className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-glow">
              {service.highlight && (
                <div className="absolute right-5 top-5 rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-amber-700">
                  {service.highlight}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 text-3xl shadow-lg shadow-blue-500/20 transition group-hover:rotate-6 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-extrabold text-slate-950 transition group-hover:text-blue-700">
                  {service.title}
                </h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">From</p>
                    <p className="mt-1 text-xl font-extrabold text-blue-600">{service.priceStart}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Typical Time</p>
                    <p className="mt-1 text-sm font-extrabold text-slate-800">{service.duration}</p>
                  </div>
                </div>
                <a href="#quote" className="mt-6 inline-flex font-extrabold text-cyan-600 transition group-hover:translate-x-1">
                  Estimate this service →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
