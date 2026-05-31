import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsMarquee from "@/components/landing/StatsMarquee";
import TrustedBy from "@/components/landing/TrustedBy";
import FeatureBasket from "@/components/landing/FeatureBasket";
import FeatureCheckout from "@/components/landing/FeatureCheckout";
import FeaturePortal from "@/components/landing/FeaturePortal";
import MetricsSection from "@/components/landing/MetricsSection";
import HardwareSection from "@/components/landing/HardwareSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SecuritySection from "@/components/landing/SecuritySection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F8FAFB]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsMarquee />
        <TrustedBy />
        <FeatureBasket />
        <FeatureCheckout />
        <FeaturePortal />
        <MetricsSection />
        <HardwareSection />
        <TestimonialsSection />
        <SecuritySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
