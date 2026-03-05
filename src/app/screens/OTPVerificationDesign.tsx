export function OTPVerificationDesign() {
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
            <span className="font-bold text-[11px]">9:43</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div 
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Step 2 of 3 · ओटीपी सत्यापन
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Verify OTP Code
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <div 
                className="h-full rounded-full transition-all"
                style={{ background: 'white', width: '66%' }}
              />
            </div>
          </div>

          {/* OTP Card - Overlapping */}
          <div className="flex-1 px-5 pb-5 -mt-4">
            <div className="bg-white rounded-[20px] p-5 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-center mb-4">
                <div className="text-[12px] mb-1" style={{ color: 'var(--text-soft)' }}>
                  📱 We sent a 6-digit code to
                </div>
                <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                  +91 98765 43210
                </div>
              </div>

              {/* OTP Boxes */}
              <div className="flex gap-2 justify-center mb-5">
                {[5, 4, 7, 2, 8, 3].map((digit, i) => (
                  <div
                    key={i}
                    className="w-11 h-12 rounded-xl flex items-center justify-center text-[20px] font-bold"
                    style={{
                      background: 'var(--cream)',
                      border: '2px solid var(--saffron)',
                      boxShadow: '0 2px 8px rgba(255,107,0,0.15)',
                      color: 'var(--text-dark)'
                    }}
                  >
                    {digit}
                  </div>
                ))}
              </div>

              {/* Info Text */}
              <div className="text-center">
                <div className="text-[11px] mb-2" style={{ color: 'var(--text-soft)' }}>
                  Tap boxes to edit with your keyboard<br />
                  बक्सों पर टैप करें
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                  Didn't receive code? · कोड नहीं मिला?
                </div>
                <button 
                  className="text-[12px] font-bold mt-1"
                  style={{ color: 'var(--saffron)' }}
                >
                  Resend OTP (0:28)
                </button>
              </div>
            </div>

            {/* Keyboard Hint Card */}
            <div 
              className="rounded-[16px] p-4"
              style={{ background: '#F5F2ED', border: '1px solid #E8E3DA' }}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">⌨️</div>
                <div className="text-[11px] leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                  Your phone keyboard will appear automatically when you tap any box
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="px-5 pb-5">
            <button
              className="w-full rounded-2xl py-[15px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              ✓ Verify & Continue
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
