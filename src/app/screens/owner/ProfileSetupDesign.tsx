import { useLanguage } from '../../contexts/language';
import { useState, useRef } from 'react';

export function ProfileSetupDesign() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showManualAddress, setShowManualAddress] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsType, setTermsType] = useState<'terms' | 'privacy'>('terms');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadAreaRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const { selectText, language, setLanguage } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setProfileImage(result);
        // Hide upload area, show preview
        if (uploadAreaRef.current) uploadAreaRef.current.classList.add('hidden');
        if (previewRef.current) previewRef.current.classList.remove('hidden');
        // Update preview image
        const previewImg = document.getElementById('preview-img') as HTMLImageElement;
        if (previewImg) previewImg.src = result;
      };
      reader.readAsDataURL(file);
    }
  };

  const changePhoto = () => {
    setProfileImage(null);
    // Show upload area, hide preview
    if (uploadAreaRef.current) uploadAreaRef.current.classList.remove('hidden');
    if (previewRef.current) previewRef.current.classList.add('hidden');
    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const languageOptions = [
    { code: 'english', name: 'English', flag: '🇬🇧' },
    { code: 'hindi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'tamil', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'marathi', name: 'मराठी', flag: '🇮🇳' }
  ];

  const getCurrentLanguageOption = () => {
    return languageOptions.find(option => option.code === language) || languageOptions[0];
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

  const strings = {
    step: t({
      english: 'Almost there!',
      hindi: 'लगभग तैयार!',
      tamil: 'கிட்டத்தட்ட முடிந்தது!',
      marathi: 'जवळपास पूर्ण!'
    }),
    heading: t({
      english: 'Complete Your Profile',
      hindi: 'अपना प्रोफ़ाइल पूरा करें',
      tamil: 'உங்கள் சுயவிவரத்தை முடிக்கவும்',
      marathi: 'आपले प्रोफाइल पूर्ण करा'
    }),
    fullName: t({ english: 'Full Name', hindi: 'पूरा नाम', tamil: 'முழுபெயர்', marathi: 'पूर्ण नाव' }),
    village: t({ english: 'Village', hindi: 'गाँव', tamil: 'கிராமம்', marathi: 'गाव' }),
    district: t({ english: 'District', hindi: 'जिला', tamil: 'மாவட்டம்', marathi: 'जिल्हा' }),
    state: t({ english: 'State', hindi: 'राज्य', tamil: 'மாநிலம்', marathi: 'राज्य' }),
    location: t({
      english: 'Location',
      hindi: 'स्थान',
      tamil: 'இடம்',
      marathi: 'स्थान'
    }),
    detectLocation: t({
      english: 'Detect My Location',
      hindi: 'मेरा स्थान खोजें',
      tamil: 'எனது இருப்பிடத்தைக் கண்டறிய',
      marathi: 'माझे स्थान शोधा'
    }),
    orEnterManually: t({
      english: 'Or enter address manually',
      hindi: 'या फिर मैनुअली पता दर्ज करें',
      tamil: 'அல்லது முகவரியை கைமுறையாக உள்ளிடவும்',
      marathi: 'अन्यथा हातेने पत्ता एंटर करा'
    }),
    farmSize: t({
      english: 'Farm Size (optional)',
      hindi: 'खेत का आकार (वैकल्पिक)',
      tamil: 'பண்ணை அளவு (விருப்பம்)',
      marathi: 'शेतीचे क्षेत्रफळ (ऐच्छिक)'
    }),
    languagePreference: t({
      english: 'Preferred Language',
      hindi: 'पसंदीदा भाषा',
      tamil: 'விருப்ப மொழி',
      marathi: 'आवडती भाषा'
    }),
    languageName: t({
      english: 'Hindi',
      hindi: 'हिंदी',
      tamil: 'இந்தி',
      marathi: 'हिंदी'
    }),
    change: t({
      english: 'Change',
      hindi: 'बदलें',
      tamil: 'மாற்றவும்',
      marathi: 'बदला'
    }),
    terms: t({
      english: 'I agree to the Terms & Conditions and Privacy Policy',
      hindi: 'मैं नियम व शर्तें और गोपनीयता नीति से सहमत हूँ',
      tamil: 'நிபந்தனைகள், விதிமுறைகள் மற்றும் தனியுரிமை கொள்கையை ஒப்புக்கொள்கிறேன்',
      marathi: 'मी नियम व अटी आणि गोपनीयता धोरणांना सहमत आहे'
    }),
    button: t({
      english: '🎉 Complete Setup',
      hindi: '🎉 सेटअप पूरा करें',
      tamil: '🎉 அமைப்பை முடிக்கவும்',
      marathi: '🎉 सेटअप पूर्ण करा'
    })
  };

  const formFields = [
    { key: 'fullName', label: strings.fullName, value: 'Ramu Kisan', icon: '👤' }
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
                style={{ borderColor: 'var(--cream)', background: 'var(--green-pale)' }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-bold" style={{ color: 'var(--green)' }}>
                    {getTermsContent().title}
                  </h3>
                  <button
                    onClick={() => setShowTermsModal(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/50"
                    style={{ color: 'var(--green)' }}
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
                    background: 'var(--green)',
                    color: 'white',
                    boxShadow: '0 2px 8px rgba(26,122,59,0.3)'
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
            </div>

            {/* Form */}
            <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
              {/* Profile Picture Upload - Minimalist Design */}
              <div className="bg-white rounded-[20px] p-6 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[13px] font-semibold mb-4 text-center" style={{ color: 'var(--text-mid)' }}>
                  Profile Picture
                </div>

                {/* Single Upload Area */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="profile-upload"
                      accept="image/*"
                      capture="environment"
                      className="hidden"
                      onChange={handleImageUpload}
                    />

                    {/* Upload Area - Hidden after upload */}
                    <div
                      ref={uploadAreaRef}
                      id="upload-area"
                      className="cursor-pointer block transition-all duration-300 hover:scale-105"
                    >
                      <label htmlFor="profile-upload" className="cursor-pointer block">
                        <div
                          className="w-24 h-24 rounded-full flex flex-col items-center justify-center border-2 border-dashed transition-all duration-300 hover:border-solid hover:shadow-lg"
                          style={{
                            background: 'var(--green-pale)',
                            borderColor: 'var(--green)',
                            borderWidth: '2px'
                          }}
                        >
                          <span className="text-3xl mb-1">📷</span>
                          <span className="text-xs font-medium" style={{ color: 'var(--green)' }}>
                            Upload Photo
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Preview - Hidden until upload */}
                    <div
                      ref={previewRef}
                      id="photo-preview"
                      className="hidden absolute inset-0 w-24 h-24 rounded-full overflow-hidden border-2 border-green-500"
                    >
                      <img id="preview-img" src="" alt="Profile" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Status Text */}
                  <div className="mt-3 text-center">
                    {!profileImage ? (
                      <>
                        <p className="text-xs" style={{ color: 'var(--text-soft)' }}>
                          Tap to capture or upload
                        </p>
                        <p className="text-xs mt-1" style={{ color: 'var(--text-soft)' }}>
                          Auto-cropped to circle
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-xs font-medium flex items-center justify-center gap-1" style={{ color: 'var(--green)' }}>
                          <span>✅</span>
                          <span>Perfect!</span>
                        </p>
                        <button
                          onClick={changePhoto}
                          className="text-xs mt-1 underline"
                          style={{ color: 'var(--green)' }}
                        >
                          Change Photo
                        </button>
                      </>
                    )}
                  </div>
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
                    <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                      {field.label}
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span className="text-lg">{field.icon}</span>
                      <input
                        type="text"
                        value={field.value}
                        readOnly
                        className="flex-1 text-[15px] font-semibold bg-transparent outline-none"
                        style={{ color: 'var(--text-dark)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* GPS Location */}
              <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                  {strings.location}
                </div>
                <button
                  className="ky-tap-gps w-full rounded-[12px] py-3 flex items-center justify-center gap-2"
                  style={{ background: 'var(--green-pale)', border: '2px solid var(--green)' }}
                >
                  <span className="text-lg">📍</span>
                  <span className="text-[14px] font-semibold" style={{ color: 'var(--green)' }}>
                    {strings.detectLocation}
                  </span>
                </button>
                <div className="mt-2 text-center">
                  <button
                    onClick={() => setShowManualAddress(!showManualAddress)}
                    className="ky-tap-link text-xs underline"
                    style={{ color: 'var(--green)' }}
                  >
                    {strings.orEnterManually}
                  </button>
                </div>
              </div>

              {/* Manual Address Fields - Shown when link is clicked */}
              {showManualAddress && (
                <div className="bg-white rounded-[18px] p-4 mt-[10px] animate-in slide-in-from-top duration-300" style={{ boxShadow: 'var(--card-shadow)' }}>
                  <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                    Enter Address Details
                  </div>
                  <div className="space-y-[10px]">
                    <div className="bg-gray-50 rounded-[12px] p-3">
                      <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>Village</div>
                      <input
                        type="text"
                        placeholder="Enter your village name"
                        className="w-full text-[13px] bg-transparent outline-none"
                        style={{ color: 'var(--text-dark)' }}
                      />
                    </div>
                    <div className="bg-gray-50 rounded-[12px] p-3">
                      <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>District</div>
                      <input
                        type="text"
                        placeholder="Enter your district"
                        className="w-full text-[13px] bg-transparent outline-none"
                        style={{ color: 'var(--text-dark)' }}
                      />
                    </div>
                    <div className="bg-gray-50 rounded-[12px] p-3">
                      <div className="text-[10px] mb-1" style={{ color: 'var(--text-soft)' }}>State</div>
                      <input
                        type="text"
                        placeholder="Enter your state"
                        className="w-full text-[13px] bg-transparent outline-none"
                        style={{ color: 'var(--text-dark)' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className="bg-white rounded-[18px] p-4 mt-[10px]" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                  {strings.farmSize}
                </div>
                <div className="flex items-center gap-2">
                  {['1-5', '5-10', '10+'].map((size, i) => (
                    <div
                      key={size}
                      className="ky-tap-chip flex-1 rounded-[12px] py-2 text-center text-[13px] font-semibold"
                      style={{
                        background: i === 1 ? 'var(--green-pale)' : 'var(--cream)',
                        border: i === 1 ? '2px solid var(--green)' : '2px solid #E8E3DA',
                        color: i === 1 ? 'var(--green)' : 'var(--text-mid)'
                      }}
                    >
                      {size} acres
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
                    <span className="text-xl">{getCurrentLanguageOption().flag}</span>
                    <div>
                      <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                        {getCurrentLanguageOption().name}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                    className="ky-tap-link text-xs font-semibold underline"
                    style={{ color: 'var(--green)' }}
                  >
                    {strings.change}
                  </button>
                </div>

                {/* Language Selector - Shown when Change is clicked */}
                {showLanguageSelector && (
                  <div className="mt-3 pt-3 border-t border-gray-200 animate-in slide-in-from-top duration-300">
                    <div className="text-[10px] font-semibold mb-2" style={{ color: 'var(--text-soft)' }}>
                      Select Language
                    </div>
                    <div className="space-y-2">
                      {languageOptions.map((option) => (
                        <button
                          key={option.code}
                          onClick={() => {
                            setLanguage(option.code as any);
                            setShowLanguageSelector(false);
                          }}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          style={{
                            background: option.code === language ? 'var(--green-pale)' : 'transparent',
                            border: option.code === language ? '1px solid var(--green)' : '1px solid transparent'
                          }}
                        >
                          <span className="text-lg">{option.flag}</span>
                          <span className="text-[13px] font-medium" style={{ color: 'var(--text-dark)' }}>
                            {option.name}
                          </span>
                          {option.code === language && (
                            <span className="ml-auto text-xs" style={{ color: 'var(--green)' }}>✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 mt-[14px] px-2">
                <div
                  className="w-[18px] h-[18px] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--green)', border: '2px solid var(--green)' }}
                >
                  <span className="text-white text-[10px]">✓</span>
                </div>
                <div className="text-[11px] leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                  I agree to the{' '}
                  <button
                    onClick={() => openTermsModal('terms')}
                    className="font-semibold underline"
                    style={{ color: 'var(--green)' }}
                  >
                    Terms & Conditions
                  </button>
                  {' '}and{' '}
                  <button
                    onClick={() => openTermsModal('privacy')}
                    className="font-semibold underline"
                    style={{ color: 'var(--green)' }}
                  >
                    Privacy Policy
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="px-5 pb-5 pt-2">
              <button
                className="ky-tap-cta-primary w-full rounded-2xl py-[15px] font-bold text-[15px] text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--green), var(--green-light))',
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
      </>
    </>
  );
}