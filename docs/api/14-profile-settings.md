# Module 14: Profile View, Settings & Help

> Screens: FarmerProfileViewDesign, AppSettingsDesign, HelpSupportDesign

---

## Flow Summary

```
Profile Tab (Farmer):
  FarmerProfileViewDesign → Hub for all profile actions
    ├── Edit Profile → UpdateProfileDesign (Module 2)
    ├── My Requests → MyRequestsDesign (Module 12)
    ├── My Bookings → MyBookingsDesign (Module 6)
    ├── My Reviews → RatingScreenDesign (Module 8)
    ├── Notification Settings → AppSettingsDesign
    ├── Language → AppSettingsDesign (language section)
    ├── Help & Support → HelpSupportDesign
    ├── Switch to Owner Mode → Role switch
    └── Log Out → Session end

Settings:
  AppSettingsDesign → Notification toggles, language, account, privacy, delete
    ├── Change Phone → OTP re-verification
    ├── Linked Accounts → Third-party connections
    ├── Data & Privacy → GDPR compliance
    ├── Download My Data → Data export
    └── Delete Account → Permanent deletion with confirmation

Help & Support:
  HelpSupportDesign → FAQ, contact channels, topic browsing
    ├── Call Us → Phone support (7 AM - 10 PM)
    ├── WhatsApp → WhatsApp support chat
    ├── Email → Email support
    ├── FAQ → Expandable question/answer list
    └── Help Topics → Categorized help articles
```

---

## 14.1 Get User Profile Summary

> Screen: FarmerProfileViewDesign — Profile hub with stats and menu

```
GET /users/me/profile
```

**Headers:** `Authorization: Bearer <token>`

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "user-uuid-001",
    "full_name": "Ramu Kisan",
    "phone": "+919876543210",
    "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png",
    "avatar_initials": "RK",
    "role": "farmer",
    "is_verified": true,
    "preferred_language": "hi",
    "location": {
      "address": "Hinganghat, Wardha, Maharashtra",
      "village": "Hinganghat",
      "district": "Wardha",
      "state": "Maharashtra"
    },
    "member_since": "2025-03-01T00:00:00Z",
    "stats": {
      "total_bookings": 3,
      "active_bookings": 1,
      "total_requests": 2,
      "active_requests": 2,
      "rating_avg": 4.8,
      "review_count": 3
    },
    "profile_complete": true,
    "app_version": "1.0.0"
  }
}
```

| Response Field | Type | Description |
|---------------|------|-------------|
| `avatar_initials` | string | Fallback when no avatar photo (e.g. "RK") |
| `is_verified` | bool | Phone verified |
| `stats.total_bookings` | int | Lifetime bookings count |
| `stats.active_bookings` | int | Currently active bookings |
| `stats.total_requests` | int | Lifetime equipment requests |
| `stats.active_requests` | int | Currently searching/offers_received requests |
| `stats.rating_avg` | float | Average rating received (1.0-5.0) |
| `stats.review_count` | int | Number of reviews received |

---

## 14.2 Switch User Role

> Screen: FarmerProfileViewDesign — "Switch to Owner Mode" button

```
POST /users/me/switch-role
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
  "target_role": "owner"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `target_role` | string | Yes | `farmer` or `owner` |

**Response: 200 (User has owner profile)**

```json
{
  "success": true,
  "data": {
    "role": "owner",
    "has_profile": true,
    "redirect_to": "owner_dashboard"
  },
  "message": "Switched to Owner mode"
}
```

**Response: 200 (User needs owner onboarding)**

```json
{
  "success": true,
  "data": {
    "role": "owner",
    "has_profile": false,
    "redirect_to": "owner_profile_setup"
  },
  "message": "Complete your owner profile to get started"
}
```

---

## 14.3 Get Notification Preferences

> Screen: AppSettingsDesign — Notification toggles section

```
GET /users/me/settings/notifications
```

**Headers:** `Authorization: Bearer <token>`

**Response: 200**

