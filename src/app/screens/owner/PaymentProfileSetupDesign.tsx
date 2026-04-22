import { useState } from 'react';
import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function PaymentProfileSetupDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);
  // Prototype state: simulate adding methods one by one
  const [addedMethods, setAddedMethods] = useState<string[]>([]);

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const strings = {
    title: t({ english: 'Payment Profile', hindi: 'भुगतान प्रोफ़ाइल', tamil: 'கட்டண சுயவிவரம்', marathi: 'पेमेंट प्रोफाइल' }),
    subtitleEmpty: t({ english: 'Set up how you receive payments', hindi: 'भुगतान प्राप्त करने का तरीका सेट करें', tamil: 'கட்டணம் பெற்கும் முறையை அமைக்கவும்', marathi: 'पेमेंट कसे प्राप्त करायचे ते सेट करा' }),
    subtitlePartial: t({ english: 'Add more methods or continue', hindi: 'और विधियाँ जोड़ें या जारी रखें', tamil: 'மேலும் முறைகளை சேர்க்கவும் அல்லது தொடரவும்', marathi: 'आणखी पद्धती जोडा किंवा सुरू ठेवा' }),
    noMethodTitle: t({ english: 'No Payment Methods Yet', hindi: 'अभी कोई भुगतान विधि नहीं', tamil: 'இன்னும் கட்டண முறைகள் இல்லை', marathi: 'अजून पेमेंट पद्धती नाहीत' }),
    noMethodDesc: t({ english: 'Add at least one method so renters can pay you after completing a booking.', hindi: 'कम से कम एक विधि जोड़ें ताकि किराएदार बुकिंग पूरी होने के बाद आपको भुगतान कर सकें।', tamil: 'குறைந்தது ஒரு முறையை சேர்க்கவும், இதனால் வாடகைதாரர்கள் முன்பதிவு முடிந்த பிறகு உங்களுக்கு கட்டணம் செலுத்தலாம்.', marathi: 'किमान एक पद्धत जोडा जेणेकरून भाडेकरू बुकिंग पूर्ण केल्यानंतर तुम्हाला पेमेंट करू शकतील.' }),
    addedTitle: t({ english: 'Methods Added', hindi: 'जोड़ी गई विधियाँ', tamil: 'சேர்க்கப்பட்ட முறைகள்', marathi: 'जोडलेल्या पद्धती' }),
    alsoAdd: t({ english: 'Also add', hindi: 'भी जोड़ें', tamil: 'மேலும் சேர்க்கவும்', marathi: 'देखील जोडा' }),
    goToManage: t({ english: '→ View & Manage My Methods', hindi: '→ मेरी विधियाँ देखें और प्रबंधित करें', tamil: '→ என் முறைகளை பார்க்கவும் & நிர்வகிக்கவும்', marathi: '→ माझ्या पद्धती पहा आणि व्यवस्थापित करा' }),
    tapToAdd: t({ english: 'Tap + to add', hindi: '+ दबाएं जोड़ने के लिए', tamil: '+ தட்டி சேர்க்கவும்', marathi: '+ दाबा जोडण्यासाठी' }),
    whyRequired: t({ english: 'Why is this required?', hindi: 'यह क्यों आवश्यक है?', tamil: 'இது ஏன் தேவை?', marathi: 'हे का आवश्यक आहे?' }),
    whyDesc: t({ english: 'Renters pay you directly after completing the rental. You must have at least one active method to accept bookings.', hindi: 'किराएदार किराया पूरा होने के बाद सीधे आपको भुगतान करते हैं। बुकिंग स्वीकार करने के लिए कम से कम एक सक्रिय विधि होनी चाहिए।', tamil: 'வாடகை முடிந்த பிறகு வாடகைதாரர்கள் நேரடியாக உங்களுக்கு கட்டணம் செலுத்துவார்கள். முன்பதிவுகளை ஏற்க குறைந்தது ஒரு செயலில் உள்ள முறை வேண்டும்.', marathi: 'भाडे पूर्ण झाल्यानंतर भाडेकरू तुम्हाला थेट पेमेंट करतात. बुकिंग स्वीकारण्यासाठी किमान एक सक्रिय पद्धत असणे आवश्यक आहे.' }),
    skipForNow: t({ english: 'Skip for now', hindi: 'अभी के लिए छोड़ें', tamil: 'இப்போதைக்கு தவிர்க்கவும்', marathi: 'आत्तासाठी वगळा' }),
    resetProto: t({ english: 'Reset prototype', hindi: 'प्रोटोटाइप रीसेट करें', tamil: 'மாதிரியை மீட்டமை', marathi: 'प्रोटोटाइप रीसेट करा' }),
  };

  const methodDefs = [
    {
      key: 'upi',
      icon: '📱',
      label: t({ english: 'Add UPI ID', hindi: 'UPI ID जोड़ें', tamil: 'UPI ID சேர்க்கவும்', marathi: 'UPI ID जोडा' }),
      sub: t({ english: 'PhonePe, GPay, Paytm — instant transfers', hindi: 'PhonePe, GPay, Paytm — तत्काल ट्रांसफर', tamil: 'PhonePe, GPay, Paytm — உடனடி பரிமாற்றம்', marathi: 'PhonePe, GPay, Paytm — त्वरित ट्रान्सफर' }),
      addedLabel: t({ english: 'UPI ID', hindi: 'UPI ID', tamil: 'UPI ID', marathi: 'UPI ID' }),
      addedDetail: 'ramesh.kumar@okicici',
      bg: 'linear-gradient(135deg, var(--green), var(--green-light))',
      shadow: '0 4px 12px rgba(26,122,59,0.3)',
      accentBg: 'rgba(26,122,59,0.07)',
      accentColor: 'var(--green)',
    },
    {
      key: 'bank',
      icon: '🏦',
      label: t({ english: 'Add Bank Account', hindi: 'बैंक खाता जोड़ें', tamil: 'வங்கி கணக்கு சேர்க்கவும்', marathi: 'बँक खाते जोडा' }),
      sub: t({ english: 'NEFT / IMPS — direct to savings account', hindi: 'NEFT/IMPS — सीधे बचत खाते में', tamil: 'NEFT/IMPS — சேமிப்பு கணக்கிற்கு நேரடியாக', marathi: 'NEFT/IMPS — थेट बचत खात्यात' }),
      addedLabel: t({ english: 'Bank A/C', hindi: 'बैंक खाता', tamil: 'வங்கி கணக்கு', marathi: 'बँक खाते' }),
      addedDetail: 'SBI ****4521',
      bg: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
      shadow: '0 4px 12px rgba(30,64,175,0.3)',
      accentBg: 'rgba(30,64,175,0.07)',
      accentColor: '#1E40AF',
    },
    {
      key: 'qr',
      icon: '▦',
      label: t({ english: 'Add QR Code', hindi: 'QR कोड जोड़ें', tamil: 'QR குறியீடு சேர்க்கவும்', marathi: 'QR कोड जोडा' }),
      sub: t({ english: 'Upload or generate a scannable QR', hindi: 'स्कैनेबल QR अपलोड करें या बनाएं', tamil: 'ஸ்கேன் செய்யக்கூடிய QR பதிவேற்றவும் அல்லது உருவாக்கவும்', marathi: 'स्कॅन करण्यायोग्य QR अपलोड करा किंवा तयार करा' }),
      addedLabel: t({ english: 'QR Code', hindi: 'QR कोड', tamil: 'QR குறியீடு', marathi: 'QR कोड' }),
      addedDetail: 'Generated from UPI ID',
      bg: 'linear-gradient(135deg, #0E7490, #06B6D4)',
      shadow: '0 4px 12px rgba(14,116,144,0.3)',
      accentBg: 'rgba(14,116,144,0.07)',
      accentColor: '#0E7490',
    },
  ];

  const unadded = methodDefs.filter(m => !addedMethods.includes(m.key));
  const added = methodDefs.filter(m => addedMethods.includes(m.key));
  const hasAny = added.length > 0;

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

          {/* Header */}
          <div
            className="px-[18px] pt-3 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.75)', ...inter }}>
                  {hasAny ? strings.subtitlePartial : strings.subtitleEmpty}
                </div>
                <div className="text-white text-[17px] font-bold" style={poppins}>
                  {strings.title}
                </div>
              </div>
              {hasAny && (
                <div
                  className="rounded-full px-2.5 py-1 text-[9px] font-bold"
                  style={{ background: 'rgba(255,255,255,0.25)', color: 'white', ...poppins }}
                >
                  {added.length}/3 Added
                </div>
              )}
            </div>

            {/* Status banner */}
            {!hasAny ? (
              <div
                className="rounded-[13px] p-3 flex items-start gap-2"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-[16px] flex-shrink-0">⚠️</div>
                <div>
                  <div className="text-white text-[11px] font-bold mb-0.5" style={poppins}>
                    {strings.noMethodTitle}
                  </div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.82)', ...inter }}>
                    {strings.noMethodDesc}
                  </div>
                </div>
              </div>
            ) : (
              /* Added methods chips row */
              <div className="flex flex-wrap gap-2">
                {added.map(m => (
                  <div
                    key={m.key}
                    className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
                    style={{ background: 'rgba(255,255,255,0.2)' }}
                  >
                    <span className="text-[13px]">{m.icon}</span>
                    <span className="text-[10px] font-bold text-white" style={poppins}>{m.addedLabel}</span>
                    <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.75)' }}>✓</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 -mt-1 space-y-3">

            {/* Methods to add */}
            {unadded.length > 0 && (
              <div>
                {hasAny && (
                  <div className="text-[10px] font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-soft)', ...poppins }}>
                    {strings.alsoAdd}
                  </div>
                )}
                <div className="space-y-2">
                  {unadded.map((method) => (
                    <div
                      key={method.key}
                      className="bg-white rounded-[16px] p-3 flex items-center gap-3"
                      style={{ boxShadow: 'var(--card-shadow)', border: `1.5px solid ${method.accentColor}22` }}
                    >
                      <div
                        className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[20px] flex-shrink-0"
                        style={{ background: method.bg, boxShadow: method.shadow }}
                      >
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>
                          {method.label}
                        </div>
                        <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-soft)', ...inter }}>
                          {method.sub}
                        </div>
                      </div>
                      <div
                        className="ky-tap-cta-primary w-8 h-8 rounded-full flex items-center justify-center text-white text-[18px] font-light flex-shrink-0"
                        style={{ background: method.bg, boxShadow: method.shadow }}
                        onClick={() => setAddedMethods(prev => [...prev, method.key])}
                      >
                        +
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Added methods summary */}
            {hasAny && (
              <div>
                <div className="text-[10px] font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-soft)', ...poppins }}>
                  {strings.addedTitle}
                </div>
                <div className="space-y-2">
                  {added.map(m => (
                    <div
                      key={m.key}
                      className="rounded-[14px] p-3 flex items-center gap-3"
                      style={{ background: m.accentBg, border: `1px solid ${m.accentColor}33` }}
                    >
                      <div
                        className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[18px] flex-shrink-0"
                        style={{ background: m.bg }}
                      >
                        {m.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-bold" style={{ color: m.accentColor, ...poppins }}>
                          ✓ {m.addedLabel} Added
                        </div>
                        <div className="text-[10px]" style={{ color: 'var(--text-mid)', ...inter }}>
                          {m.addedDetail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why required */}
            {!hasAny && (
              <div
                className="rounded-[14px] p-3"
                style={{ background: 'rgba(26,122,59,0.06)', border: '1px solid rgba(26,122,59,0.15)' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="text-[13px]">ℹ️</div>
                  <div className="text-[10px] font-bold" style={{ color: 'var(--green)', ...poppins }}>
                    {strings.whyRequired}
                  </div>
                </div>
                <div className="text-[9px] leading-relaxed" style={{ color: 'var(--text-mid)', ...inter }}>
                  {strings.whyDesc}
                </div>
              </div>
            )}
          </div>

          {/* Bottom CTAs */}
          <div className="px-4 pb-3 space-y-2">
            {hasAny && (
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
                style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 4px 16px rgba(26,122,59,0.35)' }}
              >
                {strings.goToManage}
              </div>
            )}
            <div className="flex gap-3 items-center justify-center">
              {!hasAny && (
                <div
                  className="ky-tap-link text-center text-[11px] py-1.5"
                  style={{ color: 'var(--text-soft)', ...inter }}
                >
                  {strings.skipForNow}
                </div>
              )}
              {hasAny && (
                <div
                  className="ky-tap-link text-center text-[10px]"
                  style={{ color: 'var(--text-hint)', ...inter }}
                  onClick={() => setAddedMethods([])}
                >
                  ↺ {strings.resetProto}
                </div>
              )}
            </div>
          </div>

          <OwnerBottomNav activeTab="profile" />

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
