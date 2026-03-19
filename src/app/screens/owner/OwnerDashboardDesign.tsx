import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function OwnerDashboardDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    subtitle: t({
      english: 'Owner Dashboard',
      hindi: 'मालिक डैशबोर्ड',
      tamil: 'உரிமையாளர் டாஷ்போர்டு',
      marathi: 'मालक डॅशबोर्ड'
    }),
    thisMonth: t({
      english: 'This Month',
      hindi: 'इस महीने',
      tamil: 'இந்த மாதம்',
      marathi: 'या महिन्यात'
    }),
    totalEarned: t({
      english: 'Total Earned',
      hindi: 'कुल कमाई',
      tamil: 'மொத்த வருமானம்',
      marathi: 'एकूण कमाई'
    }),
    bookings: t({
      english: 'Bookings',
      hindi: 'बुकिंग',
      tamil: 'முன்பதிவுகள்',
      marathi: 'बुकिंग'
    }),
    incomingRequests: t({
      english: 'Incoming Requests',
      hindi: 'आने वाले अनुरोध',
      tamil: 'உள்வரும் கோரிக்கைகள்',
      marathi: 'येणाऱ्या विनंत्या'
    }),
    viewAll: t({
      english: 'View All',
      hindi: 'सभी देखें',
      tamil: 'அனைத்தையும் பார்க்கவும்',
      marathi: 'सर्व पहा'
    }),
    equipmentOpportunities: t({
      english: 'Equipment Opportunities',
      hindi: 'उपकरण अवसर',
      tamil: 'உபகரண வாய்ப்புகள்',
      marathi: 'उपकरण संधी'
    }),
    opportunitiesDesc: t({
      english: '5 farmers nearby need your equipment',
      hindi: '5 नजदीकी किसानों को आपके उपकरण चाहिए',
      tamil: '5 அருகிலுள்ள விவசாயிகளுக்கு உங்கள் உபகரணம் தேவை',
      marathi: '5 जवळच्या शेतकऱ्यांना तुमची उपकरणे हवी'
    }),
    myEquipment: t({
      english: 'My Equipment',
      hindi: 'मेरे उपकरण',
      tamil: 'எனது உபகரணங்கள்',
      marathi: 'माझी उपकரणे'
    }),
    addNew: t({
      english: '+ Add New',
      hindi: '+ नया जोड़ें',
      tamil: '+ புதியது சேர்க்கவும்',
      marathi: '+ नवीन जोडा'
    }),
    available: t({
      english: 'Available',
      hindi: 'उपलब्ध',
      tamil: 'கிடைக்கும்',
      marathi: 'उपलब्ध'
    }),
    perHour: t({
      english: '/hour',
      hindi: '/घंटा',
      tamil: '/மணி',
      marathi: '/तास'
    })
  };

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

          {/* Modern Header with Green Gradient */}
          <div 
            className="px-[18px] pt-5 pb-6 rounded-b-[36px] relative"
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
            <div className="flex justify-between items-center mb-4 gap-3">
              <div className="flex-1">
                <div className="text-[13px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}>
                  🌿 {strings.subtitle}
                </div>
                <div 
                  className="text-white text-[24px] font-bold mt-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Harpreet Singh
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="ky-tap-icon w-9 h-9 rounded-xl flex items-center justify-center text-base relative backdrop-blur-sm transition-transform active:scale-95"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    color: 'white'
                  }}
                >
                  🔔
                  <div 
                    className="absolute top-1 right-1 w-2 h-2 rounded-full"
                    style={{ background: 'var(--saffron)', border: '1.5px solid white' }}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Switch to Farmer Mode"
                  className="ky-tap-icon w-9 h-9 rounded-xl flex items-center justify-center text-base backdrop-blur-sm transition-transform active:scale-95"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    color: 'white'
                  }}
                >
                  🔁
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2">
              <div 
                className="rounded-[14px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[18px] font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>₹54K</div>
                <div className="text-white text-[10px] font-medium" style={{ opacity: 0.85, fontFamily: "'Inter', sans-serif" }}>
                  {strings.thisMonth}
                </div>
              </div>
              <div 
                className="rounded-[14px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[18px] font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>₹2.4L</div>
                <div className="text-white text-[10px] font-medium" style={{ opacity: 0.85, fontFamily: "'Inter', sans-serif" }}>
                  {strings.totalEarned}
                </div>
              </div>
              <div 
                className="rounded-[14px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[18px] font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>38</div>
                <div className="text-white text-[10px] font-medium" style={{ opacity: 0.85, fontFamily: "'Inter', sans-serif" }}>
                  {strings.bookings}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Incoming Requests */}
            <div className="flex justify-between items-center mb-[10px]">
              <div 
                className="text-[16px] font-bold"
                style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
              >
                🔔 {strings.incomingRequests}
              </div>
              <button className="ky-tap-link text-[12px] font-semibold" style={{ color: 'var(--saffron)', fontFamily: "'Inter', sans-serif" }}>{strings.viewAll}</button>
            </div>

            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'var(--green-pale)' }}>👨‍🌾</div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold" style={{ color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}>
                    Need to book equipment instead?
                  </div>
                  <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                    Tap below to hop back into the Farmer experience.
                  </div>
                </div>
                <button
                  type="button"
                  className="ky-tap-icon text-[10px] font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'var(--saffron)', color: 'white' }}
                >
                  Switch Role
                </button>
              </div>
            </div>

            <div
              className="ky-tap-card bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow-sm)', borderLeft: '4px solid var(--saffron)' }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-bold text-[14px]" style={{ color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}>Ramu Kisan</div>
                  <div className="text-[11px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>📍 Wardha, Maharashtra · 3 days</div>
                </div>
                <div 
                  className="rounded-[10px] px-2 py-0.5 text-[10px] font-bold"
                  style={{ background: '#FFF3E8', border: '1.5px solid #FFD0A8', color: 'var(--saffron)' }}
                >
                  ⏱ 1:42:30
                </div>
              </div>
              <div className="flex gap-2 mb-[10px]">
                {['📅 Jul 10–12', '💰 ₹7,200', '💵 Cash'].map((item) => (
                  <div 
                    key={item}
                    className="rounded-lg px-2 py-0.5 text-[10px] font-semibold"
                    style={{ background: 'var(--green-pale)', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <div
                  className="ky-tap-action-destructive flex-1 rounded-[10px] py-2 text-xs font-bold text-center"
                  style={{ background: '#FFF0F0', border: '1.5px solid #FFCCCC', color: '#CC3333' }}
                >
                  ✕ Reject
                </div>
                <div
                  className="ky-tap-action-confirm flex-[2] rounded-[10px] py-2 text-xs font-bold text-white text-center"
                  style={{ background: 'var(--gradient-saffron)', boxShadow: 'var(--card-shadow-saffron)', fontFamily: "'Poppins', sans-serif" }}
                >
                  ✓ Accept Booking
                </div>
              </div>
            </div>

            {/* Equipment Opportunities */}
            <div
              className="ky-tap-card bg-white rounded-[20px] p-4 mb-3"
              style={{
                boxShadow: 'var(--card-shadow-sm)',
                borderLeft: '4px solid var(--green)'
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0"
                  style={{ background: 'var(--green-pale)' }}
                >
                  {'\u{1F4B0}'}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div
                      className="font-bold text-[14px]"
                      style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
                    >
                      {strings.equipmentOpportunities}
                    </div>
                    <div
                      className="rounded-[8px] px-2 py-0.5 text-[9px] font-bold"
                      style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                    >
                      5 NEW
                    </div>
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                    {strings.opportunitiesDesc}
                  </div>
                  <button
                    className="ky-tap-link text-[11px] font-bold mt-2"
                    style={{ color: 'var(--green)' }}
                  >
                    {strings.viewAll} {'\u2192'}
                  </button>
                </div>
              </div>
            </div>

            {/* My Listings */}
            <div className="flex justify-between items-center mb-[10px] mt-[14px]">
              <div 
                className="text-[16px] font-bold"
                style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
              >
                🚜 {strings.myEquipment}
              </div>
              <button className="ky-tap-link text-[12px] font-semibold" style={{ color: 'var(--saffron)', fontFamily: "'Inter', sans-serif" }}>{strings.addNew}</button>
            </div>

            {[
              { icon: '🚜', name: 'Mahindra 475 DI', meta: `50 HP · ${strings.available} · ₹2,400/day`, price: '₹2,400', status: `● ${strings.available.toUpperCase()}`, statusColor: 'var(--green)', statusBg: 'var(--green-pale)', bg: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' },
              { icon: '🌾', name: 'Combine Harvester', meta: `₹5,000${strings.perHour}`, price: '₹5,000', status: '⏸ PAUSED', statusColor: 'var(--amber)', statusBg: 'var(--amber-pale)', bg: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)' }
            ].map((listing) => (
              <div
                key={listing.name}
                className="ky-tap-card bg-white rounded-[20px] overflow-hidden flex h-20 mb-3"
                style={{ boxShadow: 'var(--card-shadow-sm)' }}
              >
                <div 
                  className="w-20 flex items-center justify-center text-[32px] flex-shrink-0"
                  style={{ background: listing.bg }}
                >
                  {listing.icon}
                </div>
                <div className="px-3 py-3 flex-1">
                  <div className="text-sm font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                    {listing.name}
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                    {listing.meta}
                  </div>
                </div>
                <div className="px-3 py-3 flex flex-col items-end justify-between">
                  <div 
                    className="text-[9px] font-bold px-[7px] py-0.5 rounded-lg"
                    style={{ background: listing.statusBg, color: listing.statusColor }}
                  >
                    {listing.status}
                  </div>
                  <div className="text-[14px] font-extrabold" style={{ color: 'var(--harvest-yellow)', fontFamily: "'Poppins', sans-serif" }}>
                    {listing.price}
                  </div>
                </div>
              </div>
            ))}
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
