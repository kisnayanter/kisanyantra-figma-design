# Module 11: Communication

> Screens: ContactOwnerDesign, ShareBookingDetailsDesign, BookingDetailDesign (contact section)

---

## Flow Summary

```
Booking Detail / Equipment Detail -> Contact Owner
  -> WhatsApp (open WhatsApp with pre-filled message)
  -> Phone Call (direct dial)
  -> Quick Message (template-based via in-app)
  -> Custom Message (free text via in-app)

Booking Detail -> Share Booking
  -> WhatsApp / SMS / Copy Link / Email / Other Apps
```

---

## 11.1 Get Owner Contact Info

> Screen: ContactOwnerDesign -- Owner card + contact information section

```
GET /users/{user_id}/contact
```

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `booking_id` | UUID | No | Include booking context for privacy validation |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "user_id": "user-uuid-003",
    "full_name": "Harpreet Singh",
    "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png",
    "role": "owner",
    "location": "Ludhiana, Punjab",
    "rating_avg": 4.8,
    "review_count": 23,
    "contact": {
      "phone": "+919876543210",
      "whatsapp": "+919876543210",
      "email": "harpreet@email.com"
    },
    "availability": {
      "is_online": true,
      "last_seen": "2025-07-10T14:30:00Z",
      "preferred_contact": "whatsapp",
      "preferred_hours": "08:00-20:00"
    }
  }
}
```

**Error Responses:**

- `403` -- Contact info only visible to users with active/recent bookings with this owner
- `404` -- User not found

---

## 11.2 Get Message Templates

> Screen: ContactOwnerDesign -- Quick Messages section

```
GET /messages/templates
```

**Query Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `context` | string | No | `booking_confirmation`, `directions`, `equipment_status`, `general` |
| `booking_id` | UUID | No | Personalize templates with booking details |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "templates": [
      {
        "id": "tpl-001",
        "context": "booking_confirmation",
        "message": {
          "en": "Hello, I have a booking confirmation for Jul 10-12. Just wanted to confirm the details.",
          "hi": "नमस्ते, मेरे पास जुलाई 10-12 के लिए बुकिंग की पुष्टि है। बस विवरण की पुष्टि करना चाहता था।"
        }
      },
      {
        "id": "tpl-002",
        "context": "directions",
        "message": {
          "en": "Hi, could you please provide directions to your location?",
          "hi": "नमस्ते, क्या आप कृपया अपने स्थान के लिए दिशा-निर्देश दे सकते हैं?"
        }
      },
      {
        "id": "tpl-003",
        "context": "equipment_status",
        "message": {
          "en": "Is the equipment ready for the scheduled dates?",
          "hi": "क्या निर्धारित तारीखों के लिए उपकरण तैयार है?"
        }
      },
      {
        "id": "tpl-004",
        "context": "general",
        "message": {
          "en": "What time should I expect the equipment to arrive?",
          "hi": "उपकरण के आने का अनुमानित समय क्या है?"
        }
      }
    ]
  }
}
```

---

## 11.3 Send In-App Message

> Screen: ContactOwnerDesign -- Custom Message + Quick Message send

