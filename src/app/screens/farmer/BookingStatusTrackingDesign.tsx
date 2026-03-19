export function BookingStatusTrackingDesign() {
  const timeline = [
    {
      status: 'Booked',
      time: 'Jul 5, 2:30 PM',
      description: 'Booking confirmed and payment initiated',
      completed: true,
      icon: '📝',
      color: 'var(--green)'
    },
    {
      status: 'Owner Accepted',
      time: 'Jul 5, 3:15 PM',
      description: 'Harpreet Singh accepted your booking request',
      completed: true,
      icon: '✅',
      color: 'var(--green)'
    },
    {
      status: 'Equipment Ready',
      time: 'Jul 9, 6:00 PM',
      description: 'Equipment prepared and ready for delivery',
      completed: true,
      icon: '🔧',
      color: 'var(--green)'
    },
    {
      status: 'On The Way',
      time: 'Jul 10, 7:30 AM',
      description: 'Equipment is en route to your location',
      completed: true,
      icon: '🚚',
      color: 'var(--green)'
    },
    {
      status: 'Arrived',
      time: 'In Progress',
      description: 'Equipment has arrived at your farm',
      completed: true,
      icon: '📍',
      color: 'var(--green)'
    },
    {
      status: 'In Use',
      time: 'Active Now',
      description: 'Equipment is currently being used',
      completed: true,
      icon: '🚜',
      color: 'var(--saffron)',
      current: true
    },
    {
      status: 'Completed',
      time: 'Pending',
      description: 'Rental period will end on Jul 12, 6:00 PM',
      completed: false,
      icon: '🏁',
      color: 'var(--text-soft)'
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:45</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div 
            className="px-[18px] pt-5 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  बुकिंग स्थिति · Booking Status
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Track Booking
                </div>
              </div>
              <div
                className="ky-tap-icon w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base animate-pulse"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                🔴
              </div>
            </div>

            {/* Live Status */}
            <div 
              className="rounded-[16px] p-4"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[28px]">🚜</div>
                <div className="flex-1">
                  <div className="text-white text-[14px] font-bold">
                    Mahindra 475 DI
                  </div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Currently In Use · Day 2 of 3
                  </div>
                </div>
                <div 
                  className="rounded-lg px-2 py-1 text-[10px] font-bold animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.25)', color: 'white' }}
                >
                  ● LIVE
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div 
              className="text-[12px] font-bold mb-3"
              style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
            >
              📋 Booking Timeline
            </div>

            <div className="space-y-3">
              {timeline.map((event, index) => (
                <div key={event.status} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[16px] flex-shrink-0"
                      style={{ 
                        background: event.completed ? event.color : '#F5F5F5',
                        border: event.current ? '3px solid var(--saffron)' : 
                                event.completed ? '2px solid ' + event.color : '2px solid #E0E0E0'
                      }}
                    >
                      {event.icon}
                    </div>
                    {index < timeline.length - 1 && (
                      <div 
                        className="w-0.5 flex-1 mt-1"
                        style={{ 
                          background: event.completed ? event.color : '#E0E0E0',
                          minHeight: '40px'
                        }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex justify-between items-start mb-1">
                      <div 
                        className="text-[12px] font-bold"
                        style={{ 
                          color: event.completed ? 'var(--text-dark)' : 'var(--text-soft)',
                          fontFamily: "'Baloo 2', cursive"
                        }}
                      >
                        {event.status}
                      </div>
                      {event.current && (
                        <div 
                          className="rounded-lg px-2 py-0.5 text-[8px] font-bold animate-pulse"
                          style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                        >
                          CURRENT
                        </div>
                      )}
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      {event.time}
                    </div>
                    <div className="text-[10px] mt-1" style={{ color: 'var(--text-mid)' }}>
                      {event.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Current Location */}
            <div
              className="bg-white rounded-[18px] p-4 mt-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📍 Current Location
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[20px]">📍</div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Your Farm - Wardha, Maharashtra
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    Near NH-161, 5km from city center
                  </div>
                </div>
                <div
                  className="ky-tap-link rounded-lg px-2 py-1 text-[9px] font-bold"
                  style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                >
                  🗺️ Map
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div
              className="rounded-[16px] p-3 flex items-center gap-3 mb-4"
              style={{ background: '#FFF0F0', border: '1px solid #FFCCCC' }}
            >
              <div className="text-[18px]">🚨</div>
              <div className="flex-1">
                <div className="text-[11px] font-bold" style={{ color: '#CC3333' }}>
                  Emergency Support
                </div>
                <div className="text-[10px]" style={{ color: '#CC3333' }}>
                  Contact owner or support for any issues
                </div>
              </div>
              <div className="flex gap-2">
                <div className="ky-tap-icon w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center text-white text-[12px]">
                  📞
                </div>
                <div className="ky-tap-icon w-8 h-8 rounded-lg bg-[#0088CC] flex items-center justify-center text-white text-[12px]">
                  💬
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div className="ky-tap-share w-full bg-[#25D366] text-white rounded-[14px] py-3 text-[13px] font-bold flex items-center justify-center gap-1.5">
              📲 Contact Owner
            </div>
            <div className="flex gap-2">
              <div
                className="ky-tap-cta-secondary flex-1 rounded-[14px] py-3 text-xs font-bold text-center"
                style={{ background: 'var(--green-pale)', color: 'var(--green)', border: '1.5px solid var(--green)' }}
              >
                📞 Call Support
              </div>
              <div
                className="ky-tap-cta-secondary flex-1 rounded-[14px] py-3 text-xs font-bold text-center"
                style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)', border: '1.5px solid var(--saffron)' }}
              >
                📍 Track Location
              </div>
            </div>
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-sm font-bold text-center"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', color: 'white', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              ✅ Mark as Complete · पूर्ण करें
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