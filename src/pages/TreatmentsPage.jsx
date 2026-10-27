import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Sparkle } from 'lucide-react';
import { treatments } from '../data/treatments.js';
import { images } from '../data/brandContent.js';
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
        {/* Page Hero Header with right-side image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-6 pb-14 sm:pt-10 sm:pb-20">
          <div className="lg:col-span-7 animate-hero-slide-left">
            <Eyebrow tone="emerald">Clinical Protocols</Eyebrow>
            <h1 className="t-display mt-5 font-serif font-medium text-forest">
              Treatments Shaped Around <em className="italic text-emerald">Your Skin.</em>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink max-w-2xl font-light">
              Every face possesses its own biological canvas and rhythm. Explore our core clinical categories, each formulated and calibrated to harmonize with your unique dermal architecture and cellular vitality.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5 text-xs uppercase tracking-wider text-forest/75">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-white/70 px-3.5 py-1.5 text-[0.7rem] font-medium shadow-sm backdrop-blur-sm">
                <span className="gold-dot" aria-hidden="true"></span>
                Consultation-led
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-white/70 px-3.5 py-1.5 text-[0.7rem] font-medium shadow-sm backdrop-blur-sm">
                <span className="gold-dot" aria-hidden="true"></span>
                Non-invasive modalities
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-white/70 px-3.5 py-1.5 text-[0.7rem] font-medium shadow-sm backdrop-blur-sm">
                <span className="gold-dot" aria-hidden="true"></span>
                Zero-downtime philosophy
              </span>
            </div>
          </div>

          {/* Right side hero visual with popup and slide effect */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 animate-hero-slide-right">
            {/* Ambient accent orbs */}
            <div className="orb orb-emerald -right-6 -top-6 h-48 w-48 opacity-30" aria-hidden="true"></div>
            <div className="orb orb-gold -left-6 -bottom-6 h-40 w-40 opacity-30" aria-hidden="true"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-forest/[0.09] bg-white/80 p-2.5 shadow-[0_20px_50px_-15px_rgba(16,47,39,0.16)] group backdrop-blur-sm card-picture-popup popup-hover">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem]">
                <img
                  src={images.treatmentsHero}
                  alt="Client receiving a personalized clinical facial treatment at DERMAÉ"
                  className="popup-img h-full w-full object-cover transition-transform duration-700 ease-lux"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent pointer-events-none"></div>

                <span className="absolute top-3.5 left-3.5 rounded-full glass px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-forest border border-forest/10 shadow-sm backdrop-blur-md">
                  Bespoke Dermal Care
                </span>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between rounded-xl glass px-4 py-2.5 border border-white/40 shadow-md backdrop-blur-md">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wider text-forest/70 font-medium">In-Clinic Experience</p>
                    <p className="font-serif text-sm font-medium text-forest">Calm, evidence-based care</p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-ivory shadow-sm">
                    <Sparkles className="h-3.5 w-3.5 text-gold-light" />
                  </span>
                </div>
              </div>
            </div>
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

