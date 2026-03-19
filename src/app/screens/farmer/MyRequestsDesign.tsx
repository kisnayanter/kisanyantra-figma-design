import { useLanguage } from '../../contexts/language';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function MyRequestsDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'My Requests', hindi: 'मेरे अनुरोध', tamil: 'எனது கோரிக்கைகள்', marathi: 'माझ्या विनंत्या' }),
    subtitle: t({ english: 'Track your equipment needs', hindi: 'अपनी उपकरण आवश्यकताओं को ट्रैक करें', tamil: 'உங்கள் உபகரணத் தேவைகளைக் கண்காணிக்கவும்', marathi: 'तुमच्या उपकरण गरजांचा मागोवा घ्या' }),
    active: t({ english: 'Active', hindi: 'सक्रिय', tamil: 'செயலில்', marathi: 'सक्रिय' }),
    fulfilled: t({ english: 'Fulfilled', hindi: 'पूर्ण', tamil: 'நிறைவேறியது', marathi: 'पूर्ण' }),
    expired: t({ english: 'Expired', hindi: 'समाप्त', tamil: 'காலாவதி', marathi: 'कालबाह्य' }),
    offersReceived: t({ english: 'offers received', hindi: 'ऑफर मिले', tamil: 'சலுகைகள் கிடைத்தன', marathi: 'ऑफर आले' }),
    viewOffers: t({ english: 'View Offers', hindi: 'ऑफर देखें', tamil: 'சலுகைகள் காண்க', marathi: 'ऑफर पहा' }),
    searching: t({ english: 'Searching...', hindi: 'खोज रहे हैं...', tamil: 'தேடுகிறது...', marathi: 'शोधत आहे...' }),
    posted: t({ english: 'posted', hindi: 'पोस्ट किया', tamil: 'பதிவு செய்யப்பட்டது', marathi: 'पोस्ट केले' }),
    radius: t({ english: 'radius', hindi: 'दायरा', tamil: 'ஆரம்', marathi: 'परिसर' }),
    days: t({ english: 'days', hindi: 'दिन', tamil: 'நாட்கள்', marathi: 'दिवस' }),
    tip: t({ english: 'Share your request on WhatsApp to get faster responses', hindi: 'तेज़ जवाब पाने के लिए WhatsApp पर अपना अनुरोध शेयर करें', tamil: 'விரைவான பதிலைப் பெற WhatsApp இல் உங்கள் கோரிக்கையைப் பகிரவும்', marathi: 'जलद प्रतिसाद मिळवण्यासाठी WhatsApp वर तुमची विनंती शेअर करा' }),
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

          {/* Header with Saffron Gradient */}
          <div
            className="px-5 pt-4 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  📋 {strings.subtitle}
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.title}
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Tabs */}
            <div className="flex bg-white rounded-[20px] mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="ky-tap-tab flex-1 py-3 text-center text-xs font-semibold rounded-l-[20px]"
                style={{ color: 'var(--green)', background: 'var(--green-pale)' }}
              >
                {strings.active} (2)
              </div>
              <div className="ky-tap-tab flex-1 py-3 text-center text-xs font-semibold" style={{ color: 'var(--text-soft)' }}>
                {strings.fulfilled} (3)
              </div>
              <div className="ky-tap-tab flex-1 py-3 text-center text-xs font-semibold rounded-r-[20px]" style={{ color: 'var(--text-soft)' }}>
                {strings.expired} (1)
              </div>
            </div>

            {/* Card 1 — Has Offers */}
            <div
              className="ky-tap-card bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)', borderLeft: '4px solid var(--saffron)' }}
            >
              <div className="flex items-start gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[20px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  🚜
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-0.5">
                    <div
                      className="text-[13px] font-bold"
                      style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                    >
                      50 HP Tractor
                    </div>
                    <div
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                    >
                      2 {strings.offersReceived}
                    </div>
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    Hinganghat, Wardha
                  </div>
                  <div className="text-[10px] mt-1" style={{ color: 'var(--text-mid)' }}>
                    Mar 20–23 · 4 {strings.days}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center justify-between mt-2 pt-2"
                style={{ borderTop: '1px solid #F5F2ED' }}
              >
                <div className="flex gap-2">
                  <span
                    className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    10 km {strings.radius}
                  </span>
                  <span
                    className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    {strings.posted} 2h ago
                  </span>
                </div>
                <span
                  className="ky-tap-link text-[11px] font-bold cursor-pointer"
                  style={{ color: 'var(--saffron)' }}
                >
                  {strings.viewOffers} →
                </span>
              </div>
            </div>

            {/* Card 2 — No Offers Yet */}
            <div
              className="ky-tap-card bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-start gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[20px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)' }}
                >
                  🌾
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-0.5">
                    <div
                      className="text-[13px] font-bold"
                      style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                    >
                      Combine Harvester
                    </div>
                    <div
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--saffron)', animation: 'pulse 1.5s infinite' }}
                      />
                      {strings.searching}
                    </div>
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    Wardha
                  </div>
                  <div className="text-[10px] mt-1" style={{ color: 'var(--text-mid)' }}>
                    Mar 25–28 · 4 {strings.days}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center justify-between mt-2 pt-2"
                style={{ borderTop: '1px solid #F5F2ED' }}
              >
                <div className="flex gap-2">
                  <span
                    className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    {strings.posted} 5h ago
                  </span>
                </div>
              </div>
            </div>

            {/* Tip Card */}
            <div
              className="rounded-[16px] p-3 flex items-center gap-3"
              style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)' }}
            >
              <div className="text-[18px]">💡</div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold" style={{ color: 'var(--green)' }}>
                  {strings.tip}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <FarmerBottomNav activeTab="bookings" />

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
