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

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20 xl:max-w-[72rem] xl:px-8 xl:py-22 2xl:max-w-[80rem] 2xl:px-10 2xl:py-24">
        <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:grid-cols-[1.2fr_0.8fr] xl:gap-16 2xl:grid-cols-[1.25fr_0.75fr] 2xl:gap-20">
          <div className="product-copy order-2 flex flex-col gap-6 text-center sm:text-left lg:order-1 xl:gap-7 2xl:gap-8">
            <div className="flex items-center justify-center gap-4 sm:justify-start">
              <span className="h-[1px] w-12 bg-[#f6c244]/70" />
              <span className="product-eyebrow text-[11px] font-semibold uppercase text-[#f6c244] xl:text-[11px] 2xl:text-xs">
                Signature Batch
              </span>
            </div>

            <h1 className="product-title text-3xl font-semibold text-[#fff3d6] sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
              Golden Pottery Ghee
            </h1>

            <p className="mx-auto max-w-xl text-sm text-[#f7e6c2]/85 sm:mx-0 sm:text-base xl:max-w-2xl xl:text-base 2xl:max-w-3xl 2xl:text-lg">
              Slow-cooked, nutty, and deeply aromatic. A spoonful of comfort for every meal.
            </p>

            <div className="flex flex-wrap items-end justify-center gap-4 sm:justify-start">
              <span className="product-price text-3xl font-semibold text-[#f6c244] sm:text-4xl xl:text-4xl 2xl:text-5xl">
                Rs 1,999
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-[#f7e6c2]/70 xl:text-xs 2xl:text-sm">
                1999 rupees
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              <button className="btn-gold w-full rounded-xl px-5 py-3 text-sm font-semibold sm:w-auto xl:px-5 xl:py-3 xl:text-sm 2xl:px-6 2xl:py-4 2xl:text-base">
                Buy Now
              </button>
              <button className="btn-outline w-full rounded-xl px-5 py-3 text-sm font-semibold sm:w-auto xl:px-5 xl:py-3 xl:text-sm 2xl:px-6 2xl:py-4 2xl:text-base">
                View Details
              </button>
            </div>

            <div className="mx-auto max-w-xl space-y-2 sm:mx-0 xl:max-w-2xl 2xl:max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f6c244]/80 xl:text-xs 2xl:text-sm">
                What makes it special
              </p>
              <p className="text-sm text-[#f7e6c2]/85 sm:text-base xl:text-base 2xl:text-lg">
                Crafted in small batches using the traditional bilona method. We
                slow-cook the cream for a deep, nutty aroma and seal it in glass
                to keep every spoonful rich, clean, and comforting.
              </p>
            </div>
          </div>

          <div className="product-visual order-1 flex flex-col items-center gap-6 lg:order-2 lg:items-end xl:gap-8 2xl:gap-10">
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
