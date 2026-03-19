import { useState } from 'react';
import { useLanguage } from '../contexts/language';

interface TourStep {
  target: string;
  title: { english: string; hindi: string; tamil: string; marathi: string };
  description: { english: string; hindi: string; tamil: string; marathi: string };
  position: 'top' | 'bottom' | 'left' | 'right';
}

interface OnboardingTourProps {
  steps: TourStep[];
  onComplete: () => void;
}

export function OnboardingTour({ steps, onComplete }: OnboardingTourProps) {
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

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      {/* Overlay */}
      <div 
        className="absolute inset-0 pointer-events-auto"
        style={{ background: 'rgba(0,0,0,0.6)' }}
        onClick={handleSkip}
      />

      {/* Tour Card */}
      <div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[280px] rounded-[20px] p-5 pointer-events-auto"
        style={{
          background: 'white',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}
      >
        {/* Progress Dots */}
        <div className="flex gap-1.5 justify-center mb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: index === currentStep ? '24px' : '6px',
                background: index === currentStep ? 'var(--blue)' : 'rgba(0,0,0,0.15)'
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="text-center mb-5">
          <div 
            className="text-[18px] font-bold mb-2"
            style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
          >
            {t(currentStepData.title)}
          </div>
          <div className="text-[13px] leading-relaxed" style={{ color: 'var(--text-mid)' }}>
            {t(currentStepData.description)}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleSkip}
            className="flex-1 py-2.5 rounded-xl text-[13px] font-semibold"
            style={{
              background: 'var(--cream)',
              color: 'var(--text-mid)'
            }}
          >
            {t({ english: 'Skip', hindi: 'छोड़ें', tamil: 'தவிர்க்கவும்', marathi: 'वगळा' })}
          </button>
          <button
            onClick={handleNext}
            className="flex-1 py-2.5 rounded-xl text-[13px] font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, var(--blue), var(--blue-light))',
              boxShadow: '0 4px 16px rgba(37,99,235,0.3)'
            }}
          >
            {isLastStep 
              ? t({ english: 'Got it!', hindi: 'समझ गया!', tamil: 'புரிந்தது!', marathi: 'समजले!' })
              : t({ english: 'Next', hindi: 'आगे', tamil: 'அடுத்து', marathi: 'पुढे' })
            }
          </button>
        </div>

        {/* Step Counter */}
        <div className="text-center mt-3 text-[10px]" style={{ color: 'var(--text-soft)' }}>
          {currentStep + 1} / {steps.length}
        </div>
      </div>
    </div>
  );
}

// Predefined tour configurations
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
      english: 'View your monthly earnings, total income, and booking count at a glance.',
      hindi: 'अपनी मासिक कमाई, कुल आय और बुकिंग की संख्या एक नज़र में देखें।',
      tamil: 'உங்கள் மாதாந்திர வருவாய், மொத்த வருமானம் மற்றும் முன்பதிவு எண்ணிக்கையை ஒரே பார்வையில் பார்க்கவும்.',
      marathi: 'तुमची मासिक कमाई, एकूण उत्पन्न आणि बुकिंग संख्या एका दृष्टीक्षेपात पहा.'
    },
    position: 'bottom'
  },
  {
    target: 'requests',
    title: {
      english: 'Manage Booking Requests',
      hindi: 'बुकिंग अनुरोध प्रबंधित करें',
      tamil: 'முன்பதிவு கோரிக்கைகளை நிர்வகிக்கவும்',
      marathi: 'बुकिंग विनंत्या व्यवस्थापित करा'
    },
    description: {
      english: 'Accept or reject booking requests from farmers. Tap to view details.',
      hindi: 'किसानों से बुकिंग अनुरोध स्वीकार या अस्वीकार करें। विवरण देखने के लिए टैप करें।',
      tamil: 'விவசாயிகளிடமிருந்து முன்பதிவு கோரிக்கைகளை ஏற்கவும் அல்லது நிராகரிக்கவும். விவரங்களைக் காண தட்டவும்.',
      marathi: 'शेतकऱ्यांकडून बुकिंग विनंत्या स्वीकारा किंवा नाकारा. तपशील पाहण्यासाठी टॅप करा.'
    },
    position: 'top'
  },
  {
    target: 'equipment',
    title: {
      english: 'Your Equipment Listings',
      hindi: 'आपकी उपकरण सूची',
      tamil: 'உங்கள் உபகரண பட்டியல்கள்',
      marathi: 'तुमची उपकरणे यादी'
    },
    description: {
      english: 'View and manage all your listed equipment. Add new equipment anytime.',
      hindi: 'अपने सभी सूचीबद्ध उपकरण देखें और प्रबंधित करें। कभी भी नया उपकरण जोड़ें।',
      tamil: 'உங்கள் பட்டியலிடப்பட்ட அனைத்து உபகரணங்களையும் பார்க்கவும் நிர்வகிக்கவும். எப்போது வேண்டுமானாலும் புதிய உபகரணங்களைச் சேர்க்கவும்.',
      marathi: 'तुमची सर्व सूचीबद्ध उपकरणे पहा आणि व्यवस्थापित करा. कधीही नवीन उपकरणे जोडा.'
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
      english: 'Start earning by renting out your tractors and equipment to nearby farmers.',
      hindi: 'आस-पास के किसानों को अपने ट्रैक्टर और उपकरण किराए पर देकर कमाई शुरू करें।',
      tamil: 'அருகிலுள்ள விவசாயிகளுக்கு உங்கள் டிராக்டர்கள் மற்றும் உபகரணங்களை வாடகைக்கு விடுவதன் மூலம் சம்பாதிக்கத் தொடங்குங்கள்.',
      marathi: 'जवळच्या शेतकऱ्यांना तुमचे ट्रॅक्टर आणि उपकरणे भाड्याने देऊन कमाई सुरू करा.'
    },
    position: 'bottom'
  },
  {
    target: 'add-equipment',
    title: {
      english: 'Add Your First Equipment',
      hindi: 'अपना पहला उपकरण जोड़ें',
      tamil: 'உங்கள் முதல் உபகரணத்தைச் சேர்க்கவும்',
      marathi: 'तुमचे पहिले उपकरण जोडा'
    },
    description: {
      english: 'List your tractor, harvester, or other farm equipment to start receiving bookings.',
      hindi: 'बुकिंग प्राप्त करना शुरू करने के लिए अपना ट्रैक्टर, हार्वेस्टर या अन्य कृषि उपकरण सूचीबद्ध करें।',
      tamil: 'முன்பதிவுகளைப் பெறத் தொடங்க உங்கள் டிராக்டர், அறுவடை இயந்திரம் அல்லது பிற விவசாய உபகரணங்களைப் பட்டியலிடுங்கள்.',
      marathi: 'बुकिंग मिळवण्यासाठी तुमचा ट्रॅक्टर, हार्वेस्टर किंवा इतर शेती उपकरणे यादीबद्ध करा.'
    },
    position: 'bottom'
  }
];
