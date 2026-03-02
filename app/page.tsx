import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShopByCategorySection from "../components/landing/ShopByCategorySection";
import FeaturedCustomDesignsSection from "../components/landing/FeaturedCustomDesignsSection";
import RoomDecorShowcaseSection from "../components/landing/RoomDecorShowcaseSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import BlogCareGuideSection from "../components/landing/BlogCareGuideSection";
import Footer from "../components/landing/Footer";
import WhyAquaHugSection from "../components/landing/WhyAquaHugSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Video hero shell: explicit height + stacking so video is visible */}
      <div
        id="home"
        className="relative h-screen min-h-[600px] w-full overflow-hidden text-white"
      >
        {/* Video layer (z-0 so it stays above page bg, below overlay & content) */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/video-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
        />
        {/* Dark overlay so text is readable (above video, below content) */}
        <div
          className="absolute inset-0 z-1 bg-black/90"
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col">
          <Navbar />
          <div id="build-aquarium" className="flex-1">
            <Hero />
          </div>
        </div>
      </div>

      {/* Landing sections (white background) */}
      <ShopByCategorySection />
      <FeaturedCustomDesignsSection />
      <WhyAquaHugSection />
      <RoomDecorShowcaseSection />
      <TestimonialsSection />
      <BlogCareGuideSection />
      <Footer />
    </div>
  );
}
