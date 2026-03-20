# Module 5: Booking

> Screens: BookEquipmentDesign, BookingPhoneVerifyDesign, BookingOTPDesign, BookingConfirmDesign, CancelBookingConfirmDesign, BookingRequestDesign (owner), CancelBookingDesign, RescheduleBookingDesign, CompleteBookingDesign, AcceptOfferDesign

---

## Flow Summary

```
Farmer Side (Direct Booking):
  Equipment Detail → Book Equipment (BookEquipmentDesign, calendar + date/time selection)
  → Phone Verify (BookingPhoneVerifyDesign) → OTP (BookingOTPDesign)
  → Booking Confirmed (BookingConfirmDesign)
  → Owner Accepts → In Progress → Complete → Rate

Farmer Side (From Offer):
  Request Posted → Owner Sends Offer → Farmer Views Offer (OfferDetailDesign)
  → Accept Offer (AcceptOfferDesign) → Booking Created (auto-confirmed)

Owner Side:
  Incoming Request (IncomingRequestsListDesign) → Review (BookingRequestDesign)
  → Accept / Decline → Equipment in Use → Booking Complete

Cancellation:
  Either party → Cancel with reason → Refund calculated → Cancelled
  → CancelBookingConfirmDesign (confirmation screen with refund details, owner notified, equipment released)

Reschedule:
  Farmer requests → New dates/duration → Owner approval required → Rescheduled
```

---

## 5.1 Create Booking (Farmer)

> From EquipmentDetailDesign — "Book Instantly" or "Request" button

