# Module 10: Location & Maps

> Screens: ViewOnMapDesign, BookingDetailDesign (location section), BookingStatusTrackingDesign (current location)

---

## Flow Summary

```
Equipment search → Location-based results (distance from user)
Booking detail → View farm location on map
Status tracking → Live equipment location
Map view → Directions, distance, estimated time
```

---

## 10.1 Geocode Address

> Convert text address to coordinates

```
GET /location/geocode
```

**Query Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `address` | string | Yes | Address text, e.g. "Hinganghat, Wardha, Maharashtra" |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "address": "Hinganghat, Wardha, Maharashtra",
    "lat": 20.5488,
    "lng": 78.8438,
    "formatted_address": "Hinganghat, Wardha District, Maharashtra 442301, India"
  }
}
```

---

## 10.2 Reverse Geocode

> Convert coordinates to address

```
GET /location/reverse-geocode
```

**Query Parameters:**

| Param | Type | Required |
|-------|------|----------|
| `lat` | float | Yes |
| `lng` | float | Yes |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "lat": 20.5488,
    "lng": 78.8438,
    "address": "Hinganghat, Wardha, Maharashtra",
    "village": "Hinganghat",
    "district": "Wardha",
    "state": "Maharashtra",
    "pincode": "442301"
  }
}
```

---

## 10.3 Get Distance & ETA

> Screen: ViewOnMapDesign — Distance and estimated travel time

```
GET /location/distance
```

**Query Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `from_lat` | float | Yes | Origin latitude |
| `from_lng` | float | Yes | Origin longitude |
| `to_lat` | float | Yes | Destination latitude |
| `to_lng` | float | Yes | Destination longitude |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "distance_km": 2.4,
    "estimated_time_minutes": 15,
    "route_summary": "Via NH-161",
    "directions_url": "https://maps.google.com/maps?saddr=20.5488,78.8438&daddr=20.5600,78.8500"
  }
}
```

---

## 10.4 Get Equipment Location (Live Tracking)

> Screen: BookingStatusTrackingDesign — Real-time equipment position

```
GET /bookings/{booking_id}/location
```

**Response: 200**

```json
{
  "success": true,
  "data": {
    "booking_id": "bk-uuid-001",
    "equipment": {
      "lat": 20.5500,
      "lng": 78.8460,
      "accuracy_meters": 15,
      "heading": 180,
      "speed_kmh": 25,
      "updated_at": "2025-07-10T08:00:00Z"
    },
    "destination": {
      "address": "Your Farm - Wardha, Maharashtra",
      "lat": 20.5488,
      "lng": 78.8438,
      "distance_km": 1.2,
      "eta_minutes": 8
    },
    "is_tracking_active": true
  }
}
```

---

## 10.5 Update Equipment Location (Owner/Driver)

```
POST /bookings/{booking_id}/location
```

**Request Body:**

```json
{
  "lat": 20.5500,
  "lng": 78.8460,
  "accuracy_meters": 15,
  "heading": 180,
  "speed_kmh": 25
}
```

**Response: 200**

```json
{
  "success": true,
  "message": "Location updated"
}
```

---

## 10.6 Search Location (for Map View)

> Screen: ViewOnMapDesign — Search bar

```
GET /location/search
```

**Query Parameters:**

| Param | Type | Required |
|-------|------|----------|
| `q` | string | Yes |
| `lat` | float | No (bias results) |
| `lng` | float | No (bias results) |
| `limit` | int | No (default 5) |

**Response: 200**

```json
{
  "success": true,
  "data": {
    "results": [
      {
        "address": "Wardha, Maharashtra",
        "lat": 20.7453,
        "lng": 78.6022,
        "type": "district"
      },
      {
        "address": "Wardha Railway Station",
        "lat": 20.7480,
        "lng": 78.6042,
        "type": "landmark"
      }
    ]
  }
}
```

---

## Backend Implementation Notes

1. **Geocoding**: Use Google Maps Geocoding API or OpenStreetMap Nominatim. Cache results to reduce API costs.
2. **Distance calculation**: Use Haversine formula for straight-line distance. Use routing API (Google Directions / OSRM) for road distance and ETA.
3. **Live tracking**: During `on_the_way` and `in_use` statuses, accept location updates from owner's device. Store in Redis for real-time access.
4. **Location update frequency**: Owner app sends location every 30 seconds during active delivery/usage.
5. **Privacy**: Only share equipment location with the booking farmer. Stop sharing after booking completion.

## Flutter Implementation Notes

1. **Map view**: Use `google_maps_flutter` or `flutter_map` (OpenStreetMap). Show farm pin and equipment pin with distance line.
2. **Live tracking**: Poll `/bookings/{id}/location` every 10 seconds during active states. Animate marker movement.
3. **Directions**: Launch Google Maps or Apple Maps via `url_launcher` for turn-by-turn navigation.
4. **Map controls**: Zoom in/out, center on user location, toggle map type (standard/satellite).
5. **Location permission**: Request `ACCESS_FINE_LOCATION`. Show explanation dialog for why location is needed.
6. **Offline**: Cache last known location. Show "Location unavailable" if no network.
