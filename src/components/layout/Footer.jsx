import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { brand } from '../../data/brandContent.js';
import { footerNav } from '../../data/navigation.js';
import { treatments } from '../../data/treatments.js';
import { Container, Logo } from '../ui/primitives.jsx';
import { Link } from '../../router/index.jsx';

function Col({ title, children }) {
  return (
    <div>
      <h3 className="t-eyebrow text-gold-light">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const contact = [
    { id: 'addr', Icon: MapPin, text: brand.contact.address },
    { id: 'phone', Icon: Phone, text: brand.contact.phone },
    { id: 'email', Icon: Mail, text: brand.contact.email },
    { id: 'hours', Icon: Clock, text: brand.contact.hours }
  ];
  const link = 'text-sm text-ivory/70 transition-colors hover:text-ivory';

  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">
      <div className="orb orb-emerald -left-40 -top-40 h-[28rem] w-[28rem] opacity-70" aria-hidden="true"></div>
      <div className="orb orb-gold -bottom-48 right-0 h-[22rem] w-[22rem] opacity-40" aria-hidden="true"></div>
      <Container className="relative pb-10 pt-20 sm:pt-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="DERMAÉ home">
              <Logo tone="light" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/65">
              {brand.description}
            </p>
            <Link
              to="/book-consultation"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ivory/15 px-4 py-2.5 text-xs tracking-wide text-ivory/80 transition-colors hover:border-gold/60 hover:text-ivory"
            >
              Book a Consultation
            </Link>
          </div>
          <div className="lg:col-span-2">
            <Col title="Explore">
              <ul className="space-y-3">
                {footerNav.map((l) => (
                  <li key={l.id}>
                    {l.href.startsWith('/') && !l.href.includes('#') ? (
                      <Link to={l.href} className={link}>
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className={link}>
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </Col>
          </div>
          <div className="lg:col-span-3">
            <Col title="Treatments">
              <ul className="space-y-3">
                {treatments.map((t) => (
                  <li key={t.id}>
                    <Link to={`/treatments/${t.slug}`} className={link}>
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </div>
          <div className="lg:col-span-3" id="contact-details">
            <Col title="Visit">
              <ul className="space-y-4">
                {contact.map(({ id, Icon, text }) => (
                  <li key={id} className="flex items-start gap-3 text-sm text-ivory/60">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" strokeWidth={1.5} aria-hidden="true" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </Col>
          </div>
        </div>

        <div className="gold-rule mt-16 opacity-40"></div>
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-ivory/50 sm:flex-row sm:items-center">
          <p>© {year} {brand.name}. All rights reserved.</p>
          <p>Made by AYUSH GAUR with 💚.</p>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;