```
POST /bookings
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
  "equipment_id": "eq-uuid-001",
  "booking_type": "instant",
  "start_date": "2025-07-10",
  "end_date": "2025-07-12",
  "start_time": "08:00",
  "duration_days": 3,
  "payment_method": "cash",
  "farm_location": {
    "address": "Hinganghat, Wardha, Maharashtra",
    "lat": 20.5488,
    "lng": 78.8438
  },
  "voice_message": null,
  "notes": "Need for ploughing work"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `equipment_id` | UUID | Yes | Equipment to book |
| `booking_type` | string | Yes | `instant` (auto-confirmed) or `request` (needs owner approval) |
| `start_date` | date | Yes | YYYY-MM-DD format |
| `end_date` | date | Yes | Must be >= start_date |
| `start_time` | string | No | HH:MM (24hr), default "08:00" |
| `duration_days` | int | Yes | 1-30 |
| `payment_method` | string | Yes | `cash` or `upi` |
| `farm_location.address` | string | Yes | Delivery address |
| `farm_location.lat` | float | Yes | Latitude |
| `farm_location.lng` | float | Yes | Longitude |
| `voice_message` | file | No | Audio file (voice message for owner) |
| `notes` | string | No | Max 500 chars |

**Response: 201**

```json
{
  "success": true,
  "data": {
    "id": "bk-uuid-001",
    "booking_number": "BK-2025-07-0834",
    "status": "confirmed",
    "equipment": {
      "id": "eq-uuid-001",
      "display_name": "Mahindra 475 DI",
      "type": "tractor",
      "horse_power": 50,
      "photo_url": "https://cdn.kisanyantra.in/eq/photo-1-thumb.jpg"
    },
    "owner": {
      "id": "user-uuid-003",
      "full_name": "Harpreet Singh",
      "phone": "+919876543210"
    },
    "start_date": "2025-07-10",
    "end_date": "2025-07-12",
    "start_time": "08:00",
    "duration_days": 3,
    "total_amount": 7200,
    "price_breakdown": {
      "price_per_day": 2400,
      "days": 3,
      "subtotal": 7200,
      "platform_fee": 0,
      "total": 7200
    },
    "payment_method": "cash",
    "payment_status": "pending",
    "farm_location": {
      "address": "Hinganghat, Wardha, Maharashtra",
      "lat": 20.5488,
      "lng": 78.8438
    },
    "created_at": "2025-07-05T14:30:00Z"
  },
  "message": "Booking confirmed!"
}
```

For `booking_type: "request"`, status will be `"pending"` instead of `"confirmed"`.

**Error Responses:**

- `400` — Invalid dates or equipment not available
- `409` — Equipment already booked for those dates
- `404` — Equipment not found

---

## 5.2 Accept / Decline Booking (Owner)

> Screen: BookingRequestDesign — Owner reviews incoming request

```
PATCH /bookings/{booking_id}/respond
```

**Headers:** `Authorization: Bearer <token>` (owner's token)

**Request Body:**

```json
{
  "action": "accept",
  "message": "Equipment will be ready by 7:30 AM"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `action` | string | Yes | `accept` or `decline` |
| `message` | string | No | Optional message to farmer |
| `decline_reason` | string | If decline | Reason for declining |

**Response: 200 (Accept)**

```json
{
  "success": true,
  "data": {
    "id": "bk-uuid-001",
    "booking_number": "BK-2025-07-0834",
    "status": "confirmed",
    "confirmed_at": "2025-07-05T15:00:00Z"
  },
  "message": "Booking accepted"
}
```

**Response: 200 (Decline)**

```json
{
  "success": true,
  "data": {
    "id": "bk-uuid-001",
    "status": "declined",
    "declined_at": "2025-07-05T15:00:00Z",
    "decline_reason": "Equipment under maintenance"
  },
  "message": "Booking declined"
}
```

---

## 5.3 Cancel Booking

> Screen: CancelBookingDesign

```
POST /bookings/{booking_id}/cancel
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
  "reason": "weather_conditions",
  "additional_comments": "Heavy rain expected, postponing farm work",
  "confirm_policy_accepted": true
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reason` | string | Yes | One of predefined reasons (see below) |
| `additional_comments` | string | No | Max 500 chars |
| `confirm_policy_accepted` | bool | Yes | Must be true |

**Cancellation Reasons:**

| Value | Label |
|-------|-------|
| `weather_conditions` | Weather conditions not suitable |
| `found_alternative` | Found alternative equipment |
| `farm_work_postponed` | Farm work postponed |
| `personal_emergency` | Personal emergency |
| `other` | Other reason |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "bk-uuid-001",
    "booking_number": "BK-2025-07-0834",
    "status": "cancelled",
    "cancellation": {
      "reason": "weather_conditions",
      "cancelled_at": "2025-07-08T10:00:00Z",
      "cancelled_by": "farmer",
      "refund": {
        "total_amount": 7200,
        "cancellation_fee": 720,
        "processing_fee": 180,
        "refund_amount": 6300,
        "refund_method": "original_payment_method",
        "estimated_refund_days": 5
      }
    }
  },
  "message": "Booking cancelled. Refund of ₹6,300 will be processed in 5-7 working days."
}
```

---

## 5.3b Cancellation Confirmation Response

> Screen: CancelBookingConfirmDesign — Shown after successful cancellation

The cancel booking response (5.3) is used to render the CancelBookingConfirmDesign screen, which displays:

**UI Elements from Response:**

| UI Element | Source Field |
|-----------|-------------|
| Booking number | `data.booking_number` (e.g. "BK-2025-07-0834") |
| Status badge | `data.status` → "CANCELLED" in red |
| Equipment name | `data.equipment.display_name` (from booking detail) |
| Owner name | `data.owner.full_name` (from booking detail) |
| Original dates | `data.start_date` to `data.end_date` |
| Total amount | `data.total_amount` |
| Cancelled timestamp | `data.cancellation.cancelled_at` |
| Refund amount | `data.cancellation.refund.refund_amount` (e.g. ₹7,200) |
| Refund method | `data.cancellation.refund.refund_method` (e.g. "UPI · ****4521") |
| Estimated refund date | `data.cancellation.refund.estimated_refund_days` |
| Refund progress | Calculate from `cancelled_at` vs estimated completion |

**"What Happens Next" checklist (client-side):**
1. "Owner has been notified" ✅
2. "Equipment is now available for others" ✅
3. "Refund processing initiated" ✅

**CTAs:** "Search Equipment" (primary, saffron) → navigates to search. "Back to Home" (text link).

---

## 5.4 Get Cancellation Preview

> Before confirming cancellation, show the refund breakdown

```
GET /bookings/{booking_id}/cancel-preview
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "booking_id": "bk-uuid-001",
    "total_amount": 7200,
    "cancellation_policy": "24h_before",
    "cancellation_fee_percentage": 10,
    "cancellation_fee": 720,
    "processing_fee": 180,
    "refund_amount": 6300,
    "estimated_refund_days": 5,
    "policy_note": "Cancellation within 24 hours of start date incurs a 10% fee"
  }
}
```

---

## 5.5 Reschedule Booking

> Screen: RescheduleBookingDesign

### 5.5.1 Get Reschedule Options

```
GET /bookings/{booking_id}/reschedule-options
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "booking_id": "bk-uuid-001",
    "current": {
      "start_date": "2025-07-10",
      "end_date": "2025-07-12",
      "duration_days": 3,
      "total_amount": 7200
    },
    "available_dates": [
      { "date": "2025-07-08", "day": "Mon", "available": false },
      { "date": "2025-07-09", "day": "Tue", "available": false },
      { "date": "2025-07-10", "day": "Wed", "available": true, "current": true },
      { "date": "2025-07-11", "day": "Thu", "available": true },
      { "date": "2025-07-12", "day": "Fri", "available": true },
      { "date": "2025-07-13", "day": "Sat", "available": true },
      { "date": "2025-07-14", "day": "Sun", "available": false }
    ],
    "duration_options": [
      { "days": 1, "hours": 8, "price": 2400 },
      { "days": 2, "hours": 16, "price": 4800 },
      { "days": 3, "hours": 24, "price": 7200 },
      { "days": 5, "hours": 40, "price": 12000 },
      { "days": 7, "hours": 56, "price": 16800 }
    ],
    "time_slots": ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
    "requires_owner_approval": true,
    "owner_name": "Harpreet Singh"
  }
}
```

### 5.5.2 Submit Reschedule Request

```
POST /bookings/{booking_id}/reschedule
```

**Request Body:**

```json
{
  "new_start_date": "2025-07-13",
  "new_end_date": "2025-07-15",
  "new_start_time": "08:00",
  "new_duration_days": 3
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `new_start_date` | date | Yes | YYYY-MM-DD |
| `new_end_date` | date | Yes | YYYY-MM-DD |
| `new_start_time` | string | No | HH:MM (24hr) |
| `new_duration_days` | int | Yes | 1-30 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "bk-uuid-001",
    "status": "reschedule_pending",
    "reschedule": {
      "original": {
        "start_date": "2025-07-10",
        "end_date": "2025-07-12",
        "total_amount": 7200
      },
      "requested": {
        "start_date": "2025-07-13",
        "end_date": "2025-07-15",
        "total_amount": 7200
      },
      "price_difference": 0,
      "requires_owner_approval": true,
      "requested_at": "2025-07-08T10:00:00Z"
    }
  },
  "message": "Reschedule request sent to Harpreet Singh for approval"
}
```

---

## 5.6 Complete Booking

> Screen: CompleteBookingDesign — Mark booking as finished

```
POST /bookings/{booking_id}/complete
```

**Request Body:**

```json
{
  "actual_hours_used": 58,
  "completion_notes": "All work completed successfully"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `actual_hours_used` | int | No | Actual hours equipment was used |
| `completion_notes` | string | No | Max 500 chars |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "bk-uuid-001",
    "booking_number": "BK-2025-07-0834",
    "status": "completed",
    "completed_at": "2025-07-12T18:00:00Z",
    "service_details": {
      "duration_days": 3,
      "actual_hours_used": 58,
      "start_date": "2025-07-10",
      "end_date": "2025-07-12",
      "location": "Wardha, Maharashtra",
      "payment_status": "paid"
    },
    "receipt": {
      "id": "receipt-uuid-001",
      "download_url": "https://cdn.kisanyantra.in/receipts/BK-2025-07-0834.pdf"
    },
    "can_rate": true,
    "can_rebook": true
  },
  "message": "Booking completed successfully!"
}
```

---

## 5.7 Select Payment Method

> Screen: BookingConfirmDesign — Choose between Cash on Arrival and UPI

```
PATCH /bookings/{booking_id}/payment-method
```

**Request Body:**

```json
{
  "payment_method": "cash"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `payment_method` | string | Yes | `cash` or `upi` |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "booking_id": "bk-uuid-001",
    "payment_method": "cash",
    "payment_instructions": {
      "en": "Pay Harpreet directly on day 1",
      "hi": "पहले दिन हरप्रीत को सीधे भुगतान करें"
    }
  }
}
```

---

## Booking Status State Machine

```
                  ┌──────────────┐
                  │   pending    │ (request type only)
                  └──────┬───────┘
                         │
              ┌──────────┼──────────┐
              │          │          │
              ▼          ▼          ▼
         ┌─────────┐ ┌──────────┐ ┌──────────┐
         │declined │ │confirmed │ │ expired  │
         └─────────┘ └────┬─────┘ └──────────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
              ▼           ▼           ▼
        ┌───────────┐ ┌──────────┐ ┌─────────────────┐
        │ cancelled │ │in_progress│ │reschedule_pending│
        └───────────┘ └────┬─────┘ └────────┬────────┘
                           │                │
                           ▼                ▼
                     ┌───────────┐    (back to confirmed
                     │ completed │     or cancelled)
                     └───────────┘
