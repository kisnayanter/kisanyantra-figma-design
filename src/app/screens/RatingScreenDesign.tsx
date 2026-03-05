export function RatingScreenDesign() {
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Header */}
          <div 
            className="px-[18px] pt-[14px] pb-[30px] rounded-b-[28px]"
            style={{ background: 'linear-gradient(135deg, #1A1A2E, #16213E)' }}
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-[18px] py-[10px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <span className="font-bold text-[11px]" style={{ color: 'white' }}>9:52</span>
              <div className="text-[11px]">🔋</div>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-3 mb-[14px]">
                <div
                  className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  ←
                </div>
                <div 
                  className="text-white text-lg font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Rate Your Experience
                </div>
              </div>

              <div 
                className="rounded-2xl p-[14px] flex items-center gap-3"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-[36px]">🚜</div>
                <div>
                  <div 
                    className="text-white text-[15px] font-bold"
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                  >
                    Mahindra 475 DI
                  </div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Harpreet Singh · Jul 10–12
                  </div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    ₹7,200 · 3 days
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-[18px] py-5">
            <div className="text-center mb-6">
              <div 
                className="text-lg font-bold mb-1.5"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                How was the tractor?
              </div>
              <div 
                className="text-[13px]"
                style={{ 
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  color: 'var(--text-soft)'
                }}
              >
                ट्रैक्टर कैसा था?
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="text-[36px]"
                  style={{
                    color: star <= 4 ? '#F5A623' : '#D0CCC5',
                    filter: star <= 4 ? 'drop-shadow(0 2px 4px rgba(245,166,35,0.4))' : 'none'
                  }}
                >
                  ★
                </div>
              ))}
            </div>

            <div
              className="text-center text-sm font-bold mb-5"
              style={{ color: 'var(--gold)' }}
            >
              Very Good · बहुत अच्छा 👍
            </div>

            {/* Comment Box */}
            <div
              className="bg-white rounded-2xl p-[14px] mb-4"
              style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}
            >
              <div className="text-xs font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                Comment (optional) · टिप्पणी
              </div>
              <div className="text-[13px] leading-relaxed min-h-[60px]" style={{ color: 'var(--text-dark)' }}>
                Tractor was on time and in great condition. Driver was helpful! 👍
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-5">
              {[
                { id: 'ontime', label: 'On time ✓', active: true },
                { id: 'condition', label: 'Good condition ✓', active: true },
                { id: 'driver', label: 'Helpful driver', active: false },
                { id: 'price', label: 'Fair price', active: false }
              ].map((tag) => (
                <div
                  key={tag.id}
                  className="rounded-[20px] px-3 py-1 text-[11px] font-semibold"
                  style={{
                    background: tag.active ? 'var(--saffron)' : 'var(--cream)',
                    border: tag.active ? '1.5px solid var(--saffron)' : '1.5px solid #E8E3DA',
                    color: tag.active ? 'white' : 'var(--text-mid)'
                  }}
                >
                  {tag.label}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="px-[18px] pb-5">
            <div
              className="w-full rounded-[14px] py-[14px] text-[15px] font-bold text-white text-center"
              style={{
                background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
                boxShadow: '0 4px 16px rgba(255,107,0,0.35)'
              }}
            >
              ✓ Submit Rating
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
