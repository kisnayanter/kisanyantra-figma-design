const TractorIcon = ({ color }: { color: string }) => (
  <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="18" height="8" rx="2" fill={color} />
    <rect x="10" y="5" width="10" height="5" rx="1.5" fill={color} opacity="0.75" />
    <circle cx="10" cy="21" r="4" stroke="#2B2B2B" strokeWidth="2" fill="#fff" />
    <circle cx="26" cy="21" r="4" stroke="#2B2B2B" strokeWidth="2" fill="#fff" />
    <rect x="20" y="12" width="16" height="4" rx="1.5" fill={color} />
  </svg>
);

export function SearchResultsDesign() {
  const quickFilters = [
    { label: '⭐ High rated', active: true },
    { label: '⚡ Instant', active: false },
    { label: '� Available now', active: false },
    { label: '� With operator', active: false }
  ];

  const results = [
    {
      name: 'Mahindra 575 DI',
      rating: 4.7,
      reviews: 24,
      distance: '3.2 km',
      price: '₹900/hr',
      operator: true,
      instant: false,
      available: true,
      accent: '#F9A826'
    },
    {
      name: 'John Deere 5310',
      rating: 4.5,
      reviews: 18,
      distance: '5.0 km',
      price: '₹1,200/hr',
      operator: false,
      instant: true,
      available: true,
      accent: '#68B568'
    },
    {
      name: 'Swaraj 744 FE',
      rating: 4.2,
      reviews: 15,
      distance: '7.5 km',
      price: '₹850/hr',
      operator: true,
      instant: false,
      available: false,
      accent: '#F2A65A'
    }
  ];

  const hasResults = results.length > 0;

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
            <div className="text-[11px]">🔋</div>
          </div>
          
          {/* Sticky search + filters */}
          <div
            className="px-4 pt-4 pb-3"
            style={{
              background: 'linear-gradient(135deg, #FF9345 0%, #FF7A1D 100%)'
            }}
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Back"
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.18)'
                }}
              >
                ←
              </button>
              <div className="text-white text-[16px] font-semibold leading-tight">
                Tractor near Hinganghat
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div 
                  className="bg-white rounded-[14px] h-12 px-4 flex items-center gap-2"
                  style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }}
                >
                  <span className="text-base" aria-hidden="true">🔍</span>
                  <input
                    type="text"
                    placeholder="Search listings"
                    className="flex-1 text-[14px] outline-none bg-transparent"
                    style={{ color: 'var(--text-dark)' }}
                  />
                </div>
              </div>
              <button
                className="w-12 h-12 rounded-[12px] flex flex-col items-center justify-center text-white text-[11px] font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.18)'
                }}
                aria-label="Open filters"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5H15M5 9H13M7 13.5H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] mt-0.5">Filter</span>
              </button>
            </div>
          </div>

          <div className="px-4 pt-4 pb-2" style={{ background: '#F8F5F0' }}>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {quickFilters.map((filter) => (
                <button
                  key={filter.label}
                  className="px-3 h-8 rounded-full text-[12px] font-medium whitespace-nowrap"
                  style={{
                    border: filter.active ? '1.5px solid var(--saffron)' : '1px solid rgba(0,0,0,0.08)',
                    background: filter.active ? 'rgba(255,139,56,0.14)' : '#FFF',
                    color: filter.active ? 'var(--saffron)' : 'var(--text-mid)'
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="px-4 pt-4 pb-3 flex items-center justify-between">
            <div className="text-[14px] font-semibold" style={{ color: 'var(--text-dark)' }}>
              {hasResults ? '8 tractors found nearby' : 'No tractors found nearby'}
            </div>
            <button
              className="text-[14px] font-semibold px-3 py-1 rounded-[10px] flex items-center gap-1"
              style={{ border: '1px solid #E0D9CF', color: 'var(--text-dark)', background: '#FFF' }}
            >
              Sort by: Distance
              <span aria-hidden="true">▾</span>
            </button>
          </div>

          {/* Results / Empty state */}
          <div className="flex-1 overflow-y-auto px-4 pb-6">
            {hasResults ? (
              <div className="space-y-4">
                {results.map((result) => (
                  <div
                    key={result.name}
                    className="bg-white rounded-[16px] p-4 flex gap-3"
                    style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      opacity: result.available ? 1 : 0.65
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-[12px] flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0,0,0,0.03)' }}
                    >
                      <TractorIcon color={result.accent} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="text-[16px] font-semibold leading-tight" style={{ color: 'var(--text-dark)' }}>
                          {result.name}
                        </div>
                        {result.instant && (
                          <div
                            className="text-[12px] font-semibold"
                            style={{
                              background: '#FFF3E8',
                              color: '#FF7A00',
                              padding: '4px 8px',
                              borderRadius: '6px'
                            }}
                          >
                            ⚡ Instant
                          </div>
                        )}
                      </div>
                      <div className="text-[13px] mt-1" style={{ color: 'var(--text-mid)' }}>
                        ⭐ {result.rating.toFixed(1)} ({result.reviews}) • {result.distance} away
                      </div>
                      <div className="text-[20px] font-bold mt-2" style={{ color: 'var(--text-dark)' }}>
                        {result.price}
                      </div>
                      <div className="text-[13px] mt-[6px]" style={{ color: result.available ? 'var(--text-mid)' : '#D14343' }}>
                        {result.operator ? 'Operator included' : 'Self drive'}
                        {!result.available && ' • Currently busy'}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button
                          className="flex-1 h-10 rounded-[10px] text-[13px] font-semibold"
                          style={{ background: '#fff8f2', color: 'var(--saffron)', border: '1px solid rgba(255,139,56,0.4)' }}
                        >
                          Share
                        </button>
                        <button
                          className="flex-1 h-10 rounded-[10px] text-[13px] font-semibold"
                          style={{ background: 'var(--saffron)', color: '#fff', boxShadow: '0 6px 14px rgba(255,139,56,0.28)' }}
                        >
                          View details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-[20px] p-6 bg-white text-center" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[20px] mb-2">🤔</div>
                <div className="text-[16px] font-bold mb-1" style={{ color: 'var(--text-dark)' }}>
                  No tractors found nearby
                </div>
                <div className="text-[12px]" style={{ color: 'var(--text-mid)' }}>
                  Try increasing distance, removing filters, or searching a different equipment type.
                </div>
                <button className="mt-4 w-full rounded-[14px] py-2 text-[12px] font-semibold" style={{ background: 'var(--cream)', color: 'var(--text-dark)' }}>
                  Reset filters
                </button>
              </div>
            )}
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
