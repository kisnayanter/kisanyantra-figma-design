export function ShareBookingDetailsDesign() {
  const shareOptions = [
    { 
      icon: '📲', 
      name: 'WhatsApp · व्हाट्सएप', 
      color: '#25D366',
      description: 'Share with contact · संपर्क के साथ साझा करें'
    },
    { 
      icon: '📱', 
      name: 'SMS · संदेश', 
      color: '#007AFF',
      description: 'Send as text message · टेक्स्ट संदेश भेजें'
    },
    { 
      icon: '📋', 
      name: 'Copy Link · कॉपी लिंक', 
      color: 'var(--saffron)',
      description: 'Copy to clipboard · क्लिपबोर्ड पर कॉपी करें'
    },
    { 
      icon: '📧', 
      name: 'Email · ईमेल', 
      color: '#EA4335',
      description: 'Send via email · ईमेल के माध्यम से भेजें'
    },
    { 
      icon: '🔗', 
      name: 'Other Apps · अन्य ऐप्स', 
      color: 'var(--text-mid)',
      description: 'Share via other apps · अन्य ऐप्स के माध्यम से साझा करें'
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
            <span className="font-bold text-[11px]">9:47</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div 
            className="px-[18px] pt-5 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)' }}
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
                  बुकिंग साझा करें · Share Booking
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Share Booking Details
                </div>
              </div>
            </div>

            {/* Booking Preview */}
            <div 
              className="rounded-[16px] p-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[20px]">🚜</div>
                <div className="flex-1">
                  <div className="text-white text-[12px] font-bold">
                    Mahindra 475 DI · Jul 10-12
                  </div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    BK-2025-07-0834 · ₹7,200
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div 
              className="text-[12px] font-bold mb-4"
              style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
            >
              📤 Share Options · साझा करने के विकल्प
            </div>

            {shareOptions.map((option) => (
              <div
                key={option.name}
                className="bg-white rounded-[18px] p-4 mb-3 flex items-center gap-3"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <div 
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[20px] flex-shrink-0"
                  style={{ background: option.color + '20', border: '2px solid ' + option.color }}
                >
                  {option.icon}
                </div>
                <div className="flex-1">
                  <div 
                    className="text-[12px] font-bold"
                    style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                  >
                    {option.name}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    {option.description}
                  </div>
                </div>
                <div className="text-[16px]" style={{ color: option.color }}>
                  →
                </div>
              </div>
            ))}

            {/* Message Preview */}
            <div
              className="bg-white rounded-[18px] p-4 mt-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📝 Message Preview · संदेश पूर्वावलोकन
              </div>
              <div 
                className="rounded-lg p-3 text-[10px]"
                style={{ background: 'var(--cream)', border: '1px solid #E8E3DA' }}
              >
                <div className="font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                  🚜 KisanYantra Booking Details
                </div>
                <div style={{ color: 'var(--text-mid)' }}>
                  <div>Equipment: Mahindra 475 DI</div>
                  <div>Owner: Harpreet Singh</div>
                  <div>Dates: Jul 10-12, 2025</div>
                  <div>Booking ID: BK-2025-07-0834</div>
                  <div>Total: ₹7,200</div>
                  <div className="mt-2" style={{ color: 'var(--saffron)' }}>
                    📱 Download KisanYantra App
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4">
            <div
              className="w-full rounded-[14px] py-3 text-sm font-bold text-center"
              style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
            >
              Cancel · रद्द करें
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
