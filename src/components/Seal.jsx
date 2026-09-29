import { useId } from 'react';
import { firmFacts } from '../data/firmFacts.js';

// The firm's round rubber stamp, inked over the signature.
export default function Seal({ className = 'seal' }) {
  const id = useId().replace(/:/g, '');
  const ring = `seal-ring-${id}`;
  const ink = `seal-ink-${id}`;

  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <defs>
        <path id={ring} d="M60 60 m-45 0 a45 45 0 1 1 90 0 a45 45 0 1 1 -90 0" />
        <filter id={ink} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" result="rough" />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 1.75"
            result="speckle"
          />
          <feComposite in="rough" in2="speckle" operator="in" />
        </filter>
      </defs>
      <g filter={`url(#${ink})`} fill="currentColor" stroke="currentColor">
        <circle cx="60" cy="60" r="56" fill="none" strokeWidth="2.4" />
        <circle cx="60" cy="60" r="36" fill="none" strokeWidth="1.1" />
        <text
          fontFamily="'Source Sans 3', sans-serif"
          fontSize="9.4"
          fontWeight="600"
          letterSpacing="1.35"
          stroke="none"
        >
          <textPath href={`#${ring}`} startOffset="0">
            RJS &amp; CO. · CHARTERED ACCOUNTANTS ·
          </textPath>
        </text>
        <text
          x="60"
          y="56"
          textAnchor="middle"
          fontFamily="'Source Sans 3', sans-serif"
          fontSize="8.4"
          fontWeight="600"
          letterSpacing="0.8"
          stroke="none"
        >
          KOTTAYAM
        </text>
        <line x1="36" y1="61.5" x2="84" y2="61.5" strokeWidth="0.7" />
        <text
          x="60"
          y="72"
          textAnchor="middle"
          fontFamily="'Source Sans 3', sans-serif"
          fontSize="7.4"
          fontWeight="600"
          letterSpacing="0.4"
          stroke="none"
        >
          FRN {firmFacts.frn}
        </text>
      </g>
    </svg>
  );
}
