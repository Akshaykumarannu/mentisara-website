import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ValuesSection } from "@/components/home/ValuesSection";
import { SelfAssessmentQuiz } from "@/components/home/SelfAssessmentQuiz";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ResourcePreview } from "@/components/home/ResourcePreview";
import { SpecializedCareSection } from "@/components/home/SpecializedCareSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero section */}
      <HeroSection />

      {/* 3. Trust & care indicators */}
      <TrustStrip />

      {/* 4. About Mentisara & 5. Credentials / Our Approach */}
      <AboutPreview />

      {/* 6. Our Services (6 keyword/overview cards) */}
      <ServicesGrid />

      {/* 7. Practice Philosophy / Principles */}
      <ValuesSection />

      {/* 8. 1-Minute Emotional Check-In (Placed before Therapeutic Process) */}
      <SelfAssessmentQuiz />

      {/* 9. Therapeutic Process */}
      <ApproachSection />

      {/* 10. Insights & Resources */}
      <ResourcePreview />

      {/* 11. Specialized Care / Areas We Support */}
      <SpecializedCareSection />

      {/* 12. Client Experiences / Perspectives (Placed after Specialized Care) */}
      <TestimonialSection />

      {/* 13. Final CTA */}
      <AppointmentCTA />
    </>
  );
}
