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
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Main"
        className={`nav-surface relative mx-auto flex max-w-shell items-center justify-between rounded-full py-2 pl-5 pr-2 sm:pl-6 ${
          scrolled || open ? 'is-scrolled' : ''
        }`}
      >
        <Link to="/" className="flex shrink-0 items-center" aria-label="DERMAÉ home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {mainNav.map((item) => {
            const isItemActive = active === item.id;
            return (
              <li key={item.id}>
                <Link
                  to={item.href}
                  aria-current={isItemActive ? 'page' : undefined}
                  className={`nav-link text-[0.85rem] font-medium tracking-wide ${
                    isItemActive ? 'text-emerald' : 'text-forest/75 hover:text-forest'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button to={navCta.href} className="hidden !min-h-[44px] !px-5 sm:inline-flex">
            {navCta.label}
          </Button>
          <button
            ref={burgerRef}
            type="button"
            className="burger flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full border border-forest/10 bg-ivory-50/70 text-forest transition-colors hover:border-gold/50 lg:hidden"
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

        <MobileMenu open={open} onClose={close} active={active} />
      </nav>
    </header>
  );
}
export default Navbar;
