import { useLanguage } from '../../contexts/language';

export function SendOfferDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    title: t({
      english: 'Send Your Offer',
      hindi: 'अपना ऑफर भेजें',
      tamil: 'உங்கள் சலுகையை அனுப்புங்கள்',
      marathi: 'तुमचा ऑफर पाठवा'
    }),
    subtitle: t({
      english: 'To Ramu Kisan',
      hindi: 'रामू किसान को',
      tamil: 'ராமு கிசான் க்கு',
      marathi: 'रामू किसान ला'
    }),
    selectEquipment: t({
      english: 'Select Equipment',
      hindi: 'उपकरण चुनें',
      tamil: 'உபகரணத்தை தேர்ந்தெடுக்கவும்',
      marathi: 'उपकरण निवडा'
    }),
    yourPrice: t({
      english: 'Your Price',
      hindi: 'आपकी कीमत',
      tamil: 'உங்கள் விலை',
      marathi: 'तुमची किंमत'
    }),
    perDay: t({ english: 'Per Day', hindi: 'प्रति दिन', tamil: 'ஒரு நாளுக்கு', marathi: 'प्रति दिन' }),
    total: t({ english: 'Total', hindi: 'कुल', tamil: 'மொத்தம்', marathi: 'एकूण' }),
    forDays: t({ english: 'for 4 days', hindi: '4 दिनों के लिए', tamil: '4 நாட்களுக்கு', marathi: '4 दिवसांसाठी' }),
    farmerBudget: t({
      english: "Farmer's budget: ₹2,400/day",
      hindi: 'किसान का बजट: ₹2,400/दिन',
      tamil: 'விவசாயியின் பட்ஜெட்: ₹2,400/நாள்',
      marathi: 'शेतकऱ्याचे बजेट: ₹2,400/दिन'
    }),
    match: t({ english: 'Match', hindi: 'मिलान', tamil: 'பொருத்தம்', marathi: 'जुळणी' }),
    confirmDates: t({
      english: 'Confirm Dates',
      hindi: 'तारीखें पुष्टि करें',
      tamil: 'தேதிகளை உறுதிப்படுத்தவும்',
      marathi: 'तारखा निश्चित करा'
    }),
    deliveryBy: t({
      english: 'Delivery by 7:00 AM',
      hindi: 'सुबह 7:00 बजे तक डिलीवरी',
      tamil: 'காலை 7:00 மணிக்குள் டெலிவரி',
      marathi: 'सकाळी 7:00 पर्यंत डिलिव्हरी'
    }),
    extras: t({ english: 'Extras', hindi: 'अतिरिक्त', tamil: 'கூடுதல்', marathi: 'अतिरिक्त' }),
    operatorIncluded: t({
      english: 'Operator included',
      hindi: 'ऑपरेटर शामिल',
      tamil: 'ஆபரேட்டர் சேர்க்கப்பட்டது',
      marathi: 'ऑपरेटर समाविष्ट'
    }),
    trailerAttachment: t({
      english: 'Trailer attachment',
      hindi: 'ट्रेलर अटैचमेंट',
      tamil: 'டிரெய்லர் இணைப்பு',
      marathi: 'ट्रेलर अटॅचमेंट'
    }),
    insurance: t({ english: 'Insurance', hindi: 'बीमा', tamil: 'காப்பீடு', marathi: 'विमा' }),
    messageLabel: t({
      english: 'Message (Optional)',
      hindi: 'संदेश (वैकल्पिक)',
      tamil: 'செய்தி (விருப்பமான)',
      marathi: 'संदेश (ऐच्छिक)'
    }),
    messagePlaceholder: t({
      english: 'Tractor in excellent condition. Will deliver by 7 AM.',
      hindi: 'ट्रैक्टर उत्कृष्ट स्थिति में है। सुबह 7 बजे तक पहुँचा दूंगा।',
      tamil: 'டிராக்டர் சிறந்த நிலையில் உள்ளது. காலை 7 மணிக்குள் வழங்குவேன்.',
      marathi: 'ट्रॅक्टर उत्तम स्थितीत आहे. सकाळी 7 पर्यंत पोहोचवतो.'
    }),
    sendOfferCta: t({
      english: 'Send Offer to Ramu',
      hindi: 'रामू को ऑफर भेजें',
      tamil: 'ராமுக்கு சலுகை அனுப்பு',
      marathi: 'रामूला ऑफर पाठवा'
    }),
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-5 pt-4 pb-[40px] rounded-b-[36px]"
            style={{ background: 'var(--gradient-green)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <button
                type="button"
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </button>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  📩 {strings.subtitle}
                </div>
                <div
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.title}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4">
            {/* Equipment Selection Card */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.selectEquipment}
              </div>

              {/* Selected equipment */}
              <div
                className="ky-tap-radio rounded-xl p-3 mb-2 flex items-center gap-3"
                style={{ background: 'var(--green-pale)', border: '2px solid var(--green)' }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--green)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[20px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  🚜
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Mahindra 475 DI
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>50 HP</div>
                </div>
              </div>

              {/* Unselected equipment */}
              <div
                className="ky-tap-radio rounded-xl p-3 flex items-center gap-3"
                style={{ background: 'white', border: '2px solid #E8E3DA' }}
              >
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0"
                  style={{ border: '2px solid #D1D5DB' }}
                />
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[20px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)' }}
                >
                  🌾
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold" style={{ color: 'var(--text-dark)' }}>
                    Combine Harvester
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.yourPrice}
              </div>

              {/* Per Day Input */}
              <div className="mb-3">
                <div className="text-[10px] font-semibold mb-1.5" style={{ color: 'var(--text-mid)' }}>
                  {strings.perDay}
                </div>
                <div
                  className="rounded-xl px-3 py-2.5 flex items-center"
                  style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA' }}
                >
                  <span className="text-[14px] font-bold" style={{ color: 'var(--text-dark)' }}>₹</span>
                  <span className="text-[14px] font-bold ml-1" style={{ color: 'var(--text-dark)' }}>2,400</span>
                  <span className="text-[11px] ml-auto" style={{ color: 'var(--text-soft)' }}>/day</span>
                </div>
              </div>

              {/* Total */}
              <div
                className="rounded-xl p-2.5 mb-3"
                style={{ background: 'var(--green-pale)' }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[11px]" style={{ color: 'var(--text-mid)' }}>{strings.total}</div>
                  <div className="text-[16px] font-bold" style={{ color: 'var(--green)' }}>
                    ₹9,600 <span className="text-[11px] font-normal" style={{ color: 'var(--text-mid)' }}>{strings.forDays}</span>
                  </div>
                </div>
              </div>

              {/* Budget comparison */}
              <div className="flex items-center gap-1.5">
                <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                  {strings.farmerBudget}
                </div>
                <div
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded-md"
                  style={{ background: 'var(--green-pale)', color: 'var(--green)' }}
                >
                  ✓ {strings.match}
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.confirmDates}
              </div>

              {/* Date Range */}
              <div
                className="rounded-xl p-3 mb-3 flex items-center justify-between"
                style={{ background: 'var(--green-pale)', border: '1.5px solid var(--green-light)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[14px]">📅</span>
                  <div>
                    <div className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>Mar 20 – Mar 23</div>
                    <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>4 days</div>
                  </div>
                </div>
                <div className="text-[16px]" style={{ color: 'var(--green)' }}>✓</div>
              </div>

              {/* Delivery Time */}
              <div
                className="rounded-xl p-3 flex items-center justify-between"
                style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[14px]">🕐</span>
                  <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {strings.deliveryBy}
                  </div>
                </div>
                <div className="text-[11px]" style={{ color: 'var(--text-soft)' }}>▼</div>
              </div>
            </div>

            {/* Extras Card */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.extras}
              </div>

              {/* Toggle: Operator included — ON */}
              <div className="flex items-center justify-between mb-3">
                <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  {strings.operatorIncluded}
                </div>
                <div
                  className="ky-tap-toggle w-10 h-6 rounded-full relative"
                  style={{ background: 'var(--green)' }}
                >
                  <div
                    className="w-5 h-5 rounded-full bg-white absolute top-0.5"
                    style={{ right: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                  />
                </div>
              </div>

              {/* Toggle: Trailer attachment — ON */}
              <div className="flex items-center justify-between mb-3">
                <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  {strings.trailerAttachment}
                </div>
                <div
                  className="ky-tap-toggle w-10 h-6 rounded-full relative"
                  style={{ background: 'var(--green)' }}
                >
                  <div
                    className="w-5 h-5 rounded-full bg-white absolute top-0.5"
                    style={{ right: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                  />
                </div>
              </div>

              {/* Toggle: Insurance — OFF */}
              <div className="flex items-center justify-between">
                <div className="text-[12px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                  {strings.insurance}
                </div>
                <div
                  className="ky-tap-toggle w-10 h-6 rounded-full relative"
                  style={{ background: '#D1D5DB' }}
                >
                  <div
                    className="w-5 h-5 rounded-full bg-white absolute top-0.5"
                    style={{ left: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                  />
                </div>
              </div>
            </div>

            {/* Message Card */}
            <div className="bg-white rounded-[20px] p-4 mb-[14px]" style={{ boxShadow: 'var(--card-shadow)' }}>
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                {strings.messageLabel}
              </div>
              <div
                className="rounded-xl p-3 text-[12px]"
                style={{ background: 'var(--cream)', border: '1.5px solid #E8E3DA', color: 'var(--text-dark)', minHeight: '60px', lineHeight: '1.5' }}
              >
                {strings.messagePlaceholder}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-5 pb-5 pt-2">
            <button
              className="ky-tap-cta-primary w-full rounded-2xl py-[15px] font-bold text-[15px] text-white"
              style={{
                background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                boxShadow: '0 4px 20px rgba(26,122,59,0.35)'
              }}
            >
              📩 {strings.sendOfferCta}
            </button>
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
