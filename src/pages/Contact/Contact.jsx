const contactItems = [
  {
    title: "Contact",
    detail: "(+91) 254-882-963",
    icon: PhoneIcon,
  },
  {
    title: "Email",
    detail: "support@domainname.com",
    icon: MailIcon,
  },
  {
    title: "Address",
    detail: "Near Sunrise Highway, Anandpur - MH 400123",
    icon: PinIcon,
  },
];

const socialLinks = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "X", icon: XIcon },
  { label: "Pinterest", icon: PinterestIcon },
];

export default function Contact() {
  return (
    <main className="relative overflow-hidden bg-[#fdf2dd] text-[#4b3307]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f6c244]/25 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-[#e9b45f]/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff5e2,transparent_55%)]" />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-10">
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: "40ms" }}>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#a66a1b]">
                <SparkleIcon className="h-4 w-4 text-[#f6c244]" />
                <span>Contact Us</span>
              </div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Stay directly connected with Pushkara today
              </h1>
              <p className="max-w-xl text-base text-[#5a3c15] sm:text-lg">
                We are here to answer questions, plan deliveries, and keep you stocked with
                fresh dairy essentials.
              </p>
            </div>

            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "140ms" }}>
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex gap-4 pb-6 ${index !== contactItems.length - 1 ? "border-b border-[#e8d5b9]" : ""}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6c244] text-[#3b2318] shadow-[0_10px_22px_rgba(75,51,7,0.18)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base font-semibold">{item.title}</p>
                      <p className="text-sm text-[#6a4a23] sm:text-base">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6a4a23]">
                Follow Us Today
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href="#"
                      aria-label={link.label}
                      className="grid h-10 w-10 place-items-center rounded-full bg-[#3b2318] text-[#fdf2dd] transition hover:translate-y-[-2px] hover:bg-[#2d1b12]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form
            className="animate-fade-up rounded-[28px] bg-[#3b2318] p-6 text-[#fef6e9] shadow-[0_28px_50px_rgba(32,18,8,0.35)] sm:p-8"
            style={{ animationDelay: "200ms" }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold sm:text-4xl">Send a message</h2>
              <p className="text-sm text-[#d7c4b2]">
                Share your details and we will reach out shortly.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  className="w-full rounded-2xl border border-[#4f3526] bg-[#4b3123] px-4 py-3 text-sm text-[#fef6e9] placeholder:text-[#cdb9a6] focus:outline-none focus:ring-2 focus:ring-[#f6c244]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  className="w-full rounded-2xl border border-[#4f3526] bg-[#4b3123] px-4 py-3 text-sm text-[#fef6e9] placeholder:text-[#cdb9a6] focus:outline-none focus:ring-2 focus:ring-[#f6c244]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="w-full rounded-2xl border border-[#4f3526] bg-[#4b3123] px-4 py-3 text-sm text-[#fef6e9] placeholder:text-[#cdb9a6] focus:outline-none focus:ring-2 focus:ring-[#f6c244]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  type="tel"
                  className="w-full rounded-2xl border border-[#4f3526] bg-[#4b3123] px-4 py-3 text-sm text-[#fef6e9] placeholder:text-[#cdb9a6] focus:outline-none focus:ring-2 focus:ring-[#f6c244]"
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full rounded-2xl border border-[#4f3526] bg-[#4b3123] px-4 py-3 text-sm text-[#fef6e9] placeholder:text-[#cdb9a6] focus:outline-none focus:ring-2 focus:ring-[#f6c244]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-[#f6c244] px-4 py-3 text-sm font-semibold text-[#3b2318] shadow-[0_12px_22px_rgba(19,9,3,0.35)] transition hover:-translate-y-0.5 hover:brightness-95"
            >
              Submit Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function SparkleIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l1.9 4.5L18 8.4l-4.1 1.8L12 15l-1.9-4.8L6 8.4l4.1-1.9L12 2Z" />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.18 2 2 0 0 1 4.09 1h2a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.6a2 2 0 0 1-.45 2.11L7.1 8.9a16 16 0 0 0 6 6l1.48-1.13a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.6.59A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FacebookIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h4" />
      <path d="M14 9h5" />
      <path d="M10 9h5v12h-5V9Z" />
      <path d="M10 9V7a4 4 0 0 1 4-4" />
    </svg>
  );
}

function InstagramIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.3" />
    </svg>
  );
}

function XIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4l16 16" />
      <path d="M20 4 4 20" />
    </svg>
  );
}

function PinterestIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 16.5 11 11a2.5 2.5 0 1 1 3.6 2.3l-1.2 3.2" />
      <path d="M10.5 20.5 12 15" />
    </svg>
  );
}
