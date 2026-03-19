import { useLanguage } from '../contexts/language';

type OwnerTab = 'home' | 'equipment' | 'bookings' | 'profile';

interface OwnerBottomNavProps {
  activeTab: OwnerTab;
}

export function OwnerBottomNav({ activeTab }: OwnerBottomNavProps) {
  const { selectText } = useLanguage();

  const tabs: { key: OwnerTab; emoji: string; label: string }[] = [
    {
      key: 'home',
      emoji: '\u{1F3E0}',
      label: selectText({ english: 'Home', hindi: '\u0918\u0930', tamil: '\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1', marathi: '\u0918\u0930' })
    },
    {
      key: 'equipment',
      emoji: '\u{1F69C}',
      label: selectText({ english: 'Equip', hindi: '\u0909\u092A\u0915\u0930\u0923', tamil: '\u0B89\u0BAA\u0B95\u0BB0\u0BA3\u0BAE\u0BCD', marathi: '\u0909\u092A\u0915\u0930\u0923' })
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
      {/* FAB - Add Equipment */}
      <div
        className="ky-tap-mic absolute -top-6 right-5 w-12 h-12 rounded-full flex items-center justify-center text-[22px] text-white z-10"
        style={{
          background: 'linear-gradient(135deg, var(--green), var(--green-light))',
          boxShadow: '0 4px 16px rgba(26,122,59,0.4)'
        }}
      >
        <span role="img" aria-label="Add Equipment">{'\u2795'}</span>
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
              style={{ color: isActive ? 'var(--green)' : 'var(--text-soft)' }}
            >
              <div className="text-xl">{tab.emoji}</div>
              <span className="font-semibold truncate max-w-full">{tab.label}</span>
              {isActive && (
                <div className="w-1 h-1 rounded-full" style={{ background: 'var(--green)' }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
