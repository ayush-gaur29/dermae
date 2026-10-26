import React from 'react';
import officialLogo from '../../assets/dermae-official-logo.png';
import officialLogoLight from '../../assets/dermae-official-logo-light.png';

export default function BrandLogo({ theme = 'light', size = 'md', className = '' }) {
  const isDark = theme === 'dark';
  const src = isDark ? officialLogoLight : officialLogo;

  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12'
  };

  return (
    <a
      href="#home"
      className={`inline-flex items-center group transition-transform duration-300 hover:scale-[1.015] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg ${className}`}
      aria-label="DERMAÉ — Clinical Skincare & Aesthetics"
    >
      <img
        src={src}
        alt="DERMAÉ"
        className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain`}
      />
    </a>
  );
}
