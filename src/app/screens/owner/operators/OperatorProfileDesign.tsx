import { useLanguage } from '../../../contexts/language';

export function OperatorProfileDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    operatorProfile: t({
      english: 'Operator Profile',
      hindi: 'ऑपरेटर प्रोफाइल',
      tamil: 'செயல்படுத்தி சுயவிவரம்',
      marathi: 'ऑपरेटर प्रोफाइल'
    }),
    phoneNumber: t({
      english: 'Phone Number',
      hindi: 'फोन नंबर',
      tamil: 'தொலைபேசி எண்',
      marathi: 'फोन नंबर'
    }),
    location: t({
      english: 'Location',
      hindi: 'स्थान',
      tamil: 'இடம்',
      marathi: 'स्थान'
    }),
    skills: t({
      english: 'Skills / Certifications',
      hindi: 'कौशल / प्रमाणपत्र',
      tamil: 'திறன்கள் / சான்றிதழ்கள்',
      marathi: 'कौशल्ये / प्रमाणपत्रे'
    }),
    joinDate: t({
      english: 'Join Date',
      hindi: 'शामिल होने की तारीख',
      tamil: 'சேர்ந்த தேதி',
      marathi: 'सामील होण्याची तारीख'
    }),
    assignedEquipment: t({
      english: 'Assigned Equipment',
      hindi: 'सौंपा गया उपकरण',
      tamil: 'ஒதுக்கப்பட்ட உபகரணம்',
      marathi: 'सोपवलेली उपकरणे'
    }),
    commission: t({
      english: 'Commission',
      hindi: 'कमीशन',
      tamil: 'கமிஷன்',
      marathi: 'कमिशन'
    }),
    totalEarned: t({
      english: 'Total Earned',
      hindi: 'कुल कमाई',
      tamil: 'மொத்த வருமானம்',
      marathi: 'एकूण कमाई'
    }),
    thisMonth: t({
      english: 'This Month',
      hindi: 'इस महीने',
      tamil: 'இந்த மாதம்',
      marathi: 'या महिन्यात'
    }),
    commissionRate: t({
      english: 'Commission Rate',
      hindi: 'कमीशन दर',
      tamil: 'கமிஷன் விகிதம்',
      marathi: 'कमिशन दर'
    }),
    assignMore: t({
      english: 'Assign More',
      hindi: 'और सौंपें',
      tamil: 'மேலும் ஒதுக்கவும்',
      marathi: 'आणखी सोपा'
    }),
    editProfile: t({
      english: 'Edit Profile',
      hindi: 'प्रोफाइल संपादित करें',
      tamil: 'சுயவிவரத்தைத் திருத்து',
      marathi: 'प्रोफाइल संपादित करा'
    }),
    toggleStatus: t({
      english: 'Toggle Active/Inactive',
      hindi: 'सक्रिय/निष्क्रिय टॉगल करें',
      tamil: 'செயலில்/செயலற்றவற்றை மாற்றவும்',
      marathi: 'सक्रिय/निष्क्रिय टॉगल करा'
    }),
    removeOperator: t({
      english: 'Remove Operator',
      hindi: 'ऑपरेटर हटाएं',
      tamil: 'செயல்படுத்தியை நீக்கு',
      marathi: 'ऑपरेटर हटवा'
    }),
    viewBookings: t({
      english: 'View Bookings',
      hindi: 'बुकिंग देखें',
      tamil: 'முன்பதிவுகளைப் பார்க்கவும்',
      marathi: 'बुकिंग पहा'
    }),
    active: t({
      english: 'Active',
      hindi: 'सक्रिय',
      tamil: 'செயலில்',
      marathi: 'सक्रिय'
    }),
    available: t({
      english: 'Available',
      hindi: 'उपलब्ध',
      tamil: 'கிடைக்கும்',
      marathi: 'उपलब्ध'
    }),
    bookings: t({
      english: 'bookings',
      hindi: 'बुकिंग',
      tamil: 'முன்பதிவுகள்',
      marathi: 'बुकिंग'
    })
  };

  const operator = {
    name: 'Ramesh Kumar',
    photo: '👨‍🌾',
    phone: '+91 98765 43210',
    location: 'Wardha, Maharashtra',
    skills: ['Tractor', 'Combine Harvester', 'Rotavator'],
    joinDate: 'Jan 15, 2026',
    status: 'active',
    commissionEarned: '₹12,500',
    thisMonthCommission: '₹3,200',
    commissionRate: '10%'
  };

  const assignedEquipment = [
    { id: 1, name: 'Mahindra 475 DI', icon: '🚜', status: strings.available, bookings: 12 },
    { id: 2, name: 'Combine Harvester', icon: '🌾', status: strings.available, bookings: 8 }
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

          {/* Green Gradient Header */}
          <div
            className="px-[18px] pt-4 pb-6 rounded-b-[36px] relative"
            style={{
              background: 'var(--gradient-green)',
              boxShadow: 'var(--card-shadow-green)',
              backgroundImage: `
                var(--gradient-green),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <button className="text-white text-[18px]">←</button>
              <div
                className="text-white text-[22px] font-bold"
                style={poppinsFont}
              >
                {strings.operatorProfile}
              </div>
            </div>

            {/* Operator Info */}
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-[32px]"
                style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
              >
                {operator.photo}
              </div>
              <div className="flex-1">
                <div
                  className="text-white text-[18px] font-bold mb-1"
                  style={poppinsFont}
                >
                  {operator.name}
                </div>
                <div
                  className="text-[14px] font-medium px-2 py-0.5 rounded-lg inline-block"
                  style={{ background: 'rgba(255,255,255,0.2)', color: 'white', ...interFont }}
                >
                  {strings.active}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Profile Details */}
            <div className="bg-white rounded-[16px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="space-y-3">
                <div>
                  <div className="text-[14px] mb-1" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    {strings.phoneNumber}
                  </div>
                  <div className="text-[16px] font-medium" style={{ color: 'var(--text-primary)', ...interFont }}>
                    {operator.phone}
                  </div>
                </div>
                <div>
                  <div className="text-[14px] mb-1" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    {strings.location}
                  </div>
                  <div className="text-[16px] font-medium" style={{ color: 'var(--text-primary)', ...interFont }}>
                    {operator.location}
                  </div>
                </div>
                <div>
                  <div className="text-[14px] mb-1" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    {strings.skills}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {operator.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-[14px] font-medium"
                        style={{ background: 'var(--green-pale)', color: 'var(--green)', ...interFont }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[14px] mb-1" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    {strings.joinDate}
                  </div>
                  <div className="text-[16px] font-medium" style={{ color: 'var(--text-primary)', ...interFont }}>
                    {operator.joinDate}
                  </div>
                </div>
              </div>
            </div>

            {/* Assigned Equipment */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div
                  className="text-[16px] font-bold"
                  style={{ ...poppinsFont, color: 'var(--text-primary)' }}
                >
                  {strings.assignedEquipment}
                </div>
                <button
                  className="text-[14px] font-medium"
                  style={{ color: 'var(--green)', ...interFont }}
                >
                  {strings.assignMore}
                </button>
              </div>
              <div className="space-y-2">
                {assignedEquipment.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[12px] p-3 flex items-center gap-3"
                    style={{ boxShadow: 'var(--card-shadow-sm)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-[24px] flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                        {item.name}
                      </div>
                      <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                        {item.status} · {item.bookings} {strings.bookings}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commission/Earnings */}
            <div className="bg-white rounded-[16px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div
                className="text-[16px] font-bold mb-3"
                style={{ ...poppinsFont, color: 'var(--text-primary)' }}
              >
                {strings.commission}
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="text-center p-3 rounded-lg" style={{ background: 'var(--green-pale)' }}>
                  <div
                    className="text-[18px] font-extrabold"
                    style={{ color: 'var(--green)', ...poppinsFont }}
                  >
                    {operator.commissionEarned}
                  </div>
                  <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    {strings.totalEarned}
                  </div>
                </div>
                <div className="text-center p-3 rounded-lg" style={{ background: 'var(--saffron-pale)' }}>
                  <div
                    className="text-[18px] font-extrabold"
                    style={{ color: 'var(--saffron)', ...poppinsFont }}
                  >
                    {operator.thisMonthCommission}
                  </div>
                  <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    {strings.thisMonth}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid #E0E0E0' }}>
                <span className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                  {strings.commissionRate}
                </span>
                <span className="text-[16px] font-bold" style={{ color: 'var(--text-primary)', ...poppinsFont }}>
                  {operator.commissionRate}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                className="w-full py-3 rounded-[12px] text-[18px] font-bold"
                style={{
                  background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                  color: 'white',
                  boxShadow: '0 4px 16px rgba(26,122,59,0.4)',
                  ...poppinsFont
                }}
              >
                {strings.editProfile}
              </button>
              <button
                className="w-full py-3 rounded-[12px] text-[18px] font-bold"
                style={{
                  border: '1.5px solid var(--green)',
                  color: 'var(--green)',
                  ...poppinsFont
                }}
              >
                {strings.toggleStatus}
              </button>
              <button
                className="w-full py-3 rounded-[12px] text-[18px] font-bold"
                style={{
                  border: '1.5px solid #E0E0E0',
                  color: 'var(--text-primary)',
                  ...poppinsFont
                }}
              >
                {strings.viewBookings}
              </button>
              <button
                className="w-full py-3 rounded-[12px] text-[18px] font-bold"
                style={{
                  color: '#CC3333',
                  ...poppinsFont
                }}
              >
                {strings.removeOperator}
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
