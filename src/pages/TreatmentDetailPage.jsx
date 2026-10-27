import React from 'react';
import { ArrowLeft, ArrowRight, Clock, Sparkles, CheckCircle2, ShieldCheck, CalendarHeart } from 'lucide-react';
import { treatments } from '../data/treatments.js';
import { Container, Button, Eyebrow } from '../components/ui/primitives.jsx';
import { useParams, Link } from '../router/index.jsx';

export default function TreatmentDetailPage() {
  const { slug } = useParams();

  const treatment = treatments.find((t) => t.slug === slug);

  // Graceful handling for invalid treatment slugs
  if (!treatment) {
    return (
      <div className="py-24 sm:py-32">
        <Container className="text-center max-w-xl">
          <Eyebrow tone="emerald">Protocol Not Found</Eyebrow>
          <h1 className="t-h2 mt-4 font-serif text-forest">
            Treatment Unavailable
          </h1>
          <p className="mt-4 text-ink leading-relaxed">
            The treatment you are looking for may have moved or is currently not listed. Explore all our clinical treatments below or speak directly with our clinical concierge.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/treatments" variant="primary">
              View All Treatments
            </Button>
            <Button to="/book-consultation" variant="ghost">
              Book a Consultation
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden pt-6 pb-24 sm:pb-32">
      {/* Ambient background glows */}
      <div className="orb orb-sage -left-40 top-1/4 h-96 w-96 opacity-50" aria-hidden="true"></div>
      <div className="orb orb-emerald -right-32 top-1/2 h-80 w-80 opacity-40" aria-hidden="true"></div>
      <div className="orb orb-gold right-10 bottom-20 h-64 w-64 opacity-25" aria-hidden="true"></div>

      <Container className="relative">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 pt-4">
          <ol className="flex items-center gap-2 text-xs uppercase tracking-wider text-forest/60">
            <li>
              <Link to="/" className="hover:text-forest transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/treatments" className="hover:text-forest transition-colors">Treatments</Link>
            </li>
            <li>/</li>
            <li className="text-emerald font-semibold truncate max-w-[200px] sm:max-w-none">
              {treatment.title}
            </li>
          </ol>
        </nav>

        {/* Hero Detail Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative mb-10 lg:mb-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-panel border border-gold/40 shadow-xl bg-sage-pale">
                <img
                  src={treatment.image}
                  alt={treatment.imageAlt || treatment.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Pill Tag */}
              <div className="absolute -bottom-5 left-6 right-6 sm:left-8 sm:right-auto sm:w-64">
                <div className="glass rounded-2xl p-4 shadow-lg border border-forest/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald text-ivory">
                      <Clock className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold font-semibold">Duration</p>
                      <p className="font-serif text-lg font-medium text-forest">{treatment.duration || '60–75 Minutes'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Treatment Information */}
          <div className="lg:col-span-7 lg:pl-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-pale text-forest text-xs uppercase tracking-wider font-medium border border-sage/40">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{treatment.tag}</span>
            </div>

            <h1 className="t-h2 font-serif font-medium text-forest">
              {treatment.title}
            </h1>

            {treatment.tagline && (
              <p className="text-base sm:text-lg text-emerald font-medium italic">
                {treatment.tagline}
              </p>
            )}

            <p className="text-base leading-relaxed text-ink font-light">
              {treatment.overview || treatment.description}
            </p>

            {/* Ideal Candidates / Target Focus */}
            {treatment.idealFor && (
              <div className="p-5 rounded-2xl bg-ivory-50 border border-forest/[0.08]">
                <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">
                  Ideal Indication & Focus
                </h4>
                <p className="text-sm text-forest/90 font-light">
                  {treatment.idealFor}
                </p>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button to="/book-consultation" variant="primary">
                Book a Consultation for This Treatment
              </Button>
              <Button to="/treatments" variant="ghost" icon={false}>
                Browse Other Treatments
              </Button>
            </div>
          </div>
        </div>

        {/* Protocol Step-by-Step Sequence */}
        {treatment.steps && treatment.steps.length > 0 && (
          <div className="mt-24 sm:mt-32">
            <div className="max-w-2xl mb-12">
              <Eyebrow tone="emerald">Care Sequence</Eyebrow>
              <h2 className="t-h3 mt-3 font-serif font-medium text-forest">
                What to Expect During Your Session
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink font-light">
                Every appointment begins with a brief check-in to assess your skin’s status on the day, ensuring adjustments are made for optimal comfort and outcomes.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {treatment.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="glass rounded-2xl p-6 border border-forest/[0.08] relative flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-2xl font-light text-gold block mb-3">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-forest mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink leading-relaxed font-light">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Booking Callout */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-emerald via-emerald-800 to-forest text-ivory relative overflow-hidden">
          <div className="orb orb-sage -left-20 -bottom-20 h-60 w-60 opacity-60" aria-hidden="true"></div>
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="t-eyebrow text-gold-light block mb-2">Next Step</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ivory">
                Experience {treatment.title}
              </h3>
              <p className="mt-2 text-sm text-ivory/75 max-w-lg font-light">
                {treatment.recommendedCadence || 'Schedule your personalized consultation with our clinical specialists.'}
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <Link
                to="/before-after"
                className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-5 py-2.5 text-xs font-semibold text-ivory hover:bg-ivory/10 hover:border-ivory/50 transition"
              >
                View Before &amp; After
              </Link>
              <Button to="/book-consultation" variant="ivory">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

