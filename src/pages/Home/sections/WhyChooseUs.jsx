import React from "react";

const whyUsImage = "/why_us.png";

const leftFeatures = [
  {
    title: "Commitment to 100% Natural",
    text: "We provide dairy that's completely free from additives and fillers.",
    icon: LeafIcon,
  },
  {
    title: "Farm-Fresh Milk Every Day",
    text: "Collected daily from local farms for peak freshness and taste.",
    icon: GridIcon,
  },
  {
    title: "Pure, Natural, No Chemicals",
    text: "Clean ingredients with no artificial flavors or preservatives.",
    icon: DropIcon,
  },
];

const rightFeatures = [
  {
    title: "Rigorous Quality Control",
    text: "Every batch is tested for purity and consistency before delivery.",
    icon: ClipboardIcon,
  },
  {
    title: "Eco-Friendly Farming Practices",
    text: "We support sustainable, animal-first farming standards.",
    icon: PlantIcon,
  },
  {
    title: "Trusted By Thousands Daily",
    text: "Families count on our dairy for healthy, wholesome nutrition.",
    icon: MedalIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-us-section relative overflow-hidden">
      <div className="why-us-texture" />
      <div className="relative mx-auto max-w-6xl px-4 pt-14 sm:pt-16 lg:pt-20 pb-0">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase text-[#7a521e]">
            <SparkIcon className="h-4 w-4 text-[#f6c244]" />
            <span className="why-us-eyebrow">Why Choose Us</span>
          </div>
          <h2 className="why-us-title mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#4b2e18] sm:text-4xl lg:text-5xl">
            Reliable laboratory results
            <span className="block">you can trust</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="space-y-8 pb-10 sm:pb-12 lg:pb-14">
            {leftFeatures.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>

          <div className="relative flex h-full items-end justify-center pt-6 lg:pt-10">
            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#f6c244]/25 blur-3xl sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]" />
            <img
              src={whyUsImage}
              alt="Fresh dairy illustration"
              className="relative z-10 w-[260px] object-contain sm:w-[330px] lg:w-[380px]"
              loading="lazy"
            />
          </div>

          <div className="space-y-8 pb-10 sm:pb-12 lg:pb-14">
            {rightFeatures.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute left-[14%] top-[32%] h-3 w-3 rounded-full bg-[#f6c244] opacity-80" />
        <div className="pointer-events-none absolute right-[12%] top-[20%] hidden h-4 w-4 rounded-full bg-[#f6c244]/70 md:block" />
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f6c244] text-[#4b2e18] shadow-[0_12px_20px_rgba(246,196,68,0.3)]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-[#4b2e18] sm:text-lg">
          {title}
        </h3>
        <p className="text-sm text-[#7a521e]">{text}</p>
      </div>
    </div>
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

function GridIcon({ className = "" }) {
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
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
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

function ClipboardIcon({ className = "" }) {
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
      <rect x="6" y="5" width="12" height="16" rx="2" />
      <path d="M9 5.5h6" />
      <path d="m9 13 2 2 4-4" />
    </svg>
  );
}

function PlantIcon({ className = "" }) {
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
      <path d="M12 20V9" />
      <path d="M12 12c-4 0-7-3-7-7 4 0 7 3 7 7Z" />
      <path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7Z" />
    </svg>
  );
}

function MedalIcon({ className = "" }) {
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
      <circle cx="12" cy="13" r="4.5" />
      <path d="M8 3h8l-2 6h-4l-2-6Z" />
    </svg>
  );
}
