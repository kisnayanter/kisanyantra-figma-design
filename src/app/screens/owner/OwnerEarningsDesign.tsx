import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function OwnerEarningsDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    myEarnings: t({
      english: 'My Earnings',
      hindi: 'मेरी कमाई',
      tamil: 'எனது வருமானம்',
      marathi: 'माझी कमाई'
    }),
    trackIncome: t({
      english: 'Track your rental income',
      hindi: 'अपनी किराये की आय ट्रैक करें',
      tamil: 'உங்கள் வாடகை வருமானத்தை கண்காணிக்கவும்',
      marathi: 'तुमच्या भाड्याच्या उत्पन्नाचा मागोवा घ्या'
    }),
    totalBalance: t({
      english: 'Total Balance',
      hindi: 'कुल शेष',
      tamil: 'மொத்த இருப்பு',
      marathi: 'एकूण शिल्लक'
    }),
    availableForWithdrawal: t({
      english: 'Available for withdrawal',
      hindi: 'निकासी के लिए उपलब्ध',
      tamil: 'திரும்பப் பெற கிடைக்கும்',
      marathi: 'काढण्यासाठी उपलब्ध'
    }),
    withdrawToBank: t({
      english: 'Withdraw to Bank →',
      hindi: 'बैंक में निकालें →',
      tamil: 'வங்கிக்கு திரும்பப் பெறு →',
      marathi: 'बँकेत काढा →'
    }),
    thisWeek: t({
      english: 'This Week',
      hindi: 'इस सप्ताह',
      tamil: 'இந்த வாரம்',
      marathi: 'या आठवड्यात'
    }),
    thisMonth: t({
      english: 'This Month',
      hindi: 'इस महीने',
      tamil: 'இந்த மாதம்',
      marathi: 'या महिन्यात'
    }),
    allTime: t({
      english: 'All Time',
      hindi: 'सभी समय',
      tamil: 'எல்லா நேரமும்',
      marathi: 'सर्व काळ'
    }),
    totalEarned: t({
      english: 'Total Earned',
      hindi: 'कुल कमाई',
      tamil: 'மொத்த வருமானம்',
      marathi: 'एकूण कमाई'
    }),
    thisMonthLabel: t({
      english: 'This Month',
      hindi: 'इस महीने',
      tamil: 'இந்த மாதம்',
      marathi: 'या महिन्यात'
    }),
    bookings: t({
      english: 'Bookings',
      hindi: 'बुकिंग',
      tamil: 'முன்பதிவுகள்',
      marathi: 'बुकिंग'
    }),
    avgPerBooking: t({
      english: 'Avg per booking',
      hindi: 'प्रति बुकिंग औसत',
      tamil: 'சராசரி ஒரு முன்பதிவு',
      marathi: 'प्रति बुकिंग सरासरी'
    }),
    recentTransactions: t({
      english: 'Recent Transactions',
      hindi: 'हाल के लेनदेन',
      tamil: 'சமீபத்திய பரிவர்த்தனைகள்',
      marathi: 'अलीकडील व्यवहार'
    }),
    seeAll: t({
      english: 'See All →',
      hindi: 'सभी देखें →',
      tamil: 'அனைத்தையும் பார் →',
      marathi: 'सर्व पहा →'
    }),
    tractorRental: t({
      english: 'Tractor Rental',
      hindi: 'ट्रैक्टर किराया',
      tamil: 'டிராக்டர் வாடகை',
      marathi: 'ट्रॅक्टर भाडे'
    }),
    harvesterRental: t({
      english: 'Harvester Rental',
      hindi: 'हार्वेस्टर किराया',
      tamil: 'அறுவடை இயந்திர வாடகை',
      marathi: 'हार्वेस्टर भाडे'
    }),
    platformFee: t({
      english: 'Platform Fee',
      hindi: 'प्लेटफ़ॉर्म शुल्क',
      tamil: 'தளக் கட்டணம்',
      marathi: 'प्लॅटफॉर्म शुल्क'
    }),
    bankTransfer: t({
      english: 'Bank Transfer',
      hindi: 'बैंक ट्रांसफर',
      tamil: 'வங்கி பரிமாற்றம்',
      marathi: 'बँक ट्रान्सफर'
    }),
    completed: t({
      english: 'Completed',
      hindi: 'पूरा हुआ',
      tamil: 'நிறைவடைந்தது',
      marathi: 'पूर्ण'
    }),
    deducted: t({
      english: 'Deducted',
      hindi: 'कटौती',
      tamil: 'கழிக்கப்பட்டது',
      marathi: 'वजा'
    }),
    withdrawn: t({
      english: 'Withdrawn',
      hindi: 'निकाला गया',
      tamil: 'திரும்பப் பெறப்பட்டது',
      marathi: 'काढले'
    }),
    linkedAccount: t({
      english: 'Linked Account',
      hindi: 'लिंक किया गया खाता',
      tamil: 'இணைக்கப்பட்ட கணக்கு',
      marathi: 'लिंक केलेले खाते'
    }),
    change: t({
      english: 'Change',
      hindi: 'बदलें',
      tamil: 'மாற்று',
      marathi: 'बदला'
    })
  };

  const transactions = [
    {
      title: `${strings.tractorRental} · Ramu Kisan`,
      amount: '+₹7,200',
      amountColor: 'var(--green)',
      date: 'Mar 18',
      status: strings.completed,
      statusColor: 'var(--green)',
      statusBg: 'var(--green-pale)',
      icon: '🚜'
    },
    {
      title: `${strings.harvesterRental} · Suresh Patil`,
      amount: '+₹20,000',
      amountColor: 'var(--green)',
      date: 'Mar 15',
      status: strings.completed,
      statusColor: 'var(--green)',
      statusBg: 'var(--green-pale)',
      icon: '🌾'
    },
    {
      title: strings.platformFee,
      amount: '−₹2,720',
      amountColor: '#CC3333',
      date: 'Mar 15',
      status: strings.deducted,
      statusColor: '#CC3333',
      statusBg: '#FFF0F0',
      icon: '📋'
    },
    {
      title: strings.bankTransfer,
      amount: '−₹50,000',
      amountColor: 'var(--text-soft)',
      date: 'Mar 10',
      status: strings.withdrawn,
      statusColor: 'var(--text-soft)',
      statusBg: '#F3F4F6',
      icon: '🏦'
    }
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>9:48</span>
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
            <div
              className="text-white text-[22px] font-bold"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            >
              💰 {strings.myEarnings}
            </div>
            <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Inter', sans-serif" }}>
              {strings.trackIncome}
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Earnings Overview Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-3 text-center"
              style={{ boxShadow: 'var(--card-shadow-sm)' }}
            >
              <div className="text-[11px] font-medium mb-1" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                {strings.totalBalance}
              </div>
              <div
                className="text-[28px] font-extrabold mb-0.5"
                style={{ color: 'var(--green)', fontFamily: "'Poppins', sans-serif" }}
              >
                ₹24,600
              </div>
              <div className="text-[10px] mb-3" style={{ color: 'var(--text-soft)', fontFamily: "'Inter', sans-serif" }}>
                {strings.availableForWithdrawal}
              </div>
              <button
                className="ky-tap-cta-primary w-full rounded-xl py-2.5 text-[13px] font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                  boxShadow: '0 4px 16px rgba(26,122,59,0.3)',
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                {strings.withdrawToBank}
              </button>
            </div>

            {/* Period Selector */}
            <div className="flex bg-white rounded-[14px] p-1 mb-3" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              {[
                { label: strings.thisWeek, active: false },
                { label: strings.thisMonth, active: true },
                { label: strings.allTime, active: false }
              ].map((tab) => (
                <button
                  key={tab.label}
                  className={`ky-tap-tab flex-1 rounded-[10px] py-1.5 text-[10px] font-bold text-center`}
                  style={{
                    background: tab.active ? 'var(--green)' : 'transparent',
                    color: tab.active ? 'white' : 'var(--text-secondary)',
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { label: strings.totalEarned, value: '₹2,40,000', icon: '📈' },
                { label: strings.thisMonthLabel, value: '₹54,000', icon: '📊' },
                { label: strings.bookings, value: '38', icon: '📋' },
                { label: strings.avgPerBooking, value: '₹6,315', icon: '📐' }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-[16px] p-3"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div className="text-[14px] mb-0.5">{stat.icon}</div>
                  <div className="text-[15px] font-bold" style={{ color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-medium" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Transactions */}
            <div className="flex justify-between items-center mb-2">
              <div
                className="text-[14px] font-bold"
                style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
              >
                {strings.recentTransactions}
              </div>
              <button className="ky-tap-link text-[11px] font-semibold" style={{ color: 'var(--saffron)', fontFamily: "'Inter', sans-serif" }}>
                {strings.seeAll}
              </button>
            </div>

            <div className="space-y-2 mb-3">
              {transactions.map((txn, i) => (
                <div
                  key={i}
                  className="ky-tap-list-item bg-white rounded-[14px] p-3 flex items-center gap-2.5"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-[16px] flex-shrink-0"
                    style={{ background: txn.statusBg }}
                  >
                    {txn.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold truncate" style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                      {txn.title}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[9px]" style={{ color: 'var(--text-soft)' }}>{txn.date}</span>
                      <span
                        className="text-[8px] font-bold px-1.5 py-0.5 rounded-md"
                        style={{ background: txn.statusBg, color: txn.statusColor }}
                      >
                        {txn.status}
                      </span>
                    </div>
                  </div>
                  <div
                    className="text-[13px] font-extrabold flex-shrink-0"
                    style={{ color: txn.amountColor, fontFamily: "'Poppins', sans-serif" }}
                  >
                    {txn.amount}
                  </div>
                </div>
              ))}
            </div>

            {/* Bank Account Card */}
            <div
              className="rounded-[16px] p-3.5 flex items-center gap-3"
              style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green-tint)' }}
            >
              <div className="text-[22px]">🏦</div>
              <div className="flex-1">
                <div className="text-[12px] font-bold" style={{ color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}>
                  {strings.linkedAccount}
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                  State Bank of India · ****4521
                </div>
              </div>
              <button className="ky-tap-link text-[11px] font-bold" style={{ color: 'var(--green)' }}>
                {strings.change}
              </button>
            </div>
          </div>

          {/* Bottom Nav */}
          <OwnerBottomNav activeTab="home" />

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
