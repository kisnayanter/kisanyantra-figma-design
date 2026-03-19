import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function HomeWithNotificationBadgeDesign() {
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
            <span className="font-bold text-[11px]">9:41</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header with Notification Bell */}
          <div 
            className="px-5 pt-4 pb-[60px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-white text-[11px] font-semibold mb-1" style={{ opacity: 0.85 }}>
                  Welcome back 👋
                </div>
                <div 
                  className="text-white text-[24px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Ramesh Kumar
                </div>
                <div 
                  className="text-white text-[13px] mt-0.5"
                  style={{ 
                    fontFamily: "'Noto Sans Devanagari', sans-serif",
                    opacity: 0.75
                  }}
                >
                  नमस्ते रमेश
                </div>
              </div>
              <div className="relative">
                {/* Notification Bell with Badge */}
                <button
                  className="ky-tap-icon w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-[20px]"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  🔔
                </button>
                {/* Badge */}
                <div
                  className="absolute -top-1 -right-1 w-[20px] h-[20px] rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ 
                    background: '#E74C3C',
                    boxShadow: '0 2px 8px rgba(231, 76, 60, 0.5)'
                  }}
                >
                  3
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-2">
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">12</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  Active Bookings
                </div>
              </div>
              <div 
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[20px] font-bold">₹24K</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  This Month
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                Quick Actions · त्वरित कार्य
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: '🔍', label: 'Search', badge: null },
                  { emoji: '🎤', label: 'Voice', badge: null },
                  { emoji: '📋', label: 'Bookings', badge: 2 }
                ].map((action) => (
                  <div
                    key={action.label}
                    className="ky-tap-icon relative rounded-[14px] py-4 flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
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

            {/* In-app Notification Toast Example */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3 mb-4 animate-slide-in"
              style={{
                background: 'linear-gradient(135deg, #22A04F 0%, #1A7A3B 100%)',
                boxShadow: '0 8px 24px rgba(34, 160, 79, 0.35)'
              }}
            >
              <div className="flex-shrink-0 text-2xl">✅</div>
              <div className="flex-1">
                <div className="text-white font-bold text-[13px] mb-0.5">
                  New Booking Request
                </div>
                <div className="text-white text-[11px]" style={{ opacity: 0.9 }}>
                  Rajesh Kumar wants your tractor
                </div>
              </div>
              <button className="ky-tap-link flex-shrink-0 text-white text-base opacity-70 hover:opacity-100">
                →
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                Recent Activity
              </div>
              <div className="space-y-3">
                {[
                  { emoji: '🚜', text: 'John Deere 5310 booked', time: '2h ago' },
                  { emoji: '💰', text: 'Payment received ₹8,500', time: '5h ago' },
                  { emoji: '⭐', text: 'You received 5-star rating', time: '1d ago' }
                ].map((activity, index) => (
                  <div key={index} className="ky-tap-list-item flex items-center gap-3">
                    <div 
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center text-lg"
                      style={{ background: 'var(--cream)' }}
                    >
                      {activity.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                        {activity.text}
                      </div>
                      <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <FarmerBottomNav activeTab="home" />

          {/* Notch */}
          <div 
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
            style={{ borderRadius: '0 0 14px 14px' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
