export function AddEquipmentEmptyDesign() {
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
            <span className="font-bold text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>9:47</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Modern Header with Green Gradient */}
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
              <div className="flex-1">
                <div className="text-[13px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}>
                  🌿 List Your Equipment
                </div>
                <div 
                  className="text-white text-[24px] font-bold leading-tight mt-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Add New Equipment
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-5">
            {/* Equipment Type */}
            <div className="bg-white rounded-[20px] p-5 mb-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Equipment Type · उपकरण प्रकार
              </div>
              <div className="flex gap-2">
                {[
                  { emoji: '🚜', label: 'Tractor' },
                  { emoji: '🌾', label: 'Harvester' },
                  { emoji: '🌱', label: 'Cultivator' }
                ].map((type) => (
                  <div
                    key={type.label}
                    className="ky-tap-chip flex-1 rounded-xl py-3 text-center"
                    style={{
                      background: 'var(--bg-primary)',
                      border: '2px solid var(--text-tertiary)'
                    }}
                  >
                    <div className="text-2xl mb-1">{type.emoji}</div>
                    <div className="text-[12px] font-semibold" style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                      {type.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Upload */}
            <div className="bg-white rounded-[20px] p-5 mb-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Photos · तस्वीरें (Up to 5)
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="ky-tap-upload aspect-square rounded-xl flex flex-col items-center justify-center"
                    style={{ background: 'var(--bg-primary)', border: '2px dashed var(--text-tertiary)' }}
                  >
                    <div className="text-2xl mb-1">📷</div>
                    <div className="text-[10px] font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                      Add Photo
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Details */}
            <div className="space-y-3">
              {[
                { label: 'Brand & Model · ब्रांड और मॉडल', placeholder: 'e.g. John Deere 5310', icon: '🏭' },
                { label: 'Year of Purchase · खरीद वर्ष', placeholder: 'e.g. 2020', icon: '📅' },
                { label: 'Horse Power (HP) · अश्वशक्ति', placeholder: 'e.g. 50 HP', icon: '⚡' }
              ].map((field) => (
                <div
                  key={field.label}
                  className="bg-white rounded-[20px] p-5"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                    {field.label}
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-lg">{field.icon}</span>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="flex-1 text-[15px] font-semibold bg-transparent outline-none placeholder:text-[13px]"
                      style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-[20px] p-5 mt-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Rental Price · किराया दर
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="ky-tap-radio rounded-xl p-3"
                  style={{ background: 'var(--cream)', border: '2px solid #E8E3DA' }}
                >
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    Per Hour
                  </div>
                  <input
                    type="text"
                    placeholder="₹ 0"
                    className="w-full text-[16px] font-bold bg-transparent outline-none"
                    style={{ color: 'var(--text-dark)' }}
                  />
                </div>
                <div
                  className="ky-tap-radio rounded-xl p-3"
                  style={{ background: 'var(--bg-primary)', border: '2px solid var(--text-tertiary)' }}
                >
                  <div className="text-[11px] mb-1 font-medium" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                    Per Day
                  </div>
                  <input
                    type="text"
                    placeholder="₹ 0"
                    className="w-full text-[16px] font-bold bg-transparent outline-none"
                    style={{ color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}
                  />
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-[20px] p-5 mt-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-[13px] font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                  Currently Available · अभी उपलब्ध
                </div>
                <div
                  className="ky-tap-toggle w-11 h-6 rounded-full relative"
                  style={{ background: '#D0D0D0' }}
                >
                  <div 
                    className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white"
                    style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </div>
              <div className="text-[11px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Toggle on when ready to accept bookings
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-[20px] p-5 mt-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Location · स्थान
              </div>
              <div className="flex items-center gap-[10px]">
                <span className="text-lg">📍</span>
                <div className="flex-1 text-[13px] font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                  Uses your profile location
                </div>
              </div>
            </div>
          </div>

          {/* Modern Saffron Gradient Button - Disabled State */}
          <div className="px-5 pb-6" style={{ paddingTop: '8px' }}>
            <button
              disabled
              className="w-full rounded-[16px] py-[18px] font-bold text-[16px] text-white flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
              style={{
                background: 'var(--text-tertiary)',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              <span>Fill details to continue</span>
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
