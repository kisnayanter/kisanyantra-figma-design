import { useState } from 'react';
import { useLanguage } from '../../contexts/language';

type DisputeType = 'wrong_amount' | 'not_received' | 'wrong_method' | 'other';

export function PaymentDisputeDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);
  const [selected, setSelected] = useState<DisputeType>('wrong_amount');
  const [submitted, setSubmitted] = useState(false);

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const strings = {
    title: t({ english: 'Raise an Issue', hindi: 'समस्या उठाएं', tamil: 'சிக்கலை எழுப்பவும்', marathi: 'समस्या नोंदवा' }),
    subtitle: t({ english: 'Payment dispute', hindi: 'भुगतान विवाद', tamil: 'கட்டண தகராறு', marathi: 'पेमेंट विवाद' }),
    disputeType: t({ english: 'What went wrong?', hindi: 'क्या गलत हुआ?', tamil: 'என்ன தவறு நடந்தது?', marathi: 'काय चूक झाली?' }),
    wrongAmount: t({ english: 'Wrong Amount Paid', hindi: 'गलत राशि भुगतान', tamil: 'தவறான தொகை செலுத்தப்பட்டது', marathi: 'चुकीची रक्कम भरली' }),
    notReceived: t({ english: 'Payment Not Received by Owner', hindi: 'मालिक को भुगतान नहीं मिला', tamil: 'உரிமையாளருக்கு கட்டணம் கிடைக்கவில்லை', marathi: 'मालकाला पेमेंट मिळाले नाही' }),
    wrongMethod: t({ english: 'Paid to Wrong Account/UPI', hindi: 'गलत खाता/UPI को भुगतान', tamil: 'தவறான கணக்கு/UPI க்கு கட்டணம்', marathi: 'चुकीच्या खात्यात/UPI ला पेमेंट' }),
    other: t({ english: 'Other Issue', hindi: 'अन्य समस्या', tamil: 'மற்ற சிக்கல்', marathi: 'इतर समस्या' }),
    descLabel: t({ english: 'Describe the issue', hindi: 'समस्या का वर्णन करें', tamil: 'சிக்கலை விவரிக்கவும்', marathi: 'समस्या वर्णन करा' }),
    descPlaceholder: t({ english: 'Provide details about what happened...', hindi: 'क्या हुआ उसका विवरण दें...', tamil: 'என்ன நடந்தது என்று விவரிக்கவும்...', marathi: 'काय झाले याचे तपशील द्या...' }),
    attachProof: t({ english: 'Attach Additional Proof (optional)', hindi: 'अतिरिक्त प्रमाण संलग्न करें (वैकल्पिक)', tamil: 'கூடுதல் சான்றை இணைக்கவும் (விருப்பம்)', marathi: 'अतिरिक्त पुरावा जोडा (पर्यायी)' }),
    submitDispute: t({ english: 'Submit Dispute', hindi: 'विवाद जमा करें', tamil: 'தகராறை சமர்ப்பிக்கவும்', marathi: 'विवाद सबमिट करा' }),
    disputeUnderReview: t({ english: 'Dispute Under Review', hindi: 'विवाद समीक्षाधीन', tamil: 'தகராறு மதிப்பாய்வில் உள்ளது', marathi: 'विवाद आढावाखाली' }),
    reviewDesc: t({ english: 'Our admin team will review your dispute within 24–48 hours and contact both parties.', hindi: 'हमारी एडमिन टीम 24-48 घंटों में आपके विवाद की समीक्षा करेगी।', tamil: '24-48 மணி நேரத்தில் எங்கள் ஆட்சி குழு உங்கள் தகராற்றை மதிப்பாய்வு செய்யும்.', marathi: 'आमची प्रशासन टीम 24-48 तासांत तुमच्या विवादाचा आढावा घेईल.' }),
    disputeId: t({ english: 'Dispute ID', hindi: 'विवाद आईडी', tamil: 'தகராறு ஐடி', marathi: 'विवाद ID' }),
    backToBooking: t({ english: 'Back to Booking', hindi: 'बुकिंग पर वापस', tamil: 'முன்பதிவுக்கு திரும்பவும்', marathi: 'बुकिंगकडे परत' }),
    adminNote: t({ english: 'Admin may request additional information', hindi: 'एडमिन अतिरिक्त जानकारी मांग सकते हैं', tamil: 'நிர்வாகம் கூடுதல் தகவல்களை கேட்கலாம்', marathi: 'प्रशासन अतिरिक्त माहिती मागू शकतात' }),
    cancel: t({ english: 'Cancel', hindi: 'रद्द करें', tamil: 'ரத்து செய்', marathi: 'रद्द करा' }),
  };

  const disputeTypes: { key: DisputeType; label: string; icon: string }[] = [
    { key: 'wrong_amount', label: strings.wrongAmount, icon: '💸' },
    { key: 'not_received', label: strings.notReceived, icon: '❓' },
    { key: 'wrong_method', label: strings.wrongMethod, icon: '↩️' },
    { key: 'other', label: strings.other, icon: '🔧' },
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">10:05</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-[18px] pt-3 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.75)', ...inter }}>{strings.subtitle}</div>
                <div className="text-white text-[17px] font-bold" style={poppins}>{strings.title}</div>
              </div>
              <div className="text-[24px]">⚠️</div>
            </div>
          </div>

          {submitted ? (
            /* Submitted state */
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col items-center">
              <div className="w-full bg-white rounded-[20px] p-5 text-center mt-2" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[44px] mb-3">🔍</div>
                <div className="text-[16px] font-bold mb-2" style={{ color: 'var(--text-dark)', ...poppins }}>
                  {strings.disputeUnderReview}
                </div>
                <div className="text-[10px] mb-4 leading-relaxed" style={{ color: 'var(--text-soft)', ...inter }}>
                  {strings.reviewDesc}
                </div>
                <div
                  className="rounded-[12px] p-3 mb-3"
                  style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}
                >
                  <div className="text-[9px] mb-1" style={{ color: 'var(--text-soft)', ...inter }}>{strings.disputeId}</div>
                  <div className="text-[13px] font-bold" style={{ color: 'var(--saffron)', ...poppins }}>DSP-2025-07-0192</div>
                </div>
                <div className="text-[9px]" style={{ color: 'var(--text-hint)', ...inter }}>{strings.adminNote}</div>
              </div>
            </div>
          ) : (
            /* Form */
            <div className="flex-1 overflow-y-auto px-4 py-3 -mt-1 space-y-3">
              {/* Dispute type */}
              <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[11px] font-bold mb-3" style={{ color: 'var(--text-dark)', ...poppins }}>
                  ❓ {strings.disputeType}
                </div>
                <div className="space-y-2">
                  {disputeTypes.map(({ key, label, icon }) => (
                    <div
                      key={key}
                      className="ky-tap-link flex items-center gap-3 rounded-[12px] p-3"
                      style={{
                        background: selected === key ? '#FEF2F2' : '#F8F5F0',
                        border: selected === key ? '1.5px solid #FCA5A5' : '1.5px solid transparent',
                      }}
                      onClick={() => setSelected(key)}
                    >
                      <div className="text-[18px]">{icon}</div>
                      <div className="flex-1 text-[11px] font-bold" style={{ color: selected === key ? '#DC2626' : 'var(--text-dark)', ...poppins }}>
                        {label}
                      </div>
                      <div
                        className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor: selected === key ? '#DC2626' : '#D0D0D0',
                          background: selected === key ? '#DC2626' : 'white',
                        }}
                      >
                        {selected === key && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[11px] font-bold mb-2" style={{ color: 'var(--text-dark)', ...poppins }}>
                  📝 {strings.descLabel}
                </div>
                <div
                  className="w-full rounded-[10px] px-3 py-2.5 text-[10px]"
                  style={{ border: '1.5px solid #E8E3DA', background: '#FAFAFA', color: 'var(--text-soft)', ...inter, minHeight: 72 }}
                >
                  {strings.descPlaceholder}
                </div>
              </div>

              {/* Attach proof */}
              <div
                className="ky-tap-link rounded-[14px] p-3 flex items-center gap-3 bg-white"
                style={{ boxShadow: 'var(--card-shadow)', border: '1.5px dashed rgba(220,38,38,0.25)' }}
              >
                <div className="text-[20px]">📎</div>
                <div>
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>{strings.attachProof}</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>Bank statement, screenshot, etc.</div>
                </div>
                <div className="ml-auto text-[12px]" style={{ color: 'var(--text-soft)' }}>+</div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            {!submitted ? (
              <>
                <div
                  className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
                  style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }}
                  onClick={() => setSubmitted(true)}
                >
                  🚩 {strings.submitDispute}
                </div>
                <div
                  className="ky-tap-link text-center text-[11px] py-1"
                  style={{ color: 'var(--text-soft)', ...inter }}
                >
                  {strings.cancel}
                </div>
              </>
            ) : (
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
                style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)' }}
              >
                ← {strings.backToBooking}
              </div>
            )}
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
