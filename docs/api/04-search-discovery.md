# Module 4: Search & Discovery

> Screens: FarmerHomeDesign, HomeWithNotificationBadgeDesign, SearchDesign, SearchResultsDesign, SearchFilterTrayDesign, VoiceAgentDesign

---

## Flow Summary

```
Farmer Home → Quick Actions (Search / Voice)
  ├── Text Search → Results with filters → Equipment Detail
  └── Voice Agent (Kisan Mitra) → Transcription → Auto-search → Results

Farmer Home also shows:
  - Suggested equipment nearby (5 km radius)
  - Quick action buttons
  - Active booking count
```

---

## 4.1 Get Farmer Home Feed

> Screen: FarmerHomeDesign / HomeWithNotificationBadgeDesign

```
GET /home/farmer
```

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `lat` | float | null | Current latitude |
| `lng` | float | null | Current longitude |
| `radius_km` | int | 5 | Search radius for suggestions |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "user": {
      "full_name": "Ramu Kisan",
      "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png",
      "preferred_language": "hi"
    },

    "greeting": {
      "time_of_day": "morning",
      "text": {
        "en": "Good Morning",
        "hi": "सुप्रभात",
        "ta": "காலை வணக்கம்",
        "mr": "शुभ प्रभात"
      }
    },

    "stats": {
      "active_bookings": 2,
      "this_month_bookings": 3,
      "unread_notifications": 5
    },

    "suggested_equipment": [
      {
        "id": "eq-uuid-001",
        "type": "tractor",
        "display_name": "Mahindra 475 DI",
        "brand": "Mahindra",
        "price_per_day": 2400,
        "distance_km": 2.4,
        "rating_avg": 4.8,
        "review_count": 23,
        "has_operator": true,
        "is_available": true,
        "photo_url": "https://cdn.kisanyantra.in/eq/photo-1-thumb.jpg",
        "owner_name": "Harpreet Singh"
      }
    ],

    "owner_promo": {
      "show": true,
      "title": {
        "en": "Have equipment to rent?",
        "hi": "क्या किराए पर उपकरण है?"
      },
      "subtitle": {
        "en": "List it and earn directly from your phone.",
        "hi": "इसे सूचीबद्ध करें और सीधे कमाएँ।"
      }
    }
  }
}
```

---

## 4.2 Search Equipment

> Screen: SearchDesign / SearchResultsDesign

```
GET /equipment/search
```

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `q` | string | null | Text query, e.g. "tractor near Hinganghat" |
| `type` | string | null | `tractor`, `harvester`, `cultivator`, `pump` |
| `lat` | float | Required | Search center latitude |
| `lng` | float | Required | Search center longitude |
| `radius_km` | int | 10 | Max 50 |
| `min_price` | int | null | Min price per day (INR) |
| `max_price` | int | null | Max price per day (INR) |
| `min_rating` | float | null | Min rating (1.0-5.0) |
| `has_operator` | bool | null | Filter for operator included |
| `instant_booking` | bool | null | Only show instant-bookable |
| `available_now` | bool | null | Only currently available |
| `sort_by` | string | `distance` | `distance`, `price_low`, `price_high`, `rating`, `newest` |
| `cursor` | string | null | Pagination cursor |
| `limit` | int | 20 | Max 50 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "query": "tractor near Hinganghat",
    "total_count": 8,
    "results": [
      {
        "id": "eq-uuid-010",
        "type": "tractor",
        "display_name": "Mahindra 575 DI",
        "brand": "Mahindra",
        "model": "575 DI",
        "horse_power": 50,
        "price_per_hour": 900,
        "price_per_day": 2200,
        "has_operator": true,
        "supports_instant_booking": false,
        "is_available": true,
        "distance_km": 3.2,
        "rating_avg": 4.7,
        "review_count": 24,
        "photo_url": "https://cdn.kisanyantra.in/eq/photo-thumb.jpg",
        "owner": {
          "id": "user-uuid-010",
          "full_name": "Harpreet Singh",
          "is_verified": true
        },
        "location": {
          "address": "Ludhiana, Punjab",
          "lat": 20.56,
          "lng": 78.85
        }
      },
      {
        "id": "eq-uuid-011",
        "type": "tractor",
        "display_name": "John Deere 5310",
        "brand": "John Deere",
        "model": "5310",
        "horse_power": 55,
        "price_per_hour": 1200,
        "price_per_day": 2800,
        "has_operator": false,
        "supports_instant_booking": true,
        "is_available": true,
        "distance_km": 5.0,
        "rating_avg": 4.5,
        "review_count": 18,
        "photo_url": null,
        "owner": {
          "id": "user-uuid-011",
          "full_name": "Suresh Kumar",
          "is_verified": true
        },
        "location": {
          "address": "Wardha, Maharashtra",
          "lat": 20.55,
          "lng": 78.84
        }
      }
    ],
    "filters_applied": {
      "type": null,
      "radius_km": 10,
      "sort_by": "distance"
    },
    "pagination": {
      "next_cursor": "cursor-abc",
      "has_more": false,
      "total_count": 8
    }
  }
}
```

