import { useLanguage } from '../../../contexts/language';

export function OperatorCompensationSetupDailyDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };
  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

  const selectedRate = 600;
  const ratePresets = [400, 500, 600, 700, 800, 1000];
  const selectedHours = 8;

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

            {/* Model dropdown — Daily Wage selected */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[13px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                  {t({ english: 'Compensation Model', hindi: 'मुआवजा मॉडल', tamil: 'இழப்பீட்டு மாதிரி', marathi: 'नुकसान भरपाई मॉडेल' })} <span className="text-red-500">*</span>
                </div>
              </div>
              <div className="ky-tap-card w-full rounded-[14px] p-3 flex items-center gap-3" style={{ background: '#F0FDF4', border: '2px solid var(--green)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px]" style={{ background: '#DCFCE7' }}>🗓️</div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold" style={{ ...poppinsFont, color: 'var(--green)' }}>
                    {t({ english: 'Daily Wage', hindi: 'दैनिक मजदूरी', tamil: 'தினசரி கூலி', marathi: 'दैनिक मजुरी' })}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--green)', opacity: 0.8, ...interFont }}>
                    {t({ english: 'Fixed rate per working day — days are tracked automatically', hindi: 'प्रति कार्य दिवस दर — दिन स्वचालित रूप से ट्रैक होते हैं', tamil: 'வேலை நாளுக்கு நிலையான விகிதம் — நாட்கள் தானாகவே கண்காணிக்கப்படுகின்றன', marathi: 'प्रति कामाच्या दिवसाचा दर — दिवस आपोआप ट्रॅक होतात' })}
                  </div>
                </div>
                <div className="text-[10px] font-semibold" style={{ color: 'var(--green)', ...interFont }}>
                  {t({ english: '← Change', hindi: 'बदलें ▼', tamil: 'மாற்று ▼', marathi: 'बदला ▼' })}
                </div>
              </div>
            </div>

            {/* Daily wage config */}
            <div className="bg-white rounded-[18px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              {/* Rate amount */}
              <div className="mb-4">
                <div className="text-[13px] font-bold mb-1" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                  {t({ english: 'Daily Wage Rate', hindi: 'दैनिक मजदूरी दर', tamil: 'தினசரி கூலி விகிதம்', marathi: 'दैनिक मजुरी दर' })}
                </div>
                <div className="text-[10px] mb-3" style={{ color: 'var(--text-soft)', ...interFont }}>
                  {t({ english: 'Paid for each day the operator works a booking', hindi: 'ऑपरेटर जिस दिन काम करता है उस दिन के लिए भुगतान', tamil: 'செயல்படுத்தி வேலை செய்யும் ஒவ்வொரு நாளுக்கும் செலுத்தப்படும்', marathi: 'ऑपरेटर जेव्हा काम करतो त्या प्रत्येक दिवसासाठी दिले जाते' })}
                </div>

                {/* Rate stepper */}
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="ky-tap-chip w-10 h-10 rounded-full flex items-center justify-center text-[20px] font-bold" style={{ background: '#DCFCE7', color: 'var(--green)', border: '1.5px solid var(--green)' }}>−</div>
                  <div className="text-center">
                    <div className="text-[10px] mb-0.5" style={{ color: 'var(--text-soft)', ...interFont }}>
                      {t({ english: 'per day', hindi: 'प्रति दिन', tamil: 'நாளுக்கு', marathi: 'प्रति दिवस' })}
                    </div>
                    <div className="text-[32px] font-extrabold" style={{ color: 'var(--green)', ...poppinsFont }}>₹{selectedRate}</div>
                  </div>
                  <div className="ky-tap-chip w-10 h-10 rounded-full flex items-center justify-center text-[20px] font-bold" style={{ background: '#DCFCE7', color: 'var(--green)', border: '1.5px solid var(--green)' }}>+</div>
                </div>

                {/* Rate presets */}
                <div className="text-[10px] mb-1.5 font-semibold" style={{ color: 'var(--text-soft)', ...interFont }}>
                  {t({ english: 'Quick presets', hindi: 'त्वरित प्रीसेट', tamil: 'விரைவு முன்னமைவுகள்', marathi: 'जलद प्रीसेट' })}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {ratePresets.map((r) => (
                    <div
                      key={r}
                      className="ky-tap-chip px-2.5 py-1 rounded-full text-[10px] font-bold"
                      style={{ background: r === selectedRate ? 'var(--green)' : '#DCFCE7', color: r === selectedRate ? 'white' : 'var(--green)', ...interFont }}
                    >
                      ₹{r}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="my-3" style={{ borderTop: '1px solid #F3F4F6' }} />

              {/* Work hours per day */}
              <div>
                <div className="text-[13px] font-bold mb-1" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                  {t({ english: 'Work Hours per Day', hindi: 'प्रति दिन काम के घंटे', tamil: 'நாளுக்கு வேலை நேரம்', marathi: 'प्रति दिवस काम तास' })}
                </div>
                <div className="text-[10px] mb-2" style={{ color: 'var(--text-soft)', ...interFont }}>
                  {t({ english: 'For records only — wage is per day regardless of hours', hindi: 'केवल रिकॉर्ड के लिए — मजदूरी घंटों की परवाह किए बिना प्रति दिन है', tamil: 'பதிவுகளுக்காக மட்டும் — நேரம் எதுவாக இருந்தாலும் கூலி நாளுக்கு', marathi: 'केवळ नोंदीसाठी — मजुरी तासांपर्वा न करता प्रति दिवस आहे' })}
                </div>
                <div className="flex gap-2">
                  {[
                    { label: '8 hrs', value: 8 },
                    { label: '10 hrs', value: 10 },
                    { label: t({ english: 'Custom', hindi: 'कस्टम', tamil: 'தனிப்பயன்', marathi: 'सानुकूल' }), value: 0 },
                  ].map((opt) => (
                    <div
                      key={opt.value}
                      className="ky-tap-chip flex-1 py-2.5 rounded-[10px] text-center"
                      style={{
                        background: opt.value === selectedHours ? 'var(--green)' : '#F0FDF4',
                        color: opt.value === selectedHours ? 'white' : 'var(--green)',
                        border: `1.5px solid ${opt.value === selectedHours ? 'var(--green)' : 'rgba(26,122,59,0.3)'}`,
                      }}
                    >
                      <div className="text-[11px] font-bold" style={poppinsFont}>{opt.label}</div>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div className="mt-2 rounded-[8px] px-2.5 py-1.5 flex items-start gap-1.5" style={{ background: '#F0FDF4' }}>
                  <span className="text-[12px] mt-0.5">ℹ️</span>
                  <div className="text-[9px]" style={{ color: 'var(--green)', ...interFont }}>
                    {t({ english: 'A "working day" is any day the operator completes at least one booking', hindi: '"कार्य दिवस" वह दिन है जब ऑपरेटर कम से कम एक बुकिंग पूरी करे', tamil: '"வேலை நாள்" என்பது செயல்படுத்தி குறைந்தது ஒரு முன்பதிவை முடிக்கும் நாள்', marathi: '"कामाचा दिवस" म्हणजे ऑपरेटर किमान एक बुकिंग पूर्ण करतो त्या दिवस' })}
                  </div>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="rounded-[14px] p-3 mb-3" style={{ background: '#F0FDF4', border: '1px solid rgba(26,122,59,0.3)' }}>
              <div className="text-[12px] font-bold mb-2" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                💡 {t({ english: 'Earnings Preview', hindi: 'कमाई पूर्वावलोकन', tamil: 'வருமான முன்னோட்டம்', marathi: 'कमाई पूर्वावलोकन' })}
              </div>
              <div className="text-[11px] mb-2" style={{ color: 'var(--text-mid)', ...interFont }}>
                {t({ english: 'If Ramesh works 18 days this month:', hindi: 'यदि रमेश इस महीने 18 दिन काम करे:', tamil: 'ரமேஷ் இந்த மாதம் 18 நாட்கள் வேலை செய்தால்:', marathi: 'जर रमेश या महिन्यात 18 दिवस काम केला तर:' })}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[11px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                  18 {t({ english: 'days', hindi: 'दिन', tamil: 'நாட்கள்', marathi: 'दिवस' })} × ₹{selectedRate} =
                </div>
                <div className="text-[20px] font-extrabold" style={{ color: 'var(--green)', ...poppinsFont }}>₹{18 * selectedRate}</div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="text-[10px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                  {t({ english: 'Booking value doesn\'t affect wage', hindi: 'बुकिंग मूल्य मजदूरी को प्रभावित नहीं करता', tamil: 'முன்பதிவு மதிப்பு கூலியை பாதிக்காது', marathi: 'बुकिंग मूल्य मजुरीवर परिणाम करत नाही' })}
                </div>
                <div className="text-[11px] font-bold" style={{ color: 'var(--green)', ...interFont }}>
                  ✓ {t({ english: 'Per day', hindi: 'प्रति दिन', tamil: 'நாளுக்கு', marathi: 'प्रति दिवस' })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-4 pb-4 pt-2 flex flex-col gap-2" style={{ borderTop: '1px solid #F0EDE7' }}>
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3.5 text-[14px] font-bold flex items-center justify-center gap-1.5 text-white"
              style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 4px 16px rgba(26,122,59,0.35)', ...poppinsFont }}
            >
              💾 {t({ english: 'Save Compensation Setup', hindi: 'सेटअप सहेजें', tamil: 'சேமிக்கவும்', marathi: 'सेटअप सेव्ह करा' })}
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
