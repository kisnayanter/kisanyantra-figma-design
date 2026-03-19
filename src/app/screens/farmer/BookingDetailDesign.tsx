export function BookingDetailDesign() {
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
            <span className="font-bold text-[11px]">9:46</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Fixed with saffron gradient and rounded bottom */}
          <div 
            className="px-5 pt-4 pb-[60px] rounded-b-[36px]"
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
                <div
                  className="text-white text-[18px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Booking Details · बुकिंग विवरण
                </div>
              </div>
            </div>

            {/* Equipment Preview */}
            <div 
              className="rounded-[16px] p-4 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div 
                className="w-14 h-14 rounded-[12px] flex items-center justify-center text-[28px]"
                style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
              >
                🚜
              </div>
              <div className="flex-1">
                <div 
                  className="text-white text-[15px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Mahindra 475 DI
                </div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  हरप्रीत सिंह · Harpreet Singh · 50 HP
                </div>
                <div 
                  className="inline-block mt-1 rounded-lg px-2 py-0.5 text-[9px] font-bold"
                  style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
                >
                  ● पुष्टि · CONFIRMED
                </div>
              </div>
            </div>
          </div>

          {/* Content Area with proper scroll behavior */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">
            {/* Quick Info */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-[18px] font-bold" style={{ color: 'var(--saffron)' }}>₹7,200</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>कुल राशि · Total</div>
                </div>
                <div className="text-center">
                  <div className="text-[18px] font-bold" style={{ color: 'var(--green)' }}>3 दिन</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>अवधि · Duration</div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📅 Schedule · शेड्यूल
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>शुरू · Start</span>
                  <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)' }}>Jul 10, 8:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>समाप्त · End</span>
                  <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)' }}>Jul 12, 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📍 Location · स्थान
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[16px]">📍</div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    आपका खेत · Your Farm
                  </div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                    Wardha, Maharashtra
                  </div>
                </div>
                <div
                  className="ky-tap-link rounded-lg px-2 py-1 text-[8px] font-bold"
                  style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                >
                  🗺️ Map
                </div>
              </div>
            </div>

            {/* Owner */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                👤 Owner · मालिक
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{ background: 'var(--green-pale)' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    हरप्रीत सिंह · Harpreet Singh
                  </div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                    Ludhiana, Punjab · 4.8 ⭐
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="ky-tap-share flex-1 bg-[#25D366] text-white rounded-[10px] py-2 text-[9px] font-bold text-center">
                  📲 WhatsApp
                </div>
                <div className="ky-tap-icon flex-1 bg-[#0088CC] text-white rounded-[10px] py-2 text-[9px] font-bold text-center">
                  📞 Call
                </div>
              </div>
            </div>

            {/* Booking ID */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-2"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📋 Booking ID · बुकिंग आईडी
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    BK-2025-07-0834
                  </div>
                  <div className="text-[8px]" style={{ color: 'var(--text-soft)' }}>
                    Jul 5, 2025
                  </div>
                </div>
                <div
                  className="ky-tap-link rounded-lg px-2 py-1 text-[8px] font-bold"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                >
                  📄 Receipt
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div className="ky-tap-share w-full bg-[#25D366] text-white rounded-[14px] py-3 text-[11px] font-bold text-center">
              📲 Share Booking Details · शेयर करें
            </div>
            <div className="flex gap-2">
              <div
                className="ky-tap-action-destructive flex-1 text-white rounded-[14px] py-3 text-xs font-bold text-center"
                style={{ background: '#FFF0F0', color: '#CC3333' }}
              >
                ✕ Cancel · रद्द करें
              </div>
              <div
                className="ky-tap-cta-secondary flex-1 text-white rounded-[14px] py-3 text-xs font-bold text-center"
                style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
              >
                📅 Reschedule · तारीख बदलें
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