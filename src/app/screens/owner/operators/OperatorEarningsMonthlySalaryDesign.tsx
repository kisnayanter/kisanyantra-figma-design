import { useLanguage } from '../../../contexts/language';

export function OperatorEarningsMonthlySalaryDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };

  const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

  const months = [
    { month: 'March 2026', amount: '₹8,000', status: 'pending', payDay: 'Due Mar 5', bookings: 18 },
    { month: 'February 2026', amount: '₹8,000', status: 'paid', payDay: 'Paid Feb 5', bookings: 14 },
    { month: 'January 2026', amount: '₹8,000', status: 'paid', payDay: 'Paid Jan 5', bookings: 12 },
    { month: 'December 2025', amount: '₹8,000', status: 'paid', payDay: 'Paid Dec 5', bookings: 16 },
  ];

  const activityLog = [
    { date: 'Mar 18', equipment: 'Mahindra 475 DI', duration: '1 day' },
    { date: 'Mar 15', equipment: 'Combine Harvester', duration: '2 days' },
    { date: 'Mar 12', equipment: 'Mahindra 475 DI', duration: '1 day' },
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
              <div className="text-[10px] font-bold px-2.5 py-1.5 rounded-xl" style={{ background: '#DBEAFE', color: '#1D4ED8', ...interFont }}>
                📅 ₹8k/{t({ english: 'Month', hindi: 'माह', tamil: 'மாதம்', marathi: 'माह' })}
              </div>
            </div>
            {/* Summary */}
            <div className="flex gap-2">
              <div className="flex-1 rounded-[12px] p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <div className="text-white text-[16px] font-extrabold" style={poppinsFont}>₹32,000</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>{t({ english: 'Total Paid', hindi: 'कुल भुगतान', tamil: 'மொத்த செலுத்தப்பட்டது', marathi: 'एकूण दिले' })}</div>
              </div>
              <div className="flex-1 rounded-[12px] p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <div className="text-white text-[16px] font-extrabold" style={poppinsFont}>₹8,000</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>{t({ english: 'Due Mar 5', hindi: 'मार्च 5 को देय', tamil: 'மார் 5 க்குள்', marathi: 'मार्च 5 ला देय' })}</div>
              </div>
              <div className="flex-1 rounded-[12px] p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.18)' }}>
                <div className="text-white text-[16px] font-extrabold" style={poppinsFont}>Day 5</div>
                <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.75)', ...interFont }}>{t({ english: 'Pay Day', hindi: 'भुगतान दिन', tamil: 'ஊதிய நாள்', marathi: 'पगार दिवस' })}</div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-3">
            {/* Model strip */}
            <div className="rounded-[12px] px-3 py-2 mb-3 flex items-center gap-2" style={{ background: '#EFF6FF' }}>
              <div className="text-[16px]">📅</div>
              <div className="text-[10px]" style={{ color: '#1D4ED8', ...interFont }}>
                {t({ english: '₹8,000 fixed salary paid on Day 5 every month', hindi: 'हर महीने दिन 5 को ₹8,000 निश्चित वेतन', tamil: 'ஒவ்வொரு மாதமும் நாள் 5 ல் ₹8,000 நிலையான சம்பளம்', marathi: 'दर महिन्याच्या दिवस 5 ला ₹8,000 निश्चित पगार' })}
              </div>
            </div>

            {/* Monthly salary strips */}
            <div className="text-[12px] font-bold mb-2" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
              {t({ english: '📋 Monthly Salary Record', hindi: '📋 मासिक वेतन रिकॉर्ड', tamil: '📋 மாதாந்திர சம்பள பதிவு', marathi: '📋 मासिक पगार नोंद' })}
            </div>

            <div className="space-y-2 mb-3">
              {months.map((m) => (
                <div
                  key={m.month}
                  className="bg-white rounded-[14px] p-3"
                  style={{
                    boxShadow: 'var(--card-shadow-sm)',
                    border: m.status === 'pending' ? '1.5px solid #FCD34D' : '1.5px solid transparent'
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div>
                      <div className="text-[12px] font-bold" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>{m.month}</div>
                      <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...interFont }}>
                        {m.bookings} {t({ english: 'bookings handled', hindi: 'बुकिंग संभाली', tamil: 'முன்பதிவுகள் கையாண்டன', marathi: 'बुकिंग हाताळल्या' })} (informational)
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[15px] font-extrabold" style={{ color: m.status === 'pending' ? '#D97706' : 'var(--green)', ...poppinsFont }}>{m.amount}</div>
                      <div
                        className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: m.status === 'pending' ? '#FEF3C7' : '#DCFCE7',
                          color: m.status === 'pending' ? '#D97706' : 'var(--green)',
                          ...interFont
                        }}
                      >
                        {m.status === 'pending' ? '⏳ ' : '✅ '}{m.payDay}
                      </div>
                    </div>
                  </div>
                  {m.status === 'pending' && (
                    <div
                      className="ky-tap-cta-primary w-full rounded-[10px] py-2 text-[11px] font-bold text-center text-white mt-1"
                      style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', ...poppinsFont }}
                    >
                      💳 {t({ english: 'Mark as Paid', hindi: 'भुगतान किया चिह्नित करें', tamil: 'செலுத்தப்பட்டதாக குறிக்கவும்', marathi: 'भरलेले म्हणून चिन्हांकित करा' })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Activity log (informational) */}
            <div className="text-[11px] font-bold mb-1.5" style={{ ...poppinsFont, color: 'var(--text-dark)' }}>
              {t({ english: '📆 March Activity (informational)', hindi: '📆 मार्च गतिविधि (जानकारी)', tamil: '📆 மார்ச் செயல்பாடு (தகவல்)', marathi: '📆 मार्च क्रियाकलाप (माहिती)' })}
            </div>
            <div className="space-y-1.5">
              {activityLog.map((a) => (
                <div key={a.date} className="bg-white rounded-[10px] p-2 flex items-center gap-2" style={{ boxShadow: 'var(--card-shadow-sm)' }}>
                  <div className="text-[9px] font-bold" style={{ color: 'var(--text-dark)', ...interFont, minWidth: '36px' }}>{a.date}</div>
                  <div className="text-[9px] flex-1" style={{ color: 'var(--text-mid)', ...interFont }}>{a.equipment}</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...interFont }}>{a.duration}</div>
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
