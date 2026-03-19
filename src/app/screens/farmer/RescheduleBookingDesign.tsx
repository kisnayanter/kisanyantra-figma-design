export function RescheduleBookingDesign() {
  const allDates = [
    30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];

  const bookedDates = [8, 9, 18, 19];
  const currentBookingDates = [10, 11, 12];
  const newSelectedStart = 15;
  const newSelectedEnd = 17;

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

          {/* Header — Same saffron gradient as BookEquipment */}
          <div
            className="px-[18px] pt-5 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  तारीख बदलें · Reschedule Booking
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Mahindra 475 DI
                </div>
              </div>
            </div>

            {/* Current Booking Preview — Same card style as BookEquipment header */}
            <div
              className="rounded-[16px] p-3 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="text-[28px]">🚜</div>
              <div className="flex-1">
                <div className="text-white text-[12px] font-bold">
                  वर्तमान बुकिंग · Current Booking
                </div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Jul 10 → Jul 12 (3 दिन) · ₹7,200 · Harpreet Singh
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content — Same layout as BookEquipment */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Duration Quick Selector + Calendar — SAME component as BookEquipment */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[14px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📅 नई तारीख चुनें · Select New Dates
              </div>

              {/* Duration Pill Chips — SAME as BookEquipment */}
              <div className="flex gap-2 mb-3 overflow-x-auto">
                {[
                  { days: 1, label: '1 दिन · 1 Day' },
                  { days: 2, label: '2 दिन · 2 Days' },
                  { days: 3, label: '3 दिन · 3 Days', selected: true },
                  { days: 5, label: '5 दिन · 5 Days' },
                  { days: 7, label: '7 दिन · 7 Days' }
                ].map((option) => (
                  <button
                    key={option.days}
                    className="ky-tap-chip px-3 py-2 rounded-[10px] text-[11px] font-bold whitespace-nowrap"
                    style={{
                      background: option.selected ? 'var(--saffron)' : 'var(--cream)',
                      color: option.selected ? 'white' : 'var(--text-dark)',
                      border: option.selected ? '2px solid var(--saffron)' : '1.5px solid #E8E3DA'
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Calendar — SAME grid as BookEquipment, with current booking highlight added */}
              <div className="bg-[var(--cream)] rounded-[14px] p-3 mb-3">
                <div className="flex justify-between text-xs font-bold mb-2" style={{ color: 'var(--text-mid)' }}>
                  <button className="ky-tap-icon px-2 py-1">← Jun</button>
                  <span>July 2025</span>
                  <button className="ky-tap-icon px-2 py-1">Aug →</button>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                    <div key={d} className="aspect-square flex items-center justify-center text-[9px] font-semibold" style={{ color: 'var(--text-soft)' }}>{d}</div>
                  ))}
                  {allDates.map((num, i) => {
                    const isBooked = bookedDates.includes(num);
                    const isCurrentBooking = currentBookingDates.includes(num);
                    const isNewStart = num === newSelectedStart;
                    const isNewEnd = num === newSelectedEnd;
                    const isNewInRange = num > newSelectedStart && num < newSelectedEnd;
                    const isPastMonth = i === 0;

                    return (
                      <div
                        key={`${num}-${i}`}
                        className="ky-tap-calendar-cell aspect-square rounded-lg flex items-center justify-center text-[10px] font-semibold cursor-pointer"
                        style={{
                          background: isPastMonth ? 'transparent' :
                                     isBooked ? '#FFE8E8' :
                                     isCurrentBooking ? '#FFF3E8' :
                                     isNewStart || isNewEnd ? 'var(--saffron)' :
                                     isNewInRange ? 'var(--saffron-pale)' :
                                     'white',
                          color: isPastMonth ? 'var(--text-soft)' :
                                isBooked ? '#CC3333' :
                                isCurrentBooking ? 'var(--saffron)' :
                                isNewStart || isNewEnd ? 'white' :
                                isNewInRange ? 'var(--saffron)' :
                                'var(--text-dark)',
                          textDecoration: isBooked ? 'line-through' : 'none',
                          border: isCurrentBooking ? '1.5px dashed var(--saffron)' :
                                 (isNewStart || isNewEnd || isNewInRange) ? 'none' :
                                 '1px solid #F0EDE7'
                        }}
                      >
                        {num}
                      </div>
                    );
                  })}
                </div>

                {/* Legend — SAME style as BookEquipment + current booking indicator */}
                <div className="flex gap-3 mt-3 text-[9px]">
                  <span className="flex items-center gap-1">
                    <span className="w-[10px] h-[10px] rounded inline-block" style={{ background: 'white', border: '1px solid #E0E0E0' }} />
                    उपलब्ध · Available
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-[10px] h-[10px] rounded inline-block" style={{ background: '#FFE8E8' }} />
                    बुक · Booked
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-[10px] h-[10px] rounded inline-block" style={{ background: '#FFF3E8', border: '1.5px dashed var(--saffron)' }} />
                    पुरानी · Current
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-[10px] h-[10px] rounded inline-block" style={{ background: 'var(--saffron)' }} />
                    नई · New
                  </span>
                </div>
              </div>

              {/* Selected Range Display — SAME as BookEquipment */}
              <div
                className="rounded-[12px] p-3 flex items-center justify-between"
                style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)' }}
              >
                <div>
                  <div className="text-[10px]" style={{ color: 'var(--green)' }}>
                    नई अवधि · New Duration
                  </div>
                  <div className="text-[12px] font-bold" style={{ color: 'var(--green)' }}>
                    Jul 15 → Jul 17 (3 दिन · 3 days)
                  </div>
                </div>
                <div className="text-[18px]">✓</div>
              </div>
            </div>

            {/* Price Comparison — Enhanced version of BookEquipment's Price Summary */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[14px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💰 मूल्य तुलना · Price Comparison
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>पुरानी बुकिंग · Current Booking</span>
                  <span className="text-[11px]" style={{ color: 'var(--text-mid)', textDecoration: 'line-through' }}>₹7,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>नई बुकिंग · New Booking</span>
                  <span className="text-[11px] font-bold" style={{ color: 'var(--saffron)' }}>₹7,200</span>
                </div>
                <div className="flex justify-between items-center pt-2" style={{ borderTop: '1.5px solid #F5F2ED' }}>
                  <span className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>अतिरिक्त राशि · Additional</span>
                  <span className="text-[14px] font-bold" style={{ color: 'var(--green)' }}>₹0 · कोई अंतर नहीं</span>
                </div>
              </div>
            </div>

            {/* Owner Confirmation Info — SAME as BookEquipment */}
            <div
              className="rounded-[16px] p-3 flex items-start gap-3 mb-4"
              style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)' }}
            >
              <div className="text-[18px]">ℹ️</div>
              <div className="flex-1">
                <div className="text-[11px] font-bold" style={{ color: 'var(--green)' }}>
                  मालिक की पुष्टि आवश्यक · Owner Confirmation Required
                </div>
                <div className="text-[10px]" style={{ color: 'var(--green)' }}>
                  Harpreet Singh को सूचना मिलेगी · will be notified and needs to approve
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons — SAME style as BookEquipment */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div
              className="ky-tap-cta-primary w-full text-white rounded-[14px] py-3.5 text-[13px] font-bold text-center cursor-pointer"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              📅 रिशेड्यूल भेजें · Send Reschedule Request
            </div>
            <div
              className="ky-tap-cta-secondary w-full rounded-[14px] py-3 text-[12px] font-bold text-center cursor-pointer"
              style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
            >
              रद्द करें · Cancel
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
