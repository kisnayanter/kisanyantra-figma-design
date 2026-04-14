# Operator & Owner Equipment Management - Comprehensive Requirements Document

## Document Overview

This document provides comprehensive requirements for implementing Operator Screens and Owner Equipment Management functionality in the KisanYantra platform. It covers both Backend (Python) and Frontend (Flutter) implementations, integrating with the existing design system and theme architecture.

**Version:** 1.0  
**Last Updated:** April 14, 2026  
**Status:** Draft

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Operator Screens Overview](#operator-screens-overview)
3. [Owner Equipment Management Overview](#owner-equipment-management-overview)
4. [Design System Integration](#design-system-integration)
5. [Backend API Requirements](#backend-api-requirements)
6. [Data Models & Schemas](#data-models--schemas)
7. [Flutter Implementation Requirements](#flutter-implementation-requirements)
8. [Authentication & Authorization](#authentication--authorization)
9. [Notification System](#notification-system)
10. [Testing Requirements](#testing-requirements)
11. [Deployment Considerations](#deployment-considerations)

---

## Executive Summary

The Operator & Owner Equipment Management system enables equipment owners to delegate equipment management to operators while maintaining oversight. Operators can manage bookings, track earnings, and communicate with farmers through a dedicated mobile interface.

### Key Features

**For Operators:**
- Sign up and authentication with phone verification
- Dashboard with assigned equipment and booking overview
- Equipment management with status tracking
- Booking management (accept, complete, decline bookings)
- Earnings tracking with commission rates
- Profile management
- Messaging with farmers

**For Owners:**
- Invite new operators via phone number
- Assign/unassign equipment to operators
- Monitor operator performance and earnings
- Manage operator profiles
- Remove operators when needed

### Technology Stack

- **Backend:** Python (FastAPI), PostgreSQL
- **Frontend:** Flutter (Dart)
- **Design System:** Custom theme with Operator Blue (#2F80FF)
- **Authentication:** JWT with phone verification (MSG91 SMS)
- **Notifications:** Firebase Cloud Messaging (FCM)

---

## Operator Screens Overview

### 1. Operator Sign In Flow

#### Screens:
- **OperatorPhoneVerifyDesign.tsx** - Phone number input
- **OperatorOTPVerifyDesign.tsx** - OTP verification
- **OperatorProfileSetupDesign.tsx** - Profile setup with GPS location

#### Requirements:
- Pure backend OTP verification (no Firebase phone auth)
- MSG91 SMS service for OTP delivery
- Support for 4 languages: English, Hindi, Tamil, Marathi
- GPS location detection during profile setup
- Operator role assignment in user profile

#### Design Specifications:
- **Theme:** Operator Blue gradient (`var(--gradient-operator)`)
- **Header:** Blue gradient with decorative circles
- **Cards:** White background with operator blue border
- **Buttons:** Operator blue gradient with shadow
- **Typography:** Poppins (headings), Inter (body)
- **Font Sizes:** Labels 11-12px, Body 14px, Buttons 14px

### 2. Operator Dashboard

#### Screen: OperatorDashboardDesign.tsx

#### Features:
- Time-based greeting (Good Morning/Afternoon/Evening)
- Operator name and active status display
- Stats cards: Assigned Equipment, Today's Bookings, Today's Earnings
- Assigned equipment list with status
- Today's bookings list with farmer details
- Notification bell with badge count

#### Data Requirements:
```typescript
interface OperatorDashboard {
  operator: {
    id: string;
    name: string;
    photo: string;
    status: 'active' | 'inactive';
  };
  stats: {
    assignedEquipment: number;
    todaysBookings: number;
    todaysEarnings: string;
  };
  equipment: Array<{
    id: string;
    name: string;
    icon: string;
    status: 'available' | 'inUse';
    bookingsToday: number;
  }>;
  bookings: Array<{
    id: string;
    farmer: string;
    farmerPhoto: string;
    equipment: string;
    time: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    location: string;
  }>;
}
```

#### API Endpoints Required:
- `GET /api/operator/dashboard` - Fetch dashboard data
- `GET /api/operator/equipment` - List assigned equipment
- `GET /api/operator/bookings/today` - Today's bookings

### 3. Operator Equipment List

#### Screen: OperatorEquipmentListDesign.tsx

#### Features:
- List of all assigned equipment
- Equipment status (Available/In Use)
- Owner information for each equipment
- Bookings count per equipment
- View bookings for each equipment

#### Data Requirements:
```typescript
interface OperatorEquipment {
  id: string;
  name: string;
  icon: string;
  owner: string;
  status: 'available' | 'inUse';
  bookingsToday: number;
  hp: string;
}
```

#### API Endpoints Required:
- `GET /api/operator/equipment` - List all assigned equipment
- `GET /api/operator/equipment/{id}/bookings` - Bookings for specific equipment
- `PATCH /api/operator/equipment/{id}/status` - Update equipment status

### 4. Operator Booking Management

#### Screen: OperatorBookingManagementDesign.tsx

#### Features:
- Tab-based view: Today, Upcoming, Completed
- Booking cards with farmer details
- Accept/Decline pending bookings
- Complete confirmed bookings
- Message farmers directly
- Location information for each booking

#### Data Requirements:
```typescript
interface OperatorBooking {
  id: string;
  farmer: {
    id: string;
    name: string;
    photo: string;
    location: string;
  };
  equipment: {
    id: string;
    name: string;
    icon: string;
  };
  time: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  location: string;
}
```

#### API Endpoints Required:
- `GET /api/operator/bookings?filter=today|upcoming|completed` - Filter bookings
- `POST /api/operator/bookings/{id}/accept` - Accept booking
- `POST /api/operator/bookings/{id}/decline` - Decline booking
- `POST /api/operator/bookings/{id}/complete` - Complete booking
- `POST /api/operator/bookings/{id}/message` - Send message to farmer

### 5. Operator Earnings

#### Screen: OperatorEarningsDesign.tsx

#### Features:
- Total earnings display
- This month earnings
- Commission rate display
- Bookings handled count
- Earnings history with export option
- Per-booking breakdown

#### Data Requirements:
```typescript
interface OperatorEarnings {
  totalEarned: string;
  thisMonth: string;
  commissionRate: string;
  bookingsHandled: number;
  history: Array<{
    id: string;
    date: string;
    bookingId: string;
    equipment: string;
    amount: string;
  }>;
}
```

#### API Endpoints Required:
- `GET /api/operator/earnings` - Fetch earnings summary
- `GET /api/operator/earnings/history` - Earnings history
- `GET /api/operator/earnings/export` - Export earnings report (CSV/PDF)

### 6. Operator Profile

#### Screens: OperatorProfileViewDesign.tsx, OperatorProfileSetupDesign.tsx

#### Features:
- Profile photo upload
- Name and phone number
- Skills and certifications
- Location with GPS
- Assigned equipment count
- Earnings summary
- Edit profile functionality

#### Data Requirements:
```typescript
interface OperatorProfile {
  id: string;
  name: string;
  phone: string;
  photo: string;
  skills: string[];
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  assignedEquipment: number;
  totalEarnings: string;
}
```

#### API Endpoints Required:
- `GET /api/operator/profile` - Fetch operator profile
- `PATCH /api/operator/profile` - Update operator profile
- `POST /api/operator/profile/photo` - Upload profile photo

### 7. Operator Messaging

#### Screens: ChatInterfaceDesign.tsx, MessageThreadListDesign.tsx, MessageFromBookingDesign.tsx

#### Features:
- Message thread list
- Individual chat interface
- Send/receive messages
- Booking context in messages
- Typing indicators
- Read receipts

#### Data Requirements:
```typescript
interface OperatorMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
  bookingId?: string;
}
```

#### API Endpoints Required:
- `GET /api/operator/messages` - List message threads
- `GET /api/operator/messages/{threadId}` - Get message thread
- `POST /api/operator/messages` - Send message
- `PATCH /api/operator/messages/{id}/read` - Mark as read

---

## Owner Equipment Management Overview

### 1. Invite New Operator

#### Screen: InviteOperatorDesign.tsx

#### Features:
- Operator name input
- Phone number input with +91 country code
- Skills/certifications selection (chips)
- Location input with GPS option
- Photo upload (optional)
- Equipment assignment with checkboxes
- Select all equipment option
- Send invite button

#### Data Requirements:
```typescript
interface OperatorInvite {
  name: string;
  phone: string;
  skills: string[];
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  photo?: string;
  assignedEquipment: string[];
}
```

#### API Endpoints Required:
- `POST /api/owner/operators/invite` - Send operator invite
- `GET /api/owner/equipment` - List owner's equipment for assignment
- `POST /api/owner/equipment/assign` - Assign equipment to operator

#### Notification Flow:
1. Owner sends invite via API
2. Backend creates operator record with status 'pending'
3. SMS sent to operator phone with invite link
4. Operator completes sign-up flow
5. Operator status changes to 'active'
6. Owner receives notification of operator activation

### 2. Assign Equipment to Operator

#### Screen: AssignEquipmentDesign.tsx

#### Features:
- Operator info display
- Currently assigned equipment list
- Unassigned equipment list
- Remove equipment from operator
- Add equipment to operator
- Save/Cancel buttons

#### Data Requirements:
```typescript
interface EquipmentAssignment {
  operatorId: string;
  currentlyAssigned: Array<{
    id: string;
    name: string;
    icon: string;
    status: string;
  }>;
  unassigned: Array<{
    id: string;
    name: string;
    icon: string;
    status: string;
  }>;
}
```

#### API Endpoints Required:
- `GET /api/owner/operators/{id}/equipment` - Get operator's equipment
- `POST /api/owner/operators/{id}/equipment/assign` - Assign equipment
- `DELETE /api/owner/operators/{id}/equipment/{equipmentId}` - Remove equipment
- `PATCH /api/owner/operators/{id}/equipment` - Bulk update assignments

### 3. Operators List

#### Screen: OperatorsListDesign.tsx

#### Features:
- List of all operators
- Operator status (active/inactive/pending)
- Assigned equipment count
- Total earnings
- Performance metrics
- Invite new operator button
- View operator profile
- Remove operator option

#### Data Requirements:
```typescript
interface OperatorListItem {
  id: string;
  name: string;
  photo: string;
  phone: string;
  status: 'pending' | 'active' | 'inactive';
  assignedEquipment: number;
  totalEarnings: string;
  bookingsHandled: number;
  rating: number;
}
```

#### API Endpoints Required:
- `GET /api/owner/operators` - List all operators
- `GET /api/owner/operators/{id}` - Get operator details
- `DELETE /api/owner/operators/{id}` - Remove operator
- `PATCH /api/owner/operators/{id}/status` - Update operator status

### 4. Operator Profile (Owner View)

#### Screen: OperatorProfileDesign.tsx

#### Features:
- Operator profile details
- Skills and certifications
- Location information
- Assigned equipment list
- Booking history
- Earnings breakdown
- Performance metrics
- Edit/Remove options

#### Data Requirements:
```typescript
interface OperatorProfileOwner {
  id: string;
  name: string;
  phone: string;
  photo: string;
  skills: string[];
  location: string;
  status: string;
  assignedEquipment: Array<{
    id: string;
    name: string;
    status: string;
  }>;
  earnings: {
    total: string;
    thisMonth: string;
    commissionRate: string;
  };
  performance: {
    bookingsHandled: number;
    rating: number;
    completionRate: number;
  };
}
```

#### API Endpoints Required:
- `GET /api/owner/operators/{id}/profile` - Get operator profile
- `GET /api/owner/operators/{id}/earnings` - Get operator earnings
- `GET /api/owner/operators/{id}/performance` - Get performance metrics

### 5. Operator Earnings (Owner View)

#### Screen: OperatorEarningsDesign.tsx

#### Features:
- Operator earnings overview
- Commission breakdown
- Booking-wise earnings
- Date range filter
- Export reports
- Payment history

#### API Endpoints Required:
- `GET /api/owner/operators/{id}/earnings` - Get operator earnings
- `GET /api/owner/operators/{id}/earnings/history` - Earnings history
- `GET /api/owner/operators/{id}/earnings/export` - Export earnings report

### 6. Remove Operator

#### Screen: RemoveOperatorDesign.tsx

#### Features:
- Confirmation dialog
- Equipment reassignment options
- Booking handling options
- Reason for removal
- Remove button

#### API Endpoints Required:
- `DELETE /api/owner/operators/{id}` - Remove operator
- `POST /api/owner/operators/{id}/reassign-equipment` - Reassign equipment
- `POST /api/owner/operators/{id}/handle-bookings` - Handle pending bookings

---

## Design System Integration

### Operator Blue Theme

#### Color Palette
```css
/* Primary Colors */
--operator-blue: #2F80FF;
--operator-blue-light: #5FA8FF;
--operator-blue-dark: #256EFF;
--operator-blue-pale: #EAF4FF;
--operator-blue-tint: #CFE8FF;

/* Gradient */
--gradient-operator: linear-gradient(50deg, #2F80FF 0%, #00C6FF 100%);

/* Shadow */
--card-shadow-operator: 0 8px 24px rgba(47, 128, 255, 0.15), 0 2px 8px rgba(0, 198, 255, 0.1);
```

#### Usage Guidelines

**Headers:**
```tsx
<div style={{
  background: 'var(--gradient-operator)',
  boxShadow: 'var(--card-shadow-operator)'
}}>
```

**Cards:**
```tsx
<div style={{
  border: '2px solid var(--operator-blue)',
  background: 'white',
  boxShadow: 'var(--card-shadow-sm)'
}}>
```

**Buttons:**
```tsx
<button style={{
  background: 'var(--gradient-operator)',
  color: 'white',
  boxShadow: '0 4px 16px rgba(47, 128, 255, 0.3)'
}}>
```

**Status Badges:**
```tsx
<div style={{
  background: 'var(--operator-blue-pale)',
  color: 'var(--operator-blue)'
}}>
```

**Text Links:**
```tsx
<span style={{ color: 'var(--operator-blue)' }}>
```

### Typography System

#### Font Families
- **Poppins:** Headings, buttons, display text (16px-28px, w600-w800)
- **Inter:** Body text, labels, captions (11px-16px, w400-w600)
- **Noto Sans Devanagari:** Hindi/Marathi text support

#### Font Hierarchy
```typescript
// Display Large
style={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: '800' }}

// Headings
style={{ fontSize: '18px', fontFamily: 'Poppins', fontWeight: '600-700' }}

// Body
style={{ fontSize: '16px', fontFamily: 'Inter', fontWeight: '400-500' }}

// Labels & Buttons
style={{ fontSize: '16px', fontFamily: 'Inter/Poppins', fontWeight: '400-600' }}

// Captions
style={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: '400-600' }}

// Small Captions
style={{ fontSize: '12px', fontFamily: 'Inter', fontWeight: '400' }}
```

### Component Patterns

#### Card Pattern
```tsx
<div className="bg-white rounded-[18px] overflow-hidden"
     style={{ boxShadow: 'var(--card-shadow-sm)' }}>
  <div className="p-3">
    {/* Content */}
  </div>
</div>
```

#### Status Badge Pattern
```tsx
<div className="text-[10px] font-bold px-2 py-1 rounded-lg"
     style={{
       background: status === 'available' ? 'var(--operator-blue-pale)' : 'var(--amber-pale)',
       color: status === 'available' ? 'var(--operator-blue)' : 'var(--amber)',
       fontFamily: 'Inter'
     }}>
  {status}
</div>
```

#### Button Pattern
```tsx
<button className="w-full py-3 rounded-[12px] text-[18px] font-bold"
        style={{
          background: 'var(--gradient-operator)',
          color: 'white',
          boxShadow: '0 4px 16px rgba(47, 128, 255, 0.3)',
          fontFamily: 'Poppins'
        }}>
  {label}
</button>
```

---

## Backend API Requirements

### API Base Structure

```
Base URL: https://api.kisanyantra.com
Version: /v1
Authentication: Bearer JWT Token
```

### Operator Endpoints

#### Authentication
```
POST /api/operator/auth/send-otp
POST /api/operator/auth/verify-otp
POST /api/operator/auth/signup
POST /api/operator/auth/login
POST /api/operator/auth/refresh
```

#### Dashboard
```
GET /api/operator/dashboard
Response: {
  operator: OperatorProfile,
  stats: DashboardStats,
  equipment: OperatorEquipment[],
  bookings: OperatorBooking[]
}
```

#### Equipment
```
GET /api/operator/equipment
GET /api/operator/equipment/{id}
PATCH /api/operator/equipment/{id}/status
GET /api/operator/equipment/{id}/bookings
```

#### Bookings
```
GET /api/operator/bookings?filter=today|upcoming|completed|cancelled
GET /api/operator/bookings/{id}
POST /api/operator/bookings/{id}/accept
POST /api/operator/bookings/{id}/decline
POST /api/operator/bookings/{id}/complete
POST /api/operator/bookings/{id}/message
```

#### Earnings
```
GET /api/operator/earnings
GET /api/operator/earnings/history?start_date=&end_date=
GET /api/operator/earnings/export?format=csv|pdf
```

#### Profile
```
GET /api/operator/profile
PATCH /api/operator/profile
POST /api/operator/profile/photo
```

#### Messages
```
GET /api/operator/messages
GET /api/operator/messages/{threadId}
POST /api/operator/messages
PATCH /api/operator/messages/{id}/read
```

### Owner Endpoints

#### Operators
```
GET /api/owner/operators
POST /api/owner/operators/invite
GET /api/owner/operators/{id}
PATCH /api/owner/operators/{id}
DELETE /api/owner/operators/{id}
PATCH /api/owner/operators/{id}/status
```

#### Equipment Assignment
```
GET /api/owner/operators/{id}/equipment
POST /api/owner/operators/{id}/equipment/assign
DELETE /api/owner/operators/{id}/equipment/{equipmentId}
PATCH /api/owner/operators/{id}/equipment
```

#### Operator Profile
```
GET /api/owner/operators/{id}/profile
GET /api/owner/operators/{id}/earnings
GET /api/owner/operators/{id}/performance
GET /api/owner/operators/{id}/earnings/history
GET /api/owner/operators/{id}/earnings/export
```

### Response Format

All API responses should follow this format:

```json
{
  "success": true,
  "data": { /* Response data */ },
  "message": "Success message",
  "timestamp": "2026-04-14T10:00:00Z"
}
```

Error responses:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message",
    "details": { /* Additional details */ }
  },
  "timestamp": "2026-04-14T10:00:00Z"
}
```

---

## Data Models & Schemas

### Database Schema

#### Operators Table
```sql
CREATE TABLE operators (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  owner_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(15) UNIQUE NOT NULL,
  photo_url VARCHAR(500),
  skills TEXT[],
  location_lat DECIMAL(10, 8),
  location_lng DECIMAL(11, 8),
  location_address TEXT,
  status VARCHAR(20) DEFAULT 'pending', -- pending, active, inactive
  commission_rate DECIMAL(5, 2) DEFAULT 10.00,
  total_earnings DECIMAL(12, 2) DEFAULT 0.00,
  bookings_handled INTEGER DEFAULT 0,
  rating DECIMAL(3, 2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Equipment Assignments Table
```sql
CREATE TABLE equipment_assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  operator_id UUID REFERENCES operators(id) ON DELETE CASCADE,
  equipment_id UUID REFERENCES equipment(id) ON DELETE CASCADE,
  assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'active', -- active, inactive
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(operator_id, equipment_id)
);
```

#### Operator Earnings Table
```sql
CREATE TABLE operator_earnings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  operator_id UUID REFERENCES operators(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  equipment_id UUID REFERENCES equipment(id) ON DELETE SET NULL,
  amount DECIMAL(12, 2) NOT NULL,
  commission_amount DECIMAL(12, 2) NOT NULL,
  commission_rate DECIMAL(5, 2) NOT NULL,
  earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Operator Messages Table
```sql
CREATE TABLE operator_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  operator_id UUID REFERENCES operators(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES users(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES bookings(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Operator Invitations Table
```sql
CREATE TABLE operator_invitations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID REFERENCES users(id) ON DELETE CASCADE,
  phone VARCHAR(15) NOT NULL,
  name VARCHAR(255),
  skills TEXT[],
  location_lat DECIMAL(10, 8),
  location_lng DECIMAL(11, 8),
  location_address TEXT,
  assigned_equipment UUID[],
  status VARCHAR(20) DEFAULT 'pending', -- pending, accepted, declined, expired
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  accepted_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Pydantic Models

#### Operator Models
```python
from pydantic import BaseModel, Field
from datetime import datetime
from typing import List, Optional
from enum import Enum

class OperatorStatus(str, Enum):
    PENDING = "pending"
    ACTIVE = "active"
    INACTIVE = "inactive"

class OperatorCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    phone: str = Field(..., regex=r'^\+91[0-9]{10}$')
    skills: List[str] = []
    location_lat: Optional[float] = None
    location_lng: Optional[float] = None
    location_address: Optional[str] = None
    photo_url: Optional[str] = None

class OperatorResponse(BaseModel):
    id: str
    user_id: str
    owner_id: str
    name: str
    phone: str
    photo_url: Optional[str]
    skills: List[str]
    location_lat: Optional[float]
    location_lng: Optional[float]
    location_address: Optional[str]
    status: OperatorStatus
    commission_rate: float
    total_earnings: float
    bookings_handled: int
    rating: float
    created_at: datetime
    updated_at: datetime

class OperatorDashboardStats(BaseModel):
    assigned_equipment: int
    todays_bookings: int
    todays_earnings: float

class OperatorEquipment(BaseModel):
    id: str
    name: str
    icon: str
    owner: str
    status: str
    bookings_today: int
    hp: str

class OperatorBooking(BaseModel):
    id: str
    farmer: dict
    equipment: dict
    time: str
    date: str
    status: str
    location: str

class OperatorEarnings(BaseModel):
    total_earned: float
    this_month: float
    commission_rate: str
    bookings_handled: int
    history: List[dict]
```

#### Owner Models
```python
class OperatorInvite(BaseModel):
    name: str
    phone: str
    skills: List[str] = []
    location_lat: Optional[float] = None
    location_lng: Optional[float] = None
    location_address: Optional[str] = None
    photo_url: Optional[str] = None
    assigned_equipment: List[str] = []

class EquipmentAssignment(BaseModel):
    operator_id: str
    equipment_ids: List[str]

class OperatorListItem(BaseModel):
    id: str
    name: str
    photo_url: Optional[str]
    phone: str
    status: OperatorStatus
    assigned_equipment: int
    total_earnings: float
    bookings_handled: int
    rating: float
```

---

## Flutter Implementation Requirements

### Project Structure

```
lib/
├── features/
│   ├── operator/
│   │   ├── auth/
│   │   │   ├── data/
│   │   │   │   ├── models/
│   │   │   │   ├── repositories/
│   │   │   │   └── datasources/
│   │   │   ├── domain/
│   │   │   │   ├── entities/
│   │   │   │   ├── repositories/
│   │   │   │   └── usecases/
│   │   │   └── presentation/
│   │   │       ├── pages/
│   │   │       ├── providers/
│   │   │       └── widgets/
│   │   ├── dashboard/
│   │   ├── equipment/
│   │   ├── bookings/
│   │   ├── earnings/
│   │   ├── profile/
│   │   └── messages/
│   └── owner/
│       ├── operators/
│       │   ├── data/
│       │   ├── domain/
│       │   └── presentation/
│       └── equipment/
│           ├── data/
│           ├── domain/
│           └── presentation/
```

### Provider Setup

#### Operator Auth Provider
```dart
class OperatorAuthNotifier extends StateNotifier<OperatorAuthState> {
  final OperatorAuthRepository _repository;
  
  Future<void> sendOtp(String phone) async {
    state = OperatorAuthState.loading();
    final result = await _repository.sendOtp(phone);
    state = result.fold(
      (error) => OperatorAuthState.error(error),
      (success) => OperatorAuthState.otpSent,
    );
  }
  
  Future<void> verifyOtp(String phone, String otp) async {
    state = OperatorAuthState.loading();
    final result = await _repository.verifyOtp(phone, otp);
    state = result.fold(
      (error) => OperatorAuthState.error(error),
      (success) => OperatorAuthState.authenticated,
    );
  }
}

final operatorAuthProvider = StateNotifierProvider<OperatorAuthNotifier, OperatorAuthState>((ref) {
  return OperatorAuthNotifier(ref.read(operatorAuthRepositoryProvider));
});
```

#### Dashboard Provider
```dart
class OperatorDashboardNotifier extends StateNotifier<OperatorDashboardState> {
  final OperatorDashboardRepository _repository;
  
  Future<void> loadDashboard() async {
    state = OperatorDashboardState.loading();
    final result = await _repository.getDashboard();
    state = result.fold(
      (error) => OperatorDashboardState.error(error),
      (data) => OperatorDashboardState.loaded(data),
    );
  }
}

final operatorDashboardProvider = StateNotifierProvider<OperatorDashboardNotifier, OperatorDashboardState>((ref) {
  return OperatorDashboardNotifier(ref.read(operatorDashboardRepositoryProvider));
});
```

### API Service Implementation

#### Dio Client Configuration
```dart
class OperatorApiService {
  late Dio _dio;
  
  OperatorApiService() {
    _dio = Dio(BaseOptions(
      baseUrl: 'https://api.kisanyantra.com/v1',
      connectTimeout: const Duration(seconds: 15),
      receiveTimeout: const Duration(seconds: 30),
      sendTimeout: const Duration(seconds: 30),
    ));
    
    _dio.interceptors.add(OperatorAuthInterceptor());
    _dio.interceptors.add(LogInterceptor());
  }
  
  Future<ApiResult<T>> _request<T>(
    String path, {
    String method = 'GET',
    Map<String, dynamic>? data,
    Map<String, dynamic>? queryParameters,
  }) async {
    try {
      final response = await _dio.request(
        path,
        data: data,
        queryParameters: queryParameters,
        options: Options(method: method),
      );
      
      if (response.statusCode == 200) {
        return ApiResult.success(response.data['data']);
      } else {
        return ApiResult.failure(
          AppException.fromResponse(response),
        );
      }
    } on DioException catch (e) {
      return ApiResult.failure(AppException.fromDioError(e));
    }
  }
}
```

### Screen Implementation Pattern

#### Operator Dashboard Screen
```dart
class OperatorDashboardPage extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final dashboardState = ref.watch(operatorDashboardProvider);
    final l10n = AppLocalizations.of(context)!;
    
    useEffect(() {
      ref.read(operatorDashboardProvider.notifier).loadDashboard();
      return null;
    }, []);
    
    return Scaffold(
      backgroundColor: AppColors.background,
      body: dashboardState.when(
        loading: () => Center(child: CircularProgressIndicator()),
        error: (error) => ErrorView(error: error),
        loaded: (data) => _buildDashboard(context, data, l10n),
      ),
    );
  }
  
  Widget _buildDashboard(BuildContext context, OperatorDashboard data, AppLocalizations l10n) {
    final greeting = _getGreeting();
    
    return CustomScrollView(
      slivers: [
        // Operator Blue Header
        SliverAppBar(
          expandedHeight: 200,
          floating: false,
          pinned: true,
          flexibleSpace: FlexibleSpaceBar(
            background: Container(
              decoration: BoxDecoration(
                gradient: AppColors.operatorGradient,
                boxShadow: AppColors.operatorCardShadow,
              ),
              child: Padding(
                padding: EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      greeting,
                      style: AppTextStyles.labelLarge.copyWith(
                        color: Colors.white.withOpacity(0.85),
                      ),
                    ),
                    Text(
                      data.operator.name,
                      style: AppTextStyles.heading1.copyWith(color: Colors.white),
                    ),
                    // Status indicator
                  ],
                ),
              ),
            ),
          ),
        ),
        // Stats Cards
        SliverToBoxAdapter(
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Row(
              children: [
                _buildStatCard(
                  '${data.stats.assignedEquipment}',
                  l10n.assignedEquipment,
                  '🚜',
                ),
                SizedBox(width: 12),
                _buildStatCard(
                  '${data.stats.todaysBookings}',
                  l10n.todaysBookings,
                  '📋',
                ),
                SizedBox(width: 12),
                _buildStatCard(
                  '₹${data.stats.todaysEarnings.toInt()}',
                  l10n.today,
                  '💰',
                ),
              ],
            ),
          ),
        ),
        // Equipment List
        SliverToBoxAdapter(
          child: _buildEquipmentSection(context, data.equipment, l10n),
        ),
        // Bookings List
        SliverToBoxAdapter(
          child: _buildBookingsSection(context, data.bookings, l10n),
        ),
      ],
    );
  }
}
```

### Theme Integration

#### Operator Theme Extension
```dart
class OperatorThemeExtension extends ThemeExtension<OperatorThemeExtension> {
  final Color primary;
  final Color primaryLight;
  final Color primaryDark;
  final Color primaryPale;
  final LinearGradient gradient;
  final List<BoxShadow> cardShadow;
  
  const OperatorThemeExtension({
    required this.primary,
    required this.primaryLight,
    required this.primaryDark,
    required this.primaryPale,
    required this.gradient,
    required this.cardShadow,
  });
  
  static const light = OperatorThemeExtension(
    primary: Color(0xFF2F80FF),
    primaryLight: Color(0xFF5FA8FF),
    primaryDark: Color(0xFF256EFF),
    primaryPale: Color(0xFFEAF4FF),
    gradient: LinearGradient(
      colors: [Color(0xFF2F80FF), Color(0xFF00C6FF)],
      begin: Alignment(-1, 0),
      end: Alignment(1, 0),
    ),
    cardShadow: [
      BoxShadow(
        color: Color(0x262F80FF),
        blurRadius: 24,
        offset: Offset(0, 8),
      ),
      BoxShadow(
        color: Color(0x1900C6FF),
        blurRadius: 8,
        offset: Offset(0, 2),
      ),
    ],
  );
  
  @override
  OperatorThemeExtension copyWith({
    Color? primary,
    Color? primaryLight,
    Color? primaryDark,
    Color? primaryPale,
    LinearGradient? gradient,
    List<BoxShadow>? cardShadow,
  }) {
    return OperatorThemeExtension(
      primary: primary ?? this.primary,
      primaryLight: primaryLight ?? this.primaryLight,
      primaryDark: primaryDark ?? this.primaryDark,
      primaryPale: primaryPale ?? this.primaryPale,
      gradient: gradient ?? this.gradient,
      cardShadow: cardShadow ?? this.cardShadow,
    );
  }
  
  @override
  OperatorThemeExtension lerp(ThemeExtension<OperatorThemeExtension>? other, double t) {
    if (other is! OperatorThemeExtension) {
      return this;
    }
    return OperatorThemeExtension(
      primary: Color.lerp(primary, other.primary, t)!,
      primaryLight: Color.lerp(primaryLight, other.primaryLight, t)!,
      primaryDark: Color.lerp(primaryDark, other.primaryDark, t)!,
      primaryPale: Color.lerp(primaryPale, other.primaryPale, t)!,
      gradient: LinearGradient(
        colors: [
          Color.lerp(gradient.colors[0], other.gradient.colors[0], t)!,
          Color.lerp(gradient.colors[1], other.gradient.colors[1], t)!,
        ],
      ),
      cardShadow: List.generate(
        cardShadow.length,
        (i) => BoxShadow(
          color: Color.lerp(cardShadow[i].color, other.cardShadow[i].color, t)!,
          blurRadius: lerpDouble(cardShadow[i].blurRadius, other.cardShadow[i].blurRadius, t)!,
          offset: Offset.lerp(cardShadow[i].offset, other.cardShadow[i].offset, t)!,
        ),
      ),
    );
  }
}
```

### Localization Strings

Add to `lib/l10n/app_en.arb`:
```json
{
  "operatorDashboard": "Operator Dashboard",
  "assignedEquipment": "Assigned Equipment",
  "todaysBookings": "Today's Bookings",
  "myEquipment": "My Equipment",
  "myBookings": "My Bookings",
  "myEarnings": "My Earnings",
  "inviteOperator": "Invite New Operator",
  "assignEquipment": "Assign Equipment",
  "operatorName": "Operator Name",
  "phoneNumber": "Phone Number",
  "skills": "Skills / Certifications",
  "location": "Location",
  "useCurrentLocation": "Use Current Location",
  "sendInvite": "Send Invite",
  "accept": "Accept",
  "decline": "Decline",
  "complete": "Complete",
  "message": "Message",
  "available": "Available",
  "inUse": "In Use",
  "pending": "Pending",
  "confirmed": "Confirmed",
  "completed": "Completed",
  "cancelled": "Cancelled"
}
```

Add similar translations to `app_hi.arb`, `app_ta.arb`, `app_mr.arb`.

---

## Authentication & Authorization

### JWT Token Structure

```json
{
  "sub": "user_id",
  "role": "operator",
  "owner_id": "owner_id",
  "operator_id": "operator_id",
  "iat": 1649923200,
  "exp": 1649926800,
  "type": "access"
}
```

### Role-Based Access Control

#### Operator Permissions
- View assigned equipment
- Manage bookings (accept, complete, decline)
- View earnings
- Send messages to farmers
- Update own profile
- Cannot: Modify equipment details, Change pricing, Access owner data

#### Owner Permissions (for operator management)
- Invite new operators
- Assign/unassign equipment
- View operator profiles
- View operator earnings
- Remove operators
- Cannot: Access operator messages, Modify operator bookings directly

### Middleware Implementation

#### Backend (FastAPI)
```python
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

security = HTTPBearer()

async def get_current_operator(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
) -> Operator:
    token = credentials.credentials
    payload = decode_jwt(token)
    
    if payload.get('role') != 'operator':
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized as operator"
        )
    
    operator = db.query(Operator).filter(
        Operator.id == payload.get('operator_id')
    ).first()
    
    if not operator or operator.status != 'active':
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Operator not found or inactive"
        )
    
    return operator

async def get_current_owner_for_operator_management(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
) -> User:
    token = credentials.credentials
    payload = decode_jwt(token)
    
    if payload.get('role') != 'owner':
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized as owner"
        )
    
    user = db.query(User).filter(User.id == payload.get('sub')).first()
    
    if not user or user.role != UserRole.OWNER:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Owner not found"
        )
    
    return user
```

#### Frontend (Flutter)
```dart
class OperatorAuthInterceptor extends Interceptor {
  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) {
    final token = SecureStorage.readToken();
    if (token != null) {
      options.headers['Authorization'] = 'Bearer $token';
    }
    handler.next(options);
  }
  
  @override
  void onError(DioException err, ErrorInterceptorHandler handler) {
    if (err.response?.statusCode == 401) {
      // Token expired, refresh or logout
      SecureStorage.clearToken();
      // Navigate to login
    }
    handler.next(err);
  }
}
```

---

## Notification System

### Notification Types

#### Operator Notifications
- `operator_invitation_received` - When owner invites operator
- `equipment_assigned` - When equipment is assigned
- `equipment_unassigned` - When equipment is removed
- `booking_assigned` - New booking assigned
- `booking_accepted` - Booking accepted by farmer
- `booking_completed` - Booking completed successfully
- `message_received` - New message from farmer

#### Owner Notifications
- `operator_invitation_accepted` - Operator accepted invite
- `operator_invitation_declined` - Operator declined invite
- `operator_earned` - Operator earned commission
- `booking_completed_by_operator` - Operator completed booking

### FCM Integration

#### Backend (Python)
```python
from firebase_admin import messaging

async def send_operator_notification(
    operator_id: str,
    notification_type: str,
    title: str,
    body: str,
    data: dict = None
):
    operator = db.query(Operator).filter(Operator.id == operator_id).first()
    if not operator or not operator.fcm_token:
        return
    
    message = messaging.Message(
        notification=messaging.Notification(
            title=title,
            body=body,
        ),
        data=data or {},
        token=operator.fcm_token,
    )
    
    try:
        response = messaging.send(message)
        return response
    except Exception as e:
        logger.error(f"Failed to send notification: {e}")
```

#### Frontend (Flutter)
```dart
class OperatorNotificationHandler {
  static void handleRemoteMessage(RemoteMessage message) {
    final notificationType = message.data['type'];
    
    switch (notificationType) {
      case 'booking_assigned':
        _handleBookingAssigned(message);
        break;
      case 'message_received':
        _handleMessageReceived(message);
        break;
      case 'equipment_assigned':
        _handleEquipmentAssigned(message);
        break;
      default:
        _handleDefault(message);
    }
  }
  
  static void _handleBookingAssigned(RemoteMessage message) {
    // Refresh dashboard
    // Show in-app notification
    // Update booking list
  }
}
```

---

## Testing Requirements

### Backend Testing

#### Unit Tests
```python
# tests/test_operator_api.py
def test_send_otp_success(client, db):
    response = client.post("/api/operator/auth/send-otp", json={
        "phone": "+919876543210"
    })
    assert response.status_code == 200
    assert response.json()["success"] == True

def test_verify_otp_success(client, db):
    response = client.post("/api/operator/auth/verify-otp", json={
        "phone": "+919876543210",
        "otp": "123456"
    })
    assert response.status_code == 200
    assert "access_token" in response.json()["data"]

def test_get_dashboard_unauthorized(client):
    response = client.get("/api/operator/dashboard")
    assert response.status_code == 401

def test_get_dashboard_authorized(client, auth_token):
    response = client.get(
        "/api/operator/dashboard",
        headers={"Authorization": f"Bearer {auth_token}"}
    )
    assert response.status_code == 200
    assert "stats" in response.json()["data"]
```

#### Integration Tests
```python
# tests/test_operator_booking_flow.py
def test_complete_booking_flow(client, db, auth_token):
    # 1. Get bookings
    bookings = client.get(
        "/api/operator/bookings",
        headers={"Authorization": f"Bearer {auth_token}"}
    ).json()["data"]
    
    # 2. Accept booking
    booking_id = bookings[0]["id"]
    response = client.post(
        f"/api/operator/bookings/{booking_id}/accept",
        headers={"Authorization": f"Bearer {auth_token}"}
    )
    assert response.status_code == 200
    
    # 3. Complete booking
    response = client.post(
        f"/api/operator/bookings/{booking_id}/complete",
        headers={"Authorization": f"Bearer {auth_token}"}
    )
    assert response.status_code == 200
    
    # 4. Verify earnings updated
    earnings = client.get(
        "/api/operator/earnings",
        headers={"Authorization": f"Bearer {auth_token}"}
    ).json()["data"]
    assert earnings["bookings_handled"] > 0
```

### Frontend Testing

#### Widget Tests
```dart
// test/features/operator/dashboard/operator_dashboard_page_test.dart
void main() {
  testWidgets('OperatorDashboard displays stats', (tester) async {
    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          operatorDashboardProvider.overrideWith(
            (ref) => MockOperatorDashboardNotifier(),
          ),
        ],
        child: MaterialApp(
          home: OperatorDashboardPage(),
        ),
      ),
    );
    
    expect(find.text('Assigned Equipment'), findsOneWidget);
    expect(find.text("Today's Bookings"), findsOneWidget);
    expect(find.text('Today'), findsOneWidget);
  });
}
```

#### Integration Tests
```dart
// test/integration/operator_booking_flow_test.dart
void main() {
  testWidgets('Complete booking flow', (tester) async {
    // 1. Login
    await tester.pumpWidget(MyApp());
    await tester.enterText(find.byKey(Key('phoneField')), '+919876543210');
    await tester.tap(find.byKey(Key('sendOtpButton')));
    await tester.pumpAndSettle();
    
    // 2. Verify OTP
    await tester.enterText(find.byKey(Key('otpField')), '123456');
    await tester.tap(find.byKey(Key('verifyOtpButton')));
    await tester.pumpAndSettle();
    
    // 3. Navigate to bookings
    await tester.tap(find.text('My Bookings'));
    await tester.pumpAndSettle();
    
    // 4. Accept booking
    await tester.tap(find.text('Accept').first);
    await tester.pumpAndSettle();
    
    // 5. Complete booking
    await tester.tap(find.text('Complete').first);
    await tester.pumpAndSettle();
    
    // 6. Verify earnings updated
    expect(find.text('₹'), findsWidgets);
  });
}
```

---

## Deployment Considerations

### Backend Deployment

#### Environment Variables
```env
# Database
DATABASE_URL=postgresql://user:pass@localhost/kisanyantra

