import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';
import { OwnerHeader } from '../../components/owner/OwnerHeader';
import { OwnerActionStatsCards } from '../../components/owner/OwnerActionStatsCards';
import { RequestCard } from '../../components/owner/RequestCard';
import { OpportunityCard } from '../../components/owner/OpportunityCard';

export function OwnerDashboardDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return t({
        english: 'Good Morning 👋',
        hindi: 'सुप्रभात 👋',
        tamil: 'காலை வணக்கம் 👋',
        marathi: 'सुप्रभात 👋'
      });
    } else if (hour < 18) {
      return t({
        english: 'Good Afternoon 👋',
        hindi: 'शुभ दोपहर 👋',
        tamil: 'மதிய வணக்கம் 👋',
        marathi: 'शुभ दुपार 👋'
      });
    } else {
      return t({
        english: 'Good Evening 👋',
        hindi: 'शुभ संध्या 👋',
        tamil: 'மாலை வணக்கம் 👋',
        marathi: 'शुभ संध्याकाळ 👋'
      });
    }
  };

  const strings = {
    subtitle: t({
      english: 'Owner Dashboard',
      hindi: 'मालिक डैशबोर्ड',
      tamil: 'உரிமையாளர் டாஷ்போர்டு',
      marathi: 'मालक डॅशबोर्ड'
    }),
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
    incomingRequests: t({
      english: 'Incoming Requests',
      hindi: 'आने वाले अनुरोध',
      tamil: 'உள்வரும் கோரிக்கைகள்',
      marathi: 'येणाऱ्या विनंत्या'
    }),
    viewAll: t({
      english: 'View All',
      hindi: 'सभी देखें',
      tamil: 'அனைத்தையும் பார்க்கவும்',
      marathi: 'सर्व पहा'
    }),
    equipmentOpportunities: t({
      english: 'Equipment Opportunities',
      hindi: 'उपकरण अवसर',
      tamil: 'உபகரண வாய்ப்புகள்',
      marathi: 'उपकरण संधी'
    }),
    opportunitiesDesc: t({
      english: '5 farmers nearby need your equipment',
      hindi: '5 नजदीकी किसानों को आपके उपकरण चाहिए',
      tamil: '5 அருகிலுள்ள விவசாயிகளுக்கு உங்கள் உபகரணம் தேவை',
      marathi: '5 जवळच्या शेतकऱ्यांना तुमची उपकरणे हवी'
    }),
    myEquipment: t({
      english: 'My Equipment',
      hindi: 'मेरे उपकरण',
      tamil: 'எனது உபகரணங்கள்',
      marathi: 'माझी उपकரणे'
    }),
    addNew: t({
      english: '+ Add New',
      hindi: '+ नया जोड़ें',
      tamil: '+ புதியது சேர்க்கவும்',
      marathi: '+ नवीन जोडा'
    }),
    available: t({
      english: 'Available',
      hindi: 'उपलब्ध',
      tamil: 'கிடைக்கும்',
      marathi: 'उपलब्ध'
    }),
    perHour: t({
      english: '/hour',
      hindi: '/घंटा',
      tamil: '/மணி',
      marathi: '/तास'
    }),
    activeStatus: t({
      english: 'Active',
      hindi: 'सक्रिय',
      tamil: 'செயலில்',
      marathi: 'सक्रिय'
    }),
    requestsPending: t({
      english: 'requests pending',
      hindi: 'अनुरोध लंबित',
      tamil: 'கோரிக்கைகள் நிலுவையில்',
      marathi: 'विनंत्या प्रलंबित'
    }),
    viewAllRequests: t({
      english: 'View All',
      hindi: 'सभी देखें',
      tamil: 'அனைத்தையும் பார்க்கவும்',
      marathi: 'सर्व पहा'
    }),
    moreRequests: t({
      english: 'more requests',
      hindi: 'और अनुरोध',
      tamil: 'மேலும் கோரிக்கைகள்',
      marathi: 'अधिक विनंत्या'
    }),
    sendOffer: t({
      english: 'Send Offer',
      hindi: 'प्रस्ताव भेजें',
      tamil: 'சலுகையை அனுப்பவும்',
      marathi: 'ऑफर पाठवा'
    }),
    viewAllOpportunities: t({
      english: 'View All Opportunities',
      hindi: 'सभी अवसर देखें',
      tamil: 'அனைத்து வாய்ப்புகளையும் பார்க்கவும்',
      marathi: 'सर्व संधी पहा'
    }),
    kmAway: t({
      english: 'km away',
      hindi: 'किमी दूर',
      tamil: 'கி.மீ தொலைவில்',
      marathi: 'किमी दूर'
    }),
    newOpportunities: t({
      english: 'NEW',
      hindi: 'नया',
      tamil: 'புதிய',
      marathi: 'नवीन'
    })
  };

  return (
    <div className="relative mx-auto" style={{ width: '320px', height: '640px' }}>
      <div 
        className="absolute inset-0 rounded-[36px] overflow-hidden"
        style={{
          background: '#111',
          padding: '10px',
          boxShadow: '0 0 0 1px #333, 0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Modern Header with Action Stats */}
          <OwnerHeader
            title="Harpreet Singh"
            userName="Harpreet Singh"
            greeting={getGreeting()}
            activeStatus={`${strings.activeStatus} • 3 ${strings.requestsPending}`}
            showNotification={true}
            notificationCount={3}
            showSettings={true}
          >
            <OwnerActionStatsCards
              pendingRequests={3}
              activeBookings={2}
              totalBookings={38}
            />
          </OwnerHeader>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Incoming Requests */}
            <div className="flex justify-between items-center mb-2">
              <div 
                className="text-[16px] font-bold"
                style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
              >
                🔔 {strings.incomingRequests}
              </div>
              <button className="ky-tap-link text-[12px] font-semibold" style={{ color: 'var(--saffron)', fontFamily: "'Inter', sans-serif" }}>
                {strings.viewAllRequests}
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <RequestCard
                farmerName="Ramu Kisan"
                location="Wardha, Maharashtra"
                duration="3 days"
                dates="Jul 10–12"
                price="₹7,200"
                paymentMethod="Cash"
                urgencyTimer="1:42:30"
                urgencyLevel="urgent"
                onAccept={() => console.log('Accept')}
                onReject={() => console.log('Reject')}
              />

              <RequestCard
                farmerName="Suresh Patil"
                location="Nagpur, Maharashtra"
                duration="2 days"
                dates="Jul 15–16"
                price="₹4,800"
                paymentMethod="UPI"
                urgencyTimer="5:20:15"
                urgencyLevel="high"
                onAccept={() => console.log('Accept')}
                onReject={() => console.log('Reject')}
              />

              <button 
                className="w-full text-center text-[11px] font-semibold py-2 rounded-lg"
                style={{ color: 'var(--saffron)', background: '#FFF3E8', fontFamily: "'Inter', sans-serif" }}
              >
                +1 {strings.moreRequests} • {strings.viewAllRequests} →
              </button>
            </div>

            {/* Equipment Opportunities */}
            <div className="flex justify-between items-center mb-2">
              <div 
                className="text-[16px] font-bold"
                style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
              >
                💰 {strings.equipmentOpportunities}
              </div>
              <div
                className="text-[11px] font-bold px-2 py-1 rounded-full"
                style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}
              >
                5 {strings.newOpportunities}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <OpportunityCard
                equipmentType="Tractor (50+ HP)"
                location="Wardha"
                distance={`12 ${strings.kmAway}`}
                dates="Jul 15-17"
                budget="₹7,000-8,000"
                onSendOffer={() => console.log('Send offer')}
              />

              <OpportunityCard
                equipmentType="Combine Harvester"
                location="Nagpur"
                distance={`25 ${strings.kmAway}`}
                dates="Jul 20-22"
                budget="₹14,000-16,000"
                farmerCount={3}
                onSendOffer={() => console.log('Send offer')}
              />

              <button 
                className="w-full text-center text-[11px] font-semibold py-2 rounded-lg"
                style={{ color: 'var(--green)', background: 'var(--green-pale)', fontFamily: "'Inter', sans-serif" }}
              >
                {strings.viewAllOpportunities} →
              </button>
            </div>

            {/* My Listings */}
            <div className="flex justify-between items-center mb-[10px] mt-[14px]">
              <div 
                className="text-[16px] font-bold"
                style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}
              >
                🚜 {strings.myEquipment}
              </div>
              <button className="ky-tap-link text-[12px] font-semibold" style={{ color: 'var(--saffron)', fontFamily: "'Inter', sans-serif" }}>{strings.addNew}</button>
            </div>

            {[
              { icon: '🚜', name: 'Mahindra 475 DI', meta: `50 HP · ${strings.available} · ₹2,400/day`, price: '₹2,400', status: `● ${strings.available.toUpperCase()}`, statusColor: 'var(--green)', statusBg: 'var(--green-pale)', bg: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' },
              { icon: '🌾', name: 'Combine Harvester', meta: `₹5,000${strings.perHour}`, price: '₹5,000', status: '⏸ PAUSED', statusColor: 'var(--amber)', statusBg: 'var(--amber-pale)', bg: 'linear-gradient(135deg, #C8EFD4, #A4E0B5)' }
            ].map((listing) => (
              <div
                key={listing.name}
                className="ky-tap-card bg-white rounded-[20px] overflow-hidden flex h-20 mb-3"
                style={{ boxShadow: 'var(--card-shadow-sm)' }}
              >
                <div 
                  className="w-20 flex items-center justify-center text-[32px] flex-shrink-0"
                  style={{ background: listing.bg }}
                >
                  {listing.icon}
                </div>
                <div className="px-3 py-3 flex-1">
                  <div className="text-sm font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-primary)' }}>
                    {listing.name}
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                    {listing.meta}
                  </div>
                </div>
                <div className="px-3 py-3 flex flex-col items-end justify-between">
                  <div 
                    className="text-[9px] font-bold px-[7px] py-0.5 rounded-lg"
                    style={{ background: listing.statusBg, color: listing.statusColor }}
                  >
                    {listing.status}
                  </div>
                  <div className="text-[14px] font-extrabold" style={{ color: 'var(--harvest-yellow)', fontFamily: "'Poppins', sans-serif" }}>
                    {listing.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Nav */}
          <OwnerBottomNav activeTab="home" />

          {/* Notch */}
          <div
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
            style={{ borderRadius: '0 0 14px 14px' }}
          />
        </div>
      </div>
    </div>
  );
}
