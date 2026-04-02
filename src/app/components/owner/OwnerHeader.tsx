import { ReactNode } from 'react';

interface OwnerHeaderProps {
  title: string;
  subtitle?: string;
  userName?: string;
  greeting?: string;
  activeStatus?: string;
  showNotification?: boolean;
  notificationCount?: number;
  showSettings?: boolean;
  showRoleSwitch?: boolean;
  showNotificationBadge?: boolean;
  children?: ReactNode;
  role?: 'farmer' | 'owner';
}

export function OwnerHeader({ 
  title, 
  subtitle, 
  userName,
  greeting,
  activeStatus,
  showNotification = false,
  notificationCount,
  showSettings = false,
  showRoleSwitch = false,
  showNotificationBadge = false,
  children,
  role = 'owner'
}: OwnerHeaderProps) {
  // Dynamic gradient and shadow based on role
  const gradient = 'var(--gradient-green)';
  const shadow = 'var(--card-shadow-green)';
  
  return (
    <div 
      className="px-[18px] pt-5 pb-6 rounded-b-[36px] relative"
      style={{ 
        background: gradient,
        boxShadow: shadow,
        backgroundImage: `
          ${gradient},
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="flex justify-between items-center mb-4 gap-3">
        <div className="flex-1">
          {(greeting || subtitle) && (
            <div 
              className="text-[13px] font-medium tracking-wide" 
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}
            >
              {greeting || subtitle}
            </div>
          )}
          <div 
            className="text-white text-[24px] font-bold leading-tight mt-0.5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {userName ? userName : title}
          </div>
          {activeStatus && (
            <div className="flex items-center gap-2 mt-1">
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#4ade80' }}
              />
              <span 
                className="text-[11px]" 
                style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Inter', sans-serif" }}
              >
                {activeStatus}
              </span>
            </div>
          )}
        </div>
        
        {(showNotification || showSettings || showRoleSwitch) && (
          <div className="flex items-center gap-2">
            {showNotification && (
              <button
                type="button"
                className="ky-tap-icon w-9 h-9 rounded-xl flex items-center justify-center text-base relative backdrop-blur-sm"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: 'white'
                }}
              >
                🔔
                {(notificationCount && notificationCount > 0) ? (
                  <div 
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: '#ef4444', border: '2px solid white' }}
                  >
                    <span className="text-white text-[10px] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {notificationCount > 9 ? '9+' : notificationCount}
                    </span>
                  </div>
                ) : showNotificationBadge && (
                  <div 
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ background: 'var(--saffron)', border: '2px solid white' }}
                  />
                )}
              </button>
            )}
          </div>
        )}
      </div>
      
      {children}
    </div>
  );
}
