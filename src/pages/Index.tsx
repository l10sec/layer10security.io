import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { ChallengeSection } from "@/components/ChallengeSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <ChallengeSection />
      <FeaturesSection />
      <ArchitectureSection />
      <UseCasesSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
