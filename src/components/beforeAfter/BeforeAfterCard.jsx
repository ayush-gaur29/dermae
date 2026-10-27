import React from 'react';
import { SlidersHorizontal, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Button } from '../ui/primitives.jsx';
import { Link } from '../../router/index.jsx';

export function BeforeAfterCard({ item, onSelectComparison }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-forest/[0.08] bg-white/85 p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(16,47,39,0.06)] transition-all duration-300 hover:border-gold/40 hover:shadow-[0_16px_40px_-10px_rgba(16,47,39,0.14)] backdrop-blur-sm">
      {/* Visual Comparison Preview Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-forest/10 bg-forest/5 shadow-inner">
        <img
          src={item.image}
          alt={`Clinical comparison for ${item.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.03]"
        />

        {/* Clinical labels overlay */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="glass-dark inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-ivory shadow-sm backdrop-blur-md">
            <span className="gold-dot" aria-hidden="true" />
            Before
          </span>
        </div>
        <div className="absolute top-3 right-3 pointer-events-none">
          <span className="glass-dark inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-gold-light shadow-sm backdrop-blur-md">
            <span className="gold-dot" aria-hidden="true" />
            After ({item.duration})
          </span>
        </div>

        {/* Hover quick-action trigger */}
        <button
          type="button"
          onClick={() => onSelectComparison(item)}
          className="absolute inset-0 flex items-center justify-center bg-forest/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer focus:opacity-100 focus:outline-none"
          aria-label={`Open interactive comparison for ${item.title}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-forest/90 px-4 py-2 text-xs font-semibold text-ivory shadow-xl backdrop-blur-md transition-transform duration-200 group-hover:scale-105">
            <SlidersHorizontal className="h-3.5 w-3.5 text-gold-light" />
            Interactive Comparison
          </span>
        </button>
      </div>

      {/* Card Content Information */}
      <div className="mt-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Badges */}
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="inline-flex items-center rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1 font-semibold text-emerald text-[0.72rem]">
              {item.category}
            </span>
            <span className="flex items-center gap-1.5 text-[0.72rem] text-forest/70 font-medium">
              <Clock className="h-3 w-3 text-gold" />
              {item.duration} · {item.sessions}
            </span>
          </div>

          {/* Title & Related Protocol */}
          <h3 className="mt-3.5 font-serif text-xl font-medium text-forest transition group-hover:text-emerald leading-snug">
            {item.title}
          </h3>

          <Link
            to={`/treatments/${item.treatmentSlug}`}
            className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark hover:text-emerald transition"
          >
            <span>Protocol: {item.treatmentTitle}</span>
            <ArrowRight className="h-3 w-3" />
          </Link>

          {/* Summary */}
          <p className="mt-3 text-sm leading-relaxed text-ink/80 font-light line-clamp-2">
            {item.resultsSummary}
          </p>

          {/* Key concerns addressed */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {item.concerns.split(', ').slice(0, 3).map((concern, idx) => (
              <span
                key={idx}
                className="rounded-lg bg-forest/[0.04] px-2.5 py-0.5 text-[0.7rem] text-forest/75 font-normal"
              >
                {concern}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 pt-4 border-t border-forest/[0.07] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onSelectComparison(item)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/15 bg-white px-4 py-2 text-xs font-semibold text-forest shadow-sm transition hover:bg-forest hover:text-ivory hover:border-forest"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-gold" />
            <span>View Comparison</span>
          </button>

          <Link
            to={`/treatments/${item.treatmentSlug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald hover:text-forest transition"
          >
            <span>Explore</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BeforeAfterCard;
