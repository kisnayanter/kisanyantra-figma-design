# Module 12: Equipment Requests

> Screens: PostRequestDesign, RequestPhoneVerifyDesign, RequestOTPDesign, RequestConfirmDesign, RequestPostedConfirmDesign, MyRequestsDesign, RequestStatusTrackingDesign, RequestManageDesign, RequestFulfilledDesign, RequestExpiredDesign, SearchResultsEmptyGuestDesign, SearchResultsEmptyDesign

---

## Overview

When a farmer searches for equipment and finds **no results**, they can **post a request** describing what they need. This request is broadcast to nearby equipment owners (within a configurable radius, default 100 km). Owners receive push notifications and can browse these requests in the **Equipment Opportunities** screen, then send offers back to the farmer.

This module covers the **farmer side** of the request flow. For the **owner side** (viewing requests, sending offers), see `13-offers.md`.

---

## Flow Summary

```
Search Results Empty → "Post a Request" CTA
  → Post Request Form (equipment type, dates, location, budget, notes)
  → Phone Verification (if guest / unverified)
  → OTP Verification
  → Request Confirmed (success screen with request ID)
  → Request Posted Confirmation (summary + what happens next)

Post-submission lifecycle:
  → My Requests List (active / past tabs)
  → Request Status Timeline (searching → offers received → accepted → fulfilled)
  → Manage Request (edit, expand radius, extend expiry, cancel)
  → Offers Received (list of owner offers)
  → Offer Detail → Accept → Booking Created
  → Request Fulfilled (auto-removed from public listings)
  → Request Expired (no offers within time limit → repost or search)
```

---

## 12.1 Post Equipment Request (Farmer)

> Screen: PostRequestDesign — Form with equipment type, dates, location, budget, notes

```
POST /requests
```

**Headers:** `Authorization: Bearer <token>` (or guest token after phone verification)

**Request Body:**

