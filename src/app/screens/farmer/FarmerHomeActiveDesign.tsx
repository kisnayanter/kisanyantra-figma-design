import { useLanguage } from '../../contexts/language';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function FarmerHomeActiveDesign() {
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
    activeRequest: t({ english: 'Active Request', hindi: 'सक्रिय अनुरोध', tamil: 'செயலில் உள்ள கோரிக்கை', marathi: 'सक्रिय विनंती' }),
    offersReceived: t({ english: 'offers received', hindi: 'ऑफ़र प्राप्त हुए', tamil: 'சலுகைகள் பெறப்பட்டன', marathi: 'ऑफर प्राप्त झाले' }),
    viewOffers: t({ english: 'View Offers \u2192', hindi: 'ऑफ़र देखें \u2192', tamil: 'சலுகைகளைப் பார்க்கவும் \u2192', marathi: 'ऑफर पहा \u2192' }),
    upcomingBooking: t({ english: 'Upcoming Booking', hindi: 'आने वाली बुकिंग', tamil: 'வரவிருக்கும் முன்பதிவு', marathi: 'आगामी बुकिंग' }),
    viewDetails: t({ english: 'View Details \u2192', hindi: 'विवरण देखें \u2192', tamil: 'விவரங்களைப் பார்க்கவும் \u2192', marathi: 'तपशील पहा \u2192' }),
    recentActivity: t({ english: 'Recent Activity', hindi: 'हाल की गतिविधि', tamil: 'சமீபத்திய செயல்பாடு', marathi: 'अलीकडील क्रियाकलाप' }),
    tractor50hp: t({ english: 'Tractor \u00b7 50 HP', hindi: 'ट्रैक्टर \u00b7 50 HP', tamil: 'டிராக்டர் \u00b7 50 HP', marathi: 'ट्रॅक्टर \u00b7 50 HP' }),
    confirmed: t({ english: 'Confirmed', hindi: 'पुष्टि हो गई', tamil: 'உறுதி செய்யப்பட்டது', marathi: 'पुष्टी झाली' }),
    live: t({ english: 'LIVE', hindi: 'लाइव', tamil: 'நேரடி', marathi: 'लाइव्ह' }),
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

          {/* Saffron Header */}
          <div
            className="px-5 pt-4 pb-[60px] rounded-b-[36px]"
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
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Ramu Kisan 👋
                </div>
              </div>
              <button
                type="button"
                aria-label="Switch role"
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
            <div className="flex gap-2 relative z-10">
              <div
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">1</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.active}
                </div>
              </div>
              <div
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">₹7,200</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.thisMonth}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">

            {/* Active Request Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{
                boxShadow: 'var(--card-shadow)',
                borderLeft: '3px solid var(--saffron)'
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-[11px] font-bold" style={{ color: 'var(--text-mid)' }}>
                  {strings.activeRequest}
                </div>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: '#E8F5E9', color: 'var(--green)' }}
                >
                  🟢 {strings.live}
                </span>
              </div>
              <div
                className="text-[14px] font-bold"
                style={{ color: 'var(--text-dark)', fontFamily: "'Baloo 2', cursive" }}
              >
                {strings.tractor50hp}
              </div>
              <div className="text-[11px] mt-1" style={{ color: 'var(--text-soft)' }}>
                Mar 15-17 · Hinganghat, Wardha
              </div>
              <div className="text-[11px] font-semibold mt-2" style={{ color: 'var(--saffron)' }}>
                2 {strings.offersReceived}
              </div>
              <button
                type="button"
                className="ky-tap-card mt-3 text-[12px] font-bold"
                style={{ color: 'var(--saffron)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                {strings.viewOffers}
              </button>
            </div>

            {/* Upcoming Booking Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{
                boxShadow: 'var(--card-shadow)',
                borderLeft: '3px solid var(--green)'
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-[11px] font-bold" style={{ color: 'var(--text-mid)' }}>
                  {strings.upcomingBooking}
                </div>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: '#E8F5E9', color: 'var(--green)' }}
                >
                  ✅ {strings.confirmed}
                </span>
              </div>
              <div
                className="text-[14px] font-bold"
                style={{ color: 'var(--text-dark)', fontFamily: "'Baloo 2', cursive" }}
              >
                Mahindra 475 DI
              </div>
              <div className="text-[11px] mt-1" style={{ color: 'var(--text-soft)' }}>
                Jul 10-12 · 3 days · ₹7,200
              </div>
              <div className="text-[11px] mt-1" style={{ color: 'var(--text-soft)' }}>
                Owner: Harpreet Singh
              </div>
              <button
                type="button"
                className="ky-tap-card mt-3 text-[12px] font-bold"
                style={{ color: 'var(--green)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                {strings.viewDetails}
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
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
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                {strings.recentActivity}
              </div>
              <div className="space-y-2">
                {[
                  { icon: '📢', text: 'Request posted', time: '2 hours ago', color: 'var(--saffron)' },
                  { icon: '🔔', text: '2 offers received', time: '1 hour ago', color: 'var(--saffron)' },
                  { icon: '✅', text: 'Booking confirmed', time: '30 min ago', color: 'var(--green)' }
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
    </div>
  );
}
