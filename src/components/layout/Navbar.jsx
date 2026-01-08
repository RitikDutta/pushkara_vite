import { NavLink } from "react-router-dom";
import { cn } from "../../lib/cn";

export default function Navbar() {
  const linkBase =
    "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-black/5";
  const active = "bg-black/5";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-bold">
            R
          </div>
          <span className="font-semibold">Starter</span>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) => cn(linkBase, isActive && active)}
          >
            Home
          </NavLink>

          <a
            href="#features"
            className={cn(linkBase, "hidden sm:inline-flex")}
          >
            Features
          </a>

          <a
            href="#cta"
            className={cn(linkBase, "hidden sm:inline-flex")}
          >
            CTA
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-xl border text-sm font-medium hover:bg-black/5 transition">
            Sign in
          </button>
          <button className="px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90 transition">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
