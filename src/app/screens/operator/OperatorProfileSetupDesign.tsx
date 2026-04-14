import { useLanguage } from '../../contexts/language';

export function OperatorProfileSetupDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    completeProfile: t({
      english: 'Complete Your Profile',
      hindi: 'अपनी प्रोफाइल पूरी करें',
      tamil: 'உங்கள் சுயவிவரத்தை முடிக்கவும்',
      marathi: 'तुमची प्रोफाइल पूर्ण करा'
    }),
    tellUsAbout: t({
      english: 'Tell us about yourself',
      hindi: 'अपने बारे में बताएं',
      tamil: 'உங்களைப் பற்றி சொல்லுங்கள்',
      marathi: 'स्वतःबद्दल सांगा'
    }),
    fullName: t({
      english: 'Full Name',
      hindi: 'पूरा नाम',
      tamil: 'முழு பெயர்',
      marathi: 'पूर्ण नाव'
    }),
    location: t({
      english: 'Location',
      hindi: 'स्थान',
      tamil: 'இடம்',
      marathi: 'स्थान'
    }),
    useCurrentLocation: t({
      english: 'Use Current Location',
      hindi: 'वर्तमान स्थान का उपयोग करें',
      tamil: 'தற்போதைய இடத்தைப் பயன்படுத்தவும்',
      marathi: 'वर्तमान स्थान वापरा'
    }),
    photo: t({
      english: 'Profile Photo',
      hindi: 'प्रोफाइल फोटो',
      tamil: 'சுயவிவரப் புகைப்படம்',
      marathi: 'प्रोफाइल फोटो'
    }),
    completeSetup: t({
      english: 'Complete Setup',
      hindi: 'सेटअप पूरा करें',
      tamil: 'அமைப்பை முடிக்கவும்',
      marathi: 'सेटअप पूर्ण करा'
    }),
    optional: t({
      english: '(Optional)',
      hindi: '(वैकल्पिक)',
      tamil: '(விருப்பம்)',
      marathi: '(ऐच्छिक)'
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={interFont}>9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Blue Gradient Header */}
          <div
            className="px-[18px] pt-4 pb-6 rounded-b-[36px] relative"
            style={{
              background: 'var(--gradient-operator)',
              boxShadow: 'var(--card-shadow-operator)',
              backgroundImage: `
                var(--gradient-operator),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <button className="text-white text-[18px]">←</button>
              <div
                className="text-white text-[22px] font-bold"
                style={poppinsFont}
              >
                {strings.completeProfile}
              </div>
            </div>

            {/* Illustration */}
            <div className="text-center">
              <div className="text-[64px] mb-2">👨‍🌾</div>
              <div
                className="text-[16px]"
                style={{ color: 'rgba(255,255,255,0.9)', ...interFont }}
              >
                {strings.tellUsAbout}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Full Name */}
            <div className="mb-4">
              <label className="text-[16px] font-bold mb-2 block" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                {strings.fullName}
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-[12px] text-[16px]"
                style={{
                  border: '1.5px solid #E0E0E0',
                  ...interFont,
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="text-[16px] font-bold mb-2 block" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                {strings.location}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="flex-1 px-4 py-3 rounded-[12px] text-[16px]"
                  style={{
                    border: '1.5px solid #E0E0E0',
                    ...interFont,
                    color: 'var(--text-primary)'
                  }}
                />
                <button
                  className="px-3 py-3 rounded-[12px] text-[14px] font-medium"
                  style={{
                    background: 'var(--operator-blue-pale)',
                    color: 'var(--operator-blue)',
                    border: '1.5px solid var(--operator-blue)',
                    ...interFont
                  }}
                >
                  📍
                </button>
              </div>
              <button className="text-[14px] mt-2 font-medium" style={{ color: 'var(--operator-blue)', ...interFont }}>
                {strings.useCurrentLocation}
              </button>
            </div>

            {/* Photo Upload */}
            <div className="mb-4">
              <label className="text-[16px] font-bold mb-2 block" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                {strings.photo} <span className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>{strings.optional}</span>
              </label>
              <div
                className="w-full h-32 rounded-[12px] flex items-center justify-center border-2 border-dashed"
                style={{ borderColor: '#E0E0E0' }}
              >
                <div className="text-center">
                  <div className="text-[32px] mb-1">📷</div>
                  <div className="text-[14px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                    Tap to upload photo
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Setup Button */}
            <button
              className="w-full py-4 rounded-[16px] text-[18px] font-bold mt-6"
              style={{
                background: 'var(--gradient-operator)',
                color: 'white',
                boxShadow: '0 4px 16px rgba(47,128,255,0.4)',
                ...poppinsFont
              }}
            >
              {strings.completeSetup}
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
