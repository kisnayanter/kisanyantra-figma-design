import { ReactNode } from 'react';

interface OwnerHeaderProps {
  title: string;
  subtitle?: string;
  showNotification?: boolean;
  showRoleSwitch?: boolean;
  children?: ReactNode;
  role?: 'farmer' | 'owner';
}

export function OwnerHeader({ 
  title, 
  subtitle, 
  showNotification = false, 
  showRoleSwitch = false,
  children,
  role = 'owner'
}: OwnerHeaderProps) {
  // Dynamic gradient and shadow based on role
  const gradient = 'var(--gradient-green)';
  const shadow = 'var(--card-shadow-green)';
  
  return (
    <div 
      className="px-5 pt-5 pb-6 rounded-b-[36px] relative"
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
          {subtitle && (
            <div 
              className="text-[13px] font-medium tracking-wide" 
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}
            >
              {subtitle}
            </div>
          )}
          <div 
            className="text-white text-[24px] font-bold leading-tight mt-0.5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {title}
          </div>
        </div>
        
        {(showNotification || showRoleSwitch) && (
          <div className="flex items-center gap-2">
            {showNotification && (
              <button
                type="button"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-base backdrop-blur-sm transition-transform active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: 'white'
                }}
              >
                🔔
              </button>
            )}
            {showRoleSwitch && (
              <button
                type="button"
                aria-label="Switch to Farmer Mode"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-base backdrop-blur-sm transition-transform active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: 'white'
                }}
              >
                🔁
              </button>
            )}
          </div>
        )}
      </div>
      
      {children}
    </div>
  );
}
