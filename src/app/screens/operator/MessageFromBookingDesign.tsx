import { useLanguage } from '../../contexts/language';

export function MessageFromBookingDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    contact: t({
      english: 'Contact Farmer',
      hindi: 'किसान से संपर्क करें',
      tamil: 'விவசாயியைத் தொடர்பு கொள்ளுங்கள்',
      marathi: 'शेतकरीशी संपर्क साधा'
    }),
    booking: t({
      english: 'Booking',
      hindi: 'बुकिंग',
      tamil: 'முன்பதிவு',
      marathi: 'बुकिंग'
    }),
    farmer: t({
      english: 'Farmer',
      hindi: 'किसान',
      tamil: 'விவசாயி',
      marathi: 'शेतकरी'
    }),
    equipment: t({
      english: 'Equipment',
      hindi: 'उपकरण',
      tamil: 'உபகரணம்',
      marathi: 'उपकरण'
    }),
    date: t({
      english: 'Date',
      hindi: 'तारीख',
      tamil: 'தேதி',
      marathi: 'तारीख'
    }),
    time: t({
      english: 'Time',
      hindi: 'समय',
      tamil: 'நேரம்',
      marathi: 'वेळ'
    }),
    location: t({
      english: 'Location',
      hindi: 'स्थान',
      tamil: 'இடம்',
      marathi: 'स्थान'
    }),
    startChat: t({
      english: 'Start Chat',
      hindi: 'चैट शुरू करें',
      tamil: 'அரட்டைத் தொடங்கு',
      marathi: 'चॅट सुरू करा'
    }),
    call: t({
      english: 'Call',
      hindi: 'कॉल करें',
      tamil: 'அழை',
      marathi: 'कॉल करा'
    }),
    cancel: t({
      english: 'Cancel',
      hindi: 'रद्द करें',
      tamil: 'ரத்துசெய்',
      marathi: 'रद्द करा'
    })
  };

  const booking = {
    id: 'BK-2026-015',
    farmerName: 'Ramu Kisan',
    farmerPhoto: '👨‍🌾',
    farmerPhone: '+91 98765 43210',
    equipment: 'Mahindra 475 DI',
    equipmentIcon: '🚜',
    date: 'Jan 15, 2026',
    time: '10:00 AM',
    location: 'Wardha, Maharashtra'
  };

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };

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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={interFont}>9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Blue Gradient Header */}
          <div
            className="px-[18px] pt-4 pb-6 rounded-b-[36px] relative"
            style={{
              background: 'var(--gradient-operator)',
              boxShadow: 'var(--card-shadow-operator)',
              backgroundImage: `
                var(--gradient-operator),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <button className="text-white text-[18px]">←</button>
              <div
                className="text-white text-[18px] font-bold"
                style={poppinsFont}
              >
                {strings.contact}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Farmer Info */}
            <div className="bg-white rounded-[16px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[28px]"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  {booking.farmerPhoto}
                </div>
                <div className="flex-1">
                  <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                    {booking.farmerName}
                  </div>
                  <div className="text-[12px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    {strings.farmer}
                  </div>
                  <div className="text-[12px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    📱 {booking.farmerPhone}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-[16px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div
                className="text-[16px] font-bold mb-3"
                style={{ ...poppinsFont, color: 'var(--text-primary)' }}
              >
                {strings.booking} Details
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    🎫 {strings.booking} ID:
                  </span>
                  <span className="text-[14px] font-medium" style={{ color: 'var(--text-primary)', ...interFont }}>
                    {booking.id}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    {booking.equipmentIcon} {strings.equipment}:
                  </span>
                  <span className="text-[14px] font-medium" style={{ color: 'var(--text-primary)', ...interFont }}>
                    {booking.equipment}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    📅 {strings.date}:
                  </span>
                  <span className="text-[14px] font-medium" style={{ color: 'var(--text-primary)', ...interFont }}>
                    {booking.date}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    🕐 {strings.time}:
                  </span>
                  <span className="text-[14px] font-medium" style={{ color: 'var(--text-primary)', ...interFont }}>
                    {booking.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    📍 {strings.location}:
                  </span>
                  <span className="text-[14px] font-medium" style={{ color: 'var(--text-primary)', ...interFont }}>
                    {booking.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                className="w-full py-4 rounded-[16px] text-[18px] font-bold flex items-center justify-center gap-2"
                style={{
                  background: 'var(--gradient-operator)',
                  color: 'white',
                  boxShadow: '0 4px 16px rgba(47,128,255,0.4)',
                  ...poppinsFont
                }}
              >
                💬 {strings.startChat}
              </button>
              <button
                className="w-full py-4 rounded-[16px] text-[18px] font-bold flex items-center justify-center gap-2"
                style={{
                  border: '1.5px solid var(--operator-blue)',
                  color: 'var(--operator-blue)',
                  ...poppinsFont
                }}
              >
                📞 {strings.call}
              </button>
              <button
                className="w-full py-3 rounded-[12px] text-[16px] font-medium"
                style={{
                  border: '1.5px solid #E0E0E0',
                  color: 'var(--text-primary)',
                  ...poppinsFont
                }}
              >
                {strings.cancel}
              </button>
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
