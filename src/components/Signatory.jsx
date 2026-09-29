import { signingPartner } from '../data/firmFacts.js';
import Seal from './Seal.jsx';
import { useDrawOnView } from './useInView.js';

// An authored pen stroke, drawn with a stroke-dashoffset reveal (after
// 21st.dev's Animated Signature). It is a generic mark, deliberately not a
// trace of any partner's specimen signature.
const SIGNATURE_STROKES = [
  // capital, looping down and back into the first bowl
  'M10 70 C 22 50, 36 22, 46 12 C 52 6, 54 16, 50 32 C 46 50, 40 66, 38 72 C 37 76, 42 70, 48 60 C 55 48, 62 38, 68 38 C 73 38, 70 50, 70 56 C 70 62, 76 56, 82 48 C 87 41, 91 40, 92 48 C 93 55, 94 60, 99 56 C 104 51, 108 43, 113 42 C 118 41, 116 54, 119 58 C 122 62, 128 50, 135 38 C 142 26, 150 16, 155 18 C 160 20, 154 38, 147 54 C 142 66, 140 72, 144 68 C 151 60, 158 47, 165 46 C 171 45, 167 57, 172 59 C 177 61, 183 49, 190 47 C 196 45, 193 58, 199 59 C 206 60, 212 49, 219 48 C 225 47, 222 59, 229 58 C 240 56, 252 44, 262 36',
  // crossbar on the capital
  'M26 48 C 40 44, 56 42, 72 44'
];

export default function Signatory({ partner = signingPartner }) {
  const [ref, ready, signed] = useDrawOnView({ threshold: 0.6 });
  const state = [ready && 'is-ready', signed && 'is-signed'].filter(Boolean).join(' ');

  return (
    <div className={`signatory ${state}`} ref={ref}>
      <p className="signatory__for">
        For RJS &amp; Co.
        <span>Chartered Accountants</span>
      </p>
      <div className="signatory__mark">
        <svg className="signature" viewBox="0 0 270 96" aria-hidden="true">
          {SIGNATURE_STROKES.map((d, index) => (
            <path key={d} className={`signature__stroke signature__stroke--${index}`} pathLength="1" d={d} />
          ))}
          <path className="signature__stroke signature__stroke--flourish" pathLength="1" d="M18 86 C 70 78, 140 74, 200 78 C 226 80, 246 84, 258 74" />
        </svg>
        <Seal />
      </div>
      <p className="signatory__name">
        <strong>{partner.title}</strong>, {partner.role}
        {(partner.qualifications || partner.membershipNo) && (
          <span>
            {[partner.qualifications, partner.membershipNo && `M. No. ${partner.membershipNo}`].filter(Boolean).join(' · ')}
          </span>
        )}
      </p>
    </div>
  );
}
