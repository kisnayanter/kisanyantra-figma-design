import { useLanguage } from '../../contexts/language';
import { OperatorBottomNav } from '../../components/OperatorBottomNav';

export function OperatorDashboardDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    goodMorning: t({
      english: 'Good Morning 👋',
      hindi: 'सुप्रभात 👋',
      tamil: 'காலை வணக்கம் 👋',
      marathi: 'सुप्रभात 👋'
    }),
    goodAfternoon: t({
      english: 'Good Afternoon 👋',
      hindi: 'शुभ दोपहर 👋',
      tamil: 'மதிய வணக்கம் 👋',
      marathi: 'शुभ दुपार 👋'
    }),
    goodEvening: t({
      english: 'Good Evening 👋',
      hindi: 'शुभ संध्या 👋',
      tamil: 'மாலை வணக்கம் 👋',
      marathi: 'शुभ संध्याकाळ 👋'
    }),
    operatorDashboard: t({
      english: 'Operator Dashboard',
      hindi: 'ऑपरेटर डैशबोर्ड',
      tamil: 'செயல்படுத்தி டாஷ்போர்டு',
      marathi: 'ऑपरेटर डॅशबोर्ड'
    }),
    assignedEquipment: t({
      english: 'Assigned Equipment',
      hindi: 'सौंपा गया उपकरण',
      tamil: 'ஒதுக்கப்பட்ட உபகரணம்',
      marathi: 'सोपवलेली उपकरणे'
    }),
    todaysBookings: t({
      english: "Today's Bookings",
      hindi: 'आज की बुकिंग',
      tamil: 'இன்றைய முன்பதிவுகள்',
      marathi: 'आजची बुकिंग'
    }),
    viewAll: t({
      english: 'View All',
      hindi: 'सभी देखें',
      tamil: 'அனைத்தையும் பார்க்கவும்',
      marathi: 'सर्व पहा'
    }),
    myEquipment: t({
      english: 'My Equipment',
      hindi: 'मेरा उपकरण',
      tamil: 'எனது உபகரணம்',
      marathi: 'माझे उपकरण'
    }),
    myBookings: t({
      english: 'My Bookings',
      hindi: 'मेरी बुकिंग',
      tamil: 'எனது முன்பதிவுகள்',
      marathi: 'माझी बुकिंग'
    }),
    myEarnings: t({
      english: 'My Earnings',
      hindi: 'मेरी कमाई',
      tamil: 'எனது வருமானம்',
      marathi: 'माझी कमाई'
    }),
    active: t({
      english: 'Active',
      hindi: 'सक्रिय',
      tamil: 'செயலில்',
      marathi: 'सक्रिय'
    }),
    bookingsToday: t({
      english: 'bookings today',
      hindi: 'आज बुकिंग',
      tamil: 'இன்று முன்பதிவு',
      marathi: 'आज बुकिंग'
    }),
    today: t({
      english: 'Today',
      hindi: 'आज',
      tamil: 'இன்று',
      marathi: 'आज'
    }),
    available: t({
      english: 'Available',
      hindi: 'उपलब्ध',
      tamil: 'கிடைக்கும்',
      marathi: 'उपलब्ध'
    })
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return strings.goodMorning;
    if (hour < 18) return strings.goodAfternoon;
    return strings.goodEvening;
  };

  const operator = {
    name: 'Ramesh Kumar',
    photo: '👨‍🌾'
  };

  const stats = [
    { value: '2', label: strings.assignedEquipment, icon: '🚜' },
    { value: '3', label: strings.todaysBookings, icon: '📋' },
    { value: '₹1,200', label: strings.today, icon: '💰' }
  ];

  const equipment = [
    { id: 1, name: 'Mahindra 475 DI', icon: '🚜', status: strings.available, bookingsToday: 2 },
    { id: 2, name: 'Combine Harvester', icon: '🌾', status: strings.available, bookingsToday: 1 }
  ];

  const bookings = [
    { id: 1, farmer: 'Ramu Kisan', equipment: 'Mahindra 475 DI', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, farmer: 'Suresh Patil', equipment: 'Combine Harvester', time: '2:00 PM', status: 'Confirmed' },
    { id: 3, farmer: 'Vijay Singh', equipment: 'Mahindra 475 DI', time: '4:00 PM', status: 'Pending' }
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
            className="px-[18px] pt-4 pb-6 rounded-b-[36px] relative"
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
            <div className="flex justify-between items-start mb-4">
              <div>
                <div
                  className="text-[12px] font-medium"
                  style={{ color: 'rgba(255,255,255,0.85)', ...interFont }}
                >
                  {getGreeting()}
                </div>
                <div
                  className="text-white text-[18px] font-bold leading-tight mt-0.5"
                  style={poppinsFont}
                >
                  {operator.name}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: '#4ade80' }}
                  />
                  <span
                    className="text-[11px]"
                    style={{ color: 'rgba(255,255,255,0.8)', ...interFont }}
                  >
                    {strings.active} • 3 {strings.bookingsToday}
                  </span>
                </div>
              </div>
              <button
                className="w-9 h-9 rounded-xl flex items-center justify-center text-base relative backdrop-blur-sm"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: 'white'
                }}
              >
                �
              </button>
              <button
                className="w-9 h-9 rounded-xl flex items-center justify-center text-base relative backdrop-blur-sm"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: 'white'
                }}
              >
                �🔔
                <div
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: '#ef4444', border: '2px solid white' }}
                >
                  <span className="text-white text-[10px] font-bold" style={interFont}>
                    2
                  </span>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[12px] p-2.5 text-center"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <div className="text-[20px] mb-1">{stat.icon}</div>
                  <div className="text-white text-[18px] font-bold" style={poppinsFont}>{stat.value}</div>
                  <div className="text-white text-[11px] font-medium" style={{ opacity: 0.85, ...interFont }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Assigned Equipment */}
            <div className="flex justify-between items-center mb-2">
              <div
                className="text-[16px] font-bold"
                style={{ ...poppinsFont, color: 'var(--text-primary)' }}
              >
                🚜 {strings.myEquipment}
              </div>
              <button className="text-[12px] font-semibold" style={{ color: 'var(--operator-blue)', ...interFont }}>
                {strings.viewAll}
              </button>
            </div>

            <div className="space-y-2 mb-4">
              {equipment.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[18px] overflow-hidden flex h-20"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div
                    className="w-20 flex items-center justify-center text-[32px] flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                  >
                    {item.icon}
                  </div>
                  <div className="px-3 py-3 flex-1">
                    <div className="text-sm font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                      {item.name}
                    </div>
                    <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)', ...interFont }}>
                      {item.status} · {item.bookingsToday} {strings.bookingsToday}
                    </div>
                  </div>
                  <div className="px-3 py-3 flex flex-col items-end justify-between">
                    <div
                      className="text-[10px] font-bold px-[7px] py-0.5 rounded-lg"
                      style={{ background: 'var(--operator-blue-pale)', color: 'var(--operator-blue)' }}
                    >
                      {item.status.toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Today's Bookings */}
            <div className="flex justify-between items-center mb-2">
              <div
                className="text-[16px] font-bold"
                style={{ ...poppinsFont, color: 'var(--text-primary)' }}
              >
                📋 {strings.todaysBookings}
              </div>
              <button className="text-[12px] font-semibold" style={{ color: 'var(--operator-blue)', ...interFont }}>
                {strings.viewAll}
              </button>
            </div>

            <div className="space-y-2">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-[12px] p-3"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                        {booking.farmer}
                      </div>
                      <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                        {booking.equipment}
                      </div>
                    </div>
                    <div
                      className="text-[10px] font-bold px-2 py-0.5 rounded-lg"
                      style={{ 
                        background: booking.status === 'Confirmed' ? 'var(--operator-blue-pale)' : 'var(--amber-pale)',
                        color: booking.status === 'Confirmed' ? 'var(--operator-blue)' : 'var(--amber)',
                        ...interFont
                      }}
                    >
                      {booking.status}
                    </div>
                  </div>
                  <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    🕐 {booking.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operator Bottom Navigation */}
          <OperatorBottomNav activeTab="home" />

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