```json
{
  "equipment_type": "tractor",
  "horse_power_min": 40,
  "horse_power_max": 60,
  "start_date": "2026-03-20",
  "end_date": "2026-03-23",
  "duration_days": 4,
  "budget_per_day": 2500,
  "budget_max_total": 10000,
  "needs_operator": true,
  "location": {
    "address": "Hinganghat, Wardha, Maharashtra",
    "lat": 20.5488,
    "lng": 78.8438
  },
  "search_radius_km": 25,
  "notes": "Need for ploughing 10 acres of cotton field",
  "voice_message_url": null,
  "preferred_contact": "whatsapp"
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `equipment_type` | string | Yes | `tractor`, `harvester`, `cultivator`, `pump` |
| `horse_power_min` | int | No | 1-500 |
| `horse_power_max` | int | No | >= horse_power_min |
| `start_date` | date | Yes | YYYY-MM-DD, must be today or future |
| `end_date` | date | Yes | >= start_date |
| `duration_days` | int | Yes | 1-30 |
| `budget_per_day` | int | No | INR, min 500 |
| `budget_max_total` | int | No | INR |
| `needs_operator` | bool | No | Default true |
| `location.address` | string | Yes | Full text address |
| `location.lat` | float | Yes | Latitude |
| `location.lng` | float | Yes | Longitude |
| `search_radius_km` | int | No | Default 25, max 100 |
| `notes` | string | No | Max 500 chars |
| `voice_message_url` | string | No | URL to voice recording |
| `preferred_contact` | string | No | `whatsapp`, `call`, `in_app` |

**Response: 201**

```json
{
  "success": true,
  "data": {
    "id": "req-uuid-001",
    "request_number": "REQ-2026-03-0143",
    "status": "searching",
    "equipment_type": "tractor",
    "horse_power_range": "40-60 HP",
    "start_date": "2026-03-20",
    "end_date": "2026-03-23",
    "duration_days": 4,
    "budget_per_day": 2500,
    "location": {
      "address": "Hinganghat, Wardha, Maharashtra",
      "lat": 20.5488,
      "lng": 78.8438
    },
    "search_radius_km": 25,
    "owners_notified": 12,
    "expires_at": "2026-03-19T23:59:59Z",
    "created_at": "2026-03-16T10:00:00Z"
  },
  "message": "Request posted! 12 nearby owners have been notified."
}
```

**Error Responses:**

- `400` — Invalid dates or equipment type
- `409` — User already has an active request for same type/dates
- `429` — Max 3 active requests per user

---

## 12.2 Inline Phone Verification (Guest Users)

> Screens: RequestPhoneVerifyDesign, RequestOTPDesign — Phone + OTP inline during request submission

When a guest user (not yet registered) taps "Post a Request" from the empty search results, they must verify their phone number inline before the request is submitted. This differs from the onboarding flow — no role selection or profile setup is required.

### 12.2.1 Send Verification OTP

```
POST /auth/otp/send
```

**Request Body:**

```json
{
  "phone": "+919876543210",
  "context": "request_post",
  "language": "hi",
  "device_id": "uuid-device-123"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | string | Yes | `+91XXXXXXXXXX` |
| `context` | string | Yes | `request_post` or `booking_create` — determines post-verify redirect |
| `language` | string | Yes | `en`, `hi`, `ta`, `mr` |
| `device_id` | string | Yes | Unique device ID |

**Response: 200** — Same as `01-auth-onboarding.md` Section 1.2

### 12.2.2 Verify OTP & Auto-Submit Request

```
POST /auth/otp/verify
```

Same as `01-auth-onboarding.md` Section 1.3, but when `context` is `request_post`:

- If new user: auto-create a minimal user record with `role: "farmer"`, `profile_complete: false`
- Return `access_token`
- Client then immediately calls `POST /requests` with the token
- After request is posted, prompt user to complete profile (deferred — not blocking)

**Response includes `context_action`:**

```json
{
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "rt-opaque-token-789",
    "is_new_user": true,
    "user": {
      "id": "user-uuid-new",
      "phone": "+919876543210",
      "role": "farmer",
      "profile_complete": false
    },
    "context_action": "submit_request"
  }
}
```

---

## 12.3 Get Request Detail

> Screen: RequestStatusTrackingDesign — Full request detail with status timeline

```
GET /requests/{request_id}
```

**Headers:** `Authorization: Bearer <token>`

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "req-uuid-001",
    "request_number": "REQ-2026-03-0143",
    "status": "offers_received",
    "equipment_type": "tractor",
    "horse_power_range": "40-60 HP",
    "start_date": "2026-03-20",
    "end_date": "2026-03-23",
    "duration_days": 4,
    "budget_per_day": 2500,
    "budget_max_total": 10000,
    "needs_operator": true,
    "location": {
      "address": "Hinganghat, Wardha, Maharashtra",
      "lat": 20.5488,
      "lng": 78.8438
    },
    "search_radius_km": 25,
    "notes": "Need for ploughing 10 acres of cotton field",
    "owners_notified": 12,
    "offers_count": 3,
    "expires_at": "2026-03-19T23:59:59Z",
    "created_at": "2026-03-16T10:00:00Z",

    "timeline": [
      {
        "status": "posted",
        "title": "Request Posted",
        "timestamp": "2026-03-16T10:00:00Z",
        "description": "12 nearby owners notified",
        "completed": true
      },
      {
        "status": "owners_notified",
        "title": "Owners Notified",
        "timestamp": "2026-03-16T10:00:05Z",
        "description": "12 owners within 25 km received your request",
        "completed": true
      },
      {
        "status": "offers_received",
        "title": "Offers Received",
        "timestamp": "2026-03-16T14:30:00Z",
        "description": "3 owners have sent you offers",
        "completed": true,
        "is_current": true
      },
      {
        "status": "accepted",
        "title": "Offer Accepted",
        "timestamp": null,
        "description": "Accept an offer to create a booking",
        "completed": false
      },
      {
        "status": "fulfilled",
        "title": "Request Fulfilled",
        "timestamp": null,
        "description": "Booking created from accepted offer",
        "completed": false
      }
    ],

    "actions": {
      "can_edit": true,
      "can_cancel": true,
      "can_expand_radius": true,
      "can_extend_expiry": true,
      "can_view_offers": true
    }
  }
}
```

---

## 12.4 List My Requests

> Screen: MyRequestsDesign — Active and past request tabs

```
GET /requests
```

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | string | `active` | `active` (searching, offers_received), `past` (fulfilled, cancelled, expired), `all` |
| `cursor` | string | null | Pagination cursor |
| `limit` | int | 20 | Max 50 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "summary": {
      "active_count": 2,
      "total_offers_received": 5,
      "fulfilled_count": 3
    },
    "requests": [
      {
        "id": "req-uuid-001",
        "request_number": "REQ-2026-03-0143",
        "status": "offers_received",
        "equipment_type": "tractor",
        "horse_power_range": "40-60 HP",
        "start_date": "2026-03-20",
        "end_date": "2026-03-23",
        "duration_days": 4,
        "budget_per_day": 2500,
        "location_short": "Hinganghat, Wardha",
        "offers_count": 3,
        "best_offer_price": 2200,
        "expires_at": "2026-03-19T23:59:59Z",
        "created_at": "2026-03-16T10:00:00Z"
      }
    ],
    "pagination": {
      "next_cursor": null,
      "has_more": false,
      "total_count": 2
    }
  }
}
```

