import { useLanguage } from '../../contexts/language';

export function OwnerOTPVerificationDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
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
    keyboardHelper: t({
      english: 'Your phone keyboard will appear automatically when you tap any box',
      hindi: 'किसी बॉक्स पर टैप करते ही फोन का कीबोर्ड खुल जाएगा',
      tamil: 'பெட்டியைத் தொட்டவுடன் உங்கள் போன் விசைப்பலகை தானாக திறக்கும்',
      marathi: 'कोणत्याही चौकटीवर टॅप करताच फोनचे कीबोर्ड उघडेल'
    }),
    button: t({
      english: '✓ Verify & Continue',
      hindi: '✓ सत्यापित करें और आगे बढ़ें',
      tamil: '✓ சரிபார்த்து தொடரவும்',
      marathi: '✓ पडताळा आणि पुढे जा'
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
            <span className="font-bold text-[11px]">9:43</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Green Theme for Owner */}
          <div 
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--green-primary) 0%, var(--green-light) 100%)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.heading}
                </div>
              </div>
            </div>
          </div>

          {/* OTP Card - Responsive Layout */}
          <div className="flex-1 px-5 pb-5 -mt-4">
            <div className="min-h-full flex flex-col justify-center py-4">
              <div className="bg-white rounded-[20px] p-5 mb-4" style={{ boxShadow: 'var(--card-shadow-green)' }}>
                <div className="text-center mb-4">
                  <div className="text-[12px] mb-1" style={{ color: 'var(--text-soft)' }}>
                    {strings.sentInfo}
                  </div>
                  <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    +91 98765 43210
                  </div>
                </div>

                {/* OTP Boxes - Green Theme */}
                <div className="flex gap-2 justify-center mb-5">
                  {[5, 4, 7, 2, 8, 3].map((digit, i) => (
                    <div
                      key={i}
                      className="w-11 h-12 rounded-xl flex items-center justify-center text-[20px] font-bold"
                      style={{
                        background: 'var(--green-pale)',
                        border: '2px solid var(--green-primary)',
                        boxShadow: '0 2px 8px rgba(26,122,59,0.15)',
                        color: 'var(--text-dark)'
                      }}
                    >
                      {digit}
                    </div>
                  ))}
                </div>

                {/* Info Text */}
                <div className="text-center">
                  <div className="text-[11px] mb-2" style={{ color: 'var(--text-soft)' }}>
                    {strings.editHint}<br />
                    {strings.editHintShort}
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    {strings.noCode}
                  </div>
                  <button
                    className="ky-tap-link text-[12px] font-bold mt-1"
                    style={{ color: 'var(--green-primary)' }}
                  >
                    {strings.resend}
                  </button>
                </div>
              </div>

              {/* Keyboard Hint Card */}
              <div 
                className="rounded-[16px] p-4"
                style={{ background: '#F5F2ED', border: '1px solid #E8E3DA' }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">⌨️</div>
                  <div className="text-[11px] leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                    {strings.keyboardHelper}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Button - Green Theme */}
          <div className="px-5 pb-5">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[15px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green-primary), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              {strings.button}
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
