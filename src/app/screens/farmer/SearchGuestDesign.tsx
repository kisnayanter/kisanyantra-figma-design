import { useLanguage } from '../../contexts/language';

export function SearchGuestDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const categories = [
    { label: t({ english: 'Tractor', hindi: 'ट्रैक्टर', tamil: 'டிராக்டர்', marathi: 'ट्रॅक्टर' }), emoji: '🚜', active: true },
    { label: t({ english: 'Harvester', hindi: 'हार्वेस्टर', tamil: 'ஹார்வெஸ்டர்', marathi: 'हार्वेस्टर' }), emoji: '🌾', active: false },
    { label: t({ english: 'Pump', hindi: 'पंप', tamil: 'பம்ப்', marathi: 'पंप' }), emoji: '💧', active: false },
    { label: t({ english: 'Cultivator', hindi: 'कल्टीवेटर', tamil: 'கல்டிவேட்டர்', marathi: 'कल्टीव्हेटर' }), emoji: '🌱', active: false }
  ];

  const recents = ['Tractor near Hinganghat', 'Harvester with driver'];

  const strings = {
    headerTitle: t({ english: 'Find equipment nearby', hindi: 'अपने पास उपकरण खोजें', tamil: 'அருகில் உபகரணம் தேடுங்கள்', marathi: 'जवळपास उपकरणे शोधा' }),
    searchPlaceholder: t({ english: 'Search equipment near you', hindi: 'अपने पास उपकरण खोजें', tamil: 'அருகில் உபகரணம் தேடுங்கள்', marathi: 'जवळपास उपकरणे शोधा' }),
    popularEquipment: t({ english: 'Popular equipment', hindi: 'लोकप्रिय उपकरण', tamil: 'பிரபலமான உபகரணம்', marathi: 'लोकप्रिय उपकरणे' }),
    recentSearches: t({ english: 'Recent searches', hindi: 'हाल की खोजें', tamil: 'சமீபத்திய தேடல்கள்', marathi: 'अलीकडील शोध' }),
    change: t({ english: 'Change', hindi: 'बदलें', tamil: 'மாற்று', marathi: 'बदला' }),
    clear: t({ english: 'Clear', hindi: 'हटाएं', tamil: 'அழி', marathi: 'काढा' }),
  };

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
                {strings.headerTitle}
              </div>
            </div>

            <div className="mt-5">
              <div
                className="bg-white rounded-[16px] px-4 h-14 flex items-center gap-3"
                style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
              >
                <span className="text-base">🔍</span>
                <input
                  type="text"
                  placeholder={strings.searchPlaceholder}
                  className="flex-1 text-[14px] outline-none bg-transparent"
                  style={{ color: 'var(--text-dark)' }}
                />
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="h-full overflow-y-auto px-5 pt-6 pb-10">
              {/* Location */}
              <div className="mb-7 flex items-center justify-between">
                <div className="text-[13px] font-medium" style={{ color: 'var(--text-mid)' }}>
                  📍 Near <span style={{ fontWeight: 700 }}>Hinganghat</span>, Wardha
                </div>
                <button className="ky-tap-link text-[12px] font-semibold" style={{ color: 'var(--saffron)' }}>
                  {strings.change}
                </button>
              </div>

              {/* Categories */}
              <div className="mb-7">
                <div className="text-[16px] font-semibold mb-3" style={{ color: 'var(--text-dark)' }}>
                  {strings.popularEquipment}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.label}
                      className="ky-tap-chip h-11 rounded-[16px] text-[12px] font-semibold flex items-center justify-center"
                      style={{
                        border: category.active ? '1.5px solid var(--saffron)' : '1.5px solid #E6E1D8',
                        background: category.active ? 'rgba(255,139,56,0.12)' : '#FFF',
                        color: category.active ? 'var(--saffron)' : 'var(--text-mid)'
                      }}
                    >
                      {category.emoji} {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent searches */}
              <div className="mb-7">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[16px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {strings.recentSearches}
                  </div>
                  <button className="ky-tap-link text-[12px] font-semibold" style={{ color: 'var(--saffron)' }}>
                    {strings.clear}
                  </button>
                </div>
                <div className="space-y-2">
                  {recents.map((item) => (
                    <div
                      key={item}
                      className="ky-tap-list-item rounded-[14px] px-3 py-2.5 flex items-center gap-2 text-[12px]"
                      style={{ background: '#FFF', border: '1px solid #EFEAE1', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                    >
                      <span style={{ color: 'var(--text-soft)' }}>🕘</span>
                      <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-10 h-1.5 rounded-full" style={{ background: '#D4CEC5' }} />
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
