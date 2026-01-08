import React from "react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {/* Outer grid controls the “equal height” behavior on desktop */}
      <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:auto-rows-fr lg:h-[520px]">
        {/* BIG LEFT CARD */}
        <div className="lg:col-span-8 lg:row-span-2 h-full">
          <div className="h-full rounded-3xl border bg-white overflow-hidden shadow-sm">
            <div className="h-full grid md:grid-cols-2">
              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 text-xs font-medium text-black/70">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  100% Pure • A2 • Bilona Method
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                  A2 Gir Cow Ghee
                  <span className="block text-black/60">
                    Bilona churned • Slow-cooked • Small-batch
                  </span>
                </h1>

                <p className="mt-3 text-sm sm:text-base text-black/60">
                  Traditional bilona ghee made from Gir cow milk — rich aroma, clean taste,
                  and crafted for daily wellness.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  {/* Replace this with Shopify Buy Button component/embed */}
                  <button className="px-5 py-3 rounded-2xl bg-black text-white font-medium hover:opacity-90 transition">
                    Buy Now
                  </button>

                  <button className="px-5 py-3 rounded-2xl border font-medium hover:bg-black/5 transition">
                    See Benefits
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-xs text-black/60">
                  <span className="rounded-full border px-3 py-1">A2 Only</span>
                  <span className="rounded-full border px-3 py-1">No Chemicals</span>
                  <span className="rounded-full border px-3 py-1">Mud Pot Cooked</span>
                  <span className="rounded-full border px-3 py-1">Lab Tested</span>
                </div>
              </div>

              {/* Image area */}
              <div className="relative bg-gradient-to-br from-amber-50 to-white grid place-items-center p-6">
                {/* Replace with your jar image */}
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl border bg-white shadow-sm grid place-items-center">
                  <span className="text-sm text-black/50">Your Ghee Jar Image Here</span>

                  {/* A subtle “glow” behind product */}
                  <div className="pointer-events-none absolute -z-10 inset-0 blur-3xl opacity-50 bg-gradient-to-r from-amber-200 via-yellow-100 to-emerald-100" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: On mobile = 2 columns (horizontal), on desktop = 1 column (vertical) */}
        <div className="lg:col-span-4 lg:row-span-2 grid grid-cols-2 gap-4 lg:grid-cols-1 lg:grid-rows-2 lg:h-full">
          {/* TOP RIGHT CARD */}
          <div className="h-full rounded-3xl border bg-white overflow-hidden shadow-sm relative">
            <div className="p-5 sm:p-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-emerald-600">For Daily Wellness</p>
                <h3 className="mt-1 text-lg font-semibold">Morning Ritual</h3>
                <p className="mt-2 text-sm text-black/60">
                  Add to warm water / meals — simple habit, big impact.
                </p>
              </div>

              <button className="self-start text-sm font-medium hover:opacity-70 transition">
                Learn more →
              </button>
            </div>

            {/* Replace with background image if you want */}
            <div className="absolute right-0 top-0 h-full w-2/5 bg-gradient-to-l from-emerald-50 to-transparent" />
          </div>

          {/* BOTTOM RIGHT CARD */}
          <div className="h-full rounded-3xl border bg-white overflow-hidden shadow-sm relative">
            <div className="p-5 sm:p-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-amber-600">Limited Batch</p>
                <h3 className="mt-1 text-lg font-semibold">Bilona Crafted</h3>
                <p className="mt-2 text-sm text-black/60">
                  Curd → churned butter → slow-cooked ghee (traditional process).
                </p>
              </div>

              <button className="self-start text-sm font-medium hover:opacity-70 transition">
                How it’s made →
              </button>
            </div>

            <div className="absolute right-0 top-0 h-full w-2/5 bg-gradient-to-l from-amber-50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
