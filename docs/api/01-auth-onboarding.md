# Module 1: Authentication & Onboarding

> Screens: LanguageSelectDesign, LandingHomeDesign, RoleSelectDesign, RoleSelectFarmerDesign, RoleSelectOwnerDesign, OTPVerificationDesign, RequestPhoneVerifyDesign, RequestOTPDesign, BookingPhoneVerifyDesign, BookingOTPDesign, SearchGuestDesign, SessionExpiredLoginDesign

---

## Flow Summary

### Search-First Entry (Farmer — Primary Flow)

The app prioritizes search over registration. Farmers can search without signing up.

```
1. User opens app → Select Language (LanguageSelectDesign)
2. Landing Home (LandingHomeDesign) → Choose: "Find Equipment" or "List My Equipment"
3a. Farmer taps "Find Equipment" → Guest Search (SearchGuestDesign) — NO registration needed
4a. Search Results → If found: Equipment Detail → Book (requires phone verification inline)
4b. Search Results → If empty: "Post a Request" → Phone Verify inline → OTP → Request Posted
5. After first booking/request, prompt to complete profile (deferred)
```

### Owner Onboarding (Full Registration Required)

```
1. Language Select → Landing Home → "List My Equipment"
2. Owner Role + Phone (RoleSelectOwnerDesign) → Send OTP
3. OTP Verification (OTPVerificationDesign) → Verify
4. Profile Setup (Module 2) → Add First Equipment
```

### Inline Phone Verification (Context-Specific)

Phone verification is embedded inline during booking and request flows:

```
Request Flow:  SearchResultsEmpty → PostRequest → RequestPhoneVerifyDesign → RequestOTPDesign → Request Posted
Booking Flow:  BookEquipment → BookingPhoneVerifyDesign → BookingOTPDesign → Booking Confirmed
```

### Session Recovery

```
Token expired → SessionExpiredLoginDesign → Re-enter phone → OTP → Resume
```

---

## 1.1 Set Language Preference (Pre-Auth)

> Screen: LanguageSelectDesign — User selects Hindi, Tamil, or Marathi before signing in.

```
POST /auth/language
```

**Request Body:**

```json
{
  "language": "hi",
  "device_id": "uuid-device-123"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `language` | string | Yes | `en`, `hi`, `ta`, `mr` |
| `device_id` | string | Yes | Unique device identifier |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "language": "hi",
    "device_id": "uuid-device-123"
  },
  "message": "Language preference saved"
}
```

---

## 1.2 Send OTP

> Screen: RoleSelectDesign — User enters phone number and selects role.

```
POST /auth/otp/send
```

**Request Body:**

```json
{
  "phone": "+919876543210",
  "role": "farmer",
  "language": "hi",
  "device_id": "uuid-device-123"
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `phone` | string | Yes | Indian mobile: `+91XXXXXXXXXX` (10 digits after +91) |
| `role` | string | Yes | `farmer` or `owner` |
| `language` | string | Yes | `en`, `hi`, `ta`, `mr` |
| `device_id` | string | Yes | Unique device ID |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "otp_id": "otp-uuid-456",
    "phone": "+919876543210",
    "expires_in_seconds": 300,
    "resend_after_seconds": 30
  },
  "message": "OTP sent successfully"
}
```

**Error Responses:**

- `400` — Invalid phone number format
- `429` — Too many OTP requests (rate limit: 5 per hour per phone)

---

## 1.3 Verify OTP

> Screen: OTPVerificationDesign — User enters 6-digit code.

```
POST /auth/otp/verify
```

**Request Body:**

```json
{
  "otp_id": "otp-uuid-456",
  "phone": "+919876543210",
  "otp_code": "547283",
  "device_id": "uuid-device-123"
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `otp_id` | string | Yes | From send OTP response |
| `phone` | string | Yes | Must match the one used in send |
| `otp_code` | string | Yes | Exactly 6 digits |
| `device_id` | string | Yes | Must match |

**Response: 200 (Existing User)**

```json
{
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "rt-opaque-token-789",
    "token_type": "Bearer",
    "expires_in": 86400,
    "is_new_user": false,
    "user": {
      "id": "user-uuid-001",
      "phone": "+919876543210",
      "full_name": "Ramu Kisan",
      "role": "farmer",
      "avatar_id": "farmer_male_1",
      "preferred_language": "hi",
      "profile_complete": true
    }
  }
}
```

**Response: 201 (New User)**

```json
{
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "rt-opaque-token-789",
    "token_type": "Bearer",
    "expires_in": 86400,
    "is_new_user": true,
    "user": {
      "id": "user-uuid-002",
      "phone": "+919876543210",
      "role": "farmer",
      "profile_complete": false
    }
  }
}
```

**Error Responses:**

- `400` — Invalid OTP code
- `410` — OTP expired
- `429` — Too many failed attempts (max 5 per OTP)

---

## 1.4 Resend OTP

```
POST /auth/otp/resend
```

**Request Body:**

```json
{
  "otp_id": "otp-uuid-456",
  "phone": "+919876543210"
}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "otp_id": "otp-uuid-789",
    "expires_in_seconds": 300,
    "resend_after_seconds": 30
  },
  "message": "OTP resent successfully"
}
```

---

## 1.5 Refresh Token

```
POST /auth/token/refresh
```

**Request Body:**

```json
{
  "refresh_token": "rt-opaque-token-789"
}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "rt-new-opaque-token-101",
    "expires_in": 86400
  }
}
```

---

## 1.6 Logout

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

---

## Backend Implementation Notes

1. **OTP Delivery**: Integrate with SMS gateway (e.g., MSG91, Twilio) for sending OTPs. Support voice OTP fallback for areas with poor SMS reception.
2. **Rate Limiting**: Max 5 OTP sends per phone per hour; max 5 verify attempts per OTP.
3. **OTP Storage**: Store OTP hashed in Redis with 5-minute TTL.
4. **User Creation**: Auto-create user record on first successful OTP verification. The `role` from the send request is persisted.
5. **JWT Payload**: Include `user_id`, `role`, `phone`, `iat`, `exp`.
6. **Device Management**: Track active devices per user for push notification targeting and security.

## Flutter Implementation Notes

1. Store tokens securely using `flutter_secure_storage`.
2. Auto-navigate: if `is_new_user` is `true`, go to Profile Setup; otherwise go to Home.
3. Implement countdown timer for OTP resend (typically 30 seconds, use `resend_after_seconds` from response).
4. The OTP input should be 6 individual boxes that auto-advance on digit entry.
5. Support auto-read of SMS OTP on Android via `sms_autofill` package.
