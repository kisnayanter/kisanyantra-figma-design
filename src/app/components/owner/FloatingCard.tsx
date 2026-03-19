import { ReactNode, CSSProperties } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'green' | 'saffron';
  style?: CSSProperties;
  onClick?: () => void;
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6'
};

const shadowMap = {
  sm: 'var(--card-shadow-sm)',
  md: 'var(--card-shadow)',
  green: 'var(--card-shadow-green)',
  saffron: 'var(--card-shadow-saffron)'
};

export function FloatingCard({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'sm',
  style = {},
  onClick 
}: FloatingCardProps) {
  return (
    <div
      className={`bg-white rounded-[20px] ${paddingMap[padding]} transition-all duration-200 ${onClick ? 'cursor-pointer hover:scale-[1.02]' : ''} ${className}`}
      style={{
        boxShadow: shadowMap[shadow],
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
