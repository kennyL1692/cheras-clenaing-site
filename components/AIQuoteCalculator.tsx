import React, { useMemo, useState } from 'react';
import { calculateDemoQuote } from '../services/quoteCalculator';
import { QuoteRequest } from '../types';

const PROPERTY_OPTIONS = [
  { value: 'condo', label: 'Condo', icon: '🏙️', hint: 'Apartment / serviced residence' },
  { value: 'landed', label: 'Landed', icon: '🏡', hint: 'Terrace / semi-D / bungalow' },
  { value: 'office', label: 'Office', icon: '🏢', hint: 'Workspace / shoplot' },
] as const;

const SERVICE_OPTIONS = [
  { value: 'basic', label: 'Basic', icon: '🧹', hint: 'Regular upkeep' },
  { value: 'deep', label: 'Deep', icon: '✨', hint: 'Detailed reset' },
  { value: 'move', label: 'Move', icon: '📦', hint: 'Move-in / out' },
] as const;

const ADD_ONS = [
  { value: 'windows', label: 'Window shine', price: '+RM55' },
  { value: 'fridge', label: 'Fridge clean', price: '+RM45' },
  { value: 'oven', label: 'Oven degrease', price: '+RM45' },
  { value: 'laundry', label: 'Laundry fold', price: '+RM35' },
];

const AIQuoteCalculator: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    propertyType: 'condo',
    rooms: 2,
    bathrooms: 1,
    serviceType: 'deep',
    addOns: ['windows'],
  });
  const [hasCalculated, setHasCalculated] = useState(true);

  const result = useMemo(() => calculateDemoQuote(formData), [formData]);

  const setNumber = (field: 'rooms' | 'bathrooms', delta: number) => {
    setHasCalculated(false);
    setFormData((current) => ({
      ...current,
      [field]: Math.min(10, Math.max(1, current[field] + delta)),
    }));
  };

  const toggleAddOn = (addOn: string) => {
    setHasCalculated(false);
    setFormData((current) => ({
      ...current,
      addOns: current.addOns.includes(addOn)
        ? current.addOns.filter((item) => item !== addOn)
        : [...current.addOns, addOn],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasCalculated(true);
  };

  const whatsAppText = encodeURIComponent(
    `Hi Cheras Sparkle, I tried the demo calculator and got ${result.estimatedPrice} for a ${formData.serviceType} clean at my ${formData.propertyType}. Can you confirm availability?`
  );

  return (
    <section id="quote" className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.45),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.35),transparent_30%)]" />
      <div className="absolute left-10 top-20 h-28 w-28 rounded-full border border-white/10" />
      <div className="absolute bottom-16 right-16 h-40 w-40 rounded-full border border-cyan-300/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.25em] text-cyan-200">
            Interactive Demo Calculator
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Estimate a Cheras cleaning visit without any API key.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            This is now a beautiful front-end pricing demo. It uses local pricing rules only—no Gemini, no external AI call, and no hidden network dependency.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center gap-4 rounded-3xl bg-white/10 p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-2xl shadow-lg">🧠</div>
              <div>
                <p className="font-extrabold">Smart pricing simulator</p>
                <p className="text-sm text-slate-300">Updates instantly as you change the visit details.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="mb-3 block text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-200">1. Property Type</label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {PROPERTY_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setHasCalculated(false);
                        setFormData({ ...formData, propertyType: option.value });
                      }}
                      className={`rounded-3xl border p-4 text-left transition hover:-translate-y-1 ${formData.propertyType === option.value ? 'border-cyan-300 bg-cyan-300/15 shadow-tealGlow' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                    >
                      <span className="text-3xl">{option.icon}</span>
                      <span className="mt-3 block font-extrabold">{option.label}</span>
                      <span className="mt-1 block text-xs text-slate-300">{option.hint}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['rooms', 'Rooms', '🛏️'],
                  ['bathrooms', 'Bathrooms', '🚿'],
                ].map(([field, label, icon]) => (
                  <div key={field} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-200">{icon} {label}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <button type="button" onClick={() => setNumber(field as 'rooms' | 'bathrooms', -1)} className="h-12 w-12 rounded-full bg-white/10 text-2xl font-bold transition hover:bg-white/20">−</button>
                      <span className="font-display text-5xl font-extrabold">{formData[field as 'rooms' | 'bathrooms']}</span>
                      <button type="button" onClick={() => setNumber(field as 'rooms' | 'bathrooms', 1)} className="h-12 w-12 rounded-full bg-white/10 text-2xl font-bold transition hover:bg-white/20">+</button>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <label className="mb-3 block text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-200">2. Cleaning Package</label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {SERVICE_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setHasCalculated(false);
                        setFormData({ ...formData, serviceType: option.value });
                      }}
                      className={`rounded-3xl border p-4 text-left transition hover:-translate-y-1 ${formData.serviceType === option.value ? 'border-blue-300 bg-blue-400/20 shadow-glow' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                    >
                      <span className="text-3xl">{option.icon}</span>
                      <span className="mt-3 block font-extrabold">{option.label}</span>
                      <span className="mt-1 block text-xs text-slate-300">{option.hint}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-200">3. Add-ons</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {ADD_ONS.map((addOn) => (
                    <button
                      key={addOn.value}
                      type="button"
                      onClick={() => toggleAddOn(addOn.value)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${formData.addOns.includes(addOn.value) ? 'border-emerald-300 bg-emerald-300/15 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/30'}`}
                    >
                      <span className="font-bold">{addOn.label}</span>
                      <span className="text-sm font-extrabold text-cyan-200">{addOn.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-5 font-display text-lg font-extrabold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-2xl">
                Refresh Demo Estimate ✨
              </button>
            </div>
          </form>

          <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-cyan-600">Your demo estimate</p>
                <h3 className="mt-2 font-display text-3xl font-extrabold">Cheras Sparkle Quote</h3>
              </div>
              <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-emerald-700">
                <p className="text-xs font-bold uppercase">Mode</p>
                <p className="font-extrabold">Demo</p>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-glow animate-fadeIn" key={result.estimatedPrice + result.duration}>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-100">Estimated Price</p>
              <p className="mt-2 font-display text-5xl font-extrabold">{result.estimatedPrice}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-100">Duration</p>
                  <p className="mt-1 font-extrabold">{result.duration}</p>
                </div>
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-100">Team</p>
                  <p className="mt-1 font-extrabold">{result.cleaners} cleaners</p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50 p-5">
              <p className="font-extrabold text-slate-950">Recommendation</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{result.recommendation}</p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-slate-400">Included</p>
                <ul className="space-y-3">
                  {result.included.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="text-emerald-500">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-slate-400">Pro Tips</p>
                <ul className="space-y-3">
                  {result.tips.map((tip) => (
                    <li key={tip} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="text-blue-500">•</span>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a href={`https://wa.me/60123456789?text=${whatsAppText}`} className="mt-8 block rounded-3xl bg-[#25D366] px-8 py-5 text-center font-display text-lg font-extrabold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#1ebe5d]">
              Confirm Availability on WhatsApp
            </a>
            {!hasCalculated && <p className="mt-4 text-center text-sm font-semibold text-amber-600">Details changed — tap “Refresh Demo Estimate” to mark it as reviewed.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIQuoteCalculator;
