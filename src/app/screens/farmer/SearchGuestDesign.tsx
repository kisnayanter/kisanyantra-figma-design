import { useLanguage } from '../../contexts/language';

export function SearchGuestDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const categories = [
    { label: t({ english: 'All', hindi: 'सभी', tamil: 'அனைத்தும்', marathi: 'सर्व' }), emoji: '🔍', active: true },
    { label: t({ english: 'Soil Prep', hindi: 'मिट्टी तैयारी', tamil: 'மண் தயாரிப்பு', marathi: 'माती तयारी' }), emoji: '🌱', active: false },
    { label: t({ english: 'Sowing', hindi: 'बुवाई', tamil: 'விதைத்தல்', marathi: 'बियाणे रोवणे' }), emoji: '🌾', active: false },
    { label: t({ english: 'Protection', hindi: 'सुरक्षा', tamil: 'பாதுகாப்பு', marathi: 'संरक्षण' }), emoji: '🛡️', active: false },
    { label: t({ english: 'Irrigation', hindi: 'सिंचाई', tamil: 'நீர்ப்பாசனம்', marathi: 'सिंचन' }), emoji: '💧', active: false },
    { label: t({ english: 'Harvest', hindi: 'फसल कटाई', tamil: 'அறுவடை', marathi: 'कापणी' }), emoji: '✂️', active: false },
    { label: t({ english: 'Post-Harvest', hindi: 'फसल कटाई के बाद', tamil: 'அறுவடைக்குப் பிறகு', marathi: 'कापणीनंतर' }), emoji: '📦', active: false },
    { label: t({ english: 'Transport', hindi: 'परिवहन', tamil: 'போக்குவரத்து', marathi: 'वाहतूक' }), emoji: '🚛', active: false }
  ];

  const equipmentTypes = [
    // Soil Preparation
    { emoji: '🚜', label: t({ english: 'Tractor', hindi: 'ट्रैक्टर', tamil: 'டிராக்டர்', marathi: 'ट्रॅक्टर' }), category: 'soil' },
    { emoji: '🌱', label: t({ english: 'Cultivator', hindi: 'कल्टीवेटर', tamil: 'கல்டிவேட்டர்', marathi: 'कल्टीव्हेटर' }), category: 'soil' },
    { emoji: '⚙️', label: t({ english: 'Rotavator', hindi: 'रोटावेटर', tamil: 'ரோடாவேட்டர்', marathi: 'रोटाव्हेटर' }), category: 'soil' },
    { emoji: '🔧', label: t({ english: 'Plough', hindi: 'हल', tamil: 'உழவுயந்திரம்', marathi: 'नांगर' }), category: 'soil' },
    { emoji: '⬇️', label: t({ english: 'Harrow', hindi: 'हैरो', tamil: 'ஹாரோ', marathi: 'हॅरो' }), category: 'soil' },
    { emoji: '🔄', label: t({ english: 'Tiller', hindi: 'टिलर', tamil: 'டில்லர்', marathi: 'टिलर' }), category: 'soil' },
    { emoji: '🏍️', label: t({ english: 'Power Tiller', hindi: 'पावर टिलर', tamil: 'பவர் டில்லர்', marathi: 'पावर टिलर' }), category: 'soil' },

    // Sowing & Planting
    { emoji: '🌾', label: t({ english: 'Seed Drill', hindi: 'सीड ड्रिल', tamil: 'விதை இயந்திரம்', marathi: 'बीज ड्रिल' }), category: 'sowing' },
    { emoji: '🌿', label: t({ english: 'Planter', hindi: 'प्लांटर', tamil: 'நடவு இயந்திரம்', marathi: 'प्लांटर' }), category: 'sowing' },
    { emoji: '🌱', label: t({ english: 'Transplanter', hindi: 'ट्रांसप्लांटर', tamil: 'நடவு இயந்திரம்', marathi: 'ट्रांसप्लांटर' }), category: 'sowing' },

    // Plant Protection
    { emoji: '💧', label: t({ english: 'Sprayer', hindi: 'स्प्रेयर', tamil: 'தெளிப்பு இயந்திரம்', marathi: 'स्प्रेयर' }), category: 'protection' },
    { emoji: '🚁', label: t({ english: 'Agri Drone', hindi: 'कृषि ड्रोन', tamil: 'விவசாய ட்ரோன்', marathi: 'शेती ड्रोन' }), category: 'protection' },
    { emoji: '�️', label: t({ english: 'Duster', hindi: 'डस्टर', tamil: 'தூளிப்பு இயந்திரம்', marathi: 'डस्टर' }), category: 'protection' },
    { emoji: '🔥', label: t({ english: 'Flame Weeder', hindi: 'फ्लेम वीडर', tamil: 'சுவாளை களையகரணி', marathi: 'ज्वाला खतरी' }), category: 'protection' },

    // Irrigation
    { emoji: '💦', label: t({ english: 'Water Pump', hindi: 'वाटर पंप', tamil: 'நீர் பம்ப்', marathi: 'पाणी पंप' }), category: 'irrigation' },
    { emoji: '�', label: t({ english: 'Sprinkler', hindi: 'स्प्रिंकलर', tamil: 'சிதறல் பாசனம்', marathi: 'स्प्रिंकलर' }), category: 'irrigation' },
    { emoji: '💧', label: t({ english: 'Drip System', hindi: 'ड्रिप सिस्टम', tamil: 'சொட்டு நீர்ப்பாசனம்', marathi: 'ड्रिप सिस्टम' }), category: 'irrigation' },
    { emoji: '🌊', label: t({ english: 'Rain Gun', hindi: 'रेन गन', tamil: 'மழை துப்பாக்கி', marathi: 'रेन गन' }), category: 'irrigation' },

    // Harvesting
    { emoji: '🌾', label: t({ english: 'Harvester', hindi: 'हार्वेस्टर', tamil: 'அறுவடை இயந்திரம்', marathi: 'हार्वेस्टर' }), category: 'harvest' },
    { emoji: '✂️', label: t({ english: 'Thresher', hindi: 'थ्रेशर', tamil: 'தவிர் இயந்திரம்', marathi: 'थ्रेशर' }), category: 'harvest' },
    { emoji: '🌽', label: t({ english: 'Maize Harvester', hindi: 'मक्का हार्वेस्टर', tamil: 'சோளம் அறுவடை இயந்திரம்', marathi: 'मका हार्वेस्टर' }), category: 'harvest' },
    { emoji: '🌾', label: t({ english: 'Reaper', hindi: 'रीपर', tamil: 'அறுவடை இயந்திரம்', marathi: 'रीपर' }), category: 'harvest' },
    { emoji: '🥔', label: t({ english: 'Potato Digger', hindi: 'आलू डिगर', tamil: 'உருளைக்கிழங்கு தோண்டி', marathi: 'बटाटा डिगर' }), category: 'harvest' },

    // Post-Harvest
    { emoji: '🔄', label: t({ english: 'Baler', hindi: 'बेलर', tamil: 'பொதி இயந்திரம்', marathi: 'बेलर' }), category: 'post' },
    { emoji: '🌡️', label: t({ english: 'Dryer', hindi: 'ड्रायर', tamil: 'உலர் இயந்திரம்', marathi: 'ड्रायर' }), category: 'post' },
    { emoji: '🌬️', label: t({ english: 'Winnower', hindi: 'विनोअर', tamil: 'விடுப்பு இயந்திரம்', marathi: 'विनोअर' }), category: 'post' },
    { emoji: '📦', label: t({ english: 'Grader', hindi: 'ग्रेडर', tamil: 'தரவரிசை இயந்திரம்', marathi: 'ग्रेडर' }), category: 'post' },

    // Transport
    { emoji: '🛒', label: t({ english: 'Trailer', hindi: 'ट्रेलर', tamil: 'ட்ரெய்லர்', marathi: 'ट्रेलर' }), category: 'transport' },
    { emoji: '🚛', label: t({ english: 'Truck', hindi: 'ट्रक', tamil: 'லாரி', marathi: 'ट्रक' }), category: 'transport' }
  ];

  // Filter equipment based on active category
  const filteredEquipment = categories.find(cat => cat.active)?.label === 'All' 
    ? equipmentTypes 
    : equipmentTypes.filter(e => {
        const activeCatLabel = categories.find(cat => cat.active)?.label;
        const categoryMap: Record<string, string> = {
          'Soil Prep': 'soil',
          'Sowing': 'sowing', 
          'Protection': 'protection',
          'Irrigation': 'irrigation',
          'Harvest': 'harvest',
          'Post-Harvest': 'post',
          'Transport': 'transport'
        };
        return e.category === categoryMap[activeCatLabel || ''];
      });

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
                {/* Horizontal scrollable categories */}
                <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {categories.map((category) => (
                    <button
                      key={category.label}
                      className="ky-tap-chip h-11 rounded-[16px] text-[12px] font-semibold flex items-center justify-center whitespace-nowrap flex-shrink-0"
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
                
                {/* Equipment grid for active category */}
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {filteredEquipment.slice(0, 6).map((equipment) => (
                      <button
                        key={equipment.label}
                        className="ky-tap-chip h-16 rounded-[12px] text-[11px] font-medium flex flex-col items-center justify-center"
                        style={{
                          border: '1px solid #E6E1D8',
                          background: '#FFF',
                          color: 'var(--text-dark)'
                        }}
                      >
                        <div className="text-lg mb-1">{equipment.emoji}</div>
                        <div className="text-center leading-tight">{equipment.label}</div>
                      </button>
                    ))}
                  </div>
                  {filteredEquipment.length > 6 && (
                    <div className="text-center mt-2">
                      <button className="text-[11px] font-medium" style={{ color: 'var(--saffron)' }}>
                        +{filteredEquipment.length - 6} more
                      </button>
                    </div>
                  )}
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
