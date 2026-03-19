import { useEffect, useRef, useState } from 'react';
import { LanguageProvider, useLanguage } from './contexts/language';
import type { LanguageOption } from './contexts/language';

// Shared screens
import { LanguageSelectDesign } from './screens/shared/LanguageSelectDesign';
import { RoleSelectDesign } from './screens/shared/RoleSelectDesign';
import { OTPVerificationDesign } from './screens/shared/OTPVerificationDesign';
import { ToastNotificationsDesign } from './screens/shared/ToastNotificationsDesign';
import { NotificationCenterDesign } from './screens/shared/NotificationCenterDesign';

// Farmer screens
import { RoleSelectFarmerDesign } from './screens/farmer/RoleSelectFarmerDesign';
import { ProfileSetupFarmerDesign } from './screens/farmer/ProfileSetupFarmerDesign';
import { ProfileSetupDesign } from './screens/farmer/ProfileSetupDesign';
import { ProfileSetupEmptyDesign } from './screens/farmer/ProfileSetupEmptyDesign';
import { ProfileSetupTamilDesign } from './screens/farmer/ProfileSetupTamilDesign';
import { ProfileSetupMarathiDesign } from './screens/farmer/ProfileSetupMarathiDesign';
import { FarmerHomeDesign } from './screens/farmer/FarmerHomeDesign';
import { SessionExpiredLoginDesign } from './screens/farmer/SessionExpiredLoginDesign';
import { SearchDesign } from './screens/farmer/SearchDesign';
import { VoiceAgentDesign } from './screens/farmer/VoiceAgentDesign';
import { SearchResultsDesign } from './screens/farmer/SearchResultsDesign';
import { SearchFilterTrayDesign } from './screens/farmer/SearchFilterTrayDesign';
import { EquipmentDetailDesign } from './screens/farmer/EquipmentDetailDesign';
import { UpdateProfileDesign } from './screens/farmer/UpdateProfileDesign';
import { BookEquipmentDesign } from './screens/farmer/BookEquipmentDesign';
import { HomeWithNotificationBadgeDesign } from './screens/farmer/HomeWithNotificationBadgeDesign';
import { MyBookingsDesign } from './screens/farmer/MyBookingsDesign';
import { BookingDetailDesign } from './screens/farmer/BookingDetailDesign';
import { CancelBookingDesign } from './screens/farmer/CancelBookingDesign';
import { RescheduleBookingDesign } from './screens/farmer/RescheduleBookingDesign';
import { BookingStatusTrackingDesign } from './screens/farmer/BookingStatusTrackingDesign';
import { ShareBookingDetailsDesign } from './screens/farmer/ShareBookingDetailsDesign';
import { ContactOwnerDesign } from './screens/farmer/ContactOwnerDesign';
import { ViewOnMapDesign } from './screens/farmer/ViewOnMapDesign';
import { CompleteBookingDesign } from './screens/farmer/CompleteBookingDesign';
import { RateBookingDesign } from './screens/farmer/RateBookingDesign';
import { BookingConfirmDesign } from './screens/farmer/BookingConfirmDesign';
import { RatingScreenDesign } from './screens/farmer/RatingScreenDesign';
import { PostRequestDesign } from './screens/farmer/PostRequestDesign';
import { RequestConfirmDesign } from './screens/farmer/RequestConfirmDesign';
import { MyRequestsDesign } from './screens/farmer/MyRequestsDesign';
import { RequestOffersDesign } from './screens/farmer/RequestOffersDesign';
import { AcceptOfferDesign } from './screens/farmer/AcceptOfferDesign';
import { RequestPostedConfirmDesign } from './screens/farmer/RequestPostedConfirmDesign';
import { OfferDetailDesign } from './screens/farmer/OfferDetailDesign';
import { SearchResultsEmptyDesign } from './screens/farmer/SearchResultsEmptyDesign';
import { FarmerFabMenuDesign } from './screens/farmer/FarmerFabMenuDesign';

