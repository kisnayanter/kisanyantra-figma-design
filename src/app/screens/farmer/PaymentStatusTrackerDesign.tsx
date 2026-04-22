import { useState } from 'react';
import { useLanguage } from '../../contexts/language';
import { FarmerBottomNav } from '../../components/FarmerBottomNav';

type PaymentState = 'awaiting' | 'submitted' | 'verified' | 'rejected';

export function PaymentStatusTrackerDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);
  const [state, setState] = useState<PaymentState>('submitted');

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const strings = {
    title: t({ english: 'Payment Status', hindi: 'भुगतान स्थिति', tamil: 'கட்டண நிலை', marathi: 'पेमेंट स्थिती' }),
    subtitle: t({ english: 'Track your payment', hindi: 'अपना भुगतान ट्रैक करें', tamil: 'உங்கள் கட்டணத்தை கண்காணிக்கவும்', marathi: 'तुमचे पेमेंट ट्रॅक करा' }),
    bookingCompleted: t({ english: 'Booking Completed', hindi: 'बुकिंग पूर्ण', tamil: 'முன்பதிவு முடிந்தது', marathi: 'बुकिंग पूर्ण' }),
    bookingCompletedDesc: t({ english: 'Equipment returned on Jul 12', hindi: 'उपकरण 12 जुलाई को वापस किया', tamil: 'Jul 12 அன்று உபகரணம் திரும்பியது', marathi: 'Jul 12 रोजी उपकरण परत' }),
    awaitingPayment: t({ english: 'Awaiting Payment', hindi: 'भुगतान की प्रतीक्षा', tamil: 'கட்டணத்திற்காக காத்திருக்கிறது', marathi: 'पेमेंटची प्रतीक्षा' }),
    awaitingPaymentDesc: t({ english: 'Please pay ₹7,200 to the owner', hindi: 'कृपया ₹7,200 मालिक को दें', tamil: 'தயவுசெய்து ₹7,200 உரிமையாளருக்கு செலுத்துக', marathi: 'कृपया मालकाला ₹7,200 द्या' }),
    paymentSubmitted: t({ english: 'Payment Submitted', hindi: 'भुगतान जमा किया', tamil: 'கட்டணம் சமர்ப்பிக்கப்பட்டது', marathi: 'पेमेंट सबमिट केले' }),
    paymentSubmittedDesc: t({ english: 'Proof uploaded · awaiting owner verification', hindi: 'प्रमाण अपलोड किया · मालिक सत्यापन की प्रतीक्षा', tamil: 'சான்று பதிவேற்றப்பட்டது · உரிமையாளர் சரிபார்ப்பு காத்திருக்கிறது', marathi: 'पुरावा अपलोड · मालक सत्यापनाची प्रतीक्षा' }),
    paymentVerified: t({ english: 'Payment Verified', hindi: 'भुगतान सत्यापित', tamil: 'கட்டணம் சரிபார்க்கப்பட்டது', marathi: 'पेमेंट सत्यापित' }),
    paymentVerifiedDesc: t({ english: 'Owner confirmed receipt · Booking complete!', hindi: 'मालिक ने रसीद की पुष्टि की · बुकिंग पूरी!', tamil: 'உரிமையாளர் ரசீது உறுதிப்படுத்தினார் · முன்பதிவு முடிந்தது!', marathi: 'मालकाने पावती निश्चित केली · बुकिंग पूर्ण!' }),
    paymentRejected: t({ english: 'Payment Rejected', hindi: 'भुगतान अस्वीकृत', tamil: 'கட்டணம் நிராகரிக்கப்பட்டது', marathi: 'पेमेंट नाकारले' }),
    paymentRejectedDesc: t({ english: 'Owner rejected proof · Please re-upload', hindi: 'मालिक ने प्रमाण अस्वीकार किया · कृपया पुनः अपलोड करें', tamil: 'உரிமையாளர் சான்றை நிராகரித்தார் · மீண்டும் பதிவேற்றவும்', marathi: 'मालकाने पुरावा नाकारला · कृपया पुन्हा अपलोड करा' }),
    rejectReason: t({ english: 'Reason: Screenshot is unclear', hindi: 'कारण: स्क्रीनशॉट अस्पष्ट है', tamil: 'காரணம்: திரைக்காட்சி தெளிவாக இல்லை', marathi: 'कारण: स्क्रीनशॉट अस्पष्ट आहे' }),
    reUpload: t({ english: 'Re-upload Proof', hindi: 'प्रमाण पुनः अपलोड करें', tamil: 'சான்றை மீண்டும் பதிவேற்றவும்', marathi: 'पुरावा पुन्हा अपलोड करा' }),
    payNow: t({ english: 'Pay Now', hindi: 'अभी भुगतान करें', tamil: 'இப்போது கட்டணம் செலுத்துக', marathi: 'आत्ता पेमेंट करा' }),
    raiseIssue: t({ english: 'Raise an Issue', hindi: 'समस्या उठाएं', tamil: 'சிக்கலை எழுப்பவும்', marathi: 'समस्या नोंदवा' }),
    downloadReceipt: t({ english: 'Download Receipt', hindi: 'रसीद डाउनलोड करें', tamil: 'ரசீது பதிவிறக்கவும்', marathi: 'पावती डाउनलोड करा' }),
    proofHistory: t({ english: 'Submission History', hindi: 'जमा इतिहास', tamil: 'சமர்ப்பிப்பு வரலாறு', marathi: 'सबमिशन इतिहास' }),
    switchState: t({ english: 'Preview:', hindi: 'पूर्वावलोकन:', tamil: 'முன்னோட்டம்:', marathi: 'पूर्वावलोकन:' }),
  };

  const paymentSteps: { key: PaymentState | 'completed'; label: string; desc: string; time?: string }[] = [
    { key: 'completed', label: strings.bookingCompleted, desc: strings.bookingCompletedDesc, time: 'Jul 12, 6:00 PM' },
    { key: 'awaiting', label: strings.awaitingPayment, desc: strings.awaitingPaymentDesc, time: 'Jul 12, 6:05 PM' },
    {
      key: state === 'rejected' ? 'rejected' : state === 'verified' ? 'verified' : 'submitted',
      label: state === 'rejected' ? strings.paymentRejected : state === 'verified' ? strings.paymentVerified : strings.paymentSubmitted,
      desc: state === 'rejected' ? strings.paymentRejectedDesc : state === 'verified' ? strings.paymentVerifiedDesc : strings.paymentSubmittedDesc,
      time: state === 'awaiting' ? undefined : 'Jul 12, 4:35 PM',
    },
  ];

  const getNodeStyle = (key: string): React.CSSProperties => {
    if (key === 'completed' || key === 'awaiting') return { background: 'var(--green)', border: 'none' };
    if (key === 'verified') return { background: 'var(--green)', border: 'none' };
    if (key === 'rejected') return { background: '#EF4444', border: 'none' };
    if (state === 'submitted') return { background: 'var(--saffron)', border: 'none' };
    return { background: '#E0E0E0', border: '2px solid #E0E0E0' };
  };

  const getLineColor = (index: number): string => {
    if (index === 0) return 'var(--green)';
    if (state !== 'awaiting') return state === 'rejected' ? '#EF4444' : state === 'verified' ? 'var(--green)' : 'var(--saffron)';
    return '#E0E0E0';
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
            <span className="font-bold text-[11px]">10:00</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-[18px] pt-3 pb-7 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
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
              {/* State chip */}
              <div
                className="rounded-full px-2.5 py-1 text-[9px] font-bold"
                style={{
                  background: state === 'verified' ? '#166534' : state === 'rejected' ? '#7F1D1D' : 'rgba(0,0,0,0.2)',
                  color: 'white',
                  ...poppins,
                }}
              >
                {state === 'awaiting' ? '⏳ Awaiting' : state === 'submitted' ? '🔄 Submitted' : state === 'verified' ? '✅ Verified' : '❌ Rejected'}
              </div>
            </div>

            {/* Booking pill */}
            <div
              className="rounded-[12px] px-3 py-2 flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="text-[18px]">🚜</div>
              <div className="flex-1">
                <div className="text-white text-[11px] font-bold" style={poppins}>Mahindra 475 DI · BK-0834</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.8)', ...inter }}>Harpreet Singh · Jul 10–12, 2025</div>
              </div>
              <div className="text-right">
                <div className="text-white text-[13px] font-bold" style={poppins}>₹7,200</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 -mt-2 space-y-3">

            {/* State switcher (for design preview) */}
            <div className="flex gap-1.5 items-center">
              <span className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>{strings.switchState}</span>
              {(['awaiting', 'submitted', 'verified', 'rejected'] as PaymentState[]).map(s => (
                <div
                  key={s}
                  className="ky-tap-link rounded-full px-2 py-0.5 text-[8px] font-bold"
                  style={{
                    background: state === s ? 'var(--saffron)' : '#F0EDE7',
                    color: state === s ? 'white' : 'var(--text-mid)',
                    ...poppins,
                  }}
                  onClick={() => setState(s)}
                >
                  {s}
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-bold mb-3" style={{ color: 'var(--text-dark)', ...poppins }}>📋 Payment Timeline</div>
              <div className="space-y-0">
                {paymentSteps.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    {/* Node + line */}
                    <div className="flex flex-col items-center" style={{ width: 28 }}>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] text-white flex-shrink-0"
                        style={getNodeStyle(step.key)}
                      >
                        {step.key === 'completed' || step.key === 'awaiting' ? '✓' : step.key === 'verified' ? '✓' : step.key === 'rejected' ? '✕' : '●'}
                      </div>
                      {index < paymentSteps.length - 1 && (
                        <div className="w-0.5 flex-1 my-1" style={{ background: getLineColor(index), minHeight: 20 }} />
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-3">
                      <div
                        className="rounded-[10px] px-3 py-2"
                        style={{
                          background: step.key === 'rejected' ? '#FEF2F2' : step.key === 'verified' ? '#F0FDF4' : step.key === 'submitted' && state === 'submitted' ? '#FFF7ED' : '#F8F5F0',
                          border: step.key === 'rejected' ? '1px solid #FCA5A5' : step.key === 'verified' ? '1px solid #BBF7D0' : step.key === 'submitted' && state === 'submitted' ? '1px solid #FED7AA' : 'none',
                        }}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <div
                            className="text-[11px] font-bold"
                            style={{
                              color: step.key === 'rejected' ? '#DC2626' : step.key === 'verified' ? '#166534' : 'var(--text-dark)',
                              ...poppins,
                            }}
                          >
                            {step.label}
                          </div>
                          {step.time && (
                            <div className="text-[9px]" style={{ color: 'var(--text-hint)', ...inter }}>{step.time}</div>
                          )}
                        </div>
                        <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>{step.desc}</div>
                        {step.key === 'rejected' && (
                          <div className="text-[9px] mt-1 font-bold" style={{ color: '#DC2626', ...inter }}>{strings.rejectReason}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission history (when submitted or beyond) */}
            {state !== 'awaiting' && (
              <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="text-[11px] font-bold mb-2" style={{ color: 'var(--text-dark)', ...poppins }}>
                  📁 {strings.proofHistory}
                </div>
                <div className="space-y-2">
                  {state === 'rejected' && (
                    <div className="flex items-center gap-3 rounded-[10px] px-3 py-2" style={{ background: '#FEF2F2', border: '1px solid #FCA5A5' }}>
                      <div className="text-[16px]">🖼️</div>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold" style={{ color: '#DC2626', ...poppins }}>Screenshot_v1.jpg</div>
                        <div className="text-[9px]" style={{ color: '#EF4444', ...inter }}>Rejected · Jul 12, 4:35 PM</div>
                      </div>
                      <div className="text-[9px] font-bold" style={{ color: '#DC2626' }}>❌</div>
                    </div>
                  )}
                  <div className="flex items-center gap-3 rounded-[10px] px-3 py-2" style={{ background: '#F0FDF4', border: state === 'verified' ? '1px solid #BBF7D0' : '1px solid #E8E3DA' }}>
                    <div className="text-[16px]">🖼️</div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold" style={{ color: state === 'verified' ? '#166534' : 'var(--text-dark)', ...poppins }}>Screenshot_20250712.jpg</div>
                      <div className="text-[9px]" style={{ color: state === 'verified' ? '#15803D' : 'var(--text-soft)', ...inter }}>
                        {state === 'verified' ? 'Verified ✓ · Jul 12, 5:10 PM' : 'Submitted · Jul 12, 4:35 PM'}
                      </div>
                    </div>
                    {state === 'verified' && <div className="text-[9px] font-bold" style={{ color: '#166534' }}>✅</div>}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="px-4 pb-2 flex flex-col gap-2">
            {state === 'awaiting' && (
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
                style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
              >
                💰 {strings.payNow}
              </div>
            )}
            {state === 'rejected' && (
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
                style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
              >
                📤 {strings.reUpload}
              </div>
            )}
            {state === 'verified' && (
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
                style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))' }}
              >
                📄 {strings.downloadReceipt}
              </div>
            )}
            {(state === 'submitted' || state === 'rejected') && (
              <div
                className="ky-tap-link text-center text-[10px] py-1"
                style={{ color: 'var(--text-soft)', ...inter }}
              >
                {strings.raiseIssue}
              </div>
            )}
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
