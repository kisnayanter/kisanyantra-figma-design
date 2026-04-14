import { useState, useRef, useEffect } from 'react';

// Equipment categories with icons and labels
const categories = [
  { id: 'all', icon: '🔍', label: 'All', color: '#6B7280' },
  { id: 'soil', icon: '🌱', label: 'Soil Prep', color: '#1F7A4C' },
  { id: 'sowing', icon: '🌾', label: 'Sowing', color: '#F4B400' },
  { id: 'protection', icon: '🛡️', label: 'Protection', color: '#3B82F6' },
  { id: 'irrigation', icon: '💧', label: 'Irrigation', color: '#06B6D4' },
  { id: 'harvest', icon: '✂️', label: 'Harvest', color: '#EF4444' },
  { id: 'post', icon: '📦', label: 'Post-Harvest', color: '#8B5CF6' },
  { id: 'transport', icon: '🚛', label: 'Transport', color: '#F97316' },
];

// Complete equipment list with all types
const equipmentTypes = [
  // Soil Preparation
  { image: '/src/assets/equipment/tractors.png', label: 'Tractor', category: 'soil', description: 'Main farming vehicle' },
  { image: '/src/assets/equipment/cultivator.png', label: 'Cultivator', category: 'soil', description: 'Soil preparation' },
  { image: '/src/assets/equipment/rotavator.png', label: 'Rotavator', category: 'soil', description: 'Rotary tiller' },
  { image: '/src/assets/equipment/plough.png', label: 'Plough', category: 'soil', description: 'Traditional plough' },
  { image: '/src/assets/equipment/tiller.png', label: 'Harrow', category: 'soil', description: 'Soil leveling' },
  { image: '/src/assets/equipment/tiller.png', label: 'Tiller', category: 'soil', description: 'Mini tiller' },
  { image: '/src/assets/equipment/power_tiller.png', label: 'Power Tiller', category: 'soil', description: 'Compact tiller' },

  // Sowing & Planting
  { image: '/src/assets/equipment/seed_drill.png', label: 'Seed Drill', category: 'sowing', description: 'Precision sowing' },
  { image: '/src/assets/equipment/planter.png', label: 'Planter', category: 'sowing', description: 'Row planting' },
  { image: '/src/assets/equipment/transplanter.png', label: 'Transplanter', category: 'sowing', description: 'Rice transplanting' },

  // Plant Protection
  { image: '/src/assets/equipment/sprayer.png', label: 'Sprayer', category: 'protection', description: 'Pesticide spraying' },
  { image: '/src/assets/equipment/drone.png', label: 'Agri Drone', category: 'protection', description: 'Aerial spraying', isNew: true },
  { image: '/src/assets/equipment/duster.png', label: 'Duster', category: 'protection', description: 'Powder application' },
  { image: '/src/assets/equipment/flame_weeder.png', label: 'Flame Weeder', category: 'protection', description: 'Weed control' },

  // Irrigation
  { image: '/src/assets/equipment/water_pump.png', label: 'Water Pump', category: 'irrigation', description: 'Water lifting' },
  { image: '/src/assets/equipment/sprinkler.png', label: 'Sprinkler', category: 'irrigation', description: 'Overhead irrigation' },
  { image: '/src/assets/equipment/drip_system.png', label: 'Drip System', category: 'irrigation', description: 'Micro irrigation' },
  { image: '/src/assets/equipment/rain_gun.png', label: 'Rain Gun', category: 'irrigation', description: 'High pressure sprinkler' },

  // Harvesting
  { image: '/src/assets/equipment/harvestor.png', label: 'Harvester', category: 'harvest', description: 'Combine harvester' },
  { image: '/src/assets/equipment/thresher.png', label: 'Thresher', category: 'harvest', description: 'Grain separation' },
  { image: '/src/assets/equipment/maize_harvester.png', label: 'Maize Harvester', category: 'harvest', description: 'Corn harvesting' },
  { image: '/src/assets/equipment/reaper.png', label: 'Reaper', category: 'harvest', description: 'Crop cutter' },
  { image: '/src/assets/equipment/potato_digger.png', label: 'Potato Digger', category: 'harvest', description: 'Root crop harvester' },

  // Post-Harvest
  { image: '/src/assets/equipment/baler.png', label: 'Baler', category: 'post', description: 'Hay baling' },
  { image: '/src/assets/equipment/dryer.png', label: 'Dryer', category: 'post', description: 'Grain drying' },
  { image: '/src/assets/equipment/winnower.png', label: 'Winnower', category: 'post', description: 'Cleaning winnower' },
  { image: '/src/assets/equipment/grader.png', label: 'Grader', category: 'post', description: 'Fruit/veg grading' },

  // Transport
  { image: '/src/assets/equipment/trailer.png', label: 'Trailer', category: 'transport', description: 'Farm trailer' },
  { image: '/src/assets/equipment/truck.png', label: 'Truck', category: 'transport', description: 'Transport vehicle' },

  // Other
  { emoji: '➕', label: 'Other', category: 'all', description: 'Custom equipment' },
];

