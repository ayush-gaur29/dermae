import React from 'react';
import { ArrowRight } from 'lucide-react';
import { brand } from '../../data/brandContent.js';
import { Link } from '../../router/index.jsx';

export function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export function Button({ href, to, variant = 'primary', children, icon = true, className = '', onClick }) {
  const target = to || href || '#';
  const isInternalRoute = target.startsWith('/') && !target.startsWith('//');

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="btn-icon h-4 w-4" strokeWidth={1.75} aria-hidden="true" />}
    </>
  );

  if (isInternalRoute) {
    return (
      <Link to={target} onClick={onClick} className={`btn btn-${variant} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <a href={target} onClick={onClick} className={`btn btn-${variant} ${className}`}>
      {content}
    </a>
  );
}

export function Eyebrow({ children, tone = 'emerald', className = '' }) {
  const color = tone === 'light' ? 'text-gold-light' : 'text-gold';
  return (
    <p className={`t-eyebrow inline-flex items-center gap-3 ${color} ${className}`}>
      <span className="gold-dot" aria-hidden="true"></span>
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'dark', className = '' }) {
  const center = align === 'center';
  const titleColor = tone === 'light' ? 'text-ivory' : 'text-forest';
  const textColor = tone === 'light' ? 'text-ivory/75' : 'text-ink';

  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <div className="reveal">
          <Eyebrow tone={tone === 'light' ? 'light' : 'emerald'}>
            {eyebrow}
          </Eyebrow>
        </div>
      )}
      <h2
        className={`reveal t-h2 mt-5 font-serif font-medium ${titleColor}`}
        style={{ '--d': '80ms' }}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`reveal mt-5 text-base leading-relaxed sm:text-[1.05rem] ${textColor}`}
          style={{ '--d': '160ms' }}
        >
          {text}
        </p>
      )}
    </div>
  );
}

// Official logo if supplied; otherwise a refined typographic wordmark.
export function Logo({ tone = 'dark', className = '' }) {
  const src = tone === 'light' ? brand.logoLight || brand.logo : brand.logo;
  if (src) {
    return (
      <img
        src={src}
        alt={brand.name}
        className={`h-9 w-auto object-contain sm:h-10 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      />
    );
  }
  const color = tone === 'light' ? 'text-ivory' : 'text-forest';
  return (
    <span
      className={`inline-flex items-baseline font-serif text-[1.65rem] font-medium leading-none tracking-[0.18em] ${color} ${className}`}
      aria-label={brand.name}
    >
      DERMA<span className="text-gold">É</span>
    </span>
  );
}
