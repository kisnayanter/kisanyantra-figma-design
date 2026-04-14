import { useLanguage } from '../../contexts/language';
import { OperatorBottomNav } from '../../components/OperatorBottomNav';

export function OperatorEquipmentListDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    myEquipment: t({
      english: 'My Equipment',
      hindi: 'मेरा उपकरण',
      tamil: 'எனது உபகரணம்',
      marathi: 'माझे उपकरण'
    }),
    assignedBy: t({
      english: 'Assigned by',
      hindi: 'द्वारा सौंपा गया',
      tamil: 'ஒதுக்கப்பட்டது',
      marathi: 'सोपवलेले'
    }),
    available: t({
      english: 'Available',
      hindi: 'उपलब्ध',
      tamil: 'கிடைக்கும்',
      marathi: 'उपलब्ध'
    }),
    inUse: t({
      english: 'In Use',
      hindi: 'उपयोग में',
      tamil: 'பயன்பாட்டில்',
      marathi: 'वापरात'
    }),
    bookingsToday: t({
      english: 'bookings today',
      hindi: 'आज बुकिंग',
      tamil: 'இன்று முன்பதிவு',
      marathi: 'आज बुकिंग'
    }),
    viewBookings: t({
      english: 'View Bookings',
      hindi: 'बुकिंग देखें',
      tamil: 'முன்பதிவுகளைப் பார்க்கவும்',
      marathi: 'बुकिंग पहा'
    }),
    status: t({
      english: 'Status',
      hindi: 'स्थिति',
      tamil: 'நிலை',
      marathi: 'स्थिती'
    })
  };

  const equipment = [
    { 
      id: 1, 
      name: 'Mahindra 475 DI', 
      icon: '🚜', 
      owner: 'Harpreet Singh',
      status: 'available',
      bookingsToday: 2,
      hp: '45 HP'
    },
    { 
      id: 2, 
      name: 'Combine Harvester', 
      icon: '🌾', 
      owner: 'Harpreet Singh',
      status: 'inUse',
      bookingsToday: 1,
      hp: '100 HP'
    }
  ];

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
            className="px-[18px] pt-4 pb-5 rounded-b-[36px] relative"
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
                {strings.myEquipment}
              </div>
              <button className="ml-auto w-9 h-9 rounded-xl flex items-center justify-center text-base backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.15)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', color: 'white' }}>
                💬
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div
                className="rounded-[12px] p-3 text-center"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>2</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85, ...interFont }}>
                  Total
                </div>
              </div>
              <div
                className="rounded-[12px] p-3 text-center"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>3</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85, ...interFont }}>
                  {strings.bookingsToday}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-3">
              {equipment.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[18px] overflow-hidden"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div className="p-3">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-[28px] flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                          {item.name}
                        </div>
                        <div className="text-[12px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                          {item.hp}
                        </div>
                        <div className="text-[12px] mt-1" style={{ color: 'var(--text-soft)', ...interFont }}>
                          {strings.assignedBy} {item.owner}
                        </div>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                        {strings.status}
                      </span>
                      <div
                        className="text-[10px] font-bold px-3 py-1 rounded-lg"
                        style={{ 
                          background: item.status === 'available' ? 'var(--operator-blue-pale)' : 'var(--amber-pale)',
                          color: item.status === 'available' ? 'var(--operator-blue)' : 'var(--amber)',
                          ...interFont
                        }}
                      >
                        {item.status === 'available' ? strings.available : strings.inUse}
                      </div>
                    </div>

                    {/* Bookings */}
                    <div className="flex justify-between items-center pt-2" style={{ borderTop: '1px solid #E0E0E0' }}>
                      <span className="text-[12px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                        {item.bookingsToday} {strings.bookingsToday}
                      </span>
                      <button
                        className="text-[12px] font-medium"
                        style={{ color: 'var(--operator-blue)', ...interFont }}
                      >
                        {strings.viewBookings}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operator Bottom Navigation */}
          <OperatorBottomNav activeTab="equipment" />

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
