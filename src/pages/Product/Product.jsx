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
      className="product-luxe relative min-h-screen overflow-hidden"
      ref={productRef}
    >
      <div className="product-luxe-texture" />
      <div className="product-luxe-glow" />
      <div className="product-luxe-vignette" />
      <SparkleIcon className="product-sparkle hidden sm:block" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
        <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="product-copy flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#f6c244]/70" />
              <span className="product-eyebrow text-[11px] font-semibold uppercase text-[#f6c244]">
                Signature Batch
              </span>
            </div>

            <h1 className="product-title text-4xl font-semibold text-[#fff3d6] sm:text-5xl lg:text-6xl">
              Golden Pottery Ghee
            </h1>

            <p className="max-w-xl text-sm text-[#f7e6c2]/85 sm:text-base">
              Slow-cooked, nutty, and deeply aromatic. A spoonful of comfort for every meal.
            </p>

            <div className="flex flex-wrap items-end gap-4">
              <span className="product-price text-3xl font-semibold text-[#f6c244] sm:text-4xl">
                Rs 1,999
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-[#f7e6c2]/70">
                1999 rupees
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="btn-gold rounded-xl px-5 py-3 text-sm font-semibold">
                Buy Now
              </button>
              <button className="btn-outline rounded-xl px-5 py-3 text-sm font-semibold">
                View Details
              </button>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px]">
              <span className="badge-gold rounded-full px-3 py-1">Small batch</span>
              <span className="badge-gold rounded-full px-3 py-1">Hand churned</span>
              <span className="badge-gold rounded-full px-3 py-1">Gift ready</span>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-2 text-[11px] uppercase tracking-[0.2em] text-[#f7e6c2]/75">
              <div className="product-feature">
                <span className="product-feature-icon">
                  <PotIcon />
                </span>
                Small batch
              </div>
              <div className="product-feature">
                <span className="product-feature-icon">
                  <ChurnIcon />
                </span>
                Hand churned
              </div>
              <div className="product-feature">
                <span className="product-feature-icon">
                  <GiftIcon />
                </span>
                Gift ready
              </div>
            </div>
          </div>

          <div className="product-visual flex flex-col items-center gap-6 lg:items-end">
            <div className="relative flex w-full items-center justify-center">
              <div className="product-image-glow" />
              <div className="product-image-base" />
              <img
                src={activeImage.image}
                alt={activeImage.name}
                className="product-image w-full max-w-[520px] animate-float object-contain"
                loading="lazy"
              />
              <img
                src={activeImage.image}
                alt=""
                aria-hidden="true"
                className="product-image-reflection w-full max-w-[520px] object-contain"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
              {imageOptions.map((option) => {
                const isActive = option.id === activeImage.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setActiveImage(option)}
                    className={`choice-pill rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] ${
                      isActive ? "is-active" : ""
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

function PotIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M6 9h12l-1.2 9.2a3 3 0 0 1-3 2.6H10.2a3 3 0 0 1-3-2.6L6 9Z" />
      <path d="M9 6h6" />
      <path d="M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M5 9h14" />
    </svg>
  );
}

function ChurnIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 16c2.5-2 6-2 8.5 0s6 2 7.5 0" />
      <path d="M7 13c2-1.6 4.7-1.6 6.8 0 2 1.6 4.7 1.6 6.2 0" />
      <path d="M6 10c2-1.6 4.7-1.6 6.8 0 2 1.6 4.7 1.6 6.2 0" />
      <path d="M12 4v3" />
      <path d="M9.5 7h5" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 11h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
      <path d="M4 11h16" />
      <path d="M12 11v10" />
      <path d="M7 8c0-1.4 1.1-2.5 2.5-2.5 1.2 0 2.1.7 2.5 1.6.4-.9 1.3-1.6 2.5-1.6C16.9 5.5 18 6.6 18 8c0 1.8-2.2 3-6 3-3.8 0-6-1.2-6-3Z" />
    </svg>
  );
}

function SparkleIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M60 16l8 20 20 8-20 8-8 20-8-20-20-8 20-8 8-20Z" />
      <path d="M92 72l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" />
    </svg>
  );
}
