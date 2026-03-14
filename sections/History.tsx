import NextImage from 'next/image';

export default function History() {
  return (
    <section className="w-full">
      {/* ── Part 1: Dark teal text block ── */}
      <div className="bg-[#0d5c6b] px-6 py-30 flex flex-col items-center text-center">
        <p className="text-white/50 text-[10px] tracking-[0.4em] uppercase mb-6">
          Welcome to Khachi Darbar Resort
        </p>
        <h2 className="text-white text-xl md:text-4xl lg:text-5xl  font-light leading-snug max-w-4xl">
          Luxury stays, serene surroundings, and heartfelt hospitality—crafted for memorable
          escapes.
        </h2>
      </div>

      {/* ── Part 2: Mountain image with history CTA ── */}
      <div className="relative w-full h-72 md:h-120 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-30"
          style={{ backgroundImage: "url('/images/history-bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 text-center px-6">
          <h3 className="text-white text-2xl md:text-4xl font-light leading-snug">
            Discover the rich
            <br />
            history of Argakhachi
          </h3>
          <a
            href="#history"
            className="border border-white/50 text-white text-[11px] tracking-[0.3em] uppercase
                       px-6 py-2 rounded-full hover:bg-white hover:text-[#0d3d3d] transition-all duration-300"
          >
            Explore More
          </a>
        </div>
      </div>

      {/* ── Part 3: Geographically Diverse District ── */}
      <div className="bg-[#f0f0ec] px-6 py-10 flex flex-col items-center text-center gap-8">
        {/* Logo */}
        <NextImage
          src="/images/logo.png"
          alt="Argakhachi Resort Logo"
          width={80}
          height={80}
          className="object-contain brightness-0"
        />

        {/* Heading */}
        <h2 className="text-[#4e2202] text-2xl md:text-4xl font-light leading-snug">
          Geographically Diverse
          <br />
          District
        </h2>

        {/* Two cards */}
        <div className="grid grid-cols-2 gap-8 w-full max-w-xl">
          <div
            className="border border-[#4e2202]/40 rounded-sm px-6 py-8 flex flex-col items-center gap-2
                          hover:border-[#4e2202]/80 transition-all duration-300"
          >
            <h4 className="text-[#4e2202] text-3xl font-light">Argha</h4>
            <p className="text-[#4e2202]/80 text-[11px] leading-relaxed text-center">
              Ruled by local kings until the Gorkha conquest
            </p>
          </div>
          <div
            className="border border-[#4e2202]/40 rounded-sm px-6 py-8 flex flex-col items-center gap-2
                          hover:border-[#4e2202]/80 transition-all duration-300"
          >
            <h4 className="text-[#4e2202] text-3xl font-light">Khachi</h4>
            <p className="text-[#4e2202]/80 text-[11px] leading-relaxed text-center">
              Known for its historic forts and resistance
            </p>
          </div>
        </div>

        {/* Explore More */}
        <a
          href="#district"
          className="border border-[#4e2202]/50 text-[#4e2202]/90 text-[11px] tracking-[0.3em] uppercase
                     px-6 py-2 rounded-full hover:bg-[#4e2202] hover:text-white transition-all duration-300"
        >
          Explore More
        </a>
      </div>
    </section>
  );
}
