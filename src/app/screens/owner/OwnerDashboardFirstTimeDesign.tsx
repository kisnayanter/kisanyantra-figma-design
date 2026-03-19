import { useState } from 'react';
import { useLanguage } from '../../contexts/language';
import { OnboardingTour, ownerFirstTimeTour } from '../../components/OnboardingTour';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function OwnerDashboardFirstTimeDesign() {
  const [showTour, setShowTour] = useState(true);
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    greeting: t({
      english: 'Welcome',
      hindi: 'स्वागत है',
      tamil: 'வரவேற்கிறோம்',
      marathi: 'स्वागत आहे'
    }),
    subtitle: t({
      english: 'Owner Dashboard',
      hindi: 'मालिक डैशबोर्ड',
      tamil: 'உரிமையாளர் டாஷ்போர்டு',
      marathi: 'मालक डॅशबोर्ड'
    }),
    emptyTitle: t({
      english: 'Start Your Journey',
      hindi: 'अपनी यात्रा शुरू करें',
      tamil: 'உங்கள் பயணத்தைத் தொடங்குங்கள்',
      marathi: 'तुमचा प्रवास सुरू करा'
    }),
    emptyMessage: t({
      english: 'List your first equipment to start earning from nearby farmers',
      hindi: 'आस-पास के किसानों से कमाई शुरू करने के लिए अपना पहला उपकरण सूचीबद्ध करें',
      tamil: 'அருகிலுள்ள விவசாயிகளிடமிருந்து சம்பாதிக்க உங்கள் முதல் உபகரணத்தைப் பட்டியலிடுங்கள்',
      marathi: 'जवळच्या शेतकऱ्यांकडून कमाई सुरू करण्यासाठी तुमचे पहिले उपकरण यादीबद्ध करा'
    }),
    addEquipment: t({
      english: '+ Add Equipment',
      hindi: '+ उपकरण जोड़ें',
      tamil: '+ உபகரணம் சேர்க்கவும்',
      marathi: '+ उपकरण जोडा'
    }),
    quickStats: t({
      english: 'Quick Stats',
      hindi: 'त्वरित आंकड़े',
      tamil: 'விரைவு புள்ளிவிவரங்கள்',
      marathi: 'जलद आकडेवारी'
    }),
    earnings: t({
      english: 'Total Earnings',
      hindi: 'कुल कमाई',
      tamil: 'மொத்த வருமானம்',
      marathi: 'एकूण कमाई'
    }),
    bookings: t({
      english: 'Bookings',
      hindi: 'बुकिंग',
      tamil: 'முன்பதிவுகள்',
      marathi: 'बुकिंग'
    }),
    equipment: t({
      english: 'Equipment',
      hindi: 'उपकरण',
      tamil: 'உபகரணங்கள்',
      marathi: 'उपकरणे'
    }),
    opportunitiesHint: t({
      english: 'Farmers nearby are looking for equipment — list yours to get offers!',
      hindi: 'आसपास के किसान उपकरण ढूंढ रहे हैं — अपना उपकरण सूचीबद्ध करें!',
      tamil: 'அருகிலுள்ள விவசாயிகள் உபகரணங்களைத் தேடுகிறார்கள் — உங்களுடையதை பட்டியலிடுங்கள்!',
      marathi: 'जवळचे शेतकरी उपकरणे शोधत आहेत — तुमचे उपकरण यादी करा!'
    })
  };

  return (
    <div className="relative mx-auto" style={{ width: '320px', height: '640px' }}>
      <div 
        className="absolute inset-0 rounded-[36px] overflow-hidden"
        style={{
          background: '#111',
          padding: '10px',
          boxShadow: '0 0 0 1px #333, 0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Modern Header with Green Gradient */}
          <div 
            className="px-[18px] pt-5 pb-6 rounded-b-[36px] relative"
            style={{ 
              background: 'var(--gradient-green)',
              boxShadow: 'var(--card-shadow-green)',
              backgroundImage: `
                var(--gradient-green),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex justify-between items-center mb-4 gap-3">
              <div className="flex-1">
                <div className="text-[13px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}>
                  {strings.greeting}
                </div>
                <div 
                  className="text-white text-[24px] font-bold mt-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {strings.subtitle}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="ky-tap-icon w-9 h-9 rounded-xl flex items-center justify-center text-base"
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: '1.5px solid rgba(255,255,255,0.4)',
                    color: 'white'
                  }}
                >
                  🔔
                </button>
              </div>
            </div>

            {/* Stats Cards - Empty State */}
            <div className="grid grid-cols-3 gap-2">
              <div 
                className="rounded-[14px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[18px] font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>₹0</div>
                <div className="text-white text-[10px] font-medium" style={{ opacity: 0.85, fontFamily: "'Inter', sans-serif" }}>
                  {strings.earnings}
                </div>
              </div>
              <div 
                className="rounded-[14px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[16px] font-bold">0</div>
                <div className="text-white text-[9px]" style={{ opacity: 0.85 }}>
                  {strings.bookings}
                </div>
              </div>
              <div 
                className="rounded-[14px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[16px] font-bold">0</div>
                <div className="text-white text-[9px]" style={{ opacity: 0.85 }}>
                  {strings.equipment}
                </div>
              </div>
            </div>
          </div>

          {/* Body - Empty State */}
          <div className="flex-1 flex flex-col items-center justify-center px-5 pb-5">
            <div className="text-center">
              <div className="text-[64px] mb-4">🚜</div>
              <div 
                className="text-[24px] font-bold mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
              >
                {strings.emptyTitle}
              </div>
              <div className="text-[14px] leading-relaxed mb-6 px-4" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                {strings.emptyMessage}
              </div>

              <button
                className="ky-tap-cta-primary w-full rounded-[16px] py-[18px] font-bold text-[16px] text-white flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
                style={{
                  background: 'var(--gradient-saffron)',
                  boxShadow: 'var(--card-shadow-saffron)',
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                <span>{strings.addEquipment}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>

              {/* Opportunities Hint */}
              <div
                className="mt-4 rounded-[14px] p-3 flex items-center gap-3"
                style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)' }}
              >
                <div className="text-[20px] flex-shrink-0">{'\u{1F4B0}'}</div>
                <div className="text-[11px] font-semibold" style={{ color: 'var(--green)' }}>
                  {strings.opportunitiesHint}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <OwnerBottomNav activeTab="home" />

          {/* Notch */}
          <div
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
            style={{ borderRadius: '0 0 14px 14px' }}
          />
        </div>
      </div>

      {/* Onboarding Tour */}
      {showTour && (
        <OnboardingTour 
          steps={ownerFirstTimeTour}
          onComplete={() => setShowTour(false)}
        />
      )}
    </div>
  );
}
