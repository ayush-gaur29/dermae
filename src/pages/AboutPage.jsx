import React from 'react';
import { Check, Sparkles, Fingerprint, MessageCircleHeart, Leaf, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-ivory">
      {/* Editorial Header */}
      <header className="relative overflow-hidden border-b border-emerald/10 bg-gradient-to-b from-ivory-50 via-sage-pale/40 to-ivory py-20 sm:py-28">
        <div className="orb orb-sage left-[-5%] top-[-10%] h-96 w-96 opacity-60" aria-hidden="true" />
        <div className="orb orb-gold right-[-5%] top-10 h-72 w-72 opacity-40" aria-hidden="true" />

        <Container className="relative">
          <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sage" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-emerald">Home</Link>
            <span>/</span>
            <span className="text-forest">About</span>
          </nav>

          <div className="max-w-3xl">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-forest sm:text-5xl lg:text-6xl">
              {about.heading}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/80 sm:text-xl">
              {brand.description}
            </p>
          </div>
        </Container>
      </header>

      {/* Main Philosophy Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Visual Composition */}
            <div className="relative lg:col-span-6">
              <div className="relative mr-8 sm:mr-16">
                <div
                  className="aspect-[4/5] overflow-hidden rounded-panel rounded-tl-[6rem] sm:rounded-tl-[8rem]"
                  style={{ boxShadow: 'var(--shadow-ambient)' }}
                >
                  <img
                    src={images.clinic}
                    alt="DERMAÉ sanctuary and clinical treatment suite"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 right-0 w-[50%] sm:w-[44%]">
                <div
                  className="overflow-hidden rounded-card border-[6px] border-ivory"
                  style={{ boxShadow: 'var(--shadow-ambient)' }}
                >
                  <img
                    src={images.serum}
                    alt="Active clinical formulations and bespoke serums"
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>
              </div>
              <div
                className="absolute -left-3 top-10 hidden h-24 w-24 rounded-full border border-gold/40 sm:block"
                aria-hidden="true"
              />
            </div>

            {/* Philosophy Narrative */}
            <div className="lg:col-span-6 lg:pl-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Our Philosophy</span>
              <h2 className="mt-3 font-serif text-3xl font-medium text-forest sm:text-4xl">
                A calm, unhurried standard for modern skin health.
              </h2>
              
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/85 sm:text-lg">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Core Values */}
              <div className="mt-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-forest/70">What Guides Us</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                  {about.values.map((val) => (
                    <li
                      key={val.id}
                      className="flex items-center gap-3 rounded-xl border border-emerald/10 bg-ivory-50/90 px-4 py-3 text-sm font-medium text-emerald shadow-sm"
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
                <Button href="/book-consultation" variant="primary">
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

      {/* Trust Highlights Grid */}
      <section className="border-t border-emerald/10 bg-sage-pale/30 py-20 sm:py-24">
        <Container>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Our Principles</span>
            <h2 className="mt-2 font-serif text-3xl font-medium text-forest sm:text-4xl">
              Thoughtful care at every step
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink/75">
              Every detail of your experience is calibrated to bring clarity, relaxation, and visible vitality.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const IconComp = highlightIconMap[item.icon] || Sparkles;
              return (
                <div
                  key={item.id}
                  className="group rounded-2xl border border-emerald/10 bg-ivory/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald transition group-hover:bg-emerald group-hover:text-ivory">
                    <IconComp className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Clinic Atmosphere / Booking Invitation */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-forest p-8 sm:p-14 lg:p-16 text-ivory relative">
            <div className="orb orb-gold right-0 top-0 h-80 w-80 opacity-20" aria-hidden="true" />
            
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold-light">
                  Your Sanctuary
                </span>
                <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl lg:text-5xl">
                  Ready to begin with a personalized skin assessment?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
                  We look forward to welcoming you. Reserve your 45-minute bespoke consultation to analyze your skin, discuss your concerns, and curate a routine designed for you.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/book-consultation" variant="primary">
                    Book a Consultation
                  </Button>
                  <Link
                    to="/treatments"
                    className="inline-flex items-center justify-center rounded-full border border-ivory/30 px-6 py-3 text-sm font-medium text-ivory transition hover:bg-ivory/10"
                  >
                    View All Treatments
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-ivory/20 shadow-2xl">
                  <img
                    src={images.facial}
                    alt="DERMAÉ facial therapy session"
                    className="h-72 w-full object-cover sm:h-80"
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

