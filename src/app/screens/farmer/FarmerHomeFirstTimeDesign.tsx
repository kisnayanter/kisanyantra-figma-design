import { useState } from 'react';
import { useLanguage } from '../../contexts/language';
import { HighlightTour, farmerDashboardTour } from '../../components/HighlightTour';
import { HelpIcon, searchPageHelpTour } from '../../components/HelpIcon';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function FarmerHomeFirstTimeDesign() {
  const [showTour, setShowTour] = useState(true);
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    greeting: t({ english: 'Good Morning', hindi: 'सुप्रभात', tamil: 'காலை வணக்கம்', marathi: 'शुभ प्रभात' }),
    active: t({ english: 'Active', hindi: 'सक्रिय', tamil: 'செயலில்', marathi: 'सक्रिय' }),
    thisMonth: t({ english: 'This Month', hindi: 'इस महीने', tamil: 'இந்த மாதம்', marathi: 'या महिन्यात' }),
    quickActions: t({ english: 'Quick Actions', hindi: 'त्वरित कार्य', tamil: 'உத்வேக செயல்கள்', marathi: 'जलद कृती' }),
    search: t({ english: 'Search', hindi: 'खोजें', tamil: 'தேடு', marathi: 'शोधा' }),
    voice: t({ english: 'Voice', hindi: 'आवाज़', tamil: 'குரல்', marathi: 'आवाज' }),
    bookings: t({ english: 'Bookings', hindi: 'बुकिंग', tamil: 'முன்பதிவு', marathi: 'बुकिंग' }),
    emptyTitle: t({ english: 'No bookings yet', hindi: 'अभी कोई बुकिंग नहीं', tamil: 'இப்போது முன்பதிவு இல்லை', marathi: 'अजून बुकिंग नाही' }),
    emptySubtitle: t({ english: 'Start by exploring equipment near your farm', hindi: 'अपने खेत के पास उपकरण देखें', tamil: 'உங்கள் பண்ணைக்கு அருகில் உள்ள உபகரணங்களை பார்க்கவும்', marathi: 'तुमच्या शेजारील उपकरणे पाहा' }),
    suggested: t({ english: 'Suggested for you (5 km)', hindi: 'आपके लिए सुझाव (5 किमी)', tamil: 'உங்களுக்கு பரிந்துரை (5 கி.மீ)', marathi: 'तुमच्यासाठी सुचवलेले (5 किमी)' }),
    switchToOwner: t({ english: 'Switch to Owner Mode', hindi: 'ओनर मोड पर जाएं', tamil: 'உரிமையாளர் நிலைக்கு மாறவும்', marathi: 'मालक मोडवर जा' }),
    ownerPromoTitle: t({ english: 'Have equipment to rent?', hindi: 'क्या किराए पर उपकरण है?', tamil: 'வாடகைக்கு உபகரணம் உள்ளதா?', marathi: 'भाड्याने देण्यासाठी उपकरणे आहेत?' }),
    ownerPromoSubtitle: t({ english: 'List it and earn directly from your phone.', hindi: 'इसे सूचीबद्ध करें और सीधे कमाएं।', tamil: 'அதை பட்டியலிட்டு நேரடியாக சம்பாதிக்கவும்.', marathi: 'यादी करा आणि थेट कमवा.' }),
    switchBack: t({ english: 'Back to Farmer', hindi: 'किसान मोड पर लौटें', tamil: 'உழவர் நிலைக்கு திரும்பவும்', marathi: 'किसान मोडला परत जा' })
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:44</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Saffron Header - Fixed */}
          <div id="farmer-welcome-section" data-tour-target="welcome" 
            className="px-5 pt-4 pb-[60px] rounded-b-[36px] relative"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="absolute text-[80px] right-[-10px] bottom-[-10px] opacity-20">🌾</div>
            
            <div className="flex justify-between items-center mb-4 relative z-10">
              <div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  🌤️ {strings.greeting}
                </div>
                <div 
                  className="text-white text-[18px] font-bold mt-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Ramu Kisan 👋
                </div>
              </div>
              <button
                id="role-switch-button"
                data-tour-target="role-switch"
                type="button"
                aria-label={strings.switchToOwner}
                className="ky-tap-icon w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  color: 'white'
                }}
              >
                🔁
              </button>
            </div>

            {/* Quick Stats */}
            <div id="farmer-quick-stats" data-tour-target="quick-stats" className="flex gap-2 relative z-10">
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">0</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.active}
                </div>
              </div>
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">₹0</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.thisMonth}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area with proper scroll behavior */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                {strings.emptyTitle}
              </div>
              <p className="text-[11px] mt-1" style={{ color: 'var(--text-soft)' }}>
                {strings.emptySubtitle}
              </p>
              <div className="bg-[var(--cream)] rounded-[16px] p-3 mt-3">
                <div className="text-[11px] font-semibold" style={{ color: 'var(--text-mid)' }}>
                  {strings.suggested}
                </div>
                <div className="flex gap-2 mt-2">
                  {['Mahindra 475', 'New Holland 5630'].map((item, idx) => (
                    <div key={item} className="ky-tap-card flex-1 bg-white rounded-[12px] p-3" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>{item}</span>
                        <span>{idx === 0 ? '🚜' : '🌾'}</span>
                      </div>
                      <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>2.3 km · ₹2,400/day</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div id="quick-actions-grid" data-tour-target="search-actions" className="bg-white rounded-[20px] p-4 mb-4 relative" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                {strings.quickActions}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: '🔍', label: strings.search, badge: null },
                  { emoji: '🎤', label: strings.voice, badge: null },
                  { emoji: '📋', label: strings.bookings, badge: 2 }
                ].map((action) => (
                  <div
                    key={action.label}
                    className="ky-tap-icon relative rounded-[14px] py-4 flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ background: 'var(--cream)' }}
                  >
                    <div className="text-2xl">{action.emoji}</div>
                    <div className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                      {action.label}
                    </div>
                    {action.badge && (
                      <div
                        className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ 
                          background: '#E74C3C',
                          boxShadow: '0 2px 6px rgba(231, 76, 60, 0.4)'
                        }}
                      >
                        {action.badge}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Help Icon for Quick Actions */}
              <div className="absolute top-2 right-2">
                <HelpIcon 
                  tourSteps={searchPageHelpTour} 
                  userRole="farmer" 
                  size="small"
                />
              </div>
            </div>

            {/* Owner Promo */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                {strings.ownerPromoTitle}
              </div>
              <p className="text-[11px] mt-1" style={{ color: 'var(--text-soft)' }}>
                {strings.ownerPromoSubtitle}
              </p>
              <div className="ky-tap-card flex items-center justify-between mt-3 p-3 rounded-[16px]" style={{ background: 'var(--cream)' }}>
                <div className="text-[11px] font-semibold" style={{ color: 'var(--text-mid)' }}>
                  {strings.switchToOwner}
                </div>
                <div className="text-xl">🚜</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                Recent Activity · हाल की गतिविधि
              </div>
              <div className="space-y-2">
                {[
                  { icon: '📅', text: 'New booking request from Ramesh', time: '2 hours ago', color: 'var(--green)' },
                  { icon: '✅', text: 'Equipment returned - John Doe', time: '1 day ago', color: 'var(--text-mid)' },
                  { icon: '💰', text: 'Payment received - ₹4,800', time: '2 days ago', color: 'var(--saffron)' }
                ].map((activity) => (
                  <div key={activity.text} className="ky-tap-list-item flex items-center gap-3 p-2">
                    <div className="text-lg">{activity.icon}</div>
                    <div className="flex-1">
                      <div className="text-[10px]" style={{ color: 'var(--text-dark)' }}>{activity.text}</div>
                      <div className="text-[8px]" style={{ color: 'var(--text-soft)' }}>{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <FarmerBottomNav activeTab="home" />

          {/* Notch */}
          <div 
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
            style={{ borderRadius: '0 0 14px 14px' }}
          />
        </div>
      </div>

      {/* Enhanced Farmer Tour */}
      {showTour && (
        <HighlightTour 
          steps={farmerDashboardTour}
          onComplete={() => setShowTour(false)}
          userRole="farmer"
          showProgress={true}
          allowSkip={true}
        />
      )}
    </div>
  );
}