# JWT
JWT_SECRET_KEY=your-secret-key
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7

# SMS (MSG91)
MSG91_AUTH_KEY=your-msg91-auth-key
MSG91_TEMPLATE_ID=your-template-id

# Firebase
FIREBASE_CREDENTIALS_PATH=/path/to/firebase-credentials.json

# S3 (for photos)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_BUCKET_NAME=kisanyantra-uploads
AWS_REGION=ap-south-1

# Commission
DEFAULT_OPERATOR_COMMISSION_RATE=10.0
```

#### Database Migrations
```python
# alembic/versions/001_add_operator_tables.py
def upgrade():
    op.create_table('operators',
        sa.Column('id', sa.UUID(), nullable=False),
        sa.Column('user_id', sa.UUID(), nullable=False),
        sa.Column('owner_id', sa.UUID(), nullable=False),
        sa.Column('name', sa.String(255), nullable=False),
        sa.Column('phone', sa.String(15), nullable=False),
        # ... other columns
    )
    
    op.create_table('equipment_assignments',
        sa.Column('id', sa.UUID(), nullable=False),
        sa.Column('operator_id', sa.UUID(), nullable=False),
        sa.Column('equipment_id', sa.UUID(), nullable=False),
        # ... other columns
    )
    
    # Create indexes
    op.create_index('ix_operators_phone', 'operators', ['phone'])
    op.create_index('ix_operators_owner_id', 'operators', ['owner_id'])
    op.create_index('ix_equipment_assignments_operator_id', 'equipment_assignments', ['operator_id'])
