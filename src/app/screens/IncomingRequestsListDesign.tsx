export function IncomingRequestsListDesign() {
  const pendingRequests = [
    {
      id: 'REQ-2026-03-0142',
      farmerName: 'Ramu Kisan',
      farmerAvatar: '👨‍🌾',
      equipment: 'Mahindra 475 DI',
      equipmentIcon: '🚜',
      location: 'Wardha, Maharashtra',
      distance: '3.5 km',
      dates: 'Mar 15-17',
      duration: '3 days',
      price: '₹7,200',
      paymentMode: 'Cash',
      timeLeft: '1:42:30',
      urgent: true,
      rating: '4.7'
    },
    {
      id: 'REQ-2026-03-0141',
      farmerName: 'Suresh Patil',
      farmerAvatar: '👨‍🌾',
      equipment: 'Combine Harvester',
      equipmentIcon: '🌾',
      location: 'Hinganghat',
      distance: '8.2 km',
      dates: 'Mar 18-20',
      duration: '3 days',
      price: '₹15,000',
      paymentMode: 'UPI',
      timeLeft: '4:15:00',
      urgent: false,
      rating: '4.9'
    },
    {
      id: 'REQ-2026-03-0140',
      farmerName: 'Lakshmi Devi',
      farmerAvatar: '👩‍🌾',
      equipment: 'Mahindra 475 DI',
      equipmentIcon: '🚜',
      location: 'Nagpur',
      distance: '12 km',
      dates: 'Mar 16',
      duration: '1 day',
      price: '₹2,400',
      paymentMode: 'Cash',
      timeLeft: '6:30:00',
      urgent: false,
      rating: '4.5'
    },
    {
      id: 'REQ-2026-03-0139',
      farmerName: 'Rajesh Kumar',
      farmerAvatar: '👨‍🌾',
      equipment: 'Rotavator',
      equipmentIcon: '🔧',
      location: 'Wardha',
      distance: '5 km',
      dates: 'Mar 19-21',
      duration: '3 days',
      price: '₹4,500',
      paymentMode: 'UPI',
      timeLeft: '8:00:00',
      urgent: false,
      rating: '4.6'
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
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div 
            className="px-5 pt-4 pb-[50px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <button
                type="button"
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </button>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  🔔 Booking Requests
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Incoming Requests
                </div>
              </div>
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base relative"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                🔔
                <div 
                  className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full"
                  style={{ background: '#E74C3C', border: '2px solid var(--saffron)' }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-2">
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">4</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  Pending
                </div>
              </div>
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">₹29K</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  Potential
                </div>
              </div>
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">1</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  Urgent
                </div>
              </div>
            </div>
          </div>

          {/* Content - Request List */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-6">
            {/* Filter Tabs */}
            <div className="flex bg-white rounded-[20px] mb-4 p-1" style={{ boxShadow: 'var(--card-shadow)' }}>
              <button
                className="flex-1 py-2 text-center text-[11px] font-semibold rounded-[14px]"
                style={{ color: 'white', background: 'var(--saffron)' }}
              >
                All (4)
              </button>
              <button
                className="flex-1 py-2 text-center text-[11px] font-semibold"
                style={{ color: 'var(--text-soft)' }}
              >
                Urgent (1)
              </button>
              <button
                className="flex-1 py-2 text-center text-[11px] font-semibold"
                style={{ color: 'var(--text-soft)' }}
              >
                Today (2)
              </button>
            </div>

            {/* Request Cards */}
            {pendingRequests.map((request, index) => (
              <div
                key={request.id}
                className="bg-white rounded-[20px] p-4 mb-3"
                style={{ 
                  boxShadow: 'var(--card-shadow)',
                  borderLeft: request.urgent ? '4px solid var(--saffron)' : 'none'
                }}
              >
                {/* Header with Farmer Info */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, var(--green-pale), #C8EFD4)' }}
                    >
                      {request.farmerAvatar}
                    </div>
                    <div>
                      <div className="font-bold text-[13px] mb-0.5" style={{ color: 'var(--text-dark)' }}>
                        {request.farmerName}
                      </div>
                      <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                        📍 {request.location} · {request.distance}
                      </div>
                      <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-soft)' }}>
                        ⭐ {request.rating} rating
                      </div>
                    </div>
                  </div>
                  {request.urgent && (
                    <div 
                      className="rounded-[10px] px-2 py-1 text-[10px] font-bold"
                      style={{ background: '#FFF3E8', border: '1.5px solid #FFD0A8', color: 'var(--saffron)' }}
                    >
                      ⏱ {request.timeLeft}
                    </div>
                  )}
                </div>

                {/* Equipment Info */}
                <div 
                  className="rounded-xl p-2.5 mb-3 flex items-center gap-2.5"
                  style={{ background: 'var(--cream)' }}
                >
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-[20px] flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                  >
                    {request.equipmentIcon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>
                      {request.equipment}
                    </div>
                    <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                      Your Equipment
                    </div>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="flex gap-2 mb-3">
                  <div 
                    className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    📅 {request.dates}
                  </div>
                  <div 
                    className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    ⏰ {request.duration}
                  </div>
                  <div 
                    className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    💵 {request.paymentMode}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      Your Earnings
                    </div>
                    <div className="text-[18px] font-bold" style={{ color: 'var(--green)' }}>
                      {request.price}
                    </div>
                  </div>
                  <button
                    className="rounded-[10px] px-3 py-2 text-[11px] font-bold"
                    style={{ background: '#FFF0F0', border: '1.5px solid #FFCCCC', color: '#CC3333' }}
                  >
                    ✕ Reject
                  </button>
                  <button
                    className="rounded-[10px] px-4 py-2 text-[11px] font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 3px 10px rgba(26,122,59,0.3)' }}
                  >
                    ✓ Accept
                  </button>
                </div>

                {/* Quick Action - View Details */}
                <button
                  className="w-full mt-3 pt-3 text-[11px] font-semibold text-center"
                  style={{ 
                    borderTop: '1px solid #F5F2ED',
                    color: 'var(--saffron)'
                  }}
                >
                  View Full Details →
                </button>
              </div>
            ))}

            {/* Empty State Helper */}
            <div 
              className="bg-white rounded-[18px] p-4 text-center"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="text-[32px] mb-2">✅</div>
              <div className="text-[12px] font-bold mb-1" style={{ color: 'var(--text-dark)' }}>
                All Caught Up!
              </div>
              <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                You've reviewed all pending requests. New requests will appear here.
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
