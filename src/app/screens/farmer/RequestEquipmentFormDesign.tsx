import { useLanguage } from '../../contexts/language';

export function RequestEquipmentFormDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'Request Equipment', hindi: 'उपकरण अनुरोध', tamil: 'உபகரணம் கோரிக்கை', marathi: 'उपकरण विनंती' }),
    subtitle: t({ english: "Can't find what you need?", hindi: 'जो चाहिए वो नहीं मिला?', tamil: 'தேவையானது கிடைக்கவில்லையா?', marathi: 'जे हवे ते सापडत नाही?' }),
    equipmentType: t({ english: 'Equipment Type', hindi: 'उपकरण प्रकार', tamil: 'உபகரண வகை', marathi: 'उपकरण प्रकार' }),
    preferredModel: t({ english: 'Preferred Make / Model', hindi: 'पसंदीदा मेक / मॉडल', tamil: 'விரும்பிய மேக் / மாடல்', marathi: 'पसंतीचे मेक / मॉडेल' }),
    rentalDates: t({ english: 'Rental Dates', hindi: 'किराया तारीख', tamil: 'வாடகை தேதிகள்', marathi: 'भाडे तारखा' }),
    location: t({ english: 'Location', hindi: 'स्थान', tamil: 'இடம்', marathi: 'स्थान' }),
    change: t({ english: 'Change', hindi: 'बदलें', tamil: 'மாற்று', marathi: 'बदला' }),
    additionalDetails: t({ english: 'Additional Details', hindi: 'अतिरिक्त विवरण', tamil: 'கூடுதல் விவரங்கள்', marathi: 'अतिरिक्त तपशील' }),
    contact: t({ english: 'Contact Number', hindi: 'संपर्क नंबर', tamil: 'தொடர்பு எண்', marathi: 'संपर्क क्रमांक' }),
    verified: t({ english: 'Verified', hindi: 'सत्यापित', tamil: 'சரிபார்க்கப்பட்டது', marathi: 'सत्यापित' }),
    postRequest: t({ english: "Post Request — It's Free!", hindi: 'अनुरोध पोस्ट करें — मुफ़्त!', tamil: 'கோரிக்கை பதிவு — இலவசம்!', marathi: 'विनंती पोस्ट करा — मोफत!' }),
  };

  const equipmentTypes = [
    { emoji: '🚜', label: t({ english: 'Tractor', hindi: 'ट्रैक्टर', tamil: 'டிராக்டர்', marathi: 'ट्रॅक्टर' }), selected: true },
    { emoji: '🌾', label: t({ english: 'Harvester', hindi: 'हार्वेस्टर', tamil: 'அறுவடை இயந்திரம்', marathi: 'हार्वेस्टर' }), selected: false },
    { emoji: '🌱', label: t({ english: 'Cultivator', hindi: 'कल्टीवेटर', tamil: 'உழவு இயந்திரம்', marathi: 'कल्टिवेटर' }), selected: false },
    { emoji: '🚰', label: t({ english: 'Pump', hindi: 'पंप', tamil: 'பம்ப்', marathi: 'पंप' }), selected: false },
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

          {/* Scrollable Form Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Equipment Type */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                {strings.equipmentType}
              </div>
              <div className="flex flex-wrap gap-2">
                {equipmentTypes.map((type) => (
                  <button
                    key={type.label}
                    className="ky-tap-chip px-3 py-2 rounded-[12px] text-[11px] font-bold flex items-center gap-1.5"
                    style={{
                      background: type.selected ? 'var(--saffron)' : 'var(--cream)',
                      color: type.selected ? 'white' : 'var(--text-dark)',
                      border: type.selected ? '2px solid var(--saffron)' : '1.5px solid #E8E3DA'
                    }}
                  >
                    <span>{type.emoji}</span>
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Make/Model */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-2"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                {strings.preferredModel}
              </div>
              <div
                className="ky-tap-input w-full rounded-[12px] px-3 py-2.5 text-[12px]"
                style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA', color: 'var(--text-dark)' }}
              >
                50 HP Tractor with trailer
              </div>
            </div>

            {/* Rental Dates */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-2"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📅 {strings.rentalDates}
              </div>
              <div
                className="ky-tap-input w-full rounded-[12px] px-3 py-2.5 text-[12px] flex items-center justify-between"
                style={{ background: 'var(--saffron-pale)', border: '1.5px solid var(--saffron)', color: 'var(--saffron)' }}
              >
                <span className="font-bold">Mar 20 – Mar 23 (4 days)</span>
                <span>📅</span>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center justify-between mb-2">
                <div
                  className="text-[13px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                >
                  {strings.location}
                </div>
                <span
                  className="ky-tap-link text-[11px] font-bold cursor-pointer"
                  style={{ color: 'var(--saffron)' }}
                >
                  {strings.change}
                </span>
              </div>
              <div
                className="w-full rounded-[12px] px-3 py-2.5 text-[12px] flex items-center gap-2"
                style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA', color: 'var(--text-dark)' }}
              >
                <span>📍</span>
                <span className="font-semibold">Hinganghat, Wardha</span>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-2"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📝 {strings.additionalDetails}
              </div>
              <div
                className="ky-tap-input w-full rounded-[12px] px-3 py-2.5 text-[11px] leading-relaxed"
                style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA', color: 'var(--text-dark)', minHeight: '60px' }}
              >
                Need for wheat harvesting. Must have trailer hitch.
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-2"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📞 {strings.contact}
              </div>
              <div
                className="w-full rounded-[12px] px-3 py-2.5 text-[12px] flex items-center justify-between"
                style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA', color: 'var(--text-dark)' }}
              >
                <span className="font-semibold">+91 98765 43210</span>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                >
                  ✓ {strings.verified}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-4 pb-4">
            <div
              className="ky-tap-cta-primary w-full text-white rounded-[14px] py-3.5 text-[13px] font-bold text-center cursor-pointer"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              📢 {strings.postRequest}
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
