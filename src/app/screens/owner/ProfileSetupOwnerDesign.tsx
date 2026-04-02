import { useState, useRef } from 'react';
import { useLanguage } from '../../contexts/language';
import type { LanguageOption } from '../../contexts/language';

export function ProfileSetupOwnerDesign() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showManualAddress, setShowManualAddress] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsType, setTermsType] = useState<'terms' | 'privacy'>('terms');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadAreaRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

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
        const previewImg = document.getElementById('preview-img-owner') as HTMLImageElement;
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
            <span className="font-bold text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>9:43</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Modern Header with Green Gradient & Curved Bottom */}
          <div 
            className="px-5 pt-4 pb-[44px] rounded-b-[36px] relative"
            style={{ 
              background: 'var(--gradient-green)',
              boxShadow: 'var(--card-shadow-green)',
              backgroundImage: `
                var(--gradient-green),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="ky-tap-back w-9 h-9 rounded-[11px] flex items-center justify-center text-white text-base backdrop-blur-sm"
                style={{ background: 'rgba(255,255,255,0.15)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              >
                ←
              </div>
              <div>
                <div className="text-[13px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}>
                  🌿 Owner Profile Setup
                </div>
                <div 
                  className="text-white text-[20px] font-bold leading-tight mt-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Complete Your Profile
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-5">
            {/* Profile Picture Upload - Minimalist Design */}
            <div className="bg-white rounded-[20px] p-6 mb-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-4 text-center" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                Profile Picture
              </div>
              
              {/* Single Upload Area */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="profile-upload-owner"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  
                  {/* Upload Area - Hidden after upload */}
                  <div 
                    ref={uploadAreaRef}
                    id="upload-area-owner"
                    className="cursor-pointer block transition-all duration-300 hover:scale-105"
                  >
                    <label htmlFor="profile-upload-owner" className="cursor-pointer block">
                      <div 
                        className="w-24 h-24 rounded-full flex flex-col items-center justify-center border-2 border-dashed transition-all duration-300 hover:border-solid hover:shadow-lg"
                        style={{ 
                          background: 'var(--green-pale)', 
                          borderColor: 'var(--green-primary)',
                          borderWidth: '2px'
                        }}
                      >
                        <span className="text-3xl mb-1">📷</span>
                        <span className="text-xs font-medium" style={{ color: 'var(--green-primary)' }}>
                          Upload Photo
                        </span>
                      </div>
                    </label>
                  </div>
                  
                  {/* Preview - Hidden until upload */}
                  <div 
                    ref={previewRef}
                    id="photo-preview-owner" 
                    className="hidden absolute inset-0 w-24 h-24 rounded-full overflow-hidden border-2 border-green-500"
                  >
                    <img id="preview-img-owner" src="" alt="Profile" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Status Text */}
                <div className="mt-3 text-center">
                  {!profileImage ? (
                    <>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                        Tap to capture or upload
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                        Auto-cropped to circle
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs font-medium flex items-center justify-center gap-1" style={{ color: 'var(--green-primary)' }}>
                        <span>✅</span>
                        <span>Perfect!</span>
                      </p>
                      <button 
                        onClick={changePhoto}
                        className="text-xs mt-1 underline"
                        style={{ color: 'var(--green-primary)' }}
                      >
                        Change Photo
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              {[
                { label: 'Full Name', value: 'Suresh Patil', icon: '👤' }
              ].map((field) => (
                <div
                  key={field.label}
                  className="bg-white rounded-[20px] p-5 transition-all duration-200"
                  style={{ boxShadow: 'var(--card-shadow-sm)' }}
                >
                  <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                    {field.label}
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-lg">{field.icon}</span>
                    <input
                      type="text"
                      value={field.value}
                      readOnly
                      className="flex-1 text-[16px] font-semibold bg-transparent outline-none"
                      style={{ color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* GPS Location */}
            <div className="bg-white rounded-[20px] p-5 mt-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Location
              </div>
              <button 
                className="ky-tap-gps w-full rounded-[12px] py-3 flex items-center justify-center gap-2"
                style={{ background: 'var(--green-pale)', border: '2px solid var(--green-primary)' }}
              >
                <span className="text-lg">📍</span>
                <span className="text-[14px] font-semibold" style={{ color: 'var(--green-primary)', fontFamily: "'Inter', sans-serif" }}>
                  Detect My Location
                </span>
              </button>
              <div className="mt-2 text-center">
                <button 
                  onClick={() => setShowManualAddress(!showManualAddress)}
                  className="ky-tap-link text-xs underline"
                  style={{ color: 'var(--green-primary)', fontFamily: 'Inter, sans-serif' }}
                >
                  Or enter address manually
                </button>
              </div>
            </div>

            {/* Manual Address Fields - Shown when link is clicked */}
            {showManualAddress && (
              <div className="bg-white rounded-[20px] p-5 mt-4 animate-in slide-in-from-top duration-300" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
                <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                  Enter Address Details
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-[12px] p-3">
                    <div className="text-[10px] mb-1" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>Village</div>
                    <input
                      type="text"
                      placeholder="Enter your village name"
                      className="w-full text-[13px] bg-transparent outline-none"
                      style={{ color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div className="bg-gray-50 rounded-[12px] p-3">
                    <div className="text-[10px] mb-1" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>District</div>
                    <input
                      type="text"
                      placeholder="Enter your district"
                      className="w-full text-[13px] bg-transparent outline-none"
                      style={{ color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div className="bg-gray-50 rounded-[12px] p-3">
                    <div className="text-[10px] mb-1" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>State</div>
                    <input
                      type="text"
                      placeholder="Enter your state"
                      className="w-full text-[13px] bg-transparent outline-none"
                      style={{ color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Language Preference */}
            <div className="bg-white rounded-[20px] p-5 mt-4" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                Preferred Language
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getCurrentLanguageOption().flag}</span>
                  <div>
                    <div className="text-[15px] font-bold" style={{ color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}>
                      {getCurrentLanguageOption().name}
                    </div>
                    <div 
                      className="text-[12px]"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--text-secondary)' }}
                    >
                      {getCurrentLanguageOption().code === 'hindi' ? 'हिंदी' : 
                       getCurrentLanguageOption().code === 'tamil' ? 'தமிழ்' :
                       getCurrentLanguageOption().code === 'marathi' ? 'मराठी' : ''}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                  className="ky-tap-link text-xs font-semibold underline"
                  style={{ color: 'var(--green-primary)', fontFamily: 'Inter, sans-serif' }}
                >
                  Change
                </button>
              </div>
              
              {/* Language Selector - Shown when Change is clicked */}
              {showLanguageSelector && (
                <div className="mt-3 pt-3 border-t border-gray-200 animate-in slide-in-from-top duration-300">
                  <div className="text-[10px] font-semibold mb-2" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                    Select Language
                  </div>
                  <div className="space-y-2">
                    {languageOptions.map((option) => (
                      <button
                        key={option.code}
                        onClick={() => {
                          setLanguage(option.code as LanguageOption);
                          setShowLanguageSelector(false);
                        }}
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        style={{
                          background: option.code === language ? 'var(--green-pale)' : 'transparent',
                          border: option.code === language ? '1px solid var(--green-primary)' : '1px solid transparent'
                        }}
                      >
                        <span className="text-lg">{option.flag}</span>
                        <span className="text-[13px] font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}>
                          {option.name}
                        </span>
                        {option.code === language && (
                          <span className="ml-auto text-xs" style={{ color: 'var(--green-primary)' }}>✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mt-4 px-2">
              <div 
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'var(--green-primary)', border: '2px solid var(--green-primary)' }}
              >
                <span className="text-white text-[10px]">✓</span>
              </div>
              <div className="text-[12px] leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                I agree to the{' '}
                <button 
                  onClick={() => openTermsModal('terms')}
                  className="font-semibold underline"
                  style={{ color: 'var(--green-primary)' }}
                >
                  Terms & Conditions
                </button>
                {' '}and{' '}
                <button 
                  onClick={() => openTermsModal('privacy')}
                  className="font-semibold underline"
                  style={{ color: 'var(--green-primary)' }}
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>

          {/* Modern Green Gradient Button */}
          <div className="px-5 pb-6" style={{ paddingTop: '8px' }}>
            <button
              className="ky-tap-cta-primary w-full rounded-[16px] py-[18px] font-bold text-[16px] text-white flex items-center justify-center gap-2"
              style={{
                background: 'var(--gradient-green)',
                boxShadow: 'var(--card-shadow-green)',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              <span>Go to Dashboard</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
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
