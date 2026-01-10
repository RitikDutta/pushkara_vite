export default function Footer() {
  return (
    <footer className="mt-16 bg-[#3b2318] text-[#f3e7d7]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6cf57] text-lg font-bold text-[#3b2318]">
                P
              </div>
              <div className="text-2xl font-semibold text-[#fef6e9]">pushkara</div>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#e7d6c4]">
              We are a family-run, sustainable dairy farm committed to delivering 100% fresh, pure,
              and hormone-free.
            </p>

            <div className="h-px w-full bg-white/10" />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#f6cf57]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.57 4.07a2 2 0 0 1-.57 1.7l-2.2 2.2a16 16 0 0 0 6.88 6.88l2.2-2.2a2 2 0 0 1 1.7-.57l4.07.57A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#fef6e9]">Phone Number</p>
                  <p className="text-sm text-[#e7d6c4]">(+91) 254-882-963</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#f6cf57]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#fef6e9]">Our Location</p>
                  <p className="text-sm text-[#e7d6c4]">pushkara , pushkar ajmer rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#fef6e9]">Quick Link</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#e7d6c4]">
              <li>
                <a className="transition hover:text-white" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#fef6e9]">Careers</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#e7d6c4]">
              <li>
                <a className="transition hover:text-white" href="#">
                  Delivery & Logistics
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Customer Support
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Farmhands
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  FSSAI/ISO/GMP
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-base font-semibold text-[#fef6e9]">Our Newsletter</h3>
              <p className="mt-3 text-sm text-[#e7d6c4]">
                Join our newsletter and be the first to know about:
              </p>
            </div>
            <form className="space-y-4">
              <div className="flex items-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                <input
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-[#fef6e9] placeholder:text-[#d7c4b2] focus:outline-none"
                  placeholder="Email Address *"
                  type="email"
                />
                <button
                  className="flex h-11 w-11 items-center justify-center bg-[#f6cf57] text-[#3b2318] transition hover:brightness-95"
                  type="submit"
                  aria-label="Subscribe"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2 11 13" />
                    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                  </svg>
                </button>
              </div>
            </form>
            <div className="flex items-center gap-3 text-sm text-[#e7d6c4]">
              <span className="text-[#f6cf57]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
              <span>pushkara@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 text-sm text-[#e7d6c4] md:flex-row md:items-center md:justify-between">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <a
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#fef6e9] transition hover:border-[#f6cf57] hover:text-[#f6cf57]"
              href="#"
              aria-label="Instagram"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.3" />
              </svg>
            </a>
            <a
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#fef6e9] transition hover:border-[#f6cf57] hover:text-[#f6cf57]"
              href="#"
              aria-label="Facebook"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4" />
                <path d="M14 9h5" />
                <path d="M10 9h5v12h-5V9Z" />
                <path d="M10 9V7a4 4 0 0 1 4-4" />
              </svg>
            </a>
            <a
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#fef6e9] transition hover:border-[#f6cf57] hover:text-[#f6cf57]"
              href="#"
              aria-label="X"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l16 16" />
                <path d="M20 4 4 20" />
              </svg>
            </a>
            <a
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#fef6e9] transition hover:border-[#f6cf57] hover:text-[#f6cf57]"
              href="#"
              aria-label="Pinterest"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 16.5 11 11a2.5 2.5 0 1 1 3.6 2.3l-1.2 3.2" />
                <path d="M10.5 20.5 12 15" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
