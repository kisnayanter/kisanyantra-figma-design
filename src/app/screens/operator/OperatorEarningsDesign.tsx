import { useLanguage } from '../../contexts/language';
import { OperatorBottomNav } from '../../components/OperatorBottomNav';

export function OperatorEarningsDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    myEarnings: t({
      english: 'My Earnings',
      hindi: 'मेरी कमाई',
      tamil: 'எனது வருமானம்',
      marathi: 'माझी कमाई'
    }),
    totalEarned: t({
      english: 'Total Earned',
      hindi: 'कुल कमाई',
      tamil: 'மொத்த வருமானம்',
      marathi: 'एकूण कमाई'
    }),
    thisMonth: t({
      english: 'This Month',
      hindi: 'इस महीने',
      tamil: 'இந்த மாதம்',
      marathi: 'या महिन्यात'
    }),
    commissionRate: t({
      english: 'Commission Rate',
      hindi: 'कमीशन दर',
      tamil: 'கமிஷன் விகிதம்',
      marathi: 'कमिशन दर'
    }),
    earningsHistory: t({
      english: 'Earnings History',
      hindi: 'कमाई का इतिहास',
      tamil: 'வருமான வரலாறு',
      marathi: 'कमाई इतिहास'
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
    }),
    equipment: t({
      english: 'Equipment',
      hindi: 'उपकरण',
      tamil: 'உபகரணம்',
      marathi: 'उपकरण'
    })
  };

  const earnings = {
    totalEarned: '₹12,500',
    thisMonth: '₹3,200',
    commissionRate: '10%',
    bookingsHandled: 15
  };

  const earningsHistory = [
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
                {strings.myEarnings}
              </div>
              <button className="ml-auto w-9 h-9 rounded-xl flex items-center justify-center text-base backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.15)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', color: 'white' }}>
                💬
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div
                className="rounded-[12px] p-3 text-center"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>{earnings.totalEarned}</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85, ...interFont }}>
                  {strings.totalEarned}
                </div>
              </div>
              <div
                className="rounded-[12px] p-3 text-center"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>{earnings.thisMonth}</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85, ...interFont }}>
                  {strings.thisMonth}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Read-only Compensation Model card */}
            <div className="rounded-[14px] p-3 mb-4" style={{ background: 'var(--operator-blue-pale)', border: '1.5px solid var(--operator-blue-tint)' }}>
              <div className="text-[10px] font-bold mb-2" style={{ color: 'var(--operator-blue)', ...interFont }}>
                📊 {selectText({ english: 'Your Compensation Model', hindi: 'आपका मुआवजा मॉडल', tamil: 'உங்கள் இழப்பீட்டு மாதிரி', marathi: 'तुमचे नुकसान भरपाई मॉडेल' })}
              </div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[18px]" style={{ background: '#DBEAFE' }}>📊</div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold" style={{ color: 'var(--operator-blue)', ...poppinsFont }}>
                    {selectText({ english: 'Commission % per Booking', hindi: 'बुकिंग पर कमीशन %', tamil: 'முன்பதிவுக்கு கமிஷன் %', marathi: 'बुकिंगवर कमिशन %' })}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--operator-blue)', opacity: 0.8, ...interFont }}>
                    {earnings.commissionRate} {selectText({ english: 'of each booking amount', hindi: 'प्रत्येक बुकिंग राशि का', tamil: 'ஒவ்வொரு முன்பதிவு தொகையில்', marathi: 'प्रत्येक बुकिंग रकमेपैकी' })}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[9px]" style={{ color: 'var(--operator-blue)', opacity: 0.7, ...interFont }}>
                  🔒 {selectText({ english: 'Set by Harpreet Singh (Owner) · Contact owner to change', hindi: 'हरप्रीत सिंह (मालिक) द्वारा सेट · बदलने के लिए मालिक से संपर्क करें', tamil: 'ஹர்பீட் சிங் (உரிமையாளர்) அமைத்தார் · மாற்ற உரிமையாளரை தொடர்பு கொள்ளவும்', marathi: 'हरप्रीत सिंग (मालक) द्वारे सेट · बदलण्यासाठी मालकाशी संपर्क करा' })}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-bold" style={{ color: 'var(--operator-blue)', ...poppinsFont }}>
                    {earnings.commissionRate}
                  </span>
                </div>
              </div>
            </div>

            {/* Bookings handled */}
            <div className="bg-white rounded-[16px] p-3 mb-4 flex justify-between items-center" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <span className="text-[13px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                {strings.bookingsHandled}
              </span>
              <span className="text-[18px] font-bold" style={{ color: 'var(--text-primary)', ...poppinsFont }}>
                {earnings.bookingsHandled}
              </span>
            </div>

            {/* Earnings History */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div
                  className="text-[16px] font-bold"
                  style={{ ...poppinsFont, color: 'var(--text-primary)' }}
                >
                  {strings.earningsHistory}
                </div>
                <button
                  className="text-[14px] font-medium"
                  style={{ color: 'var(--operator-blue)', ...interFont }}
                >
                  {strings.export}
                </button>
              </div>
              <div className="space-y-2">
                {earningsHistory.map((item) => (
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
                      {strings.equipment}: {item.equipment}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Operator Bottom Navigation */}
          <OperatorBottomNav activeTab="profile" />

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
