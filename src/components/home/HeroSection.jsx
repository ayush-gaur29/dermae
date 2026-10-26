import React from 'react';
import { Sparkle } from 'lucide-react';
import { hero, images } from '../../data/brandContent.js';
import { Container, Button, Eyebrow } from '../ui/primitives.jsx';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      {/* ambient field */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_80%_20%,rgba(120,148,126,0.22),transparent_60%)]"></div>
        <div className="absolute right-[6%] top-[38%] hidden h-[34rem] w-[34rem] rounded-full border border-gold/15 lg:block"></div>
        <div className="absolute right-[12%] top-[46%] hidden h-[24rem] w-[24rem] rounded-full border border-emerald/10 lg:block"></div>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* text */}
          <div className="lg:col-span-7 lg:pr-6">
            <div className="intro-slide-right" style={{ '--d': '80ms' }}>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </div>
            <h1 className="t-display mt-6 font-serif font-medium text-forest">
              {hero.headline.map((line, i) => (
                <span key={i} className="intro-slide-right block" style={{ '--d': `${200 + i * 130}ms` }}>
                  {i === 2 ? (
                    <em className="font-normal italic text-emerald">{line}</em>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
            <p
              className="intro-slide-right mt-7 max-w-lg text-base leading-relaxed text-ink sm:text-lg"
              style={{ '--d': '620ms' }}
            >
              {hero.description}
            </p>
            <div
              className="intro-slide-right mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              style={{ '--d': '740ms' }}
            >
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="ghost" icon={false}>
                {hero.secondaryCta.label}
              </Button>
            </div>
            <div className="intro-slide-right mt-10 flex items-center gap-4" style={{ '--d': '860ms' }}>
              <span className="h-px w-10 bg-gold/70"></span>
              <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
                {hero.valueLabel}
              </p>
            </div>
          </div>

          {/* visual */}
          <div className="relative mx-auto w-full max-w-[30rem] lg:col-span-5 lg:max-w-none">
            <div className="orb orb-sage drift-a -left-16 top-10 h-80 w-80" aria-hidden="true"></div>
            <div className="orb orb-emerald drift-b -right-10 bottom-0 h-72 w-72 opacity-70" aria-hidden="true"></div>
            <div className="orb orb-gold drift-a right-10 top-0 h-40 w-40" aria-hidden="true"></div>

            <div className="intro-img relative" style={{ '--d': '300ms' }}>
              {/* offset frame */}
              <div
                className="absolute -right-3 -top-3 bottom-6 left-6 rounded-t-[999px] rounded-b-panel border border-gold/40 sm:-right-5 sm:-top-5"
                aria-hidden="true"
              ></div>
              <div
                className="sheen relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-panel bg-sage-pale"
                style={{ boxShadow: 'var(--shadow-ambient)' }}
              >
                <img
                  src={images.hero}
                  alt="Woman with luminous, softly lit skin resting her hand near her cheek"
                  className="h-full w-full object-cover"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* floating glass card */}
            <div
              className="intro absolute -bottom-8 left-0 right-6 sm:-left-8 sm:right-auto sm:w-72"
              style={{ '--d': '1000ms' }}
            >
              <div className="glass float-soft rounded-3xl p-5">
                <div className="relative flex items-start gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald text-ivory"
                    style={{ boxShadow: 'var(--glow-emerald)' }}
                  >
                    <Sparkle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="t-eyebrow !text-[0.62rem] text-gold">
                      {hero.floatingCard.eyebrow}
                    </p>
                    <p className="mt-1.5 font-serif text-xl leading-tight text-forest">
                      {hero.floatingCard.title}
                    </p>
                    <p className="mt-1.5 text-[0.8rem] leading-relaxed text-ink">
                      {hero.floatingCard.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default HeroSection;
