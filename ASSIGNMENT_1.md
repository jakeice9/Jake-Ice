# Assignment 1 Code Changes

This document outlines the code changes made for Assignment 1, mapped to the specific activities.

## Activity 1.1: Explore Your App's Anatomy

**Files Modified:**
- `client/src/pages/Home.tsx`
- `client/src/components/About.tsx` (Component defined but currently replaced by inline code in Home.tsx)

**Changes:**
1.  **Inlined About Section**: In `client/src/pages/Home.tsx`, the `About` component import was removed, and the code was moved directly into the `Home` component.
2.  **Structure & Style**: Added comments in `Home.tsx` to identify the "Structure Layer" (HTML tags like `h2`, `p`) and "Style Layer" (Tailwind classes).
3.  **Content Update**: Updated the "About Me" title and added a "My Story" subtitle in both the inlined version and the original component.

**Location of Comments:**
- `client/src/pages/Home.tsx`: Search for `ACTIVITY 1.1` to see the inlined section and anatomy breakdown.
- `client/src/components/About.tsx`: Search for `ACTIVITY 1.1` to see the modifications to the component itself.

## Activity 1.2

*No specific code comments found for Activity 1.2.*

## Activity 1.3: Navigation Behavior

**Files Modified:**
- `client/src/components/Navigation.tsx`

**Changes:**
1.  **Text-Based Toggle**: Replaced the Hamburger/X icons with text buttons ("Open" / "Close").

**Location of Comments:**
- `client/src/components/Navigation.tsx`: Search for `ACTIVITY 1.3` (grouped with 1.4).

## Activity 1.4: Responsive Design

**Files Modified:**
- `client/src/components/Navigation.tsx`

**Changes:**
1.  **Breakpoint Updates**: Changed responsiveness breakpoints from `md` (medium) to `lg` (large).
    -   Desktop menu now hides on screens smaller than `lg`.
    -   Mobile toggle now appears on screens smaller than `lg`.
    -   Mobile menu logic updated to match.

**Location of Comments:**
- `client/src/components/Navigation.tsx`: Search for `ACTIVITY 1.4`.

## Activity 1.5

*No specific code comments found for Activity 1.5.*

## Activity 1.6: Styling & Theming

**Files Modified:**
- `client/src/index.css`

**Changes:**
1.  **Color Palette Update**: Updated CSS variables to match "Sacred Heart University" colors.
    -   **Primary**: Gold (`hsl(45 90% 50%)`).
    -   **Background**: Light/Dark Green tints.
    -   **Foreground**: Dark Green / Warm White.
2.  **Dark Mode**: Configured specific dark mode colors for a "Deep Green" atmosphere.

**Location of Comments:**
- `client/src/index.css`: Search for `ACTIVITY 1.6`.
