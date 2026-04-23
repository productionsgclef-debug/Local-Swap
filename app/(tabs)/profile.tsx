import { ScrollView, Text, View, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import * as Haptics from "expo-haptics";

interface ProfileStats {
  listings: number;
  saved: number;
  reviews: number;
  rating: number;
}

const PROFILE_STATS: ProfileStats = {
  listings: 12,
  saved: 24,
  reviews: 8,
  rating: 4.8,
};

export default function ProfileScreen() {
  const handleLogout = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // TODO: Implement logout functionality
  };

  const handleEditProfile = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // TODO: Navigate to edit profile screen
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView>
        {/* Profile Header */}
        <View className="bg-surface border-b border-border px-4 py-6">
          <View className="items-center gap-3">
            <Text className="text-5xl">👤</Text>
            <Text className="text-2xl font-bold text-foreground">Alex Johnson</Text>
            <View className="flex-row items-center gap-1">
              <Text className="text-lg">⭐</Text>
              <Text className="text-sm font-semibold text-foreground">{PROFILE_STATS.rating}</Text>
              <Text className="text-sm text-muted">({PROFILE_STATS.reviews} reviews)</Text>
            </View>
            <Text className="text-sm text-muted">Joined 6 months ago</Text>
          </View>
        </View>

        {/* Stats */}
        <View className="px-4 py-6 flex-row justify-around border-b border-border">
          <View className="items-center">
            <Text className="text-2xl font-bold text-primary">{PROFILE_STATS.listings}</Text>
            <Text className="text-xs text-muted mt-1">Active Listings</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-primary">{PROFILE_STATS.saved}</Text>
            <Text className="text-xs text-muted mt-1">Saved Items</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-primary">{PROFILE_STATS.reviews}</Text>
            <Text className="text-xs text-muted mt-1">Reviews</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View className="px-4 py-4 gap-2">
          <Pressable className="bg-surface rounded-lg p-4 border border-border active:opacity-70 flex-row justify-between items-center">
            <Text className="text-base font-semibold text-foreground">My Listings</Text>
            <Text className="text-lg">→</Text>
          </Pressable>

          <Pressable className="bg-surface rounded-lg p-4 border border-border active:opacity-70 flex-row justify-between items-center">
            <Text className="text-base font-semibold text-foreground">Saved Items</Text>
            <Text className="text-lg">→</Text>
          </Pressable>

          <Pressable className="bg-surface rounded-lg p-4 border border-border active:opacity-70 flex-row justify-between items-center">
            <Text className="text-base font-semibold text-foreground">Reviews & Ratings</Text>
            <Text className="text-lg">→</Text>
          </Pressable>

          <Pressable className="bg-surface rounded-lg p-4 border border-border active:opacity-70 flex-row justify-between items-center">
            <Text className="text-base font-semibold text-foreground">Notifications</Text>
            <Text className="text-lg">→</Text>
          </Pressable>

          <Pressable className="bg-surface rounded-lg p-4 border border-border active:opacity-70 flex-row justify-between items-center">
            <Text className="text-base font-semibold text-foreground">Settings</Text>
            <Text className="text-lg">→</Text>
          </Pressable>
        </View>

        {/* Action Buttons */}
        <View className="px-4 py-6 gap-3">
          <Pressable
            onPress={handleEditProfile}
            className="bg-primary rounded-lg py-3 px-4 active:opacity-80"
          >
            <Text className="text-center text-base font-semibold text-background">Edit Profile</Text>
          </Pressable>

          <Pressable
            onPress={handleLogout}
            className="bg-error rounded-lg py-3 px-4 active:opacity-80"
          >
            <Text className="text-center text-base font-semibold text-background">Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
