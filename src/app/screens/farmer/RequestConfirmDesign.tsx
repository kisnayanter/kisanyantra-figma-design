export function RequestConfirmDesign() {
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
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Success Header */}
          <div
            className="px-5 pt-6 pb-[50px] rounded-b-[36px] text-center"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="text-[56px] mb-2">🎉</div>
            <div
              className="text-white text-[22px] font-bold mb-1"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            >
              Request Posted!
            </div>
            <div className="text-[13px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
              अनुरोध सफलतापूर्वक पोस्ट किया गया
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-6">
            {/* Request Summary Card */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-[28px]"
                  style={{ background: 'var(--saffron-pale)' }}
                >
                  🚜
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Tractor · 50 HP
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    Request #REQ-2026-0183
                  </div>
                </div>
                <div
                  className="rounded-[8px] px-2 py-1 text-[10px] font-bold"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                >
                  LIVE
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>📅 Dates</span>
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>Mar 15 – Mar 17 (3 days)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>📍 Location</span>
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>Hinganghat, Wardha</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>📏 Radius</span>
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>25 km</span>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div
                className="text-[14px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                ✨ What happens next?
              </div>
              <div className="space-y-3">
                {[
                  { step: '1', icon: '📢', title: 'Owners Notified', desc: 'Nearby equipment owners are being notified via SMS & WhatsApp right now', time: 'Happening now' },
                  { step: '2', icon: '📩', title: 'Receive Offers', desc: 'Owners will send you offers with pricing and availability details', time: 'Within 1–2 days' },
                  { step: '3', icon: '✅', title: 'Accept & Book', desc: 'Compare offers, chat with owners, and confirm your booking', time: 'Your choice' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[14px]"
                        style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                      >
                        {item.icon}
                      </div>
                      {item.step !== '3' && (
                        <div className="w-[2px] flex-1 mt-1" style={{ background: '#E8E3DA' }} />
                      )}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                        {item.title}
                      </div>
                      <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-soft)' }}>
                        {item.desc}
                      </div>
                      <div
                        className="inline-block mt-1 text-[9px] font-bold px-2 py-0.5 rounded-md"
                        style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                      >
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated Response */}
            <div
              className="rounded-[16px] p-3 mb-3 flex items-center gap-3"
              style={{ background: 'var(--saffron-pale)', border: '1.5px solid rgba(255,107,0,0.3)' }}
            >
              <div className="text-[24px]">⏱</div>
              <div>
                <div className="text-[12px] font-bold" style={{ color: 'var(--saffron)' }}>
                  Expected Response Time
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-mid)' }}>
                  Usually within <strong>1–2 days</strong> in busy season
                </div>
              </div>
            </div>

            {/* Visibility Option */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    🌐 Make request public
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    Other owners can browse and offer
                  </div>
                </div>
                <div
                  className="ky-tap-toggle w-11 h-6 rounded-full relative"
                  style={{ background: 'var(--green)' }}
                >
                  <div
                    className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-white"
                    style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </div>
            </div>

            {/* Share on WhatsApp */}
            <button
              className="ky-tap-share w-full bg-white rounded-[18px] p-3 flex items-center justify-center gap-2 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <span className="text-[18px]">📲</span>
              <span className="text-[12px] font-bold" style={{ color: '#25D366' }}>
                Share on WhatsApp to find faster
              </span>
            </button>
          </div>

          {/* Bottom Actions */}
          <div className="px-5 pb-5 pt-2 flex flex-col gap-2">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[14px] font-bold text-[14px] text-white text-center"
              style={{
                background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
                boxShadow: '0 4px 16px rgba(255,107,0,0.35)'
              }}
            >
              📋 View My Requests
            </button>
            <button
              className="ky-tap-cta-secondary w-full rounded-2xl py-3 text-[12px] font-bold text-center"
              style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
            >
              ← Back to Home
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
