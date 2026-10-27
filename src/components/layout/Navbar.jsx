import React, { useEffect, useState, useRef } from 'react';
import { mainNav, navCta } from '../../data/navigation.js';
import { Logo, Button } from '../ui/primitives.jsx';
import { MobileMenu } from './MobileMenu.jsx';
import { Link, useLocation } from '../../router/index.jsx';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const burgerRef = useRef(null);

  // Determine active nav item from route pathname
  const getActiveId = () => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/treatments')) return 'treatments';
    if (pathname.startsWith('/before-after')) return 'before-after';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/book-consultation')) return 'contact';
    return '';
  };

  const active = getActiveId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus && burgerRef.current) {
      burgerRef.current.focus();
    }
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-2.5 sm:px-5">
      <div className="relative mx-auto max-w-shell">
        <nav
          aria-label="Main"
          className={`nav-surface relative flex items-center justify-between rounded-full py-2 px-4 sm:px-6 transition-all duration-300 ${
            scrolled ? 'is-scrolled' : ''
          }`}
        >
          <Link to="/" className="flex shrink-0 items-center" aria-label="DERMAÉ home">
            <Logo className="h-8 w-auto sm:h-9" />
          </Link>

          <ul className="hidden items-center gap-2 lg:flex">
            {mainNav.map((item) => {
              const isItemActive = active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    aria-current={isItemActive ? 'page' : undefined}
                    className={`inline-flex items-center justify-center rounded-full px-4 py-1.5 text-[0.84rem] tracking-wide transition-all duration-200 ${
                      isItemActive
                        ? 'border border-forest/40 bg-forest/[0.05] text-forest font-semibold shadow-sm ring-1 ring-forest/20'
                        : 'border border-transparent text-forest/75 font-medium hover:text-forest hover:border-forest/20 hover:bg-forest/[0.02]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <Button to={navCta.href} className="!hidden md:!inline-flex !min-h-[42px] !px-5 text-xs">
              {navCta.label}
            </Button>
            <button
              ref={burgerRef}
              type="button"
              className="burger flex h-10 w-10 sm:h-11 sm:w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-forest/15 bg-white/70 text-forest shadow-sm transition-all duration-200 hover:border-gold/50 active:scale-95 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown panel positioned cleanly below navbar pill */}
        <MobileMenu open={open} onClose={close} active={active} />
      </div>
    </header>
  );
}
export default Navbar;
