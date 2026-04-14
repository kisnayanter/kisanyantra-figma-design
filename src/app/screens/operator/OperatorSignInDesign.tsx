import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language';

export function OperatorSignInDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    welcomeBack: t({
      english: 'Operator Login',
      hindi: 'ऑपरेटर लॉगिन',
      tamil: 'ஆபரேட்டர் உள்நுழைவு',
      marathi: 'ऑपरेटर लॉगिन'
    }),
    tagline: t({
      english: 'Sign in to manage your assigned equipment and bookings',
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
    noAccount: t({
      english: "Don't have an account? Register",
      hindi: 'खाता नहीं है? रजिस्टर करें',
      tamil: 'கணக்கு இல்லையா? பதிவுசெய்யவும்',
      marathi: 'खाते नाही? नोंदणी करा'
    }),
    trusted: t({
      english: '2,500+ operators trust KisanYantra',
      hindi: '2,500+ ऑपरेटर KisanYantra पर भरोसा करते हैं',
      tamil: '2,500+ ஆபரேட்டர்கள் KisanYantra ஐ நம்புகிறார்கள்',
      marathi: '2,500+ ऑपरेटर KisanYantra वर विश्वास ठेवतात'
    })
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={interFont}>9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Hero Header */}
          <div
            className="px-5 pt-5 pb-8 rounded-b-[32px] relative overflow-hidden"
            style={{ background: 'var(--gradient-operator)' }}
          >
            {/* Background decorative circles */}
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
                  ⚙️
                </motion.div>
                <div
                  className="text-white text-[28px] font-extrabold"
                  style={poppinsFont}
                >
                  KisanYantra
                </div>
              </div>
              <div
                className="text-[13px]"
                style={{ color: 'rgba(255,255,255,0.85)', ...interFont }}
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
                border: '2px solid var(--operator-blue)'
              }}
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--gradient-operator)' }} />

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
                className="w-full rounded-[14px] py-[12px] font-bold text-[14px] text-white"
                style={{
                  background: 'var(--gradient-operator)',
                  boxShadow: '0 4px 16px rgba(47,128,255,0.3)',
                  ...poppinsFont
                }}
              >
                {strings.sendOtp}
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center mt-4">
              <button
                className="text-[11px] font-medium transition-colors hover:underline"
                style={{ color: 'var(--operator-blue)', ...interFont }}
              >
                {strings.noAccount}
              </button>
            </div>

            {/* Trust Badge */}
            <div className="text-center mt-6">
              <div
                className="inline-block rounded-full px-4 py-2 text-[11px] font-semibold"
                style={{ background: 'var(--operator-blue-pale)', color: 'var(--operator-blue)' }}
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
