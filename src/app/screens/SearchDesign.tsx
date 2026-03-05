export function SearchDesign() {
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
            <span className="font-bold text-[11px]">9:45</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div 
            className="px-5 pt-4 pb-5 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div 
                  className="bg-white rounded-2xl px-4 py-3 flex items-center gap-[10px]"
                  style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
                >
                  <span className="text-base">🔍</span>
                  <input
                    type="text"
                    placeholder="Search equipment..."
                    className="flex-1 text-[14px] outline-none bg-transparent"
                    style={{ color: 'var(--text-dark)' }}
                  />
                  <button className="text-xs font-semibold" style={{ color: 'var(--saffron)' }}>
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {[
                { label: '🚜 Tractors', active: true },
                { label: '🌾 Harvesters', active: false },
                { label: '🚰 Pumps', active: false },
                { label: '🌱 Cultivators', active: false }
              ].map((filter) => (
                <div
                  key={filter.label}
                  className="px-3 py-1.5 rounded-xl text-[11px] font-semibold whitespace-nowrap"
                  style={{
                    background: filter.active ? 'white' : 'rgba(255,255,255,0.2)',
                    color: filter.active ? 'var(--saffron)' : 'white',
                    border: filter.active ? '1px solid white' : '1px solid rgba(255,255,255,0.3)'
                  }}
                >
                  {filter.label}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            <div className="mb-3 text-[12px] font-semibold" style={{ color: 'var(--text-mid)' }}>
              📍 Near Hinganghat, Wardha · 12 results
            </div>

            <div className="space-y-3">
              {[
                {
                  name: 'John Deere 5310',
                  owner: 'Suresh Patil',
                  distance: '2.3 km',
                  price: '₹1,200/hr',
                  rating: '4.8',
                  image: '🚜',
                  available: true
                },
                {
                  name: 'Mahindra 575 DI',
                  owner: 'Ramesh Kumar',
                  distance: '3.7 km',
                  price: '₹900/hr',
                  rating: '4.6',
                  image: '🚜',
                  available: true
                },
                {
                  name: 'Sonalika DI 745 III',
                  owner: 'Vijay Sharma',
                  distance: '5.1 km',
                  price: '₹1,000/hr',
                  rating: '4.9',
                  image: '🚜',
                  available: false
                },
                {
                  name: 'Swaraj 855 FE',
                  owner: 'Prakash Deshmukh',
                  distance: '6.8 km',
                  price: '₹850/hr',
                  rating: '4.7',
                  image: '🚜',
                  available: true
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[20px] p-4"
                  style={{
                    boxShadow: 'var(--card-shadow)',
                    border: item.available ? '1px solid transparent' : '1px solid #E8E3DA',
                    opacity: item.available ? 1 : 0.6
                  }}
                >
                  <div className="flex gap-3">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-[36px] flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                    >
                      {item.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-bold text-[14px]" style={{ color: 'var(--text-dark)' }}>
                          {item.name}
                        </div>
                        {item.available ? (
                          <div className="px-2 py-0.5 rounded-md text-[9px] font-bold" style={{ background: 'var(--green-pale)', color: 'var(--green)' }}>
                            AVAILABLE
                          </div>
                        ) : (
                          <div className="px-2 py-0.5 rounded-md text-[9px] font-bold" style={{ background: '#FFE8E8', color: '#D32F2F' }}>
                            BUSY
                          </div>
                        )}
                      </div>
                      <div className="text-[11px] mb-2" style={{ color: 'var(--text-soft)' }}>
                        👤 {item.owner}
                      </div>
                      <div className="flex items-center gap-3 text-[11px]">
                        <span style={{ color: 'var(--text-mid)' }}>📍 {item.distance}</span>
                        <span style={{ color: 'var(--text-mid)' }}>⭐ {item.rating}</span>
                        <span className="font-bold" style={{ color: 'var(--green)' }}>{item.price}</span>
                      </div>
                    </div>
                  </div>

                  {item.available && (
                    <div className="flex gap-2 mt-3">
                      <button
                        className="flex-1 rounded-xl py-2 text-[12px] font-semibold"
                        style={{ background: 'var(--cream)', color: 'var(--text-dark)' }}
                      >
                        📞 Call
                      </button>
                      <button
                        className="flex-1 rounded-xl py-2 text-[12px] font-semibold text-white"
                        style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))' }}
                      >
                        🎤 Voice Book
                      </button>
                    </div>
                  )}
                </div>
              ))}
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
