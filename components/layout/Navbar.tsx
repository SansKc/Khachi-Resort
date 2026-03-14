'use client';

import { useState, useEffect } from 'react';
import NextImage from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-lg' : 'bg-transparent'
        }`}
        style={
          scrolled
            ? {
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              }
            : {}
        }
      >
        <nav className="max-w-7xl mx-auto px-6 h-30 flex items-center justify-between">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-[5px] group cursor-pointer"
          >
            <span className="block w-6 h-[1.5px] bg-white transition-all duration-300 group-hover:w-8" />
            <span className="block w-6 h-[1.5px] bg-white transition-all duration-300" />
            <span className="block w-4 h-[1.5px] bg-white transition-all duration-300 group-hover:w-6" />
          </button>

          {/* Logo — centred absolutely so it stays truly centred */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center select-none">
            <NextImage
              src="/images/logo.png"
              alt="Argakhachi Resort Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>

          {/* Book Now CTA */}
          <a
            href="#book"
            className="border border-white/70 text-white text-[11px] tracking-[0.18em] uppercase px-4 py-2 
                       hover:bg-white hover:text-[#0d2b2b] transition-all duration-300 font-light rounded-full"
          >
            Book Now
          </a>
        </nav>
      </header>

      {/* ── Mega Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-100 flex flex-col transition-all duration-700 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: '#e8ede8' }}
      >
        {/* Slide-down inner container */}
        <div
          className={`flex flex-col flex-1 transition-transform duration-700 ease-in-out ${
            menuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          {/* ── Menu Top Bar ── */}
          <div className="flex items-center justify-between px-8 py-10 border-b border-[#2d5c3a]/20">
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex flex-col items-center gap-0.5 cursor-pointer group"
            >
              {/* X icon */}
              <div className="relative w-5 h-5">
                <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#2d5c3a] rotate-45 -translate-y-1/2 transition-transform duration-300 group-hover:rotate-[135deg]" />
                <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#2d5c3a] -rotate-45 -translate-y-1/2 transition-transform duration-300 group-hover:rotate-45" />
              </div>
              <span className="text-[9px] tracking-[0.22em] uppercase text-[#2d5c3a]">Close</span>
            </button>

            {/* Logo centred */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center select-none">
              <NextImage
                src="/images/logo.png"
                alt="Argakhachi Resort Logo"
                width={100}
                height={100}
                className="object-contain brightness-0"
                priority
              />
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="bg-[#2d5c3a] text-white text-[11px] tracking-[0.18em] uppercase px-5 py-2 
                           hover:bg-[#1e3f29] transition-all duration-200 rounded-full"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* ── "Coming Soon" Body ── */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-[#2d5c3a] text-5xl md:text-6xl font-light ">Coming Soon</h2>
              <p className="text-[#2d5c3a]/50 text-sm tracking-widest uppercase mt-4 font-light">
                Our full menu is being crafted for you
              </p>

              {/* Decorative line */}
              <div className="flex items-center gap-3 justify-center mt-8">
                <span className="block w-12 h-[1px] bg-[#2d5c3a]/30" />
                <svg viewBox="0 0 16 16" className="w-3 h-3 text-[#2d5c3a]/40" fill="currentColor">
                  <polygon points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6" />
                </svg>
                <span className="block w-12 h-[1px] bg-[#2d5c3a]/30" />
              </div>
            </div>
          </div>

          {/* ── Menu Footer ── */}
          <div className="border-t border-[#2d5c3a]/20 px-8 py-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left — copyright */}
              <p className="text-[#2d5c3a]/50 text-[11px] tracking-[0.15em] uppercase">
                © {new Date().getFullYear()} Argakhachi Resort. All rights reserved.
              </p>

              {/* Centre — illustrated crest / tagline */}
              <div className="flex flex-col items-center gap-1">
                <svg
                  viewBox="0 0 80 40"
                  fill="none"
                  className="w-20 text-[#2d5c3a]/40"
                  aria-hidden="true"
                >
                  {/* Simple stylised mountain silhouette */}
                  <path
                    d="M0 38 Q10 20 20 28 Q30 10 40 18 Q50 4 60 22 Q70 14 80 38 Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
                <span className="text-[#2d5c3a]/60 text-sm ">
                  A Royal Escape into Nature &amp; Comfort
                </span>
              </div>

              {/* Right — location */}
              <p className="text-[#2d5c3a]/50 text-[11px] tracking-[0.15em] uppercase">
                Argakhachi, Lumbini Province, Nepal
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
