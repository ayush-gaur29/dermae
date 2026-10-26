import { images } from './brandContent.js';

// variant: 'ivory' | 'sage' | 'emerald' — controls surface colour (keeps 60/30/10 balance)
export const treatments = [
  {
    id: 't-01',
    slug: 'signature-facials',
    title: 'Signature Facials',
    tagline: 'Restorative Cellular Renewal & Barrier Replenishment',
    description: 'Restorative facial rituals tailored to your skin’s current needs, moisture balance, and biological season.',
    image: images.facial,
    imageAlt: 'Aesthetician applying a gentle facial treatment with a soft brush',
    tag: 'Skin care',
    variant: 'ivory',
    duration: '60–75 Minutes',
    idealFor: 'Dehydration, dullness, seasonal skin shifts, and barrier fatigue',
    overview: 'Our Signature Facials are bespoke in-clinic rituals designed to awaken cutaneous luminosity without disruption. After a tactile skin analysis, your aesthetician customizes every step—from gentle botanical enzyme exfoliation to micro-circulatory massage and lipid-replenishing moisture compresses.',
    steps: [
      { title: 'Biometric Skin Assessment', detail: 'Evaluating stratum corneum hydration and tactile sensitivity.' },
      { title: 'Enzyme Polish & Steam', detail: 'Gentle fruit-acid and enzyme softening of keratinized cells.' },
      { title: 'Bio-Lipid Infusion', detail: 'Custom botanical extracts and hyaluronic complexes massaged into tissue.' },
      { title: 'Restorative Thermal Mask', detail: 'Seals moisture and soothes the cutaneous barrier.' }
    ],
    recommendedCadence: 'Every 4 to 6 weeks for sustained dermal balance.'
  },
  {
    id: 't-02',
    slug: 'aesthetic-treatments',
    title: 'Aesthetic Treatments',
    tagline: 'Subtle Precision & Natural Feature Harmony',
    description: 'Subtle, consultation-led aesthetic options designed to complement and illuminate your natural features.',
    image: images.hero,
    imageAlt: 'Woman with softly glowing skin in natural light',
    tag: 'Aesthetics',
    variant: 'emerald',
    duration: '75–90 Minutes',
    idealFor: 'Contour refinement, subtle lifting, and gentle collagen stimulation',
    overview: 'Designed around quiet elegance and facial architecture, our aesthetic treatments prioritize restraint and tissue vitality. Guided by comprehensive consultation, protocols harmonize non-invasive acoustic or micro-current modalities to gently support natural elasticity with zero required downtime.',
    steps: [
      { title: 'Facial Architecture Analysis', detail: 'Mapping natural contours, symmetry, and expression dynamics.' },
      { title: 'Micro-Current Conditioning', detail: 'Gentle low-level current to tone underlying facial contours.' },
      { title: 'Targeted Peptide Bath', detail: 'Applying bio-mimetic peptides that reinforce structural firmness.' },
      { title: 'Cryo-Sculpt Finish', detail: 'Cooling dermal wand to calm capillaries and lock in lifted tone.' }
    ],
    recommendedCadence: 'Quarterly maintenance or prior to significant milestones.'
  },
  {
    id: 't-03',
    slug: 'skin-programs',
    title: 'Personalized Skin Programs',
    tagline: 'Longitudinal Care & Guided Home Protocols',
    description: 'Multi-step plans combining in-clinic care, progress tracking, and guided at-home routines.',
    image: images.serum,
    imageAlt: 'Glass serum bottles arranged on stone with green leaves',
    tag: 'Programs',
    variant: 'sage',
    duration: 'Multi-Month Journey',
    idealFor: 'Persistent barrier imbalances, uneven texture, or long-term skin health goals',
    overview: 'A skin program is an ongoing partnership between you and your DERMAÉ specialist. Through alternating in-clinic sessions and curated home regimens, your skin transitions through repair, renewal, and maintenance phases with proactive seasonal adjustments.',
    steps: [
      { title: 'Foundation & Calm', detail: 'Month 1 focuses on fortifying the acid mantle and eliminating reactivity.' },
      { title: 'Active Resurfacing', detail: 'Month 2 introduces gentle cellular renewal and pigment evening.' },
      { title: 'Consolidation & Radiance', detail: 'Month 3 reinforces cellular resilience and long-lasting glow.' },
      { title: 'Ongoing Care Reviews', detail: 'Routine check-ins to calibrate home active concentrations.' }
    ],
    recommendedCadence: 'Scheduled in 3 to 6-month cycles with monthly in-clinic visits.'
  },
  {
    id: 't-04',
    slug: 'skin-consultation',
    title: 'Skin Consultation',
    tagline: 'The Essential Foundation for Your Skin Journey',
    description: 'An in-depth conversation and skin assessment to define your personal goals and next steps.',
    image: images.clinic,
    imageAlt: 'Calm treatment room with arched ivory walls and emerald accents',
    tag: 'Start here',
    variant: 'ivory',
    duration: '45 Minutes',
    idealFor: 'New clients, individuals reconsidering their routine, or anyone seeking clarity',
    overview: 'We believe exceptional outcomes begin by listening. In this dedicated 45-minute session, we explore your skin history, daily routine, environment, and aesthetic aspirations. You leave with an honest assessment and a personalized roadmap tailored exclusively to you.',
    steps: [
      { title: 'Comprehensive Consultation', detail: 'A relaxed dialogue covering current habits, sensitivities, and lifestyle.' },
      { title: 'Dermal Moisture & Oil Analysis', detail: 'Non-invasive diagnostic reading of your cutaneous balance.' },
      { title: 'Routine Audit', detail: 'Reviewing current skincare formulations to eliminate conflicting actives.' },
      { title: 'Bespoke Care Blueprint', detail: 'A written treatment and at-home plan without sales pressure.' }
    ],
    recommendedCadence: 'Annually or whenever entering a new life or climate chapter.'
  }
];