---

## 12.5 Manage Request

> Screen: RequestManageDesign — Edit, expand radius, extend expiry, cancel

### 12.5.1 Update Request

```
PATCH /requests/{request_id}
```

**Request Body (partial update):**

```json
{
  "budget_per_day": 3000,
  "search_radius_km": 50,
  "notes": "Updated: Also need trailer hitch attachment"
}
```

Editable fields: `budget_per_day`, `budget_max_total`, `search_radius_km`, `notes`, `needs_operator`, `start_date`, `end_date`, `duration_days`

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "req-uuid-001",
    "search_radius_km": 50,
    "additional_owners_notified": 8,
    "updated_at": "2026-03-17T10:00:00Z"
  },
  "message": "Request updated. 8 additional owners notified in expanded area."
}
```

### 12.5.2 Expand Search Radius

> Quick action to reach more owners

```
POST /requests/{request_id}/expand
```

**Request Body:**

```json
{
  "new_radius_km": 50
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `new_radius_km` | int | Yes | Must be > current radius, max 100 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "request_id": "req-uuid-001",
    "old_radius_km": 25,
    "new_radius_km": 50,
    "additional_owners_notified": 8,
    "total_owners_notified": 20
  },
  "message": "Search expanded to 50 km. 8 more owners notified."
}
```

### 12.5.3 Extend Expiry

```
POST /requests/{request_id}/extend
```

**Request Body:**

```json
{
  "extend_days": 3
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `extend_days` | int | Yes | 1-7 days |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "request_id": "req-uuid-001",
    "new_expires_at": "2026-03-22T23:59:59Z"
  },
  "message": "Request extended by 3 days."
}
```

### 12.5.4 Cancel Request

```
POST /requests/{request_id}/cancel
```

**Request Body:**

```json
{
  "reason": "found_equipment"
}
```

| Value | Label |
|-------|-------|
| `found_equipment` | Found equipment elsewhere |
| `no_longer_needed` | No longer needed |
| `dates_changed` | Dates changed |
| `other` | Other reason |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "req-uuid-001",
    "status": "cancelled",
    "cancelled_at": "2026-03-17T10:00:00Z"
  },
  "message": "Request cancelled."
}
```

---

## 12.6 Get Offers for Request

> Screen: RequestOffersDesign — List of offers from owners

```
GET /requests/{request_id}/offers
```

**Headers:** `Authorization: Bearer <token>`

**Response: 200**

