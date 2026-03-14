'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[2s] ease-out"
        style={{ transform: loaded ? 'scale(1)' : 'scale(1.05)' }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-end h-full pb-24 px-6 text-center
          transition-all duration-1000 ease-out
          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        {/* Eyebrow */}
        <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase mb-4">
          Welcome to Khachi Resort
        </p>

        <h1 className="text-white text-xl md:text-4xl lg:text-5xltext-xl md:text-4xl lg:text-5xl">
          A Royal Escape into Nature & Comfort
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-8 mb-8">
          <span className="block w-10 h-[1px] bg-white/40" />
          <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 text-white/50" fill="currentColor">
            <polygon points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6" />
          </svg>
          <span className="block w-10 h-[1px] bg-white/40" />
        </div>

        {/* CTA */}
        <a
          href="#experiences"
          className="border border-white/60 text-white text-[10px] md:text-[11px] tracking-[0.25em] uppercase
             px-4 py-2 md:px-8 md:py-3 hover:bg-white hover:text-[#0d2b2b] transition-all duration-300 rounded-full"
        >
          Explore the Resort
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
