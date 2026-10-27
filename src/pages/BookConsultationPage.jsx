import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  ShieldCheck, 
  HeartHandshake, 
  HelpCircle,
  MapPin,
  Lock,
  MessageSquare,
  Check,
  ChevronRight
} from 'lucide-react';
import { treatments } from '../data/treatments.js';
import { brand, images } from '../data/brandContent.js';
import { Container, Eyebrow, Button } from '../components/ui/primitives.jsx';
import { Link, useLocation } from '../router/index.jsx';

export default function BookConsultationPage() {
  const location = useLocation();

  // Parse treatment from URL query string if provided (?treatment=slug)
  const getInitialTreatment = () => {
    try {
      const searchParams = new URLSearchParams(location.search || window.location.search);
      const treatmentQuery = searchParams.get('treatment');
      if (treatmentQuery) {
        const found = treatments.find((t) => t.slug === treatmentQuery || t.id === treatmentQuery);
        if (found) return found.slug;
      }
    } catch {
      // fallback
    }
    return 'skin-consultation'; // Default recommended starting point
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    treatment: getInitialTreatment(),
    preferredDate: '',
    preferredTime: 'morning',
    notes: ''
  });

  // Re-sync if query param changes
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search || window.location.search);
    const treatmentQuery = searchParams.get('treatment');
    if (treatmentQuery) {
      const found = treatments.find((t) => t.slug === treatmentQuery || t.id === treatmentQuery);
      if (found) {
        setFormData((prev) => ({ ...prev, treatment: found.slug }));
      }
    }
  }, [location.search]);

  // Form states: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  // Minimum date selectable is today
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    } else if (formData.preferredDate < todayStr) {
      newErrors.preferredDate = 'Date cannot be in the past.';
    }

    if (!formData.treatment) {
      newErrors.treatment = 'Please select a treatment or service of interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      const firstErrorEl = document.querySelector('[data-has-error="true"]');
      if (firstErrorEl) firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus('submitting');
    setServerMessage('');

    try {
      // Simulate submission latency & check for any wired backend
      await new Promise((resolve) => setTimeout(resolve, 850));

      // Successfully processed request
      setStatus('success');
      setServerMessage(
        'Your consultation request has been received. Our concierge will review scheduling availability and reach out to confirm your appointment time.'
      );
    } catch {
      setStatus('error');
      setServerMessage('We could not submit your request at this moment. Please call our clinic directly or try again.');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      treatment: 'skin-consultation',
      preferredDate: '',
      preferredTime: 'morning',
      notes: ''
    });
    setErrors({});
    setStatus('idle');
    setServerMessage('');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-ivory">
      {/* Ambient background glows */}
      <div className="orb orb-sage -left-40 top-12 h-96 w-96 opacity-50" aria-hidden="true" />
      <div className="orb orb-emerald -right-36 top-1/3 h-80 w-80 opacity-30" aria-hidden="true" />
      <div className="orb orb-gold -left-20 bottom-1/4 h-72 w-72 opacity-25" aria-hidden="true" />

      {/* Header Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-forest/[0.06]">
        <Container className="relative">
          <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sage" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-emerald">Home</Link>
            <span>/</span>
            <span className="text-forest font-semibold">Book a Consultation</span>
          </nav>

          <div className="max-w-3xl animate-hero-slide-left">
            <Eyebrow tone="emerald">Private Consultations</Eyebrow>
            <h1 className="t-display mt-4 font-serif font-medium text-forest">
              Let’s Design Your Skin Pathway <em className="italic text-emerald">Together.</em>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink font-light max-w-2xl">
              Begin your journey with an unhurried, 45-minute one-on-one consultation. We listen to your goals, examine your skin’s biological profile, and curate a customized treatment plan without sales pressure.
            </p>

            {/* Reassurance Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-xs font-medium text-forest shadow-sm backdrop-blur-sm">
                <span className="gold-dot" aria-hidden="true" />
                45-Minute In-Depth Diagnostic
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-xs font-medium text-forest shadow-sm backdrop-blur-sm">
                <span className="gold-dot" aria-hidden="true" />
                Strictly Zero Sales Pressure
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-xs font-medium text-forest shadow-sm backdrop-blur-sm">
                <span className="gold-dot" aria-hidden="true" />
                100% Confidential Care
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Form & Information Section */}
      <section className="relative py-12 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div 
                className="rounded-[2rem] border border-forest/[0.08] bg-white/85 p-6 sm:p-10 shadow-[0_20px_50px_-20px_rgba(16,47,39,0.12)] backdrop-blur-md relative overflow-hidden"
              >
                {status === 'success' ? (
                  /* Success State */
                  <div className="py-8 text-center sm:py-12" role="status" aria-live="polite">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald text-ivory shadow-lg ring-8 ring-emerald/10">
                      <CheckCircle2 className="h-10 w-10" strokeWidth={2} />
                    </div>
                    <span className="mt-6 inline-block rounded-full border border-emerald/20 bg-emerald/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald">
                      Request Received
                    </span>
                    <h2 className="mt-3 font-serif text-3xl font-medium text-forest sm:text-4xl">
                      Thank You, {formData.fullName || 'Valued Client'}
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink">
                      {serverMessage}
                    </p>

                    <div className="mx-auto mt-6 max-w-md rounded-2xl border border-gold/30 bg-gold-light/10 p-5 text-left text-xs leading-relaxed text-forest/90">
                      <p className="font-semibold text-gold-dark">Important Reservation Notice:</p>
                      <p className="mt-1">
                        To maintain our unhurried clinical standard, dates requested online are confirmed individually by our concierge. We will contact you at <strong className="font-medium text-forest">{formData.email}</strong> or <strong className="font-medium text-forest">{formData.phone}</strong> to confirm your exact appointment slot.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Button onClick={handleReset} variant="outline">
                        Submit Another Request
                      </Button>
                      <Link
                        to="/treatments"
                        className="inline-flex items-center justify-center rounded-full bg-emerald px-6 py-3 text-sm font-medium text-ivory transition hover:bg-forest shadow-md hover:shadow-lg"
                      >
                        Browse Treatments
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* Booking Form */
                  <form onSubmit={handleSubmit} noValidate aria-label="Book a consultation form">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-forest/[0.08] pb-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Reservation Request</span>
                        <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-medium text-forest">
                          Consultation Details
                        </h2>
                        <p className="mt-1.5 text-xs sm:text-sm text-ink font-light">
                          Provide your details below. All appointments are held in a quiet, confidential setting.
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/[0.06] px-3.5 py-1.5 text-[0.72rem] font-medium text-emerald">
                        <Clock className="h-3.5 w-3.5" /> 45 Min Session
                      </span>
                    </div>

                    {status === 'error' && (
                      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-900" role="alert">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                        <div>
                          <p className="font-semibold">Unable to submit request</p>
                          <p className="mt-0.5">{serverMessage}</p>
                        </div>
                      </div>
                    )}

                    <div className="mt-8 space-y-6">
                      {/* Full Name */}
                      <div data-has-error={Boolean(errors.fullName)}>
                        <label htmlFor="fullName" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-forest">
                          <span className="flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-sage" /> Full Name <span className="text-emerald">*</span>
                          </span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Eleanor Vance"
                          className={`mt-2 w-full rounded-xl border bg-ivory/50 hover:bg-white px-4 py-3.5 text-sm text-forest placeholder-ink/40 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
                            errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-forest/15 hover:border-forest/30 focus:border-emerald'
                          }`}
                        />
                        {errors.fullName && <p className="mt-1.5 text-xs text-red-600">{errors.fullName}</p>}
                      </div>

                      {/* Contact Info: Email & Phone Grid */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        {/* Email */}
                        <div data-has-error={Boolean(errors.email)}>
                          <label htmlFor="email" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-forest">
                            <span className="flex items-center gap-1.5">
                              <Mail className="h-3.5 w-3.5 text-sage" /> Email Address <span className="text-emerald">*</span>
                            </span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="eleanor@example.com"
                            className={`mt-2 w-full rounded-xl border bg-ivory/50 hover:bg-white px-4 py-3.5 text-sm text-forest placeholder-ink/40 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
                              errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-forest/15 hover:border-forest/30 focus:border-emerald'
                            }`}
                          />
                          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div data-has-error={Boolean(errors.phone)}>
                          <label htmlFor="phone" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-forest">
                            <span className="flex items-center gap-1.5">
                              <Phone className="h-3.5 w-3.5 text-sage" /> Phone Number <span className="text-emerald">*</span>
                            </span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className={`mt-2 w-full rounded-xl border bg-ivory/50 hover:bg-white px-4 py-3.5 text-sm text-forest placeholder-ink/40 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
                              errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-forest/15 hover:border-forest/30 focus:border-emerald'
                            }`}
                          />
                          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
                        </div>
                      </div>

                      {/* Treatment of Interest */}
                      <div data-has-error={Boolean(errors.treatment)}>
                        <label htmlFor="treatment" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-forest">
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5 text-sage" /> Treatment of Interest <span className="text-emerald">*</span>
                          </span>
                        </label>
                        <select
                          id="treatment"
                          name="treatment"
                          value={formData.treatment}
                          onChange={handleChange}
                          className={`mt-2 w-full rounded-xl border bg-ivory/50 hover:bg-white px-4 py-3.5 text-sm text-forest transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
                            errors.treatment ? 'border-red-400 ring-1 ring-red-400' : 'border-forest/15 hover:border-forest/30 focus:border-emerald'
                          }`}
                        >
                          <option value="skin-consultation">Comprehensive Skin Consultation (45 min) — Recommended First Step</option>
                          {treatments.map((t) => (
                            <option key={t.slug} value={t.slug}>
                              {t.title} ({t.duration})
                            </option>
                          ))}
                          <option value="undecided">Not sure yet / Tailored recommendation needed</option>
                        </select>
                        {errors.treatment && <p className="mt-1.5 text-xs text-red-600">{errors.treatment}</p>}
                      </div>

                      {/* Date & Preferred Time Window */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        {/* Preferred Date */}
                        <div data-has-error={Boolean(errors.preferredDate)}>
                          <label htmlFor="preferredDate" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-forest">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5 text-sage" /> Preferred Date <span className="text-emerald">*</span>
                            </span>
                          </label>
                          <input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            min={todayStr}
                            required
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className={`mt-2 w-full rounded-xl border bg-ivory/50 hover:bg-white px-4 py-3.5 text-sm text-forest transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
                              errors.preferredDate ? 'border-red-400 ring-1 ring-red-400' : 'border-forest/15 hover:border-forest/30 focus:border-emerald'
                            }`}
                          />
                          {errors.preferredDate && <p className="mt-1.5 text-xs text-red-600">{errors.preferredDate}</p>}
                        </div>

                        {/* Preferred Time Window */}
                        <div>
                          <label htmlFor="preferredTime" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-forest">
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5 text-sage" /> Preferred Time of Day
                            </span>
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-xl border border-forest/15 hover:border-forest/30 bg-ivory/50 hover:bg-white px-4 py-3.5 text-sm text-forest transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald/20 focus:border-emerald"
                          >
                            <option value="morning">Morning (9:00 AM – 12:00 PM)</option>
                            <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                            <option value="evening">Late Afternoon / Evening (4:00 PM – 7:00 PM)</option>
                          </select>
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label htmlFor="notes" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-forest">
                          <span>Additional Notes or Skin Concerns <span className="text-ink/50 font-normal lowercase">(optional)</span></span>
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Tell us about specific skin goals, previous treatments, or sensitivities..."
                          className="mt-2 w-full rounded-xl border border-forest/15 hover:border-forest/30 bg-ivory/50 hover:bg-white px-4 py-3.5 text-sm text-forest placeholder-ink/40 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald/20 focus:border-emerald"
                        />
                      </div>

                      {/* Concierge Policy Notice */}
                      <div className="rounded-xl border border-forest/10 bg-sage-pale/35 p-4 text-xs leading-relaxed text-ink">
                        <p className="flex items-center gap-1.5 font-medium text-forest">
                          <ShieldCheck className="h-4 w-4 text-emerald" /> Consultation Policy
                        </p>
                        <p className="mt-1 text-ink/80">
                          Online requests represent appointment reservations. Our clinic concierge will connect directly with you to finalize your exact appointment slot and answer preliminary questions.
                        </p>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="group relative inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-emerald to-forest px-8 py-4 text-sm font-semibold tracking-wide text-ivory shadow-[0_10px_30px_-10px_rgba(24,88,68,0.5)] transition-all duration-300 hover:shadow-[0_16px_40px_-10px_rgba(24,88,68,0.65)] hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {status === 'submitting' ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ivory border-t-transparent" />
                              Submitting Consultation Request...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Request Consultation Appointment
                              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Side Information Column */}
            <div className="space-y-6 lg:col-span-5">
              
              {/* Featured Clinic Visual Card with popup effect */}
              <div className="overflow-hidden rounded-[2rem] border border-forest/[0.08] bg-white/80 p-2.5 shadow-[0_16px_40px_-20px_rgba(16,47,39,0.12)] backdrop-blur-md group card-picture-popup popup-hover">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem]">
                  <img
                    src={images.clinic}
                    alt="The serene consultation room at DERMAÉ"
                    className="popup-img h-full w-full object-cover transition-transform duration-700 ease-lux"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/20 to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 rounded-full glass px-3.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-forest border border-white/50 backdrop-blur-md">
                    Private Clinic Suite
                  </span>
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-ivory">
                    <p className="font-serif text-base sm:text-lg font-medium leading-snug">A calm space designed for understanding.</p>
                    <p className="text-xs text-ivory/80 mt-0.5">Tailored assessments with complete comfort and quiet luxury.</p>
                  </div>
                </div>
              </div>

              {/* What to expect card */}
              <div className="rounded-[2rem] border border-forest/[0.08] bg-white/85 p-7 shadow-sm backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">The Consultation Flow</span>
                  <span className="text-xs font-medium text-emerald bg-emerald/[0.07] px-2.5 py-0.5 rounded-full border border-emerald/15">3 Steps</span>
                </div>
                <h3 className="mt-2 font-serif text-2xl font-medium text-forest">What to expect</h3>
                
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald/10 font-serif text-sm font-semibold text-emerald border border-emerald/20">
                      01
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-forest">In-Depth Listening</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink">
                        We review your daily rituals, current products, sensitivities, and what you hope to achieve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald/10 font-serif text-sm font-semibold text-emerald border border-emerald/20">
                      02
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-forest">Tactile & Visual Diagnostics</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink">
                        Gentle, non-invasive skin analysis measuring hydration, cellular barrier resilience, and vascular tone.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald/10 font-serif text-sm font-semibold text-emerald border border-emerald/20">
                      03
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-forest">Bespoke Treatment Pathway</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink">
                        You receive a clear, personalized recommendation and home protocol with zero obligation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinic Contact & Hours Card */}
              <div className="rounded-[2rem] border border-forest/[0.08] bg-sage-pale/40 p-7 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-forest/70">Our Practice</span>
                <h3 className="mt-2 font-serif text-xl font-medium text-forest">Clinic Concierge</h3>

                <div className="mt-5 space-y-3.5 text-sm text-ink">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    <span>{brand.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-emerald" />
                    <span>{brand.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-emerald" />
                    <span>{brand.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-emerald" />
                    <span>{brand.contact.hours}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-forest/10 pt-5 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                    Concierge replies within 2 hrs
                  </span>
                  <Link
                    to="/treatments"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-forest/80 hover:text-emerald transition"
                  >
                    Treatments <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Trust statement */}
              <div className="flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold-light/10 p-5 text-xs text-forest/85">
                <ShieldCheck className="h-5 w-5 shrink-0 text-gold-dark mt-0.5" />
                <div>
                  <p className="font-semibold text-gold-dark">Strict Clinical Confidentiality</p>
                  <p className="mt-1 leading-relaxed text-forest/80">
                    Your personal skin details and treatment aspirations are held in strict clinical confidentiality. We do not share your information with external parties.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Consultation FAQs Section - Eliminates dead space & builds trust */}
          <div className="mt-20 sm:mt-28 border-t border-forest/[0.08] pt-14 sm:pt-18">
            <div className="max-w-xl mb-8 sm:mb-10">
              <Eyebrow tone="gold">Pre-Visit Guidance</Eyebrow>
              <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-medium text-forest">
                Frequently Asked Consultation Questions
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-forest/[0.07] bg-white/75 p-6 shadow-sm backdrop-blur-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest/[0.05] text-forest mb-4">
                  <User className="h-4 w-4" />
                </span>
                <h4 className="font-serif text-lg font-medium text-forest">How should I prepare?</h4>
                <p className="mt-2 text-xs sm:text-sm text-ink leading-relaxed font-light">
                  Arrive with your normal daily skincare applied. Clean skin or minimal makeup allows our specialists to accurately evaluate natural moisture, barrier condition, and texture.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-forest/[0.07] bg-white/75 p-6 shadow-sm backdrop-blur-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest/[0.05] text-forest mb-4">
                  <HeartHandshake className="h-4 w-4" />
                </span>
                <h4 className="font-serif text-lg font-medium text-forest">Will I be pressured to buy?</h4>
                <p className="mt-2 text-xs sm:text-sm text-ink leading-relaxed font-light">
                  Never. Our consultations are strictly diagnostic and educational. You will receive a bespoke treatment pathway to take home and consider at your own rhythm without obligation.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-forest/[0.07] bg-white/75 p-6 shadow-sm backdrop-blur-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest/[0.05] text-forest mb-4">
                  <Sparkles className="h-4 w-4" />
                </span>
                <h4 className="font-serif text-lg font-medium text-forest">Can I treat on the same day?</h4>
                <p className="mt-2 text-xs sm:text-sm text-ink leading-relaxed font-light">
                  Depending on clinic schedule and skin readiness, select gentle non-invasive protocols can be initiated immediately after your consultation if you wish.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
