import { useLanguage } from '../../../contexts/language';

export function CompensationModelSelectSheetDesign() {
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
      description: t({ english: 'A percentage of each booking\'s total amount', hindi: 'प्रत्येक बुकिंग की कुल राशि का एक प्रतिशत', tamil: 'ஒவ்வொரு முன்பதிவின் மொத்த தொகையில் ஒரு சதவீதம்', marathi: 'प्रत्येक बुकिंगच्या एकूण रकमेचा एक टक्का' }),
      example: t({ english: '₹6,000 booking × 10% = ₹600 earned', hindi: '₹6,000 बुकिंग × 10% = ₹600 कमाई', tamil: '₹6,000 முன்பதிவு × 10% = ₹600 வருமானம்', marathi: '₹6,000 बुकिंग × 10% = ₹600 कमाई' }),
      selected: true,
      bg: '#F0FDF4',
      border: 'var(--green)',
      iconBg: '#DCFCE7',
      textColor: 'var(--green)',
    },
    {
      id: 'fixed_booking',
      icon: '💰',
      title: t({ english: 'Fixed Amount per Booking', hindi: 'प्रति बुकिंग निश्चित राशि', tamil: 'முன்பதிவுக்கு நிலையான தொகை', marathi: 'प्रति बुकिंग निश्चित रक्कम' }),
      description: t({ english: 'A fixed ₹ amount for every completed booking', hindi: 'हर पूर्ण बुकिंग के लिए एक निश्चित ₹ राशि', tamil: 'ஒவ்வொரு முடிந்த முன்பதிவிற்கும் ஒரு நிலையான ₹ தொகை', marathi: 'प्रत्येक पूर्ण झालेल्या बुकिंगसाठी एक निश्चित ₹ रक्कम' }),
      example: t({ english: '12 bookings × ₹500 fixed = ₹6,000 earned', hindi: '12 बुकिंग × ₹500 निश्चित = ₹6,000 कमाई', tamil: '12 முன்பதிவுகள் × ₹500 நிலையான = ₹6,000 வருமானம்', marathi: '12 बुकिंग × ₹500 निश्चित = ₹6,000 कमाई' }),
      selected: false,
      bg: '#FAFAFA',
      border: '#E5E7EB',
      iconBg: '#FEF9C3',
      textColor: 'var(--text-dark)',
    },
    {
      id: 'monthly',
      icon: '📅',
      title: t({ english: 'Monthly Salary (Fixed)', hindi: 'मासिक वेतन (निश्चित)', tamil: 'மாதாந்திர சம்பளம் (நிலையான)', marathi: 'मासिक पगार (निश्चित)' }),
      description: t({ english: 'Fixed salary paid on a set day each month', hindi: 'हर महीने एक निर्धारित दिन पर निश्चित वेतन', tamil: 'ஒவ்வொரு மாதமும் ஒரு குறிப்பிட்ட நாளில் நிலையான சம்பளம்', marathi: 'दर महिन्याच्या ठरलेल्या दिवशी निश्चित पगार' }),
      example: t({ english: '₹8,000/month · paid on Day 5 each month', hindi: '₹8,000/माह · हर महीने दिन 5 को भुगतान', tamil: '₹8,000/மாதம் · ஒவ்வொரு மாதமும் நாள் 5 அன்று செலுத்தப்படும்', marathi: '₹8,000/माह · दर महिन्याच्या दिवस 5 ला भुगतान' }),
      selected: false,
      bg: '#FAFAFA',
      border: '#E5E7EB',
      iconBg: '#EFF6FF',
      textColor: 'var(--text-dark)',
    },
    {
      id: 'daily',
      icon: '🗓️',
      title: t({ english: 'Daily Wage', hindi: 'दैनिक मजदूरी', tamil: 'தினசரி கூலி', marathi: 'दैनिक मजुरी' }),
      description: t({ english: 'Rate per working day — tracks days operator works', hindi: 'प्रति कार्य दिवस दर — ऑपरेटर के काम के दिन ट्रैक होते हैं', tamil: 'வேலை நாளுக்கு விகிதம் — செயல்படுத்தி வேலை நாட்களை கண்காணிக்கிறது', marathi: 'प्रति कामाच्या दिवसाचा दर — ऑपरेटर काम करतो त्या दिवसांचा मागोवा' }),
      example: t({ english: '18 days worked × ₹600/day = ₹10,800 earned', hindi: '18 दिन काम × ₹600/दिन = ₹10,800 कमाई', tamil: '18 நாட்கள் வேலை × ₹600/நாள் = ₹10,800 வருமானம்', marathi: '18 दिवस काम × ₹600/दिवस = ₹10,800 कमाई' }),
      selected: false,
      bg: '#FAFAFA',
      border: '#E5E7EB',
      iconBg: '#FFF7ED',
      textColor: 'var(--text-dark)',
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
        <div
          className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col"
          style={{ background: 'var(--bg-primary)' }}
        >
          {/* Dimmed background */}
          <div className="absolute inset-0 flex flex-col" style={{ zIndex: 0 }}>
            <div className="flex justify-between items-center px-[18px] py-[10px]">
              <span className="font-bold text-[11px]" style={interFont}>10:30</span>
              <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
            </div>
            <div
              className="px-[18px] pt-4 pb-5 rounded-b-[36px] opacity-40"
              style={{
                background: 'var(--gradient-green)',
                backgroundImage: `var(--gradient-green), ${svgPattern}`,
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className="h-4 w-36 rounded mb-2" style={{ background: 'rgba(255,255,255,0.5)' }} />
              <div className="h-3 w-24 rounded" style={{ background: 'rgba(255,255,255,0.3)' }} />
            </div>
            <div className="flex-1 px-4 py-4 space-y-2 opacity-15">
              <div className="h-10 bg-white rounded-[14px]" />
              <div className="h-10 bg-white rounded-[14px]" />
              <div className="h-24 bg-white rounded-[14px]" />
            </div>
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)', zIndex: 1 }} />

          {/* Bottom Sheet */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-t-[28px]"
            style={{ background: 'white', zIndex: 2, boxShadow: '0 -8px 40px rgba(0,0,0,0.18)' }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full" style={{ background: '#D1D5DB' }} />
            </div>

            <div className="px-4 pb-5">
              {/* Title */}
              <div className="mb-3">
                <div className="text-[15px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                  {t({ english: 'Choose Compensation Model', hindi: 'मुआवजा मॉडल चुनें', tamil: 'இழப்பீட்டு மாதிரியை தேர்வு செய்யவும்', marathi: 'नुकसान भरपाई मॉडेल निवडा' })}
                </div>
                <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-soft)', ...interFont }}>
                  {t({ english: 'Set how Ramesh Kumar will be paid', hindi: 'रमेश कुमार को कैसे भुगतान किया जाएगा', tamil: 'ரமேஷ் குமார் எவ்வாறு செலுத்தப்படுவார் என்று அமையுங்கள்', marathi: 'रमेश कुमारला कसे पैसे दिले जातील ते सेट करा' })}
                </div>
              </div>

              {/* Model cards */}
              <div className="space-y-2 mb-3">
                {models.map((model) => (
                  <div
                    key={model.id}
                    className="ky-tap-card rounded-[14px] p-3 relative"
                    style={{
                      background: model.bg,
                      border: `2px solid ${model.selected ? model.border : model.border}`,
                      minHeight: '72px'
                    }}
                  >
                    {model.selected && (
                      <div
                        className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: 'var(--green)' }}
                      >
                        <span className="text-white text-[10px] font-bold">✓</span>
                      </div>
                    )}
                    <div className="flex items-start gap-2.5 pr-6">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-[18px] flex-shrink-0"
                        style={{ background: model.iconBg }}
                      >
                        {model.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[12px] font-bold mb-0.5" style={{ ...poppinsFont, color: model.textColor }}>
                          {model.title}
                        </div>
                        <div className="text-[10px] mb-0.5" style={{ color: 'var(--text-soft)', ...interFont }}>
                          {model.description}
                        </div>
                        <div
                          className="text-[9px] font-semibold px-1.5 py-0.5 rounded inline-block"
                          style={{
                            background: model.selected ? '#DCFCE7' : '#F3F4F6',
                            color: model.selected ? 'var(--green)' : 'var(--text-soft)',
                            ...interFont
                          }}
                        >
                          e.g. {model.example}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[14px] font-bold flex items-center justify-center gap-1.5 text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                  boxShadow: '0 4px 16px rgba(26,122,59,0.35)',
                  ...poppinsFont
                }}
              >
                ✅ {t({ english: 'Select This Model', hindi: 'यह मॉडल चुनें', tamil: 'இந்த மாதிரியை தேர்ந்தெடு', marathi: 'हे मॉडेल निवडा' })}
              </div>
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50" style={{ borderRadius: '0 0 14px 14px' }} />
        </div>
      </div>
    </div>
  );
}
