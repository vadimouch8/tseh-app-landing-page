import { AudienceSection } from "@/components/landing/AudienceSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { CurrentAccountingSection } from "@/components/landing/CurrentAccountingSection";
import { CtaBand } from "@/components/landing/CtaBand";
import { EarlyAccessSection } from "@/components/landing/EarlyAccessSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { OutcomeSection } from "@/components/landing/OutcomeSection";
import { PainSection } from "@/components/landing/PainSection";
import { ProjectMockup } from "@/components/landing/ProjectMockup";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { StickyHeader } from "@/components/landing/StickyHeader";
import { WhySection } from "@/components/landing/WhySection";

export default function HomePage() {
  return (
    <main id="top" className="bg-tsehBg text-tsehText">
      <StickyHeader />
      <HeroSection />
      <SocialProofSection />
      <PainSection />
      <ProjectMockup />
      <CtaBand />
      <WhySection />
      <CurrentAccountingSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaBand />
      <ComparisonSection />
      <AudienceSection />
      <EarlyAccessSection />
      <OutcomeSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
