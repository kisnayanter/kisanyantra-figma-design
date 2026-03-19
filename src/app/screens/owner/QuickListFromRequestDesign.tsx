import { useLanguage } from '../../contexts/language';

export function QuickListFromRequestDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'Quick List Equipment', hindi: 'जल्दी उपकरण सूचीबद्ध करें', tamil: 'விரைவு பட்டியல் உபகரணம்', marathi: 'जलद उपकरण सूचीबद्ध करा' }),
    subtitle: t({ english: 'A farmer nearby needs this!', hindi: 'पास के किसान को ज़रूरत है!', tamil: 'அருகிலுள்ள விவசாயிக்கு இது தேவை!', marathi: 'जवळच्या शेतकऱ्याला हे हवे आहे!' }),
    urgencyMsg: t({ english: 'Ramu Kisan needs a 50 HP tractor in Hinganghat', hindi: 'रामू किसान को हिंगणघाट में 50 HP ट्रैक्टर चाहिए', tamil: 'ராமு கிசான் ஹிங்கன்காட்டில் 50 HP டிராக்டர் தேவை', marathi: 'रामू किसानला हिंगणघाटमध्ये 50 HP ट्रॅक्टर हवा' }),
    urgencyCta: t({ english: "List yours now — they're ready to book!", hindi: 'अभी सूचीबद्ध करें — वे बुक करने को तैयार हैं!', tamil: 'இப்போது பட்டியலிடுங்கள் — அவர்கள் புக் செய்ய தயாராக உள்ளனர்!', marathi: 'आता सूचीबद्ध करा — ते बुक करायला तयार आहेत!' }),
    potentialEarnings: t({ english: 'Potential earnings:', hindi: 'संभावित कमाई:', tamil: 'சாத்தியமான வருமானம்:', marathi: 'संभाव्य कमाई:' }),
    equipmentType: t({ english: 'Equipment Type', hindi: 'उपकरण प्रकार', tamil: 'உபகரண வகை', marathi: 'उपकरण प्रकार' }),
    equipmentDetails: t({ english: 'Equipment Details', hindi: 'उपकरण विवरण', tamil: 'உபகரண விவரங்கள்', marathi: 'उपकरण तपशील' }),
    brandModel: t({ english: 'Brand & Model', hindi: 'ब्रांड और मॉडल', tamil: 'பிராண்ட் & மாடல்', marathi: 'ब्रँड आणि मॉडेल' }),
    horsePower: t({ english: 'Horse Power', hindi: 'अश्वशक्ति', tamil: 'குதிரைத்திறன்', marathi: 'अश्वशक्ती' }),
    year: t({ english: 'Year', hindi: 'वर्ष', tamil: 'ஆண்டு', marathi: 'वर्ष' }),
    photos: t({ english: 'Photos', hindi: 'तस्वीरें', tamil: 'புகைப்படங்கள்', marathi: 'फोटो' }),
    addPhoto: t({ english: 'Add Photo', hindi: 'फ़ोटो जोड़ें', tamil: 'புகைப்படம் சேர்', marathi: 'फोटो जोडा' }),
    pricing: t({ english: 'Pricing', hindi: 'मूल्य', tamil: 'விலை நிர்ணயம்', marathi: 'किंमत' }),
    suggestedPrice: t({ english: 'Suggested price based on request', hindi: 'अनुरोध के आधार पर सुझाई गई कीमत', tamil: 'கோரிக்கையின் அடிப்படையில் பரிந்துரைக்கப்பட்ட விலை', marathi: 'विनंतीनुसार सुचवलेली किंमत' }),
    perDay: t({ english: 'Per Day', hindi: 'प्रति दिन', tamil: 'ஒரு நாளுக்கு', marathi: 'प्रति दिन' }),
    matchesBudget: t({ english: "Matches farmer's budget", hindi: 'किसान के बजट से मेल खाता है', tamil: 'விவசாயியின் பட்ஜெட்டுடன் பொருந்துகிறது', marathi: 'शेतकऱ्याच्या बजेटशी जुळते' }),
    location: t({ english: 'Location', hindi: 'स्थान', tamil: 'இடம்', marathi: 'स्थान' }),
    usesProfileLocation: t({ english: 'Uses your profile location', hindi: 'आपके प्रोफ़ाइल का स्थान उपयोग करता है', tamil: 'உங்கள் சுயவிவர இருப்பிடத்தைப் பயன்படுத்துகிறது', marathi: 'तुमच्या प्रोफाइलचे स्थान वापरते' }),
    listAndSend: t({ english: 'List & Send Offer to Ramu', hindi: 'सूचीबद्ध करें और रामू को ऑफ़र भेजें', tamil: 'பட்டியலிடு & ராமுவுக்கு சலுகை அனுப்பு', marathi: 'सूचीबद्ध करा आणि रामूला ऑफर पाठवा' }),
    freeToList: t({ english: 'Free to list · No commission for first booking', hindi: 'मुफ़्त सूचीबद्ध · पहली बुकिंग पर कोई कमीशन नहीं', tamil: 'இலவச பட்டியல் · முதல் புக்கிங்கிற்கு கமிஷன் இல்லை', marathi: 'मोफत सूचीबद्ध · पहिल्या बुकिंगवर कमिशन नाही' }),
  };

  const equipmentTypes = [
    { emoji: '🚜', label: t({ english: 'Tractor', hindi: 'ट्रैक्टर', tamil: 'டிராக்டர்', marathi: 'ट्रॅक्टर' }), selected: true },
    { emoji: '🌾', label: t({ english: 'Harvester', hindi: 'हार्वेस्टर', tamil: 'அறுவடை', marathi: 'हार्वेस्टर' }), selected: false },
    { emoji: '🌱', label: t({ english: 'Cultivator', hindi: 'कल्टीवेटर', tamil: 'உழவு', marathi: 'कल्टिवेटर' }), selected: false },
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
            <span className="font-bold text-[11px]">9:53</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header — Green gradient */}
          <div
            className="px-5 pt-4 pb-6 rounded-b-[36px]"
            style={{ background: 'var(--gradient-green)' }}
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
                  🚜 {strings.subtitle}
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
            {/* Urgency Banner */}
            <div
              className="rounded-[18px] p-4 mb-3"
              style={{ background: 'var(--saffron-pale)', border: '1.5px solid var(--saffron)' }}
            >
              <div className="text-[12px] font-bold mb-1" style={{ color: 'var(--saffron)' }}>
                ⚡ {strings.urgencyMsg}
              </div>
              <div className="text-[11px] mb-2" style={{ color: 'var(--text-mid)' }}>
                {strings.urgencyCta}
              </div>
              <div className="text-[13px] font-bold" style={{ color: 'var(--green)' }}>
                {strings.potentialEarnings} ₹9,600
              </div>
            </div>

            {/* Equipment Type Card (pre-selected) */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                {strings.equipmentType}
              </div>
              <div className="flex gap-2">
                {equipmentTypes.map((type) => (
                  <div
                    key={type.label}
                    className="ky-tap-chip flex-1 rounded-xl py-3 text-center"
                    style={{
                      background: type.selected ? 'var(--green-pale)' : 'var(--cream)',
                      border: type.selected ? '2px solid var(--green)' : '2px solid #E8E3DA'
                    }}
                  >
                    <div className="text-2xl mb-1">{type.emoji}</div>
                    <div
                      className="text-[11px] font-semibold"
                      style={{ color: type.selected ? 'var(--green)' : 'var(--text-dark)' }}
                    >
                      {type.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Details Card */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                🔧 {strings.equipmentDetails}
              </div>
              <div className="space-y-3">
                {[
                  { label: strings.brandModel, placeholder: 'e.g. Mahindra 475 DI', icon: '🏭' },
                  { label: strings.horsePower, placeholder: 'e.g. 50 HP', icon: '⚡' },
                  { label: strings.year, placeholder: 'e.g. 2020', icon: '📅' },
                ].map((field) => (
                  <div key={field.label}>
                    <div className="text-[10px] font-semibold mb-1.5" style={{ color: 'var(--text-soft)' }}>
                      {field.label}
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span className="text-base flex-shrink-0">{field.icon}</span>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        readOnly
                        className="flex-1 text-[13px] font-semibold bg-transparent outline-none"
                        style={{ color: 'var(--text-soft)' }}
                      />
                    </div>
                    <div className="mt-1.5" style={{ borderBottom: '1px solid #F5F2ED' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Upload Card */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📷 {strings.photos}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div
                  className="ky-tap-upload aspect-square rounded-xl flex flex-col items-center justify-center"
                  style={{ background: 'var(--green-pale)', border: '2px dashed var(--green)' }}
                >
                  <div className="text-2xl mb-1">📷</div>
                  <div className="text-[9px] font-semibold" style={{ color: 'var(--green)' }}>
                    {strings.addPhoto}
                  </div>
                </div>
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--cream)', border: '2px solid #E8E3DA' }}
                  >
                    <span className="text-[20px]" style={{ opacity: 0.3 }}>+</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-1"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💰 {strings.pricing}
              </div>
              <div className="text-[10px] mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.suggestedPrice}
              </div>
              <div
                className="rounded-xl p-3 mb-2"
                style={{ background: 'var(--green-pale)', border: '2px solid var(--green)' }}
              >
                <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                  {strings.perDay}
                </div>
                <div className="text-[18px] font-bold" style={{ color: 'var(--green)' }}>
                  ₹2,400
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                >
                  ✓ {strings.matchesBudget}
                </span>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-2"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                {strings.location}
              </div>
              <div className="text-[10px] mb-2" style={{ color: 'var(--text-soft)' }}>
                📍 {strings.usesProfileLocation}
              </div>
              <div
                className="w-full rounded-[12px] px-3 py-2.5 text-[12px] flex items-center gap-2"
                style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA', color: 'var(--text-dark)' }}
              >
                <span>📍</span>
                <span className="font-semibold">Hinganghat, Wardha, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-4 pb-4">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[15px] font-bold text-[14px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              ✓ {strings.listAndSend}
            </button>
            <div className="text-center mt-2 text-[10px]" style={{ color: 'var(--text-soft)' }}>
              {strings.freeToList}
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
