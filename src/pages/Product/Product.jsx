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
  {
    id: "heritage",
    name: "Heritage Pot",
    image: "/3x.png",
  },
];

export default function Product() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef(null);
  const productRef = useRef(null);
  const activeImage = imageOptions[activeIndex];

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const startImageTransition = (nextDirection) => {
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    setDirection(nextDirection);
    setPrevIndex(activeIndex);

    const nextIndex =
      nextDirection === "next"
        ? (activeIndex + 1) % imageOptions.length
        : (activeIndex - 1 + imageOptions.length) % imageOptions.length;

    setActiveIndex(nextIndex);

    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = window.setTimeout(() => {
      setPrevIndex(null);
      setIsTransitioning(false);
    }, 520);
  };

  const handlePrevImage = () => {
    startImageTransition("prev");
  };

  const handleNextImage = () => {
    startImageTransition("next");
  };

  const slideInClass =
    prevIndex === null
      ? ""
      : direction === "next"
      ? "product-image-slide-in-right"
      : "product-image-slide-in-left";

  const slideOutClass =
    direction === "next"
      ? "product-image-slide-out-left"
      : "product-image-slide-out-right";

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
            <div className="product-image-stage">
              <button
                type="button"
                onClick={handlePrevImage}
                className="product-image-nav product-image-nav--left"
                aria-label="Previous product image"
                disabled={isTransitioning}
              >
                <ArrowIcon direction="left" />
              </button>
              <div className="product-image-glow" />
              <div className="product-image-base" />
              {prevIndex !== null && (
                <div className={`product-image-slide ${slideOutClass}`}>
                  <div className="product-image-stack">
                    <img
                      src={imageOptions[prevIndex].image}
                      alt=""
                      aria-hidden="true"
                      className="product-image object-contain"
                    />
                    <img
                      src={imageOptions[prevIndex].image}
                      alt=""
                      aria-hidden="true"
                      className="product-image-reflection object-contain"
                    />
                  </div>
                </div>
              )}
              <div className={`product-image-slide ${slideInClass}`}>
                <div className="product-image-stack animate-float">
                  <img
                    src={activeImage.image}
                    alt={activeImage.name}
                    className="product-image object-contain"
                    loading="lazy"
                  />
                  <img
                    src={activeImage.image}
                    alt=""
                    aria-hidden="true"
                    className="product-image-reflection object-contain"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleNextImage}
                className="product-image-nav product-image-nav--right"
                aria-label="Next product image"
                disabled={isTransitioning}
              >
                <ArrowIcon direction="right" />
              </button>
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

function ArrowIcon({ direction = "right" }) {
  const isLeft = direction === "left";
  return (
    <svg
      className={`h-4 w-4 ${isLeft ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h12" />
      <path d="m11 5 5 5-5 5" />
    </svg>
  );
}
