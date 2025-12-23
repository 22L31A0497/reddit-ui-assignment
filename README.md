# Reddit-Style Feed UI – Frontend Assignment

## Overview

This project is a UI/UX-focused Reddit-style feed built as part of a frontend assignment.
The goal of the assignment was not to recreate Reddit feature-by-feature, but to demonstrate clean component structure, thoughtful state management, smooth interactions, and correct routing behavior.

The application focuses on clarity, usability, and maintainable architecture using modern React and Next.js patterns.

---

## Features Implemented

* Reddit-style feed layout with header, left sidebar, main feed, and right sidebar
* Collapsible left sidebar with smooth width animation
* Responsive layout for desktop, tablet, and smaller screens
* Horizontal auto-scrolling carousel with infinite looping
* Post cards with clean structure and hover micro-animations
* Post detail page with correct dynamic routing
* Comment system with:

  * Add comments using local state (no backend)
  * Nested replies (reply to comments)
  * Collapsible comments using + / − toggles
  * Per-post comment persistence using local storage
* Smooth UI transitions using Framer Motion
* Clean separation of UI state and data state

---

## Tech Stack

* **Next.js (App Router)** – routing, layouts, and server/client separation
* **React** – component-based UI
* **Framer Motion** – micro-animations and UI interactions
* **Zustand** – state management for UI state and comments
* **CSS (custom styles)** – layout and visual styling
* **LocalStorage** – persistence for comments (no backend)

---

## Project Structure (High Level)

* `app/` – Next.js app router pages and layouts
* `src/components/` – reusable UI components (Header, Sidebar, Feed, PostCard, CommentSection)
* `src/store/` – Zustand stores for UI and comments
* `src/data/` – mock post and comment data
* `styles/` – global and component-level CSS

The structure is intentionally modular to keep components readable and easy to extend.

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd reddit-feed-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---

## Design Decisions

### 1. UI First Approach

The focus was on UI clarity and user experience:

* Clean spacing and readable layouts
* Minimal visual noise
* Clear affordances for interactions (clicks, replies, toggles)

### 2. State Management

* Zustand was chosen for simplicity and clarity
* UI state (sidebar toggle, search) and comment state are separated
* Comments are stored per post to avoid cross-post data leakage

### 3. Comment System

* Comments and replies are fully client-side
* Local storage is used to persist user-added comments across refresh
* Static comments are merged safely with user-added comments
* Nested replies follow a predictable data structure

### 4. Routing

* Feed and post detail pages use proper Next.js dynamic routing
* Clicking on posts or comments navigates correctly to the detail page
* Comments are intentionally only editable on the post detail page to keep the feed clean

### 5. Animations

* Framer Motion is used only where it adds value
* Animations are subtle and functional, not decorative
* Sidebar and hover interactions improve perceived responsiveness

---

## What I Would Improve With More Time

If given more time, I would focus on:

1. **Deeper Comment Interactions**

   * Collapsible nested reply threads with reply counts
   * Sorting comments (top, newest)

2. **Accessibility**

   * Keyboard navigation improvements
   * Better focus states and ARIA labels

3. **Performance Optimizations**

   * Memoization for large comment trees
   * Virtualized lists for long feeds

4. **Visual Polish**

   * Consistent design tokens for spacing and colors
   * Improved mobile layout refinements

5. **Testing**

   * Unit tests for comment logic
   * UI interaction tests for critical flows

---

## Notes

* This project intentionally avoids backend integration to focus on UI, state, and interaction design as requested.
* Mock data is used consistently to simulate real user scenarios.
* Any incomplete or simplified areas were chosen consciously to prioritize core UX and architecture within the given time frame.

---

## Author

**Jaganmohan Rao Kuna**
Full-Stack Developer

---