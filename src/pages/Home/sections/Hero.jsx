import React from "react";

const heroImage = "/hero-illustration.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2fbf7] via-white to-[#f5f7ff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.08),transparent_32%)]" />

      <div className="relative mx-auto max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] px-4 py-10 sm:py-14">
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:auto-rows-[minmax(0,1fr)] md:h-[620px]">
          <div className="md:col-span-2 md:row-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white shadow-xl shadow-emerald-50/60">
              <div className="absolute -left-16 -top-10 h-48 w-48 rounded-full bg-emerald-100/70 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-amber-100/70 blur-3xl" />

              <div className="relative flex h-full flex-row items-center justify-between gap-6 p-4 sm:p-6 lg:p-10">
                <div className="flex w-full max-w-xl flex-col gap-4">
                  <div className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Exclusive offer
                    <span className="text-[#ff5c5c]">25% Off</span>
                  </div>

                  <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-[40px] md:leading-[1.1]">
                    Fresh food, fair prices,
                    <span className="block text-emerald-600">fast delivery.</span>
                  </h1>

                  <p className="text-sm text-gray-600 sm:text-base">
                    Fresh veggies full of vitamins for your health. Quality produce delivered
                    right to you.
                  </p>

                  <button className="mt-2 w-fit rounded-xl bg-[#ff5c5c] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[1px] hover:shadow">
                    Shop now
                  </button>
                </div>

                <div className="relative flex w-1/2 min-w-[220px] max-w-[280px] justify-center sm:max-w-[360px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[620px]">
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-100 opacity-70 blur-3xl" />
                  <div className="absolute -left-12 bottom-2 h-44 w-44 rounded-full bg-amber-100 opacity-80 blur-3xl" />

                  <div className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-[28px] border border-amber-100/70 bg-gradient-to-b from-amber-50 via-white to-emerald-50 shadow-lg shadow-amber-100/60">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_38%)]" />
                    <img
                      src={heroImage}
                      alt="Delivery hero with fresh groceries"
                      className="relative z-10 h-full w-full object-contain p-4 sm:p-6"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-x-10 bottom-0 h-10 rounded-full bg-emerald-500/15 blur-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid h-full grid-cols-2 gap-4 md:col-span-1 md:row-span-2 md:h-full md:grid-cols-1 md:grid-rows-2">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-lg shadow-emerald-50/60 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-white/60 to-transparent" />
              <div className="absolute -right-10 top-6 h-20 w-20 rotate-6 rounded-3xl bg-white/70 shadow-inner shadow-emerald-100" />

              <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-emerald-600">Healthy Food</p>
                  <h3 className="text-lg font-semibold text-gray-900">Organic Market</h3>
                  <p className="text-sm text-gray-600">
                    Start your daily shopping with some organic food.
                  </p>
                </div>
                <button className="self-start text-sm font-semibold text-emerald-700 transition hover:opacity-75">
                  Shop now →
                </button>
              </div>
            </div>

            <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-lg shadow-amber-50/60 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white/60 to-transparent" />
              <div className="absolute -left-8 bottom-6 h-16 w-16 rotate-3 rounded-3xl bg-white/70 shadow-inner shadow-amber-100" />

              <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-[#ff5c5c]">25% Off</p>
                  <h3 className="text-lg font-semibold text-gray-900">Nut Collection</h3>
                  <p className="text-sm text-gray-600">
                    Add your organic vegetables & fruits, or a promo image.
                  </p>
                </div>
                <button className="self-start text-sm font-semibold text-emerald-700 transition hover:opacity-75">
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
