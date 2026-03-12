# Module 3: Equipment

> Screens: AddEquipmentDesign, AddEquipmentEmptyDesign, EquipmentDetailDesign, OwnerDashboardDesign (My Listings)

---

## Flow Summary

```
Owner adds equipment → List on platform → Farmers browse details → Check availability → Book

Owner Dashboard:
  - View my listings (active/paused)
  - Add new equipment
  - Edit existing equipment
  - Toggle availability
```

---

## 3.1 List Owner's Equipment

> Screen: OwnerDashboardDesign — "My Listings" section

```
GET /equipment/mine
```

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | string | `all` | `all`, `active`, `paused` |
| `cursor` | string | null | Pagination cursor |
| `limit` | int | 20 | Max 50 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "equipment": [
      {
        "id": "eq-uuid-001",
        "type": "tractor",
        "brand": "Mahindra",
        "model": "475 DI",
        "display_name": "Mahindra 475 DI",
        "horse_power": 50,
        "year_of_purchase": 2020,
        "has_operator": true,
        "price_per_hour": 1200,
        "price_per_day": 2400,
        "is_available": true,
        "status": "active",
        "photos": [
          { "id": "photo-1", "url": "https://cdn.kisanyantra.in/eq/photo-1.jpg", "is_primary": true }
        ],
        "location": {
          "address": "Hinganghat, Wardha, Maharashtra",
          "lat": 20.5488,
          "lng": 78.8438
        },
        "rating_avg": 4.8,
        "review_count": 23,
        "total_bookings": 38,
        "created_at": "2025-06-01T10:00:00Z"
      },
      {
        "id": "eq-uuid-002",
        "type": "harvester",
        "brand": "Combine",
        "model": "Harvester XL",
        "display_name": "Combine Harvester",
        "horse_power": null,
        "year_of_purchase": 2022,
        "has_operator": false,
        "price_per_hour": null,
        "price_per_day": 5000,
        "is_available": false,
        "status": "paused",
        "photos": [],
        "location": {
          "address": "Hinganghat, Wardha, Maharashtra",
          "lat": 20.5488,
          "lng": 78.8438
        },
        "rating_avg": 0,
        "review_count": 0,
        "total_bookings": 0,
        "created_at": "2025-07-01T10:00:00Z"
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

## 3.2 Get Equipment Detail

> Screen: EquipmentDetailDesign — Full detail page with availability calendar

```
GET /equipment/{equipment_id}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "eq-uuid-001",
    "type": "tractor",
    "brand": "Mahindra",
    "model": "475 DI",
    "display_name": "Mahindra 475 DI",
    "horse_power": 50,
    "year_of_purchase": 2020,
    "condition": "excellent",
    "has_operator": true,
    "price_per_hour": 1200,
    "price_per_day": 2400,
    "is_available": true,
    "supports_instant_booking": true,

    "photos": [
      { "id": "photo-1", "url": "https://cdn.kisanyantra.in/eq/photo-1.jpg", "is_primary": true },
      { "id": "photo-2", "url": "https://cdn.kisanyantra.in/eq/photo-2.jpg", "is_primary": false }
    ],

    "location": {
      "address": "Hinganghat, Wardha, Maharashtra",
      "lat": 20.5488,
      "lng": 78.8438,
      "distance_km": 2.4
    },

    "owner": {
      "id": "user-uuid-003",
      "full_name": "Harpreet Singh",
      "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png",
      "village": "Ludhiana",
      "state": "Punjab",
      "is_verified": true,
      "rating_avg": 4.8,
      "review_count": 23,
      "phone": "+919876543210"
    },

    "tags": ["50 HP", "Excellent Condition", "Driver Included", "2.4 km"],

    "rating_avg": 4.8,
    "review_count": 23,

    "availability": {
      "month": "2025-07",
      "available_dates": ["2025-07-01", "2025-07-02", "2025-07-03", "2025-07-06", "2025-07-07", "2025-07-08", "2025-07-09"],
      "booked_dates": ["2025-07-04", "2025-07-11", "2025-07-12"],
      "unavailable_dates": []
    },

    "recent_reviews": [
      {
        "id": "rev-001",
        "reviewer_name": "Ramu Kisan",
        "rating": 5,
        "comment": "Excellent tractor, very well maintained",
        "tags": ["on_time", "good_equipment"],
        "created_at": "2025-06-28T10:00:00Z"
      }
    ]
  }
}
```

---

## 3.3 Get Equipment Availability Calendar

> Screen: EquipmentDetailDesign — Availability calendar section

```
GET /equipment/{equipment_id}/availability
```

**Query Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `month` | string | Yes | `YYYY-MM` format, e.g. `2025-07` |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "equipment_id": "eq-uuid-001",
    "month": "2025-07",
    "dates": [
      { "date": "2025-07-01", "status": "available" },
      { "date": "2025-07-02", "status": "available" },
      { "date": "2025-07-03", "status": "available" },
      { "date": "2025-07-04", "status": "booked", "booking_id": "bk-uuid-001" },
      { "date": "2025-07-05", "status": "unavailable" },
      { "date": "2025-07-06", "status": "available" }
    ]
  }
}
```

---

## 3.4 Add Equipment

> Screen: AddEquipmentDesign / AddEquipmentEmptyDesign

```
POST /equipment
Content-Type: multipart/form-data
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `type` | string | Yes | `tractor`, `harvester`, `cultivator`, `pump` |
| `brand` | string | Yes | 2-100 chars |
| `model` | string | Yes | 2-100 chars |
| `year_of_purchase` | int | Yes | 1990-current year |
| `horse_power` | int | No | 1-500 |
| `has_operator` | bool | Yes | Whether driver is included |
| `price_per_hour` | int | No | In INR, min 100 |
| `price_per_day` | int | Yes | In INR, min 500 |
| `is_available` | bool | Yes | Current availability toggle |
| `location_address` | string | Yes | Full address text |
| `location_lat` | float | Yes | Latitude |
| `location_lng` | float | Yes | Longitude |
| `photos[]` | file[] | No | Up to 5 images, JPEG/PNG, max 5MB each |

