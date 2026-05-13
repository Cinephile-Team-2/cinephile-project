import React from 'react'

function SideCard() {
  return (
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
  )
}

export default SideCard