import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { mainNav, navCta } from '../../data/navigation.js';
import { Button } from '../ui/primitives.jsx';
import { Link } from '../../router/index.jsx';

export function MobileMenu({ open, onClose, active }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose(true);
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll('a, button');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target) && !e.target.closest('.burger')) {
        onClose();
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    const t = setTimeout(() => panelRef.current?.querySelector('a')?.focus(), 120);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
      clearTimeout(t);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      aria-hidden={!open}
      inert={open ? undefined : ''}
      className={`mobile-panel glass !absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 rounded-[1.75rem] p-4 shadow-[0_20px_50px_-15px_rgba(16,47,39,0.22)] border border-forest/10 lg:hidden ${
        open ? 'is-open' : 'hidden'
      }`}
    >
      <ul className="relative flex flex-col gap-1.5">
        {mainNav.map((item, i) => {
          const isItemActive = active === item.id;
          return (
            <li key={item.id} style={{ '--i': i }}>
              <Link
                to={item.href}
                onClick={() => onClose()}
                className={`flex min-h-[50px] items-center justify-between rounded-xl px-4 font-serif text-[1.35rem] transition-all duration-200 ${
                  isItemActive
                    ? 'border border-forest/35 bg-white/70 text-forest font-semibold shadow-sm'
                    : 'border border-transparent text-forest/80 hover:text-forest hover:bg-forest/[0.03]'
                }`}
              >
                <span className="flex items-center gap-3">
                  {isItemActive && <span className="gold-dot" aria-hidden="true"></span>}
                  {item.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-forest/40" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </li>
          );
        })}

        <li style={{ '--i': mainNav.length }} className="pt-3">
          <Button to={navCta.href} onClick={() => onClose()} className="w-full !min-h-[46px] justify-center text-sm font-semibold">
            {navCta.label}
          </Button>
        </li>
      </ul>

      {/* Subtle brand reassurance in drawer */}
      <div className="mt-3.5 border-t border-forest/[0.08] pt-3 text-center">
        <p className="text-[0.68rem] uppercase tracking-wider text-forest/60">
          Personalized Skincare &amp; Aesthetic Protocols
        </p>
      </div>
    </div>
  );
}
export default MobileMenu;
