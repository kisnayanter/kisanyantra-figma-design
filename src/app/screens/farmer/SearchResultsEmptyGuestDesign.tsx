import { useLanguage } from '../../contexts/language';

export function SearchResultsEmptyGuestDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    searchTitle: t({ english: 'Tractor near Hinganghat', hindi: 'हिंगणघाट के पास ट्रैक्टर', tamil: 'ஹிங்கன்காட் அருகில் டிராக்டர்', marathi: 'हिंगणघाट जवळ ट्रॅक्टर' }),
    noResults: t({ english: 'No tractors found nearby', hindi: 'आसपास कोई ट्रैक्टर नहीं मिला', tamil: 'அருகில் டிராக்டர் கிடைக்கவில்லை', marathi: 'जवळपास ट्रॅक्टर सापडले नाही' }),
    suggestion: t({ english: 'Try increasing distance, removing filters, or searching a different equipment type.', hindi: 'दूरी बढ़ाएं, फ़िल्टर हटाएं, या किसी अन्य उपकरण प्रकार की खोज करें।', tamil: 'தூரத்தை அதிகரிக்கவும், வடிகட்டிகளை அகற்றவும், அல்லது வேறு உபகரண வகையைத் தேடவும்.', marathi: 'अंतर वाढवा, फिल्टर काढा, किंवा वेगळ्या उपकरणाचा शोध घ्या.' }),
    resetFilters: t({ english: 'Reset filters', hindi: 'फ़िल्टर रीसेट करें', tamil: 'வடிகட்டிகளை மீட்டமைக்கவும்', marathi: 'फिल्टर रीसेट करा' }),
    cantFind: t({ english: "Can't find what you need?", hindi: 'जो चाहिए वो नहीं मिल रहा?', tamil: 'உங்களுக்கு தேவையானது கிடைக்கவில்லையா?', marathi: 'तुम्हाला हवे ते सापडत नाही?' }),
    postRequest: t({ english: 'Post a Request — We\'ll find it for you', hindi: 'अनुरोध पोस्ट करें — हम आपके लिए ढूंढेंगे', tamil: 'கோரிக்கை பதிவு செய்யுங்கள் — நாங்கள் கண்டுபிடிப்போம்', marathi: 'विनंती पोस्ट करा — आम्ही तुमच्यासाठी शोधू' }),
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
            <span className="font-bold text-[11px]">9:46</span>
            <div className="text-[11px]">🔋</div>
          </div>

          {/* Sticky search header */}
          <div
            className="px-4 pt-4 pb-3"
            style={{ background: 'linear-gradient(135deg, #FF9345 0%, #FF7A1D 100%)' }}
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Back"
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.18)'
                }}
              >
                ←
              </button>
              <div className="text-white text-[16px] font-semibold leading-tight">
                {strings.searchTitle}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div
                  className="bg-white rounded-[14px] h-12 px-4 flex items-center gap-2"
                  style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }}
                >
                  <span className="text-base" aria-hidden="true">🔍</span>
                  <span className="flex-1 text-[14px]" style={{ color: 'var(--text-soft)' }}>
                    Search listings
                  </span>
                </div>
              </div>
              <button
                className="ky-tap-icon w-12 h-12 rounded-[12px] flex flex-col items-center justify-center text-white text-[11px] font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.18)'
                }}
                aria-label="Open filters"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5H15M5 9H13M7 13.5H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] mt-0.5">Filter</span>
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="px-4 pt-4 pb-3 flex items-center justify-between">
            <div className="text-[14px] font-semibold" style={{ color: 'var(--text-dark)' }}>
              {strings.noResults}
            </div>
          </div>

          {/* Empty state */}
          <div className="flex-1 overflow-y-auto px-4 pb-6 flex flex-col items-center justify-center">
            <div className="rounded-[20px] p-6 bg-white text-center w-full" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[48px] mb-3">🤔</div>
              <div
                className="text-[16px] font-bold mb-1"
                style={{ color: 'var(--text-dark)', fontFamily: "'Baloo 2', cursive" }}
              >
                {strings.noResults}
              </div>
              <div className="text-[12px] mb-4" style={{ color: 'var(--text-mid)' }}>
                {strings.suggestion}
              </div>
              <button
                className="w-full rounded-[14px] py-2.5 text-[12px] font-semibold mb-4"
                style={{ background: 'var(--cream)', color: 'var(--text-dark)' }}
              >
                {strings.resetFilters}
              </button>

              {/* Divider */}
              <div className="pt-4" style={{ borderTop: '1px solid #F0EDE7' }}>
                <div className="text-[13px] font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                  {strings.cantFind}
                </div>
                <button
                  className="ky-tap-cta-primary w-full rounded-[16px] py-[14px] text-[14px] font-bold text-white flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
                    boxShadow: '0 4px 16px rgba(255,107,0,0.35)'
                  }}
                >
                  <span className="text-[16px]">📢</span>
                  {strings.postRequest}
                </button>
                <div className="text-[10px] mt-2" style={{ color: 'var(--text-soft)' }}>
                  {t({ english: 'Nearby owners will receive your request via SMS & WhatsApp', hindi: 'आसपास के मालिकों को SMS और WhatsApp से सूचना मिलेगी', tamil: 'அருகிலுள்ள உரிமையாளர்களுக்கு SMS மற்றும் WhatsApp மூலம் அறிவிப்பு', marathi: 'जवळच्या मालकांना SMS आणि WhatsApp द्वारे सूचना मिळेल' })}
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
    </div>
  );
}
