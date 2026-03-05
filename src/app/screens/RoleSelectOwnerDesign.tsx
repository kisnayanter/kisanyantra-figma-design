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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:42</span>
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
                  🚜 OWNER FLOW · Step 1 of 3
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  I Own Equipment
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <div 
                className="h-full rounded-full transition-all"
                style={{ background: 'white', width: '33%' }}
              />
            </div>
          </div>

          {/* Role Cards - Overlapping */}
          <div className="flex-1 px-5 pb-5 -mt-4 overflow-y-auto">
            <div className="flex flex-col gap-[14px]">
              {/* Unselected */}
              <div
                className="bg-white rounded-[20px] p-5 flex items-center gap-4 opacity-40"
                style={{ boxShadow: 'var(--card-shadow)', border: '2px solid #E8E3DA' }}
              >
                <div 
                  className="w-16 h-16 rounded-[18px] flex items-center justify-center text-[32px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #E8E8E8, #D0D0D0)' }}
                >
                  🌾
                </div>
                <div className="text-left flex-1">
                  <div 
                    className="text-[13px] font-semibold"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--text-mid)' }}
                  >
                    मुझे ट्रैक्टर चाहिए
                  </div>
                  <div 
                    className="text-[17px] font-bold"
                    style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                  >
                    I Need Equipment
                  </div>
                  <div className="text-[12px] mt-1" style={{ color: 'var(--text-soft)', lineHeight: 1.4 }}>
                    Find tractors near farm
                  </div>
                </div>
              </div>

              {/* Selected - I Own Equipment */}
              <div
                className="bg-white rounded-[20px] p-5 flex items-center gap-4"
                style={{
                  boxShadow: '0 8px 24px rgba(26,122,59,0.25)',
                  border: '3px solid var(--green)',
                  background: 'var(--green-pale)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-[18px] flex items-center justify-center text-[32px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))' }}
                >
                  🚜
                </div>
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div 
                      className="text-[13px] font-semibold"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--green)' }}
                    >
                      मेरे पास ट्रैक्टर है
                    </div>
                    <div className="text-xl">✓</div>
                  </div>
                  <div 
                    className="text-[17px] font-bold"
                    style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                  >
                    I Own Equipment
                  </div>
                  <div className="text-[12px] mt-1" style={{ color: 'var(--text-soft)', lineHeight: 1.4 }}>
                    List your machines, earn Rs. 12,000–18,000 per day
                  </div>
                </div>
              </div>

              {/* Phone Input */}
              <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                  📱 Phone Number · फ़ोन नंबर
                </div>
                <div 
                  className="rounded-xl p-3 flex items-center gap-[10px]"
                  style={{ background: 'var(--cream)', border: '2px solid var(--green)' }}
                >
                  <span className="font-bold text-[13px]" style={{ color: 'var(--text-mid)' }}>+91</span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value="98765 43210"
                    readOnly
                    className="flex-1 text-[13px] font-semibold tracking-wide bg-transparent outline-none"
                    style={{ color: 'var(--text-dark)' }}
                  />
                  <span className="text-base">✓</span>
                </div>
              </div>

              {/* Info Card */}
              <div 
                className="rounded-[16px] p-4"
                style={{ background: '#FFF9E6', border: '1px solid var(--gold)' }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💰</div>
                  <div className="text-[11px] leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                    <strong>As an owner,</strong> you can list your equipment, manage bookings, accept requests, and earn passive income when not using your machines.
                  </div>
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
              ओटीपी भेजें · Send OTP 📲
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
