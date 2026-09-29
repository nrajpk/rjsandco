import { useDrawOnView } from './useInView.js';

// The auditor's red-pencil tick: "vouched".
export default function PencilTick({ static: isStatic = false, drawn }) {
  const [ref, ready, inView] = useDrawOnView({ threshold: 0.5 });
  const controlled = drawn !== undefined;
  const isReady = controlled ? true : ready && !isStatic;
  const isDrawn = controlled ? drawn : inView;
  const state = [isReady && 'is-ready', isDrawn && 'is-drawn'].filter(Boolean).join(' ');

  return (
    <svg ref={ref} className={`tick ${state}`} viewBox="0 0 26 22" aria-hidden="true" focusable="false">
      <path pathLength="1" d="M3 12.5 C 5.5 14, 8 16.5, 9.6 19.5" />
      <path pathLength="1" d="M9.6 19.5 C 12.5 12, 17.5 5.5, 24 2" />
    </svg>
  );
}
