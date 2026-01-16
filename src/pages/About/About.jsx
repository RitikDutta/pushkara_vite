export default function About() {
  return (
    <main className="bg-[#fff8e8] text-[#4b3307]">
      <section className="relative overflow-hidden border-b border-[#f1d7a1]/70">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff4dd] via-[#fff8e8] to-white" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b07a2a]">
                  Taste of Tradition, Essence of Purity
                </p>
                <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
                  Our Story
                </h1>
              </div>

              <div className="space-y-4 text-base text-[#5a3c15] sm:text-lg">
                <h2 className="text-2xl font-semibold text-[#4b3307] sm:text-3xl">
                  Born from the Heart of Pushkar
                </h2>
                <p>
                  The story of Pushkara Organic is inseparable from the soul of
                  its home. We are rooted in the sacred soil of Pushkar, a
                  serene town in Rajasthan cradled by the ancient Aravalli
                  hills. Here, where the air is clean and the landscapes are
                  painted in vibrant colors, purity is not just an ambition -
                  it is a way of life.
                </p>
                <p>
                  We believe that to create something truly pure, you must
                  begin at a pure source. For generations, our family has
                  flourished in this sanctuary where nature, tradition, and
                  sustainable living blend in perfect harmony.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-[#f1d7a1] bg-white/70 p-3 shadow-[0_20px_45px_rgba(75,51,7,0.18)]">
                <img
                  src="/about_people_standing_outside.png"
                  alt="Pushkara family outside their original shop"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b07a2a]">
                Our Heritage
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                A Legacy of Purity: Five Generations of Trust
              </h2>
              <p className="text-base leading-relaxed text-[#5a3c15]">
                In a world of fleeting trends, we stand on the bedrock of
                lineage. Our journey began long before we had a brand name. We
                have been practicing the art of dairy craftsmanship for five
                generations, formally establishing Pushkara Organic in 1978.
              </p>
              <p className="text-base leading-relaxed text-[#5a3c15]">
                What started as a modest shop driven by a simple dream - to
                bring pure, traditional ghee to every home - has grown into a
                pioneering enterprise. We are proud to have established the
                first private dairy plant in Rajasthan, a testament to our
                unwavering dedication. Yet, despite our growth, our core
                principles remain unchanged: purity, tradition, and trust.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src="/about_owner.png"
                alt="Founder portrait from the early years"
                className="h-56 w-full rounded-2xl object-cover shadow-[0_14px_30px_rgba(75,51,7,0.18)] sm:h-64"
                loading="lazy"
              />
              <img
                src="/about_office_old_pic.png"
                alt="Family legacy at the original shop"
                className="h-56 w-full rounded-2xl object-cover shadow-[0_14px_30px_rgba(75,51,7,0.18)] sm:h-64"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8e8]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
              <img
                src="/about_machine.png"
                alt="Original dairy machinery from the early days"
                className="h-56 w-full rounded-2xl object-cover shadow-[0_14px_30px_rgba(75,51,7,0.18)] sm:h-64"
                loading="lazy"
              />
              <img
                src="/about_working.png"
                alt="Modern-day ghee craftsmanship"
                className="h-56 w-full rounded-2xl object-cover shadow-[0_14px_30px_rgba(75,51,7,0.18)] sm:h-64"
                loading="lazy"
              />
            </div>

            <div className="order-1 space-y-4 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b07a2a]">
                From Humble Beginnings
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Our Journey: Then &amp; Now
              </h2>
              <p className="text-base leading-relaxed text-[#5a3c15]">
                From a small storefront to reaching thousands of families, our
                path has been built on hard work and community support. While we
                have expanded our capacity to serve you better, we have never
                automated the "soul" out of our product. We ensure that even
                today, the essence of our process remains human, careful, and
                deliberate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b07a2a]">
                Our Craft
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                The Art of Bilona: Preserving Wisdom
              </h2>
              <p className="text-base leading-relaxed text-[#5a3c15]">
                In today's market, true value is found in integrity. We
                exclusively use the traditional Bilona method - an ancestral
                process that is less a manufacturing technique and more a
                sacred commitment.
              </p>
              <p className="text-base leading-relaxed text-[#5a3c15]">
                We do not rush nature. Our six-step journey ensures every drop
                of A2 Ghee retains the essence of its source:
              </p>
              <ul className="space-y-3 text-base text-[#5a3c15]">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f6c244]" />
                  <p>
                    <span className="font-semibold text-[#4b3307]">
                      Sourcing:
                    </span>{" "}
                    Pure A2 milk from native Gir Cows.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f6c244]" />
                  <p>
                    <span className="font-semibold text-[#4b3307]">
                      Culturing:
                    </span>{" "}
                    Setting the curd overnight at room temperature.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f6c244]" />
                  <p>
                    <span className="font-semibold text-[#4b3307]">
                      The Churn (Bilona):
                    </span>{" "}
                    Hand-churning with a wooden bilota to separate the butter.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f6c244]" />
                  <p>
                    <span className="font-semibold text-[#4b3307]">
                      Clarifying:
                    </span>{" "}
                    Slow-boiling in mud pots over cow dung cakes.
                  </p>
                </li>
              </ul>
              <p className="text-base leading-relaxed text-[#5a3c15]">
                This slow, low-heat method preserves heat-sensitive nutrients
                like Vitamin A, E, D, and K2, giving you a golden elixir that
                nurtures the body from within.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-[#f1d7a1] bg-[#fff8e8] p-3 shadow-[0_20px_45px_rgba(75,51,7,0.18)]">
                <img
                  src="/about_workers.png"
                  alt="Artisans preparing ghee with traditional care"
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8e8]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
              <img
                src="/about_award.png"
                alt="Recognition of Pushkara's community impact"
                className="h-56 w-full rounded-2xl object-cover shadow-[0_14px_30px_rgba(75,51,7,0.18)] sm:h-64"
                loading="lazy"
              />
              <img
                src="/about_inoguration.png"
                alt="Community moments at the Pushkara inauguration"
                className="h-56 w-full rounded-2xl object-cover shadow-[0_14px_30px_rgba(75,51,7,0.18)] sm:h-64"
                loading="lazy"
              />
            </div>

            <div className="order-1 space-y-4 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b07a2a]">
                Our Mission &amp; Values
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                More Than Business - We Are Family
              </h2>
              <p className="text-base leading-relaxed text-[#5a3c15]">
                For us, success is not measured by profit alone. It is
                reflected in the smiles of our employees and the opportunities
                we create for local families. Pushkara Organic is a family
                where joy, growth, and togetherness thrive.
              </p>
              <p className="text-base leading-relaxed text-[#5a3c15]">
                Our vision is simple: To preserve purity and heritage while
                empowering our community. Our mission is clear: To deliver
                nature's best to your home - one jar of A2 Ghee at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2b170e] text-[#fef3e2]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            The Pushkara Promise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#f7e6c2] sm:text-lg">
            Pushkara Organic is the culmination of a five-generation legacy,
            the purity of a sacred land, and a deep-seated commitment to
            wellness. When you open a jar of our ghee, you aren't just using an
            ingredient; you are experiencing a story of heritage and care.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-[#f6c244]">
            Pure tradition. Timeless taste.
          </p>
        </div>
      </section>
    </main>
  );
}
