# Module 2: User Profile

> Screens: ProfileSetupDesign, ProfileSetupEmptyDesign, ProfileSetupFarmerDesign, ProfileSetupOwnerDesign, ProfileSetupTamilDesign, ProfileSetupMarathiDesign, UpdateProfileDesign

---

## Flow Summary

```
New User (from Auth) → Profile Setup (Step 3 of 3)
  ├── Farmer: avatar, name, village, district, state, farm_size, equipment_preferences, language
  └── Owner:  avatar, name, village, district, state, equipment_owned, bank_account, language

Existing User → Update Profile
```

---

## 2.1 Get Current User Profile

```
GET /users/me
```

**Headers:** `Authorization: Bearer <token>`

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "user-uuid-001",
    "phone": "+919876543210",
    "full_name": "Ramu Kisan",
    "role": "farmer",
    "avatar_id": "farmer_male_1",
    "village": "Hinganghat",
    "district": "Wardha",
    "state": "Maharashtra",
    "preferred_language": "hi",
    "profile_complete": true,
    "created_at": "2025-07-01T10:00:00Z",
    "updated_at": "2025-07-05T14:30:00Z",

    "farmer_profile": {
      "farm_size_acres": "5-10",
      "equipment_preferences": ["tractor", "harvester"]
    },

    "owner_profile": null,

    "stats": {
      "total_bookings": 8,
      "active_bookings": 2,
      "total_spent": 21000,
      "member_since": "Jul 2025",
      "avg_rating_given": 4.5
    }
  }
}
```

**Owner profile variant (when role is "owner" or "both"):**

```json
{
  "owner_profile": {
    "equipment_types_owned": [
      { "type": "tractor", "count": 2 },
      { "type": "cultivator", "count": 1 }
    ],
    "bank_account": {
      "is_linked": false,
      "bank_name": null,
      "account_last_4": null
    }
  },
  "stats": {
    "this_month_earnings": 54000,
    "total_earnings": 240000,
    "total_bookings_received": 38,
    "active_listings": 2,
    "avg_rating_received": 4.8
  }
}
```

---

## 2.2 Setup Profile (New User)

> Screen: ProfileSetupFarmerDesign / ProfileSetupOwnerDesign

```
PUT /users/me/setup
```

**Headers:** `Authorization: Bearer <token>`

**Request Body (Farmer):**

```json
{
  "full_name": "Ramu Kisan",
  "avatar_id": "farmer_male_1",
  "village": "Hinganghat",
  "district": "Wardha",
  "state": "Maharashtra",
  "preferred_language": "hi",
  "farmer_profile": {
    "farm_size_acres": "5-10",
    "equipment_preferences": ["tractor", "harvester"]
  },
  "terms_accepted": true
}
```

**Request Body (Owner):**

```json
{
  "full_name": "Suresh Patil",
  "avatar_id": "farmer_neutral_1",
  "village": "Hinganghat",
  "district": "Wardha",
  "state": "Maharashtra",
  "preferred_language": "hi",
  "owner_profile": {
    "equipment_types_owned": [
      { "type": "tractor", "count": 2 },
      { "type": "cultivator", "count": 1 }
    ]
  },
  "terms_accepted": true
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `full_name` | string | Yes | 2-100 characters |
| `avatar_id` | string | Yes | One of predefined avatar IDs (see below) |
| `village` | string | Yes | 2-100 characters |
| `district` | string | Yes | 2-100 characters |
| `state` | string | Yes | Valid Indian state name |
| `preferred_language` | string | Yes | `en`, `hi`, `ta`, `mr` |
| `farmer_profile.farm_size_acres` | string | No | `1-5`, `5-10`, `10+` |
| `farmer_profile.equipment_preferences` | string[] | No | Array of: `tractor`, `harvester`, `cultivator`, `pump` |
| `owner_profile.equipment_types_owned` | object[] | No | Array of `{ type, count }` |
| `terms_accepted` | boolean | Yes | Must be `true` |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "user-uuid-001",
    "profile_complete": true,
    "role": "farmer",
    "redirect_to": "farmer_home"
  },
  "message": "Profile setup complete"
}
```

---

## 2.3 Update Profile

> Screen: UpdateProfileDesign

```
PATCH /users/me
```

**Headers:** `Authorization: Bearer <token>`

**Request Body (partial update):**

```json
{
  "full_name": "Ramu Kisan Updated",
  "village": "New Village",
  "district": "New District",
  "preferred_language": "ta",
  "farmer_profile": {
    "farm_size_acres": "10+",
    "equipment_preferences": ["tractor", "cultivator", "pump"]
  }
}
```

All fields are optional — only send fields that changed.

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "user-uuid-001",
    "full_name": "Ramu Kisan Updated",
    "village": "New Village",
    "district": "New District",
    "preferred_language": "ta",
    "updated_at": "2025-07-10T08:00:00Z"
  },
  "message": "Profile updated successfully"
}
```

