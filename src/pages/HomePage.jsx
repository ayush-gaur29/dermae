import React from 'react';
import { HeroSection } from '../components/home/HeroSection.jsx';
import { TrustHighlights } from '../components/home/TrustHighlights.jsx';
import { FeaturedTreatments } from '../components/home/FeaturedTreatments.jsx';
import { AboutSection } from '../components/home/AboutSection.jsx';
import { ResultsGallery } from '../components/home/ResultsGallery.jsx';
import { TestimonialsSection } from '../components/home/TestimonialsSection.jsx';
import { FAQSection } from '../components/home/FAQSection.jsx';
import { ConsultationCTA } from '../components/home/ConsultationCTA.jsx';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustHighlights />
      <FeaturedTreatments />
      <AboutSection />
      <ResultsGallery />
      <TestimonialsSection />
      <FAQSection />
      <ConsultationCTA />
    </>
  );
}
