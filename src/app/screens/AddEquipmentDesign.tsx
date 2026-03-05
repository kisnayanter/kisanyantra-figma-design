export function AddEquipmentDesign() {
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
            <span className="font-bold text-[11px]">9:47</span>
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
                  🚜 List Your Equipment
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Add New Equipment
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
            {/* Equipment Type */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                Equipment Type · उपकरण प्रकार
              </div>
              <div className="flex gap-2">
                {[
                  { emoji: '🚜', label: 'Tractor' },
                  { emoji: '🌾', label: 'Harvester' },
                  { emoji: '🌱', label: 'Cultivator' }
                ].map((type, i) => (
                  <div
                    key={type.label}
                    className="flex-1 rounded-xl py-3 text-center"
                    style={{
                      background: i === 0 ? 'var(--saffron-pale)' : 'var(--cream)',
                      border: i === 0 ? '2px solid var(--saffron)' : '2px solid #E8E3DA'
                    }}
                  >
                    <div className="text-2xl mb-1">{type.emoji}</div>
                    <div className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                      {type.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Upload */}
            <div className="bg-white rounded-[18px] p-4 mb-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                Photos · तस्वीरें (Up to 5)
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div 
                  className="aspect-square rounded-xl flex flex-col items-center justify-center"
                  style={{ background: 'var(--saffron-pale)', border: '2px dashed var(--saffron)' }}
                >
                  <div className="text-2xl mb-1">📷</div>
                  <div className="text-[9px] font-semibold" style={{ color: 'var(--saffron)' }}>
                    Add Photo
                  </div>
                </div>
                {[1, 2].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: 'var(--cream)', border: '2px solid #E8E3DA' }}
                  >
                    🚜
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Details */}
            <div className="space-y-[10px]">
              {[
                { label: 'Brand & Model · ब्रांड और मॉडल', value: 'John Deere 5310', icon: '🏭' },
                { label: 'Year of Purchase · खरीद वर्ष', value: '2020', icon: '📅' },
                { label: 'Horse Power (HP) · अश्वशक्ति', value: '50 HP', icon: '⚡' }
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

            {/* Pricing */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                Rental Price · किराया दर
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div 
                  className="rounded-xl p-3"
                  style={{ background: 'var(--green-pale)', border: '2px solid var(--green)' }}
                >
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    Per Hour
                  </div>
                  <div className="text-[16px] font-bold" style={{ color: 'var(--green)' }}>
                    ₹1,200
                  </div>
                </div>
                <div 
                  className="rounded-xl p-3"
                  style={{ background: 'var(--cream)', border: '2px solid #E8E3DA' }}
                >
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    Per Day
                  </div>
                  <div className="text-[16px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    ₹8,500
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-[11px] font-semibold" style={{ color: 'var(--text-soft)' }}>
                  Currently Available · अभी उपलब्ध
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
              <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                Toggle off when equipment is being used personally
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                Location · स्थान
              </div>
              <div className="flex items-center gap-[10px]">
                <span className="text-lg">📍</span>
                <div className="flex-1 text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  Hinganghat, Wardha, Maharashtra
                </div>
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
              ✓ List Equipment
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
