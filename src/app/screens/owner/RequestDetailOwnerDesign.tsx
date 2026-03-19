import { useLanguage } from '../../contexts/language';

export function RequestDetailOwnerDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({
      english: 'Request Details',
      hindi: 'अनुरोध विवरण',
      tamil: 'கோரிக்கை விவரங்கள்',
      marathi: 'विनंती तपशील'
    }),
    subtitle: t({
      english: 'Tractor Request',
      hindi: 'ट्रैक्टर अनुरोध',
      tamil: 'டிராக்டர் கோரிக்கை',
      marathi: 'ट्रॅक्टर विनंती'
    }),
    farmerProfile: t({
      english: 'Farmer Profile',
      hindi: 'किसान प्रोफाइल',
      tamil: 'விவசாயி சுயவிவரம்',
      marathi: 'शेतकरी प्रोफाइल'
    }),
    rating: t({ english: 'rating', hindi: 'रेटिंग', tamil: 'மதிப்பீடு', marathi: 'रेटिंग' }),
    bookingsCompleted: t({
      english: 'bookings completed',
      hindi: 'बुकिंग पूरी',
      tamil: 'முன்பதிவுகள் முடிந்தன',
      marathi: 'बुकिंग पूर्ण'
    }),
    away: t({ english: 'away', hindi: 'दूर', tamil: 'தொலைவில்', marathi: 'अंतरावर' }),
    call: t({ english: 'Call', hindi: 'कॉल', tamil: 'அழைப்பு', marathi: 'कॉल' }),
    whatsapp: t({ english: 'WhatsApp', hindi: 'व्हाट्सएप', tamil: 'வாட்ஸ்அப்', marathi: 'व्हॉट्सअॅप' }),
    requestDetails: t({
      english: 'Request Details',
      hindi: 'अनुरोध विवरण',
      tamil: 'கோரிக்கை விவரங்கள்',
      marathi: 'विनंती तपशील'
    }),
    equipment: t({ english: 'Equipment', hindi: 'उपकरण', tamil: 'உபகரணம்', marathi: 'उपकरण' }),
    dates: t({ english: 'Dates', hindi: 'तारीखें', tamil: 'தேதிகள்', marathi: 'तारखा' }),
    location: t({ english: 'Location', hindi: 'स्थान', tamil: 'இடம்', marathi: 'स्थान' }),
    budget: t({ english: 'Budget', hindi: 'बजट', tamil: 'பட்ஜெட்', marathi: 'बजेट' }),
    purpose: t({ english: 'Purpose', hindi: 'उद्देश्य', tamil: 'நோக்கம்', marathi: 'उद्देश' }),
    yourEquipmentMatch: t({
      english: 'Your Equipment Match',
      hindi: 'आपके उपकरण का मिलान',
      tamil: 'உங்கள் உபகரண பொருத்தம்',
      marathi: 'तुमच्या उपकरणाचे जुळणी'
    }),
    matchesRequest: t({
      english: 'Your Mahindra 475 DI matches this request',
      hindi: 'आपका महिंद्रा 475 DI इस अनुरोध से मेल खाता है',
      tamil: 'உங்கள் மஹிந்திரா 475 DI இந்த கோரிக்கையுடன் பொருந்துகிறது',
      marathi: 'तुमचा महिंद्रा 475 DI या विनंतीशी जुळतो'
    }),
    availableOnDates: t({
      english: '50 HP · Available on requested dates',
      hindi: '50 HP · अनुरोधित तारीखों पर उपलब्ध',
      tamil: '50 HP · கோரிய தேதிகளில் கிடைக்கும்',
      marathi: '50 HP · विनंती केलेल्या तारखांना उपलब्ध'
    }),
    estimatedEarnings: t({
      english: 'Estimated earnings',
      hindi: 'अनुमानित कमाई',
      tamil: 'மதிப்பிடப்பட்ட வருவாய்',
      marathi: 'अंदाजित कमाई'
    }),
    otherOffers: t({
      english: '1 other owner has sent an offer',
      hindi: '1 अन्य मालिक ने ऑफर भेजा है',
      tamil: '1 பிற உரிமையாளர் சலுகை அனுப்பியுள்ளார்',
      marathi: '1 इतर मालकाने ऑफर पाठवला आहे'
    }),
    skip: t({ english: 'Skip', hindi: 'छोड़ें', tamil: 'தவிர்', marathi: 'वगळा' }),
    sendOffer: t({ english: 'Send Offer', hindi: 'ऑफर भेजें', tamil: 'சலுகை அனுப்பு', marathi: 'ऑफर पाठवा' }),
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
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
            style={{ background: 'var(--gradient-green)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <button
                type="button"
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </button>
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Farmer Profile Card */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.farmerProfile}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px]"
                  style={{ background: 'linear-gradient(135deg, var(--green-pale), #C8EFD4)' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[14px] mb-0.5" style={{ color: 'var(--text-dark)' }}>
                    Ramu Kisan
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    ⭐ 4.7 {strings.rating} · 12 {strings.bookingsCompleted}
                  </div>
                  <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-soft)' }}>
                    📍 Hinganghat, Wardha · 3.5 km {strings.away}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="ky-tap-cta-secondary flex-1 rounded-xl py-2 text-[12px] font-semibold flex items-center justify-center gap-1.5"
                  style={{ background: 'var(--cream)', color: 'var(--text-dark)' }}
                >
                  📞 {strings.call}
                </button>
                <button
                  className="ky-tap-cta-secondary flex-1 rounded-xl py-2 text-[12px] font-semibold flex items-center justify-center gap-1.5"
                  style={{ background: '#E7F9EE', color: 'var(--green)' }}
                >
                  💬 {strings.whatsapp}
                </button>
              </div>
            </div>

            {/* Request Details Card */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.requestDetails}
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <span>🚜</span>
                    <span>{strings.equipment}</span>
                  </div>
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    50 HP Tractor with trailer
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <span>📅</span>
                    <span>{strings.dates}</span>
                  </div>
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    Mar 20 – Mar 23 (4 days)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <span>📍</span>
                    <span>{strings.location}</span>
                  </div>
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    Hinganghat · 10 km radius
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <span>💰</span>
                    <span>{strings.budget}</span>
                  </div>
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    ₹2,400/day
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <span>🌾</span>
                    <span>{strings.purpose}</span>
                  </div>
                  <div className="text-[13px] font-semibold text-right" style={{ color: 'var(--text-dark)' }}>
                    Wheat harvesting<br />
                    <span className="text-[10px] font-normal" style={{ color: 'var(--text-soft)' }}>Must have trailer hitch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Equipment Match Card */}
            <div
              className="rounded-[20px] p-4 mb-[14px]"
              style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green-light)' }}
            >
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--green)' }}>
                {strings.yourEquipmentMatch}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[16px]">✓</div>
                <div className="text-[13px] font-bold" style={{ color: 'var(--green)' }}>
                  {strings.matchesRequest}
                </div>
              </div>
              <div className="text-[11px] mb-2" style={{ color: 'var(--text-mid)' }}>
                {strings.availableOnDates}
              </div>
              <div
                className="rounded-xl p-2.5"
                style={{ background: 'rgba(255,255,255,0.7)' }}
              >
                <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                  {strings.estimatedEarnings}
                </div>
                <div className="text-[20px] font-bold" style={{ color: 'var(--green)' }}>
                  ₹9,600
                </div>
              </div>
            </div>

            {/* Other Offers Info */}
            <div
              className="rounded-xl p-3 mb-2 flex items-center gap-2"
              style={{ background: 'var(--cream)' }}
            >
              <div className="text-[14px]">👥</div>
              <div className="text-[11px]" style={{ color: 'var(--text-mid)' }}>
                {strings.otherOffers}
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="px-5 pb-5 pt-2 flex gap-3">
            <button
              className="ky-tap-cta-secondary flex-1 rounded-2xl py-[15px] font-bold text-[15px]"
              style={{
                background: 'white',
                color: 'var(--text-dark)',
                border: '2px solid #E8E3DA'
              }}
            >
              {strings.skip}
            </button>
            <button
              className="ky-tap-cta-primary flex-[2] rounded-2xl py-[15px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              📩 {strings.sendOffer}
            </button>
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
