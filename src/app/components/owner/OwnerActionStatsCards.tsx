interface OwnerActionStatsCardsProps {
  pendingRequests: number;
  activeBookings: number;
  totalBookings: number;
}

export function OwnerActionStatsCards({
  pendingRequests,
  activeBookings,
  totalBookings
}: OwnerActionStatsCardsProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* Pending Requests - Highlighted for urgency */}
      <div 
        className="rounded-[14px] p-3"
        style={{ 
          background: pendingRequests > 0 ? 'rgba(255, 107, 53, 0.3)' : 'rgba(255,255,255,0.2)',
          border: pendingRequests > 0 ? '2px solid rgba(255, 107, 53, 0.5)' : 'none'
        }}
      >
        <div 
          className="text-white text-[18px] font-bold flex items-center gap-1"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {pendingRequests}
          {pendingRequests > 0 && <span className="text-[12px]">⏱</span>}
        </div>
        <div 
          className="text-white text-[10px] font-medium" 
          style={{ opacity: 0.95, fontFamily: "'Inter', sans-serif" }}
        >
          Pending
        </div>
      </div>

      {/* Active Bookings */}
      <div 
        className="rounded-[14px] p-3"
        style={{ background: 'rgba(255,255,255,0.2)' }}
      >
        <div 
          className="text-white text-[18px] font-bold"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {activeBookings}
        </div>
        <div 
          className="text-white text-[10px] font-medium" 
          style={{ opacity: 0.85, fontFamily: "'Inter', sans-serif" }}
        >
          Active
        </div>
      </div>

      {/* Total Bookings */}
      <div 
        className="rounded-[14px] p-3"
        style={{ background: 'rgba(255,255,255,0.2)' }}
      >
        <div 
          className="text-white text-[18px] font-bold"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {totalBookings}
        </div>
        <div 
          className="text-white text-[10px] font-medium" 
          style={{ opacity: 0.85, fontFamily: "'Inter', sans-serif" }}
        >
          Total
        </div>
      </div>
    </div>
  );
}
