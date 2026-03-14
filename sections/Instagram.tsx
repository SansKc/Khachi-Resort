const posts = [
  { id: 1, image: '/images/insta-1.jpg', type: 'image' },
  { id: 2, image: '/images/insta-2.jpg', type: 'video' },
  { id: 3, image: '/images/insta-3.jpg', type: 'image' },
  { id: 4, image: '/images/insta-4.jpg', type: 'image' },
];

export default function Instagram() {
  return (
    <section className="w-full bg-white px-6 py-30 flex flex-col items-center gap-10">

      {/* Header */}
      <div className="text-center flex flex-col gap-3">
        <h2 className="text-[#0d3d3d] text-3xl md:text-4xl font-light">
          Follow us on Instagram
        </h2>
        <p className="text-[#0d3d3d]/50 text-md leading-relaxed">
          Stay connected to the beauty and magic of
          <br />
          Khachi Darbaar Resort.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
        {posts.map((post) => (
          <a
            key={post.id}
            href="https://www.instagram.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${post.image}')` }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

            {/* Type icon — top right */}
            <div className="absolute top-3 right-3 text-white/80">
              {post.type === 'video' ? (
                /* Video play button */
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg viewBox="0 0 12 12" className="w-3 h-3 text-white" fill="currentColor">
                    <path d="M3 2l7 4-7 4V2z" />
                  </svg>
                </div>
              ) : (
                /* Image icon */
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="https://www.instagram.com/YOUR_HANDLE"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 border border-[#0d3d3d]/30 text-[#0d3d3d] text-[10px]
                   tracking-[0.25em] uppercase px-8 py-3 rounded-full
                   hover:bg-[#0d3d3d] hover:text-white transition-all duration-300"
      >
        Khachi Instagram
        <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 6h10M7 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

    </section>
  );
}