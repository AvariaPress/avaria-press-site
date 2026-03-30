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
        subhook: "Based on a true account in the Western District of North Carolina",
        note: "A record constructed by the person living it, while still unfolding.",
        bonus: "Pre-orders include an early release excerpt.",
        releaseWindow: "Summer 2026",
        coverImage: "/book-cover-front.jpg",
        backCoverImage: "/book-cover-back.jpg",
      };

      const OFFERS = [
        {
          name: "Digital Edition",
          price: "$8.99",
          description: "Delivered digitally upon release (Summer 2026)",
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
                        className="min-h-screen text-[#F5F1E8]"
                        style={{
                          backgroundColor: "#050505",
                          backgroundImage: `
                            linear-gradient(to bottom, rgba(5,5,5,0.68), rgba(5,5,5,0.90)),
                            radial-gradient(circle at 50% 10%, rgba(255,255,255,0.045), rgba(255,255,255,0) 38%),
                            url('/courthouse-bg.png')
                          `,
                          backgroundSize: "cover, auto, cover",
                          backgroundPosition: "center, top center, center top",
                          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                        }}
                      >
            <style>{`
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
            `}</style>

            <div className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:px-8">
              <header className="mb-8 h-6" />

              <div className="ml-3 mt-4 text-[11px] uppercase tracking-[0.28em] text-[#C6A85A]/70 md:ml-8">
                Avaria Press
              </div>

              <div className="mt-8 flex items-center justify-center gap-5 px-4">
                <div className="h-px w-24 bg-[#C6A85A]/25" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#C6A85A]/90" />
                <div className="h-px w-24 bg-[#C6A85A]/25" />
              </div>

                <div className="pointer-events-none relative z-10 mb-[-18px] mt-6 flex justify-center md:mb-[-24px] md:mt-8">
                  <img
                    src={BOOK.coverImage}
                    alt="Book cover"
                    className="relative block w-[380px] max-w-[80vw] rounded-[18px] md:w-[315px] md:max-w-[38vw]"
                    style={{
                      animation: "coverFloat 6.5s ease-in-out infinite",
                      boxShadow:
                        "0 34px 84px rgba(0,0,0,0.46), 0 8px 24px rgba(0,0,0,0.22)",
                      zIndex: 1,
                    }}
                  />
              </div>

              <section
                className="relative overflow-hidden rounded-[32px] border border-[#C6A85A]/20 px-6 pb-8 pt-12 md:px-10 md:pb-10 md:pt-14"
                style={{
                  background:
                    "radial-gradient(circle at top center, rgba(255,255,255,0.06), rgba(255,255,255,0) 36%), linear-gradient(145deg, rgba(14,14,14,0.96), rgba(24,24,24,0.82))",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.32)",
                }}
              >
                <div className="relative z-10">
                  <div className="mb-7 text-[12px] uppercase tracking-[0.22em] text-[#F5F1E8]/58">
                    Pre-orders now open
                  </div>

                  <h1
                    className="max-w-[92%] text-[clamp(40px,6.7vw,78px)] leading-[1.02] tracking-[-0.02em] text-[#F5F1E8]"
                    style={{ fontFamily: "var(--font-serif), serif" }}
                  >
                    {BOOK.title}
                  </h1>

                  <div className="mt-7 max-w-[75%]">
                    <p
                      className="m-0 text-[clamp(22px,3vw,28px)] leading-[1.28] text-[#F5F1E8]"
                      style={{ fontFamily: "var(--font-serif), serif" }}
                    >
                      {BOOK.hook}
                    </p>

                    <p
                      className="mb-0 mt-4 text-[15px] leading-[1.45] tracking-[0.045em] text-[#C6A85A]/90 md:text-[16px]"
                      style={{ fontFamily: "var(--font-serif), serif" }}
                    >
                      {BOOK.subhook}
                    </p>

                    <p
                      className="mb-0 mt-5 text-[18px] leading-[1.5] text-[#F5F1E8]/86 italic md:text-[19px]"
                      style={{ fontFamily: "var(--font-serif), serif" }}
                    >
                      {BOOK.note}
                    </p>
                  </div>

                  <div className="mt-9">
                    <a
                      href={OFFERS[2].href}
                      className="inline-block rounded-full bg-[#C6A85A] px-9 py-4 text-[17px] font-semibold text-[#111] no-underline transition-transform duration-200 hover:-translate-y-[1px]"
                      style={{
                        boxShadow: "0 14px 32px rgba(0,0,0,0.22)",
                      }}
                    >
                      Reserve signed copy
                    </a>
                    <div className="mt-3 text-[13px] tracking-[0.01em] text-[#C6A85A]/72">
                      * Pre-orders include an early release excerpt.
                    </div>

                    <div className="mt-4 text-[14px] text-[#F5F1E8]/62">
                      {BOOK.releaseWindow}
                    </div>
                  </div>
                </div>
              </section>

                      <section className="mt-8 md:mt-10">
                <h2
                  className="mb-6 mt-2 text-[30px] leading-[1.08] text-[#C6A85A]"
                  style={{ fontFamily: "var(--font-serif), serif" }}
                >
                  Select your edition
                </h2>

                <div className="grid gap-5">
                  {OFFERS.map((offer) => (
                    <div
                      key={offer.name}
                      className="rounded-[28px] border px-7 py-7"
                      style={
                        offer.featured
                          ? {
                              background: "rgba(70,70,70,0.70)",
                              borderColor: "rgba(198,168,90,0.42)",
                              boxShadow:
                                "0 20px 44px rgba(198,168,90,0.06), 0 18px 40px rgba(0,0,0,0.20)",
                            }
                          : {
                              background: "rgba(48,48,48,0.58)",
                              borderColor: "rgba(198,168,90,0.22)",
                              boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
                            }
                      }
                    >
                      <div
                        className="mb-2 text-[30px] leading-[1.04] text-[#F5F1E8]"
                        style={{ fontFamily: "var(--font-serif), serif" }}
                      >
                        {offer.name}
                      </div>

                      <div
                        className="mb-4 text-[34px] leading-none text-[#C6A85A]"
                        style={{ fontFamily: "var(--font-serif), serif" }}
                      >
                        {offer.price}
                      </div>

                      <p className="mb-6 text-[17px] leading-[1.65] text-[#F5F1E8]/92">
                        {offer.description}
                      </p>

                      <a
                        href={offer.href}
                        className="inline-block rounded-full px-7 py-4 text-[17px] leading-[1.2] no-underline transition-transform duration-200 hover:-translate-y-[1px]"
                        style={
                          offer.featured
                            ? {
                                backgroundColor: "#C6A85A",
                                color: "#111",
                                fontWeight: 600,
                                boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                              }
                            : {
                                backgroundColor: "#F5F1E8",
                                color: "#111",
                                fontWeight: 500,
                                border: "1px solid rgba(198,168,90,0.32)",
                              }
                        }
                      >
                        {offer.cta}
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <div className="pointer-events-none relative z-10 mt-[60px] mb-[-24px] md:mt-[130px] md:mb-[-32px]">
              <div className="flex justify-center">
                <div
                  className="relative md:translate-x-[-40px]"
                  style={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "-18px",
                      borderRadius: "28px",
                      background:
                        "radial-gradient(circle at 50% 45%, rgba(198,168,90,0.16), rgba(198,168,90,0.04) 42%, rgba(198,168,90,0) 72%)",
                      filter: "blur(14px)",
                      opacity: 0.9,
                      zIndex: 0,
                    }}
                  />

                  <img
                    src="/author-portrait.jpg"
                    alt="Author portrait"
                    className="relative block w-[380px] max-w-[80vw] rounded-[18px] md:w-[315px] md:max-w-[38vw]"
                      style={{
                        animation: "portraitFloat 6.5s ease-in-out infinite",
                        boxShadow:
                          "0 36px 90px rgba(0,0,0,0.48), 0 8px 28px rgba(0,0,0,0.22)",
                        zIndex: 1,
                      }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      right: "-8px",
                      bottom: "-45px",
                      fontFamily: "'Great Vibes', cursive",
                      fontSize: "30px",
                      color: "#C6A85A",
                      opacity: 0.92,
                      transform: "rotate(-2deg)",
                      lineHeight: 1,
                      pointerEvents: "none",
                      zIndex: 2,
                    }}
                  >
                    — A.O.
                  </div>
                </div>
              </div>
            </div>

            <section
              className="rounded-[32px] border border-[#C6A85A]/18 px-7 pb-9 pt-14 md:px-10"
              style={{
                background:
                  "radial-gradient(circle at center top, rgba(255,255,255,0.05), rgba(255,255,255,0) 34%), linear-gradient(145deg, rgba(58,58,58,0.82), rgba(88,88,88,0.78))",
                boxShadow: "0 18px 40px rgba(0,0,0,0.14)",
              }}
            >
              <div className="mt-12 max-w-[33rem] text-[#F5F1E8]/96">
                <p className="mb-[18px] mt-0 text-[17px] leading-[1.75]">
                  Thank you for being here.
                </p>

                <p className="mb-[18px] text-[17px] leading-[1.75]">
                  This is not merely a story. It is my lived experience.
                </p>

                <p className="mb-[18px] text-[17px] leading-[1.75]">
                  What began with a violation of my civil rights became a journey through truth and resilience.
                </p>

                <p className="mb-[18px] text-[17px] leading-[1.75]">
                  I’m grateful to have witnessed it up close, and blessed to turn that record into art.
                </p>

                <p className="mb-0 text-[17px] leading-[1.75] italic">
                  May this work serve as proof that all it takes is one yes, even if that yes is your own.
                </p>
              </div>
            </section>
            </div>
            </main>
            );
            }