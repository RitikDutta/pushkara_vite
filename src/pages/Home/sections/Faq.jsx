import React, { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Is it suitable for lactose-intolerant people?",
    answer:
      "Yes, A2 ghee contains negligible lactose, making it easier to digest for most individuals.",
  },
  {
    question: "How should I store the ghee?",
    answer:
      "Store in a cool, dry place away from direct sunlight. No refrigeration needed.",
  },
  {
    question: "Do you offer bulk or wholesale options?",
    answer:
      "Yes, please contact us directly for business or bulk orders.",
  },
  {
    question: "Is it safe for kids and elderly?",
    answer:
      "Absolutely! Pushkara A2 Ghee is safe, natural, and beneficial for all age groups.",
  },
  {
    question: "How do you ensure quality and safety?",
    answer:
      "Every batch is tested for purity, and our farm follows strict hygiene standards. We also use sealed, food-grade packaging for every delivery.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    let rafId = null;
    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const offset = rect.top * -0.5;
      section.style.setProperty("--faq-parallax", `${offset}px`);
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      ref={sectionRef}
      className="faq-section relative min-h-[720px] overflow-hidden sm:min-h-[780px] lg:min-h-[840px]"
    >
      <div className="faq-bg" aria-hidden="true" />
      <div className="faq-overlay" aria-hidden="true" />
      <div className="faq-vignette" aria-hidden="true" />
      <div className="faq-dots" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="faq-heading text-center lg:max-w-xl lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold uppercase text-[#f7d89f] lg:justify-start">
              <SparkIcon className="h-4 w-4 text-[#f6c244]" />
              <span className="faq-eyebrow">FAQ</span>
            </div>
            <h2 className="faq-title mt-4 text-3xl font-semibold leading-tight text-[#fff6e5] sm:text-4xl lg:text-5xl">
              You may still be wondering...
            </h2>
            <p className="faq-subtitle mt-4 text-base text-[#f1d7a1] sm:text-lg">
              Answers to all your possible questions.
            </p>
          </div>

          <div className="faq-card">
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const buttonId = `faq-button-${index}`;
                const panelId = `faq-panel-${index}`;

                return (
                  <div
                    key={faq.question}
                    className="faq-item"
                    data-open={isOpen ? "true" : "false"}
                  >
                    <button
                      type="button"
                      id={buttonId}
                      className="faq-question"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => handleToggle(index)}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        <PlusIcon />
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      className="faq-answer"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
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

function PlusIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}
