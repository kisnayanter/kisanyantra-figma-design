# Module 13: Owner Offers & Equipment Opportunities

> Screens: OwnerNearbyRequestAlertDesign, EquipmentOpportunitiesDesign, SendOfferDesign, OfferSentConfirmDesign, OfferDetailDesign (farmer side)

---

## Overview

This module covers the **owner side** of the request-offer flow. When a farmer posts an equipment request (Module 12), nearby owners are notified and can:

1. **Receive a push notification** about the nearby request
2. **Browse Equipment Opportunities** — a feed of farmer requests in their area
3. **Send an Offer** — specify equipment, pricing, and a personal message
4. **Track offer status** — waiting for response, accepted, declined

When the farmer accepts an offer, a booking is auto-created (see Module 12, Section 12.7).

---

## Flow Summary

```
Owner Flow:
  Push Notification (Nearby Request Alert)
    → Equipment Opportunities List (all active farmer requests nearby)
    → Request Detail (farmer's requirements)
    → Send Offer Form (select equipment, set price, add message)
    → Offer Sent Confirmation (summary + what happens next)
    → Wait for farmer response

Farmer Side (cross-reference):
  Receives notification → Views Offer Detail → Accept / Decline
  Accept → Booking Created (both parties notified)
  Decline → Owner notified, can offer on other requests
```

---

## 13.1 Get Nearby Equipment Opportunities (Owner)

> Screen: EquipmentOpportunitiesDesign — List of farmer requests in the owner's area

```
GET /opportunities
```

