import React from 'react';
import { CalendarHeart, MessagesSquare, Route } from 'lucide-react';
import { consultation, images } from '../../data/brandContent.js';
import { Container, Button, Eyebrow } from '../ui/primitives.jsx';

const STEPS = [
  { id: 's1', Icon: MessagesSquare, label: 'Share your goals' },
  { id: 's2', Icon: Route, label: 'Receive a tailored plan' },
  { id: 's3', Icon: CalendarHeart, label: 'Begin at your pace' }
];

export function ConsultationCTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <Container>
        <div className="reveal grain relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald via-[#144a3a] to-forest px-6 py-14 text-ivory sm:rounded-[2.75rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="orb orb-sage drift-a -left-20 -top-24 h-80 w-80 opacity-70" aria-hidden="true"></div>
          <div className="orb orb-gold drift-b -bottom-24 right-1/3 h-72 w-72 opacity-60" aria-hidden="true"></div>
          <div className="absolute inset-x-10 top-0 gold-rule opacity-70" aria-hidden="true"></div>

          <div className="relative grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow tone="light">{consultation.eyebrow}</Eyebrow>
              <h2 className="t-h2 mt-5 max-w-xl font-serif font-medium">{consultation.heading}</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-ivory/75">{consultation.text}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button to="/book-consultation" variant="ivory">
                  {consultation.cta.label}
                </Button>
                <a
                  href="#faq"
                  className="btn border border-ivory/25 text-ivory hover:border-gold-light hover:bg-ivory/5"
                >
                  Read the FAQ
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <div className="aspect-[5/4] overflow-hidden rounded-card opacity-90">
                  <img src={images.facial} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <ol className="glass-dark relative -mt-16 ml-6 mr-0 space-y-1 rounded-3xl p-4 sm:-mr-6">
                  {STEPS.map(({ id, Icon, label }, i) => (
                    <li key={id} className="relative flex items-center gap-3 rounded-2xl px-2 py-2">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold-light">
                        <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <span className="text-sm">
                        <span className="mr-2 text-ivory/45">0{i + 1}</span>
                        {label}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default ConsultationCTA;
