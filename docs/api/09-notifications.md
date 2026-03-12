# Module 9: Notifications

> Screens: NotificationCenterDesign, ToastNotificationsDesign, HomeWithNotificationBadgeDesign

---

## Flow Summary

```
Events trigger notifications:
  - New booking request (owner)
  - Booking confirmed / declined
  - Payment received
  - Rating reminder
  - Equipment listed
  - Payment reminder / due
  - Status updates (on the way, arrived, etc.)

Delivery channels:
  - Push notification (FCM)
  - In-app notification center
  - Toast / snackbar messages (client-side)
```

---

## 9.1 Get Notifications

> Screen: NotificationCenterDesign

```
GET /notifications
```

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `category` | string | `all` | `all`, `bookings`, `payments`, `messages` |
| `is_read` | bool | null | Filter by read status |
| `cursor` | string | null | Pagination cursor |
| `limit` | int | 20 | Max 50 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "unread_count": 3,
    "unread_by_category": {
      "bookings": 1,
      "payments": 1,
      "messages": 1
    },
    "notifications": [
      {
        "id": "notif-uuid-001",
        "type": "booking_request",
        "category": "bookings",
        "title": { "en": "New Booking Request", "hi": "नई बुकिंग अनुरोध" },
        "body": {
          "en": "Rajesh Kumar wants to book your John Deere 5310 for Jan 15-17",
          "hi": "राजेश कुमार आपकी John Deere 5310 जनवरी 15-17 के लिए बुक करना चाहते हैं"
        },
        "icon": "tractor",
        "is_read": false,
        "is_actionable": true,
        "actions": [
          { "id": "accept", "label": { "en": "Accept", "hi": "स्वीकार करें" }, "style": "primary" },
          { "id": "decline", "label": { "en": "Decline", "hi": "अस्वीकार करें" }, "style": "secondary" }
        ],
        "data": {
          "booking_id": "bk-uuid-010",
          "equipment_id": "eq-uuid-001",
          "farmer_name": "Rajesh Kumar",
          "dates": "Jan 15-17"
        },
        "created_at": "2025-07-10T14:28:00Z",
        "relative_time": "2 min ago"
      },
      {
        "id": "notif-uuid-002",
        "type": "payment_received",
        "category": "payments",
        "title": { "en": "Payment Received", "hi": "भुगतान प्राप्त" },
        "body": {
          "en": "₹8,500 received from Amit Singh for 3-day rental",
          "hi": "अमित सिंह से ₹8,500 प्राप्त (3 दिन का किराया)"
        },
        "icon": "payment",
        "is_read": false,
        "is_actionable": false,
        "actions": [],
        "data": {
          "booking_id": "bk-uuid-009",
          "amount": 8500,
          "farmer_name": "Amit Singh"
        },
        "created_at": "2025-07-10T14:15:00Z",
        "relative_time": "15 min ago"
      },
      {
        "id": "notif-uuid-003",
        "type": "booking_confirmed",
        "category": "bookings",
        "title": { "en": "Booking Confirmed", "hi": "बुकिंग पुष्टि" },
        "body": {
          "en": "Your booking for Mahindra 575 DI is confirmed for Jan 10-12",
          "hi": "Mahindra 575 DI की आपकी बुकिंग जनवरी 10-12 के लिए पुष्टि हो गई"
        },
        "icon": "check",
        "is_read": true,
        "is_actionable": false,
        "actions": [],
        "data": {
          "booking_id": "bk-uuid-008",
          "equipment_name": "Mahindra 575 DI"
        },
        "created_at": "2025-07-10T13:30:00Z",
        "relative_time": "1 hour ago"
      },
      {
        "id": "notif-uuid-004",
        "type": "rating_reminder",
        "category": "messages",
        "title": { "en": "Rate Your Experience", "hi": "अपना अनुभव रेट करें" },
        "body": {
          "en": "How was your rental with Suresh Patel?",
          "hi": "सुरेश पटेल के साथ किराये का अनुभव कैसा रहा?"
        },
        "icon": "star",
        "is_read": true,
        "is_actionable": true,
        "actions": [
          { "id": "rate_now", "label": { "en": "Rate Now", "hi": "अभी रेट करें" }, "style": "primary" }
        ],
        "data": {
          "booking_id": "bk-uuid-007",
          "owner_name": "Suresh Patel"
        },
        "created_at": "2025-07-09T10:00:00Z",
        "relative_time": "Yesterday"
      },
      {
        "id": "notif-uuid-005",
        "type": "payment_reminder",
        "category": "payments",
        "title": { "en": "Payment Reminder", "hi": "भुगतान अनुस्मारक" },
        "body": {
          "en": "Payment of ₹3,600 for booking #1234 is due tomorrow",
          "hi": "बुकिंग #1234 के लिए ₹3,600 का भुगतान कल देय है"
        },
        "icon": "warning",
        "is_read": true,
        "is_actionable": false,
        "actions": [],
        "data": {
          "booking_id": "bk-uuid-006",
          "amount": 3600
        },
        "created_at": "2025-07-09T09:00:00Z",
        "relative_time": "Yesterday"
      }
    ],
    "pagination": {
      "next_cursor": "cursor-notif",
      "has_more": false,
      "total_count": 5
    }
  }
}
```

---

## 9.2 Mark Notification as Read

```
PATCH /notifications/{notification_id}/read
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "notif-uuid-001",
    "is_read": true
  }
}
```

---

## 9.3 Mark All Notifications as Read

```
POST /notifications/read-all
```

**Request Body (optional):**

```json
{
  "category": "bookings"
}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "marked_count": 3
  },
  "message": "All notifications marked as read"
}
```

---

## 9.4 Perform Notification Action

> Handle actionable notifications (accept/decline booking, rate now)

```
POST /notifications/{notification_id}/action
```

**Request Body:**

```json
{
  "action_id": "accept"
}
```

This routes to the appropriate endpoint internally (e.g., `accept` → `PATCH /bookings/{id}/respond`).

**Response: 200**

```json
{
  "success": true,
  "data": {
    "notification_id": "notif-uuid-001",
    "action": "accept",
    "result": {
      "booking_id": "bk-uuid-010",
      "status": "confirmed"
    }
  },
  "message": "Booking accepted"
}
```

---

## 9.5 Get Unread Count

> Screen: HomeWithNotificationBadgeDesign — Badge on bell icon

```
GET /notifications/unread-count
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "total": 5,
    "by_category": {
      "bookings": 2,
      "payments": 2,
      "messages": 1
    }
  }
}
```

---

## 9.6 Register Push Token

```
POST /notifications/push-token
```

**Request Body:**

```json
{
  "token": "fcm-device-token-abc123",
  "platform": "android",
  "device_id": "uuid-device-123"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `token` | string | Yes | FCM token |
| `platform` | string | Yes | `android` or `ios` |
| `device_id` | string | Yes | Unique device ID |

**Response: 200**

```json
{
  "success": true,
  "message": "Push token registered"
}
```

---

## 9.7 Update Notification Preferences

```
PATCH /notifications/preferences
```

**Request Body:**

```json
{
  "push_enabled": true,
  "categories": {
    "bookings": true,
    "payments": true,
    "messages": true,
    "promotions": false
  },
  "quiet_hours": {
    "enabled": true,
    "start": "22:00",
    "end": "06:00"
  }
}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "push_enabled": true,
    "categories": {
      "bookings": true,
      "payments": true,
      "messages": true,
      "promotions": false
    },
    "quiet_hours": {
      "enabled": true,
      "start": "22:00",
      "end": "06:00"
    }
  }
}
```

---

## Notification Types Reference

| Type | Category | Trigger | Actionable |
|------|----------|---------|------------|
| `booking_request` | bookings | New booking request for owner | Yes (Accept/Decline) |
| `booking_confirmed` | bookings | Booking accepted by owner | No |
| `booking_declined` | bookings | Booking declined by owner | No |
| `booking_cancelled` | bookings | Booking cancelled by either party | No |
| `booking_completed` | bookings | Booking marked as complete | No |
| `status_update` | bookings | Equipment status changed (on_the_way, arrived, etc.) | No |
| `payment_received` | payments | Payment confirmed | No |
| `payment_reminder` | payments | Upcoming payment due | No |
| `refund_processed` | payments | Refund completed | No |
| `rating_reminder` | messages | Prompt to rate after completion | Yes (Rate Now) |
| `equipment_listed` | messages | Equipment successfully listed | No |
| `new_message` | messages | Message from counterparty | Yes (Reply) |

---

## Push Notification Payload (FCM)

```json
{
  "notification": {
    "title": "New Booking Request",
    "body": "Rajesh Kumar wants to book your John Deere 5310"
  },
  "data": {
    "type": "booking_request",
    "notification_id": "notif-uuid-001",
    "booking_id": "bk-uuid-010",
    "click_action": "BOOKING_DETAIL"
  }
}
```

---

## Backend Implementation Notes

1. **Push delivery**: Use Firebase Cloud Messaging (FCM) for both Android and iOS.
2. **Notification creation**: Create notification records in DB when events occur. Dispatch push asynchronously via task queue.
3. **Batching**: Group rapid-fire notifications (e.g., multiple status updates) into a single push.
4. **Quiet hours**: Check user preferences before sending push. Queue for delivery after quiet hours end.
5. **Retention**: Keep notifications for 90 days. Auto-delete older ones.
6. **Real-time**: Consider WebSocket for in-app notification delivery. Fallback to polling every 30 seconds.

## Flutter Implementation Notes

1. **Badge**: Show red dot on bell icon when unread_count > 0. Show count number if > 0.
2. **Notification center**: Filter tabs (All, Bookings, Payments, Messages). Unread items have colored left border and dot indicator.
3. **Actionable notifications**: Show inline Accept/Decline buttons directly in the notification card.
4. **Toast messages**: Use `flutter_toast` or custom snackbar. Show for 3 seconds at top of screen. Types: success (green), error (red), warning (saffron), info (blue).
5. **Push handling**: Use `firebase_messaging` package. Handle foreground, background, and terminated state taps.
6. **Mark as read**: Auto-mark when user taps/views the notification.
