import { useLanguage } from '../../contexts/language';

export function OperatorBookingDetailDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    bookingDetail: t({ english: 'Booking Detail', hindi: 'बुकिंग विवरण', tamil: 'முன்பதிவு விவரம்', marathi: 'बुकिंग तपशील' }),
    statusTimeline: t({ english: 'Status Timeline', hindi: 'स्थिति समयरेखा', tamil: 'நிலை காலவரிசை', marathi: 'स्थिती टाइमलाइन' }),
    bookingSummary: t({ english: 'Booking Summary', hindi: 'बुकिंग सारांश', tamil: 'முன்பதிவு சுருக்கம்', marathi: 'बुकिंग सारांश' }),
    farmerDetails: t({ english: 'Farmer Details', hindi: 'किसान विवरण', tamil: 'விவசாயி விவரம்', marathi: 'शेतकरी तपशील' }),
    callFarmer: t({ english: 'Call', hindi: 'कॉल करें', tamil: 'அழைக்கவும்', marathi: 'कॉल करा' }),
    viewMap: t({ english: 'View Map', hindi: 'मानचित्र देखें', tamil: 'வரைபடம் பார்க்கவும்', marathi: 'नकाशा पहा' }),
    contactFarmer: t({ english: 'Contact Farmer', hindi: 'किसान से संपर्क करें', tamil: 'விவசாயியைத் தொடர்பு கொள்', marathi: 'शेतकऱ्याशी संपर्क करा' }),
    updateStatus: t({ english: 'Update Status', hindi: 'स्थिति अपडेट करें', tamil: 'நிலையை புதுப்பிக்கவும்', marathi: 'स्थिती अपडेट करा' }),
    current: t({ english: 'CURRENT', hindi: 'वर्तमान', tamil: 'தற்போதைய', marathi: 'सद्य' }),
    live: t({ english: 'LIVE', hindi: 'लाइव', tamil: 'நேரடி', marathi: 'थेट' }),
    dayOf: t({ english: 'Day 2 of 3', hindi: 'दिन 2/3', tamil: 'நாள் 2/3', marathi: 'दिवस 2/3' }),
    bookingId: t({ english: 'Booking ID', hindi: 'बुकिंग आईडी', tamil: 'முன்பதிவு ஐடி', marathi: 'बुकिंग आईडी' }),
    dateRange: t({ english: 'Jul 10 – Jul 12', hindi: 'जुल 10 – जुल 12', tamil: 'ஜுல் 10 – ஜுல் 12', marathi: 'जुल 10 – जुल 12' }),
    awayLabel: t({ english: '3.5 km away', hindi: '3.5 किमी दूर', tamil: '3.5 கி.மீ தொலைவு', marathi: '3.5 किमी दूर' }),
    onTheWay: t({ english: 'On The Way', hindi: 'रास्ते में', tamil: 'வழியில்', marathi: 'रस्त्यावर' }),
  };

  const timeline = [
    {
      status: t({ english: 'Booked', hindi: 'बुक किया', tamil: 'முன்பதிவு செய்யப்பட்டது', marathi: 'बुक केले' }),
      time: 'Jul 5, 2:30 PM',
      description: t({ english: 'Booking confirmed by farmer', hindi: 'किसान द्वारा बुकिंग की पुष्टि', tamil: 'விவசாயியால் முன்பதிவு உறுதிப்படுத்தப்பட்டது', marathi: 'शेतकऱ्याने बुकिंग निश्चित केली' }),
      completed: true,
      icon: '📝',
      color: 'var(--operator-blue)',
      current: false,
    },
    {
      status: t({ english: 'You Accepted', hindi: 'आपने स्वीकार किया', tamil: 'நீங்கள் ஏற்றீர்கள்', marathi: 'तुम्ही स्वीकारले' }),
      time: 'Jul 5, 3:15 PM',
      description: t({ english: 'You accepted Ramu Kisan\'s booking', hindi: 'आपने रामू किसान की बुकिंग स्वीकार की', tamil: 'ராமு கிசானின் முன்பதிவை நீங்கள் ஏற்றீர்கள்', marathi: 'तुम्ही रामू किसानची बुकिंग स्वीकारली' }),
      completed: true,
      icon: '✅',
      color: 'var(--operator-blue)',
      current: false,
    },
    {
      status: t({ english: 'Equipment Ready', hindi: 'उपकरण तैयार', tamil: 'உபகரணம் தயார்', marathi: 'उपकरण तयार' }),
      time: 'Jul 9, 6:00 PM',
      description: t({ english: 'Mahindra 475 DI prepared for dispatch', hindi: 'महिंद्रा 475 DI को भेजने के लिए तैयार', tamil: 'மஹிந்திரா 475 DI அனுப்புவதற்கு தயார்', marathi: 'महिंद्रा 475 DI पाठवण्यासाठी तयार' }),
      completed: true,
      icon: '🔧',
      color: 'var(--operator-blue)',
      current: false,
    },
    {
      status: t({ english: 'On The Way', hindi: 'रास्ते में', tamil: 'வழியில்', marathi: 'रस्त्यावर' }),
      time: 'Jul 10, 7:30 AM',
      description: t({ english: 'Equipment dispatched to farmer\'s location', hindi: 'उपकरण किसान के स्थान पर भेजा गया', tamil: 'உபகரணம் விவசாயியின் இடத்திற்கு அனுப்பப்பட்டது', marathi: 'उपकरण शेतकऱ्याच्या स्थानावर पाठवले' }),
      completed: true,
      icon: '🚚',
      color: 'var(--operator-blue)',
      current: true,
    },
    {
      status: t({ english: 'Delivered', hindi: 'पहुंचाया', tamil: 'வழங்கப்பட்டது', marathi: 'वितरित केले' }),
      time: t({ english: 'Pending', hindi: 'लंबित', tamil: 'நிலுவையில்', marathi: 'प्रलंबित' }),
      description: t({ english: 'Equipment delivered to farmer\'s farm', hindi: 'उपकरण किसान के खेत पर पहुंचाया', tamil: 'உபகரணம் விவசாயியின் தோட்டத்திற்கு வழங்கப்பட்டது', marathi: 'उपकरण शेतकऱ्याच्या शेतात वितरित केले' }),
      completed: false,
      icon: '📍',
      color: '#E0E0E0',
      current: false,
    },
    {
      status: t({ english: 'In Use', hindi: 'उपयोग में', tamil: 'பயன்பாட்டில்', marathi: 'वापरात' }),
      time: t({ english: 'Pending', hindi: 'लंबित', tamil: 'நிலுவையில்', marathi: 'प्रலंबित' }),
      description: t({ english: 'Farmer is using the equipment', hindi: 'किसान उपकरण का उपयोग कर रहा है', tamil: 'விவசாயி உபகரணத்தை பயன்படுத்துகிறார்', marathi: 'शेतकरी उपकरण वापरत आहे' }),
      completed: false,
      icon: '🚜',
      color: '#E0E0E0',
      current: false,
    },
    {
      status: t({ english: 'Completed', hindi: 'पूर्ण', tamil: 'முடிந்தது', marathi: 'पूर्ण' }),
      time: t({ english: 'Pending', hindi: 'लंबित', tamil: 'நிலுவையில்', marathi: 'प्रलंबित' }),
      description: t({ english: 'Rental period ends Jul 12, 6:00 PM', hindi: 'किराया अवधि जुल 12, 6:00 PM को समाप्त', tamil: 'வாடகை காலம் ஜுல் 12, 6:00 PM அன்று முடிகிறது', marathi: 'भाडे कालावधी जुल 12, 6:00 PM ला संपतो' }),
      completed: false,
      icon: '🏁',
      color: '#E0E0E0',
      current: false,
    },
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
            <span className="font-bold text-[11px]" style={interFont}>9:48</span>
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
            {/* Nav row */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>
                  {strings.bookingId} · #BK-20457
                </div>
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>
                  {strings.bookingDetail}
                </div>
              </div>
              <div
                className="ky-tap-icon w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                💬
              </div>
            </div>

            {/* Live status card */}
            <div
              className="rounded-[16px] p-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[26px]">🚚</div>
                <div className="flex-1">
                  <div className="text-white text-[13px] font-bold" style={poppinsFont}>
                    Mahindra 475 DI
                  </div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.8)', ...interFont }}>
                    {strings.onTheWay} · {strings.dayOf}
                  </div>
                </div>
                <div
                  className="rounded-lg px-2 py-1 text-[10px] font-bold animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.25)', color: 'white', ...interFont }}
                >
                  ◉ {strings.live}
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto px-4 py-3">

            {/* Booking summary card */}
            <div
              className="bg-white rounded-[18px] p-3 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="text-[12px] font-bold mb-2.5" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                📋 {strings.bookingSummary}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="text-[9px] font-semibold px-2 py-1 rounded-lg"
                  style={{ background: 'var(--operator-blue-pale)', color: 'var(--operator-blue)', ...interFont }}
                >
                  {strings.dateRange}
                </div>
                <div
                  className="text-[9px] font-semibold px-2 py-1 rounded-lg"
                  style={{ background: 'var(--cream)', color: 'var(--text-mid)', ...interFont }}
                >
                  📍 {strings.awayLabel}
                </div>
                <div
                  className="ky-tap-link ml-auto text-[9px] font-semibold"
                  style={{ color: 'var(--operator-blue)', ...interFont }}
                >
                  {strings.viewMap}
                </div>
              </div>

              {/* Farmer row */}
              <div className="flex items-center gap-2.5 pt-2.5" style={{ borderTop: '1px solid #F5F2ED' }}>
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-[18px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)', ...poppinsFont }}>
                    Ramu Kisan
                  </div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                    ⭐ 4.7 · Wardha, Maharashtra
                  </div>
                </div>
                <div
                  className="ky-tap-link rounded-lg px-2.5 py-1 text-[10px] font-bold"
                  style={{ background: 'var(--operator-blue-pale)', color: 'var(--operator-blue)', ...poppinsFont }}
                >
                  📞 {strings.callFarmer}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div
              className="text-[12px] font-bold mb-3"
              style={{ ...poppinsFont, color: 'var(--text-dark)' }}
            >
              📋 {strings.statusTimeline}
            </div>

            <div className="space-y-2">
              {timeline.map((event, index) => (
                <div key={event.status} className="flex gap-3">
                  {/* Icon + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[14px] flex-shrink-0"
                      style={{
                        background: event.completed ? event.color : '#F5F5F5',
                        border: event.current
                          ? '3px solid var(--operator-blue)'
                          : event.completed
                            ? `2px solid ${event.color}`
                            : '2px solid #E0E0E0'
                      }}
                    >
                      {event.icon}
                    </div>
                    {index < timeline.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-1"
                        style={{
                          background: event.completed ? 'var(--operator-blue)' : '#E0E0E0',
                          minHeight: '28px'
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-3">
                    <div className="flex justify-between items-start mb-0.5">
                      <div
                        className="text-[11px] font-bold"
                        style={{
                          color: event.completed ? 'var(--text-dark)' : 'var(--text-soft)',
                          ...poppinsFont
                        }}
                      >
                        {event.status}
                      </div>
                      {event.current && (
                        <div
                          className="rounded-md px-1.5 py-0.5 text-[8px] font-bold animate-pulse"
                          style={{ background: 'var(--operator-blue-pale)', color: 'var(--operator-blue)', ...interFont }}
                        >
                          {strings.current}
                        </div>
                      )}
                    </div>
                    <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                      {event.time}
                    </div>
                    <div className="text-[9px] mt-0.5" style={{ color: 'var(--text-mid)', ...interFont }}>
                      {event.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fixed bottom actions */}
          <div className="px-4 pb-4 pt-2 flex flex-col gap-2" style={{ borderTop: '1px solid #F0EDE7' }}>
            <div
              className="ky-tap-share w-full rounded-[14px] py-3 text-[13px] font-bold flex items-center justify-center gap-1.5 text-white"
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
              ⬆️ {strings.updateStatus}
            </div>
            {/* Quick-complete shortcut */}
            <div
              className="ky-tap-link w-full py-1.5 flex items-center justify-center gap-1.5 text-[11px] font-semibold"
              style={{ color: 'var(--operator-blue)', ...interFont }}
            >
              ⚡ {t({ english: 'Mark all steps as complete', hindi: 'सभी चरण पूर्ण करें', tamil: 'அனைத்து படிகளையும் முடிக்கவும்', marathi: 'सर्व चरण पूर्ण करा' })}
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
