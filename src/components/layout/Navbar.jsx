import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen((open) => !open);
  const handleClose = () => setIsMenuOpen(false);

  return (
    <header
      data-scroll-header
      className="fixed top-0 left-0 right-0 z-50 animate-nav-drop text-[#4b3307] shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
    >
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
              <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4">
                <div className="col-start-2 flex items-center gap-3 justify-self-center">
                  <img
                    src="/logo.png"
                    alt="Pushkara logo"
                    className="h-10 w-10 rounded-xl object-contain"
                  />
                  <span className="text-2xl font-semibold tracking-tight">Pushkara Organic</span>
                </div>

                <div className="col-start-3 flex items-center justify-end gap-3">
                  <div className="hidden items-center gap-3 xl:flex">
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
                      {[
                        { label: "Instagram", src: "/Instagram.png" },
                        { label: "Gmail", src: "/gmail.png" },
                        { label: "Facebook", src: "/facebook.png" },
                        { label: "Twitter", src: "/x.png" },
                      ].map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          aria-label={item.label}
                          className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-50"
                        >
                          <img
                            src={item.src}
                            alt=""
                            className="h-4 w-4 object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={handleToggle}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                  >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-4">
                <nav className="hidden items-center justify-center gap-5 text-sm font-medium text-[#4b3307] lg:col-start-2 lg:flex">
                  <NavLink to="/" className="transition hover:text-[#0f8a78]">
                    Home
                  </NavLink>
                  <NavLink to="/about" className="transition hover:text-[#0f8a78]">
                    About Us
                  </NavLink>
                  <NavLink to="/product" className="transition hover:text-[#0f8a78]">
                    Shop All
                  </NavLink>
                  <a href="#deals" className="transition hover:text-[#0f8a78]">
                    Deals & Offers
                  </a>
                  <NavLink to="/contact" className="transition hover:text-[#0f8a78]">
                    Contact
                  </NavLink>
                </nav>

                <div className="flex items-center justify-between gap-4 lg:col-start-3 lg:justify-self-end">
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
                  </div>
                </div>
              </div>

              <div
                id="mobile-menu"
                className={`lg:hidden overflow-hidden transition-all duration-300 ${
                  isMenuOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#4b3307] shadow-sm">
                  <nav className="flex flex-col gap-3">
                    <NavLink to="/" className="transition hover:text-[#0f8a78]" onClick={handleClose}>
                      Home
                    </NavLink>
                    <NavLink
                      to="/about"
                      className="transition hover:text-[#0f8a78]"
                      onClick={handleClose}
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/product"
                      className="transition hover:text-[#0f8a78]"
                      onClick={handleClose}
                    >
                      Shop All
                    </NavLink>
                    <a
                      href="#deals"
                      className="transition hover:text-[#0f8a78]"
                      onClick={handleClose}
                    >
                      Deals & Offers
                    </a>
                    <NavLink
                      to="/contact"
                      className="transition hover:text-[#0f8a78]"
                      onClick={handleClose}
                    >
                      Contact
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
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

function CloseIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M6 6l12 12M18 6l-12 12"
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
