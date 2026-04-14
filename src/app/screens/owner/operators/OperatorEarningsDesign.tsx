import { useLanguage } from '../../../contexts/language';

export function OperatorEarningsDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    operatorEarnings: t({
      english: 'Operator Earnings',
      hindi: 'ऑपरेटर कमाई',
      tamil: 'செயல்படுத்தி வருமானம்',
      marathi: 'ऑपरेटर कमाई'
    }),
    operatorName: t({
      english: 'Operator',
      hindi: 'ऑपरेटर',
      tamil: 'செயல்படுத்தி',
      marathi: 'ऑपरेटर'
    }),
    totalCommission: t({
      english: 'Total Commission',
      hindi: 'कुल कमीशन',
      tamil: 'மொத்த கமிஷன்',
      marathi: 'एकूण कमिशन'
    }),
    thisMonth: t({
      english: 'This Month',
      hindi: 'इस महीने',
      tamil: 'இந்த மாதம்',
      marathi: 'या महिन्यात'
    }),
    commissionByEquipment: t({
      english: 'Commission by Equipment',
      hindi: 'उपकरण के अनुसार कमीशन',
      tamil: 'உபகரணம் வாரியான கமிஷன்',
      marathi: 'उपकरणनुसार कमिशन'
    }),
    commissionHistory: t({
      english: 'Commission History',
      hindi: 'कमीशन इतिहास',
      tamil: 'கமிஷன் வரலாறு',
      marathi: 'कमिशन इतिहास'
    }),
    export: t({
      english: 'Export Report',
      hindi: 'रिपोर्ट निर्यात करें',
      tamil: 'அறிக்கையை ஏற்றுமதி செய்',
      marathi: 'अहवाल निर्यात करा'
    }),
    bookingsHandled: t({
      english: 'Bookings Handled',
      hindi: 'बुकिंग संभाली गई',
      tamil: 'கையாண்ட முன்பதிவுகள்',
      marathi: 'बुकिंग हाताळले'
    }),
    commissionEarned: t({
      english: 'Commission Earned',
      hindi: 'कमीशन कमाया',
      tamil: 'கமிஷன் சம்பாதித்தது',
      marathi: 'कमिशन कमवले'
    }),
    date: t({
      english: 'Date',
      hindi: 'तारीख',
      tamil: 'தேதி',
      marathi: 'तारीख'
    }),
    bookingId: t({
      english: 'Booking ID',
      hindi: 'बुकिंग ID',
      tamil: 'முன்பதிவு ID',
      marathi: 'बुकिंग ID'
    }),
    amount: t({
      english: 'Amount',
      hindi: 'राशि',
      tamil: 'தொகை',
      marathi: 'रक्कम'
    })
  };

  const operator = {
    name: 'Ramesh Kumar',
    photo: '👨‍🌾',
    totalCommission: '₹12,500',
    thisMonthCommission: '₹3,200',
    commissionRate: '10%'
  };

  const commissionByEquipment = [
    { id: 1, name: 'Mahindra 475 DI', icon: '🚜', bookingsHandled: 12, commissionEarned: '₹7,200' },
    { id: 2, name: 'Combine Harvester', icon: '🌾', bookingsHandled: 8, commissionEarned: '₹5,300' }
  ];

  const commissionHistory = [
    { id: 1, date: 'Jan 15, 2026', bookingId: 'BK-2026-015', equipment: 'Mahindra 475 DI', amount: '₹600' },
    { id: 2, date: 'Jan 14, 2026', bookingId: 'BK-2026-014', equipment: 'Combine Harvester', amount: '₹800' },
    { id: 3, date: 'Jan 13, 2026', bookingId: 'BK-2026-013', equipment: 'Mahindra 475 DI', amount: '₹600' },
    { id: 4, date: 'Jan 12, 2026', bookingId: 'BK-2026-012', equipment: 'Combine Harvester', amount: '₹700' },
    { id: 5, date: 'Jan 11, 2026', bookingId: 'BK-2026-011', equipment: 'Mahindra 475 DI', amount: '₹500' }
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

          {/* Green Gradient Header */}
          <div
            className="px-[18px] pt-4 pb-5 rounded-b-[36px] relative"
            style={{
              background: 'var(--gradient-green)',
              boxShadow: 'var(--card-shadow-green)',
              backgroundImage: `
                var(--gradient-green),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <button className="text-white text-[18px]">←</button>
              <div
                className="text-white text-[22px] font-bold"
                style={poppinsFont}
              >
                {strings.operatorEarnings}
              </div>
            </div>

            {/* Operator Info */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[20px]"
                style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
              >
                {operator.photo}
              </div>
              <div>
                <div className="text-white text-[16px] font-bold" style={poppinsFont}>
                  {operator.name}
                </div>
                <div className="text-[14px]" style={{ color: 'rgba(255,255,255,0.8)', ...interFont }}>
                  {strings.operatorName}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Commission Summary */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white rounded-[16px] p-4 text-center" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
                <div
                  className="text-[24px] font-extrabold mb-1"
                  style={{ color: 'var(--green)', ...poppinsFont }}
                >
                  {operator.totalCommission}
                </div>
                <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                  {strings.totalCommission}
                </div>
              </div>
              <div className="bg-white rounded-[16px] p-4 text-center" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
                <div
                  className="text-[24px] font-extrabold mb-1"
                  style={{ color: 'var(--saffron)', ...poppinsFont }}
                >
                  {operator.thisMonthCommission}
                </div>
                <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                  {strings.thisMonth}
                </div>
              </div>
            </div>

            {/* Commission by Equipment */}
            <div className="mb-4">
              <div
                className="text-[16px] font-bold mb-2"
                style={{ ...poppinsFont, color: 'var(--text-primary)' }}
              >
                {strings.commissionByEquipment}
              </div>
              <div className="space-y-2">
                {commissionByEquipment.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[12px] p-3 flex items-center gap-3"
                    style={{ boxShadow: 'var(--card-shadow-sm)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-[24px] flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                        {item.name}
                      </div>
                      <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                        {item.bookingsHandled} {strings.bookingsHandled}
                      </div>
                    </div>
                    <div
                      className="text-[18px] font-extrabold"
                      style={{ color: 'var(--harvest-yellow)', ...poppinsFont }}
                    >
                      {item.commissionEarned}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commission History */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div
                  className="text-[16px] font-bold"
                  style={{ ...poppinsFont, color: 'var(--text-primary)' }}
                >
                  {strings.commissionHistory}
                </div>
                <button
                  className="text-[14px] font-medium"
                  style={{ color: 'var(--green)', ...interFont }}
                >
                  {strings.export}
                </button>
              </div>
              <div className="space-y-2">
                {commissionHistory.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[12px] p-3"
                    style={{ boxShadow: 'var(--card-shadow-sm)' }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                          {strings.date}: {item.date}
                        </div>
                        <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                          {strings.bookingId}: {item.bookingId}
                        </div>
                      </div>
                      <div
                        className="text-[18px] font-extrabold"
                        style={{ color: 'var(--harvest-yellow)', ...poppinsFont }}
                      >
                        {item.amount}
                      </div>
                    </div>
                    <div className="text-[14px]" style={{ color: 'var(--text-primary)', ...interFont }}>
                      {item.equipment}
                    </div>
                  </div>
                ))}
              </div>
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
