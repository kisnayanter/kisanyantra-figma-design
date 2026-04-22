import { useLanguage } from '../../contexts/language';
import { OperatorBottomNav } from '../../components/OperatorBottomNav';

export function OperatorBookingAllCompleteDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    bookingComplete: t({ english: 'Booking Complete', hindi: 'बुकिंग पूर्ण', tamil: 'முன்பதிவு முடிந்தது', marathi: 'बुकिंग पूर्ण' }),
    allStepsDone: t({ english: 'All Steps Completed!', hindi: 'सभी चरण पूर्ण!', tamil: 'அனைத்து படிகளும் முடிந்தன!', marathi: 'सर्व चरण पूर्ण!' }),
    waitingConfirm: t({ english: 'Awaiting owner\'s final confirmation', hindi: 'मालिक की अंतिम पुष्टि की प्रतीक्षा', tamil: 'உரிமையாளரின் இறுதி உறுதிப்படுத்தலுக்காக காத்திருக்கிறோம்', marathi: 'मालकाच्या अंतिम पुष्टीची प्रतीक्षा' }),
    completedOn: t({ english: 'Completed on Jul 12, 5:55 PM', hindi: 'जुल 12, 5:55 PM को पूर्ण', tamil: 'ஜுல் 12, 5:55 PM அன்று முடிந்தது', marathi: 'जुल 12, 5:55 PM रोजी पूर्ण' }),
    statusTimeline: t({ english: 'Full Status Timeline', hindi: 'पूर्ण स्थिति टाइमलाइन', tamil: 'முழு நிலை காலவரிசை', marathi: 'संपूर्ण स्थिती टाइमलाइन' }),
    farmer: t({ english: 'Ramu Kisan · Wardha', hindi: 'रामू किसान · वर्धा', tamil: 'ராமு கிசான் · வர்தா', marathi: 'रामू किसान · वर्धा' }),
    operator: t({ english: 'Ramesh Kumar · Operator', hindi: 'रमेश कुमार · ऑपरेटर', tamil: 'ரமேஷ் குமார் · செயல்படுத்தி', marathi: 'रमेश कुमार · ऑपरेटर' }),
    equipment: t({ english: 'Mahindra 475 DI', hindi: 'महिंद्रा 475 DI', tamil: 'மஹிந்திரா 475 DI', marathi: 'महिंद्रा 475 DI' }),
    backToBookings: t({ english: 'Back to Bookings', hindi: 'बुकिंग पर वापस', tamil: 'முன்பதிவுகளுக்கு திரும்பு', marathi: 'बुकिंगकडे परत जा' }),
    contactFarmer: t({ english: 'Contact Farmer', hindi: 'किसान से संपर्क', tamil: 'விவசாயியைத் தொடர்பு கொள்', marathi: 'शेतकऱ्याशी संपर्क' }),
    ownerConfirmNote: t({ english: 'Owner Harpreet Singh will confirm final completion. Your earnings will be credited after confirmation.', hindi: 'मालिक हरप्रीत सिंह अंतिम पूर्णता की पुष्टि करेंगे। पुष्टि के बाद आपकी कमाई क्रेडिट होगी।', tamil: 'உரிமையாளர் ஹர்பீட் சிங் இறுதி நிறைவை உறுதிப்படுத்துவார். உறுதிப்படுத்திய பிறகு உங்கள் வருமானம் வரவு வைக்கப்படும்.', marathi: 'मालक हरप्रीत सिंग अंतिम पूर्णता निश्चित करतील. पुष्टीनंतर तुमची कमाई जमा होईल.' }),
    yourEarnings: t({ english: 'Your Earnings', hindi: 'आपकी कमाई', tamil: 'உங்கள் வருமானம்', marathi: 'तुमची कमाई' }),
    pendingConfirm: t({ english: 'Pending confirmation', hindi: 'पुष्टि लंबित', tamil: 'உறுதிப்படுத்தல் நிலுவையில்', marathi: 'पुष्टी प्रलंबित' }),
  };

  const timeline = [
    { status: t({ english: 'Booked', hindi: 'बुक', tamil: 'முன்பதிவு', marathi: 'बुक' }), time: 'Jul 5, 2:30 PM', icon: '📝', by: t({ english: 'by Ramu Kisan (Farmer)', hindi: 'रामू किसान (किसान) द्वारा', tamil: 'ராமு கிசானால் (விவசாயி)', marathi: 'रामू किसान (शेतकरी) द्वारे' }) },
    { status: t({ english: 'Accepted', hindi: 'स्वीकृत', tamil: 'ஏற்கப்பட்டது', marathi: 'स्वीकृत' }), time: 'Jul 5, 3:15 PM', icon: '✅', by: t({ english: 'by you', hindi: 'आपके द्वारा', tamil: 'உங்களால்', marathi: 'तुमच्याद्वारे' }) },
    { status: t({ english: 'Equipment Ready', hindi: 'उपकरण तैयार', tamil: 'உபகரணம் தயார்', marathi: 'उपकरण तयार' }), time: 'Jul 9, 6:00 PM', icon: '🔧', by: t({ english: 'by Ramesh (Operator)', hindi: 'रमेश (ऑपरेटर) द्वारा', tamil: 'ரமேஷால் (செயல்படுத்தி)', marathi: 'रमेश (ऑपरेटर) द्वारे' }) },
    { status: t({ english: 'On The Way', hindi: 'रास्ते में', tamil: 'வழியில்', marathi: 'रस्त्यावर' }), time: 'Jul 10, 7:30 AM', icon: '🚚', by: t({ english: 'by Ramesh (Operator)', hindi: 'रमेश (ऑपरेटर) द्वारा', tamil: 'ரமேஷால் (செயல்படுத்தி)', marathi: 'रमेश (ऑपरेटर) द्वारे' }) },
    { status: t({ english: 'Delivered', hindi: 'डिलीवर', tamil: 'வழங்கப்பட்டது', marathi: 'वितरित' }), time: 'Jul 10, 9:15 AM', icon: '📍', by: t({ english: 'by Ramesh (Operator)', hindi: 'रमेश (ऑपरेटर) द्वारा', tamil: 'ரமேஷால் (செயல்படுத்தி)', marathi: 'रमेश (ऑपरेटर) द्वारे' }) },
    { status: t({ english: 'In Use', hindi: 'उपयोग में', tamil: 'பயன்பாட்டில்', marathi: 'वापरात' }), time: 'Jul 10, 10:00 AM', icon: '🚜', by: t({ english: 'by Ramesh (Operator)', hindi: 'रमेश (ऑपरेटर) द्वारा', tamil: 'ரமேஷால் (செயல்படுத்தி)', marathi: 'रमेश (ऑपरेटर) द्वारे' }) },
    { status: t({ english: 'Completed', hindi: 'पूर्ण', tamil: 'முடிந்தது', marathi: 'पूर्ण' }), time: 'Jul 12, 5:55 PM', icon: '🏁', by: t({ english: 'by Ramesh (Operator)', hindi: 'रमेश (ऑपरेटर) द्वारा', tamil: 'ரமேஷால் (செயல்படுத்தி)', marathi: 'रमेश (ऑபரेटர) द्वारे' }) },
  ];

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };

  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

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
            <span className="font-bold text-[11px]" style={interFont}>5:55</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Blue Gradient Header */}
          <div
            className="px-[18px] pt-4 pb-5 rounded-b-[36px] relative"
            style={{
              background: 'var(--gradient-operator)',
              boxShadow: 'var(--card-shadow-operator)',
              backgroundImage: `var(--gradient-operator), ${svgPattern}`,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>
                  #BK-20457 · {strings.equipment}
                </div>
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>
                  {strings.bookingComplete}
                </div>
              </div>
              {/* Celebration badge */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[20px]"
                style={{ background: 'rgba(255,255,255,0.25)', border: '2px solid rgba(255,255,255,0.5)' }}
              >
                🏁
              </div>
            </div>

            {/* Completion summary strip */}
            <div
              className="rounded-[14px] p-3 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.18)' }}
            >
              <div className="text-[22px]">✅</div>
              <div className="flex-1">
                <div className="text-white text-[13px] font-bold" style={poppinsFont}>
                  {strings.allStepsDone}
                </div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.8)', ...interFont }}>
                  {strings.waitingConfirm}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-3">

            {/* Completion timestamp + earnings card */}
            <div
              className="bg-white rounded-[18px] p-3 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[18px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  🚜
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                    {strings.equipment}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                    👨‍🌾 {strings.farmer} · 📅 Jul 10–12
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <div
                  className="flex-1 rounded-[10px] p-2.5 text-center"
                  style={{ background: 'var(--operator-blue-pale)' }}
                >
                  <div className="text-[15px] font-bold" style={{ ...poppinsFont, color: 'var(--operator-blue)' }}>
                    ₹1,200
                  </div>
                  <div className="text-[9px]" style={{ color: 'var(--operator-blue)', ...interFont }}>
                    {strings.yourEarnings}
                  </div>
                </div>
                <div
                  className="flex-1 rounded-[10px] p-2.5 text-center"
                  style={{ background: '#FEF3C7' }}
                >
                  <div className="text-[11px] font-bold" style={{ ...poppinsFont, color: '#D97706' }}>
                    {strings.pendingConfirm}
                  </div>
                  <div className="text-[9px]" style={{ color: '#D97706', ...interFont }}>
                    🕐 {strings.completedOn}
                  </div>
                </div>
              </div>
            </div>

            {/* Full completed timeline */}
            <div className="text-[12px] font-bold mb-2.5" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
              📋 {strings.statusTimeline}
            </div>

            <div className="space-y-1.5 mb-3">
              {timeline.map((step, index) => (
                <div key={step.status} className="flex gap-2.5">
                  {/* Icon + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] flex-shrink-0"
                      style={{
                        background: 'var(--operator-blue)',
                        border: '2px solid var(--operator-blue)'
                      }}
                    >
                      {step.icon}
                    </div>
                    {index < timeline.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-0.5"
                        style={{ background: 'var(--operator-blue)', minHeight: '22px' }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-1.5">
                    <div className="flex justify-between items-center">
                      <div className="text-[11px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                        {step.status}
                      </div>
                      <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                        {step.time}
                      </div>
                    </div>
                    <div className="text-[9px] mt-0.5" style={{ color: 'var(--text-soft)', ...interFont }}>
                      {step.by}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Owner confirmation note */}
            <div
              className="rounded-[14px] p-3"
              style={{ background: 'var(--operator-blue-pale)', border: '1px solid var(--operator-blue-tint)' }}
            >
              <div className="text-[10px] leading-relaxed" style={{ color: 'var(--operator-blue)', ...interFont }}>
                🔔 {strings.ownerConfirmNote}
              </div>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="px-4 pb-2 pt-2 flex flex-col gap-2" style={{ borderTop: '1px solid #F0EDE7' }}>
            <div
              className="ky-tap-share w-full rounded-[14px] py-2.5 text-[13px] font-bold flex items-center justify-center gap-1.5 text-white"
              style={{ background: '#25D366' }}
            >
              📲 {strings.contactFarmer}
            </div>
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[14px] font-bold flex items-center justify-center gap-1.5 text-white"
              style={{
                background: 'var(--gradient-operator)',
                boxShadow: 'var(--card-shadow-operator)',
                ...poppinsFont
              }}
            >
              📋 {strings.backToBookings}
            </div>
          </div>

          {/* Operator Bottom Navigation */}
          <OperatorBottomNav activeTab="bookings" />

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