```json
{
  "success": true,
  "data": {
    "request_id": "req-uuid-001",
    "request_number": "REQ-2026-03-0143",
    "offers": [
      {
        "id": "offer-uuid-001",
        "owner": {
          "id": "user-uuid-003",
          "full_name": "Harpreet Singh",
          "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png",
          "rating_avg": 4.7,
          "review_count": 24,
          "distance_km": 3.5,
          "member_since": "2024"
        },
        "equipment": {
          "id": "eq-uuid-001",
          "type": "tractor",
          "display_name": "Mahindra 475 DI",
          "horse_power": 50,
          "has_operator": true,
          "photo_url": "https://cdn.kisanyantra.in/eq/photo-1-thumb.jpg",
          "specs": "50 HP · Diesel · 2021 model"
        },
        "pricing": {
          "price_per_day": 2400,
          "duration_days": 4,
          "total": 9600,
          "payment_methods": ["cash", "upi"]
        },
        "includes": ["operator", "trailer_hitch", "insurance"],
        "message": "My tractor is in excellent condition. I can deliver it to your farm by 7 AM on Mar 20.",
        "status": "pending",
        "created_at": "2026-03-16T14:30:00Z"
      },
      {
        "id": "offer-uuid-002",
        "owner": {
          "id": "user-uuid-004",
          "full_name": "Suresh Kumar",
          "avatar_url": null,
          "rating_avg": 4.5,
          "review_count": 18,
          "distance_km": 8.2,
          "member_since": "2025"
        },
        "equipment": {
          "id": "eq-uuid-005",
          "type": "tractor",
          "display_name": "John Deere 5310",
          "horse_power": 55,
          "has_operator": true,
          "photo_url": null,
          "specs": "55 HP · Diesel · 2022 model"
        },
        "pricing": {
          "price_per_day": 2800,
          "duration_days": 4,
          "total": 11200,
          "payment_methods": ["cash"]
        },
        "includes": ["operator"],
        "message": "Available for your dates. Can bring trailer if needed.",
        "status": "pending",
        "created_at": "2026-03-16T16:00:00Z"
      }
    ]
  }
}
```

---

## 12.7 Accept Offer (Creates Booking)

> Screen: OfferDetailDesign → AcceptOfferDesign — Farmer reviews full offer detail and accepts

```
POST /requests/{request_id}/offers/{offer_id}/accept
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
  "payment_method": "cash",
  "farm_location": {
    "address": "Hinganghat, Wardha, Maharashtra",
    "lat": 20.5488,
    "lng": 78.8438
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `payment_method` | string | Yes | `cash` or `upi` |
| `farm_location` | object | No | Override delivery location (defaults to request location) |

**Response: 201**

This creates a new Booking from the accepted offer. The request status changes to `fulfilled`.

```json
{
  "success": true,
  "data": {
    "request": {
      "id": "req-uuid-001",
      "status": "fulfilled",
      "fulfilled_at": "2026-03-17T10:00:00Z"
    },
    "booking": {
      "id": "bk-uuid-new",
      "booking_number": "BK-2026-03-0901",
      "status": "confirmed",
      "equipment": {
        "id": "eq-uuid-001",
        "display_name": "Mahindra 475 DI",
        "type": "tractor"
      },
      "owner": {
        "id": "user-uuid-003",
        "full_name": "Harpreet Singh",
        "phone": "+919876543210"
      },
      "start_date": "2026-03-20",
      "end_date": "2026-03-23",
      "duration_days": 4,
      "total_amount": 9600,
      "payment_method": "cash"
    },
    "other_offers_declined": 2
  },
  "message": "Offer accepted! Booking created. Other offers have been automatically declined."
}
```

**Side effects:**
- Request status → `fulfilled`
- All other pending offers for this request → auto-declined
- Request removed from public Equipment Opportunities listing
- Owner receives booking confirmation notification
- Farmer redirected to booking detail screen

---

## 12.8 Decline Offer

> Screen: OfferDetailDesign — "Decline" button

```
POST /requests/{request_id}/offers/{offer_id}/decline
```

**Request Body:**

```json
{
  "reason": "too_expensive"
}
```

| Value | Label |
|-------|-------|
| `too_expensive` | Price too high |
| `too_far` | Too far away |
| `wrong_equipment` | Equipment doesn't match needs |
| `other` | Other reason |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "offer_id": "offer-uuid-002",
    "status": "declined"
  },
  "message": "Offer declined."
}
```

---

## 12.9 Request Expired & Repost

> Screen: RequestExpiredDesign — Expired request with repost options and tips

When a request reaches its `expires_at` timestamp without being fulfilled, it transitions to `expired` status. The RequestExpiredDesign screen shows the expired request summary and offers the farmer options to repost.

### Get Expired Request Detail

Uses the same `GET /requests/{request_id}` endpoint (section 12.3). The response will have `status: "expired"` and the `actions` object will indicate repost options:

