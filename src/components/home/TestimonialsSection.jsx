import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials.js';
import { Container, SectionHeading } from '../ui/primitives.jsx';

export function TestimonialsSection({ items = testimonials }) {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Kind words"
          title={
            <>
              Experiences, <em className="italic text-emerald">in their words.</em>
            </>
          }
          text="Sample entries shown for layout purposes. Verified client feedback will appear here."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
          {items.map((t, i) => {
            const featured = i === 1;
            return (
              <figure
                key={t.id}
                className={`reveal lux-card relative flex flex-col rounded-card p-7 sm:p-8 ${
                  featured ? 'is-emerald bg-forest text-ivory grain' : 'border border-forest/[0.07] bg-ivory-50'
                }`}
                style={{ '--d': `${i * 100}ms` }}
              >
                <Quote
                  className={`relative h-7 w-7 ${featured ? 'text-gold-light' : 'text-gold'}`}
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <blockquote
                  className={`relative mt-6 flex-1 font-serif text-[1.35rem] leading-snug ${
                    featured ? 'text-ivory' : 'text-forest'
                  }`}
                >
                  “{t.quote}”
                </blockquote>
                <figcaption
                  className={`relative mt-8 flex items-center justify-between gap-3 border-t pt-5 ${
                    featured ? 'border-ivory/15' : 'border-forest/10'
                  }`}
                >
                  <div>
                    <p className={`text-sm font-semibold ${featured ? 'text-ivory' : 'text-emerald'}`}>
                      {t.name}
                    </p>
                    <p className={`text-xs ${featured ? 'text-ivory/60' : 'text-ink'}`}>{t.context}</p>
                  </div>
                  {t.isSample && (
                    <span
                      className={`rounded-full px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.16em] ${
                        featured ? 'bg-ivory/10 text-ivory/70' : 'bg-sage-pale text-forest/70'
                      }`}
                    >
                      Sample
                    </span>
                  )}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export default TestimonialsSection;
