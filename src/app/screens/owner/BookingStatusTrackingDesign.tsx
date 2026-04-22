export function OwnerBookingStatusTrackingDesign() {
  type PayPhase = 'none' | 'awaiting' | 'submitted' | 'verified';
  const paymentPhase = ('submitted' as unknown) as PayPhase;

  const timeline = [
    {
      status: 'Booked',
      time: 'Jul 5, 2:30 PM',
      description: 'Booking confirmed and payment initiated',
      completed: true,
      icon: '\u{1F4DD}',
      color: 'var(--green)'
    },
    {
      status: 'You Accepted',
      time: 'Jul 5, 3:15 PM',
      description: 'You accepted Ramu Kisan\'s booking request',
      completed: true,
      icon: '\u2705',
      color: 'var(--green)'
    },
    {
      status: 'Equipment Ready',
      time: 'Jul 9, 6:00 PM',
      description: 'Equipment prepared and ready for delivery',
      completed: true,
      icon: '\u{1F527}',
      color: 'var(--green)'
    },
    {
      status: 'On The Way',
      time: 'Jul 10, 7:30 AM',
      description: 'Equipment dispatched to farmer\'s location',
      completed: true,
      icon: '\u{1F69A}',
      color: 'var(--green)'
    },
    {
      status: 'Delivered',
      time: 'In Progress',
      description: 'Equipment delivered to farmer\'s farm',
      completed: true,
      icon: '\u{1F4CD}',
      color: 'var(--green)'
    },
    {
      status: 'In Use',
      time: 'Jul 10–12',
      description: 'Equipment used by farmer for 3 days',
      completed: true,
      icon: '\u{1F69C}',
      color: 'var(--green)'
    },
    {
      status: 'Completed',
      time: 'Jul 12, 6:00 PM',
      description: 'Rental period ended. Equipment returned.',
      completed: true,
      icon: '\u{1F3C1}',
      color: 'var(--green)'
    },
    {
      status: 'Awaiting Payment',
      time: (() => {
        if (paymentPhase === 'none') return 'Pending';
        return 'Jul 12, 6:05 PM';
      })(),
      description: (() => {
        if (paymentPhase === 'none') return 'Waiting for farmer to pay \u20B97,200';
        return 'Payment request sent to Ramu Kisan';
      })(),
      completed: paymentPhase !== 'none',
      icon: '\u{1F4B3}',
      color: paymentPhase === 'none' ? 'var(--text-soft)' : 'var(--green)',
      current: paymentPhase === 'none',
    },
    {
      status: (() => {
        if (paymentPhase === 'verified') return 'Payment Verified \u2713';
        if (paymentPhase === 'submitted') return 'Payment Submitted';
        return 'Payment Pending';
      })(),
      time: (() => {
        if (paymentPhase === 'submitted' || paymentPhase === 'verified') return 'Jul 12, 4:35 PM';
        return 'Pending';
      })(),
      description: (() => {
        if (paymentPhase === 'verified') return '\u2705 Payment confirmed. Booking fully complete!';
        if (paymentPhase === 'submitted') return '\uD83D\uDD04 Proof received \u00B7 Awaiting your review';
        return 'Farmer has not submitted payment yet';
      })(),
      completed: paymentPhase === 'verified',
      icon: paymentPhase === 'verified' ? '\u2705' : paymentPhase === 'submitted' ? '\uD83D\uDCE4' : '\u23F3',
      color: paymentPhase === 'verified' ? 'var(--green)' : paymentPhase === 'submitted' ? 'var(--saffron)' : '#E0E0E0',
      current: paymentPhase === 'submitted',
    },
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
            <span className="font-bold text-[11px]">9:45</span>
            <div className="flex gap-1 items-center text-[11px]">{'\u{1F4F6}'} {'\u{1F50B}'}</div>
          </div>

          {/* Header - Green for Owner */}
          <div
            className="px-[18px] pt-5 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                {'\u2190'}
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Booking Status
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Track Booking
                </div>
              </div>
              <div
                className="ky-tap-icon w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base animate-pulse"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                {'\u{1F534}'}
              </div>
            </div>

            {/* Live Status */}
            <div
              className="rounded-[16px] p-4"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[28px]">{'\u{1F69C}'}</div>
                <div className="flex-1">
                  <div className="text-white text-[14px] font-bold">
                    Mahindra 475 DI
                  </div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Currently In Use {'\u00B7'} Day 2 of 3
                  </div>
                </div>
                <div
                  className="rounded-lg px-2 py-1 text-[10px] font-bold animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.25)', color: 'white' }}
                >
                  {'\u25CF'} LIVE
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div
              className="text-[12px] font-bold mb-3"
              style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-dark)' }}
            >
              {'\u{1F4CB}'} Booking Timeline
            </div>

            <div className="space-y-3">
              {timeline.map((event, index) => (
                <div key={event.status} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[16px] flex-shrink-0"
                      style={{
                        background: event.completed ? event.color : '#F5F5F5',
                        border: event.current ? '3px solid var(--saffron)' :
                                event.completed ? '2px solid ' + event.color : '2px solid #E0E0E0'
                      }}
                    >
                      {event.icon}
                    </div>
                    {index < timeline.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-1"
                        style={{
                          background: event.completed ? event.color : '#E0E0E0',
                          minHeight: '40px'
                        }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex justify-between items-start mb-1">
                      <div
                        className="text-[12px] font-bold"
                        style={{
                          color: event.completed ? 'var(--text-dark)' : 'var(--text-soft)',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        {event.status}
                      </div>
                      {event.current && (
                        <div
                          className="rounded-lg px-2 py-0.5 text-[8px] font-bold animate-pulse"
                          style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                        >
                          CURRENT
                        </div>
                      )}
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                      {event.time}
                    </div>
                    <div className="text-[10px] mt-1" style={{ color: 'var(--text-mid)' }}>
                      {event.description}
                    </div>
                    {index === 1 && (
                      <div className="text-[9px] mt-0.5 font-semibold" style={{ color: 'var(--green)', opacity: 0.75, fontFamily: 'Inter, sans-serif' }}>
                        by you
                      </div>
                    )}
                    {index >= 2 && index <= 5 && event.completed && (
                      <div className="text-[9px] mt-0.5" style={{ color: 'var(--text-soft)', fontFamily: 'Inter, sans-serif' }}>
                        by Ramesh Kumar (Operator)
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Operator Info */}
            <div
              className="bg-white rounded-[18px] p-4 mt-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-dark)' }}
              >
                {'\u{1F6E0}\uFE0F'} Operator Handling This Booking
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[18px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #EAF4FF, #CFE8FF)' }}
                >
                  {'\u{1F477}'}
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)', fontFamily: 'Poppins, sans-serif' }}>
                    Ramesh Kumar
                  </div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)', fontFamily: 'Inter, sans-serif' }}>
                    {'\u2B50'} 4.8 rating {'\u00B7'} Updated status 4 times
                  </div>
                </div>
                <div
                  className="ky-tap-link rounded-lg px-2 py-1 text-[9px] font-bold"
                  style={{ background: '#EAF4FF', color: '#2F80FF', fontFamily: 'Poppins, sans-serif' }}
                >
                  {'\u{1F4DE}'} Call
                </div>
              </div>
              <div
                className="rounded-[10px] px-3 py-2 flex items-center gap-2"
                style={{ background: '#EAF4FF' }}
              >
                <div className="text-[14px]">{'ℹ\uFE0F'}</div>
                <div className="text-[9px]" style={{ color: '#2F80FF', fontFamily: 'Inter, sans-serif' }}>
                  Operator marks each delivery step. You confirm final completion.
                </div>
              </div>
            </div>

            {/* Farmer Info */}
            <div
              className="bg-white rounded-[18px] p-4 mt-0 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-dark)' }}
              >
                {'\u{1F468}\u200D\u{1F33E}'} Farmer Details
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[20px]">{'\u{1F468}\u200D\u{1F33E}'}</div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Ramu Kisan - Wardha, Maharashtra
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    {'\u2B50'} 4.7 rating {'\u00B7'} 3.5 km away
                  </div>
                </div>
                <div
                  className="ky-tap-link rounded-lg px-2 py-1 text-[9px] font-bold"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                >
                  {'\u{1F4DE}'} Call
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            {paymentPhase === 'submitted' && (
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white animate-pulse"
                style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 4px 16px rgba(26,122,59,0.4)' }}
              >
                {'👀'} Review Payment Proof
              </div>
            )}
            {paymentPhase === 'awaiting' && (
              <div
                className="w-full rounded-[14px] py-3 text-[13px] font-bold text-center"
                style={{ background: '#FFFBEB', color: '#D97706', border: '1.5px solid #FCD34D' }}
              >
                {'⏳'} Waiting for Farmer Payment
              </div>
            )}
            {paymentPhase === 'verified' && (
              <div
                className="w-full rounded-[14px] py-3 text-[13px] font-bold text-center"
                style={{ background: '#F0FDF4', color: '#166534', border: '1.5px solid #BBF7D0' }}
              >
                {'✅'} Booking Complete · Payment Received
              </div>
            )}
            {paymentPhase === 'none' && (
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-sm font-bold text-center"
                style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', color: 'white', boxShadow: '0 4px 16px rgba(26,122,59,0.35)' }}
              >
                {'✅'} Mark as Complete
              </div>
            )}
            <div className="ky-tap-share w-full bg-[#25D366] text-white rounded-[14px] py-2.5 text-[12px] font-bold flex items-center justify-center gap-1.5">
              {'\u{1F4F2}'} Contact Farmer
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
