import { motion } from 'motion/react';

export function LanguageSelectDesign() {
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative" style={{ background: 'linear-gradient(170deg, #FF6B00 0%, #E65100 55%, #1A7A3B 100%)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10" style={{ color: 'rgba(255,255,255,0.9)' }}>
            <span className="font-bold text-[11px]">9:41</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>
          
          <div className="h-full flex flex-col items-center justify-center px-5 pb-10 relative overflow-hidden">
            {/* Background circles */}
            <div className="absolute w-[350px] h-[350px] rounded-full top-[-80px] right-[-80px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <div className="absolute w-[200px] h-[200px] rounded-full bottom-[-40px] left-[-40px]" style={{ background: 'rgba(255,255,255,0.05)' }} />
            
            {/* Content */}
            <motion.div
              animate={{ translateY: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[64px] mb-4 relative z-10"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}
            >
              🚜
            </motion.div>
            
            <div className="relative z-10">
              <div 
                className="text-white text-center mb-4"
                style={{ 
                  fontFamily: "'Baloo 2', cursive",
                  fontSize: '36px',
                  fontWeight: 800,
                  letterSpacing: '-0.5px'
                }}
              >
                KisanYantra
              </div>
              <div 
                className="text-center mb-9"
                style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.8)'
                }}
              >
                किसान यंत्र
              </div>
            </div>

            <div className="w-full relative z-10">
              <div className="text-center mb-4" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 500 }}>
                भाषा चुनें · Choose your language
              </div>
              
              <div className="flex flex-col gap-[10px] mb-5">
                <div
                  className="ky-tap-radio w-full rounded-2xl p-[14px] flex items-center gap-[14px] bg-white"
                  style={{ border: '1.5px solid white' }}
                >
                  <span className="text-2xl">🇮🇳</span>
                  <span className="font-bold text-[15px]" style={{ color: 'var(--saffron)' }}>Hindi</span>
                  <span 
                    className="ml-auto text-[13px]"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--text-soft)' }}
                  >
                    हिंदी
                  </span>
                </div>
                {['Tamil · தமிழ்', 'Marathi · मराठी'].map((lang) => (
                  <div
                    key={lang}
                    className="ky-tap-radio w-full rounded-2xl p-[14px] flex items-center gap-[14px]"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)' }}
                  >
                    <span className="text-2xl">🇮🇳</span>
                    <span className="font-bold text-[15px] text-white">{lang.split('·')[0]}</span>
                    <span 
                      className="ml-auto text-[13px]"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'rgba(255,255,255,0.7)' }}
                    >
                      {lang.split('·')[1]}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="ky-tap-cta-primary w-full bg-white rounded-2xl p-[14px] font-bold text-[15px]"
                style={{ color: 'var(--saffron)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
              >
                आगे बढ़ें · Continue →
              </button>
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