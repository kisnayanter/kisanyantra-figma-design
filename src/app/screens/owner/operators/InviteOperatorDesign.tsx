import { useLanguage } from '../../../contexts/language';

export function InviteOperatorDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    inviteOperator: t({
      english: 'Invite New Operator',
      hindi: 'नया ऑपरेटर आमंत्रित करें',
      tamil: 'புதிய செயல்படுத்தியை அழைக்கவும்',
      marathi: 'नवीन ऑपरेटर आमंत्रित करा'
    }),
    operatorName: t({
      english: 'Operator Name',
      hindi: 'ऑपरेटर का नाम',
      tamil: 'செயல்படுத்தியின் பெயர்',
      marathi: 'ऑपरेटरचे नाव'
    }),
    phoneNumber: t({
      english: 'Phone Number',
      hindi: 'फोन नंबर',
      tamil: 'தொலைபேசி எண்',
      marathi: 'फोन नंबर'
    }),
    skills: t({
      english: 'Skills / Certifications',
      hindi: 'कौशल / प्रमाणपत्र',
      tamil: 'திறன்கள் / சான்றிதழ்கள்',
      marathi: 'कौशल्ये / प्रमाणपत्रे'
    }),
    location: t({
      english: 'Location',
      hindi: 'स्थान',
      tamil: 'இடம்',
      marathi: 'स्थान'
    }),
    useCurrentLocation: t({
      english: 'Use Current Location',
      hindi: 'वर्तमान स्थान का उपयोग करें',
      tamil: 'தற்போதைய இடத்தைப் பயன்படுத்தவும்',
      marathi: 'वर्तमान स्थान वापरा'
    }),
    assignEquipment: t({
      english: 'Assign Equipment',
      hindi: 'उपकरण सौंपें',
      tamil: 'உபகரணத்தை ஒதுக்கவும்',
      marathi: 'उपकरण सोपा'
    }),
    photo: t({
      english: 'Photo (Optional)',
      hindi: 'फोटो (वैकल्पिक)',
      tamil: 'புகைப்படம் (விருப்பம்)',
      marathi: 'फोटो (ऐच्छिक)'
    }),
    sendInvite: t({
      english: 'Send Invite',
      hindi: 'आमंत्रण भेजें',
      tamil: 'அழைப்பை அனுப்பவும்',
      marathi: 'आमंत्रण पाठवा'
    }),
    invitationSent: t({
      english: 'Invitation Sent!',
      hindi: 'आमंत्रण भेजा गया!',
      tamil: 'அழைப்பு அனுப்பப்பட்டது!',
      marathi: 'आमंत्रण पाठवले!'
    }),
    operatorWillReceive: t({
      english: 'Operator will receive notification to accept invitation',
      hindi: 'ऑपरेटर को आमंत्रण स्वीकार करने के लिए अधिसूचना मिलेगी',
      tamil: 'செயல்படுத்தி அழைப்பை ஏற்க அறிவிப்பு பெறுவார்',
      marathi: 'ऑपरेटरला आमंत्रण स्वीकार करण्यासाठी अधिसूचना मिळेल'
    }),
    done: t({
      english: 'Done',
      hindi: 'हो गया',
      tamil: 'முடிந்தது',
      marathi: 'झाले'
    }),
    available: t({
      english: 'Available',
      hindi: 'उपलब्ध',
      tamil: 'கிடைக்கும்',
      marathi: 'उपलब्ध'
    }),
    selectAll: t({
      english: 'Select All',
      hindi: 'सभी का चयन करें',
      tamil: 'அனைத்தையும் தேர்ந்தெடு',
      marathi: 'सर्व निवडा'
    })
  };

  const skills = [
    { id: 'tractor', label: 'Tractor' },
    { id: 'harvester', label: 'Combine Harvester' },
    { id: 'rotavator', label: 'Rotavator' },
    { id: 'plow', label: 'Plow' },
    { id: 'cultivator', label: 'Cultivator' },
    { id: 'sprayer', label: 'Sprayer' }
  ];

  const equipment = [
    { id: 1, name: 'Mahindra 475 DI', icon: '🚜', status: strings.available },
    { id: 2, name: 'Combine Harvester', icon: '🌾', status: strings.available },
    { id: 3, name: 'Rotavator', icon: '⚙️', status: strings.available },
    { id: 4, name: 'John Deere 5050', icon: '🚜', status: strings.available }
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Green Gradient Header */}
          <div
            className="px-[18px] pt-4 pb-5 rounded-b-[36px] relative"
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
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {strings.inviteOperator}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Operator Name */}
            <div className="mb-4">
              <label className="text-[16px] font-bold mb-2 block" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                {strings.operatorName}
              </label>
              <input
                type="text"
                placeholder="Enter operator name"
                className="w-full px-4 py-3 rounded-[12px] text-[16px]"
                style={{
                  border: '1.5px solid #E0E0E0',
                  fontFamily: "'Inter', sans-serif",
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="text-[16px] font-bold mb-2 block" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                {strings.phoneNumber}
              </label>
              <div className="flex gap-2">
                <div
                  className="px-3 py-3 rounded-[12px] text-[16px] font-medium"
                  style={{ border: '1.5px solid #E0E0E0', fontFamily: "'Inter', sans-serif", minWidth: '70px' }}
                >
                  +91
                </div>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="flex-1 px-4 py-3 rounded-[12px] text-[16px]"
                  style={{
                    border: '1.5px solid #E0E0E0',
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
            </div>

            {/* Skills / Certifications */}
            <div className="mb-4">
              <label className="text-[16px] font-bold mb-2 block" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                {strings.skills}
              </label>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill.id}
                    className="ky-tap-chip px-3 py-1.5 rounded-full text-[11px] font-medium"
                    style={{
                      border: '1.5px solid #E0E0E0',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {skill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="text-[16px] font-bold mb-2 block" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                {strings.location}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter location"
                  className="flex-1 px-4 py-3 rounded-[12px] text-[16px]"
                  style={{
                    border: '1.5px solid #E0E0E0',
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--text-primary)'
                  }}
                />
                <button
                  className="ky-tap-action-secondary rounded-[10px] px-3 py-2 text-[11px] font-medium"
                  style={{
                    background: 'var(--green-pale)',
                    color: 'var(--green)',
                    border: '1.5px solid var(--green)'
                  }}
                >
                  📍
                </button>
              </div>
              <button className="ky-tap-link text-[11px] mt-2 font-medium" style={{ color: 'var(--green)' }}>
                {strings.useCurrentLocation}
              </button>
            </div>

            {/* Photo Upload */}
            <div className="mb-4">
              <label className="text-[16px] font-bold mb-2 block" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                {strings.photo}
              </label>
              <div
                className="w-full h-24 rounded-[12px] flex items-center justify-center border-2 border-dashed"
                style={{ borderColor: '#E0E0E0' }}
              >
                <div className="text-center">
                  <div className="text-[24px] mb-1">📷</div>
                  <div className="text-[14px]" style={{ color: 'var(--text-soft)', fontFamily: "'Inter', sans-serif" }}>
                    Tap to upload photo
                  </div>
                </div>
              </div>
            </div>

            {/* Assign Equipment */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[16px] font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                  {strings.assignEquipment}
                </label>
                <button className="ky-tap-link text-[11px] font-medium" style={{ color: 'var(--green)' }}>
                  {strings.selectAll}
                </button>
              </div>
              <div className="space-y-2">
                {equipment.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[20px] p-4 flex items-center gap-3"
                    style={{ boxShadow: 'var(--card-shadow)' }}
                  >
                    <input type="checkbox" className="w-4 h-4" />
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark)' }}>
                        {item.name}
                      </div>
                      <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                        {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Send Invite Button */}
            <button
              className="w-full py-4 rounded-[16px] text-[18px] font-bold text-white mt-4"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 16px rgba(26,122,59,0.4)',
                fontFamily: "Poppins, sans-serif"
              }}
            >
              {strings.sendInvite}
            </button>
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
