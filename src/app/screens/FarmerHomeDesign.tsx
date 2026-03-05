import { motion } from 'motion/react';

export function FarmerHomeDesign() {
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-[18px] py-[10px]" style={{ color: 'white' }}>
            <span className="font-bold text-[11px]">9:44</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Green Header */}
          <div 
            className="px-[18px] pt-[46px] pb-[60px] rounded-b-[36px] relative overflow-hidden flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)' }}
          >
            <div className="absolute text-[80px] right-[-10px] bottom-[-10px] opacity-20">🌾</div>
            
            <div className="flex justify-between items-center mb-3 relative z-10">
              <div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  🌤️ Good Morning · सुप्रभात
                </div>
                <div 
                  className="text-white text-[18px] font-bold mt-0.5"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Ramu Kisan 👋
                </div>
              </div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{ 
                  background: 'rgba(255,255,255,0.25)',
                  border: '2px solid rgba(255,255,255,0.4)'
                }}
              >
                👨‍🌾
              </div>
            </div>

            <div
              className="rounded-[14px] px-[14px] py-[10px] flex items-center gap-2 relative z-10"
              style={{
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
            >
              <span className="text-sm">🔍</span>
              <span className="flex-1 text-[13px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                ट्रैक्टर खोजें... Find equipment
              </span>
              <div
                className="w-[30px] h-[30px] bg-white rounded-[10px] flex items-center justify-center text-sm font-bold"
                style={{ 
                  color: 'var(--saffron)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
              >
                🎙️
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 -mt-[30px]">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div
                className="bg-white rounded-[18px] p-4 text-left"
                style={{ 
                  boxShadow: 'var(--card-shadow)',
                  borderTop: '3px solid var(--saffron)'
                }}
              >
                <div className="text-[28px] mb-2">🔍</div>
                <div 
                  className="text-[14px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                >
                  Find Tractor
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                  ट्रैक्टर खोजें
                </div>
              </div>

              <div
                className="bg-white rounded-[18px] p-4 text-left"
                style={{ 
                  boxShadow: 'var(--card-shadow)',
                  borderTop: '3px solid var(--green)'
                }}
              >
                <div className="text-[28px] mb-2">📋</div>
                <div 
                  className="text-[14px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                >
                  My Bookings
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                  मेरी बुकिंग
                </div>
              </div>
            </div>

            {/* Near You */}
            <div 
              className="text-[16px] font-bold mb-3"
              style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
            >
              📍 Near You · आपके पास
            </div>

            {[
              { icon: '🚜', name: 'Mahindra 475 DI', owner: 'Harpreet Singh', distance: '2.4 km away', price: '₹2,400/day', rating: '4.8', bg: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' },
              { icon: '🌾', name: 'Harvester Combine', owner: 'Suresh Kumar', distance: '5.1 km away', price: '₹4,800/day', rating: '4.2', bg: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)' }
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-[18px] overflow-hidden flex h-[90px] mb-3 w-full"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <div 
                  className="w-[90px] flex items-center justify-center text-[36px] flex-shrink-0"
                  style={{ background: item.bg }}
                >
                  {item.icon}
                </div>
                <div className="px-[14px] py-3 flex-1 text-left">
                  <div 
                    className="text-[14px] font-bold"
                    style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                  >
                    {item.name}
                  </div>
                  <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-soft)' }}>
                    {item.owner} · {item.distance}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-[14px] font-bold" style={{ color: 'var(--saffron)' }}>
                      {item.price}
                    </div>
                    <div className="text-right">
                      <div className="text-[10px]" style={{ color: '#F5A623' }}>★★★★★</div>
                      <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                        {item.rating} · 23 reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAB Mic */}
          <motion.div
            animate={{ boxShadow: ['0 4px 20px rgba(255,107,0,0.5), 0 0 0 8px rgba(255,107,0,0.15)', '0 4px 20px rgba(255,107,0,0.5), 0 0 0 16px rgba(255,107,0,0.08)', '0 4px 20px rgba(255,107,0,0.5), 0 0 0 8px rgba(255,107,0,0.15)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[74px] left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-[26px] z-30"
            style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)' }}
          >
            🎙️
          </motion.div>

          {/* Bottom Nav */}
          <div 
            className="bg-white flex justify-around items-center py-[10px] pb-[14px] relative"
            style={{ borderTop: '1px solid #F0EDE7' }}
          >
            <div className="flex flex-col items-center gap-0.5 text-[9px] w-[50px]" style={{ color: 'var(--green)' }}>
              <div className="text-xl">🏠</div>
              <span>Home</span>
              <div className="w-1 h-1 rounded-full" style={{ background: 'var(--green)' }} />
            </div>
            <div className="w-16" />
            <div className="flex flex-col items-center gap-0.5 text-[9px] w-[50px]" style={{ color: 'var(--text-soft)' }}>
              <div className="text-xl">📋</div>
              <span>Bookings</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-[9px] w-[50px]" style={{ color: 'var(--text-soft)' }}>
              <div className="text-xl">👤</div>
              <span>Profile</span>
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
