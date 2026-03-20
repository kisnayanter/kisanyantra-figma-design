import { useLanguage } from '../../contexts/language';

export function RequestExpiredDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    headerTitle: t({ english: 'Request Expired', hindi: 'अनुरोध समाप्त', tamil: 'கோரிக்கை காலாவதியானது', marathi: 'विनंती कालबाह्य' }),
    expiredTitle: t({ english: 'Request Expired', hindi: 'अनुरोध समाप्त हो गया', tamil: 'கோரிக்கை காலாவதியானது', marathi: 'विनंती कालबाह्य झाली' }),
    expiredSubtitle: t({
      english: 'Your tractor request did not receive any matching offers within the time limit',
      hindi: 'आपके ट्रैक्टर अनुरोध को समय सीमा के भीतर कोई मिलान प्रस्ताव नहीं मिला',
      tamil: 'உங்கள் டிராக்டர் கோரிக்கைக்கு நேர வரம்பிற்குள் எந்த பொருத்தமான சலுகையும் கிடைக்கவில்லை',
      marathi: 'तुमच्या ट्रॅक्टर विनंतीला वेळेच्या मर्यादेत कोणतेही जुळणारे ऑफर मिळाले नाहीत'
    }),
    equipmentLabel: t({ english: 'Equipment', hindi: 'उपकरण', tamil: 'கருவி', marathi: 'उपकरण' }),
    equipmentValue: t({ english: '50 HP Tractor', hindi: '50 HP ट्रैक्टर', tamil: '50 HP டிராக்டர்', marathi: '50 HP ट्रॅक्टर' }),
    locationLabel: t({ english: 'Location', hindi: 'स्थान', tamil: 'இடம்', marathi: 'स्थान' }),
    datesLabel: t({ english: 'Dates', hindi: 'तारीख', tamil: 'தேதிகள்', marathi: 'तारखा' }),
    datesValue: t({ english: 'Mar 20-23 (4 days)', hindi: 'मार्च 20-23 (4 दिन)', tamil: 'மார்ச் 20-23 (4 நாட்கள்)', marathi: 'मार्च 20-23 (4 दिवस)' }),
    radiusLabel: t({ english: 'Radius', hindi: 'दायरा', tamil: 'ஆரம்', marathi: 'त्रिज्या' }),
    statusExpired: t({ english: 'EXPIRED', hindi: 'समाप्त', tamil: 'காலாவதி', marathi: 'कालबाह्य' }),
    postedExpired: t({
      english: 'Posted on Mar 18 · Expired on Mar 20',
      hindi: 'मार्च 18 को पोस्ट · मार्च 20 को समाप्त',
      tamil: 'மார்ச் 18 அன்று பதிவு · மார்ச் 20 அன்று காலாவதி',
      marathi: 'मार्च 18 रोजी पोस्ट · मार्च 20 रोजी कालबाह्य'
    }),
    tipsTitle: t({ english: 'Tips to get more offers', hindi: 'अधिक प्रस्ताव पाने के सुझाव', tamil: 'மேலும் சலுகைகள் பெற குறிப்புகள்', marathi: 'अधिक ऑफर मिळवण्यासाठी टिप्स' }),
    tip1: t({
      english: 'Expand your search radius to 50-100 km',
      hindi: 'अपना खोज दायरा 50-100 किमी तक बढ़ाएं',
      tamil: 'உங்கள் தேடல் ஆரத்தை 50-100 கி.மீ. வரை விரிவுபடுத்தவும்',
      marathi: 'तुमची शोध त्रिज्या 50-100 किमी पर्यंत वाढवा'
    }),
    tip2: t({
      english: 'Try flexible dates for better availability',
      hindi: 'बेहतर उपलब्धता के लिए लचीली तारीखें आजमाएं',
      tamil: 'சிறந்த கிடைக்கும் தன்மைக்கு நெகிழ்வான தேதிகளை முயற்சிக்கவும்',
      marathi: 'चांगल्या उपलब्धतेसाठी लवचिक तारखा वापरा'
    }),
    tip3: t({
      english: 'Post during weekdays for faster responses',
      hindi: 'तेज़ प्रतिक्रिया के लिए कार्यदिवसों में पोस्ट करें',
      tamil: 'விரைவான பதில்களுக்கு வார நாட்களில் பதிவிடவும்',
      marathi: 'जलद प्रतिसादासाठी कामकाजाच्या दिवशी पोस्ट करा'
    }),
    repostRequest: t({ english: 'Repost Request', hindi: 'अनुरोध पुनः पोस्ट करें', tamil: 'கோரிக்கையை மீண்டும் பதிவிடு', marathi: 'विनंती पुन्हा पोस्ट करा' }),
    repostWider: t({
      english: 'Repost with wider radius (50 km)',
      hindi: 'बड़े दायरे (50 किमी) के साथ पुनः पोस्ट करें',
      tamil: 'பரந்த ஆரத்துடன் மீண்டும் பதிவிடு (50 கி.மீ.)',
      marathi: 'विस्तृत त्रिज्येसह पुन्हा पोस्ट करा (50 किमी)'
    }),
    searchInstead: t({ english: 'Search Equipment Instead', hindi: 'इसके बजाय उपकरण खोजें', tamil: 'கருவிகளை தேடவும்', marathi: 'त्याऐवजी उपकरणे शोधा' }),
    backToHome: t({ english: 'Back to Home', hindi: 'होम पर वापस जाएं', tamil: 'முகப்புக்குத் திரும்பு', marathi: 'मुख्यपृष्ठावर परत जा' }),
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:52</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Saffron Gradient (shorter) */}
          <div
            className="px-5 pt-4 pb-5 rounded-b-[36px] text-center"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div
              className="text-white text-[16px] font-bold"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            >
              {strings.headerTitle}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 -mt-3">
            {/* Expired Card */}
            <div
              className="bg-white rounded-[20px] p-5 mb-3 text-center"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="w-[72px] h-[72px] rounded-full mx-auto mb-3 flex items-center justify-center text-[36px]"
                style={{ background: '#FFF0E0', boxShadow: '0 0 0 10px rgba(255,107,0,0.08)' }}
              >
                ⏰
              </div>
              <div
                className="text-[22px] font-extrabold mb-1"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                {strings.expiredTitle}
              </div>
              <div className="text-[12px] mb-2" style={{ color: 'var(--text-mid)' }}>
                {strings.expiredSubtitle}
              </div>
              <div
                className="inline-block rounded-[10px] px-[14px] py-1 text-[10px] font-bold tracking-wider"
                style={{ background: 'var(--cream)', color: 'var(--text-soft)' }}
              >
                RQ-2025-03-001
              </div>
            </div>

            {/* Request Summary Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)', border: '1px solid #E8E3DA', opacity: 0.9 }}
            >
              {/* Equipment */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[16px]" style={{ opacity: 0.7 }}>🚜</span>
                <div>
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.equipmentLabel}</span>
                  <div className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    {strings.equipmentValue}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div
                className="flex items-center justify-between py-2"
                style={{ borderBottom: '1px solid #F5F2ED' }}
              >
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.locationLabel}</span>
                <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  📍 Hinganghat, Wardha
                </span>
              </div>

              {/* Dates */}
              <div
                className="flex items-center justify-between py-2"
                style={{ borderBottom: '1px solid #F5F2ED' }}
              >
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.datesLabel}</span>
                <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  📅 {strings.datesValue}
                </span>
              </div>

              {/* Radius */}
              <div
                className="flex items-center justify-between py-2"
                style={{ borderBottom: '1px solid #F5F2ED' }}
              >
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.radiusLabel}</span>
                <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  25 km
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between py-2 mb-1">
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: '#FFEAEA', color: '#CC3333' }}
                >
                  ⏰ {strings.statusExpired}
                </span>
              </div>

              <div className="text-[9px] text-center" style={{ color: 'var(--text-soft)' }}>
                {strings.postedExpired}
              </div>
            </div>

            {/* Tips Card */}
            <div
              className="rounded-[20px] p-4 mb-3"
              style={{ background: 'var(--saffron-pale)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💡 {strings.tipsTitle}
              </div>
              <div className="space-y-2">
                {[strings.tip1, strings.tip2, strings.tip3].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: 'var(--saffron)' }}
                    />
                    <span className="text-[11px]" style={{ color: 'var(--text-dark)' }}>
                      {tip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="px-4 pb-5 flex flex-col gap-1.5">
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white cursor-pointer"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              🔄 {strings.repostRequest}
            </div>
            <div
              className="text-center text-[10px] font-semibold cursor-pointer"
              style={{ color: 'var(--saffron)' }}
            >
              {strings.repostWider}
            </div>
            <div
              className="ky-tap-link text-center text-[11px] font-semibold py-1 cursor-pointer"
              style={{ color: 'var(--text-mid)' }}
            >
              {strings.searchInstead}
            </div>
            <div
              className="ky-tap-link text-center text-[11px] font-semibold py-1 cursor-pointer"
              style={{ color: 'var(--text-mid)' }}
            >
              {strings.backToHome}
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
