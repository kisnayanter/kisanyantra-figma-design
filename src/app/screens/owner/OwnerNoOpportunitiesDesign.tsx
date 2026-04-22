import { useState } from 'react';
import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function OwnerNoOpportunitiesDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const [showLocationSheet, setShowLocationSheet] = useState(false);
  const [radiusKm, setRadiusKm] = useState(25);
  const [searchText, setSearchText] = useState('');

  const strings = {
    title: t({
      english: 'Equipment Opportunities',
      hindi: 'उपकरण अवसर',
      tamil: 'உபகரண வாய்ப்புகள்',
      marathi: 'उपकरण संधी'
    }),
    subtitle: t({
      english: 'Farmers need your equipment',
      hindi: 'किसानों को आपके उपकरण चाहिए',
      tamil: 'விவசாயிகளுக்கு உங்கள் உபகரணங்கள் தேவை',
      marathi: 'शेतकऱ्यांना तुमची उपकरणे हवी आहेत'
    }),
    requests: t({ english: 'Requests', hindi: 'अनुरोध', tamil: 'கோரிக்கைகள்', marathi: 'विनंत्या' }),
    potential: t({ english: 'Potential', hindi: 'संभावित', tamil: 'சாத்தியமான', marathi: 'संभाव्य' }),
    newToday: t({ english: 'New', hindi: 'नया', tamil: 'புதிய', marathi: 'नवीन' }),
    all: t({ english: 'All', hindi: 'सभी', tamil: 'அனைத்தும்', marathi: 'सर्व' }),
    matching: t({ english: 'Matching', hindi: 'मेल खाता', tamil: 'பொருத்தம்', marathi: 'जुळणारे' }),
    newTab: t({ english: 'New', hindi: 'नया', tamil: 'புதிய', marathi: 'नवीन' }),

    // Empty state
    noRequestsTitle: t({
      english: 'No Requests Nearby',
      hindi: 'आस-पास कोई अनुरोध नहीं',
      tamil: 'அருகில் கோரிக்கைகள் இல்லை',
      marathi: 'जवळपास कोणत्याही विनंत्या नाहीत'
    }),
    noRequestsHint: t({
      english: 'No farmers have posted equipment requests in your area yet. Try expanding your search radius to find more opportunities.',
      hindi: 'अभी तक आपके क्षेत्र में किसी भी किसान ने उपकरण अनुरोध नहीं किया है। अधिक अवसर खोजने के लिए खोज सीमा बढ़ाएं।',
      tamil: 'உங்கள் பகுதியில் இதுவரை எந்த விவசாயியும் உபகரண கோரிக்கை பதிவு செய்யவில்லை. அதிக வாய்ப்புகளைக் கண்டறிய தேடல் ஆரத்தை விரிவுபடுத்துங்கள்.',
      marathi: 'तुमच्या परिसरात अद्याप कोणत्याही शेतकऱ्याने उपकरण विनंती केलेली नाही. अधिक संधी शोधण्यासाठी शोध त्रिज्या वाढवा.'
    }),
    expandSearch: t({
      english: 'Expand Search Area',
      hindi: 'खोज क्षेत्र बढ़ाएं',
      tamil: 'தேடல் பகுதியை விரிவுபடுத்து',
      marathi: 'शोध क्षेत्र वाढवा'
    }),
    currentRadius: t({
      english: 'Current radius',
      hindi: 'वर्तमान सीमा',
      tamil: 'தற்போதைய ஆரம்',
      marathi: 'सध्याची त्रिज्या'
    }),
    checkLater: t({
      english: 'Check back later',
      hindi: 'बाद में देखें',
      tamil: 'பின்னர் சரிபார்க்கவும்',
      marathi: 'नंतर तपासा'
    }),
    checkLaterHint: t({
      english: 'New requests are posted by farmers every day. We\'ll notify you instantly.',
      hindi: 'किसान हर दिन नए अनुरोध पोस्ट करते हैं। हम आपको तुरंत सूचित करेंगे।',
      tamil: 'விவசாயிகள் ஒவ்வொரு நாளும் புதிய கோரிக்கைகளை பதிவு செய்கிறார்கள். உங்களுக்கு உடனே தெரிவிக்கிறோம்.',
      marathi: 'शेतकरी दररोज नवीन विनंत्या पोस्ट करतात. आम्ही तुम्हाला लगेच सूचित करू.'
    }),
    alertsOn: t({
      english: 'Nearby alerts: ON',
      hindi: 'आस-पास अलर्ट: चालू',
      tamil: 'அருகிலுள்ள எச்சரிக்கைகள்: இயக்கத்தில்',
      marathi: 'जवळपासचे अलर्ट: चालू'
    }),

    // Location sheet strings
    chooseLocation: t({
      english: 'Choose Location',
      hindi: 'स्थान चुनें',
      tamil: 'இடத்தைத் தேர்ந்தெடு',
      marathi: 'स्थान निवडा'
    }),
    searchPlaceholder: t({
      english: 'Type village, city, or district...',
      hindi: 'गांव, शहर या जिला टाइप करें...',
      tamil: 'கிராமம், நகரம் அல்லது மாவட்டத்தை தட்டச்சு செய்யுங்கள்...',
      marathi: 'गाव, शहर किंवा जिल्हा टाइप करा...'
    }),
    useCurrentLocation: t({
      english: 'Use my current location',
      hindi: 'मेरा वर्तमान स्थान उपयोग करें',
      tamil: 'என் தற்போதைய இருப்பிடத்தை பயன்படுத்து',
      marathi: 'माझे सध्याचे स्थान वापरा'
    }),
    searchRadius: t({
      english: 'Search Radius',
      hindi: 'खोज सीमा',
      tamil: 'தேடல் ஆரம்',
      marathi: 'शोध त्रिज्या'
    }),
    setLocation: t({
      english: 'Set Location',
      hindi: 'स्थान सेट करें',
      tamil: 'இடத்தை அமை',
      marathi: 'स्थान सेट करा'
    }),
    selectLocationAbove: t({
      english: 'Select a location above',
      hindi: 'ऊपर से स्थान चुनें',
      tamil: 'மேலே இடத்தைத் தேர்ந்தெடுங்கள்',
      marathi: 'वर स्थान निवडा'
    }),
  };

  // Green accent — owner theme
  const green = '#1F7A4C';
  const greenLight = '#2DAA6A';
  const greenPale = '#F0FDF4';
  const greenTint = '#DCFCE7';

  const sliderPercent = ((radiusKm - 5) / (100 - 5)) * 100;

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

          {/* Header — green gradient (owner) */}
          <div
            className="px-5 pt-4 pb-[50px] rounded-b-[36px]"
            style={{ background: 'var(--gradient-green)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <button
                type="button"
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </button>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  💰 {strings.subtitle}
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {strings.title}
                </div>
              </div>
            </div>

            {/* Stats Row — all zeros */}
            <div className="flex gap-2">
              <div
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-white text-[20px] font-bold">0</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.requests}
                </div>
              </div>
              <div
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-white text-[20px] font-bold">₹0</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.potential}
                </div>
              </div>
              <div
                className="flex-1 rounded-[16px] p-3"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-white text-[20px] font-bold">0</div>
                <div className="text-white text-[11px]" style={{ opacity: 0.85 }}>
                  {strings.newToday}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-4 -mt-6">
            {/* Filter Tabs — greyed out */}
            <div className="flex bg-white rounded-[20px] mb-4 p-1" style={{ boxShadow: 'var(--card-shadow)' }}>
              <button
                className="ky-tap-tab flex-1 py-2 text-center text-[11px] font-semibold rounded-[14px] text-white"
                style={{ background: green }}
              >
                {strings.all} (0)
              </button>
              <button
                className="ky-tap-tab flex-1 py-2 text-center text-[11px] font-semibold"
                style={{ color: 'var(--text-soft)' }}
              >
                {strings.matching} (0)
              </button>
              <button
                className="ky-tap-tab flex-1 py-2 text-center text-[11px] font-semibold"
                style={{ color: 'var(--text-soft)' }}
              >
                {strings.newTab} (0)
              </button>
            </div>

            {/* Current Search Radius Pill */}
            <div
              className="flex items-center justify-between rounded-[14px] px-3 py-2.5 mb-3"
              style={{ background: greenPale, border: `1px solid ${greenTint}` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[14px]">📡</span>
                <span className="text-[11px] font-semibold" style={{ color: green }}>
                  {strings.currentRadius}: {radiusKm} km
                </span>
              </div>
              <button
                type="button"
                className="ky-tap-link text-[10px] font-bold rounded-[8px] px-2 py-1"
                style={{ color: green, background: greenTint }}
                onClick={() => setShowLocationSheet(true)}
              >
                {strings.expandSearch} →
              </button>
            </div>

            {/* Empty State Card */}
            <div
              className="bg-white rounded-[24px] p-5 mb-3 text-center"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              {/* Illustration */}
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-[32px] mx-auto mb-4"
                style={{ background: greenPale }}
              >
                🔍
              </div>

              <div
                className="text-[16px] font-bold mb-2"
                style={{ color: 'var(--text-dark)', fontFamily: "'Poppins', sans-serif" }}
              >
                {strings.noRequestsTitle}
              </div>
              <div
                className="text-[11px] mb-5 leading-relaxed"
                style={{ color: 'var(--text-mid)' }}
              >
                {strings.noRequestsHint}
              </div>

              {/* Expand Search CTA — green (owner) */}
              <button
                type="button"
                className="ky-tap-action-confirm w-full rounded-[14px] py-3 text-[13px] font-bold text-white mb-3"
                style={{
                  background: `linear-gradient(135deg, ${green}, ${greenLight})`,
                  boxShadow: '0 4px 14px rgba(31,122,76,0.3)'
                }}
                onClick={() => setShowLocationSheet(true)}
              >
                🗺️ {strings.expandSearch}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-px" style={{ background: 'var(--cream-bg)' }} />
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>or</span>
                <div className="flex-1 h-px" style={{ background: 'var(--cream-bg)' }} />
              </div>

              {/* Check later row */}
              <div
                className="rounded-[14px] p-3 text-left"
                style={{ background: '#F8F5F0' }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-[16px] mt-0.5">🔔</span>
                  <div>
                    <div className="text-[12px] font-bold mb-0.5" style={{ color: 'var(--text-dark)' }}>
                      {strings.checkLater}
                    </div>
                    <div className="text-[10px]" style={{ color: 'var(--text-mid)', lineHeight: '1.4' }}>
                      {strings.checkLaterHint}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts status */}
            <div className="text-center mt-1 mb-2">
              <span
                className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-full px-3 py-1"
                style={{ background: greenPale, color: green }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: green }}
                />
                {strings.alertsOn}
              </span>
            </div>
          </div>

          {/* Bottom Nav */}
          <OwnerBottomNav activeTab="equipment" />

          {/* Notch */}
          <div
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
            style={{ borderRadius: '0 0 14px 14px' }}
          />

          {/* ===== LOCATION SEARCH SHEET OVERLAY ===== */}
          {showLocationSheet && (
            <>
              {/* Scrim */}
              <div
                className="absolute inset-0 z-30"
                style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(2px)' }}
                onClick={() => setShowLocationSheet(false)}
              />

              {/* Sheet */}
              <div
                className="absolute bottom-0 left-0 right-0 z-40 rounded-t-[24px] flex flex-col"
                style={{ background: '#FAFAF8', maxHeight: '82%' }}
              >
                {/* Drag handle */}
                <div className="flex justify-center pt-3 pb-1">
                  <div
                    className="w-10 h-1"
                    style={{ background: 'var(--text-soft)', borderRadius: '2px', opacity: 0.4 }}
                  />
                </div>

                {/* Sheet header */}
                <div className="flex items-center px-5 py-3">
                  <span className="text-[18px] mr-2">📍</span>
                  <span
                    className="flex-1 text-[16px] font-bold"
                    style={{ color: 'var(--text-dark)', fontFamily: "'Poppins', sans-serif" }}
                  >
                    {strings.chooseLocation}
                  </span>
                  <button
                    type="button"
                    className="ky-tap-back w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: '#F0F0EC', color: 'var(--text-mid)' }}
                    onClick={() => setShowLocationSheet(false)}
                  >
                    ✕
                  </button>
                </div>

                <div className="px-5 flex flex-col gap-3 pb-5 overflow-y-auto">
                  {/* Search Input */}
                  <div
                    className="flex items-center gap-2 rounded-[14px] px-3 py-3"
                    style={{
                      background: 'white',
                      border: `1.5px solid ${searchText ? green : '#E5E7EB'}`,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
                    }}
                  >
                    <span className="text-[16px]">🔍</span>
                    <input
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder={strings.searchPlaceholder}
                      className="flex-1 text-[12px] bg-transparent outline-none"
                      style={{ color: 'var(--text-dark)', fontFamily: "'Inter', sans-serif" }}
                    />
                    {searchText && (
                      <button
                        type="button"
                        className="text-[12px] font-bold"
                        style={{ color: 'var(--text-soft)' }}
                        onClick={() => setSearchText('')}
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Use current location row — green accent */}
                  <button
                    type="button"
                    className="ky-tap-link flex items-center gap-3 rounded-[12px] px-3 py-3"
                    style={{
                      background: `rgba(31,122,76,0.06)`,
                      border: `1px solid rgba(31,122,76,0.18)`
                    }}
                  >
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[15px] flex-shrink-0"
                      style={{ background: greenPale, color: green }}
                    >
                      📍
                    </span>
                    <span
                      className="flex-1 text-[13px] font-semibold text-left"
                      style={{ color: green }}
                    >
                      {strings.useCurrentLocation}
                    </span>
                    <span className="text-[12px]" style={{ color: green }}>›</span>
                  </button>

                  {/* Radius Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13px]">📡</span>
                        <span
                          className="text-[13px] font-bold"
                          style={{ color: 'var(--text-dark)', fontFamily: "'Poppins', sans-serif" }}
                        >
                          {strings.searchRadius}
                        </span>
                      </div>
                      <div
                        className="rounded-[8px] px-2.5 py-1 text-[12px] font-bold"
                        style={{ background: greenPale, color: green }}
                      >
                        {radiusKm} km
                      </div>
                    </div>

                    {/* Custom slider track */}
                    <div className="relative h-5 flex items-center mb-1">
                      {/* Track background */}
                      <div
                        className="absolute w-full h-1 rounded-full"
                        style={{ background: '#E5E7EB' }}
                      />
                      {/* Active track */}
                      <div
                        className="absolute h-1 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${green}, ${greenLight})`, width: `${sliderPercent}%` }}
                      />
                      {/* Thumb */}
                      <div
                        className="absolute w-5 h-5 rounded-full border-[2.5px] border-white"
                        style={{
                          background: green,
                          left: `calc(${sliderPercent}% - 10px)`,
                          boxShadow: '0 2px 8px rgba(31,122,76,0.35)'
                        }}
                      />
                      {/* Invisible range input on top */}
                      <input
                        type="range"
                        min={5}
                        max={100}
                        step={5}
                        value={radiusKm}
                        onChange={(e) => setRadiusKm(Number(e.target.value))}
                        className="absolute w-full opacity-0 h-5 cursor-pointer"
                      />
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>5 km</span>
                      <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>100 km</span>
                    </div>
                  </div>

                  {/* Confirm CTA — green gradient (owner) */}
                  <button
                    type="button"
                    className="ky-tap-action-confirm w-full rounded-[14px] py-3.5 text-[13px] font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${green}, ${greenLight})`,
                      boxShadow: '0 4px 14px rgba(31,122,76,0.3)',
                      fontFamily: "'Poppins', sans-serif"
                    }}
                    onClick={() => setShowLocationSheet(false)}
                  >
                    {searchText
                      ? `✓ ${strings.setLocation} · ${radiusKm} km radius`
                      : strings.selectLocationAbove}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
