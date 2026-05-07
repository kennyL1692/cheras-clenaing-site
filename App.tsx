import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import AIQuoteCalculator from './components/AIQuoteCalculator';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ServiceAreasFAQ from './components/ServiceAreasFAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <AIQuoteCalculator />
      <Testimonials />
      <About />
      <ServiceAreasFAQ />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-slate-950 py-24 text-white">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-cyan-200">Ready for a Cleaner Home?</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Come home to a spotless space without the stress.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50">
            Try the demo estimate, send your details on WhatsApp, and let a local Cheras team handle the rest.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#quote" className="rounded-2xl bg-white px-8 py-4 font-display text-lg font-extrabold text-blue-700 shadow-2xl transition hover:-translate-y-1 hover:bg-cyan-50">
              Get Demo Quote
            </a>
            <a href="https://wa.me/60123456789" className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-display text-lg font-extrabold text-white shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/20">
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <a
        href="https://wa.me/60123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
        aria-label="WhatsApp Support"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
