import { useState, useCallback, useEffect, type ReactNode } from 'react';

/**
 * Interactive Prototype with smooth crossfade + subtle slide transitions
 *
 * Maps to Flutter:
 * - Forward: FadeTransition + subtle SlideTransition (content shifts ~15%)
 * - Back: reverse of the above
 * - Duration: 500ms — slow and smooth
 * - Curve: cubic-bezier(0.4, 0.0, 0.0, 1.0) — decelerate (Flutter Curves.decelerate)
 */

interface PrototypeScreen {
  id: string;
  label: string;
  component: ReactNode;
  tapHint: string;
}

interface InteractivePrototypeProps {
  screens: PrototypeScreen[];
  title: string;
  subtitle: string;
  accentColor: string;
}

const STYLE_ID = 'ky-prototype-transitions';
function ensureStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    /* Forward: outgoing screen fades out + shifts left slightly */
    @keyframes ky-fade-out-left {
      from { opacity: 1; transform: translateX(0) scale(1); }
      to   { opacity: 0; transform: translateX(-8%) scale(0.96); }
    }
    /* Forward: incoming screen fades in from right */
    @keyframes ky-fade-in-right {
      from { opacity: 0; transform: translateX(15%) scale(0.98); }
      to   { opacity: 1; transform: translateX(0) scale(1); }
    }
    /* Back: outgoing screen fades out + shifts right */
    @keyframes ky-fade-out-right {
      from { opacity: 1; transform: translateX(0) scale(1); }
      to   { opacity: 0; transform: translateX(15%) scale(0.98); }
    }
    /* Back: incoming screen fades in from left */
    @keyframes ky-fade-in-left {
      from { opacity: 0; transform: translateX(-8%) scale(0.96); }
      to   { opacity: 1; transform: translateX(0) scale(1); }
    }
  `;
  document.head.appendChild(style);
}

const DURATION = 500;
const EASING = 'cubic-bezier(0.4, 0.0, 0.0, 1.0)';

export function InteractivePrototype({ screens, title, subtitle, accentColor }: InteractivePrototypeProps) {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [animState, setAnimState] = useState<{
    phase: 'idle' | 'animating';
    fromIndex: number;
    toIndex: number;
    direction: 'forward' | 'back';
  }>({ phase: 'idle', fromIndex: 0, toIndex: 0, direction: 'forward' });

  useEffect(() => ensureStyles(), []);

  useEffect(() => {
    if (animState.phase !== 'animating') return;
    const timer = setTimeout(() => {
      setVisibleIndex(animState.toIndex);
      setAnimState(prev => ({ ...prev, phase: 'idle' }));
    }, DURATION);
    return () => clearTimeout(timer);
  }, [animState]);

  const goTo = useCallback((targetIndex: number) => {
    if (animState.phase === 'animating') return;
    if (targetIndex === visibleIndex) return;
    if (targetIndex < 0 || targetIndex >= screens.length) return;

    setAnimState({
      phase: 'animating',
      fromIndex: visibleIndex,
      toIndex: targetIndex,
      direction: targetIndex > visibleIndex ? 'forward' : 'back',
    });
  }, [visibleIndex, animState.phase, screens.length]);

  const goNext = useCallback(() => goTo(visibleIndex + 1), [visibleIndex, goTo]);
  const goBack = useCallback(() => goTo(visibleIndex - 1), [visibleIndex, goTo]);

  const activeIndex = animState.phase === 'animating' ? animState.toIndex : visibleIndex;
  const activeScreen = screens[activeIndex];

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-6">
        <div
          className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white mb-2"
          style={{ background: accentColor, letterSpacing: '1.5px' }}
        >
          INTERACTIVE PROTOTYPE
        </div>
        <h3
          className="text-[22px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          {title}
        </h3>
        <p className="text-[12px] mt-1" style={{ color: 'var(--text-soft)' }}>
          {subtitle}
        </p>
      </div>

      {/* Phone */}
      <div className="relative" style={{ width: '320px', height: '640px' }}>
        <div
          className="relative overflow-hidden rounded-[36px]"
          style={{ width: '320px', height: '640px' }}
        >
          {animState.phase === 'idle' ? (
            <div className="absolute inset-0">
              {screens[visibleIndex].component}
            </div>
          ) : (
            <>
              {/* Leaving screen */}
              <div
                className="absolute inset-0"
                style={{
                  animation: `${animState.direction === 'forward' ? 'ky-fade-out-left' : 'ky-fade-out-right'} ${DURATION}ms ${EASING} forwards`,
                  zIndex: 1,
                }}
              >
                {screens[animState.fromIndex].component}
              </div>

              {/* Entering screen */}
              <div
                className="absolute inset-0"
                style={{
                  animation: `${animState.direction === 'forward' ? 'ky-fade-in-right' : 'ky-fade-in-left'} ${DURATION}ms ${EASING} forwards`,
                  zIndex: 2,
                }}
              >
                {screens[animState.toIndex].component}
              </div>
            </>
          )}
        </div>

        {/* Tap overlay */}
        {animState.phase === 'idle' && visibleIndex < screens.length - 1 && (
          <button
            onClick={goNext}
            className="absolute inset-0 z-30"
            style={{ background: 'transparent', cursor: 'pointer' }}
            aria-label="Next screen"
          />
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-5">
        <button
          onClick={goBack}
          disabled={visibleIndex === 0 || animState.phase === 'animating'}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold transition-all"
          style={{
            background: visibleIndex === 0 ? 'rgba(0,0,0,0.05)' : 'white',
            color: visibleIndex === 0 ? 'var(--text-soft)' : 'var(--text-dark)',
            boxShadow: visibleIndex === 0 ? 'none' : '0 2px 8px rgba(0,0,0,0.1)',
            opacity: visibleIndex === 0 ? 0.5 : 1
          }}
        >
          ←
        </button>

        <div className="flex gap-2">
          {screens.map((screen, i) => (
            <button
              key={screen.id}
              onClick={() => goTo(i)}
              className="transition-all"
              style={{
                width: i === activeIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === activeIndex ? accentColor : 'rgba(0,0,0,0.12)',
                transition: 'width 400ms cubic-bezier(0.4, 0.0, 0.0, 1.0), background 400ms ease'
              }}
              aria-label={`Go to ${screen.label}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={visibleIndex === screens.length - 1 || animState.phase === 'animating'}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold transition-all"
          style={{
            background: visibleIndex === screens.length - 1 ? 'rgba(0,0,0,0.05)' : accentColor,
            color: visibleIndex === screens.length - 1 ? 'var(--text-soft)' : 'white',
            boxShadow: visibleIndex === screens.length - 1 ? 'none' : `0 4px 12px ${accentColor}50`,
            opacity: visibleIndex === screens.length - 1 ? 0.5 : 1
          }}
        >
          →
        </button>
      </div>

      {/* Label */}
      <div className="mt-3 text-center">
        <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
          {activeScreen.label}
        </div>
        <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-soft)' }}>
          {activeIndex + 1} of {screens.length} · Tap screen or arrows to navigate
        </div>
      </div>

      {/* Transition info */}
      <div
        className="mt-4 rounded-[14px] px-4 py-3 text-center max-w-[320px]"
        style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="text-[10px] font-semibold mb-1" style={{ color: 'var(--text-mid)' }}>
          Flutter Transition: <code className="font-mono" style={{ color: accentColor }}>FadeThroughTransition</code>
        </div>
        <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
          Crossfade + subtle slide · 500ms · Curves.decelerate · Material Motion
        </div>
      </div>
    </div>
  );
}
