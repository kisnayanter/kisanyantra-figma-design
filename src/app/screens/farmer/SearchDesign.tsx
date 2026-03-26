import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function SearchDesign() {
  const categories = [
    { label: '🔍 All', active: true },
    { label: '🌱 Soil Prep', active: false },
    { label: '🌾 Sowing', active: false },
    { label: '🛡️ Protection', active: false },
    { label: '💧 Irrigation', active: false },
    { label: '✂️ Harvest', active: false },
    { label: '📦 Post-Harvest', active: false },
    { label: '🚛 Transport', active: false }
  ];

  const equipmentTypes = [
    // Soil preparation
    { emoji: '🚜', label: 'Tractor', category: 'soil' },
    { emoji: '🌱', label: 'Cultivator', category: 'soil' },
    { emoji: '⚙️', label: 'Rotavator', category: 'soil' },
    { emoji: '🔧', label: 'Plough', category: 'soil' },
    { emoji: '⬇️', label: 'Harrow', category: 'soil' },
    { emoji: '🔄', label: 'Tiller', category: 'soil' },
    { emoji: '🏍️', label: 'Power Tiller', category: 'soil' },

    // Sowing & planting
    { emoji: '🌾', label: 'Seed Drill', category: 'sowing' },
    { emoji: '🌿', label: 'Planter', category: 'sowing' },
    { emoji: '🌱', label: 'Transplanter', category: 'sowing' },

    // Crop protection
    { emoji: '💧', label: 'Sprayer', category: 'protection' },
    { emoji: '🚁', label: 'Agri Drone', category: 'protection' },
    { emoji: '🌬️', label: 'Duster', category: 'protection' },
    { emoji: '🔥', label: 'Flame Weeder', category: 'protection' },

    // Irrigation
    { emoji: '💦', label: 'Water Pump', category: 'irrigation' },
    { emoji: '🚿', label: 'Sprinkler', category: 'irrigation' },
    { emoji: '💧', label: 'Drip System', category: 'irrigation' },
    { emoji: '🌊', label: 'Rain Gun', category: 'irrigation' },

    // Harvesting
    { emoji: '🌾', label: 'Harvester', category: 'harvest' },
    { emoji: '✂️', label: 'Thresher', category: 'harvest' },
    { emoji: '🌾', label: 'Reaper', category: 'harvest' },
    { emoji: '🌽', label: 'Maize Harvester', category: 'harvest' },
    { emoji: '🥔', label: 'Potato Digger', category: 'harvest' },

    // Post-harvest
    { emoji: '🔄', label: 'Baler', category: 'post' },
    { emoji: '🌡️', label: 'Dryer', category: 'post' },
    { emoji: '🌬️', label: 'Winnower', category: 'post' },
    { emoji: '📦', label: 'Grader', category: 'post' },

    // Transport
    { emoji: '🛒', label: 'Trailer', category: 'transport' },
    { emoji: '🚛', label: 'Truck', category: 'transport' }
  ];

  const recents = ['Tractor near Hinganghat', 'Harvester with driver'];

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
            className="px-5 pt-4 pb-6 rounded-b-[28px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Back"
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.18)'
                }}
              >
                ←
              </button>
              <div className="text-white text-[20px] font-bold" style={{ fontFamily: "'Baloo 2', cursive" }}>
                Find equipment nearby
              </div>
            </div>

            <div className="mt-5">
              {/* Location Search Box */}
              <div 
                className="ky-tap-location bg-white rounded-[16px] px-4 h-14 flex items-center gap-3 cursor-pointer transition-all hover:scale-[1.02]"
                style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
              >
                <span className="text-base">📍</span>
                <div className="flex-1">
                  <div className="text-[14px] font-medium" style={{ color: 'var(--text-dark)' }}>
                    Around Current Location
                  </div>
                  <div className="text-[10px] text-gray-500">Within 25 km</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="h-full overflow-y-auto px-5 pt-6 pb-10">
              {/* Date Required */}
              <div className="mb-7">
                <div className="text-[16px] font-semibold mb-4" style={{ color: 'var(--text-dark)' }}>
                  � When do you need it?
                </div>
                <div
                  className="bg-white rounded-[20px] p-4 border-2 border-dashed"
                  style={{ 
                    borderColor: 'var(--saffron)', 
                    background: 'linear-gradient(135deg, rgba(255,139,56,0.05) 0%, rgba(255,140,56,0.02) 100%)',
                    boxShadow: '0 4px 16px rgba(255,139,56,0.15)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[14px] font-medium" style={{ color: 'var(--text-dark)' }}>
                        Select required date
                      </div>
                      <div className="text-[12px] mt-1" style={{ color: 'var(--text-hint)' }}>
                        Tap to open calendar →
                      </div>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--saffron)' }}
                    >
                      <span className="text-white text-xl">📅</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-7">
                <div className="text-[16px] font-semibold mb-4" style={{ color: 'var(--text-dark)' }}>
                  🚜 What do you need?
                </div>
                {/* Horizontal scrollable categories */}
                <div className="flex gap-2 overflow-x-auto pb-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {categories.map((category) => (
                    <button
                      key={category.label}
                      className="ky-tap-chip h-11 rounded-[20px] text-[12px] font-semibold flex items-center justify-center whitespace-nowrap flex-shrink-0 px-4 transition-all"
                      style={{
                        border: category.active ? '2px solid var(--saffron)' : '1.5px solid #E6E1D8',
                        background: category.active 
                          ? 'linear-gradient(135deg, rgba(255,139,56,0.15) 0%, rgba(255,140,56,0.08) 100%)' 
                          : '#FFF',
                        color: category.active ? 'var(--saffron)' : 'var(--text-mid)',
                        boxShadow: category.active 
                          ? '0 4px 12px rgba(255,139,56,0.25)' 
                          : '0 2px 8px rgba(0,0,0,0.08)',
                        transform: category.active ? 'scale(1.05)' : 'scale(1)'
                      }}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent searches */}
              <div className="mb-7">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[16px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    🕐 Recent searches
                  </div>
                  <button className="ky-tap-link text-[12px] font-semibold px-3 py-1 rounded-full" style={{ 
                    color: 'var(--saffron)',
                    background: 'rgba(255,139,56,0.1)'
                  }}>
                    Clear
                  </button>
                </div>
                <div className="space-y-2">
                  {recents.map((item) => (
                    <div
                      key={item}
                      className="ky-tap-list-item rounded-[16px] px-4 py-3 flex items-center gap-3 text-[12px] transition-all hover:scale-[1.02]"
                      style={{ 
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)', 
                        border: '1px solid #EFEAE1', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                      }}
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ 
                        background: 'rgba(255,139,56,0.1)' 
                      }}>
                        <span style={{ color: 'var(--saffron)', fontSize: '14px' }}>🕘</span>
                      </div>
                      <span style={{ color: 'var(--text-dark)', fontWeight: '500' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-10 h-1.5 rounded-full bg-gray-400 opacity-60 transition-all duration-300 hover:opacity-80"></div>
          </div>

          {/* Bottom Nav */}
          <FarmerBottomNav activeTab="search" />

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
