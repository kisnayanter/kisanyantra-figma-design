import { useLanguage } from '../../contexts/language';

export function OperatorStatusUpdateSheetDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    updateStatus: t({ english: 'Update Booking Status', hindi: 'बुकिंग स्थिति अपडेट करें', tamil: 'முன்பதிவு நிலையை புதுப்பிக்கவும்', marathi: 'बुकिंग स्थिती अपडेट करा' }),
    currentStatus: t({ english: 'Current Status', hindi: 'वर्तमान स्थिति', tamil: 'தற்போதைய நிலை', marathi: 'सद्य स्थिती' }),
    onTheWay: t({ english: 'On The Way', hindi: 'रास्ते में', tamil: 'வழியில்', marathi: 'रस्त्यावर' }),
    selectNext: t({ english: 'Select next status to push', hindi: 'अगली स्थिति चुनें', tamil: 'அடுத்த நிலையைத் தேர்வு செய்யவும்', marathi: 'पुढील स्थिती निवडा' }),
    markDelivered: t({ english: 'Mark as Delivered', hindi: 'डिलीवर के रूप में चिह्नित करें', tamil: 'வழங்கப்பட்டதாக குறிக்கவும்', marathi: 'वितरित म्हणून चिन्हांकित करा' }),
    deliveredDesc: t({ english: 'Equipment has reached the farmer\'s farm', hindi: 'उपकरण किसान के खेत पर पहुंच गया', tamil: 'உபகரணம் விவசாயியின் தோட்டத்தை அடைந்தது', marathi: 'उपकरण शेतकऱ्याच्या शेतावर पोहोचले' }),
    revertReady: t({ english: 'Revert to Equipment Ready', hindi: 'उपकरण तैयार पर वापस जाएं', tamil: 'உபகரணம் தயார் என மாற்றவும்', marathi: 'उपकरण तयार वर परत जा' }),
    revertDesc: t({ english: 'Correct a mistake in the previous step', hindi: 'पिछले चरण में गलती सुधारें', tamil: 'முந்தைய படியில் தவறை சரி செய்யவும்', marathi: 'मागील चरणातील चूक सुधारा' }),
    confirmUpdate: t({ english: 'Confirm Update', hindi: 'अपडेट की पुष्टि करें', tamil: 'புதுப்பிப்பை உறுதிப்படுத்தவும்', marathi: 'अपडेट निश्चित करा' }),
    cancel: t({ english: 'Cancel', hindi: 'रद्द करें', tamil: 'ரத்து செய்யவும்', marathi: 'रद्द करा' }),
    primaryAction: t({ english: 'Primary', hindi: 'प्राथमिक', tamil: 'முதன்மை', marathi: 'प्राथमिक' }),
    correctionLabel: t({ english: 'Correction only', hindi: 'केवल सुधार', tamil: 'திருத்தம் மட்டுமே', marathi: 'केवळ सुधारणा' }),
    bookingId: t({ english: 'Booking #BK-20457', hindi: 'बुकिंग #BK-20457', tamil: 'முன்பதிவு #BK-20457', marathi: 'बुकिंग #BK-20457' }),
  };

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };

  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

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
        <div
          className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col"
          style={{ background: 'var(--bg-primary)' }}
        >
          {/* ── Dimmed background: booking detail screen ── */}
          <div className="absolute inset-0 flex flex-col" style={{ zIndex: 0 }}>
            {/* Status Bar */}
            <div className="flex justify-between items-center px-[18px] py-[10px]">
              <span className="font-bold text-[11px]" style={interFont}>9:48</span>
              <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
            </div>
            {/* Dimmed header */}
            <div
              className="px-[18px] pt-4 pb-5 rounded-b-[36px]"
              style={{
                background: 'var(--gradient-operator)',
                backgroundImage: `var(--gradient-operator), ${svgPattern}`,
                backgroundBlendMode: 'overlay',
                opacity: 0.45
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-[10px]" style={{ background: 'rgba(255,255,255,0.2)' }} />
                <div className="flex-1">
                  <div className="h-2.5 w-24 rounded" style={{ background: 'rgba(255,255,255,0.3)' }} />
                  <div className="h-4 w-32 rounded mt-1" style={{ background: 'rgba(255,255,255,0.5)' }} />
                </div>
                <div className="w-8 h-8 rounded-[10px]" style={{ background: 'rgba(255,255,255,0.2)' }} />
              </div>
              <div className="rounded-[16px] p-3" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <div className="flex items-center gap-3">
                  <div className="text-[22px]">🚚</div>
                  <div className="flex-1">
                    <div className="h-3 w-28 rounded mb-1.5" style={{ background: 'rgba(255,255,255,0.4)' }} />
                    <div className="h-2 w-20 rounded" style={{ background: 'rgba(255,255,255,0.25)' }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Dimmed body placeholder */}
            <div className="flex-1 px-4 py-3 space-y-2 opacity-20">
              <div className="h-16 bg-white rounded-[16px]" />
              <div className="h-4 w-28 bg-gray-300 rounded" />
              <div className="h-10 bg-white rounded-[14px]" />
              <div className="h-10 bg-white rounded-[14px]" />
              <div className="h-10 bg-white rounded-[14px]" />
            </div>
          </div>

          {/* ── Dark overlay ── */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.45)', zIndex: 1 }}
          />

          {/* ── Bottom Sheet ── */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-t-[28px]"
            style={{
              background: 'white',
              zIndex: 2,
              boxShadow: '0 -8px 40px rgba(0,0,0,0.18)',
            }}
          >
            {/* Sheet handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full" style={{ background: '#D1D5DB' }} />
            </div>

            <div className="px-5 pb-6">
              {/* Title */}
              <div className="mb-1">
                <div
                  className="text-[15px] font-bold"
                  style={{ ...poppinsFont, color: 'var(--text-dark)' }}
                >
                  {strings.updateStatus}
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[11px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                    {strings.currentStatus}:
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                    style={{ background: 'var(--operator-blue-pale)', color: 'var(--operator-blue)', ...interFont }}
                  >
                    🚚 {strings.onTheWay}
                  </span>
                </div>
                <div className="text-[11px] mt-1" style={{ color: 'var(--text-soft)', ...interFont }}>
                  {strings.bookingId} · {strings.selectNext}
                </div>
              </div>

              {/* Divider */}
              <div className="my-3" style={{ borderTop: '1px solid #F0EDE7' }} />

              {/* Status options */}
              <div className="space-y-2.5 mb-4">

                {/* Primary next option — Mark as Delivered */}
                <div
                  className="ky-tap-card rounded-[16px] p-3.5 relative"
                  style={{
                    background: 'var(--operator-blue-pale)',
                    border: '2px solid var(--operator-blue)',
                    minHeight: '72px'
                  }}
                >
                  {/* Selected indicator */}
                  <div
                    className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--operator-blue)' }}
                  >
                    <span className="text-white text-[10px]">✓</span>
                  </div>

                  <div className="flex items-start gap-3 pr-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px] flex-shrink-0"
                      style={{ background: 'var(--operator-blue-tint)' }}
                    >
                      📍
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div
                          className="text-[12px] font-bold"
                          style={{ ...poppinsFont, color: 'var(--operator-blue)' }}
                        >
                          {strings.markDelivered}
                        </div>
                        <div
                          className="text-[8px] font-bold px-1.5 py-0.5 rounded"
                          style={{ background: 'var(--operator-blue)', color: 'white', ...interFont }}
                        >
                          {strings.primaryAction}
                        </div>
                      </div>
                      <div
                        className="text-[10px]"
                        style={{ color: 'var(--operator-blue)', opacity: 0.8, ...interFont }}
                      >
                        {strings.deliveredDesc}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Correction option — Revert to Equipment Ready */}
                <div
                  className="ky-tap-card rounded-[16px] p-3.5 relative"
                  style={{
                    background: '#FAFAFA',
                    border: '1.5px solid #E5E7EB',
                    minHeight: '72px'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px] flex-shrink-0"
                      style={{ background: '#F3F4F6' }}
                    >
                      🔧
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div
                          className="text-[12px] font-bold"
                          style={{ ...poppinsFont, color: 'var(--text-dark)' }}
                        >
                          {strings.revertReady}
                        </div>
                        <div
                          className="text-[8px] font-bold px-1.5 py-0.5 rounded"
                          style={{ background: '#E5E7EB', color: 'var(--text-soft)', ...interFont }}
                        >
                          {strings.correctionLabel}
                        </div>
                      </div>
                      <div className="text-[10px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                        {strings.revertDesc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm CTA */}
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3.5 text-[14px] font-bold flex items-center justify-center gap-2 text-white mb-2"
                style={{
                  background: 'var(--gradient-operator)',
                  boxShadow: 'var(--card-shadow-operator)',
                  ...poppinsFont
                }}
              >
                ✅ {strings.confirmUpdate}
              </div>

              {/* Cancel */}
              <div
                className="ky-tap-link w-full py-2 text-[12px] text-center"
                style={{ color: 'var(--text-soft)', ...interFont }}
              >
                {strings.cancel}
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
