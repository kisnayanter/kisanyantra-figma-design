export function RoleSelectOwnerDesign() {
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>9:42</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>
          
          {/* Modern Header with Green Gradient & Curved Bottom */}
          <div 
            className="px-5 pt-4 pb-[44px] rounded-b-[36px] relative"
            style={{ 
              background: 'var(--gradient-green)',
              boxShadow: 'var(--card-shadow-green)',
              backgroundImage: `
                var(--gradient-green),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="ky-tap-back w-9 h-9 rounded-[11px] flex items-center justify-center text-white text-base backdrop-blur-sm"
                style={{ background: 'rgba(255,255,255,0.15)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              >
                ←
              </div>
              <div>
                <div className="text-[13px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}>
                  🌿 Tractor Owner Flow
                </div>
                <div 
                  className="text-white text-[28px] font-bold leading-tight mt-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  I Own Equipment
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 rounded-full overflow-hidden backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{ background: 'var(--harvest-yellow)', width: '33%', boxShadow: '0 0 8px rgba(244, 180, 0, 0.5)' }}
              />
            </div>
          </div>

          {/* Role Cards - Modern Neumorphic Style with 8pt Spacing */}
          <div className="flex-1 px-5 pb-5 -mt-5 overflow-y-auto">
            <div className="flex flex-col gap-4" style={{ paddingTop: '4px' }}>
              {/* Disabled Card - Dashed Border & Opacity */}
              <div
                className="ky-tap-radio bg-white rounded-[20px] p-5 flex items-center gap-4"
                style={{
                  boxShadow: 'var(--card-shadow-sm)',
                  border: '2px dashed var(--text-tertiary)',
                  opacity: 0.6
                }}
              >
                <div 
                  className="w-[72px] h-[72px] rounded-[18px] flex items-center justify-center flex-shrink-0"
                  style={{ 
                    background: 'rgba(34, 139, 94, 0.06)',
                    fontSize: '36px'
                  }}
                >
                  🌾
                </div>
                <div className="text-left flex-1">
                  <div 
                    className="text-[13px] font-semibold"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--text-secondary)' }}
                  >
                    मुझे ट्रैक्टर चाहिए
                  </div>
                  <div 
                    className="text-[20px] font-bold mt-0.5"
                    style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
                  >
                    I Need Equipment
                  </div>
                  <div className="text-[13px] mt-1.5" style={{ color: 'var(--text-secondary)', lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
                    Find tractors near farm
                  </div>
                </div>
              </div>

              {/* Selected Card - Premium Neumorphic with Soft Shadow & Green Tint */}
              <div
                className="ky-tap-radio bg-white rounded-[20px] p-5 flex items-center gap-4"
                style={{
                  boxShadow: 'var(--card-shadow-green)',
                  border: '3px solid var(--green-primary)',
                  background: 'linear-gradient(135deg, var(--green-pale) 0%, var(--green-tint) 100%)',
                  transform: 'translateY(-2px)'
                }}
              >
                <div 
                  className="w-[72px] h-[72px] rounded-[18px] flex items-center justify-center flex-shrink-0"
                  style={{ 
                    background: 'var(--gradient-green)',
                    boxShadow: '0 4px 12px rgba(31, 122, 76, 0.3)',
                    fontSize: '36px'
                  }}
                >
                  🚜
                </div>
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <div 
                      className="text-[13px] font-semibold"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--green-primary)' }}
                    >
                      मेरे पास ट्रैक्टर है
                    </div>
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[12px] font-bold"
                      style={{ background: 'var(--green-primary)' }}
                    >
                      ✓
                    </div>
                  </div>
                  <div 
                    className="text-[20px] font-bold"
                    style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
                  >
                    I Own Equipment
                  </div>
                  <div className="text-[13px] mt-1.5" style={{ color: 'var(--text-secondary)', lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
                    List your machines, earn ₹12k–18k per day
                  </div>
                </div>
              </div>

              {/* Modern Floating Label Phone Input */}
              <div 
                className="bg-white rounded-[20px] p-5 transition-all duration-200"
                style={{ 
                  boxShadow: 'var(--card-shadow-sm)',
                  marginTop: '4px'
                }}
              >
                <div className="relative">
                  <label 
                    className="text-[13px] font-semibold mb-3 block"
                    style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}
                  >
                    Phone Number
                  </label>
                  <div 
                    className="rounded-[14px] p-4 flex items-center gap-3 transition-all duration-200"
                    style={{ 
                      background: 'var(--bg-primary)',
                      border: '2px solid var(--green-primary)',
                      boxShadow: '0 0 0 3px rgba(31, 122, 76, 0.1)'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="font-semibold text-[15px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>+91</span>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      value="98765 43210"
                      readOnly
                      className="flex-1 text-[16px] font-semibold tracking-wide bg-transparent outline-none"
                      style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}
                    />
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[12px] font-bold"
                      style={{ background: 'var(--green-primary)' }}
                    >
                      ✓
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Card - Harvest Yellow Accent */}
              <div 
                className="rounded-[18px] p-4"
                style={{ 
                  background: 'var(--gradient-yellow)',
                  border: '2px solid var(--harvest-yellow)',
                  boxShadow: 'var(--card-shadow-yellow)'
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💰</div>
                  <div className="text-[13px] leading-relaxed" style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                    <strong style={{ fontWeight: 600 }}>As an owner,</strong> you can list your equipment, manage bookings, accept requests, and earn passive income when not using your machines.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Saffron Gradient Button with Arrow Icon */}
          <div className="px-5 pb-6" style={{ paddingTop: '8px' }}>
            <button
              className="ky-tap-cta-primary w-full rounded-[16px] py-[18px] font-bold text-[16px] text-white flex items-center justify-center gap-2"
              style={{
                background: 'var(--gradient-saffron)',
                boxShadow: 'var(--card-shadow-saffron)',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              <span>Send OTP</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
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
