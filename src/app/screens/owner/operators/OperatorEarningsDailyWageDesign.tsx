import { useLanguage } from '../../../contexts/language';

export function OperatorEarningsDailyWageDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };

  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

  // Calendar heatmap for March 2026 — days 1-31 (Mar starts on Sunday)
  const calendarDays = [
    { day: 1, worked: false }, { day: 2, worked: false }, { day: 3, worked: true },
    { day: 4, worked: true },  { day: 5, worked: false }, { day: 6, worked: true },
    { day: 7, worked: false }, { day: 8, worked: false }, { day: 9, worked: true },
    { day: 10, worked: true }, { day: 11, worked: true }, { day: 12, worked: false },
    { day: 13, worked: true }, { day: 14, worked: false },{ day: 15, worked: true },
    { day: 16, worked: true }, { day: 17, worked: false },{ day: 18, worked: true },
    { day: 19, worked: false },{ day: 20, worked: true }, { day: 21, worked: true },
    { day: 22, worked: false },{ day: 23, worked: true }, { day: 24, worked: false },
    { day: 25, worked: true }, { day: 26, worked: true }, { day: 27, worked: false },
    { day: 28, worked: false },{ day: 29, worked: true }, { day: 30, worked: true },
    { day: 31, worked: false },
  ];
  const workedDays = calendarDays.filter((d) => d.worked).length; // 18

  const dailyLog = [
    { date: 'Mar 30', equipment: 'Combine Harvester', hours: '10 hrs', earned: '₹600' },
    { date: 'Mar 29', equipment: 'Mahindra 475 DI', hours: '8 hrs', earned: '₹600' },
    { date: 'Mar 26', equipment: 'Mahindra 475 DI', hours: '8 hrs', earned: '₹600' },
    { date: 'Mar 25', equipment: 'Combine Harvester', hours: '10 hrs', earned: '₹600' },
    { date: 'Mar 23', equipment: 'Mahindra 475 DI', hours: '8 hrs', earned: '₹600' },
  ];

  const weekDayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

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
              <div className="text-[10px] font-bold px-2.5 py-1.5 rounded-xl" style={{ background: '#FFF7ED', color: '#C2410C', ...interFont }}>
                🗓️ ₹600/{t({ english: 'Day', hindi: 'दिन', tamil: 'நாள்', marathi: 'दिवस' })}
              </div>
            </div>
            {/* Summary */}
            <div className="flex gap-2">
              <div className="flex-1 rounded-[12px] p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <div className="text-white text-[16px] font-extrabold" style={poppinsFont}>₹10,800</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>{t({ english: 'This Month', hindi: 'इस महीने', tamil: 'இந்த மாதம்', marathi: 'या महिन्यात' })}</div>
              </div>
              <div className="flex-1 rounded-[12px] p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <div className="text-white text-[16px] font-extrabold" style={poppinsFont}>{workedDays}</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>{t({ english: 'Days Worked', hindi: 'काम के दिन', tamil: 'வேலை நாட்கள்', marathi: 'कामाचे दिवस' })}</div>
              </div>
              <div className="flex-1 rounded-[12px] p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <div className="text-white text-[16px] font-extrabold" style={poppinsFont}>₹600</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>{t({ english: 'Rate/Day', hindi: 'दर/दिन', tamil: 'விகிதம்/நாள்', marathi: 'दर/दिवस' })}</div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-3">
            {/* Model strip */}
            <div className="rounded-[12px] px-3 py-2 mb-3 flex items-center justify-between" style={{ background: '#FFF7ED' }}>
              <div className="flex items-center gap-2">
                <div className="text-[16px]">🗓️</div>
                <div className="text-[10px]" style={{ color: '#C2410C', ...interFont }}>
                  {t({ english: `${workedDays} days × ₹600/day = ₹${workedDays * 600}`, hindi: `${workedDays} दिन × ₹600/दिन = ₹${workedDays * 600}`, tamil: `${workedDays} நாட்கள் × ₹600/நாள் = ₹${workedDays * 600}`, marathi: `${workedDays} दिवस × ₹600/दिवस = ₹${workedDays * 600}` })}
                </div>
              </div>
              <div className="text-[13px] font-extrabold" style={{ color: '#C2410C', ...poppinsFont }}>
                ₹{workedDays * 600}
              </div>
            </div>

            {/* Calendar heatmap */}
            <div className="bg-white rounded-[16px] p-3 mb-3" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
              <div className="flex justify-between items-center mb-2">
                <div className="text-[12px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
                  📆 {t({ english: 'March 2026', hindi: 'मार्च 2026', tamil: 'மார்ச் 2026', marathi: 'मार्च 2026' })}
                </div>
                <div className="flex items-center gap-2 text-[9px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                  <span className="inline-block w-2.5 h-2.5 rounded" style={{ background: 'var(--green)' }} />
                  {t({ english: 'Worked', hindi: 'काम किया', tamil: 'வேலை', marathi: 'काम' })}
                  <span className="inline-block w-2.5 h-2.5 rounded" style={{ background: '#F3F4F6' }} />
                  {t({ english: 'Off', hindi: 'बंद', tamil: 'விடுமுறை', marathi: 'सुट्टी' })}
                </div>
              </div>

              {/* Weekday labels */}
              <div className="grid grid-cols-7 gap-0.5 mb-1">
                {weekDayLabels.map((d, i) => (
                  <div key={i} className="text-center text-[8px] font-bold" style={{ color: 'var(--text-soft)', ...interFont }}>{d}</div>
                ))}
              </div>

              {/* Calendar grid — Mar 2026 starts on Sunday */}
              <div className="grid grid-cols-7 gap-0.5">
                {calendarDays.map(({ day, worked }) => (
                  <div
                    key={day}
                    className="aspect-square rounded flex items-center justify-center text-[9px] font-bold"
                    style={{
                      background: worked ? 'var(--green)' : '#F3F4F6',
                      color: worked ? 'white' : 'var(--text-soft)',
                      ...interFont
                    }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Daily log */}
            <div className="text-[12px] font-bold mb-2" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
              {t({ english: '📋 Daily Work Log', hindi: '📋 दैनिक कार्य लॉग', tamil: '📋 தினசரி வேலை பதிவு', marathi: '📋 दैनिक काम नोंद' })}
            </div>
            <div className="space-y-1.5">
              {dailyLog.map((log) => (
                <div key={log.date} className="bg-white rounded-[12px] p-2.5 flex items-center gap-2" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
                  <div className="text-[10px] font-bold" style={{ ...interFont, color: 'var(--text-dark)', minWidth: '36px' }}>{log.date}</div>
                  <div className="flex-1 text-[10px]" style={{ color: 'var(--text-mid)', ...interFont }}>{log.equipment}</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...interFont }}>{log.hours}</div>
                  <div className="text-[12px] font-extrabold" style={{ color: '#C2410C', ...poppinsFont }}>{log.earned}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50" style={{ borderRadius: '0 0 14px 14px' }} />
        </div>
      </div>
    </div>
  );
}
