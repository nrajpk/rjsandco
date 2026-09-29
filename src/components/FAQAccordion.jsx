import { useId, useState } from 'react';

export default function FAQAccordion({ items, headingLevel = 3 }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId().replace(/:/g, '');
  const Heading = `h${headingLevel}`;

  return (
    <div className="notes">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `${baseId}-a-${index}`;
        const questionId = `${baseId}-q-${index}`;

        return (
          <div className="note" key={item.question}>
            <Heading style={{ font: 'inherit', margin: 0 }}>
              <button
                id={questionId}
                className="note__q"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="note__icon" aria-hidden="true" />
              </button>
            </Heading>
            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className={`note__a ${isOpen ? 'is-open' : ''}`}
              inert={!isOpen}
            >
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
