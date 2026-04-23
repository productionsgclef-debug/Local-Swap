# Local Swap - Mobile App Interface Design

## Overview
**Local Swap** is a modern classified ads and marketplace platform designed for iOS and Android. It combines buying/selling of items, job listings, and community channels in a single, intuitive app. The design follows Apple Human Interface Guidelines and focuses on one-handed usage in portrait orientation (9:16).

---

## Screen List

1. **Onboarding / Splash** - App introduction and quick setup
2. **Home / Marketplace Feed** - Browse classified ads and items for sale
3. **Item Detail** - Full item information, photos, seller profile, messaging
4. **Post New Listing** - Create a new classified ad or item listing
5. **Jobs Board** - Browse and search job listings
6. **Job Detail** - Full job information, apply button, company profile
7. **Channels** - Browse community channels and groups
8. **Channel Detail** - View channel content and discussions
9. **Search & Filters** - Advanced search across marketplace, jobs, and channels
10. **User Profile** - View and edit user profile, saved listings, posted items
11. **Messages** - Inbox for conversations with buyers/sellers
12. **Saved Items** - Bookmarked listings and jobs
13. **Settings** - App preferences, notifications, account management

---

## Primary Content and Functionality

### Home / Marketplace Feed
- **Content**: Grid or list of classified ads with thumbnail images, title, price, location
- **Functionality**: 
  - Swipe or tap to view item details
  - Pull-to-refresh to load new listings
  - Infinite scroll pagination
  - Quick filters (category, price range, distance)
  - Favorite/bookmark button

### Item Detail Screen
- **Content**: 
  - Image gallery (swipeable)
  - Item title, price, condition
  - Detailed description
  - Seller profile card with rating
  - Location map
  - Posted date and views count
- **Functionality**:
  - Message seller button
  - Save/bookmark item
  - Share item
  - Report listing
  - View similar items

### Post New Listing
- **Content**: 
  - Category selector (dropdown)
  - Title input
  - Price input
  - Photo upload (multiple)
  - Description text area
  - Location picker
  - Condition selector (New, Like New, Good, Fair)
- **Functionality**:
  - Camera or gallery photo upload
  - Auto-fill location from GPS
  - Save as draft
  - Publish listing
  - Set expiration date

### Jobs Board
- **Content**: Job listings with company logo, title, location, salary range
- **Functionality**:
  - Filter by category, location, salary
  - Search jobs
  - Apply button
  - Save job
  - View company profile

### Channels
- **Content**: List of community channels (e.g., "Local Tech", "Furniture Swap", "Services")
- **Functionality**:
  - Join/leave channel
  - View channel members
  - Create new channel (for premium users)
  - Channel discussions/posts

### Search & Filters
- **Content**: Advanced search interface
- **Functionality**:
  - Search by keyword
  - Filter by category, price, location, condition
  - Sort by newest, price, distance, rating
  - Save search filters

### User Profile
- **Content**:
  - Profile picture, name, rating
  - Bio/about section
  - Posted listings count
  - Joined date
  - Verification badge (if verified)
- **Functionality**:
  - Edit profile
  - View posted items
  - View saved items
  - View reviews/ratings
  - Logout

### Messages
- **Content**: Conversation list with last message preview
- **Functionality**:
  - Open conversation
  - Send/receive messages
  - Image sharing in chat
  - Typing indicator
  - Mark as read/unread

---

## Key User Flows

### Flow 1: Browse and Purchase an Item
1. User opens app → Home screen shows marketplace feed
2. User scrolls through listings or uses search/filters
3. User taps on item → Item Detail screen opens
4. User reviews photos, description, seller profile
5. User taps "Message Seller" → Messages screen opens
6. User and seller negotiate and arrange pickup/delivery

### Flow 2: Post a Classified Ad
1. User taps "+" button → Post New Listing screen
2. User selects category (e.g., "Electronics")
3. User uploads photos from camera or gallery
4. User fills in title, price, description, location
5. User taps "Publish" → Listing goes live
6. Notifications alert user when someone messages about the item

### Flow 3: Search for Jobs
1. User taps "Jobs" tab → Jobs Board screen
2. User searches for job title or uses filters
3. User taps on job → Job Detail screen
4. User reviews job description, requirements, salary
5. User taps "Apply" → Application form or redirect to company site

### Flow 4: Join and Participate in Channels
1. User taps "Channels" tab → Channels list
2. User browses available channels
3. User taps "Join" on a channel → Channel Detail screen
4. User views channel discussions and posts
5. User can create new posts or reply to existing ones

---

## Color Choices

**Brand Colors** (Modern, Trustworthy, Marketplace-Focused):
- **Primary**: `#0A7EA4` (Teal/Blue) - Action buttons, highlights
- **Secondary**: `#F59E0B` (Amber/Gold) - Accents, ratings, warnings
- **Success**: `#22C55E` (Green) - Confirmations, positive actions
- **Error**: `#EF4444` (Red) - Alerts, deletions
- **Background**: `#FFFFFF` (Light) / `#151718` (Dark) - Screen backgrounds
- **Surface**: `#F5F5F5` (Light) / `#1E2022` (Dark) - Cards, surfaces
- **Text Primary**: `#11181C` (Light) / `#ECEDEE` (Dark) - Main text
- **Text Secondary**: `#687076` (Light) / `#9BA1A6` (Dark) - Secondary text
- **Border**: `#E5E7EB` (Light) / `#334155` (Dark) - Dividers, borders

**Usage**:
- Primary color for CTAs (buttons, links)
- Secondary color for ratings and highlights
- Success color for completed actions
- Error color for destructive actions or alerts

---

## Navigation Structure

```
Tab Bar (Bottom)
├── Home (Marketplace)
├── Jobs
├── Channels
├── Messages
└── Profile

Home Stack
├── Home Feed
├── Item Detail
├── Post New Listing
└── Search & Filters

Jobs Stack
├── Jobs Board
├── Job Detail
└── Apply Form

Channels Stack
├── Channels List
├── Channel Detail
└── Create Channel

Messages Stack
└── Conversation List
    └── Chat Screen

Profile Stack
├── User Profile
├── Edit Profile
├── Saved Items
└── Settings
```

---

## Design Principles

1. **One-Handed Usage**: All interactive elements within thumb reach (bottom 60% of screen)
2. **Clear Hierarchy**: Important actions are prominent; secondary actions are discoverable
3. **Fast Feedback**: Immediate visual response to user actions (loading states, haptics)
4. **Consistency**: Repeated UI patterns across all screens
5. **Accessibility**: High contrast, readable fonts, proper touch targets (min 44pt)
6. **Performance**: Smooth scrolling, fast load times, lazy loading for images
7. **Trust**: Seller ratings, verification badges, secure messaging
