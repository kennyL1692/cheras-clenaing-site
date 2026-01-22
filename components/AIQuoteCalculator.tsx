
import React, { useState } from 'react';
import { getAIQuote } from '../services/geminiService';
import { QuoteRequest, QuoteResult } from '../types';

const AIQuoteCalculator: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    propertyType: 'condo',
    rooms: 2,
    bathrooms: 1,
    serviceType: 'basic',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuoteResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const quote = await getAIQuote(formData);
    setResult(quote);
    setLoading(false);
  };

  return (
    <section id="quote" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Instant AI Quote</h2>
          <p className="mt-4 text-lg text-slate-600">Tell us about your home and get a personalized estimate in seconds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Property Type</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.propertyType}
                  onChange={e => setFormData({...formData, propertyType: e.target.value as any})}
                >
                  <option value="condo">Condo / Apartment</option>
                  <option value="landed">Landed House</option>
                  <option value="office">Office Space</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">No. of Rooms</label>
                  <input 
                    type="number" min="1" max="10"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5"
                    value={formData.rooms}
                    onChange={e => setFormData({...formData, rooms: parseInt(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">No. of Baths</label>
                  <input 
                    type="number" min="1" max="10"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5"
                    value={formData.bathrooms}
                    onChange={e => setFormData({...formData, bathrooms: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {['basic', 'deep', 'move'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({...formData, serviceType: type as any})}
                      className={`px-3 py-2 text-sm font-medium rounded-lg capitalize transition ${
                        formData.serviceType === type 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {type === 'move' ? 'Move-In' : type}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Thinking...
                  </>
                ) : 'Get Instant Estimate'}
              </button>
            </form>
          </div>

          {/* Result */}
          <div className="h-full">
            {result ? (
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-l-blue-600 h-full animate-fadeIn">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="text-blue-600">✨</span> Your Cheras Sparkle Quote
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Estimated Price</p>
                    <p className="text-4xl font-bold text-blue-600">{result.estimatedPrice}</p>
                  </div>

                  <div className="flex gap-8">
                    <div>
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Duration</p>
                      <p className="text-lg font-semibold text-slate-900">{result.duration}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg text-blue-800 text-sm">
                    <strong>Expert Suggestion:</strong> {result.recommendation}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-3 underline">Pro Cleaning Tips</p>
                    <ul className="space-y-2">
                      {result.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-blue-500 font-bold">•</span> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={`https://wa.me/60123456789?text=Hi, I got a quote for RM${result.estimatedPrice}. I'd like to book a ${formData.serviceType} clean for my ${formData.propertyType}.`} 
                    className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition mt-4"
                  >
                    Confirm Booking via WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-slate-200 border-2 border-dashed border-slate-300 rounded-2xl h-full min-h-[400px] flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p>Fill out the form to see your customized estimate powered by Gemini AI</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIQuoteCalculator;