**Response: 201**

```json
{
  "success": true,
  "data": {
    "id": "eq-uuid-003",
    "type": "tractor",
    "display_name": "John Deere 5310",
    "status": "active",
    "is_available": true,
    "created_at": "2025-07-10T10:00:00Z"
  },
  "message": "Equipment listed successfully"
}
```

---

## 3.5 Update Equipment

```
PATCH /equipment/{equipment_id}
Content-Type: multipart/form-data
```

**Headers:** `Authorization: Bearer <token>`

Same fields as create, all optional. Only send changed fields.

Additionally:

| Field | Type | Description |
|-------|------|-------------|
| `delete_photo_ids[]` | string[] | IDs of photos to remove |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "eq-uuid-001",
    "display_name": "Mahindra 475 DI",
    "updated_at": "2025-07-10T12:00:00Z"
  },
  "message": "Equipment updated successfully"
}
```

---

## 3.6 Toggle Equipment Availability

> Quick toggle from owner dashboard or equipment detail

```
PATCH /equipment/{equipment_id}/availability
```

**Request Body:**

```json
{
  "is_available": false
}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "eq-uuid-001",
    "is_available": false,
    "status": "paused"
  },
  "message": "Equipment availability updated"
}
```

---

## 3.7 Delete Equipment

```
DELETE /equipment/{equipment_id}
```

**Response: 200**

```json
{
  "success": true,
  "message": "Equipment deleted successfully"
}
```

**Error:** `409` if equipment has active bookings.

---

## Backend Implementation Notes

1. **Photo storage**: Store in cloud object storage (S3/GCS). Generate thumbnails (200x200) and full-size (800x800).
2. **Availability**: Compute from booked dates. Owner can manually mark dates as unavailable.
3. **Location**: Store as PostGIS point for spatial queries. Pre-compute geohash for efficient nearby searches.
4. **Status logic**: `active` = available for booking, `paused` = owner toggled off, `deleted` = soft-deleted.
5. **Equipment types**: Seed from fixed enum: `tractor`, `harvester`, `cultivator`, `pump`. Extensible via admin.

## Flutter Implementation Notes

1. Equipment type selector shows tractor/harvester/cultivator as large tap targets with emojis.
2. Photo upload: Show camera/gallery picker, preview before upload, support drag to reorder.
3. Pricing: Show both per-hour and per-day fields. Per-hour is optional.
4. Availability toggle is a switch component (green when on).
5. Location: Auto-detect from GPS, allow manual edit. Show on mini-map.
