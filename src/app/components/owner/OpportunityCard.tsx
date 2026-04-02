interface OpportunityCardProps {
  equipmentType: string;
  location: string;
  distance: string;
  dates: string;
  budget: string;
  farmerCount?: number;
  onSendOffer: () => void;
}

export function OpportunityCard({
  equipmentType,
  location,
  distance,
  dates,
  budget,
  farmerCount,
  onSendOffer
}: OpportunityCardProps) {
  return (
    <div
      className="ky-tap-card bg-white rounded-[16px] p-3"
      style={{
        boxShadow: 'var(--card-shadow-sm)',
        borderLeft: '4px solid var(--green)'
      }}
    >
      <div className="flex items-start gap-3">
        {/* Equipment Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px] flex-shrink-0"
          style={{ background: 'var(--green-pale)' }}
        >
          🚜
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-start mb-1">
            <div
              className="font-bold text-[13px]"
              style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
            >
              {equipmentType}
            </div>
            {farmerCount && farmerCount > 1 && (
              <div
                className="rounded-[8px] px-2 py-0.5 text-[9px] font-bold"
                style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
              >
                {farmerCount} farmers
              </div>
            )}
          </div>

          {/* Location & Details */}
          <div 
            className="text-[10px] mb-2"
            style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}
          >
            📍 {location} · {distance}
          </div>

          {/* Date & Budget badges */}
          <div className="flex gap-2 mb-2">
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
              💰 {budget}
            </div>
          </div>

          {/* Send Offer Button */}
          <button
            type="button"
            onClick={onSendOffer}
            className="ky-tap-action-confirm w-full rounded-[10px] py-2 text-xs font-bold text-white text-center"
            style={{ 
              background: 'linear-gradient(135deg, #22c55e, #16a34a)', 
              boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)',
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            📤 Send Offer
          </button>
        </div>
      </div>
    </div>
  );
}
