export function BookingRequestDesign() {
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
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Incoming Booking Request
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  New Request
                </div>
              </div>
              <div className="text-white text-[11px] font-semibold">2 min ago</div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Equipment Card */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex gap-3 mb-3">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-[32px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  🚜
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[15px] mb-1" style={{ color: 'var(--text-dark)' }}>
                    John Deere 5310
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    Your Equipment · 50 HP
                  </div>
                </div>
              </div>
            </div>

            {/* Farmer Details */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                Farmer Details · किसान विवरण
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px]"
                  style={{ background: 'linear-gradient(135deg, var(--green-pale), #C8EFD4)' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[14px] mb-0.5" style={{ color: 'var(--text-dark)' }}>
                    Ramu Kisan
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    📍 3.5 km away · ⭐ 4.7 rating
                  </div>
                </div>
              </div>
              <button 
                className="w-full rounded-xl py-2 text-[12px] font-semibold flex items-center justify-center gap-2"
                style={{ background: 'var(--cream)', color: 'var(--text-dark)' }}
              >
                📞 Call Farmer
              </button>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-[18px] p-4 mb-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                Booking Details · बुकिंग विवरण
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <span>📅</span>
                    <span>Date</span>
                  </div>
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    15 March 2026
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <span>⏰</span>
                    <span>Duration</span>
                  </div>
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    8 hours
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <span>🏘️</span>
                    <span>Farm Location</span>
                  </div>
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    Hinganghat
                  </div>
                </div>
              </div>
            </div>

            {/* Earnings */}
            <div 
              className="rounded-[18px] p-4 mb-[10px]"
              style={{ background: 'var(--green-pale)', border: '1px solid var(--green)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    Your Earnings · आपकी कमाई
                  </div>
                  <div className="text-[24px] font-bold" style={{ color: 'var(--green)' }}>
                    ₹9,600
                  </div>
                </div>
                <div className="text-[36px]">💰</div>
              </div>
              <div className="text-[10px] mt-2" style={{ color: 'var(--text-mid)' }}>
                8 hrs × ₹1,200/hr = ₹9,600
              </div>
            </div>

            {/* Voice Message */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                🎤 Voice Message from Farmer
              </div>
              <div 
                className="rounded-xl p-3 flex items-center gap-3"
                style={{ background: 'var(--cream)' }}
              >
                <button className="text-2xl">▶️</button>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: 'var(--saffron)' }}>
                  <div className="h-full w-2/3 rounded-full" style={{ background: 'var(--gold)' }} />
                </div>
                <div className="text-[11px] font-mono" style={{ color: 'var(--text-soft)' }}>
                  0:12
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="px-5 pb-5 pt-2 flex gap-3">
            <button
              className="flex-1 rounded-2xl py-[15px] font-bold text-[15px]"
              style={{
                background: 'white',
                color: 'var(--text-dark)',
                border: '2px solid #E8E3DA'
              }}
            >
              ✕ Decline
            </button>
            <button
              className="flex-1 rounded-2xl py-[15px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              ✓ Accept
            </button>
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
