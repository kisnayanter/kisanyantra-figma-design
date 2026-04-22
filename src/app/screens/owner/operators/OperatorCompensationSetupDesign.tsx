import { useLanguage } from '../../../contexts/language';

export function OperatorCompensationSetupDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };

  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

  const strings = {
    setupComp: t({ english: 'Setup Compensation', hindi: 'मुआवजा सेट करें', tamil: 'இழப்பீட்டை அமை', marathi: 'नुकसान भरपाई सेट करा' }),
    forOperator: t({ english: 'For Ramesh Kumar', hindi: 'रमेश कुमार के लिए', tamil: 'ரமேஷ் குமாருக்காக', marathi: 'रमेश कुमारसाठी' }),
    operatorCard: t({ english: 'Applying to', hindi: 'लागू करना', tamil: 'பயன்படுத்துகிறது', marathi: 'लागू करत आहे' }),
    accepted: t({ english: 'Invite Accepted', hindi: 'आमंत्रण स्वीकृत', tamil: 'அழைப்பு ஏற்கப்பட்டது', marathi: 'आमंत्रण स्वीकारले' }),
    assignedEquip: t({ english: '2 Equipment Assigned', hindi: '2 उपकरण सौंपे', tamil: '2 உபகரணங்கள் ஒதுக்கப்பட்டன', marathi: '2 उपकरणे सोपवली' }),
    model: t({ english: 'Compensation Model', hindi: 'मुआवजा मॉडल', tamil: 'இழப்பீட்டு மாதிரி', marathi: 'नुकसान भरपाई मॉडेल' }),
    required: t({ english: 'Required', hindi: 'आवश्यक', tamil: 'தேவை', marathi: 'आवश्यक' }),
    tapToChange: t({ english: 'Tap to change ▼', hindi: 'बदलने के लिए टैप करें ▼', tamil: 'மாற்ற தட்டவும் ▼', marathi: 'बदलण्यासाठी टॅप करा ▼' }),
    commissionRate: t({ english: 'Commission Rate', hindi: 'कमीशन दर', tamil: 'கமிஷன் விகிதம்', marathi: 'कमिशन दर' }),
    rateHint: t({ english: 'Set the percentage operator earns from each booking', hindi: 'प्रत्येक बुकिंग से ऑपरेटर को मिलने वाला प्रतिशत', tamil: 'ஒவ்வொரு முன்பதிவிலிருந்தும் செயல்படுத்தி சம்பாதிக்கும் சதவீதம்', marathi: 'प्रत्येक बुकिंगमधून ऑपरेटर किती टक्के मिळवेल' }),
    previewTitle: t({ english: 'Earnings Preview', hindi: 'कमाई पूर्वावलोकन', tamil: 'வருமான முன்னோட்டம்', marathi: 'कमाई पूर्वावलोकन' }),
    previewExample: t({ english: 'For a ₹6,000 booking at 10%:', hindi: '10% पर ₹6,000 बुकिंग के लिए:', tamil: '10% இல் ₹6,000 முன்பதிவிற்கு:', marathi: '10% वर ₹6,000 बुकिंगसाठी:' }),
    operatorEarns: t({ english: 'Operator earns →', hindi: 'ऑपरेटर कमाता है →', tamil: 'செயல்படுத்தி சம்பாதிக்கிறார் →', marathi: 'ऑपरेटर कमवतो →' }),
    youPay: t({ english: 'You pay from booking', hindi: 'आप बुकिंग से देते हैं', tamil: 'நீங்கள் முன்பதிவிலிருந்து செலுத்துகிறீர்கள்', marathi: 'तुम्ही बुकिंगमधून देता' }),
    saveComp: t({ english: 'Save Compensation Setup', hindi: 'मुआवजा सेटअप सहेजें', tamil: 'இழப்பீட்டு அமைப்பை சேமிக்கவும்', marathi: 'नुकसान भरपाई सेटअप सेव्ह करा' }),
    skipForNow: t({ english: 'Skip for now', hindi: 'अभी के लिए छोड़ें', tamil: 'இப்போதைக்கு தவிர்க்கவும்', marathi: 'आत्तासाठी वगळा' }),
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
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white"
                style={{ background: 'rgba(255,255,255,0.2)', fontSize: '16px' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>
                  {strings.forOperator}
                </div>
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>
                  {strings.setupComp}
                </div>
              </div>
              <div className="text-[28px]">⚙️</div>
            </div>

            {/* Operator card in header */}
            <div className="rounded-[14px] p-2.5 flex items-center gap-2.5" style={{ background: 'rgba(255,255,255,0.18)' }}>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[18px] flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
              >
                👷
              </div>
              <div className="flex-1">
                <div className="text-white text-[13px] font-bold" style={poppinsFont}>Ramesh Kumar</div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.8)', ...interFont }}>
                  {strings.assignedEquip}
                </div>
              </div>
              <div
                className="text-[9px] font-bold px-2 py-1 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.25)', color: 'white', ...interFont }}
              >
                ✅ {strings.accepted}
              </div>
            </div>
          </div>

          {/* Form body */}
          <div className="flex-1 overflow-y-auto px-4 py-3">

            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: 'var(--green)' }}>1</div>
              <div className="text-[11px] font-semibold" style={{ ...interFont, color: 'var(--text-dark)' }}>
                {t({ english: 'Invite sent & accepted', hindi: 'आमंत्रण भेजा और स्वीकृत', tamil: 'அழைப்பு அனுப்பப்பட்டது & ஏற்கப்பட்டது', marathi: 'आमंत्रण पाठवले आणि स्वीकारले' })}
              </div>
              <div className="flex-1 h-0.5" style={{ background: 'var(--green)' }} />
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: 'var(--green)' }}>2</div>
              <div className="text-[11px] font-semibold" style={{ ...interFont, color: 'var(--green)' }}>
                {t({ english: 'Set Compensation', hindi: 'मुआवजा सेट करें', tamil: 'இழப்பீட்டை அமை', marathi: 'भरपाई सेट करा' })}
              </div>
            </div>

            {/* Compensation model dropdown */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[13px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                  {strings.model} <span className="text-red-500">*</span>
                </div>
                <div className="text-[9px] font-semibold px-1.5 py-0.5 rounded" style={{ background: '#FEF9C3', color: '#B45309', ...interFont }}>
                  {strings.required}
                </div>
              </div>

              {/* Selected model card / dropdown trigger */}
              <div
                className="ky-tap-card w-full rounded-[14px] p-3 flex items-center gap-3"
                style={{ background: '#F0FDF4', border: '2px solid var(--green)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px]" style={{ background: '#DCFCE7' }}>
                  📊
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold" style={{ ...poppinsFont, color: 'var(--green)' }}>
                    {t({ english: 'Commission % per Booking', hindi: 'बुकिंग पर कमीशन %', tamil: 'முன்பதிவுக்கு கமிஷன் %', marathi: 'बुकिंगवर कमिशन %' })}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--green)', opacity: 0.8, ...interFont }}>
                    {t({ english: 'Percentage of each booking\'s total amount', hindi: 'प्रत्येक बुकिंग की कुल राशि का प्रतिशत', tamil: 'ஒவ்வொரு முன்பதிவின் மொத்த தொகையில் சதவீதம்', marathi: 'प्रत्येक बुकिंगच्या एकूण रकमेचा टक्का' })}
                  </div>
                </div>
                <div className="text-[10px] font-semibold" style={{ color: 'var(--green)', ...interFont }}>
                  {strings.tapToChange}
                </div>
              </div>
            </div>

            {/* Model-specific config: Commission % shown */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="text-[13px] font-bold mb-1" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                {strings.commissionRate}
              </div>
              <div className="text-[10px] mb-3" style={{ color: 'var(--text-soft)', ...interFont }}>
                {strings.rateHint}
              </div>

              {/* Rate display + slider */}
              <div className="flex items-center justify-between mb-2">
                <div className="text-[11px]" style={{ color: 'var(--text-soft)', ...interFont }}>5%</div>
                <div
                  className="text-[26px] font-extrabold"
                  style={{ color: 'var(--green)', ...poppinsFont }}
                >
                  10%
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-soft)', ...interFont }}>30%</div>
              </div>

              {/* Slider visual */}
              <div className="relative w-full h-2 rounded-full mb-3" style={{ background: '#E5E7EB' }}>
                <div className="absolute left-0 top-0 h-2 rounded-full" style={{ width: '17%', background: 'var(--green)' }} />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full shadow-md"
                  style={{ left: 'calc(17% - 10px)', background: 'white', border: '2.5px solid var(--green)' }}
                />
              </div>

              {/* Quick select chips */}
              <div className="flex gap-2 flex-wrap">
                {['5%', '8%', '10%', '12%', '15%', '20%'].map((rate) => (
                  <div
                    key={rate}
                    className="ky-tap-chip px-2.5 py-1 rounded-full text-[10px] font-bold"
                    style={{
                      background: rate === '10%' ? 'var(--green)' : 'var(--green-pale)',
                      color: rate === '10%' ? 'white' : 'var(--green)',
                      ...interFont
                    }}
                  >
                    {rate}
                  </div>
                ))}
              </div>
            </div>

            {/* Preview calculation card */}
            <div
              className="rounded-[14px] p-3 mb-4"
              style={{ background: 'var(--green-pale)', border: '1px solid rgba(26,122,59,0.3)' }}
            >
              <div className="text-[12px] font-bold mb-2" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                💡 {strings.previewTitle}
              </div>
              <div className="text-[11px] mb-2" style={{ color: 'var(--text-mid)', ...interFont }}>
                {strings.previewExample}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[11px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                  {strings.operatorEarns}
                </div>
                <div className="text-[18px] font-extrabold" style={{ color: 'var(--green)', ...poppinsFont }}>
                  ₹600
                </div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="text-[11px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                  {strings.youPay}
                </div>
                <div className="text-[13px] font-bold" style={{ color: 'var(--text-mid)', ...poppinsFont }}>
                  ₹600 / booking
                </div>
              </div>
            </div>

            {/* Other 3 models as alternative reference (collapsed chips) */}
            <div className="mb-1">
              <div className="text-[10px] font-semibold mb-2" style={{ color: 'var(--text-soft)', ...interFont }}>
                {t({ english: 'Other available models:', hindi: 'अन्य उपलब्ध मॉडल:', tamil: 'மற்ற கிடைக்கும் மாதிரிகள்:', marathi: 'इतर उपलब्ध मॉडेल:' })}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: '💰', label: t({ english: 'Fixed/Booking', hindi: 'निश्चित/बुकिंग', tamil: 'நிலையான/முன்பதிவு', marathi: 'निश्चित/बुकिंग' }) },
                  { icon: '📅', label: t({ english: 'Monthly Salary', hindi: 'मासिक वेतन', tamil: 'மாதாந்திர சம்பளம்', marathi: 'मासिक पगार' }) },
                  { icon: '🗓️', label: t({ english: 'Daily Wage', hindi: 'दैनिक मजदूरी', tamil: 'தினசரி கூலி', marathi: 'दैनिक मजुरी' }) },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="ky-tap-chip flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px]"
                    style={{ background: '#F3F4F6', color: 'var(--text-mid)', ...interFont }}
                  >
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
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 16px rgba(26,122,59,0.35)',
                ...poppinsFont
              }}
            >
              💾 {strings.saveComp}
            </div>
            <div
              className="ky-tap-link w-full py-1.5 text-[11px] text-center font-semibold"
              style={{ color: 'var(--text-soft)', ...interFont }}
            >
              {strings.skipForNow}
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50" style={{ borderRadius: '0 0 14px 14px' }} />
        </div>
      </div>
    </div>
  );
}
