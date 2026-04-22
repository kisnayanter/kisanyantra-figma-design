import { useLanguage } from '../../contexts/language';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

export function PaymentInstructionsDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const strings = {
    title: t({ english: 'Pay for Booking', hindi: 'बुकिंग के लिए भुगतान करें', tamil: 'முன்பதிவுக்கு கட்டணம் செலுத்துக', marathi: 'बुकिंगसाठी पेमेंट करा' }),
    subtitle: t({ english: 'Awaiting Payment', hindi: 'भुगतान की प्रतीक्षा', tamil: 'கட்டணத்திற்காக காத்திருக்கிறது', marathi: 'पेमेंटची प्रतीक्षा' }),
    amountDue: t({ english: 'Amount Due', hindi: 'देय राशि', tamil: 'செலுத்த வேண்டிய தொகை', marathi: 'देय रक्कम' }),
    deadline: t({ english: 'Pay within 24 hours to avoid cancellation', hindi: 'रद्दीकरण से बचने के लिए 24 घंटे के भीतर भुगतान करें', tamil: 'ரத்து செய்வதை தவிர்க்க 24 மணி நேரத்தில் கட்டணம் செலுத்துக', marathi: 'रद्दीकरण टाळण्यासाठी 24 तासांत पेमेंट करा' }),
    paymentDetails: t({ english: 'Payment Details', hindi: 'भुगतान विवरण', tamil: 'கட்டண விவரங்கள்', marathi: 'पेमेंट तपशील' }),
    upiId: t({ english: 'UPI ID', hindi: 'UPI आईडी', tamil: 'UPI ஐடி', marathi: 'UPI ID' }),
    copy: t({ english: 'Copy', hindi: 'कॉपी', tamil: 'நகல்', marathi: 'कॉपी' }),
    openUpiApp: t({ english: 'Open in UPI App', hindi: 'UPI ऐप में खोलें', tamil: 'UPI ஆப்பில் திற', marathi: 'UPI App मध्ये उघडा' }),
    scanQr: t({ english: 'Scan QR Code', hindi: 'QR कोड स्कैन करें', tamil: 'QR குறியீட்டை ஸ்கேன் செய்க', marathi: 'QR कोड स्कॅन करा' }),
    bankTransfer: t({ english: 'Bank Transfer', hindi: 'बैंक ट्रांसफर', tamil: 'வங்கி பரிமாற்றம்', marathi: 'बँक ट्रान्सफर' }),
    tipsTitle: t({ english: '💡 Payment Tips', hindi: '💡 भुगतान सुझाव', tamil: '💡 கட்டண குறிப்புகள்', marathi: '💡 पेमेंट टिप्स' }),
    tip1: t({ english: 'Use the exact amount: ₹7,200', hindi: 'सटीक राशि उपयोग करें: ₹7,200', tamil: 'சரியான தொகையை பயன்படுத்துக: ₹7,200', marathi: 'अचूक रक्कम वापरा: ₹7,200' }),
    tip2: t({ english: 'Add booking ID in payment note: BK-0834', hindi: 'भुगतान नोट में बुकिंग ID जोड़ें: BK-0834', tamil: 'கட்டண குறிப்பில் முன்பதிவு ID சேர்க்கவும்: BK-0834', marathi: 'पेमेंट नोटमध्ये बुकिंग ID टाका: BK-0834' }),
    tip3: t({ english: 'Only pay to the details shown here', hindi: 'यहाँ दिखाए गए विवरण पर ही भुगतान करें', tamil: 'இங்கு காட்டப்பட்ட விவரங்களுக்கு மட்டும் கட்டணம் செலுத்துக', marathi: 'येथे दाखवलेल्या तपशीलांनाच पेमेंट करा' }),
    iHavePaid: t({ english: 'I Have Paid', hindi: 'मैंने भुगतान किया है', tamil: 'நான் கட்டணம் செலுத்தினேன்', marathi: 'मी पेमेंट केले आहे' }),
    havingTrouble: t({ english: 'Having trouble? Raise an issue', hindi: 'समस्या है? एक समस्या उठाएं', tamil: 'சிக்கல் இருக்கிறதா? ஒரு சிக்கலை எழுப்புங்கள்', marathi: 'अडचण आहे का? समस्या नोंदवा' }),
    accountHolder: t({ english: 'Account Holder', hindi: 'खाता धारक', tamil: 'கணக்கு வைத்திருப்பவர்', marathi: 'खाते धारक' }),
    accountNo: t({ english: 'Account No', hindi: 'खाता नंबर', tamil: 'கணக்கு எண்', marathi: 'खाते क्र.' }),
    ifsc: t({ english: 'IFSC', hindi: 'IFSC', tamil: 'IFSC', marathi: 'IFSC' }),
    bank: t({ english: 'Bank', hindi: 'बैंक', tamil: 'வங்கி', marathi: 'बँक' }),
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
            <span className="font-bold text-[11px]">9:55</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-[18px] pt-3 pb-8 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.75)', ...inter }}>
                  {strings.subtitle}
                </div>
                <div className="text-white text-[17px] font-bold" style={poppins}>
                  {strings.title}
                </div>
              </div>
            </div>

            {/* Amount due card */}
            <div
              className="rounded-[16px] p-4"
              style={{ background: 'rgba(255,255,255,0.18)' }}
            >
              <div className="text-[11px] mb-1" style={{ color: 'rgba(255,255,255,0.8)', ...inter }}>{strings.amountDue}</div>
              <div className="text-white text-[28px] font-bold mb-1" style={poppins}>₹7,200</div>
              <div className="flex items-center gap-1.5">
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.75)', ...inter }}>
                  🚜 Mahindra 475 DI · Jul 10–12
                </div>
              </div>
              {/* Countdown */}
              <div className="flex items-center gap-1.5 mt-2 rounded-[8px] px-2 py-1 w-fit" style={{ background: 'rgba(0,0,0,0.2)' }}>
                <div className="text-[12px]">⏳</div>
                <div className="text-[10px] font-bold" style={{ color: 'white', ...inter }}>18h 24m remaining</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 -mt-3 space-y-3">

            {/* Deadline warning */}
            <div
              className="rounded-[12px] px-3 py-2 flex items-center gap-2"
              style={{ background: '#FEF3C7', border: '1px solid #FCD34D' }}
            >
              <div className="text-[13px]">⚠️</div>
              <div className="text-[9px]" style={{ color: '#92400E', ...inter }}>{strings.deadline}</div>
            </div>

            {/* Payment Details Card */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-bold mb-3" style={{ color: 'var(--text-dark)', ...poppins }}>
                💳 {strings.paymentDetails}
              </div>

              {/* UPI ID */}
              <div
                className="rounded-[12px] p-3 mb-3"
                style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)' }}
              >
                <div className="text-[9px] font-bold mb-1" style={{ color: '#7C3AED', ...poppins }}>{strings.upiId} · Default</div>
                <div className="flex items-center justify-between">
                  <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>
                    ramesh.kumar@okicici
                  </div>
                  <div className="flex gap-2">
                    <div
                      className="ky-tap-link rounded-[8px] px-2 py-1 text-[9px] font-bold"
                      style={{ background: 'rgba(124,58,237,0.1)', color: '#7C3AED', ...poppins }}
                    >
                      {strings.copy}
                    </div>
                  </div>
                </div>
                {/* Open in UPI App */}
                <div
                  className="ky-tap-cta-primary mt-2 w-full rounded-[10px] py-2 text-center text-[10px] font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #9F67FA)' }}
                >
                  📲 {strings.openUpiApp}
                </div>
              </div>

              {/* QR Code */}
              <div className="rounded-[12px] p-3 mb-3 flex items-center gap-3" style={{ background: '#F8F5F0', border: '1px solid #E8E3DA' }}>
                <div
                  className="w-16 h-16 rounded-[10px] flex items-center justify-center text-[28px] flex-shrink-0"
                  style={{ background: 'white', border: '1px solid #E0E0E0' }}
                >
                  ▦
                </div>
                <div>
                  <div className="text-[10px] font-bold mb-0.5" style={{ color: 'var(--text-dark)', ...poppins }}>{strings.scanQr}</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>Scan with any UPI app</div>
                </div>
              </div>

              {/* Bank Details */}
              <div className="rounded-[12px] p-3" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                <div className="text-[9px] font-bold mb-2" style={{ color: '#166534', ...poppins }}>🏦 {strings.bankTransfer}</div>
                <div className="space-y-1">
                  {[
                    { label: strings.accountHolder, value: 'Ramesh Kumar' },
                    { label: strings.accountNo, value: '•••• •••• 4521' },
                    { label: strings.ifsc, value: 'SBIN0001234' },
                    { label: strings.bank, value: 'State Bank of India' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-[9px]" style={{ color: '#15803D', ...inter }}>{row.label}</span>
                      <span className="text-[9px] font-bold" style={{ color: '#166534', ...poppins }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips */}
            <div
              className="rounded-[14px] p-3"
              style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}
            >
              <div className="text-[10px] font-bold mb-2" style={{ color: '#C2410C', ...poppins }}>{strings.tipsTitle}</div>
              <div className="space-y-1.5">
                {[strings.tip1, strings.tip2, strings.tip3].map((tip, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="text-[9px] mt-0.5 flex-shrink-0" style={{ color: '#C2410C' }}>•</div>
                    <div className="text-[9px]" style={{ color: '#9A3412', ...inter }}>{tip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 pb-2 flex flex-col gap-2">
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              💰 {strings.iHavePaid}
            </div>
            <div
              className="ky-tap-link text-center text-[10px] py-1"
              style={{ color: 'var(--text-soft)', ...inter }}
            >
              {strings.havingTrouble}
            </div>
          </div>

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
