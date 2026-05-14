import React from 'react'

function Stats() {
  return (
		<div className="flex flex-wrap gap-8 pt-8">
              <div>
                <h3 className="text-4xl text-(--color-text) font-bold">500k+</h3>
                <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">
                  Subscribers
                </p>
              </div>

              <div className="hidden md:block w-px bg-white/10" />

              <div>
                <h3 className="text-4xl text-(--color-text) font-bold">12k+</h3>
                <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">
                  Titles
                </p>
              </div>

              <div className="hidden md:block w-px bg-white/10" />

              <div>
                <h3 className="text-4xl text-(--color-text) font-bold">8K</h3>
                <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">
                  Resolution
                </p>
                </div>
        </div>
		  )
}

export default Stats