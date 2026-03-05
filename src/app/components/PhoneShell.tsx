import React from 'react';

interface PhoneShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneShell({ children, className = '' }: PhoneShellProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: '375px', height: '812px' }}>
      {/* Phone frame */}
      <div 
        className="absolute inset-0 rounded-[36px] overflow-hidden"
        style={{
          background: '#111',
          padding: '10px',
          boxShadow: '0 0 0 1px #333, 0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        {/* Screen */}
        <div className="w-full h-full rounded-[28px] overflow-hidden relative bg-[var(--cream)]">
          {children}
        </div>
        
        {/* Notch */}
        <div 
          className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
          style={{ borderRadius: '0 0 14px 14px' }}
        />
      </div>
    </div>
  );
}

interface StatusBarProps {
  light?: boolean;
}

export function StatusBar({ light = false }: StatusBarProps) {
  const color = light ? 'rgba(255,255,255,0.9)' : 'var(--text-dark)';
  
  return (
    <div 
      className="flex justify-between items-center px-[18px] py-[10px] relative z-10"
      style={{ color }}
    >
      <span className="font-bold text-[11px]">9:41</span>
      <div className="flex gap-1 items-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
        </svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
          <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
        </svg>
      </div>
    </div>
  );
}
