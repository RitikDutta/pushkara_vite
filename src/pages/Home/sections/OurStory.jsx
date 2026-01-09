import React, { useEffect, useRef, useState } from "react";

const highlights = [
  {
    title: "Farm-Fresh Quality Guaranteed",
    text: "Our milk is sourced directly from our own farm, ensuring top-tier freshness.",
    icon: BarnIcon,
  },
  {
    title: "100% Natural and Pure",
    text: "We offer reliable doorstep delivery of milk and dairy products each morning.",
    icon: DropIcon,
  },
  {
    title: "Eco-Friendly Packaging",
    text: "Sustainable packaging keeps dairy fresh while reducing everyday waste.",
    icon: LeafIcon,
  },
];

export default function OurStory() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);
  const openTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVideoOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoOpen]);

  const handlePlayClick = () => {
    setRippleKey((value) => value + 1);
    if (isVideoOpen) {
      return;
    }
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
    }
    openTimerRef.current = setTimeout(() => {
      setIsVideoOpen(true);
      openTimerRef.current = null;
    }, 420);
  };

  const handleCloseVideo = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    setIsVideoOpen(false);
  };

  return (
    <section className="our-story-section relative overflow-hidden">
      <div className="our-story-overlay" />
      <div className="our-story-vignette" />
      <div className="our-story-dots" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="flex min-h-[520px] flex-col sm:min-h-[560px]">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase text-[#f6c244]">
              <SparkIcon className="h-4 w-4 text-[#f6c244]" />
              <span className="our-story-eyebrow">Our Story</span>
            </div>
            <h2 className="our-story-title mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#fff4e2] sm:text-4xl lg:text-5xl">
              Our passionate story of fresh
              <span className="block">dairy farming</span>
            </h2>
            <button
              type="button"
              className="our-story-play mt-8"
              aria-label="Play our story video"
              aria-haspopup="dialog"
              aria-expanded={isVideoOpen}
              onClick={handlePlayClick}
            >
              <span key={rippleKey} className="our-story-ripple" aria-hidden="true" />
              <span className="our-story-play-ring" aria-hidden="true" />
              <span className="our-story-play-inner" aria-hidden="true">
                <PlayIcon className="h-5 w-5" />
              </span>
            </button>
          </div>

          <div className="w-full border-t border-white/15 pt-8">
            <div className="grid gap-8 md:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4 text-left">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f6c244] text-[#4b2e18] shadow-[0_12px_20px_rgba(246,196,68,0.25)]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="our-story-video-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            className="our-story-video-backdrop"
            aria-label="Close video"
            onClick={handleCloseVideo}
          />
          <div className="our-story-video-frame" role="document">
            <button
              type="button"
              className="our-story-video-close"
              aria-label="Close video"
              onClick={handleCloseVideo}
            >
              x
            </button>
            <div className="our-story-video-inner">
              <iframe
                src="https://www.youtube.com/embed/8bHRcvI2EqM?autoplay=1"
                title="Pushkara dairy story"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function SparkIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 4l1.8 4.4L18 10l-4.2 1.6L12 16l-1.8-4.4L6 10l4.2-1.6L12 4Z" />
    </svg>
  );
}

function PlayIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9 7.5v9l7-4.5-7-4.5Z" />
    </svg>
  );
}

function BarnIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 20V10l8-6 8 6v10" />
      <path d="M9 20v-6h6v6" />
      <path d="M12 9v3" />
    </svg>
  );
}

function DropIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10Z" />
    </svg>
  );
}

function LeafIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 14c7-8 13-7 14-7 0 1 1 7-7 14-3 1-6-1-7-4Z" />
      <path d="M8 15c2.5-2.5 5-4 8-5" />
    </svg>
  );
}
