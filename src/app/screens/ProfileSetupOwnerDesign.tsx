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
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  🚜 OWNER · Step 3 of 3
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Owner Profile Setup
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <div 
                className="h-full rounded-full transition-all"
                style={{ background: 'white', width: '100%' }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Avatar Selection */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-mid)' }}>
                Choose Avatar · अवतार चुनें
              </div>
              <div className="flex gap-2 justify-center">
                {['👨‍🌾', '👩‍🌾', '��‍🌾', '👴', '👵'].map((emoji, i) => (
                  <div
                    key={emoji}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px]"
                    style={{
                      background: i === 2 ? 'linear-gradient(135deg, var(--green), var(--green-light))' : 'var(--cream)',
                      border: i === 2 ? '2px solid var(--green)' : '2px solid #E8E3DA',
                      boxShadow: i === 2 ? '0 3px 12px rgba(26,122,59,0.3)' : 'none'
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-[10px]">
              {[
                { label: 'Full Name · पूरा नाम', value: 'Suresh Patil', icon: '👤' },
                { label: 'Village · गाँव', value: 'Hinganghat', icon: '🏘️' },
                { label: 'District · जिला', value: 'Wardha', icon: '📍' },
                { label: 'State · राज्य', value: 'Maharashtra', icon: '🗺️' }
              ].map((field) => (
                <div
                  key={field.label}
                  className="bg-white rounded-[18px] p-4"
                  style={{ boxShadow: 'var(--card-shadow)' }}
                >
                  <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                    {field.label}
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-lg">{field.icon}</span>
                    <input
                      type="text"
                      value={field.value}
                      readOnly
                      className="flex-1 text-[15px] font-semibold bg-transparent outline-none"
                      style={{ color: 'var(--text-dark)' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Equipment Type - Owner Specific */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
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
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-semibold"
                    style={{
                      background: eq.count > 0 ? 'var(--green-pale)' : 'var(--cream)',
                      border: eq.count > 0 ? '2px solid var(--green)' : '2px solid #E8E3DA',
                      color: 'var(--text-dark)'
                    }}
                  >
                    <span>{eq.emoji}</span>
                    <span>{eq.label}</span>
                    {eq.count > 0 && (
                      <span 
                        className="text-[10px] px-1.5 rounded-full"
                        style={{ background: 'var(--green)', color: 'white' }}
                      >
                        {eq.count}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-[10px] mt-2" style={{ color: 'var(--text-soft)' }}>
                You can add equipment details in the next step
              </div>
            </div>

            {/* Bank Details - Owner Specific */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-[11px] font-semibold" style={{ color: 'var(--text-soft)' }}>
                  Bank Account (For Payments) · बैंक खाता
                </div>
                <div className="text-[9px] font-bold px-2 py-0.5 rounded-md" style={{ background: '#FFF3E8', color: 'var(--gold)' }}>
                  OPTIONAL
                </div>
              </div>
              <div 
                className="rounded-xl p-3 flex items-center justify-between"
                style={{ background: 'var(--cream)', border: '2px solid #E8E3DA' }}
              >
                <span className="text-[13px] font-semibold" style={{ color: 'var(--text-mid)' }}>
                  Add later in settings
                </span>
                <span className="text-base">→</span>
              </div>
            </div>

            {/* Language Preference */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                Preferred Language · पसंदीदा भाषा
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇳</span>
                  <div>
                    <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                      Hindi
                    </div>
                    <div 
                      className="text-[11px]"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--text-soft)' }}
                    >
                      हिंदी
                    </div>
                  </div>
                </div>
                <button className="text-xs font-semibold" style={{ color: 'var(--saffron)' }}>
                  Change
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mt-[14px] px-2">
              <div 
                className="w-[18px] h-[18px] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'var(--green)', border: '2px solid var(--green)' }}
              >
                <span className="text-white text-[10px]">✓</span>
              </div>
              <div className="text-[11px] leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                I agree to the <span className="font-semibold" style={{ color: 'var(--saffron)' }}>Terms & Conditions</span> and{' '}
                <span className="font-semibold" style={{ color: 'var(--saffron)' }}>Privacy Policy</span>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="px-5 pb-5 pt-2">
            <button
              className="w-full rounded-2xl py-[15px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              💼 Go to Dashboard
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
