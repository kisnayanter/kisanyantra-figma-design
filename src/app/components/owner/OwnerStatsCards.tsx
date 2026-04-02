import { useLanguage } from '../../contexts/language';

interface OwnerStatsCardsProps {
  thisMonthEarnings?: string;
  totalEarned?: string;
  bookings?: string;
  equipment?: string;
  isEmpty?: boolean;
}

export function OwnerStatsCards({ 
  thisMonthEarnings = "₹0", 
  totalEarned = "₹0", 
  bookings = "0", 
  equipment = "0",
  isEmpty = false 
}: OwnerStatsCardsProps) {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    thisMonth: t({
      english: 'This Month',
      hindi: 'इस महीने',
      tamil: 'இந்த மாதம்',
      marathi: 'या महिन्यात'
    }),
    totalEarned: t({
      english: 'Total Earned',
      hindi: 'कुल कमाई',
      tamil: 'மொத்த வருமானம்',
      marathi: 'एकूण कमाई'
    }),
    bookings: t({
      english: 'Bookings',
      hindi: 'बुकिंग',
      tamil: 'முன்பதிவுகள்',
      marathi: 'बुकिंग'
    }),
    equipment: t({
      english: 'Equipment',
      hindi: 'उपकरण',
      tamil: 'உபகரணங்கள்',
      marathi: 'उपकरणे'
    })
  };

  const stats = isEmpty ? [
    { value: "₹0", label: strings.totalEarned },
    { value: "0", label: strings.bookings },
    { value: "0", label: strings.equipment }
  ] : [
    { value: thisMonthEarnings, label: strings.thisMonth },
    { value: totalEarned, label: strings.totalEarned },
    { value: bookings, label: strings.bookings }
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="rounded-[14px] p-3"
          style={{ background: 'rgba(255,255,255,0.2)' }}
        >
          <div 
            className="text-white text-[18px] font-bold" 
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {stat.value}
          </div>
          <div 
            className="text-white text-[10px] font-medium" 
            style={{ opacity: 0.85, fontFamily: "'Inter', sans-serif" }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
