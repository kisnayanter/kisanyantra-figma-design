export function BookingConfirmDesign() {
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
          {/* Header */}
          <div 
            className="px-[18px] pt-5 pb-[50px] text-center rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-[18px] py-[10px]" style={{ color: 'white' }}>
              <span className="font-bold text-[11px]">9:50</span>
              <div className="text-[11px]">🔋</div>
            </div>

            <div className="pt-5">
              <div 
                className="w-[72px] h-[72px] rounded-full mx-auto mb-3 flex items-center justify-center text-[36px]"
                style={{ background: 'rgba(255,255,255,0.25)', boxShadow: '0 0 0 10px rgba(255,255,255,0.1)' }}
              >
                ✅
              </div>
              <div 
                className="text-white text-[22px] font-extrabold"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                Booking Confirmed!
              </div>
              <div className="text-[12px] mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                बुकिंग हो गई! · बुकिंग झाली!
              </div>
              <div 
                className="inline-block mt-2 rounded-[10px] px-[14px] py-1 text-white text-[11px] font-bold tracking-wider"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                BK-2025-07-0834
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 -mt-6">
            {/* Summary Card */}
            <div
              className="bg-white rounded-[20px] p-[18px] mb-[14px]"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              {[
                { label: 'Equipment', value: 'Mahindra 475 DI 🚜', color: 'var(--text-dark)' },
                { label: 'Owner', value: 'Harpreet Singh', color: 'var(--text-dark)' },
                { label: 'Dates', value: 'Jul 10 – Jul 12', color: 'var(--text-dark)' },
                { label: 'Duration', value: '3 Days', color: 'var(--text-dark)' },
                { label: 'Total', value: '₹7,200', color: 'var(--saffron)' },
                { label: 'Status', value: '● Confirmed', color: 'var(--green)' }
              ].map((row, i) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-2"
                  style={{ borderBottom: i < 5 ? '1px solid #F5F2ED' : 'none' }}
                >
                  <span className="text-xs" style={{ color: 'var(--text-soft)' }}>{row.label}</span>
                  <span className="text-[13px] font-bold" style={{ color: row.color }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-[20px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div 
                className="text-sm font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                💳 Choose Payment
              </div>

              <div
                className="w-full flex items-center gap-3 p-3 rounded-[14px] mb-2"
                style={{ border: '2px solid var(--saffron)', background: 'var(--saffron-pale)' }}
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: '#E8F7EE' }}
                >
                  💵
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-[13px]">Cash on Arrival</div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    Pay Harpreet directly on day 1
                  </div>
                </div>
                <div 
                  className="w-[18px] h-[18px] rounded-full flex items-center justify-center"
                  style={{ border: '2px solid var(--saffron)' }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--saffron)' }} />
                </div>
              </div>

              <div
                className="w-full flex items-center gap-3 p-3 rounded-[14px]"
                style={{ border: '2px solid #E8E3DA', background: 'transparent' }}
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: '#E8F0FF' }}
                >
                  📱
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-[13px]">Pay via UPI</div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    GPay · PhonePe · Paytm
                  </div>
                </div>
                <div 
                  className="w-[18px] h-[18px] rounded-full"
                  style={{ border: '2px solid #D0CCC5' }}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div className="w-full bg-[#25D366] text-white rounded-[14px] py-3 text-[13px] font-bold flex items-center justify-center gap-1.5">
              📲 Share on WhatsApp
            </div>
            <div
              className="w-full text-white rounded-[14px] py-3 text-sm font-bold text-center"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              ⭐ Rate Experience
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
