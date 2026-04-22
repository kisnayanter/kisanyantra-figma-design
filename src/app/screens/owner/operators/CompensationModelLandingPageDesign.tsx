import { useLanguage } from '../../../contexts/language';

export function CompensationModelLandingPageDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };
  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

  const models = [
    {
      id: 'commission',
      icon: '📊',
      title: t({ english: 'Commission % per Booking', hindi: 'बुकिंग पर कमीशन %', tamil: 'முன்பதிவுக்கு கமிஷன் %', marathi: 'बुकिंगवर कमिशन %' }),
      description: t({ english: 'Operator earns a % of each booking\'s value', hindi: 'हर बुकिंग के मूल्य का % ऑपरेटर कमाता है', tamil: 'ஒவ்வொரு முன்பதிவின் மதிப்பில் % சம்பாதிக்கிறார்', marathi: 'प्रत्येक बुकिंगच्या मूल्याचा % ऑपरेटर कमवतो' }),
      example: t({ english: '₹6,000 booking × 10% → ₹600 earned', hindi: '₹6,000 बुकिंग × 10% → ₹600', tamil: '₹6,000 × 10% → ₹600', marathi: '₹6,000 × 10% → ₹600' }),
      tag: t({ english: 'Most Popular', hindi: 'सबसे लोकप्रिय', tamil: 'மிகவும் பிரபலமான', marathi: 'सर्वाधिक लोकप्रिय' }),
    },
    {
      id: 'fixed_booking',
      icon: '💰',
      title: t({ english: 'Fixed Amount per Booking', hindi: 'प्रति बुकिंग निश्चित राशि', tamil: 'முன்பதிவுக்கு நிலையான தொகை', marathi: 'प्रति बुकिंग निश्चित रक्कम' }),
      description: t({ english: 'Flat ₹ amount for every completed booking', hindi: 'हर पूर्ण बुकिंग पर एक निश्चित ₹ राशि', tamil: 'ஒவ்வொரு முடிந்த முன்பதிவிற்கும் நிலையான ₹ தொகை', marathi: 'दर पूर्ण बुकिंगसाठी एक निश्चित ₹ रक्कम' }),
      example: t({ english: '12 bookings × ₹500 fixed → ₹6,000', hindi: '12 बुकिंग × ₹500 → ₹6,000', tamil: '12 × ₹500 → ₹6,000', marathi: '12 × ₹500 → ₹6,000' }),
      tag: null,
    },
    {
      id: 'monthly',
      icon: '📅',
      title: t({ english: 'Monthly Salary', hindi: 'मासिक वेतन', tamil: 'மாதாந்திர சம்பளம்', marathi: 'मासिक पगार' }),
      description: t({ english: 'Fixed salary paid on a set date each month', hindi: 'हर महीने एक निश्चित तारीख को पगार', tamil: 'ஒவ்வொரு மாதமும் குறிப்பிட்ட நாளில் சம்பளம்', marathi: 'दर महिन्याच्या ठरलेल्या तारखेला पगार' }),
      example: t({ english: '₹8,000/month · paid on Day 5', hindi: '₹8,000/माह · दिन 5 को भुगतान', tamil: '₹8,000/மாதம் · நாள் 5', marathi: '₹8,000/माह · दिवस 5 ला' }),
      tag: null,
    },
    {
      id: 'daily',
      icon: '🗓️',
      title: t({ english: 'Daily Wage', hindi: 'दैनिक मजदूरी', tamil: 'தினசரி கூலி', marathi: 'दैनिक मजुरी' }),
      description: t({ english: 'Rate per working day · days worked are tracked', hindi: 'प्रति कार्य दिवस · काम के दिन ट्रैक होते हैं', tamil: 'வேலை நாளுக்கு விகிதம் · நாட்கள் கண்காணிக்கப்படும்', marathi: 'प्रति कामाच्या दिवशी · दिवस ट्रॅक होतात' }),
      example: t({ english: '18 days × ₹600/day → ₹10,800', hindi: '18 दिन × ₹600 → ₹10,800', tamil: '18 நாட்கள் × ₹600 → ₹10,800', marathi: '18 दिवस × ₹600 → ₹10,800' }),
      tag: null,
    },
  ];

  return (
    <div className="relative mx-auto" style={{ width: '320px', height: '640px' }}>
      <div
        className="absolute inset-0 rounded-[36px] overflow-hidden"
        style={{
          background: '#111',
          padding: '10px',
          boxShadow: '0 0 0 1px #333, 0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <div
          className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col"
          style={{ background: 'var(--bg-primary)' }}
        >
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={interFont}>10:30</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Green gradient header */}
          <div
            className="px-[18px] pt-4 pb-5 rounded-b-[36px] relative"
            style={{
              background: 'var(--gradient-green)',
              boxShadow: 'var(--card-shadow-green)',
              backgroundImage: `var(--gradient-green), ${svgPattern}`,
              backgroundBlendMode: 'overlay',
            }}
          >
            {/* Back + title row */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white"
                style={{ background: 'rgba(255,255,255,0.2)', fontSize: '16px' }}
              >
                ←
              </div>
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

            {/* Operator context card */}
            <div
              className="rounded-[14px] p-2.5 flex items-center gap-2.5"
              style={{ background: 'rgba(255,255,255,0.18)' }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[18px] flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
              >
                👷
              </div>
              <div className="flex-1">
                <div className="text-white text-[13px] font-bold" style={poppinsFont}>Ramesh Kumar</div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.8)', ...interFont }}>
                  {t({ english: '2 Equipment Assigned', hindi: '2 उपकरण सौंपे', tamil: '2 உபகரணங்கள்', marathi: '2 उपकरणे' })}
                </div>
              </div>
              <div
                className="text-[9px] font-bold px-2 py-1 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.25)', color: 'white', ...interFont }}
              >
                ✅ {t({ english: 'Accepted', hindi: 'स्वीकृत', tamil: 'ஏற்கப்பட்டது', marathi: 'स्वीकारले' })}
              </div>
            </div>
          </div>

          {/* Body — scrollable model cards */}
          <div className="flex-1 overflow-y-auto px-4 py-3">

            {/* Section heading */}
            <div className="mb-3">
              <div className="text-[14px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                {t({ english: 'Choose a Payment Model', hindi: 'भुगतान मॉडल चुनें', tamil: 'கட்டண மாதிரியை தேர்வு செய்க', marathi: 'पेमेंट मॉडेल निवडा' })}
              </div>
              <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-soft)', ...interFont }}>
                {t({ english: 'Tap a model to configure and save', hindi: 'कॉन्फ़िगर करने के लिए टैप करें', tamil: 'கட்டமைக்க தட்டவும்', marathi: 'कॉन्फिगर करण्यासाठी टॅप करा' })}
              </div>
            </div>

            {/* 4 Model cards — all green scheme */}
            <div className="space-y-3">
              {models.map((model) => (
                <div
                  key={model.id}
                  className="ky-tap-card rounded-[16px] p-3 flex items-start gap-3 relative"
                  style={{
                    background: '#F0FDF4',
                    border: '1.5px solid rgba(26,122,59,0.25)',
                    cursor: 'pointer',
                  }}
                >
                  {/* Model icon */}
                  <div
                    className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[22px] flex-shrink-0 mt-0.5"
                    style={{ background: '#DCFCE7' }}
                  >
                    {model.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="text-[13px] font-bold" style={{ ...poppinsFont, color: 'var(--green)' }}>
                        {model.title}
                      </div>
                      {model.tag && (
                        <div
                          className="text-[8px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--green)', color: 'white', ...interFont }}
                        >
                          {model.tag}
                        </div>
                      )}
                    </div>
                    <div className="text-[10px] mb-1.5" style={{ color: 'var(--text-soft)', ...interFont }}>
                      {model.description}
                    </div>
                    {/* Example pill */}
                    <div
                      className="inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: '#DCFCE7', color: 'var(--green)', ...interFont }}
                    >
                      e.g. {model.example}
                    </div>
                  </div>

                  {/* Chevron */}
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: 'var(--green)', color: 'white', fontSize: '13px' }}
                  >
                    →
                  </div>
                </div>
              ))}
            </div>

            {/* Skip link */}
            <div className="pt-4 pb-2 text-center">
              <div
                className="ky-tap-link text-[11px] font-semibold"
                style={{ color: 'var(--text-soft)', ...interFont }}
              >
                {t({ english: 'Skip for now', hindi: 'अभी के लिए छोड़ें', tamil: 'இப்போதைக்கு தவிர்க்கவும்', marathi: 'आत्तासाठी वगळा' })}
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
