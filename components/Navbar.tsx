"use client";

import { useState } from "react";

const NAV_ITEMS: { id: string; label: string; hasDropdown?: boolean }[] = [
  { id: "home", label: "Home" },
  { id: "build-aquarium", label: "Build Aquarium" },
  { id: "shop", label: "Shop", hasDropdown: true },
  { id: "room-decor", label: "Room Decor Planner" },
  { id: "custom-orders", label: "Custom Orders" },
  { id: "blog", label: "Blog" },
  { id: "support", label: "Support" },
];

const SHOP_ITEMS = [
  "Fish",
  "Plants",
  "Aquarium Tanks",
  "Filters & Pumps",
  "Lighting",
  "Food & Medicine",
  "Decorative Items",
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-gradient-to-b from-black/70 via-black/50 to-black/20 text-white backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 rounded-full bg-white/5 px-3 py-1.5 text-sm font-semibold tracking-tight text-white/90 shadow-lg shadow-black/40 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/10"
        >
          <img
            src="/brand_logo.png"
            alt="AquaHug"
            className="h-8 w-8 rounded-full object-contain sm:h-9 sm:w-9"
          />
          <span className="hidden sm:inline">AquaHug</span>
        </a>

        {/* Desktop nav with active indicator */}
        <nav className="relative hidden items-center gap-1 text-sm sm:flex">
          {NAV_ITEMS.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.id} className="group relative">
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`group/nav-item relative rounded-lg px-3 py-2.5 font-medium tracking-tight transition-colors ${
                      activeTab === item.id
                        ? "text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      {item.label}
                      <span className="text-[10px] opacity-70 transition-transform duration-300 group-hover/nav-item:-translate-y-0.5 group-hover/nav-item:rotate-180">
                        ▼
                      </span>
                    </span>
                    {/* Smooth underline / pill on hover + active */}
                    <span
                      className={`pointer-events-none absolute left-1/2 bottom-1.5 h-0.5 w-0 min-w-[24px] -translate-x-1/2 rounded-full bg-[#1a5837] opacity-0 transition-all duration-300 ease-out group-hover/nav-item:w-[calc(100%-16px)] group-hover/nav-item:opacity-80 ${
                        activeTab === item.id ? "w-[calc(100%-16px)] opacity-100" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div className="invisible absolute left-0 top-full mt-1 w-56 rounded-xl border border-white/15 bg-black/90 py-2 shadow-xl backdrop-blur-xl opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {SHOP_ITEMS.map((sub) => (
                      <button
                        key={sub}
                        className="flex w-full px-4 py-2 text-left text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group/nav-item relative rounded-lg px-3 py-2.5 font-medium tracking-tight transition-colors ${
                  activeTab === item.id
                    ? "text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
                {/* Smooth underline / pill on hover + active */}
                <span
                  className={`pointer-events-none absolute left-1/2 bottom-1.5 h-0.5 w-0 min-w-[24px] -translate-x-1/2 rounded-full bg-[#1a5837] opacity-0 transition-all duration-300 ease-out group-hover/nav-item:w-[calc(100%-16px)] group-hover/nav-item:opacity-80 ${
                    activeTab === item.id ? "w-[calc(100%-16px)] opacity-100" : ""
                  }`}
                  aria-hidden
                />
              </button>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="hidden items-center gap-2 sm:flex">
          <button className="rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10">
            Login / Register
          </button>
          {/* <button className="rounded-full bg-[#1a5837] px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#28563F]">
            Start Building
          </button> */}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white transition-colors hover:bg-white/10 sm:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="flex h-5 w-5 flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span className={`block h-0.5 w-full bg-current ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-full bg-current transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/80 px-4 py-4 text-white sm:hidden">
          <div className="flex flex-col gap-0.5">
            {NAV_ITEMS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <details key={item.id} className="group/details">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 font-medium text-white/90 hover:text-white">
                      {item.label}
                      <span className="text-xs opacity-70 group-open/details:rotate-180">▼</span>
                    </summary>
                    <div className="ml-3 flex flex-col border-l border-white/20 py-1 pl-3">
                      {SHOP_ITEMS.map((sub) => (
                        <button
                          key={sub}
                          className="py-2 text-left text-sm text-white/75 hover:text-white"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </details>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileOpen(false);
                  }}
                  className={`flex items-center gap-2 py-2.5 text-left font-medium transition-colors ${
                    activeTab === item.id
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {activeTab === item.id && (
                    <span className="h-1 w-1 rounded-full bg-[#1a5837]" />
                  )}
                  {item.label}
                </button>
              );
            })}
            <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
              <button className="flex-1 rounded-full border border-white/40 py-2.5 text-sm font-medium text-white hover:bg-white/10">
                Login / Register
              </button>
              <button className="flex-1 rounded-full bg-[#1a5837] py-2.5 text-sm font-medium text-white hover:bg-[#28563F]">
                Start Building
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
