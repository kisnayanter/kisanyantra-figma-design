import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language';

export function LandingHomeDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    greeting: t({
      english: 'Welcome to',
      hindi: 'आपका स्वागत है',
      tamil: 'வரவேற்கிறோம்',
      marathi: 'स्वागत आहे'
    }),
    tagline: t({
      english: 'Rent farm equipment in minutes',
      hindi: 'मिनटों में कृषि उपकरण किराये पर लें',
      tamil: 'நிமிடங்களில் விவசாய உபகரணம் வாடகைக்கு',
      marathi: 'मिनिटांत शेती उपकरणे भाड्याने घ्या'
    }),
    findTitle: t({
      english: 'Find Equipment',
      hindi: 'उपकरण खोजें',
      tamil: 'உபகரணம் தேடுங்கள்',
      marathi: 'उपकरणे शोधा'
    }),
    findDesc: t({
      english: 'Search tractors, harvesters & more near your farm — no signup needed',
      hindi: 'अपने खेत के पास ट्रैक्टर, हार्वेस्टर खोजें — बिना रजिस्ट्रेशन',
      tamil: 'உங்கள் பண்ணைக்கு அருகில் டிராக்டர், ஹார்வெஸ்டர் தேடுங்கள் — பதிவு தேவையில்லை',
      marathi: 'तुमच्या शेताजवळ ट्रॅक्टर, हार्वेस्टर शोधा — नोंदणी नाही'
    }),
    findCta: t({
      english: 'Start Searching →',
      hindi: 'खोज शुरू करें →',
      tamil: 'தேடத் தொடங்குங்கள் →',
      marathi: 'शोध सुरू करा →'
    }),
    listTitle: t({
      english: 'List My Equipment',
      hindi: 'मेरे उपकरण सूचीबद्ध करें',
      tamil: 'என் உபகரணம் பட்டியலிடு',
      marathi: 'माझी उपकरणे सूचीबद्ध करा'
    }),
    listDesc: t({
      english: 'Rent out your machines and earn ₹12,000–18,000 per day',
      hindi: 'अपनी मशीनें किराये पर दें, ₹12,000–18,000 प्रतिदिन कमाएं',
      tamil: 'உங்கள் இயந்திரங்களை வாடகைக்கு கொடுத்து நாளுக்கு ₹12,000–18,000 சம்பாதியுங்கள்',
      marathi: 'तुमची यंत्रे भाड्याने द्या, दिवसाला ₹12,000–18,000 कमवा'
    }),
    listCta: t({
      english: 'Get Started →',
      hindi: 'शुरू करें →',
      tamil: 'தொடங்குங்கள் →',
      marathi: 'सुरू करा →'
    }),
    noSignup: t({
      english: '🔓 No signup required to search',
      hindi: '🔓 खोजने के लिए रजिस्ट्रेशन नहीं चाहिए',
      tamil: '🔓 தேட பதிவு தேவையில்லை',
      marathi: '🔓 शोधण्यासाठी नोंदणी आवश्यक नाही'
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

          {/* Hero Header */}
          <div
            className="px-5 pt-5 pb-8 rounded-b-[32px] relative overflow-hidden"
            style={{ background: 'linear-gradient(170deg, #FF6B00 0%, #E65100 55%, #1A7A3B 100%)' }}
          >
            {/* Background decorative circles */}
            <div className="absolute w-[200px] h-[200px] rounded-full top-[-60px] right-[-60px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <div className="absolute w-[120px] h-[120px] rounded-full bottom-[-30px] left-[-20px]" style={{ background: 'rgba(255,255,255,0.05)' }} />

            <div className="relative z-10 text-center">
              <div className="text-[13px] mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {strings.greeting}
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

          {/* Action Cards */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Find Equipment Card - Farmer Path */}
            <div
              className="ky-tap-card bg-white rounded-[20px] p-5 mb-3 relative overflow-hidden"
              style={{
                boxShadow: 'var(--card-shadow)',
                border: '2px solid var(--saffron)'
              }}
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, var(--saffron), #FF8C38)' }} />

              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-[16px] flex items-center justify-center text-[28px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  🌾
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[18px] font-bold mb-0.5"
                    style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                  >
                    {strings.findTitle}
                  </div>
                  <div className="text-[11px] leading-relaxed mb-3" style={{ color: 'var(--text-mid)' }}>
                    {strings.findDesc}
                  </div>
                </div>
              </div>

              <button
                className="ky-tap-cta-primary w-full rounded-[14px] py-[12px] font-bold text-[14px] text-white mt-1"
                style={{
                  background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
                  boxShadow: '0 4px 16px rgba(255,107,0,0.3)'
                }}
              >
                {strings.findCta}
              </button>
            </div>

            {/* List Equipment Card - Owner Path */}
            <div
              className="ky-tap-card bg-white rounded-[20px] p-5 mb-4 relative overflow-hidden"
              style={{
                boxShadow: 'var(--card-shadow)',
                border: '2px solid var(--green)'
              }}
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, var(--green), var(--green-light))' }} />

              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-[16px] flex items-center justify-center text-[28px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)' }}
                >
                  🚜
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[18px] font-bold mb-0.5"
                    style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                  >
                    {strings.listTitle}
                  </div>
                  <div className="text-[11px] leading-relaxed mb-3" style={{ color: 'var(--text-mid)' }}>
                    {strings.listDesc}
                  </div>
                </div>
              </div>

              <button
                className="ky-tap-cta-primary w-full rounded-[14px] py-[12px] font-bold text-[14px] text-white mt-1"
                style={{
                  background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                  boxShadow: '0 4px 16px rgba(26,122,59,0.3)'
                }}
              >
                {strings.listCta}
              </button>
            </div>

            {/* Trust Badge */}
            <div className="text-center">
              <div
                className="inline-block rounded-full px-4 py-2 text-[11px] font-semibold"
                style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
              >
                {strings.noSignup}
              </div>
              <div className="text-[10px] mt-2" style={{ color: 'var(--text-soft)' }}>
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