```

---

## Backend Implementation Notes

1. **Booking number**: Generate as `BK-YYYY-MM-XXXX` where XXXX is a zero-padded sequential number per month.
2. **Instant booking**: If equipment supports instant booking, skip `pending` state and go directly to `confirmed`.
3. **Cancellation fees**: Configurable by time window — e.g., >48h = 0%, 24-48h = 10%, <24h = 25%.
4. **Reschedule**: Create a `RescheduleRequest` record. Owner must approve. If approved, update booking dates.
5. **Expiry**: Pending booking requests expire after configurable time (e.g., 2 hours). Use a background worker to auto-decline.
6. **Notifications**: Send push notifications on status changes (confirmed, declined, completed, cancelled).
7. **Receipt generation**: Generate PDF receipts on completion. Include QR code with booking ID.

## Flutter Implementation Notes

1. **Booking confirmation**: Show green gradient header with checkmark animation. Display booking number prominently.
2. **Payment selection**: Radio button style with Cash on Arrival pre-selected.
3. **Cancel flow**: Show refund calculation before confirming. Cancellation reasons are radio buttons with optional text input.
4. **Reschedule**: Show horizontal date picker, radio duration selector, and grid time slot picker.
5. **Complete**: Show success animation, service summary, and prompt to rate.
6. **WhatsApp share**: Use `url_launcher` to open WhatsApp with pre-formatted booking details.
