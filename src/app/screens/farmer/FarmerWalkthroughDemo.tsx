import { useState } from 'react';
import { useLanguage } from '../../contexts/language';
import { HighlightTour, farmerDashboardTour } from '../../components/HighlightTour';
import { HelpIcon, searchPageHelpTour } from '../../components/HelpIcon';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function FarmerWalkthroughDemo() {
  const [showTour, setShowTour] = useState(false);
  const [helpCenterOpen, setHelpCenterOpen] = useState(false);
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'Farmer Walkthrough Demo', hindi: 'किसान वॉकथ्रू डेमो', tamil: 'உழவர் சுற்றுபயணம் டெமோ', marathi: 'शेतकरी वॉकथ्रू डेमो' }),
    subtitle: t({ english: 'Enhanced Tour System Showcase', hindi: 'उन्नत टूर सिस्टम प्रदर्शन', tamil: 'மேம்படுத்தப்பட்ட சுற்றுபயணம் அமைப்பு காட்சி', marathi: 'वर्धित टूर सिस्टम डेमो' }),
    greeting: t({ english: 'Good Morning', hindi: 'सुप्रभात', tamil: 'காலை வணக்கம்', marathi: 'शुभ प्रभात' }),
    active: t({ english: 'Active', hindi: 'सक्रिय', tamil: 'செயலில்', marathi: 'सक्रिय' }),
    thisMonth: t({ english: 'This Month', hindi: 'इस महीने', tamil: 'இந்த மாதம்', marathi: 'या महिन्यात' }),
    quickActions: t({ english: 'Quick Actions', hindi: 'त्वरित कार्य', tamil: 'உத்வேக செயல்கள்', marathi: 'जलद कृती' }),
    search: t({ english: 'Search', hindi: 'खोजें', tamil: 'தேடு', marathi: 'शोधा' }),
    voice: t({ english: 'Voice', hindi: 'आवाज़', tamil: 'குரல்', marathi: 'आवाज' }),
    bookings: t({ english: 'Bookings', hindi: 'बुकिंग', tamil: 'முன்பதிவு', marathi: 'बुकिंग' }),
    startTour: t({ english: 'Start Tour', hindi: 'टूर शुरू करें', tamil: 'சுற்றுபயணத்தைத் தொடங்குங்கள்', marathi: 'टूर सुरू करा' }),
    helpCenter: t({ english: 'Help Center', hindi: 'सहायता केंद्र', tamil: 'உதவி மையம்', marathi: 'मदत केंद्र' }),
    features: {
      spotlight: t({ english: 'Smart Spotlight', hindi: 'स्मार्ट स्पॉटलाइट', tamil: 'ஸ்மார்ட் ஸ்பாட்லைட்', marathi: 'स्मार्ट स्पॉटलाइट' }),
      positioning: t({ english: 'Auto Positioning', hindi: 'ऑटो पोजिशनिंग', tamil: 'தானியக்க நிலைப்படுத்தல்', marathi: 'ऑटो पोजिशनिंग' }),
      progress: t({ english: 'Progress Tracking', hindi: 'प्रगति ट्रैकिंग', tamil: 'முன்னேற்ற கண்காணிப்பு', marathi: 'प्रगती ट्रॅकिंग' }),
      multilang: t({ english: 'Multi-Language', hindi: 'मल्टी-लैंग्वेज', tamil: 'பல மொழி', marathi: 'बहु-भाषा' })
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Demo Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{strings.title}</h1>
        <p className="text-lg text-gray-600">{strings.subtitle}</p>
      </div>

      {/* Control Panel */}
      <div className="max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tour Controls</h2>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => setShowTour(true)}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            🎯 {strings.startTour}
          </button>
          <button
            onClick={() => setHelpCenterOpen(true)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            💡 {strings.helpCenter}
          </button>
        </div>
      </div>

      {/* Features Showcase */}
      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-4">Enhanced Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(strings.features).map(([key, value]) => (
            <div key={key} className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="text-2xl mb-2">
                {key === 'spotlight' && '🎯'}
                {key === 'positioning' && '📍'}
                {key === 'progress' && '📊'}
                {key === 'multilang' && '🌍'}
              </div>
              <div className="text-sm font-medium text-gray-900">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone Mockup with Farmer Home */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
        <div className="flex justify-center">
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

                {/* Saffron Header */}
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
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
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

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">
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
                          className="rounded-[14px] py-4 flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
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
                    
                    {/* Help Icon */}
                    <div className="absolute top-2 right-2">
                      <HelpIcon 
                        tourSteps={searchPageHelpTour} 
                        userRole="farmer" 
                        size="small"
                      />
                    </div>
                  </div>

                  {/* Sample Content */}
                  <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
                    <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                      Recent Activity
                    </div>
                    <div className="space-y-2 mt-3">
                      {[
                        { icon: '📅', text: 'New booking request from Ramesh', time: '2 hours ago' },
                        { icon: '✅', text: 'Equipment returned - John Doe', time: '1 day ago' }
                      ].map((activity) => (
                        <div key={activity.text} className="flex items-center gap-3 p-2">
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
        </div>
      </div>

      {/* Help Center Modal */}
      {helpCenterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setHelpCenterOpen(false)}
          />
          <div 
            className="relative bg-white rounded-[24px] w-[320px] max-h-[400px] overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
          >
            <div className="px-5 py-4 border-b border-gray-100" style={{ background: 'linear-gradient(135deg, #fb923c, #f97316)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[18px] font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {strings.helpCenter}
                  </h2>
                </div>
                <button
                  onClick={() => setHelpCenterOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-white bg-opacity-20"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-3">
                <button
                  onClick={() => { setShowTour(true); setHelpCenterOpen(false); }}
                  className="w-full px-4 py-3 rounded-xl text-[12px] font-semibold text-white transition-all"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #f97316)' }}
                >
                  🎯 Dashboard Tour
                </button>
                <button
                  onClick={() => { /* Search tour */ }}
                  className="w-full px-4 py-3 rounded-xl text-[12px] font-semibold text-white transition-all"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #f97316)' }}
                >
                  🔍 Search Equipment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
