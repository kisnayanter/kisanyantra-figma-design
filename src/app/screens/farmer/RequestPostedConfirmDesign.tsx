import { useLanguage } from '../../contexts/language';

export function RequestPostedConfirmDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'Request Posted!', hindi: 'अनुरोध भेज दिया गया!', tamil: 'கோரிக்கை பதிவாகியது!', marathi: 'विनंती पाठवली!' }),
    subtitle: t({ english: 'Your request has been posted', hindi: 'आपका अनुरोध पोस्ट हो गया', tamil: 'உங்கள் கோரிக்கை பதிவாகியது', marathi: 'तुमची विनंती पोस्ट झाली' }),
    requestSummary: t({ english: 'Request Summary', hindi: 'अनुरोध सारांश', tamil: 'கோரிக்கை சுருக்கம்', marathi: 'विनंती सारांश' }),
    equipment: t({ english: 'Equipment', hindi: 'उपकरण', tamil: 'உபகரணம்', marathi: 'उपकरण' }),
    dates: t({ english: 'Dates', hindi: 'तारीख', tamil: 'தேதிகள்', marathi: 'तारखा' }),
    locationLabel: t({ english: 'Location', hindi: 'स्थान', tamil: 'இடம்', marathi: 'स्थान' }),
    status: t({ english: 'Status', hindi: 'स्थिति', tamil: 'நிலை', marathi: 'स्थिती' }),
    searching: t({ english: 'Searching', hindi: 'खोज रहे हैं', tamil: 'தேடுகிறது', marathi: 'शोधत आहे' }),
    whatHappensNext: t({ english: 'What Happens Next?', hindi: 'आगे क्या होगा?', tamil: 'அடுத்தது என்ன?', marathi: 'पुढे काय होईल?' }),
    step1: t({ english: 'Nearby owners will be notified', hindi: 'आसपास के मालिकों को सूचित किया जाएगा', tamil: 'அருகிலுள்ள உரிமையாளர்களுக்கு அறிவிக்கப்படும்', marathi: 'जवळपासच्या मालकांना सूचित केले जाईल' }),
    step2: t({ english: 'Owners will send you offers', hindi: 'मालिक आपको ऑफर भेजेंगे', tamil: 'உரிமையாளர்கள் சலுகைகளை அனுப்புவார்கள்', marathi: 'मालक तुम्हाला ऑफर पाठवतील' }),
    step3: t({ english: 'You pick the best one', hindi: 'आप सबसे अच्छा चुनें', tamil: 'சிறந்ததை நீங்கள் தேர்வு செய்யுங்கள்', marathi: 'तुम्ही सर्वोत्तम निवडा' }),
    estimatedResponse: t({ english: 'Usually within 1-2 days', hindi: 'आमतौर पर 1-2 दिनों में', tamil: 'பொதுவாக 1-2 நாட்களில்', marathi: 'साधारणतः 1-2 दिवसांत' }),
    shareWhatsApp: t({ english: 'Share on WhatsApp', hindi: 'WhatsApp पर शेयर करें', tamil: 'WhatsApp இல் பகிரவும்', marathi: 'WhatsApp वर शेअर करा' }),
    viewMyRequests: t({ english: 'View My Requests', hindi: 'मेरे अनुरोध देखें', tamil: 'எனது கோரிக்கைகள்', marathi: 'माझ्या विनंत्या पहा' }),
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
          {/* Header - Green Gradient (Success) */}
          <div
            className="px-[18px] pt-5 pb-[50px] text-center rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-[18px] py-[10px]" style={{ color: 'white' }}>
              <span className="font-bold text-[11px]">9:50</span>
              <div className="text-[11px]">🔋</div>
            </div>

            <div className="pt-5">
              <div
                className="w-[72px] h-[72px] rounded-full mx-auto mb-3 flex items-center justify-center text-[36px]"
                style={{ background: 'rgba(255,255,255,0.25)', boxShadow: '0 0 0 10px rgba(255,255,255,0.1)' }}
              >
                ✅
              </div>
              <div
                className="text-white text-[22px] font-extrabold"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                {strings.title}
              </div>
              <div className="text-[12px] mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {strings.subtitle}
              </div>
              <div
                className="inline-block mt-2 rounded-[10px] px-[14px] py-1 text-white text-[11px] font-bold tracking-wider"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                REQ-2026-03-0143
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 -mt-6">
            {/* Request Summary Card */}
            <div
              className="bg-white rounded-[20px] p-[18px] mb-[14px]"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📋 {strings.requestSummary}
              </div>
              {[
                { label: strings.equipment, value: '50 HP Tractor 🚜', color: 'var(--text-dark)' },
                { label: strings.dates, value: 'Mar 20 – Mar 23', color: 'var(--text-dark)' },
                { label: strings.locationLabel, value: 'Hinganghat, Wardha', color: 'var(--text-dark)' },
                { label: strings.status, value: `● ${strings.searching}`, color: 'var(--saffron)' }
              ].map((row, i) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-2"
                  style={{ borderBottom: i < 3 ? '1px solid #F5F2ED' : 'none' }}
                >
                  <span className="text-xs" style={{ color: 'var(--text-soft)' }}>{row.label}</span>
                  <span className="text-[13px] font-bold" style={{ color: row.color }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* What Happens Next Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-[14px]"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                {strings.whatHappensNext}
              </div>
              <div className="space-y-3">
                {[
                  { icon: '🔔', text: strings.step1, step: '1' },
                  { icon: '💬', text: strings.step2, step: '2' },
                  { icon: '✅', text: strings.step3, step: '3' }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[16px] flex-shrink-0"
                      style={{ background: 'var(--green-pale)' }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated Response Info Box */}
            <div
              className="rounded-[16px] p-3 flex items-center gap-3 mb-4"
              style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)' }}
            >
              <div className="text-[18px]">⏱️</div>
              <div className="flex-1">
                <div className="text-[11px] font-bold" style={{ color: 'var(--green)' }}>
                  {strings.estimatedResponse}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div className="ky-tap-share w-full bg-[#25D366] text-white rounded-[14px] py-3 text-[13px] font-bold flex items-center justify-center gap-1.5 cursor-pointer">
              📲 {strings.shareWhatsApp}
            </div>
            <div
              className="ky-tap-cta-primary w-full text-white rounded-[14px] py-3 text-sm font-bold text-center cursor-pointer"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              {strings.viewMyRequests}
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