// Owner screens
import { RoleSelectOwnerDesign } from './screens/owner/RoleSelectOwnerDesign';
import { ProfileSetupOwnerDesign } from './screens/owner/ProfileSetupOwnerDesign';
import { OwnerDashboardDesign } from './screens/owner/OwnerDashboardDesign';
import { OwnerDashboardFirstTimeDesign } from './screens/owner/OwnerDashboardFirstTimeDesign';
import { AddEquipmentDesign } from './screens/owner/AddEquipmentDesign';
import { AddEquipmentEmptyDesign } from './screens/owner/AddEquipmentEmptyDesign';
import { BookingRequestDesign } from './screens/owner/BookingRequestDesign';
import { IncomingRequestsListDesign } from './screens/owner/IncomingRequestsListDesign';
import { EquipmentOpportunitiesDesign } from './screens/owner/EquipmentOpportunitiesDesign';
import { SendOfferDesign } from './screens/owner/SendOfferDesign';
import { BookingConfirmDesign as OwnerBookingConfirmDesign } from './screens/owner/BookingConfirmDesign';
import { OwnerBookingStatusTrackingDesign } from './screens/owner/BookingStatusTrackingDesign';
import { OfferSentConfirmDesign } from './screens/owner/OfferSentConfirmDesign';
import { OwnerFabMenuDesign } from './screens/owner/OwnerFabMenuDesign';

