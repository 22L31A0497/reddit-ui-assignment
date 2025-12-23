# Reddit UI Assignment

🔗 **Live Demo**: [https://reddit-ui-assignment.vercel.app](https://reddit-ui-assignment.vercel.app)
🔗 **GitHub Repository**: [https://github.com/22L31A0497/reddit-ui-assignment](https://github.com/22L31A0497/reddit-ui-assignment)

---

## Overview

This project is a modern Reddit-style discussion feed built with a strong focus on **UI clarity**, **smooth interactions**, and **clean architecture**.
Rather than recreating Reddit feature-by-feature, the goal was to design a well-structured interface that feels intuitive, responsive, and scalable.

The application demonstrates how a real-world feed, comments system, and navigation layout can be built using **Next.js**, **state management**, and **micro-animations**, while keeping the codebase maintainable and easy to reason about.

---

## Features

* Responsive Reddit-style feed layout
* Collapsible left sidebar with smooth animation
* Right sidebar with dynamic community list
* Infinite-style top carousel for featured posts
* Post detail page with full discussion view
* Comment system with:

  * Add comments (local state)
  * Nested replies
  * Collapsible comment threads (+ / −)
  * Persistent storage using browser storage
* Smooth UI interactions using Framer Motion
* Clean routing behavior using Next.js App Router

---

## Tech Stack

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **Zustand** (state management)
* **Framer Motion** (animations)
* **CSS Modules / Global CSS**
* **Vercel** (deployment)

---

## Project Structure

```text
app/
 ├─ about/
 ├─ advertise/
 ├─ blog/
 ├─ careers/
 ├─ developer/
 ├─ explore/
 ├─ help/
 ├─ login/
 ├─ popular/
 ├─ post/[id]/
 ├─ press/
 ├─ r/[subreddit]/
 ├─ reddit-pro/
 ├─ signup/
 ├─ favicon.ico
 ├─ globals.css
 ├─ layout.tsx
 └─ page.tsx

public/

src/
 ├─ components/
 │   ├─ comments/
 │   │   ├─ CommentItem.tsx
 │   │   └─ CommentSection.tsx
 │   ├─ feed/
 │   │   ├─ Feed.tsx
 │   │   ├─ PostCard.tsx
 │   │   └─ TopCarousel.tsx
 │   └─ layout/
 │       ├─ Header.tsx
 │       ├─ RightSidebar.tsx
 │       └─ Sidebar.tsx
 │
 ├─ data/
 │   └─ posts.ts
 │
 └─ store/
     ├─ commentStore.ts
     └─ uiStore.ts

.gitignore
eslint.config.mjs
next.config.ts
package.json
package-lock.json
postcss.config.mjs
tsconfig.json
README.md
```

---

## State Management Approach

* **UI State**
  Managed using Zustand (`uiStore.ts`) for sidebar toggle and global UI behavior.

* **Comments State**
  Implemented using a dedicated Zustand store (`commentStore.ts`) with persistence.

  * Supports nested replies
  * Merges static mock data with user-generated comments
  * Persists across page refreshes using local storage

This approach keeps components lightweight while allowing shared state across routes.

---

## Routing Behavior

* Feed pages (`/`, `/popular`, `/explore`)
* Subreddit pages (`/r/[subreddit]`)
* Post detail pages (`/post/[id]`)
* Static placeholder pages (login, signup, about, etc.)

Routing follows Next.js App Router best practices with clear separation between layout and page logic.

---

## Animations & Interactions

* Sidebar expand/collapse animation
* Hover and tap feedback on posts
* Smooth comment expand/collapse behavior
* Carousel auto-scroll interactions

Animations are subtle and purposeful, enhancing usability without distracting the user.

---

## Setup Instructions

1. Clone the repository

   ```bash
   git clone https://github.com/22L31A0497/reddit-ui-assignment.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

4. Open in browser

   ```
   http://localhost:3000
   ```

---

## What I Would Improve With More Time

* Keyboard accessibility for comments and navigation
* Better loading skeletons for feed and post pages
* Comment sorting (top / newest)
* Optimized image loading strategies
* Unit tests for core components
* Improved mobile gesture interactions

---
