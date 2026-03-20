# Module 3: Equipment

> Screens: AddEquipmentDesign, AddEquipmentEmptyDesign, EquipmentDetailDesign, OwnerDashboardDesign (My Listings), OwnerEquipmentListDesign, EquipmentEditDesign

---

## Flow Summary

```
Owner adds equipment → List on platform → Farmers browse details → Check availability → Book

Owner Equipment Management:
  OwnerEquipmentListDesign → View all listings (Listed/Available/Paused tabs)
    ├── Add Equipment → AddEquipmentEmptyDesign → AddEquipmentDesign
    ├── Edit Equipment → EquipmentEditDesign (brand, model, year, HP, pricing, availability, photos)
    ├── Pause / Resume listing → Toggle availability
    └── Delete listing → Remove from platform

Equipment Detail (Farmer View):
  EquipmentDetailDesign → Full detail with photos, specs, reviews, calendar, Book Now CTA

Equipment Stats per listing (OwnerEquipmentListDesign):
  - Total bookings count
  - Total earnings from this equipment
  - Rating and review count
  - Current status (Available / Paused)
```

---

## 3.1 List Owner's Equipment

> Screen: OwnerEquipmentListDesign — Full equipment management view with stats
> Also shown in: OwnerDashboardDesign — "My Listings" section

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
    },
    "summary": {
      "total_listed": 3,
      "available": 2,
      "paused": 1
    }
  }
}
```

The `summary` object powers the stats bar in the OwnerEquipmentListDesign header (3 stat cards: Listed, Available, Paused).

Each equipment item includes stats used by OwnerEquipmentListDesign cards:

| Field | Type | Description |
|-------|------|-------------|
| `total_bookings` | int | Lifetime booking count for this equipment |
| `total_earned` | int | Lifetime earnings in INR from this equipment |
| `rating_avg` | float | Average rating (1.0-5.0) |
| `review_count` | int | Number of reviews |

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

> Screen: EquipmentEditDesign — Edit form with all equipment fields

```
PATCH /equipment/{equipment_id}
Content-Type: multipart/form-data
```

**Headers:** `Authorization: Bearer <token>`

**Editable fields (all optional — send only changed fields):**

| Field | Type | Description |
|-------|------|-------------|
| `brand` | string | Brand name (2-100 chars) |
| `model` | string | Model name (2-100 chars) |
| `year_of_purchase` | int | 1990-current year |
| `horse_power` | int | 1-500 |
| `condition` | string | `excellent`, `good`, `fair` |
| `has_operator` | bool | Whether driver is included |
| `price_per_hour` | int | INR, min 100 |
| `price_per_day` | int | INR, min 500 |
| `is_available` | bool | Current availability toggle |
| `location_address` | string | Full address text |
| `location_lat` | float | Latitude |
| `location_lng` | float | Longitude |
| `description` | string | Free-text description, max 500 chars |
| `photos[]` | file[] | New photos to add (up to 5 total, JPEG/PNG, max 5MB each) |
| `delete_photo_ids[]` | string[] | IDs of photos to remove |

**Note:** `type` (equipment type) is **locked after creation** — shown as read-only in EquipmentEditDesign with a lock icon.

**Response: 200**

```json
{
  "success": true,
  "data": {
    "id": "eq-uuid-001",
    "display_name": "Mahindra 475 DI",
    "condition": "excellent",
    "price_per_day": 2400,
    "price_per_hour": 400,
    "is_available": true,
    "description": "Well maintained tractor with new tires. Available with operator.",
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
6. **Condition field**: Enum: `excellent`, `good`, `fair`. Used in EquipmentEditDesign as a dropdown.
7. **Description field**: Free-text, max 500 chars. Shown in EquipmentDetailDesign. Supports all 4 languages.
8. **Delete with active bookings**: `DELETE /equipment/{id}` returns `409` if equipment has pending/confirmed bookings. EquipmentEditDesign shows warning: "This will permanently remove this listing and cancel any pending bookings."
9. **Earnings per equipment**: Aggregate from completed bookings for this equipment. Shown in OwnerEquipmentListDesign.

## Flutter Implementation Notes

1. **OwnerEquipmentListDesign**: Green gradient header with summary stats (Listed, Available, Paused). Add Equipment button in header. Cards show equipment photo, name, HP, price, rating, booking count, earnings. Action buttons: Edit, Pause/Resume, Delete.
2. **EquipmentEditDesign**: Green gradient header. Form fields for all editable attributes. Equipment type shown as locked/read-only. Photo section with change photo button. Pricing grid (per day + per hour). Availability toggle (green switch). Description textarea. Danger zone at bottom with Delete button and warning text.
3. Equipment type selector shows tractor/harvester/cultivator as large tap targets with emojis.
4. Photo upload: Show camera/gallery picker, preview before upload, support drag to reorder.
5. Pricing: Show both per-hour and per-day fields. Per-hour is optional.
6. Availability toggle is a switch component (green when on).
7. Location: Auto-detect from GPS, allow manual edit. Show on mini-map.
