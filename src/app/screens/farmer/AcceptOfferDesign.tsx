export function AcceptOfferDesign() {
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
            <span className="font-bold text-[11px]">9:52</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Success Header */}
          <div
            className="px-5 pt-6 pb-[50px] rounded-b-[36px] text-center"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="text-[56px] mb-2">🤝</div>
            <div
              className="text-white text-[22px] font-bold mb-1"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            >
              Offer Accepted!
            </div>
            <div className="text-[13px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
              बुकिंग की पुष्टि हो गई · Booking Confirmed
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-6">
            {/* Booking Summary */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center gap-3 pb-3 mb-3" style={{ borderBottom: '1px solid #F5F2ED' }}>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-[28px]"
                  style={{ background: 'var(--green-pale)' }}
                >
                  🚜
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Mahindra 475 DI
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    50 HP · Operator included
                  </div>
                </div>
                <div
                  className="rounded-[8px] px-2 py-1 text-[10px] font-bold"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                >
                  CONFIRMED
                </div>
              </div>

              {/* Owner Info */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px]"
                  style={{ background: 'linear-gradient(135deg, var(--saffron-pale), #FFE0C8)' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Harpreet Singh
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    ⭐ 4.8 (32 reviews) · 3.5 km away
                  </div>
                </div>
                <button
                  className="ky-tap-icon w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: '#25D366', color: 'white' }}
                >
                  📱
                </button>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>📅 Dates</span>
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>Mar 15 – Mar 17</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>⏰ Duration</span>
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>3 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>📍 Delivery</span>
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>To your field, 7 AM</span>
                </div>
                <div className="flex justify-between pt-2" style={{ borderTop: '1.5px solid #F5F2ED' }}>
                  <span className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>Total Amount</span>
                  <span className="text-[18px] font-bold" style={{ color: 'var(--green)' }}>₹6,600</span>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💳 Payment · भुगतान
              </div>
              <div className="space-y-2">
                {[
                  { label: 'UPI / Google Pay', icon: '📱', active: true },
                  { label: 'Cash on Delivery', icon: '💵', active: false },
                  { label: 'Bank Transfer', icon: '🏦', active: false }
                ].map((method) => (
                  <div
                    key={method.label}
                    className="ky-tap-radio rounded-[14px] p-3 flex items-center gap-3"
                    style={{
                      background: method.active ? 'var(--green-pale)' : 'var(--cream)',
                      border: method.active ? '2px solid var(--green)' : '1.5px solid #E8E3DA'
                    }}
                  >
                    <div className="text-[18px]">{method.icon}</div>
                    <div className="flex-1 text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                      {method.label}
                    </div>
                    {method.active && (
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: 'var(--green)', color: 'white', fontSize: '10px' }}
                      >
                        ✓
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div
                className="rounded-[12px] p-2.5 mt-3 flex items-center gap-2"
                style={{ background: 'var(--saffron-pale)', border: '1px solid rgba(255,107,0,0.2)' }}
              >
                <div className="text-[14px]">ℹ️</div>
                <div className="text-[10px]" style={{ color: 'var(--text-mid)' }}>
                  Advance deposit of <strong>₹1,000</strong> secures your booking. Balance due on delivery.
                </div>
              </div>
            </div>

            {/* Reminders */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                🔔 You'll receive reminders
              </div>
              <div className="space-y-1.5">
                {[
                  '1 day before: Booking reminder via SMS',
                  'On delivery: Track equipment in real-time',
                  'After rental: Rate your experience'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} />
                    <div className="text-[10px]" style={{ color: 'var(--text-mid)' }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="px-5 pb-5 pt-2 flex flex-col gap-2">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[14px] font-bold text-[14px] text-white text-center"
              style={{
                background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
                boxShadow: '0 4px 20px rgba(255,107,0,0.35)'
              }}
            >
              💳 Pay ₹1,000 Advance
            </button>
            <button
              className="ky-tap-share w-full rounded-2xl py-3 text-[12px] font-bold text-center"
              style={{ background: 'white', color: '#25D366', border: '1.5px solid #25D366' }}
            >
              📲 Share Booking on WhatsApp
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
