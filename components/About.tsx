
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Why Cheras Sparkle?
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Based right in the heart of Cheras, we understand the local area better than anyone. We know the traffic patterns, the types of housing, and the expectations of our neighbors.
            </p>
            
            <dl className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-slate-900">Vetted Local Professionals</dt>
                  <dd className="mt-2 text-base text-slate-500">
                    All our cleaners are residents of Cheras and surrounding areas. We background check every team member.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-slate-900">Punctuality Guaranteed</dt>
                  <dd className="mt-2 text-base text-slate-500">
                    Because we're local, traffic doesn't stop us. We're consistently on time for every appointment.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-slate-900">Eco-Friendly Products</dt>
                  <dd className="mt-2 text-base text-slate-500">
                    We use non-toxic, pet-safe, and baby-safe cleaning supplies that are gentle on your home environment.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          
          <div className="mt-12 lg:mt-0 relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Team cleaning" 
              className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl text-yellow-400">★★★★★</div>
                <div>
                  <p className="font-bold text-slate-900">4.9/5 Average Rating</p>
                  <p className="text-sm text-slate-500">Based on Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
