import { useLanguage } from '../../contexts/language';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function RequestStatusTrackingDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'Request Status', hindi: 'अनुरोध स्थिति', tamil: 'கோரிக்கை நிலை', marathi: 'विनंती स्थिती' }),
    subtitle: t({ english: 'Track your request', hindi: 'अपने अनुरोध को ट्रैक करें', tamil: 'உங்கள் கோரிக்கையைக் கண்காணிக்கவும்', marathi: 'तुमच्या विनंतीचा मागोवा घ्या' }),
    live: t({ english: 'LIVE', hindi: 'लाइव', tamil: 'நேரடி', marathi: 'लाइव्ह' }),
    equipment: t({ english: '50 HP Tractor', hindi: '50 HP ट्रैक्टर', tamil: '50 HP டிராக்டர்', marathi: '50 HP ट्रॅक्टर' }),
    location: t({ english: 'Hinganghat, Wardha', hindi: 'हिंगणघाट, वर्धा', tamil: 'ஹிங்கன்காட், வர்தா', marathi: 'हिंगणघाट, वर्धा' }),
    dates: t({ english: 'Mar 20-23 (4 days)', hindi: 'मार्च 20-23 (4 दिन)', tamil: 'மார்ச் 20-23 (4 நாட்கள்)', marathi: 'मार्च 20-23 (4 दिवस)' }),
    radius: t({ english: '25 km', hindi: '25 किमी', tamil: '25 கி.மீ', marathi: '25 किमी' }),
    timelineTitle: t({ english: 'Request Timeline', hindi: 'अनुरोध समयरेखा', tamil: 'கோரிக்கை காலவரிசை', marathi: 'विनंती टाइमलाइन' }),
    step1: t({ english: 'Request Posted', hindi: 'अनुरोध पोस्ट किया', tamil: 'கோரிக்கை பதிவாகியது', marathi: 'विनंती पोस्ट झाली' }),
    step1Time: t({ english: 'Mar 18, 2:30 PM', hindi: '18 मार्च, 2:30 PM', tamil: 'மார்ச் 18, 2:30 PM', marathi: '18 मार्च, 2:30 PM' }),
    step2: t({ english: 'Notified 12 owners within 25 km', hindi: '25 किमी के भीतर 12 मालिकों को सूचित किया', tamil: '25 கி.மீ க்குள் 12 உரிமையாளர்களுக்கு அறிவிக்கப்பட்டது', marathi: '25 किमी आत 12 मालकांना सूचित केले' }),
    step2Time: t({ english: 'Mar 18, 2:31 PM', hindi: '18 मार्च, 2:31 PM', tamil: 'மார்ச் 18, 2:31 PM', marathi: '18 मार्च, 2:31 PM' }),
    step3: t({ english: '2 offers received', hindi: '2 ऑफर प्राप्त हुए', tamil: '2 சலுகைகள் கிடைத்தன', marathi: '2 ऑफर प्राप्त झाले' }),
    step3Time: t({ english: 'Mar 18, 4:15 PM', hindi: '18 मार्च, 4:15 PM', tamil: 'மார்ச் 18, 4:15 PM', marathi: '18 मार्च, 4:15 PM' }),
    viewOffers: t({ english: 'View Offers', hindi: 'ऑफर देखें', tamil: 'சலுகைகள் காண்க', marathi: 'ऑफर पहा' }),
    step4: t({ english: 'Waiting for more offers', hindi: 'और ऑफर की प्रतीक्षा', tamil: 'மேலும் சலுகைகளுக்காக காத்திருக்கிறது', marathi: 'अधिक ऑफरची वाट पाहत आहे' }),
    step4Time: t({ english: 'Expires in 2 days', hindi: '2 दिनों में समाप्त', tamil: '2 நாட்களில் காலாவதியாகும்', marathi: '2 दिवसांत कालबाह्य' }),
    step5: t({ english: 'Accept offer & book', hindi: 'ऑफर स्वीकार करें और बुक करें', tamil: 'சலுகையை ஏற்று முன்பதிவு செய்யவும்', marathi: 'ऑफर स्वीकारा आणि बुक करा' }),
    step6: t({ english: 'Request fulfilled', hindi: 'अनुरोध पूरा हुआ', tamil: 'கோரிக்கை நிறைவேறியது', marathi: 'विनंती पूर्ण झाली' }),
    offersTitle: t({ english: '2 Offers Received', hindi: '2 ऑफर प्राप्त', tamil: '2 சலுகைகள் கிடைத்தன', marathi: '2 ऑफर प्राप्त' }),
    perDay: t({ english: '/day', hindi: '/दिन', tamil: '/நாள்', marathi: '/दिवस' }),
    view: t({ english: 'View', hindi: 'देखें', tamil: 'காண்க', marathi: 'पहा' }),
    extendRadius: t({ english: 'Extend Radius', hindi: 'दायरा बढ़ाएं', tamil: 'ஆரம் விரிவாக்கு', marathi: 'परिसर वाढवा' }),
    editRequest: t({ english: 'Edit Request', hindi: 'अनुरोध संपादित करें', tamil: 'கோரிக்கையை திருத்து', marathi: 'विनंती संपादित करा' }),
    cancel: t({ english: 'Cancel', hindi: 'रद्द करें', tamil: 'ரத்து செய்', marathi: 'रद्द करा' }),
  };

  const timeline = [
    {
      label: strings.step1,
      time: strings.step1Time,
      status: 'completed' as const,
      icon: '✅',
    },
    {
      label: strings.step2,
      time: strings.step2Time,
      status: 'completed' as const,
      icon: '✅',
    },
    {
      label: strings.step3,
      time: strings.step3Time,
      status: 'completed' as const,
      icon: '✅',
      link: strings.viewOffers,
    },
    {
      label: strings.step4,
      time: strings.step4Time,
      status: 'pending' as const,
      icon: '⏳',
    },
    {
      label: strings.step5,
      time: '',
      status: 'future' as const,
      icon: '○',
    },
    {
      label: strings.step6,
      time: '',
      status: 'future' as const,
      icon: '○',
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:45</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Saffron Gradient */}
          <div
            className="px-5 pt-4 pb-5 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  📋 {strings.subtitle}
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.title}
                </div>
              </div>
            </div>

            {/* Request summary bar */}
            <div
              className="rounded-[16px] p-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[16px]">🚜</span>
                  <span className="text-white text-[13px] font-semibold">
                    {strings.equipment}
                  </span>
                </div>
                <div
                  className="rounded-full px-3 py-1 text-[10px] font-bold text-white flex items-center gap-1"
                  style={{ background: 'rgba(26,122,59,0.7)' }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: '#4ADE80', animation: 'pulse 1.5s infinite' }}
                  />
                  {strings.live}
                </div>
              </div>
              <div className="flex items-center gap-3 text-[10px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <span>📍 {strings.location}</span>
                <span>📅 {strings.dates}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
                >
                  📡 {strings.radius}
                </span>
                <span
                  className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
                >
                  RQ-2025-03-001
                </span>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Timeline Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📋 {strings.timelineTitle}
              </div>

              <div className="space-y-0">
                {timeline.map((step, index) => {
                  const isCompleted = step.status === 'completed';
                  const isPending = step.status === 'pending';
                  const isFuture = step.status === 'future';

                  return (
                    <div key={index} className="flex gap-3">
                      {/* Vertical line + icon */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] flex-shrink-0"
                          style={{
                            background: isCompleted
                              ? 'var(--green-pale)'
                              : isPending
                              ? 'var(--saffron-pale)'
                              : '#F5F5F5',
                            border: isCompleted
                              ? '2px solid var(--green)'
                              : isPending
                              ? '2px solid var(--saffron)'
                              : '2px solid #E0E0E0',
                          }}
                        >
                          {isFuture ? (
                            <span style={{ color: 'var(--text-soft)', fontSize: '10px' }}>○</span>
                          ) : (
                            step.icon
                          )}
                        </div>
                        {index < timeline.length - 1 && (
                          <div
                            className="w-0.5 flex-1 mt-0.5"
                            style={{
                              background: isCompleted ? 'var(--green)' : '#E0E0E0',
                              minHeight: '28px',
                            }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-3">
                        <div
                          className="text-[11px] font-bold"
                          style={{
                            color: isFuture ? 'var(--text-soft)' : 'var(--text-dark)',
                            fontFamily: "'Baloo 2', cursive",
                          }}
                        >
                          {step.label}
                        </div>
                        {step.time && (
                          <div
                            className="text-[9px] mt-0.5"
                            style={{
                              color: isPending ? 'var(--saffron)' : 'var(--text-soft)',
                              fontWeight: isPending ? 600 : 400,
                            }}
                          >
                            {isPending && (
                              <span
                                className="inline-block w-1.5 h-1.5 rounded-full mr-1 align-middle"
                                style={{ background: 'var(--saffron)', animation: 'pulse 1.5s infinite' }}
                              />
                            )}
                            {step.time}
                          </div>
                        )}
                        {step.link && (
                          <div
                            className="ky-tap-link text-[10px] font-bold mt-1 cursor-pointer"
                            style={{ color: 'var(--saffron)' }}
                          >
                            {step.link} →
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Offers Summary Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💬 {strings.offersTitle}
              </div>

              {/* Offer 1 */}
              <div
                className="flex items-center gap-3 p-3 rounded-[14px] mb-2"
                style={{ background: 'var(--cream)', border: '1px solid #F0EDE7' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[14px]"
                  style={{ background: 'linear-gradient(135deg, var(--saffron), var(--gold))' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Harpreet Singh
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-mid)' }}>
                    ₹2,400{strings.perDay} · ⭐ 4.8
                  </div>
                </div>
                <div
                  className="ky-tap-link rounded-[10px] px-3 py-1.5 text-[10px] font-bold cursor-pointer"
                  style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                >
                  {strings.view}
                </div>
              </div>

              {/* Offer 2 */}
              <div
                className="flex items-center gap-3 p-3 rounded-[14px]"
                style={{ background: 'var(--cream)', border: '1px solid #F0EDE7' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[14px]"
                  style={{ background: 'linear-gradient(135deg, var(--saffron), var(--gold))' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Suresh Patil
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-mid)' }}>
                    ₹2,200{strings.perDay} · ⭐ 4.5
                  </div>
                </div>
                <div
                  className="ky-tap-link rounded-[10px] px-3 py-1.5 text-[10px] font-bold cursor-pointer"
                  style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                >
                  {strings.view}
                </div>
              </div>
            </div>

            {/* Actions Row */}
            <div className="flex gap-2 mb-2">
              <div
                className="ky-tap-cta-secondary flex-1 rounded-[12px] py-2.5 text-[10px] font-bold text-center cursor-pointer"
                style={{ background: 'white', color: 'var(--saffron)', border: '1.5px solid var(--saffron)' }}
              >
                📡 {strings.extendRadius}
              </div>
              <div
                className="ky-tap-cta-secondary flex-1 rounded-[12px] py-2.5 text-[10px] font-bold text-center cursor-pointer"
                style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
              >
                ✏️ {strings.editRequest}
              </div>
            </div>
            <div
              className="ky-tap-link text-center text-[11px] font-semibold py-2 cursor-pointer"
              style={{ color: '#CC3333' }}
            >
              {strings.cancel}
            </div>
          </div>

          {/* Bottom Nav */}
          <FarmerBottomNav activeTab="bookings" />

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
