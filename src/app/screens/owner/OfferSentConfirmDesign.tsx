import { useLanguage } from '../../contexts/language';

export function OfferSentConfirmDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'Offer Sent!', hindi: 'ऑफ़र भेज दिया गया!', tamil: 'சலுகை அனுப்பப்பட்டது!', marathi: 'ऑफर पाठवला!' }),
    hindiSubtitle: t({ english: 'ऑफ़र भेज दिया गया!', hindi: 'ऑफ़र भेज दिया गया!', tamil: 'சலுகை அனுப்பப்பட்டது!', marathi: 'ऑफर पाठवला!' }),
    to: t({ english: 'To', hindi: 'किसको', tamil: 'யாருக்கு', marathi: 'कोणाला' }),
    equipment: t({ english: 'Equipment', hindi: 'उपकरण', tamil: 'உபகரணம்', marathi: 'उपकरण' }),
    dates: t({ english: 'Dates', hindi: 'तारीख', tamil: 'தேதிகள்', marathi: 'तारखा' }),
    yourPrice: t({ english: 'Your Price', hindi: 'आपकी कीमत', tamil: 'உங்கள் விலை', marathi: 'तुमची किंमत' }),
    total: t({ english: 'Total', hindi: 'कुल', tamil: 'மொத்தம்', marathi: 'एकूण' }),
    status: t({ english: 'Status', hindi: 'स्थिति', tamil: 'நிலை', marathi: 'स्थिती' }),
    waitingForResponse: t({ english: '● Waiting for response', hindi: '● जवाब का इंतज़ार', tamil: '● பதிலுக்காக காத்திருக்கிறது', marathi: '● प्रतिसादाची वाट' }),
    whatHappensNext: t({ english: 'What Happens Next', hindi: 'आगे क्या होगा', tamil: 'அடுத்து என்ன நடக்கும்', marathi: 'पुढे काय होईल' }),
    notificationMsg: t({ english: 'Ramu will get a notification about your offer', hindi: 'रामू को आपके ऑफ़र की सूचना मिलेगी', tamil: 'ராமுவுக்கு உங்கள் சலுகை பற்றிய அறிவிப்பு கிடைக்கும்', marathi: 'रामूला तुमच्या ऑफरची सूचना मिळेल' }),
    responseTime: t({ english: 'Usually responds within 2-4 hours', hindi: 'आमतौर पर 2-4 घंटे में जवाब देता है', tamil: 'பொதுவாக 2-4 மணி நேரத்தில் பதிலளிப்பார்', marathi: 'साधारणपणे 2-4 तासात प्रतिसाद देतो' }),
    chatMsg: t({ english: 'You can chat with Ramu while waiting', hindi: 'इंतज़ार के दौरान रामू से चैट करें', tamil: 'காத்திருக்கும் போது ராமுவுடன் அரட்டை அடிக்கலாம்', marathi: 'वाट पाहत असताना रामूशी चॅट करा' }),
    tip: t({ english: 'Quick tip: Farmers prefer owners who respond fast and include delivery details', hindi: 'टिप: किसान उन मालिकों को पसंद करते हैं जो जल्दी जवाब देते हैं', tamil: 'குறிப்பு: விரைவாக பதிலளிக்கும் உரிமையாளர்களை விவசாயிகள் விரும்புவார்கள்', marathi: 'टिप: शेतकरी लवकर प्रतिसाद देणाऱ्या मालकांना पसंत करतात' }),
    shareWhatsApp: t({ english: 'Share on WhatsApp', hindi: 'WhatsApp पर शेयर करें', tamil: 'WhatsApp-ல் பகிரவும்', marathi: 'WhatsApp वर शेअर करा' }),
    backToOpportunities: t({ english: 'Back to Opportunities', hindi: 'अवसरों पर वापस', tamil: 'வாய்ப்புகளுக்குத் திரும்பு', marathi: 'संधींवर परत जा' }),
  };

  const summaryRows = [
    { label: strings.to, value: 'Ramu Kisan 👨‍🌾', color: 'var(--text-dark)' },
    { label: strings.equipment, value: 'Mahindra 475 DI 🚜', color: 'var(--text-dark)' },
    { label: strings.dates, value: 'Mar 20 – Mar 23', color: 'var(--text-dark)' },
    { label: strings.yourPrice, value: '₹2,400/day', color: 'var(--text-dark)' },
    { label: strings.total, value: '₹9,600', color: 'var(--saffron)' },
    { label: strings.status, value: strings.waitingForResponse, color: 'var(--saffron)' },
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Header — Green gradient confirmation */}
          <div
            className="px-[18px] pt-5 pb-[50px] text-center rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-[18px] py-[10px]" style={{ color: 'white' }}>
              <span className="font-bold text-[11px]">9:52</span>
              <div className="text-[11px]">🔋</div>
            </div>

            <div className="pt-5">
              <div
                className="w-[72px] h-[72px] rounded-full mx-auto mb-3 flex items-center justify-center text-[36px]"
                style={{ background: 'rgba(255,255,255,0.25)', boxShadow: '0 0 0 10px rgba(255,255,255,0.1)' }}
              >
                📩
              </div>
              <div
                className="text-white text-[22px] font-extrabold"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                {strings.title}
              </div>
              <div className="text-[12px] mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {strings.hindiSubtitle}
              </div>
              <div
                className="inline-block mt-2 rounded-[10px] px-[14px] py-1 text-white text-[11px] font-bold tracking-wider"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                OFR-2026-03-0089
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 -mt-6">
            {/* Offer Summary Card */}
            <div
              className="bg-white rounded-[20px] p-[18px] mb-[14px]"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              {summaryRows.map((row, i) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-2"
                  style={{ borderBottom: i < summaryRows.length - 1 ? '1px solid #F5F2ED' : 'none' }}
                >
                  <span className="text-xs" style={{ color: 'var(--text-soft)' }}>{row.label}</span>
                  <span className="text-[13px] font-bold" style={{ color: row.color }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* What Happens Next Card */}
            <div
              className="rounded-[20px] p-4 mb-[14px]"
              style={{ background: 'var(--green-pale)', border: '1px solid var(--green)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--green)' }}
              >
                {strings.whatHappensNext}
              </div>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-[14px] flex-shrink-0">📱</span>
                  <span className="text-[11px] leading-snug" style={{ color: 'var(--text-dark)' }}>
                    {strings.notificationMsg}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[14px] flex-shrink-0">⏰</span>
                  <span className="text-[11px] leading-snug" style={{ color: 'var(--text-dark)' }}>
                    {strings.responseTime}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[14px] flex-shrink-0">💬</span>
                  <span className="text-[11px] leading-snug" style={{ color: 'var(--text-dark)' }}>
                    {strings.chatMsg}
                  </span>
                </div>
              </div>
            </div>

            {/* Tip Card */}
            <div
              className="rounded-[18px] p-4"
              style={{ background: 'var(--cream)', border: '1.5px dashed #D0CCC5' }}
            >
              <div className="flex items-start gap-2">
                <span className="text-[14px] flex-shrink-0">💡</span>
                <span className="text-[11px] leading-snug" style={{ color: 'var(--text-mid)' }}>
                  {strings.tip}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div className="ky-tap-share w-full bg-[#25D366] text-white rounded-[14px] py-3 text-[13px] font-bold flex items-center justify-center gap-1.5">
              📲 {strings.shareWhatsApp}
            </div>
            <div
              className="ky-tap-cta-primary w-full text-white rounded-[14px] py-3 text-sm font-bold text-center"
              style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 4px 20px rgba(26,122,59,0.35)' }}
            >
              {strings.backToOpportunities}
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
