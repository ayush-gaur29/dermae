import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../../router/index.jsx';

const VARIANTS = {
  ivory: {
    card: 'bg-ivory-50 border border-forest/[0.07]',
    title: 'text-forest',
    text: 'text-ink',
    tag: 'glass text-forest',
    chip: 'border border-forest/15 text-forest group-hover:bg-emerald group-hover:text-ivory group-hover:border-emerald',
    link: 'text-emerald'
  },
  sage: {
    card: 'bg-sage-pale border border-sage/30',
    title: 'text-forest',
    text: 'text-forest/70',
    tag: 'glass text-forest',
    chip: 'border border-forest/15 text-forest group-hover:bg-forest group-hover:text-ivory',
    link: 'text-emerald'
  },
  emerald: {
    card: 'is-emerald bg-emerald text-ivory grain',
    title: 'text-ivory',
    text: 'text-ivory/70',
    tag: 'glass-dark text-ivory',
    chip: 'border border-ivory/25 text-ivory group-hover:bg-ivory group-hover:text-forest',
    link: 'text-gold-light'
  }
};

export function TreatmentCard({ item, index = 0 }) {
  const v = VARIANTS[item.variant] || VARIANTS.ivory;
  return (
    <article
      className={`reveal lux-card group relative flex h-full flex-col overflow-hidden rounded-card p-2.5 ${v.card}`}
      style={{ '--d': `${index * 90}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="zoom-img h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent"></div>
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] ${v.tag}`}
        >
          <span className="relative">{item.tag}</span>
        </span>
      </div>
      <div className="relative flex flex-1 flex-col px-3 pb-3 pt-6">
        <h3 className={`t-h3 font-serif font-medium ${v.title}`}>{item.title}</h3>
        <p className={`mt-3 text-sm leading-relaxed ${v.text}`}>{item.description}</p>
        <div className="mt-auto flex items-center justify-between pt-7">
          <Link
            to={`/treatments/${item.slug}`}
            className={`text-[0.8rem] font-medium tracking-wide after:absolute after:inset-0 after:content-[''] ${v.link}`}
            aria-label={`View details about ${item.title}`}
          >
            Discover Details
          </Link>
          <span
            className={`arrow-chip flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 ${v.chip}`}
            aria-hidden="true"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </article>
  );
}
export default TreatmentCard;
