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
          {/* Header */}
          <div 
            className="px-[18px] pt-[14px] pb-6 rounded-b-[28px]"
            style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-[18px] py-[10px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <span className="font-bold text-[11px]" style={{ color: 'white' }}>9:48</span>
              <div className="text-[11px]">📶</div>
            </div>

            <div className="flex justify-between items-center mb-4 pt-6">
              <div>
                <div 
                  className="text-white text-[17px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Harpreet Singh 🚜
                </div>
                <div className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Equipment Owner · Ludhiana, Punjab
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg relative" style={{ background: 'rgba(255,255,255,0.1)' }}>
                🔔
                <div 
                  className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                  style={{ background: 'var(--saffron)', border: '2px solid #1A1A2E' }}
                />
              </div>
            </div>

            <div
              className="rounded-2xl p-[14px] flex justify-between"
              style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, var(--gold) 100%)' }}
            >
              <div>
                <div className="text-[10px] font-semibold tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  This Month
                </div>
                <div 
                  className="text-white text-lg font-extrabold mt-1"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  ₹54,000
                </div>
              </div>
              <div className="w-px mx-2" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <div>
                <div className="text-[10px] font-semibold tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Total Earned
                </div>
                <div 
                  className="text-white text-lg font-extrabold mt-1"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  ₹2.4L
                </div>
              </div>
              <div className="w-px mx-2" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <div>
                <div className="text-[10px] font-semibold tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Bookings
                </div>
                <div 
                  className="text-white text-lg font-extrabold mt-1"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  38
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
