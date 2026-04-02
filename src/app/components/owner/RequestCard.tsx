interface RequestCardProps {
  farmerName: string;
  location: string;
  duration: string;
  dates: string;
  price: string;
  paymentMethod: string;
  urgencyTimer: string;
  urgencyLevel: 'urgent' | 'high' | 'normal';
  onAccept: () => void;
  onReject: () => void;
}

export function RequestCard({
  farmerName,
  location,
  duration,
  dates,
  price,
  paymentMethod,
  urgencyTimer,
  urgencyLevel,
  onAccept,
  onReject
}: RequestCardProps) {
  const getBorderColor = () => {
    switch (urgencyLevel) {
      case 'urgent':
        return '4px solid #ef4444'; // Red
      case 'high':
        return '4px solid var(--saffron)'; // Orange
      default:
        return '4px solid #d1d5db'; // Gray
    }
  };

  const getTimerBgColor = () => {
    switch (urgencyLevel) {
      case 'urgent':
        return '#fee2e2';
      case 'high':
        return '#FFF3E8';
      default:
        return '#f3f4f6';
    }
  };

  const getTimerTextColor = () => {
    switch (urgencyLevel) {
      case 'urgent':
        return '#ef4444';
      case 'high':
        return 'var(--saffron)';
      default:
        return '#6b7280';
    }
  };

  const getTimerBorderColor = () => {
    switch (urgencyLevel) {
      case 'urgent':
        return '#fecaca';
      case 'high':
        return '#FFD0A8';
      default:
        return '#e5e7eb';
    }
  };

  return (
    <div
      className="ky-tap-card bg-white rounded-[16px] p-3"
      style={{
        boxShadow: 'var(--card-shadow-sm)',
        borderLeft: getBorderColor()
      }}
    >
      {/* Header: Farmer name + Timer */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <div 
            className="font-bold text-[13px]"
            style={{ color: 'var(--text-primary)', fontFamily: "'Poppins', sans-serif" }}
          >
            {farmerName}
          </div>
          <div 
            className="text-[10px]"
            style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}
          >
            📍 {location} · {duration}
          </div>
        </div>
        <div 
          className="rounded-[8px] px-2 py-1 text-[10px] font-bold"
          style={{
            background: getTimerBgColor(),
            border: `1.5px solid ${getTimerBorderColor()}`,
            color: getTimerTextColor()
          }}
        >
          ⏱ {urgencyTimer}
        </div>
      </div>

      {/* Details badges */}
      <div className="flex gap-2 mb-3">
        <div 
          className="rounded-lg px-2 py-0.5 text-[10px] font-semibold"
          style={{ background: 'var(--green-pale)', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}
        >
          📅 {dates}
        </div>
        <div 
          className="rounded-lg px-2 py-0.5 text-[10px] font-semibold"
          style={{ background: 'var(--green-pale)', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}
        >
          💰 {price}
        </div>
        <div 
          className="rounded-lg px-2 py-0.5 text-[10px] font-semibold"
          style={{ background: 'var(--green-pale)', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}
        >
          💵 {paymentMethod}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onReject}
          className="ky-tap-action-destructive flex-1 rounded-[10px] py-2 text-xs font-bold text-center"
          style={{ background: '#FFF0F0', border: '1.5px solid #FFCCCC', color: '#CC3333' }}
        >
          ✕ Reject
        </button>
        <button
          type="button"
          onClick={onAccept}
          className="ky-tap-action-confirm flex-[2] rounded-[10px] py-2 text-xs font-bold text-white text-center"
          style={{ background: 'var(--gradient-saffron)', boxShadow: 'var(--card-shadow-saffron)', fontFamily: "'Poppins', sans-serif" }}
        >
          ✓ Accept {price}
        </button>
      </div>
    </div>
  );
}
