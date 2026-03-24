# Font System Alignment Summary

## Current Status ✅

The font system is now **aligned** between the Flutter app and the Figma design project.

## Font Configuration

### Flutter App (`android-app`)
**Location:** `lib/core/theme/app_theme.dart`

```dart
// Headings - Baloo 2
GoogleFonts.baloo2(
  fontSize: 20,
  fontWeight: FontWeight.w700,
  color: Colors.white,
)

// Body text - DM Sans
GoogleFonts.dmSans(
  fontSize: 12,
  fontWeight: FontWeight.w600,
)
```

**Weights Available:**
- Baloo 2: 400, 500, 600, 700, 800
- DM Sans: 300, 400, 500, 600

### Figma Design Project (`kisanyantra-figma-design`)
**Location:** `src/styles/fonts.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
```

**CSS Variables:** `src/styles/theme.css`

```css
--font-heading: 'Baloo 2', cursive;
--font-body: 'DM Sans', sans-serif;
--font-devanagari: 'Noto Sans Devanagari', sans-serif;
```

## Typography Hierarchy

| Element Type | Font Family | Weight | Usage |
|--------------|-------------|--------|-------|
| **Display/Logo** | Baloo 2 | 800 | KisanYantra branding |
| **Headings (H1-H4)** | Baloo 2 | 700 | Section titles, card headers |
| **Buttons/CTAs** | Baloo 2 | 600-700 | Primary/secondary actions |
| **Body Text** | DM Sans | 400 | Paragraphs, descriptions |
| **Labels** | DM Sans | 500-600 | Form labels, metadata |
| **Input Fields** | DM Sans | 400 | Text inputs, textareas |
| **Devanagari Text** | Noto Sans Devanagari | 600 | Hindi, Marathi content |

## Automatic Font Application

The following HTML elements in the React app now automatically use the correct fonts:

- `<h1>`, `<h2>`, `<h3>`, `<h4>` → `var(--font-heading)` (Baloo 2)
- `<button>` → `var(--font-heading)` (Baloo 2)
- `<body>`, `<p>`, `<div>` → `var(--font-body)` (DM Sans)
- `<label>` → `var(--font-body)` (DM Sans)
- `<input>`, `<textarea>`, `<select>` → `var(--font-body)` (DM Sans)

## Migration Needed

The React components in `src/` currently use **inline `fontFamily` styles** instead of CSS variables:

```tsx
// Current (inline styles - 700+ occurrences)
<div style={{ fontFamily: "'Baloo 2', cursive" }}>Title</div>

// Should be (CSS variables)
<div style={{ fontFamily: 'var(--font-heading)' }}>Title</div>

// Or better (semantic HTML)
<h2>Title</h2>
```

### Files to Update

Run this command to find all inline font styles:

```bash
grep -r "fontFamily:" src/ | wc -l
```

**Estimated:** ~700+ inline `fontFamily` references in:
- `src/app/App.tsx.backup`
- `src/app/components/OnboardingTour.tsx`
- Other component files

## Benefits of Migration

1. **Consistency** - Single source of truth for fonts
2. **Maintainability** - Change fonts in one place (`theme.css`)
3. **Performance** - Fewer inline styles, better CSS caching
4. **Alignment** - Matches Flutter app's font system exactly
5. **Accessibility** - Semantic HTML improves screen reader support

## Next Steps

1. ✅ Font CSS variables defined in `theme.css`
2. ✅ Automatic font application to HTML elements
3. ✅ Documentation created (`FONT_SYSTEM.md`)
4. ⏳ Migrate inline `fontFamily` styles to CSS variables
5. ⏳ Test font rendering across all screens
6. ⏳ Verify Devanagari font usage for Hindi/Marathi

## References

- **Flutter Theme:** `android-app/lib/core/theme/app_theme.dart`
- **React Fonts:** `kisanyantra-figma-design/src/styles/fonts.css`
- **CSS Variables:** `kisanyantra-figma-design/src/styles/theme.css`
- **Migration Guide:** `kisanyantra-figma-design/FONT_SYSTEM.md`
