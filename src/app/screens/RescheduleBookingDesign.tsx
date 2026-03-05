export function RescheduleBookingDesign() {
  const availableDates = [
    { date: 'Jul 8', day: 'Mon', available: false },
    { date: 'Jul 9', day: 'Tue', available: false },
    { date: 'Jul 10', day: 'Wed', available: true, current: true },
    { date: 'Jul 11', day: 'Thu', available: true },
    { date: 'Jul 12', day: 'Fri', available: true },
    { date: 'Jul 13', day: 'Sat', available: true },
    { date: 'Jul 14', day: 'Sun', available: false }
  ];

  const timeSlots = [
    '6:00 AM', '8:00 AM', '10:00 AM', '12:00 PM',
    '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div 
            className="px-[18px] pt-5 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  तारीख बदलें · Reschedule
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Reschedule Booking
                </div>
              </div>
            </div>

            {/* Current Booking */}
            <div 
              className="rounded-[16px] p-3 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="text-[20px]">🚜</div>
              <div className="flex-1">
                <div className="text-white text-[12px] font-bold">
                  Mahindra 475 DI
                </div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Currently: Jul 10-12, 2025 · ₹7,200
                </div>
              </div>
            </div>
          </div>

          {/* Reschedule Form */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Date Selection */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📅 Select New Start Date
              </div>
              <div className="grid grid-cols-7 gap-1 mb-3">
                {availableDates.map((day) => (
                  <div
                    key={day.date}
                    className="text-center p-2 rounded-lg"
                    style={{
                      background: day.current ? 'var(--saffron)' : 
                                 day.available ? 'var(--cream)' : '#F5F5F5',
                      color: day.current ? 'white' : 
                             day.available ? 'var(--text-dark)' : 'var(--text-soft)',
                      border: day.current ? '2px solid var(--saffron)' : 
                              day.available ? '1px solid #E8E3DA' : '1px solid #E0E0E0'
                    }}
                  >
                    <div className="text-[8px]">{day.day}</div>
                    <div className="text-[10px] font-bold">{day.date.split(' ')[1]}</div>
                  </div>
                ))}
              </div>
              <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                🟢 Available · 🔴 Unavailable · 🟡 Current Selection
              </div>
            </div>

            {/* Duration Selection */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                ⏱️ Rental Duration
              </div>
              <div className="space-y-2">
                {[
                  { days: 1, price: '₹2,400', current: false },
                  { days: 2, price: '₹4,800', current: false },
                  { days: 3, price: '₹7,200', current: true },
                  { days: 5, price: '₹12,000', current: false },
                  { days: 7, price: '₹16,800', current: false }
                ].map((option) => (
                  <div
                    key={option.days}
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ 
                      background: option.current ? 'var(--saffron-pale)' : 'var(--cream)',
                      border: option.current ? '2px solid var(--saffron)' : '1px solid #E8E3DA'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ 
                          background: option.current ? 'var(--saffron)' : 'white',
                          border: option.current ? '2px solid var(--saffron)' : '2px solid #D0CCC5'
                        }}
                      >
                        {option.current && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>
                          {option.days} {option.days === 1 ? 'Day' : 'Days'}
                        </div>
                        <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                          {option.days === 1 ? '8 hours' : `${option.days * 8} hours`}
                        </div>
                      </div>
                    </div>
                    <div className="text-[12px] font-bold" style={{ color: 'var(--saffron)' }}>
                      {option.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                🕐 Start Time
              </div>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    className="text-center p-2 rounded-lg text-[10px] font-bold"
                    style={{
                      background: time === '8:00 AM' ? 'var(--green-pale)' : 'var(--cream)',
                      color: time === '8:00 AM' ? 'var(--green)' : 'var(--text-dark)',
                      border: time === '8:00 AM' ? '2px solid var(--green)' : '1px solid #E8E3DA'
                    }}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>

            {/* Price Comparison */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💰 Price Comparison
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>Current Booking</span>
                  <span className="text-[11px]" style={{ color: 'var(--text-mid)' }}>₹7,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>New Booking</span>
                  <span className="text-[11px] font-bold" style={{ color: 'var(--saffron)' }}>₹7,200</span>
                </div>
                <div className="flex justify-between items-center pt-2" style={{ borderTop: '1px solid #F5F2ED' }}>
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>Additional Amount</span>
                  <span className="text-[11px] font-bold" style={{ color: 'var(--green)' }}>₹0</span>
                </div>
              </div>
            </div>

            {/* Owner Confirmation */}
            <div
              className="rounded-[16px] p-3 flex items-center gap-3 mb-4"
              style={{ background: 'var(--green-pale)', border: '1px solid var(--green)' }}
            >
              <div className="text-[18px]">ℹ️</div>
              <div className="flex-1">
                <div className="text-[11px] font-bold" style={{ color: 'var(--green)' }}>
                  Owner Confirmation Required
                </div>
                <div className="text-[10px]" style={{ color: 'var(--green)' }}>
                  Harpreet Singh will be notified and needs to approve the change
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div
              className="w-full text-white rounded-[14px] py-3 text-sm font-bold text-center"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              📅 Send Reschedule Request
            </div>
            <div
              className="w-full rounded-[14px] py-3 text-sm font-bold text-center"
              style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
            >
              Cancel
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