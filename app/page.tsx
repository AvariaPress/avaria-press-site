import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "If I Ever Need an Attorney, I’ll Keep You in Mind | Avaria Press",
  description:
    "Pre-order If I Ever Need an Attorney, I’ll Keep You in Mind by Andrew O’Darius Rollinson.",
};

const BOOK = {
  title: "If I Ever Need an Attorney, I’ll Keep You in Mind",
  author: "Andrew O’Darius Rollinson",
  hook: "Four years. No law degree. A federal case.",
  subhook:
    "Based on a true account in the Western District of North Carolina",
  note: "A record constructed by the person living it, while still unfolding.",
  bonus: "Pre-orders include an early release excerpt.",
  releaseWindow: "Summer 2026",
  coverImage: "/book-cover-front.jpg",
  authorImage: "/Facetune_31-03-2026-23-21-21.jpeg",
};

const OFFERS = [
  {
    name: "Digital Edition",
    price: "$8.99",
    description: "Delivered digitally upon release (Summer 2026).",
    cta: "Reserve digital copy",
    href: "https://buy.stripe.com/REPLACE_EBOOK_LINK",
    featured: false,
  },
  {
    name: "Paperback Edition",
    price: "$19.99",
    description: "Printed and shipped (Fall 2026).",
    cta: "Reserve paperback",
    href: "https://buy.stripe.com/REPLACE_PAPERBACK_LINK",
    featured: false,
  },
  {
    name: "Signed First Edition",
    price: "$34.99",
    description: "Limited availability.",
    cta: "Reserve signed edition",
    href: "https://buy.stripe.com/REPLACE_SIGNED_LINK",
    featured: true,
  },
];

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "#F5F1E8",
        backgroundColor: "#050505",
        backgroundImage: `
          linear-gradient(to bottom, rgba(5,5,5,0.76), rgba(5,5,5,0.94)),
          radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04), rgba(255,255,255,0) 34%),
          url('/courthouse-bg.png')
        `,
        backgroundSize: "cover, auto, cover",
        backgroundPosition: "center, top center, center top",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      }}
    >
      <style>{`
        .ap-shell {
          width: min(1120px, calc(100vw - 32px));
          margin: 0 auto;
          padding: 20px 0 88px;
        }

        .ap-kicker {
          margin-top: 8px;
          text-align: center;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(198,168,90,0.72);
        }

        .ap-rule {
          margin: 22px auto 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
        }

        .ap-rule-line {
          width: 88px;
          height: 1px;
          background: rgba(198,168,90,0.24);
        }

        .ap-rule-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(198,168,90,0.92);
        }

        .ap-hero {
          display: grid;
          grid-template-columns: minmax(280px, 460px) minmax(0, 1fr);
          gap: 34px;
          align-items: center;
        }

        .ap-cover-wrap {
          display: flex;
          justify-content: center;
        }

        .ap-cover {
          width: min(100%, 420px);
          height: auto;
          display: block;
          border-radius: 18px;
          box-shadow:
            0 34px 84px rgba(0,0,0,0.46),
            0 8px 24px rgba(0,0,0,0.22);
          animation: floatCover 6.5s ease-in-out infinite;
        }

        .ap-panel {
          border: 1px solid rgba(198,168,90,0.20);
          border-radius: 32px;
          background:
            radial-gradient(circle at top center, rgba(255,255,255,0.06), rgba(255,255,255,0) 36%),
            linear-gradient(145deg, rgba(14,14,14,0.96), rgba(24,24,24,0.82));
          box-shadow: 0 30px 80px rgba(0,0,0,0.32);
          overflow: hidden;
        }

        .ap-panel-inner {
          padding: 34px 28px 34px;
        }

        .ap-pre {
          margin: 0 0 18px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(245,241,232,0.58);
        }

        .ap-title {
          margin: 0;
          max-width: 12ch;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(38px, 7vw, 78px);
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: #F5F1E8;
        }

        .ap-copy {
          margin-top: 24px;
          max-width: 36rem;
        }

        .ap-hook {
          margin: 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(22px, 3vw, 28px);
          line-height: 1.28;
          color: #F5F1E8;
        }

        .ap-subhook {
          margin: 14px 0 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: 15px;
          line-height: 1.45;
          letter-spacing: 0.045em;
          color: rgba(198,168,90,0.92);
        }

        .ap-note {
          margin: 18px 0 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: 18px;
          line-height: 1.55;
          font-style: italic;
          color: rgba(245,241,232,0.86);
        }

        .ap-cta-wrap {
          margin-top: 28px;
        }

        .ap-primary-btn {
          display: inline-block;
          border-radius: 999px;
          padding: 15px 28px;
          background: #C6A85A;
          color: #111111;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 14px 32px rgba(0,0,0,0.22);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .ap-primary-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.26);
        }

        .ap-bonus {
          margin-top: 12px;
          font-size: 13px;
          color: rgba(198,168,90,0.74);
        }

        .ap-release {
          margin-top: 14px;
          font-size: 14px;
          color: rgba(245,241,232,0.62);
        }

        .ap-section {
          margin-top: 34px;
        }

        .ap-section-title {
          margin: 0 0 18px;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(28px, 4vw, 34px);
          line-height: 1.08;
          color: #C6A85A;
        }

        .ap-offers {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ap-offer {
          border-radius: 28px;
          border: 1px solid rgba(198,168,90,0.22);
          padding: 26px 22px;
          background: rgba(48,48,48,0.58);
          box-shadow: 0 18px 40px rgba(0,0,0,0.16);
        }

        .ap-offer.featured {
          background: rgba(70,70,70,0.70);
          border-color: rgba(198,168,90,0.42);
          box-shadow:
            0 20px 44px rgba(198,168,90,0.06),
            0 18px 40px rgba(0,0,0,0.20);
        }

        .ap-offer-name {
          margin: 0 0 10px;
          font-family: var(--font-serif), Georgia, serif;
          font-size: 28px;
          line-height: 1.05;
          color: #F5F1E8;
        }

        .ap-offer-price {
          margin: 0 0 16px;
          font-family: var(--font-serif), Georgia, serif;
          font-size: 34px;
          line-height: 1;
          color: #C6A85A;
        }

        .ap-offer-desc {
          margin: 0 0 22px;
          font-size: 16px;
          line-height: 1.65;
          color: rgba(245,241,232,0.92);
        }

        .ap-offer-btn {
          display: inline-block;
          border-radius: 999px;
          padding: 14px 22px;
          text-decoration: none;
          font-size: 16px;
          line-height: 1.2;
          transition: transform 180ms ease;
        }

        .ap-offer-btn:hover {
          transform: translateY(-1px);
        }

        .ap-offer-btn.standard {
          background: #F5F1E8;
          color: #111111;
          border: 1px solid rgba(198,168,90,0.32);
          font-weight: 500;
        }

        .ap-offer-btn.featured {
          background: #C6A85A;
          color: #111111;
          font-weight: 600;
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }

        .ap-author {
          margin-top: 42px;
          display: grid;
          grid-template-columns: minmax(280px, 420px) minmax(0, 1fr);
          gap: 34px;
          align-items: center;
        }

        .ap-author-image-wrap {
          display: flex;
          justify-content: center;
        }

        .ap-author-figure {
          position: relative;
          width: min(100%, 420px);
        }

        .ap-author-glow {
          position: absolute;
          inset: -18px;
          border-radius: 28px;
          background:
            radial-gradient(circle at 50% 45%, rgba(198,168,90,0.16), rgba(198,168,90,0.04) 42%, rgba(198,168,90,0) 72%);
          filter: blur(14px);
          opacity: 0.9;
          z-index: 0;
        }

        .ap-author-image {
          position: relative;
          z-index: 1;
          width: 100%;
          display: block;
          border-radius: 18px;
          box-shadow:
            0 36px 90px rgba(0,0,0,0.48),
            0 8px 28px rgba(0,0,0,0.22);
          animation: portraitFloat 6.5s ease-in-out infinite;
        }

        .ap-signature {
          position: absolute;
          right: -4px;
          bottom: -40px;
          z-index: 2;
          font-family: "Great Vibes", cursive;
          font-size: 30px;
          line-height: 1;
          color: #C6A85A;
          opacity: 0.82;
          transform: rotate(-2deg);
          pointer-events: none;
        }

        .ap-author-panel {
          border: 1px solid rgba(198,168,90,0.18);
          border-radius: 32px;
          background:
            radial-gradient(circle at center top, rgba(255,255,255,0.05), rgba(255,255,255,0) 34%),
            linear-gradient(145deg, rgba(58,58,58,0.82), rgba(88,88,88,0.78));
          box-shadow: 0 18px 40px rgba(0,0,0,0.14);
        }

        .ap-author-inner {
          padding: 34px 28px;
          max-width: 38rem;
        }

        .ap-author-text {
          margin: 0 0 18px;
          font-size: 17px;
          line-height: 1.75;
          color: rgba(245,241,232,0.96);
        }

        .ap-author-text:last-child {
          margin-bottom: 0;
        }

        .ap-author-text.italic {
          font-style: italic;
        }

        @keyframes floatCover {
          0% {
            transform: rotate(4.5deg) translateY(0px);
            box-shadow: 0 32px 70px rgba(0,0,0,0.42);
          }
          50% {
            transform: rotate(4.5deg) translateY(-10px);
            box-shadow: 0 44px 90px rgba(0,0,0,0.32);
          }
          100% {
            transform: rotate(4.5deg) translateY(0px);
            box-shadow: 0 32px 70px rgba(0,0,0,0.42);
          }
        }

        @keyframes portraitFloat {
          0% {
            transform: translateY(0px);
            box-shadow: 0 36px 90px rgba(0,0,0,0.48);
          }
          50% {
            transform: translateY(-10px);
            box-shadow: 0 48px 100px rgba(0,0,0,0.34);
          }
          100% {
            transform: translateY(0px);
            box-shadow: 0 36px 90px rgba(0,0,0,0.48);
          }
        }

        @media (max-width: 980px) {
          .ap-hero,
          .ap-author,
          .ap-offers {
            grid-template-columns: 1fr;
          }

          .ap-shell {
            width: min(760px, calc(100vw - 24px));
            padding-bottom: 72px;
          }

          .ap-title,
          .ap-copy {
            max-width: 100%;
          }

          .ap-cover-wrap,
          .ap-author-image-wrap {
            margin-bottom: 8px;
          }
        }

        @media (max-width: 640px) {
          .ap-shell {
            width: calc(100vw - 20px);
            padding-top: 16px;
            padding-bottom: 56px;
          }

          .ap-rule {
            margin: 18px auto 22px;
            gap: 14px;
          }

          .ap-rule-line {
            width: 56px;
          }

          .ap-panel-inner,
          .ap-author-inner {
            padding: 26px 20px 24px;
          }

          .ap-title {
            font-size: clamp(34px, 11vw, 52px);
          }

          .ap-hook {
            font-size: 21px;
          }

          .ap-note {
            font-size: 17px;
          }

          .ap-offer {
            padding: 22px 18px;
            border-radius: 24px;
          }

          .ap-offer-name {
            font-size: 24px;
          }

          .ap-offer-price {
            font-size: 30px;
          }

          .ap-author {
            gap: 26px;
          }

          .ap-signature {
            right: 2px;
            bottom: -22px;
            font-size: 26px;
          }

          .ap-author-text {
            font-size: 16px;
            line-height: 1.7;
          }
        }
      `}</style>

      <div className="ap-shell">
        <header style={{ height: 6 }} />

        <div className="ap-kicker">Avaria Press</div>

        <div className="ap-rule" aria-hidden="true">
          <div className="ap-rule-line" />
          <div className="ap-rule-dot" />
          <div className="ap-rule-line" />
        </div>

        <section className="ap-hero">
          <div className="ap-cover-wrap">
            <img
              src={BOOK.coverImage}
              alt={`${BOOK.title} book cover`}
              className="ap-cover"
            />
          </div>

          <div className="ap-panel">
            <div className="ap-panel-inner">
              <div className="ap-pre">Pre-orders now open</div>

              <h1 className="ap-title">{BOOK.title}</h1>

              <div className="ap-copy">
                <p className="ap-hook">{BOOK.hook}</p>
                <p className="ap-subhook">{BOOK.subhook}</p>
                <p className="ap-note">{BOOK.note}</p>
              </div>

              <div className="ap-cta-wrap">
                <a href={OFFERS[2].href} className="ap-primary-btn">
                  Reserve signed copy
                </a>
                <div className="ap-bonus">* {BOOK.bonus}</div>
                <div className="ap-release">{BOOK.releaseWindow}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="ap-section">
          <h2 className="ap-section-title">Select your edition</h2>

          <div className="ap-offers">
            {OFFERS.map((offer) => (
              <div
                key={offer.name}
                className={`ap-offer ${offer.featured ? "featured" : ""}`}
              >
                <h3 className="ap-offer-name">{offer.name}</h3>
                <div className="ap-offer-price">{offer.price}</div>
                <p className="ap-offer-desc">{offer.description}</p>
                <a
                  href={offer.href}
                  className={`ap-offer-btn ${
                    offer.featured ? "featured" : "standard"
                  }`}
                >
                  {offer.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="ap-author">
          <div className="ap-author-image-wrap">
            <div className="ap-author-figure">
              <div className="ap-author-glow" />
              <img
                src={BOOK.authorImage}
                alt={BOOK.author}
                className="ap-author-image"
              />
              <div className="ap-signature">— A.O.</div>
            </div>
          </div>

          <div className="ap-author-panel">
            <div className="ap-author-inner">
              <p className="ap-author-text">Thank you for being here.</p>

              <p className="ap-author-text">
                This is not merely a story. It is my lived experience.
              </p>

              <p className="ap-author-text">
                What began with a violation of my civil rights became a journey
                through truth and resilience.
              </p>

              <p className="ap-author-text">
                I’m grateful to have witnessed it up close, and blessed to turn
                that record into art.
              </p>

              <p className="ap-author-text italic">
                May this work serve as proof that all it takes is one yes, even
                if that yes is your own.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
