export function NotificationCenterDesign() {
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
            className="px-5 pt-4 pb-[32px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  ←
                </div>
                <div>
                  <div 
                    className="text-white text-[20px] font-bold"
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                  >
                    Notifications
                  </div>
                  <div 
                    className="text-[12px]"
                    style={{ 
                      color: 'rgba(255,255,255,0.75)',
                      fontFamily: "'Noto Sans Devanagari', sans-serif"
                    }}
                  >
                    सूचनाएं
                  </div>
                </div>
              </div>
              <button
                className="ky-tap-link text-[12px] font-semibold px-3 py-1.5 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
              >
                Mark all read
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
              {['All', 'Bookings', 'Payments', 'Messages'].map((tab, index) => (
                <button
                  key={tab}
                  className="ky-tap-tab px-3 py-1.5 rounded-[10px] text-[12px] font-semibold transition-all"
                  style={{
                    background: index === 0 ? 'white' : 'rgba(255,255,255,0.2)',
                    color: index === 0 ? 'var(--saffron)' : 'white'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications List */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Today Section */}
            <div className="text-[11px] font-bold mb-3 uppercase tracking-wide" style={{ color: 'var(--text-soft)' }}>
              Today
            </div>

            {/* Operator Invitation - Unread */}
            <div
              className="ky-tap-list-item bg-white rounded-[18px] p-4 mb-3 relative"
              style={{
                boxShadow: '0 4px 16px rgba(47, 128, 255, 0.12)',
                border: '2px solid var(--operator-blue)'
              }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--operator-blue-pale)' }}>
                  ⚙️
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark)' }}>
                      Operator Invitation
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      1 min ago
                    </div>
                  </div>
                  <div className="text-[12px] mb-2" style={{ color: 'var(--text-mid)' }}>
                    <strong>Ramesh Patel</strong> invited you to operate their equipment
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="ky-tap-cta-primary flex-1 py-2 rounded-[10px] text-[12px] font-bold text-white"
                      style={{ background: 'var(--gradient-operator)' }}
                    >
                      Accept
                    </button>
                    <button
                      className="ky-tap-cta-secondary flex-1 py-2 rounded-[10px] text-[12px] font-bold"
                      style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
              {/* Unread indicator */}
              <div
                className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
                style={{ background: 'var(--operator-blue)' }}
              />
            </div>

            {/* New Booking Request - Unread */}
            <div
              className="ky-tap-list-item bg-white rounded-[18px] p-4 mb-3 relative"
              style={{
                boxShadow: '0 4px 16px rgba(255, 107, 0, 0.12)',
                border: '2px solid var(--saffron)'
              }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--saffron-pale)' }}>
                  🚜
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark)' }}>
                      New Booking Request
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      2 min ago
                    </div>
                  </div>
                  <div className="text-[12px] mb-2" style={{ color: 'var(--text-mid)' }}>
                    <strong>Rajesh Kumar</strong> wants to book your John Deere 5310 for Jan 15-17
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="ky-tap-cta-primary flex-1 py-2 rounded-[10px] text-[12px] font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, var(--green) 0%, #22A04F 100%)' }}
                    >
                      Accept
                    </button>
                    <button
                      className="ky-tap-cta-secondary flex-1 py-2 rounded-[10px] text-[12px] font-bold"
                      style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
              {/* Unread indicator */}
              <div
                className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
                style={{ background: 'var(--saffron)' }}
              />
            </div>

            {/* Payment Received - Unread */}
            <div
              className="ky-tap-list-item bg-white rounded-[18px] p-4 mb-3 relative"
              style={{
                boxShadow: '0 4px 16px rgba(26, 122, 59, 0.12)',
                border: '2px solid var(--green)'
              }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--green-pale)' }}>
                  💰
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark)' }}>
                      Payment Received
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      15 min ago
                    </div>
                  </div>
                  <div className="text-[12px] mb-2" style={{ color: 'var(--text-mid)' }}>
                    ₹8,500 received from <strong>Amit Singh</strong> for 3-day rental
                  </div>
                  <div className="ky-tap-link flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: 'var(--green)' }}>
                    <span>View Details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
              {/* Unread indicator */}
              <div
                className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
                style={{ background: 'var(--green)' }}
              />
            </div>

            {/* Booking Confirmed */}
            <div
              className="ky-tap-list-item bg-white rounded-[18px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--green-pale)' }}>
                  ✅
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark)' }}>
                      Booking Confirmed
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      1 hour ago
                    </div>
                  </div>
                  <div className="text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    Your booking for <strong>Mahindra 575 DI</strong> is confirmed for Jan 10-12
                  </div>
                </div>
              </div>
            </div>

            {/* Yesterday Section */}
            <div className="text-[11px] font-bold mb-3 mt-5 uppercase tracking-wide" style={{ color: 'var(--text-soft)' }}>
              Yesterday
            </div>

            {/* Rating Reminder */}
            <div
              className="ky-tap-list-item bg-white rounded-[18px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: '#FFF8E1' }}>
                  ⭐
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark)' }}>
                      Rate Your Experience
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      Yesterday
                    </div>
                  </div>
                  <div className="text-[12px] mb-2" style={{ color: 'var(--text-mid)' }}>
                    How was your rental with <strong>Suresh Patel</strong>?
                  </div>
                  <button
                    className="ky-tap-cta-secondary text-[11px] font-semibold px-3 py-1.5 rounded-lg"
                    style={{ background: 'var(--cream)', color: 'var(--saffron)' }}
                  >
                    Rate Now
                  </button>
                </div>
              </div>
            </div>

            {/* Equipment Listed */}
            <div
              className="ky-tap-list-item bg-white rounded-[18px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--saffron-pale)' }}>
                  📝
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark)' }}>
                      Equipment Listed Successfully
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      Yesterday
                    </div>
                  </div>
                  <div className="text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    Your <strong>Cultivator XL-200</strong> is now available for booking
                  </div>
                </div>
              </div>
            </div>

            {/* Warning - Low Balance */}
            <div
              className="ky-tap-list-item bg-white rounded-[18px] p-4 mb-3"
              style={{
                boxShadow: 'var(--card-shadow)',
                border: '2px solid #F5A623'
              }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: '#FFF8E1' }}>
                  ⚠️
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark)' }}>
                      Payment Reminder
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      Yesterday
                    </div>
                  </div>
                  <div className="text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    Payment of ₹3,600 for booking #1234 is due tomorrow
                  </div>
                </div>
              </div>
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
