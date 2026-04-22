import { useLanguage } from '../../contexts/language';
import { OperatorBottomNav } from '../../components/OperatorBottomNav';

export function OperatorBookingManagementDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    myBookings: t({
      english: 'My Bookings',
      hindi: 'मेरी बुकिंग',
      tamil: 'எனது முன்பதிவுகள்',
      marathi: 'माझी बुकिंग'
    }),
    today: t({
      english: 'Today',
      hindi: 'आज',
      tamil: 'இன்று',
      marathi: 'आज'
    }),
    upcoming: t({
      english: 'Upcoming',
      hindi: 'आगामी',
      tamil: 'வரவிருக்கும்',
      marathi: 'आगामी'
    }),
    completed: t({
      english: 'Completed',
      hindi: 'पूर्ण',
      tamil: 'முடிந்தது',
      marathi: 'पूर्ण'
    }),
    cancelled: t({
      english: 'Cancelled',
      hindi: 'रद्द',
      tamil: 'ரத்து செய்யப்பட்டது',
      marathi: 'रद्द'
    }),
    pending: t({
      english: 'Pending',
      hindi: 'लंबित',
      tamil: 'நிலுவையில்',
      marathi: 'प्रलंबित'
    }),
    confirmed: t({
      english: 'Confirmed',
      hindi: 'पुष्टि',
      tamil: 'உறுதிப்படுத்தப்பட்டது',
      marathi: 'पुष्टीकरण'
    }),
    accept: t({
      english: 'Accept',
      hindi: 'स्वीकार करें',
      tamil: 'ஏற்கவும்',
      marathi: 'स्वीकार करा'
    }),
    decline: t({
      english: 'Decline',
      hindi: 'अस्वीकार करें',
      tamil: 'மறு',
      marathi: 'नकारा'
    }),
    complete: t({
      english: 'Complete',
      hindi: 'पूरा करें',
      tamil: 'முடிக்கவும்',
      marathi: 'पूर्ण करा'
    }),
    message: t({
      english: 'Message',
      hindi: 'संदेश',
      tamil: 'செய்தி',
      marathi: 'संदेश'
    }),
    farmer: t({
      english: 'Farmer',
      hindi: 'किसान',
      tamil: 'விவசாயி',
      marathi: 'शेतकरी'
    }),
    equipment: t({
      english: 'Equipment',
      hindi: 'उपकरण',
      tamil: 'உபகரணம்',
      marathi: 'उपकरण'
    }),
    time: t({
      english: 'Time',
      hindi: 'समय',
      tamil: 'நேரம்',
      marathi: 'वेळ'
    })
  };

  const bookings = [
    { 
      id: 1, 
      farmer: 'Ramu Kisan', 
      farmerPhoto: '👨‍🌾',
      equipment: 'Mahindra 475 DI',
      equipmentIcon: '🚜',
      time: '10:00 AM',
      date: 'Today',
      status: 'pending',
      location: 'Wardha'
    },
    { 
      id: 2, 
      farmer: 'Suresh Patil', 
      farmerPhoto: '👨‍🌾',
      equipment: 'Combine Harvester',
      equipmentIcon: '🌾',
      time: '2:00 PM',
      date: 'Today',
      status: 'confirmed',
      location: 'Nagpur'
    },
    { 
      id: 3, 
      farmer: 'Vijay Singh', 
      farmerPhoto: '👨‍🌾',
      equipment: 'Mahindra 475 DI',
      equipmentIcon: '🚜',
      time: '4:00 PM',
      date: 'Today',
      status: 'confirmed',
      location: 'Amravati'
    },
    { 
      id: 4, 
      farmer: 'Amit Kumar', 
      farmerPhoto: '👨‍🌾',
      equipment: 'Rotavator',
      equipmentIcon: '⚙️',
      time: '9:00 AM',
      date: 'Tomorrow',
      status: 'pending',
      location: 'Yavatmal'
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
                {strings.myBookings}
              </div>
              <button className="ml-auto w-9 h-9 rounded-xl flex items-center justify-center text-base backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.15)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', color: 'white' }}>
                💬
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              {[
                { key: 'today', label: strings.today },
                { key: 'upcoming', label: strings.upcoming },
                { key: 'completed', label: strings.completed }
              ].map((tab) => (
                <button
                  key={tab.key}
                  className="flex-1 py-2 rounded-lg text-[12px] font-medium"
                  style={{
                    background: tab.key === 'today' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
                    color: 'white',
                    ...interFont
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-3">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="ky-tap-card bg-white rounded-[20px] overflow-hidden"
                  style={{ boxShadow: 'var(--card-shadow)' }}
                >
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                      >
                        {booking.farmerPhoto}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-[13px] mb-0.5" style={{ color: 'var(--text-dark)' }}>
                          {booking.farmer}
                        </div>
                        <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                          {strings.farmer} · {booking.location}
                        </div>
                      </div>
                      <div
                        className="text-[10px] font-bold px-2 py-1 rounded-lg"
                        style={{
                          background: booking.status === 'pending' ? 'var(--amber-pale)' : 'var(--operator-blue-pale)',
                          color: booking.status === 'pending' ? 'var(--amber)' : 'var(--operator-blue)',
                          ...interFont
                        }}
                      >
                        {booking.status === 'pending' ? strings.pending : booking.status === 'confirmed' ? strings.confirmed : strings.completed}
                      </div>
                    </div>

                    {/* Details */}
                    <div 
                      className="rounded-xl p-2.5 mb-3 flex items-center gap-2.5"
                      style={{ background: 'var(--cream)' }}
                    >
                      <div 
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-[20px] flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                      >
                        {booking.equipmentIcon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>
                          {booking.equipment}
                        </div>
                        <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                          {strings.equipment}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <div 
                        className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                        style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                      >
                        🕐 {booking.time} · {booking.date}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mb-3" style={{ borderTop: '1px solid #F5F2ED' }}></div>

                    {/* Actions */}
                    {booking.status === 'pending' ? (
                      <div className="flex gap-2">
                        <button
                          className="flex-1 py-2 rounded-lg text-[14px] font-bold"
                          style={{
                            background: 'var(--gradient-operator)',
                            color: 'white',
                            ...poppinsFont
                          }}
                        >
                          {strings.accept}
                        </button>
                        <button
                          className="flex-1 py-2 rounded-lg text-[14px] font-bold"
                          style={{
                            border: '1.5px solid #E0E0E0',
                            color: 'var(--text-primary)',
                            ...poppinsFont
                          }}
                        >
                          {strings.decline}
                        </button>
                      </div>
                    ) : booking.status === 'confirmed' ? (
                      <div className="flex gap-2">
                        <button
                          className="flex-1 py-2 rounded-lg text-[14px] font-bold"
                          style={{
                            background: 'var(--gradient-operator)',
                            color: 'white',
                            ...poppinsFont
                          }}
                        >
                          {strings.complete}
                        </button>
                        <button
                          className="flex-1 py-2 rounded-lg text-[14px] font-bold"
                          style={{
                            border: '1.5px solid #E0E0E0',
                            color: 'var(--text-primary)',
                            ...poppinsFont
                          }}
                        >
                          {strings.message}
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
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
