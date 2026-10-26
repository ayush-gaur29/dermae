import React, { useState, useRef } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../../data/faqs.js';
import { Container, SectionHeading, Button } from '../ui/primitives.jsx';

function FAQItem({ item, open, onToggle, onKeyNav, btnRef }) {
  const btnId = `${item.id}-btn`;
  const panelId = `${item.id}-panel`;

  return (
    <div className={`faq-item rounded-3xl border border-forest/[0.08] bg-ivory-50/40 ${open ? 'is-open' : ''}`}>
      <h3>
        <button
          ref={btnRef}
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          onKeyDown={onKeyNav}
          className="flex w-full items-center justify-between gap-6 rounded-3xl px-5 py-5 text-left sm:px-7 sm:py-6"
        >
          <span
            className={`font-serif text-[1.25rem] leading-snug transition-colors sm:text-[1.4rem] ${
              open ? 'text-emerald' : 'text-forest'
            }`}
          >
            {item.question}
          </span>
          <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest">
            <Plus className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="faq-body"
        inert={open ? undefined : ''}
      >
        <div>
          <p className="max-w-2xl px-5 pb-6 text-[0.95rem] leading-relaxed text-ink sm:px-7">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection({ items = faqs }) {
  const [openId, setOpenId] = useState(items[0]?.id);
  const refs = useRef([]);

  const onKeyNav = (i) => (e) => {
    const n = items.length;
    let next = null;
    if (e.key === 'ArrowDown') next = (i + 1) % n;
    if (e.key === 'ArrowUp') next = (i - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next !== null) {
      e.preventDefault();
      refs.current[next]?.focus();
    }
  };

  return (
    <section id="faq" className="relative bg-gradient-to-b from-ivory to-sage-pale/50 py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Questions"
                title={
                  <>
                    Good to <em className="italic text-emerald">know.</em>
                  </>
                }
                text="Everything you might wonder before your first visit. Can’t find your answer? We’re happy to talk it through."
              />
              <div className="reveal mt-8" style={{ '--d': '240ms' }}>
                <Button href="#contact" variant="ghost">
                  Ask a question
                </Button>
              </div>
            </div>
          </div>
          <div className="reveal space-y-3 lg:col-span-8" style={{ '--d': '120ms' }}>
            {items.map((f, i) => (
              <FAQItem
                key={f.id}
                item={f}
                open={openId === f.id}
                btnRef={(el) => (refs.current[i] = el)}
                onKeyNav={onKeyNav(i)}
                onToggle={() => setOpenId((cur) => (cur === f.id ? null : f.id))}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
export default FAQSection;
