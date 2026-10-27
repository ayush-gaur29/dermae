import React from 'react';
import { Info, ArrowRight } from 'lucide-react';
import { gallery } from '../../data/gallery.js';
import { Container, SectionHeading } from '../ui/primitives.jsx';
import { Link } from '../../router/index.jsx';

const SPAN = {
  tall: 'col-span-2 row-span-2 md:col-span-1 md:row-span-2',
  wide: 'col-span-2 md:col-span-2',
  square: 'col-span-1'
};

function GalleryItem({ item, index }) {
  return (
    <figure
      className={`gallery-item reveal group relative overflow-hidden rounded-card bg-forest ${
        SPAN[item.span] || SPAN.square
      }`}
      style={{ '--d': `${index * 90}ms` }}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="zoom-img h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/0 to-transparent"></div>
      <figcaption className="absolute bottom-3 left-3">
        <span className="glass-dark inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs tracking-wide">
          <span className="gold-dot relative" aria-hidden="true"></span>
          <span className="relative">{item.caption}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function ResultsGallery({ items = gallery }) {
  return (
    <section id="results" className="relative overflow-hidden bg-emerald py-24 text-ivory sm:py-28 lg:py-32">
      <div className="grain absolute inset-0" aria-hidden="true"></div>
      <div className="orb orb-sage drift-a -right-32 -top-32 h-[30rem] w-[30rem] opacity-60" aria-hidden="true"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest/80 to-transparent" aria-hidden="true"></div>
      <Container className="relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Results & gallery"
            title={
              <>
                A visual journal of <em className="italic text-gold-light">quiet radiance.</em>
              </>
            }
            text="A space reserved for authentic, consented client journeys. Until then, explore the mood and moments that define DERMAÉ."
          />
          <p
            className="reveal flex max-w-xs items-start gap-2 text-xs leading-relaxed text-ivory/60"
            style={{ '--d': '200ms' }}
          >
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-light" strokeWidth={1.75} aria-hidden="true" />
            Images shown are illustrative and do not represent clinical outcomes.
          </p>
        </div>
        <div className="mt-14 grid grid-flow-row-dense auto-rows-[10.5rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 md:grid-cols-3 lg:auto-rows-[15rem]">
          {items.map((g, i) => (
            <GalleryItem key={g.id} item={g} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/before-after"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/25 bg-ivory/10 px-6 py-3 text-xs sm:text-sm font-medium text-ivory backdrop-blur-sm transition-all duration-300 hover:border-gold-light hover:bg-ivory hover:text-forest shadow-sm"
          >
            <span>Explore Documented Before &amp; After Outcomes</span>
            <ArrowRight className="h-4 w-4 text-gold-light group-hover:text-forest" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
export default ResultsGallery;
