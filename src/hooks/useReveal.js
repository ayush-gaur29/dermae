import { useEffect } from 'react';

// Adds .is-visible to every .reveal element once it enters the viewport.
export function useRevealAll(depKey) {
  useEffect(() => {
    // Small timeout to allow DOM to settle after page transition
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal');
      if (!('IntersectionObserver' in window)) {
        els.forEach((el) => el.classList.add('is-visible'));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [depKey]);
}

// Tracks which section id is currently in view for nav indicators.
export function useActiveSection(ids, setActive) {
  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids.join(',')]);
}
