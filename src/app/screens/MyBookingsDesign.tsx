export function MyBookingsDesign() {
  const activeBookings = [
    { 
      id: 'BK-2025-07-0834',
      equipment: 'Mahindra 475 DI 🚜', 
      owner: 'Harpreet Singh',
      dates: 'Jul 10-12',
      status: '● पुष्टि · CONFIRMED',
      statusColor: 'var(--green)',
      price: '₹7,200',
      image: '🚜',
      bg: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)',
      daysLeft: '2 days'
    },
    { 
      id: 'BK-2025-07-0835',
      equipment: 'Harvester Combine 🌾', 
      owner: 'Suresh Kumar',
      dates: 'Jul 15-17',
      status: '⏸ प्रतीक्षारत · PENDING',
      statusColor: 'var(--saffron)',
      price: '₹14,400',
      image: '🌾',
      bg: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)',
      daysLeft: '7 days'
    }
  ];

  const pastBookings = [
    { 
      id: 'BK-2025-06-0721',
      equipment: 'Eicher 380 🚜', 
      owner: 'Rajesh Patil',
      dates: 'Jun 20-22',
      status: '✓ पूर्ण · COMPLETED',
      price: '₹5,400',
      image: '🚜',
      bg: 'linear-gradient(135deg, #E8E3DA, #D0CCC5)',
      rating: '4.5'
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:44</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Fixed with saffron gradient and rounded bottom */}
          <div 
            className="px-5 pt-4 pb-[60px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  My Bookings · मेरी बुकिंग
                </div>
              </div>
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                🔔
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-2">
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">2</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  सक्रिय · Active
                </div>
              </div>
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">8</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  पूर्ण · Completed
                </div>
              </div>
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">₹21K</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  कुल खर्च · Total
                </div>
              </div>
            </div>
          </div>

          {/* Content Area with proper scroll behavior */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">
            {/* Tabs */}
            <div className="flex bg-white rounded-[20px] mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="flex-1 py-3 text-center text-xs font-semibold rounded-l-[20px]"
                style={{ color: 'var(--green)', background: 'var(--green-pale)' }}
              >
                सक्रिय · Active (2)
              </div>
              <div className="flex-1 py-3 text-center text-xs font-semibold" style={{ color: 'var(--text-soft)' }}>
                पूर्ण · Past (8)
              </div>
            </div>

            {/* Active Bookings */}
            {activeBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-[20px] p-4 mb-4"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[24px] flex-shrink-0"
                    style={{ background: booking.bg }}
                  >
                    {booking.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div 
                        className="text-[13px] font-bold"
                        style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                      >
                        {booking.equipment}
                      </div>
                      <div 
                        className="text-[8px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: booking.statusColor + '20', color: booking.statusColor }}
                      >
                        {booking.status}
                      </div>
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      {booking.owner} · {booking.dates}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-base font-bold" style={{ color: 'var(--saffron)' }}>
                        {booking.price}
                      </div>
                      <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                        ⏰ {booking.daysLeft}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div 
                  className="flex gap-2 mt-3 pt-3"
                  style={{ borderTop: '1px solid #F5F2ED' }}
                >
                  <div
                    className="flex-1 text-center rounded-lg py-1.5 text-[9px] font-bold"
                    style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                  >
                    ✅ पूर्ण करें · Complete
                  </div>
                  <div
                    className="flex-1 text-center rounded-lg py-1.5 text-[9px] font-bold"
                    style={{ background: '#FFF0F0', color: '#CC3333' }}
                  >
                    ✕ रद्द करें · Cancel
                  </div>
                </div>
              </div>
            ))}

            {/* Past Bookings */}
            <div 
              className="text-[13px] font-bold mb-3 mt-4"
              style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
            >
              पिछली बुकिंग · Past Bookings
            </div>

            {pastBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-[20px] p-4 mb-3 opacity-75"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[20px] flex-shrink-0"
                    style={{ background: booking.bg }}
                  >
                    {booking.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div 
                        className="text-[12px] font-bold"
                        style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                      >
                        {booking.equipment}
                      </div>
                      <div className="text-[13px] font-bold" style={{ color: 'var(--text-mid)' }}>
                        {booking.price}
                      </div>
                    </div>
                    <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                      {booking.owner} · {booking.dates}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Nav */}
          <div 
            className="bg-white flex justify-around items-center py-[10px] pb-[14px] relative"
            style={{ borderTop: '1px solid #F0EDE7' }}
          >
            <div className="flex flex-col items-center gap-0.5 text-[9px] w-[50px]" style={{ color: 'var(--text-soft)' }}>
              <div className="text-xl">🏠</div>
              <span>घर · Home</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-[9px] w-[50px]" style={{ color: 'var(--green)' }}>
              <div className="text-xl">📋</div>
              <span>बुकिंग · Bookings</span>
              <div className="w-1 h-1 rounded-full" style={{ background: 'var(--green)' }} />
            </div>
            <div className="flex flex-col items-center gap-0.5 text-[9px] w-[50px]" style={{ color: 'var(--text-soft)' }}>
              <div className="text-xl">👤</div>
              <span>प्रोफाइल · Profile</span>
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