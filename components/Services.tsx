
import React from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Basic Home Cleaning',
    description: 'Perfect for regular maintenance. Includes sweeping, mopping, dusting, and bathroom cleaning.',
    icon: '🏠',
    priceStart: 'RM 120'
  },
  {
    id: '2',
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of all surfaces including windows, fans, and hard-to-reach corners.',
    icon: '✨',
    priceStart: 'RM 350'
  },
  {
    id: '3',
    title: 'Move-In/Out Cleaning',
    description: 'Ensure your new home is sanitary or get your deposit back with our transition cleaning.',
    icon: '📦',
    priceStart: 'RM 450'
  },
  {
    id: '4',
    title: 'Office Cleaning',
    description: 'Keep your workspace productive and hygienic with our customized office packages.',
    icon: '🏢',
    priceStart: 'RM 200'
  },
  {
    id: '5',
    title: 'Post-Renovation',
    description: 'Remove fine dust and construction debris safely after your home improvement.',
    icon: '🔨',
    priceStart: 'RM 600'
  },
  {
    id: '6',
    title: 'Sofa & Carpet',
    description: 'Steam cleaning and stain removal for your upholstery and carpets.',
    icon: '🛋️',
    priceStart: 'RM 150'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Offer</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need for a clean home
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Professional services tailored to Cheras lifestyles.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.id} className="relative group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Starting from</span>
                <span className="text-lg font-bold text-blue-600">{service.priceStart}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
