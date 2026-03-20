import { useLanguage } from '../../contexts/language';

export function CancelBookingConfirmDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    headerTitle: t({ english: 'Booking Cancelled', hindi: 'बुकिंग रद्द हुई', tamil: 'முன்பதிவு ரத்து செய்யப்பட்டது', marathi: 'बुकिंग रद्द झाली' }),
    cancelledTitle: t({ english: 'Booking Cancelled', hindi: 'बुकिंग रद्द हो गई', tamil: 'முன்பதிவு ரத்து செய்யப்பட்டது', marathi: 'बुकिंग रद्द झाली' }),
    cancelledSubtitle: t({
      english: 'Your booking has been cancelled successfully',
      hindi: 'आपकी बुकिंग सफलतापूर्वक रद्द कर दी गई है',
      tamil: 'உங்கள் முன்பதிவு வெற்றிகரமாக ரத்து செய்யப்பட்டது',
      marathi: 'तुमची बुकिंग यशस्वीरित्या रद्द करण्यात आली आहे'
    }),
    equipment: t({ english: 'Mahindra 475 DI · 50 HP', hindi: 'महिंद्रा 475 DI · 50 HP', tamil: 'மஹிந்திரா 475 DI · 50 HP', marathi: 'महिंद्रा 475 DI · 50 HP' }),
    ownerLabel: t({ english: 'Owner', hindi: 'मालिक', tamil: 'உரிமையாளர்', marathi: 'मालक' }),
    datesLabel: t({ english: 'Original Dates', hindi: 'मूल तारीख', tamil: 'அசல் தேதிகள்', marathi: 'मूळ तारखा' }),
    datesValue: t({ english: 'Jul 10-12 (3 days)', hindi: 'जुलाई 10-12 (3 दिन)', tamil: 'ஜூலை 10-12 (3 நாட்கள்)', marathi: 'जुलै 10-12 (3 दिवस)' }),
    amountLabel: t({ english: 'Amount', hindi: 'राशि', tamil: 'தொகை', marathi: 'रक्कम' }),
    statusCancelled: t({ english: 'CANCELLED', hindi: 'रद्द', tamil: 'ரத்து', marathi: 'रद्द' }),
    cancelledOn: t({
      english: 'Cancelled on: Mar 19, 2025 at 3:45 PM',
      hindi: 'रद्द किया: मार्च 19, 2025 को 3:45 PM',
      tamil: 'ரத்து செய்யப்பட்டது: மார்ச் 19, 2025 மாலை 3:45',
      marathi: 'रद्द केले: मार्च 19, 2025 रोजी दुपारी 3:45'
    }),
    refundTitle: t({ english: 'Refund Information', hindi: 'रिफंड जानकारी', tamil: 'பணத்தைத் திரும்பப் பெறும் தகவல்', marathi: 'परतावा माहिती' }),
    refundAmount: t({
      english: 'Full refund of ₹7,200 will be processed',
      hindi: '₹7,200 का पूरा रिफंड प्रोसेस किया जाएगा',
      tamil: '₹7,200 முழு பணத்தொகை திருப்பி அளிக்கப்படும்',
      marathi: '₹7,200 चा पूर्ण परतावा प्रक्रिया केला जाईल'
    }),
    refundTo: t({
      english: 'Refund to: UPI · ****4521',
      hindi: 'रिफंड: UPI · ****4521',
      tamil: 'பணத்தைத் திரும்ப: UPI · ****4521',
      marathi: 'परतावा: UPI · ****4521'
    }),
    expectedBy: t({
      english: 'Expected by: Mar 22, 2025 (3 business days)',
      hindi: 'अपेक्षित: मार्च 22, 2025 (3 कार्यदिवस)',
      tamil: 'எதிர்பார்க்கப்படுவது: மார்ச் 22, 2025 (3 வணிக நாட்கள்)',
      marathi: 'अपेक्षित: मार्च 22, 2025 (3 कार्यदिवस)'
    }),
    ownerNotified: t({ english: 'Owner has been notified', hindi: 'मालिक को सूचित किया गया', tamil: 'உரிமையாளருக்கு அறிவிக்கப்பட்டது', marathi: 'मालकाला सूचित केले' }),
    equipmentAvailable: t({ english: 'Equipment is now available for others', hindi: 'उपकरण अब दूसरों के लिए उपलब्ध है', tamil: 'கருவி இப்போது மற்றவர்களுக்கு கிடைக்கும்', marathi: 'उपकरण आता इतरांसाठी उपलब्ध आहे' }),
    refundInitiated: t({ english: 'Refund processing initiated', hindi: 'रिफंड प्रोसेसिंग शुरू हुई', tamil: 'பணத்தைத் திரும்பப் பெறுதல் தொடங்கப்பட்டது', marathi: 'परतावा प्रक्रिया सुरू झाली' }),
    searchEquipment: t({ english: 'Search Equipment', hindi: 'उपकरण खोजें', tamil: 'கருவிகளைத் தேடு', marathi: 'उपकरणे शोधा' }),
    backToHome: t({ english: 'Back to Home', hindi: 'होम पर वापस जाएं', tamil: 'முகப்புக்குத் திரும்பு', marathi: 'मुख्यपृष्ठावर परत जा' }),
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
            <span className="font-bold text-[11px]">3:45</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Saffron Gradient (shorter) */}
          <div
            className="px-5 pt-4 pb-5 rounded-b-[36px] text-center"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div
              className="text-white text-[16px] font-bold"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            >
              {strings.headerTitle}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 -mt-3">
            {/* Cancellation Confirmed Card */}
            <div
              className="bg-white rounded-[20px] p-5 mb-3 text-center"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="w-[72px] h-[72px] rounded-full mx-auto mb-3 flex items-center justify-center"
                style={{ background: '#FFEAEA', boxShadow: '0 0 0 10px rgba(204,51,51,0.08)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[20px] font-bold"
                  style={{ background: '#CC3333' }}
                >
                  ✕
                </div>
              </div>
              <div
                className="text-[22px] font-extrabold mb-1"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                {strings.cancelledTitle}
              </div>
              <div className="text-[12px] mb-2" style={{ color: 'var(--text-mid)' }}>
                {strings.cancelledSubtitle}
              </div>
              <div
                className="inline-block rounded-[10px] px-[14px] py-1 text-[10px] font-bold tracking-wider"
                style={{ background: 'var(--cream)', color: 'var(--text-soft)' }}
              >
                BK-2025-07-0834
              </div>
            </div>

            {/* Cancelled Booking Summary Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)', borderLeft: '4px solid #CC3333', opacity: 0.9 }}
            >
              {/* Equipment */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[16px]">🚜</span>
                <span className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                  {strings.equipment}
                </span>
              </div>

              {/* Owner */}
              <div
                className="flex items-center justify-between py-2"
                style={{ borderBottom: '1px solid #F5F2ED' }}
              >
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.ownerLabel}</span>
                <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  Harpreet Singh
                </span>
              </div>

              {/* Dates */}
              <div
                className="flex items-center justify-between py-2"
                style={{ borderBottom: '1px solid #F5F2ED' }}
              >
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.datesLabel}</span>
                <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  {strings.datesValue}
                </span>
              </div>

              {/* Amount */}
              <div
                className="flex items-center justify-between py-2"
                style={{ borderBottom: '1px solid #F5F2ED' }}
              >
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.amountLabel}</span>
                <span className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                  ₹7,200
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between py-2 mb-1">
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: '#FFEAEA', color: '#CC3333' }}
                >
                  {strings.statusCancelled}
                </span>
              </div>

              <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                {strings.cancelledOn}
              </div>
            </div>

            {/* Refund Info Card */}
            <div
              className="rounded-[20px] p-4 mb-3"
              style={{ background: 'var(--green-pale)', border: '1px solid var(--green)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💰 {strings.refundTitle}
              </div>
              <div className="space-y-2 mb-3">
                <div className="text-[11px] font-semibold" style={{ color: 'var(--green)' }}>
                  {strings.refundAmount}
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-dark)' }}>
                  {strings.refundTo}
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-dark)' }}>
                  {strings.expectedBy}
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full" style={{ background: 'rgba(26,122,59,0.15)' }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: '33%', background: 'var(--green)' }}
                />
              </div>
            </div>

            {/* What Happens Next Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="space-y-2.5">
                {[
                  strings.ownerNotified,
                  strings.equipmentAvailable,
                  strings.refundInitiated,
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] flex-shrink-0"
                      style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                    >
                      ✅
                    </div>
                    <span className="text-[11px] font-semibold" style={{ color: 'var(--green)' }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="px-4 pb-5 flex flex-col gap-2">
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white cursor-pointer"
              style={{ background: 'linear-gradient(135deg, var(--saffron), #FF8C38)', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}
            >
              🔍 {strings.searchEquipment}
            </div>
            <div
              className="ky-tap-link text-center text-[12px] font-semibold py-2 cursor-pointer"
              style={{ color: 'var(--text-mid)' }}
            >
              {strings.backToHome}
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
