import FadeIn from "../ui/FadeIn";

const testimonials = [
  {
    name: "Aarav S.",
    role: "First-time aquarium owner",
    quote:
      "The compatibility suggestions saved me from buying the wrong fish and filter. The setup looks amazing and is easy to maintain.",
  },
  {
    name: "Meera K.",
    role: "Interior design enthusiast",
    quote:
      "Room Decor Planner is my favorite. I matched the tank lighting to my living room and it instantly upgraded the whole space.",
  },
  {
    name: "Rohan P.",
    role: "Planted tank hobbyist",
    quote:
      "The 3D configurator + shopping list made planning simple. My planted scape turned out exactly how I imagined.",
  },
] as const;

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a5837]">
                Testimonials
              </p>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                People love how easy AquaHug feels
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                From beginners to hobbyists, our goal is the same: make aquarium
                design, shopping, and care simple—and beautiful.
              </p>
            </div>
            <a
              href="#blog"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Read care guides
            </a>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <FadeIn key={t.name} delayMs={idx * 90}>
              <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <Stars />
                <p className="mt-4 text-sm text-slate-700">“{t.quote}”</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-[#1a5837]/10 ring-1 ring-[#1a5837]/15" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

