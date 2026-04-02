import { useState } from 'react';
import { useLanguage } from '../contexts/language';
import { HighlightTour, ownerDashboardTour, farmerDashboardTour } from './HighlightTour';
import { HelpIcon, searchPageHelpTour, equipmentDetailHelpTour, bookingPageHelpTour } from './HelpIcon';

interface HelpCenterProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'farmer' | 'owner';
}

export function HelpCenter({ isOpen, onClose, userRole }: HelpCenterProps) {
  const [showTour, setShowTour] = useState(false);
  const [currentTour, setCurrentTour] = useState<any[]>([]);
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ 
      english: 'Help & Tours', 
      hindi: 'सहायता और टूर', 
      tamil: 'உதவி மற்றும் சுற்றுபயணங்கள்', 
      marathi: 'मदत आणि टूर्स' 
    }),
    subtitle: t({ 
      english: 'Learn how to use KisanYantra with guided tours', 
      hindi: 'मार्गदर्शित टूर के साथ किसान यंत्र का उपयोग करना सीखें', 
      tamil: 'வழிகாட்டுதல் சுற்றுபயணங்களுடன் KisanYantra ஐ பயன்படுத்த கற்றவும்', 
      marathi: 'मार्गदर्शित टूर्ससह किसान यंत्र वापरण्यास शिका' 
    }),
    dashboardTour: t({ 
      english: 'Dashboard Tour', 
      hindi: 'डैशबोर्ड टूर', 
      tamil: 'டாஷ்போர்டு சுற்றுபயணம்', 
      marathi: 'डॅशबोर्ड टूर' 
    }),
    searchTour: t({ 
      english: 'Search Equipment', 
      hindi: 'उपकरण खोजें', 
      tamil: 'உபகரணங்களைத் தேடுங்கள்', 
      marathi: 'उपकरणे शोधा' 
    }),
    bookingTour: t({ 
      english: 'Booking Process', 
      hindi: 'बुकिंग प्रक्रिया', 
      tamil: 'முன்பதிவு செயல்முறை', 
      marathi: 'बुकिंग प्रक्रिया' 
    }),
    equipmentDetailTour: t({ 
      english: 'Equipment Details', 
      hindi: 'उपकरण विवरण', 
      tamil: 'உபகரண விவரங்கள்', 
      marathi: 'उपकरण तपशील' 
    }),
    startTour: t({ 
      english: 'Start Tour', 
      hindi: 'टूर शुरू करें', 
      tamil: 'சுற்றுபயணத்தைத் தொடங்குங்கள்', 
      marathi: 'टूर सुरू करा' 
    }),
    close: t({ 
      english: 'Close', 
      hindi: 'बंद करें', 
      tamil: 'மூடுங்கள்', 
      marathi: 'बंद करा' 
    }),
    getHelp: t({ 
      english: 'Get Help', 
      hindi: 'सहायता प्राप्त करें', 
      tamil: 'உதவி பெறுங்கள்', 
      marathi: 'मदत मिळवा' 
    }),
    needMoreHelp: t({ 
      english: 'Need more help?', 
      hindi: 'और सहायता चाहिए?', 
      tamil: 'மேலும் உதவி தேவையா?', 
      marathi: 'अधिक मदत हवी आहे का?' 
    }),
    contactSupport: t({ 
      english: 'Contact Support', 
      hindi: 'सहायता से संपर्क करें', 
      tamil: 'ஆதரவைத் தொடர்பு கொள்ளுங்கள்', 
      marathi: 'सपोर्टशी संपर्क साधा' 
    })
  };

  const handleStartTour = (tourSteps: any[]) => {
    setCurrentTour(tourSteps);
    setShowTour(true);
  };

  const handleTourComplete = () => {
    setShowTour(false);
    setCurrentTour([]);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        
        {/* Help Center Modal */}
        <div 
          className="relative bg-white rounded-[24px] w-[320px] max-h-[500px] overflow-hidden"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
        >
          {/* Header */}
          <div 
            className="px-5 py-4 border-b border-gray-100"
            style={{ 
              background: userRole === 'owner' 
                ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                : 'linear-gradient(135deg, #fb923c, #f97316)' 
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 
                  className="text-[18px] font-bold text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {strings.title}
                </h2>
                <p className="text-[12px] text-white opacity-90 mt-1">
                  {strings.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Tour Options */}
          <div className="p-5 overflow-y-auto max-h-[350px]">
            <div className="space-y-3">
              {/* Dashboard Tour */}
              <div className="bg-gray-50 rounded-[16px] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 
                      className="text-[14px] font-semibold mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif", color: '#1f2937' }}
                    >
                      {strings.dashboardTour}
                    </h3>
                    <p className="text-[11px] text-gray-600">
                      {userRole === 'owner' 
                        ? 'Learn about earnings, requests, and equipment management'
                        : 'Learn about activity tracking, search, and bookings'
                      }
                    </p>
                  </div>
                  <button
                    onClick={() => handleStartTour(userRole === 'owner' ? ownerDashboardTour : farmerDashboardTour)}
                    className="px-4 py-2 rounded-xl text-[12px] font-semibold text-white transition-all active:scale-95"
                    style={{
                      background: userRole === 'owner' 
                        ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                        : 'linear-gradient(135deg, #fb923c, #f97316)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {strings.startTour}
                  </button>
                </div>
              </div>

              {/* Search Tour */}
              <div className="bg-gray-50 rounded-[16px] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 
                      className="text-[14px] font-semibold mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif", color: '#1f2937' }}
                    >
                      {strings.searchTour}
                    </h3>
                    <p className="text-[11px] text-gray-600">
                      Learn how to search equipment using text, voice, and location filters
                    </p>
                  </div>
                  <button
                    onClick={() => handleStartTour(searchPageHelpTour)}
                    className="px-4 py-2 rounded-xl text-[12px] font-semibold text-white transition-all active:scale-95"
                    style={{
                      background: userRole === 'owner' 
                        ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                        : 'linear-gradient(135deg, #fb923c, #f97316)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {strings.startTour}
                  </button>
                </div>
              </div>

              {/* Equipment Detail Tour */}
              <div className="bg-gray-50 rounded-[16px] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 
                      className="text-[14px] font-semibold mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif", color: '#1f2937' }}
                    >
                      {strings.equipmentDetailTour}
                    </h3>
                    <p className="text-[11px] text-gray-600">
                      Understand equipment details, photos, and booking options
                    </p>
                  </div>
                  <button
                    onClick={() => handleStartTour(equipmentDetailHelpTour)}
                    className="px-4 py-2 rounded-xl text-[12px] font-semibold text-white transition-all active:scale-95"
                    style={{
                      background: userRole === 'owner' 
                        ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                        : 'linear-gradient(135deg, #fb923c, #f97316)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {strings.startTour}
                  </button>
                </div>
              </div>

              {/* Booking Tour */}
              <div className="bg-gray-50 rounded-[16px] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 
                      className="text-[14px] font-semibold mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif", color: '#1f2937' }}
                    >
                      {strings.bookingTour}
                    </h3>
                    <p className="text-[11px] text-gray-600">
                      Learn the complete booking process from dates to payment
                    </p>
                  </div>
                  <button
                    onClick={() => handleStartTour(bookingPageHelpTour)}
                    className="px-4 py-2 rounded-xl text-[12px] font-semibold text-white transition-all active:scale-95"
                    style={{
                      background: userRole === 'owner' 
                        ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                        : 'linear-gradient(135deg, #fb923c, #f97316)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {strings.startTour}
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Help */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="text-center">
                <p className="text-[12px] font-medium text-gray-700 mb-3">
                  {strings.needMoreHelp}
                </p>
                <button
                  className="px-4 py-2 rounded-xl text-[12px] font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {strings.contactSupport}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Overlay */}
      {showTour && (
        <HighlightTour 
          steps={currentTour}
          onComplete={handleTourComplete}
          userRole={userRole}
          showProgress={true}
          allowSkip={true}
        />
      )}
    </>
  );
}
