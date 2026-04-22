import { useLanguage } from '../../../contexts/language';

export function OperatorCompensationSetupFixedDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };
  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

  const presets = [300, 400, 500, 600, 750, 1000];
  const selectedAmount = 500;

  return (
    <div className="relative mx-auto" style={{ width: '320px', height: '640px' }}>
      <div
        className="absolute inset-0 rounded-[36px] overflow-hidden"
        style={{ background: '#111', padding: '10px', boxShadow: '0 0 0 1px #333, 0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)' }}
      >
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={interFont}>10:30</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Green gradient header */}
          <div
            className="px-[18px] pt-4 pb-5 rounded-b-[36px]"
            style={{ background: 'var(--gradient-green)', boxShadow: 'var(--card-shadow-green)', backgroundImage: `var(--gradient-green), ${svgPattern}`, backgroundBlendMode: 'overlay' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white" style={{ background: 'rgba(255,255,255,0.2)', fontSize: '16px' }}>←</div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>
                  {t({ english: 'For Ramesh Kumar', hindi: 'रमेश कुमार के लिए', tamil: 'ரமேஷ் குமாருக்காக', marathi: 'रमेश कुमारसाठी' })}
                </div>
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>
                  {t({ english: 'Setup Compensation', hindi: 'मुआवजा सेट करें', tamil: 'இழப்பீட்டை அமை', marathi: 'नुकसान भरपाई सेट करा' })}
                </div>
              </div>
              <div className="text-[28px]">⚙️</div>
            </div>
            <div className="rounded-[14px] p-2.5 flex items-center gap-2.5" style={{ background: 'rgba(255,255,255,0.18)' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[18px]" style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}>👷</div>
              <div className="flex-1">
                <div className="text-white text-[13px] font-bold" style={poppinsFont}>Ramesh Kumar</div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.8)', ...interFont }}>
                  {t({ english: '2 Equipment Assigned', hindi: '2 उपकरण सौंपे', tamil: '2 உபகரணங்கள்', marathi: '2 उपकरणे' })}
                </div>
              </div>
              <div className="text-[9px] font-bold px-2 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.25)', color: 'white', ...interFont }}>
                ✅ {t({ english: 'Accepted', hindi: 'स्वीकृत', tamil: 'ஏற்கப்பட்டது', marathi: 'स्वीकारले' })}
              </div>
            </div>
          </div>

          {/* Form body */}
          <div className="flex-1 overflow-y-auto px-4 py-3">
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: 'var(--green)' }}>1</div>
              <div className="text-[11px] font-semibold" style={{ ...interFont, color: 'var(--text-dark)' }}>
                {t({ english: 'Invite sent & accepted', hindi: 'आमंत्रण स्वीकृत', tamil: 'அழைப்பு ஏற்கப்பட்டது', marathi: 'आमंत्रण स्वीकारले' })}
              </div>
              <div className="flex-1 h-0.5" style={{ background: 'var(--green)' }} />
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: 'var(--green)' }}>2</div>
              <div className="text-[11px] font-semibold" style={{ ...interFont, color: 'var(--green)' }}>
                {t({ english: 'Set Compensation', hindi: 'मुआवजा सेट करें', tamil: 'இழப்பீட்டை அமை', marathi: 'भरपाई सेट करा' })}
              </div>
            </div>

            {/* Model dropdown — Fixed per Booking selected */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[13px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                  {t({ english: 'Compensation Model', hindi: 'मुआवजा मॉडल', tamil: 'இழப்பீட்டு மாதிரி', marathi: 'नुकसान भरपाई मॉडेल' })} <span className="text-red-500">*</span>
                </div>
                <div className="text-[9px] font-semibold px-1.5 py-0.5 rounded" style={{ background: '#FEF9C3', color: '#B45309', ...interFont }}>
                  {t({ english: 'Required', hindi: 'आवश्यक', tamil: 'தேவை', marathi: 'आवश्यक' })}
                </div>
              </div>
              <div className="ky-tap-card w-full rounded-[14px] p-3 flex items-center gap-3" style={{ background: '#F0FDF4', border: '2px solid var(--green)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px]" style={{ background: '#DCFCE7' }}>💰</div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold" style={{ ...poppinsFont, color: 'var(--green)' }}>
                    {t({ english: 'Fixed Amount per Booking', hindi: 'प्रति बुकिंग निश्चित राशि', tamil: 'முன்பதிவுக்கு நிலையான தொகை', marathi: 'प्रति बुकिंग निश्चित रक्कम' })}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--green)', opacity: 0.8, ...interFont }}>
                    {t({ english: 'A fixed ₹ amount for every completed booking', hindi: 'हर पूर्ण बुकिंग के लिए निश्चित ₹ राशि', tamil: 'ஒவ்வொரு முடிந்த முன்பதிவிற்கும் நிலையான ₹', marathi: 'प्रत्येक पूर्ण बुकिंगसाठी निश्चित ₹' })}
                  </div>
                </div>
                <div className="ky-tap-link text-[10px] font-semibold" style={{ color: 'var(--green)', ...interFont }}>
                  {t({ english: '← Change', hindi: '← बदलें', tamil: '← மாற்று', marathi: '← बदला' })}
                </div>
              </div>
            </div>

            {/* Fixed amount config */}
            <div className="bg-white rounded-[18px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-1" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                {t({ english: 'Fixed Amount per Booking', hindi: 'प्रति बुकिंग निश्चित राशि', tamil: 'முன்பதிவுக்கு நிலையான தொகை', marathi: 'प्रति बुकिंग निश्चित रक्कम' })}
              </div>
              <div className="text-[10px] mb-3" style={{ color: 'var(--text-soft)', ...interFont }}>
                {t({ english: 'Operator earns this amount for every booking they handle', hindi: 'हर बुकिंग के लिए ऑपरेटर यह राशि कमाता है', tamil: 'ஒவ்வொரு முன்பதிவுக்கும் செயல்படுத்தி இந்த தொகை சம்பாதிக்கிறார்', marathi: 'प्रत्येक बुकिंगसाठी ऑपरेटर ही रक्कम कमावतो' })}
              </div>

              {/* Stepper input */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div
                  className="ky-tap-chip w-10 h-10 rounded-full flex items-center justify-center text-[20px] font-bold"
                  style={{ background: '#DCFCE7', color: 'var(--green)', border: '1.5px solid var(--green)' }}
                >−</div>
                <div className="text-center">
                  <div className="text-[10px] mb-0.5" style={{ color: 'var(--text-soft)', ...interFont }}>
                    {t({ english: 'per booking', hindi: 'प्रति बुकिंग', tamil: 'முன்பதிவுக்கு', marathi: 'प्रति बुकिंग' })}
                  </div>
                  <div className="text-[32px] font-extrabold" style={{ color: 'var(--green)', ...poppinsFont }}>₹{selectedAmount}</div>
                </div>
                <div
                  className="ky-tap-chip w-10 h-10 rounded-full flex items-center justify-center text-[20px] font-bold"
                  style={{ background: '#DCFCE7', color: 'var(--green)', border: '1.5px solid var(--green)' }}
                >+</div>
              </div>

              {/* Quick preset chips */}
              <div className="text-[10px] mb-1.5 font-semibold" style={{ color: 'var(--text-soft)', ...interFont }}>
                {t({ english: 'Quick presets', hindi: 'त्वरित प्रीसेट', tamil: 'விரைவு முன்னமைவுகள்', marathi: 'जलद प्रीसेट' })}
              </div>
              <div className="flex gap-2 flex-wrap">
                {presets.map((amt) => (
                  <div
                    key={amt}
                    className="ky-tap-chip px-2.5 py-1 rounded-full text-[10px] font-bold"
                    style={{
                      background: amt === selectedAmount ? 'var(--green)' : '#DCFCE7',
                      color: amt === selectedAmount ? 'white' : 'var(--green)',
                      ...interFont
                    }}
                  >
                    ₹{amt}
                  </div>
                ))}
              </div>
            </div>

            {/* Preview calculation */}
            <div className="rounded-[14px] p-3 mb-4" style={{ background: '#F0FDF4', border: '1px solid rgba(26,122,59,0.3)' }}>
              <div className="text-[12px] font-bold mb-2" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                💡 {t({ english: 'Earnings Preview', hindi: 'कमाई पूर्वावलोकन', tamil: 'வருமான முன்னோட்டம்', marathi: 'कमाई पूर्वावलोकन' })}
              </div>
              <div className="text-[11px] mb-2" style={{ color: 'var(--text-mid)', ...interFont }}>
                {t({ english: 'For 12 bookings handled this month:', hindi: 'इस महीने 12 बुकिंग के लिए:', tamil: 'இந்த மாதம் 12 முன்பதிவுகளுக்கு:', marathi: 'या महिन्यात 12 बुकिंगसाठी:' })}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[11px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                  12 × ₹500 =
                </div>
                <div className="text-[20px] font-extrabold" style={{ color: 'var(--green)', ...poppinsFont }}>₹6,000</div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="text-[11px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                  {t({ english: 'Regardless of booking value', hindi: 'बुकिंग मूल्य चाहे जो हो', tamil: 'முன்பதிவு மதிப்பு எதுவாக இருந்தாலும்', marathi: 'बुकिंग मूल्य काहीही असले तरी' })}
                </div>
                <div className="text-[11px] font-bold" style={{ color: 'var(--green)', ...interFont }}>
                  ✓ {t({ english: 'Fixed', hindi: 'निश्चित', tamil: 'நிலையான', marathi: 'निश்चित' })}
                </div>
              </div>
            </div>

            {/* Other models */}
            <div className="mb-1">
              <div className="text-[10px] font-semibold mb-2" style={{ color: 'var(--text-soft)', ...interFont }}>
                {t({ english: 'Other available models:', hindi: 'अन्य मॉडल:', tamil: 'மற்ற மாதிரிகள்:', marathi: 'इतर मॉडेल:' })}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: '📊', label: 'Commission %' },
                  { icon: '📅', label: t({ english: 'Monthly Salary', hindi: 'मासिक वेतन', tamil: 'மாதாந்திர சம்பளம்', marathi: 'मासिक पगार' }) },
                  { icon: '🗓️', label: t({ english: 'Daily Wage', hindi: 'दैनिक मजदूरी', tamil: 'தினசரி கூலி', marathi: 'दैनिक मजुरी' }) },
                ].map((m) => (
                  <div key={m.label} className="ky-tap-chip flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px]" style={{ background: '#F3F4F6', color: 'var(--text-mid)', ...interFont }}>
                    {m.icon} {m.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-4 pb-4 pt-2 flex flex-col gap-2" style={{ borderTop: '1px solid #F0EDE7' }}>
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3.5 text-[14px] font-bold flex items-center justify-center gap-1.5 text-white"
              style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 4px 16px rgba(26,122,59,0.35)', ...poppinsFont }}
            >
              💾 {t({ english: 'Save Compensation Setup', hindi: 'मुआवजा सेटअप सहेजें', tamil: 'இழப்பீட்டு அமைப்பை சேமிக்கவும்', marathi: 'सेटअप सेव्ह करा' })}
            </div>
            <div className="ky-tap-link w-full py-1.5 text-[11px] text-center font-semibold" style={{ color: 'var(--text-soft)', ...interFont }}>
              {t({ english: 'Skip for now', hindi: 'अभी छोड़ें', tamil: 'இப்போது தவிர்', marathi: 'आत्ता वगळा' })}
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50" style={{ borderRadius: '0 0 14px 14px' }} />
        </div>
      </div>
    </div>
  );
}
