export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      {/* HERO */}
      <section className="py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full border bg-white">
              ⚡ Vite + React + Tailwind
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              Build clean UI fast.
              <span className="block text-black/60">Ship faster than your competition.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black/60">
              A scalable starter template with routing, layout, and a sane folder structure.
              Perfect for landing pages, dashboards, and SaaS apps.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3" id="cta">
              <button className="px-5 py-3 rounded-2xl bg-black text-white font-medium hover:opacity-90 transition">
                Get started
              </button>
              <button className="px-5 py-3 rounded-2xl border font-medium hover:bg-black/5 transition">
                View docs
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-black/60">
              <span className="px-3 py-1 rounded-full border">Responsive</span>
              <span className="px-3 py-1 rounded-full border">Reusable layout</span>
              <span className="px-3 py-1 rounded-full border">Router ready</span>
            </div>
          </div>

          {/* MOCK CARD */}
          <div className="rounded-3xl border p-6 shadow-sm bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-black/60">Preview</p>
                <p className="font-semibold">Dashboard Card</p>
              </div>
              <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                📊
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-sm text-black/60">Users</p>
                <p className="mt-1 text-2xl font-bold">1,248</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-sm text-black/60">Conversion</p>
                <p className="mt-1 text-2xl font-bold">4.7%</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border p-4">
              <p className="text-sm text-black/60">Status</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                <span className="text-sm font-medium">All systems normal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12" id="features">
        <h2 className="text-2xl font-bold">What you get</h2>
        <p className="mt-2 text-black/60">
          Minimal but production-style structure.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ["Folder structure that scales", "Pages, layout, lib, and app routing separated cleanly."],
            ["Fast UI iteration", "Tailwind keeps styling inside components with zero CSS chaos."],
            ["Router pre-wired", "Add new pages without touching messy setup."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl border p-6 bg-white">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm text-black/60">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
