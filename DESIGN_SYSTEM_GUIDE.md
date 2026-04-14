# KisanYantra Design System Guide

## 🎨 Modern Color Palette

### Primary Colors
- **Deep Farm Green**: `#1F7A4C` → `#2DAA6A` (gradient)
- **Harvest Yellow**: `#F4B400` (accents, progress bars)
- **Saffron**: `#FF6B00` → `#FF8C38` (owner CTAs)
- **Operator Blue**: `#2F80FF` → `#00C6FF` (operator CTAs, headers)

### Operator Blue Theme
- **Primary**: `#2F80FF`
- **Light**: `#5FA8FF`
- **Dark**: `#256EFF`
- **Pale**: `#EAF4FF`
- **Tint**: `#CFE8FF`
- **Gradient**: `linear-gradient(50deg, #2F80FF 0%, #00C6FF 100%)`
- **Shadow**: `0 8px 24px rgba(47, 128, 255, 0.15), 0 2px 8px rgba(0, 198, 255, 0.1)`

### Usage
```tsx
// Headers (farmer)
background: 'var(--gradient-green)'
boxShadow: 'var(--card-shadow-green)'

// Owner CTAs
background: 'var(--gradient-saffron)'
boxShadow: 'var(--card-shadow-saffron)'

// Farmer CTAs
background: 'var(--gradient-green)'
boxShadow: 'var(--card-shadow-green)'

// Operator CTAs & Headers
background: 'var(--gradient-operator)'
boxShadow: 'var(--card-shadow-operator)'

// Operator borders & accents
borderColor: 'var(--operator-blue)'
backgroundColor: 'var(--operator-blue-pale)'
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

// Operator CTA
<ThemedButton variant="operator" fullWidth>
  Accept Invitation
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

### Font Families
- **Poppins**: Headings, buttons, price text, display text (16px-28px, w600-w800)
- **Inter**: Body text, labels, captions, UI elements (11px-16px, w400-w600)
- **Noto Sans Devanagari**: Hindi/Marathi text support

### Font Hierarchy
- **Display Large**: 20px, Poppins w800 (page headers)
- **Headings**: 18px, Poppins w600-w700 (section headers, card titles)
- **Body**: 16px, Inter w400-w500 (paragraph text, descriptions)
- **Labels & Buttons**: 16px, Inter w400-w500 / Poppins w600 (form labels, button text)
- **Captions**: 14px, Inter w400-w600 (secondary information, status chips)
- **Small Captions**: 12px, Inter w400 (fine print, disclaimers)

## 🎯 Spacing System (8pt grid)

- `gap-2` = 8px
- `gap-3` = 12px
- `gap-4` = 16px
- `p-4` = 16px
- `p-5` = 20px
- `mb-3` = 12px
- `mb-4` = 16px

## 🎨 Component State & Theming

### Operator Theme States
```tsx
// Operator header with blue gradient
<div style={{
  background: 'var(--gradient-operator)',
  boxShadow: 'var(--card-shadow-operator)'
}}>

// Operator card with blue border
<div style={{
  border: '2px solid var(--operator-blue)',
  boxShadow: 'var(--card-shadow)'
}}>

// Operator accent stripe
<div style={{
  background: 'var(--gradient-operator)'
}}>

// Operator trust badge
<div style={{
  background: 'var(--operator-blue-pale)',
  color: 'var(--operator-blue)'
}}>

// Operator input focus
<input style={{
  borderColor: 'var(--operator-blue)',
  boxShadow: '0 0 0 3px rgba(47, 128, 255, 0.12)'
}}>

// Operator active state
<button style={{
  background: 'var(--gradient-operator)',
  boxShadow: '0 4px 16px rgba(47, 128, 255, 0.3)'
}}>

// Operator text links
<span style={{
  color: 'var(--operator-blue)'
}}>
```

### Theme Selection by Role
```tsx
const theme = {
  farmer: {
    primary: 'var(--gradient-green)',
    accent: 'var(--saffron)',
    border: 'var(--saffron)',
    shadow: 'var(--card-shadow-green)'
  },
  owner: {
    primary: 'var(--gradient-saffron)',
    accent: 'var(--saffron)',
    border: 'var(--saffron)',
    shadow: 'var(--card-shadow-saffron)'
  },
  operator: {
    primary: 'var(--gradient-operator)',
    accent: 'var(--operator-blue)',
    border: 'var(--operator-blue)',
    shadow: 'var(--card-shadow-operator)'
  }
};
```

## 🔄 Dynamic Theming

Screens shared between farmer/owner/operator should use role-based theming:

```tsx
// For shared screens
const buttonGradient = role === 'owner'
  ? 'var(--gradient-saffron)'
  : role === 'operator'
  ? 'var(--gradient-operator)'
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
