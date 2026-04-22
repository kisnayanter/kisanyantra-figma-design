import { useState } from 'react';
import { useLanguage } from '../../contexts/language';

export function PaymentReviewDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const strings = {
    title: t({ english: 'Payment Review', hindi: 'भुगतान समीक्षा', tamil: 'கட்டண மதிப்பாய்வு', marathi: 'पेमेंट पुनरावलोकन' }),
    subtitle: t({ english: 'Verify payment before completing', hindi: 'पूरा करने से पहले भुगतान सत्यापित करें', tamil: 'முடிப்பதற்கு முன் கட்டணத்தை சரிபார்க்கவும்', marathi: 'पूर्ण करण्यापूर्वी पेमेंट सत्यापित करा' }),
    paymentSubmitted: t({ english: 'Payment Submitted', hindi: 'भुगतान जमा किया', tamil: 'கட்டணம் சமர்ப்பிக்கப்பட்டது', marathi: 'पेमेंट सबमिट केले' }),
    proofTitle: t({ english: 'Payment Proof', hindi: 'भुगतान प्रमाण', tamil: 'கட்டண சான்று', marathi: 'पेमेंट पुरावा' }),
    bookingInfo: t({ english: 'Booking Information', hindi: 'बुकिंग जानकारी', tamil: 'முன்பதிவு தகவல்', marathi: 'बुकिंग माहिती' }),
    transId: t({ english: 'Transaction ID', hindi: 'लेनदेन आईडी', tamil: 'பரிவர்த்தனை ஐடி', marathi: 'व्यवहार ID' }),
    paidAmount: t({ english: 'Paid Amount', hindi: 'भुगतान राशि', tamil: 'செலுத்திய தொகை', marathi: 'भरलेली रक्कम' }),
    expectedAmount: t({ english: 'Expected Amount', hindi: 'अपेक्षित राशि', tamil: 'எதிர்பார்க்கப்பட்ட தொகை', marathi: 'अपेक्षित रक्कम' }),
    method: t({ english: 'Method Used', hindi: 'उपयोग की गई विधि', tamil: 'பயன்படுத்திய முறை', marathi: 'वापरलेली पद्धत' }),
    submittedBy: t({ english: 'Submitted By', hindi: 'द्वारा जमा किया', tamil: 'சமர்ப்பித்தவர்', marathi: 'यांनी सबमिट केले' }),
    submittedAt: t({ english: 'Submitted At', hindi: 'जमा किया गया', tamil: 'சமர்ப்பித்த நேரம்', marathi: 'सबमिट केले वेळी' }),
    acceptPayment: t({ english: '✅ Accept Payment', hindi: '✅ भुगतान स्वीकार करें', tamil: '✅ கட்டணத்தை ஏற்கவும்', marathi: '✅ पेमेंट स्वीकार करा' }),
    rejectPayment: t({ english: '❌ Reject Payment', hindi: '❌ भुगतान अस्वीकार करें', tamil: '❌ கட்டணத்தை நிராகரிக்கவும்', marathi: '❌ पेमेंट नाकारा' }),
    partialNote: t({ english: '⚠ Amount is less than expected', hindi: '⚠ राशि अपेक्षित से कम है', tamil: '⚠ தொகை எதிர்பார்த்ததை விட குறைவு', marathi: '⚠ रक्कम अपेक्षेपेक्षा कमी आहे' }),
    partialOptions: t({ english: 'Accept partial or request remaining ₹600', hindi: 'आंशिक स्वीकार करें या शेष ₹600 मांगें', tamil: 'பகுதியை ஏற்கவும் அல்லது மீதமுள்ள ₹600 கோரவும்', marathi: 'अंशतः स्वीकार करा किंवा उरलेले ₹600 मागा' }),
    acceptPartial: t({ english: 'Accept Partial', hindi: 'आंशिक स्वीकार करें', tamil: 'பகுதியை ஏற்கவும்', marathi: 'अंशतः स्वीकार करा' }),
    requestRemaining: t({ english: 'Request ₹600 More', hindi: '₹600 और मांगें', tamil: '₹600 மேலும் கோரவும்', marathi: 'आणखी ₹600 मागा' }),
    rejectReason: t({ english: 'Reason for rejection', hindi: 'अस्वीकृति का कारण', tamil: 'நிராகரிப்பதற்கான காரணம்', marathi: 'नाकारण्याचे कारण' }),
    rejectPlaceholder: t({ english: 'e.g. Screenshot is unclear, wrong amount...', hindi: 'जैसे: स्क्रीनशॉट अस्पष्ट है, गलत राशि...', tamil: 'எ.கா. திரைக்காட்சி தெளிவாக இல்லை, தவறான தொகை...', marathi: 'उदा. स्क्रीनशॉट अस्पष्ट आहे, चुकीची रक्कम...' }),
    confirmReject: t({ english: 'Confirm Rejection', hindi: 'अस्वीकृति पुष्टि करें', tamil: 'நிராகரிப்பை உறுதிப்படுத்தவும்', marathi: 'नाकार निश्चित करा' }),
    cancel: t({ english: 'Cancel', hindi: 'रद्द करें', tamil: 'ரத்து செய்', marathi: 'रद्द करा' }),
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
            <span className="font-bold text-[11px]">9:52</span>
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
                  {strings.subtitle}
                </div>
                <div className="text-white text-[17px] font-bold" style={poppins}>
                  {strings.title}
                </div>
              </div>
              {/* Payment Submitted badge */}
              <div
                className="rounded-full px-2 py-1 text-[9px] font-bold animate-pulse"
                style={{ background: 'rgba(255,255,255,0.25)', color: 'white', ...poppins }}
              >
                ● {strings.paymentSubmitted}
              </div>
            </div>

            {/* Booking summary strip */}
            <div
              className="rounded-[14px] p-3 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="text-[22px]">🚜</div>
              <div className="flex-1">
                <div className="text-white text-[12px] font-bold" style={poppins}>Mahindra 475 DI · 3 Days</div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.8)', ...inter }}>Ramu Kisan · BK-2025-07-0834</div>
              </div>
              <div className="text-right">
                <div className="text-white text-[14px] font-bold" style={poppins}>₹7,200</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.7)', ...inter }}>Total Due</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 -mt-1 space-y-3">

            {/* Partial payment warning */}
            <div
              className="rounded-[14px] p-3 flex items-start gap-2"
              style={{ background: '#FFFBEB', border: '1.5px solid #FCD34D' }}
            >
              <div className="text-[15px]">⚠️</div>
              <div>
                <div className="text-[11px] font-bold mb-0.5" style={{ color: '#92400E', ...poppins }}>
                  {strings.partialNote}
                </div>
                <div className="text-[9px]" style={{ color: '#78350F', ...inter }}>
                  {strings.partialOptions}
                </div>
                <div className="flex gap-2 mt-2">
                  <div
                    className="ky-tap-link rounded-[8px] px-2.5 py-1 text-[9px] font-bold"
                    style={{ background: 'white', color: '#92400E', border: '1px solid #FCD34D', ...poppins }}
                  >
                    {strings.acceptPartial}
                  </div>
                  <div
                    className="ky-tap-link rounded-[8px] px-2.5 py-1 text-[9px] font-bold"
                    style={{ background: '#FCD34D', color: '#78350F', ...poppins }}
                  >
                    {strings.requestRemaining}
                  </div>
                </div>
              </div>
            </div>

            {/* Proof screenshot */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-bold mb-3" style={{ color: 'var(--text-dark)', ...poppins }}>
                📸 {strings.proofTitle}
              </div>
              {/* Screenshot preview */}
              <div
                className="w-full rounded-[14px] flex items-center justify-center mb-2"
                style={{ height: '100px', background: 'linear-gradient(135deg, #E8F5E9, #F1F8E9)', border: '1px solid rgba(26,122,59,0.2)' }}
              >
                <div className="text-center">
                  <div className="text-[28px] mb-1">🖼️</div>
                  <div className="text-[10px]" style={{ color: 'var(--green)', ...inter }}>Screenshot_20250712.jpg</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>Tap to enlarge</div>
                </div>
              </div>
              {/* Payment details */}
              <div className="space-y-2">
                {[
                  { label: strings.transId, value: 'TXN2025071200492', highlight: false },
                  { label: strings.paidAmount, value: '₹6,600', highlight: true, warn: true },
                  { label: strings.expectedAmount, value: '₹7,200', highlight: false },
                  { label: strings.method, value: '📱 PhonePe UPI', highlight: false },
                  { label: strings.submittedBy, value: 'Ramu Kisan', highlight: false },
                  { label: strings.submittedAt, value: 'Jul 12, 4:35 PM', highlight: false },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[10px]" style={{ color: 'var(--text-soft)', ...inter }}>{row.label}</span>
                    <span
                      className="text-[10px] font-bold"
                      style={{
                        color: row.warn ? '#D97706' : row.highlight ? 'var(--green)' : 'var(--text-dark)',
                        ...poppins
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-bold mb-2" style={{ color: 'var(--text-dark)', ...poppins }}>
                📋 {strings.bookingInfo}
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[20px]">👨‍🌾</div>
                <div>
                  <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>Ramu Kisan</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>Wardha, Maharashtra · ⭐ 4.7</div>
                </div>
                <div
                  className="ky-tap-link ml-auto rounded-lg px-2 py-1 text-[9px] font-bold"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)', ...poppins }}
                >
                  📞 Call
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
              style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 4px 16px rgba(26,122,59,0.35)' }}
            >
              {strings.acceptPayment}
            </div>
            <div
              className="ky-tap-cta-secondary w-full rounded-[14px] py-3 text-[13px] font-bold text-center"
              style={{ background: 'white', color: '#EF4444', border: '1.5px solid #FCA5A5' }}
              onClick={() => setShowRejectModal(true)}
            >
              {strings.rejectPayment}
            </div>
          </div>

          {/* Reject Modal */}
          {showRejectModal && (
            <div className="absolute inset-0 z-40 flex items-end" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
              <div className="w-full bg-white rounded-t-[28px] p-5">
                <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-4" />
                <div className="text-[14px] font-bold mb-3" style={{ color: 'var(--text-dark)', ...poppins }}>
                  ❌ {strings.rejectPayment}
                </div>
                <div className="text-[11px] font-bold mb-2" style={{ color: 'var(--text-dark)', ...inter }}>
                  {strings.rejectReason}
                </div>
                <div
                  className="w-full rounded-[12px] px-3 py-3 text-[11px] mb-4"
                  style={{ background: '#FEF2F2', border: '1.5px solid #FCA5A5', color: 'var(--text-mid)', ...inter, minHeight: '64px' }}
                >
                  {strings.rejectPlaceholder}
                </div>
                <div className="flex gap-2">
                  <div
                    className="ky-tap-link flex-1 rounded-[12px] py-3 text-center text-[12px] font-bold"
                    style={{ background: '#F5F5F5', color: 'var(--text-mid)', ...poppins }}
                    onClick={() => setShowRejectModal(false)}
                  >
                    {strings.cancel}
                  </div>
                  <div
                    className="ky-tap-cta-primary flex-1 rounded-[12px] py-3 text-center text-[12px] font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }}
                  >
                    {strings.confirmReject}
                  </div>
                </div>
              </div>
            </div>
          )}

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
