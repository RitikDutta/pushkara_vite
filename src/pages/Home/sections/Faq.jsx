import React, { useState } from "react";

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

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="faq-section relative overflow-hidden">
      <div className="faq-texture" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="faq-heading text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase text-[#7a521e]">
            <SparkIcon className="h-4 w-4 text-[#f6c244]" />
            <span className="faq-eyebrow">FAQ</span>
          </div>
          <h2 className="faq-title mt-4 text-3xl font-semibold leading-tight text-[#3f2412] sm:text-4xl lg:text-5xl">
            You may still be wondering...
          </h2>
          <p className="mt-3 text-base text-[#7a521e] sm:text-lg">
            Answers to all your possible questions.
          </p>
        </div>

        <div className="faq-list mt-10">
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
