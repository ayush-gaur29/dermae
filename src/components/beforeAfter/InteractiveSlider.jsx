import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export function InteractiveSlider({ image, title, duration, className = '' }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((p) => Math.max(0, p - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((p) => Math.min(100, p + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <div className={`relative select-none ${className}`}>
      {/* Draggable slider container */}
      <div
        ref={containerRef}
        role="slider"
        aria-label={`Interactive before and after comparison for ${title}`}
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          if (e.touches[0]) handleMove(e.touches[0].clientX);
        }}
        className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-forest/15 shadow-2xl cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-gold"
      >
        {/* Layer 1: BEFORE (Left half of image) */}
        <div className="absolute inset-0 overflow-hidden bg-forest/5">
          <img
            src={image}
            alt={`Before treatment - ${title}`}
            draggable={false}
            className="absolute top-0 left-0 h-full w-[200%] max-w-none object-cover"
          />
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="glass-dark inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ivory shadow-md backdrop-blur-md">
              <span className="gold-dot" aria-hidden="true" />
              Before
            </span>
          </div>
        </div>

        {/* Layer 2: AFTER (Right half of image, clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img
            src={image}
            alt={`After treatment (${duration}) - ${title}`}
            draggable={false}
            className="absolute top-0 left-[-100%] h-full w-[200%] max-w-none object-cover"
          />
          <div className="absolute top-4 right-4 z-10 pointer-events-none">
            <span className="glass-dark inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-light shadow-md backdrop-blur-md">
              <span className="gold-dot" aria-hidden="true" />
              After {duration ? `(${duration})` : ''}
            </span>
          </div>
        </div>

        {/* Divider line & handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-gradient-to-b from-gold-light via-white to-gold-light shadow-[0_0_12px_rgba(0,0,0,0.6)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold bg-forest text-ivory shadow-[0_4px_18px_rgba(16,47,39,0.5)] transition-transform duration-150 ${
              isDragging ? 'scale-110' : 'group-hover:scale-105'
            }`}
          >
            <ChevronsLeftRight className="h-5 w-5 text-gold-light" strokeWidth={2} />
          </div>
        </div>

        {/* Floating guidance helper */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1 text-[0.72rem] tracking-wide text-ivory/80 shadow-md backdrop-blur-sm">
            Drag slider left or right to compare
          </span>
        </div>
      </div>
    </div>
  );
}

export default InteractiveSlider;
