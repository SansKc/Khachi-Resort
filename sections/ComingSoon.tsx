import NextImage from 'next/image';

const categories = [
  { number: '01', title: 'Experience &\nAtmosphere', image: '/images/experiences-bg.jpeg' },
  { number: '02', title: 'Rooms / Villas', image: '/images/rooms.jpeg' },
  { number: '03', title: 'Amenities &\nActivities', image: '/images/amenties.jpeg' },
  { number: '04', title: 'Trust', image: '/images/trust.jpeg' },
];

function ComingSoonPanel({ align = 'left' }: { align?: 'left' | 'right' | 'center' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-[#f0f4f8] px-10 py-16 h-full">
      {/* Decorative top line */}
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-8 h-[1px] bg-[#0d3d3d]/30" />
        <svg viewBox="0 0 16 16" className="w-2 h-2 text-[#0d3d3d]/30" fill="currentColor">
          <polygon points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6" />
        </svg>
        <span className="block w-8 h-[1px] bg-[#0d3d3d]/30" />
      </div>

      <h3 className="text-[#0d3d3d] text-xl md:text-3xl lg:text-4xl text-center">Coming soon...</h3>

      <p className="text-[#0d3d3d]/50 text-md text-center leading-relaxed max-w-[300px]">
        Discover the charm of Khachi Darbaar Resort, where heritage meets nature.
      </p>

      <a
        href="#"
        className="mt-2 flex items-center gap-2 border border-[#0d3d3d]/50 text-[#0d3d3d]/90
                   text-[9px] tracking-[0.25em] uppercase px-5 py-2 rounded-full
                   hover:bg-[#0d3d3d] hover:text-white transition-all duration-300"
      >
        Whats Included
        <svg
          viewBox="0 0 12 12"
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M1 6h10M7 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

export default function ComingSoon() {
  return (
    <section className="w-full">
      <ComingSoonPanel align="center" />

      {/* ── Row 1: 4 Category Cards ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
        {categories.map((cat) => (
          <div
            key={cat.number}
            className="relative h-64 md:h-120 overflow-hidden group cursor-pointer"
          >
            {/* Dark mountain bg — replace with real images per category */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${cat.image}')` }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0a2535]/70 group-hover:bg-[#0a2535]/50 transition-all duration-500" />

            {/* Logo watermark */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-60">
              <NextImage
                src="/images/logo.png"
                alt="logo"
                width={32}
                height={32}
                className="object-contain brightness-0 invert"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-between p-5">
              <div />
              <h3 className="text-white text-lg md:text-xl font-light leading-snug whitespace-pre-line">
                {cat.title}
              </h3>
              <span className="text-white/30 text-[10px] tracking-[0.3em]">{cat.number}</span>
            </div>

            {/* Hover border accent */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* ── Row 2: Coming Soon left + Image right ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-120">
        <ComingSoonPanel align="left" />
        <div className="relative h-64 md:h-auto overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/coming-soon1.jpeg')" }}
          />
        </div>
      </div>

      {/* ── Row 3: Image left + Coming Soon right ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-120">
        <div className="relative h-64 md:h-auto overflow-hidden order-2 md:order-1">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/coming-soon2.jpeg')" }}
          />
        </div>
        <div className="order-1 md:order-2">
          <ComingSoonPanel align="right" />
        </div>
      </div>
    </section>
  );
}
