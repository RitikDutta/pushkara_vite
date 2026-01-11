import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const leftBenefits = [
  {
    title: "Heart Health",
    text: "Supports a healthy cardiovascular system.",
    icon: HeartIcon,
  },
  {
    title: "Anti-Aging & Anti-Inflammatory",
    text: "Helps slow the aging process and supports natural recovery.",
    icon: HourglassIcon,
  },
  {
    title: "Glowing Skin & Hair",
    text: "Nourishes skin and strengthens hair for a natural glow.",
    icon: LeafIcon,
  },
];

const rightBenefits = [
  {
    title: "Strong Bones & Joints",
    text: "Helps build strong bones and supports healthy joints.",
    icon: BoneIcon,
  },
  {
    title: "Brain & Digestion",
    text: "Aids brain health and supports a healthy digestive system.",
    icon: BrainIcon,
  },
];

export default function Benefits() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".benefits-heading > *", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".benefits-heading",
          start: "top 78%",
        },
      });

      gsap.from(".benefits-image-frame", {
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".benefits-center",
          start: "top 80%",
        },
      });

      gsap.from(".benefits-item", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) {
      return;
    }

    let rafId = null;
    let currentX = 50;
    let currentY = 50;
    let targetX = 50;
    let targetY = 50;

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      image.style.setProperty("--benefits-mask-x", `${currentX}%`);
      image.style.setProperty("--benefits-mask-y", `${currentY}%`);

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const handleMove = (event) => {
      const rect = image.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.hypot(dx, dy);
      const activationRadius = rect.width * 0.65;
      const maxOffset = rect.width * 0.14;

      if (distance <= activationRadius) {
        const offsetX = clamp(dx, -maxOffset, maxOffset);
        const offsetY = clamp(dy, -maxOffset, maxOffset);
        targetX = 50 + (offsetX / rect.width) * 100;
        targetY = 50 + (offsetY / rect.height) * 100;
      } else {
        targetX = 50;
        targetY = 50;
      }

      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    const handleLeave = () => {
      targetX = 50;
      targetY = 50;
      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    image.style.setProperty("--benefits-mask-x", "50%");
    image.style.setProperty("--benefits-mask-y", "50%");

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="benefits-section relative overflow-hidden">
      <div className="benefits-texture" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24 xl:max-w-[1400px]">
        <div className="benefits-heading flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase text-[#8c5b24]">
            <SparkIcon className="h-4 w-4 text-[#c59243]" />
            <span className="benefits-eyebrow">Benefits</span>
          </div>
          <h2 className="benefits-title mt-4 max-w-4xl text-3xl font-semibold leading-tight text-[#4b2e18] sm:text-4xl lg:text-5xl">
            The Essence of Wellness in Every Spoon
          </h2>
        </div>

        <div className="benefits-grid mt-12 flex flex-col items-center gap-12 sm:mt-14 lg:mt-16 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-16 xl:gap-20">
          <div className="order-2 space-y-10 lg:order-none lg:space-y-12 xl:space-y-14">
            {leftBenefits.map((benefit) => (
              <BenefitItem key={benefit.title} side="left" {...benefit} />
            ))}
          </div>

          <div className="benefits-center order-1 relative flex items-center justify-center py-6 sm:py-10 lg:order-none lg:py-0">
            <div className="benefits-image-glow" aria-hidden="true" />
            <div className="benefits-orbit" aria-hidden="true" />
            <div className="benefits-orbit benefits-orbit--inner" aria-hidden="true" />
            <div className="benefits-image-frame">
              <div ref={imageRef} className="benefits-image" aria-hidden="true" />
            </div>
          </div>

          <div className="order-3 space-y-10 lg:order-none lg:space-y-12 xl:space-y-14">
            {rightBenefits.map((benefit) => (
              <BenefitItem key={benefit.title} side="right" {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ icon: Icon, title, text, side }) {
  const isLeft = side === "left";

  return (
    <div
      className={`benefits-item flex flex-col items-center gap-3 text-center lg:flex-row lg:gap-4 ${
        isLeft
          ? "lg:flex-row-reverse lg:items-end lg:justify-end lg:text-right"
          : "lg:items-start lg:text-left"
      }`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b47a] text-[#b5854f] shadow-[0_10px_18px_rgba(181,133,79,0.2)]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="space-y-1 lg:max-w-[300px] xl:max-w-[340px]">
        <h3 className="text-base font-semibold text-[#4b2e18] sm:text-lg">{title}</h3>
        <p className="text-sm text-[#7a521e] sm:text-[15px]">{text}</p>
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
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M12 3.5l2.2 5.2 5.3 2.2-5.3 2.2L12 18.3l-2.2-5.2-5.3-2.2 5.3-2.2L12 3.5Z" />
    </svg>
  );
}

function HeartIcon({ className = "" }) {
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
      <path d="M12 20s-6.5-4.4-6.5-10a4 4 0 0 1 6.5-3 4 4 0 0 1 6.5 3c0 5.6-6.5 10-6.5 10Z" />
    </svg>
  );
}

function HourglassIcon({ className = "" }) {
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
      <path d="M7 4h10" />
      <path d="M7 20h10" />
      <path d="M9 4c0 4 6 4 6 8s-6 4-6 8" />
    </svg>
  );
}

function BoneIcon({ className = "" }) {
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
      <circle cx="6.5" cy="12" r="2.5" />
      <circle cx="17.5" cy="12" r="2.5" />
      <path d="M9.2 12h5.6" />
    </svg>
  );
}

function BrainIcon({ className = "" }) {
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
      <path d="M9 6a3 3 0 0 0-3 3v1a2.5 2.5 0 0 0-2 2.5V14a3 3 0 0 0 3 3h2" />
      <path d="M15 6a3 3 0 0 1 3 3v1a2.5 2.5 0 0 1 2 2.5V14a3 3 0 0 1-3 3h-2" />
      <path d="M12 6V5a3 3 0 0 0-3 3" />
      <path d="M12 6V5a3 3 0 0 1 3 3" />
      <path d="M10 12h4" />
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
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 14c7-8 13-7 14-7 0 1 1 7-7 14-3 1-6-1-7-4Z" />
      <path d="M8 15c2.5-2.5 5-4 8-5" />
    </svg>
  );
}
