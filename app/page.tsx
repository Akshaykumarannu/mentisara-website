import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ValuesSection } from "@/components/home/ValuesSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ResourcePreview } from "@/components/home/ResourcePreview";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { SpecializedCareSection } from "@/components/home/SpecializedCareSection";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero section */}
      <HeroSection />

      {/* 3. Trust / confidentiality indicators */}
      <TrustStrip />

      {/* 4. About Mentisara & 5. Credentials / Our Approach */}
      <AboutPreview />

      {/* 6. Our Services (6 keyword/overview cards) */}
      <ServicesGrid />

      {/* 7. Practice Philosophy / Principles */}
      <ValuesSection />

      {/* 8. Therapeutic Process */}
      <ApproachSection />

      {/* 9. Insights & Resources */}
      <ResourcePreview />

      {/* 10. Client Experiences */}
      <TestimonialSection />

      {/* 11. Specialized Care / Areas We Support */}
      <SpecializedCareSection />

      {/* 12. Final CTA */}
      <AppointmentCTA />
    </>
  );
}
