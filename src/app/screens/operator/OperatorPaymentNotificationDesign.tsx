import { useLanguage } from '../../contexts/language';
import { OperatorBottomNav } from '../../components/OperatorBottomNav';

export function OperatorPaymentNotificationDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const strings = {
    title: t({ english: 'Payment Notifications', hindi: 'भुगतान सूचनाएं', tamil: 'கட்டண அறிவிப்புகள்', marathi: 'पेमेंट सूचना' }),
    subtitle: t({ english: 'Bookings awaiting payment', hindi: 'भुगतान की प्रतीक्षा में बुकिंग', tamil: 'கட்டணம் காத்திருக்கும் முன்பதிவுகள்', marathi: 'पेमेंटची प्रतीक्षा असलेल्या बुकिंग' }),
    newPayment: t({ english: 'Payment Submitted', hindi: 'भुगतान जमा हुआ', tamil: 'கட்டணம் சமர்ப்பிக்கப்பட்டது', marathi: 'पेमेंट सबमिट झाले' }),
    pendingOwner: t({ english: 'Pending owner approval', hindi: 'मालिक की मंजूरी की प्रतीक्षा', tamil: 'உரிமையாளர் ஒப்புதலுக்காக காத்திருக்கிறது', marathi: 'मालकाच्या मंजुरीची प्रतीक्षा' }),
    awaitingPayment: t({ english: 'Awaiting Payment', hindi: 'भुगतान की प्रतीक्षा', tamil: 'கட்டணத்திற்காக காத்திருக்கிறது', marathi: 'पेमेंटची प्रतीक्षा' }),
    farmerNotPaid: t({ english: 'Farmer has not paid yet', hindi: 'किसान ने अभी तक भुगतान नहीं किया', tamil: 'விவசாயி இன்னும் கட்டணம் செலுத்தவில்லை', marathi: 'शेतकऱ्याने अजून पेमेंट केले नाही' }),
    infoNote: t({ english: 'You are notified here for reference. Only the equipment owner can approve or reject payments.', hindi: 'आपको यहाँ संदर्भ के लिए सूचित किया जाता है। केवल उपकरण मालिक ही भुगतान को स्वीकार या अस्वीकार कर सकते हैं।', tamil: 'உங்களுக்கு இங்கே குறிப்பிற்கு அறிவிக்கப்படுகிறது. உபகரண உரிமையாளர் மட்டுமே கட்டணங்களை ஏற்கலாம் அல்லது நிராகரிக்கலாம்.', marathi: 'संदर्भासाठी येथे तुम्हाला सूचित केले जाते. फक्त उपकरण मालकच पेमेंट मंजूर किंवा नाकारू शकतो.' }),
    viewBooking: t({ english: 'View Booking', hindi: 'बुकिंग देखें', tamil: 'முன்பதிவு பார்க்கவும்', marathi: 'बुकिंग पहा' }),
    paymentVerified: t({ english: 'Payment Verified', hindi: 'भुगतान सत्यापित', tamil: 'கட்டணம் சரிபார்க்கப்பட்டது', marathi: 'पेमेंट सत्यापित' }),
    ownerApproved: t({ english: 'Owner approved • Booking complete', hindi: 'मालिक ने मंजूरी दी • बुकिंग पूरी', tamil: 'உரிமையாளர் ஒப்புதல் • முன்பதிவு முடிந்தது', marathi: 'मालकाने मंजूर केले • बुकिंग पूर्ण' }),
    markAllRead: t({ english: 'Mark all read', hindi: 'सभी पढ़े हुए करें', tamil: 'அனைத்தையும் படிக்கப்பட்டதாக குறி', marathi: 'सर्व वाचले म्हणून चिन्हांकित करा' }),
    notifCount: t({ english: '3 notifications', hindi: '3 सूचनाएं', tamil: '3 அறிவிப்புகள்', marathi: '3 सूचना' }),
  };

  const notifications = [
    {
      type: 'submitted',
      icon: '💰',
      bookingId: 'BK-2025-07-0834',
      equipment: 'Mahindra 475 DI',
      farmer: 'Ramu Kisan',
      amount: '₹7,200',
      time: '2 min ago',
      isNew: true,
      bg: '#FFF7ED',
      border: '#FED7AA',
      badgeBg: '#F97316',
      badgeText: strings.newPayment,
    },
    {
      type: 'awaiting',
      icon: '⏳',
      bookingId: 'BK-2025-07-0821',
      equipment: 'Sonalika DI 35',
      farmer: 'Suresh Patel',
      amount: '₹4,500',
      time: '3 hrs ago',
      isNew: true,
      bg: '#FFFBEB',
      border: '#FCD34D',
      badgeBg: '#D97706',
      badgeText: strings.awaitingPayment,
    },
    {
      type: 'verified',
      icon: '✅',
      bookingId: 'BK-2025-07-0809',
      equipment: 'Tractor + Rotavator',
      farmer: 'Dinesh Kumar',
      amount: '₹5,800',
      time: 'Yesterday',
      isNew: false,
      bg: '#F0FDF4',
      border: '#BBF7D0',
      badgeBg: '#16A34A',
      badgeText: strings.paymentVerified,
    },
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
            <span className="font-bold text-[11px]">10:10</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-[18px] pt-3 pb-6 rounded-b-[36px]"
            style={{ background: 'var(--gradient-operator, linear-gradient(50deg, #2F80FF 0%, #00C6FF 100%))' }}
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
              <div
                className="rounded-full px-2.5 py-1 text-[10px] font-bold"
                style={{ background: 'rgba(255,255,255,0.25)', color: 'white', ...poppins }}
              >
                {strings.notifCount}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 -mt-1 space-y-3">

            {/* Info banner */}
            <div
              className="rounded-[14px] p-3 flex items-start gap-2"
              style={{ background: 'rgba(47,128,255,0.06)', border: '1px solid rgba(47,128,255,0.2)' }}
            >
              <div className="text-[14px] flex-shrink-0">ℹ️</div>
              <div className="text-[9px] leading-relaxed" style={{ color: '#1D4ED8', ...inter }}>{strings.infoNote}</div>
            </div>

            {/* Mark all read */}
            <div className="flex justify-end">
              <div
                className="ky-tap-link text-[9px] font-bold"
                style={{ color: '#2F80FF', ...poppins }}
              >
                {strings.markAllRead}
              </div>
            </div>

            {/* Notification cards */}
            <div className="space-y-3">
              {notifications.map((n, i) => (
                <div
                  key={i}
                  className="rounded-[18px] p-4"
                  style={{
                    background: n.bg,
                    border: `1.5px solid ${n.border}`,
                    boxShadow: n.isNew ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                    opacity: n.isNew ? 1 : 0.75,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-[12px] flex items-center justify-center text-[20px] flex-shrink-0"
                      style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                    >
                      {n.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                        <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>
                          {n.equipment}
                        </div>
                        <span
                          className="px-1.5 py-0.5 rounded-md text-[8px] font-bold text-white"
                          style={{ background: n.badgeBg }}
                        >
                          {n.badgeText}
                        </span>
                        {n.isNew && (
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        )}
                      </div>
                      <div className="text-[10px]" style={{ color: 'var(--text-mid)', ...inter }}>
                        👨‍🌾 {n.farmer} · {n.bookingId}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>{n.amount}</div>
                        <div className="text-[9px]" style={{ color: 'var(--text-hint)', ...inter }}>{n.time}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div
                    className="ky-tap-link mt-3 w-full rounded-[10px] py-2 text-center text-[10px] font-bold"
                    style={{ background: 'white', color: '#2F80FF', border: '1px solid rgba(47,128,255,0.2)', ...poppins }}
                  >
                    📋 {strings.viewBooking}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <OperatorBottomNav activeTab="home" />

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
