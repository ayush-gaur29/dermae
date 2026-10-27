import facialGlowImg from '../assets/ba-facial-glow.jpg';
import contourJawImg from '../assets/ba-contour-jaw.jpg';
import pigmentToneImg from '../assets/ba-pigment-tone.jpg';
import acneTextureImg from '../assets/ba-acne-texture.jpg';

export const beforeAfterCategories = [
  'All Results',
  'Skin Rejuvenation',
  'Anti-Aging & Firmness',
  'Pigmentation & Radiance',
  'Acne & Texture'
];

export const beforeAfterCases = [
  {
    id: 'case-01',
    title: 'Restorative Barrier Recovery & Cellular Hydration',
    treatmentId: 't-01',
    treatmentTitle: 'Signature Facials',
    treatmentSlug: 'signature-facials',
    category: 'Skin Rejuvenation',
    image: facialGlowImg,
    duration: '4 Weeks',
    sessions: '3 In-Clinic Sessions',
    concerns: 'Barrier fatigue, dehydration lines, cutaneous redness, and dull texture',
    protocol: 'Enzyme softening, bio-lipid compress, and restorative thermal soothing',
    resultsSummary: 'Visible reduction in erythema (redness), marked increase in epidermal moisture retention, and uniform surface luminosity.',
    clinicalNotes: 'Client presented with an impaired stratum corneum barrier exacerbated by over-exfoliation. After three customized sessions spaced 10 days apart and an essential ceramide home protocol, tissue integrity was restored.',
    date: '2026-08-15',
    verifiedDetails: {
      patientAgeRange: '40–49',
      skinType: 'Fitzpatrick Type II, Sensitive Dry',
      primaryFocus: 'Barrier Repair'
    }
  },
  {
    id: 'case-02',
    title: 'Sub-Mental Contour Refinement & Dermal Elasticity',
    treatmentId: 't-02',
    treatmentTitle: 'Aesthetic Treatments',
    treatmentSlug: 'aesthetic-treatments',
    category: 'Anti-Aging & Firmness',
    image: contourJawImg,
    duration: '8 Weeks',
    sessions: '2 Sessions',
    concerns: 'Early jawline laxity, reduced skin elasticity, and softened jawline definition',
    protocol: 'Non-invasive acoustic & micro-current conditioning with bio-mimetic peptides',
    resultsSummary: 'Enhanced lower facial definition, restored skin tension along the jawline, and natural tissue firmness without dermal distortion.',
    clinicalNotes: 'Followed a targeted 2-session tightening protocol. Results evaluated at 8 weeks post-initial treatment showing sustained collagen remodeling and crisp feature harmony.',
    date: '2026-09-02',
    verifiedDetails: {
      patientAgeRange: '50–59',
      skinType: 'Fitzpatrick Type II, Normal/Dry',
      primaryFocus: 'Contour & Elasticity'
    }
  },
  {
    id: 'case-03',
    title: 'Solar Lentigines & Hyperpigmentation Clarification',
    treatmentId: 't-03',
    treatmentTitle: 'Personalized Skin Programs',
    treatmentSlug: 'skin-programs',
    category: 'Pigmentation & Radiance',
    image: pigmentToneImg,
    duration: '12 Weeks',
    sessions: '4 Guided Program Steps',
    concerns: 'Localized solar lentigines (sun spots), uneven dermal melanin distribution, and post-summer dullness',
    protocol: 'Gentle phased fruit-acid resurfacing, tyrosinase inhibition actives, and strict mineral photoprotection',
    resultsSummary: 'Significant lightening of persistent sun spots, uniform skin tone across cheekbones, and restored reflective radiance.',
    clinicalNotes: 'Multi-month program focused on calming melanocyte hyperactivity before gradual resurfacing. Zero rebound hyperpigmentation observed.',
    date: '2026-07-20',
    verifiedDetails: {
      patientAgeRange: '40–49',
      skinType: 'Fitzpatrick Type II-III, Photo-aged',
      primaryFocus: 'Tone Uniformity'
    }
  },
  {
    id: 'case-04',
    title: 'Calming Acne Recovery & Epidermal Smoothing',
    treatmentId: 't-03',
    treatmentTitle: 'Personalized Skin Programs',
    treatmentSlug: 'skin-programs',
    category: 'Acne & Texture',
    image: acneTextureImg,
    duration: '10 Weeks',
    sessions: '5 Clinical Sessions',
    concerns: 'Active pustular blemishes, post-inflammatory erythema (PIE), and surface textural roughness',
    protocol: 'Purifying botanical enzymes, low-frequency ultrasound clearance, and barrier-soothing centella infusion',
    resultsSummary: 'Near-total resolution of active inflammatory lesions, noticeable calming of erythema, and smooth skin texture.',
    clinicalNotes: 'Comprehensive inside-and-out protocol pairing gentle in-clinic extractions with microbiome-friendly topical balancing. Minimal post-inflammatory scarring.',
    date: '2026-09-18',
    verifiedDetails: {
      patientAgeRange: '20–29',
      skinType: 'Fitzpatrick Type III, Reactive Blemish-Prone',
      primaryFocus: 'Blemish Clearance & Texture'
    }
  }
];
