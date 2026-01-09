import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 animate-nav-drop text-[#4b3307] shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
      <div className="marquee bg-[#f6c244] text-[11px] uppercase tracking-[0.25em] text-[#4b3307]">
        <div className="marquee-track">
          <span>Free delivery on orders over Rs 5,000</span>
          <span>Fresh batch every week</span>
          <span>Traditional bilona method</span>
          <span>Lab-tested purity</span>
          <span>Free delivery on orders over Rs 5,000</span>
          <span>Fresh batch every week</span>
          <span>Traditional bilona method</span>
          <span>Lab-tested purity</span>
        </div>
      </div>

      <div className="bg-white">
        <div className="border-t-[3px] border-[#f6c244]">
          <div className="mx-auto max-w-[1600px] px-4">
            <div className="flex flex-col gap-3 py-3 lg:py-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#f6c244]/35 text-lg font-bold">
                    P
                  </div>
                  <span className="text-2xl font-semibold tracking-tight">Pushkara</span>
                </div>

              <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 text-sm font-medium text-[#4b3307]">
                <NavLink to="/" className="transition hover:text-[#0f8a78]">
                  Home
                </NavLink>
                <button className="inline-flex items-center gap-1 transition hover:text-[#0f8a78]">
                  Pages
                  <ChevronDownIcon />
                </button>
                <NavLink to="/product" className="transition hover:text-[#0f8a78]">
                  Shop All
                </NavLink>
                <button className="inline-flex items-center gap-1 transition hover:text-[#0f8a78]">
                  Categories
                  <ChevronDownIcon />
                </button>
                <a href="#deals" className="transition hover:text-[#0f8a78]">
                  Deals & Offers
                </a>
                <a href="#contact" className="transition hover:text-[#0f8a78]">
                  Contact
                </a>
              </nav>

              <div className="ml-auto hidden items-center gap-3 xl:flex">
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs">
                  <PhoneIcon />
                  <div className="leading-tight">
                    <span className="block text-[10px] uppercase tracking-wide text-slate-500">
                      Phone Number
                    </span>
                    <span className="font-semibold">+9870-232-232</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {["F", "P", "I", "O"].map((letter) => (
                    <span
                      key={letter}
                      className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-xs font-semibold text-slate-600 transition hover:bg-slate-100"
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>

                <button className="ml-auto inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden">
                  <MenuIcon />
                </button>
              </div>

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#0f8a78] shadow-sm">
                  <MenuIcon />
                  All Categories
                  <ChevronDownIcon />
                </button>

                <div className="flex w-full flex-1 items-stretch overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm">
                  <button className="hidden items-center gap-1 border-r border-slate-200 px-3 text-xs font-semibold text-slate-600 sm:flex">
                    All Categories
                    <ChevronDownIcon className="text-slate-500" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type your products..."
                    className="w-full flex-1 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  />
                  <button className="inline-flex items-center gap-2 bg-[#f6c244] px-4 text-sm font-semibold text-[#4b3307]">
                    Search
                    <SearchIcon />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4 lg:ml-auto">
                  <button className="hidden items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-[#0f8a78] sm:flex">
                    <UserIcon />
                    Accounts
                  </button>
                  <div className="flex items-center gap-3">
                    <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100">
                      <HeartIcon />
                      <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-[#f6c244] text-[10px] font-bold text-[#4b3307]">
                        0
                      </span>
                    </button>
                    <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100">
                      <CartIcon />
                      <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-[#f6c244] text-[10px] font-bold text-[#4b3307]">
                        0
                      </span>
                    </button>
                    <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden">
                      <MenuIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ChevronDownIcon({ className = "" }) {
  return (
    <svg
      className={`h-3.5 w-3.5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 7.47a.75.75 0 0 1 1.06 0L10 11.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M4 7h16M4 12h16M4 17h12"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 text-[#0f8a78]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M22 16.9v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.18 2 2 0 0 1 4.09 1h2a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.6a2 2 0 0 1-.45 2.11L7.1 8.9a16 16 0 0 0 6 6l1.48-1.13a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.6.59A2 2 0 0 1 22 16.9Z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
      <path d="m20 20-3.5-3.5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="8" r="3.5" strokeWidth="1.8" />
      <path
        d="M4 20c1.8-3.4 5-5 8-5s6.2 1.6 8 5"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-4 5 5 0 0 1 9 4c-2 4.5-9 9-9 9Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="9" cy="20" r="1.5" strokeWidth="1.6" />
      <circle cx="17" cy="20" r="1.5" strokeWidth="1.6" />
      <path
        d="M3 4h2l2.5 12h10.5l2-8H7"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
