import FadeIn from "../ui/FadeIn";

const designs = [
  {
    title: "Modern Minimal Rimless",
    tag: "Clean lines • Low-maintenance",
    desc: "A premium rimless tank with balanced filtration, curated stocking, and a calm scape that fits modern interiors.",
  },
  {
    title: "Nature Planted Aquascape",
    tag: "Planted • High impact",
    desc: "A lush planted layout with lighting + CO₂ guidance, plant pairing, and a growth-friendly maintenance plan.",
  },
  {
    title: "Luxury Wall Feature Tank",
    tag: "Statement piece • Room-ready",
    desc: "A striking wall-mounted or cabinet feature tank designed to match your furniture, lighting, and space flow.",
  },
] as const;

export default function FeaturedCustomDesignsSection() {
  return (
    <section id="featured" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a5837]">
                Featured Custom Designs
              </p>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Designed in 3D. Delivered as a complete ecosystem.
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                You don’t just buy a tank—you get a plan. We help you configure the
                aquarium, select compatible livestock and equipment, and style the
                room around it.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-full bg-[#1a5837] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#28563F]"
                >
                  Request a custom quote
                </a>
                <a
                  href="#room-decor"
                  className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                >
                  See room showcase
                </a>
              </div>
            </div>

            {/* Value cards */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur sm:p-6">
              <p className="text-sm font-semibold text-slate-900">
                What’s included in a custom build
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {[
                  "3D configuration & layout",
                  "Compatibility-based shopping list",
                  "Filter, pump & lighting guidance",
                  "Aquascape styling",
                  "Delivery + installation planning",
                  "Maintenance & care recommendations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1a5837]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl bg-[#1a5837]/5 p-4 ring-1 ring-[#1a5837]/10">
                <p className="text-sm font-medium text-slate-900">
                  Pro tip
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Start with the room. AquaHug helps you plan the aquarium position,
                  lighting mood, and decor first—then builds the ecosystem to match.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {designs.map((d, idx) => (
            <FadeIn key={d.title} delayMs={idx * 90}>
              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="h-36 bg-[radial-gradient(circle_at_10%_0%,rgba(26,88,55,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.22),transparent_60%)]" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a5837]">
                    {d.tag}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                    {d.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{d.desc}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1a5837]"
                  >
                    View details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

