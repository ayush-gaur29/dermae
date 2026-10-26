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
        const f = panelRef.current.querySelectorAll('a');
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
      if (panelRef.current && !panelRef.current.closest('nav').contains(e.target)) {
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
      className={`mobile-panel glass absolute left-0 right-0 top-[calc(100%+0.6rem)] rounded-[1.75rem] p-3 lg:hidden ${
        open ? 'is-open' : ''
      }`}
    >
      <ul className="relative flex flex-col">
        {mainNav.map((item, i) => (
          <li key={item.id} style={{ '--i': i }}>
            <Link
              to={item.href}
              onClick={() => onClose()}
              className={`flex min-h-[52px] items-center justify-between rounded-2xl px-4 font-serif text-[1.45rem] transition-colors ${
                active === item.id
                  ? 'bg-emerald/[0.07] text-emerald'
                  : 'text-forest hover:bg-forest/[0.04]'
              }`}
            >
              <span className="flex items-center gap-3">
                {active === item.id && <span className="gold-dot" aria-hidden="true"></span>}
                {item.label}
              </span>
              <ArrowUpRight className="h-4 w-4 text-forest/40" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </li>
        ))}
        <li style={{ '--i': mainNav.length }} className="px-1 pb-1 pt-3">
          <Button to={navCta.href} onClick={() => onClose()} className="w-full">
            {navCta.label}
          </Button>
        </li>
      </ul>
    </div>
  );
}
export default MobileMenu;
