import { useLanguage } from '../../contexts/language';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function RequestManageDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'Manage Request', hindi: 'अनुरोध प्रबंधन', tamil: 'கோரிக்கை நிர்வாகம்', marathi: 'विनंती व्यवस्थापन' }),
    subtitle: t({ english: 'Edit and boost your request', hindi: 'अपना अनुरोध संपादित करें और बूस्ट करें', tamil: 'உங்கள் கோரிக்கையை திருத்தி மேம்படுத்தவும்', marathi: 'तुमची विनंती संपादित करा आणि बूस्ट करा' }),
    live: t({ english: 'LIVE', hindi: 'लाइव', tamil: 'நேரடி', marathi: 'लाइव्ह' }),
    expandSearch: t({ english: 'Expand Search', hindi: 'खोज बढ़ाएं', tamil: 'தேடலை விரிவாக்கு', marathi: 'शोध वाढवा' }),
    currentRadius: t({ english: 'Current radius', hindi: 'वर्तमान दायरा', tamil: 'தற்போதைய ஆரம்', marathi: 'सध्याचा परिसर' }),
    expandToFind: t({ english: 'Expand to find more owners', hindi: 'अधिक मालिकों को खोजने के लिए बढ़ाएं', tamil: 'மேலும் உரிமையாளர்களைக் கண்டறிய விரிவாக்கவும்', marathi: 'अधिक मालक शोधण्यासाठी वाढवा' }),
    expandNote: t({ english: 'Expanding to 50 km will notify 8 more owners', hindi: '50 किमी तक बढ़ाने से 8 और मालिकों को सूचित किया जाएगा', tamil: '50 கி.மீ க்கு விரிவாக்குவது 8 உரிமையாளர்களுக்கு அறிவிக்கும்', marathi: '50 किमी पर्यंत वाढवल्यास आणखी 8 मालकांना सूचित केले जाईल' }),
    editDetails: t({ english: 'Edit Details', hindi: 'विवरण संपादित करें', tamil: 'விவரங்களைத் திருத்து', marathi: 'तपशील संपादित करा' }),
    equipmentType: t({ english: 'Equipment Type', hindi: 'उपकरण प्रकार', tamil: 'உபகரண வகை', marathi: 'उपकरण प्रकार' }),
    locked: t({ english: 'Locked', hindi: 'लॉक', tamil: 'பூட்டப்பட்டது', marathi: 'लॉक' }),
    datesLabel: t({ english: 'Dates', hindi: 'तारीख', tamil: 'தேதிகள்', marathi: 'तारखा' }),
    budgetLabel: t({ english: 'Budget', hindi: 'बजट', tamil: 'பட்ஜெட்', marathi: 'बजेट' }),
    additionalNotes: t({ english: 'Additional Notes', hindi: 'अतिरिक्त नोट्स', tamil: 'கூடுதல் குறிப்புகள்', marathi: 'अतिरिक्त नोट्स' }),
    notesPlaceholder: t({ english: 'Add any special requirements...', hindi: 'कोई विशेष आवश्यकता जोड़ें...', tamil: 'சிறப்புத் தேவைகளைச் சேர்க்கவும்...', marathi: 'कोणत्याही विशेष आवश्यकता जोडा...' }),
    boostTitle: t({ english: 'Boost Your Request', hindi: 'अपना अनुरोध बूस्ट करें', tamil: 'உங்கள் கோரிக்கையை பூஸ்ட் செய்யுங்கள்', marathi: 'तुमची विनंती बूस्ट करा' }),
    boostDesc: t({ english: 'Get priority visibility to owners. Boosted requests get 3x more offers', hindi: 'मालिकों के बीच प्राथमिकता पाएं। बूस्ट किए गए अनुरोधों को 3 गुना अधिक ऑफर मिलते हैं', tamil: 'உரிமையாளர்களுக்கு முன்னுரிமை தெரிவுநிலை பெறுங்கள். பூஸ்ட் செய்யப்பட்ட கோரிக்கைகள் 3 மடங்கு அதிக சலுகைகளைப் பெறும்', marathi: 'मालकांमध्ये प्राधान्य मिळवा. बूस्ट केलेल्या विनंत्यांना 3 पट अधिक ऑफर मिळतात' }),
    boostCta: t({ english: 'Boost for ₹49', hindi: '₹49 में बूस्ट करें', tamil: '₹49 க்கு பூஸ்ட் செய்யுங்கள்', marathi: '₹49 मध्ये बूस्ट करा' }),
    shareTitle: t({ english: 'Share on WhatsApp', hindi: 'WhatsApp पर शेयर करें', tamil: 'WhatsApp இல் பகிரவும்', marathi: 'WhatsApp वर शेअर करा' }),
    shareDesc: t({ english: 'Share with farmers in your area — they may know owners nearby', hindi: 'अपने क्षेत्र के किसानों से शेयर करें — वे पास के मालिकों को जान सकते हैं', tamil: 'உங்கள் பகுதியில் உள்ள விவசாயிகளுடன் பகிரவும் — அவர்களுக்கு அருகிலுள்ள உரிமையாளர்கள் தெரிந்திருக்கலாம்', marathi: 'तुमच्या भागातील शेतकऱ्यांसोबत शेअर करा — त्यांना जवळचे मालक माहीत असू शकतात' }),
    share: t({ english: 'Share', hindi: 'शेयर करें', tamil: 'பகிர்', marathi: 'शेअर करा' }),
    dangerZone: t({ english: 'Danger Zone', hindi: 'खतरा क्षेत्र', tamil: 'ஆபத்து மண்டலம்', marathi: 'धोका क्षेत्र' }),
    cancelRequest: t({ english: 'Cancel Request', hindi: 'अनुरोध रद्द करें', tamil: 'கோரிக்கையை ரத்து செய்', marathi: 'विनंती रद्द करा' }),
    cancelWarning: t({ english: 'This will remove your request and notify all owners who sent offers', hindi: 'इससे आपका अनुरोध हटा दिया जाएगा और सभी ऑफर भेजने वाले मालिकों को सूचित किया जाएगा', tamil: 'இது உங்கள் கோரிக்கையை நீக்கி, சலுகைகள் அனுப்பிய அனைத்து உரிமையாளர்களுக்கும் அறிவிக்கும்', marathi: 'यामुळे तुमची विनंती काढली जाईल आणि ऑफर पाठवलेल्या सर्व मालकांना सूचित केले जाईल' }),
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Saffron Gradient */}
          <div
            className="px-5 pt-4 pb-5 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  ⚙️ {strings.subtitle}
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.title}
                </div>
              </div>
            </div>

            {/* Request card at top */}
            <div
              className="rounded-[16px] p-3 flex items-center justify-between"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[16px]">🚜</span>
                <span className="text-white text-[13px] font-semibold">
                  50 HP Tractor · RQ-001
                </span>
              </div>
              <div
                className="rounded-full px-3 py-1 text-[10px] font-bold text-white flex items-center gap-1"
                style={{ background: 'rgba(26,122,59,0.7)' }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: '#4ADE80', animation: 'pulse 1.5s infinite' }}
                />
                {strings.live}
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Expand Search Section */}
            <div
              className="bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[13px] font-bold mb-2"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📡 {strings.expandSearch}
              </div>

              {/* Current radius visualization */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                  {strings.currentRadius}: <strong style={{ color: 'var(--saffron)' }}>25 km</strong>
                </span>
              </div>
              <div className="relative h-2 rounded-full mb-3" style={{ background: '#F0EDE7' }}>
                <div
                  className="absolute top-0 left-0 h-2 rounded-full"
                  style={{ width: '25%', background: 'linear-gradient(135deg, var(--saffron), #FF8C38)' }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white"
                  style={{ left: '23%', background: 'var(--saffron)', boxShadow: '0 2px 6px rgba(255,107,0,0.4)' }}
                />
              </div>

              <div className="text-[10px] mb-3" style={{ color: 'var(--text-mid)' }}>
                {strings.expandToFind}
              </div>

              {/* Quick buttons */}
              <div className="flex gap-2 mb-2">
                {['50 km', '75 km', '100 km'].map((radius) => (
                  <div
                    key={radius}
                    className="ky-tap-chip flex-1 rounded-[12px] py-2.5 text-[11px] font-bold text-center cursor-pointer"
                    style={{
                      background: radius === '50 km' ? 'var(--saffron-pale)' : 'white',
                      color: radius === '50 km' ? 'var(--saffron)' : 'var(--text-mid)',
                      border: radius === '50 km' ? '1.5px solid var(--saffron)' : '1.5px solid #E0E0E0',
                    }}
                  >
                    {radius}
                  </div>
                ))}
              </div>

              <div
                className="rounded-[10px] px-3 py-2 text-[10px] flex items-center gap-2"
                style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
              >
                <span>💡</span>
                <span className="font-semibold">{strings.expandNote}</span>
              </div>
            </div>

            {/* Edit Details Section */}
            <div
              className="bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                ✏️ {strings.editDetails}
              </div>

              {/* Equipment Type - Locked */}
              <div
                className="flex items-center justify-between p-3 rounded-[12px] mb-2"
                style={{ background: '#F5F5F5', opacity: 0.7 }}
              >
                <div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.equipmentType}</div>
                  <div className="text-[12px] font-semibold" style={{ color: 'var(--text-mid)' }}>🚜 50 HP Tractor</div>
                </div>
                <div
                  className="rounded-[8px] px-2 py-1 text-[9px] font-bold"
                  style={{ background: '#E8E3DA', color: 'var(--text-soft)' }}
                >
                  🔒 {strings.locked}
                </div>
              </div>

              {/* Dates - Editable */}
              <div
                className="flex items-center justify-between p-3 rounded-[12px] mb-2"
                style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA' }}
              >
                <div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.datesLabel}</div>
                  <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>📅 Mar 20-23</div>
                </div>
                <div
                  className="ky-tap-icon w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                >
                  ✏️
                </div>
              </div>

              {/* Budget - Editable */}
              <div
                className="flex items-center justify-between p-3 rounded-[12px] mb-2"
                style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA' }}
              >
                <div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.budgetLabel}</div>
                  <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>💰 ₹2,400/day</div>
                </div>
                <div
                  className="ky-tap-icon w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
                >
                  ✏️
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mt-1">
                <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>{strings.additionalNotes}</div>
                <div
                  className="rounded-[12px] p-3 text-[11px]"
                  style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA', color: 'var(--text-soft)', minHeight: '48px' }}
                >
                  {strings.notesPlaceholder}
                </div>
              </div>
            </div>

            {/* Boost Request Card */}
            <div
              className="rounded-[20px] p-4 mb-3"
              style={{ background: 'var(--saffron-pale)', border: '1.5px solid rgba(255,107,0,0.2)' }}
            >
              <div
                className="text-[13px] font-bold mb-1"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                🚀 {strings.boostTitle}
              </div>
              <div className="text-[10px] mb-3" style={{ color: 'var(--text-mid)' }}>
                {strings.boostDesc}
              </div>
              <div
                className="ky-tap-cta-primary rounded-[12px] py-2.5 text-[12px] font-bold text-center text-white cursor-pointer"
                style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
              >
                ⚡ {strings.boostCta}
              </div>
            </div>

            {/* Share on WhatsApp Card */}
            <div
              className="rounded-[20px] p-4 mb-3"
              style={{ background: 'var(--green-pale)', border: '1.5px solid rgba(26,122,59,0.2)' }}
            >
              <div
                className="text-[13px] font-bold mb-1"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📲 {strings.shareTitle}
              </div>
              <div className="text-[10px] mb-3" style={{ color: 'var(--text-mid)' }}>
                {strings.shareDesc}
              </div>
              <div
                className="ky-tap-share rounded-[12px] py-2.5 text-[12px] font-bold text-center text-white cursor-pointer"
                style={{ background: '#25D366' }}
              >
                📲 {strings.share}
              </div>
            </div>

            {/* Danger Zone */}
            <div
              className="rounded-[20px] p-4 mb-2"
              style={{ background: '#FFF5F5', border: '1.5px solid #FFCCCC' }}
            >
              <div
                className="text-[11px] font-bold mb-2"
                style={{ color: '#CC3333' }}
              >
                ⚠️ {strings.dangerZone}
              </div>
              <div className="text-[9px] mb-3" style={{ color: 'var(--text-mid)' }}>
                {strings.cancelWarning}
              </div>
              <div
                className="ky-tap-link rounded-[12px] py-2.5 text-[11px] font-bold text-center cursor-pointer"
                style={{ background: 'white', color: '#CC3333', border: '1.5px solid #CC3333' }}
              >
                ❌ {strings.cancelRequest}
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <FarmerBottomNav activeTab="bookings" />

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
