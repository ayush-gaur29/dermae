import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Sparkle } from 'lucide-react';
import { treatments } from '../data/treatments.js';
import { Container, SectionHeading, Eyebrow, Button } from '../components/ui/primitives.jsx';
import { TreatmentCard } from '../components/home/TreatmentCard.jsx';
import { Link } from '../router/index.jsx';

export default function TreatmentsPage() {
  return (
    <div className="relative overflow-hidden pt-8 pb-20 sm:pb-28">
      {/* Ambient background glows */}
      <div className="orb orb-sage -left-40 top-12 h-96 w-96 opacity-60" aria-hidden="true"></div>
      <div className="orb orb-emerald -right-32 top-1/3 h-80 w-80 opacity-40" aria-hidden="true"></div>
      <div className="orb orb-gold -left-20 bottom-1/4 h-64 w-64 opacity-30" aria-hidden="true"></div>

      <Container className="relative">
        {/* Page Hero Header */}
        <div className="max-w-3xl pt-8 pb-12 sm:pt-12 sm:pb-16">
          <Eyebrow tone="emerald">Clinical Protocols</Eyebrow>
          <h1 className="t-display mt-5 font-serif font-medium text-forest">
            Treatments Shaped Around <em className="italic text-emerald">Your Skin.</em>
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink max-w-2xl font-light">
            Every face possesses its own biological canvas and rhythm. Explore our core clinical categories, each formulated and calibrated to harmonize with your unique dermal architecture and cellular vitality.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase text-forest/70">
            <span className="flex items-center gap-1.5">
              <span className="gold-dot" aria-hidden="true"></span>
              Consultation-led
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="gold-dot" aria-hidden="true"></span>
              Non-invasive modalities
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="gold-dot" aria-hidden="true"></span>
              Zero-downtime philosophy
            </span>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {treatments.map((treatment, index) => (
            <div key={treatment.id} className={index % 2 === 1 ? 'lg:translate-y-8' : ''}>
              <TreatmentCard item={treatment} index={index} />
            </div>
          ))}
        </div>

        {/* Reassuring Consultation Callout Banner */}
        <div className="mt-20 sm:mt-28">
          <div className="glass rounded-[2rem] p-8 sm:p-12 border border-forest/[0.08] relative overflow-hidden">
            <div className="orb orb-gold -right-10 -bottom-10 h-60 w-60 opacity-40" aria-hidden="true"></div>
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <span className="t-eyebrow text-gold block mb-2">Unsure where to start?</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-forest leading-tight">
                  Begin with a Personalized Skin Assessment
                </h3>
                <p className="mt-3 text-sm sm:text-base text-ink leading-relaxed">
                  You don’t need to select a specific protocol before your visit. Our initial consultation evaluates your skin dynamics first, allowing our specialists to curate an entirely bespoke treatment pathway.
                </p>
              </div>
              <div className="shrink-0">
                <Button to="/book-consultation" variant="primary">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

