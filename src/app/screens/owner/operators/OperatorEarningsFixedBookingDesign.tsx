import { useLanguage } from '../../../contexts/language';

export function OperatorEarningsFixedBookingDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };

  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

  const history = [
    { id: 'BK-2026-015', date: 'Jan 15', equipment: 'Mahindra 475 DI', earned: '₹500' },
    { id: 'BK-2026-014', date: 'Jan 14', equipment: 'Combine Harvester', earned: '₹500' },
    { id: 'BK-2026-013', date: 'Jan 13', equipment: 'Mahindra 475 DI', earned: '₹500' },
    { id: 'BK-2026-012', date: 'Jan 12', equipment: 'Combine Harvester', earned: '₹500' },
    { id: 'BK-2026-011', date: 'Jan 11', equipment: 'Mahindra 475 DI', earned: '₹500' },
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px]">
            <span className="font-bold text-[11px]" style={interFont}>9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Green gradient header */}
          <div
            className="px-[18px] pt-4 pb-5 rounded-b-[36px]"
            style={{
              background: 'var(--gradient-green)',
              boxShadow: 'var(--card-shadow-green)',
              backgroundImage: `var(--gradient-green), ${svgPattern}`,
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white" style={{ background: 'rgba(255,255,255,0.2)', fontSize: '16px' }}>←</div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>
                  {t({ english: 'Operator Earnings', hindi: 'ऑपरेटर कमाई', tamil: 'செயல்படுத்தி வருமானம்', marathi: 'ऑपरेटर कमाई' })}
                </div>
                <div className="text-white text-[18px] font-bold" style={poppinsFont}>Ramesh Kumar</div>
              </div>
              <div className="text-[10px] font-bold px-2.5 py-1.5 rounded-xl" style={{ background: '#FEF9C3', color: '#B45309', ...interFont }}>
                💰 ₹500/{t({ english: 'Booking', hindi: 'बुकिंग', tamil: 'முன்பதிவு', marathi: 'बुकिंग' })}
              </div>
            </div>
            {/* Summary row */}
            <div className="flex gap-2">
              <div className="flex-1 rounded-[12px] p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <div className="text-white text-[16px] font-extrabold" style={poppinsFont}>₹16,000</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>{t({ english: 'Total Earned', hindi: 'कुल कमाई', tamil: 'மொத்த வருமானம்', marathi: 'एकूण कमाई' })}</div>
              </div>
              <div className="flex-1 rounded-[12px] p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <div className="text-white text-[16px] font-extrabold" style={poppinsFont}>₹6,000</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>{t({ english: 'This Month', hindi: 'इस महीने', tamil: 'இந்த மாதம்', marathi: 'या महिन्यात' })}</div>
              </div>
              <div className="flex-1 rounded-[12px] p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <div className="text-white text-[16px] font-extrabold" style={poppinsFont}>12</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>{t({ english: 'Bookings', hindi: 'बुकिंग', tamil: 'முன்பதிவுகள்', marathi: 'बुकिंग' })}</div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-3">
            {/* Model strip */}
            <div className="rounded-[12px] px-3 py-2 mb-3 flex items-center justify-between" style={{ background: '#FEF9C3' }}>
              <div className="flex items-center gap-2">
                <div className="text-[16px]">💰</div>
                <div className="text-[10px]" style={{ color: '#B45309', ...interFont }}>
                  {t({ english: '₹500 fixed per completed booking', hindi: '₹500 प्रति पूर्ण बुकिंग', tamil: '₹500 நிலையான முடிந்த முன்பதிவுக்கு', marathi: '₹500 प्रति पूर्ण बुकिंग' })}
                </div>
              </div>
              <div className="text-[12px] font-extrabold" style={{ color: '#B45309', ...poppinsFont }}>
                12 × ₹500 = ₹6,000
              </div>
            </div>

            <div className="text-[12px] font-bold mb-2" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
              {t({ english: '📋 Booking History', hindi: '📋 बुकिंग इतिहास', tamil: '📋 முன்பதிவு வரலாறு', marathi: '📋 बुकिंग इतिहास' })}
            </div>

            {/* Table header */}
            <div className="flex gap-2 px-2 mb-1">
              <div className="text-[8px] font-bold uppercase" style={{ flex: 2.5, color: 'var(--text-soft)', ...interFont }}>{t({ english: 'Booking', hindi: 'बुकिंग', tamil: 'முன்பதிவு', marathi: 'बुकिंग' })}</div>
              <div className="text-[8px] font-bold uppercase" style={{ flex: 2, color: 'var(--text-soft)', ...interFont }}>{t({ english: 'Equipment', hindi: 'उपकरण', tamil: 'உபகரணம்', marathi: 'उपकरण' })}</div>
              <div className="text-[8px] font-bold uppercase" style={{ flex: 1, color: 'var(--text-soft)', ...interFont }}>{t({ english: 'Fixed', hindi: 'निश्चित', tamil: 'நிலையான', marathi: 'निश्चित' })}</div>
            </div>

            <div className="space-y-1.5">
              {history.map((row) => (
                <div key={row.id} className="bg-white rounded-[12px] p-2.5 flex gap-2 items-center" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
                  <div style={{ flex: 2.5 }}>
                    <div className="text-[10px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>{row.id}</div>
                    <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...interFont }}>{row.date}</div>
                  </div>
                  <div className="text-[10px]" style={{ flex: 2, color: 'var(--text-mid)', ...interFont }}>{row.equipment.split(' ').slice(0, 2).join(' ')}</div>
                  <div className="text-[12px] font-extrabold" style={{ flex: 1, color: '#B45309', ...poppinsFont }}>{row.earned}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex justify-center">
              <div className="ky-tap-link text-[11px] font-semibold" style={{ color: 'var(--green)', ...interFont }}>
                ⬇️ {t({ english: 'Export Report', hindi: 'रिपोर्ट निर्यात', tamil: 'அறிக்கை ஏற்றுமதி', marathi: 'अहवाल निर्यात' })}
              </div>
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50" style={{ borderRadius: '0 0 14px 14px' }} />
        </div>
      </div>
    </div>
  );
}
