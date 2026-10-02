import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { InteractiveConcernFinder } from "@/components/home/InteractiveConcernFinder";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { SelfAssessmentQuiz } from "@/components/home/SelfAssessmentQuiz";
import { ResourcePreview } from "@/components/home/ResourcePreview";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — light ivory with ambient orbs */}
      <HeroSection />
      {/* 2. Trust strip — dark forest banner */}
      <TrustStrip />
      {/* 3. About — warm ivory */}
      <AboutPreview />
      {/* 4. Services — dark forest gradient */}
      <ServicesGrid />
      {/* 5. Concern finder — light sage */}
      <InteractiveConcernFinder />
      {/* 6. Values — sage green gradient */}
      <ValuesSection />
      {/* 7. Journey/approach — deep dark forest */}
      <ApproachSection />
      {/* 8. Testimonials — midnight dark */}
      <TestimonialSection />
      {/* 9. Self-assessment quiz */}
      <SelfAssessmentQuiz />
      {/* 10. Resources */}
      <ResourcePreview />
      {/* 11. CTA — deep dark with orbs */}
      <AppointmentCTA />
    </>
  );
}