export default function App() {
  const [activeTab, setActiveTab] = useState<'farmer' | 'owner'>('farmer');

  return (
    <LanguageProvider>
      <div className="min-h-screen" style={{ background: '#F5EDD8', backgroundImage: 'radial-gradient(ellipse at 20% 20%, #ffe8c8 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, #d4edda 0%, transparent 50%)' }}>
        {/* Page Header */}
        <div className="text-center px-10 pt-[60px] pb-10 relative">
          <div className="relative inline-block">
            <div
              className="text-[52px] font-extrabold bg-clip-text text-transparent"
              style={{
                fontFamily: "'Baloo 2', cursive",
                background: 'linear-gradient(135deg, var(--saffron) 30%, var(--gold))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-1px'
              }}
            >
              KisanYantra
            </div>
            <div
              className="text-[22px] font-semibold mt-[-4px]"
              style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                color: 'var(--green)'
              }}
            >
              किसान यंत्र
            </div>
            <div className="text-base mt-2.5" style={{ color: 'var(--text-mid)', fontWeight: 400, letterSpacing: '0.3px' }}>
              Voice-First Tractor Rental Platform · App Design Showcase
            </div>
            <div
              className="mx-auto mt-5 h-1 w-20 rounded-sm"
              style={{ background: 'linear-gradient(90deg, var(--saffron), var(--green))' }}
            />
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <LanguageToggle />
            <p className="text-xs" style={{ color: 'var(--text-soft)' }}>
              Switch to preview screen copy in your preferred language.
            </p>
            
            {/* Role Tabs */}
            <div className="mt-4 inline-flex rounded-full p-1" style={{ background: 'rgba(0,0,0,0.05)' }}>
              <button
                type="button"
                onClick={() => setActiveTab('farmer')}
                className="px-6 py-2 text-sm font-bold rounded-full transition-all"
                style={{
                  fontFamily: "'Baloo 2', cursive",
                  background: activeTab === 'farmer' ? 'linear-gradient(135deg, var(--saffron), #FF8C38)' : 'transparent',
                  color: activeTab === 'farmer' ? 'white' : 'var(--text-mid)',
                  boxShadow: activeTab === 'farmer' ? '0 6px 14px rgba(255,107,0,0.3)' : 'none'
                }}
              >
                👨‍🌾 Farmer
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('owner')}
                className="px-6 py-2 text-sm font-bold rounded-full transition-all"
                style={{
                  fontFamily: "'Baloo 2', cursive",
                  background: activeTab === 'owner' ? 'linear-gradient(135deg, var(--green), var(--green-light))' : 'transparent',
                  color: activeTab === 'owner' ? 'white' : 'var(--text-mid)',
                  boxShadow: activeTab === 'owner' ? '0 6px 14px rgba(26,122,59,0.3)' : 'none'
                }}
              >
                🚜 Owner
              </button>
            </div>
          </div>
        </div>

        {/* FARMER FLOWS */}
        {activeTab === 'farmer' && (
          <>
            {/* Farmer Onboarding Flow */}
            <FlowSection
              badge="ONBOARDING"
              badgeColor="var(--saffron)"
              title="Farmer Onboarding Journey"
              subtitle="From signup to first equipment search"
            >
              <ScreenCard label="F1 · Language Selection">
                <LanguageSelectDesign />
              </ScreenCard>
              <ScreenCard label="F2 · Role Selection">
                <RoleSelectFarmerDesign />
              </ScreenCard>
              <ScreenCard label="F3 · OTP Verification">
                <OTPVerificationDesign />
              </ScreenCard>
              <ScreenCard label="F4 · Profile Setup (Empty)">
                <ProfileSetupEmptyDesign />
              </ScreenCard>
              <ScreenCard label="F5 · Profile Setup (Filled)">
                <ProfileSetupFarmerDesign />
              </ScreenCard>
              <ScreenCard label="F6 · Session Expired">
                <SessionExpiredLoginDesign />
              </ScreenCard>
            </FlowSection>

            {/* Farmer Dashboard Flow */}
            <FlowSection
              badge="DASHBOARD"
              badgeColor="var(--saffron)"
              title="Farmer Dashboard & Home"
              subtitle="First-time and returning user experiences"
            >
              <ScreenCard label="D1 · Home (First Time)">
                <FarmerHomeDesign />
              </ScreenCard>
              <ScreenCard label="D2 · Home (With Notifications)">
                <HomeWithNotificationBadgeDesign />
              </ScreenCard>
              <ScreenCard label="D3 · FAB Menu (+ Expanded)">
                <FarmerFabMenuDesign />
              </ScreenCard>
              <ScreenCard label="D4 · Notification Center">
                <NotificationCenterDesign />
              </ScreenCard>
            </FlowSection>

            {/* Equipment Search & Discovery Flow */}
            <FlowSection
              badge="EQUIPMENT SEARCH"
              badgeColor="var(--saffron)"
              title="Equipment Search & Discovery"
              subtitle="Voice AI, search, filters, and equipment details"
            >
              <ScreenCard label="S1 · Voice Agent (Kisan Mitra)">
                <VoiceAgentDesign />
              </ScreenCard>
              <ScreenCard label="S2 · Search Interface">
                <SearchDesign />
              </ScreenCard>
              <ScreenCard label="S3 · Search Results">
                <SearchResultsDesign />
              </ScreenCard>
              <ScreenCard label="S3b · No Results (Empty)">
                <SearchResultsEmptyDesign />
              </ScreenCard>
              <ScreenCard label="S4 · Filter Tray">
                <SearchFilterTrayDesign />
              </ScreenCard>
              <ScreenCard label="S5 · Equipment Detail">
                <EquipmentDetailDesign />
              </ScreenCard>
            </FlowSection>

            {/* Request Equipment Flow */}
            <FlowSection
              badge="REQUEST EQUIPMENT"
              badgeColor="var(--saffron)"
              title="Request Equipment Flow"
              subtitle="Post a request when no listings match — get offers from nearby owners"
            >
              <ScreenCard label="RQ1 · Post Request Form">
                <PostRequestDesign />
              </ScreenCard>
              <ScreenCard label="RQ2 · Request Confirmed">
                <RequestConfirmDesign />
              </ScreenCard>
              <ScreenCard label="RQ3 · Request Posted">
                <RequestPostedConfirmDesign />
              </ScreenCard>
              <ScreenCard label="RQ4 · My Requests List">
                <MyRequestsDesign />
              </ScreenCard>
              <ScreenCard label="RQ5 · Offers Received">
                <RequestOffersDesign />
              </ScreenCard>
              <ScreenCard label="RQ6 · Offer Detail (from Owner)">
                <OfferDetailDesign />
              </ScreenCard>
              <ScreenCard label="RQ7 · Accept Offer & Book">
                <AcceptOfferDesign />
              </ScreenCard>
            </FlowSection>

            {/* Booking Management Flow */}
            <FlowSection
              badge="BOOKING MANAGEMENT"
              badgeColor="var(--saffron)"
              title="Complete Booking Lifecycle (Farmer)"
              subtitle="Create, track, manage, and complete bookings"
            >
              <ScreenCard label="B1 · Book Equipment">
                <BookEquipmentDesign />
              </ScreenCard>
              <ScreenCard label="B2 · Booking Confirmed">
                <BookingConfirmDesign />
              </ScreenCard>
              <ScreenCard label="B3 · My Bookings List">
                <MyBookingsDesign />
              </ScreenCard>
              <ScreenCard label="B4 · Booking Details">
                <BookingDetailDesign />
              </ScreenCard>
              <ScreenCard label="B5 · Status Tracking">
                <BookingStatusTrackingDesign />
              </ScreenCard>
              <ScreenCard label="B6 · Reschedule Booking">
                <RescheduleBookingDesign />
              </ScreenCard>
              <ScreenCard label="B7 · Cancel Booking">
                <CancelBookingDesign />
              </ScreenCard>
              <ScreenCard label="B8 · Share Booking">
                <ShareBookingDetailsDesign />
              </ScreenCard>
              <ScreenCard label="B9 · View on Map">
                <ViewOnMapDesign />
              </ScreenCard>
              <ScreenCard label="B10 · Complete Booking">
                <CompleteBookingDesign />
              </ScreenCard>
            </FlowSection>

            {/* Communication & Support Flow */}
            <FlowSection
              badge="COMMUNICATION"
              badgeColor="var(--saffron)"
              title="Communication & Support"
              subtitle="Contact owner, notifications, and feedback"
            >
              <ScreenCard label="C1 · Contact Owner">
                <ContactOwnerDesign />
              </ScreenCard>
              <ScreenCard label="C2 · Toast Notifications">
                <ToastNotificationsDesign />
              </ScreenCard>
            </FlowSection>

            {/* Rating & Feedback Flow */}
            <FlowSection
              badge="RATINGS & FEEDBACK"
              badgeColor="var(--gold)"
              title="Rating & Feedback System"
              subtitle="Rate equipment and owner experience"
            >
              <ScreenCard label="R1 · Rate Booking">
                <RateBookingDesign />
              </ScreenCard>
              <ScreenCard label="R2 · Rating Screen">
                <RatingScreenDesign />
              </ScreenCard>
            </FlowSection>

            {/* Profile Management Flow */}
            <FlowSection
              badge="PROFILE MANAGEMENT"
              badgeColor="var(--saffron)"
              title="Profile Management"
              subtitle="Update profile and language preferences"
            >
              <ScreenCard label="P1 · Update Profile">
                <UpdateProfileDesign />
              </ScreenCard>
              <ScreenCard label="P2 · Profile (Tamil)">
                <ProfileSetupTamilDesign />
              </ScreenCard>
              <ScreenCard label="P3 · Profile (Marathi)">
                <ProfileSetupMarathiDesign />
              </ScreenCard>
            </FlowSection>
          </>
        )}

        {/* OWNER FLOWS */}
        {activeTab === 'owner' && (
          <>
            {/* Owner Onboarding Flow */}
            <FlowSection
              badge="ONBOARDING"
              badgeColor="var(--green)"
              title="Owner Onboarding Journey"
              subtitle="From signup to first equipment listing"
            >
              <ScreenCard label="O1 · Language Selection">
                <LanguageSelectDesign />
              </ScreenCard>
              <ScreenCard label="O2 · Role Selection">
                <RoleSelectOwnerDesign />
              </ScreenCard>
              <ScreenCard label="O3 · OTP Verification">
                <OTPVerificationDesign />
              </ScreenCard>
              <ScreenCard label="O4 · Profile Setup">
                <ProfileSetupOwnerDesign />
              </ScreenCard>
              <ScreenCard label="O5 · Add First Equipment">
                <AddEquipmentEmptyDesign />
              </ScreenCard>
            </FlowSection>

            {/* Owner Dashboard Flow */}
            <FlowSection
              badge="DASHBOARD"
              badgeColor="var(--green)"
              title="Owner Dashboard"
              subtitle="First-time and returning user experiences"
            >
              <ScreenCard label="D1 · Dashboard (First Time)">
                <OwnerDashboardFirstTimeDesign />
              </ScreenCard>
              <ScreenCard label="D2 · Dashboard (With Data)">
                <OwnerDashboardDesign />
              </ScreenCard>
              <ScreenCard label="D3 · FAB Menu (+ Expanded)">
                <OwnerFabMenuDesign />
              </ScreenCard>
              <ScreenCard label="D4 · Notification Center">
                <NotificationCenterDesign />
              </ScreenCard>
            </FlowSection>

            {/* Equipment Management Flow */}
            <FlowSection
              badge="EQUIPMENT MANAGEMENT"
              badgeColor="var(--saffron)"
              title="Equipment Management"
              subtitle="Add, edit, and manage equipment listings"
            >
              <ScreenCard label="E1 · Add Equipment (Empty)">
                <AddEquipmentEmptyDesign />
              </ScreenCard>
              <ScreenCard label="E2 · Add Equipment (Filled)">
                <AddEquipmentDesign />
              </ScreenCard>
            </FlowSection>

            {/* Equipment Opportunities Flow (Owner) */}
            <FlowSection
              badge="EQUIPMENT OPPORTUNITIES"
              badgeColor="var(--saffron)"
              title="Equipment Opportunities"
              subtitle="Browse farmer requests nearby, send offers, and grow your rental business"
            >
              <ScreenCard label="OP1 · Nearby Opportunities">
                <EquipmentOpportunitiesDesign />
              </ScreenCard>
              <ScreenCard label="OP2 · Send Offer to Farmer">
                <SendOfferDesign />
              </ScreenCard>
              <ScreenCard label="OP3 · Offer Sent Confirmation">
                <OfferSentConfirmDesign />
              </ScreenCard>
            </FlowSection>

            {/* Booking Management Flow (Owner) */}
            <FlowSection
              badge="BOOKING MANAGEMENT"
              badgeColor="var(--green)"
              title="Booking Management (Owner)"
              subtitle="Handle incoming requests, accept/reject bookings"
            >
              <ScreenCard label="B1 · Incoming Requests List">
                <IncomingRequestsListDesign />
              </ScreenCard>
              <ScreenCard label="B2 · Booking Request Detail">
                <BookingRequestDesign />
              </ScreenCard>
              <ScreenCard label="B3 · Booking Confirmed">
                <OwnerBookingConfirmDesign />
              </ScreenCard>
              <ScreenCard label="B4 · Booking Status">
                <OwnerBookingStatusTrackingDesign />
              </ScreenCard>
            </FlowSection>

            {/* Communication & Support Flow */}
            <FlowSection
              badge="COMMUNICATION"
              badgeColor="var(--saffron)"
              title="Communication & Support"
              subtitle="Notifications and farmer communication"
            >
              <ScreenCard label="C1 · Toast Notifications">
                <ToastNotificationsDesign />
              </ScreenCard>
              <ScreenCard label="C2 · Contact Farmer">
                <ContactOwnerDesign />
              </ScreenCard>
            </FlowSection>

            {/* Rating & Feedback Flow */}
            <FlowSection
              badge="RATINGS & FEEDBACK"
              badgeColor="var(--gold)"
              title="Rating & Feedback System"
              subtitle="Rate farmer experience"
            >
              <ScreenCard label="R1 · Rate Farmer">
                <RatingScreenDesign />
              </ScreenCard>
            </FlowSection>
          </>
        )}

        {/* Design System Section */}
        <div className="text-center mx-auto mb-8 mt-[60px]">
          <span
            className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
            style={{ background: 'var(--saffron)', letterSpacing: '1.5px' }}
          >
            DESIGN SYSTEM
          </span>
          <h2
            className="text-[28px] font-bold"
            style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
          >
            Colour Palette · Typography · Component States
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto px-10 pb-10">
          <div
            className="text-[22px] font-bold mb-5"
            style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
          >
            Colour Palette
          </div>
          <div className="flex gap-4 flex-wrap mb-10">
            {[
              { color: '#1F7A4C', name: 'Deep Farm Green', hex: '#1F7A4C' },
              { color: '#2DAA6A', name: 'Green Light', hex: '#2DAA6A' },
              { color: '#F0FDF4', name: 'Green Pale', hex: '#F0FDF4' },
              { color: '#F4B400', name: 'Harvest Yellow', hex: '#F4B400' },
              { color: '#FFFBEB', name: 'Yellow Pale', hex: '#FFFBEB' },
              { color: '#FF6B00', name: 'Saffron (Owner)', hex: '#FF6B00' },
              { color: '#FF8C38', name: 'Saffron Light', hex: '#FF8C38' },
              { color: '#1A1A1A', name: 'Text Primary', hex: '#1A1A1A' },
              { color: '#6B7280', name: 'Text Secondary', hex: '#6B7280' },
              { color: '#F6F8F7', name: 'Background', hex: '#F6F8F7' },
            ].map((swatch) => (
              <div key={swatch.hex} className="flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 rounded-2xl"
                  style={{ background: swatch.color, boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}
                />
                <div className="text-[11px] font-semibold text-center" style={{ color: 'var(--text-mid)' }}>
                  {swatch.name}
                </div>
                <div className="text-[10px] font-mono" style={{ color: 'var(--text-soft)' }}>
                  {swatch.hex}
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-[22px] font-bold mb-5"
            style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
          >
            Typography
          </div>
          <div className="space-y-3 mb-10">
            <div>
              <div className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--text-soft)', letterSpacing: '1px' }}>
                DISPLAY / LOGO — BALOO 2 800
              </div>
              <div className="text-[32px] font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--saffron)' }}>
                KisanYantra किसान
              </div>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--text-soft)', letterSpacing: '1px' }}>
                HEADING — BALOO 2 700
              </div>
              <div className="text-[22px] font-bold" style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}>
                Equipment Near You · आपके पास
              </div>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--text-soft)', letterSpacing: '1px' }}>
                BODY — INTER 400 / POPPINS 400
              </div>
              <div className="text-[15px]" style={{ color: 'var(--text-mid)', fontFamily: "'Inter', sans-serif" }}>
                Find tractors, harvesters and cultivators near your farm
              </div>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--text-soft)', letterSpacing: '1px' }}>
                HINDI / MARATHI — NOTO SANS DEVANAGARI 600
              </div>
              <div className="text-[17px] font-semibold" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: 'var(--green)' }}>
                किस जिले में ट्रैक्टर चाहिए? · मला ट्रॅक्टर हवे आहे
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-10 text-[13px]" style={{ color: 'var(--text-soft)' }}>
          <strong className="text-base" style={{ color: 'var(--saffron)', fontFamily: "'Baloo 2', cursive" }}>
            KisanYantra
          </strong> · किसान यंत्र<br />
          Design System v2.0 · React + Tailwind CSS · Organized by Role & Flow<br />
          Fonts: Baloo 2 · Noto Sans Devanagari · DM Sans<br />
          <div className="mt-2 text-[11px]">
            Farmer Flows · Owner Flows · Equipment Management · Booking Lifecycle
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

