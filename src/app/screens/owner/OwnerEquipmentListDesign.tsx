import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function OwnerEquipmentListDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    myEquipment: t({
      english: 'My Equipment',
      hindi: 'मेरे उपकरण',
      tamil: 'எனது உபகரணங்கள்',
      marathi: 'माझी उपकरणे'
    }),
    manageListings: t({
      english: 'Manage your listings',
      hindi: 'अपनी लिस्टिंग प्रबंधित करें',
      tamil: 'உங்கள் பட்டியல்களை நிர்வகிக்கவும்',
      marathi: 'तुमच्या लिस्टिंग व्यवस्थापित करा'
    }),
    listed: t({
      english: 'Listed',
      hindi: 'सूचीबद्ध',
      tamil: 'பட்டியலிடப்பட்டது',
      marathi: 'सूचीबद्ध'
    }),
    available: t({
      english: 'Available',
      hindi: 'उपलब्ध',
      tamil: 'கிடைக்கும்',
      marathi: 'उपलब्ध'
    }),
    paused: t({
      english: 'Paused',
      hindi: 'रोका गया',
      tamil: 'இடைநிறுத்தப்பட்டது',
      marathi: 'थांबवले'
    }),
    addEquipment: t({
      english: '＋ Add Equipment',
      hindi: '＋ उपकरण जोड़ें',
      tamil: '＋ உபகரணம் சேர்க்கவும்',
      marathi: '＋ उपकरण जोडा'
    }),
    edit: t({
      english: 'Edit',
      hindi: 'संपादित करें',
      tamil: 'திருத்து',
      marathi: 'संपादित करा'
    }),
    pause: t({
      english: 'Pause',
      hindi: 'रोकें',
      tamil: 'இடைநிறுத்து',
      marathi: 'थांबवा'
    }),
    resume: t({
      english: 'Resume',
      hindi: 'फिर शुरू करें',
      tamil: 'மீண்டும் தொடங்கு',
      marathi: 'पुन्हा सुरू करा'
    }),
    delete: t({
      english: 'Delete',
      hindi: 'हटाएं',
      tamil: 'நீக்கு',
      marathi: 'हटवा'
    }),
    bookings: t({
      english: 'bookings',
      hindi: 'बुकिंग',
      tamil: 'முன்பதிவுகள்',
      marathi: 'बुकिंग'
    }),
    earned: t({
      english: 'earned',
      hindi: 'कमाई',
      tamil: 'சம்பாதித்தது',
      marathi: 'कमाई'
    }),
    reviews: t({
      english: 'reviews',
      hindi: 'समीक्षाएं',
      tamil: 'விமர்சனங்கள்',
      marathi: 'पुनरावलोकने'
    }),
    perDay: t({
      english: '/day',
      hindi: '/दिन',
      tamil: '/நாள்',
      marathi: '/दिवस'
    }),
    perHour: t({
      english: '/hr',
      hindi: '/घंटा',
      tamil: '/மணி',
      marathi: '/तास'
    })
  };

  const equipmentList = [
    {
      name: 'Mahindra 475 DI',
      hp: '50 HP',
      emoji: '🚜',
      status: `🟢 ${strings.available}`,
      statusColor: 'var(--green)',
      statusBg: 'var(--green-pale)',
      price: '₹2,400',
      priceSuffix: strings.perDay,
      rating: '4.8★',
      reviewCount: `23 ${strings.reviews}`,
      bookingCount: 12,
      totalEarned: '₹28,800',
      bg: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)',
      actions: ['edit', 'pause', 'delete'] as const
    },
    {
      name: 'Combine Harvester',
      hp: '75 HP',
      emoji: '🌾',
      status: `⏸️ ${strings.paused}`,
      statusColor: 'var(--amber)',
      statusBg: 'var(--amber-pale)',
      price: '₹5,000',
      priceSuffix: strings.perHour,
      rating: '4.5★',
      reviewCount: `15 ${strings.reviews}`,
      bookingCount: 8,
      totalEarned: '₹40,000',
      bg: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)',
      actions: ['edit', 'resume', 'delete'] as const
    },
    {
      name: 'Rotavator',
      hp: '35 HP',
      emoji: '⚙️',
      status: `🟢 ${strings.available}`,
      statusColor: 'var(--green)',
      statusBg: 'var(--green-pale)',
      price: '₹800',
      priceSuffix: strings.perHour,
      rating: '4.2★',
      reviewCount: `8 ${strings.reviews}`,
      bookingCount: 5,
      totalEarned: '₹4,000',
      bg: 'linear-gradient(135deg, #E8D5F5, #D4B8E8)',
      actions: ['edit', 'pause', 'delete'] as const
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
            <div className="flex justify-between items-start mb-3">
              <div>
                <div
                  className="text-white text-[22px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  🚜 {strings.myEquipment}
                </div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Inter', sans-serif" }}>
                  {strings.manageListings}
                </div>
              </div>
              <button
                className="ky-tap-cta-secondary text-[11px] font-bold px-3 py-1.5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: '1.5px solid rgba(255,255,255,0.4)'
                }}
              >
                {strings.addEquipment}
              </button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: '3', label: strings.listed },
                { value: '2', label: strings.available },
                { value: '1', label: strings.paused }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[12px] p-2.5 text-center"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <div className="text-white text-[16px] font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.value}</div>
                  <div className="text-white text-[9px] font-medium" style={{ opacity: 0.85, fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Cards */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {equipmentList.map((item) => (
              <div
                key={item.name}
                className="ky-tap-card bg-white rounded-[18px] overflow-hidden mb-3"
                style={{ boxShadow: 'var(--card-shadow-sm)' }}
              >
                {/* Photo Placeholder */}
                <div
                  className="h-[60px] flex items-center justify-center text-[32px] relative"
                  style={{ background: item.bg }}
                >
                  {item.emoji}
                  {/* Status Badge */}
                  <div
                    className="absolute top-2 right-2 rounded-[8px] px-2 py-0.5 text-[9px] font-bold"
                    style={{ background: item.statusBg, color: item.statusColor }}
                  >
                    {item.status}
                  </div>
                </div>

                <div className="p-3">
                  {/* Name & Price */}
                  <div className="flex justify-between items-start mb-1.5">
                    <div>
                      <div className="text-[13px] font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                        {item.name} · {item.hp}
                      </div>
                      <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                        {item.rating} ({item.reviewCount})
                      </div>
                    </div>
                    <div className="text-[15px] font-extrabold" style={{ color: 'var(--green)', fontFamily: "'Poppins', sans-serif" }}>
                      {item.price}<span className="text-[10px] font-medium" style={{ color: 'var(--text-secondary)' }}>{item.priceSuffix}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div
                    className="text-[10px] font-medium mb-2.5 px-2 py-1 rounded-lg"
                    style={{ background: 'var(--green-pale)', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.bookingCount} {strings.bookings} · {item.totalEarned} {strings.earned}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      className="ky-tap-cta-secondary flex-1 rounded-[10px] py-1.5 text-[11px] font-bold text-center"
                      style={{ border: '1.5px solid #E0E0E0', color: 'var(--text-primary)' }}
                    >
                      {strings.edit}
                    </button>
                    {item.actions.includes('pause') ? (
                      <button
                        className="ky-tap-cta-secondary flex-1 rounded-[10px] py-1.5 text-[11px] font-bold text-center"
                        style={{ border: '1.5px solid #E0E0E0', color: 'var(--text-primary)' }}
                      >
                        {strings.pause}
                      </button>
                    ) : (
                      <button
                        className="ky-tap-cta-secondary flex-1 rounded-[10px] py-1.5 text-[11px] font-bold text-center"
                        style={{ border: '1.5px solid var(--green)', color: 'var(--green)' }}
                      >
                        {strings.resume}
                      </button>
                    )}
                    <button
                      className="ky-tap-action-destructive flex-1 rounded-[10px] py-1.5 text-[11px] font-bold text-center"
                      style={{ color: '#CC3333' }}
                    >
                      {strings.delete}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Nav */}
          <OwnerBottomNav activeTab="equipment" />

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
