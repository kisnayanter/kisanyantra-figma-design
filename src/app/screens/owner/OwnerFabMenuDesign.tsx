import { useState } from 'react';
import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function OwnerFabMenuDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);
  // Toggle to preview both FAB states in the prototype
  const [hasPaymentMethods, setHasPaymentMethods] = useState(false);

  const strings = {
    addEquipment: t({ english: 'Add Equipment', hindi: 'उपकरण जोड़ें', tamil: 'உபகரணம் சேர்', marathi: 'उपकरण जोडा' }),
    addEquipmentSub: t({ english: 'List new equipment for rent', hindi: 'किराये पर नया उपकरण सूचीबद्ध करें', tamil: 'வாடகைக்கு புதிய உபகரணம் பட்டியலிடு', marathi: 'भाड्याने नवीन उपकरण यादी करा' }),
    viewOpportunities: t({ english: 'View Opportunities', hindi: 'अवसर देखें', tamil: 'வாய்ப்புகளை பார்', marathi: 'संधी पहा' }),
    viewOpportunitiesSub: t({ english: 'Farmers looking for equipment', hindi: 'उपकरण ढूंढ रहे किसान', tamil: 'உபகரணம் தேடும் விவசாயிகள்', marathi: 'उपकरण शोधणारे शेतकरी' }),
    manageBookings: t({ english: 'Manage Bookings', hindi: 'बुकिंग प्रबंधित करें', tamil: 'முன்பதிவுகளை நிர்வகி', marathi: 'बुकिंग व्यवस्थापित करा' }),
    manageBookingsSub: t({ english: 'View incoming requests', hindi: 'आने वाले अनुरोध देखें', tamil: 'வரும் கோரிக்கைகளை பார்', marathi: 'येणारे अनुरोध पहा' }),
    paymentProfile: t({ english: 'Payment Profile', hindi: 'भुगतान प्रोफ़ाइल', tamil: 'கட்டண சுயவிவரம்', marathi: 'पेमेंट प्रोफाइल' }),
    paymentProfileSub: t({ english: 'Manage UPI, Bank & QR', hindi: 'UPI, बैंक और QR प्रबंधित करें', tamil: 'UPI, வங்கி & QR நிர்வகி', marathi: 'UPI, बँक आणि QR व्यवस्थापित करा' }),
    paymentProfileSubActive: t({ english: '📱 UPI · 🏦 Bank  ·  Active', hindi: '📱 UPI · 🏦 बैंक  ·  सक्रिय', tamil: '📱 UPI · 🏦 வங்கி  ·  செயலில்', marathi: '📱 UPI · 🏦 बँक  ·  सक्रिय' }),
    quickActions: t({ english: 'Quick Actions', hindi: 'त्वरित कार्य', tamil: 'விரைவு செயல்கள்', marathi: 'जलद कृती' }),
    setupRequired: t({ english: '⚠ SETUP', hindi: '⚠ सेटअप', tamil: '⚠ அமை', marathi: '⚠ सेटअप' }),
    activeStatus: t({ english: '✓ ACTIVE', hindi: '✓ सक्रिय', tamil: '✓ செயலில்', marathi: '✓ सक्रिय' }),
    toggleLabel: t({ english: 'Toggle payment state →', hindi: 'पेमेंट स्थिति बदलें →', tamil: 'கட்டண நிலை மாற்று →', marathi: 'पेमेंट स्थिती बदला →' }),
  };

  const menuItems = [
    {
      icon: '🚜',
      label: strings.addEquipment,
      sub: strings.addEquipmentSub,
      gradient: 'linear-gradient(135deg, var(--green), var(--green-light))',
      shadow: '0 4px 16px rgba(26,122,59,0.3)',
      badge: null,
    },
    {
      icon: '💰',
      label: strings.viewOpportunities,
      sub: strings.viewOpportunitiesSub,
      gradient: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
      shadow: '0 4px 16px rgba(255,107,0,0.3)',
      badge: '5 NEW',
    },
    {
      icon: '📋',
      label: strings.manageBookings,
      sub: strings.manageBookingsSub,
      gradient: 'linear-gradient(135deg, #0088CC, #00AAFF)',
      shadow: '0 4px 16px rgba(0,136,204,0.3)',
      badge: '3',
    },
    {
      icon: '💳',
      label: strings.paymentProfile,
      sub: hasPaymentMethods ? strings.paymentProfileSubActive : strings.paymentProfileSub,
      gradient: 'linear-gradient(135deg, var(--green), var(--green-light))',
      shadow: '0 4px 16px rgba(26,122,59,0.3)',
      badge: hasPaymentMethods ? strings.activeStatus : strings.setupRequired,
      isPayment: true,
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
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Dimmed background content */}
          <div className="flex-1 relative">
            {/* Dimmed overlay */}
            <div className="absolute inset-0 z-10" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />

            {/* Simulated dashboard content (dimmed) */}
            <div className="px-4 pt-4 opacity-30">
              <div className="h-[120px] rounded-[20px] mb-4" style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))' }} />
              <div className="h-[60px] rounded-[16px] bg-white mb-3" style={{ boxShadow: 'var(--card-shadow)' }} />
              <div className="h-[80px] rounded-[16px] bg-white" style={{ boxShadow: 'var(--card-shadow)' }} />
            </div>

            {/* FAB Menu */}
            <div className="absolute bottom-4 right-4 left-4 z-20 flex flex-col items-end gap-3">
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
                        <div className="flex items-center gap-2">
                          <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                            {item.label}
                          </div>
                          {item.badge && (
                            <span
                              className="px-1.5 py-0.5 rounded-md text-[8px] font-bold text-white"
                              style={{
                                background: typeof item.badge === 'string' && item.badge.startsWith('⚠')
                                  ? '#D97706'
                                  : typeof item.badge === 'string' && item.badge.startsWith('✓')
                                  ? 'var(--green)'
                                  : 'var(--saffron)'
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
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

              {/* Prototype toggle: switch payment state */}
              <div
                className="ky-tap-link w-full text-center text-[9px] py-1 rounded-[10px]"
                style={{ background: 'rgba(26,122,59,0.08)', color: 'var(--green)', fontFamily: 'Inter, sans-serif' }}
                onClick={() => setHasPaymentMethods(v => !v)}
              >
                {strings.toggleLabel} {hasPaymentMethods ? '(has methods)' : '(no methods)'}
              </div>

              {/* Close FAB (X icon replacing +) */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white self-end mr-1"
                style={{
                  background: 'linear-gradient(135deg, #0D5C2E, var(--green))',
                  boxShadow: '0 4px 16px rgba(26,122,59,0.4)',
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
          <OwnerBottomNav activeTab="home" />

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