```json
{
  "success": true,
  "data": {
    "push_notifications": true,
    "booking_updates": true,
    "request_alerts": true,
    "promotional": false,
    "whatsapp_notifications": true,
    "quiet_hours": {
      "enabled": true,
      "start": "22:00",
      "end": "06:00"
    }
  }
}
```

---

## 14.4 Update Notification Preferences

> Screen: AppSettingsDesign — Toggle switches

```
PATCH /users/me/settings/notifications
```

**Headers:** `Authorization: Bearer <token>`

**Request Body (partial update — send only changed fields):**

```json
{
  "push_notifications": true,
  "booking_updates": true,
  "request_alerts": true,
  "promotional": false,
  "whatsapp_notifications": true,
  "quiet_hours": {
    "enabled": true,
    "start": "22:00",
    "end": "06:00"
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `push_notifications` | bool | No | Master push toggle |
| `booking_updates` | bool | No | Booking status change notifications |
| `request_alerts` | bool | No | Equipment request and offer notifications |
| `promotional` | bool | No | Marketing and promotional notifications |
| `whatsapp_notifications` | bool | No | WhatsApp message notifications |
| `quiet_hours.enabled` | bool | No | Enable quiet hours |
| `quiet_hours.start` | string | No | HH:MM (24hr) |
| `quiet_hours.end` | string | No | HH:MM (24hr) |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "push_notifications": true,
    "booking_updates": true,
    "request_alerts": true,
    "promotional": false,
    "whatsapp_notifications": true,
    "quiet_hours": {
      "enabled": true,
      "start": "22:00",
      "end": "06:00"
    }
  },
  "message": "Notification preferences updated"
}
```

---

## 14.5 Update Language Preference

> Screen: AppSettingsDesign — Language selection section

```
PATCH /users/me/settings/language
```

**Request Body:**

```json
{
  "language": "hi"
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `language` | string | Yes | `en`, `hi`, `ta`, `mr` |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "language": "hi",
    "display_name": "हिन्दी"
  },
  "message": "Language updated to हिन्दी"
}
```

---

## 14.6 Change Phone Number

> Screen: AppSettingsDesign — Account section, "Change" button next to phone number

### 14.6.1 Initiate Phone Change

```
POST /users/me/phone/change
```

**Request Body:**

```json
{
  "new_phone": "+919876543211"
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `new_phone` | string | Yes | Indian mobile: `+91XXXXXXXXXX` |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "otp_id": "otp-uuid-change-001",
    "phone": "+919876543211",
    "expires_in_seconds": 300,
    "resend_after_seconds": 30
  },
  "message": "OTP sent to new phone number"
}
```

**Error:** `409` — Phone number already registered to another account

### 14.6.2 Verify Phone Change OTP

```
POST /users/me/phone/verify
```

**Request Body:**

```json
{
  "otp_id": "otp-uuid-change-001",
  "otp_code": "547283"
}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "phone": "+919876543211",
    "updated_at": "2025-07-10T10:00:00Z"
  },
  "message": "Phone number updated successfully"
}
```

---

## 14.7 Download User Data

> Screen: AppSettingsDesign — Data & Privacy section

```
POST /users/me/data-export
```

**Headers:** `Authorization: Bearer <token>`

**Response: 200**

```json
{
  "success": true,
  "data": {
    "export_id": "export-uuid-001",
    "status": "processing",
    "estimated_minutes": 10,
    "notification": "You'll receive a download link via WhatsApp/SMS when ready"
  },
  "message": "Data export initiated. You'll be notified when it's ready."
}
```

### 14.7.1 Get Export Status

```
GET /users/me/data-export/{export_id}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "export_id": "export-uuid-001",
    "status": "completed",
    "download_url": "https://cdn.kisanyantra.in/exports/user-uuid-001-data.zip",
    "expires_at": "2025-07-17T10:00:00Z",
    "file_size_mb": 2.4
  }
}
```

Export statuses: `processing`, `completed`, `failed`

---

## 14.8 Delete Account

