# KisanYantra API Documentation — Overview

> Voice-First Tractor & Equipment Rental Platform for Indian Farmers

## Purpose

This documentation defines the complete REST API contract for the KisanYantra platform. It is intended for:

- **Backend team (Python/FastAPI)** — to implement all endpoints
- **Frontend team (Flutter)** — to consume the APIs and build screens matching the Figma designs
- **QA** — to validate integration between frontend and backend

---

## Base URL

```
Production:  https://api.kisanyantra.in/v1
Staging:     https://staging-api.kisanyantra.in/v1
```

## Authentication

All authenticated endpoints require a Bearer token in the `Authorization` header:

```
Authorization: Bearer <access_token>
```

Tokens are obtained via the OTP-based phone authentication flow (see `01-auth-onboarding.md`).

### Token Format

- Access token: JWT, expires in 24 hours
- Refresh token: opaque, expires in 90 days

---

## Common Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Authorization` | Yes (except auth routes) | Bearer token |
| `Accept-Language` | No | `en`, `hi`, `ta`, `mr` — defaults to user's preference |
| `X-App-Version` | Yes | Flutter app version, e.g. `1.0.0` |
| `X-Device-ID` | Yes | Unique device identifier |

---

## Response Envelope

All responses follow this structure:

```json
{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully",
  "errors": null
}
```

Error responses:

```json
{
  "success": false,
  "data": null,
  "message": "Validation error",
  "errors": [
    { "field": "phone", "message": "Phone number is required" }
  ]
}
```

---

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request / Validation Error |
| 401 | Unauthorized (token invalid/expired) |
| 403 | Forbidden (insufficient permissions) |
| 404 | Resource Not Found |
| 409 | Conflict (duplicate resource) |
| 422 | Unprocessable Entity |
| 429 | Rate Limited |
| 500 | Internal Server Error |

---

## Pagination

List endpoints support cursor-based pagination:

```
GET /bookings?cursor=<last_id>&limit=20
```

Response includes:

```json
{
  "data": [...],
  "pagination": {
    "next_cursor": "abc123",
    "has_more": true,
    "total_count": 45
  }
}
```

---

## Supported Languages

| Code | Language | Script |
|------|----------|--------|
| `en` | English | Latin |
| `hi` | Hindi | Devanagari |
| `ta` | Tamil | Tamil |
| `mr` | Marathi | Devanagari |

The `Accept-Language` header controls response string localization. User's preferred language is stored in their profile.

---

## API Modules (Detailed Docs)

| # | Module | File | Description |
|---|--------|------|-------------|
| 1 | Auth & Onboarding | `01-auth-onboarding.md` | Phone auth, OTP, language selection |
| 2 | User Profile | `02-user-profile.md` | Profile setup (farmer/owner), update, avatar |
| 3 | Equipment | `03-equipment.md` | Listing, search, detail, availability |
| 4 | Search & Discovery | `04-search-discovery.md` | Search, filters, voice agent, suggestions |
| 5 | Booking | `05-booking.md` | Create, confirm, cancel, reschedule, complete |
| 6 | Booking Management | `06-booking-management.md` | My bookings, detail, status tracking, share |
| 7 | Payments | `07-payments.md` | Payment methods, earnings, refunds |
| 8 | Ratings & Reviews | `08-ratings-reviews.md` | Star ratings, tags, review text, photos |
| 9 | Notifications | `09-notifications.md` | Push, in-app, notification center, badges |
| 10 | Location & Maps | `10-location-maps.md` | Geocoding, distance, directions, tracking |
| 11 | Communication | `11-communication.md` | Contact owner, WhatsApp, call, messages |
| 12 | Equipment Requests | `12-equipment-requests.md` | Post request, manage, track, fulfill, phone verification |
| 13 | Offers | `13-offers.md` | Owner opportunities, send offer, farmer accept/decline |
| 14 | Profile, Settings & Help | `14-profile-settings.md` | Profile view, app settings, notifications, language, help & support |

