import heroImg from '../assets/hero.jpg';
import clinicImg from '../assets/clinic.jpg';
import serumImg from '../assets/serum.jpg';
import facialImg from '../assets/facial.jpg';
import treatmentsHeroImg from '../assets/treatments-hero.jpg';
import officialLogo from '../assets/dermae-official-logo.png';
import officialLogoLight from '../assets/dermae-official-logo-light.png';

export const brand = {
  name: 'DERMAÉ',
  logo: officialLogo,
  logoLight: officialLogoLight,
  tagline: 'Personalized skincare & aesthetics',
  description:
    'A considered approach to skin — personalized skincare and aesthetic treatments shaped around your goals, your rhythm and your skin.',
  contact: {
    address: 'Clinic address coming soon',
    phone: 'Phone number coming soon',
    email: 'Email coming soon',
    hours: 'Opening hours to be announced'
  }
};

export const images = {
  hero: heroImg,
  clinic: clinicImg,
  serum: serumImg,
  facial: facialImg,
  treatmentsHero: treatmentsHeroImg
};

export const announcement = {
  id: 'welcome',
  text: 'Now welcoming new clients for personalized skin consultations',
  linkLabel: 'Book online',
  href: '/book-consultation'
};

export const hero = {
  eyebrow: 'Personalized Skincare & Aesthetics',
  headline: ['Your Skin.', 'Your Journey.', 'Your Radiance.'],
  description:
    'Discover personalized skincare and aesthetic treatments designed around your individual goals and skin needs.',
  primaryCta: { label: 'Explore Treatments', href: '/treatments' },
  secondaryCta: { label: 'Book a Consultation', href: '/book-consultation' },
  valueLabel: 'Consultation-led · Tailored to you',
  floatingCard: {
    eyebrow: 'Your first step',
    title: 'A consultation built around you',
    text: 'We begin by listening — your skin, your goals, your routine.'
  }
};

export const highlights = [
  { id: 'personal', icon: 'Fingerprint', title: 'Personalized plans', text: 'Every routine starts with your individual skin goals.' },
  { id: 'consult', icon: 'MessageCircleHeart', title: 'Consultation-first', text: 'Thoughtful guidance before any treatment begins.' },
  { id: 'gentle', icon: 'Leaf', title: 'Considered care', text: 'A calm, unhurried approach to every visit.' },
  { id: 'space', icon: 'Sparkles', title: 'Serene setting', text: 'A space designed for comfort and clarity.' }
];

export const about = {
  eyebrow: 'About DERMAÉ',
  heading: 'Where science-minded care meets quiet luxury.',
  paragraphs: [
    'DERMAÉ was shaped around a simple belief: the best results begin with understanding. Before recommending anything, we take time to learn about your skin, lifestyle and what you hope to achieve.',
    'From there, we design a path that feels right for you — combining skincare guidance and aesthetic treatments in a setting that is calm, refined and entirely focused on your comfort.'
  ],
  values: [
    { id: 'listen', label: 'We listen first' },
    { id: 'tailor', label: 'Plans tailored to you' },
    { id: 'clarity', label: 'Clear, honest guidance' }
  ],
  cta: { label: 'Begin with a consultation', href: '/book-consultation' }
};

export const consultation = {
  eyebrow: 'Begin your journey',
  heading: 'Let’s design your skin plan together.',
  text: 'Book a one-to-one consultation to talk through your goals, ask questions and discover which approach suits you best.',
  cta: { label: 'Book a Consultation', href: '/book-consultation' }
};
