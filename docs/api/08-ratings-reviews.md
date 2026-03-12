# Module 8: Ratings & Reviews

> Screens: RatingScreenDesign, RateBookingDesign, CompleteBookingDesign (inline rating)

---

## Flow Summary

```
Booking Completed → Rate Experience prompt
  → Overall star rating (1-5)
  → Detailed ratings (equipment quality, owner behavior, on-time, value)
  → Written review (optional, max 300 chars)
  → Quick tags (professional, on time, good equipment, etc.)
  → Photos (optional, up to 3)
  → Submit
```

---

## 8.1 Submit Review

> Screen: RateBookingDesign — Full rating form

```
POST /reviews
Content-Type: multipart/form-data
```

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `booking_id` | UUID | Yes | Must be a completed booking |
| `overall_rating` | int | Yes | 1-5 |
| `equipment_quality_rating` | int | No | 1-5 |
| `owner_behavior_rating` | int | No | 1-5 |
| `on_time_rating` | int | No | 1-5 |
| `value_for_money_rating` | int | No | 1-5 |
| `comment` | string | No | Max 300 characters |
| `tags[]` | string[] | No | Array of predefined tag IDs |
| `photos[]` | file[] | No | Up to 3 images, JPEG/PNG, max 5MB each |

**Example Request:**

```json
{
  "booking_id": "bk-uuid-001",
  "overall_rating": 5,
  "equipment_quality_rating": 5,
  "owner_behavior_rating": 5,
  "on_time_rating": 4,
  "value_for_money_rating": 5,
  "comment": "Tractor was on time and in great condition. Driver was helpful!",
  "tags": ["on_time", "good_equipment", "professional"]
}
```

**Response: 201**

```json
{
  "success": true,
  "data": {
    "id": "rev-uuid-001",
    "booking_id": "bk-uuid-001",
    "overall_rating": 5,
    "equipment_quality_rating": 5,
    "owner_behavior_rating": 5,
    "on_time_rating": 4,
    "value_for_money_rating": 5,
    "comment": "Tractor was on time and in great condition. Driver was helpful!",
    "tags": ["on_time", "good_equipment", "professional"],
    "photos": [
      { "id": "rp-001", "url": "https://cdn.kisanyantra.in/reviews/rp-001.jpg" }
    ],
    "created_at": "2025-07-12T20:00:00Z"
  },
  "message": "Review submitted successfully!"
}
```

**Error Responses:**

- `400` — Invalid rating values
- `409` — Review already submitted for this booking
- `403` — Can only review completed bookings you participated in

---

## 8.2 Get Available Tags

```
GET /reviews/tags
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "tags": [
      { "id": "professional", "label": { "en": "Professional", "hi": "पेशेवर" } },
      { "id": "on_time", "label": { "en": "On Time", "hi": "समय पर" } },
      { "id": "good_equipment", "label": { "en": "Good Equipment", "hi": "अच्छा उपकरण" } },
      { "id": "helpful", "label": { "en": "Helpful", "hi": "सहायक" } },
      { "id": "reasonable", "label": { "en": "Reasonable Price", "hi": "उचित मूल्य" } },
      { "id": "well_maintained", "label": { "en": "Well Maintained", "hi": "अच्छी तरह से रखरखाव" } },
      { "id": "good_condition", "label": { "en": "Good Condition", "hi": "अच्छी स्थिति" } },
      { "id": "helpful_driver", "label": { "en": "Helpful Driver", "hi": "सहायक चालक" } },
      { "id": "fair_price", "label": { "en": "Fair Price", "hi": "उचित कीमत" } }
    ]
  }
}
```

---

## 8.3 Get Reviews for Equipment

```
GET /equipment/{equipment_id}/reviews
```

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `sort_by` | string | `newest` | `newest`, `highest`, `lowest` |
| `cursor` | string | null | Pagination cursor |
| `limit` | int | 10 | Max 50 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "equipment_id": "eq-uuid-001",
    "rating_summary": {
      "average": 4.8,
      "total_reviews": 23,
      "distribution": {
        "5": 18,
        "4": 3,
        "3": 1,
        "2": 1,
        "1": 0
      },
      "top_tags": [
        { "tag": "on_time", "count": 19 },
        { "tag": "good_equipment", "count": 17 },
        { "tag": "professional", "count": 15 }
      ]
    },
    "reviews": [
      {
        "id": "rev-uuid-001",
        "reviewer": {
          "full_name": "Ramu Kisan",
          "avatar_url": null
        },
        "overall_rating": 5,
        "comment": "Tractor was on time and in great condition. Driver was helpful!",
        "tags": ["on_time", "good_equipment"],
        "photos": [
          { "url": "https://cdn.kisanyantra.in/reviews/rp-001-thumb.jpg" }
        ],
        "created_at": "2025-07-12T20:00:00Z"
      }
    ],
    "pagination": {
      "next_cursor": "cursor-rev",
      "has_more": true,
      "total_count": 23
    }
  }
}
```

---

## 8.4 Get Reviews for User (Owner)

```
GET /users/{user_id}/reviews
```

Same response structure as equipment reviews, filtered by owner.

---

## 8.5 Get My Pending Reviews

> Show prompts for bookings that need rating

```
GET /reviews/pending
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "pending_reviews": [
      {
        "booking_id": "bk-uuid-005",
        "booking_number": "BK-2025-07-0838",
        "equipment_name": "Mahindra 475 DI",
        "owner_name": "Harpreet Singh",
        "completed_at": "2025-07-12T18:00:00Z",
        "days_since_completion": 2
      }
    ]
  }
}
```

---

## Backend Implementation Notes

1. **One review per booking**: Enforce unique constraint on `(booking_id, reviewer_id)`.
2. **Rating aggregation**: Maintain running averages on equipment and user records. Update on review submission.
3. **Photo storage**: Store review photos in object storage. Generate thumbnails (200x200) for list views.
4. **Tag counts**: Maintain per-equipment tag counts for the "top tags" feature. Update atomically on review submission.
5. **Moderation**: Flag reviews with profanity or spam. Consider a simple keyword filter initially.
6. **Rating distribution**: Pre-compute histogram (count of 1-5 star reviews) for display efficiency.

## Flutter Implementation Notes

1. **RatingScreenDesign**: Dark header with equipment info. Star selector with tap-to-rate. Comment box with character counter. Tag chips are toggleable.
2. **RateBookingDesign**: More detailed version with per-category ratings (equipment quality, owner behavior, on-time, value). Photo upload grid (3 slots).
3. **Star display**: Use half-star support for averages (e.g., 4.5 shows 4.5 filled stars). Gold color `#F5A623`.
4. **Tags**: Wrap in a horizontal flow layout. Selected tags use saffron background with white text.
5. **Photo upload**: Camera icon to add, tap existing to preview/remove.
6. **Post-submission**: Show success message and navigate back to booking detail or home.
