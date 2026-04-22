import { useState } from 'react';
import { useLanguage } from '../../contexts/language';

type PayStatus = 'awaiting' | 'submitted' | 'verified' | 'rejected';

export function OperatorBookingPaymentStatusDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);
  const [payStatus, setPayStatus] = useState<PayStatus>('submitted');

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const strings = {
    title: t({ english: 'Booking Detail', hindi: 'बुकिंग विवरण', tamil: 'முன்பதிவு விவரம்', marathi: 'बुकिंग तपशील' }),
    subtitle: t({ english: 'Payment status view', hindi: 'भुगतान स्थिति दृश्य', tamil: 'கட்டண நிலை பார்வை', marathi: 'पेमेंट स्थिती दृश्य' }),
    bookingComplete: t({ english: 'Booking Completed', hindi: 'बुकिंग पूर्ण', tamil: 'முன்பதிவு முடிந்தது', marathi: 'बुकिंग पूर्ण' }),
    paymentStatus: t({ english: 'Payment Status', hindi: 'भुगतान स्थिति', tamil: 'கட்டண நிலை', marathi: 'पेमेंट स्थिती' }),
    awaiting: t({ english: 'Awaiting Payment', hindi: 'भुगतान की प्रतीक्षा', tamil: 'கட்டணம் காத்திருக்கிறது', marathi: 'पेमेंटची प्रतीक्षा' }),
    submitted: t({ english: 'Payment Submitted', hindi: 'भुगतान जमा', tamil: 'கட்டணம் சமர்ப்பிக்கப்பட்டது', marathi: 'पेमेंट सबमिट' }),
    verified: t({ english: 'Payment Verified ✓', hindi: 'भुगतान सत्यापित ✓', tamil: 'கட்டணம் சரிபார்க்கப்பட்டது ✓', marathi: 'पेमेंट सत्यापित ✓' }),
    rejected: t({ english: 'Payment Rejected', hindi: 'भुगतान अस्वीकृत', tamil: 'கட்டணம் நிராகரிக்கப்பட்டது', marathi: 'पेमेंट नाकारले' }),
    proofInfo: t({ english: 'Payment Proof', hindi: 'भुगतान प्रमाण', tamil: 'கட்டண சான்று', marathi: 'पेमेंट पुरावा' }),
    transId: t({ english: 'Transaction ID', hindi: 'लेनदेन आईडी', tamil: 'பரிவர்த்தனை ஐடி', marathi: 'व्यवहार ID' }),
    amount: t({ english: 'Amount Paid', hindi: 'भुगतान राशि', tamil: 'செலுத்திய தொகை', marathi: 'भरलेली रक्कम' }),
    method: t({ english: 'Method', hindi: 'विधि', tamil: 'முறை', marathi: 'पद्धत' }),
    submittedAt: t({ english: 'Submitted At', hindi: 'जमा समय', tamil: 'சமர்ப்பித்த நேரம்', marathi: 'सबमिट वेळ' }),
    ownerAction: t({ english: 'Owner Action Required', hindi: 'मालिक की कार्रवाई आवश्यक', tamil: 'உரிமையாளர் நடவடிக்கை தேவை', marathi: 'मालकाची कृती आवश्यक' }),
    ownerNote: t({ english: 'The equipment owner will verify and approve this payment.', hindi: 'उपकरण मालिक इस भुगतान को सत्यापित और अनुमोदित करेगा।', tamil: 'உபகரண உரிமையாளர் இந்த கட்டணத்தை சரிபார்த்து ஒப்புதல் அளிப்பார்.', marathi: 'उपकरण मालक हे पेमेंट सत्यापित करेल आणि मंजूर करेल.' }),
    bookingInfo: t({ english: 'Booking Info', hindi: 'बुकिंग जानकारी', tamil: 'முன்பதிவு தகவல்', marathi: 'बुकिंग माहिती' }),
    yourEarnings: t({ english: 'Your Earnings (Commission)', hindi: 'आपकी कमाई (कमीशन)', tamil: 'உங்கள் வருவாய் (கமிஷன்)', marathi: 'तुमची कमाई (कमिशन)' }),
    earningsNote: t({ english: 'Released after owner approves payment', hindi: 'मालिक के भुगतान अनुमोदन के बाद जारी', tamil: 'உரிமையாளர் கட்டணத்தை ஒப்புதல் அளித்த பிறகு வெளியிடப்படும்', marathi: 'मालकाने पेमेंट मंजूर केल्यानंतर सोडले जाईल' }),
    preview: t({ english: 'Preview:', hindi: 'पूर्वावलोकन:', tamil: 'முன்னோட்டம்:', marathi: 'पूर्वावलोकन:' }),
  };

  const statusConfig: Record<PayStatus, { label: string; color: string; bg: string; border: string; icon: string }> = {
    awaiting: { label: strings.awaiting, color: '#D97706', bg: '#FFFBEB', border: '#FCD34D', icon: '⏳' },
    submitted: { label: strings.submitted, color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', icon: '🔄' },
    verified: { label: strings.verified, color: '#166534', bg: '#F0FDF4', border: '#BBF7D0', icon: '✅' },
    rejected: { label: strings.rejected, color: '#DC2626', bg: '#FEF2F2', border: '#FCA5A5', icon: '❌' },
  };

  const cfg = statusConfig[payStatus];

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
            <span className="font-bold text-[11px]">10:15</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-[18px] pt-3 pb-7 rounded-b-[36px]"
            style={{ background: 'linear-gradient(50deg, #2F80FF 0%, #00C6FF 100%)' }}
          >
            <div className="flex items-center gap-3 mb-3">
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
              {/* Completed badge */}
              <div
                className="rounded-full px-2 py-1 text-[9px] font-bold"
                style={{ background: 'rgba(255,255,255,0.25)', color: 'white', ...poppins }}
              >
                ✅ {strings.bookingComplete}
              </div>
            </div>

            {/* Equipment strip */}
            <div
              className="rounded-[12px] p-3 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="text-[22px]">🚜</div>
              <div className="flex-1">
                <div className="text-white text-[12px] font-bold" style={poppins}>Mahindra 475 DI · 3 Days</div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.8)', ...inter }}>Ramu Kisan · BK-2025-07-0834</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 -mt-2 space-y-3">

            {/* State switcher */}
            <div className="flex gap-1.5 items-center">
              <span className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>{strings.preview}</span>
              {(['awaiting', 'submitted', 'verified', 'rejected'] as PayStatus[]).map(s => (
                <div
                  key={s}
                  className="ky-tap-link rounded-full px-2 py-0.5 text-[8px] font-bold"
                  style={{
                    background: payStatus === s ? '#2F80FF' : '#F0EDE7',
                    color: payStatus === s ? 'white' : 'var(--text-mid)',
                    ...poppins,
                  }}
                  onClick={() => setPayStatus(s)}
                >
                  {s}
                </div>
              ))}
            </div>

            {/* Payment status card */}
            <div
              className="rounded-[18px] p-4"
              style={{ background: cfg.bg, border: `1.5px solid ${cfg.border}`, boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[24px]">{cfg.icon}</div>
                <div>
                  <div className="text-[11px]" style={{ color: 'var(--text-soft)', ...inter }}>{strings.paymentStatus}</div>
                  <div className="text-[14px] font-bold" style={{ color: cfg.color, ...poppins }}>{cfg.label}</div>
                </div>
              </div>

              {/* Payment details (shown when submitted or beyond) */}
              {payStatus !== 'awaiting' && (
                <div className="space-y-2">
                  {[
                    { label: strings.transId, value: 'TXN2025071200492' },
                    { label: strings.amount, value: '₹7,200' },
                    { label: strings.method, value: '📱 PhonePe UPI' },
                    { label: strings.submittedAt, value: 'Jul 12, 4:35 PM' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>{row.label}</span>
                      <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>{row.value}</span>
                    </div>
                  ))}
                  {/* Proof thumbnail */}
                  <div className="flex items-center gap-2 mt-2 rounded-[10px] px-3 py-2" style={{ background: 'white' }}>
                    <div className="text-[16px]">🖼️</div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>Screenshot_20250712.jpg</div>
                      <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>Proof uploaded by farmer</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Owner action note */}
            {(payStatus === 'submitted' || payStatus === 'awaiting') && (
              <div
                className="rounded-[14px] p-3 flex items-start gap-2"
                style={{ background: 'rgba(47,128,255,0.06)', border: '1px solid rgba(47,128,255,0.2)' }}
              >
                <div className="text-[14px]">👤</div>
                <div>
                  <div className="text-[10px] font-bold mb-0.5" style={{ color: '#1D4ED8', ...poppins }}>{strings.ownerAction}</div>
                  <div className="text-[9px]" style={{ color: '#3B82F6', ...inter }}>{strings.ownerNote}</div>
                </div>
              </div>
            )}

            {/* Booking info */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-bold mb-3" style={{ color: 'var(--text-dark)', ...poppins }}>
                📋 {strings.bookingInfo}
              </div>
              <div className="space-y-1.5">
                {[
                  { label: 'Booking ID', value: 'BK-2025-07-0834' },
                  { label: 'Equipment', value: 'Mahindra 475 DI · 47 HP' },
                  { label: 'Farmer', value: 'Ramu Kisan' },
                  { label: 'Dates', value: 'Jul 10 – Jul 12, 2025' },
                  { label: 'Total', value: '₹7,200' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>{row.label}</span>
                    <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operator earnings */}
            <div
              className="rounded-[14px] p-3"
              style={{
                background: payStatus === 'verified' ? '#F0FDF4' : '#F8F5F0',
                border: payStatus === 'verified' ? '1px solid #BBF7D0' : '1px solid #E8E3DA',
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold" style={{ color: payStatus === 'verified' ? '#166534' : 'var(--text-dark)', ...poppins }}>
                    {strings.yourEarnings}
                  </div>
                  <div className="text-[9px]" style={{ color: payStatus === 'verified' ? '#15803D' : 'var(--text-soft)', ...inter }}>
                    {payStatus === 'verified' ? '✅ Released to your account' : strings.earningsNote}
                  </div>
                </div>
                <div className="text-[14px] font-bold" style={{ color: payStatus === 'verified' ? '#166534' : 'var(--text-hint)', ...poppins }}>
                  ₹720
                </div>
              </div>
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
