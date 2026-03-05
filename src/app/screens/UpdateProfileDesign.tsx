export function UpdateProfileDesign() {
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
            <span className="font-bold text-[11px]">9:46</span>
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
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  प्रोफाइल संपादित करें · Edit Profile
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Update Your Profile
                </div>
              </div>
              <button 
                className="text-white text-[13px] font-semibold px-3 py-1.5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                Save
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Avatar Section */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center gap-4">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-[40px]"
                  style={{ background: 'linear-gradient(135deg, var(--saffron), var(--gold))' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[15px] mb-1" style={{ color: 'var(--text-dark)' }}>
                    Ramu Kisan
                  </div>
                  <div className="text-[11px] mb-2" style={{ color: 'var(--text-soft)' }}>
                    Member since Jan 2025
                  </div>
                  <button className="text-[11px] font-semibold" style={{ color: 'var(--saffron)' }}>
                    Change Avatar
                  </button>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-[10px]">
              {[
                { label: 'Full Name · पूरा नाम', value: 'Ramu Kisan', icon: '👤', editable: true },
                { label: 'Phone Number · फ़ोन नंबर', value: '+91 98765 43210', icon: '📱', editable: false },
                { label: 'Village · गाँव', value: 'Hinganghat', icon: '🏘️', editable: true },
                { label: 'District · जिला', value: 'Wardha', icon: '📍', editable: true },
                { label: 'State · राज्य', value: 'Maharashtra', icon: '🗺️', editable: true }
              ].map((field) => (
                <div
                  key={field.label}
                  className="bg-white rounded-[18px] p-4"
                  style={{ boxShadow: 'var(--card-shadow)', opacity: field.editable ? 1 : 0.6 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[11px] font-semibold" style={{ color: 'var(--text-soft)' }}>
                      {field.label}
                    </div>
                    {!field.editable && (
                      <div className="text-[9px] font-bold px-2 py-0.5 rounded-md" style={{ background: '#E8E3DA', color: 'var(--text-soft)' }}>
                        VERIFIED
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-lg">{field.icon}</span>
                    <input
                      type="text"
                      value={field.value}
                      readOnly={!field.editable}
                      className="flex-1 text-[15px] font-semibold bg-transparent outline-none"
                      style={{ color: 'var(--text-dark)' }}
                    />
                    {field.editable && (
                      <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>✏️</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Farm Details */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                Farm Size · खेत का आकार
              </div>
              <div className="flex items-center gap-2">
                {['1-5', '5-10', '10+'].map((size, i) => (
                  <div
                    key={size}
                    className="flex-1 rounded-[12px] py-2 text-center text-[13px] font-semibold"
                    style={{
                      background: i === 1 ? 'var(--green-pale)' : 'var(--cream)',
                      border: i === 1 ? '2px solid var(--green)' : '2px solid #E8E3DA',
                      color: i === 1 ? 'var(--green)' : 'var(--text-mid)'
                    }}
                  >
                    {size} acres
                  </div>
                ))}
              </div>
            </div>

            {/* Language & Notifications */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center justify-between mb-3 pb-3" style={{ borderBottom: '1px solid #F5F2ED' }}>
                <div>
                  <div className="text-[13px] font-semibold mb-0.5" style={{ color: 'var(--text-dark)' }}>
                    🇮🇳 Language · भाषा
                  </div>
                  <div 
                    className="text-[11px]"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--text-soft)' }}
                  >
                    हिंदी · Hindi
                  </div>
                </div>
                <button className="text-[11px] font-semibold" style={{ color: 'var(--saffron)' }}>
                  Change
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-semibold mb-0.5" style={{ color: 'var(--text-dark)' }}>
                    🔔 Notifications
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    Booking alerts & updates
                  </div>
                </div>
                <div 
                  className="w-11 h-6 rounded-full relative"
                  style={{ background: 'var(--green)' }}
                >
                  <div 
                    className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-white"
                    style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div 
              className="rounded-[18px] p-4 mt-[10px]"
              style={{ background: '#FFF3F3', border: '1px solid #FFE0E0' }}
            >
              <div className="text-[11px] font-semibold mb-2" style={{ color: '#D32F2F' }}>
                ⚠️ Danger Zone
              </div>
              <div className="text-[10px] mb-2" style={{ color: 'var(--text-soft)' }}>
                Permanently delete your account and all data
              </div>
              <button 
                className="text-[11px] font-semibold"
                style={{ color: '#D32F2F' }}
              >
                Delete Account →
              </button>
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
              ✓ Save Changes
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