```json
{
  "success": true,
  "data": {
    "id": "req-uuid-expired",
    "request_number": "RQ-2025-03-001",
    "status": "expired",
    "equipment_type": "tractor",
    "horse_power_range": "50 HP",
    "start_date": "2026-03-20",
    "end_date": "2026-03-23",
    "duration_days": 4,
    "location": {
      "address": "Hinganghat, Wardha",
      "lat": 20.5488,
      "lng": 78.8438
    },
    "search_radius_km": 25,
    "owners_notified": 12,
    "offers_count": 0,
    "expires_at": "2026-03-20T00:00:00Z",
    "created_at": "2026-03-18T10:00:00Z",

    "actions": {
      "can_edit": false,
      "can_cancel": false,
      "can_expand_radius": false,
      "can_extend_expiry": false,
      "can_view_offers": false,
      "can_repost": true,
      "can_repost_wider": true,
      "suggested_wider_radius_km": 50
    }
  }
}
```

### 12.9.1 Repost Request (Same Parameters)

> CTA: "Repost Request" — Creates a new request with the same parameters as the expired one

```
POST /requests/{request_id}/repost
```

**Headers:** `Authorization: Bearer <token>`

**Request Body (optional overrides):**

```json
{
  "start_date": "2026-03-25",
  "end_date": "2026-03-28"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start_date` | date | No | New start date (must be today or future). Defaults to original + days elapsed. |
| `end_date` | date | No | New end date. Defaults to maintain original duration. |
| `search_radius_km` | int | No | Override radius. Defaults to original (25 km). |

**Response: 201**

```json
{
  "success": true,
  "data": {
    "id": "req-uuid-new",
    "request_number": "REQ-2026-03-0188",
    "status": "searching",
    "original_request_id": "req-uuid-expired",
    "equipment_type": "tractor",
    "horse_power_range": "50 HP",
    "start_date": "2026-03-25",
    "end_date": "2026-03-28",
    "duration_days": 4,
    "search_radius_km": 25,
    "owners_notified": 12,
    "expires_at": "2026-03-24T23:59:59Z",
    "created_at": "2026-03-20T10:00:00Z"
  },
  "message": "Request reposted! 12 nearby owners have been notified."
}
```

### 12.9.2 Repost with Wider Radius

> CTA: "Repost with wider radius (50 km)" — Same as repost but with expanded search area

```
POST /requests/{request_id}/repost
```

**Request Body:**

```json
{
  "search_radius_km": 50
}
```

Response is the same as 12.9.1, but `search_radius_km` will be `50` and `owners_notified` will include the wider area.

### UI Mapping for RequestExpiredDesign

| UI Element | Source Field |
|-----------|-------------|
| Header "Request Expired" | Static text (saffron gradient header) |
| ⏰ icon + expired message | `status == "expired"` |
| Request number badge | `request_number` |
| Equipment row (🚜 50 HP Tractor) | `equipment_type` + `horse_power_range` |
| Location row | `location.address` |
| Dates row | `start_date`, `end_date`, `duration_days` |
| Radius row | `search_radius_km` |
| EXPIRED badge (red) | `status` |
| "Posted on... · Expired on..." | `created_at`, `expires_at` |
| Tips section | Static content (saffron-pale background) |
| "Repost Request" CTA (saffron gradient) | `POST /requests/{id}/repost` |
| "Repost with wider radius (50 km)" link | `POST /requests/{id}/repost` with `search_radius_km: 50` |
| "Search Equipment Instead" link | Navigate to search screen |
| "Back to Home" link | Navigate to home screen |

---

## Request Status State Machine

```
        ┌────────────┐
        │  searching  │  (initial — owners notified)
        └─────┬──────┘
              │
     ┌────────┼────────┐
     │        │        │
     ▼        ▼        ▼
┌─────────┐ ┌────────────────┐ ┌──────────┐
│cancelled│ │offers_received │ │ expired  │
└─────────┘ └───────┬────────┘ └──────────┘
                    │
              ┌─────┼─────┐
              │           │
              ▼           ▼
        ┌──────────┐ ┌─────────┐
        │fulfilled │ │cancelled│
        └──────────┘ └─────────┘
```

