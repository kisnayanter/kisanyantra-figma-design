import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/language';

interface TourStep {
  target: string;
  title: { english: string; hindi: string; tamil: string; marathi: string };
  description: { english: string; hindi: string; tamil: string; marathi: string };
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  elementId?: string;
}

interface HighlightTourProps {
  steps: TourStep[];
  onComplete: () => void;
  userRole?: 'farmer' | 'owner';
  showProgress?: boolean;
  allowSkip?: boolean;
}

export function HighlightTour({ 
  steps, 
  onComplete, 
  userRole = 'farmer',
  showProgress = true,
  allowSkip = true 
}: HighlightTourProps) {
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

  // Enhanced spotlight and positioning
  useEffect(() => {
    const targetElement = document.querySelector(`[data-tour-target="${currentStepData.target}"]`) ||
                          document.getElementById(currentStepData.elementId || currentStepData.target);
    
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      setSpotlightRect({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      });

      // Smart tooltip positioning
      const tooltipWidth = 320;
      const tooltipHeight = 200;
      const margin = 20;
      
      let top = rect.bottom + margin;
      let left = rect.left + rect.width / 2 - tooltipWidth / 2;
      
      // Adjust if tooltip goes below viewport
      if (top + tooltipHeight > window.innerHeight - margin) {
        top = rect.top - tooltipHeight - margin;
      }
      
      // Adjust if tooltip goes beyond right edge
      if (left + tooltipWidth > window.innerWidth - margin) {
        left = window.innerWidth - tooltipWidth - margin;
      }
      
      // Adjust if tooltip goes beyond left edge
      if (left < margin) {
        left = margin;
      }
      
      setTooltipPosition({ top: `${top}px`, left: `${left}px`, transform: 'none' });
      
      // Add highlight class to target
      targetElement.classList.add('highlight-element');
      
      return () => {
        targetElement.classList.remove('highlight-element');
      };
    }
  }, [currentStep, currentStepData]);

  // Enhanced animations and styles
  useEffect(() => {
    const style = document.createElement('style');
    const primaryColor = userRole === 'owner' ? '34, 197, 94' : '251, 146, 60'; // green vs saffron
    
    style.innerHTML = `
      @keyframes highlight-pulse {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(${primaryColor}, 0.7), 0 0 20px rgba(${primaryColor}, 0.3);
        }
        50% {
          box-shadow: 0 0 0 12px rgba(${primaryColor}, 0), 0 0 40px rgba(${primaryColor}, 0.4);
        }
      }
      
      @keyframes spotlight-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .highlight-element {
        animation: highlight-pulse 2s ease-in-out infinite;
        position: relative;
        z-index: 101;
        border-radius: 12px;
        transition: all 0.3s ease;
      }
      
      .tour-spotlight {
        animation: spotlight-fade 0.3s ease-out;
      }
      
      .tour-tooltip {
        animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
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

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      {/* Enhanced backdrop with spotlight */}
      <div 
        className="absolute inset-0 pointer-events-auto tour-spotlight"
        style={{ background: 'rgba(0,0,0,0.65)' }}
        onClick={handleSkip}
      />
      
      {/* Spotlight cutout */}
      <div
        className="absolute pointer-events-none tour-spotlight"
        style={{
          top: spotlightRect.y - 8,
          left: spotlightRect.x - 8,
          width: spotlightRect.width + 16,
          height: spotlightRect.height + 16,
          borderRadius: '16px',
          background: 'transparent',
          boxShadow: `0 0 0 4000px rgba(0,0,0,0.65), inset 0 0 0 2px rgba(${userRole === 'owner' ? '34, 197, 94' : '251, 146, 60'}, 0.5)`,
        }}
      />

      {/* Enhanced Tooltip */}
      <div 
        ref={tooltipRef}
        className="absolute w-[320px] rounded-[24px] p-5 pointer-events-auto tour-tooltip"
        style={{
          ...tooltipPosition,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: `0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(${userRole === 'owner' ? '34, 197, 94' : '251, 146, 60'}, 0.2)`,
          border: '1px solid rgba(255,255,255,0.8)',
        }}
      >
        {/* Progress indicator */}
        {showProgress && (
          <div className="flex gap-2 justify-center mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className="h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: index === currentStep ? '28px' : '8px',
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
        <div className="mb-4">
          <div 
            className="text-[18px] font-bold mb-2"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#1f2937' }}
          >
            {t(currentStepData.title)}
          </div>
          <div 
            className="text-[14px] leading-relaxed" 
            style={{ color: '#6b7280', fontFamily: "'Inter', sans-serif", lineHeight: '1.5' }}
          >
            {t(currentStepData.description)}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {allowSkip && (
            <button
              onClick={handleSkip}
              className="flex-1 py-3 rounded-xl text-[14px] font-semibold transition-all duration-200 active:scale-95 hover:bg-gray-50"
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
              className="py-3 px-4 rounded-xl text-[14px] font-semibold transition-all duration-200 active:scale-95"
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
            className="flex-1 py-3 rounded-xl text-[14px] font-bold text-white transition-all duration-200 active:scale-95"
            style={{
              background: userRole === 'owner' 
                ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                : 'linear-gradient(135deg, #fb923c, #f97316)',
              boxShadow: userRole === 'owner'
                ? '0 8px 24px rgba(34, 197, 94, 0.3)'
                : '0 8px 24px rgba(251, 146, 60, 0.3)',
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            {isLastStep 
              ? t({ english: 'Got it!', hindi: 'समझ गया!', tamil: 'புரिन்தது!', marathi: 'समजले!' })
              : t({ english: 'Next', hindi: 'आगे', tamil: 'அடுத்து', marathi: 'पुढे' })
            }
          </button>
        </div>

        {/* Step counter */}
        {showProgress && (
          <div className="text-center mt-3 text-[11px] font-medium" style={{ color: '#9ca3af', fontFamily: "'Inter', sans-serif" }}>
            Step {currentStep + 1} of {steps.length}
          </div>
        )}
      </div>
    </div>
  );
}

// Comprehensive Owner Dashboard Tour (7 steps) - Enhanced with all areas
export const ownerDashboardTour: TourStep[] = [
  {
    target: 'stats',
    elementId: 'owner-stats-cards',
    title: {
      english: 'Track Your Earnings',
      hindi: 'अपनी कमाई ट्रैक करें',
      tamil: 'உங்கள் வருமானத்தைக் கண்காணிக்கவும்',
      marathi: 'आपली कमाई ट्रॅक करा'
    },
    description: {
      english: 'Monitor your monthly earnings, total income, booking count, and equipment performance at a glance.',
      hindi: 'अपनी मासिक कमाई, कुल आय, बुकिंग की संख्या और उपकरण प्रदर्शन एक नज़र में देखें।',
      tamil: 'உங்கள் மாதாந்திர வருவாய், மொத்த வருமானம், முன்பதிவு எண்ணிக்கை மற்றும் உபகரண செயல்திறனை ஒரே பார்வையில் கண்காணிக்கவும்.',
      marathi: 'तुमची मासिक कमाई, एकूण उत्पन्न, बुकिंग संख्या आणि उपकरणाचे प्रदर्शन एका दृष्टीक्षेपात पहा.'
    },
    position: 'bottom'
  },
  {
    target: 'requests',
    elementId: 'booking-requests-section',
    title: {
      english: 'Booking Requests',
      hindi: 'बुकिंग अनुरोध',
      tamil: 'முன்பதிவு கோரிக்கைகள்',
      marathi: 'बुकिंग विनंत्या'
    },
    description: {
      english: 'View and respond to booking requests from farmers. Accept bookings that fit your schedule and equipment availability.',
      hindi: 'किसानों से बुकिंग अनुरोध देखें और उन पर प्रतिक्रिया दें। अपने शेड्यूल और उपकरण उपलब्धता के अनुसार बुकिंग स्वीकार करें।',
      tamil: 'விவசாயிகளிடமிருந்து முன்பதிவு கோரிக்கைகளைப் பார்த்து பதிலளிக்கவும். உங்கள் அட்டவணை மற்றும் உபகரண கிடைக்கும் தன்மைக்கு ஏற்ப முன்பதிவுகளை ஏற்கவும்.',
      marathi: 'शेतकऱ्यांकडून बुकिंग विनंत्या पहा आणि त्यांची उत्तरे द्या. आपल्या वेळापत्रक आणि उपकरण उपलब्धतेनुसार बुकिंग स्वीकारा.'
    },
    position: 'top'
  },
  {
    target: 'equipment',
    elementId: 'equipment-listings',
    title: {
      english: 'Your Equipment',
      hindi: 'आपके उपकरण',
      tamil: 'உங்கள் உபகரணங்கள்',
      marathi: 'तुमची उपकरणे'
    },
    description: {
      english: 'Manage all your equipment listings here. Add new equipment, edit details, pricing, availability, or remove items.',
      hindi: 'अपनी सभी उपकरण सूचियां यहाँ प्रबंधित करें। नया उपकरण जोड़ें, विवरण संपादित करें, मूल्य निर्धारित करें, उपलब्धता सेट करें, या आइटम्स हटाएं।',
      tamil: 'உங்கள் அனைத்து உபகரண பட்டியல்களையும் இங்கே நிர்வகிக்கவும். புதிய உபகரணங்களைச் சேர்க்கவும், விவரங்களைத் திருத்தவும், விலையை நிர்ணயிக்கவும், கிடைக்கும் தன்மையை அமைக்கவும், அல்லது பொருட்களை அகற்றவும்.',
      marathi: 'तुमच्या सर्व उपकरण सूची येथे व्यवस्थापित करा. नवीन उपकरणे जोडा, तपशील संपादित करा, किंमती निर्धारित करा, उपलब्धता सेट करा, किंवा आयटम काढा.'
    },
    position: 'top'
  },
  {
    target: 'opportunities',
    elementId: 'opportunities-section',
    title: {
      english: 'Farmer Opportunities',
      hindi: 'किसान अवसर',
      tamil: 'உழவர் வாய்ப்புகள்',
      marathi: 'शेतकरी संधी'
    },
    description: {
      english: 'See equipment requests from nearby farmers. Send offers with your pricing and terms to get more bookings.',
      hindi: 'आस-पास के किसानों से उपकरण अनुरोध देखें। अपनी कीमत और शर्तों के साथ ऑफर भेजकर अधिक बुकिंग प्राप्त करें।',
      tamil: 'அருகிலுள்ள விவசாயிகளிடமிருந்து உபகரண கோரிக்கைகளைப் பார்க்கவும். உங்கள் விலை மற்றும் விதிமுறைகளுடன் சலுகைகளை அனுப்பி அதிக முன்பதிவுகளைப் பெறுங்கள்.',
      marathi: 'जवळच्या शेतकऱ्यांकडून उपकरण विनंत्या पहा. आपल्या किंमती आणि अटींसह ऑफर पाठवून अधिक बुकिंग मिळवा.'
    },
    position: 'top'
  },
  {
    target: 'notifications',
    elementId: 'notification-bell',
    title: {
      english: 'Notifications',
      hindi: 'सूचनाएं',
      tamil: 'அறிவிப்புகள்',
      marathi: 'सूचना'
    },
    description: {
      english: 'Stay updated with booking alerts, payment notifications, and important announcements from farmers.',
      hindi: 'बुकिंग अलर्ट, भुगतान सूचनाएं और किसानों से महत्वपूर्ण घोषणाओं के साथ अपडेट रहें।',
      tamil: 'முன்பதிவு எச்சரிப்புகள், கட்டண அறிவிப்புகள் மற்றும் விவசாயிகளிடமிருந்து முக்கிய அறிவிப்புகளுடன் புதுப்படிக்கவும்.',
      marathi: 'बुकिंग अलर्ट, पेमेंट सूचना आणि शेतकऱ्यांकडून महत्त्वाची घोषणांनी सोबत अपडेट राहा.'
    },
    position: 'top'
  },
  {
    target: 'navigation',
    elementId: 'owner-bottom-nav',
    title: {
      english: 'Navigation Menu',
      hindi: 'नेविगेशन मेनू',
      tamil: 'வழிசெலுத்தல் மெனு',
      marathi: 'नेव्हिगेशन मेनू'
    },
    description: {
      english: 'Quick access to all sections: Home (dashboard), Equipment (manage listings), Bookings (view requests), Opportunities (send offers), Messages (chat with farmers), and Profile (your account settings).',
      hindi: 'सभी सेक्शनों तक त्वरित पहुंच: होम (डैशबोर्ड), उपकरण (सूची प्रबंधित करें), बुकिंग (अनुरोध देखें), अवसर (ऑफर भेजें), संदेश (किसानों से बात करें), और प्रोफाइल (आपके खाता सेटिंग्स)।',
      tamil: 'அனைத்து பகுதிகளுக்கும் விரைவான அணுகல்: முகப்படி (டாஷ்போர்டு), உபகரணங்கள் (பட்டியல்களை நிர்வகிக்கவும்), முன்பதிவுகள் (கோரிக்கைகளைப் பார்க்கவும்), வாய்ப்புகள் (சலுகைகளை அனுப்பவும்), செய்திகள் (விவசாயிகளுடன் அரட்டுங்கள்), மற்றும் சுயவிவரம் (உங்கள் கணக்கு அமைப்புகள்).',
      marathi: 'सर्व विभागांना जलद पहुच: होम (डॅशबोर्ड), उपकरणे (सूची व्यवस्थापित करा), बुकिंग (विनंत्या पहा), संधी (ऑफर पाठवा), संदेश (शेतकऱ्यांशी गप्पा करा), आणि प्रोफाइल (तुमचे खाते सेटिंग्स).'
    },
    position: 'top'
  },
  {
    target: 'add-equipment',
    elementId: 'add-equipment-btn',
    title: {
      english: 'Add Equipment',
      hindi: 'उपकरण जोड़ें',
      tamil: 'உபகரணம் சேர்க்கவும்',
      marathi: 'उपकरण जोडा'
    },
    description: {
      english: 'Ready to add more equipment? Tap here to list tractors, harvesters, or any farm equipment and start earning from nearby farmers.',
      hindi: 'और उपकरण जोड़ने के लिए तैयार हैं? यहाँ टैप करके ट्रैक्टर, हार्वेस्टर या कोई भी खेती उपकरण सूचीबद्ध करें और आस-पास के किसानों से कमाना शुरू करें।',
      tamil: 'மேலும் உபகரணங்களைச் சேர்க்கத் தயாரா? இங்கே தட்டவும், டிராக்டர்கள், அறுவடை இயந்திரங்கள் அல்லது வேறு விவசாய உபகரணங்களைப் பட்டியலிட்டு அருகிலுள்ள விவசாயிகளிடமிருந்து சம்பாதிக்கத் தொடங்குங்கள்.',
      marathi: 'अधिक उपकरणे जोडण्यासाठी तयार आहात का? इथे टॅप करून ट्रॅक्टर, हार्वेस्टर किंवा इतर शेती उपकरणे यादी करा आणि जवळच्या शेतकऱ्यांना भाडेकरून कमवा.'
    },
    position: 'bottom'
  }
];

// Farmer Dashboard Tour (4 steps)
export const farmerDashboardTour: TourStep[] = [
  {
    target: 'welcome',
    elementId: 'farmer-welcome-section',
    title: {
      english: 'Welcome to KisanYantra!',
      hindi: 'किसान यंत्र में आपका स्वागत है!',
      tamil: 'KisanYantra-வுக்கு வரவேற்கிறோம்!',
      marathi: 'किसान यंत्रमध्ये आपले स्वागत आहे!'
    },
    description: {
      english: 'Find and rent the right equipment for your farming needs. Save time and increase productivity with nearby equipment owners.',
      hindi: 'अपने खेती की ज़रूरतों के लिए सही उपकरण खोजें और किराए पर लें। नज़दीकी उपकरण मालिकों के साथ समय बचाएं और उत्पादकता बढ़ाएं।',
      tamil: 'உங்கள் விவசாயத் தேவைகளுக்கு ஏற்ற உபகரணங்களைக் கண்டறிந்து வாடகைக்கு எடுக்கவும். அருகிலுள்ள உபகரண உரிமையாளர்களுடன் நேரத்தைச் சேமித்து உற்பத்தித்திறனை அதிகரிக்கவும்.',
      marathi: 'तुमच्या शेतीच्या गरजा पूर्ण करण्यासाठी योग्य उपकरणे शोधा आणि भाडेकरू घ्या. जवळच्या उपकरण मालकांसोबत वेळ वाचवा आणि उत्पादकता वाढवा.'
    },
    position: 'bottom'
  },
  {
    target: 'quick-stats',
    elementId: 'farmer-quick-stats',
    title: {
      english: 'Your Activity',
      hindi: 'आपकी गतिविधि',
      tamil: 'உங்கள் செயல்பாடு',
      marathi: 'तुमची क्रियाकलाप'
    },
    description: {
      english: 'Track your active bookings and monthly spending. Stay on top of your equipment rental expenses and farm operations.',
      hindi: 'अपनी सक्रिय बुकिंग और मासिक खर्च को ट्रैक करें। अपने उपकरण किराये खर्च और खेती के संचालन पर नज़र रखें।',
      tamil: 'உங்கள் செயலில் உள்ள முன்பதிவுகள் மற்றும் மாதாந்திர செலவுகளைக் கண்காணிக்கவும். உங்கள் உபகரண வாடகை செலவுகள் மற்றும் பண்ணை செயல்பாடுகளின் மீது கவனம் செலுத்துங்கள்.',
      marathi: 'तुमचे सक्रिय बुकिंग आणि मासिक खर्च ट्रॅक करा. तुमचे उपकरण भाडेकरू खर्च आणि शेतीचे संचालन वर लक्ष ठेवा.'
    },
    position: 'bottom'
  },
  {
    target: 'search-actions',
    elementId: 'quick-actions-grid',
    title: {
      english: 'Quick Actions',
      hindi: 'त्वरित कार्य',
      tamil: 'விரைவு செயல்கள்',
      marathi: 'जलद कृती'
    },
    description: {
      english: 'Search equipment using text or voice input. View your bookings and manage everything from this convenient menu.',
      hindi: 'टेक्स्ट या वॉइस इनपुट का उपयोग करके उपकरण खोजें। अपनी बुकिंग देखें और इस सुविधाजनक मेनू से सब कुछ प्रबंधित करें।',
      tamil: 'உரை அல்லது குரல் உள்ளீட்டைப் பயன்படுத்தி உபகரணங்களைத் தேடவும். உங்கள் முன்பதிவுகளைப் பார்த்து இந்த வசதியான மெனுவிலிருந்து அனைத்தையும் நிர்வகிக்கவும்.',
      marathi: 'मजकूर किंवा आवाज इनपुट वापरून उपकरणे शोधा. तुमचे बुकिंग पहा आणि या सोयीस्कर मेनूमधून सर्व काही व्यवस्थापित करा.'
    },
    position: 'top'
  },
  {
    target: 'role-switch',
    elementId: 'role-switch-button',
    title: {
      english: 'Switch to Owner Mode',
      hindi: 'ओनर मोड पर जाएं',
      tamil: 'உரிமையாளர் நிலைக்கு மாறவும்',
      marathi: 'मालक मोडवर जा'
    },
    description: {
      english: 'Have equipment to rent? Switch to owner mode to list your equipment and start earning from other farmers.',
      hindi: 'किराए पर देने के लिए उपकरण है? अपना उपकरण सूचीबद्ध करने और दूसरे किसानों से कमाने के लिए ओनर मोड पर जाएं।',
      tamil: 'வாடகைக்கு உபகரணம் உள்ளதா? உங்கள் உபகரணங்களைப் பட்டியலிட்டு மற்ற விவசாயிகளிடமிருந்து சம்பாதிக்க உரிமையாளர் நிலைக்கு மாரவும்.',
      marathi: 'भाड्याने देण्यासाठी उपकरणे आहेत का? तुमची उपकरणे यादी करण्यासाठी आणि इतर शेतकऱ्यांकडून कमवण्यासाठी मालक मोडवर जा.'
    },
    position: 'top'
  }
];

// First-time owner tour (2 steps)
export const ownerFirstTimeTour: TourStep[] = [
  {
    target: 'welcome',
    elementId: 'owner-welcome-area',
    title: {
      english: 'Welcome to KisanYantra!',
      hindi: 'किसान यंत्र में आपका स्वागत है!',
      tamil: 'KisanYantra-வுக்கு வரவேற்கிறோம்!',
      marathi: 'किसान यंत्रमध्ये आपले स्वागत आहे!'
    },
    description: {
      english: 'Start earning by renting your tractors and equipment to nearby farmers. Let\'s get you set up for success!',
      hindi: 'आस-पास के किसानों को अपने ट्रैक्टर और उपकरण किराए पर देकर कमाई शुरू करें। चलिए आपकी सफलता के लिए तैयार करते हैं!',
      tamil: 'அருகிலுள்ள விவசாயிகளுக்கு உங்கள் டிராக்டர்கள் மற்றும் உபகரணங்களை வாடகைக்கு விடுவதன் மூலம் சம்பாதிக்கத் தொடங்குங்கள். உங்களை வெற்றிக்குத் தயார்ப்படுத்தலாம்!',
      marathi: 'जवळच्या शेतकऱ्यांना तुमचे ट्रॅक्टर आणि उपकरणे भाड्याने देऊन कमाई सुरू करा. आपण तुमच्या यशस्वीसाठी तयार करूया!'
    },
    position: 'bottom'
  },
  {
    target: 'add-equipment',
    elementId: 'add-equipment-btn',
    title: {
      english: 'Add Your First Equipment',
      hindi: 'अपना पहला उपकरण जोड़ें',
      tamil: 'உங்கள் முதல் உபகரணத்தைச் சேர்க்கவும்',
      marathi: 'तुमचे पहिले उपकरण जोडा'
    },
    description: {
      english: 'List your tractor, harvester, or any farm equipment to start receiving booking requests from farmers.',
      hindi: 'किसानों से बुकिंग अनुरोध प्राप्त करना शुरू करने के लिए अपना ट्रैक्टर, हार्वेस्टर या कोई भी खेती उपकरण सूचीबद्ध करें।',
      tamil: 'விவசாயிகளிடமிருந்து முன்பதிவு கோரிக்கைகளைப் பெறத் தொடங்க உங்கள் டிராக்டர், அறுவடை இயந்திரம் அல்லது வேறு விவசாய உபகரணங்களைப் பட்டியலிடுங்கள்.',
      marathi: 'शेतकऱ्यांकडून बुकिंग विनंत्या मिळवण्यासाठी तुमचा ट्रॅक्टर, हार्वेस्टर किंवा कोणतेही शेती उपकरण यादीबद्ध करा.'
    },
    position: 'bottom'
  }
];