interface FlowSectionProps {
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function FlowSection({ badge, badgeColor, title, subtitle, children }: FlowSectionProps) {
  return (
    <>
      <div className="text-center mx-auto mb-8 mt-[60px]">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: badgeColor, letterSpacing: '1.5px' }}
        >
          {badge}
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          {title}
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          {subtitle}
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center px-10 pb-[60px]">
        {children}
      </div>
    </>
  );
}

interface ScreenCardProps {
  label: string;
  children: React.ReactNode;
}

function ScreenCard({ label, children }: ScreenCardProps) {
  return (
    <div className="flex flex-col items-center flex-shrink-0 ky-phone-screen" style={{ width: '320px' }}>
      <div className="text-xs font-semibold tracking-wider uppercase text-center mb-3" style={{ color: 'var(--text-soft)', letterSpacing: '1px' }}>
        {label}
      </div>
      <LanguageAwareContainer>{children}</LanguageAwareContainer>
    </div>
  );
}

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const options: { label: string; value: LanguageOption }[] = [
    { label: 'English', value: 'english' },
    { label: 'हिन्दी', value: 'hindi' },
    { label: 'தமிழ்', value: 'tamil' },
    { label: 'मराठी', value: 'marathi' }
  ];

  return (
    <div className="inline-flex rounded-full p-1" style={{ background: 'rgba(0,0,0,0.05)' }}>
      {options.map((option) => {
        const isActive = option.value === language;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            className="px-4 py-1.5 text-xs font-semibold rounded-full transition-colors"
            style={{
              fontFamily: "'Baloo 2', cursive",
              background: isActive ? 'white' : 'transparent',
              color: isActive ? 'var(--text-dark)' : 'var(--text-soft)',
              boxShadow: isActive ? '0 6px 14px rgba(0,0,0,0.08)' : 'none'
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function LanguageAwareContainer({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const originalsRef = useRef(new WeakMap<Text, string>());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode() as Text | null;

    while (node) {
      const stored = originalsRef.current.get(node);
      const baseText = stored ?? node.textContent ?? '';

      if (!stored) {
        originalsRef.current.set(node, baseText);
      }

      if (!baseText.includes('·')) {
        node = walker.nextNode() as Text | null;
        continue;
      }

      const parts = baseText.split('·').map((part) => part.trim());
      const mapped = parts.map((part) => ({
        text: part,
        languages: detectLanguages(part)
      }));
      const exactMatch = mapped.find((entry) => entry.languages.includes(language));
      const devanagariFallback = mapped.find((entry) => entry.languages.includes('hindi'));
      const englishFallback = mapped.find((entry) => entry.languages.includes('english')) ?? mapped[0];

      if (exactMatch) {
        node.textContent = exactMatch.text;
      } else if (language === 'marathi' && devanagariFallback) {
        node.textContent = devanagariFallback.text;
      } else if (language === 'hindi' && devanagariFallback) {
        node.textContent = devanagariFallback.text;
      } else {
        node.textContent = englishFallback?.text ?? '';
      }
      node = walker.nextNode() as Text | null;
    }
  }, [language, children]);

  return <div ref={containerRef}>{children}</div>;
}

const SCRIPT_MATCHERS: Record<LanguageOption, RegExp> = {
  english: /[A-Za-z]/,
  hindi: /[\u0900-\u097F]/,
  marathi: /[\u0900-\u097F]/,
  tamil: /[\u0B80-\u0BFF]/
};

function detectLanguages(value: string): LanguageOption[] {
  return (Object.entries(SCRIPT_MATCHERS) as [LanguageOption, RegExp][]) 
    .filter(([, regex]) => regex.test(value))
    .map(([key]) => key);
}
