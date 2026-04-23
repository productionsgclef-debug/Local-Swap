# Local Swap

A modern, open-source classified ads and marketplace platform for buying, selling, and connecting locally. Local Swap combines a vibrant marketplace, job board, and community channels into a single, user-friendly mobile application.

## Features

**Marketplace**
Browse and list classified ads with photos, descriptions, and pricing. Connect directly with local buyers and sellers through in-app messaging.

**Jobs Board**
Discover local job opportunities, from full-time positions to freelance work. Apply directly through the app and connect with employers in your area.

**Community Channels**
Join topic-based channels and communities. Share recommendations, ask questions, and connect with like-minded people in your neighborhood.

**Messaging**
Communicate securely with buyers, sellers, and job contacts through built-in messaging. Share photos and negotiate deals without exposing personal contact information.

**User Profiles**
Build trust with verified profiles, ratings, and reviews. Showcase your listings and job history to establish credibility in the community.

## Installation

### Prerequisites
- Node.js 18+ and npm/pnpm
- Expo CLI (`npm install -g expo-cli`)
- Android SDK or Xcode (for native builds)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/productionsgclef-debug/Local-Swap.git
cd Local-Swap
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open the app in Expo Go:
   - iOS: Scan the QR code with your camera
   - Android: Scan the QR code with Expo Go app

## Development

### Project Structure

```
app/
  (tabs)/
    index.tsx           # Marketplace feed
    jobs.tsx            # Jobs board
    channels.tsx        # Community channels
    messages.tsx        # Messaging
    profile.tsx         # User profile
components/
  screen-container.tsx  # SafeArea wrapper
  ui/
    icon-symbol.tsx     # Icon mapping
hooks/
  use-colors.ts         # Theme colors
lib/
  utils.ts              # Utility functions
assets/
  images/               # App icons and logos
```

### Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: React Context + AsyncStorage
- **Navigation**: Expo Router
- **Build Tool**: Metro Bundler

### Building for Production

#### Android APK
```bash
eas build --platform android --local
```

#### iOS App
```bash
eas build --platform ios --local
```

## Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please review our Code of Conduct before contributing.

## Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Check existing documentation
- Review the FAQ section

## Roadmap

**Upcoming Features**
- Advanced search and filtering
- User verification and trust badges
- Payment integration for safer transactions
- Push notifications for new messages and listings
- Saved searches and alerts
- Analytics dashboard for sellers

## Privacy & Security

Local Swap prioritizes user privacy and security:
- All messages are transmitted securely
- Personal information is never shared without consent
- User data is stored locally on device by default
- No tracking or analytics collection
- Open-source code for transparency

## Acknowledgments

Built with Expo, React Native, and NativeWind. Special thanks to the open-source community for the amazing tools and libraries that make this project possible.

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**Maintainer**: G-clef Productions
