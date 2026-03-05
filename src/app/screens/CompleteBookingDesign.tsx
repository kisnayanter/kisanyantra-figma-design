export function CompleteBookingDesign() {
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
            <span className="font-bold text-[11px]">9:50</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Fixed with saffron gradient */}
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
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Complete Booking · बुकिंग पूर्ण करें
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Complete Booking
                </div>
              </div>
            </div>

            {/* Success Animation */}
            <div 
              className="rounded-[16px] p-4 text-center"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="text-[40px] mb-2">🎉</div>
              <div className="text-white text-[14px] font-bold mb-1">
                बुकिंग सफलतापूर्वक पूर्ण हुई!
              </div>
              <div className="text-white text-[12px]">
                Booking Successfully Completed!
              </div>
            </div>
          </div>

          {/* Content Area with proper scroll behavior */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">
            {/* Equipment Summary */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[24px]"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  🚜
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Mahindra 475 DI
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    हरप्रीत सिंह · Harpreet Singh
                  </div>
                  <div className="text-[13px] font-bold mt-1" style={{ color: 'var(--saffron)' }}>
                    ₹7,200
                  </div>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📋 Service Details · सेवा विवरण
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px]" style={{ color: 'var(--text-soft)' }}>Duration · अवधि</span>
                  <span className="text-[9px] font-bold" style={{ color: 'var(--text-dark)' }}>3 Days · 58 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px]" style={{ color: 'var(--text-soft)' }}>Service Date · सेवा तिथि</span>
                  <span className="text-[9px] font-bold" style={{ color: 'var(--text-dark)' }}>Jul 10-12, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px]" style={{ color: 'var(--text-soft)' }}>Location · स्थान</span>
                  <span className="text-[9px] font-bold" style={{ color: 'var(--text-dark)' }}>Wardha, Maharashtra</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px]" style={{ color: 'var(--text-soft)' }}>Payment Status · भुगतान स्थिति</span>
                  <span className="text-[9px] font-bold" style={{ color: 'var(--green)' }}>Paid · भुगतान किया</span>
                </div>
              </div>
            </div>

            {/* Rate Service */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                ⭐ Rate Service · सेवा का मूल्यांकन करें
              </div>
              <div className="text-center mb-3">
                <div className="text-[28px] mb-2">⭐⭐⭐⭐⭐</div>
                <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                  Tap to rate · रेट करने के लिए टैप करें
                </div>
              </div>
              <div 
                className="rounded-lg p-3 text-[10px]"
                style={{ 
                  background: 'var(--cream)', 
                  border: '1px solid #E8E3DA',
                  minHeight: '60px'
                }}
              >
                Share your experience... · अपना अनुभव साझा करें...
              </div>
            </div>

            {/* Receipt */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-2"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📄 Receipt · रसीद
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    BK-2025-07-0834
                  </div>
                  <div className="text-[8px]" style={{ color: 'var(--text-soft)' }}>
                    Completed on · Jul 12, 2025
                  </div>
                </div>
                <div
                  className="rounded-lg px-2 py-1 text-[8px] font-bold"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                >
                  📄 Download
                </div>
              </div>
            </div>

            {/* Future Bookings */}
            <div
              className="rounded-[16px] p-3 flex items-center gap-3 mb-4"
              style={{ background: 'var(--saffron-pale)', border: '1px solid var(--saffron)' }}
            >
              <div className="text-[16px]">📅</div>
              <div className="flex-1">
                <div className="text-[10px] font-bold" style={{ color: 'var(--saffron)' }}>
                  Book Again · फिर से बुक करें
                </div>
                <div className="text-[9px]" style={{ color: 'var(--saffron)' }}>
                  Schedule your next equipment rental
                </div>
              </div>
              <div className="text-[14px]" style={{ color: 'var(--saffron)' }}>
                →
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div className="w-full bg-[#25D366] text-white rounded-[14px] py-3 text-[11px] font-bold flex items-center justify-center gap-1.5">
              ⭐ Submit Rating & Review · रेटिंग दें
            </div>
            <div className="flex gap-2">
              <div
                className="flex-1 rounded-[14px] py-3 text-xs font-bold text-center"
                style={{ background: 'var(--green-pale)', color: 'var(--green)', border: '1.5px solid var(--green)' }}
              >
                📄 Download Receipt · रसीद डाउनलोड करें
              </div>
              <div
                className="flex-1 rounded-[14px] py-3 text-xs font-bold text-center"
                style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
              >
                🏠 Back to Home · घर वापस जाएं
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