```
POST /messages
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
  "recipient_id": "user-uuid-003",
  "booking_id": "bk-uuid-001",
  "message": "Hello, I have a booking confirmation for Jul 10-12. Just wanted to confirm the details.",
  "template_id": "tpl-001",
  "attachments": []
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `recipient_id` | UUID | Yes | Must be a valid user |
| `booking_id` | UUID | No | Links message to booking context |
| `message` | string | Yes | Max 160 characters |
| `template_id` | string | No | If sent from a template |
| `attachments` | array | No | Future: file/image attachments |

**Response: 201**

```json
{
  "success": true,
  "data": {
    "id": "msg-uuid-001",
    "sender_id": "user-uuid-001",
    "recipient_id": "user-uuid-003",
    "booking_id": "bk-uuid-001",
    "message": "Hello, I have a booking confirmation for Jul 10-12. Just wanted to confirm the details.",
    "status": "sent",
    "created_at": "2025-07-10T14:30:00Z"
  },
  "message": "Message sent"
}
```

**Error Responses:**

- `400` -- Message exceeds 160 characters
- `403` -- Can only message users with active/recent bookings

---

## 11.4 Get Conversation Messages

> Chat history between two users for a booking

```
GET /messages/conversation
```

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `user_id` | UUID | Yes | The other party |
| `booking_id` | UUID | No | Filter by booking |
| `cursor` | string | No | Pagination cursor |
| `limit` | int | No | Default 30, max 50 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "participant": {
      "id": "user-uuid-003",
      "full_name": "Harpreet Singh",
      "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png"
    },
    "messages": [
      {
        "id": "msg-uuid-001",
        "sender_id": "user-uuid-001",
        "message": "Hello, I have a booking confirmation for Jul 10-12.",
        "status": "read",
        "created_at": "2025-07-10T14:30:00Z"
      },
      {
        "id": "msg-uuid-002",
        "sender_id": "user-uuid-003",
        "message": "Yes confirmed! Equipment will be ready by 8 AM on Jul 10.",
        "status": "read",
        "created_at": "2025-07-10T14:35:00Z"
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

## 11.5 Generate WhatsApp Deep Link

> Screen: ContactOwnerDesign -- WhatsApp button action

```
POST /messages/whatsapp-link
```

**Request Body:**

```json
{
  "recipient_id": "user-uuid-003",
  "booking_id": "bk-uuid-001",
  "template_id": "tpl-001",
  "custom_message": null
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `recipient_id` | UUID | Yes | Owner/farmer to contact |
| `booking_id` | UUID | No | Include booking context in message |
| `template_id` | string | No | Use a predefined template |
| `custom_message` | string | No | Free-text message (max 160 chars) |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "whatsapp_url": "https://wa.me/919876543210?text=Hello%2C%20I%20have%20a%20booking%20confirmation%20for%20Jul%2010-12.%20Just%20wanted%20to%20confirm%20the%20details.%20%5BBK-2025-07-0834%5D",
    "phone": "+919876543210",
    "message_preview": "Hello, I have a booking confirmation for Jul 10-12. Just wanted to confirm the details. [BK-2025-07-0834]"
  }
}
```

---

## 11.6 Log Communication Event

> Track outbound calls and WhatsApp opens for analytics

```
POST /messages/log
```

**Request Body:**

```json
{
  "type": "whatsapp_open",
  "recipient_id": "user-uuid-003",
  "booking_id": "bk-uuid-001"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | `whatsapp_open`, `phone_call`, `in_app_message` |
| `recipient_id` | UUID | Yes | Who was contacted |
| `booking_id` | UUID | No | Related booking |

**Response: 200**

```json
{
  "success": true,
  "message": "Communication logged"
}
```

---

## 11.7 Get Share Content

> Screen: ShareBookingDetailsDesign -- Share booking via multiple channels

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
      "text": "KisanYantra Booking Details\n\nEquipment: Mahindra 475 DI\nOwner: Harpreet Singh\nDates: Jul 10-12, 2025\nBooking ID: BK-2025-07-0834\nTotal: Rs.7,200\n\nDownload KisanYantra App",
      "whatsapp_url": "https://wa.me/?text=KisanYantra%20Booking%20BK-2025-07-0834...",
      "sms_body": "KisanYantra Booking BK-2025-07-0834: Mahindra 475 DI, Jul 10-12, Rs.7,200. Details: https://kisanyantra.in/booking/BK-2025-07-0834",
      "email_subject": "KisanYantra Booking - BK-2025-07-0834",
      "email_body": "KisanYantra Booking Details\n\nEquipment: Mahindra 475 DI\nOwner: Harpreet Singh\nDates: Jul 10-12, 2025\nTotal: Rs.7,200\n\nView details: https://kisanyantra.in/booking/BK-2025-07-0834"
    },
    "share_channels": [
      { "id": "whatsapp", "label": { "en": "WhatsApp", "hi": "व्हाट्सएप" }, "icon": "whatsapp" },
      { "id": "sms", "label": { "en": "SMS", "hi": "एसएमएस" }, "icon": "sms" },
      { "id": "copy_link", "label": { "en": "Copy Link", "hi": "लिंक कॉपी करें" }, "icon": "link" },
      { "id": "email", "label": { "en": "Email", "hi": "ईमेल" }, "icon": "email" },
      { "id": "other", "label": { "en": "Other Apps", "hi": "अन्य ऐप्स" }, "icon": "share" }
    ]
  }
}
```

---

## Backend Implementation Notes

1. **Privacy**: Only expose contact info to users who have an active or recently completed booking with the owner. Never expose phone numbers in public listing views.
2. **WhatsApp links**: Generate `https://wa.me/{phone}?text={encoded_message}` server-side. Include booking reference in the message for context.
3. **Message storage**: Store in-app messages in a `messages` table with sender, recipient, booking reference, and timestamps.
4. **Communication logging**: Track all contact attempts (WhatsApp opens, calls, in-app messages) for analytics and dispute resolution.
5. **Rate limiting**: Limit in-app messages to 20 per hour per user to prevent spam. Limit template requests to 60/min.
6. **Notifications**: Send push notification to recipient when an in-app message is received. Use type `new_message` from the notifications module.
7. **Share URL**: Generate short URLs that show limited booking info to non-authenticated viewers (equipment name, dates, booking number only).

## Flutter Implementation Notes

1. **ContactOwnerDesign**: Saffron gradient header with owner avatar, name, rating, and location. Two action cards (WhatsApp green `#25D366`, Call blue `#0088CC`). Quick message templates as tappable cards. Custom message input with 160-char limit, attachment and voice-note icons.
2. **WhatsApp action**: Use `url_launcher` to open `whatsapp_url`. If WhatsApp not installed, show toast suggesting phone call instead.
3. **Call action**: Use `url_launcher` with `tel:+919876543210` scheme. Log the call attempt.
4. **Quick messages**: Tap a template to auto-fill the custom message field. User can edit before sending via WhatsApp or in-app.
5. **Custom message**: Text area with character counter (0/160). Attachment icon (future) and voice-note icon for voice input via speech-to-text.
6. **Share booking**: Bottom sheet with channel icons (WhatsApp, SMS, Copy Link, Email, Other). Show message preview at bottom of sheet. Use `share_plus` package for native share sheet.
7. **Voice input**: Use `speech_to_text` package for the microphone button in custom message. Convert speech to text and fill the message field.
