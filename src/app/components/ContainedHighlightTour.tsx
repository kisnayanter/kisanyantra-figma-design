import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/language';

interface TourStep {
  target: string;
  title: { english: string; hindi: string; tamil: string; marathi: string };
  description: { english: string; hindi: string; tamil: string; marathi: string };
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  elementId?: string;
}

interface ContainedHighlightTourProps {
  steps: TourStep[];
  onComplete: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  userRole?: 'farmer' | 'owner';
  showProgress?: boolean;
  allowSkip?: boolean;
}

export function ContainedHighlightTour({ 
  steps, 
  onComplete, 
  containerRef,
  userRole = 'farmer',
  showProgress = true,
  allowSkip = true 
}: ContainedHighlightTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' });
  const [spotlightRect, setSpotlightRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Enhanced spotlight and positioning - CONTAINED within phone
  useEffect(() => {
    if (!containerRef.current) return;
    
    const targetElement = containerRef.current.querySelector(`[data-tour-target=\"${currentStepData.target}\"]`) ||
                          containerRef.current.querySelector(`#${currentStepData.elementId || currentStepData.target}`);
    
    if (targetElement) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      
      // Calculate position relative to container
      const relativeRect = {
        x: targetRect.left - containerRect.left,
        y: targetRect.top - containerRect.top,
        width: targetRect.width,
        height: targetRect.height,
        top: targetRect.top - containerRect.top,
        left: targetRect.left - containerRect.left,
        bottom: targetRect.bottom - containerRect.top,
        right: targetRect.right - containerRect.left
      };
      
      setSpotlightRect(relativeRect);

      // Smart tooltip positioning within container
      const tooltipWidth = 280;
      const tooltipHeight = 180;
      const margin = 20;
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      
      let top = relativeRect.bottom + margin;
      let left = relativeRect.left + relativeRect.width / 2 - tooltipWidth / 2;
      
      // Adjust if tooltip goes below container
      if (top + tooltipHeight > containerHeight - margin) {
        top = relativeRect.top - tooltipHeight - margin;
      }
      
      // Adjust if tooltip goes beyond right edge
      if (left + tooltipWidth > containerWidth - margin) {
        left = containerWidth - tooltipWidth - margin;
      }
      
      // Adjust if tooltip goes beyond left edge
      if (left < margin) {
        left = margin;
      }
      
      setTooltipPosition({ top: `${top}px`, left: `${left}px`, transform: 'none' });
      
      // Add highlight class to target
      targetElement.classList.add('highlight-element-contained');
      
      return () => {
        targetElement.classList.remove('highlight-element-contained');
      };
    }
  }, [currentStep, currentStepData, containerRef]);

  // Enhanced animations and styles for contained tour
  useEffect(() => {
    const style = document.createElement('style');
    const primaryColor = userRole === 'owner' ? '34, 197, 94' : '251, 146, 60'; // green vs saffron
    
    style.innerHTML = `
      @keyframes highlight-pulse-contained {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(${primaryColor}, 0.7), 0 0 15px rgba(${primaryColor}, 0.3);
        }
        50% {
          box-shadow: 0 0 0 8px rgba(${primaryColor}, 0), 0 0 25px rgba(${primaryColor}, 0.4);
        }
      }
      
      @keyframes spotlight-fade-contained {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .highlight-element-contained {
        animation: highlight-pulse-contained 2s ease-in-out infinite;
        position: relative;
        z-index: 101;
        border-radius: 12px;
        transition: all 0.3s ease;
      }
      
      .tour-spotlight-contained {
        animation: spotlight-fade-contained 0.3s ease-out;
      }
      
      .tour-tooltip-contained {
        animation: slideUp-contained 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      @keyframes slideUp-contained {
        from {
          opacity: 0;
          transform: translateY(15px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [userRole]);

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      {/* Contained backdrop - only within phone */}
      <div 
        className="absolute inset-0 pointer-events-auto tour-spotlight-contained"
        style={{ background: 'rgba(0,0,0,0.6)' }}
        onClick={handleSkip}
      />
      
      {/* Contained spotlight cutout */}
      <div
        className="absolute pointer-events-none tour-spotlight-contained"
        style={{
          top: spotlightRect.y - 6,
          left: spotlightRect.x - 6,
          width: spotlightRect.width + 12,
          height: spotlightRect.height + 12,
          borderRadius: '12px',
          background: 'transparent',
          boxShadow: `0 0 0 2000px rgba(0,0,0,0.6), inset 0 0 0 2px rgba(${userRole === 'owner' ? '34, 197, 94' : '251, 146, 60'}, 0.5)`,
        }}
      />

      {/* Contained Tooltip */}
      <div 
        ref={tooltipRef}
        className="absolute w-[280px] rounded-[20px] p-4 pointer-events-auto tour-tooltip-contained"
        style={{
          ...tooltipPosition,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: `0 16px 48px rgba(0,0,0,0.2), 0 0 0 1px rgba(${userRole === 'owner' ? '34, 197, 94' : '251, 146, 60'}, 0.2)`,
          border: '1px solid rgba(255,255,255,0.8)',
        }}
      >
        {/* Progress indicator */}
        {showProgress && (
          <div className="flex gap-1.5 justify-center mb-3">
            {steps.map((_, index) => (
              <div
                key={index}
                className="h-1 rounded-full transition-all duration-400 ease-out"
                style={{
                  width: index === currentStep ? '24px' : '6px',
                  background: index === currentStep 
                    ? userRole === 'owner' 
                      ? 'linear-gradient(90deg, #22c55e, #16a34a)'
                      : 'linear-gradient(90deg, #fb923c, #f97316)'
                    : 'rgba(0,0,0,0.12)',
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="mb-3">
          <div 
            className="text-[16px] font-bold mb-1.5"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#1f2937' }}
          >
            {t(currentStepData.title)}
          </div>
          <div 
            className="text-[13px] leading-relaxed" 
            style={{ color: '#6b7280', fontFamily: "'Inter', sans-serif", lineHeight: '1.4' }}
          >
            {t(currentStepData.description)}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {allowSkip && (
            <button
              onClick={handleSkip}
              className="flex-1 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 active:scale-95"
              style={{
                background: '#f9fafb',
                color: '#6b7280',
                fontFamily: "'Inter', sans-serif",
                border: '1px solid #e5e7eb'
              }}
            >
              {t({ english: 'Skip', hindi: 'छोड़ें', tamil: 'தவிர்க்கவும்', marathi: 'वगळा' })}
            </button>
          )}
          
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="py-2.5 px-3 rounded-xl text-[13px] font-semibold transition-all duration-200 active:scale-95"
              style={{
                background: '#f3f4f6',
                color: '#4b5563',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {t({ english: 'Back', hindi: 'पीछे', tamil: 'மீண்டும்', marathi: 'मागे' })}
            </button>
          )}
          
          <button
            onClick={handleNext}
            className="flex-1 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all duration-200 active:scale-95"
            style={{
              background: userRole === 'owner' 
                ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                : 'linear-gradient(135deg, #fb923c, #f97316)',
              boxShadow: userRole === 'owner'
                ? '0 6px 20px rgba(34, 197, 94, 0.3)'
                : '0 6px 20px rgba(251, 146, 60, 0.3)',
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            {isLastStep 
              ? t({ english: 'Got it!', hindi: 'समझ गया!', tamil: 'புரிந்தது!', marathi: 'समजले!' })
              : t({ english: 'Next', hindi: 'आगे', tamil: 'அடுத்து', marathi: 'पुढे' })
            }
          </button>
        </div>

        {/* Step counter */}
        {showProgress && (
          <div className="text-center mt-2 text-[10px] font-medium" style={{ color: '#9ca3af', fontFamily: "'Inter', sans-serif" }}>
            {currentStep + 1} of {steps.length}
          </div>
        )}
      </div>
    </div>
  );
}
