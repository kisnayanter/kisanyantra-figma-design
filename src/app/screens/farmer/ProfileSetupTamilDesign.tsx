export function ProfileSetupTamilDesign() {
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
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  படி 3 இல் 3 · கிட்டத்தட்ட தயார்!
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  உங்கள் சுயவிவரத்தை முடிக்கவும்
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
                அவதாரத்தைத் தேர்ந்தெடுக்கவும்
              </div>
              <div className="flex gap-2 justify-center">
                {['👨‍🌾', '👩‍🌾', '🧑‍🌾', '👴', '👵'].map((emoji, i) => (
                  <div
                    key={emoji}
                    className="ky-tap-avatar w-14 h-14 rounded-2xl flex items-center justify-center text-[28px]"
                    style={{
                      background: i === 0 ? 'linear-gradient(135deg, var(--saffron), var(--gold))' : 'var(--cream)',
                      border: i === 0 ? '2px solid var(--saffron)' : '2px solid #E8E3DA',
                      boxShadow: i === 0 ? '0 3px 12px rgba(255,107,0,0.3)' : 'none'
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
                { label: 'முழு பெயர்', value: 'ராமு கிசான்', icon: '👤' },
                { label: 'கிராமம்', value: 'திண்டுக்கல்', icon: '🏘️' },
                { label: 'மாவட்டம்', value: 'மதுரை', icon: '📍' },
                { label: 'மாநிலம்', value: 'தமிழ்நாடு', icon: '🗺️' }
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

            {/* Additional Info */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                பண்ணை அளவு (விருப்பம்)
              </div>
              <div className="flex items-center gap-2">
                {['1-5', '5-10', '10+'].map((size, i) => (
                  <div
                    key={size}
                    className="ky-tap-chip flex-1 rounded-[12px] py-2 text-center text-[13px] font-semibold"
                    style={{
                      background: i === 1 ? 'var(--green-pale)' : 'var(--cream)',
                      border: i === 1 ? '2px solid var(--green)' : '2px solid #E8E3DA',
                      color: i === 1 ? 'var(--green)' : 'var(--text-mid)'
                    }}
                  >
                    {size} ஏக்கர்
                  </div>
                ))}
              </div>
            </div>

            {/* Language Preference */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                விருப்பமான மொழி
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇳</span>
                  <div>
                    <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                      Tamil
                    </div>
                    <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                      தமிழ்
                    </div>
                  </div>
                </div>
                <button className="ky-tap-link text-xs font-semibold" style={{ color: 'var(--saffron)' }}>
                  மாற்று
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
                நான் <span className="font-semibold" style={{ color: 'var(--saffron)' }}>விதிமுறைகள் மற்றும் நிபந்தனைகள்</span> மற்றும்{' '}
                <span className="font-semibold" style={{ color: 'var(--saffron)' }}>தனியுரிமை கொள்கை</span> ஒப்புக்கொள்கிறேன்
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="px-5 pb-5 pt-2">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[15px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              🎉 அமைப்பை முடிக்கவும்
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