- `searching` — Request just posted, waiting for owner offers
- `offers_received` — At least one offer has arrived
- `fulfilled` — Farmer accepted an offer, booking created
- `expired` — Request expired without being fulfilled (configurable TTL, default 3 days before start_date)
- `cancelled` — Farmer manually cancelled

---

## Data Model: Request

```
Request
├── id (UUID)
├── request_number (REQ-YYYY-MM-XXXX)
├── farmer_id → User
├── status (searching | offers_received | fulfilled | cancelled | expired)
├── equipment_type (tractor | harvester | cultivator | pump)
├── horse_power_min, horse_power_max
├── start_date, end_date
├── duration_days
├── budget_per_day, budget_max_total
├── needs_operator (bool)
├── location (lat, lng, address)
├── search_radius_km
├── notes (max 500 chars)
├── voice_message_url
├── preferred_contact (whatsapp | call | in_app)
├── owners_notified (int)
├── offers_count (int)
├── accepted_offer_id → Offer (nullable)
├── booking_id → Booking (nullable, set when fulfilled)
├── expires_at (timestamp)
├── cancelled_at, cancelled_reason
├── fulfilled_at
└── created_at, updated_at
```

---

## Backend Implementation Notes

1. **Request number**: Generate as `REQ-YYYY-MM-XXXX` (zero-padded sequential per month).
2. **Owner notification**: On request creation, query all equipment owners within `search_radius_km` who have equipment matching `equipment_type`. Send push notification to each (see `13-offers.md` for the owner-side notification design).
3. **Expiry**: Set `expires_at` to 1 day before `start_date` (configurable). Use a background worker to auto-expire stale requests.
4. **Radius expansion**: When farmer expands radius, compute new owners (not previously notified) and send push only to them.
5. **Auto-decline**: When farmer accepts an offer, auto-decline all other pending offers for the same request with reason `request_fulfilled`.
6. **Request → Booking conversion**: When offer is accepted, create a Booking record using the offer's equipment, pricing, and dates. Link `request.booking_id` to the new booking.
7. **Rate limiting**: Max 3 active requests per farmer. Max 1 request per equipment type per farmer at a time.
8. **Public listing removal**: When a request is fulfilled/cancelled/expired, remove it from the Equipment Opportunities feed served to owners.
9. **Repost**: `POST /requests/{id}/repost` copies all fields from the expired request into a new request, adjusting dates forward. Link `original_request_id` for audit trail. Subject to same rate limits (max 3 active requests).
10. **Repost with wider radius**: Same as repost but overrides `search_radius_km`. The `suggested_wider_radius_km` in the expired request response should be 2x the original radius, capped at 100 km.

## Flutter Implementation Notes

1. **Post Request Form**: Fields for equipment type (chip selector), date range (calendar), budget (slider or input), location (auto-detect + manual edit), notes (textarea), voice message (record button).
2. **Phone Verification (guest)**: Inline phone + OTP screens that appear before request submission. After verification, auto-submit the request with the new token.
3. **Request Confirmed Screen**: Saffron gradient header with checkmark animation, request number, "What Happens Next" steps.
4. **My Requests**: Tab in the Bookings screen (segmented control: Bookings | Requests). Active requests show offer count badge.
5. **Request Status Timeline**: Vertical timeline (same pattern as booking tracking). Current step has pulse animation.
6. **Manage Request**: Action buttons for Expand Radius, Extend Expiry, Edit, Cancel. Expand shows distance slider.
7. **Offers List**: Cards showing owner avatar, equipment photo, price, distance, rating. Sort by price or distance.
8. **Request Fulfilled**: Success screen with confetti, booking link, "Your request has been removed from public listings" note.
9. **Request Expired (RequestExpiredDesign)**: Saffron gradient header. ⏰ icon in saffron-pale circle. Expired message + request number badge. Request summary card (equipment, location, dates, radius) with muted opacity. EXPIRED badge in red (#FFEAEA bg, #CC3333 text). Tips card with saffron-pale background (expand radius, flexible dates, weekday posting). CTAs: "Repost Request" (saffron gradient primary), "Repost with wider radius (50 km)" (saffron text link), "Search Equipment Instead" (secondary), "Back to Home" (secondary).
