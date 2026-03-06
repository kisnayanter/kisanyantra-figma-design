import { useEffect, useRef } from 'react';
import { LanguageProvider, useLanguage } from './contexts/language';
import type { LanguageOption } from './contexts/language';
import { LanguageSelectDesign } from './screens/LanguageSelectDesign';
import { RoleSelectDesign } from './screens/RoleSelectDesign';
import { RoleSelectFarmerDesign } from './screens/RoleSelectFarmerDesign';
import { RoleSelectOwnerDesign } from './screens/RoleSelectOwnerDesign';
import { OTPVerificationDesign } from './screens/OTPVerificationDesign';
import { ProfileSetupDesign } from './screens/ProfileSetupDesign';
import { ProfileSetupEmptyDesign } from './screens/ProfileSetupEmptyDesign';
import { ProfileSetupFarmerDesign } from './screens/ProfileSetupFarmerDesign';
import { ProfileSetupOwnerDesign } from './screens/ProfileSetupOwnerDesign';
import { ProfileSetupTamilDesign } from './screens/ProfileSetupTamilDesign';
import { ProfileSetupMarathiDesign } from './screens/ProfileSetupMarathiDesign';
import { FarmerHomeDesign } from './screens/FarmerHomeDesign';
import { SearchDesign } from './screens/SearchDesign';
import { VoiceAgentDesign } from './screens/VoiceAgentDesign';
import { SearchResultsDesign } from './screens/SearchResultsDesign';
import { SearchFilterTrayDesign } from './screens/SearchFilterTrayDesign';
import { EquipmentDetailDesign } from './screens/EquipmentDetailDesign';
import { UpdateProfileDesign } from './screens/UpdateProfileDesign';
import { OwnerDashboardDesign } from './screens/OwnerDashboardDesign';
import { AddEquipmentDesign } from './screens/AddEquipmentDesign';
import { AddEquipmentEmptyDesign } from './screens/AddEquipmentEmptyDesign';
import { BookingRequestDesign } from './screens/BookingRequestDesign';
import { BookingConfirmDesign } from './screens/BookingConfirmDesign';
import { RatingScreenDesign } from './screens/RatingScreenDesign';
import { ToastNotificationsDesign } from './screens/ToastNotificationsDesign';
import { NotificationCenterDesign } from './screens/NotificationCenterDesign';
import { HomeWithNotificationBadgeDesign } from './screens/HomeWithNotificationBadgeDesign';
// Add these imports
import { MyBookingsDesign } from './screens/MyBookingsDesign';
import { BookingDetailDesign } from './screens/BookingDetailDesign';
import { CancelBookingDesign } from './screens/CancelBookingDesign';
import { RescheduleBookingDesign } from './screens/RescheduleBookingDesign';
import { BookingStatusTrackingDesign } from './screens/BookingStatusTrackingDesign';
import { ShareBookingDetailsDesign } from './screens/ShareBookingDetailsDesign';
import { ContactOwnerDesign } from './screens/ContactOwnerDesign';
import { ViewOnMapDesign } from './screens/ViewOnMapDesign';
import { CompleteBookingDesign } from './screens/CompleteBookingDesign';
import { RateBookingDesign } from './screens/RateBookingDesign';
export default function App() {
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

        <div className="mt-6 flex flex-col items-center gap-2">
          <LanguageToggle />
          <p className="text-xs" style={{ color: 'var(--text-soft)' }}>
            Switch to preview screen copy in your preferred language.
          </p>
        </div>
      </div>

      {/* Section 1: Onboarding Flow */}
      <div className="text-center mx-auto mb-8">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--saffron)', letterSpacing: '1.5px' }}
        >
          ONBOARDING
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          Language Select → Role Selection → Home
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          auth.md · PhoneAuthPage · ProfileSetupPage · selectedLocaleProvider
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center px-10 pb-[40px]">
        <ScreenCard label="01 · Splash & Language">
          <LanguageSelectDesign />
        </ScreenCard>
        <ScreenCard label="02 · Role Selection (Farmer)">
          <RoleSelectDesign />
        </ScreenCard>
        <ScreenCard label="03 · OTP Verification">
          <OTPVerificationDesign />
        </ScreenCard>
        <ScreenCard label="04 · Profile Setup — Empty">
          <ProfileSetupEmptyDesign />
        </ScreenCard>
        <ScreenCard label="05 · Profile Setup — Filled">
          <ProfileSetupDesign />
        </ScreenCard>
        <ScreenCard label="06 · Farmer Home (First Login)">
          <FarmerHomeDesign />
        </ScreenCard>
      </div>

      <div className="text-center mx-auto mb-6">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--green)', letterSpacing: '1.5px' }}
        >
          OWNER ONBOARDING
        </span>
        <p className="text-sm" style={{ color: 'var(--text-soft)' }}>
          Dedicated flow for equipment owners joining the platform
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center px-10 pb-[60px]">
        <ScreenCard label="O1 · Select Role (Owner)">
          <RoleSelectOwnerDesign />
        </ScreenCard>
        <ScreenCard label="O2 · OTP Verification">
          <OTPVerificationDesign />
        </ScreenCard>
        <ScreenCard label="O3 · Owner Profile Setup">
          <ProfileSetupOwnerDesign />
        </ScreenCard>
        <ScreenCard label="O4 · Add First Equipment">
          <AddEquipmentEmptyDesign />
        </ScreenCard>
        <ScreenCard label="O5 · Owner Dashboard">
          <OwnerDashboardDesign />
        </ScreenCard>
      </div>

      {/* Section 2: Voice AI + Search */}
      <div className="text-center mx-auto mb-8 mt-[60px]">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--saffron)', letterSpacing: '1.5px' }}
        >
          VOICE AI
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          Kisan Mitra Voice Agent · Search Results
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          kisan_mitra.md · KisanMitraNotifier · VoiceMode · renter_search_page.dart
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center px-10 pb-[60px]">
        <ScreenCard label="06 · Kisan Mitra — Listening">
          <VoiceAgentDesign />
        </ScreenCard>
        <ScreenCard label="07 · Search Results — List">
          <SearchResultsDesign />
        </ScreenCard>
        <ScreenCard label="07A · Filters Bottom Sheet">
          <SearchFilterTrayDesign />
        </ScreenCard>
        <ScreenCard label="08 · Equipment Detail">
          <EquipmentDetailDesign />
        </ScreenCard>
      </div>

      {/* Section 3: Search & Profile */}
      <div className="text-center mx-auto mb-8 mt-[60px]">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--saffron)', letterSpacing: '1.5px' }}
        >
          SEARCH & PROFILE
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          Search Interface · Profile Management
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          search_page.dart · profile_page.dart · selectedLocaleProvider
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center px-10 pb-[60px]">
        <ScreenCard label="09 · Search Equipment">
          <SearchDesign />
        </ScreenCard>
        <ScreenCard label="10 · Update Profile">
          <UpdateProfileDesign />
        </ScreenCard>
      </div>

      {/* Section 4: Owner + Payments */}
      <div className="text-center mx-auto mb-8 mt-[60px]">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--saffron)', letterSpacing: '1.5px' }}
        >
          OWNER + PAYMENTS
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          Owner Dashboard · Booking Confirmation & Payments
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          earnings.md · booking.md · payments.md · ratings.md · incoming_requests_page.dart
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center px-10 pb-[60px]">
        <ScreenCard label="11 · Owner Dashboard">
          <OwnerDashboardDesign />
        </ScreenCard>
        <ScreenCard label="12 · Add Equipment">
          <AddEquipmentDesign />
        </ScreenCard>
        <ScreenCard label="13 · Booking Request">
          <BookingRequestDesign />
        </ScreenCard>
        <ScreenCard label="14 · Booking Confirmed + Pay">
          <BookingConfirmDesign />
        </ScreenCard>
        <ScreenCard label="15 · Rate Experience">
          <RatingScreenDesign />
        </ScreenCard>
      </div>

      {/* Section 4.5: Notifications & Feedback */}
      <div className="text-center mx-auto mb-8 mt-[60px]">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--saffron)', letterSpacing: '1.5px' }}
        >
          NOTIFICATIONS & FEEDBACK
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          Toast Messages · In-App Notifications · Badges
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          API Response States · Success/Error Messages · Notification Center · Badge System
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center px-10 pb-[60px]">
        <ScreenCard label="16 · Toast Notifications">
          <ToastNotificationsDesign />
        </ScreenCard>
        <ScreenCard label="17 · Notification Center">
          <NotificationCenterDesign />
        </ScreenCard>
        <ScreenCard label="18 · Home with Notification Badge">
          <HomeWithNotificationBadgeDesign />
        </ScreenCard>
      </div>

      {/* Section 5: User Flows */}
      <div className="text-center mx-auto mb-8 mt-[60px]">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--saffron)', letterSpacing: '1.5px' }}
        >
          USER FLOWS
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          Complete User Journeys
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          Farmer & Owner Complete Flows · Role-Specific Experiences
        </p>
      </div>

      {/* Farmer Flow */}
      <div className="max-w-[1400px] mx-auto px-10 pb-10">
        <div
          className="rounded-[24px] p-6 mb-8"
          style={{ background: 'var(--saffron-pale)', border: '2px solid var(--saffron)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="text-[36px]">👨‍🌾</div>
            <div>
              <div
                className="text-[22px] font-bold"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--saffron)' }}
              >
                Farmer Flow: "I Need Equipment"
              </div>
              <div className="text-[13px]" style={{ color: 'var(--text-mid)' }}>
                Complete journey from signup to booking and rating
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <ScreenCard label="F1 · Select Role (Farmer)">
              <RoleSelectFarmerDesign />
            </ScreenCard>
            <ScreenCard label="F2 · OTP Verification">
              <OTPVerificationDesign />
            </ScreenCard>
            <ScreenCard label="F3 · Profile Setup (Farmer)">
              <ProfileSetupFarmerDesign />
            </ScreenCard>
            <ScreenCard label="F4 · Farmer Home">
              <FarmerHomeDesign />
            </ScreenCard>
            <ScreenCard label="F5 · Search Equipment">
              <SearchDesign />
            </ScreenCard>
            <ScreenCard label="F5A · Filter Tray">
              <SearchFilterTrayDesign />
            </ScreenCard>
            <ScreenCard label="F6 · Equipment Detail">
              <EquipmentDetailDesign />
            </ScreenCard>
            <ScreenCard label="F7 · Booking Confirmed">
              <BookingConfirmDesign />
            </ScreenCard>
            <ScreenCard label="F8 · Rate Experience">
              <RatingScreenDesign />
            </ScreenCard>
          </div>
        </div>

        {/* Owner Flow */}
        <div
          className="rounded-[24px] p-6"
          style={{ background: 'var(--green-pale)', border: '2px solid var(--green)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="text-[36px]">🚜</div>
            <div>
              <div
                className="text-[22px] font-bold"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--green)' }}
              >
                Owner Flow: "I Own Equipment"
              </div>
              <div className="text-[13px]" style={{ color: 'var(--text-mid)' }}>
                Complete journey from signup to listing equipment and managing bookings
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <ScreenCard label="O1 · Select Role (Owner)">
              <RoleSelectOwnerDesign />
            </ScreenCard>
            <ScreenCard label="O2 · OTP Verification">
              <OTPVerificationDesign />
            </ScreenCard>
            <ScreenCard label="O3 · Profile Setup (Owner)">
              <ProfileSetupOwnerDesign />
            </ScreenCard>
            <ScreenCard label="O4 · Owner Dashboard">
              <OwnerDashboardDesign />
            </ScreenCard>
            <ScreenCard label="O5 · Add Equipment">
              <AddEquipmentDesign />
            </ScreenCard>
            <ScreenCard label="O6 · Booking Request">
              <BookingRequestDesign />
            </ScreenCard>
          </div>
        </div>
      </div>

      {/* Section 6: Multi-Language Support */}
      <div className="text-center mx-auto mb-8 mt-[60px]">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--saffron)', letterSpacing: '1.5px' }}
        >
          MULTI-LANGUAGE
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          Tamil & Marathi Language Variants
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          selectedLocaleProvider · Noto Sans Devanagari · Tamil Script Support
        </p>
      </div>


      <div className="flex flex-wrap gap-8 justify-center px-10 pb-[60px]">
        <ScreenCard label="16 · Profile Setup — Tamil">
          <ProfileSetupTamilDesign />
        </ScreenCard>
        <ScreenCard label="17 · Profile Setup — Marathi">
          <ProfileSetupMarathiDesign />
        </ScreenCard>
      </div>

      {/* Section 7: Booking Management */}
      <div className="text-center mx-auto mb-8 mt-[60px]">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--green)', letterSpacing: '1.5px' }}
        >
          BOOKING MANAGEMENT
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          Complete Booking Lifecycle
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          My Bookings · Details · Cancellation · Rescheduling · Status Tracking
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center px-10 pb-[60px]">
        <ScreenCard label="19 · My Bookings">
          <MyBookingsDesign />
        </ScreenCard>
        <ScreenCard label="20 · Booking Details">
          <BookingDetailDesign />
        </ScreenCard>
        <ScreenCard label="21 · Cancel Booking">
          <CancelBookingDesign />
        </ScreenCard>
        <ScreenCard label="22 · Reschedule">
          <RescheduleBookingDesign />
        </ScreenCard>
        <ScreenCard label="23 · Status Tracking">
          <BookingStatusTrackingDesign />
        </ScreenCard>
        <ScreenCard label="24 · Share Booking">
          <ShareBookingDetailsDesign />
        </ScreenCard>
        <ScreenCard label="25 · Contact Owner">
          <ContactOwnerDesign />
        </ScreenCard>
        <ScreenCard label="26 · View on Map">
          <ViewOnMapDesign />
        </ScreenCard>
        <ScreenCard label="27 · Complete Booking">
          <CompleteBookingDesign />
        </ScreenCard>
        <ScreenCard label="28 · Rate Booking">
          <RateBookingDesign />
        </ScreenCard>
      </div>

      {/* Design System Section */}
      <div className="text-center mx-auto mb-8 mt-[60px]">
        <span
          className="inline-block px-[14px] py-1 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase mb-2.5 text-white"
          style={{ background: 'var(--saffron)', letterSpacing: '1.5px' }}
        >
          FORM STATES
        </span>
        <h2
          className="text-[28px] font-bold"
          style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
        >
          Empty vs Filled Input States
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-soft)' }}>
          Form interaction patterns · Input placeholders · Disabled states
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 pb-[60px]">
        {/* Profile Forms Comparison */}
        <div
          className="rounded-[24px] p-6 mb-8"
          style={{ background: 'var(--saffron-pale)', border: '2px solid var(--saffron)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="text-[36px]">📝</div>
            <div>
              <div
                className="text-[22px] font-bold"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--saffron)' }}
              >
                Profile Setup Form States
              </div>
              <div className="text-[13px]" style={{ color: 'var(--text-mid)' }}>
                Empty form (initial state) vs Filled form (completed state)
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <ScreenCard label="Empty Form · Initial State">
              <ProfileSetupEmptyDesign />
            </ScreenCard>
            <ScreenCard label="Filled Form · Completed State">
              <ProfileSetupDesign />
            </ScreenCard>
          </div>
        </div>

        {/* Add Equipment Forms Comparison */}
        <div
          className="rounded-[24px] p-6"
          style={{ background: 'var(--green-pale)', border: '2px solid var(--green)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="text-[36px]">➕</div>
            <div>
              <div
                className="text-[22px] font-bold"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--green)' }}
              >
                Add Equipment Form States
              </div>
              <div className="text-[13px]" style={{ color: 'var(--text-mid)' }}>
                Empty form (clicking "Add New") vs Filled form (ready to list)
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <ScreenCard label="Empty Form · Click 'Add New'">
              <AddEquipmentEmptyDesign />
            </ScreenCard>
            <ScreenCard label="Filled Form · Ready to List">
              <AddEquipmentDesign />
            </ScreenCard>
          </div>
        </div>
      </div>

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
            { color: '#FF6B00', name: 'Saffron Primary', hex: '#FF6B00' },
            { color: '#FF8C38', name: 'Saffron Light', hex: '#FF8C38' },
            { color: '#FFF3E8', name: 'Saffron Pale', hex: '#FFF3E8' },
            { color: '#1A7A3B', name: 'Green Primary', hex: '#1A7A3B' },
            { color: '#22A04F', name: 'Green Light', hex: '#22A04F' },
            { color: '#E8F7EE', name: 'Green Pale', hex: '#E8F7EE' },
            { color: '#F5A623', name: 'Gold / Stars', hex: '#F5A623' },
            { color: '#1A1A2E', name: 'Dark / Owner BG', hex: '#1A1A2E' },
            { color: '#FDFAF5', name: 'Cream BG', hex: '#FDFAF5' },
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
              BODY — DM SANS 400
            </div>
            <div className="text-[15px]" style={{ color: 'var(--text-mid)' }}>
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
        Design System v1.0 · React + Tailwind CSS · 26 Screens Designed<br />
        Fonts: Baloo 2 · Noto Sans Devanagari · DM Sans<br />
        <div className="mt-2 text-[11px]">
          User Flows · Form States · Toast Notifications · In-App Notifications
        </div>
      </div>
      </div>
    </LanguageProvider>
  );
}

interface ScreenCardProps {
  label: string;
  children: React.ReactNode;
}

function ScreenCard({ label, children }: ScreenCardProps) {
  return (
    <div className="flex flex-col items-center flex-shrink-0" style={{ width: '320px' }}>
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