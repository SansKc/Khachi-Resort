export default function Experiences() {
  const features = [
    {
      heading: 'Calm nature with open, scenic views.',
      tag: 'Tranquil Natural Surroundings',
      cta: 'Discover',
      href: '#discover',
    },
    {
      heading: 'Arghakhanchi, near Butwal, Nepal.',
      tag: 'Ideal Destination Location',
      cta: 'Experience',
      href: '#experience',
    },
    {
      heading: 'Authentic flavors, thoughtfully crafted.',
      tag: 'Signature Fine Dining',
      cta: 'Dine',
      href: '#dine',
    },
  ];

  return (
    <section className="w-full bg-[#0d5c6b] px-6 py-28 flex flex-col items-center text-center">
      {/* Eyebrow */}
      <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase mb-8">
        Welcome to Khachi Darbar Resort
      </p>

      {/* Main Headline */}
      <h2 className="text-white text-xl md:text-4xl lg:text-5xl  font-light leading-snug max-w-4xl mb-24">
        Luxury stays, serene surroundings, and heartfelt hospitality—crafted for memorable escapes.
      </h2>

      {/* Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 w-full max-w-5xl mb-20">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <h3 className="text-white text-xl md:text-2xl font-light leading-snug max-w-[240px]">
              {f.heading}
            </h3>
            <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase">{f.tag}</p>
            <a
              href={f.href}
              className="mt-2 border border-white/40 text-white text-[10px] tracking-[0.25em] uppercase
                         px-6 py-2 rounded-full hover:bg-white hover:text-[#0d5c6b] transition-all duration-300"
            >
              {f.cta}
            </a>
          </div>
        ))}
      </div>

      {/* What's Included CTA */}
      <a
        href="#whats-included"
        className="flex items-center gap-3 border border-white/40 text-white text-[10px] tracking-[0.25em] uppercase
                   px-6 py-3 rounded-full hover:bg-white hover:text-[#0d5c6b] transition-all duration-300"
      >
        Whats Included
        <svg
          viewBox="0 0 20 20"
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
