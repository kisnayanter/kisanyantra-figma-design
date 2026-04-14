import { useLanguage } from '../../contexts/language';

export function ChatInterfaceDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    chat: t({
      english: 'Chat',
      hindi: 'चैट',
      tamil: 'அரட்டு',
      marathi: 'चॅट'
    }),
    booking: t({
      english: 'Booking',
      hindi: 'बुकिंग',
      tamil: 'முன்பதிவு',
      marathi: 'बुकिंग'
    }),
    equipment: t({
      english: 'Equipment',
      hindi: 'उपकरण',
      tamil: 'உபகரணம்',
      marathi: 'उपकरण'
    }),
    typeMessage: t({
      english: 'Type a message...',
      hindi: 'संदेश टाइप करें...',
      tamil: 'செய்தியை தட்டச்சு...',
      marathi: 'संदेश टाइप करा...'
    }),
    send: t({
      english: 'Send',
      hindi: 'भेजें',
      tamil: 'அனுப்பு',
      marathi: 'पाठवा'
    }),
    quickReplies: t({
      english: 'Quick Replies',
      hindi: 'त्वरित उत्तर',
      tamil: 'விரைவான பதில்கள்',
      marathi: 'जलद उत्तरे'
    }),
    onMyWay: t({
      english: 'On my way!',
      hindi: 'मैं रास्ते में हूं!',
      tamil: 'நான் வழியில் இருக்கிறேன்!',
      marathi: 'मी रस्त्यावर आहे!'
    }),
    arrivingAt: t({
      english: 'Arriving in 10 mins',
      hindi: '10 मिनट में पहुंच रहा हूं',
      tamil: '10 நிமிடங்களில் வருகிறேன்',
      marathi: '10 मिनिटांत पोहोईल'
    }),
    startedWork: t({
      english: 'Started work',
      hindi: 'काम शुरू',
      tamil: 'வேல் தொடங்கினார்',
      marathi: 'काम सुरू झाले'
    }),
    completed: t({
      english: 'Work completed',
      hindi: 'काम पूरा',
      tamil: 'வேல் முடிந்தது',
      marathi: 'काम पूर्ण झाले'
    }),
    call: t({
      english: 'Call',
      hindi: 'कॉल करें',
      tamil: 'அழை',
      marathi: 'कॉल करा'
    })
  };

  const farmer = {
    name: 'Ramu Kisan',
    photo: '👨‍🌾',
    bookingId: 'BK-2026-015',
    equipment: 'Mahindra 475 DI'
  };

  const messages = [
    { id: 1, sender: 'farmer', text: 'Hi, is the equipment available for 10 AM?', time: '10:00 AM' },
    { id: 2, sender: 'operator', text: 'Yes, it\'s available. I\'ll be there on time.', time: '10:05 AM' },
    { id: 3, sender: 'farmer', text: 'Great! Can you arrive at 9:30 AM instead?', time: '10:30 AM' },
    { id: 4, sender: 'operator', text: 'Sure, I can adjust. See you at 9:30 AM!', time: '10:32 AM' }
  ];

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };

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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={interFont}>9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Blue Gradient Header */}
          <div
            className="px-[18px] pt-4 pb-4 rounded-b-[36px] relative"
            style={{
              background: 'var(--gradient-operator)',
              boxShadow: 'var(--card-shadow-operator)',
              backgroundImage: `
                var(--gradient-operator),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <button className="text-white text-[16px]">←</button>
              <div
                className="text-white text-[16px] font-bold"
                style={poppinsFont}
              >
                {strings.chat}
              </div>
              <button className="ml-auto text-white text-[16px]">📞</button>
            </div>

            {/* Farmer Info */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[18px]"
                style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
              >
                {farmer.photo}
              </div>
              <div className="flex-1">
                <div className="text-white text-[14px] font-bold" style={poppinsFont}>
                  {farmer.name}
                </div>
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.8)', ...interFont }}>
                  {farmer.bookingId} · {farmer.equipment}
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'operator' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] rounded-[16px] p-3 ${
                      message.sender === 'operator'
                        ? 'rounded-br-none'
                        : 'rounded-bl-none'
                    }`}
                    style={{
                      background: message.sender === 'operator'
                        ? 'var(--gradient-operator)'
                        : '#F5F5F5',
                      boxShadow: 'var(--card-shadow-sm)'
                    }}
                  >
                    <div
                      className="text-[14px]"
                      style={{
                        color: message.sender === 'operator' ? 'white' : 'var(--text-primary)',
                        ...interFont
                      }}
                    >
                      {message.text}
                    </div>
                    <div
                      className="text-[10px] mt-1 text-right"
                      style={{
                        color: message.sender === 'operator' ? 'rgba(255,255,255,0.7)' : 'var(--text-soft)',
                        ...interFont
                      }}
                    >
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2">
            <div className="text-[12px] mb-2" style={{ color: 'var(--text-secondary)', ...interFont }}>
              {strings.quickReplies}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[
                { label: strings.onMyWay },
                { label: strings.arrivingAt },
                { label: strings.startedWork },
                { label: strings.completed }
              ].map((reply) => (
                <button
                  key={reply.label}
                  className="px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap flex-shrink-0"
                  style={{
                    background: 'var(--operator-blue-pale)',
                    color: 'var(--operator-blue)',
                    border: '1.5px solid var(--operator-blue)',
                    ...interFont
                  }}
                >
                  {reply.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="px-4 pb-4 pt-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder={strings.typeMessage}
                className="flex-1 px-4 py-3 rounded-[12px] text-[14px]"
                style={{
                  border: '1.5px solid #E0E0E0',
                  ...interFont,
                  color: 'var(--text-primary)'
                }}
              />
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center text-[20px]"
                style={{
                  background: 'var(--gradient-operator)',
                  color: 'white',
                  boxShadow: '0 4px 16px rgba(47,128,255,0.4)'
                }}
              >
                ➤
              </button>
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
