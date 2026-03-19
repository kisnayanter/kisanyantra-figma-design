import { ReactNode } from 'react';

interface ThemedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'saffron' | 'green';
}

const sizeMap = {
  sm: { padding: 'py-3 px-4', text: 'text-[14px]', icon: 'w-4 h-4' },
  md: { padding: 'py-[18px] px-6', text: 'text-[16px]', icon: 'w-5 h-5' },
  lg: { padding: 'py-5 px-8', text: 'text-[18px]', icon: 'w-6 h-6' }
};

export function ThemedButton({ 
  children, 
  onClick, 
  disabled = false,
  fullWidth = false,
  size = 'md',
  icon,
  iconPosition = 'right',
  variant = 'saffron'
}: ThemedButtonProps) {
  const sizeStyles = sizeMap[size];
  
  const gradient = variant === 'saffron' ? 'var(--gradient-saffron)' : 'var(--gradient-green)';
  const shadow = variant === 'saffron' ? 'var(--card-shadow-saffron)' : 'var(--card-shadow-green)';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${fullWidth ? 'w-full' : ''} 
        rounded-[16px] ${sizeStyles.padding} 
        font-bold ${sizeStyles.text} text-white 
        flex items-center justify-center gap-2 
        transition-all duration-200 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-[0.98] hover:shadow-lg'}
      `}
      style={{
        background: disabled ? 'var(--text-tertiary)' : gradient,
        boxShadow: disabled ? 'none' : shadow,
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {icon && iconPosition === 'left' && <span className={sizeStyles.icon}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className={sizeStyles.icon}>{icon}</span>}
    </button>
  );
}

// Backward compatibility exports
export function SaffronButton(props: Omit<ThemedButtonProps, 'variant'>) {
  return <ThemedButton {...props} variant="saffron" />;
}

export function GreenButton(props: Omit<ThemedButtonProps, 'variant'>) {
  return <ThemedButton {...props} variant="green" />;
}
