import FadeIn from "../ui/FadeIn";

const posts = [
  {
    title: "Beginner Setup: First Tank Checklist",
    tag: "Care Guide",
    desc: "What to buy, what to skip, and how to start without common mistakes.",
    readTime: "6 min read",
  },
  {
    title: "How to Cycle Your Aquarium (Simple Explanation)",
    tag: "Care Guide",
    desc: "Understand the nitrogen cycle and keep fish safe from day one.",
    readTime: "8 min read",
  },
  {
    title: "Planted Tank Lighting: Finding the Right Balance",
    tag: "Blog",
    desc: "Learn how to get healthy plant growth without algae problems.",
    readTime: "7 min read",
  },
] as const;

export default function BlogCareGuideSection() {
  return (
    <section id="blog" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a5837]">
                Blog + Care Guide
              </p>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Learn aquarium care in a simple, friendly way
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Short guides that help you plan, maintain, and enjoy your aquarium—without
                confusing jargon.
              </p>
            </div>
            <a
              href="#footer"
              className="inline-flex items-center justify-center rounded-full bg-[#1a5837] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#28563F]"
            >
              Get support
            </a>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((p, idx) => (
            <FadeIn key={p.title} delayMs={idx * 90}>
              <a
                href="#"
                className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-36 bg-[radial-gradient(circle_at_10%_0%,rgba(26,88,55,0.25),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.12),transparent_60%)]" />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#1a5837]/10 px-3 py-1 text-xs font-semibold text-[#1a5837] ring-1 ring-[#1a5837]/15">
                      {p.tag}
                    </span>
                    <span className="text-xs text-slate-500">{p.readTime}</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1a5837]">
                    Read article
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
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

