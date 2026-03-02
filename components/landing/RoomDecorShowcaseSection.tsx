import FadeIn from "../ui/FadeIn";

const showcase = [
  {
    title: "Cozy living room corner",
    desc: "Warm lighting + low-noise filtration for relaxing vibes.",
  },
  {
    title: "Modern office feature wall",
    desc: "Statement tank that matches clean furniture and wall tones.",
  },
  {
    title: "Bedroom ambient setup",
    desc: "Soft shimmer + calm aquascape with easy care routines.",
  },
] as const;

export default function RoomDecorShowcaseSection() {
  return (
    <section
      id="room-decor"
      className="relative overflow-hidden bg-linear-to-b from-white to-emerald-50/40 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_10%,rgba(26,88,55,0.10),transparent_45%),radial-gradient(circle_at_100%_40%,rgba(14,165,233,0.10),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a5837]">
              Room Decor Showcase
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Make your aquarium look like it belongs in your space
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Visualize placement, match lighting mood, and build a design that
              complements your furniture and wall colors.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
          <FadeIn delayMs={120}>
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur sm:p-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "Try placements",
                  "Lighting mood",
                  "Furniture matching",
                  "Wall color ideas",
                  "Cable + pump planning",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-[#1a5837]/10 px-3 py-1 text-xs font-semibold text-[#1a5837] ring-1 ring-[#1a5837]/15"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-sm font-semibold text-slate-900">
                    Planner flow
                  </p>
                  <ol className="mt-2 space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1a5837] text-xs font-bold text-white">
                        1
                      </span>
                      Pick room + placement
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1a5837] text-xs font-bold text-white">
                        2
                      </span>
                      Choose tank + style
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1a5837] text-xs font-bold text-white">
                        3
                      </span>
                      Match lighting + decor
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1a5837] text-xs font-bold text-white">
                        4
                      </span>
                      Add compatible shop items
                    </li>
                  </ol>
                </div>

                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#1a5837] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#28563F]"
                >
                  Open Room Decor Planner
                </a>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {showcase.map((item, idx) => (
              <FadeIn key={item.title} delayMs={180 + idx * 80}>
                <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="h-40 bg-[radial-gradient(circle_at_20%_20%,rgba(26,88,55,0.26),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.16),transparent_60%)]" />
                  <div className="p-5">
                    <p className="text-base font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1a5837]">
                      Preview vibe
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

