import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/language';

interface TourStep {
  target: string;
  title: { english: string; hindi: string; tamil: string; marathi: string };
  description: { english: string; hindi: string; tamil: string; marathi: string };
  position: 'top' | 'bottom' | 'left' | 'right';
}

interface HighlightTourProps {
  steps: TourStep[];
  onComplete: () => void;
}

export function HighlightTour({ steps, onComplete }: HighlightTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

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

  // Pulse animation for highlighted element
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes highlight-pulse {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7), 0 0 20px rgba(255, 107, 0, 0.3);
        }
        50% {
          box-shadow: 0 0 0 8px rgba(255, 107, 0, 0), 0 0 30px rgba(255, 107, 0, 0.5);
        }
      }
      .highlight-element {
        animation: highlight-pulse 2s ease-in-out infinite;
        position: relative;
        z-index: 100;
        border-radius: 16px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-40 pointer-events-none">
      {/* Subtle backdrop */}
      <div 
        className="absolute inset-0 pointer-events-auto"
        style={{ background: 'rgba(0,0,0,0.3)' }}
        onClick={handleSkip}
      />

      {/* Compact Tooltip */}
      <div 
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[280px] rounded-[20px] p-4 pointer-events-auto backdrop-blur-md"
        style={{
          background: 'rgba(255,255,255,0.95)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,107,0,0.1)'
        }}
      >
        {/* Progress indicator */}
        <div className="flex gap-1.5 justify-center mb-3">
          {steps.map((_, index) => (
            <div
              key={index}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: index === currentStep ? '20px' : '6px',
                background: index === currentStep ? 'var(--saffron)' : 'rgba(0,0,0,0.15)'
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="mb-3">
          <div 
            className="text-[16px] font-bold mb-1.5"
            style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
          >
            {t(currentStepData.title)}
          </div>
          <div 
            className="text-[13px] leading-relaxed" 
            style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}
          >
            {t(currentStepData.description)}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleSkip}
            className="flex-1 py-2 rounded-xl text-[13px] font-semibold transition-all active:scale-95"
            style={{
              background: 'var(--bg-primary)',
              color: 'var(--text-secondary)',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {t({ english: 'Skip', hindi: 'छोड़ें', tamil: 'தவிர்க்கவும்', marathi: 'वगळा' })}
          </button>
          <button
            onClick={handleNext}
            className="flex-[1.5] py-2 rounded-xl text-[13px] font-bold text-white transition-all active:scale-95"
            style={{
              background: 'var(--gradient-saffron)',
              boxShadow: '0 4px 12px rgba(255,107,0,0.3)',
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
        <div className="text-center mt-2 text-[10px] font-medium" style={{ color: 'var(--text-tertiary)', fontFamily: "'Inter', sans-serif" }}>
          {currentStep + 1} of {steps.length}
        </div>
      </div>
    </div>
  );
}

// Updated tour configurations
export const ownerDashboardTour: TourStep[] = [
  {
    target: 'stats',
    title: {
      english: 'Track Your Earnings',
      hindi: 'अपनी कमाई ट्रैक करें',
      tamil: 'உங்கள் வருமானத்தைக் கண்காணிக்கவும்',
      marathi: 'आपली कमाई ट्रॅक करा'
    },
    description: {
      english: 'Monitor monthly earnings, total income, and booking count.',
      hindi: 'मासिक कमाई, कुल आय और बुकिंग की संख्या देखें।',
      tamil: 'மாதாந்திர வருவாய், மொத்த வருமானம் மற்றும் முன்பதிவு எண்ணிக்கை.',
      marathi: 'मासिक कमाई, एकूण उत्पन्न आणि बुकिंग संख्या पहा.'
    },
    position: 'bottom'
  },
  {
    target: 'requests',
    title: {
      english: 'Booking Requests',
      hindi: 'बुकिंग अनुरोध',
      tamil: 'முன்பதிவு கோரிக்கைகள்',
      marathi: 'बुकिंग विनंत्या'
    },
    description: {
      english: 'Accept or reject requests from farmers. Tap to view details.',
      hindi: 'किसानों से अनुरोध स्वीकार या अस्वीकार करें।',
      tamil: 'விவசாயிகளின் கோரிக்கைகளை ஏற்கவும் அல்லது நிராகரிக்கவும்.',
      marathi: 'शेतकऱ्यांच्या विनंत्या स्वीकारा किंवा नाकारा.'
    },
    position: 'top'
  },
  {
    target: 'equipment',
    title: {
      english: 'Your Equipment',
      hindi: 'आपके उपकरण',
      tamil: 'உங்கள் உபகரணங்கள்',
      marathi: 'तुमची उपकरणे'
    },
    description: {
      english: 'Manage listings and add new equipment anytime.',
      hindi: 'सूची प्रबंधित करें और नया उपकरण जोड़ें।',
      tamil: 'பட்டியல்களை நிர்வகிக்கவும், புதிய உபகரணங்களைச் சேர்க்கவும்.',
      marathi: 'यादी व्यवस्थापित करा आणि नवीन उपकरणे जोडा.'
    },
    position: 'top'
  }
];

export const ownerFirstTimeTour: TourStep[] = [
  {
    target: 'welcome',
    title: {
      english: 'Welcome to KisanYantra!',
      hindi: 'किसान यंत्र में आपका स्वागत है!',
      tamil: 'KisanYantra-வுக்கு வரவேற்கிறோம்!',
      marathi: 'किसान यंत्रमध्ये आपले स्वागत आहे!'
    },
    description: {
      english: 'Earn by renting your equipment to nearby farmers.',
      hindi: 'आस-पास के किसानों को उपकरण किराए पर देकर कमाएं।',
      tamil: 'அருகிலுள்ள விவசாயிகளுக்கு உபகரணங்களை வாடகைக்கு விடுங்கள்.',
      marathi: 'जवळच्या शेतकऱ्यांना उपकरणे भाड्याने देऊन कमवा.'
    },
    position: 'bottom'
  },
  {
    target: 'add-equipment',
    title: {
      english: 'Add Equipment',
      hindi: 'उपकरण जोड़ें',
      tamil: 'உபகரணம் சேர்க்கவும்',
      marathi: 'उपकरण जोडा'
    },
    description: {
      english: 'List your tractor or equipment to start receiving bookings.',
      hindi: 'बुकिंग प्राप्त करने के लिए अपना ट्रैक्टर सूचीबद्ध करें।',
      tamil: 'முன்பதிவுகளைப் பெற உங்கள் டிராக்டரைப் பட்டியலிடுங்கள்.',
      marathi: 'बुकिंग मिळवण्यासाठी तुमचा ट्रॅक्टर यादीबद्ध करा.'
    },
    position: 'bottom'
  }
];
