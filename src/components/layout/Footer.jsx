export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-black/60">
          © {new Date().getFullYear()} Starter. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
          <a className="text-black/70 hover:text-black" href="#">
            Privacy
          </a>
          <a className="text-black/70 hover:text-black" href="#">
            Terms
          </a>
          <a className="text-black/70 hover:text-black" href="#">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
