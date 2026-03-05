export function SearchResultsDesign() {
  const chips = ['All', 'Tractor 🚜', 'Harvester 🌾', 'With Driver', '< 5 km'];
  const results = [
    { icon: '🚜', name: 'Mahindra 475 DI', owner: 'Harpreet Singh · Punjab', rating: '4.8', distance: '2.4 km', hp: '50 HP', price: '₹2,400', verified: true, bg: 'linear-gradient(135deg, #FFF0E0, #FFD9B0)' },
    { icon: '🚜', name: 'Eicher 380', owner: 'Rajesh Patil · Nagpur', rating: '4.3', distance: '5.1 km', hp: '38 HP', price: '₹1,800', verified: false, bg: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)' }
  ];

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
          
          {/* Header */}
          <div className="bg-white px-4 pt-4 pb-3" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-[10px] mb-3">
              <div className="w-8 h-8 rounded-[10px] flex items-center justify-center text-base" style={{ background: 'var(--cream)' }}>
                ←
              </div>
              <div className="flex-1 text-[17px] font-bold" style={{ fontFamily: "'Baloo 2', cursive" }}>
                Tractors · Wardha
              </div>
              <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>8 found</div>
            </div>

            {/* Chips */}
            <div className="flex gap-2 overflow-x-auto pb-0.5">
              {chips.map((chip, i) => (
                <div
                  key={chip}
                  className="rounded-[20px] px-3 py-1 text-[11px] font-semibold whitespace-nowrap flex-shrink-0"
                  style={{
                    background: i === 0 ? 'var(--saffron)' : 'var(--cream)',
                    border: i === 0 ? '1.5px solid var(--saffron)' : '1.5px solid #E8E3DA',
                    color: i === 0 ? 'white' : 'var(--text-mid)'
                  }}
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>

          {/* Tab Bar */}
          <div className="flex bg-white" style={{ borderBottom: '2px solid #F0EDE7' }}>
            <div
              className="flex-1 py-[10px] text-center text-xs font-semibold"
              style={{ color: 'var(--saffron)', borderBottom: '2px solid var(--saffron)', marginBottom: '-2px' }}
            >
              📋 List
            </div>
            <div className="flex-1 py-[10px] text-center text-xs font-semibold" style={{ color: 'var(--text-soft)' }}>
              🗺️ Map
            </div>
          </div>

          {/* Results List */}
          <div className="flex-1 overflow-y-auto p-3">
            {results.map((result) => (
              <div
                key={result.name}
                className="bg-white rounded-[18px] overflow-hidden mb-3 w-full"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}
              >
                <div className="flex h-[100px]">
                  <div 
                    className="w-[100px] flex items-center justify-center text-[48px] flex-shrink-0 relative"
                    style={{ background: result.bg }}
                  >
                    {result.icon}
                    {result.verified && (
                      <div 
                        className="absolute top-1.5 right-1.5 text-white text-[8px] font-bold px-1 py-0.5 rounded-md"
                        style={{ background: 'var(--green)', letterSpacing: '0.3px' }}
                      >
                        ✓ VERIFIED
                      </div>
                    )}
                  </div>
                  <div className="px-3 py-3 flex-1 text-left">
                    <div 
                      className="text-[15px] font-bold"
                      style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                    >
                      {result.name}
                    </div>
                    <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-soft)' }}>
                      {result.owner}
                    </div>
                    <div className="flex gap-[10px] mt-2">
                      <div 
                        className="rounded-lg px-2 py-0.5 text-[10px] font-semibold"
                        style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                      >
                        ⭐ {result.rating}
                      </div>
                      <div 
                        className="rounded-lg px-2 py-0.5 text-[10px] font-semibold"
                        style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                      >
                        📍 {result.distance}
                      </div>
                      <div 
                        className="rounded-lg px-2 py-0.5 text-[10px] font-semibold"
                        style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                      >
                        {result.hp}
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="px-3 py-[10px] flex justify-between items-center"
                  style={{ borderTop: '1px solid #F5F2ED' }}
                >
                  <div className="text-base font-extrabold" style={{ color: 'var(--saffron)' }}>
                    {result.price} <span className="text-[11px] font-normal" style={{ color: 'var(--text-soft)' }}>/day</span>
                  </div>
                  <div
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)' }}
                  >
                    Book Now
                  </div>
                </div>
              </div>
            ))}

            <div 
              className="rounded-[18px] p-5 flex items-center justify-center gap-2 text-xs"
              style={{ border: '2px dashed #D0CCC5', background: 'transparent', color: 'var(--text-soft)' }}
            >
              🌐 Cross-state owners coming to your area
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
