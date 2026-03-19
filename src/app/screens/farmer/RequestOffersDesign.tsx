import { useLanguage } from '../../contexts/language';

export function RequestOffersDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'Offers for Your Request', hindi: 'आपके अनुरोध के लिए ऑफर', tamil: 'உங்கள் கோரிக்கைக்கான சலுகைகள்', marathi: 'तुमच्या विनंतीसाठी ऑफर' }),
    subtitle: t({ english: '50 HP Tractor', hindi: '50 HP ट्रैक्टर', tamil: '50 HP டிராக்டர்', marathi: '50 HP ट्रॅक्टर' }),
    offersCount: t({ english: '2 offers', hindi: '2 ऑफर', tamil: '2 சலுகைகள்', marathi: '2 ऑफर' }),
    sortBy: t({ english: 'Sort by: Best match', hindi: 'क्रमबद्ध: सर्वश्रेष्ठ मिलान', tamil: 'வரிசைப்படுத்து: சிறந்த பொருத்தம்', marathi: 'क्रमवारी: सर्वोत्तम जुळणी' }),
    bestMatch: t({ english: 'Best Match', hindi: 'सर्वश्रेष्ठ मिलान', tamil: 'சிறந்த பொருத்தம்', marathi: 'सर्वोत्तम जुळणी' }),
    reviews: t({ english: 'reviews', hindi: 'समीक्षाएं', tamil: 'மதிப்புரைகள்', marathi: 'पुनरावलोकने' }),
    kmAway: t({ english: 'km away', hindi: 'किमी दूर', tamil: 'கி.மீ தொலைவில்', marathi: 'किमी दूर' }),
    perDay: t({ english: '/day', hindi: '/दिन', tamil: '/நாள்', marathi: '/दिवस' }),
    total: t({ english: 'total', hindi: 'कुल', tamil: 'மொத்தம்', marathi: 'एकूण' }),
    days: t({ english: 'days', hindi: 'दिन', tamil: 'நாட்கள்', marathi: 'दिवस' }),
    operatorIncluded: t({ english: 'Operator included', hindi: 'ऑपरेटर शामिल', tamil: 'ஆப்பரேட்டர் சேர்க்கப்பட்டுள்ளது', marathi: 'ऑपरेटर समाविष्ट' }),
    trailerHitch: t({ english: 'Trailer hitch', hindi: 'ट्रेलर हिच', tamil: 'டிரெய்லர் ஹிட்ச்', marathi: 'ट्रेलर हिच' }),
    selfDriveOnly: t({ english: 'Self-drive only', hindi: 'केवल स्वयं चालन', tamil: 'சுய ஓட்டுநர் மட்டும்', marathi: 'फक्त स्वतः चालवा' }),
    available: t({ english: 'Available Mar 20–23', hindi: 'उपलब्ध मार्च 20–23', tamil: 'மார்ச் 20–23 கிடைக்கும்', marathi: 'मार्च 20–23 उपलब्ध' }),
    availablePartial: t({ english: 'Available Mar 20–22 only', hindi: 'केवल मार्च 20–22 उपलब्ध', tamil: 'மார்ச் 20–22 மட்டும் கிடைக்கும்', marathi: 'फक्त मार्च 20–22 उपलब्ध' }),
    chat: t({ english: 'Chat', hindi: 'चैट', tamil: 'அரட்டை', marathi: 'चॅट' }),
    acceptOffer: t({ english: 'Accept Offer', hindi: 'ऑफर स्वीकार करें', tamil: 'சலுகையை ஏற்கவும்', marathi: 'ऑफर स्वीकारा' }),
    viewDetails: t({ english: 'View Details', hindi: 'विवरण देखें', tamil: 'விவரங்களைக் காண்க', marathi: 'तपशील पहा' }),
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
            <span className="font-bold text-[11px]">9:46</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Saffron gradient */}
          <div
            className="px-5 pt-4 pb-5 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.title}
                </div>
              </div>
            </div>

            {/* Request summary */}
            <div
              className="rounded-[16px] p-3 flex items-center justify-between"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[18px]">🚜</span>
                <span className="text-white text-[13px] font-semibold">
                  {strings.subtitle} · Hinganghat
                </span>
              </div>
              <div
                className="rounded-full px-3 py-1 text-[10px] font-bold text-white"
                style={{ background: 'rgba(255,255,255,0.25)' }}
              >
                {strings.offersCount}
              </div>
            </div>
          </div>

          {/* Sort/Filter Bar */}
          <div className="px-5 pt-4 pb-2 flex items-center justify-end">
            <div
              className="ky-tap-chip text-[12px] font-semibold px-3 py-1.5 rounded-[10px] flex items-center gap-1"
              style={{ border: '1px solid #E0D9CF', color: 'var(--text-dark)', background: '#FFF' }}
            >
              {strings.sortBy}
              <span aria-hidden="true">▾</span>
            </div>
          </div>

          {/* Offer Cards */}
          <div className="flex-1 overflow-y-auto px-4 pb-5">
            {/* Offer 1 — Best Match */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              {/* Best Match Badge */}
              <div className="flex items-center justify-between mb-3">
                <div
                  className="rounded-full px-3 py-1 text-[10px] font-bold"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                >
                  ✓ {strings.bestMatch}
                </div>
              </div>

              {/* Owner Info */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{ background: 'linear-gradient(135deg, var(--saffron), var(--gold))' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Harpreet Singh
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    ⭐ 4.7 (24 {strings.reviews})
                  </div>
                </div>
              </div>

              {/* Equipment */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[14px]">🚜</span>
                <span className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  Mahindra 475 DI · 50 HP
                </span>
              </div>

              {/* Distance */}
              <div className="text-[11px] mb-3" style={{ color: 'var(--text-mid)' }}>
                📍 3.5 {strings.kmAway}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-3">
                <div className="text-[20px] font-bold" style={{ color: 'var(--saffron)', fontFamily: "'Baloo 2', cursive" }}>
                  ₹2,400{strings.perDay}
                </div>
                <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                  ₹9,600 {strings.total} · 4 {strings.days}
                </div>
              </div>

              {/* Feature Chips */}
              <div className="flex gap-2 flex-wrap mb-3">
                <div
                  className="ky-tap-chip rounded-[10px] px-[10px] py-1 text-[10px] font-semibold"
                  style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)', color: 'var(--green)' }}
                >
                  ✓ {strings.operatorIncluded}
                </div>
                <div
                  className="ky-tap-chip rounded-[10px] px-[10px] py-1 text-[10px] font-semibold"
                  style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)', color: 'var(--green)' }}
                >
                  ✓ {strings.trailerHitch}
                </div>
              </div>

              {/* Availability */}
              <div
                className="rounded-lg px-3 py-1.5 text-[10px] font-semibold mb-4 inline-block"
                style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
              >
                {strings.available} ✓
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <div
                  className="ky-tap-cta-secondary flex-1 rounded-[12px] py-2.5 text-[11px] font-bold text-center"
                  style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
                >
                  💬 {strings.chat}
                </div>
                <div
                  className="ky-tap-action-confirm flex-1 rounded-[12px] py-2.5 text-[11px] font-bold text-center text-white"
                  style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 4px 16px rgba(26,122,59,0.3)' }}
                >
                  ✓ {strings.acceptOffer}
                </div>
              </div>
            </div>

            {/* Offer 2 */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              {/* Owner Info */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{ background: 'linear-gradient(135deg, var(--saffron), var(--gold))' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Suresh Patil
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    ⭐ 4.5 (18 {strings.reviews})
                  </div>
                </div>
              </div>

              {/* Equipment */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[14px]">🚜</span>
                <span className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  John Deere 5310 · 55 HP
                </span>
              </div>

              {/* Distance */}
              <div className="text-[11px] mb-3" style={{ color: 'var(--text-mid)' }}>
                📍 8.2 {strings.kmAway}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-3">
                <div className="text-[20px] font-bold" style={{ color: 'var(--saffron)', fontFamily: "'Baloo 2', cursive" }}>
                  ₹2,800{strings.perDay}
                </div>
                <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                  ₹11,200 {strings.total}
                </div>
              </div>

              {/* Feature Chips */}
              <div className="flex gap-2 flex-wrap mb-3">
                <div
                  className="ky-tap-chip rounded-[10px] px-[10px] py-1 text-[10px] font-semibold"
                  style={{ background: 'white', border: '1.5px solid #E8E3DA', color: 'var(--text-mid)' }}
                >
                  ✓ {strings.selfDriveOnly}
                </div>
              </div>

              {/* Availability — warning (partial) */}
              <div
                className="rounded-lg px-3 py-1.5 text-[10px] font-semibold mb-4 inline-block"
                style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
              >
                {strings.availablePartial}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <div
                  className="ky-tap-cta-secondary flex-1 rounded-[12px] py-2.5 text-[11px] font-bold text-center"
                  style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
                >
                  💬 {strings.chat}
                </div>
                <div
                  className="ky-tap-link flex-1 rounded-[12px] py-2.5 text-[11px] font-bold text-center"
                  style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                >
                  {strings.viewDetails} →
                </div>
              </div>
            </div>
          </div>

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