export function AddEquipmentDesignV2() {
  const [selectedCategory, setSelectedCategory] = useState('soil');
  const [selectedEquipment, setSelectedEquipment] = useState('Tractor');
  const [showAllModal, setShowAllModal] = useState(false);
  const [hoveredEquipment, setHoveredEquipment] = useState<string | null>(null);
  const [isGridAnimating, setIsGridAnimating] = useState(false);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Filter equipment based on selected category
  const filteredEquipment = selectedCategory === 'all' 
    ? equipmentTypes 
    : equipmentTypes.filter(e => e.category === selectedCategory);

  // Show first 6 items in main grid, rest in modal
  const mainGridItems = filteredEquipment.slice(0, 6);
  const hasMoreItems = filteredEquipment.length > 6;

  // Handle category change with animation
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === selectedCategory) return;
    setIsGridAnimating(true);
    setTimeout(() => {
      setSelectedCategory(categoryId);
      setIsGridAnimating(false);
    }, 150);
  };

  // Scroll selected category into view
  useEffect(() => {
    if (categoryScrollRef.current) {
      const selectedButton = categoryScrollRef.current.querySelector(`[data-category="${selectedCategory}"]`);
      if (selectedButton) {
        selectedButton.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedCategory]);

  // Scroll to category on mount
  useEffect(() => {
    if (categoryScrollRef.current) {
      const selectedButton = categoryScrollRef.current.querySelector(`[data-category="${selectedCategory}"]`);
      if (selectedButton) {
        selectedButton.scrollIntoView({ inline: 'center', block: 'nearest' });
      }
    }
  }, []);

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
            <span className="font-bold text-[11px]">9:47</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div 
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
            style={{ background: 'var(--gradient-green)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base cursor-pointer transition-transform active:scale-95"
                style={{ background: 'rgba(255,255,255,0.2)' }}
                onClick={() => {}}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  🚜 List Your Equipment
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Add New Equipment
                </div>
              </div>
              <button
                className="ky-tap-cta-secondary text-white text-[13px] font-semibold px-3 py-1.5 rounded-xl cursor-pointer transition-all hover:bg-white/30 active:scale-95"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                Save
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Equipment Type Section - INTERACTIVE DESIGN */}
            <div 
              className="bg-white rounded-[20px] p-4 mb-[14px] transition-shadow duration-300 hover:shadow-lg"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                Equipment Type
              </div>
              
              {/* Scrollable Category Tabs */}
              <div 
                ref={categoryScrollRef}
                className="flex gap-1.5 mb-3 overflow-x-auto pb-1 scrollbar-hide scroll-smooth"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      data-category={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`ky-tap-chip flex-shrink-0 rounded-full px-3 py-1.5 text-center cursor-pointer transition-all duration-200 active:scale-95 ${
                        isSelected ? 'shadow-md' : 'hover:bg-gray-100'
                      }`}
                      style={{
                        background: isSelected ? cat.color : 'var(--cream)',
                        border: isSelected ? 'none' : '1px solid #E8E3DA',
                        transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                      }}
                    >
                      <span className="text-[10px]">{cat.icon}</span>
                      <span 
                        className="text-[10px] font-semibold ml-1" 
                        style={{ 
                          color: isSelected ? 'white' : 'var(--text-dark)',
                        }}
                      >
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Category Title */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[14px]">
                    {categories.find(c => c.id === selectedCategory)?.icon}
                  </span>
                  <span className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    {categories.find(c => c.id === selectedCategory)?.label}
                  </span>
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    ({filteredEquipment.length})
                  </span>
                </div>
                {selectedCategory !== 'all' && (
                  <button 
                    onClick={() => handleCategoryChange('all')}
                    className="text-[10px] font-semibold cursor-pointer transition-colors hover:underline"
                    style={{ color: 'var(--green)' }}
                  >
                    Show All
                  </button>
                )}
              </div>

              {/* Equipment Grid - Animated */}
              <div 
                className={`grid grid-cols-2 gap-2 transition-all duration-200 ${
                  isGridAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {mainGridItems.map((type) => {
                  const isSelected = selectedEquipment === type.label;
                  const isHovered = hoveredEquipment === type.label;
                  
                  return (
                    <button
                      key={type.label}
                      onClick={() => setSelectedEquipment(type.label)}
                      onMouseEnter={() => setHoveredEquipment(type.label)}
                      onMouseLeave={() => setHoveredEquipment(null)}
                      className={`ky-tap-chip rounded-xl p-3 text-center relative cursor-pointer transition-all duration-200 active:scale-95 ${
                        isSelected || isHovered ? 'shadow-md' : ''
                      }`}
                      style={{
                        background: isSelected 
                          ? 'rgba(26, 122, 59, 0.08)' 
                          : isHovered
                            ? 'rgba(26, 122, 59, 0.04)'
                            : 'var(--cream)',
                        border: isSelected 
                          ? '2px solid var(--green)' 
                          : type.isNew
                            ? '2px solid #FFC107'
                            : isHovered
                              ? '2px solid rgba(26, 122, 59, 0.3)'
                              : '2px solid #E8E3DA',
                        transform: isSelected ? 'scale(1.02)' : isHovered ? 'scale(1.01)' : 'scale(1)',
                      }}
                    >
                      {/* Selected Checkmark */}
                      {isSelected && (
                        <div 
                          className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center animate-pulse"
                          style={{ background: 'var(--green)' }}
                        >
                          <span className="text-white text-[8px]">✓</span>
                        </div>
                      )}
                      
                      {/* New Badge */}
                      {type.isNew && !isSelected && (
                        <div 
                          className="absolute -top-1.5 -right-1 px-1.5 py-0.5 rounded-full text-[7px] font-bold text-white animate-bounce"
                          style={{ background: '#FF6B00' }}
                        >
                          NEW!
                        </div>
                      )}
                      
                      {/* Equipment Image */}
                      <div 
                        className={`w-16 h-16 mb-3 object-cover rounded-lg transition-transform duration-200 ${
                          isHovered ? 'scale-110' : ''
                        }`}
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
                      >
                        {type.image ? (
                          <img 
                            src={type.image} 
                            alt={type.label}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-3xl">
                            {type.emoji}
                          </div>
                        )}
                      </div>
                      
                      {/* Labels */}
                      <div 
                        className="text-[11px] font-bold leading-tight transition-colors duration-200" 
                        style={{ color: isSelected ? 'var(--green)' : 'var(--text-dark)' }}
                      >
                        {type.label}
                      </div>
                      
                      {/* Description tooltip on hover */}
                      {isHovered && (
                        <div 
                          className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[8px] font-medium whitespace-nowrap z-10 animate-fadeIn"
                          style={{ 
                            background: 'var(--text-dark)', 
                            color: 'white',
                          }}
                        >
                          {type.description}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* "See All" Button */}
              {hasMoreItems && (
                <div className="mt-3 text-center">
                  <button 
                    onClick={() => setShowAllModal(true)}
                    className="ky-tap-chip inline-flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer transition-all duration-200 active:scale-95 hover:shadow-md"
                    style={{ 
                      background: 'var(--cream)', 
                      border: '1px dashed #C4B8A3' 
                    }}
                  >
                    <span className="text-[10px]">📋</span>
                    <span className="text-[11px] font-semibold" style={{ color: 'var(--text-soft)' }}>
                      See All {filteredEquipment.length}
                    </span>
                    <span className="text-[10px] transition-transform duration-200">▼</span>
                  </button>
                </div>
              )}
            </div>

            {/* Photo Upload */}
            <div 
              className="bg-white rounded-[18px] p-4 mb-[10px] transition-shadow duration-300 hover:shadow-lg"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                Photos (Up to 5)
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div 
                  className="ky-tap-upload aspect-square rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 hover:bg-opacity-80"
                  style={{ background: 'var(--saffron-pale)', border: '2px dashed var(--saffron)' }}
                >
                  <div className="text-2xl mb-1">📷</div>
                  <div className="text-[9px] font-semibold" style={{ color: 'var(--saffron)' }}>
                    Add Photo
                  </div>
                </div>
                {[1, 2].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-xl flex items-center justify-center text-2xl transition-all duration-200"
                    style={{ background: 'var(--cream)', border: '2px solid #E8E3DA' }}
                  >
                    🚜
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Details */}
            <div className="space-y-[10px]">
              {[
                { label: 'Brand & Model', value: 'John Deere 5310', icon: '🏭' },
                { label: 'Year of Purchase', value: '2020', icon: '📅' },
                { label: 'Horse Power (HP)', value: '50 HP', icon: '⚡' }
              ].map((field) => (
                <div
                  key={field.label}
                  className="bg-white rounded-[18px] p-4 transition-shadow duration-300 hover:shadow-lg"
                  style={{ boxShadow: 'var(--card-shadow)' }}
                >
                  <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                    {field.label}
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-lg">{field.icon}</span>
                    <input
                      type="text"
                      defaultValue={field.value}
                      className="flex-1 text-[15px] font-semibold bg-transparent outline-none"
                      style={{ color: 'var(--text-dark)' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div 
              className="bg-white rounded-[18px] p-4 mt-[10px] transition-shadow duration-300 hover:shadow-lg"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                Rental Price
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="ky-tap-radio rounded-xl p-3 cursor-pointer transition-all duration-200 active:scale-95"
                  style={{ background: 'var(--green-pale)', border: '2px solid var(--green)' }}
                >
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    Per Hour
                  </div>
                  <div className="text-[16px] font-bold" style={{ color: 'var(--green)' }}>
                    ₹1,200
                  </div>
                </div>
                <div
                  className="ky-tap-radio rounded-xl p-3 cursor-pointer transition-all duration-200 active:scale-95 hover:border-gray-400"
                  style={{ background: 'var(--cream)', border: '2px solid #E8E3DA' }}
                >
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    Per Day
                  </div>
                  <div className="text-[16px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    ₹8,500
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div 
              className="bg-white rounded-[18px] p-4 mt-[10px] transition-shadow duration-300 hover:shadow-lg"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-[11px] font-semibold" style={{ color: 'var(--text-soft)' }}>
                  Currently Available
                </div>
                <div
                  className="ky-tap-toggle w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200"
                  style={{ background: 'var(--green)' }}
                >
                  <div 
                    className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200"
                    style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </div>
              <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                Toggle off when equipment is being used personally
              </div>
            </div>

            {/* Location */}
            <div 
              className="bg-white rounded-[18px] p-4 mt-[10px] transition-shadow duration-300 hover:shadow-lg"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                Location
              </div>
              <div className="flex items-center gap-[10px]">
                <span className="text-lg">📍</span>
                <div className="flex-1 text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  Hinganghat, Wardha, Maharashtra
                </div>
              </div>
            </div>

            {/* Operator Details (Optional) */}
            <div 
              className="bg-white rounded-[18px] p-4 mt-[10px] transition-shadow duration-300 hover:shadow-lg"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-[11px] font-semibold" style={{ color: 'var(--text-soft)' }}>
                  Assign Operator (Optional)
                </div>
                <div
                  className="ky-tap-toggle w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200"
                  style={{ background: '#E8E3DA' }}
                >
                  <div 
                    className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200"
                    style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </div>
              <div className="text-[10px] mb-3" style={{ color: 'var(--text-soft)' }}>
                Assign an operator to manage this equipment
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--cream)', border: '2px dashed #E8E3DA' }}>
                <div className="text-2xl">👨‍🌾</div>
                <div className="flex-1">
                  <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    Select Operator
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    Choose from your operator list
                  </div>
                </div>
                <span className="text-[12px]">→</span>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="px-5 pb-5 pt-2">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[15px] font-bold text-[15px] text-white cursor-pointer transition-all duration-200 active:scale-95 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              ✓ List Equipment
            </button>
          </div>

          {/* "See All" Modal Overlay */}
          {showAllModal && (
            <div 
              className="absolute inset-0 bg-black/50 z-40 flex items-end animate-fadeIn"
              onClick={() => setShowAllModal(false)}
            >
              <div 
                className="w-full bg-white rounded-t-[24px] p-4 max-h-[80%] overflow-y-auto animate-slideUp"
                onClick={e => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-[16px] font-bold" style={{ color: 'var(--text-dark)' }}>
                      All Equipment
                    </div>
                    <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                      Select equipment type
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowAllModal(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm cursor-pointer transition-transform active:scale-95"
                    style={{ background: 'var(--text-soft)' }}
                  >
                    ✕
                  </button>
                </div>

                {/* Category Tabs in Modal */}
                <div className="flex gap-1.5 mb-3 overflow-x-auto pb-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex-shrink-0 rounded-full px-2.5 py-1 text-center cursor-pointer transition-all duration-200 active:scale-95`}
                      style={{
                        background: selectedCategory === cat.id ? cat.color : 'var(--cream)',
                        border: selectedCategory === cat.id ? 'none' : '1px solid #E8E3DA',
                      }}
                    >
                      <span className="text-[9px]">{cat.icon}</span>
                      <span 
                        className="text-[9px] font-semibold ml-0.5" 
                        style={{ 
                          color: selectedCategory === cat.id ? 'white' : 'var(--text-dark)',
                        }}
                      >
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Full Equipment Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {filteredEquipment.map((type) => {
                    const isSelected = selectedEquipment === type.label;
                    return (
                      <button
                        key={type.label}
                        onClick={() => {
                          setSelectedEquipment(type.label);
                          setShowAllModal(false);
                        }}
                        className={`rounded-xl p-2 text-center relative cursor-pointer transition-all duration-200 active:scale-95 ${
                          isSelected ? 'shadow-md' : 'hover:bg-gray-50'
                        }`}
                        style={{
                          background: isSelected 
                            ? 'rgba(26, 122, 59, 0.08)' 
                            : 'var(--cream)',
                          border: isSelected 
                            ? '2px solid var(--green)' 
                            : '1px solid #E8E3DA',
                        }}
                      >
                        {type.isNew && !isSelected && (
                          <div 
                            className="absolute -top-1 -right-1 px-1 py-0.5 rounded-full text-[6px] font-bold text-white"
                            style={{ background: '#FF6B00' }}
                          >
                            NEW
                          </div>
                        )}
                        <div className="w-12 h-12 mb-1 flex items-center justify-center">
                          {type.image ? (
                            <img 
                              src={type.image} 
                              alt={type.label}
                              className="w-full h-full object-cover rounded-lg"
                              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
                            />
                          ) : (
                            <div className="text-2xl">{type.emoji}</div>
                          )}
                        </div>
                        <div 
                          className="text-[9px] font-bold leading-tight" 
                          style={{ color: isSelected ? 'var(--green)' : 'var(--text-dark)' }}
                        >
                          {type.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Notch */}
          <div 
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-30"
            style={{ borderRadius: '0 0 14px 14px' }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
