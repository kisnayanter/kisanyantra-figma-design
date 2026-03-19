# KisanYantra Design System Guide

## 🎨 Modern Color Palette

### Primary Colors
- **Deep Farm Green**: `#1F7A4C` → `#2DAA6A` (gradient)
- **Harvest Yellow**: `#F4B400` (accents, progress bars)
- **Saffron**: `#FF6B00` → `#FF8C38` (owner CTAs)

### Usage
```tsx
// Headers (both farmer & owner)
background: 'var(--gradient-green)'
boxShadow: 'var(--card-shadow-green)'

// Owner CTAs
background: 'var(--gradient-saffron)'
boxShadow: 'var(--card-shadow-saffron)'

// Farmer CTAs
background: 'var(--gradient-green)'
boxShadow: 'var(--card-shadow-green)'
```

## 🧩 Reusable Components

### ThemedButton
```tsx
import { ThemedButton } from '@/components/owner';

// Owner CTA
<ThemedButton variant="saffron" fullWidth>
  Accept Booking
</ThemedButton>

// Farmer CTA
<ThemedButton variant="green" fullWidth>
  Book Now
</ThemedButton>
```

### FloatingCard
```tsx
import { FloatingCard } from '@/components/owner';

<FloatingCard padding="md" shadow="sm">
  <p>Card content</p>
</FloatingCard>
```

### OwnerHeader
```tsx
import { OwnerHeader } from '@/components/owner';

<OwnerHeader 
  title="Dashboard"
  subtitle="🌿 Owner Dashboard"
  showNotification
  showRoleSwitch
  role="owner"
/>
```

## 📐 Typography Scale

- **Headings**: Poppins (16px-28px, bold)
- **Body**: Inter (11px-16px, regular/medium)
- **Hindi/Marathi**: Noto Sans Devanagari

## 🎯 Spacing System (8pt grid)

- `gap-2` = 8px
- `gap-3` = 12px
- `gap-4` = 16px
- `p-4` = 16px
- `p-5` = 20px
- `mb-3` = 12px
- `mb-4` = 16px

## 🔄 Dynamic Theming

Screens shared between farmer/owner should use role-based theming:

```tsx
// For shared screens
const buttonGradient = role === 'owner' 
  ? 'var(--gradient-saffron)' 
  : 'var(--gradient-green)';
```

## ✅ Migration Checklist

- [ ] Replace `#F8F5F0` → `var(--bg-primary)`
- [ ] Replace `var(--blue)` → `var(--gradient-green)`
- [ ] Replace hardcoded shadows → `var(--card-shadow-sm)`
- [ ] Update typography to Poppins/Inter
- [ ] Use saffron gradient for owner CTAs
- [ ] Apply 20px border radius to cards
- [ ] Add transition effects to interactive elements
