import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function EquipmentOpportunitiesDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({
      english: 'Equipment Opportunities',
      hindi: 'उपकरण अवसर',
      tamil: 'உபகரண வாய்ப்புகள்',
      marathi: 'उपकरण संधी'
    }),
    subtitle: t({
      english: 'Farmers need your equipment',
      hindi: 'किसानों को आपके उपकरण चाहिए',
      tamil: 'விவசாயிகளுக்கு உங்கள் உபகரணங்கள் தேவை',
      marathi: 'शेतकऱ्यांना तुमची उपकरणे हवी आहेत'
    }),
    requests: t({ english: 'Requests', hindi: 'अनुरोध', tamil: 'கோரிக்கைகள்', marathi: 'विनंत्या' }),
    potential: t({ english: 'Potential', hindi: 'संभावित', tamil: 'சாத்தியமான', marathi: 'संभाव्य' }),
    newToday: t({ english: 'New', hindi: 'नया', tamil: 'புதிய', marathi: 'नवीन' }),
    all: t({ english: 'All', hindi: 'सभी', tamil: 'அனைத்தும்', marathi: 'सर्व' }),
    matching: t({ english: 'Matching', hindi: 'मेल खाता', tamil: 'பொருத்தம்', marathi: 'जुळणारे' }),
    newTab: t({ english: 'New', hindi: 'नया', tamil: 'புதிய', marathi: 'नवीन' }),
    matchesBadge: t({
      english: 'MATCHES YOUR EQUIPMENT',
      hindi: 'आपके उपकरण से मेल',
      tamil: 'உங்கள் உபகரணத்துடன் பொருந்துகிறது',
      marathi: 'तुमच्या उपकरणाशी जुळते'
    }),
    needed: t({ english: 'needed', hindi: 'चाहिए', tamil: 'தேவை', marathi: 'हवे' }),
    budget: t({ english: 'Budget', hindi: 'बजट', tamil: 'பட்ஜெட்', marathi: 'बजेट' }),
    yourPotential: t({ english: 'Your Potential', hindi: 'आपकी संभावित कमाई', tamil: 'உங்கள் சாத்தியம்', marathi: 'तुमची संभाव्य कमाई' }),
    viewDetails: t({ english: 'View Details', hindi: 'विवरण देखें', tamil: 'விவரங்களைக் காண்க', marathi: 'तपशील पहा' }),
    sendOffer: t({ english: 'Send Offer', hindi: 'ऑफर भेजें', tamil: 'சலுகை அனுப்பு', marathi: 'ऑफर पाठवा' }),
    days: t({ english: 'days', hindi: 'दिन', tamil: 'நாட்கள்', marathi: 'दिवस' }),
    day: t({ english: 'day', hindi: 'दिन', tamil: 'நாள்', marathi: 'दिवस' }),
  };

  const requests = [
    {
      id: 1,
      urgent: true,
      matchesEquipment: true,
      icon: '🚜',
      title: `50 HP Tractor ${strings.needed}`,
      farmer: 'Ramu Kisan',
      distance: '3.5 km',
      rating: '4.7',
      dates: 'Mar 20–23',
      duration: `4 ${strings.days}`,
      budget: '₹2,400/day',
      potential: '₹9,600',
    },
    {
      id: 2,
      urgent: false,
      matchesEquipment: false,
      icon: '🌾',
      title: `Combine Harvester ${strings.needed}`,
      farmer: 'Suresh Patil',
      distance: '8 km',
      rating: null,
      dates: 'Mar 25–28',
      duration: `4 ${strings.days}`,
      budget: '₹5,000/day',
      potential: null,
    },
    {
      id: 3,
      urgent: false,
      matchesEquipment: false,
      icon: '🚜',
      title: `Tractor with Rotavator`,
      farmer: 'Lakshmi Devi',
      distance: '12 km',
      rating: null,
      dates: 'Mar 22',
      duration: `1 ${strings.day}`,
      budget: '₹1,200/hr',
      potential: null,
    },
  ];

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
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-5 pt-4 pb-[50px] rounded-b-[36px]"
            style={{ background: 'var(--gradient-green)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <button
                type="button"
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </button>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  💰 {strings.subtitle}
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.title}
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-2">
              <div
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">5</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.requests}
                </div>
              </div>
              <div
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">₹48K</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.potential}
                </div>
              </div>
              <div
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">3</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.newToday}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-6">
            {/* Filter Tabs */}
            <div className="flex bg-white rounded-[20px] mb-4 p-1" style={{ boxShadow: 'var(--card-shadow)' }}>
              <button
                className="ky-tap-tab flex-1 py-2 text-center text-[11px] font-semibold rounded-[14px] text-white"
                style={{ background: 'var(--green)' }}
              >
                {strings.all} (5)
              </button>
              <button
                className="ky-tap-tab flex-1 py-2 text-center text-[11px] font-semibold"
                style={{ color: 'var(--text-soft)' }}
              >
                {strings.matching} (2)
              </button>
              <button
                className="ky-tap-tab flex-1 py-2 text-center text-[11px] font-semibold"
                style={{ color: 'var(--text-soft)' }}
              >
                {strings.newTab} (3)
              </button>
            </div>

            {/* Request Cards */}
            {requests.map((request) => (
              <div
                key={request.id}
                className="ky-tap-card bg-white rounded-[20px] p-4 mb-3"
                style={{
                  boxShadow: 'var(--card-shadow)',
                  borderLeft: request.urgent ? '4px solid var(--saffron)' : 'none'
                }}
              >
                {/* Match Badge */}
                {request.matchesEquipment && (
                  <div
                    className="inline-block rounded-[8px] px-2 py-1 text-[9px] font-bold mb-3"
                    style={{ background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-light)' }}
                  >
                    ✓ {strings.matchesBadge}
                  </div>
                )}

                {/* Equipment Title */}
                <div className="flex items-center gap-2 mb-2.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-[20px] flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                  >
                    {request.icon}
                  </div>
                  <div
                    className="text-[14px] font-bold"
                    style={{ color: 'var(--text-dark)', fontFamily: "'Baloo 2', cursive" }}
                  >
                    {request.title}
                  </div>
                </div>

                {/* Farmer Info */}
                <div className="text-[11px] mb-2" style={{ color: 'var(--text-mid)' }}>
                  {request.farmer} · 📍 {request.distance}
                  {request.rating && <span> · ⭐ {request.rating}</span>}
                </div>

                {/* Date / Duration / Budget */}
                <div className="flex gap-2 flex-wrap mb-3">
                  <div
                    className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    📅 {request.dates}
                  </div>
                  <div
                    className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    ⏰ {request.duration}
                  </div>
                  <div
                    className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    💰 {strings.budget}: {request.budget}
                  </div>
                </div>

                {/* Potential Earnings (only for matched) */}
                {request.potential && (
                  <div
                    className="rounded-xl p-2.5 mb-3"
                    style={{ background: 'var(--green-pale)' }}
                  >
                    <div className="text-[12px] font-bold" style={{ color: 'var(--green)' }}>
                      {strings.yourPotential}: {request.potential}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {request.matchesEquipment ? (
                  <div className="flex gap-2">
                    <button
                      className="ky-tap-link flex-1 rounded-[10px] py-2 text-[11px] font-bold text-center"
                      style={{ background: 'var(--cream)', color: 'var(--text-dark)' }}
                    >
                      {strings.viewDetails}
                    </button>
                    <button
                      className="ky-tap-action-confirm flex-1 rounded-[10px] py-2 text-[11px] font-bold text-white text-center"
                      style={{
                        background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                        boxShadow: '0 3px 10px rgba(26,122,59,0.3)'
                      }}
                    >
                      📩 {strings.sendOffer}
                    </button>
                  </div>
                ) : (
                  <button
                    className="ky-tap-link text-[11px] font-semibold"
                    style={{ color: 'var(--green)' }}
                  >
                    {strings.viewDetails} →
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Nav */}
          <OwnerBottomNav activeTab="equipment" />

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
