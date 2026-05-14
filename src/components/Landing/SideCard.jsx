import React from "react";

function SideCard() {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative overflow-hidden rounded-[28px] border aspect-square bg-bg">
        <img
          src="./src/assets/Cinephile2.png"
          alt="Drama movie"
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5 z-10 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-1 text-sm text-secondary backdrop-blur-sm">
          DRAMA
        </div>
      </div>

      <div className="rounded-[32px] border border-white/5  bg-bg aspect-square flex flex-col items-center justify-center text-center px-8">
        <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(var(--primary),0.2)] group cursor-pointer hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary border-b-[10px] border-b-transparent ml-1" />
        </div>

        <h3 className="text-3xl font-bold uppercase text-text font-spline">New Releases</h3>
        <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-bold mt-4 font-vietnam">
          Every Friday
        </p>
      </div>
    </div>
  );
}

export default SideCard;
