export function CancelBookingDesign() {
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
            style={{ background: 'linear-gradient(135deg, #CC3333 0%, #FF6666 100%)' }}
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
                  बुकिंग रद्द करें · Cancel Booking
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Cancel Booking
                </div>
              </div>
            </div>

            {/* Warning */}
            <div 
              className="rounded-[16px] p-3 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="text-[24px]">⚠️</div>
              <div className="flex-1">
                <div className="text-white text-[12px] font-bold">
                  Cancellation Policy Applies
                </div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Refund amount depends on timing
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📋 Booking Summary
              </div>
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
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    Harpreet Singh · Jul 10-12, 2025
                  </div>
                  <div className="text-[13px] font-bold mt-1" style={{ color: 'var(--saffron)' }}>
                    Total: ₹7,200
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Calculation */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💰 Refund Calculation
              </div>
              {[
                { label: 'Total Amount', value: '₹7,200', color: 'var(--text-dark)' },
                { label: 'Cancellation Fee (24h before)', value: '-₹720', color: '#CC3333' },
                { label: 'Processing Fee', value: '-₹180', color: '#CC3333' },
                { label: 'Refund Amount', value: '₹6,300', color: 'var(--green)', bold: true }
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-2"
                  style={{ borderBottom: item.label !== 'Refund Amount' ? '1px solid #F5F2ED' : 'none' }}
                >
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>{item.label}</span>
                  <span 
                    className="text-[12px] font-bold"
                    style={{ color: item.color, fontWeight: item.bold ? 'bold' : 'normal' }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
              <div 
                className="mt-3 rounded-lg p-2 text-center"
                style={{ background: 'var(--green-pale)' }}
              >
                <div className="text-[10px]" style={{ color: 'var(--green)' }}>
                  Refund will be processed within 5-7 working days
                </div>
              </div>
            </div>

            {/* Cancellation Reason */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📝 Reason for Cancellation
              </div>
              <div className="space-y-2">
                {[
                  'Weather conditions not suitable',
                  'Found alternative equipment',
                  'Farm work postponed',
                  'Personal emergency',
                  'Other reason'
                ].map((reason, i) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 p-2 rounded-lg"
                    style={{ 
                      background: i === 0 ? 'var(--saffron-pale)' : 'transparent',
                      border: i === 0 ? '2px solid var(--saffron)' : '1px solid #E8E3DA'
                    }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ 
                        background: i === 0 ? 'var(--saffron)' : 'white',
                        border: i === 0 ? '2px solid var(--saffron)' : '2px solid #D0CCC5'
                      }}
                    >
                      {i === 0 && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className="text-[11px]" style={{ color: 'var(--text-dark)' }}>{reason}</span>
                  </div>
                ))}
              </div>
              
              {/* Additional Comments */}
              <div className="mt-3">
                <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>
                  Additional Comments (Optional)
                </div>
                <div 
                  className="rounded-lg p-3 text-[11px]"
                  style={{ 
                    background: 'var(--cream)', 
                    border: '1px solid #E8E3DA',
                    minHeight: '60px'
                  }}
                >
                  Please provide any additional details...
                </div>
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-start gap-3 mb-4">
              <div 
                className="w-4 h-4 rounded mt-0.5 flex items-center justify-center"
                style={{ background: 'var(--saffron)', border: '2px solid var(--saffron)' }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <div className="flex-1">
                <div className="text-[10px]" style={{ color: 'var(--text-dark)' }}>
                  I understand that cancellation fees apply and agree to the terms
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div
              className="w-full text-white rounded-[14px] py-3 text-sm font-bold text-center"
              style={{ background: 'linear-gradient(135deg, #CC3333, #FF6666)', boxShadow: '0 4px 16px rgba(204,51,51,0.35)' }}
            >
              ✕ Confirm Cancellation
            </div>
            <div
              className="w-full rounded-[14px] py-3 text-sm font-bold text-center"
              style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
            >
              Keep Booking
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