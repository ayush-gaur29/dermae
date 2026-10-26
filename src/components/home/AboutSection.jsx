import React from 'react';
import { Check } from 'lucide-react';
import { about, images } from '../../data/brandContent.js';
import { Container, Button, Eyebrow } from '../ui/primitives.jsx';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-ivory via-sage-pale/60 to-ivory py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* imagery */}
          <div className="relative lg:col-span-6">
            <div className="orb orb-sage left-10 top-10 h-72 w-72" aria-hidden="true"></div>
            <div className="reveal relative mr-10 sm:mr-24">
              <div
                className="aspect-[4/5] overflow-hidden rounded-panel rounded-tl-[7rem] sm:rounded-tl-[10rem]"
                style={{ boxShadow: 'var(--shadow-ambient)' }}
              >
                <img
                  src={images.clinic}
                  alt="Serene DERMAÉ-style treatment room with arched ivory walls"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div
              className="reveal absolute -bottom-8 right-0 w-[48%] sm:w-[42%]"
              style={{ '--d': '200ms' }}
            >
              <div
                className="overflow-hidden rounded-card border-[6px] border-ivory"
                style={{ boxShadow: 'var(--shadow-ambient)' }}
              >
                <img
                  src={images.serum}
                  alt="Serum bottles on stone"
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
            </div>
            <div
              className="absolute -left-2 top-12 hidden h-28 w-28 rounded-full border border-gold/40 sm:block"
              aria-hidden="true"
            ></div>
          </div>

          {/* text */}
          <div className="lg:col-span-6 lg:pl-8">
            <div className="reveal">
              <Eyebrow>{about.eyebrow}</Eyebrow>
            </div>
            <h2
              className="reveal t-h2 mt-5 font-serif font-medium text-forest"
              style={{ '--d': '80ms' }}
            >
              {about.heading}
            </h2>
            <div className="mt-7 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="reveal max-w-xl leading-relaxed text-ink"
                  style={{ '--d': `${160 + i * 80}ms` }}
                >
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-9 grid gap-3 sm:grid-cols-3">
              {about.values.map((v, i) => (
                <li
                  key={v.id}
                  className="reveal flex items-center gap-3 rounded-2xl border border-emerald/10 bg-ivory-50/80 px-4 py-3.5 text-sm font-medium text-emerald"
                  style={{ '--d': `${320 + i * 70}ms` }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald text-ivory">
                    <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  {v.label}
                </li>
              ))}
            </ul>
            <div className="reveal mt-10" style={{ '--d': '520ms' }}>
              <Button href={about.cta.href}>{about.cta.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default AboutSection;