---

## 4.3 Get Search Filter Options

> Screen: SearchFilterTrayDesign — Bottom sheet filter tray

```
GET /equipment/search/filters
```

**Query Parameters:**

| Param | Type | Description |
|-------|------|-------------|
| `lat` | float | For location-aware options |
| `lng` | float | For location-aware options |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "equipment_types": [
      { "value": "tractor", "label": { "en": "Tractors", "hi": "ट्रैक्टर" }, "count": 12 },
      { "value": "harvester", "label": { "en": "Harvesters", "hi": "हार्वेस्टर" }, "count": 5 },
      { "value": "cultivator", "label": { "en": "Cultivators", "hi": "कल्टीवेटर" }, "count": 8 },
      { "value": "pump", "label": { "en": "Pumps", "hi": "पंप" }, "count": 3 }
    ],
    "price_range": {
      "min": 500,
      "max": 15000,
      "currency": "INR",
      "unit": "per_day"
    },
    "distance_options": [5, 10, 25, 50],
    "sort_options": [
      { "value": "distance", "label": { "en": "Distance", "hi": "दूरी" } },
      { "value": "price_low", "label": { "en": "Price: Low to High", "hi": "कीमत: कम से ज़्यादा" } },
      { "value": "price_high", "label": { "en": "Price: High to Low", "hi": "कीमत: ज़्यादा से कम" } },
      { "value": "rating", "label": { "en": "Rating", "hi": "रेटिंग" } },
      { "value": "newest", "label": { "en": "Newest", "hi": "नया" } }
    ],
    "quick_filters": [
      { "value": "high_rated", "label": { "en": "High rated", "hi": "उच्च रेटिंग" } },
      { "value": "instant", "label": { "en": "Instant booking", "hi": "तुरंत बुकिंग" } },
      { "value": "available_now", "label": { "en": "Available now", "hi": "अभी उपलब्ध" } },
      { "value": "with_operator", "label": { "en": "With operator", "hi": "चालक सहित" } }
    ]
  }
}
```

---

## 4.4 Voice Search (Kisan Mitra)

> Screen: VoiceAgentDesign — Voice agent listening and processing

### 4.4.1 Start Voice Session

```
POST /voice/session
```

**Request Body:**

```json
{
  "language": "hi",
  "lat": 20.5488,
  "lng": 78.8438
}
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "session_id": "voice-session-uuid-001",
    "websocket_url": "wss://api.kisanyantra.in/v1/voice/ws/voice-session-uuid-001",
    "greeting": {
      "text": "नमस्ते! मैं किसान मित्र हूँ। बताइए, आपको कौनसा उपकरण चाहिए?",
      "audio_url": "https://cdn.kisanyantra.in/voice/greeting-hi.mp3"
    }
  }
}
```

### 4.4.2 Send Voice Audio (REST fallback)

If WebSocket is not available, use REST:

```
POST /voice/transcribe
Content-Type: multipart/form-data
```

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `session_id` | string | Yes | From session creation |
| `audio` | file | Yes | Audio file (WAV/OGG/M4A), max 60 seconds |
| `language` | string | Yes | `en`, `hi`, `ta`, `mr` |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "transcription": "मुझे हिंगनघाट के पास ट्रैक्टर चाहिए",
    "intent": "search_equipment",
    "extracted_params": {
      "equipment_type": "tractor",
      "location": "Hinganghat",
      "lat": 20.5488,
      "lng": 78.8438
    },
    "search_url": "/equipment/search?type=tractor&lat=20.5488&lng=78.8438&radius_km=10",
    "response": {
      "text": "जी, हिंगनघाट के पास 8 ट्रैक्टर मिले। सबसे पास 3.2 किमी दूर है।",
      "audio_url": "https://cdn.kisanyantra.in/voice/response-001.mp3"
    }
  }
}
```

