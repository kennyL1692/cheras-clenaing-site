import React from 'react';

const AREAS = ['Taman Connaught', 'Bandar Tun Hussein Onn', 'Cheras Selatan', 'Alam Damai', 'Taman Midah', 'Taman Segar', 'Batu 9 Cheras', 'Balakong'];

const FAQS = [
  {
    question: 'Is the calculator connected to AI?',
    answer: 'No. The calculator is intentionally a front-end demo only. It uses local pricing rules so visitors can explore estimates without a real API connection.',
  },
  {
    question: 'Do customers need to provide cleaning tools?',
    answer: 'The refreshed design positions Cheras Sparkle as bringing supplies, while allowing customers to mention special product preferences during WhatsApp confirmation.',
  },
  {
    question: 'Can users book same-day cleaning?',
    answer: 'The site highlights same-day slots as a strong conversion message, but final availability should always be confirmed on WhatsApp.',
  },
  {
    question: 'Why add local service areas?',
    answer: 'Area names make the page feel more relevant to Cheras visitors and can support local search intent.',
  },
];

const ServiceAreasFAQ: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-glow sm:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-blue-100">Service Areas</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight">Local coverage that feels close to home.</h2>
          <p className="mt-5 leading-8 text-blue-50">Show nearby neighbourhoods so visitors instantly recognise that the service is built for their area.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <span key={area} className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold ring-1 ring-white/20">{area}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-cyan-600">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950">Answer doubts before they become objections.</h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-slate-100 bg-slate-50 p-6 open:bg-white open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-extrabold text-slate-950">
                  {faq.question}
                  <span className="text-blue-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasFAQ;
