import FadeIn from "../ui/FadeIn";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#07140e] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(26,88,55,0.35),transparent_55%),radial-gradient(circle_at_100%_35%,rgba(14,165,233,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/15" />
                <div>
                  <p className="text-lg font-semibold tracking-tight">AquaHug</p>
                  <p className="text-sm text-white/70">
                    Smart aquarium design + shopping + care.
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm text-white/75">
                Build your aquarium in 3D, shop compatible essentials, and plan the
                room around it. AquaHug helps you deliver a complete ecosystem—not
                just a product.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-full bg-[#1a5837] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#28563F]"
                >
                  Start Building
                </a>
                <a
                  href="#blog"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Care Guides
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4">
              <div>
                <p className="text-sm font-semibold">Product</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>
                    <a className="hover:text-white" href="#build-aquarium">
                      3D Configurator
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#room-decor">
                      Room Decor Planner
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#featured">
                      Custom Designs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold">Shop</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>
                    <a className="hover:text-white" href="#shop">
                      Fish
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#shop">
                      Plants
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#shop">
                      Tanks & Equipment
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold">Company</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>
                    <a className="hover:text-white" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold">Support</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>
                    <a className="hover:text-white" href="#">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#">
                      Shipping & Returns
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delayMs={160}>
          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} AquaHug. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M11 9.5 15 12l-4 2.5v-5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M7 17 17 7M7 7l10 10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

