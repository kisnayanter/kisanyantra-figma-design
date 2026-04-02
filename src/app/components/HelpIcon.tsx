import { useState } from 'react';
import { useLanguage } from '../contexts/language';
import { HighlightTour } from './HighlightTour';

interface HelpIconProps {
  tourSteps: any[];
  userRole?: 'farmer' | 'owner';
  size?: 'small' | 'medium' | 'large';
  position?: 'static' | 'absolute' | 'fixed';
  className?: string;
}

export function HelpIcon({ 
  tourSteps, 
  userRole = 'farmer',
  size = 'medium',
  position = 'static',
  className = ''
}: HelpIconProps) {
  const [showTour, setShowTour] = useState(false);
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const sizeClasses = {
    small: 'w-6 h-6 text-xs',
    medium: 'w-8 h-8 text-sm',
    large: 'w-10 h-10 text-base'
  };

  const positionClasses = {
    static: '',
    absolute: 'absolute',
    fixed: 'fixed'
  };

  const handleStartTour = () => {
    setShowTour(true);
  };

  return (
    <>
      <button
        onClick={handleStartTour}
        className={`${positionClasses[position]} ${sizeClasses[size]} ${className} rounded-full flex items-center justify-center font-bold transition-all duration-200 hover:scale-110 active:scale-95`}
        style={{
          background: userRole === 'owner' 
            ? 'linear-gradient(135deg, #22c55e, #16a34a)'
            : 'linear-gradient(135deg, #fb923c, #f97316)',
          color: 'white',
          boxShadow: userRole === 'owner'
            ? '0 4px 12px rgba(34, 197, 94, 0.3)'
            : '0 4px 12px rgba(251, 146, 60, 0.3)',
          fontFamily: "'Poppins', sans-serif"
        }}
        title={t({ 
          english: 'Get help with this feature', 
          hindi: 'इस सुविधा के लिए सहायता प्राप्त करें', 
          tamil: 'இந்த அம்சத்திற்கு உதவி பெறுங்கள்', 
          marathi: 'या वैशिष्ट्यासाठी मदत मिळवा' 
        })}
      >
        ?
      </button>

      {showTour && (
        <HighlightTour 
          steps={tourSteps}
          onComplete={() => setShowTour(false)}
          userRole={userRole}
          showProgress={true}
          allowSkip={true}
        />
      )}
    </>
  );
}

// Predefined help tour configurations
export const searchPageHelpTour = [
  {
    target: 'search-input',
    elementId: 'search-field',
    title: {
      english: 'Search Equipment',
      hindi: 'उपकरण खोजें',
      tamil: 'உபகரணங்களைத் தேடுங்கள்',
      marathi: 'उपकरणे शोधा'
    },
    description: {
      english: 'Search for tractors, harvesters, or any farm equipment by name, type, or location.',
      hindi: 'नाम, प्रकार या स्थान के अनुसार ट्रैक्टर, हार्वेस्टर या कोई भी खेती उपकरण खोजें।',
      tamil: 'பெயர், வகை அல்லது இருப்பிடத்தின் அடிப்படையில் டிராக்டர்கள், அறுவடை இயந்திரங்கள் அல்லது வேறு விவசாய உபகரணங்களைத் தேடுங்கள்.',
      marathi: 'नाव, प्रकार किंवा स्थानानुसार ट्रॅक्टर, हार्वेस्टर किंवा कोणतेही शेती उपकरण शोधा.'
    },
    position: 'bottom'
  },
  {
    target: 'location-filter',
    elementId: 'location-search',
    title: {
      english: 'Location Filter',
      hindi: 'स्थान फ़िल्टर',
      tamil: 'இடம் வடிகட்டி',
      marathi: 'स्थान फिल्टर'
    },
    description: {
      english: 'Set your location and search radius to find equipment available near your farm.',
      hindi: 'अपने खेत के पास उपलब्ध उपकरण खोजने के लिए अपना स्थान और खोज त्रिज्या निर्धारित करें।',
      tamil: 'உங்கள் பண்ணைக்கு அருகில் கிடைக்கும் உபகரணங்களைக் கண்டறிய உங்கள் இருப்பிடம் மற்றும் தேடல் ஆரம்பத்தை அமைக்கவும்.',
      marathi: 'तुमच्या शेतीजवळ उपलब्ध उपकरणे शोधण्यासाठी तुमचे स्थान आणि शोध त्रिज्या निर्धारित करा.'
    },
    position: 'bottom'
  },
  {
    target: 'voice-search',
    elementId: 'voice-button',
    title: {
      english: 'Voice Search',
      hindi: 'वॉइस सर्च',
      tamil: 'குரல் தேடல்',
      marathi: 'आवाज शोध'
    },
    description: {
      english: 'Tap the microphone to search using your voice. Available in Hindi, Tamil, Marathi, and English.',
      hindi: 'अपनी आवाज़ से खोजने के लिए माइक्रोफोन टैप करें। हिंदी, तमिल, मराठी और अंग्रेज़ी में उपलब्ध है।',
      tamil: 'உங்கள் குரலைப் பயன்படுத்தித் தேட மைக்ரோஃபோனைத் தட்டவும். இந்தி, தமிழ், மராத்தி மற்றும் ஆங்கிலத்தில் கிடைக்கும்.',
      marathi: 'आपल्या आवाजाने शोधण्यासाठी मायक्रोफोन टॅप करा. हिंदी, तामिळ, मराठी आणि इंग्रजीमध्ये उपलब्ध.'
    },
    position: 'top'
  }
];

