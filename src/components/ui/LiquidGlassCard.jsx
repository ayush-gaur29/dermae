import React from 'react';

/**
 * LiquidGlassCard Component
 * Implements the bespoke DERMAÉ Liquid Glass design system.
 * Features translucent surfaces, backdrop blur, specular inner highlights,
 * delicate borders, and dimensional hover lighting.
 */
export default function LiquidGlassCard({
  children,
  variant = 'ivory',
  className = '',
  hoverEffect = true,
  onClick,
  as: Component = 'div',
  ...props
}) {
  const variantMap = {
    ivory: 'liquid-glass-card',
    sage: 'liquid-glass-sage',
    emerald: 'liquid-glass-emerald',
    dark: 'liquid-glass-dark'
  };

  const selectedClass = variantMap[variant] || variantMap.ivory;

  return (
    <Component
      className={`relative overflow-hidden ${selectedClass} ${hoverEffect ? '' : '!transform-none !shadow-none'} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Subtle specular reflection bar across the top */}
      <div 
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </Component>
  );
}

