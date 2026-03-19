import { useLanguage } from '../contexts/language';

type FarmerTab = 'home' | 'search' | 'bookings' | 'profile';

interface FarmerBottomNavProps {
  activeTab: FarmerTab;
}

export function FarmerBottomNav({ activeTab }: FarmerBottomNavProps) {
  const { selectText } = useLanguage();

  const tabs: { key: FarmerTab; emoji: string; label: string }[] = [
    {
      key: 'home',
      emoji: '\u{1F3E0}',
      label: selectText({ english: 'Home', hindi: '\u0918\u0930', tamil: '\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1', marathi: '\u0918\u0930' })
    },
    {
      key: 'search',
      emoji: '\u{1F50D}',
      label: selectText({ english: 'Search', hindi: '\u0916\u094B\u091C\u0947\u0902', tamil: '\u0BA4\u0BC7\u0B9F\u0BC1', marathi: '\u0936\u094B\u0927\u093E' })
    },
    {
      key: 'bookings',
      emoji: '\u{1F4CB}',
      label: selectText({ english: 'Bookings', hindi: '\u092C\u0941\u0915\u093F\u0902\u0917', tamil: '\u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1', marathi: '\u092C\u0941\u0915\u093F\u0902\u0917' })
    },
    {
      key: 'profile',
      emoji: '\u{1F464}',
      label: selectText({ english: 'Profile', hindi: '\u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932', tamil: '\u0BAA\u0BCD\u0BB0\u0BCA\u0BAA\u0BC8\u0BB2\u0BCD', marathi: '\u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932' })
    }
  ];

  return (
    <div className="relative">
      {/* FAB - Quick Actions */}
      <div
        className="ky-tap-mic absolute -top-6 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white z-10"
        style={{
          background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
          boxShadow: '0 4px 16px rgba(255,107,0,0.4)'
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>

      {/* Nav Bar */}
      <div
        className="bg-white flex justify-around items-center py-[10px] pb-[14px]"
        style={{ borderTop: '1px solid #F0EDE7' }}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <div
              key={tab.key}
              className="ky-tap-nav flex flex-col items-center gap-0.5 text-[9px] w-[60px]"
              style={{ color: isActive ? 'var(--saffron)' : 'var(--text-soft)' }}
            >
              <div className="text-xl">{tab.emoji}</div>
              <span className="font-semibold truncate max-w-full">{tab.label}</span>
              {isActive && (
                <div className="w-1 h-1 rounded-full" style={{ background: 'var(--saffron)' }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