**Headers:** `Authorization: Bearer <token>` (owner)

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `lat` | float | null | Owner's current latitude |
| `lng` | float | null | Owner's current longitude |
| `radius_km` | int | 100 | Max search radius |
| `equipment_type` | string | null | Filter by type: `tractor`, `harvester`, `cultivator`, `pump` |
| `sort_by` | string | `nearest` | `nearest`, `newest`, `highest_budget`, `soonest` |
| `cursor` | string | null | Pagination cursor |
| `limit` | int | 20 | Max 50 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "total_count": 5,
    "opportunities": [
      {
        "request_id": "req-uuid-001",
        "request_number": "REQ-2026-03-0143",
        "farmer": {
          "id": "user-uuid-001",
          "full_name": "Ramu Kisan",
          "avatar_url": null,
          "rating_avg": 4.7,
          "village": "Hinganghat",
          "district": "Wardha"
        },
        "equipment_type": "tractor",
        "horse_power_range": "40-60 HP",
        "start_date": "2026-03-20",
        "end_date": "2026-03-23",
        "duration_days": 4,
        "budget_per_day": 2500,
        "needs_operator": true,
        "location": {
          "address": "Hinganghat, Wardha",
          "distance_km": 3.5
        },
        "notes": "Need for ploughing 10 acres of cotton field",
        "offers_count": 2,
        "has_my_offer": false,
        "expires_at": "2026-03-19T23:59:59Z",
        "posted_ago": "2 hours ago",
        "created_at": "2026-03-16T10:00:00Z"
      }
    ],
    "pagination": {
      "next_cursor": null,
      "has_more": false,
      "total_count": 5
    }
  }
}
```

---

## 13.2 Get Opportunity Detail (Owner)

> Owner taps an opportunity to see full farmer request detail before sending offer

```
GET /opportunities/{request_id}
```

**Headers:** `Authorization: Bearer <token>` (owner)

**Response: 200**

```json
{
  "success": true,
  "data": {
    "request_id": "req-uuid-001",
    "request_number": "REQ-2026-03-0143",
    "farmer": {
      "id": "user-uuid-001",
      "full_name": "Ramu Kisan",
      "avatar_url": null,
      "rating_avg": 4.7,
      "review_count": 12,
      "village": "Hinganghat",
      "district": "Wardha",
      "state": "Maharashtra",
      "member_since": "2025",
      "total_bookings": 8
    },
    "requirements": {
      "equipment_type": "tractor",
      "horse_power_range": "40-60 HP",
      "needs_operator": true,
      "notes": "Need for ploughing 10 acres of cotton field"
    },
    "schedule": {
      "start_date": "2026-03-20",
      "end_date": "2026-03-23",
      "duration_days": 4
    },
    "budget": {
      "per_day": 2500,
      "max_total": 10000
    },
    "location": {
      "address": "Hinganghat, Wardha, Maharashtra",
      "lat": 20.5488,
      "lng": 78.8438,
      "distance_km": 3.5
    },
    "competition": {
      "total_offers": 2,
      "has_my_offer": false
    },
    "my_matching_equipment": [
      {
        "id": "eq-uuid-001",
        "display_name": "Mahindra 475 DI",
        "type": "tractor",
        "horse_power": 50,
        "has_operator": true,
        "price_per_day": 2400,
        "is_available": true,
        "photo_url": "https://cdn.kisanyantra.in/eq/photo-1-thumb.jpg",
        "rating_avg": 4.8
      }
    ],
    "expires_at": "2026-03-19T23:59:59Z",
    "created_at": "2026-03-16T10:00:00Z"
  }
}
```

**Note:** `my_matching_equipment` is pre-filtered server-side — only the owner's equipment that matches the request's `equipment_type` and `horse_power_range` and is currently available.

---

## 13.3 Send Offer (Owner → Farmer)

> Screen: SendOfferDesign — Owner selects equipment, sets price, writes message

```
POST /opportunities/{request_id}/offers
```

**Headers:** `Authorization: Bearer <token>` (owner)

**Request Body:**

```json
{
  "equipment_id": "eq-uuid-001",
  "price_per_day": 2400,
  "total_price": 9600,
  "includes": ["operator", "trailer_hitch", "insurance"],
  "delivery_time": "07:00",
  "message": "My tractor is in excellent condition. I can deliver it to your farm by 7 AM on Mar 20. Let me know if you need the trailer attachment.",
  "payment_methods_accepted": ["cash", "upi"]
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `equipment_id` | UUID | Yes | Must be owner's equipment, matching type |
| `price_per_day` | int | Yes | INR, min 500 |
| `total_price` | int | No | Auto-calculated as `price_per_day × duration_days` if omitted |
| `includes` | string[] | No | `operator`, `trailer_hitch`, `insurance`, `fuel`, `maintenance` |
| `delivery_time` | string | No | HH:MM format |
| `message` | string | No | Max 500 chars, personal note to farmer |
| `payment_methods_accepted` | string[] | Yes | `cash`, `upi` |

**Response: 201**

```json
{
  "success": true,
  "data": {
    "offer_id": "offer-uuid-001",
    "offer_number": "OFR-2026-03-0089",
    "request_id": "req-uuid-001",
    "status": "pending",
    "equipment": {
      "id": "eq-uuid-001",
      "display_name": "Mahindra 475 DI"
    },
    "pricing": {
      "price_per_day": 2400,
      "duration_days": 4,
      "total": 9600
    },
    "farmer": {
      "full_name": "Ramu Kisan"
    },
    "created_at": "2026-03-16T14:30:00Z"
  },
  "message": "Offer sent to Ramu Kisan! You'll be notified when they respond."
}
```

**Error Responses:**

- `400` — Equipment doesn't match request type
- `409` — Owner already sent an offer for this request
- `403` — Equipment not owned by this user
- `404` — Request not found or expired

---

## 13.4 Get My Sent Offers (Owner)

> Owner can track status of all offers they've sent

```
GET /offers/sent
```

**Headers:** `Authorization: Bearer <token>` (owner)

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | string | `all` | `pending`, `accepted`, `declined`, `expired`, `all` |
| `cursor` | string | null | Pagination |
| `limit` | int | 20 | Max 50 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "summary": {
      "pending": 2,
      "accepted": 5,
      "declined": 3,
      "total": 10
    },
    "offers": [
      {
        "id": "offer-uuid-001",
        "offer_number": "OFR-2026-03-0089",
        "request_number": "REQ-2026-03-0143",
        "farmer": {
          "full_name": "Ramu Kisan",
          "village": "Hinganghat"
        },
        "equipment": {
          "display_name": "Mahindra 475 DI"
        },
        "pricing": {
          "price_per_day": 2400,
          "total": 9600
        },
        "status": "pending",
        "created_at": "2026-03-16T14:30:00Z"
      }
    ],
    "pagination": {
      "next_cursor": null,
      "has_more": false
    }
  }
}
```

---

## 13.5 Owner Nearby Request Notifications

> Screen: OwnerNearbyRequestAlertDesign — Push notification + alert center card

When a farmer posts a request, all matching owners within the search radius receive a push notification.

### Notification Payload (FCM)

```json
{
  "notification": {
    "title": "New Equipment Request Nearby!",
    "body": "Ramu Kisan needs a 50 HP Tractor in Hinganghat (3.5 km away) — ₹2,500/day budget"
  },
  "data": {
    "type": "nearby_request",
    "notification_id": "notif-uuid-020",
    "request_id": "req-uuid-001",
    "click_action": "EQUIPMENT_OPPORTUNITIES"
  }
}
```

### Notification Record

Add to Notification Types (see `09-notifications.md`):

| Type | Category | Trigger | Actionable |
|------|----------|---------|------------|
| `nearby_request` | opportunities | Farmer posts equipment request within owner's radius | Yes (View & Send Offer) |
| `offer_accepted` | opportunities | Farmer accepts owner's offer | No (redirects to booking) |
| `offer_declined` | opportunities | Farmer declines owner's offer | No |
| `request_expired` | opportunities | Request expired before any offer was accepted | No |

---

## 13.6 Get Offer Detail (Farmer Side)

> Screen: OfferDetailDesign — Farmer views full offer from owner with Accept/Decline

```
GET /requests/{request_id}/offers/{offer_id}
```

**Headers:** `Authorization: Bearer <token>` (farmer)

**Response: 200**

```json
{
  "success": true,
  "data": {
    "offer_id": "offer-uuid-001",
    "offer_number": "OFR-2026-03-0089",
    "status": "pending",

    "owner": {
      "id": "user-uuid-003",
      "full_name": "Harpreet Singh",
      "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png",
      "rating_avg": 4.7,
      "review_count": 24,
      "member_since": "2024",
      "village": "Ludhiana",
      "distance_km": 3.5,
      "phone": "+919876543210",
      "whatsapp": "+919876543210"
    },

    "equipment": {
      "id": "eq-uuid-001",
      "type": "tractor",
      "display_name": "Mahindra 475 DI",
      "horse_power": 50,
      "year_of_purchase": 2021,
      "fuel_type": "diesel",
      "has_operator": true,
      "photo_url": "https://cdn.kisanyantra.in/eq/photo-1.jpg",
      "rating_avg": 4.8,
      "specs": "50 HP · Diesel · 2021 model"
    },

    "pricing": {
      "price_per_day": 2400,
      "duration_days": 4,
      "dates": "Mar 20 – Mar 23",
      "total": 9600,
      "breakdown": "₹2,400 × 4 days",
      "payment_methods": ["cash", "upi"]
    },

    "includes": [
      { "key": "operator", "label": "Operator included" },
      { "key": "trailer_hitch", "label": "Trailer hitch available" },
      { "key": "insurance", "label": "Insurance covered" }
    ],

    "message": "My tractor is in excellent condition. I can deliver it to your farm by 7 AM on Mar 20. Let me know if you need the trailer attachment.",
    "delivery_time": "07:00",

    "created_at": "2026-03-16T14:30:00Z"
  }
}
```

---

## Offer Status State Machine

```
     ┌─────────┐
     │ pending  │  (owner sent, waiting for farmer)
     └────┬────┘
          │
   ┌──────┼──────┐
   │      │      │
   ▼      ▼      ▼
