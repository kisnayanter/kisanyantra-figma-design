# Module 6: Booking Management

> Screens: MyBookingsDesign, BookingDetailDesign, BookingStatusTrackingDesign, ShareBookingDetailsDesign

---

## Flow Summary

```
My Bookings → Tab: Active / Past
  → Booking Detail → Actions (Cancel, Reschedule, Share, Contact Owner, Map, Complete)
  → Status Tracking → Live timeline with current step
  → Share → WhatsApp / SMS / Copy Link / Email
```

---

## 6.1 List My Bookings

> Screen: MyBookingsDesign

```
GET /bookings
```

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | string | `active` | `active` (pending + confirmed + in_progress), `past` (completed + cancelled), `all` |
| `role` | string | auto | `farmer` or `owner` — defaults to user's active role |
| `cursor` | string | null | Pagination cursor |
| `limit` | int | 20 | Max 50 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "summary": {
      "active_count": 2,
      "completed_count": 8,
      "total_spent": 21000
    },
    "bookings": [
      {
        "id": "bk-uuid-001",
        "booking_number": "BK-2025-07-0834",
        "status": "confirmed",
        "equipment": {
          "id": "eq-uuid-001",
          "type": "tractor",
          "display_name": "Mahindra 475 DI",
          "photo_url": "https://cdn.kisanyantra.in/eq/photo-1-thumb.jpg"
        },
        "counterparty": {
          "id": "user-uuid-003",
          "full_name": "Harpreet Singh",
          "role": "owner"
        },
        "start_date": "2025-07-10",
        "end_date": "2025-07-12",
        "total_amount": 7200,
        "payment_status": "pending",
        "days_until_start": 2,
        "created_at": "2025-07-05T14:30:00Z"
      },
      {
        "id": "bk-uuid-002",
        "booking_number": "BK-2025-07-0835",
        "status": "pending",
        "equipment": {
          "id": "eq-uuid-002",
          "type": "harvester",
          "display_name": "Harvester Combine",
          "photo_url": null
        },
        "counterparty": {
          "id": "user-uuid-004",
          "full_name": "Suresh Kumar",
          "role": "owner"
        },
        "start_date": "2025-07-15",
        "end_date": "2025-07-17",
        "total_amount": 14400,
        "payment_status": "pending",
        "days_until_start": 7,
        "created_at": "2025-07-06T10:00:00Z"
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

## 6.2 Get Booking Detail

> Screen: BookingDetailDesign

```
GET /bookings/{booking_id}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "bk-uuid-001",
    "booking_number": "BK-2025-07-0834",
    "status": "confirmed",

    "equipment": {
      "id": "eq-uuid-001",
      "type": "tractor",
      "display_name": "Mahindra 475 DI",
      "horse_power": 50,
      "photo_url": "https://cdn.kisanyantra.in/eq/photo-1.jpg"
    },

    "owner": {
      "id": "user-uuid-003",
      "full_name": "Harpreet Singh",
      "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png",
      "phone": "+919876543210",
      "whatsapp": "+919876543210",
      "email": "harpreet@email.com",
      "village": "Ludhiana",
      "state": "Punjab",
      "rating_avg": 4.8,
      "review_count": 23
    },

    "farmer": {
      "id": "user-uuid-001",
      "full_name": "Ramu Kisan",
      "phone": "+919876543210",
      "rating_avg": 4.7,
      "distance_km": 3.5
    },

    "schedule": {
      "start_date": "2025-07-10",
      "start_time": "08:00",
      "end_date": "2025-07-12",
      "end_time": "18:00",
      "duration_days": 3
    },

    "pricing": {
      "price_per_day": 2400,
      "days": 3,
      "subtotal": 7200,
      "platform_fee": 0,
      "total_amount": 7200
    },

    "payment": {
      "method": "cash",
      "status": "pending",
      "paid_at": null
    },

    "farm_location": {
      "address": "Wardha, Maharashtra",
      "lat": 20.5488,
      "lng": 78.8438,
      "distance_km": 2.4,
      "estimated_travel_time_minutes": 15
    },

    "actions": {
      "can_cancel": true,
      "can_reschedule": true,
      "can_complete": false,
      "can_rate": false,
      "can_share": true,
      "can_contact_owner": true,
      "can_view_map": true,
      "can_download_receipt": false
    },

    "created_at": "2025-07-05T14:30:00Z",
    "confirmed_at": "2025-07-05T15:00:00Z"
  }
}
```

---

## 6.3 Get Booking Status Timeline

> Screen: BookingStatusTrackingDesign

```
GET /bookings/{booking_id}/timeline
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "booking_id": "bk-uuid-001",
    "booking_number": "BK-2025-07-0834",
    "current_status": "in_use",

    "live_info": {
      "equipment_name": "Mahindra 475 DI",
      "current_day": 2,
      "total_days": 3,
      "is_live": true,
      "current_location": {
        "address": "Your Farm - Wardha, Maharashtra",
        "lat": 20.5488,
        "lng": 78.8438,
        "description": "Near NH-161, 5km from city center"
      }
    },

    "timeline": [
      {
        "status": "booked",
        "title": "Booked",
        "timestamp": "2025-07-05T14:30:00Z",
        "description": "Booking confirmed and payment initiated",
        "completed": true,
        "is_current": false
      },
      {
        "status": "owner_accepted",
        "title": "Owner Accepted",
        "timestamp": "2025-07-05T15:15:00Z",
        "description": "Harpreet Singh accepted your booking request",
        "completed": true,
        "is_current": false
      },
      {
        "status": "equipment_ready",
        "title": "Equipment Ready",
        "timestamp": "2025-07-09T18:00:00Z",
        "description": "Equipment prepared and ready for delivery",
        "completed": true,
        "is_current": false
      },
      {
        "status": "on_the_way",
        "title": "On The Way",
        "timestamp": "2025-07-10T07:30:00Z",
        "description": "Equipment is en route to your location",
        "completed": true,
        "is_current": false
      },
      {
        "status": "arrived",
        "title": "Arrived",
        "timestamp": "2025-07-10T08:15:00Z",
        "description": "Equipment has arrived at your farm",
        "completed": true,
        "is_current": false
      },
      {
        "status": "in_use",
        "title": "In Use",
        "timestamp": "2025-07-10T08:30:00Z",
        "description": "Equipment is currently being used",
        "completed": true,
        "is_current": true
      },
      {
        "status": "completed",
        "title": "Completed",
        "timestamp": null,
        "description": "Rental period will end on Jul 12, 6:00 PM",
        "completed": false,
        "is_current": false
      }
    ],

    "emergency_contact": {
      "support_phone": "+911800123456",
      "owner_phone": "+919876543210",
      "owner_whatsapp": "+919876543210"
    }
  }
}
```

---

## 6.4 Update Booking Status (Owner)

> Owner updates the timeline status as equipment progresses

```
POST /bookings/{booking_id}/status
```

**Request Body:**

```json
{
  "status": "on_the_way",
  "notes": "Equipment dispatched, arriving in 30 minutes",
  "location": {
    "lat": 20.5500,
    "lng": 78.8500
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes | Next valid status in timeline |
| `notes` | string | No | Optional status note |
| `location.lat` | float | No | Current equipment location |
| `location.lng` | float | No | Current equipment location |

**Valid status transitions (owner):**

- `confirmed` → `equipment_ready`
- `equipment_ready` → `on_the_way`
- `on_the_way` → `arrived`
- `arrived` → `in_use`

**Response: 200**

```json
{
  "success": true,
  "data": {
    "booking_id": "bk-uuid-001",
    "status": "on_the_way",
    "updated_at": "2025-07-10T07:30:00Z"
  },
  "message": "Status updated. Farmer has been notified."
}
```

---

## 6.5 Get Share Content

> Screen: ShareBookingDetailsDesign

```
GET /bookings/{booking_id}/share
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "booking_id": "bk-uuid-001",
    "booking_number": "BK-2025-07-0834",
    "share_url": "https://kisanyantra.in/booking/BK-2025-07-0834",
    "message": {
      "text": "🚜 KisanYantra Booking Details\n\nEquipment: Mahindra 475 DI\nOwner: Harpreet Singh\nDates: Jul 10-12, 2025\nBooking ID: BK-2025-07-0834\nTotal: ₹7,200\n\n📱 Download KisanYantra App",
      "whatsapp_url": "https://wa.me/?text=...",
      "sms_body": "KisanYantra Booking BK-2025-07-0834..."
    }
  }
}
```

---

## 6.6 Download Receipt

> Screen: CompleteBookingDesign — Receipt download button

```
GET /bookings/{booking_id}/receipt
```

**Response: 200** (PDF file download)

Headers:
```
Content-Type: application/pdf
Content-Disposition: attachment; filename="BK-2025-07-0834-receipt.pdf"
```

---

## Backend Implementation Notes

1. **Timeline events**: Store as separate `BookingTimeline` records. Each status change creates a new record.
2. **Real-time updates**: Use WebSocket or Server-Sent Events for live status tracking. Fallback to polling every 30 seconds.
3. **Location tracking**: During `on_the_way` and `in_use` states, periodically update equipment location (every 5 minutes).
4. **Share URL**: Generate short URL that shows booking summary to non-authenticated users (limited info for privacy).
5. **Receipt PDF**: Generate using a PDF library (ReportLab for Python). Include booking details, payment info, QR code.
6. **Access control**: Farmers can only see their bookings. Owners can see bookings for their equipment. Both parties can view shared booking details.

## Flutter Implementation Notes

1. **My Bookings**: Tabs at top for Active/Past. Active shows countdown badge. Past shows rating if available.
2. **Booking Detail**: Sections for pricing, schedule, location, owner info, booking ID. Action buttons at bottom.
3. **Status Tracking**: Vertical timeline with connected dots. Current step has animated pulse. Green gradient header with LIVE badge.
4. **Share**: Bottom sheet with WhatsApp, SMS, Copy Link, Email, Other Apps options. Show message preview at bottom.
5. **Map button**: Opens ViewOnMapDesign or external maps app.
6. **Emergency contact**: Red-highlighted card with direct call/chat buttons.
