import FadeIn from "../ui/FadeIn";

const stats = [
  { label: "Design time saved", value: "60%", hint: "vs. planning builds manually" },
  { label: "Compatible picks", value: "100%", hint: "filtered for your tank profile" },
  { label: "Happy setups", value: "4.9★", hint: "average customer satisfaction" },
] as const;

export default function WhyAquaHugSection() {
  return (
    <section className="bg-[#020917] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Why AquaHug
              </p>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                One place to{" "}
                <span className="font-bold text-emerald-300">
                  design, shop, and maintain
                </span>{" "}
                your aquarium.
              </h2>
              <p className="mt-3 text-sm text-white/80 sm:text-base">
                Instead of guessing which fish, plants, and equipment work together, AquaHug
                gives you a guided path—from first sketch to room-ready feature tank.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li>• <span className="font-semibold text-emerald-300">3D configurator</span> that looks like your actual room.</li>
                <li>• <span className="font-semibold text-emerald-300">Compatibility rules</span> baked into every product list.</li>
                <li>• <span className="font-semibold text-emerald-300">Care guidance</span> so your ecosystem stays healthy long-term.</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delayMs={120}>
            <div className="rounded-3xl border border-emerald-500/20 bg-[#020817] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur sm:p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10"
                  >
                    <p className="text-xl font-bold text-emerald-300 sm:text-2xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white/80">
                      {s.label}
                    </p>
                    <p className="mt-1 text-[11px] text-white/60">{s.hint}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-emerald-500/10 p-4 ring-1 ring-emerald-500/30">
                <p className="text-sm font-semibold text-emerald-200">
                  You focus on the vision. We keep everything compatible.
                </p>
                <p className="mt-1 text-sm text-emerald-100/80">
                  AquaHug links your room plan, tank configuration, and shopping list so
                  every decision pushes the design forward—not sideways.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