```

### Frontend Deployment

#### Build Configuration
```yaml
# android/app/build.gradle
android {
    defaultConfig {
        applicationId "com.kisanyantra.operator"
        minSdkVersion 21
        targetSdkVersion 33
        versionCode 1
        versionName "1.0.0"
    }
    
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

#### Environment Configuration
```dart
// lib/core/config/app_config.dart
class AppConfig {
  static const String apiBaseUrl = String.fromEnvironment(
    'API_BASE_URL',
    defaultValue: 'https://api.kisanyantra.com/v1',
  );
  
  static const String msg91AuthKey = String.fromEnvironment(
    'MSG91_AUTH_KEY',
    defaultValue: '',
  );
  
  static const double defaultCommissionRate = 10.0;
}
```

---

## Appendix

### A. Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| OP001 | Operator not found | 404 |
| OP002 | Operator already exists | 409 |
| OP003 | Invalid phone number | 400 |
| OP004 | OTP verification failed | 401 |
| OP005 | Operator not active | 403 |
| OP006 | Equipment not assigned | 403 |
| OP007 | Booking not found | 404 |
| OP008 | Invalid booking status transition | 400 |
| OP009 | Commission rate invalid | 400 |
| OP010 | Invitation expired | 400 |

### B. Commission Calculation Logic

```python
def calculate_operator_commission(booking_amount: float, commission_rate: float) -> float:
    """
    Calculate operator commission from booking amount.
    
    Args:
        booking_amount: Total booking amount
        commission_rate: Commission rate as percentage (e.g., 10.0 for 10%)
    
    Returns:
        Commission amount
    """
    return round(booking_amount * (commission_rate / 100), 2)

def calculate_operator_earnings(bookings: List[Booking]) -> float:
    """
    Calculate total earnings for operator from completed bookings.
    
    Args:
        bookings: List of completed bookings
    
    Returns:
        Total earnings
    """
    total = 0.0
    for booking in bookings:
        if booking.status == BookingStatus.COMPLETED:
            total += calculate_operator_commission(
                booking.total_amount,
                booking.operator.commission_rate
            )
    return round(total, 2)
```

### C. API Rate Limiting

```
Operator Endpoints:
- OTP send: 5 requests per hour per phone number
- Dashboard: 60 requests per minute
- Booking actions: 30 requests per minute
- Messages: 100 requests per minute

Owner Endpoints:
- Invite operator: 10 requests per hour per owner
- Equipment assignment: 30 requests per minute
- Operator list: 60 requests per minute
```

---

## Document Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | April 14, 2026 | System | Initial draft |

---

## Glossary

- **Operator:** A user who manages equipment on behalf of an owner
- **Owner:** Equipment owner who can delegate management to operators
- **Commission:** Percentage of booking amount earned by operator
- **Assignment:** Process of linking equipment to an operator
- **Booking:** Rental request from farmer for equipment
- **Status Badge:** Visual indicator showing current state (available, in use, pending, etc.)

---

## Contact

For questions or clarifications regarding this document, please contact:
- Backend Team: backend@kisanyantra.com
- Frontend Team: frontend@kisanyantra.com
- Product Team: product@kisanyantra.com
