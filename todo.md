# Local Swap - Project TODO

## Core Features

### Phase 1: Foundation & Navigation
- [ ] Set up tab bar navigation (Home, Jobs, Channels, Messages, Profile)
- [ ] Create ScreenContainer components for all screens
- [ ] Implement theme colors and styling
- [ ] Set up app branding (logo, app name, icons)

### Phase 2: Marketplace (Home)
- [ ] Design and build Home/Marketplace feed screen
- [ ] Implement item listing cards with image, title, price, location
- [ ] Create Item Detail screen with full information
- [ ] Build Post New Listing screen with photo upload
- [ ] Implement pull-to-refresh and infinite scroll
- [ ] Add quick filters (category, price, distance)

### Phase 3: Jobs Board
- [ ] Design and build Jobs Board screen
- [ ] Create Job Detail screen
- [ ] Implement job search and filters
- [ ] Add "Apply for Job" functionality
- [ ] Display company profiles

### Phase 4: Channels & Community
- [ ] Design and build Channels list screen
- [ ] Create Channel Detail screen
- [ ] Implement channel joining/leaving
- [ ] Add ability to create posts in channels
- [ ] Display channel members and discussions

### Phase 5: User Management
- [ ] Design and build User Profile screen
- [ ] Create Edit Profile screen
- [ ] Implement user authentication (local or cloud)
- [ ] Add profile picture upload
- [ ] Display user ratings and reviews

### Phase 6: Messaging
- [ ] Design and build Messages/Inbox screen
- [ ] Create Chat screen for conversations
- [ ] Implement real-time messaging
- [ ] Add typing indicators
- [ ] Enable image sharing in messages

### Phase 7: Search & Discovery
- [ ] Build advanced Search & Filters screen
- [ ] Implement search across marketplace, jobs, channels
- [ ] Add saved searches functionality
- [ ] Create "Saved Items" screen

### Phase 8: Settings & Preferences
- [ ] Create Settings screen
- [ ] Add notification preferences
- [ ] Implement dark/light mode toggle
- [ ] Add account management options
- [ ] Create Help/FAQ section

## Technical Tasks

- [ ] Set up local data persistence (AsyncStorage)
- [ ] Implement image caching and optimization
- [ ] Add error handling and loading states
- [ ] Create utility functions for common operations
- [ ] Set up API integration (if backend required)
- [ ] Implement proper TypeScript types

## F-Droid Preparation

- [ ] Create LICENSE file (MIT)
- [ ] Write comprehensive README.md
- [ ] Add F-Droid metadata (fdroid.yml or fastlane)
- [ ] Ensure no proprietary dependencies
- [ ] Verify app meets F-Droid inclusion criteria
- [ ] Test on Android emulator

## Branding & Assets

- [ ] Generate app logo (icon.png)
- [ ] Create splash screen icon
- [ ] Generate Android adaptive icons
- [ ] Create favicon for web
- [ ] Update app.config.ts with branding

## Testing & Quality

- [ ] Test all navigation flows
- [ ] Verify responsive design on different screen sizes
- [ ] Test dark/light mode switching
- [ ] Check accessibility (contrast, touch targets)
- [ ] Performance testing (scrolling, loading)
- [ ] Test on real Android device

## Deployment

- [ ] Create GitHub release/tag
- [ ] Prepare F-Droid submission
- [ ] Submit to F-Droid RFP tracker
- [ ] Monitor review process

---

## Notes
- Default to local AsyncStorage for data persistence unless user requires cloud sync
- Follow Apple HIG for iOS-like feel
- Ensure one-handed usage for all screens
- Keep F-Droid compliance in mind (no proprietary services, no aggressive tracking)
