import { useLanguage } from '../../../contexts/language';

export function AssignEquipmentDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    assignEquipment: t({
      english: 'Assign Equipment',
      hindi: 'उपकरण सौंपें',
      tamil: 'உபகரணத்தை ஒதுக்கவும்',
      marathi: 'उपकरण सोपा'
    }),
    operatorName: t({
      english: 'Operator',
      hindi: 'ऑपरेटर',
      tamil: 'செயல்படுத்தி',
      marathi: 'ऑपरेटर'
    }),
    available: t({
      english: 'Available',
      hindi: 'उपलब्ध',
      tamil: 'கிடைக்கும்',
      marathi: 'उपलब्ध'
    }),
    paused: t({
      english: 'Paused',
      hindi: 'रोका गया',
      tamil: 'இடைநிறுத்தப்பட்டது',
      marathi: 'थांबवले'
    }),
    currentlyAssigned: t({
      english: 'Currently Assigned',
      hindi: 'वर्तमान में सौंपा गया',
      tamil: 'தற்போது ஒதுக்கப்பட்டது',
      marathi: 'सध्या सोपवले'
    }),
    unassigned: t({
      english: 'Unassigned',
      hindi: 'असौंपा',
      tamil: 'ஒதுக்கப்படாதது',
      marathi: 'न सोपवलेले'
    }),
    save: t({
      english: 'Save',
      hindi: 'सहेजें',
      tamil: 'சேமி',
      marathi: 'जतन करा'
    }),
    cancel: t({
      english: 'Cancel',
      hindi: 'रद्द करें',
      tamil: 'ரத்துசெய்',
      marathi: 'रद्द करा'
    }),
    remove: t({
      english: 'Remove',
      hindi: 'हटाएं',
      tamil: 'நீக்கு',
      marathi: 'हटवा'
    }),
    select: t({
      english: 'Select',
      hindi: 'चुनें',
      tamil: 'தேர்ந்தெடு',
      marathi: 'निवडा'
    })
  };

  const operator = {
    name: 'Ramesh Kumar',
    photo: '👨‍🌾'
  };

  const currentlyAssigned = [
    { id: 1, name: 'Mahindra 475 DI', icon: '🚜', status: strings.available },
    { id: 2, name: 'Combine Harvester', icon: '🌾', status: strings.available }
  ];

  const unassigned = [
    { id: 3, name: 'Rotavator', icon: '⚙️', status: strings.available },
    { id: 4, name: 'John Deere 5050', icon: '🚜', status: strings.paused },
    { id: 5, name: 'Power Tiller', icon: '🔧', status: strings.available }
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
                style={poppinsFont}
              >
                {strings.assignEquipment}
              </div>
            </div>

            {/* Operator Info */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[20px]"
                style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
              >
                {operator.photo}
              </div>
              <div>
                <div className="text-white text-[16px] font-bold" style={poppinsFont}>
                  {operator.name}
                </div>
                <div className="text-[14px]" style={{ color: 'rgba(255,255,255,0.8)', ...interFont }}>
                  {strings.operatorName}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Currently Assigned */}
            <div className="mb-4">
              <div
                className="text-[16px] font-bold mb-2"
                style={{ ...poppinsFont, color: 'var(--text-primary)' }}
              >
                {strings.currentlyAssigned} ({currentlyAssigned.length})
              </div>
              <div className="space-y-2">
                {currentlyAssigned.map((item) => (
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
                        {item.status}
                      </div>
                    </div>
                    <button
                      className="px-3 py-1.5 rounded-lg text-[14px] font-medium"
                      style={{ color: '#CC3333', border: '1.5px solid #CC3333', ...interFont }}
                    >
                      {strings.remove}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Unassigned */}
            <div className="mb-4">
              <div
                className="text-[16px] font-bold mb-2"
                style={{ ...poppinsFont, color: 'var(--text-primary)' }}
              >
                {strings.unassigned} ({unassigned.length})
              </div>
              <div className="space-y-2">
                {unassigned.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[12px] p-3 flex items-center gap-3"
                    style={{ boxShadow: 'var(--card-shadow-sm)' }}
                  >
                    <input type="checkbox" className="w-5 h-5" />
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-[24px] flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)' }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                        {item.name}
                      </div>
                      <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                        {item.status}
                      </div>
                    </div>
                    <button
                      className="px-3 py-1.5 rounded-lg text-[14px] font-medium"
                      style={{ color: 'var(--green)', border: '1.5px solid var(--green)', ...interFont }}
                    >
                      {strings.select}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 pt-2">
            <button
              className="w-full py-3 rounded-[12px] text-[18px] font-bold mb-2"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                color: 'white',
                boxShadow: '0 4px 16px rgba(26,122,59,0.4)',
                ...poppinsFont
              }}
            >
              {strings.save}
            </button>
            <button
              className="w-full py-3 rounded-[12px] text-[18px] font-bold"
              style={{
                border: '1.5px solid #E0E0E0',
                color: 'var(--text-primary)',
                ...poppinsFont
              }}
            >
              {strings.cancel}
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
