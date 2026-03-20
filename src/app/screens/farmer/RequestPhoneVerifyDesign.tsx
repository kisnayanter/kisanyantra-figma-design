import { useLanguage } from '../../contexts/language';

export function RequestPhoneVerifyDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    eyebrow: t({
      english: 'Almost there!',
      hindi: 'बस एक कदम और!',
      tamil: 'கிட்டத்தட்ட முடிந்தது!',
      marathi: 'जवळजवळ झालं!'
    }),
    heading: t({
      english: 'Verify Your Number',
      hindi: 'अपना नंबर सत्यापित करें',
      tamil: 'உங்கள் எண்ணை சரிபார்க்கவும்',
      marathi: 'तुमचा नंबर पडताळा'
    }),
    why: t({
      english: 'We need your phone number so equipment owners can contact you about your request',
      hindi: 'हमें आपका फ़ोन नंबर चाहिए ताकि उपकरण मालिक आपके अनुरोध के बारे में संपर्क कर सकें',
      tamil: 'உபகரண உரிமையாளர்கள் உங்கள் கோரிக்கை குறித்து தொடர்புகொள்ள உங்கள் தொலைபேசி எண் தேவை',
      marathi: 'उपकरण मालक तुमच्या विनंतीबद्दल संपर्क करू शकतील म्हणून तुमचा फोन नंबर हवा आहे'
    }),
    phoneLabel: t({
      english: 'Phone Number',
      hindi: 'फ़ोन नंबर',
      tamil: 'தொலைபேசி எண்',
      marathi: 'फोन क्रमांक'
    }),
    sendOtp: t({
      english: 'Send OTP →',
      hindi: 'ओटीपी भेजें →',
      tamil: 'OTP அனுப்பவும் →',
      marathi: 'ओटीपी पाठवा →'
    }),
    whatsapp: t({
      english: 'Also notify me on WhatsApp',
      hindi: 'WhatsApp पर भी सूचना दें',
      tamil: 'WhatsApp இலும் தெரிவிக்கவும்',
      marathi: 'WhatsApp वर सुद्धा कळवा'
    }),
    secure: t({
      english: 'Your number is only shared with owners who respond to your request',
      hindi: 'आपका नंबर केवल उन मालिकों से साझा किया जाएगा जो आपके अनुरोध का जवाब देंगे',
      tamil: 'உங்கள் எண் உங்கள் கோரிக்கைக்கு பதிலளிக்கும் உரிமையாளர்களுடன் மட்டுமே பகிரப்படும்',
      marathi: 'तुमचा नंबर फक्त तुमच्या विनंतीला प्रतिसाद देणाऱ्या मालकांशी शेअर केला जाईल'
    }),
    requestSummary: t({
      english: 'Your Request Summary',
      hindi: 'आपके अनुरोध का सारांश',
      tamil: 'உங்கள் கோரிக்கை சுருக்கம்',
      marathi: 'तुमच्या विनंतीचा सारांश'
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
            <span className="font-bold text-[11px]">9:48</span>
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

            {/* Progress steps */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full" style={{ background: 'white' }} />
              <div className="flex-1 h-1.5 rounded-full" style={{ background: 'white' }} />
              <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Why we need your number */}
            <div
              className="rounded-[18px] p-4 mb-3 flex items-start gap-3"
              style={{ background: 'var(--saffron-pale)', border: '1.5px solid rgba(255,107,0,0.15)' }}
            >
              <div className="text-[20px] flex-shrink-0">🔒</div>
              <div className="text-[11px] leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                {strings.why}
              </div>
            </div>

            {/* Request summary preview */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.requestSummary}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-[12px] flex items-center justify-center text-[20px]"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  🚜
                </div>
                <div>
                  <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    {t({ english: 'Tractor · 50 HP', hindi: 'ट्रैक्टर · 50 HP', tamil: 'டிராக்டர் · 50 HP', marathi: 'ट्रॅक्टर · 50 HP' })}
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-mid)' }}>
                    {t({ english: 'Mar 15–17 · Hinganghat', hindi: 'मार्च 15–17 · हिंगणघाट', tamil: 'மார்ச் 15–17 · ஹிங்கன்காட்', marathi: 'मार्च 15–17 · हिंगणघाट' })}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Input Card */}
            <div className="bg-white rounded-[18px] p-4 mb-3" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                📱 {strings.phoneLabel}
              </div>
              <div
                className="rounded-xl p-3 flex items-center gap-[10px] mb-3"
                style={{ background: 'var(--cream)', border: '2px solid var(--saffron)' }}
              >
                <span className="font-bold text-[13px]" style={{ color: 'var(--text-mid)' }}>+91</span>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  value="98765 43210"
                  readOnly
                  className="flex-1 text-[13px] font-semibold tracking-wide bg-transparent outline-none"
                  style={{ color: 'var(--text-dark)' }}
                />
              </div>

              {/* WhatsApp opt-in */}
              <div className="flex items-center gap-2">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center text-[10px]"
                  style={{ background: '#25D366', color: 'white' }}
                >
                  ✓
                </div>
                <div className="text-[11px] font-medium" style={{ color: 'var(--text-mid)' }}>
                  {strings.whatsapp}
                </div>
              </div>
            </div>

            {/* Security note */}
            <div
              className="rounded-[14px] p-3 flex items-center gap-3"
              style={{ background: 'var(--green-pale)', border: '1px solid rgba(31,122,76,0.12)' }}
            >
              <div className="text-[16px]">🛡️</div>
              <div className="text-[10px] leading-relaxed" style={{ color: 'var(--green)' }}>
                {strings.secure}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-5 pb-5">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[15px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
                boxShadow: '0 4px 20px rgba(255,107,0,0.35)'
              }}
            >
              {strings.sendOtp}
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