---

## 2.4 Switch Role

> Screen: OwnerDashboardDesign / FarmerHomeDesign — "Switch to Owner Mode" / "Back to Farmer"

```
POST /users/me/switch-role
```

**Request Body:**

```json
{
  "target_role": "owner"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `target_role` | string | Yes | `farmer` or `owner` |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "active_role": "owner",
    "role": "both",
    "owner_profile_complete": true,
    "redirect_to": "owner_dashboard"
  }
}
```

If the user hasn't set up their owner profile yet:

```json
{
  "success": true,
  "data": {
    "active_role": "owner",
    "role": "both",
    "owner_profile_complete": false,
    "redirect_to": "owner_profile_setup"
  }
}
```

---

## 2.5 Link Bank Account (Owner)

```
POST /users/me/bank-account
```

**Request Body:**

```json
{
  "account_holder_name": "Suresh Patil",
  "account_number": "1234567890123456",
  "ifsc_code": "SBIN0001234",
  "bank_name": "State Bank of India",
  "upi_id": "suresh@upi"
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `account_holder_name` | string | Yes | 2-100 chars |
| `account_number` | string | Yes | 10-18 digits |
| `ifsc_code` | string | Yes | 11 chars, pattern: `^[A-Z]{4}0[A-Z0-9]{6}$` |
| `bank_name` | string | Yes | Valid bank name |
| `upi_id` | string | No | Valid UPI ID format |

**Response: 201**

```json
{
  "success": true,
  "data": {
    "bank_account": {
      "is_linked": true,
      "bank_name": "State Bank of India",
      "account_last_4": "3456",
      "upi_id": "suresh@upi"
    }
  },
  "message": "Bank account linked successfully"
}
```

---

## 2.6 Upload Avatar / Profile Photo

```
POST /users/me/avatar
Content-Type: multipart/form-data
```

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `avatar_type` | string | Yes | `preset` or `custom` |
| `preset_id` | string | If preset | e.g. `farmer_male_1` |
| `photo` | file | If custom | JPEG/PNG, max 5MB |

**Preset Avatar IDs:**

| ID | Description |
|----|-------------|
| `farmer_male_1` | Male farmer (young) |
| `farmer_female_1` | Female farmer |
| `farmer_neutral_1` | Gender-neutral farmer |
| `farmer_elder_male` | Elder male |
| `farmer_elder_female` | Elder female |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "avatar_id": "farmer_male_1",
    "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png"
  }
}
```

---

## 2.7 Get States & Districts (Reference Data)

```
GET /reference/states
```

**Response: 200**

```json
{
  "success": true,
  "data": [
    {
      "state": "Maharashtra",
      "districts": ["Wardha", "Nagpur", "Pune", "Nashik", "..."]
    },
    {
      "state": "Punjab",
      "districts": ["Ludhiana", "Amritsar", "Jalandhar", "..."]
    }
  ]
}
```

---

## Backend Implementation Notes

1. **Profile completeness**: Track `profile_complete` boolean. Incomplete profiles should be redirected to setup on login.
2. **Role management**: A user can be `farmer`, `owner`, or `both`. The `active_role` determines the dashboard shown.
3. **Avatar storage**: Preset avatars served from CDN. Custom photos stored in object storage (S3/GCS), resized to 256x256.
4. **Bank account verification**: Consider integrating with a bank verification API (Razorpay, Cashfree) for IFSC/account validation.
5. **State/District data**: Pre-seed from Census of India data. Cache aggressively.

## Flutter Implementation Notes

1. Profile setup is Step 3 of 3 in the onboarding flow. Show progress bar at 100%.
2. Farm size selector is a segmented control: `1-5 acres`, `5-10 acres`, `10+ acres`.
3. Equipment preferences use chip selectors (multi-select).
4. The "Change" button next to language opens the language picker inline.
5. Terms & Conditions checkbox must be checked before the submit button is enabled.
6. On role switch, cache both profile states locally to enable fast switching without API calls.
