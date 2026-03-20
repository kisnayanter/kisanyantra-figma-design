import { useLanguage } from '../../contexts/language';

export function RequestFulfilledDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    headerTitle: t({ english: 'Request Complete', hindi: 'अनुरोध पूर्ण', tamil: 'கோரிக்கை முடிந்தது', marathi: 'विनंती पूर्ण' }),
    fulfilledTitle: t({ english: 'Request Fulfilled!', hindi: 'अनुरोध पूरा हुआ!', tamil: 'கோரிக்கை நிறைவேறியது!', marathi: 'विनंती पूर्ण झाली!' }),
    fulfilledSubtitle: t({ english: 'Your tractor request has been matched!', hindi: 'आपके ट्रैक्टर अनुरोध का मिलान हो गया है!', tamil: 'உங்கள் டிராக்டர் கோரிக்கை பொருத்தப்பட்டது!', marathi: 'तुमच्या ट्रॅक्टर विनंतीचा मेळ जुळला!' }),
    whatHappened: t({ english: 'What happened', hindi: 'क्या हुआ', tamil: 'என்ன நடந்தது', marathi: 'काय झाले' }),
    removedFromListings: t({ english: 'Request removed from listings', hindi: 'अनुरोध लिस्टिंग से हटाया गया', tamil: 'கோரிக்கை பட்டியலிலிருந்து நீக்கப்பட்டது', marathi: 'विनंती लिस्टिंगमधून काढली' }),
    ownersNotified: t({ english: 'Other owners notified', hindi: 'अन्य मालिकों को सूचित किया', tamil: 'மற்ற உரிமையாளர்களுக்கு அறிவிக்கப்பட்டது', marathi: 'इतर मालकांना सूचित केले' }),
    bookingCreated: t({ english: 'Booking created automatically', hindi: 'बुकिंग स्वचालित रूप से बनाई गई', tamil: 'முன்பதிவு தானாக உருவாக்கப்பட்டது', marathi: 'बुकिंग आपोआप तयार झाली' }),
    yourBooking: t({ english: 'Your Booking', hindi: 'आपकी बुकिंग', tamil: 'உங்கள் முன்பதிவு', marathi: 'तुमची बुकिंग' }),
    equipment: t({ english: 'Mahindra 475 DI · 50 HP', hindi: 'महिंद्रा 475 DI · 50 HP', tamil: 'மஹிந்திரா 475 DI · 50 HP', marathi: 'महिंद्रा 475 DI · 50 HP' }),
    owner: t({ english: 'Owner', hindi: 'मालिक', tamil: 'உரிமையாளர்', marathi: 'मालक' }),
    verified: t({ english: 'Verified', hindi: 'सत्यापित', tamil: 'சரிபார்க்கப்பட்டது', marathi: 'सत्यापित' }),
    datesLabel: t({ english: 'Dates', hindi: 'तारीख', tamil: 'தேதிகள்', marathi: 'तारखा' }),
    datesValue: t({ english: 'Mar 20-23 (4 days)', hindi: 'मार्च 20-23 (4 दिन)', tamil: 'மார்ச் 20-23 (4 நாட்கள்)', marathi: 'मार्च 20-23 (4 दिवस)' }),
    totalLabel: t({ english: 'Total', hindi: 'कुल', tamil: 'மொத்தம்', marathi: 'एकूण' }),
    viewBooking: t({ english: 'View Booking', hindi: 'बुकिंग देखें', tamil: 'முன்பதிவு காண்க', marathi: 'बुकिंग पहा' }),
    viewMyBookings: t({ english: 'View My Bookings', hindi: 'मेरी बुकिंग देखें', tamil: 'எனது முன்பதிவுகள்', marathi: 'माझ्या बुकिंग पहा' }),
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
            <span className="font-bold text-[11px]">9:52</span>
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
            {/* Big Success Card */}
            <div
              className="bg-white rounded-[20px] p-5 mb-3 text-center"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="w-[72px] h-[72px] rounded-full mx-auto mb-3 flex items-center justify-center text-[36px]"
                style={{ background: 'var(--green-pale)', boxShadow: '0 0 0 10px rgba(26,122,59,0.08)' }}
              >
                ✅
              </div>
              <div className="text-[20px] mb-1">🎊</div>
              <div
                className="text-[22px] font-extrabold mb-1"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                {strings.fulfilledTitle}
              </div>
              <div className="text-[12px] mb-2" style={{ color: 'var(--text-mid)' }}>
                {strings.fulfilledSubtitle}
              </div>
              <div
                className="inline-block rounded-[10px] px-[14px] py-1 text-[10px] font-bold tracking-wider"
                style={{ background: 'var(--cream)', color: 'var(--text-soft)' }}
              >
                RQ-2025-03-001
              </div>
            </div>

            {/* What Happened Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-3"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📋 {strings.whatHappened}
              </div>
              <div className="space-y-2.5">
                {[
                  strings.removedFromListings,
                  strings.ownersNotified,
                  strings.bookingCreated,
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

            {/* Booking Summary Card */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)', border: '2px solid var(--green)' }}
            >
              <div
                className="text-[13px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📋 {strings.yourBooking}
              </div>

              {/* Equipment */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[16px]">🚜</span>
                <span className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                  {strings.equipment}
                </span>
              </div>

              {/* Owner */}
              <div
                className="flex items-center justify-between py-2 mb-1"
                style={{ borderBottom: '1px solid #F5F2ED' }}
              >
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.owner}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    Harpreet Singh
                  </span>
                  <span
                    className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                  >
                    ✓ {strings.verified}
                  </span>
                </div>
              </div>

              {/* Dates */}
              <div
                className="flex items-center justify-between py-2 mb-1"
                style={{ borderBottom: '1px solid #F5F2ED' }}
              >
                <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>{strings.datesLabel}</span>
                <span className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  {strings.datesValue}
                </span>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between py-2 mb-3">
                <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)' }}>{strings.totalLabel}</span>
                <span
                  className="text-[18px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--green)' }}
                >
                  ₹9,600
                </span>
              </div>

              {/* View Booking Link */}
              <div
                className="ky-tap-link text-center text-[12px] font-bold cursor-pointer"
                style={{ color: 'var(--green)' }}
              >
                {strings.viewBooking} →
              </div>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="px-4 pb-5 flex flex-col gap-2">
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white cursor-pointer"
              style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 4px 16px rgba(26,122,59,0.35)' }}
            >
              📋 {strings.viewMyBookings}
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
