import { useLanguage } from '../../contexts/language';

export function EquipmentEditDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    editEquipment: t({
      english: 'Edit Equipment',
      hindi: 'उपकरण संपादित करें',
      tamil: 'உபகரணத்தை திருத்து',
      marathi: 'उपकरण संपादित करा'
    }),
    updateDetails: t({
      english: 'Update your listing details',
      hindi: 'अपनी लिस्टिंग विवरण अपडेट करें',
      tamil: 'உங்கள் பட்டியல் விவரங்களை புதுப்பிக்கவும்',
      marathi: 'तुमच्या लिस्टिंगचे तपशील अपडेट करा'
    }),
    changePhoto: t({
      english: 'Change Photo',
      hindi: 'फोटो बदलें',
      tamil: 'புகைப்படம் மாற்று',
      marathi: 'फोटो बदला'
    }),
    equipmentType: t({
      english: 'Equipment Type',
      hindi: 'उपकरण प्रकार',
      tamil: 'உபகரண வகை',
      marathi: 'उपकरण प्रकार'
    }),
    tractor: t({
      english: 'Tractor',
      hindi: 'ट्रैक्टर',
      tamil: 'டிராக்டர்',
      marathi: 'ट्रॅक्टर'
    }),
    brandModel: t({
      english: 'Brand & Model',
      hindi: 'ब्रांड और मॉडल',
      tamil: 'பிராண்ட் & மாடல்',
      marathi: 'ब्रँड आणि मॉडेल'
    }),
    year: t({
      english: 'Year',
      hindi: 'वर्ष',
      tamil: 'ஆண்டு',
      marathi: 'वर्ष'
    }),
    horsePower: t({
      english: 'Horse Power',
      hindi: 'अश्वशक्ति',
      tamil: 'குதிரை சக்தி',
      marathi: 'अश्वशक्ती'
    }),
    condition: t({
      english: 'Condition',
      hindi: 'स्थिति',
      tamil: 'நிலை',
      marathi: 'स्थिती'
    }),
    excellent: t({
      english: 'Excellent',
      hindi: 'उत्कृष्ट',
      tamil: 'சிறப்பு',
      marathi: 'उत्कृष्ट'
    }),
    pricing: t({
      english: 'Pricing',
      hindi: 'मूल्य निर्धारण',
      tamil: 'விலை நிர்ணயம்',
      marathi: 'किंमत'
    }),
    perDay: t({
      english: 'Per Day',
      hindi: 'प्रति दिन',
      tamil: 'ஒரு நாளுக்கு',
      marathi: 'प्रति दिन'
    }),
    perHour: t({
      english: 'Per Hour',
      hindi: 'प्रति घंटा',
      tamil: 'ஒரு மணி நேரத்திற்கு',
      marathi: 'प्रति तास'
    }),
    location: t({
      english: 'Location',
      hindi: 'स्थान',
      tamil: 'இடம்',
      marathi: 'स्थान'
    }),
    availability: t({
      english: 'Availability',
      hindi: 'उपलब्धता',
      tamil: 'கிடைக்கும் தன்மை',
      marathi: 'उपलब्धता'
    }),
    availabilityHint: t({
      english: 'Toggle off when equipment is being used personally',
      hindi: 'व्यक्तिगत उपयोग होने पर बंद करें',
      tamil: 'தனிப்பட்ட பயன்பாட்டின் போது அணைக்கவும்',
      marathi: 'वैयक्तिक वापरासाठी बंद करा'
    }),
    description: t({
      english: 'Description',
      hindi: 'विवरण',
      tamil: 'விளக்கம்',
      marathi: 'वर्णन'
    }),
    descriptionValue: t({
      english: 'Well maintained tractor with new tires. Available with operator.',
      hindi: 'नए टायरों वाला अच्छी तरह से रखरखाव किया हुआ ट्रैक्टर। ऑपरेटर के साथ उपलब्ध।',
      tamil: 'புதிய டயர்களுடன் நன்கு பராமரிக்கப்பட்ட டிராக்டர். ஆபரேட்டருடன் கிடைக்கும்.',
      marathi: 'नवीन टायर्ससह चांगले देखभाल केलेले ट्रॅक्टर. ऑपरेटरसह उपलब्ध.'
    }),
    dangerZone: t({
      english: 'Danger Zone',
      hindi: 'खतरे का क्षेत्र',
      tamil: 'ஆபத்து மண்டலம்',
      marathi: 'धोक्याचे क्षेत्र'
    }),
    deleteEquipment: t({
      english: 'Delete Equipment',
      hindi: 'उपकरण हटाएं',
      tamil: 'உபகரணத்தை நீக்கு',
      marathi: 'उपकरण हटवा'
    }),
    deleteWarning: t({
      english: 'This will permanently remove this listing and cancel any pending bookings',
      hindi: 'इससे यह लिस्टिंग स्थायी रूप से हट जाएगी और सभी लंबित बुकिंग रद्द हो जाएंगी',
      tamil: 'இது இந்த பட்டியலை நிரந்தரமாக நீக்கி, நிலுவையில் உள்ள முன்பதிவுகளை ரத்து செய்யும்',
      marathi: 'हे ही लिस्टिंग कायमची काढून टाकेल आणि प्रलंबित बुकिंग रद्द करेल'
    }),
    saveChanges: t({
      english: 'Save Changes',
      hindi: 'परिवर्तन सहेजें',
      tamil: 'மாற்றங்களை சேமி',
      marathi: 'बदल जतन करा'
    })
  };

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
            className="px-[18px] pt-3 pb-5 rounded-b-[36px] relative"
            style={{
              background: 'var(--gradient-green)',
              boxShadow: 'var(--card-shadow-green)'
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.editEquipment}
                </div>
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Inter', sans-serif" }}>
                  {strings.updateDetails}
                </div>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Equipment Photo */}
            <div
              className="rounded-[18px] overflow-hidden mb-3 relative h-[90px] flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
            >
              <div className="text-[40px]">🚜</div>
              <button
                className="ky-tap-cta-secondary absolute bottom-2 right-2 px-3 py-1 rounded-lg text-[10px] font-bold"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  backdropFilter: 'blur(4px)'
                }}
              >
                📷 {strings.changePhoto}
              </button>
            </div>

            {/* Equipment Type (Locked) */}
            <div className="bg-white rounded-[18px] p-3.5 mb-2.5" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[10px] font-semibold mb-1.5" style={{ color: 'var(--text-soft)' }}>
                🔒 {strings.equipmentType}
              </div>
              <div className="text-[14px] font-semibold" style={{ color: 'var(--text-soft)', fontFamily: "'Inter', sans-serif" }}>
                {strings.tractor}
              </div>
            </div>

            {/* Brand & Model */}
            <div className="bg-white rounded-[18px] p-3.5 mb-2.5" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[10px] font-semibold mb-1.5" style={{ color: 'var(--text-soft)' }}>
                🏭 {strings.brandModel}
              </div>
              <input
                type="text"
                value="Mahindra 475 DI"
                readOnly
                className="w-full text-[14px] font-semibold bg-transparent outline-none px-2 py-1 rounded-lg"
                style={{ color: 'var(--text-dark)', border: '1.5px solid var(--green)' }}
              />
            </div>

            {/* Year & HP Row */}
            <div className="grid grid-cols-2 gap-2.5 mb-2.5">
              <div className="bg-white rounded-[18px] p-3.5" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
                <div className="text-[10px] font-semibold mb-1.5" style={{ color: 'var(--text-soft)' }}>
                  📅 {strings.year}
                </div>
                <input
                  type="text"
                  value="2020"
                  readOnly
                  className="w-full text-[14px] font-semibold bg-transparent outline-none px-2 py-1 rounded-lg"
                  style={{ color: 'var(--text-dark)', border: '1.5px solid var(--green)' }}
                />
              </div>
              <div className="bg-white rounded-[18px] p-3.5" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
                <div className="text-[10px] font-semibold mb-1.5" style={{ color: 'var(--text-soft)' }}>
                  ⚡ {strings.horsePower}
                </div>
                <input
                  type="text"
                  value="50 HP"
                  readOnly
                  className="w-full text-[14px] font-semibold bg-transparent outline-none px-2 py-1 rounded-lg"
                  style={{ color: 'var(--text-dark)', border: '1.5px solid var(--green)' }}
                />
              </div>
            </div>

            {/* Condition */}
            <div className="bg-white rounded-[18px] p-3.5 mb-2.5" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[10px] font-semibold mb-1.5" style={{ color: 'var(--text-soft)' }}>
                ✅ {strings.condition}
              </div>
              <div
                className="flex items-center justify-between px-2 py-1 rounded-lg"
                style={{ border: '1.5px solid #E0E0E0' }}
              >
                <span className="text-[14px] font-semibold" style={{ color: 'var(--text-dark)' }}>{strings.excellent}</span>
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>▼</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-[18px] p-3.5 mb-2.5" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[10px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                💰 {strings.pricing}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-[9px] font-medium mb-1" style={{ color: 'var(--text-soft)' }}>{strings.perDay}</div>
                  <input
                    type="text"
                    value="₹2,400"
                    readOnly
                    className="w-full text-[14px] font-bold bg-transparent outline-none px-2 py-1 rounded-lg"
                    style={{ color: 'var(--green)', border: '1.5px solid var(--green)' }}
                  />
                </div>
                <div>
                  <div className="text-[9px] font-medium mb-1" style={{ color: 'var(--text-soft)' }}>{strings.perHour}</div>
                  <input
                    type="text"
                    value="₹400"
                    readOnly
                    className="w-full text-[14px] font-bold bg-transparent outline-none px-2 py-1 rounded-lg"
                    style={{ color: 'var(--text-dark)', border: '1.5px solid #E0E0E0' }}
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-[18px] p-3.5 mb-2.5" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[10px] font-semibold mb-1.5" style={{ color: 'var(--text-soft)' }}>
                📍 {strings.location}
              </div>
              <div className="text-[14px] font-semibold" style={{ color: 'var(--text-dark)', fontFamily: "'Inter', sans-serif" }}>
                Hinganghat, Wardha
              </div>
            </div>

            {/* Availability Toggle */}
            <div className="bg-white rounded-[18px] p-3.5 mb-2.5" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="flex items-center justify-between mb-1">
                <div className="text-[10px] font-semibold" style={{ color: 'var(--text-soft)' }}>
                  🟢 {strings.availability}
                </div>
                <div
                  className="ky-tap-toggle w-11 h-6 rounded-full relative"
                  style={{ background: 'var(--green)' }}
                >
                  <div
                    className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-white"
                    style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </div>
              <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                {strings.availabilityHint}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-[18px] p-3.5 mb-2.5" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[10px] font-semibold mb-1.5" style={{ color: 'var(--text-soft)' }}>
                📝 {strings.description}
              </div>
              <div
                className="text-[12px] leading-relaxed px-2 py-1.5 rounded-lg"
                style={{
                  color: 'var(--text-dark)',
                  border: '1.5px solid #E0E0E0',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {strings.descriptionValue}
              </div>
            </div>

            {/* Danger Zone */}
            <div className="border-t border-dashed my-3" style={{ borderColor: '#E0E0E0' }} />
            <div className="mb-3">
              <div className="text-[11px] font-bold mb-2" style={{ color: '#CC3333', fontFamily: "'Poppins', sans-serif" }}>
                ⚠️ {strings.dangerZone}
              </div>
              <button
                className="ky-tap-action-destructive w-full rounded-[14px] py-2.5 text-[12px] font-bold text-center mb-1.5"
                style={{ border: '1.5px solid #FFCCCC', color: '#CC3333', background: '#FFF0F0' }}
              >
                🗑 {strings.deleteEquipment}
              </button>
              <div className="text-[9px] text-center" style={{ color: 'var(--text-soft)' }}>
                {strings.deleteWarning}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-5 pb-5 pt-2">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[14px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              ✓ {strings.saveChanges}
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
