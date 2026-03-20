# Screen Organization by Role & Flow

> This document maps every screen in the design showcase to its flow section, in the exact order they appear in `App.tsx`. Use this as the source of truth for what screens exist and how they connect.

---

## Farmer Flows

### 1. ENTRY FLOW — Search-First Entry
> Language → Landing → Search directly — no registration needed

| # | Label | Component | File |
|---|-------|-----------|------|
| F1 | Language Selection | `LanguageSelectDesign` | `shared/LanguageSelectDesign.tsx` |
| F2 | Landing Home | `LandingHomeDesign` | `shared/LandingHomeDesign.tsx` |
| F3 | Search (Guest, No Nav) | `SearchGuestDesign` | `farmer/SearchGuestDesign.tsx` |

**Flow logic:** Guest users can search without registering. No bottom nav shown. If results found → Equipment Detail. If no results → Post Request (triggers phone verify).

---

### 2. DASHBOARD — Farmer Dashboard & Home
> After completing first booking or request

| # | Label | Component | File |
|---|-------|-----------|------|
| D1 | Home (First Time) | `FarmerHomeDesign` | `farmer/FarmerHomeDesign.tsx` |
| D2 | Home (Active Request + Booking) | `FarmerHomeActiveDesign` | `farmer/FarmerHomeActiveDesign.tsx` |
| D3 | Home (With Notifications) | `HomeWithNotificationBadgeDesign` | `farmer/HomeWithNotificationBadgeDesign.tsx` |
| D3 | FAB Menu (+ Expanded) | `FarmerFabMenuDesign` | `farmer/FarmerFabMenuDesign.tsx` |
| D4 | Notification Center | `NotificationCenterDesign` | `shared/NotificationCenterDesign.tsx` |

**FAB Menu items:** Post Request, Voice Search, Search Equipment. Triggered by tapping the `+` FAB on the bottom nav.

---

### 3. EQUIPMENT SEARCH — Search & Discovery
> Voice AI, search, filters, and equipment details

| # | Label | Component | File |
|---|-------|-----------|------|
| S1 | Voice Agent (Kisan Mitra) | `VoiceAgentDesign` | `farmer/VoiceAgentDesign.tsx` |
| S2 | Search Interface | `SearchDesign` | `farmer/SearchDesign.tsx` |
| S3 | Search Results | `SearchResultsDesign` | `farmer/SearchResultsDesign.tsx` |
| S3b | No Results (Guest) | `SearchResultsEmptyGuestDesign` | `farmer/SearchResultsEmptyGuestDesign.tsx` |
| S4 | Filter Tray | `SearchFilterTrayDesign` | `farmer/SearchFilterTrayDesign.tsx` |
| S5 | Equipment Detail | `EquipmentDetailDesign` | `farmer/EquipmentDetailDesign.tsx` |

**Key connections:**
- S3 (results) → S5 (detail) → Book Equipment (Booking flow)
- S3b (no results) → "Post a Request" CTA → Request Equipment flow (with phone verify)

---

### 4. REQUEST EQUIPMENT — Post Request with Phone Verification
> No results → Post Request → Phone verify inline → Get offers from owners

| # | Label | Component | File |
|---|-------|-----------|------|
| RQ1 | Post Request Form | `PostRequestDesign` | `farmer/PostRequestDesign.tsx` |
| RQ2 | Phone Verification | `RequestPhoneVerifyDesign` | `farmer/RequestPhoneVerifyDesign.tsx` |
| RQ3 | OTP & Submit | `RequestOTPDesign` | `farmer/RequestOTPDesign.tsx` |
| RQ4 | Request Confirmed | `RequestConfirmDesign` | `farmer/RequestConfirmDesign.tsx` |
| RQ5 | Request Posted | `RequestPostedConfirmDesign` | `farmer/RequestPostedConfirmDesign.tsx` |
| RQ6 | My Requests List | `MyRequestsDesign` | `farmer/MyRequestsDesign.tsx` |
| RQ7 | Offers Received | `RequestOffersDesign` | `farmer/RequestOffersDesign.tsx` |
| RQ8 | Offer Detail (from Owner) | `OfferDetailDesign` | `farmer/OfferDetailDesign.tsx` |
| RQ9 | Accept Offer & Book | `AcceptOfferDesign` | `farmer/AcceptOfferDesign.tsx` |

**API docs:** `12-equipment-requests.md`, `13-offers.md`

**Key connections:**
- RQ2-RQ3: Phone verification is inline (only for guest/unverified users)
- RQ7 → RQ8: Farmer taps an offer card → sees full offer detail
- RQ8 → RQ9: Farmer accepts → booking is auto-created
- RQ5: Shows "What Happens Next" — owners notified, expect offers

