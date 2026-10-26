import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {/* Eyebrow */}
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 h-[1px] bg-brand-gold/60" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-brand-gold">
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-brand-gold/60" />
        </div>
      )}

      {/* Main Title */}
      {title && (
        <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.18] mb-4 sm:mb-5 ${
          isDark ? 'text-brand-ivory' : 'text-brand-forest'
        }`}>
          {title}{' '}
          {highlight && (
            <span className={isDark ? 'text-brand-gold font-normal italic' : 'text-brand-emerald font-normal italic'}>
              {highlight}
            </span>
          )}
        </h2>
      )}

      {/* Subtitle / Description */}
      {subtitle && (
        <p className={`text-sm sm:text-base md:text-lg leading-relaxed font-light ${
          isDark ? 'text-brand-ivory/75' : 'text-brand-forest/75'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

