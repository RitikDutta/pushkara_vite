import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const heroBg = "/hero_bg.png";
const heroImage = "/hero_image.png";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });
      tl.from(".hero-card", { opacity: 0, y: 16, scale: 0.98 })
        .from(".hero-content > *", { opacity: 0, y: 18, stagger: 0.08 }, "-=0.6")
        .from(".hero-image", { opacity: 0, y: 18 }, "-=0.6")
        .from(".hero-tile", { opacity: 0, y: 16, stagger: 0.12 }, "-=0.5");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-[#fff8e8]">
      <div className="relative mx-auto max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] px-4 py-10 sm:py-14">
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:auto-rows-[minmax(0,1fr)] md:h-[620px]">
          <div className="md:col-span-2 md:row-span-2">
            <div
              className="hero-card shine-card relative h-full overflow-hidden rounded-3xl border border-white/70 bg-[#fff2d4] bg-cover bg-no-repeat bg-right shadow-xl shadow-emerald-50/60"
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              <div className="relative flex h-full items-stretch justify-between gap-6 max-[487px]:gap-4 max-[415px]:flex-col max-[415px]:items-start max-[415px]:gap-3">
                <div className="hero-content flex max-w-xl flex-col justify-center gap-4 p-4 sm:p-6 lg:p-10 max-[487px]:gap-3 max-[487px]:max-w-[240px] max-[487px]:p-3 max-[415px]:w-full max-[415px]:max-w-none">
                  <div className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm shadow-emerald-100 max-[487px]:px-2.5 max-[487px]:py-1 max-[487px]:text-[11px]">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Exclusive offer
                    <span className="text-[#ff5c5c]">25% Off</span>
                  </div>

                  <h1 className="text-3xl font-bold leading-tight text-[#7a521e] sm:text-4xl md:text-[40px] md:leading-[1.1] max-[487px]:text-[22px] max-[487px]:leading-[1.2] max-[415px]:text-[20px] max-[415px]:leading-[1.15]">
                    Pure ghee, rich aroma,
                    <span className="block text-[#7a521e]">slow-cooked goodness.</span>
                  </h1>

                  <p className="text-sm text-[#7a521e] sm:text-base max-[487px]:text-[13px] max-[415px]:text-[12px]">
                    Traditionally clarified for a nutty flavor and golden glow. Wholesome ghee
                    made from fresh milk, delivered to you.
                  </p>

                  <button className="mt-2 w-fit rounded-xl bg-[#ff5c5c] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[1px] hover:shadow max-[487px]:px-4 max-[487px]:py-2.5 max-[487px]:text-[12px]">
                    Shop now
                  </button>
                </div>

                <div className="hero-image relative flex w-1/2 min-w-[220px] max-w-[280px] items-end justify-center self-stretch pt-4 pr-4 sm:pt-6 sm:pr-6 lg:pt-10 lg:pr-10 sm:max-w-[360px] md:w-[clamp(360px,42vw,600px)] md:min-w-[360px] md:max-w-[600px] max-[487px]:min-w-[180px] max-[487px]:max-w-[220px] max-[487px]:pt-3 max-[487px]:pr-3 max-[415px]:w-full max-[415px]:min-w-0 max-[415px]:max-w-none max-[415px]:self-auto max-[415px]:items-center max-[415px]:pt-0 max-[415px]:pr-0 max-[415px]:h-[220px]">
                  <div className="relative flex h-full w-full items-end justify-center overflow-hidden bg-transparent max-[415px]:items-center">
                    <img
                      src={heroImage}
                      alt="Delivery hero with fresh groceries"
                      className="relative z-10 h-full w-full object-contain object-bottom"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid h-full grid-cols-2 auto-rows-[minmax(200px,1fr)] gap-4 sm:auto-rows-[minmax(240px,1fr)] md:col-span-1 md:row-span-2 md:h-full md:grid-cols-1 md:grid-rows-2">
            <div className="hero-tile shine-card relative h-full min-h-[200px] overflow-hidden rounded-3xl border border-white/70 bg-[#fff2d4] bg-[url('/second_banner_pot.png')] bg-cover bg-center shadow-lg shadow-emerald-50/60 sm:min-h-[240px] md:bg-[url('/second_banner.png')]">
              <div className="absolute -right-10 top-6 h-20 w-20 rotate-6 rounded-3xl bg-white/70 shadow-inner shadow-emerald-100" />

              <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="space-y-2">
                  {/* <p className="text-xs font-semibold text-[#7a521e]">Healthy Food</p> */}
                  {/* <h3 className="text-lg font-semibold text-[#7a521e]">Organic Market</h3> */}
                  <p className="text-sm text-[#7a521e]">
                    {/* Start your daily shopping with some organic food. */}
                  </p>
                </div>
                <button className="self-start text-sm font-semibold text-[#7a521e] transition hover:opacity-75">
                  Shop now →
                </button>
              </div>
            </div>

            <div className="hero-tile shine-card relative h-full min-h-[200px] overflow-hidden rounded-3xl border border-white/70 bg-[#fff2d4] bg-[url('/third_banner_pot.png')] bg-cover bg-center shadow-lg shadow-amber-50/60 sm:min-h-[240px] md:bg-[url('/third_banner.png')]">
              <div className="absolute -left-8 bottom-6 h-16 w-16 rotate-3 rounded-3xl bg-white/70 shadow-inner shadow-amber-100" />

              <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="space-y-2">
                  {/* <p className="text-xs font-semibold text-[#7a521e]">25% Off</p> */}
                  {/* <h3 className="text-lg font-semibold text-[#7a521e]">Nut Collection</h3> */}
                  <p className="text-sm text-[#7a521e]">
                    {/* Add your organic vegetables & fruits, or a promo image. */}
                  </p>
                </div>
                <button className="self-start text-sm font-semibold text-[#7a521e] transition hover:opacity-75">
                  Shop now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
