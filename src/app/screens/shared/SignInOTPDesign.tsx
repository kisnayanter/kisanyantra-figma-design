import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language';

export function SignInOTPDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    step: t({
      english: 'Step 2 of 2 · Verify OTP',
      hindi: 'चरण 2 / 2 · ओटीपी सत्यापन',
      tamil: 'படி 2 / 2 · ஓடிபி சரிபார்ப்பு',
      marathi: 'दुसरा टप्पा (२ मधून) · ओटीपी पडताळणी'
    }),
    heading: t({
      english: 'Verify OTP Code',
      hindi: 'ओटीपी कोड सत्यापित करें',
      tamil: 'OTP குறியீட்டை சரிபார்க்கவும்',
      marathi: 'ओटीपी कोड पडताळा'
    }),
    sentInfo: t({
      english: '📱 We sent a 6-digit code to',
      hindi: '📱 हमने 6-अंकों का कोड भेजा है',
      tamil: '📱 6 இலக்க குறியீட்டை அனுப்பியுள்ளோம்',
      marathi: '📱 आम्ही 6 अंकी कोड पाठवला आहे'
    }),
    editHint: t({
      english: 'Tap boxes to edit with your keyboard',
      hindi: 'कीबोर्ड से भरने के लिए बॉक्स पर टैप करें',
      tamil: 'விசைப்பலகையில் உள்ளிட பெட்டியைத் தொடுக',
      marathi: 'कीबोर्डने संपादित करण्यासाठी चौकटींवर टॅप करा'
    }),
    editHintShort: t({
      english: 'Tap boxes',
      hindi: 'बॉक्स टैप करें',
      tamil: 'பெட்டியைத் தொடுக',
      marathi: 'चौकटी टॅप करा'
    }),
    noCode: t({
      english: "Didn't receive code?",
      hindi: 'कोड नहीं मिला?',
      tamil: 'குறியீடு கிடைக்கவில்லையா?',
      marathi: 'कोड मिळाला नाही?'
    }),
    resend: t({
      english: 'Resend OTP (0:28)',
      hindi: 'ओटीपी दोबारा भेजें (0:28)',
      tamil: 'OTP மீண்டும் அனுப்பவும் (0:28)',
      marathi: 'ओटीपी परत पाठवा (0:28)'
    }),
    verify: t({
      english: 'Verify & Sign In',
      hindi: 'सत्यापित करें और साइन इन करें',
      tamil: 'சரிபார்த்து உள்நுழையவும்',
      marathi: 'पडताळा आणि साइन इन करा'
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
                {strings.step}
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <motion.div
                  animate={{ translateY: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-[28px]"
                  style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }}
                >
                  🔐
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
                {strings.heading}
              </div>
            </div>
          </div>

          {/* OTP Verification Content */}
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

              {/* Phone Number Display */}
              <div className="mb-5">
                <div className="text-center mb-3">
                  <div className="text-[12px]" style={{ color: 'var(--text-soft)' }}>
                    {strings.sentInfo}
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-[16px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                      🇮🇳 +91 *****-6789
                    </span>
                    <button className="text-[11px] font-medium" style={{ color: 'var(--saffron)' }}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              {/* OTP Input Boxes */}
              <div className="mb-5">
                <div className="flex justify-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5, 6].map((digit) => (
                    <div
                      key={digit}
                      className="w-12 h-14 rounded-[12px] border-2 flex items-center justify-center"
                      style={{
                        borderColor: digit <= 3 ? 'var(--saffron)' : '#E6E1D8',
                        background: digit <= 3 ? 'rgba(255,139,56,0.05)' : '#FFF'
                      }}
                    >
                      <span className="text-[20px] font-bold" style={{ color: 'var(--text-dark)' }}>
                        {digit <= 3 ? digit : ''}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-[11px]" style={{ color: 'var(--text-hint)' }}>
                    {strings.editHintShort}
                  </div>
                </div>
              </div>

              {/* Verify Button */}
              <button
                className="ky-tap-cta-primary w-full rounded-[14px] py-[12px] font-bold text-[14px] text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
                  boxShadow: '0 4px 16px rgba(255,107,0,0.3)'
                }}
              >
                {strings.verify}
              </button>
            </div>

            {/* Resend Section */}
            <div className="text-center mt-4">
              <div className="text-[12px]" style={{ color: 'var(--text-soft)' }}>
                {strings.noCode}
              </div>
              <button
                className="ky-tap-link text-[11px] font-medium mt-1"
                style={{ color: 'var(--saffron)' }}
              >
                {strings.resend}
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
