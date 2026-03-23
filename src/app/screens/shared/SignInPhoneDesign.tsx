import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language';

export function SignInPhoneDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    welcomeBack: t({
      english: 'Welcome Back',
      hindi: 'वापसी पर स्वागत है',
      tamil: 'மீண்டும் வருகிறீர்கள்',
      marathi: 'पुन्हा स्वागत आहे'
    }),
    tagline: t({
      english: 'Sign in to access your equipment and bookings',
      hindi: 'अपने उपकरणों और बुकिंग तक पहुंचने के लिए साइन इन करें',
      tamil: 'உங்கள் உபகரணங்கள் மற்றும் முன்பதிவுகளை அணுக உள்நுழையவும்',
      marathi: 'आपल्या उपकरणां आणि बुकिंगवर प्रवेश करण्यासाठी साइन इन करा'
    }),
    phoneLabel: t({
      english: 'Phone Number',
      hindi: 'फोन नंबर',
      tamil: 'தொலைபேசி எண்',
      marathi: 'फोन नंबर'
    }),
    phonePlaceholder: t({
      english: 'Enter your phone number',
      hindi: 'अपना फोन नंबर दर्ज करें',
      tamil: 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
      marathi: 'आपला फोन नंबर एंटर करा'
    }),
    sendOtp: t({
      english: 'Send OTP',
      hindi: 'OTP भेजें',
      tamil: 'OTP அனுப்பவும்',
      marathi: 'OTP पाठवा'
    }),
    trusted: t({
      english: '2,500+ farmers trust KisanYantra',
      hindi: '2,500+ किसान KisanYantra पर भरोसा करते हैं',
      tamil: '2,500+ விவசாயிகள் KisanYantra ஐ நம்புகிறார்கள்',
      marathi: '2,500+ शेतकरी KisanYantra वर विश्वास ठेवतात'
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:41</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Hero Header - Same as LandingHomeDesign */}
          <div
            className="px-5 pt-5 pb-8 rounded-b-[32px] relative overflow-hidden"
            style={{ background: 'linear-gradient(170deg, #FF6B00 0%, #E65100 55%, #1A7A3B 100%)' }}
          >
            {/* Background decorative circles - Same as LandingHomeDesign */}
            <div className="absolute w-[200px] h-[200px] rounded-full top-[-60px] right-[-60px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <div className="absolute w-[120px] h-[120px] rounded-full bottom-[-30px] left-[-20px]" style={{ background: 'rgba(255,255,255,0.05)' }} />

            <div className="relative z-10 text-center">
              <div className="text-[13px] mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {strings.welcomeBack}
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <motion.div
                  animate={{ translateY: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-[28px]"
                  style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }}
                >
                  🚜
                </motion.div>
                <div
                  className="text-white text-[28px] font-extrabold"
                  style={{ fontFamily: "'Baloo 2', cursive", letterSpacing: '-0.5px' }}
                >
                  KisanYantra
                </div>
              </div>
              <div
                className="text-[13px]"
                style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {strings.tagline}
              </div>
            </div>
          </div>

          {/* Sign-in Form */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            <div
              className="bg-white rounded-[20px] p-5 relative overflow-hidden"
              style={{
                boxShadow: 'var(--card-shadow)',
                border: '2px solid var(--saffron)'
              }}
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, var(--saffron), #FF8C38)' }} />

              {/* Phone Input */}
              <div className="mb-5">
                <div
                  className="text-[11px] font-semibold mb-2"
                  style={{ color: 'var(--text-soft)' }}
                >
                  {strings.phoneLabel}
                </div>
                <div
                  className="bg-white rounded-[16px] px-4 h-14 flex items-center gap-3 border border-gray-200"
                  style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                >
                  <span className="text-[14px] font-medium" style={{ color: 'var(--text-dark)' }}>
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    placeholder={strings.phonePlaceholder}
                    className="flex-1 text-[14px] outline-none bg-transparent"
                    style={{ color: 'var(--text-dark)' }}
                  />
                </div>
              </div>

              {/* Send OTP Button */}
              <button
                className="ky-tap-cta-primary w-full rounded-[14px] py-[12px] font-bold text-[14px] text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
                  boxShadow: '0 4px 16px rgba(255,107,0,0.3)'
                }}
              >
                {strings.sendOtp}
              </button>
            </div>

            
            {/* Trust Badge */}
            <div className="text-center mt-6">
              <div
                className="inline-block rounded-full px-4 py-2 text-[11px] font-semibold"
                style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
              >
                {strings.trusted}
              </div>
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
