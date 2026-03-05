export function EquipmentDetailDesign() {
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
          <div className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-[18px] py-[10px]">
            <span className="font-bold text-[11px]">9:47</span>
            <div className="text-[11px]">🔋</div>
          </div>

          {/* Hero Image */}
          <div 
            className="h-[180px] flex items-center justify-center text-[80px] relative flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #FFF0E0, #FFD9B0)' }}
          >
            🚜
            <div
              className="absolute top-[18px] left-[14px] w-[34px] h-[34px] rounded-xl flex items-center justify-center text-base"
              style={{ background: 'rgba(255,255,255,0.85)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            >
              ←
            </div>
            <div
              className="absolute top-[18px] right-[14px] w-[34px] h-[34px] rounded-xl flex items-center justify-center text-base"
              style={{ background: 'rgba(255,255,255,0.85)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            >
              ♡
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-4 pb-[90px]">
            <div className="flex justify-between items-start mt-4">
              <div className="flex-1 text-xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}>
                Mahindra 475 DI
              </div>
              <div className="text-xl font-extrabold whitespace-nowrap ml-[10px]" style={{ color: 'var(--saffron)' }}>
                ₹2,400<span className="text-[11px] font-normal" style={{ color: 'var(--text-soft)' }}>/day</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[13px]" style={{ color: '#F5A623' }}>★★★★★</span>
              <span className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>4.8</span>
              <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>(23 reviews)</span>
            </div>

            <div className="flex gap-2 mt-3 flex-wrap">
              {['🐴 50 HP', '⚙️ Excellent', '👨‍🌾 Driver Included', '📍 2.4 km'].map((tag, i) => (
                <div
                  key={tag}
                  className="rounded-[10px] px-[10px] py-1 text-[11px] font-semibold"
                  style={{
                    background: i === 2 ? 'var(--green-pale)' : 'white',
                    border: i === 2 ? '1.5px solid var(--green)' : '1.5px solid #E8E3DA',
                    color: i === 2 ? 'var(--green)' : 'var(--text-mid)'
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Owner Card */}
            <div
              className="bg-white rounded-2xl p-[14px] flex items-center gap-3 mt-[14px]"
              style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}
            >
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center text-[22px] flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, var(--saffron), var(--gold))' }}
              >
                👨‍🌾
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm" style={{ color: 'var(--text-dark)' }}>Harpreet Singh</div>
                <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                  📍 Ludhiana, Punjab · Verified ✓
                </div>
              </div>
              <div
                className="rounded-xl px-[14px] py-2 text-xs font-bold"
                style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)', color: 'var(--green)' }}
              >
                📞 Call
              </div>
            </div>

            {/* Availability Calendar */}
            <div className="mt-[14px]">
              <div 
                className="text-sm font-bold mb-2"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📅 Availability — July 2025
              </div>
              <div className="bg-white rounded-[14px] p-[10px]" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                <div className="flex justify-between text-xs font-bold mb-1.5" style={{ color: 'var(--text-mid)' }}>
                  <span>← Jun</span>
                  <span>July 2025</span>
                  <span>Aug →</span>
                </div>
                
                <div className="grid grid-cols-7 gap-0.5">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                    <div key={d} className="aspect-square flex items-center justify-center text-[9px] font-semibold" style={{ color: 'var(--text-soft)' }}>{d}</div>
                  ))}
                  {[30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num, i) => (
                    <div
                      key={num}
                      className="aspect-square rounded-lg flex items-center justify-center text-[9px] font-semibold"
                      style={{
                        background: i === 0 ? 'transparent' : [4, 11, 12].includes(i) ? '#FFE8E8' : i === 8 ? 'var(--saffron)' : 'var(--green-pale)',
                        color: i === 0 ? 'var(--text-soft)' : [4, 11, 12].includes(i) ? '#CC3333' : i === 8 ? 'white' : 'var(--green)',
                        textDecoration: [4, 11, 12].includes(i) ? 'line-through' : 'none'
                      }}
                    >
                      {num}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-2 text-[9px]">
                  <span className="flex items-center gap-1">
                    <span className="w-[10px] h-[10px] rounded inline-block" style={{ background: 'var(--green-pale)' }} />
                    Available
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-[10px] h-[10px] rounded inline-block" style={{ background: '#FFE8E8' }} />
                    Booked
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-white px-4 py-[14px] flex gap-[10px]"
            style={{ borderTop: '1px solid #F0EDE7' }}
          >
            <div
              className="flex-1 rounded-[14px] py-3 text-[13px] font-bold text-center"
              style={{ background: 'transparent', border: '2px solid var(--saffron)', color: 'var(--saffron)' }}
            >
              Request
            </div>
            <div
              className="flex-[2] rounded-[14px] py-3 text-[13px] font-bold text-white text-center"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              ⚡ Book Instantly
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
