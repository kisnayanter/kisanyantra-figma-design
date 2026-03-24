# KisanYantra Font System

## Overview

The KisanYantra design system uses a consistent font hierarchy that matches the Flutter mobile app:

- **Baloo 2** - Headings, buttons, and brand elements (warm, friendly, supports Devanagari)
- **DM Sans** - Body text, labels, and UI elements (clean, readable)
- **Noto Sans Devanagari** - Devanagari script content (Hindi, Marathi)

## CSS Variables

Use these CSS variables instead of inline `fontFamily` styles:

```css
--font-heading: 'Baloo 2', cursive;
--font-body: 'DM Sans', sans-serif;
--font-devanagari: 'Noto Sans Devanagari', sans-serif;
```

## Usage in React Components

### ❌ AVOID - Inline fontFamily styles

```tsx
// Don't do this
<div style={{ fontFamily: "'Baloo 2', cursive" }}>
  Heading Text
</div>
```

### ✅ PREFER - CSS variables

```tsx
// Do this instead
<div style={{ fontFamily: 'var(--font-heading)' }}>
  Heading Text
</div>

// Or even better, use semantic HTML
<h2>Heading Text</h2>  {/* Automatically uses --font-heading */}
```

## Automatic Font Application

The following HTML elements automatically use the correct fonts:

| Element | Font Variable | Use Case |
|---------|--------------|----------|
| `<h1>`, `<h2>`, `<h3>`, `<h4>` | `--font-heading` | Headings |
| `<button>` | `--font-heading` | Buttons and CTAs |
| `<body>`, `<p>`, `<div>` | `--font-body` | Body text |
| `<label>` | `--font-body` | Form labels |
| `<input>`, `<textarea>`, `<select>` | `--font-body` | Form inputs |

## Font Weights

### Baloo 2 (Headings)
- 400 - Regular
- 500 - Medium
- 600 - Semibold
- 700 - Bold
- 800 - Extrabold

### DM Sans (Body)
- 300 - Light
- 400 - Regular
- 500 - Medium
- 600 - Semibold

### Noto Sans Devanagari
- 400 - Regular
- 600 - Semibold
- 700 - Bold

## Migration Guide

### Step 1: Find inline fontFamily styles

```bash
grep -r "fontFamily:" src/
```

### Step 2: Replace with CSS variables

**Before:**
```tsx
<div style={{ fontFamily: "'Baloo 2', cursive", fontSize: '22px' }}>
  Title
</div>
```

**After:**
```tsx
<h2 className="text-[22px]">
  Title
</h2>
```

Or if you need inline styles:

```tsx
<div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px' }}>
  Title
</div>
```

### Step 3: Devanagari Content

For Hindi/Marathi text, use the Devanagari font:

```tsx
<div style={{ fontFamily: 'var(--font-devanagari)' }}>
  किस जिले में ट्रैक्टर चाहिए?
</div>
```

## Consistency with Flutter App

This font system matches the Flutter app's typography:

**Flutter** (`lib/core/theme/app_theme.dart`):
```dart
GoogleFonts.baloo2()  // Headings
GoogleFonts.dmSans()  // Body text
```

**React** (`src/styles/theme.css`):
```css
--font-heading: 'Baloo 2', cursive;
--font-body: 'DM Sans', sans-serif;
```

## Testing

After migration, verify:

1. All headings use Baloo 2
2. All body text uses DM Sans
3. Devanagari content uses Noto Sans Devanagari
4. No inline `fontFamily: "'Baloo 2', cursive"` styles remain
5. Font rendering matches the Flutter app

## Resources

- Font imports: `src/styles/fonts.css`
- CSS variables: `src/styles/theme.css`
- Flutter theme: `lib/core/theme/app_theme.dart`
