import { useLanguage } from '../../contexts/language';

export function AppSettingsDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    settings: t({ english: 'Settings', hindi: 'सेटिंग्स', tamil: 'அமைப்புகள்', marathi: 'सेटिंग्ज' }),
    notifications: t({ english: 'Notifications', hindi: 'सूचनाएं', tamil: 'அறிவிப்புகள்', marathi: 'सूचना' }),
    pushNotifications: t({ english: 'Push Notifications', hindi: 'पुश सूचनाएं', tamil: 'புஷ் அறிவிப்புகள்', marathi: 'पुश सूचना' }),
    bookingUpdates: t({ english: 'Booking Updates', hindi: 'बुकिंग अपडेट', tamil: 'முன்பதிவு புதுப்பிப்புகள்', marathi: 'बुकिंग अपडेट्स' }),
    requestAlerts: t({ english: 'Request Alerts', hindi: 'अनुरोध अलर्ट', tamil: 'கோரிக்கை எச்சரிக்கைகள்', marathi: 'विनंती अलर्ट' }),
    promotional: t({ english: 'Promotional', hindi: 'प्रचार', tamil: 'விளம்பர', marathi: 'प्रचारात्मक' }),
    whatsappNotifications: t({ english: 'WhatsApp Notifications', hindi: 'व्हाट्सएप सूचनाएं', tamil: 'வாட்ஸ்அப் அறிவிப்புகள்', marathi: 'व्हाट्सअप सूचना' }),
    language: t({ english: 'Language', hindi: 'भाषा', tamil: 'மொழி', marathi: 'भाषा' }),
    account: t({ english: 'Account', hindi: 'खाता', tamil: 'கணக்கு', marathi: 'खाते' }),
    phoneNumber: t({ english: 'Phone Number', hindi: 'फ़ोन नंबर', tamil: 'தொலைபேசி எண்', marathi: 'फोन नंबर' }),
    change: t({ english: 'Change', hindi: 'बदलें', tamil: 'மாற்றவும்', marathi: 'बदला' }),
    linkedAccounts: t({ english: 'Linked Accounts', hindi: 'लिंक किए गए खाते', tamil: 'இணைக்கப்பட்ட கணக்குகள்', marathi: 'लिंक केलेली खाती' }),
    dataPrivacy: t({ english: 'Data & Privacy', hindi: 'डेटा और गोपनीयता', tamil: 'தரவு & தனியுரிமை', marathi: 'डेटा आणि गोपनीयता' }),
    downloadData: t({ english: 'Download My Data', hindi: 'मेरा डेटा डाउनलोड करें', tamil: 'என் தரவைப் பதிவிறக்கவும்', marathi: 'माझा डेटा डाउनलोड करा' }),
    aboutApp: t({ english: 'About KisanYantra', hindi: 'KisanYantra के बारे में', tamil: 'KisanYantra பற்றி', marathi: 'KisanYantra बद्दल' }),
    terms: t({ english: 'Terms of Service', hindi: 'सेवा की शर्तें', tamil: 'சேவை விதிமுறைகள்', marathi: 'सेवा अटी' }),
    privacy: t({ english: 'Privacy Policy', hindi: 'गोपनीयता नीति', tamil: 'தனியுரிமைக் கொள்கை', marathi: 'गोपनीयता धोरण' }),
    rateApp: t({ english: 'Rate the App', hindi: 'ऐप रेट करें', tamil: 'ஆப்பை மதிப்பிடவும்', marathi: 'अॅप रेट करा' }),
    deleteAccount: t({ english: 'Delete Account', hindi: 'खाता हटाएं', tamil: 'கணக்கை நீக்கவும்', marathi: 'खाते हटवा' }),
    deleteWarning: t({ english: 'This will permanently delete your account and all data', hindi: 'यह आपके खाते और सभी डेटा को स्थायी रूप से हटा देगा', tamil: 'இது உங்கள் கணக்கையும் எல்லா தரவையும் நிரந்தரமாக நீக்கும்', marathi: 'हे तुमचे खाते आणि सर्व डेटा कायमचा हटवेल' }),
    footer: t({ english: 'Made with', hindi: 'बनाया गया', tamil: 'உருவாக்கப்பட்டது', marathi: 'बनवले' }),
    footerSuffix: t({ english: 'for Indian Farmers', hindi: 'भारतीय किसानों के लिए', tamil: 'இந்திய விவசாயிகளுக்காக', marathi: 'भारतीय शेतकऱ्यांसाठी' }),
  };

  const notificationToggles = [
    { label: strings.pushNotifications, on: true },
    { label: strings.bookingUpdates, on: true },
    { label: strings.requestAlerts, on: true },
    { label: strings.promotional, on: false },
    { label: strings.whatsappNotifications, on: true },
  ];

  const languageOptions = [
    { label: 'English', native: 'English', selected: true },
    { label: 'हिन्दी (Hindi)', native: 'हिन्दी', selected: false },
    { label: 'தமிழ் (Tamil)', native: 'தமிழ்', selected: false },
    { label: 'मराठी (Marathi)', native: 'मराठी', selected: false },
  ];

  const accountItems = [
    { label: strings.linkedAccounts },
    { label: strings.dataPrivacy },
    { label: strings.downloadData },
  ];

  const aboutItems = [
    { label: strings.aboutApp, icon: null },
    { label: strings.terms, icon: null },
    { label: strings.privacy, icon: null },
    { label: strings.rateApp, icon: '⭐' },
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
            <span className="font-bold text-[11px]">9:44</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Saffron Header */}
          <div
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div
                className="text-white text-[18px] font-bold"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                {strings.settings}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-5">
            {/* Notification Settings */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                🔔 {strings.notifications}
              </div>
              <div className="space-y-0">
                {notificationToggles.map((item, idx) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2.5"
                    style={{ borderBottom: idx < notificationToggles.length - 1 ? '1px solid #F5F2ED' : 'none' }}
                  >
                    <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                      {item.label}
                    </span>
                    <div
                      className="w-10 h-[22px] rounded-full relative cursor-pointer"
                      style={{ background: item.on ? 'var(--green)' : '#D1D5DB' }}
                    >
                      <div
                        className="absolute top-[2px] w-[18px] h-[18px] rounded-full bg-white"
                        style={{
                          left: item.on ? 'auto' : '2px',
                          right: item.on ? '2px' : 'auto',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Section */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                🌐 {strings.language}
              </div>
              <div className="space-y-0">
                {languageOptions.map((lang, idx) => (
                  <div
                    key={lang.label}
                    className="flex items-center justify-between py-2.5 cursor-pointer"
                    style={{ borderBottom: idx < languageOptions.length - 1 ? '1px solid #F5F2ED' : 'none' }}
                  >
                    <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                      {lang.label}
                    </span>
                    {lang.selected ? (
                      <span className="text-[14px]" style={{ color: 'var(--green)' }}>✓</span>
                    ) : (
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ border: '2px solid #D1D5DB' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Account Section */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                👤 {strings.account}
              </div>
              {/* Phone Number */}
              <div
                className="flex items-center justify-between py-2.5"
                style={{ borderBottom: '1px solid #F5F2ED' }}
              >
                <div>
                  <div className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {strings.phoneNumber}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    +91 98765 43210
                  </div>
                </div>
                <span className="text-[11px] font-semibold cursor-pointer" style={{ color: 'var(--saffron)' }}>
                  {strings.change}
                </span>
              </div>
              {/* Other account items */}
              {accountItems.map((item, idx) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-2.5 cursor-pointer"
                  style={{ borderBottom: idx < accountItems.length - 1 ? '1px solid #F5F2ED' : 'none' }}
                >
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {item.label}
                  </span>
                  <span className="text-[12px]" style={{ color: 'var(--text-soft)' }}>→</span>
                </div>
              ))}
            </div>

            {/* About Section */}
            <div className="bg-white rounded-[20px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              {aboutItems.map((item, idx) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-2.5 cursor-pointer"
                  style={{ borderBottom: idx < aboutItems.length - 1 ? '1px solid #F5F2ED' : 'none' }}
                >
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {item.icon ? `${item.icon} ${item.label}` : item.label}
                  </span>
                  <span className="text-[12px]" style={{ color: 'var(--text-soft)' }}>→</span>
                </div>
              ))}
            </div>

            {/* Danger Zone */}
            <div
              className="rounded-[20px] p-4 mb-3"
              style={{ background: '#FFF3F3', border: '1px solid #FFE0E0' }}
            >
              <button
                className="w-full rounded-[14px] py-2.5 text-[12px] font-bold mb-2"
                style={{
                  color: '#D32F2F',
                  background: 'transparent',
                  border: '1.5px solid #D32F2F',
                }}
              >
                {strings.deleteAccount}
              </button>
              <div className="text-[9px] text-center" style={{ color: '#D32F2F', opacity: 0.7 }}>
                {strings.deleteWarning}
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-[9px] py-2" style={{ color: 'var(--text-soft)' }}>
              KisanYantra v1.0.0 · {strings.footer} ❤️ {strings.footerSuffix}
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
