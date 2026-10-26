import React from 'react';
import { Fingerprint, MessageCircleHeart, Leaf, Sparkles } from 'lucide-react';
import { highlights } from '../../data/brandContent.js';
import { Container } from '../ui/primitives.jsx';

const ICONS = { Fingerprint, MessageCircleHeart, Leaf, Sparkles };

export function TrustHighlights() {
  return (
    <section aria-label="Brand highlights" className="relative">
      <Container>
        <div className="reveal grid grid-cols-2 overflow-hidden rounded-card border border-forest/[0.08] bg-ivory-50/70 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = ICONS[h.icon] || Sparkles;
            return (
              <div
                key={h.id}
                className={`group flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-4 sm:p-7 ${
                  i % 2 === 1 ? 'border-l border-forest/[0.08]' : ''
                } ${i > 1 ? 'border-t border-forest/[0.08] lg:border-t-0' : ''} ${
                  i === 2 ? 'lg:border-l' : ''
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald/15 bg-ivory text-emerald transition-colors duration-500 group-hover:border-gold/50 group-hover:text-gold">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.4} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-emerald">{h.title}</h3>
                  <p className="mt-1 text-[0.8rem] leading-relaxed text-ink">{h.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export default TrustHighlights;
