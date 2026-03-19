export function SearchFilterTrayDesign() {
  const quickFilters = ['⭐ High rated', '⚡ Instant book', '🧑‍🔧 With operator'];
  const distanceOptions = ['< 5 km', '5–10 km', '10+ km'];
  const typeOptions = ['Tractor', 'Harvester', 'Cultivator', 'Pump'];

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
          {/* Status bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:47</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-5 pt-4 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.2)'
                }}
              >
                ←
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[1px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Filters tray
                </div>
                <div className="text-white text-[20px] font-bold" style={{ fontFamily: "'Baloo 2', cursive" }}>
                  Tune your results
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Blurred background results */}
            <div className="h-full px-5 pt-5 pb-32 space-y-3" style={{ filter: 'blur(1px)', opacity: 0.65 }}>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-[20px] p-4 flex gap-4"
                  style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.07)' }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                  >
                    🚜
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                      Sample Listing {item}
                    </div>
                    <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                      Wardha · 2.{item} km · ₹{(9 + item) * 100}/hr
                    </div>
                    <div className="mt-2 h-2 rounded-full" style={{ background: '#F0EDE7' }}>
                      <div className="h-full rounded-full" style={{ width: `${item * 30}%`, background: 'var(--saffron)' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom sheet */}
            <div className="absolute inset-0 flex flex-col justify-end" style={{ pointerEvents: 'none' }}>
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(248,245,240,0) 0%, rgba(17,17,17,0.45) 100%)',
                  pointerEvents: 'none'
                }}
              />
              <div className="relative">
                <div
                  className="bg-white rounded-t-[34px] px-5 pt-5 pb-6"
                  style={{ boxShadow: '0 -18px 45px rgba(0,0,0,0.3)', pointerEvents: 'auto' }}
                >
                  <div className="w-12 h-1.5 rounded-full mx-auto mb-4" style={{ background: '#E5E1DA' }} />
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>Filters</div>
                      <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>3 applied · swipe down to close</div>
                    </div>
                    <button className="ky-tap-link text-[11px] font-semibold" style={{ color: 'var(--saffron)' }}>
                      Reset
                    </button>
                  </div>

                  <div className="flex gap-2 mb-4 flex-wrap">
                    {quickFilters.map((chip) => (
                      <div
                        key={chip}
                        className="ky-tap-chip px-3 py-1.5 rounded-full text-[11px] font-semibold"
                        style={{
                          background: 'rgba(255,139,56,0.12)',
                          color: 'var(--saffron)',
                          border: '1px solid rgba(255,139,56,0.3)'
                        }}
                      >
                        {chip}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 text-[11px]" style={{ color: 'var(--text-mid)' }}>
                    <div>
                      <div className="mb-1 font-semibold" style={{ color: 'var(--text-dark)' }}>Distance</div>
                      <div className="flex gap-2">
                        {distanceOptions.map((range, index) => (
                          <button
                            key={range}
                            className="ky-tap-chip px-3 py-1.5 rounded-full border text-[11px] font-semibold"
                            style={{
                              background: index === 0 ? 'var(--cream)' : 'transparent',
                              borderColor: index === 0 ? 'var(--saffron)' : 'var(--border)',
                              color: index === 0 ? 'var(--saffron)' : 'var(--text-mid)'
                            }}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 font-semibold" style={{ color: 'var(--text-dark)' }}>Equipment type</div>
                      <div className="flex flex-wrap gap-2">
                        {typeOptions.map((type, index) => (
                          <button
                            key={type}
                            className="ky-tap-chip px-3 py-1.5 rounded-full border text-[11px] font-semibold"
                            style={{
                              background: index === 0 ? 'var(--green-pale)' : 'transparent',
                              borderColor: index === 0 ? 'var(--green)' : 'var(--border)',
                              color: index === 0 ? 'var(--green)' : 'var(--text-mid)'
                            }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 font-semibold" style={{ color: 'var(--text-dark)' }}>Price per hour</div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 rounded-full" style={{ background: '#F0EDE7', position: 'relative' }}>
                          <div className="absolute left-0 right-[35%] h-full rounded-full" style={{ background: 'linear-gradient(90deg, var(--green), var(--green-light))' }} />
                          <div
                            className="w-5 h-5 rounded-full border-2 border-white absolute -top-1"
                            style={{ background: 'var(--green)', left: '60%' }}
                          />
                        </div>
                        <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                          ₹600 – ₹1,400
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        className="ky-tap-cta-secondary flex-1 rounded-xl py-2 text-[12px] font-semibold"
                        style={{ background: 'var(--cream)', color: 'var(--text-dark)' }}
                      >
                        Cancel
                      </button>
                      <button
                        className="ky-tap-cta-primary flex-1 rounded-xl py-2 text-[12px] font-semibold text-white"
                        style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))' }}
                      >
                        Apply filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