> Screen: AppSettingsDesign — Danger Zone section

### 14.8.1 Request Account Deletion

```
POST /users/me/delete
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
  "reason": "no_longer_needed",
  "confirm_text": "DELETE"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reason` | string | Yes | `no_longer_needed`, `privacy_concerns`, `switched_platform`, `other` |
| `confirm_text` | string | Yes | Must be exactly `"DELETE"` |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "deletion_scheduled_at": "2025-07-17T10:00:00Z",
    "grace_period_days": 7,
    "can_cancel_until": "2025-07-17T10:00:00Z"
  },
  "message": "Account deletion scheduled. You have 7 days to cancel. All data will be permanently deleted after that."
}
```

**Side effects:**
- Active bookings must be completed or cancelled before deletion
- Active requests are auto-cancelled
- Push tokens are deregistered
- User can log back in within grace period to cancel deletion

**Error:** `409` — Active bookings exist (must complete/cancel first)

### 14.8.2 Cancel Account Deletion

```
POST /users/me/delete/cancel
```

**Response: 200**

```json
{
  "success": true,
  "message": "Account deletion cancelled. Welcome back!"
}
```

---

## 14.9 Logout

> Screen: FarmerProfileViewDesign — "Log Out" button

```
POST /auth/logout
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
  "device_id": "uuid-device-123"
}
```

**Response: 200**

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

**Side effects:**
- Invalidate current access token
- Invalidate refresh token for this device
- Deregister push token for this device

---

## 14.10 Get FAQ & Help Content

> Screen: HelpSupportDesign — FAQ section and help topics

```
GET /help/faq
```

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `language` | string | `en` | `en`, `hi`, `ta`, `mr` |
| `topic` | string | `all` | `all`, `bookings`, `equipment`, `payments`, `account` |
| `q` | string | null | Search query |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "topics": [
      {
        "id": "bookings",
        "name": { "en": "Bookings", "hi": "बुकिंग" },
        "icon": "calendar",
        "article_count": 8
      },
      {
        "id": "equipment",
        "name": { "en": "Equipment", "hi": "उपकरण" },
        "icon": "tractor",
        "article_count": 5
      },
      {
        "id": "payments",
        "name": { "en": "Payments", "hi": "भुगतान" },
        "icon": "money",
        "article_count": 6
      },
      {
        "id": "account",
        "name": { "en": "Account", "hi": "खाता" },
        "icon": "user",
        "article_count": 4
      }
    ],
    "faq": [
      {
        "id": "faq-001",
        "question": { "en": "How do I book equipment?", "hi": "मैं उपकरण कैसे बुक करूं?" },
        "answer": {
          "en": "Search for equipment near you, select the one you want, choose your dates and duration, then tap 'Book Now'. You'll need to verify your phone number if you haven't already.",
          "hi": "अपने पास उपकरण खोजें, जो चाहिए वो चुनें, तारीख और अवधि चुनें, फिर 'अभी बुक करें' पर टैप करें। अगर आपने पहले से नहीं किया है तो आपको अपना फोन नंबर सत्यापित करना होगा।"
        },
        "topic": "bookings"
      },
      {
        "id": "faq-002",
        "question": { "en": "How do I cancel a booking?", "hi": "मैं बुकिंग कैसे रद्द करूं?" },
        "answer": {
          "en": "Go to My Bookings, tap the booking you want to cancel, then tap 'Cancel Booking'. Review the cancellation policy and refund details before confirming.",
          "hi": "मेरी बुकिंग पर जाएं, जिसे रद्द करना है उस पर टैप करें, फिर 'बुकिंग रद्द करें' पर टैप करें। पुष्टि करने से पहले रद्दीकरण नीति और रिफंड विवरण की समीक्षा करें।"
        },
        "topic": "bookings"
      },
      {
        "id": "faq-003",
        "question": { "en": "How does payment work?", "hi": "भुगतान कैसे काम करता है?" },
        "answer": {
          "en": "Payment is collected after booking confirmation. You can pay via UPI, bank transfer, or cash. Platform fee of 5% applies.",
          "hi": "बुकिंग की पुष्टि के बाद भुगतान लिया जाता है। आप UPI, बैंक ट्रांसफर या नकद से भुगतान कर सकते हैं। 5% प्लेटफॉर्म शुल्क लागू है।"
        },
        "topic": "payments"
      },
      {
        "id": "faq-004",
        "question": { "en": "How do I post a request?", "hi": "मैं अनुरोध कैसे पोस्ट करूं?" },
        "answer": {
          "en": "If you can't find equipment in search, tap 'Post a Request'. Fill in equipment type, dates, location, and budget. Nearby owners will be notified and can send you offers.",
          "hi": "अगर खोज में उपकरण नहीं मिला, तो 'अनुरोध पोस्ट करें' पर टैप करें। उपकरण प्रकार, तारीख, स्थान और बजट भरें। आसपास के मालिकों को सूचित किया जाएगा और वे आपको प्रस्ताव भेज सकते हैं।"
        },
        "topic": "equipment"
      },
      {
        "id": "faq-005",
        "question": { "en": "How do I contact the equipment owner?", "hi": "मैं उपकरण मालिक से कैसे संपर्क करूं?" },
        "answer": {
          "en": "After booking, you can contact the owner via phone call or WhatsApp directly from the booking details screen.",
          "hi": "बुकिंग के बाद, आप बुकिंग विवरण स्क्रीन से सीधे फोन कॉल या व्हाट्सएप के माध्यम से मालिक से संपर्क कर सकते हैं।"
        },
        "topic": "bookings"
      }
    ],
    "support": {
      "phone": "+91-1800-XXX-XXXX",
      "whatsapp": "+919876500000",
      "email": "support@kisanyantra.in",
      "hours": {
        "en": "7 AM - 10 PM IST, Monday to Saturday",
        "hi": "सुबह 7 बजे - रात 10 बजे IST, सोमवार से शनिवार"
      }
    }
  }
}
```

