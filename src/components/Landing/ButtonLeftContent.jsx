import React from 'react'

function ButtonLeftContent() {
  return (
    <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-400 text-black font-bold px-10 py-4 rounded-2xl hover:scale-105 transition-transform duration-200 shadow-lg shadow-cyan-400/20">
                GET STARTED
              </button>

              <button className="border border-white/10 bg-white/5 text-white font-semibold px-10 py-4 rounded-2xl hover:bg-white/10 transition-colors duration-200">
                BROWSE FILMS
              </button>
        </div>
  )
}

export default ButtonLeftContent