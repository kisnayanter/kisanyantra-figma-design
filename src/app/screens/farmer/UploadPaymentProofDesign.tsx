import { useLanguage } from '../../contexts/language';

export function UploadPaymentProofDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const strings = {
    title: t({ english: 'Upload Payment Proof', hindi: 'भुगतान प्रमाण अपलोड करें', tamil: 'கட்டண சான்றை பதிவேற்றுக', marathi: 'पेमेंट पुरावा अपलोड करा' }),
    subtitle: t({ english: 'Confirm your payment', hindi: 'अपना भुगतान पुष्टि करें', tamil: 'உங்கள் கட்டணத்தை உறுதிப்படுத்துக', marathi: 'तुमचे पेमेंट निश्चित करा' }),
    screenshot: t({ english: 'Payment Screenshot', hindi: 'भुगतान स्क्रीनशॉट', tamil: 'கட்டண திரைக்காட்சி', marathi: 'पेमेंट स्क्रीनशॉट' }),
    screenshotReq: t({ english: 'Required · JPG/PNG · Max 5MB', hindi: 'आवश्यक · JPG/PNG · अधिकतम 5MB', tamil: 'தேவை · JPG/PNG · அதிகபட்சம் 5MB', marathi: 'आवश्यक · JPG/PNG · जास्तीत जास्त 5MB' }),
    tapToUpload: t({ english: 'Tap to upload screenshot', hindi: 'स्क्रीनशॉट अपलोड करने के लिए टैप करें', tamil: 'திரைக்காட்சியை பதிவேற்ற தட்டவும்', marathi: 'स्क्रीनशॉट अपलोड करण्यासाठी टॅप करा' }),
    orCamera: t({ english: 'or take a photo', hindi: 'या फोटो लें', tamil: 'அல்லது புகைப்படம் எடுக்கவும்', marathi: 'किंवा फोटो काढा' }),
    transId: t({ english: 'Transaction ID', hindi: 'लेनदेन आईडी', tamil: 'பரிவர்த்தனை ஐடி', marathi: 'व्यवहार ID' }),
    transIdHint: t({ english: 'Optional but recommended for faster verification', hindi: 'वैकल्पिक लेकिन तेज सत्यापन के लिए अनुशंसित', tamil: 'விரைவான சரிபார்ப்பிற்கு விருப்பமானது ஆனால் பரிந்துரைக்கப்படுகிறது', marathi: 'पर्यायी पण जलद सत्यापनासाठी शिफारस केलेले' }),
    transIdPlaceholder: t({ english: 'e.g. TXN20250712XXXXX', hindi: 'जैसे: TXN20250712XXXXX', tamil: 'எ.கா. TXN20250712XXXXX', marathi: 'उदा. TXN20250712XXXXX' }),
    paidAmount: t({ english: 'Amount Paid', hindi: 'भुगतान की गई राशि', tamil: 'செலுத்திய தொகை', marathi: 'भरलेली रक्कम' }),
    paidAmountHint: t({ english: 'Enter the exact amount you paid', hindi: 'आपने जो राशि दी वह दर्ज करें', tamil: 'நீங்கள் செலுத்திய சரியான தொகையை உள்ளிடவும்', marathi: 'तुम्ही भरलेली अचूक रक्कम प्रविष्ट करा' }),
    methodUsed: t({ english: 'Payment Method Used', hindi: 'उपयोग की गई भुगतान विधि', tamil: 'பயன்படுத்திய கட்டண முறை', marathi: 'वापरलेली पेमेंट पद्धत' }),
    submitProof: t({ english: 'Submit Payment Proof', hindi: 'भुगतान प्रमाण जमा करें', tamil: 'கட்டண சான்றை சமர்ப்பிக்கவும்', marathi: 'पेमेंट पुरावा सबमिट करा' }),
    warning: t({ english: 'Submitting fake proof may result in account suspension', hindi: 'नकली प्रमाण जमा करने से खाता निलंबन हो सकता है', tamil: 'போலி சான்றை சமர்ப்பிப்பது கணக்கு இடைநிறுத்தத்திற்கு வழிவகுக்கும்', marathi: 'बनावट पुरावा सादर केल्यास खाते निलंबित होऊ शकते' }),
    uploadedFile: t({ english: 'Screenshot_20250712.jpg', hindi: 'Screenshot_20250712.jpg', tamil: 'Screenshot_20250712.jpg', marathi: 'Screenshot_20250712.jpg' }),
  };

  const paymentMethods = ['📱 PhonePe', '📲 Google Pay', '💳 Paytm', '🏦 Bank Transfer', '💵 Cash'];

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
            <span className="font-bold text-[11px]">9:57</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-[18px] pt-3 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3">
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
              <div className="text-right">
                <div className="text-white text-[13px] font-bold" style={poppins}>₹7,200</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...inter }}>BK-0834</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 -mt-1 space-y-3">

            {/* Screenshot Upload */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>
                  📸 {strings.screenshot}
                </div>
                <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>{strings.screenshotReq}</div>
              </div>

              {/* Uploaded state */}
              <div
                className="rounded-[12px] p-3 flex items-center gap-3"
                style={{ background: '#F0FDF4', border: '1.5px solid #BBF7D0' }}
              >
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center text-[22px] flex-shrink-0"
                  style={{ background: 'white', border: '1px solid #E0E0E0' }}
                >
                  🖼️
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold truncate" style={{ color: '#166534', ...poppins }}>
                    {strings.uploadedFile}
                  </div>
                  <div className="text-[9px]" style={{ color: '#15803D', ...inter }}>1.2 MB · Uploaded ✓</div>
                </div>
                <div
                  className="ky-tap-link w-7 h-7 rounded-full flex items-center justify-center text-[12px]"
                  style={{ background: '#FEE2E2', color: '#EF4444' }}
                >
                  ✕
                </div>
              </div>

              {/* Change / Add more */}
              <div
                className="ky-tap-link mt-2 rounded-[10px] py-2 text-center text-[10px]"
                style={{ border: '1.5px dashed rgba(255,107,0,0.3)', color: 'var(--saffron)', ...inter }}
              >
                {strings.orCamera}
              </div>
            </div>

            {/* Transaction ID */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-bold mb-1" style={{ color: 'var(--text-dark)', ...poppins }}>
                🔖 {strings.transId}
              </div>
              <div className="text-[9px] mb-2" style={{ color: 'var(--text-soft)', ...inter }}>{strings.transIdHint}</div>
              <input
                readOnly
                value="TXN2025071200492"
                className="w-full rounded-[10px] px-3 py-2.5 text-[12px] outline-none"
                style={{ border: '1.5px solid #E8E3DA', background: '#FAFAFA', color: 'var(--text-dark)', ...inter }}
              />
            </div>

            {/* Amount Paid */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-bold mb-1" style={{ color: 'var(--text-dark)', ...poppins }}>
                💰 {strings.paidAmount}
              </div>
              <div className="text-[9px] mb-2" style={{ color: 'var(--text-soft)', ...inter }}>{strings.paidAmountHint}</div>
              <div className="flex items-center rounded-[10px] overflow-hidden" style={{ border: '1.5px solid var(--saffron)', boxShadow: '0 0 0 3px rgba(255,107,0,0.08)' }}>
                <div
                  className="px-3 py-2.5 text-[13px] font-bold border-r"
                  style={{ color: 'var(--saffron)', borderColor: 'rgba(255,107,0,0.2)', background: '#FFF7ED', ...poppins }}
                >
                  ₹
                </div>
                <input
                  readOnly
                  value="7,200"
                  className="flex-1 px-3 py-2.5 text-[13px] font-bold outline-none bg-white"
                  style={{ color: 'var(--text-dark)', ...poppins }}
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-bold mb-2" style={{ color: 'var(--text-dark)', ...poppins }}>
                📲 {strings.methodUsed}
              </div>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((m, i) => (
                  <div
                    key={i}
                    className="ky-tap-link rounded-full px-3 py-1.5 text-[10px] font-bold"
                    style={{
                      background: i === 0 ? 'linear-gradient(135deg, var(--saffron), #FF8C38)' : '#F5F5F5',
                      color: i === 0 ? 'white' : 'var(--text-mid)',
                      ...poppins,
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>

            {/* Warning */}
            <div
              className="rounded-[12px] px-3 py-2 flex items-start gap-2"
              style={{ background: '#FEF2F2', border: '1px solid #FCA5A5' }}
            >
              <div className="text-[12px]">🚫</div>
              <div className="text-[9px]" style={{ color: '#DC2626', ...inter }}>{strings.warning}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 pb-4">
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              📤 {strings.submitProof}
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
