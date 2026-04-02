import { useLanguage } from '../../contexts/language';
import { useState } from 'react';

export function ProfileSetupEmptyDesign() {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsType, setTermsType] = useState<'terms' | 'privacy'>('terms');
  const { selectText, language } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    step: t({
      english: 'Step 3 of 3 · Let’s get your profile ready',
      hindi: 'चरण 3 / 3 · प्रोफ़ाइल तैयार करें',
      tamil: 'படி 3 / 3 · உங்கள் சுயவிவரத்தை அமைக்கலாம்',
      marathi: 'तिसरा टप्पा (३ मधून) · प्रोफाइल तयार करूया'
    }),
    heading: t({
      english: 'Complete Your Profile',
      hindi: 'अपना प्रोफ़ाइल पूरा करें',
      tamil: 'உங்கள் சுயவிவரத்தை முடிக்கவும்',
      marathi: 'आपले प्रोफाइल पूर्ण करा'
    }),
    chooseAvatar: t({
      english: 'Choose Avatar',
      hindi: 'अवतार चुनें',
      tamil: 'அவதாரத்தைத் தேர்வுசெய்க',
      marathi: 'अवतार निवडा'
    }),
    placeholders: {
      fullName: t({ english: 'Enter your name', hindi: 'अपना नाम लिखें', tamil: 'உங்கள் பெயரை உள்ளிடவும்', marathi: 'आपले नाव भरा' }),
      village: t({ english: 'Your village', hindi: 'आपका गाँव', tamil: 'உங்கள் கிராமம்', marathi: 'आपले गाव' }),
      district: t({ english: 'Select district', hindi: 'जिला चुनें', tamil: 'மாவட்டத்தைத் தேர்க', marathi: 'जिल्हा निवडा' }),
      state: t({ english: 'Select state', hindi: 'राज्य चुनें', tamil: 'மாநிலத்தைத் தேர்க', marathi: 'राज्य निवडा' })
    },
    farmSize: t({ english: 'Farm Size (optional)', hindi: 'खेत का आकार (वैकल्पिक)', tamil: 'பண்ணை அளவு (விருப்பம்)', marathi: 'शेतीचे क्षेत्रफळ (ऐच्छिक)' }),
    equipmentNeed: t({ english: 'Equipment You Need', hindi: 'ज़रूरत का उपकरण', tamil: 'தேவையான உபகரணம்', marathi: 'आवश्यक उपकरणे' }),
    languagePreference: t({ english: 'Preferred Language', hindi: 'पसंदीदा भाषा', tamil: 'விருப்ப மொழி', marathi: 'आवडती भाषा' }),
    change: t({ english: 'Change', hindi: 'बदलें', tamil: 'மாற்றவும்', marathi: 'बदला' }),
    languageLabel: t({ english: 'Hindi', hindi: 'हिंदी', tamil: 'இந்தி', marathi: 'हिंदी' }),
    terms: t({
      english: 'I agree to the Terms & Conditions and Privacy Policy',
      hindi: 'मैं नियम व शर्तें और गोपनीयता नीति से सहमत हूँ',
      tamil: 'நிபந்தனைகள், விதிமுறைகள் மற்றும் தனியுரிமை கொள்கையை ஒப்புக்கொள்கிறேன்',
      marathi: 'मी नियम व अटी आणि गोपनीयता धोरणांना सहमत आहे'
    }),
    cta: t({ english: 'Complete required fields', hindi: 'आवश्यक फ़ील्ड भरें', tamil: 'தேவையான புலங்களை நிரப்பவும்', marathi: 'आवश्यक माहिती भरा' })
  };

  const openTermsModal = (type: 'terms' | 'privacy') => {
    console.log('Opening modal with type:', type);
    setTermsType(type);
    setShowTermsModal(true);
  };

  const getTermsContent = () => {
    if (termsType === 'terms') {
      return {
        title: language === 'hindi' ? 'नियम और शर्तें' : language === 'tamil' ? 'விதிமுறைகள்' : language === 'marathi' ? 'नियम आणि अटी' : 'Terms & Conditions',
        content: language === 'hindi' 
          ? 'किसानयंत्रा प्लेटफॉर्म का उपयोग करके आप हमारी सेवाओं के नियमों और शर्तों से सहमत होते हैं। यह सुनिश्चित करता है कि आप उपकरण किराए पर या अन्य सेवाओं का उपयोग करने के लिए जिम्मेदारी लेंगे।'
          : language === 'tamil'
          ? 'கிசன் யந்திரா தளத்தைப் பயன்படுத்துவதன் மூலம் நீங்கள் எங்கள் சேவைகளின் விதிமுறைகள் மற்றும் நிபந்தனைகளுக்கு இணங்குகிறீர்கள். இது உபகரணங்களை வாடகைக்கும் அல்லது பிற சேவைகளைப் பயன்படுத்துவதற்குப் பொறுப்புகிறீர்கள் என்பதை உறுதிப்படுத்துகிறது.'
          : language === 'marathi'
          ? 'किसानयंत्रा प्लॅटफॉर्म वापरून आपण आमच्या सेवांच्या अटींशी सहमत असता. याचा अर्थ आपण उपकरण भाड़ेवर किंवा इतर सेवा वापरून जबाबदारी स्वीकारता.'
          : 'By using the KisanYantra platform, you agree to our terms of service. This includes your responsibility for equipment rentals and other services provided through our platform.'
      };
    } else {
      return {
        title: language === 'hindi' ? 'गोपनीयता नीति' : language === 'tamil' ? 'தனியுரிமை கொள்கை' : language === 'marathi' ? 'गोपनीयता धोरण' : 'Privacy Policy',
        content: language === 'hindi'
          ? 'हम आपकी व्यक्तिगत जानकारी की सुरक्षा करने के लिए प्रतिबद्ध हैं। आपका डेटा केवल उपकरण बुकिंग और सेवा वितरण के लिए उपयोग किया जाता है, और हम इसे तृतीय पक्षों के साथ साझा नहीं करते।'
          : language === 'tamil'
          ? 'உங்கள் தனிப்பட்ட தகவலைப் பாதுகாக்க நாங்கள் உறுதிப்புகிறோம். உங்கள் தரவு கருவிப்பங்கள் மற்றும் சேவை வழங்குதலுக்கு மட்டும் பயன்படுத்தப்படுகிறது, மேல்வரில் பகிர்வித்துவத்துவதில்லை.'
          : language === 'marathi'
          ? 'आपल्या वैयक्तिक माहितीचे संरक्षण करण्यासाठी आपण तयार आहोत. फक्त उपकरण भाड़े आणि सेवा पुरवठावर आपला डेटा वापरला जातो आणि आपण तो तृतीय पक्षांशी सामाईल करत नाही.'
          : 'We are committed to protecting your personal information. Your data is only used for equipment bookings and service delivery, and we never share it with third parties without your consent.'
      };
    }
  };

  const formFields = [
    { key: 'fullName', label: t({ english: 'Full Name', hindi: 'पूरा नाम', tamil: 'முழுபெயர்', marathi: 'पूर्ण नाव' }), placeholder: strings.placeholders.fullName, icon: '👤' },
    { key: 'village', label: t({ english: 'Village', hindi: 'गाँव', tamil: 'கிராமம்', marathi: 'गाव' }), placeholder: strings.placeholders.village, icon: '🏘️' },
    { key: 'district', label: t({ english: 'District', hindi: 'जिला', tamil: 'மாவட்டம்', marathi: 'जिल्हा' }), placeholder: strings.placeholders.district, icon: '📍' },
    { key: 'state', label: t({ english: 'State', hindi: 'राज्य', tamil: 'மாநிலம்', marathi: 'राज्य' }), placeholder: strings.placeholders.state, icon: '🗺️' }
  ];

  return (
    <>
      {/* Modal rendered outside container */}
      {showTermsModal && (
        <>
          <div className="fixed inset-0 z-[9999] flex items-center justify-center animate-in fade-in duration-200">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowTermsModal(false)}
            />
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-[20px] w-[280px] max-h-[400px] overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-300 z-[10000]">
              {/* Header */}
              <div 
                className="p-4 border-b"
                style={{ borderColor: 'var(--cream)', background: '#FFF4E6' }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-bold" style={{ color: 'var(--saffron)' }}>
                    {getTermsContent().title}
                  </h3>
                  <button
                    onClick={() => setShowTermsModal(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/50"
                    style={{ color: 'var(--saffron)' }}
                  >
                    <span className="text-lg">×</span>
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 overflow-y-auto max-h-[250px]">
                <div className="text-[13px] leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                  {getTermsContent().content}
                </div>
                
                {/* Additional sections */}
                <div className="mt-4 space-y-3">
                  <div className="text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>
                      {language === 'hindi' ? 'डेटा संरक्षण' : language === 'tamil' ? 'தரவு பாதுகாப்பு' : language === 'marathi' ? 'डेटा संरक्षण' : 'Data Protection'}
                    </strong>
                    <p className="mt-1">
                      {language === 'hindi' 
                        ? 'आपका डेटा एन्क्रिप्टेड रूप में संग्रहीत किया जाता है और केवल आवश्यक सेवाओं के लिए उपयोग किया जाता है।'
                        : language === 'tamil'
                        ? 'உங்கள் தரவு குறியாக்கப்பட்ட வடிவத்தில் சேமிக்கப்படுகிறது மற்றும் அவசரச் சேவைகளுக்கு மட்டுமே பயன்படுத்தப்படுகிறது.'
                        : language === 'marathi'
                        ? 'आपला डेटा एन्क्रिप्टेड फॉर्मॅटमध्ये साठवला जातो आणि फक्त आवश्यक सेवांसाठी वापरला जातो.'
                        : 'Your data is stored in encrypted format and used only for essential services.'
                      }
                    </p>
                  </div>
                  
                  <div className="text-[12px]" style={{ color: 'var(--text-mid)' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>
                      {language === 'hindi' ? 'उपयोग की शर्तें' : language === 'tamil' ? 'பயன்பாட்டு நிபந்தனைகள்' : language === 'marathi' ? 'वापराच्या अटी' : 'Usage Terms'}
                    </strong>
                    <p className="mt-1">
                      {language === 'hindi'
                        ? 'प्लेटफॉर्म का उपयोग केवल कृषि उपकरणों के लिए है। किसी भी अवैध गतिविधि के लिए जिम्मेदारी उपयोगकर्ता की होगी।'
                        : language === 'tamil'
                        ? 'தளம் வேளாண் கருவிகளுக்கு மட்டுமே பயன்படுத்தப்படுகிறது. எந்தவொரு சட்டவிரோத செயல்பாட்டிற்கும் பொறுப்பு பயனருக்கு உரியது.'
                        : language === 'marathi'
                        ? 'प्लॅटफॉर्म फक्त शेती उपकरणांसाठी आहे. कोणत्याही अवैध कृतीसाठी जबाबदारी वापरकर्त्याची असेल.'
                        : 'The platform is intended for agricultural equipment only. Users are responsible for any illegal activities.'
                      }
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t" style={{ borderColor: 'var(--cream)' }}>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="w-full py-2 rounded-lg font-semibold text-sm transition-colors"
                  style={{ 
                    background: 'var(--saffron)', 
                    color: 'white',
                    boxShadow: '0 2px 8px rgba(255,127,0,0.3)'
                  }}
                >
                  {language === 'hindi' ? 'समझ गया' : language === 'tamil' ? 'புரிந்தது' : language === 'marathi' ? 'समजले' : 'Got it'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Container */}
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

          {/* Header */}
          <div 
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
            style={{ background: 'var(--gradient-green)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {strings.step}
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.heading}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <div 
                className="h-full rounded-full transition-all"
                style={{ background: 'white', width: '100%' }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Avatar Selection */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-mid)' }}>
                {strings.chooseAvatar}
              </div>
              <div className="flex gap-2 justify-center">
                {['👨‍🌾', '👩‍🌾', '🧑‍🌾', '👴', '👵'].map((emoji) => (
                  <div
                    key={emoji}
                    className="ky-tap-avatar w-14 h-14 rounded-2xl flex items-center justify-center text-[28px]"
                    style={{
                      background: 'var(--cream)',
                      border: '2px solid #E8E3DA'
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-[10px]">
              {formFields.map((field) => (
                <div
                  key={field.key}
                  className="bg-white rounded-[18px] p-4"
                  style={{ boxShadow: 'var(--card-shadow)' }}
                >
                  <div className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                    {field.label}
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-lg opacity-40">{field.icon}</span>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="flex-1 text-[15px] font-semibold bg-transparent outline-none"
                      style={{ color: 'var(--text-dark)' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Farm Details */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.farmSize}
              </div>
              <div className="flex items-center gap-2">
                {['1-5', '5-10', '10+'].map((size) => (
                  <div
                    key={size}
                    className="ky-tap-chip flex-1 rounded-[12px] py-2 text-center text-[13px] font-semibold"
                    style={{
                      background: 'var(--cream)',
                      border: '2px solid #E8E3DA',
                      color: 'var(--text-mid)'
                    }}
                  >
                    {size} acres
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Preferences */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.equipmentNeed}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { emoji: '🚜', label: t({ english: 'Tractors', hindi: 'ट्रैक्टर', tamil: 'டிராக்டர்கள்', marathi: 'ट्रॅक्टर' }) },
                  { emoji: '🌾', label: t({ english: 'Harvesters', hindi: 'हार्वेस्टर', tamil: 'அறுவடையாளர்கள்', marathi: 'हार्वेस्टर' }) },
                  { emoji: '🌱', label: t({ english: 'Cultivators', hindi: 'कल्टीवेटर', tamil: 'மண்ணெடுப்பான்', marathi: 'कुल्टिव्हेटर' }) },
                  { emoji: '🚰', label: t({ english: 'Pumps', hindi: 'पंप', tamil: 'பம்புகள்', marathi: 'पंप' }) }
                ].map((eq) => (
                  <div
                    key={eq.label}
                    className="ky-tap-chip flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-semibold"
                    style={{
                      background: 'var(--cream)',
                      border: '2px solid #E8E3DA',
                      color: 'var(--text-dark)'
                    }}
                  >
                    <span>{eq.emoji}</span>
                    <span>{eq.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Preference */}
            <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.languagePreference}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇳</span>
                  <div>
                    <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                      {strings.languageLabel}
                    </div>
                    <div 
                      className="text-[11px]"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--text-soft)' }}
                    >
                      हिंदी
                    </div>
                  </div>
                </div>
                <button className="ky-tap-link text-xs font-semibold" style={{ color: 'var(--saffron)' }}>
                  {strings.change}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mt-[14px] px-2">
              <div 
                className="w-[18px] h-[18px] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 cursor-pointer"
                style={{ background: 'white', border: '2px solid #E8E3DA' }}
              />
              <div className="text-[11px] leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                I agree to the{' '}
                <button 
                  onClick={() => openTermsModal('terms')}
                  className="font-semibold underline"
                  style={{ color: 'var(--saffron)' }}
                >
                  Terms & Conditions
                </button>
                {' '}and{' '}
                <button 
                  onClick={() => openTermsModal('privacy')}
                  className="font-semibold underline"
                  style={{ color: 'var(--saffron)' }}
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="px-5 pb-5 pt-2">
            <button
              className="w-full rounded-2xl py-[15px] font-bold text-[15px] text-white opacity-50"
              style={{
                background: 'linear-gradient(135deg, #999, #777)',
                boxShadow: 'none'
              }}
            >
              {strings.cta}
            </button>
          </div>

          {/* Notch */}
          <div 
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
            style={{ borderRadius: '0 0 14px 14px' }}
          />
        </div>
      </div>
    </>
  );
}
