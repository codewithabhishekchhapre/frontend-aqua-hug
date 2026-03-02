import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background video (transparent background look) */}
      <video
        className="pointer-events-none fixed inset-0 -z-20 h-full w-full object-cover"
        src="/video-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Black transparent overlay to keep text readable over video */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/90" />

      {/* Navbar */}
      <Navbar />

      {/* Hero with centered content and interactions */}
      <Hero />
    </div>
  );
}
