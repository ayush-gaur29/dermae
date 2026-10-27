import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, ArrowUpDown, ShieldCheck, Sparkles, AlertCircle, Info, RefreshCw } from 'lucide-react';
import { beforeAfterCases, beforeAfterCategories } from '../data/beforeAfterCases.js';
import beforeAfterHeroImg from '../assets/before-after-hero.jpg';
import { BeforeAfterCard } from '../components/beforeAfter/BeforeAfterCard.jsx';
import { ComparisonModal } from '../components/beforeAfter/ComparisonModal.jsx';
import { Container, Eyebrow, Button } from '../components/ui/primitives.jsx';
import { Link } from '../router/index.jsx';

export default function BeforeAfterPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Results');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'name' | 'duration'
  const [selectedCase, setSelectedCase] = useState(null);

  // Filter & Search & Sort pipeline
  const filteredCases = useMemo(() => {
    return beforeAfterCases
      .filter((item) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'All Results' || item.category === selectedCategory;

        // Search query filter (matches title, treatmentTitle, concerns, category)
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !q ||
          item.title.toLowerCase().includes(q) ||
          item.treatmentTitle.toLowerCase().includes(q) ||
          item.concerns.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.resultsSummary.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.date) - new Date(a.date);
        }
        if (sortBy === 'name') {
          return a.treatmentTitle.localeCompare(b.treatmentTitle);
        }
        if (sortBy === 'duration') {
          return parseInt(a.duration) - parseInt(b.duration);
        }
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('All Results');
    setSearchQuery('');
    setSortBy('newest');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-ivory">
      {/* Ambient background glows */}
      <div className="orb orb-sage -left-40 top-12 h-96 w-96 opacity-50" aria-hidden="true" />
      <div className="orb orb-emerald -right-36 top-1/3 h-80 w-80 opacity-30" aria-hidden="true" />
      <div className="orb orb-gold -left-20 bottom-1/4 h-72 w-72 opacity-25" aria-hidden="true" />

      {/* Page Hero Header */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-forest/[0.06]">
        <Container className="relative">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sage" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-emerald">Home</Link>
            <span>/</span>
            <span className="text-forest font-semibold">Before &amp; After</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Column with slide-in animation */}
            <div className="lg:col-span-7 animate-hero-slide-left">
              <Eyebrow tone="emerald">Documented Clinical Outcomes</Eyebrow>
              <h1 className="t-display mt-5 font-serif font-medium text-forest">
                Real journeys. <em className="italic text-emerald">Visible changes.</em>
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink font-light max-w-2xl">
                Explore documented treatment journeys and compare unretouched before-and-after clinical photography. Every protocol at DERMAÉ is tailored to align with individual cutaneous biology, delivering calm, restorative, and sustained dermal radiance.
              </p>

              {/* Reassurance pill tags */}
              <div className="mt-7 flex flex-wrap items-center gap-2.5 text-xs uppercase tracking-wider text-forest/75">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-white/70 px-3.5 py-1.5 text-[0.7rem] font-medium shadow-sm backdrop-blur-sm">
                  <span className="gold-dot" aria-hidden="true" />
                  Unretouched Clinical Imagery
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-white/70 px-3.5 py-1.5 text-[0.7rem] font-medium shadow-sm backdrop-blur-sm">
                  <span className="gold-dot" aria-hidden="true" />
                  Same Calibrated Lighting
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-white/70 px-3.5 py-1.5 text-[0.7rem] font-medium shadow-sm backdrop-blur-sm">
                  <span className="gold-dot" aria-hidden="true" />
                  Results Vary by Individual
                </span>
              </div>
            </div>

            {/* Right Hero Visual Card with popup effect and slide-in */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0 animate-hero-slide-right">
              {/* Ambient accent orbs */}
              <div className="orb orb-emerald -right-6 -top-6 h-48 w-48 opacity-30" aria-hidden="true" />
              <div className="orb orb-gold -left-6 -bottom-6 h-40 w-40 opacity-30" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-[2rem] border border-forest/[0.09] bg-white/80 p-2.5 shadow-[0_20px_50px_-15px_rgba(16,47,39,0.16)] group backdrop-blur-sm card-picture-popup popup-hover">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem]">
                  <img
                    src={beforeAfterHeroImg}
                    alt="DERMAÉ clinical aesthetician assessing client skin and facial progress"
                    className="popup-img h-full w-full object-cover transition-transform duration-700 ease-lux"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-3.5 left-3.5 rounded-full glass px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-forest border border-forest/10 shadow-sm backdrop-blur-md">
                    Clinical Assessment
                  </span>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between rounded-xl glass px-4 py-2.5 border border-white/40 shadow-md backdrop-blur-md">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-wider text-forest/70 font-medium">Bespoke Progress Tracking</p>
                      <p className="font-serif text-sm font-medium text-forest">Calibrated to individual dermal biology</p>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-ivory shadow-sm">
                      <Sparkles className="h-3.5 w-3.5 text-gold-light" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Filter & Gallery Content */}
      <section className="relative py-10 sm:py-14">
        <Container>
          {/* Controls Bar: Categories, Search, and Sort */}
          <div className="space-y-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5" role="tablist" aria-label="Filter cases by category">
              {beforeAfterCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'border border-forest bg-forest text-ivory shadow-sm ring-2 ring-forest/20'
                        : 'border border-forest/15 bg-white/80 text-forest/80 hover:border-forest/35 hover:bg-white hover:text-forest'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input & Sort Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-2xl border border-forest/[0.08] bg-white/70 p-3 sm:p-4 backdrop-blur-sm">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-forest/45 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by concern, treatment, or keyword..."
                  aria-label="Search cases"
                  className="w-full rounded-xl border border-forest/15 bg-white pl-10 pr-9 py-2 text-xs sm:text-sm text-forest placeholder:text-forest/40 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-forest/40 hover:text-forest"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Sort Selector & Result Count */}
              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                <div className="flex items-center gap-2 text-xs text-forest/70">
                  <ArrowUpDown className="h-3.5 w-3.5 text-gold-dark" />
                  <label htmlFor="sort-select" className="sr-only">Sort Results</label>
                  <select
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-xl border border-forest/15 bg-white px-3 py-2 text-xs font-medium text-forest focus:border-forest focus:outline-none cursor-pointer"
                  >
                    <option value="newest">Newest Documented</option>
                    <option value="name">Treatment Name (A–Z)</option>
                    <option value="duration">Shortest Timeline</option>
                  </select>
                </div>

                <span className="text-xs font-semibold text-forest/70 whitespace-nowrap pl-2 border-l border-forest/15">
                  {filteredCases.length} {filteredCases.length === 1 ? 'case' : 'cases'}
                </span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="mt-10">
            {filteredCases.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
                {filteredCases.map((item) => (
                  <BeforeAfterCard
                    key={item.id}
                    item={item}
                    onSelectComparison={(c) => setSelectedCase(c)}
                  />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="rounded-[2.5rem] border border-forest/15 bg-white/70 p-12 text-center shadow-sm backdrop-blur-sm max-w-xl mx-auto my-12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-forest/60">
                  <Info className="h-7 w-7 text-gold-dark" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-medium text-forest">
                  No Documented Cases Found
                </h3>
                <p className="mt-3 text-sm text-ink/75 font-light leading-relaxed">
                  We could not find any treatment cases matching your active filter "{selectedCategory}" or search query "{searchQuery}".
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest px-5 py-2.5 text-xs font-semibold text-ivory transition hover:bg-forest/90"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Reset Filters &amp; Search
                </button>
              </div>
            )}
          </div>

          {/* Clinical Standards & Ethics Callout */}
          <div className="mt-16 sm:mt-24">
            <div className="rounded-[2rem] border border-forest/[0.08] bg-white/80 p-8 sm:p-12 shadow-sm backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <span className="t-eyebrow text-gold block mb-2">Our Clinical Standards</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-forest leading-tight">
                    Ethical, Standardized Documentation You Can Trust
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-ink leading-relaxed font-light">
                    At DERMAÉ, all before-and-after photographs are recorded in calibrated clinical conditions—matching lighting, focal distance, and facial neutrality without decorative cosmetics or digital alteration. Because every skin type is biologically distinct, individual timelines and outcomes will naturally vary.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <div className="rounded-xl border border-forest/10 bg-ivory/80 p-3.5 text-xs">
                    <span className="font-semibold text-forest block mb-1">Standardized Imaging</span>
                    <span className="text-forest/70">Polarized and cross-polarized clinical photography to track cellular changes accurately.</span>
                  </div>
                  <div className="rounded-xl border border-forest/10 bg-ivory/80 p-3.5 text-xs">
                    <span className="font-semibold text-forest block mb-1">Individual Biology</span>
                    <span className="text-forest/70">Protocols are calibrated to your stratum corneum hydration and lifestyle factors.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pre-Footer Callout Section — separated from footer with ample padding */}
      <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
        <Container>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-forest/[0.08] bg-white/85 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-20px_rgba(16,47,39,0.12)] backdrop-blur-md">
            <div className="orb orb-emerald -right-16 -top-16 h-64 w-64 opacity-25" aria-hidden="true" />
            <div className="orb orb-gold -left-16 -bottom-16 h-60 w-60 opacity-30" aria-hidden="true" />

            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Eyebrow tone="gold">Begin Your Consultation</Eyebrow>
                <h2 className="mt-4 font-serif text-3xl font-medium text-forest sm:text-4xl lg:text-5xl leading-tight">
                  Ready to map your own skin journey?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink font-light sm:text-lg">
                  Every transformation begins with listening. Reserve your 45-minute bespoke consultation to assess your dermal hydration, evaluate specific concerns, and design a protocol shaped exclusively for you.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button to="/book-consultation" variant="primary">
                    Book a Consultation
                  </Button>
                  <Link
                    to="/treatments"
                    className="inline-flex items-center justify-center rounded-full border border-forest/20 px-6 py-3 text-sm font-medium text-forest transition hover:bg-forest hover:text-ivory hover:border-forest"
                  >
                    Explore All Protocols
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-[1.75rem] border border-forest/[0.08] bg-gradient-to-br from-emerald/10 via-forest/5 to-gold/10 p-6 sm:p-8">
                  <h4 className="font-serif text-lg font-medium text-forest mb-3">
                    What to expect during your first visit:
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-forest/80 font-light">
                    <li className="flex items-start gap-2.5">
                      <span className="gold-dot mt-1.5 shrink-0" aria-hidden="true" />
                      <span>Non-invasive biometric dermal hydration and sebum evaluation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="gold-dot mt-1.5 shrink-0" aria-hidden="true" />
                      <span>Audit of your current active ingredients to avoid barrier conflicts.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="gold-dot mt-1.5 shrink-0" aria-hidden="true" />
                      <span>A clear, written protocol blueprint without sales pressure.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Comparison Modal */}
      {selectedCase && (
        <ComparisonModal
          caseItem={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </div>
  );
}
