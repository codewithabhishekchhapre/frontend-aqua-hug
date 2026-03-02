"use client";

import { MouseEvent, useState } from "react";

type TiltState = {
  x: number;
  y: number;
};

export default function Hero() {
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -8; // tilt up/down
    const rotateY = ((x - midX) / midX) * 8; // tilt left/right

    setTilt({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <main className="relative flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <section
        className="relative z-10 flex w-full max-w-4xl justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow behind hero card */}
        <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-xl rounded-[3rem] bg-[radial-gradient(circle_at_top,_rgba(126,225,181,0.25),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,118,110,0.35),_transparent_65%)] opacity-80 blur-3xl" />

        {/* Hero card with tilt */}
        <div
          className="relative w-full rounded-3xl border border-white/5 bg-white/5 px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-[transform,box-shadow,border-color] duration-300 ease-out sm:px-10 sm:py-12"
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Top badge */}
          <div className="inline-flex justify-center items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-white shadow-sm ring-1 ring-white/15 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1a5837] shadow-[0_0_12px_rgba(34,197,94,0.9)]" />
            Smart Aquarium Platform
          </div>

          {/* Heading + copy */}
          <div className="mt-6 space-y-4 text-center">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Design, shop &amp; style your{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                perfect underwater world
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-white/80 sm:text-base">
              From immersive 3D aquarium configurator to a curated shop of compatible
              fish, plants, and decor, AquaHug keeps everything in harmony—for your
              tank and your room.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#1a5837] px-9 py-2.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(26,88,55,0.9)] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-95">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.3),transparent_55%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <span className="relative">Launch 3D Configurator</span>
            </button>

            <button className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-black/20 px-9 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-white hover:bg-white/10 active:translate-y-0 active:scale-95">
              Browse Shop
            </button>
          </div>

          {/* Feature chips */}
          <div className="mt-8 grid gap-4 text-left text-xs text-white/80 sm:grid-cols-3 sm:text-sm">
            <div className="rounded-2xl bg-black/40 p-4 ring-1 ring-white/10 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a5837]">
                3D CONFIGURATOR
              </p>
              <p className="mt-1">
                See tank sizes, aquascapes, and lighting in real-time over live water
                motion.
              </p>
            </div>
            <div className="rounded-2xl bg-black/40 p-4 ring-1 ring-white/10 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a5837]">
                COMPATIBLE SHOP
              </p>
              <p className="mt-1">
                Only see fish, plants, tanks, and gear that thrive together in your
                setup.
              </p>
            </div>
            <div className="rounded-2xl bg-black/40 p-4 ring-1 ring-white/10 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a5837]">
                ROOM DECOR PLANNER
              </p>
              <p className="mt-1">
                Plan the whole room around your aquarium with lighting and decor
                ideas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

