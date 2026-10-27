import React from 'react';
import { Check, Sparkles, Fingerprint, MessageCircleHeart, Leaf, ArrowRight, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { brand, about, highlights, images } from '../data/brandContent.js';
import { Container, Button, Eyebrow } from '../components/ui/primitives.jsx';
import { Link } from '../router/index.jsx';

const highlightIconMap = {
  Fingerprint,
  MessageCircleHeart,
  Leaf,
  Sparkles
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ivory">
      {/* Ambient background glows */}
      <div className="orb orb-sage -left-40 top-12 h-96 w-96 opacity-50" aria-hidden="true" />
      <div className="orb orb-emerald -right-36 top-1/3 h-80 w-80 opacity-30" aria-hidden="true" />
      <div className="orb orb-gold -left-20 bottom-1/4 h-72 w-72 opacity-25" aria-hidden="true" />

      {/* Editorial Hero Header with 2-column layout & sliding animation */}
      <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-forest/[0.06]">
        <Container className="relative">
          <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sage" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-emerald">Home</Link>
            <span>/</span>
            <span className="text-forest font-semibold">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Column with slide-in animation */}
            <div className="lg:col-span-7 animate-hero-slide-left">
              <Eyebrow tone="emerald">Quiet Luxury · Science-Minded Care</Eyebrow>
              <h1 className="t-display mt-5 font-serif font-medium text-forest">
                Where Science-Minded Care Meets <em className="italic text-emerald">Quiet Luxury.</em>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink max-w-2xl font-light">
                {brand.description}
              </p>

              {/* Reassurance & Ethos Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-xs font-medium text-forest shadow-sm backdrop-blur-sm">
                  <span className="gold-dot" aria-hidden="true" />
                  Consultation-Led Methodology
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-xs font-medium text-forest shadow-sm backdrop-blur-sm">
                  <span className="gold-dot" aria-hidden="true" />
                  Bio-Identical Modalities
                </span>

              </div>
            </div>

            {/* Right Hero Visual Card with popup effect and slide-in */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0 animate-hero-slide-right">
              <div className="orb orb-emerald -right-6 -top-6 h-48 w-48 opacity-30" aria-hidden="true" />
              <div className="orb orb-gold -left-6 -bottom-6 h-40 w-40 opacity-30" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-[2rem] border border-forest/[0.09] bg-white/80 p-2.5 shadow-[0_20px_50px_-15px_rgba(16,47,39,0.16)] group backdrop-blur-sm card-picture-popup popup-hover">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem]">
                  <img
                    src={images.hero}
                    alt="Radiant, natural skin vitality at DERMAÉ"
                    className="popup-img h-full w-full object-cover transition-transform duration-700 ease-lux"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-3.5 left-3.5 rounded-full glass px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-forest border border-forest/10 shadow-sm backdrop-blur-md">
                    The DERMAÉ Ethos
                  </span>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between rounded-xl glass px-4 py-2.5 border border-white/40 shadow-md backdrop-blur-md">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-wider text-forest/70 font-medium">Cellular Vitality</p>
                      <p className="font-serif text-sm font-medium text-forest">Harmonized with your biological canvas</p>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-ivory shadow-sm">
                      <Sparkles className="h-3.5 w-3.5 text-gold-light" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Philosophy Section with overlapping popup card pictures */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14">

            {/* Visual Overlapping Composition with popup effects */}
            <div className="relative lg:col-span-6 mb-12 sm:mb-0">
              <div className="relative mr-6 sm:mr-16">
                <div
                  className="aspect-[4/5] overflow-hidden rounded-[2.25rem] rounded-tl-[6rem] sm:rounded-tl-[7rem] border border-forest/[0.08] bg-white/80 p-2 shadow-[0_20px_50px_-20px_rgba(16,47,39,0.18)] card-picture-popup popup-hover group"
                >
                  <img
                    src={images.clinic}
                    alt="DERMAÉ sanctuary and clinical treatment suite"
                    className="popup-img h-full w-full rounded-[1.75rem] rounded-tl-[5rem] sm:rounded-tl-[6rem] object-cover transition-transform duration-700 ease-lux"
                  />
                </div>
              </div>

              {/* Overlapping secondary card picture with popup effect */}
              <div className="absolute -bottom-8 right-0 w-[52%] sm:w-[46%]">
                <div
                  className="overflow-hidden rounded-[1.75rem] border-[6px] border-white/95 bg-white/90 p-1 shadow-[0_20px_45px_-12px_rgba(16,47,39,0.22)] card-picture-popup popup-hover group"
                >
                  <img
                    src={images.serum}
                    alt="Active clinical formulations and bespoke serums"
                    className="popup-img aspect-square h-full w-full rounded-[1.35rem] object-cover transition-transform duration-700 ease-lux"
                  />
                </div>
              </div>
              <div
                className="absolute -left-3 top-10 hidden h-24 w-24 rounded-full border border-gold/40 sm:block pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Philosophy Narrative */}
            <div className="lg:col-span-6 lg:pl-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Philosophy</span>
              <h2 className="mt-3 font-serif text-3xl font-medium text-forest sm:text-4xl">
                A calm, unhurried standard for modern skin health.
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink font-light sm:text-lg">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Core Values Cards with popup hover */}
              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-forest/70">What Guides Us</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                  {about.values.map((val) => (
                    <li
                      key={val.id}
                      className="flex items-center gap-3 rounded-2xl border border-forest/[0.08] bg-white/80 px-4 py-3.5 text-sm font-medium text-forest shadow-sm backdrop-blur-sm popup-hover"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald text-ivory">
                        <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      {val.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button to="/book-consultation" variant="primary">
                  {about.cta.label}
                </Button>
                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-2 text-sm font-medium text-forest transition hover:text-emerald"
                >
                  Explore Treatment Protocols <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Highlights / Principles Grid */}
      <section className="border-t border-forest/[0.06] bg-sage-pale/25 py-18 sm:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Principles</span>
            <h2 className="mt-2 font-serif text-3xl font-medium text-forest sm:text-4xl">
              Thoughtful care at every step
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink font-light">
              Every detail of your experience is calibrated to bring clarity, deep relaxation, and sustained cellular vitality.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const IconComp = highlightIconMap[item.icon] || Sparkles;
              return (
                <div
                  key={item.id}
                  className="group rounded-[1.75rem] border border-forest/[0.08] bg-white/80 p-7 shadow-sm backdrop-blur-sm popup-hover transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/10 text-emerald transition group-hover:bg-emerald group-hover:text-ivory group-hover:scale-110 duration-300">
                    <IconComp className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75 font-light">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Clinic Sanctuary / Booking Invitation with picture popup effect */}
      <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
        <Container>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-forest/[0.08] bg-white/85 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-20px_rgba(16,47,39,0.12)] backdrop-blur-md">
            <div className="orb orb-emerald -right-16 -top-16 h-64 w-64 opacity-25" aria-hidden="true" />
            <div className="orb orb-gold -left-16 -bottom-16 h-60 w-60 opacity-30" aria-hidden="true" />

            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Eyebrow tone="gold">Your Clinical Sanctuary</Eyebrow>
                <h2 className="mt-4 font-serif text-3xl font-medium text-forest sm:text-4xl lg:text-5xl leading-tight">
                  Ready to begin with a personalized skin assessment?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink font-light sm:text-lg">
                  We look forward to welcoming you. Reserve your 45-minute bespoke consultation to examine your skin profile, discuss your concerns, and curate a routine formulated for you.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button to="/book-consultation" variant="primary">
                    Book a Consultation
                  </Button>
                  <Link
                    to="/treatments"
                    className="inline-flex items-center justify-center rounded-full border border-forest/20 px-6 py-3 text-sm font-medium text-forest transition hover:bg-forest hover:text-ivory hover:border-forest"
                  >
                    View All Treatments
                  </Link>
                </div>
              </div>

              {/* Card picture with popup effect */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-[1.75rem] border border-forest/[0.08] shadow-xl card-picture-popup popup-hover group">
                  <img
                    src={images.facial}
                    alt="DERMAÉ facial therapy session"
                    className="popup-img h-64 w-full object-cover sm:h-80 transition-transform duration-700 ease-lux"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