---

## 4.5 Search Suggestions / Autocomplete

> Screen: SearchDesign — As user types

```
GET /equipment/search/suggestions
```

**Query Parameters:**

| Param | Type | Description |
|-------|------|-------------|
| `q` | string | Partial query text |
| `lat` | float | Current lat |
| `lng` | float | Current lng |
| `limit` | int | Max 10 |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "suggestions": [
      { "text": "Tractor near Hinganghat", "type": "query" },
      { "text": "Mahindra 475 DI", "type": "equipment", "equipment_id": "eq-uuid-001" },
      { "text": "Harvester in Wardha", "type": "query" },
      { "text": "John Deere 5310", "type": "equipment", "equipment_id": "eq-uuid-011" }
    ],
    "recent_searches": [
      "Tractor near me",
      "Cultivator Wardha"
    ]
  }
}
```

---

## 4.6 Get Owner Dashboard Feed

> Screen: OwnerDashboardDesign

```
GET /home/owner
```

**Headers:** `Authorization: Bearer <token>`

**Response: 200**

```json
{
  "success": true,
  "data": {
    "user": {
      "full_name": "Harpreet Singh",
      "avatar_url": "https://cdn.kisanyantra.in/avatars/farmer_male_1.png",
      "village": "Ludhiana",
      "state": "Punjab"
    },

    "earnings": {
      "this_month": 54000,
      "total": 240000,
      "total_bookings": 38
    },

    "incoming_requests": [
      {
        "booking_id": "bk-uuid-pending-001",
        "farmer": {
          "id": "user-uuid-001",
          "full_name": "Ramu Kisan",
          "avatar_url": null,
          "rating_avg": 4.7,
          "distance_km": 3.5
        },
        "equipment": {
          "id": "eq-uuid-001",
          "display_name": "John Deere 5310",
          "horse_power": 50
        },
        "dates": "Jul 10-12",
        "start_date": "2025-07-10",
        "end_date": "2025-07-12",
        "duration_days": 3,
        "total_amount": 7200,
        "payment_method": "cash",
        "farm_location": "Wardha, Maharashtra",
        "expires_in_seconds": 6150,
        "voice_message_url": "https://cdn.kisanyantra.in/voice/msg-001.ogg",
        "created_at": "2025-07-05T14:00:00Z"
      }
    ],

    "my_listings": [
      {
        "id": "eq-uuid-001",
        "type": "tractor",
        "display_name": "Mahindra 475 DI",
        "horse_power": 50,
        "has_operator": true,
        "price_per_day": 2400,
        "is_available": true,
        "status": "active",
        "photo_url": "https://cdn.kisanyantra.in/eq/photo-1-thumb.jpg"
      }
    ],

    "unread_notifications": 3
  }
}
```

---

## Backend Implementation Notes

1. **Geospatial search**: Use PostGIS `ST_DWithin` for radius-based equipment search. Index on location column.
2. **Full-text search**: Use PostgreSQL `tsvector` or Elasticsearch for text queries. Support Hindi, Tamil, Marathi tokenization.
3. **Voice processing**: Integrate with Google Speech-to-Text or Whisper API. Support Hindi, Tamil, Marathi, English.
4. **Intent extraction**: Use NLP pipeline (or LLM) to extract equipment type, location, dates from transcribed text.
5. **Search ranking**: Primary sort by distance, secondary by rating. Boost instant-bookable and verified owners.
6. **Caching**: Cache search filter options for 1 hour. Cache home feed for 5 minutes per user.
7. **Owner request expiry**: Booking requests expire after configurable time (shown as countdown timer). Implement TTL-based auto-decline.

## Flutter Implementation Notes

1. **Search bar**: Show search suggestions as user types (debounce 300ms).
2. **Filter tray**: Implement as bottom sheet. Preserve filter state when closing/reopening.
3. **Quick filters**: Horizontal scrollable chip list above results.
4. **Results**: Show as scrollable cards with equipment image, name, rating, distance, price, and action buttons.
5. **Empty state**: Show "No results found" with suggestion to adjust filters.
6. **Voice agent**: Use `speech_to_text` or `record` package. Show animated waveform while listening. Display transcription in real-time.
7. **Owner dashboard**: Show earnings card with gradient. Incoming requests have countdown timer badge.
