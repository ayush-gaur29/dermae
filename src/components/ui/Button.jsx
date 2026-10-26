import React from 'react';

/**
 * Reusable Button component aligned with the DERMAÉ luxury brand identity.
 * Variants:
 * - 'primary': Emerald-to-Forest gradient, Ivory text, subtle gold edge highlight & shadow.
 * - 'secondary': Ivory liquid glass with Emerald text and delicate border.
 * - 'outline': Translucent border with gold/emerald hover.
 * - 'gold': Antique Gold accented CTA.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  ...props
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs sm:text-sm tracking-wider uppercase font-medium',
    md: 'px-6 py-3 text-sm tracking-wider uppercase font-medium',
    lg: 'px-8 py-3.5 text-sm sm:text-base tracking-wider uppercase font-medium'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-brand-emerald via-brand-emerald-dark to-brand-forest
      text-brand-ivory
      shadow-[0_4px_18px_rgba(24,88,68,0.25)]
      border border-brand-emerald/40
      hover:shadow-[0_8px_25px_rgba(24,88,68,0.38)]
      hover:border-brand-gold/60
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    secondary: `
      bg-brand-ivory/80
      backdrop-blur-md
      text-brand-emerald
      border border-brand-emerald/25
      shadow-[0_4px_16px_rgba(16,47,39,0.06)]
      hover:bg-brand-ivory
      hover:text-brand-forest
      hover:border-brand-gold/60
      hover:shadow-[0_6px_20px_rgba(16,47,39,0.12)]
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    outline: `
      bg-transparent
      text-brand-forest
      border border-brand-forest/20
      hover:bg-brand-emerald/5
      hover:border-brand-emerald
      hover:text-brand-emerald
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    gold: `
      bg-gradient-to-r from-brand-gold to-brand-gold-dark
      text-brand-ivory
      shadow-[0_4px_18px_rgba(176,138,79,0.28)]
      border border-brand-gold-light/40
      hover:shadow-[0_8px_25px_rgba(176,138,79,0.40)]
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    darkGlass: `
      bg-brand-forest/60
      backdrop-blur-md
      text-brand-ivory
      border border-brand-ivory/20
      shadow-[0_4px_20px_rgba(0,0,0,0.25)]
      hover:border-brand-gold/70
      hover:bg-brand-forest/80
      hover:-translate-y-0.5
      active:translate-y-0
    `
  };

  const baseStyles = `
    inline-flex items-center justify-center gap-2.5
    rounded-full transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/80 focus-visible:ring-offset-2
    cursor-pointer select-none
  `;

  const combinedClasses = `${baseStyles} ${sizeClasses[size]} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`group ${combinedClasses}`} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={`group ${combinedClasses}`} onClick={onClick} {...props}>
      {content}
    </button>
  );
}

