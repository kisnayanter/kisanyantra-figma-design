# Module 7: Payments

> Screens: BookingConfirmDesign (payment selection), OwnerDashboardDesign (earnings), CancelBookingDesign (refund)

---

## Flow Summary

```
Farmer selects payment method (Cash on Arrival / UPI) during booking
  ├── Cash: Pay owner directly at equipment delivery
  └── UPI: Pay via GPay / PhonePe / Paytm (redirect to UPI app)

Owner receives earnings after booking completion
Refunds processed on cancellation based on cancellation policy
```

---

## 7.1 Get Payment Methods

```
GET /payments/methods
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "methods": [
      {
        "id": "cash",
        "name": { "en": "Cash on Arrival", "hi": "आगमन पर नकद" },
        "description": { "en": "Pay owner directly on day 1", "hi": "पहले दिन मालिक को सीधे भुगतान करें" },
        "icon": "cash",
        "is_available": true,
        "is_default": true
      },
      {
        "id": "upi",
        "name": { "en": "Pay via UPI", "hi": "यूपीआई से भुगतान" },
        "description": { "en": "GPay, PhonePe, Paytm", "hi": "जीपे, फोनपे, पेटीएम" },
        "icon": "upi",
        "is_available": true,
        "is_default": false,
        "supported_apps": ["gpay", "phonepe", "paytm"]
      }
    ]
  }
}
```

---

## 7.2 Initiate UPI Payment

```
POST /payments/upi/initiate
```

**Request Body:**

```json
{
  "booking_id": "bk-uuid-001",
  "amount": 7200,
  "upi_app": "gpay"
}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "payment_id": "pay-uuid-001",
    "upi_intent_url": "upi://pay?pa=kisanyantra@upi&pn=KisanYantra&am=7200&cu=INR&tn=BK-2025-07-0834",
    "qr_code_url": "https://cdn.kisanyantra.in/qr/pay-uuid-001.png",
    "expires_in_seconds": 900,
    "status": "initiated"
  }
}
```

---

## 7.3 Verify Payment Status

```
GET /payments/{payment_id}/status
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "payment_id": "pay-uuid-001",
    "booking_id": "bk-uuid-001",
    "amount": 7200,
    "status": "completed",
    "method": "upi",
    "upi_transaction_id": "UPI-TXN-123456",
    "completed_at": "2025-07-05T15:30:00Z"
  }
}
```

Payment statuses: `initiated`, `pending`, `completed`, `failed`, `refunded`

---

## 7.4 Mark Cash Payment (Owner)

> Owner confirms they received cash payment

```
POST /payments/cash/confirm
```

**Request Body:**

```json
{
  "booking_id": "bk-uuid-001",
  "amount_received": 7200
}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "booking_id": "bk-uuid-001",
    "payment_status": "paid",
    "confirmed_at": "2025-07-10T08:30:00Z"
  },
  "message": "Cash payment confirmed"
}
```

---

## 7.5 Get Owner Earnings

> Screen: OwnerDashboardDesign — Earnings cards

```
GET /payments/earnings
```

**Headers:** `Authorization: Bearer <token>` (owner)

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `period` | string | `this_month` | `this_month`, `last_month`, `this_year`, `all_time` |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "period": "this_month",
    "summary": {
      "total_earnings": 54000,
      "total_bookings": 12,
      "pending_payments": 7200,
      "completed_payments": 46800
    },
    "all_time": {
      "total_earnings": 240000,
      "total_bookings": 38
    },
    "transactions": [
      {
        "id": "txn-001",
        "booking_number": "BK-2025-07-0834",
        "farmer_name": "Ramu Kisan",
        "equipment_name": "Mahindra 475 DI",
        "amount": 7200,
        "payment_method": "cash",
        "status": "completed",
        "date": "2025-07-12T18:00:00Z"
      }
    ],
    "pagination": {
      "next_cursor": null,
      "has_more": false,
      "total_count": 12
    }
  }
}
```

---

## 7.6 Get Refund Details

```
GET /payments/refunds/{booking_id}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "booking_id": "bk-uuid-cancelled",
    "refund_id": "refund-uuid-001",
    "original_amount": 7200,
    "cancellation_fee": 720,
    "processing_fee": 180,
    "refund_amount": 6300,
    "refund_method": "upi",
    "status": "processing",
    "estimated_completion": "2025-07-15",
    "initiated_at": "2025-07-08T10:00:00Z",
    "completed_at": null
  }
}
```

Refund statuses: `initiated`, `processing`, `completed`, `failed`

---

## Cancellation Fee Policy

| Timing | Fee % | Example (₹7,200 booking) |
|--------|-------|---------------------------|
| > 48 hours before start | 0% | ₹0 |
| 24-48 hours before start | 10% | ₹720 |
| < 24 hours before start | 25% | ₹1,800 |
| After booking starts | 50% | ₹3,600 |
| Processing fee (always) | Flat ₹180 | ₹180 |

---

## Backend Implementation Notes

1. **UPI Integration**: Use Razorpay or Cashfree for UPI payment processing. Generate UPI intent URLs for direct app launch.
2. **Cash tracking**: Cash payments are peer-to-peer. The platform only tracks confirmation status from the owner.
3. **Escrow (future)**: Consider escrow for UPI payments — hold funds until booking completion.
4. **Refunds**: For UPI payments, initiate refund via payment gateway API. For cash, no automated refund (handled offline).
5. **Earnings calculation**: Aggregate from completed bookings. Owner earnings = total_amount minus platform commission (configurable, default 0% for launch).
6. **Transaction history**: Store all payment events as immutable records for audit trail.

## Flutter Implementation Notes

1. **Payment selection**: Radio-style cards in BookingConfirmDesign. Cash on Arrival is default (pre-selected).
2. **UPI flow**: Launch UPI app using `url_launcher` with intent URL. Poll payment status every 3 seconds after returning to app.
3. **Earnings widget**: Show in owner dashboard header with gradient card. This Month / Total / Bookings count.
4. **Refund display**: Show breakdown table in CancelBookingDesign with green highlight for refund amount.
