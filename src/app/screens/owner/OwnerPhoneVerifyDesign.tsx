import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language';

export function OwnerPhoneVerifyDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    ownerRegistration: t({
      english: 'Owner Registration',
      hindi: 'मालिक पंजीकरण',
      tamil: 'உரிமையாளர் பதிவு',
      marathi: 'मालक नोंदणी'
    }),
    tagline: t({
      english: 'Register to list your equipment and earn',
      hindi: 'अपने उपकरण सूचीबद्ध करने और कमाने के लिए पंजीकरण करें',
      tamil: 'உங்கள் உபகரணங்களை பட்டியலிடுவதற்கும் சம்பாதிப்பதற்கும் பதிவு செய்யவும்',
      marathi: 'आपली उपकरणे सूचीबद्ध करण्यासाठी आणि कमवण्यासाठी नोंदणी करा'
    }),
    phoneLabel: t({
      english: 'Phone Number',
      hindi: 'फोन नंबर',
      tamil: 'தொலைபேசி எண்',
      marathi: 'फोन नंबर'
    }),
    phonePlaceholder: t({
      english: '98765 4321',
      hindi: '98765 4321',
      tamil: '98765 4321',
      marathi: '98765 4321'
    }),
    sendOtp: t({
      english: 'Send OTP',
      hindi: 'OTP भेजें',
      tamil: 'OTP அனுப்பவும்',
      marathi: 'OTP पाठवा'
    }),
    trusted: t({
      english: '2,500+ equipment owners trust KisanYantra',
      hindi: '2,500+ उपकरण मालिक KisanYantra पर भरोसा करते हैं',
      tamil: '2,500+ உபகரண உரிமையாளர்கள் KisanYantra ஐ நம்புகிறார்கள்',
      marathi: '2,500+ उपकरण मालक KisanYantra वर विश्वास ठेवतात'
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

          {/* Hero Header - Green Theme for Owner */}
          <div
            className="px-5 pt-5 pb-8 rounded-b-[32px] relative overflow-hidden"
            style={{ background: 'linear-gradient(170deg, #1A7A3B 0%, #2E8B57 55%, #228B22 100%)' }}
          >
            {/* Background decorative circles */}
            <div className="absolute w-[200px] h-[200px] rounded-full top-[-60px] right-[-60px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <div className="absolute w-[120px] h-[120px] rounded-full bottom-[-30px] left-[-20px]" style={{ background: 'rgba(255,255,255,0.05)' }} />

            <div className="relative z-10 text-center">
              <div className="text-[13px] mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {strings.ownerRegistration}
              </div>
              <div className="flex items-center justify-center mb-2">
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

          {/* Registration Form */}
          <div className="flex-1 px-5 pb-5 -mt-4">
            <div className="min-h-full flex flex-col justify-center py-4">
              <div
                className="bg-white rounded-[20px] p-5 relative overflow-hidden"
                style={{
                  boxShadow: 'var(--card-shadow-green)',
                  border: '2px solid var(--green-primary)'
                }}
              >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, var(--green-primary), var(--green-light))' }} />

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
                  <div className="flex items-center gap-1">
                    <span className="text-[14px]" style={{ color: 'var(--text-dark)' }}>🇮🇳</span>
                    <span className="text-[14px] font-medium" style={{ color: 'var(--text-dark)' }}>+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder={strings.phonePlaceholder}
                    className="flex-1 text-[14px] outline-none bg-transparent border-none"
                    style={{ color: 'var(--text-dark)', width: '120px' }}
                  />
                </div>
              </div>

              {/* Send OTP Button */}
              <button
                className="ky-tap-cta-primary w-full rounded-[14px] py-[12px] font-bold text-[14px] text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--green-primary), var(--green-light))',
                  boxShadow: '0 4px 16px rgba(26,122,59,0.3)'
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
        </div>
      </div>

      {/* Notch */}
      <div
        className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
        style={{ borderRadius: '0 0 14px 14px' }}
      />
    </div>
    </div>
  );
}
