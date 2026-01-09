import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imageOptions = [
  {
    id: "classic",
    name: "Classic Pot",
    image: "/1x.png",
  },
  {
    id: "reserve",
    name: "Reserve Pot",
    image: "/2x.png",
  },
];

export default function Product() {
  const [activeImage, setActiveImage] = useState(imageOptions[0]);
  const productRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".product-copy > *", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".product-copy",
          start: "top 80%",
        },
      });

      gsap.from(".product-visual", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-visual",
          start: "top 85%",
        },
      });
    }, productRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#39251a] text-[#f7e6c2]"
      style={{ fontFamily: '"Trebuchet MS", "Segoe UI", sans-serif' }}
      ref={productRef}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,242,212,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(246,194,68,0.16),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <section className="flex flex-col items-center gap-10 lg:flex-row lg:items-center">
          <div className="product-copy w-full max-w-xl space-y-6 lg:max-w-none lg:flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f6c244]">
              Signature Batch
            </p>
            <h1
              className="text-4xl font-semibold text-[#fff2d4] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Golden Pottery Ghee
            </h1>
            <p className="max-w-xl text-sm text-[#f7e6c2]/85 sm:text-base">
              Slow-cooked, nutty, and deeply aromatic. A spoonful of comfort for every meal.
            </p>

            <div className="flex flex-wrap items-end gap-4">
              <span className="text-3xl font-semibold text-[#f6c244] sm:text-4xl">
                Rs 1,999
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#f7e6c2]/70">
                1999 rupees
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl bg-[#f6c244] px-5 py-3 text-sm font-semibold text-[#39251a] transition hover:translate-y-[1px] hover:shadow">
                Buy Now
              </button>
              <button className="rounded-xl border border-[#f7e6c2]/40 px-5 py-3 text-sm font-semibold text-[#f7e6c2] transition hover:border-[#f7e6c2]/70">
                View Details
              </button>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-[#f7e6c2]/75">
              <span className="rounded-full border border-[#f7e6c2]/25 px-3 py-1">
                Small batch
              </span>
              <span className="rounded-full border border-[#f7e6c2]/25 px-3 py-1">
                Hand churned
              </span>
              <span className="rounded-full border border-[#f7e6c2]/25 px-3 py-1">
                Gift ready
              </span>
            </div>
          </div>

          <div className="product-visual flex w-full flex-col items-center gap-6 lg:w-[45%]">
            <img
              src={activeImage.image}
              alt={activeImage.name}
              className="w-full max-w-[520px] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
              loading="lazy"
            />

            <div className="flex flex-wrap justify-center gap-3">
              {imageOptions.map((option) => {
                const isActive = option.id === activeImage.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setActiveImage(option)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                      isActive
                        ? "border-[#f6c244] text-[#f6c244]"
                        : "border-[#f7e6c2]/30 text-[#f7e6c2]/70 hover:border-[#f7e6c2]/60 hover:text-[#f7e6c2]"
                    }`}
                  >
                    {option.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