export const equipmentDetailHelpTour = [
  {
    target: 'equipment-images',
    elementId: 'image-gallery',
    title: {
      english: 'Equipment Photos',
      hindi: 'उपकरण की फ़ोटो',
      tamil: 'உபகரண புகைப்படங்கள்',
      marathi: 'उपकरण फोटो'
    },
    description: {
      english: 'View multiple photos of the equipment to check its condition and features.',
      hindi: 'उपकरण की स्थिति और विशेषताओं की जांच करने के लिए इसकी कई फ़ोटो देखें।',
      tamil: 'உபகரணத்தின் நிலை மற்றும் அம்சங்களைச் சரிபார்க்க பல புகைப்படங்களைப் பார்க்கவும்.',
      marathi: 'उपकरणाची स्थिती आणि वैशिष्ट्ये तपासण्यासाठी त्याच्या अनेक फोटो पहा.'
    },
    position: 'bottom'
  },
  {
    target: 'booking-button',
    elementId: 'book-now-btn',
    title: {
      english: 'Book Equipment',
      hindi: 'उपकरण बुक करें',
      tamil: 'உபகரணத்தை முன்பதிவு செய்யுங்கள்',
      marathi: 'उपकरण बुक करा'
    },
    description: {
      english: 'Select your dates and book this equipment. The owner will confirm your booking request.',
      hindi: 'अपनी तिथियां चुनें और इस उपकरण को बुक करें। मालिक आपके बुकिंग अनुरोध की पुष्टि करेगा।',
      tamil: 'உங்கள் தேதிகளைத் தேர்ந்தெடுத்து இந்த உபகரணத்தை முன்பதிவு செய்யுங்கள். உரிமையாளர் உங்கள் முன்பதிவு கோரிக்கையை உறுதிப்படுத்துவார்.',
      marathi: 'आपल्या तारखा निवडा आणि हे उपकरण बुक करा. मालक आपले बुकिंग विनंतीची पुष्टी करेल.'
    },
    position: 'top'
  },
  {
    target: 'owner-info',
    elementId: 'owner-details',
    title: {
      english: 'Owner Information',
      hindi: 'मालिक की जानकारी',
      tamil: 'உரிமையாளர் தகவல்',
      marathi: 'मालकाची माहिती'
    },
    description: {
      english: 'View the equipment owner\'s profile, rating, and contact information.',
      hindi: 'उपकरण मालिक की प्रोफाइल, रेटिंग और संपर्क जानकारी देखें।',
      tamil: 'உபகரண உரிமையாளரின் சுயவிவரம், மதிப்பீடு மற்றும் தொடர்புத் தகவல்களைப் பார்க்கவும்.',
      marathi: 'उपकरण मालकाची प्रोफाइल, रेटिंग आणि संपर्क माहिती पहा.'
    },
    position: 'left'
  }
];

export const bookingPageHelpTour = [
  {
    target: 'date-picker',
    elementId: 'booking-calendar',
    title: {
      english: 'Select Dates',
      hindi: 'तिथियां चुनें',
      tamil: 'தேதிகளைத் தேர்ந்தெடுக்கவும்',
      marathi: 'तारखा निवडा'
    },
    description: {
      english: 'Choose your start and end dates. Available dates are shown in green.',
      hindi: 'अपनी शुरुआत और अंतिम तिथियां चुनें। उपलब्ध तिथियां हरे रंग में दिखाई देती हैं।',
      tamil: 'உங்கள் தொடக்க மற்றும் முடிவு தேதிகளைத் தேர்ந்தெடுக்கவும். கிடைக்கும் தேதிகள் பச்சை நிறத்தில் காட்டப்படும்.',
      marathi: 'आपले सुरुवात आणि समाप्ती तारखा निवडा. उपलब्ध तारखा हिरव्या रंगात दाखवल्या आहेत.'
    },
    position: 'top'
  },
  {
    target: 'payment-section',
    elementId: 'payment-details',
    title: {
      english: 'Payment Details',
      hindi: 'भुगतान विवरण',
      tamil: 'கட்டண விவரங்கள்',
      marathi: 'पेमेंट तपशील'
    },
    description: {
      english: 'Review the total cost including equipment rental and service charges.',
      hindi: 'उपकरण किराया और सेवा शुल्क सहित कुल लागत की समीक्षा करें।',
      tamil: 'உபகரண வாடகை மற்றும் சேவை கட்டணங்கள் உட்பட மொத்த செலவை மதிப்பாய்வும்.',
      marathi: 'उपकरण भाडेकरू आणि सेवा शुल्कासहित एकूण खर्चाचे पुनरावलोकन करा.'
    },
    position: 'top'
  },
  {
    target: 'confirm-booking',
    elementId: 'confirm-btn',
    title: {
      english: 'Confirm Booking',
      hindi: 'बुकिंग की पुष्टि करें',
      tamil: 'முன்பதிவை உறுதிப்படுத்துங்கள்',
      marathi: 'बुकिंग पुष्टी करा'
    },
    description: {
      english: 'Submit your booking request. The owner will review and confirm within 24 hours.',
      hindi: 'अपना बुकिंग अनुरोध सबमिट करें। मालिक 24 घंटों के भीतर समीक्षा करेगा और पुष्टि करेगा।',
      tamil: 'உங்கள் முன்பதிவு கோரிக்கையைச் சமர்ப்புச் செய்யுங்கள். உரிமையாளர் 24 மணிநேரத்திற்குள் மதிப்பாய்வு செய்து உறுதிப்படுத்துவார்.',
      marathi: 'आपले बुकिंग विनंती सबमिट करा. मालक 24 तासांच्या आत पुनरावलोकन करून पुष्टी करेल.'
    },
    position: 'top'
  }
];
