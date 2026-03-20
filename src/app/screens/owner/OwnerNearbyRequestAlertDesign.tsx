import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function OwnerNearbyRequestAlertDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    // Push notification banner
    appName: 'KisanYantra',
    justNow: t({ english: 'just now', hindi: 'अभी', tamil: 'இப்போது', marathi: 'आत्ताच' }),
    newRequestNearYou: t({
      english: 'New request near you!',
      hindi: 'आपके पास नया अनुरोध!',
      tamil: 'உங்களுக்கு அருகில் புதிய கோரிக்கை!',
      marathi: 'तुमच्या जवळ नवीन विनंती!'
    }),
    pushBody: t({
      english: 'Ramu Kisan needs a 50 HP Tractor in Hinganghat (3.5 km away)',
      hindi: 'रामू किसान को हिंगणघाट में 50 HP ट्रैक्टर चाहिए (3.5 किमी दूर)',
      tamil: 'ராமு கிசான் ஹிங்கன்காட்டில் 50 HP டிராக்டர் தேவை (3.5 கி.மீ தொலைவில்)',
      marathi: 'रामू किसान यांना हिंगणघाटमध्ये 50 HP ट्रॅक्टर हवे (3.5 किमी दूर)'
    }),
    view: t({ english: 'View', hindi: 'देखें', tamil: 'பார்க்க', marathi: 'पहा' }),
    dismiss: t({ english: 'Dismiss', hindi: 'खारिज', tamil: 'நிராகரி', marathi: 'बंद करा' }),

    // Header
    title: t({
      english: 'Nearby Requests',
      hindi: 'आस-पास के अनुरोध',
      tamil: 'அருகிலுள்ள கோரிக்கைகள்',
      marathi: 'जवळपासच्या विनंत्या'
    }),
    subtitle: t({
      english: 'Farmers need your equipment',
      hindi: 'किसानों को आपके उपकरण चाहिए',
      tamil: 'விவசாயிகளுக்கு உங்கள் உபகரணங்கள் தேவை',
      marathi: 'शेतकऱ्यांना तुमची उपकरणे हवी आहेत'
    }),

    // Alert settings card
    alertRadius: t({
      english: 'Alert Radius: 100 km',
      hindi: 'अलर्ट सीमा: 100 किमी',
      tamil: 'எச்சரிக்கை ஆரம்: 100 கி.மீ',
      marathi: 'अलर्ट त्रिज्या: 100 किमी'
    }),
    alertDesc: t({
      english: "You'll be notified when farmers within 100 km post requests matching your equipment",
      hindi: '100 किमी के भीतर किसानों के अनुरोध आने पर आपको सूचित किया जाएगा',
      tamil: '100 கி.மீ க்குள் விவசாயிகள் கோரிக்கை பதிவு செய்யும்போது உங்களுக்கு அறிவிக்கப்படும்',
      marathi: '100 किमी आत शेतकऱ्यांनी विनंती केल्यावर तुम्हाला सूचित केले जाईल'
    }),
    smartAlerts: t({
      english: 'Smart alerts',
      hindi: 'स्मार्ट अलर्ट',
      tamil: 'ஸ்மார்ட் எச்சரிக்கைகள்',
      marathi: 'स्मार्ट अलर्ट'
    }),
    smartAlertsDesc: t({
      english: 'Only matching equipment types',
      hindi: 'केवल मेल खाते उपकरण',
      tamil: 'பொருந்தும் உபகரண வகைகள் மட்டும்',
      marathi: 'फक्त जुळणारे उपकरण प्रकार'
    }),
    allNearby: t({
      english: 'All nearby requests',
      hindi: 'सभी आस-पास के अनुरोध',
      tamil: 'அனைத்து அருகிலுள்ள கோரிக்கைகள்',
      marathi: 'सर्व जवळपासच्या विनंत्या'
    }),

    // New requests section
    newRequestsHeader: t({
      english: '3 New Requests Nearby',
      hindi: '3 नए अनुरोध आस-पास',
      tamil: '3 புதிய கோரிக்கைகள் அருகில்',
      marathi: '3 नवीन विनंत्या जवळ'
    }),

    // Request card labels
    urgent: t({ english: 'URGENT', hindi: 'अत्यावश्यक', tamil: 'அவசரம்', marathi: 'तातडीचे' }),
    newBadge: t({ english: 'NEW', hindi: 'नया', tamil: 'புதிய', marathi: 'नवीन' }),
    kmAway: t({ english: 'km away', hindi: 'किमी दूर', tamil: 'கி.மீ தொலைவில்', marathi: 'किमी दूर' }),
    budget: t({ english: 'Budget', hindi: 'बजट', tamil: 'பட்ஜெட்', marathi: 'बजेट' }),
    matches: t({ english: 'MATCHES', hindi: 'मेल', tamil: 'பொருத்தம்', marathi: 'जुळते' }),
    sendOffer: t({ english: 'Send Offer', hindi: 'ऑफर भेजें', tamil: 'சலுகை அனுப்பு', marathi: 'ऑफर पाठवा' }),
    days: t({ english: 'days', hindi: 'दिन', tamil: 'நாட்கள்', marathi: 'दिवस' }),
    day: t({ english: 'day', hindi: 'दिन', tamil: 'நாள்', marathi: 'दिवस' }),

    // Footer link
    managePrefs: t({
      english: 'Manage notification preferences',
      hindi: 'सूचना प्राथमिकताएं प्रबंधित करें',
      tamil: 'அறிவிப்பு விருப்பங்களை நிர்வகிக்கவும்',
      marathi: 'सूचना प्राधान्ये व्यवस्थापित करा'
    }),
  };

  const requests = [
    {
      id: 1,
      urgent: true,
      isNew: false,
      matchesEquipment: true,
      matchLabel: 'Mahindra 475 DI',
      icon: '🚜',
      title: '50 HP Tractor',
      farmer: 'Ramu Kisan',
      location: 'Hinganghat',
      distance: '3.5',
      dates: 'Mar 20-23',
      duration: `4 ${strings.days}`,
      budget: '₹2,400/day',
      showSendOffer: true,
    },
    {
      id: 2,
      urgent: false,
      isNew: true,
      matchesEquipment: false,
      matchLabel: null,
      icon: '🌾',
      title: t({ english: 'Combine Harvester', hindi: 'कम्बाइन हार्वेस्टर', tamil: 'கம்பைன் ஹார்வெஸ்டர்', marathi: 'कम्बाइन हार्वेस्टर' }),
      farmer: 'Suresh Patil',
      location: 'Wardha',
      distance: '12',
      dates: 'Mar 25-28',
      duration: `4 ${strings.days}`,
      budget: '₹5,000/day',
      showSendOffer: true,
    },
    {
      id: 3,
      urgent: false,
      isNew: true,
      matchesEquipment: false,
      matchLabel: null,
      icon: '🚜',
      title: t({ english: 'Rotavator', hindi: 'रोटावेटर', tamil: 'ரோட்டவேட்டர்', marathi: 'रोटावेटर' }),
      farmer: 'Lakshmi Devi',
      location: 'Amravati',
      distance: '45',
      dates: 'Mar 22',
      duration: `1 ${strings.day}`,
      budget: '₹1,200/hr',
      showSendOffer: false,
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-5 pt-4 pb-5 rounded-b-[36px]"
            style={{ background: 'var(--gradient-green)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <button
                type="button"
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </button>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  📍 {strings.subtitle}
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
          <div className="flex-1 overflow-y-auto px-4 pb-4 -mt-4">
            {/* Alert Settings Card */}
            <div
              className="rounded-[20px] p-4 mb-3"
              style={{ background: 'var(--green-pale)', border: '1px solid var(--green-light)', boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[14px]">📍</span>
                <span
                  className="text-[13px] font-bold"
                  style={{ color: 'var(--green)', fontFamily: "'Baloo 2', cursive" }}
                >
                  {strings.alertRadius}
                </span>
              </div>
              <div className="text-[10px] mb-3" style={{ color: 'var(--text-mid)', lineHeight: '1.4' }}>
                {strings.alertDesc}
              </div>

              {/* Smart alerts toggle - ON */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {strings.smartAlerts}
                  </div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                    {strings.smartAlertsDesc}
                  </div>
                </div>
                <div
                  className="ky-tap-toggle w-9 h-5 rounded-full flex items-center px-0.5"
                  style={{ background: 'var(--green)' }}
                >
                  <div
                    className="w-4 h-4 bg-white rounded-full ml-auto"
                    style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                  />
                </div>
              </div>

              {/* All nearby toggle - OFF */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold" style={{ color: 'var(--text-dark)' }}>
                    {strings.allNearby}
                  </div>
                </div>
                <div
                  className="ky-tap-toggle w-9 h-5 rounded-full flex items-center px-0.5"
                  style={{ background: '#D1D5DB' }}
                >
                  <div
                    className="w-4 h-4 bg-white rounded-full"
                    style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                  />
                </div>
              </div>
            </div>

            {/* New Requests Section Header */}
            <div className="flex items-center justify-between mb-2">
              <div
                className="text-[14px] font-bold"
                style={{ color: 'var(--text-dark)', fontFamily: "'Baloo 2', cursive" }}
              >
                🔔 {strings.newRequestsHeader}
              </div>
              <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                {strings.justNow}
              </div>
            </div>

            {/* Request Cards */}
            {requests.map((request) => (
              <div
                key={request.id}
                className="ky-tap-card bg-white rounded-[20px] p-4 mb-3"
                style={{
                  boxShadow: 'var(--card-shadow)',
                  borderLeft: request.urgent ? '4px solid #DC2626' : 'none'
                }}
              >
                {/* Badges row */}
                <div className="flex items-center gap-2 mb-2">
                  {request.urgent && (
                    <div
                      className="rounded-[8px] px-2 py-0.5 text-[9px] font-bold"
                      style={{ background: '#FEE2E2', color: '#DC2626', border: '1px solid #FECACA' }}
                    >
                      {strings.urgent}
                    </div>
                  )}
                  {request.isNew && (
                    <div
                      className="rounded-[8px] px-2 py-0.5 text-[9px] font-bold"
                      style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)', border: '1px solid var(--saffron-light)' }}
                    >
                      ⚡ {strings.newBadge}
                    </div>
                  )}
                </div>

                {/* Equipment Title */}
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-[20px] flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                  >
                    {request.icon}
                  </div>
                  <div
                    className="text-[14px] font-bold"
                    style={{ color: 'var(--text-dark)', fontFamily: "'Baloo 2', cursive" }}
                  >
                    {request.title}
                  </div>
                </div>

                {/* Farmer Info */}
                <div className="text-[11px] mb-2" style={{ color: 'var(--text-mid)' }}>
                  {request.farmer}, {request.location} · 📍 {request.distance} {strings.kmAway}
                </div>

                {/* Date / Duration / Budget */}
                <div className="flex gap-2 flex-wrap mb-3">
                  <div
                    className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    📅 {request.dates} ({request.duration})
                  </div>
                  <div
                    className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                    style={{ background: 'var(--cream)', color: 'var(--text-mid)' }}
                  >
                    💰 {strings.budget}: {request.budget}
                  </div>
                </div>

                {/* Match badge */}
                {request.matchesEquipment && (
                  <div
                    className="inline-block rounded-[8px] px-2 py-1 text-[9px] font-bold mb-3"
                    style={{ background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-light)' }}
                  >
                    ✓ {strings.matches}: {request.matchLabel}
                  </div>
                )}

                {/* Action Buttons */}
                {request.showSendOffer ? (
                  <div className="flex gap-2">
                    <button
                      className="ky-tap-action-confirm flex-1 rounded-[10px] py-2 text-[11px] font-bold text-white text-center"
                      style={{
                        background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                        boxShadow: '0 3px 10px rgba(26,122,59,0.3)'
                      }}
                    >
                      📩 {strings.sendOffer}
                    </button>
                    <button
                      className="ky-tap-link rounded-[10px] py-2 px-3 text-[11px] font-bold text-center"
                      style={{ background: 'var(--cream)', color: 'var(--text-dark)' }}
                    >
                      {strings.view}
                    </button>
                  </div>
                ) : (
                  <button
                    className="ky-tap-link text-[11px] font-semibold"
                    style={{ color: 'var(--green)' }}
                  >
                    {strings.view} →
                  </button>
                )}
              </div>
            ))}

            {/* Manage notification preferences */}
            <div className="text-center mt-2 mb-2">
              <button
                className="ky-tap-link text-[11px] font-semibold"
                style={{ color: 'var(--text-mid)' }}
              >
                ⚙️ {strings.managePrefs}
              </button>
            </div>
          </div>

          {/* Bottom Nav */}
          <OwnerBottomNav activeTab="equipment" />

          {/* Notch */}
          <div
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
            style={{ borderRadius: '0 0 14px 14px' }}
          />

          {/* ===== PUSH NOTIFICATION OVERLAY ===== */}
          <div
            className="absolute top-[10px] left-[10px] right-[10px] z-40 rounded-t-[28px] overflow-hidden"
            style={{ pointerEvents: 'none' }}
          >
            {/* Semi-transparent dark overlay */}
            <div
              className="w-full pt-8 pb-2 px-3"
              style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 70%, transparent 100%)',
                pointerEvents: 'auto'
              }}
            >
              {/* Notification card */}
              <div
                className="rounded-[16px] p-3"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18)'
                }}
              >
                {/* App icon + title row */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className="w-5 h-5 rounded-[5px] flex items-center justify-center text-[11px]"
                    style={{ background: 'var(--green-pale)' }}
                  >
                    🚜
                  </div>
                  <span className="text-[10px] font-semibold" style={{ color: 'var(--text-mid)' }}>
                    {strings.appName} · {strings.justNow}
                  </span>
                </div>

                {/* Notification title */}
                <div
                  className="text-[12px] font-bold mb-1"
                  style={{ color: 'var(--text-dark)', fontFamily: "'Baloo 2', cursive" }}
                >
                  🔔 {strings.newRequestNearYou}
                </div>

                {/* Notification body */}
                <div className="text-[10px] mb-2" style={{ color: 'var(--text-mid)', lineHeight: '1.4' }}>
                  {strings.pushBody}
                </div>

                {/* Inline actions */}
                <div className="flex items-center gap-4">
                  <button
                    className="ky-tap-link text-[11px] font-bold"
                    style={{ color: 'var(--green)' }}
                  >
                    {strings.view}
                  </button>
                  <button
                    className="ky-tap-link text-[11px] font-semibold"
                    style={{ color: 'var(--text-soft)' }}
                  >
                    {strings.dismiss}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
