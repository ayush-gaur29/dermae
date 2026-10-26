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
  MapPin
} from 'lucide-react';
import { treatments } from '../data/treatments.js';
import { brand } from '../data/brandContent.js';
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
    <div className="min-h-screen bg-ivory">
      {/* Header Banner */}
      <section className="relative overflow-hidden border-b border-emerald/10 bg-gradient-to-b from-ivory-50 via-sage-pale/30 to-ivory py-16 sm:py-24">
        <div className="orb orb-sage left-[-5%] top-[-10%] h-80 w-80 opacity-50" aria-hidden="true" />
        <div className="orb orb-gold right-[-5%] top-10 h-72 w-72 opacity-40" aria-hidden="true" />

        <Container className="relative">
          <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sage" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-emerald">Home</Link>
            <span>/</span>
            <span className="text-forest">Book a Consultation</span>
          </nav>

          <div className="max-w-2xl">
            <Eyebrow>Bespoke Skin Journey</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-forest sm:text-5xl">
              Book Your Private Consultation
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink/80 sm:text-lg">
              Begin your skin journey with a relaxed, 45-minute one-on-one consultation. We listen to your goals, examine your skin’s biological profile, and curate a customized treatment plan without sales pressure.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form & Information Section */}
      <section className="relative py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div 
                className="rounded-3xl border border-emerald/15 bg-ivory-50/90 p-6 sm:p-10 shadow-lg backdrop-blur-sm"
                style={{ boxShadow: 'var(--shadow-ambient)' }}
              >
                {status === 'success' ? (
                  /* Success State */
                  <div className="py-8 text-center sm:py-12" role="status" aria-live="polite">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-ivory shadow-md">
                      <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
                    </div>
                    <span className="mt-6 inline-block rounded-full border border-emerald/20 bg-emerald/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
                      Request Received
                    </span>
                    <h2 className="mt-3 font-serif text-2xl font-medium text-forest sm:text-3xl">
                      Thank You, {formData.fullName || 'Valued Client'}
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink/80">
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
                        className="inline-flex items-center justify-center rounded-full bg-emerald px-6 py-3 text-sm font-medium text-ivory transition hover:bg-forest"
                      >
                        Browse Treatments
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* Booking Form */
                  <form onSubmit={handleSubmit} noValidate aria-label="Book a consultation form">
                    <div className="border-b border-emerald/10 pb-6">
                      <h2 className="font-serif text-2xl font-medium text-forest sm:text-3xl">
                        Consultation Details
                      </h2>
                      <p className="mt-2 text-sm text-ink/70">
                        Please provide your contact details and treatment interests. All initial assessments are conducted in a quiet, confidential setting.
                      </p>
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
                          className={`mt-2 w-full rounded-xl border bg-ivory/60 px-4 py-3 text-sm text-forest placeholder-ink/40 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald ${
                            errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-emerald/15 hover:border-emerald/30'
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
                            className={`mt-2 w-full rounded-xl border bg-ivory/60 px-4 py-3 text-sm text-forest placeholder-ink/40 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald ${
                              errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-emerald/15 hover:border-emerald/30'
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
                            className={`mt-2 w-full rounded-xl border bg-ivory/60 px-4 py-3 text-sm text-forest placeholder-ink/40 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald ${
                              errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-emerald/15 hover:border-emerald/30'
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
                          className={`mt-2 w-full rounded-xl border bg-ivory/60 px-4 py-3 text-sm text-forest transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald ${
                            errors.treatment ? 'border-red-400 ring-1 ring-red-400' : 'border-emerald/15 hover:border-emerald/30'
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
                            className={`mt-2 w-full rounded-xl border bg-ivory/60 px-4 py-3 text-sm text-forest transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald ${
                              errors.preferredDate ? 'border-red-400 ring-1 ring-red-400' : 'border-emerald/15 hover:border-emerald/30'
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
                            className="mt-2 w-full rounded-xl border border-emerald/15 bg-ivory/60 px-4 py-3 text-sm text-forest transition hover:border-emerald/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald"
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
                          <span>Additional Notes or Skin Concerns <span className="text-ink/40 font-normal lowercase">(optional)</span></span>
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Tell us about specific skin goals, previous treatments, or sensitivities..."
                          className="mt-2 w-full rounded-xl border border-emerald/15 bg-ivory/60 px-4 py-3 text-sm text-forest placeholder-ink/40 transition hover:border-emerald/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald"
                        />
                      </div>

                      {/* Concierge Policy Notice */}
                      <div className="rounded-xl border border-emerald/10 bg-sage-pale/40 p-4 text-xs leading-relaxed text-ink/75">
                        <p className="flex items-center gap-1.5 font-medium text-forest">
                          <ShieldCheck className="h-4 w-4 text-emerald" /> Consultation Policy
                        </p>
                        <p className="mt-1">
                          Online requests represent appointment reservations. Our clinic team will connect directly with you to finalize your appointment time and provide preliminary consultation guidelines.
                        </p>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="group relative inline-flex w-full items-center justify-center rounded-full bg-emerald px-8 py-4 text-sm font-semibold tracking-wide text-ivory shadow-md transition-all duration-300 hover:bg-forest hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {status === 'submitting' ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ivory border-t-transparent" />
                              Submitting Consultation Request...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Request Consultation Appointment
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
            <div className="space-y-8 lg:col-span-5">
              {/* What to expect card */}
              <div className="rounded-3xl border border-emerald/10 bg-ivory-50/80 p-7 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">The Experience</span>
                <h3 className="mt-2 font-serif text-2xl font-medium text-forest">What to expect</h3>
                
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3 text-sm text-ink/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                      <HeartHandshake className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <strong className="font-semibold text-forest">Listening first:</strong> We review your daily habits, current products, and what you hope to achieve.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <strong className="font-semibold text-forest">Tactile & visual diagnostic:</strong> Non-invasive skin analysis measuring hydration, tone, and texture.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                      <HelpCircle className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <strong className="font-semibold text-forest">Honest, pressure-free advice:</strong> You receive a clear, personalized recommendation with zero obligation.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Clinic Contact & Hours Card */}
              <div className="rounded-3xl border border-emerald/10 bg-sage-pale/40 p-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">Our Location</span>
                <h3 className="mt-2 font-serif text-xl font-medium text-forest">Clinic Information</h3>

                <div className="mt-5 space-y-3.5 text-sm text-ink/80">
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

                <div className="mt-6 border-t border-emerald/10 pt-5">
                  <Link
                    to="/treatments"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald transition hover:text-forest"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Back to Treatments Overview
                  </Link>
                </div>
              </div>

              {/* Trust statement */}
              <div className="rounded-2xl border border-gold/30 bg-gold-light/10 p-5 text-xs text-forest/80">
                <p className="font-semibold text-gold-dark">Clinical Confidentiality</p>
                <p className="mt-1 leading-relaxed">
                  Your personal skin details and treatment aspirations are held in strict clinical confidentiality. We do not share your information with external parties.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}

