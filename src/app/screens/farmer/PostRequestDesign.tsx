export function PostRequestDesign() {
  const availableDates = [
    30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];
  const selectedStart = 15;
  const selectedEnd = 17;

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
              <button
                type="button"
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.4)' }}
              >
                ←
              </button>
              <div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  उपकरण नहीं मिला? · Can't find equipment?
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Post a Request
                </div>
              </div>
            </div>

            <div
              className="rounded-[14px] p-3 flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="text-[18px]">💡</div>
              <div className="text-[11px] text-white" style={{ opacity: 0.9 }}>
                Tell us what you need – we'll notify nearby owners and find it for you!
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Equipment Type */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                Equipment Type · उपकरण प्रकार *
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  { emoji: '🚜', label: 'Tractor', active: true },
                  { emoji: '🌾', label: 'Harvester', active: false },
                  { emoji: '🔧', label: 'Rotavator', active: false },
                  { emoji: '💧', label: 'Pump', active: false }
                ].map((eq) => (
                  <button
                    key={eq.label}
                    className="ky-tap-chip flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold"
                    style={{
                      background: eq.active ? 'rgba(255,107,0,0.12)' : 'var(--cream)',
                      border: eq.active ? '1.5px solid var(--saffron)' : '1.5px solid #E8E3DA',
                      color: eq.active ? 'var(--saffron)' : 'var(--text-mid)'
                    }}
                  >
                    <span>{eq.emoji}</span>
                    <span>{eq.label}</span>
                  </button>
                ))}
              </div>
              <div className="text-[11px] font-semibold mb-1.5" style={{ color: 'var(--text-soft)' }}>
                Preferred Make/Model (optional)
              </div>
              <input
                type="text"
                placeholder="e.g. Mahindra 475 DI, 50 HP"
                className="w-full rounded-[12px] px-3 py-2.5 text-[13px] bg-transparent outline-none"
                style={{ border: '1.5px solid #E8E3DA', color: 'var(--text-dark)' }}
              />
            </div>

            {/* Rental Dates */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📅 When do you need it?
              </div>

              {/* Mini Calendar */}
              <div className="bg-[var(--cream)] rounded-[14px] p-3 mb-3">
                <div className="flex justify-between text-xs font-bold mb-2" style={{ color: 'var(--text-mid)' }}>
                  <button className="ky-tap-icon px-2 py-1">← Feb</button>
                  <span>March 2026</span>
                  <button className="ky-tap-icon px-2 py-1">Apr →</button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                    <div key={d} className="aspect-square flex items-center justify-center text-[9px] font-semibold" style={{ color: 'var(--text-soft)' }}>{d}</div>
                  ))}
                  {availableDates.map((num, i) => {
                    const isStart = num === selectedStart;
                    const isEnd = num === selectedEnd;
                    const inRange = num > selectedStart && num < selectedEnd;
                    const isPast = i === 0;

                    return (
                      <div
                        key={`${num}-${i}`}
                        className="ky-tap-calendar-cell aspect-square rounded-lg flex items-center justify-center text-[10px] font-semibold"
                        style={{
                          background: isPast ? 'transparent' : isStart || isEnd ? 'var(--saffron)' : inRange ? 'var(--saffron-pale)' : 'white',
                          color: isPast ? 'var(--text-soft)' : isStart || isEnd ? 'white' : inRange ? 'var(--saffron)' : 'var(--text-dark)',
                          border: isStart || isEnd || inRange ? 'none' : '1px solid #F0EDE7'
                        }}
                      >
                        {num}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className="rounded-[12px] p-2.5 flex items-center justify-between"
                style={{ background: 'var(--saffron-pale)', border: '1.5px solid var(--saffron)' }}
              >
                <div>
                  <div className="text-[10px]" style={{ color: 'var(--saffron)' }}>Selected</div>
                  <div className="text-[12px] font-bold" style={{ color: 'var(--saffron)' }}>
                    Mar 15 → Mar 17 (3 days)
                  </div>
                </div>
                <div className="text-[16px]">✓</div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                📍 Location · स्थान *
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex-1 rounded-[12px] px-3 py-2.5 text-[13px] font-semibold"
                  style={{ border: '1.5px solid var(--saffron)', background: 'var(--saffron-pale)', color: 'var(--text-dark)' }}
                >
                  📍 Hinganghat, Wardha
                </div>
                <button className="ky-tap-link text-[11px] font-semibold" style={{ color: 'var(--saffron)' }}>
                  Change
                </button>
              </div>
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                Search Radius
              </div>
              <div className="flex gap-2">
                {['10 km', '25 km', '50 km'].map((r, i) => (
                  <button
                    key={r}
                    className="ky-tap-chip flex-1 rounded-[10px] py-2 text-center text-[11px] font-semibold"
                    style={{
                      background: i === 1 ? 'rgba(255,107,0,0.12)' : 'var(--cream)',
                      border: i === 1 ? '1.5px solid var(--saffron)' : '1.5px solid #E8E3DA',
                      color: i === 1 ? 'var(--saffron)' : 'var(--text-mid)'
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                Additional Details · अतिरिक्त विवरण (optional)
              </div>
              <div
                className="rounded-[12px] px-3 py-2.5 text-[13px] min-h-[60px]"
                style={{ border: '1.5px solid #E8E3DA', color: 'var(--text-dark)' }}
              >
                Must have trailer hitch. For wheat field plowing, need experienced driver.
              </div>
            </div>

            {/* Upload Photo */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                📷 Upload Photo (optional)
              </div>
              <div
                className="ky-tap-upload rounded-[14px] p-4 flex flex-col items-center gap-1 text-center"
                style={{ border: '2px dashed #E0D9CF', background: 'var(--cream)' }}
              >
                <div className="text-[24px]">📷</div>
                <div className="text-[11px] font-semibold" style={{ color: 'var(--text-mid)' }}>
                  Add photo of field or similar equipment
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                📱 Contact Number · फ़ोन नंबर *
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="rounded-[12px] px-3 py-2.5 text-[13px] font-semibold flex-1"
                  style={{ border: '1.5px solid #E8E3DA', color: 'var(--text-dark)', background: 'rgba(0,0,0,0.02)' }}
                >
                  📱 +91 98765 43210
                </div>
                <div className="text-[9px] font-bold px-2 py-1 rounded-md" style={{ background: 'var(--green-pale)', color: 'var(--green)' }}>
                  VERIFIED
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div
                  className="w-4 h-4 rounded flex items-center justify-center text-[10px]"
                  style={{ background: 'var(--saffron)', color: 'white' }}
                >
                  ✓
                </div>
                <div className="text-[10px]" style={{ color: 'var(--text-mid)' }}>
                  Owners can contact me via WhatsApp
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-5 pb-5 pt-2">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[14px] font-bold text-[15px] text-white text-center"
              style={{
                background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
                boxShadow: '0 4px 16px rgba(255,107,0,0.35)'
              }}
            >
              📢 Post Request · अनुरोध पोस्ट करें
            </button>
            <div className="text-[10px] text-center mt-2" style={{ color: 'var(--text-soft)' }}>
              Free to post · Nearby owners will be notified
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
