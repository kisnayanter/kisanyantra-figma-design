import { useLanguage } from '../../contexts/language';

export function HelpSupportDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    helpSupport: t({ english: 'Help & Support', hindi: 'सहायता और समर्थन', tamil: 'உதவி & ஆதரவு', marathi: 'मदत आणि समर्थन' }),
    subtitle: t({ english: "We're here to help", hindi: 'हम यहाँ मदद के लिए हैं', tamil: 'நாங்கள் உதவ இங்கே இருக்கிறோம்', marathi: 'आम्ही मदत करण्यासाठी येथे आहोत' }),
    searchPlaceholder: t({ english: 'Search for help...', hindi: 'सहायता खोजें...', tamil: 'உதவி தேடுங்கள்...', marathi: 'मदत शोधा...' }),
    callUs: t({ english: 'Call Us', hindi: 'कॉल करें', tamil: 'அழைக்கவும்', marathi: 'कॉल करा' }),
    whatsApp: t({ english: 'WhatsApp', hindi: 'व्हाट्सएप', tamil: 'வாட்ஸ்அப்', marathi: 'व्हाट्सअप' }),
    email: t({ english: 'Email', hindi: 'ईमेल', tamil: 'மின்னஞ்சல்', marathi: 'ईमेल' }),
    faqTitle: t({ english: 'Frequently Asked Questions', hindi: 'अक्सर पूछे जाने वाले प्रश्न', tamil: 'அடிக்கடி கேட்கப்படும் கேள்விகள்', marathi: 'वारंवार विचारले जाणारे प्रश्न' }),
    faq1: t({ english: 'How do I book equipment?', hindi: 'मैं उपकरण कैसे बुक करूं?', tamil: 'உபகரணத்தை எவ்வாறு முன்பதிவு செய்வது?', marathi: 'मी उपकरणे कसे बुक करू?' }),
    faq2: t({ english: 'How do I cancel a booking?', hindi: 'मैं बुकिंग कैसे रद्द करूं?', tamil: 'முன்பதிவை எவ்வாறு ரத்து செய்வது?', marathi: 'मी बुकिंग कशी रद्द करू?' }),
    faq3: t({ english: 'How does payment work?', hindi: 'भुगतान कैसे काम करता है?', tamil: 'கட்டணம் எவ்வாறு செயல்படுகிறது?', marathi: 'पेमेंट कसे काम करते?' }),
    faq3Answer: t({
      english: 'Payment is collected after booking confirmation. You can pay via UPI, bank transfer, or cash. Platform fee of 5% applies.',
      hindi: 'बुकिंग की पुष्टि के बाद भुगतान लिया जाता है। आप UPI, बैंक ट्रांसफर या नकद से भुगतान कर सकते हैं। 5% प्लेटफॉर्म शुल्क लागू है।',
      tamil: 'முன்பதிவு உறுதிப்படுத்தலுக்குப் பிறகு கட்டணம் வசூலிக்கப்படும். UPI, வங்கி பரிமாற்றம் அல்லது பணம் மூலம் செலுத்தலாம். 5% தளக் கட்டணம் பொருந்தும்.',
      marathi: 'बुकिंग पुष्टीनंतर पेमेंट घेतले जाते. तुम्ही UPI, बँक ट्रान्सफर किंवा रोखीने पेमेंट करू शकता. 5% प्लॅटफॉर्म शुल्क लागू.'
    }),
    faq4: t({ english: 'How do I post a request?', hindi: 'मैं अनुरोध कैसे पोस्ट करूं?', tamil: 'கோரிக்கையை எவ்வாறு பதிவிடுவது?', marathi: 'मी विनंती कशी पोस्ट करू?' }),
    faq5: t({ english: 'How do I contact the equipment owner?', hindi: 'मैं उपकरण मालिक से कैसे संपर्क करूं?', tamil: 'உபகரண உரிமையாளரை எவ்வாறு தொடர்பு கொள்வது?', marathi: 'मी उपकरण मालकाशी कसा संपर्क करू?' }),
    helpTopics: t({ english: 'Help Topics', hindi: 'सहायता विषय', tamil: 'உதவி தலைப்புகள்', marathi: 'मदत विषय' }),
    topicBookings: t({ english: 'Bookings', hindi: 'बुकिंग', tamil: 'முன்பதிவுகள்', marathi: 'बुकिंग' }),
    topicEquipment: t({ english: 'Equipment', hindi: 'उपकरण', tamil: 'உபகரணம்', marathi: 'उपकरणे' }),
    topicPayments: t({ english: 'Payments', hindi: 'भुगतान', tamil: 'கட்டணங்கள்', marathi: 'पेमेंट' }),
    topicAccount: t({ english: 'Account', hindi: 'खाता', tamil: 'கணக்கு', marathi: 'खाते' }),
    stillNeedHelp: t({ english: "Can't find what you're looking for?", hindi: 'जो आप ढूंढ रहे हैं वह नहीं मिल रहा?', tamil: 'நீங்கள் தேடுவது கிடைக்கவில்லையா?', marathi: 'तुम्ही शोधत आहात ते सापडत नाही?' }),
    supportHours: t({ english: 'Our support team is available 7 AM - 10 PM', hindi: 'हमारी सहायता टीम सुबह 7 बजे - रात 10 बजे तक उपलब्ध है', tamil: 'எங்கள் ஆதரவு குழு காலை 7 - இரவு 10 வரை கிடைக்கும்', marathi: 'आमचा सपोर्ट टीम सकाळी 7 - रात्री 10 पर्यंत उपलब्ध आहे' }),
    contactSupport: t({ english: 'Contact Support', hindi: 'सहायता से संपर्क करें', tamil: 'ஆதரவைத் தொடர்பு கொள்ளவும்', marathi: 'सपोर्टशी संपर्क करा' }),
  };

  const faqItems = [
    { question: strings.faq1, expanded: false },
    { question: strings.faq2, expanded: false },
    { question: strings.faq3, expanded: true, answer: strings.faq3Answer },
    { question: strings.faq4, expanded: false },
    { question: strings.faq5, expanded: false },
  ];

  const helpTopics = [
    { icon: '📋', label: strings.topicBookings },
    { icon: '🚜', label: strings.topicEquipment },
    { icon: '💰', label: strings.topicPayments },
    { icon: '👤', label: strings.topicAccount },
  ];

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
            <span className="font-bold text-[11px]">9:44</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Saffron Header */}
          <div
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
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
                  className="text-white text-[18px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.helpSupport}
                </div>
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {strings.subtitle}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-5">
            {/* Search Bar */}
            <div
              className="bg-white rounded-[16px] flex items-center gap-2 px-4 py-3 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <span className="text-[14px]">🔍</span>
              <span className="text-[12px]" style={{ color: 'var(--text-soft)' }}>
                {strings.searchPlaceholder}
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 mb-4">
              <div
                className="flex-1 rounded-[14px] py-3 text-center cursor-pointer"
                style={{ border: '1.5px solid var(--saffron)', background: 'white' }}
              >
                <div className="text-[16px] mb-1">📞</div>
                <div className="text-[10px] font-semibold" style={{ color: 'var(--saffron)' }}>
                  {strings.callUs}
                </div>
              </div>
              <div
                className="flex-1 rounded-[14px] py-3 text-center cursor-pointer"
                style={{ border: '1.5px solid var(--green)', background: 'white' }}
              >
                <div className="text-[16px] mb-1">💬</div>
                <div className="text-[10px] font-semibold" style={{ color: 'var(--green)' }}>
                  {strings.whatsApp}
                </div>
              </div>
              <div
                className="flex-1 rounded-[14px] py-3 text-center cursor-pointer"
                style={{ border: '1.5px solid var(--text-soft)', background: 'white' }}
              >
                <div className="text-[16px] mb-1">📧</div>
                <div className="text-[10px] font-semibold" style={{ color: 'var(--text-mid)' }}>
                  {strings.email}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-4">
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                {strings.faqTitle}
              </div>
              <div className="space-y-2">
                {faqItems.map((faq) => (
                  <div
                    key={faq.question}
                    className="bg-white rounded-[16px] overflow-hidden"
                    style={{ boxShadow: 'var(--card-shadow)' }}
                  >
                    <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
                      <span className="text-[11px] font-semibold flex-1 pr-2" style={{ color: 'var(--text-dark)' }}>
                        {faq.question}
                      </span>
                      <span className="text-[12px]" style={{ color: 'var(--text-soft)' }}>
                        {faq.expanded ? '▼' : '▶'}
                      </span>
                    </div>
                    {faq.expanded && faq.answer && (
                      <div
                        className="px-4 pb-3 text-[10px] leading-relaxed"
                        style={{ color: 'var(--text-mid)', borderTop: '1px solid #F5F2ED' }}
                      >
                        <div className="pt-2">{faq.answer}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Help Topics Grid */}
            <div className="mb-4">
              <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                {strings.helpTopics}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {helpTopics.map((topic) => (
                  <div
                    key={topic.label}
                    className="bg-white rounded-[16px] p-3 flex items-center gap-2 cursor-pointer"
                    style={{ boxShadow: 'var(--card-shadow)' }}
                  >
                    <span className="text-[18px]">{topic.icon}</span>
                    <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                      {topic.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Still Need Help Card */}
            <div
              className="rounded-[20px] p-4 text-center"
              style={{ background: 'var(--saffron-pale)' }}
            >
              <div className="text-[13px] font-bold mb-1" style={{ color: 'var(--text-dark)' }}>
                {strings.stillNeedHelp}
              </div>
              <div className="text-[10px] mb-3" style={{ color: 'var(--text-mid)' }}>
                {strings.supportHours}
              </div>
              <button
                className="px-5 py-2.5 rounded-[14px] text-white text-[12px] font-bold"
                style={{
                  background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)',
                  boxShadow: '0 4px 16px rgba(255,107,0,0.3)'
                }}
              >
                {strings.contactSupport}
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