┌────────┐ ┌────────┐ ┌─────────────────┐
│accepted│ │declined│ │request_fulfilled │
└────────┘ └────────┘ └─────────────────┘
                        (auto-declined when
                         another offer accepted)
```

- `pending` — Offer sent, farmer hasn't responded
- `accepted` — Farmer accepted this offer → booking created
- `declined` — Farmer explicitly declined
- `request_fulfilled` — Another offer for the same request was accepted (auto-decline)
- `expired` — Request expired before farmer responded

---

## Data Model: Offer

```
Offer
├── id (UUID)
├── offer_number (OFR-YYYY-MM-XXXX)
├── request_id → Request
├── owner_id → User
├── equipment_id → Equipment
├── status (pending | accepted | declined | request_fulfilled | expired)
├── price_per_day (INR)
├── total_price (INR)
├── includes[] (operator, trailer_hitch, insurance, fuel, maintenance)
├── delivery_time (HH:MM)
├── message (max 500 chars)
├── payment_methods_accepted[] (cash, upi)
├── decline_reason (nullable)
├── booking_id → Booking (nullable, set when accepted)
├── responded_at (timestamp, nullable)
└── created_at, updated_at
```

---

## Cross-Module Flow: Complete Request → Offer → Booking Pipeline

```
┌──────────────────────────────────────────────────────────────────┐
│                        FARMER SIDE                               │
│                                                                  │
│  Search Empty → Post Request → Phone Verify → Request Confirmed  │
│       ↓                                                          │
│  My Requests → Track Status → View Offers → Offer Detail         │
│       ↓                                                          │
│  Accept Offer → Booking Created → Booking Lifecycle (Module 5-6) │
└──────────────────────────────────────────────────────────────────┘
                    ↕ (notifications)
