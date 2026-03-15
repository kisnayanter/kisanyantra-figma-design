# Screen Organization by Role

## Design System Standards

### Header Design Pattern
**All screens now use the orange gradient header** for visual consistency and brand recognition:
- Gradient: `linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)`
- Rounded bottom corners: `rounded-b-[36px]`
- White text with semi-transparent overlays for cards
- Consistent padding: `px-[18px] pt-5 pb-6`

### Calendar Design Pattern
**All booking-related screens use full month calendar view**:
- Complete month grid (28-31 days)
- Month navigation (previous/next)
- Day labels (S M T W T F S)
- Color coding:
  - Available: `var(--cream)` with border
  - Booked: `#FFE8E8` with strikethrough
  - Selected: `var(--saffron)` with white text
  - Current booking: `#FFF3E8` with saffron border

## Farmer Screens
Screens used by farmers to find and book equipment:

### Primary Flows
- `FarmerHomeDesign.tsx` - Main dashboard with quick actions
- `SearchDesign.tsx` - Equipment search
- `SearchResultsDesign.tsx` - Search results listing
- `SearchFilterTrayDesign.tsx` - Filter options
- `EquipmentDetailDesign.tsx` - Equipment details with availability
- `BookEquipmentDesign.tsx` - **NEW** Improved booking flow with full calendar
- `BookingConfirmDesign.tsx` - Booking confirmation

### Booking Management
- `MyBookingsDesign.tsx` - List of all bookings
- `BookingDetailDesign.tsx` - Individual booking details
- `RescheduleBookingDesign.tsx` - Reschedule existing booking
- `CancelBookingDesign.tsx` - Cancel booking flow
- `CompleteBookingDesign.tsx` - Mark booking as complete
- `RateBookingDesign.tsx` - Rate completed booking
- `ShareBookingDetailsDesign.tsx` - Share booking info

### Communication
- `ContactOwnerDesign.tsx` - Contact equipment owner
- `VoiceAgentDesign.tsx` - Voice-based search/booking

### Tracking
- `BookingStatusTrackingDesign.tsx` - Real-time booking status
- `ViewOnMapDesign.tsx` - Location on map

## Owner Screens
Screens used by equipment owners to manage listings and bookings:

### Primary Flows
- `OwnerDashboardDesign.tsx` - Owner dashboard with earnings
- `AddEquipmentDesign.tsx` - Add new equipment listing
- `AddEquipmentEmptyDesign.tsx` - Empty state for equipment

### Booking Management
- `BookingRequestDesign.tsx` - Incoming booking requests
- Same booking detail/tracking screens as farmers

## Shared Screens
Screens used by both farmers and owners:

### Authentication & Onboarding
- `LanguageSelectDesign.tsx` - Language selection
- `OTPVerificationDesign.tsx` - Phone verification
- `RoleSelectDesign.tsx` - Choose farmer/owner role
- `RoleSelectFarmerDesign.tsx` - Farmer role details
- `RoleSelectOwnerDesign.tsx` - Owner role details
- `SessionExpiredLoginDesign.tsx` - Re-authentication

### Profile Management
- `ProfileSetupDesign.tsx` - Initial profile setup
- `ProfileSetupEmptyDesign.tsx` - Empty profile state
- `ProfileSetupFarmerDesign.tsx` - Farmer-specific setup
- `ProfileSetupOwnerDesign.tsx` - Owner-specific setup
- `ProfileSetupMarathiDesign.tsx` - Marathi language variant
- `ProfileSetupTamilDesign.tsx` - Tamil language variant
- `UpdateProfileDesign.tsx` - Edit profile

### System
- `NotificationCenterDesign.tsx` - All notifications
- `HomeWithNotificationBadgeDesign.tsx` - Home with notification badge
- `ToastNotificationsDesign.tsx` - Toast messages
- `RatingScreenDesign.tsx` - Rating interface

## Key Improvements Made

### 1. Booking Flow Enhancement
**Problem**: Inconsistent calendar views
- Equipment detail page showed full month calendar
- Reschedule page only showed 7 days
- No dedicated booking page with calendar

**Solution**: Created `BookEquipmentDesign.tsx`
- Full month calendar view matching equipment detail
- Step-by-step flow (Date → Duration → Time → Summary)
- Large touch targets for farmer-friendly UX
- Bilingual labels (Hindi/English)
- Clear visual hierarchy with numbered steps

### 2. Visual Consistency
**Problem**: Inconsistent header styles
- Farmer screens used orange gradient
- Owner dashboard used dark gradient
- Mixed usage created confusion

**Solution**: Standardized orange gradient header
- All screens now use saffron gradient
- Maintains brand identity
- Better visual consistency
- Easier for users switching between roles

### 3. Farmer-Friendly Design Principles
- **Large touch targets**: Minimum 44x44px for buttons
- **Bilingual labels**: Hindi + English throughout
- **Clear icons**: Emoji-based visual cues
- **Step indicators**: Numbered steps for complex flows
- **Price transparency**: Clear breakdown of costs
- **Confirmation messages**: Clear feedback on actions

## Migration Plan

To move screens into organized folders:

```bash
# Farmer screens
mv src/app/screens/FarmerHomeDesign.tsx src/app/screens/farmer/
mv src/app/screens/SearchDesign.tsx src/app/screens/farmer/
mv src/app/screens/EquipmentDetailDesign.tsx src/app/screens/farmer/
mv src/app/screens/BookEquipmentDesign.tsx src/app/screens/farmer/
# ... etc

# Owner screens
mv src/app/screens/OwnerDashboardDesign.tsx src/app/screens/owner/
mv src/app/screens/AddEquipmentDesign.tsx src/app/screens/owner/
# ... etc

# Shared screens
mv src/app/screens/LanguageSelectDesign.tsx src/app/screens/shared/
mv src/app/screens/ProfileSetupDesign.tsx src/app/screens/shared/
# ... etc
```

## Next Steps

1. **Update imports** in component files after moving screens
2. **Create index files** in each folder for easier imports
3. **Update routing** to reflect new folder structure
4. **Test all flows** to ensure nothing broke
5. **Update documentation** with new import paths
