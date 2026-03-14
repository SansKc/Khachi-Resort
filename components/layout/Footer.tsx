import NextImage from 'next/image';

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center w-full min-h-[600px]"
      style={{ backgroundImage: "url('/images/history-bg.jpeg')" }}
    >
      {/* Gradient overlay — white at top, fades to transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-10 max-w-3xl mx-auto gap-6">
        <h2 className="text-[#0d3d3d] text-3xl md:text-4xl font-light">Plan your escape today</h2>

        <p className="text-[#0d3d3d]/60 text-sm leading-relaxed max-w-md">
          Reach out to us and let us craft the perfect retreat for you at Khachi Darbaar Resort.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&to=YOUR_EMAIL@gmail.com&su=Booking%20Enquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#0d3d3d] text-[#0d3d3d] text-[10px] tracking-[0.3em]
                     uppercase px-10 py-3 hover:bg-[#0d3d3d] hover:text-white
                     transition-all duration-300 rounded-full"
        >
          Contact Us Now
        </a>

        <div className="w-64 border-t border-[#0d3d3d]/20 my-2" />

        <div className="flex flex-col md:flex-row items-center gap-3 text-[#0d3d3d]/50 text-sm">
          <a
            href="tel:+977XXXXXXXXXX"
            className="hover:text-[#0d3d3d] transition-colors duration-200"
          >
            +977 XX XXXX XXXX
          </a>
          <span className="hidden md:block w-px h-3 bg-[#0d3d3d]/20" />
          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="hover:text-[#0d3d3d] transition-colors duration-200"
          >
            YOUR_EMAIL@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 w-full bg-white border-t border-[#0d3d3d]/10 px-6 py-4 mt-64">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
          {/* Email input */}
          <div className="flex items-center border border-[#0d3d3d]/20 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-2 text-sm text-[#0d3d3d] placeholder:text-[#0d3d3d]/30
                         outline-none w-48 bg-transparent"
            />
            <button className="px-3 text-[#0d3d3d]/50 hover:text-[#0d3d3d] transition-colors duration-200">
              <svg
                viewBox="0 0 12 12"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M1 6h10M7 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Contact info */}
          <div className="flex items-center gap-6 text-[#0d3d3d]/50 text-xs flex-wrap justify-center">
            <div className="flex items-center gap-1.5">
              <svg
                viewBox="0 0 16 16"
                className="w-3 h-3 text-[#0d3d3d]/40 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="3" width="12" height="10" rx="1.5" />
                <path d="M2 5l6 4 6-4" strokeLinecap="round" />
              </svg>
              <span>YOUR_EMAIL@gmail.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                viewBox="0 0 16 16"
                className="w-3 h-3 text-[#0d3d3d]/40 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.49-2.01-4.5-4.5-4.5z" />
                <circle cx="8" cy="6" r="1.5" />
              </svg>
              <span>Argakhachi, Lumbini Province, Nepal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                viewBox="0 0 16 16"
                className="w-3 h-3 text-[#0d3d3d]/40 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M3 2.5c0-.28.22-.5.5-.5h2.17c.22 0 .42.15.48.36l.75 2.5a.5.5 0 01-.2.56L5.5 6.5a7.5 7.5 0 003 3l1.08-1.2a.5.5 0 01.56-.2l2.5.75c.21.06.36.26.36.48V11.5a.5.5 0 01-.5.5C6.4 12 2 7.6 2 3a.5.5 0 01.5-.5H3z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>+977 XX XXXX XXXX</span>
            </div>
          </div>

          {/* Logo */}
          <NextImage
            src="/images/logo.png"
            alt="Khachi Darbaar Resort"
            width={56}
            height={56}
            className="object-contain brightness-0"
          />
        </div>
      </div>
    </footer>
  );
}
