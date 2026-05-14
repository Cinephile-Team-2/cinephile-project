import React from 'react'

function MainLandingMobile() {
  return (
        
        <main className="px-6">
             <section className="px-6 pt-14">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-fuchsia-400/20 px-4 py-2 rounded-full text-[10px] tracking-widest uppercase text-fuchsia-300">
              Ultra HD Streaming
            </div>

            <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight">
              Discover <span className="text-cyan-400">Pure</span> Cinema.
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed text-[15px]">
              Precision-engineered streaming for the world's most dedicated
              cinephiles.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4">
              <button className="bg-cyan-400 text-black font-bold py-4 rounded-2xl text-lg hover:scale-[1.02] transition">
                Get Access
              </button>

              <button className="border border-cyan-400/20 text-cyan-300 font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-400/5 transition">
                View Catalog →
              </button>
            </div>
          </section>
           {/* FEATURED */}
          <section className="mt-32">
            <div className="relative rounded-2xl overflow-hidden h-[180px] border border-white/10">
              <img
                src="./src/assets/Cinephile3.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-500/20">
                  <span className="text-[10px] uppercase tracking-wider text-fuchsia-300">
                    Now Trending
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-bold">
                  Interstellar Voyage
                </h3>
              </div>
            </div>
          </section>

          {/* KEEP WATCHING */}
          <section className="mt-14">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Keep Watching
              </h3>

              <button className="text-cyan-400 text-sm">
                See All
              </button>
            </div>

            <div className="mt-5 bg-[#100A24] border border-white/5 rounded-2xl p-3 flex gap-4">
              <img
                src="./src/assets/Cinephile4.png"
                alt=""
                className="w-16 h-20 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h4 className="font-semibold">
                  Neo Tokyo 2088
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  S1:E4 — The Signal
                </p>

                <div className="mt-5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                </div>
              </div>
            </div>
          </section>
        </main>
  ).
}

export default MainLandingMobile

