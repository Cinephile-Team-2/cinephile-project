import React from 'react'

function TextLeftContent() {
  return (
    <div>
        <div className="inline-flex items-center rounded-full border border-pink-400/20 bg-pink-400/10 px-5 py-2 text-sm tracking-[0.2em] uppercase text-pink-300">
              Premium Streaming
        </div>
        <div className="space-y-6">
              <h1 className="text-3xl text-(--color-text) md:text-4xl xl:text-5xl font-black leading-tight tracking-tight uppercase">
                Unlimited Cinema At
                <span className="block text-(--color-primary)">Your Fingertips</span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Experience breathtaking visual storytelling with precision-
                engineered 8K streaming. Access the world’s most curated
                library of modern masterpieces and cult classics.
              </p>
        </div>
    </div>
  ).
}

export default TextLeftContent