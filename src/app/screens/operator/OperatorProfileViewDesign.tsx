import { useLanguage } from '../../contexts/language';
import { OperatorBottomNav } from '../../components/OperatorBottomNav';

export function OperatorProfileViewDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    myProfile: t({
      english: 'My Profile',
      hindi: 'मेरी प्रोफाइल',
      tamil: 'எனது சுயவிவரம்',
      marathi: 'माझी प्रोफाइल'
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
    owner: t({
      english: 'Owner',
      hindi: 'मालिक',
      tamil: 'உரிமையாளர்',
      marathi: 'मालक'
    }),
    joined: t({
      english: 'Joined',
      hindi: 'शामिल हुए',
      tamil: 'சேர்ந்தது',
      marathi: 'सामील झाले'
    }),
    commissionRate: t({
      english: 'Commission Rate',
      hindi: 'कमीशन दर',
      tamil: 'கமிஷன் விகிதம்',
      marathi: 'कमिशन दर'
    }),
    editProfile: t({
      english: 'Edit Profile',
      hindi: 'प्रोफाइल संपादित करें',
      tamil: 'சுயவிவரத்தைத் திருத்து',
      marathi: 'प्रोफाइल संपादित करा'
    }),
    logout: t({
      english: 'Logout',
      hindi: 'लॉगआउट',
      tamil: 'வெளியேறு',
      marathi: 'लॉगआउट'
    }),
    settings: t({
      english: 'Settings',
      hindi: 'सेटिंग्स',
      tamil: 'அமைப்புகள்',
      marathi: 'सेटिंग्स'
    }),
    help: t({
      english: 'Help & Support',
      hindi: 'मदद और सहायता',
      tamil: 'உதவி மற்றும் ஆதரவு',
      marathi: 'मदत आणि सहाय्य'
    })
  };

  const operator = {
    name: 'Ramesh Kumar',
    photo: '👨‍🌾',
    phone: '+91 98765 43210',
    location: 'Wardha, Maharashtra',
    owner: 'Harpreet Singh',
    joined: 'Jan 15, 2026',
    commissionRate: '10%'
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
                {strings.myProfile}
              </div>
              <button className="ml-auto w-9 h-9 rounded-xl flex items-center justify-center text-base backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.15)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', color: 'white' }}>
                💬
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-[32px]"
                style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
              >
                {operator.photo}
              </div>
              <div className="flex-1">
                <div
                  className="text-white text-[16px] font-bold"
                  style={poppinsFont}
                >
                  {operator.name}
                </div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.85)', ...interFont }}>
                  {strings.owner}: {operator.owner}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Profile Details */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="space-y-3">
                <div>
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    {strings.phoneNumber}
                  </div>
                  <div className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>
                    {operator.phone}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    {strings.location}
                  </div>
                  <div className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>
                    {operator.location}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    {strings.joined}
                  </div>
                  <div className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>
                    {operator.joined}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    {strings.commissionRate}
                  </div>
                  <div className="text-[13px] font-bold" style={{ color: 'var(--harvest-yellow)' }}>
                    {operator.commissionRate}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                className="w-full py-3 rounded-[12px] text-[18px] font-bold flex items-center justify-center gap-2"
                style={{
                  background: 'var(--gradient-operator)',
                  color: 'white',
                  boxShadow: '0 4px 16px rgba(47,128,255,0.4)',
                  ...poppinsFont
                }}
              >
                ✏️ {strings.editProfile}
              </button>
              <button
                className="w-full py-3 rounded-[12px] text-[18px] font-bold flex items-center justify-center gap-2"
                style={{
                  border: '1.5px solid #E0E0E0',
                  color: 'var(--text-primary)',
                  ...poppinsFont
                }}
              >
                ⚙️ {strings.settings}
              </button>
              <button
                className="w-full py-3 rounded-[12px] text-[18px] font-bold flex items-center justify-center gap-2"
                style={{
                  border: '1.5px solid #E0E0E0',
                  color: 'var(--text-primary)',
                  ...poppinsFont
                }}
              >
                ❓ {strings.help}
              </button>
              <button
                className="w-full py-3 rounded-[12px] text-[18px] font-bold flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #EF4444, #F87171)',
                  color: 'white',
                  boxShadow: '0 4px 16px rgba(239,68,68,0.4)',
                  ...poppinsFont
                }}
              >
                🚪 {strings.logout}
              </button>
            </div>
          </div>

          {/* Operator Bottom Navigation */}
          <OperatorBottomNav activeTab="profile" />

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
