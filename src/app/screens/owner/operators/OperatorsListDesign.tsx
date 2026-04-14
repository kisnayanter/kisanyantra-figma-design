import { useLanguage } from '../../../contexts/language';
import { OwnerBottomNav } from '../../../components/OwnerBottomNav';
import { OwnerHeader } from '../../../components/owner/OwnerHeader';

export function OperatorsListDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    myOperators: t({
      english: 'My Operators',
      hindi: 'मेरे ऑपरेटर',
      tamil: 'எனது செயல்படுத்திகள்',
      marathi: 'माझे ऑपरेटर'
    }),
    manageOperators: t({
      english: 'Manage your operators',
      hindi: 'अपने ऑपरेटर प्रबंधित करें',
      tamil: 'உங்கள் செயல்படுத்திகளை நிர்வகிக்கவும்',
      marathi: 'तुमचे ऑपरेटर व्यवस्थापित करा'
    }),
    total: t({
      english: 'Total',
      hindi: 'कुल',
      tamil: 'மொத்த',
      marathi: 'एकूण'
    }),
    active: t({
      english: 'Active',
      hindi: 'सक्रिय',
      tamil: 'செயலில்',
      marathi: 'सक्रिय'
    }),
    pending: t({
      english: 'Pending',
      hindi: 'लंबित',
      tamil: 'நிலுவையில்',
      marathi: 'प्रलंबित'
    }),
    inviteOperator: t({
      english: '＋ Invite Operator',
      hindi: '＋ ऑपरेटर आमंत्रित करें',
      tamil: '＋ செயல்படுத்தியை அழைக்கவும்',
      marathi: '＋ ऑपरेटर आमंत्रित करा'
    }),
    assignedEquipment: t({
      english: 'Assigned Equipment',
      hindi: 'सौंपा गया उपकरण',
      tamil: 'ஒதுக்கப்பட்ட உபகரணம்',
      marathi: 'सोपवलेली उपकरणे'
    }),
    commissionEarned: t({
      english: 'Commission Earned',
      hindi: 'कमीशन कमाया',
      tamil: 'கமிஷன் சம்பாதித்தது',
      marathi: 'कमिशन कमवले'
    }),
    view: t({
      english: 'View',
      hindi: 'देखें',
      tamil: 'பார்க்க',
      marathi: 'पहा'
    }),
    edit: t({
      english: 'Edit',
      hindi: 'संपादित करें',
      tamil: 'திருத்து',
      marathi: 'संपादित करा'
    }),
    remove: t({
      english: 'Remove',
      hindi: 'हटाएं',
      tamil: 'நீக்கு',
      marathi: 'हटवा'
    }),
    inactive: t({
      english: 'Inactive',
      hindi: 'निष्क्रिय',
      tamil: 'செயலற்ற',
      marathi: 'निष्क्रिय'
    })
  };

  const operators = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      photo: '👨‍🌾',
      assignedEquipment: 2,
      commissionEarned: '₹12,500',
      status: 'active',
      statusColor: 'var(--green)',
      statusBg: 'var(--green-pale)'
    },
    {
      id: 2,
      name: 'Suresh Patel',
      photo: '👨‍🌾',
      assignedEquipment: 1,
      commissionEarned: '₹8,200',
      status: 'active',
      statusColor: 'var(--green)',
      statusBg: 'var(--green-pale)'
    },
    {
      id: 3,
      name: 'Vijay Singh',
      photo: '👨‍🌾',
      assignedEquipment: 0,
      commissionEarned: '₹0',
      status: 'pending',
      statusColor: 'var(--amber)',
      statusBg: 'var(--amber-pale)'
    },
    {
      id: 4,
      name: 'Amit Sharma',
      photo: '👨‍🌾',
      assignedEquipment: 3,
      commissionEarned: '₹15,800',
      status: 'inactive',
      statusColor: 'var(--text-soft)',
      statusBg: '#E5E5E5'
    }
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
          <OwnerHeader
            title={strings.myOperators}
            subtitle={strings.manageOperators}
            showNotification={true}
            notificationCount={2}
          >
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[
                { value: '4', label: strings.total },
                { value: '2', label: strings.active },
                { value: '1', label: strings.pending }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[12px] p-2.5 text-center"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <div className="text-white text-[16px] font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.value}</div>
                  <div className="text-white text-[14px] font-medium" style={{ opacity: 0.85, fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </OwnerHeader>

          {/* Operator Cards */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {operators.map((operator) => (
              <div
                key={operator.id}
                className="bg-white rounded-[18px] overflow-hidden mb-3"
                style={{ boxShadow: 'var(--card-shadow-sm)' }}
              >
                <div className="p-3">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-[24px]"
                      style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                    >
                      {operator.photo}
                    </div>
                    <div className="flex-1">
                      <div className="text-[16px] font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                        {operator.name}
                      </div>
                      <div
                        className="text-[14px] font-medium px-2 py-0.5 rounded-lg inline-block mt-1"
                        style={{ background: operator.statusBg, color: operator.statusColor, fontFamily: "'Inter', sans-serif" }}
                      >
                        {operator.status === 'active' ? strings.active : operator.status === 'pending' ? strings.pending : strings.inactive}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="text-[14px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                      {strings.assignedEquipment}: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{operator.assignedEquipment}</span>
                    </div>
                    <div className="text-[14px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                      {strings.commissionEarned}: <span style={{ color: 'var(--harvest-yellow)', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>{operator.commissionEarned}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      className="ky-tap-cta-secondary flex-1 rounded-[10px] py-2 text-[18px] font-bold text-center"
                      style={{ border: '1.5px solid #E0E0E0', color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}
                    >
                      {strings.view}
                    </button>
                    <button
                      className="ky-tap-cta-secondary flex-1 rounded-[10px] py-2 text-[18px] font-bold text-center"
                      style={{ border: '1.5px solid #E0E0E0', color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}
                    >
                      {strings.edit}
                    </button>
                    <button
                      className="ky-tap-action-destructive flex-1 rounded-[10px] py-2 text-[18px] font-bold text-center"
                      style={{ color: '#CC3333', fontFamily: "'Poppins', sans-serif" }}
                    >
                      {strings.remove}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAB - Invite Operator */}
          <div
            className="absolute bottom-20 right-5 w-12 h-12 rounded-full flex items-center justify-center text-[22px] text-white z-10"
            style={{
              background: 'linear-gradient(135deg, var(--green), var(--green-light))',
              boxShadow: '0 4px 16px rgba(26,122,59,0.4)'
            }}
          >
            <span role="img" aria-label="Invite Operator">{'\u2795'}</span>
          </div>

          {/* Bottom Nav */}
          <OwnerBottomNav activeTab="operators" />

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