---

## Backend Implementation Notes

1. **Profile stats**: Aggregate from bookings, requests, and reviews tables. Cache for 5 minutes per user.
2. **Role switching**: Users can have both farmer and owner profiles. Store `active_role` in the session/JWT. Role switch updates the JWT claim.
3. **Notification preferences**: Store as JSONB column on user table. Respect preferences before sending push notifications.
4. **Phone change**: Require OTP verification on the NEW number. Old number remains active during verification. Swap only after OTP is confirmed.
5. **Account deletion**: Implement soft delete with 7-day grace period. Use a background worker to permanently delete data after grace period. Must comply with Indian data protection regulations.
6. **Data export**: Generate ZIP containing user profile, bookings, requests, reviews, and transaction history as JSON files. Process asynchronously and notify via SMS/WhatsApp when ready.
7. **FAQ content**: Store in database or CMS. Support full-text search across all languages. Return only the user's preferred language strings.
8. **Support channels**: Phone support via toll-free number. WhatsApp via Business API with chatbot fallback. Email via helpdesk system (Freshdesk/Zendesk).

## Flutter Implementation Notes

1. **Profile View**: Saffron gradient header with avatar initials circle. Stats row with 3 columns (Bookings, Requests, Rating). Menu items as list with icons and chevrons. Active counts shown as saffron badges.
2. **Settings**: Grouped sections (Notifications, Language, Account, About). Toggle switches use green/gray states. Language selector uses radio button pattern with checkmark on selected.
3. **Delete Account**: Show in red danger zone at bottom. Require confirmation dialog with "DELETE" text input before proceeding. Show grace period info.
4. **Help & Support**: Search bar at top. Quick contact buttons (Call, WhatsApp, Email) as 3 equal cards. FAQ as expandable accordion. Help topics as 2x2 grid.
5. **Phone change**: Navigate to OTP verification flow inline. After success, update displayed phone number.
6. **Role switch**: Show confirmation dialog. On success, reload app state with new role's dashboard.
