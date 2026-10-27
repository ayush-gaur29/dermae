import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { announcement } from '../../data/brandContent.js';
import { Link } from '../../router/index.jsx';

export function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="relative z-50 bg-forest text-ivory">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-center gap-x-2.5 gap-y-1 px-3 py-1.5 text-center text-[0.68rem] tracking-[0.03em] sm:text-xs sm:px-5 sm:py-2">
        <span className="gold-dot hidden sm:inline-block" aria-hidden="true"></span>
        <span className="text-ivory/85">{announcement.text}</span>
        <span className="hidden h-3 w-px bg-gold/60 sm:inline-block" aria-hidden="true"></span>
        <Link
          to={announcement.href}
          className="inline-flex items-center gap-1 font-medium text-gold-light underline-offset-4 transition-colors hover:text-ivory hover:underline shrink-0"
        >
          {announcement.linkLabel}
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
export default AnnouncementBar;