---

### 5. REQUEST LIFECYCLE — Request Management After Posting
> Track status → Manage/expand → Review offers → Accept → Fulfilled

| # | Label | Component | File |
|---|-------|-----------|------|
| RL1 | Request Status Timeline | `RequestStatusTrackingDesign` | `farmer/RequestStatusTrackingDesign.tsx` |
| RL2 | Manage Request | `RequestManageDesign` | `farmer/RequestManageDesign.tsx` |
| RL3 | Request Fulfilled | `RequestFulfilledDesign` | `farmer/RequestFulfilledDesign.tsx` |
| RL4 | Request Expired | `RequestExpiredDesign` | `farmer/RequestExpiredDesign.tsx` |

**Key connections:**
- RL1: Vertical timeline showing posted → owners notified → offers received → accepted → fulfilled
- RL2: Actions: Expand Radius, Extend Expiry, Edit, Cancel
- RL3: Success screen — "Request fulfilled! Removed from public listings."
- RL4: Expired state — ⏰ icon, request summary, tips, repost CTA (same or wider 50km radius)

---

### 6. BOOKING MANAGEMENT — Complete Booking Lifecycle
> Book → Verify phone → Confirm → Track → Complete

| # | Label | Component | File |
|---|-------|-----------|------|
| B1 | Book Equipment | `BookEquipmentDesign` | `farmer/BookEquipmentDesign.tsx` |
| B1b | Phone Verification | `BookingPhoneVerifyDesign` | `farmer/BookingPhoneVerifyDesign.tsx` |
| B1c | OTP & Confirm Booking | `BookingOTPDesign` | `farmer/BookingOTPDesign.tsx` |
| B2 | Booking Confirmed | `BookingConfirmDesign` | `farmer/BookingConfirmDesign.tsx` |
| B3 | My Bookings List | `MyBookingsDesign` | `farmer/MyBookingsDesign.tsx` |
| B4 | Booking Details | `BookingDetailDesign` | `farmer/BookingDetailDesign.tsx` |
| B5 | Status Tracking | `BookingStatusTrackingDesign` | `farmer/BookingStatusTrackingDesign.tsx` |
| B6 | Reschedule Booking | `RescheduleBookingDesign` | `farmer/RescheduleBookingDesign.tsx` |
| B7 | Cancel Booking | `CancelBookingDesign` | `farmer/CancelBookingDesign.tsx` |
| B7b | Booking Cancelled | `CancelBookingConfirmDesign` | `farmer/CancelBookingConfirmDesign.tsx` |
| B8 | Share Booking | `ShareBookingDetailsDesign` | `farmer/ShareBookingDetailsDesign.tsx` |
| B9 | View on Map | `ViewOnMapDesign` | `farmer/ViewOnMapDesign.tsx` |
| B10 | Complete Booking | `CompleteBookingDesign` | `farmer/CompleteBookingDesign.tsx` |

**API docs:** `05-booking.md`, `06-booking-management.md`

---

### 7. COMMUNICATION — Contact Owner & Notifications

| # | Label | Component | File |
|---|-------|-----------|------|
| C1 | Contact Owner | `ContactOwnerDesign` | `farmer/ContactOwnerDesign.tsx` |
| C2 | Toast Notifications | `ToastNotificationsDesign` | `shared/ToastNotificationsDesign.tsx` |

---

### 8. RATINGS & FEEDBACK

| # | Label | Component | File |
|---|-------|-----------|------|
| R1 | Rate Booking | `RateBookingDesign` | `farmer/RateBookingDesign.tsx` |
| R2 | Rating Screen | `RatingScreenDesign` | `farmer/RatingScreenDesign.tsx` |

---

### 9. PROFILE & ACCOUNT — Profile Management

| # | Label | Component | File |
|---|-------|-----------|------|
| P0 | Profile View | `FarmerProfileViewDesign` | `farmer/FarmerProfileViewDesign.tsx` |
| P1 | Profile Setup (Empty) | `ProfileSetupEmptyDesign` | `farmer/ProfileSetupEmptyDesign.tsx` |
| P2 | Profile Setup (Filled) | `ProfileSetupFarmerDesign` | `farmer/ProfileSetupFarmerDesign.tsx` |
| P3 | Update Profile | `UpdateProfileDesign` | `farmer/UpdateProfileDesign.tsx` |
| P4 | Profile (Tamil) | `ProfileSetupTamilDesign` | `farmer/ProfileSetupTamilDesign.tsx` |
| P5 | Profile (Marathi) | `ProfileSetupMarathiDesign` | `farmer/ProfileSetupMarathiDesign.tsx` |
| P6 | Session Expired | `SessionExpiredLoginDesign` | `farmer/SessionExpiredLoginDesign.tsx` |
| P7 | App Settings | `AppSettingsDesign` | `shared/AppSettingsDesign.tsx` |
| P8 | Help & Support | `HelpSupportDesign` | `shared/HelpSupportDesign.tsx` |

