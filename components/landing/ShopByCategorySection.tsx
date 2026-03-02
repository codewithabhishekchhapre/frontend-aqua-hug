import FadeIn from "../ui/FadeIn";

const categories = [
  { title: "Fish", desc: "Handpicked species for your tank size.", cta: "Shop Fish" },
  { title: "Plants", desc: "Low-tech to high-tech planted setups.", cta: "Shop Plants" },
  { title: "Aquarium Tanks", desc: "Rimless, cabinet, wall-mount & more.", cta: "Shop Tanks" },
  { title: "Filters & Pumps", desc: "Crystal-clear water, silent flow.", cta: "Shop Filtration" },
  { title: "Lighting", desc: "Plant growth + beautiful shimmer.", cta: "Shop Lighting" },
  { title: "Food & Medicine", desc: "Daily care, treatments, and kits.", cta: "Shop Care" },
  { title: "Decorative Items", desc: "Stones, driftwood, and themed decor.", cta: "Shop Decor" },
] as const;

function Icon({ name }: { name: string }) {
  const common = "h-5 w-5 text-[#1a5837]";
  if (name === "Fish") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M21 12c-2.6-5.2-7.1-7.8-12-7.8C6 4.2 3.6 5.2 2 6.7l3.1 2.1L3.8 12l1.3 3.2L2 17.3c1.6 1.5 4 2.5 7 2.5 4.9 0 9.4-2.6 12-7.8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.8h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "Plants") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M12 21v-8.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 12.5c-4.5 0-7-3.2-7-7 4.8 0 8 2.5 8 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.5c4.5 0 7-3.2 7-7-4.8 0-8 2.5-8 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "Aquarium Tanks") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M4.5 7.5h15v11h-15v-11Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7 10.5h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "Filters & Pumps") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M7 6h10l-1 6H8L7 6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 12v7h6v-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "Lighting") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M9 18h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 2a7 7 0 0 0-4 12.8V17h8v-2.2A7 7 0 0 0 12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "Food & Medicine") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M10 6h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8V6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M4 9h6M4 13h6M4 17h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path
        d="M4 20l8-16 8 16H4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ShopByCategorySection() {
  return (
    <section id="shop" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a5837]">
                Shop by Category
              </p>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Everything you need, matched to your aquarium
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Browse essentials with compatibility in mind—so your fish, plants,
                and equipment work together from day one.
              </p>
            </div>
            <a
              href="#featured"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              See custom designs
            </a>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, idx) => (
            <FadeIn key={c.title} delayMs={idx * 60}>
              <a
                href="#"
                className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(26,88,55,0.12),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1a5837]/10 ring-1 ring-[#1a5837]/20">
                    <Icon name={c.title} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-slate-900">
                      {c.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1a5837]">
                      <span>{c.cta}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

