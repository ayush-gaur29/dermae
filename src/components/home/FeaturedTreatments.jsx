import React from 'react';
import { treatments } from '../../data/treatments.js';
import { Container, SectionHeading, Button } from '../ui/primitives.jsx';
import { TreatmentCard } from './TreatmentCard.jsx';

export function FeaturedTreatments() {
  return (
    <section id="treatments" className="relative py-24 sm:py-28 lg:py-32">
      <div className="orb orb-sage -left-40 top-1/3 h-[26rem] w-[26rem] opacity-50" aria-hidden="true"></div>
      <Container className="relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured treatments"
            title={
              <>
                Care, composed <em className="italic text-emerald">around you.</em>
              </>
            }
            text="A curated selection of treatment categories. Every recommendation begins with a consultation, so your plan is always your own."
          />
          <div className="reveal shrink-0" style={{ '--d': '200ms' }}>
            <Button to="/treatments" variant="ghost">
              View All Treatments
            </Button>
          </div>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {treatments.map((t, i) => (
            <div key={t.id} className={i % 2 === 1 ? 'lg:translate-y-10' : ''}>
              <TreatmentCard item={t} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default FeaturedTreatments;
