interface OwnerLinkProps {
  children: React.ReactNode;
  variant?: 'saffron' | 'green' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  showArrow?: boolean;
  onClick?: () => void;
}

export function OwnerLink({ 
  children, 
  variant = 'saffron', 
  size = 'medium', 
  showArrow = false,
  onClick 
}: OwnerLinkProps) {
  const variantStyles = {
    saffron: { color: 'var(--saffron)' },
    green: { color: 'var(--green)' },
    neutral: { color: 'var(--text-mid)' }
  };

  const sizeStyles = {
    small: 'text-[11px]',
    medium: 'text-[12px]', 
    large: 'text-[14px]'
  };

  const fontStyles = {
    small: 'font-bold',
    medium: 'font-semibold',
    large: 'font-semibold'
  };

  return (
    <button
      onClick={onClick}
      className={`ky-tap-link ${sizeStyles[size]} ${fontStyles[size]}`}
      style={{ 
        ...variantStyles[variant],
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {children}
      {showArrow && ' →'}
    </button>
  );
}
