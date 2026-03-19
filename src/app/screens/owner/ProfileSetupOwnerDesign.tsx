export function ProfileSetupOwnerDesign() {
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
            <span className="font-bold text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>9:43</span>
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
                  🌿 Owner Profile Setup
                </div>
                <div 
                  className="text-white text-[28px] font-bold leading-tight mt-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Complete Your Profile
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 rounded-full overflow-hidden backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{ background: 'var(--harvest-yellow)', width: '100%', boxShadow: '0 0 8px rgba(244, 180, 0, 0.5)' }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-5">
            {/* Avatar Selection */}
            <div className="bg-white rounded-[20px] p-5 mb-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Choose Avatar · अवतार चुनें
              </div>
              <div className="flex gap-2 justify-center">
                {['👨‍🌾', '👩‍🌾', '��‍🌾', '👴', '👵'].map((emoji, i) => (
                  <div
                    key={emoji}
                    className="ky-tap-avatar w-14 h-14 rounded-2xl flex items-center justify-center text-[28px]"
                    style={{
                      background: i === 2 ? 'var(--gradient-green)' : 'var(--cream)',
                      border: i === 2 ? '3px solid var(--green-primary)' : '2px solid var(--text-tertiary)',
                      boxShadow: i === 2 ? 'var(--card-shadow-green)' : 'none'
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              {[
                { label: 'Full Name · पूरा नाम', value: 'Suresh Patil', icon: '👤' },
                { label: 'Village · गाँव', value: 'Hinganghat', icon: '🏘️' },
                { label: 'District · जिला', value: 'Wardha', icon: '📍' },
                { label: 'State · राज्य', value: 'Maharashtra', icon: '🗺️' }
              ].map((field) => (
                <div
                  key={field.label}
                  className="bg-white rounded-[20px] p-5 transition-all duration-200"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                    {field.label}
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-lg">{field.icon}</span>
                    <input
                      type="text"
                      value={field.value}
                      readOnly
                      className="flex-1 text-[16px] font-semibold bg-transparent outline-none"
                      style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Equipment Type - Owner Specific */}
            <div className="bg-white rounded-[20px] p-5 mt-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Equipment You Own · आपका उपकरण
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { emoji: '🚜', label: 'Tractors', count: 2 },
                  { emoji: '🌾', label: 'Harvesters', count: 0 },
                  { emoji: '🌱', label: 'Cultivators', count: 1 },
                  { emoji: '🚰', label: 'Pumps', count: 0 }
                ].map((eq) => (
                  <div
                    key={eq.label}
                    className="ky-tap-chip flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-semibold"
                    style={{
                      background: eq.count > 0 ? 'var(--green-pale)' : 'var(--cream)',
                      border: eq.count > 0 ? '2px solid var(--green-primary)' : '2px solid var(--text-tertiary)',
                      color: 'var(--text-primary)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <span>{eq.emoji}</span>
                    <span>{eq.label}</span>
                    {eq.count > 0 && (
                      <span 
                        className="text-[10px] px-1.5 rounded-full"
                        style={{ background: 'var(--green-primary)', color: 'white' }}
                      >
                        {eq.count}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-[11px] mt-2" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                You can add equipment details in the next step
              </div>
            </div>

            {/* Bank Details - Owner Specific */}
            <div className="bg-white rounded-[20px] p-5 mt-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-[13px] font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                  Bank Account (For Payments) · बैंक खाता
                </div>
                <div className="text-[9px] font-bold px-2 py-0.5 rounded-md" style={{ background: 'var(--harvest-yellow-pale)', color: 'var(--harvest-yellow)' }}>
                  OPTIONAL
                </div>
              </div>
              <div 
                className="ky-tap-card rounded-[14px] p-4 flex items-center justify-between"
                style={{ background: 'var(--bg-primary)', border: '2px solid var(--text-tertiary)' }}
              >
                <span className="text-[13px] font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                  Add later in settings
                </span>
                <span className="text-base">→</span>
              </div>
            </div>

            {/* Language Preference */}
            <div className="bg-white rounded-[20px] p-5 mt-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Preferred Language · पसंदीदा भाषा
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇳</span>
                  <div>
                    <div className="text-[15px] font-bold" style={{ color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}>
                      Hindi
                    </div>
                    <div 
                      className="text-[12px]"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--text-secondary)' }}
                    >
                      हिंदी
                    </div>
                  </div>
                </div>
                <button className="ky-tap-link text-xs font-semibold" style={{ color: 'var(--saffron)' }}>
                  Change
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mt-4 px-2">
              <div 
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'var(--green-primary)', border: '2px solid var(--green-primary)' }}
              >
                <span className="text-white text-[10px]">✓</span>
              </div>
              <div className="text-[12px] leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                I agree to the <span className="font-semibold" style={{ color: 'var(--saffron)' }}>Terms & Conditions</span> and{' '}
                <span className="font-semibold" style={{ color: 'var(--saffron)' }}>Privacy Policy</span>
              </div>
            </div>
          </div>

          {/* Modern Saffron Gradient Button */}
          <div className="px-5 pb-6" style={{ paddingTop: '8px' }}>
            <button
              className="ky-tap-cta-primary w-full rounded-[16px] py-[18px] font-bold text-[16px] text-white flex items-center justify-center gap-2"
              style={{
                background: 'var(--gradient-saffron)',
                boxShadow: 'var(--card-shadow-saffron)',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              <span>Go to Dashboard</span>
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
