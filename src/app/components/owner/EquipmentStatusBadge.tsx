interface EquipmentStatusBadgeProps {
  status: 'available' | 'paused' | 'rented' | 'maintenance';
  size?: 'small' | 'medium';
}

export function EquipmentStatusBadge({ status, size = 'medium' }: EquipmentStatusBadgeProps) {
  const statusConfig = {
    available: {
      text: 'AVAILABLE',
      color: 'var(--green)',
      background: 'var(--green-pale)',
      icon: '●'
    },
    paused: {
      text: 'PAUSED',
      color: 'var(--amber)',
      background: 'var(--amber-pale)',
      icon: '⏸'
    },
    rented: {
      text: 'RENTED',
      color: 'var(--saffron)',
      background: 'var(--saffron-pale)',
      icon: '🔒'
    },
    maintenance: {
      text: 'MAINTENANCE',
      color: '#6B7280',
      background: '#F3F4F6',
      icon: '🔧'
    }
  };

  const config = statusConfig[status];
  const sizeClasses = size === 'small' 
    ? 'text-[9px] px-[7px] py-0.5 rounded-lg' 
    : 'text-[10px] px-2 py-1 rounded-[10px]';

  return (
    <div 
      className={`font-bold ${sizeClasses}`}
      style={{ 
        background: config.background, 
        color: config.color,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {config.icon} {config.text}
    </div>
  );
}
