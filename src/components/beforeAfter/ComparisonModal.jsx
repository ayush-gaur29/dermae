import React, { useState, useEffect } from 'react';
import { X, SlidersHorizontal, Columns2, ArrowRight, ShieldCheck, Clock, Calendar, Sparkles } from 'lucide-react';
import { InteractiveSlider } from './InteractiveSlider.jsx';
import { Button, Eyebrow } from '../ui/primitives.jsx';
import { Link } from '../../router/index.jsx';

export function ComparisonModal({ caseItem, onClose }) {
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'sideBySide'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!caseItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 overflow-y-auto bg-forest/85 backdrop-blur-md transition-all duration-300"
    >
      {/* Backdrop click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-forest/15 bg-ivory text-forest shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-forest/[0.08] px-6 py-4 sm:px-8 bg-white/70 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
              <span className="gold-dot" aria-hidden="true" />
              {caseItem.category}
            </span>
            <span className="hidden sm:inline-block text-xs font-medium text-forest/60">
              Case Ref: #{caseItem.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Mode switch */}
            <div className="flex items-center rounded-full border border-forest/15 bg-white/90 p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition ${
                  viewMode === 'slider'
                    ? 'bg-forest text-ivory shadow-sm'
                    : 'text-forest/70 hover:text-forest'
                }`}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">Interactive Slider</span>
                <span className="xs:hidden">Slider</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('sideBySide')}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition ${
                  viewMode === 'sideBySide'
                    ? 'bg-forest text-ivory shadow-sm'
                    : 'text-forest/70 hover:text-forest'
                }`}
              >
                <Columns2 className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">Side-by-Side</span>
                <span className="xs:hidden">Split</span>
              </button>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close comparison view"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/15 bg-white/80 text-forest transition hover:bg-forest hover:text-ivory"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Visual comparison view */}
            <div className="lg:col-span-7">
              {viewMode === 'slider' ? (
                <div>
                  <InteractiveSlider
                    image={caseItem.image}
                    title={caseItem.title}
                    duration={caseItem.duration}
                  />
                  <div className="mt-3 flex items-center justify-between text-[0.75rem] text-forest/70 px-1">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      Documented Timeline: {caseItem.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-emerald" />
                      {caseItem.sessions}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-forest/15 shadow-2xl bg-forest/5">
                    <img
                      src={caseItem.image}
                      alt={`Full side-by-side comparison for ${caseItem.title}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-center text-[0.72rem] text-forest/65">
                    Unmodified clinical photography documentation under identical studio calibration.
                  </p>
                </div>
              )}

              {/* Patient Profile & Baseline Metrics */}
              {caseItem.verifiedDetails && (
                <div className="mt-6 rounded-2xl border border-forest/[0.08] bg-white/70 p-4 sm:p-5 backdrop-blur-sm">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/75 mb-3 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald" />
                    Case Parameters &amp; Skin Classification
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-forest/55 block">Classification</span>
                      <span className="font-medium text-forest mt-0.5 block">{caseItem.verifiedDetails.skinType}</span>
                    </div>
                    <div>
                      <span className="text-forest/55 block">Age Demographic</span>
                      <span className="font-medium text-forest mt-0.5 block">{caseItem.verifiedDetails.patientAgeRange}</span>
                    </div>
                    <div>
                      <span className="text-forest/55 block">Primary Focus</span>
                      <span className="font-medium text-forest mt-0.5 block">{caseItem.verifiedDetails.primaryFocus}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Case Details Info */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  Related Protocol
                </span>
                <Link
                  to={`/treatments/${caseItem.treatmentSlug}`}
                  className="mt-1 group flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-700 transition"
                >
                  <span>{caseItem.treatmentTitle}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </Link>

                <h3 id="modal-case-title" className="mt-3 font-serif text-2xl font-medium text-forest sm:text-3xl leading-snug">
                  {caseItem.title}
                </h3>

                <div className="mt-5 space-y-4 text-sm text-ink font-light leading-relaxed">
                  <div>
                    <h5 className="font-medium text-forest text-xs uppercase tracking-wider mb-1">
                      Presenting Concerns
                    </h5>
                    <p className="rounded-xl bg-forest/[0.03] p-3 text-xs sm:text-sm text-forest/85">
                      {caseItem.concerns}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium text-forest text-xs uppercase tracking-wider mb-1">
                      Clinical Protocol Implemented
                    </h5>
                    <p className="text-xs sm:text-sm text-ink/80">
                      {caseItem.protocol}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium text-forest text-xs uppercase tracking-wider mb-1">
                      Observed Clinical Outcome
                    </h5>
                    <p className="text-xs sm:text-sm text-ink/80">
                      {caseItem.resultsSummary}
                    </p>
                  </div>

                  <div className="border-t border-forest/[0.08] pt-4">
                    <h5 className="font-medium text-forest text-xs uppercase tracking-wider mb-1">
                      Specialist Evaluation
                    </h5>
                    <p className="text-xs italic text-forest/75 leading-normal">
                      "{caseItem.clinicalNotes}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsible Medical / Skincare Disclaimer */}
              <div className="rounded-xl border border-gold/20 bg-gold/5 p-3.5 text-[0.72rem] text-forest/75 leading-relaxed">
                <span className="font-semibold text-gold-dark block mb-0.5">Clinical Note:</span>
                Individual outcomes naturally vary based on age, cellular genetics, skin history, and at-home adherence. A personalized consultation determines the optimal modality for your biological profile.
              </div>

              {/* Navigation CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  to="/book-consultation"
                  variant="primary"
                  className="w-full justify-center !min-h-[44px] text-xs font-semibold"
                >
                  Book a Consultation
                </Button>
                <Link
                  to={`/treatments/${caseItem.treatmentSlug}`}
                  className="inline-flex items-center justify-center rounded-full border border-forest/20 px-5 py-2.5 text-xs font-semibold text-forest transition hover:bg-forest hover:text-ivory text-center"
                >
                  Explore Protocol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonModal;
