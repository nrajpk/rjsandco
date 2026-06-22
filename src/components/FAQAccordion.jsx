import { useState } from 'react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div className="faq-item" key={item.question}>
            <button
              className="faq-question"
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div id={answerId} className={`faq-answer ${isOpen ? 'is-open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

