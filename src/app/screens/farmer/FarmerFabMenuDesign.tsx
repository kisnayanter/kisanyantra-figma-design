import { useLanguage } from '../../contexts/language';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function FarmerFabMenuDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    myRequests: t({ english: 'My Requests', hindi: 'मेरे अनुरोध', tamil: 'எனது கோரிக்கைகள்', marathi: 'माझ्या विनंत्या' }),
    myRequestsSub: t({ english: 'Track your equipment needs', hindi: 'अपनी उपकरण आवश्यकताओं को ट्रैक करें', tamil: 'உங்கள் உபகரணத் தேவைகளைக் கண்காணிக்கவும்', marathi: 'तुमच्या उपकरण गरजांचा मागोवा घ्या' }),
    voiceSearch: t({ english: 'Voice Search', hindi: 'आवाज़ से खोजें', tamil: 'குரல் தேடல்', marathi: 'आवाजाने शोधा' }),
    voiceSearchSub: t({ english: 'Talk to Kisan Mitra', hindi: 'किसान मित्र से बात करें', tamil: 'கிசான் மித்ராவிடம் பேசு', marathi: 'किसान मित्राशी बोला' }),
    searchEquipment: t({ english: 'Search Equipment', hindi: 'उपकरण खोजें', tamil: 'உபகரணம் தேடு', marathi: 'उपकरण शोधा' }),
    searchEquipmentSub: t({ english: 'Browse all listings', hindi: 'सभी लिस्टिंग देखें', tamil: 'அனைத்து பட்டியல்களையும் பார்', marathi: 'सर्व लिस्टिंग पहा' }),
    quickActions: t({ english: 'Quick Actions', hindi: 'त्वरित कार्य', tamil: 'விரைவு செயல்கள்', marathi: 'जलद कृती' }),
  };

  const menuItems = [
    {
      icon: '�',
      label: strings.myRequests,
      sub: strings.myRequestsSub,
      gradient: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
      shadow: '0 4px 16px rgba(255,107,0,0.3)',
    },
    {
      icon: '🎙️',
      label: strings.voiceSearch,
      sub: strings.voiceSearchSub,
      gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
      shadow: '0 4px 16px rgba(124,58,237,0.3)',
    },
    {
      icon: '🔍',
      label: strings.searchEquipment,
      sub: strings.searchEquipmentSub,
      gradient: 'linear-gradient(135deg, var(--green), var(--green-light))',
      shadow: '0 4px 16px rgba(26,122,59,0.3)',
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:46</span>
            <div className="text-[11px]">🔋</div>
          </div>

          {/* Dimmed background content - simulating the dashboard behind */}
          <div className="flex-1 relative">
            {/* Dimmed overlay */}
            <div className="absolute inset-0 z-10" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />

            {/* Simulated dashboard content (dimmed) */}
            <div className="px-4 pt-4 opacity-30">
              <div className="h-[120px] rounded-[20px] mb-4" style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)' }} />
              <div className="h-[60px] rounded-[16px] bg-white mb-3" style={{ boxShadow: 'var(--card-shadow)' }} />
              <div className="h-[80px] rounded-[16px] bg-white" style={{ boxShadow: 'var(--card-shadow)' }} />
            </div>

            {/* FAB Menu - positioned from bottom */}
            <div className="absolute bottom-4 right-4 left-4 z-20 flex flex-col items-end gap-3">
              {/* Menu Items */}
              <div
                className="w-full rounded-[20px] p-4 overflow-hidden"
                style={{
                  background: 'white',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
                  border: '1px solid rgba(255,255,255,0.5)'
                }}
              >
                <div
                  className="text-[11px] font-bold mb-3 tracking-wide uppercase"
                  style={{ color: 'var(--text-soft)', letterSpacing: '1px' }}
                >
                  {strings.quickActions}
                </div>

                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className="ky-tap-cta-primary flex items-center gap-3 p-3 rounded-[14px] transition-all active:scale-[0.98]"
                      style={{ background: '#FAFAF8', border: '1px solid #F0EDE7' }}
                    >
                      <div
                        className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[20px] flex-shrink-0"
                        style={{ background: item.gradient, boxShadow: item.shadow }}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                          {item.label}
                        </div>
                        <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                          {item.sub}
                        </div>
                      </div>
                      <div className="text-[14px]" style={{ color: 'var(--text-soft)' }}>›</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close FAB (X icon replacing +) */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white self-end mr-1"
                style={{
                  background: 'linear-gradient(135deg, #E05500, var(--saffron))',
                  boxShadow: '0 4px 16px rgba(255,107,0,0.4)',
                  transform: 'rotate(45deg)'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <FarmerBottomNav activeTab="home" />

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
