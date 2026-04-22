import { useLanguage } from '../../contexts/language';
import { OperatorBottomNav } from '../../components/OperatorBottomNav';

export function OperatorStatusUpdatedDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    statusUpdated: t({ english: 'Status Updated', hindi: 'स्थिति अपडेट हो गई', tamil: 'நிலை புதுப்பிக்கப்பட்டது', marathi: 'स्थिती अपडेट झाली' }),
    confirmed: t({ english: 'Delivered — Confirmed!', hindi: 'डिलीवर हो गया — पुष्टि!', tamil: 'வழங்கப்பட்டது — உறுதிப்படுத்தப்பட்டது!', marathi: 'वितरित झाले — निश्चित!' }),
    timestamp: t({ english: 'Jul 10 · 9:15 AM', hindi: 'जुल 10 · 9:15 AM', tamil: 'ஜுல் 10 · 9:15 AM', marathi: 'जुल 10 · 9:15 AM' }),
    notified: t({ english: 'Ramu Kisan and the owner have been notified.', hindi: 'रामू किसान और मालिक को सूचित किया गया।', tamil: 'ராமு கிசான் மற்றும் உரிமையாளர் தெரிவிக்கப்பட்டனர்.', marathi: 'रामू किसान आणि मालकाला सूचित केले आहे.' }),
    description: t({ english: 'You\'ve marked the equipment as delivered to the farm. The booking timeline has been updated.', hindi: 'आपने उपकरण को खेत पर डिलीवर के रूप में चिह्नित किया है। बुकिंग टाइमलाइन अपडेट हो गई है।', tamil: 'உபகரணத்தை தோட்டத்திற்கு வழங்கப்பட்டதாக நீங்கள் குறித்தீர்கள். முன்பதிவு காலவரிசை புதுப்பிக்கப்பட்டது.', marathi: 'तुम्ही उपकरण शेतावर वितरित म्हणून चिन्हांकित केले. बुकिंग टाइमलाइन अपडेट झाली.' }),
    nextStatus: t({ english: 'Next: In Use', hindi: 'अगला: उपयोग में', tamil: 'அடுத்தது: பயன்பாட்டில்', marathi: 'पुढील: वापरात' }),
    nextHint: t({ english: 'Tap "Update Status" when farmer starts using', hindi: 'जब किसान उपयोग शुरू करे तो "स्थिति अपडेट" टैप करें', tamil: 'விவசாயி பயன்படுத்தத் தொடங்கும்போது "நிலை புதுப்பிக்கவும்" என்பதை தட்டவும்', marathi: 'शेतकरी वापरण्यास सुरुवात केल्यावर "स्थिती अपडेट" टॅप करा' }),
    backToBookings: t({ english: 'Back to Bookings', hindi: 'बुकिंग पर वापस', tamil: 'முன்பதிவுகளுக்கு திரும்பு', marathi: 'बुकिंगकडे परत जा' }),
    viewTimeline: t({ english: 'View Updated Booking Detail', hindi: 'अपडेट बुकिंग विवरण देखें', tamil: 'புதுப்பிக்கப்பட்ட முன்பதிவு விவரம் பார்க்கவும்', marathi: 'अपडेट बुकिंग तपशील पहा' }),
    equipment: t({ english: 'Mahindra 475 DI', hindi: 'महिंद्रा 475 DI', tamil: 'மஹிந்திரா 475 DI', marathi: 'महिंद्रा 475 DI' }),
    farmer: t({ english: 'Ramu Kisan · Wardha', hindi: 'रामू किसान · वर्धा', tamil: 'ராமு கிசான் · வர்தா', marathi: 'रामू किसान · वर्धा' }),
  };

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
            <span className="font-bold text-[11px]" style={interFont}>9:15</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Blue Gradient Header */}
          <div
            className="px-[18px] pt-4 pb-6 rounded-b-[36px] relative"
            style={{
              background: 'var(--gradient-operator)',
              boxShadow: 'var(--card-shadow-operator)',
              backgroundImage: `var(--gradient-operator), ${svgPattern}`,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>
                  #BK-20457
                </div>
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>
                  {strings.statusUpdated}
                </div>
              </div>
              {/* Success check badge */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[20px]"
                style={{ background: 'rgba(255,255,255,0.25)', border: '2px solid rgba(255,255,255,0.5)' }}
              >
                ✅
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">

            {/* Main confirmation card */}
            <div
              className="bg-white rounded-[24px] p-5 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              {/* Success illustration */}
              <div className="flex flex-col items-center mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-[32px] mb-3"
                  style={{ background: 'var(--operator-blue-pale)' }}
                >
                  📍
                </div>
                <div
                  className="text-[17px] font-bold text-center mb-1"
                  style={{ ...poppinsFont, color: 'var(--text-dark)' }}
                >
                  {strings.confirmed}
                </div>
                <div
                  className="text-[11px] font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'var(--operator-blue-pale)', color: 'var(--operator-blue)', ...interFont }}
                >
                  🕐 {strings.timestamp}
                </div>
              </div>

              {/* Description */}
              <div
                className="text-[12px] text-center leading-relaxed mb-3"
                style={{ color: 'var(--text-mid)', ...interFont }}
              >
                {strings.description}
              </div>
              <div
                className="text-[11px] text-center font-semibold"
                style={{ color: 'var(--operator-blue)', ...interFont }}
              >
                🔔 {strings.notified}
              </div>

              {/* Divider */}
              <div className="my-3" style={{ borderTop: '1px solid #F5F2ED' }} />

              {/* Booking summary row */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  🚜
                </div>
                <div className="flex-1">
                  <div
                    className="text-[12px] font-bold"
                    style={{ ...poppinsFont, color: 'var(--text-dark)' }}
                  >
                    {strings.equipment}
                  </div>
                  <div
                    className="text-[10px]"
                    style={{ color: 'var(--text-soft)', ...interFont }}
                  >
                    👨‍🌾 {strings.farmer}
                  </div>
                </div>
                <div
                  className="text-[10px] font-bold px-2 py-1 rounded-lg"
                  style={{ background: 'var(--operator-blue-pale)', color: 'var(--operator-blue)', ...interFont }}
                >
                  Delivered
                </div>
              </div>
            </div>

            {/* Updated timeline (compact) */}
            <div
              className="bg-white rounded-[18px] p-3 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="text-[11px] font-bold mb-2.5" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                📋 Updated Timeline
              </div>
              <div className="space-y-1.5">
                {[
                  { label: t({ english: 'Booked', hindi: 'बुक', tamil: 'முன்பதிவு', marathi: 'बुक' }), done: true },
                  { label: t({ english: 'Accepted', hindi: 'स्वीकृत', tamil: 'ஏற்கப்பட்டது', marathi: 'स्वीकृत' }), done: true },
                  { label: t({ english: 'Equipment Ready', hindi: 'तैयार', tamil: 'தயார்', marathi: 'तयार' }), done: true },
                  { label: t({ english: 'On The Way', hindi: 'रास्ते में', tamil: 'வழியில்', marathi: 'रस्त्यावर' }), done: true },
                  { label: t({ english: 'Delivered ✓', hindi: 'डिलीवर ✓', tamil: 'வழங்கப்பட்டது ✓', marathi: 'वितरित ✓' }), done: true, isCurrent: true },
                  { label: t({ english: 'In Use', hindi: 'उपयोग में', tamil: 'பயன்பாட்டில்', marathi: 'वापरात' }), done: false },
                  { label: t({ english: 'Completed', hindi: 'पूर्ण', tamil: 'முடிந்தது', marathi: 'पूर्ण' }), done: false },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[8px]"
                      style={{
                        background: step.done ? 'var(--operator-blue)' : '#E5E7EB',
                        color: step.done ? 'white' : '#9CA3AF'
                      }}
                    >
                      {step.done ? '✓' : '○'}
                    </div>
                    <div
                      className="text-[10px] font-semibold"
                      style={{
                        color: step.isCurrent ? 'var(--operator-blue)' : step.done ? 'var(--text-dark)' : 'var(--text-soft)',
                        ...interFont
                      }}
                    >
                      {step.label}
                    </div>
                    {step.isCurrent && (
                      <div
                        className="ml-auto text-[8px] font-bold px-1.5 py-0.5 rounded"
                        style={{ background: 'var(--operator-blue)', color: 'white', ...interFont }}
                      >
                        NOW
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Next status preview strip */}
            <div
              className="rounded-[14px] p-3 mb-1 flex items-start gap-2.5"
              style={{ background: 'var(--operator-blue-pale)', border: '1px solid var(--operator-blue-tint)' }}
            >
              <div className="text-[18px] mt-0.5">🚜</div>
              <div className="flex-1">
                <div
                  className="text-[11px] font-bold mb-0.5"
                  style={{ ...poppinsFont, color: 'var(--operator-blue)' }}
                >
                  {strings.nextStatus}
                </div>
                <div
                  className="text-[10px]"
                  style={{ color: 'var(--operator-blue)', opacity: 0.8, ...interFont }}
                >
                  {strings.nextHint}
                </div>
              </div>
              <div className="text-[18px]">→</div>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="px-4 pb-2 pt-2 flex flex-col gap-2" style={{ borderTop: '1px solid #F0EDE7' }}>
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
            <div
              className="ky-tap-link w-full rounded-[14px] py-2.5 text-[13px] font-bold flex items-center justify-center gap-1.5"
              style={{
                border: '1.5px solid var(--operator-blue)',
                color: 'var(--operator-blue)',
                ...poppinsFont
              }}
            >
              👁 {strings.viewTimeline}
            </div>
            <div className="text-[9px] text-center" style={{ color: 'var(--text-soft)', ...interFont }}>
              ↑ {t({ english: 'Goes to: Booking Detail screen (OB2)', hindi: 'जाता है: बुकिंग विवरण स्क्रीन (OB2)', tamil: 'செல்கிறது: முன்பதிவு விவரம் திரை (OB2)', marathi: 'जाते: बुकिंग तपशील स्क्रीन (OB2)' })}
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
