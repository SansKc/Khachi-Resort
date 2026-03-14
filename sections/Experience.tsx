export default function Experiences() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/experiences-bg.jpeg')" }}
      />

      {/* Light overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center">
        {/* Header — centered */}
        <div className="text-center max-w-2xl mb-16">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            One destination,
            <br />
            two experiences
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
            Discover the charm of Khachi Darbaar Resort, where heritage meets nature. Whether you
            visit for a peaceful day escape or choose to stay overnight, every moment offers
            comfort, scenic beauty, and authentic hospitality. From calm surroundings to local
            flavors and breathtaking views, Khachi Darbaar is your perfect retreat to relax,
            reconnect, and recharge.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3.5xl">
          {/* Stay Experience — dark teal */}
          <div className="bg-[#0d5c6b]/90 backdrop-blur-sm rounded-2xl p-10 flex flex-col items-center text-center gap-6">
            {/* Moon icon */}
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>

            <h3 className="text-white text-3xl md:text-4xl font-light leading-tight">
              Stay
              <br />
              Experience
            </h3>

            <p className="text-white/60 text-sm leading-relaxed font-light max-w-xs">
              Immerse yourself in the complete Khachi Darbaar experience with comfortable rooms,
              serene evenings, delicious dining, and uninterrupted mountain views. Ideal for guests
              seeking rest, privacy, and a deeper connection with nature and culture.
            </p>

            <a
              href="#stay"
              className="mt-4 border border-white/40 text-white text-[10px] tracking-[0.25em] uppercase
                         px-8 py-3 rounded-full hover:bg-white hover:text-[#0d3d3d] transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Day Experience — light */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 flex flex-col items-center text-center gap-6">
            {/* Sun icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-10 h-10 text-[#0d3d3d]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                strokeLinecap="round"
              />
            </svg>

            <h3 className="text-[#0d3d3d] text-3xl md:text-4xl font-light leading-tight">
              Day
              <br />
              Experience
            </h3>

            <p className="text-[#0d3d3d]/60 text-sm leading-relaxed font-light max-w-xs">
              Enjoy the beauty of Khachi Darbaar without staying overnight. Spend your day exploring
              the resort, relaxing in nature, enjoying meals, and creating memories in a calm,
              refreshing environment — perfect for short escapes and family visits.
            </p>

            <a
              href="#day"
              className="mt-4 border border-[#0d3d3d]/40 text-[#0d3d3d] text-[10px] tracking-[0.25em] uppercase
                         px-8 py-3 rounded-full hover:bg-[#0d3d3d] hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Slide indicator */}
        <div className="mt-10 bg-[#0d3d3d]/60 text-white/60 text-xs tracking-widest px-4 py-2 rounded-full">
          1 / 1
        </div>
      </div>
    </section>
  );
}
