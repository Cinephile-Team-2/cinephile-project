import React from 'react'

function MainLanding() {
  return (
    /* Hero */
    <main>
    {/* Left Content */}
      <section>
        <div className="inline-flex items-center rounded-full border border-pink-400/20 bg-pink-400/10 px-5 py-2 text-sm tracking-[0.2em] uppercase text-pink-300">
              Premium Streaming
        </div>
        <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight uppercase">
                Unlimited Cinema At
                <span className="block text-cyan-400">Your Fingertips</span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Experience breathtaking visual storytelling with precision-
                engineered 8K streaming. Access the world’s most curated
                library of modern masterpieces and cult classics.
              </p>
        </div>
        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <h3 className="text-4xl font-bold">500k+</h3>
                <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">
                  Subscribers
                </p>
              </div>

              <div className="hidden md:block w-px bg-white/10" />

              <div>
                <h3 className="text-4xl font-bold">12k+</h3>
                <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">
                  Titles
                </p>
              </div>

              <div className="hidden md:block w-px bg-white/10" />

              <div>
                <h3 className="text-4xl font-bold">8K</h3>
                <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">
                  Resolution
                </p>
                </div>
        </div>
      </section>
       {/* Right Content */}
          <section className="grid grid-cols-[1.2fr_0.9fr] gap-5 max-w-xl mx-auto w-full">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 min-h-[520px] bg-gradient-to-b from-gray-700 via-gray-900 to-black">
              <img src="./src/assets/Cinephile1.png"

                alt="Sci fi city"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute bottom-5 left-5 z-10 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-1 text-sm text-pink-300 backdrop-blur-sm">
                SCI-FI
              </div>
            </div>

            {/* Side Cards */}
            <div className="flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 min-h-[250px] bg-gradient-to-b from-gray-700 via-gray-900 to-black">
                <img
                  src="./src/assets/Cinephile2.png"
                  alt="Drama movie"
                  className="absolute inset-0 h-full w-full object-cover opacity-75"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute bottom-5 left-5 z-10 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-1 text-sm text-pink-300 backdrop-blur-sm">
                  DRAMA
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#0B062C] min-h-[250px] flex flex-col items-center justify-center text-center px-6">
                <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-cyan-400/20">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-cyan-400 border-b-[10px] border-b-transparent ml-1" />
                </div>

                <h3 className="text-3xl font-bold uppercase">New Releases</h3>
                <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mt-3">
                  Every Friday
                </p>
              </div>
            </div>
          </section>
    </main>
  )
}

export default MainLanding