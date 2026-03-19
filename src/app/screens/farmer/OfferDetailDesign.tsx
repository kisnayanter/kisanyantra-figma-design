import { useLanguage } from '../../contexts/language';

export function OfferDetailDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({ english: 'Offer Details', hindi: 'ऑफर विवरण', tamil: 'சலுகை விவரங்கள்', marathi: 'ऑफर तपशील' }),
    from: t({ english: 'from Harpreet Singh', hindi: 'हरप्रीत सिंह से', tamil: 'ஹர்ப்ரீத் சிங்கிடமிருந்து', marathi: 'हरप्रीत सिंग कडून' }),
    ownerProfile: t({ english: 'Owner Profile', hindi: 'मालिक प्रोफ़ाइल', tamil: 'உரிமையாளர் சுயவிவரம்', marathi: 'मालक प्रोफाइल' }),
    rating: t({ english: 'rating', hindi: 'रेटिंग', tamil: 'மதிப்பீடு', marathi: 'रेटिंग' }),
    reviews: t({ english: 'reviews', hindi: 'समीक्षाएं', tamil: 'மதிப்புரைகள்', marathi: 'पुनरावलोकने' }),
    memberSince: t({ english: 'Member since 2024', hindi: 'सदस्य 2024 से', tamil: '2024 முதல் உறுப்பினர்', marathi: '2024 पासून सदस्य' }),
    fromYourLocation: t({ english: 'from your location', hindi: 'आपके स्थान से', tamil: 'உங்கள் இடத்திலிருந்து', marathi: 'तुमच्या स्थानावरून' }),
    callOwner: t({ english: 'Call Owner', hindi: 'मालिक को कॉल', tamil: 'உரிமையாளரை அழைக்கவும்', marathi: 'मालकाला कॉल करा' }),
    whatsapp: t({ english: 'WhatsApp', hindi: 'व्हाट्सएप', tamil: 'வாட்ஸ்அப்', marathi: 'व्हाट्सअ‍ॅप' }),
    equipmentDetails: t({ english: 'Equipment Details', hindi: 'उपकरण विवरण', tamil: 'உபகரண விவரங்கள்', marathi: 'उपकरण तपशील' }),
    specs: t({ english: '50 HP · Diesel · 2021 model', hindi: '50 HP · डीजल · 2021 मॉडल', tamil: '50 HP · டீசல் · 2021 மாடல்', marathi: '50 HP · डिझेल · 2021 मॉडेल' }),
    operatorIncluded: t({ english: 'Operator included', hindi: 'ऑपरेटर शामिल', tamil: 'ஆப்பரேட்டர் சேர்க்கப்பட்டுள்ளது', marathi: 'ऑपरेटर समाविष्ट' }),
    trailerHitch: t({ english: 'Trailer hitch available', hindi: 'ट्रेलर हिच उपलब्ध', tamil: 'டிரெய்லர் ஹிட்ச் கிடைக்கும்', marathi: 'ट्रेलर हिच उपलब्ध' }),
    insuranceCovered: t({ english: 'Insurance covered', hindi: 'बीमा शामिल', tamil: 'காப்பீடு உள்ளடக்கியது', marathi: 'विमा समाविष्ट' }),
    pricing: t({ english: 'Pricing', hindi: 'मूल्य', tamil: 'விலை', marathi: 'किंमत' }),
    pricePerDay: t({ english: 'Price per day', hindi: 'प्रति दिन मूल्य', tamil: 'ஒரு நாளுக்கு விலை', marathi: 'दररोज किंमत' }),
    duration: t({ english: 'Duration', hindi: 'अवधि', tamil: 'காலம்', marathi: 'कालावधी' }),
    durationValue: t({ english: '4 days (Mar 20–23)', hindi: '4 दिन (मार्च 20–23)', tamil: '4 நாட்கள் (மார்ச் 20–23)', marathi: '4 दिवस (मार्च 20–23)' }),
    totalLabel: t({ english: 'Total', hindi: 'कुल', tamil: 'மொத்தம்', marathi: 'एकूण' }),
    breakdown: t({ english: '₹2,400 × 4 days', hindi: '₹2,400 × 4 दिन', tamil: '₹2,400 × 4 நாட்கள்', marathi: '₹2,400 × 4 दिवस' }),
    payment: t({ english: 'Payment', hindi: 'भुगतान', tamil: 'கட்டணம்', marathi: 'पेमेंट' }),
    paymentMethod: t({ english: 'Cash on arrival / UPI', hindi: 'कैश ऑन अराइवल / UPI', tamil: 'வரும்போது ரொக்கம் / UPI', marathi: 'आगमनावर रोख / UPI' }),
    ownerMessage: t({ english: "Owner's Message", hindi: 'मालिक का संदेश', tamil: 'உரிமையாளரின் செய்தி', marathi: 'मालकाचा संदेश' }),
    messageText: t({
      english: 'My tractor is in excellent condition. I can deliver it to your farm by 7 AM on Mar 20. Let me know if you need the trailer attachment.',
      hindi: 'मेरा ट्रैक्टर उत्कृष्ट स्थिति में है। मैं इसे 20 मार्च को सुबह 7 बजे तक आपके खेत तक पहुंचा सकता हूं। अगर आपको ट्रेलर अटैचमेंट चाहिए तो बताएं।',
      tamil: 'என் டிராக்டர் சிறந்த நிலையில் உள்ளது. மார்ச் 20 அன்று காலை 7 மணிக்கு உங்கள் பண்ணையில் டெலிவரி செய்ய முடியும். டிரெய்லர் இணைப்பு தேவைப்பட்டால் தெரிவிக்கவும்.',
      marathi: 'माझा ट्रॅक्टर उत्कृष्ट स्थितीत आहे. मी 20 मार्चला सकाळी 7 वाजता तुमच्या शेतात पोहोचवू शकतो. ट्रेलर अटॅचमेंट हवे असल्यास कळवा.'
    }),
    decline: t({ english: 'Decline', hindi: 'अस्वीकार', tamil: 'நிராகரி', marathi: 'नकार' }),
    acceptOffer: t({ english: 'Accept Offer', hindi: 'ऑफर स्वीकार करें', tamil: 'சலுகையை ஏற்கவும்', marathi: 'ऑफर स्वीकारा' }),
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
            <span className="font-bold text-[11px]">9:47</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Saffron gradient */}
          <div
            className="px-5 pt-4 pb-5 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.title}
                </div>
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {strings.from}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-4 pb-5 pt-4">
            {/* Owner Profile Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                👤 {strings.ownerProfile}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[24px]"
                  style={{ background: 'linear-gradient(135deg, var(--saffron), var(--gold))' }}
                >
                  👨‍🌾
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Harpreet Singh
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    ⭐ 4.7 {strings.rating} · 24 {strings.reviews} · {strings.memberSince}
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-mid)' }}>
                    📍 3.5 km {strings.fromYourLocation}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="ky-tap-icon flex-1 bg-[#0088CC] text-white rounded-[10px] py-2 text-[10px] font-bold text-center">
                  📞 {strings.callOwner}
                </div>
                <div className="ky-tap-share flex-1 bg-[#25D366] text-white rounded-[10px] py-2 text-[10px] font-bold text-center">
                  💬 {strings.whatsapp}
                </div>
              </div>
            </div>

            {/* Equipment Details Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                🚜 {strings.equipmentDetails}
              </div>
              <div className="text-[15px] font-bold mb-1" style={{ color: 'var(--text-dark)', fontFamily: "'Baloo 2', cursive" }}>
                Mahindra 475 DI
              </div>
              <div className="text-[11px] mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.specs}
              </div>
              <div className="flex gap-2 flex-wrap">
                <div
                  className="ky-tap-chip rounded-[10px] px-[10px] py-1.5 text-[10px] font-semibold"
                  style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)', color: 'var(--green)' }}
                >
                  ✓ {strings.operatorIncluded}
                </div>
                <div
                  className="ky-tap-chip rounded-[10px] px-[10px] py-1.5 text-[10px] font-semibold"
                  style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)', color: 'var(--green)' }}
                >
                  ✓ {strings.trailerHitch}
                </div>
                <div
                  className="ky-tap-chip rounded-[10px] px-[10px] py-1.5 text-[10px] font-semibold"
                  style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green)', color: 'var(--green)' }}
                >
                  ✓ {strings.insuranceCovered}
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💰 {strings.pricing}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.pricePerDay}</span>
                  <span className="text-[18px] font-bold" style={{ color: 'var(--saffron)', fontFamily: "'Baloo 2', cursive" }}>₹2,400/day</span>
                </div>
                <div className="flex justify-between items-center py-1" style={{ borderTop: '1px solid #F5F2ED' }}>
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.duration}</span>
                  <span className="text-[11px] font-bold" style={{ color: 'var(--text-dark)' }}>{strings.durationValue}</span>
                </div>
                <div className="flex justify-between items-center py-1" style={{ borderTop: '1px solid #F5F2ED' }}>
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.totalLabel}</span>
                  <div className="text-right">
                    <div className="text-[16px] font-bold" style={{ color: 'var(--green)' }}>₹9,600</div>
                    <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>{strings.breakdown}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1" style={{ borderTop: '1px solid #F5F2ED' }}>
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.payment}</span>
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>{strings.paymentMethod}</span>
                </div>
              </div>
            </div>

            {/* Owner's Message Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💬 {strings.ownerMessage}
              </div>
              <div
                className="rounded-[12px] p-3 text-[11px] leading-relaxed"
                style={{ background: 'var(--cream)', color: 'var(--text-mid)', border: '1px solid #E8E3DA' }}
              >
                "{strings.messageText}"
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="px-4 pb-4 flex gap-3">
            <div
              className="ky-tap-action-destructive flex-1 rounded-[14px] py-3 text-[12px] font-bold text-center"
              style={{ background: '#FFF0F0', color: '#CC3333', border: '1.5px solid #FFCCCC' }}
            >
              ✕ {strings.decline}
            </div>
            <div
              className="ky-tap-action-confirm flex-1 rounded-[14px] py-3 text-[12px] font-bold text-center text-white"
              style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 4px 20px rgba(26,122,59,0.35)' }}
            >
              ✓ {strings.acceptOffer}
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
