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
            {/* Availability Badge */}
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold flex items-center gap-1.5"
              style={{ background: 'var(--green-pale)', color: 'var(--green)', border: '1.5px solid var(--green)' }}
            >
              <span className="w-[6px] h-[6px] rounded-full inline-block" style={{ background: 'var(--green)' }} />
              अभी उपलब्ध · Available Now
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-4 pb-[90px]">
            <div className="flex justify-between items-start mt-4">
              <div className="flex-1 text-xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}>
                Mahindra 475 DI
              </div>
              <div className="text-xl font-extrabold whitespace-nowrap ml-[10px]" style={{ color: 'var(--saffron)' }}>
                ₹2,400<span className="text-[11px] font-normal" style={{ color: 'var(--text-soft)' }}>/day · प्रति दिन</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[13px]" style={{ color: '#F5A623' }}>★★★★★</span>
              <span className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>4.8</span>
              <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>(23 reviews · समीक्षाएं)</span>
            </div>

            <div className="flex gap-2 mt-3 flex-wrap">
              {['🐴 50 HP', '⚙️ Excellent · उत्तम', '👨‍🌾 Driver Included · ड्राइवर शामिल', '📍 2.4 km'].map((tag, i) => (
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
                <div className="font-bold text-sm" style={{ color: 'var(--text-dark)' }}>
                  Harpreet Singh
                  <span className="ml-1 text-[10px]" style={{ color: 'var(--green)' }}>✓ Verified</span>
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                  📍 Ludhiana, Punjab
                </div>
              </div>
              <div
                className="rounded-xl px-[14px] py-2 text-xs font-bold"
                style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)', color: 'var(--green)' }}
              >
                📞 Call
              </div>
            </div>

            {/* Availability Calendar — Read Only Preview */}
            <div className="mt-[14px]">
              <div
                className="text-sm font-bold mb-2 flex items-center justify-between"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                <span>📅 उपलब्धता · Availability</span>
                <span className="text-[10px] font-normal" style={{ color: 'var(--text-soft)' }}>July 2025</span>
              </div>
              <div className="bg-white rounded-[14px] p-[10px]" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                <div className="grid grid-cols-7 gap-0.5">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                    <div key={d} className="aspect-square flex items-center justify-center text-[9px] font-semibold" style={{ color: 'var(--text-soft)' }}>{d}</div>
                  ))}
                  {[30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num, i) => (
                    <div
                      key={num}
                      className="aspect-square rounded-lg flex items-center justify-center text-[9px] font-semibold"
                      style={{
                        background: i === 0 ? 'transparent' : [4, 11, 12].includes(i) ? '#FFE8E8' : 'var(--green-pale)',
                        color: i === 0 ? 'var(--text-soft)' : [4, 11, 12].includes(i) ? '#CC3333' : 'var(--green)',
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
                    उपलब्ध · Available
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-[10px] h-[10px] rounded inline-block" style={{ background: '#FFE8E8' }} />
                    बुक · Booked
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer — Single Book Now CTA */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-white px-4 py-[14px] flex gap-[10px] items-center"
            style={{ borderTop: '1px solid #F0EDE7' }}
          >
            {/* Voice Book Shortcut */}
            <div
              className="w-[48px] h-[48px] rounded-2xl flex items-center justify-center text-[20px] flex-shrink-0"
              style={{ background: 'var(--saffron-pale)', border: '2px solid var(--saffron)' }}
            >
              🎤
            </div>
            {/* Single Book Now Button */}
            <div
              className="flex-1 rounded-[14px] py-3.5 text-[14px] font-bold text-white text-center"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              🚜 अभी बुक करें · Book Now
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
