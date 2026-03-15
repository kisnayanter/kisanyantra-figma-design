export function OwnerDashboardDesign() {
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Orange Gradient for Consistency */}
          <div 
            className="px-[18px] pt-5 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex justify-between items-center mb-4 gap-3">
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  🚜 मालिक डैशबोर्ड · Owner Dashboard
                </div>
                <div 
                  className="text-white text-[18px] font-bold mt-0.5"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Harpreet Singh
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base relative"
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: '1.5px solid rgba(255,255,255,0.4)',
                    color: 'white'
                  }}
                >
                  🔔
                  <div 
                    className="absolute top-1 right-1 w-2 h-2 rounded-full"
                    style={{ background: '#E74C3C', border: '2px solid var(--saffron)' }}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Switch to Farmer Mode"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: '1.5px solid rgba(255,255,255,0.4)',
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
                <div className="text-white text-[16px] font-bold">₹54K</div>
                <div className="text-white text-[9px]" style={{ opacity: 0.85 }}>
                  This Month
                </div>
              </div>
              <div 
                className="rounded-[14px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[16px] font-bold">₹2.4L</div>
                <div className="text-white text-[9px]" style={{ opacity: 0.85 }}>
                  Total Earned
                </div>
              </div>
              <div 
                className="rounded-[14px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[16px] font-bold">38</div>
                <div className="text-white text-[9px]" style={{ opacity: 0.85 }}>
                  Bookings
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Incoming Requests */}
            <div className="flex justify-between items-center mb-[10px]">
              <div 
                className="text-[15px] font-bold"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                🔔 Incoming Requests
              </div>
              <button className="text-[11px] font-semibold" style={{ color: 'var(--saffron)' }}>See all</button>
            </div>

            <div className="bg-white rounded-2xl p-[14px] mb-[12px]" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'var(--cream)' }}>👨‍🌾</div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Need to book equipment instead?
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-soft)' }}>
                    Tap below to hop back into the Farmer experience.
                  </div>
                </div>
                <button
                  type="button"
                  className="text-[10px] font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'var(--saffron)', color: 'white' }}
                >
                  Switch Role
                </button>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl p-[14px] mb-[10px]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)', borderLeft: '4px solid var(--saffron)' }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark)' }}>Ramu Kisan</div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>📍 Wardha, Maharashtra · 3 days</div>
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
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <div
                  className="flex-1 rounded-[10px] py-2 text-xs font-bold text-center"
                  style={{ background: '#FFF0F0', border: '1.5px solid #FFCCCC', color: '#CC3333' }}
                >
                  ✕ Reject
                </div>
                <div
                  className="flex-[2] rounded-[10px] py-2 text-xs font-bold text-white text-center"
                  style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 3px 10px rgba(26,122,59,0.3)' }}
                >
                  ✓ Accept Booking
                </div>
              </div>
            </div>

            {/* My Listings */}
            <div className="flex justify-between items-center mb-[10px] mt-[14px]">
              <div 
                className="text-[15px] font-bold"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                🚜 My Listings
              </div>
              <button className="text-[11px] font-semibold" style={{ color: 'var(--saffron)' }}>+ Add New</button>
            </div>

            {[
              { icon: '🚜', name: 'Mahindra 475 DI', meta: '50 HP · Driver Incl. · ₹2,400/day', price: '₹2,400', status: '● ACTIVE', statusColor: 'var(--green)', statusBg: 'var(--green-pale)', bg: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' },
              { icon: '🌾', name: 'Combine Harvester', meta: 'No driver · ₹5,000/day', price: '₹5,000', status: '⏸ PAUSED', statusColor: 'var(--saffron)', statusBg: '#FFF3E8', bg: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)' }
            ].map((listing) => (
              <div
                key={listing.name}
                className="bg-white rounded-2xl overflow-hidden flex h-20 mb-[10px]"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}
              >
                <div 
                  className="w-20 flex items-center justify-center text-[32px] flex-shrink-0"
                  style={{ background: listing.bg }}
                >
                  {listing.icon}
                </div>
                <div className="px-3 py-3 flex-1">
                  <div className="text-sm font-bold" style={{ fontFamily: "'Baloo 2', cursive" }}>
                    {listing.name}
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
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
                  <div className="text-[13px] font-extrabold" style={{ color: 'var(--saffron)' }}>
                    {listing.price}
                  </div>
                </div>
              </div>
            ))}
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
