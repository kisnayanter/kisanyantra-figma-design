# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KisanYantra is a **design showcase / prototype** for a voice-first tractor rental platform targeting Indian farmers. This is NOT a production app — it is a Figma-to-code design system rendered as a single-page React application that displays ~30 mobile screen mockups organized by user flow (onboarding, search, booking, notifications, etc.).

The app supports four languages: English, Hindi, Tamil, and Marathi, with a global language toggle.

## Commands

- `npm i` — install dependencies
- `npm run dev` — start Vite dev server
- `npm run build` — production build

There are no tests, linting, or formatting scripts configured.

## Architecture

### Stack
- React 18 + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- Radix UI primitives (shadcn/ui pattern) in `src/app/components/ui/`
- MUI Icons (`@mui/icons-material`) used in some screens

### Key Structure

- **`src/main.tsx`** — Entry point, renders `<App />` and imports global styles
- **`src/app/App.tsx`** — Single-page layout that renders all screen mockups in categorized sections (Onboarding, Voice AI, Search, Owner, Booking, etc.). Contains `ScreenCard`, `LanguageToggle`, and `LanguageAwareContainer` helper components.
- **`src/app/screens/*Design.tsx`** — Each file is a self-contained mobile screen mockup (320x640px phone shell with inline styling). ~30 screens total. They use the `useLanguage()` hook for multi-language text.
- **`src/app/contexts/language.tsx`** — `LanguageProvider` and `useLanguage` hook. Provides `selectText()` for picking localized strings by language key.
- **`src/app/components/PhoneShell.tsx`** — Reusable phone frame wrapper (375x812px) with notch and status bar. Some screens use this, others inline their own phone shell.
- **`src/app/components/figma/ImageWithFallback.tsx`** — Image component with error fallback.
- **`src/app/components/ui/`** — shadcn/ui component library (Radix-based). Standard components, rarely modified directly.

### Design System (CSS Variables)

Defined in `src/styles/theme.css`:
- **Saffron palette:** `--saffron` (#FF6B00), `--saffron-light`, `--saffron-pale`
- **Green palette:** `--green` (#1A7A3B), `--green-light`, `--green-pale`
- **Accents:** `--gold` (#F5A623), `--soil`, `--sky`, `--cream`, `--dark-bg`
- **Text:** `--text-dark`, `--text-mid`, `--text-soft`

### Fonts (loaded via Google Fonts in `src/styles/fonts.css`)
- **Baloo 2** — display/headings
- **Noto Sans Devanagari** — Hindi/Marathi script
- **DM Sans** — body text

### Styling

- `src/styles/index.css` imports fonts.css, tailwind.css, and theme.css
- `src/styles/tailwind.css` configures Tailwind v4 with `@source` directive pointing at `src/**/*.{js,ts,jsx,tsx}`
- Screens use a mix of Tailwind utility classes and inline `style={}` with CSS variables
- Path alias: `@` maps to `./src` (configured in `vite.config.ts`)

## Screen Component Pattern

Each screen in `src/app/screens/` follows this pattern:
1. Import `useLanguage` from contexts
2. Build a `strings` object using `selectText()` with all four language variants
3. Render a self-contained phone mockup at 320x640px with an inline phone shell (rounded corners, dark frame, status bar)
4. Use CSS variables from theme.css for colors, inline `fontFamily` for display fonts

When adding a new screen: create `src/app/screens/<Name>Design.tsx`, follow the existing pattern, then import and place it in `App.tsx` inside the appropriate section with a `<ScreenCard>` wrapper.

## Multi-Language System

Text in screens uses a `·` (middle dot) delimiter pattern for the `LanguageAwareContainer` DOM walker in App.tsx, which swaps visible text based on detected script. Newer screens use the `selectText()` approach from the language context directly, which is preferred.