┌──────────────────────────────────────────────────────────────────┐
│                        OWNER SIDE                                │
│                                                                  │
│  Push Notification (Nearby Request)                              │
│       ↓                                                          │
│  Equipment Opportunities → Request Detail → Send Offer           │
│       ↓                                                          │
│  Offer Sent Confirmation → Wait for Response                     │
│       ↓                                                          │
│  Offer Accepted → Booking Created → Booking Lifecycle (Module 6) │
└──────────────────────────────────────────────────────────────────┘
```

---

## Backend Implementation Notes

1. **Matching algorithm**: When querying opportunities for an owner, match by `equipment_type` and filter to requests within `search_radius_km` of the owner's equipment location. Pre-compute owner→equipment geohash for efficient spatial joins.
2. **One offer per owner per request**: Enforce unique constraint on `(request_id, owner_id)`.
3. **Auto-decline on accept**: When farmer accepts any offer, update all other `pending` offers for the same request to `request_fulfilled` status and notify each owner.
4. **Offer → Booking conversion**: Create a Booking record with:
   - `equipment_id` from the offer
   - `farmer_id` from the request
   - `owner_id` from the offer
   - Dates from the request
   - Pricing from the offer
   - `booking_type: "from_offer"` (to distinguish from direct bookings)
5. **Notification fan-out**: When a farmer posts a request, fan out push notifications to all matching owners asynchronously (use task queue). Include request summary and distance in the notification body.
6. **Equipment Opportunities feed**: Serve only `searching` and `offers_received` requests. Exclude fulfilled/cancelled/expired. Sort by distance from owner's equipment locations.
7. **Response time tracking**: Track average response time for owners. Display "Usually responds within X hours" on the OfferSentConfirmDesign screen.

## Flutter Implementation Notes

1. **OwnerNearbyRequestAlertDesign**: Shows push notification banner at top, then the request detail card with "Send Offer" CTA. Highlight distance and budget prominently.
2. **EquipmentOpportunitiesDesign**: Cards showing farmer avatar, equipment type needed, dates, budget, distance. Badge for "NEW" requests posted in last 2 hours. Filter chips for equipment type.
3. **SendOfferDesign**: Pre-fill with owner's matching equipment. Price input with suggestion ("Farmer's budget: ₹2,500/day"). Includes checkboxes (operator, trailer, insurance). Message textarea. "Send Offer" CTA with green gradient.
4. **OfferSentConfirmDesign**: Green gradient success header with 📩 icon. Summary table. "What Happens Next" card with 3 steps. "Back to Opportunities" button.
5. **OfferDetailDesign (farmer)**: Saffron header. Owner profile card with Call/WhatsApp buttons. Equipment detail with specs chips. Pricing breakdown. Owner's message in cream-colored card. Bottom buttons: Decline (red) + Accept Offer (green).
6. **Transition animations**: When farmer accepts offer, animate from OfferDetail → AcceptOfferDesign → BookingConfirmDesign with success confetti.