**Note:** Profile setup is deferred — not part of onboarding. Prompted after first booking or request.
- P0: Profile hub — avatar, stats (bookings, requests, rating), menu items (Edit Profile, My Requests, My Bookings, Reviews, Notifications, Language, Help), Switch to Owner, Logout.
- P7: Notification toggles, language selector, account management (change phone, download data), danger zone (delete account).
- P8: Search bar, quick contact cards (Call, WhatsApp, Email), FAQ accordion, help topics grid, Contact Support CTA.

---

## Owner Flows

### 1. ONBOARDING — Owner Registration
> Landing → Register → Profile → First listing

| # | Label | Component | File |
|---|-------|-----------|------|
| O1 | Language Selection | `LanguageSelectDesign` | `shared/LanguageSelectDesign.tsx` |
| O2 | Landing Home | `LandingHomeDesign` | `shared/LandingHomeDesign.tsx` |
| O3 | Owner Role + Phone | `RoleSelectOwnerDesign` | `owner/RoleSelectOwnerDesign.tsx` |
| O4 | OTP Verification | `OTPVerificationDesign` | `shared/OTPVerificationDesign.tsx` |
| O5 | Profile Setup | `ProfileSetupOwnerDesign` | `owner/ProfileSetupOwnerDesign.tsx` |
| O6 | Add First Equipment | `AddEquipmentEmptyDesign` | `owner/AddEquipmentEmptyDesign.tsx` |

**Note:** Unlike farmers, owners MUST register before listing equipment.

---

### 2. DASHBOARD — Owner Dashboard

| # | Label | Component | File |
|---|-------|-----------|------|
| D1 | Dashboard (First Time) | `OwnerDashboardFirstTimeDesign` | `owner/OwnerDashboardFirstTimeDesign.tsx` |
| D2 | Dashboard (With Data) | `OwnerDashboardDesign` | `owner/OwnerDashboardDesign.tsx` |
| D3 | FAB Menu (+ Expanded) | `OwnerFabMenuDesign` | `owner/OwnerFabMenuDesign.tsx` |
| D4 | Notification Center | `NotificationCenterDesign` | `shared/NotificationCenterDesign.tsx` |

**FAB Menu items:** Add Equipment, View Opportunities (with "5 NEW" badge), Manage Bookings (with "3" badge).

---

### 3. EQUIPMENT MANAGEMENT

| # | Label | Component | File |
|---|-------|-----------|------|
| E1 | Equipment List | `OwnerEquipmentListDesign` | `owner/OwnerEquipmentListDesign.tsx` |
| E2 | Add Equipment (Empty) | `AddEquipmentEmptyDesign` | `owner/AddEquipmentEmptyDesign.tsx` |
| E3 | Add Equipment (Filled) | `AddEquipmentDesign` | `owner/AddEquipmentDesign.tsx` |
| E4 | Edit Equipment | `EquipmentEditDesign` | `owner/EquipmentEditDesign.tsx` |

**Key connections:**
- E1: Full equipment management with stats (Listed, Available, Paused). Equipment cards show bookings, earnings, rating. Action buttons: Edit, Pause/Resume, Delete.
- E4: Edit form with locked equipment type, editable brand/model/year/HP/condition/pricing/availability/description, photo management, danger zone (delete).

---

### 4. OWNER NOTIFICATIONS — Nearby Request Alerts
> Owners within 100 km are notified when farmers post equipment requests

| # | Label | Component | File |
|---|-------|-----------|------|
| N1 | Push Notification + Alert | `OwnerNearbyRequestAlertDesign` | `owner/OwnerNearbyRequestAlertDesign.tsx` |

---

### 5. EQUIPMENT OPPORTUNITIES — Browse Requests & Send Offers
> Browse farmer requests nearby, send offers, grow rental business

| # | Label | Component | File |
|---|-------|-----------|------|
| OP1 | Nearby Opportunities | `EquipmentOpportunitiesDesign` | `owner/EquipmentOpportunitiesDesign.tsx` |
| OP2 | Send Offer to Farmer | `SendOfferDesign` | `owner/SendOfferDesign.tsx` |
| OP3 | Offer Sent Confirmation | `OfferSentConfirmDesign` | `owner/OfferSentConfirmDesign.tsx` |

**API docs:** `13-offers.md`

