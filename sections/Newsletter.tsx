'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setSubmitted(true);
    // Connect to your email service here (Mailchimp, ConvertKit, etc.)
  };

  return (
    <section className="w-full bg-[#e8f4f4] px-6 py-24 flex flex-col items-center gap-8">
      {/* Envelope icon */}
      <svg
        viewBox="0 0 24 24"
        className="w-10 h-10 text-[#0d3d3d]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" strokeLinecap="round" />
      </svg>

      {/* Heading */}
      <h2 className="text-[#0d3d3d] text-3xl md:text-4xl font-light text-center leading-snug">
        Sign up and get our latest
        <br />
        offers and updates.
      </h2>

      {/* Input + Button */}
      {submitted ? (
        <div className="flex items-center gap-2 text-[#0d3d3d]/60 text-sm">
          <svg
            viewBox="0 0 20 20"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="10" cy="10" r="8" />
            <path d="M6.5 10l2.5 2.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          You're subscribed. Thank you!
        </div>
      ) : (
        <div
          className="flex items-center w-full max-w-md bg-white border border-[#0d3d3d]/10
                        rounded-full px-2 py-2 gap-2 shadow-sm"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            className="flex-1 bg-transparent px-4 text-sm text-[#0d3d3d]
                       placeholder:text-[#0d3d3d]/30 focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-[#0d3d3d] text-white text-[10px]
                       tracking-[0.2em] uppercase px-6 py-3 rounded-full
                       hover:bg-[#0a2c2c] transition-all duration-300 shrink-0"
          >
            Sign Up
            <svg
              viewBox="0 0 12 12"
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 6h10M7 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {/* Terms */}
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#0d3d3d]/40 shrink-0" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          />
        </svg>
        <p className="text-[#0d3d3d]/40 text-[11px]">
          By signing up, you agree to our{' '}
          <a href="#" className="underline hover:text-[#0d3d3d] transition-colors duration-200">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-[#0d3d3d] transition-colors duration-200">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