---

## Data Model Summary

### Core Entities

```
User
├── id (UUID)
├── phone (+91...)
├── full_name
├── role (farmer | owner | both)
├── avatar_id
├── village, district, state
├── preferred_language (en|hi|ta|mr)
├── farm_size_acres (farmer)
├── equipment_preferences[] (farmer)
├── equipment_owned[] (owner)
├── bank_account (owner, optional)
└── created_at, updated_at

Equipment
├── id (UUID)
├── owner_id → User
├── type (tractor | harvester | cultivator | pump)
├── brand, model
├── year_of_purchase
├── horse_power
├── photos[] (up to 5)
├── price_per_hour, price_per_day
├── has_operator (bool)
├── is_available (bool)
├── location (lat, lng, address)
├── rating_avg, review_count
└── created_at, updated_at

Booking
├── id (UUID)
├── booking_number (BK-YYYY-MM-XXXX)
├── farmer_id → User
├── owner_id → User
├── equipment_id → Equipment
├── status (pending|confirmed|in_progress|completed|cancelled)
├── start_date, end_date
├── start_time
├── duration_days, duration_hours
├── total_amount
├── payment_method (cash | upi)
├── payment_status (pending|paid|refunded)
├── cancellation_reason
├── cancellation_fee
├── refund_amount
├── farm_location (lat, lng, address)
├── voice_message_url
└── created_at, updated_at

BookingTimeline
├── id
├── booking_id → Booking
├── status (booked|owner_accepted|equipment_ready|on_the_way|arrived|in_use|completed)
├── timestamp
└── description

Review
├── id (UUID)
├── booking_id → Booking
├── reviewer_id → User
├── reviewee_id → User
├── equipment_id → Equipment
├── overall_rating (1-5)
├── equipment_quality_rating
├── owner_behavior_rating
├── on_time_rating
├── value_for_money_rating
├── comment (max 300 chars)
├── tags[] (professional, on_time, good_equipment, etc.)
├── photos[]
└── created_at

Request
├── id (UUID)
├── request_number (REQ-YYYY-MM-XXXX)
├── farmer_id → User
├── status (searching|offers_received|fulfilled|cancelled|expired)
├── equipment_type (tractor|harvester|cultivator|pump)
├── horse_power_min, horse_power_max
├── start_date, end_date
├── duration_days
├── budget_per_day, budget_max_total
├── needs_operator (bool)
├── location (lat, lng, address)
├── search_radius_km
├── notes (max 500 chars)
├── voice_message_url
├── preferred_contact (whatsapp|call|in_app)
├── owners_notified (int)
├── offers_count (int)
├── accepted_offer_id → Offer (nullable)
├── booking_id → Booking (nullable)
├── expires_at
├── cancelled_at, cancelled_reason
├── fulfilled_at
└── created_at, updated_at

Offer
├── id (UUID)
├── offer_number (OFR-YYYY-MM-XXXX)
├── request_id → Request
├── owner_id → User
├── equipment_id → Equipment
├── status (pending|accepted|declined|request_fulfilled|expired)
├── price_per_day, total_price (INR)
├── includes[] (operator, trailer_hitch, insurance, fuel)
├── delivery_time (HH:MM)
├── message (max 500 chars)
├── payment_methods_accepted[] (cash, upi)
├── decline_reason (nullable)
├── booking_id → Booking (nullable)
├── responded_at (nullable)
└── created_at, updated_at

Notification
├── id (UUID)
├── user_id → User
├── type (booking_request|payment|booking_confirmed|rating_reminder|equipment_listed|payment_reminder|nearby_request|offer_accepted|offer_declined|request_expired)
├── title, body
├── data (JSON — contextual payload)
├── is_read (bool)
├── category (bookings|payments|messages|opportunities)
└── created_at
```
