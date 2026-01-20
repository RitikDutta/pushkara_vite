import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reels = [
  {
    key: "reel-01",
    id: "BTr66KAcrgA",
    title: "Reel 01",
    preview: "/reel_video_1.webp",
  },
  {
    key: "reel-02",
    id: "BTr66KAcrgA",
    title: "Reel 02",
    preview: "/reel_video_2.webp",
  },
  {
    key: "reel-03",
    id: "BTr66KAcrgA",
    title: "Reel 03",
    preview: "/reel_video_3.webp",
  },
  {
    key: "reel-04",
    id: "BTr66KAcrgA",
    title: "Reel 04",
    preview: "/reel_video_4.webp",
  },
  {
    key: "reel-05",
    id: "BTr66KAcrgA",
    title: "Reel 05",
    preview: "/reel_video_5.webp",
  },
  {
    key: "reel-06",
    id: "BTr66KAcrgA",
    title: "Reel 06",
    preview: "/reel_video_6.webp",
  },
];

const buildEmbedUrl = (id) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;

export default function Reels() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeKey, setActiveKey] = useState(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".reels-header > *", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".reels-header",
          start: "top 80%",
        },
      });

      gsap.from(".reels-card-shell", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".reels-track",
          start: "top 82%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      const overflow = scrollWidth - clientWidth > 4;

      setHasOverflow(overflow);
      if (!overflow) {
        setCanScrollLeft(false);
        setCanScrollRight(false);
        return;
      }

      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    };

    updateScrollState();

    const handleScroll = () => updateScrollState();
    const handleResize = () => updateScrollState();

    track.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (direction) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const card = track.querySelector(".reels-card");
    const cardWidth = card?.getBoundingClientRect().width ?? track.clientWidth;
    const styles = window.getComputedStyle(track);
    const gapValue = parseFloat(styles.columnGap || styles.gap);
    const gap = Number.isNaN(gapValue) ? 0 : gapValue;
    const amount = cardWidth + gap;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  const handlePlay = (key) => {
    setActiveKey((current) => (current === key ? null : key));
  };

  return (
    <section ref={sectionRef} className="reels-section relative overflow-hidden">
      <div className="reels-bg" aria-hidden="true" />
      <div className="reels-sheen" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:py-24 lg:py-28">
        <div className="reels-header text-center">
          <div className="reels-eyebrow">Reels</div>
          <h2 className="reels-title mt-3 text-3xl sm:text-4xl lg:text-5xl">
            The Making of Tradition
          </h2>
          <p className="reels-subtitle mt-3 text-base sm:text-lg">
            From our farm to your feed
          </p>
        </div>

        <div className="reels-slider">
          {hasOverflow && (
            <>
              <button
                type="button"
                className="reels-nav-button reels-nav-button--left"
                onClick={() => handleScroll(-1)}
                disabled={!canScrollLeft}
                aria-label="Scroll reels left"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                className="reels-nav-button reels-nav-button--right"
                onClick={() => handleScroll(1)}
                disabled={!canScrollRight}
                aria-label="Scroll reels right"
              >
                <ArrowIcon direction="right" />
              </button>
            </>
          )}

          <div ref={trackRef} className="reels-track" role="list">
            {reels.map((reel) => {
              const isActive = activeKey === reel.key;

              return (
                <div key={reel.key} className="reels-card" role="listitem">
                  <div className="reels-card-shell">
                    <div className="reels-card-media">
                      {isActive ? (
                        <iframe
                          src={buildEmbedUrl(reel.id)}
                          title={`${reel.title} video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={reel.preview}
                          alt={`${reel.title} preview`}
                          loading="lazy"
                        />
                      )}
                      {!isActive && (
                        <button
                          type="button"
                          className="reels-play-button"
                          onClick={() => handlePlay(reel.key)}
                          aria-label={`Play ${reel.title}`}
                        >
                          <span className="reels-play-icon">
                            <PlayIcon />
                          </span>
                        </button>
                      )}
                      {isActive && (
                        <button
                          type="button"
                          className="reels-close-button"
                          onClick={() => handlePlay(reel.key)}
                          aria-label={`Close ${reel.title}`}
                        >
                          <CloseIcon />
                        </button>
                      )}
                    </div>
                    <div className="reels-card-footer">
                      <span className="reels-card-title">{reel.title}</span>
                      <span className="reels-card-meta">
                        {isActive ? "Now playing" : "Tap to play"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.5v13l10-6.5z" />
    </svg>
  );
}

function ArrowIcon({ direction }) {
  const isLeft = direction === "left";
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {isLeft ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 6l6 6-6 6" />
      )}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
