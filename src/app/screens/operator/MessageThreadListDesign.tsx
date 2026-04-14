import { useLanguage } from '../../contexts/language';

export function MessageThreadListDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    messages: t({
      english: 'Messages',
      hindi: 'संदेश',
      tamil: 'செய்திகள்',
      marathi: 'संदेश'
    }),
    search: t({
      english: 'Search conversations...',
      hindi: 'बातचीत खोजें...',
      tamil: 'உரையாடல்களைத் தேடவும்...',
      marathi: 'संभाषणे शोधा...'
    }),
    today: t({
      english: 'Today',
      hindi: 'आज',
      tamil: 'இன்று',
      marathi: 'आज'
    }),
    yesterday: t({
      english: 'Yesterday',
      hindi: 'कल',
      tamil: 'நேற்று',
      marathi: 'काल'
    }),
    thisWeek: t({
      english: 'This Week',
      hindi: 'इस सप्ताह',
      tamil: 'இந்த வாரம்',
      marathi: 'या आठवड्यात'
    }),
    farmer: t({
      english: 'Farmer',
      hindi: 'किसान',
      tamil: 'விவசாயி',
      marathi: 'शेतकरी'
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
    })
  };

  const conversations = [
    {
      id: 1,
      farmerName: 'Ramu Kisan',
      farmerPhoto: '👨‍🌾',
      lastMessage: 'Can you arrive at 9:30 AM?',
      time: '10:30 AM',
      unread: 2,
      bookingId: 'BK-2026-015',
      equipment: 'Mahindra 475 DI',
      date: 'Today'
    },
    {
      id: 2,
      farmerName: 'Suresh Patil',
      farmerPhoto: '👨‍🌾',
      lastMessage: 'Thanks for the service!',
      time: '2:15 PM',
      unread: 0,
      bookingId: 'BK-2026-014',
      equipment: 'Combine Harvester',
      date: 'Today'
    },
    {
      id: 3,
      farmerName: 'Vijay Singh',
      farmerPhoto: '👨‍🌾',
      lastMessage: 'Is the equipment ready?',
      time: 'Yesterday',
      unread: 1,
      bookingId: 'BK-2026-013',
      equipment: 'Rotavator',
      date: 'Yesterday'
    },
    {
      id: 4,
      farmerName: 'Amit Kumar',
      farmerPhoto: '👨‍🌾',
      lastMessage: 'Payment done. Thank you!',
      time: '2 days ago',
      unread: 0,
      bookingId: 'BK-2026-010',
      equipment: 'Power Tiller',
      date: 'This Week'
    }
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
            className="px-[18px] pt-4 pb-5 rounded-b-[36px] relative"
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
            <div className="flex items-center gap-3 mb-4">
              <button className="text-white text-[18px]">←</button>
              <div
                className="text-white text-[18px] font-bold"
                style={poppinsFont}
              >
                {strings.messages}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder={strings.search}
                className="w-full px-4 py-3 pl-10 rounded-[12px] text-[14px]"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  ...interFont
                }}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-[16px]">🔍</span>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto">
            {/* Today Section */}
            <div className="px-4 py-2">
              <div className="text-[12px] font-medium mb-2" style={{ color: 'var(--text-secondary)', ...interFont }}>
                {strings.today}
              </div>
              {conversations.filter(c => c.date === 'Today').map((conversation) => (
                <div
                  key={conversation.id}
                  className="bg-white rounded-[16px] p-3 mb-2 flex items-center gap-3"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[24px] flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                  >
                    {conversation.farmerPhoto}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                        {conversation.farmerName}
                      </div>
                      <div className="text-[12px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                        {conversation.time}
                      </div>
                    </div>
                    <div className="text-[14px] truncate" style={{ color: 'var(--text-secondary)', ...interFont }}>
                      {conversation.lastMessage}
                    </div>
                    <div className="text-[12px] mt-1" style={{ color: 'var(--text-soft)', ...interFont }}>
                      {conversation.bookingId} · {conversation.equipment}
                    </div>
                  </div>
                  {conversation.unread > 0 && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--operator-blue)' }}
                    >
                      <span className="text-white text-[12px] font-bold" style={poppinsFont}>
                        {conversation.unread}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Yesterday Section */}
            <div className="px-4 py-2">
              <div className="text-[12px] font-medium mb-2" style={{ color: 'var(--text-secondary)', ...interFont }}>
                {strings.yesterday}
              </div>
              {conversations.filter(c => c.date === 'Yesterday').map((conversation) => (
                <div
                  key={conversation.id}
                  className="bg-white rounded-[16px] p-3 mb-2 flex items-center gap-3"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[24px] flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                  >
                    {conversation.farmerPhoto}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                        {conversation.farmerName}
                      </div>
                      <div className="text-[12px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                        {conversation.time}
                      </div>
                    </div>
                    <div className="text-[14px] truncate" style={{ color: 'var(--text-secondary)', ...interFont }}>
                      {conversation.lastMessage}
                    </div>
                    <div className="text-[12px] mt-1" style={{ color: 'var(--text-soft)', ...interFont }}>
                      {conversation.bookingId} · {conversation.equipment}
                    </div>
                  </div>
                  {conversation.unread > 0 && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--operator-blue)' }}
                    >
                      <span className="text-white text-[12px] font-bold" style={poppinsFont}>
                        {conversation.unread}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* This Week Section */}
            <div className="px-4 py-2">
              <div className="text-[12px] font-medium mb-2" style={{ color: 'var(--text-secondary)', ...interFont }}>
                {strings.thisWeek}
              </div>
              {conversations.filter(c => c.date === 'This Week').map((conversation) => (
                <div
                  key={conversation.id}
                  className="bg-white rounded-[16px] p-3 mb-2 flex items-center gap-3"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[24px] flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                  >
                    {conversation.farmerPhoto}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                        {conversation.farmerName}
                      </div>
                      <div className="text-[12px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                        {conversation.time}
                      </div>
                    </div>
                    <div className="text-[14px] truncate" style={{ color: 'var(--text-secondary)', ...interFont }}>
                      {conversation.lastMessage}
                    </div>
                    <div className="text-[12px] mt-1" style={{ color: 'var(--text-soft)', ...interFont }}>
                      {conversation.bookingId} · {conversation.equipment}
                    </div>
                  </div>
                </div>
              ))}
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
