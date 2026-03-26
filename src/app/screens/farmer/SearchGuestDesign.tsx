import React, { useState } from 'react';
import { useLanguage } from '../../contexts/language';

export function SearchGuestDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const [showAllEquipment, setShowAllEquipment] = useState(false);

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
    { image: '/src/assets/equipment/tractors.png', label: t({ english: 'Tractor', hindi: 'ट्रैक्टर', tamil: 'டிராக்டர்', marathi: 'ट्रॅक्टर' }), category: 'soil' },
    { image: '/src/assets/equipment/cultivator.png', label: t({ english: 'Cultivator', hindi: 'कल्टीवेटर', tamil: 'கல்டிவேட்டர்', marathi: 'कल्टीव्हेटर' }), category: 'soil' },
    { image: '/src/assets/equipment/rotavator.png', label: t({ english: 'Rotavator', hindi: 'रोटावेटर', tamil: 'ரோटாवेट்டர்', marathi: 'रोटाव्हेटर' }), category: 'soil' },
    { image: '/src/assets/equipment/plough.png', label: t({ english: 'Plough', hindi: 'हल', tamil: 'உழவுயந்திரம்', marathi: 'नांगर' }), category: 'soil' },
    { image: '/src/assets/equipment/tiller.png', label: t({ english: 'Harrow', hindi: 'हैरो', tamil: 'ஹாரோ', marathi: 'हॅरो' }), category: 'soil' },
    { image: '/src/assets/equipment/tiller.png', label: t({ english: 'Tiller', hindi: 'टिलर', tamil: 'டில்லர்', marathi: 'टिलर' }), category: 'soil' },
    { image: '/src/assets/equipment/power_tiller.png', label: t({ english: 'Power Tiller', hindi: 'पावर टिलर', tamil: 'பவர் டில்லர்', marathi: 'पावर टिलर' }), category: 'soil' },

    // Sowing & Planting
    { image: '/src/assets/equipment/seed_drill.png', label: t({ english: 'Seed Drill', hindi: 'सीड ड्रिल', tamil: 'விதை இயந்திரம்', marathi: 'बीज ड्रिल' }), category: 'sowing' },
    { image: '/src/assets/equipment/planter.png', label: t({ english: 'Planter', hindi: 'प्लांटर', tamil: 'நடவு இயந்திரம்', marathi: 'प्लांटर' }), category: 'sowing' },
    { image: '/src/assets/equipment/transplanter.png', label: t({ english: 'Transplanter', hindi: 'ट्रांसप्लांटर', tamil: 'நடவு இயந்திரம்', marathi: 'ट्रांसप्लांटर' }), category: 'sowing' },

    // Plant Protection
    { image: '/src/assets/equipment/sprayer.png', label: t({ english: 'Sprayer', hindi: 'स्प्रेयर', tamil: 'தெளிப்பு இயந்திரம்', marathi: 'स्प्रेयर' }), category: 'protection' },
    { image: '/src/assets/equipment/drone.png', label: t({ english: 'Agri Drone', hindi: 'कृषि ड्रोन', tamil: 'விவசாய ட்ரோன்', marathi: 'शेती ड्रोन' }), category: 'protection' },
    { image: '/src/assets/equipment/duster.png', label: t({ english: 'Duster', hindi: 'डस्टर', tamil: 'தூளிப்பு இயந்திரம்', marathi: 'डस्टर' }), category: 'protection' },
    { image: '/src/assets/equipment/flame_weeder.png', label: t({ english: 'Flame Weeder', hindi: 'फ्लेम वीडर', tamil: 'சுவாளை களையகரணி', marathi: 'ज्वाला खतरी' }), category: 'protection' },

    // Irrigation
    { image: '/src/assets/equipment/water_pump.png', label: t({ english: 'Water Pump', hindi: 'वाटर पंप', tamil: 'நீர் பம்ப்', marathi: 'पाणी पंप' }), category: 'irrigation' },
    { image: '/src/assets/equipment/sprinkler.png', label: t({ english: 'Sprinkler', hindi: 'स्प्रिंकलर', tamil: 'சிதறல் பாசனம்', marathi: 'स्प्रिंकलर' }), category: 'irrigation' },
    { image: '/src/assets/equipment/drip_system.png', label: t({ english: 'Drip System', hindi: 'ड्रिप सिस्टम', tamil: 'சொட்டு நீர்ப்பாசனம்', marathi: 'ड्रिप सिस्टम' }), category: 'irrigation' },
    { image: '/src/assets/equipment/rain_gun.png', label: t({ english: 'Rain Gun', hindi: 'रेन गन', tamil: 'மழை துப்பாக்கி', marathi: 'रेन गन' }), category: 'irrigation' },

    // Harvesting
    { image: '/src/assets/equipment/harvestor.png', label: t({ english: 'Harvester', hindi: 'हार्वेस्टर', tamil: 'அறுவடை இயந்திரம்', marathi: 'हार्वेस्टर' }), category: 'harvest' },
    { image: '/src/assets/equipment/thresher.png', label: t({ english: 'Thresher', hindi: 'थ्रेशर', tamil: 'தவிர் இயந்திரம்', marathi: 'थ्रेशर' }), category: 'harvest' },
    { image: '/src/assets/equipment/reaper.png', label: t({ english: 'Reaper', hindi: 'रीपर', tamil: 'அறுவடை இயந்திரம்', marathi: 'रीपर' }), category: 'harvest' },
    { image: '/src/assets/equipment/maize_harvester.png', label: t({ english: 'Maize Harvester', hindi: 'मक्का हार्वेस्टर', tamil: 'சோளம் அறுவடை இயந்திரம்', marathi: 'मका हार्वेस्टर' }), category: 'harvest' },
    { image: '/src/assets/equipment/potato_digger.png', label: t({ english: 'Potato Digger', hindi: 'आलू डिगर', tamil: 'உருளைக்கிழங்கு தோண்டி', marathi: 'बटाटा डिगर' }), category: 'harvest' },

    // Post-Harvest
    { image: '/src/assets/equipment/baler.png', label: t({ english: 'Baler', hindi: 'बेलर', tamil: 'பொதி இயந்திரம்', marathi: 'बेलर' }), category: 'post' },
    { image: '/src/assets/equipment/dryer.png', label: t({ english: 'Dryer', hindi: 'ड्रायर', tamil: 'உலர் இயந்திரம்', marathi: 'ड्रायर' }), category: 'post' },
    { image: '/src/assets/equipment/winnower.png', label: t({ english: 'Winnower', hindi: 'विनोअर', tamil: 'விடுப்பு இயந்திரம்', marathi: 'विनोअर' }), category: 'post' },
    { image: '/src/assets/equipment/grader.png', label: t({ english: 'Grader', hindi: 'ग्रेडर', tamil: 'தரவரிசை இயந்திரம்', marathi: 'ग्रेडर' }), category: 'post' },

    // Transport
    { image: '/src/assets/equipment/trailer.png', label: t({ english: 'Trailer', hindi: 'ट्रेलर', tamil: 'ட்ரெய்லர்', marathi: 'ट्रेलर' }), category: 'transport' },
    { image: '/src/assets/equipment/truck.png', label: t({ english: 'Truck', hindi: 'ट्रक', tamil: 'லாரி', marathi: 'ट्रक' }), category: 'transport' }
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
            <div className="h-full overflow-y-auto px-5 pt-6 pb-20" style={{ maxHeight: '400px' }}>
              {/* Date Required */}
              <div className="mb-8">
                <div className="text-[16px] font-semibold mb-4" style={{ color: 'var(--text-dark)' }}>
                  📅 When do you need it?
                </div>
                <div
                  className="bg-white rounded-[20px] p-5 border-2 border-dashed mx-1"
                  style={{ 
                    borderColor: 'var(--saffron)', 
                    background: 'linear-gradient(135deg, rgba(255,139,56,0.05) 0%, rgba(255,140,56,0.02) 100%)',
                    boxShadow: '0 4px 16px rgba(255,139,56,0.15)',
                    boxSizing: 'border-box',
                    overflow: 'visible'
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
                      className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-105"
                      style={{ background: 'var(--saffron)' }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" stroke-width="2"/>
                        <path d="M3 8h18M8 4V1M16 4V1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <rect x="7" y="11" width="4" height="4" rx="1" fill="white"/>
                        <rect x="13" y="11" width="4" height="4" rx="1" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-10">
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
                        transform: category.active ? 'scale(1.05)' : 'scale(1)',
                        margin: '2px'
                      }}
                    >
                      {category.emoji} {category.label}
                    </button>
                  ))}
                </div>
                
                {/* Equipment grid for active category */}
                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    {(showAllEquipment ? filteredEquipment : filteredEquipment.slice(0, 4)).map((equipment) => (
                      <button
                        key={equipment.label}
                        className="ky-tap-chip h-28 rounded-[20px] text-[12px] font-medium flex flex-col items-center justify-center transition-all hover:scale-105"
                        style={{
                          border: '1.5px solid #E6E1D8',
                          background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)',
                          color: 'var(--text-dark)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                        }}
                      >
                        <img 
                          src={equipment.image} 
                          alt={equipment.label}
                          className="w-16 h-16 mb-3 object-cover rounded-lg"
                          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
                        />
                        <div className="text-center leading-tight font-medium px-2">{equipment.label}</div>
                      </button>
                    ))}
                  </div>
                  {filteredEquipment.length > 4 && (
                    <div className="text-center mt-4">
                      <button 
                        onClick={() => setShowAllEquipment(!showAllEquipment)}
                        className="ky-tap-link text-[12px] font-semibold px-4 py-2 rounded-full transition-all hover:scale-105" 
                        style={{ 
                          color: 'var(--saffron)',
                          background: 'rgba(255,139,56,0.1)',
                          border: '1px solid rgba(255,139,56,0.2)'
                        }}
                      >
                        {showAllEquipment 
                          ? `Show less (${filteredEquipment.length - 4} less)` 
                          : `+${filteredEquipment.length - 4} more equipment`
                        }
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Recent searches */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[16px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    🕐 Recent searches
                  </div>
                  <button className="ky-tap-link text-[12px] font-semibold px-3 py-1 rounded-full" style={{ 
                    color: 'var(--saffron)',
                    background: 'rgba(255,139,56,0.1)'
                  }}>
                    {strings.clear}
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

              {/* Additional content to ensure scrolling */}
              <div className="mb-8">
                <div className="text-[16px] font-semibold mb-4" style={{ color: 'var(--text-dark)' }}>
                  🌾 Popular near you
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-[16px] p-4" style={{ border: '1px solid #E6E1D8' }}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚜</span>
                      <div className="flex-1">
                        <div className="font-medium">John Deere Tractor</div>
                        <div className="text-[12px] text-gray-500">2 km away • ₹1500/day</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-[16px] p-4" style={{ border: '1px solid #E6E1D8' }}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌾</span>
                      <div className="flex-1">
                        <div className="font-medium">Harvester with Driver</div>
                        <div className="text-[12px] text-gray-500">5 km away • ₹3000/day</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-10 h-1.5 rounded-full bg-gray-400 opacity-60 transition-all duration-300 hover:opacity-80"></div>
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
