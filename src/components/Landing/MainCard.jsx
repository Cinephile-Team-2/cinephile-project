import React from 'react'

function MainCard() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 min-h-[520px] bg-gradient-to-b from-gray-700 via-gray-900 to-black">
              <img src="./src/assets/Cinephile1.png"

                alt="Sci fi city"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute bottom-5 left-5 z-10 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-1 text-sm text-(--color-secondary) backdrop-blur-sm">
                SCI-FI
              </div>
            </div>
  ).
}

export default MainCard