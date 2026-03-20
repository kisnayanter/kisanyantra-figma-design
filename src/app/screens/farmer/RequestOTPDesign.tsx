import { useLanguage } from '../../contexts/language';

export function RequestOTPDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    eyebrow: t({
      english: 'Last step!',
      hindi: 'आखिरी चरण!',
      tamil: 'கடைசி படி!',
      marathi: 'शेवटचा टप्पा!'
    }),
    heading: t({
      english: 'Enter OTP',
      hindi: 'ओटीपी दर्ज करें',
      tamil: 'OTP உள்ளிடவும்',
      marathi: 'ओटीपी प्रविष्ट करा'
    }),
    sentTo: t({
      english: 'We sent a 6-digit code to',
      hindi: 'हमने 6-अंकों का कोड भेजा है',
      tamil: '6 இலக்க குறியீட்டை அனுப்பினோம்',
      marathi: 'आम्ही 6 अंकी कोड पाठवला आहे'
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
      english: '✓ Verify & Post Request',
      hindi: '✓ सत्यापित करें और अनुरोध पोस्ट करें',
      tamil: '✓ சரிபார்த்து கோரிக்கை பதிவிடவும்',
      marathi: '✓ पडताळा आणि विनंती पोस्ट करा'
    }),
    autoRead: t({
      english: 'OTP will be auto-read from SMS',
      hindi: 'OTP SMS से अपने आप पढ़ा जाएगा',
      tamil: 'OTP SMS இலிருந்து தானாக படிக்கப்படும்',
      marathi: 'OTP SMS मधून आपोआप वाचले जाईल'
    }),
    requestReady: t({
      english: 'Your request is ready to go!',
      hindi: 'आपका अनुरोध तैयार है!',
      tamil: 'உங்கள் கோரிக்கை தயார்!',
      marathi: 'तुमची विनंती तयार आहे!'
    }),
    willNotify: t({
      english: 'We\'ll notify owners within 25 km of Hinganghat',
      hindi: 'हम हिंगणघाट से 25 km के अंदर मालिकों को सूचित करेंगे',
      tamil: 'ஹிங்கன்காட்டில் இருந்து 25 km க்குள் உள்ள உரிமையாளர்களுக்கு தெரிவிப்போம்',
      marathi: 'आम्ही हिंगणघाट पासून 25 km आतील मालकांना सूचित करू'
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
            <span className="font-bold text-[11px]">9:49</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Saffron for farmer flow */}
          <div
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <button
                type="button"
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.4)' }}
              >
                ←
              </button>
              <div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {strings.eyebrow}
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.heading}
                </div>
              </div>
            </div>

            {/* Progress steps - all filled */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full" style={{ background: 'white' }} />
              <div className="flex-1 h-1.5 rounded-full" style={{ background: 'white' }} />
              <div className="flex-1 h-1.5 rounded-full" style={{ background: 'white' }} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* OTP Card */}
            <div className="bg-white rounded-[20px] p-5 mb-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-center mb-4">
                <div className="text-[12px] mb-1" style={{ color: 'var(--text-soft)' }}>
                  📱 {strings.sentTo}
                </div>
                <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                  +91 98765 43210
                </div>
              </div>

              {/* OTP Boxes */}
              <div className="flex gap-2 justify-center mb-4">
                {[5, 4, 7, 2, 8, 3].map((digit, i) => (
                  <div
                    key={i}
                    className="w-11 h-12 rounded-xl flex items-center justify-center text-[20px] font-bold"
                    style={{
                      background: 'var(--cream)',
                      border: '2px solid var(--saffron)',
                      boxShadow: '0 2px 8px rgba(255,107,0,0.15)',
                      color: 'var(--text-dark)'
                    }}
                  >
                    {digit}
                  </div>
                ))}
              </div>

              {/* Auto-read hint */}
              <div
                className="rounded-[12px] p-2.5 flex items-center gap-2 mb-4"
                style={{ background: 'var(--green-pale)' }}
              >
                <div className="text-[14px]">✨</div>
                <div className="text-[10px] font-medium" style={{ color: 'var(--green)' }}>
                  {strings.autoRead}
                </div>
              </div>

              {/* Resend */}
              <div className="text-center">
                <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                  {strings.noCode}
                </div>
                <button className="ky-tap-link text-[12px] font-bold mt-1" style={{ color: 'var(--saffron)' }}>
                  {strings.resend}
                </button>
              </div>
            </div>

            {/* Request ready card */}
            <div
              className="rounded-[16px] p-4"
              style={{ background: 'var(--saffron-pale)', border: '1.5px solid rgba(255,107,0,0.15)' }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[24px]">🎉</div>
                <div>
                  <div className="text-[13px] font-bold" style={{ color: 'var(--saffron)' }}>
                    {strings.requestReady}
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-mid)' }}>
                    {strings.willNotify}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-5 pb-5">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[15px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              {strings.verify}
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
