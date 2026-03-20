import { useLanguage } from '../../contexts/language';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function FarmerProfileViewDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    myProfile: t({ english: 'My Profile', hindi: 'मेरी प्रोफ़ाइल', tamil: 'என் சுயவிவரம்', marathi: 'माझे प्रोफाइल' }),
    verified: t({ english: 'Verified', hindi: 'सत्यापित', tamil: 'சரிபார்க்கப்பட்டது', marathi: 'सत्यापित' }),
    location: t({ english: 'Hinganghat, Wardha, Maharashtra', hindi: 'हिंगणघाट, वर्धा, महाराष्ट्र', tamil: 'ஹிங்கங்காட், வர்தா, மகாராஷ்டிரா', marathi: 'हिंगणघाट, वर्धा, महाराष्ट्र' }),
    memberSince: t({ english: 'Member since March 2025', hindi: 'मार्च 2025 से सदस्य', tamil: 'மார்ச் 2025 முதல் உறுப்பினர்', marathi: 'मार्च 2025 पासून सदस्य' }),
    bookings: t({ english: 'Bookings', hindi: 'बुकिंग', tamil: 'முன்பதிவுகள்', marathi: 'बुकिंग' }),
    requests: t({ english: 'Requests', hindi: 'अनुरोध', tamil: 'கோரிக்கைகள்', marathi: 'विनंत्या' }),
    rating: t({ english: 'Rating', hindi: 'रेटिंग', tamil: 'மதிப்பீடு', marathi: 'रेटिंग' }),
    editProfile: t({ english: 'Edit Profile', hindi: 'प्रोफ़ाइल संपादित करें', tamil: 'சுயவிவரத்தைத் திருத்து', marathi: 'प्रोफाइल संपादित करा' }),
    myRequests: t({ english: 'My Requests', hindi: 'मेरे अनुरोध', tamil: 'என் கோரிக்கைகள்', marathi: 'माझ्या विनंत्या' }),
    active: t({ english: 'active', hindi: 'सक्रिय', tamil: 'செயலில்', marathi: 'सक्रिय' }),
    myBookings: t({ english: 'My Bookings', hindi: 'मेरी बुकिंग', tamil: 'என் முன்பதிவுகள்', marathi: 'माझ्या बुकिंग' }),
    myReviews: t({ english: 'My Reviews', hindi: 'मेरी समीक्षाएं', tamil: 'என் மதிப்புரைகள்', marathi: 'माझी पुनरावलोकने' }),
    notificationSettings: t({ english: 'Notification Settings', hindi: 'सूचना सेटिंग्स', tamil: 'அறிவிப்பு அமைப்புகள்', marathi: 'सूचना सेटिंग्ज' }),
    language: t({ english: 'Language', hindi: 'भाषा', tamil: 'மொழி', marathi: 'भाषा' }),
    helpSupport: t({ english: 'Help & Support', hindi: 'सहायता और समर्थन', tamil: 'உதவி & ஆதரவு', marathi: 'मदत आणि समर्थन' }),
    switchToOwner: t({ english: 'Switch to Owner Mode', hindi: 'मालिक मोड पर स्विच करें', tamil: 'உரிமையாளர் பயன்முறைக்கு மாறவும்', marathi: 'मालक मोडवर स्विच करा' }),
    logOut: t({ english: 'Log Out', hindi: 'लॉग आउट', tamil: 'வெளியேறு', marathi: 'लॉग आउट' }),
    english: t({ english: 'English', hindi: 'English', tamil: 'English', marathi: 'English' }),
  };

  const menuItems = [
    { icon: '👤', label: strings.editProfile, badge: null },
    { icon: '📋', label: strings.myRequests, badge: `2 ${strings.active}` },
    { icon: '📅', label: strings.myBookings, badge: `1 ${strings.active}` },
    { icon: '⭐', label: strings.myReviews, badge: null },
    { icon: '🔔', label: strings.notificationSettings, badge: null },
    { icon: '🌐', label: strings.language, badge: strings.english },
    { icon: '❓', label: strings.helpSupport, badge: null },
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

          {/* Saffron Header - Shorter */}
          <div
            className="px-5 pt-4 pb-[50px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="text-center relative z-10">
              <div
                className="text-white text-[18px] font-bold"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                {strings.myProfile}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">
            {/* Profile Card */}
            <div className="bg-white rounded-[20px] p-4 mb-4 text-center" style={{ boxShadow: 'var(--card-shadow)' }}>
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white text-[20px] font-bold"
                style={{
                  background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)',
                  fontFamily: "'Baloo 2', cursive"
                }}
              >
                RK
              </div>
              <div
                className="text-[16px] font-bold mt-2"
                style={{ color: 'var(--text-dark)', fontFamily: "'Baloo 2', cursive" }}
              >
                Ramu Kisan
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <span className="text-[12px]" style={{ color: 'var(--text-mid)' }}>+91 98765 43210</span>
                <span
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white"
                  style={{ background: 'var(--green)', fontSize: '9px' }}
                >
                  ✓ {strings.verified}
                </span>
              </div>
              <div className="text-[11px] mt-1.5" style={{ color: 'var(--text-soft)' }}>
                📍 {strings.location}
              </div>
              <div className="text-[10px] mt-1" style={{ color: 'var(--text-soft)' }}>
                {strings.memberSince}
              </div>
            </div>

            {/* Stats Row */}
            <div className="bg-white rounded-[20px] p-4 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex">
                <div className="flex-1 text-center" style={{ borderRight: '1px solid #F0EDE7' }}>
                  <div className="text-[18px] font-bold" style={{ color: 'var(--saffron)' }}>3</div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.bookings}</div>
                </div>
                <div className="flex-1 text-center" style={{ borderRight: '1px solid #F0EDE7' }}>
                  <div className="text-[18px] font-bold" style={{ color: 'var(--saffron)' }}>2</div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.requests}</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-[18px] font-bold" style={{ color: 'var(--saffron)' }}>4.8★</div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.rating}</div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="bg-white rounded-[20px] overflow-hidden mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              {menuItems.map((item, idx) => (
                <div
                  key={item.label}
                  className="flex items-center px-4 py-3 cursor-pointer"
                  style={{ borderBottom: idx < menuItems.length - 1 ? '1px solid #F5F2ED' : 'none' }}
                >
                  <span className="text-[14px] mr-3">{item.icon}</span>
                  <span className="flex-1 text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {item.label}
                  </span>
                  {item.badge && (
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full mr-2 text-white"
                      style={{ background: 'var(--saffron)' }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <span className="text-[12px]" style={{ color: 'var(--text-soft)' }}>→</span>
                </div>
              ))}
            </div>

            {/* Switch to Owner Mode */}
            <button
              className="w-full rounded-[16px] py-3 text-[13px] font-bold mb-3"
              style={{
                color: 'var(--green)',
                background: 'transparent',
                border: '2px solid var(--green)',
              }}
            >
              🚜 {strings.switchToOwner}
            </button>

            {/* Log Out */}
            <button
              className="w-full text-center text-[13px] font-semibold mb-2"
              style={{ color: '#D32F2F', background: 'transparent', border: 'none' }}
            >
              {strings.logOut}
            </button>

            {/* App Version */}
            <div className="text-center text-[9px] mb-2" style={{ color: 'var(--text-soft)' }}>
              KisanYantra v1.0.0
            </div>
          </div>

          {/* Bottom Nav */}
          <FarmerBottomNav activeTab="profile" />

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
