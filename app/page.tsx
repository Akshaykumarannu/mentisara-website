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

      {/* Practice Philosophy / Principles */}
      <ValuesSection />

      {/* Specialized Care / Areas We Support */}
      <SpecializedCareSection />

      {/* Therapeutic Process */}
      <ApproachSection />

      {/* Insights & Resources */}
      <ResourcePreview />

      {/* Check list / 1-Minute Emotional Check-In */}
      <SelfAssessmentQuiz />
      {/* Review & Rating / Client Experiences */}
      <TestimonialSection />

      {/* Ready to Take First Step / Appointment CTA */}
      <AppointmentCTA />

      
    </>
  );
}
