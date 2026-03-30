"use client";

import { useState } from "react";

export default function ThankYouPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TEMP: replace later with Supabase / email service
    console.log("Captured email:", email);

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_60px_rgba(212,175,55,0.08)]">

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-serif mb-4 text-center">
          Your copy is reserved.
        </h1>

        {/* Confirmation */}
        <p className="text-white/70 text-center mb-8">
          Your order has been received. You’ll receive a confirmation email shortly.
        </p>

        {/* Product line */}
        <div className="text-center mb-10">
          <p className="text-lg font-medium">
            Digital Edition (Early Release)
          </p>
          <p className="text-white/60 text-sm mt-1">
            Delivered Summer 2026
          </p>
        </div>

        {/* Narrative */}
        <div className="text-center mb-10 space-y-4 text-white/80 leading-relaxed">
          <p>This is not merely a story.</p>
          <p>It is a record still unfolding.</p>
          <p>
            What you’ve reserved is more than a book.
            <br />
            It is a front-row seat to a case still moving through the system.
          </p>
        </div>

        {/* Email Capture */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">
                Stay updated as the case unfolds
              </h2>
              <p className="text-white/60 text-sm">
                Early readers will receive excerpts, updates, and developments before public release.
              </p>
            </div>

            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white placeholder-white/40"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:opacity-90 transition"
            >
              Get updates
            </button>
          </form>
        ) : (
          <div className="text-center text-white/80">
            You’re in. Updates will be sent as the case develops.
          </div>
        )}

        {/* Closing */}
        <div className="text-center mt-10 text-white/50 italic text-sm">
          May this work serve as proof that all it takes is one yes, even if that yes is your own.
        </div>
      </div>
    </main>
  );
}