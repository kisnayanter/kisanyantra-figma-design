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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:44</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Saffron Header - Fixed */}
          <div 
            className="px-5 pt-4 pb-[60px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="absolute text-[80px] right-[-10px] bottom-[-10px] opacity-20">🌾</div>
            
            <div className="flex justify-between items-center mb-4 relative z-10">
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

            {/* Quick Stats */}
            <div className="flex gap-2 relative z-10">
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">5</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  Active · सक्रिय
                </div>
              </div>
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">₹18K</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  This Month · इस महीने
                </div>
              </div>
            </div>
          </div>

          {/* Content Area with proper scroll behavior */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                Quick Actions · त्वरित कार्य
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: '🔍', label: 'Search · खोजें', badge: null },
                  { emoji: '🎤', label: 'Voice · आवाज़', badge: null },
                  { emoji: '📋', label: 'Bookings · बुकिंग', badge: 2 }
                ].map((action) => (
                  <div
                    key={action.label}
                    className="relative rounded-[14px] py-4 flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ background: 'var(--cream)' }}
                  >
                    <div className="text-2xl">{action.emoji}</div>
                    <div className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                      {action.label}
                    </div>
                    {action.badge && (
                      <div
                        className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ 
                          background: '#E74C3C',
                          boxShadow: '0 2px 6px rgba(231, 76, 60, 0.4)'
                        }}
                      >
                        {action.badge}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* My Equipment */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                My Equipment · मेरा उपकरण
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Mahindra 475 DI', status: 'Available · उपलब्ध', price: '₹2,400/day', emoji: '🚜', color: 'var(--green)' },
                  { name: 'Harvester Combine', status: 'On Rent · किराए पर', price: '₹4,800/day', emoji: '🌾', color: 'var(--saffron)' }
                ].map((equipment) => (
                  <div key={equipment.name} className="flex items-center gap-3 p-3 rounded-[12px]" style={{ background: 'var(--cream)' }}>
                    <div className="text-2xl">{equipment.emoji}</div>
                    <div className="flex-1">
                      <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>{equipment.name}</div>
                      <div className="text-[9px]" style={{ color: equipment.color }}>{equipment.status}</div>
                    </div>
                    <div className="text-[11px] font-bold" style={{ color: 'var(--saffron)' }}>{equipment.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                Recent Activity · हाल की गतिविधि
              </div>
              <div className="space-y-2">
                {[
                  { icon: '📅', text: 'New booking request from Ramesh', time: '2 hours ago', color: 'var(--green)' },
                  { icon: '✅', text: 'Equipment returned - John Doe', time: '1 day ago', color: 'var(--text-mid)' },
                  { icon: '💰', text: 'Payment received - ₹4,800', time: '2 days ago', color: 'var(--saffron)' }
                ].map((activity) => (
                  <div key={activity.text} className="flex items-center gap-3 p-2">
                    <div className="text-lg">{activity.icon}</div>
                    <div className="flex-1">
                      <div className="text-[10px]" style={{ color: 'var(--text-dark)' }}>{activity.text}</div>
                      <div className="text-[8px]" style={{ color: 'var(--text-soft)' }}>{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div 
            className="bg-white flex justify-around items-center py-[10px] pb-[14px] relative"
            style={{ borderTop: '1px solid #F0EDE7' }}
          >
            <div className="flex flex-col items-center gap-0.5 text-[9px] w-[50px]" style={{ color: 'var(--green)' }}>
              <div className="text-xl">🏠</div>
              <span>घर · Home</span>
              <div className="w-1 h-1 rounded-full" style={{ background: 'var(--green)' }} />
            </div>
            <div className="flex flex-col items-center gap-0.5 text-[9px] w-[50px]" style={{ color: 'var(--text-soft)' }}>
              <div className="text-xl">📋</div>
              <span>बुकिंग · Bookings</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-[9px] w-[50px]" style={{ color: 'var(--text-soft)' }}>
              <div className="text-xl">👤</div>
              <span>प्रोफाइल · Profile</span>
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
