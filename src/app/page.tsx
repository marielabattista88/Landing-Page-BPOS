import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import MetricsSection from "@/components/landing/MetricsSection";
import StatsMarquee from "@/components/landing/StatsMarquee";
import HowItWorks from "@/components/landing/HowItWorks";
import StickyFeatures from "@/components/landing/StickyFeatures";
import FeaturePortal from "@/components/landing/FeaturePortal";
import RunYourBusiness from "@/components/landing/RunYourBusiness";
import SecuritySection from "@/components/landing/SecuritySection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F8FAFB]">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection />
        {/* Social proof band */}
        <StatsMarquee />
        {/* Feature Sections */}
        <StickyFeatures />
        {/* How It Works */}
        <HowItWorks />
        {/* Business Impact */}
        <MetricsSection />
        {/* 5. Retailer Portal */}
        <FeaturePortal />
        {/* 6. Run Your Business Smarter */}
        <RunYourBusiness />
        {/* 8. Security */}
        <SecuritySection />
        {/* 9. Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