**Key connections:**
- N1 (notification) → OP1 (browse opportunities)
- OP1 → OP2 (send offer with equipment, price, message)
- OP2 → OP3 (confirmation with "What Happens Next")
- Farmer accepts → Booking auto-created for both parties

---

### 6. BOOKING MANAGEMENT (Owner)
> Handle incoming requests, accept/reject bookings

| # | Label | Component | File |
|---|-------|-----------|------|
| B1 | Incoming Requests List | `IncomingRequestsListDesign` | `owner/IncomingRequestsListDesign.tsx` |
| B2 | Booking Request Detail | `BookingRequestDesign` | `owner/BookingRequestDesign.tsx` |
| B3 | Booking Confirmed | `OwnerBookingConfirmDesign` | `owner/BookingConfirmDesign.tsx` |
| B4 | Booking Status | `OwnerBookingStatusTrackingDesign` | `owner/BookingStatusTrackingDesign.tsx` |

---

### 7. EARNINGS

| # | Label | Component | File |
|---|-------|-----------|------|
| ER1 | Earnings Dashboard | `OwnerEarningsDesign` | `owner/OwnerEarningsDesign.tsx` |

**Key connections:**
- Shows total balance, withdraw CTA, period tabs (Week/Month/All Time), stats grid (total earned, this month, bookings, avg), transaction list, linked bank account.
- **API docs:** `07-payments.md` (section 7.5 Get Owner Earnings)

---

### 8. COMMUNICATION (Owner)

| # | Label | Component | File |
|---|-------|-----------|------|
| C1 | Toast Notifications | `ToastNotificationsDesign` | `shared/ToastNotificationsDesign.tsx` |
| C2 | Contact Farmer | `ContactOwnerDesign` | `farmer/ContactOwnerDesign.tsx` |
| C3 | App Settings | `AppSettingsDesign` | `shared/AppSettingsDesign.tsx` |
| C4 | Help & Support | `HelpSupportDesign` | `shared/HelpSupportDesign.tsx` |

---

### 9. RATINGS & FEEDBACK (Owner)

| # | Label | Component | File |
|---|-------|-----------|------|
| R1 | Rate Farmer | `RatingScreenDesign` | `farmer/RatingScreenDesign.tsx` |

---

## Shared Components

### Bottom Navigation

| Component | File | Tabs | FAB |
|-----------|------|------|-----|
| `FarmerBottomNav` | `components/FarmerBottomNav.tsx` | Home, Search, Bookings, Profile | `+` (saffron) → opens FarmerFabMenu |
| `OwnerBottomNav` | `components/OwnerBottomNav.tsx` | Home, Equip, Bookings, Profile | `+` (green) → opens OwnerFabMenu |

### Interactive Prototypes

App.tsx includes `InteractivePrototype` sections that let viewers click through screen sequences:

| Prototype | Screens Included |
|-----------|-----------------|
| Search-First Farmer Flow | Language → Landing → Guest Search → Empty Results → Phone Verify → OTP → Request Posted |
| Post Request Flow | Empty Results → Post Request Form → Phone Verify → OTP → Request Posted |
| Request Management Lifecycle | Request Posted → Status Timeline → Manage → Offers → Accept → Fulfilled |
| Booking Flow | Equipment Detail → Book → Phone Verify → OTP → Booking Confirmed |
| Owner Registration Flow | Language → Landing → Owner Role → OTP → Profile → Add Equipment |
| Owner Opportunities Flow | Nearby Alert → Opportunities → Send Offer → Offer Sent |
| Owner Booking Management | Incoming Requests → Booking Request → Confirmed → Status |

---

## Complete Screen Count

| Category | Count |
|----------|-------|
| Shared screens | 8 |
| Farmer screens | 39 |
| Owner screens | 16 |
| **Total unique screens** | **63** |

---

## Cross-Role Flow: Request → Offer → Booking Pipeline

This is the most important cross-role flow connecting farmer and owner experiences:

```
FARMER                                    OWNER
──────                                    ─────
Search (no results)
    ↓
Post Request
    ↓
Phone Verify → OTP
    ↓
Request Posted ──────────────────→ Push Notification (Nearby Request)
    ↓                                         ↓
My Requests                              Equipment Opportunities
    ↓                                         ↓
(waiting for offers)                     Send Offer
                                              ↓
                                         Offer Sent Confirmation
    ↓
Offer Received ←─────────────────────────────┘
    ↓
Offer Detail
    ↓
Accept Offer ─────────────────────→ Booking Created (both notified)
    ↓                                    ↓
Booking Confirmed                   Booking Confirmed (Owner)
    ↓                                    ↓
Booking Lifecycle                   Booking Management
(track, reschedule, cancel,         (status updates, complete)
 complete, rate)
```
