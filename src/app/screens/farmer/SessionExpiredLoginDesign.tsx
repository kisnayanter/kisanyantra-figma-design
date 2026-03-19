import { useLanguage } from '../../contexts/language';

export function SessionExpiredLoginDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    badge: t({
      english: 'Session expired',
      hindi: 'सत्र समाप्त',
      tamil: 'அமர்வு முடிந்தது',
      marathi: 'सत्राची मुदत संपली'
    }),
    heading: t({
      english: "Let’s get you back in",
      hindi: 'चलें, दोबारा लॉगिन करें',
      tamil: 'மீண்டும் உள்நுழைவோம்',
      marathi: 'चला पुन्हा लॉगिन करूया'
    }),
    subheading: t({
      english: 'Your security token expired. Confirm OTP to continue renting.',
      hindi: 'आपका सुरक्षा टोकन समाप्त हो गया है। किराये पर जारी रखने के लिए ओटीपी की पुष्टि करें।',
      tamil: 'உங்கள் பாதுகாப்பு டோக்கன் காலாவதியானது. வாடகையைத் தொடர OTP ஐ உறுதிப்படுத்துங்கள்.',
      marathi: 'तुमचा सुरक्षा टोकन कालबाह्य झाला. भाड्याने प्रक्रिया सुरू ठेवण्यासाठी ओटीपी पडताळा.'
    }),
    reasonTitle: t({
      english: 'Why this happened',
      hindi: 'ऐसा क्यों हुआ',
      tamil: 'ஏன் இது நடந்தது',
      marathi: 'हे का झाले'
    }),
    reasonText: t({
      english: 'We auto-log out after 12h of inactivity to protect accounts.',
      hindi: '12 घंटे की निष्क्रियता के बाद हम सुरक्षा हेतु स्वतः लॉगआउट करते हैं।',
      tamil: '12 மணி நேர செயலற்ற பின் கணக்கை பாதுகாக்க நாங்கள் தானாக வெளியேற்றுகிறோம்.',
      marathi: '12 तास निष्क्रिय राहिल्यावर आम्ही सुरक्षेसाठी स्वयंचलित लॉगआउट करतो.'
    }),
    lastActiveTitle: t({
      english: 'Last active',
      hindi: 'अंतिम गतिविधि',
      tamil: 'கடைசியாக செயல்பட்டது',
      marathi: 'शेवटचे सक्रिय'
    }),
    lastActiveValue: t({
      english: 'Today · 08:42 AM',
      hindi: 'आज · 08:42 सुबह',
      tamil: 'இன்று · 08:42 காலை',
      marathi: 'आज · सकाळी 08:42'
    }),
    phoneLabel: t({
      english: 'Registered mobile',
      hindi: 'पंजीकृत मोबाइल',
      tamil: 'பதிவுசெய்யப்பட்ட மொபைல்',
      marathi: 'नोंदणीकृत मोबाईल'
    }),
    changeNumber: t({
      english: 'Use a different number',
      hindi: 'दूसरा नंबर उपयोग करें',
      tamil: 'வேறு எண்ணைப் பயன்படுத்தவும்',
      marathi: 'इतर क्रमांक वापरा'
    }),
    roleLabel: t({
      english: 'Log back in as',
      hindi: 'इस रूप में लॉगिन करें',
      tamil: 'எந்த பாத்திரத்தில் மீண்டும் உள்நுழைவது',
      marathi: 'या भूमिकेत पुन्हा लॉगिन करा'
    }),
    farmerRole: t({
      english: 'Farmer',
      hindi: 'किसान',
      tamil: 'விவசாயி',
      marathi: 'शेतकरी'
    }),
    ownerRole: t({
      english: 'Equipment owner',
      hindi: 'उपकरण मालिक',
      tamil: 'உபகரண உரிமையாளர்',
      marathi: 'उपकरण मालक'
    }),
    sendOtp: t({
      english: 'Send OTP again',
      hindi: 'ओटीपी फिर भेजें',
      tamil: 'OTP ஐ மீண்டும் அனுப்பவும்',
      marathi: 'ओटीपी पुन्हा पाठवा'
    }),
    otpLabel: t({
      english: 'Enter OTP',
      hindi: 'ओटीपी दर्ज करें',
      tamil: 'OTP ஐ உள்ளிடவும்',
      marathi: 'ओटीपी प्रविष्ट करा'
    }),
    otpHelper: t({
      english: 'Auto-detects SMS on verified devices.',
      hindi: 'सत्यापित डिवाइस पर एसएमएस स्वतः पढ़ लिया जाएगा।',
      tamil: 'சரிபார்க்கப்பட்ட சாதனங்களில் SMS தானாக படிக்கப்படும்.',
      marathi: 'पडताळलेल्या उपकरणांवर एसएमएस आपोआप वाचला जाईल.'
    }),
    alreadyHave: t({
      english: 'Already received code?',
      hindi: 'क्या कोड मिल गया?',
      tamil: 'குறியீடு ஏற்கனவே கிடைத்ததா?',
      marathi: 'कोड आधीच आला का?'
    }),
    resendTimer: t({
      english: 'Resend in 00:24',
      hindi: '00:24 में दोबारा भेजें',
      tamil: '00:24 இல் மீண்டும் அனுப்பவும்',
      marathi: '00:24 मध्ये पुन्हा पाठवा'
    }),
    supportTitle: t({
      english: 'Need help?',
      hindi: 'मदद चाहिए?',
      tamil: 'உதவி வேண்டுமா?',
      marathi: 'मदत हवी आहे?'
    }),
    supportText: t({
      english: 'Talk to Kisan Mitra support or switch number.',
      hindi: 'किसान मित्र सपोर्ट से बात करें या नंबर बदलें।',
      tamil: 'கிசான் மித்ரா ஆதரவுடன் பேசவும் அல்லது எண்ணை மாற்றவும்.',
      marathi: 'किसान मित्र समर्थनाशी बोला किंवा क्रमांक बदला.'
    }),
    supportAction: t({
      english: 'Contact support →',
      hindi: 'सपोर्ट से संपर्क करें →',
      tamil: 'ஆதரவுடன் தொடர்பு கொள்ளவும் →',
      marathi: 'सपोर्टशी संपर्क करा →'
    }),
    securityNote: t({
      english: 'Your OTP stays on this device and is encrypted end-to-end.',
      hindi: 'आपका ओटीपी इसी डिवाइस पर रहता है और एंड-टू-एंड एन्क्रिप्टेड है।',
      tamil: 'உங்கள் OTP இந்த சாதனத்திலேயே உள்ளது, முடிவு முதல் முடிவு வரை குறியாக்கப்பட்டுள்ளது.',
      marathi: 'तुमचा ओटीपी या डिव्हाइसवरच राहतो आणि एंड-टू-एंड एन्क्रिप्टेड आहे.'
    })
  };

  const roleChips = [
    {
      id: 'farmer',
      label: strings.farmerRole,
      description: '🌾 +91 98765 43120',
      active: true,
      accent: 'var(--green)'
    },
    {
      id: 'owner',
      label: strings.ownerRole,
      description: '🚜 +91 99874 22011',
      active: false,
      accent: 'var(--saffron)'
    }
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative" style={{ background: '#F9F6F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:50</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="w-[220px] h-[220px] rounded-full" style={{ background: 'rgba(255,133,51,0.12)', filter: 'blur(40px)', position: 'absolute', top: '-30px', right: '-40px' }} />
            <div className="w-[260px] h-[260px] rounded-full" style={{ background: 'rgba(26,122,59,0.12)', filter: 'blur(50px)', position: 'absolute', bottom: '-60px', left: '-60px' }} />
          </div>

          <div className="flex flex-col h-full px-5 pb-5 relative z-10">
            {/* Header */}
            <div
              className="rounded-[24px] px-5 py-5 mb-4"
              style={{ background: 'linear-gradient(135deg, #FF8C38 0%, #FFB347 40%, #1A7A3B 100%)', boxShadow: '0 12px 24px rgba(255,140,56,0.25)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="px-3 py-1 rounded-full text-[11px] font-semibold" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  {strings.badge}
                </div>
                <div className="text-xs font-semibold text-white" style={{ letterSpacing: '1px' }}>
                  401 · JWT
                </div>
              </div>
              <div className="text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
                <div className="text-[24px] leading-snug font-bold">{strings.heading}</div>
                <p className="text-[13px] mt-1.5" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {strings.subheading}
                </p>
              </div>
            </div>

            {/* Info Row */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-[18px] p-3" style={{ background: 'white', boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[11px] font-semibold" style={{ color: 'var(--text-soft)' }}>
                  {strings.reasonTitle}
                </div>
                <p className="text-[12px] mt-1" style={{ color: 'var(--text-mid)' }}>
                  {strings.reasonText}
                </p>
              </div>
              <div className="rounded-[18px] p-3" style={{ background: '#F1F8F4', border: '1px solid rgba(26,122,59,0.15)' }}>
                <div className="text-[11px] font-semibold" style={{ color: 'var(--green)' }}>
                  {strings.lastActiveTitle}
                </div>
                <div className="text-[16px] font-bold mt-1" style={{ color: 'var(--text-dark)' }}>
                  {strings.lastActiveValue}
                </div>
              </div>
            </div>

            {/* Phone + Roles */}
            <div className="rounded-[22px] p-4 mb-4" style={{ background: 'white', boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    {strings.phoneLabel}
                  </div>
                  <div className="text-[16px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    +91 98765 43120
                  </div>
                </div>
                <button className="ky-tap-link text-[12px] font-semibold" style={{ color: 'var(--saffron)' }}>
                  {strings.changeNumber}
                </button>
              </div>

              <div className="text-[11px] mb-2" style={{ color: 'var(--text-soft)' }}>
                {strings.roleLabel}
              </div>
              <div className="flex gap-2">
                {roleChips.map((chip) => (
                  <div
                    key={chip.id}
                    className="ky-tap-radio flex-1 rounded-2xl px-3 py-3"
                    style={{
                      background: chip.active ? 'linear-gradient(135deg, rgba(26,122,59,0.12), rgba(26,122,59,0.05))' : '#F6F0E7',
                      border: `1.5px solid ${chip.active ? chip.accent : 'rgba(0,0,0,0.05)' }`
                    }}
                  >
                    <div className="text-[12px] font-semibold" style={{ color: chip.active ? 'var(--text-dark)' : 'var(--text-mid)' }}>
                      {chip.label}
                    </div>
                    <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                      {chip.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OTP Entry */}
            <div className="rounded-[22px] p-4 mb-4" style={{ background: '#FFFBF6', border: '1px solid rgba(255,140,56,0.2)' }}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {strings.otpLabel}
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    {strings.otpHelper}
                  </div>
                </div>
                <button className="ky-tap-link text-[12px] font-semibold" style={{ color: 'var(--saffron)' }}>
                  {strings.alreadyHave}
                </button>
              </div>

              <div className="flex gap-2 mb-3">
                {[0, 0, 0, 0, 0, 0].map((_, index) => (
                  <div
                    key={index}
                    className="w-10 h-12 rounded-2xl flex items-center justify-center text-[18px] font-bold"
                    style={{
                      background: 'white',
                      border: index === 2 ? '2px solid var(--saffron)' : '1px solid rgba(0,0,0,0.08)',
                      color: index < 2 ? 'var(--text-dark)' : 'rgba(0,0,0,0.25)',
                      boxShadow: index === 2 ? '0 4px 14px rgba(255,140,56,0.25)' : 'none'
                    }}
                  >
                    {index < 2 ? index + 5 : ''}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px]" style={{ color: 'var(--text-soft)' }}>
                <span>{strings.resendTimer}</span>
                <span>🔒 {strings.securityNote}</span>
              </div>
            </div>

            {/* Actions */}
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[14px] font-bold text-[15px] text-white mb-3"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--saffron))',
                boxShadow: '0 12px 24px rgba(26,122,59,0.3)'
              }}
            >
              {strings.sendOtp}
            </button>

            <div className="rounded-[20px] px-4 py-3" style={{ background: 'white', border: '1px dashed rgba(0,0,0,0.08)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: '#F1F8F4' }}>
                  🤝
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {strings.supportTitle}
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                    {strings.supportText}
                  </div>
                </div>
                <button className="ky-tap-link text-[12px] font-semibold" style={{ color: 'var(--green)' }}>
                  {strings.supportAction}
                </button>
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
