import { FlatList, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";
import * as Haptics from "expo-haptics";

interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  category: string;
  image: string;
  isFavorite?: boolean;
}

// Mock data for marketplace listings
const MOCK_LISTINGS: Listing[] = [
  {
    id: "1",
    title: "iPhone 14 Pro",
    price: 800,
    location: "Downtown",
    category: "Electronics",
    image: "https://via.placeholder.com/200x200?text=iPhone+14",
  },
  {
    id: "2",
    title: "Vintage Sofa",
    price: 250,
    location: "Midtown",
    category: "Furniture",
    image: "https://via.placeholder.com/200x200?text=Sofa",
  },
  {
    id: "3",
    title: "Mountain Bike",
    price: 450,
    location: "Park Area",
    category: "Sports",
    image: "https://via.placeholder.com/200x200?text=Bike",
  },
  {
    id: "4",
    title: "Laptop Stand",
    price: 35,
    location: "Downtown",
    category: "Electronics",
    image: "https://via.placeholder.com/200x200?text=Stand",
  },
  {
    id: "5",
    title: "Bookshelf",
    price: 120,
    location: "Uptown",
    category: "Furniture",
    image: "https://via.placeholder.com/200x200?text=Bookshelf",
  },
];

export default function HomeScreen() {
  const [listings, setListings] = useState<Listing[]>(MOCK_LISTINGS);

  const toggleFavorite = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setListings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const renderListing = ({ item }: { item: Listing }) => (
    <View className="flex-1 m-2 bg-surface rounded-xl overflow-hidden border border-border">
      {/* Image */}
      <View className="relative">
        <Image
          source={{ uri: item.image }}
          className="w-full h-40 bg-border"
        />
        {/* Favorite Button */}
        <Pressable
          onPress={() => toggleFavorite(item.id)}
          className="absolute top-2 right-2 bg-background rounded-full p-2 border border-border"
          style={({ pressed }) => [pressed && { opacity: 0.7 }]}
        >
          <Text className="text-lg">{item.isFavorite ? "❤️" : "🤍"}</Text>
        </Pressable>
        {/* Category Badge */}
        <View className="absolute bottom-2 left-2 bg-primary rounded-full px-3 py-1">
          <Text className="text-xs font-semibold text-background">{item.category}</Text>
        </View>
      </View>

      {/* Content */}
      <View className="p-3 gap-2">
        <Text className="text-sm font-semibold text-foreground" numberOfLines={2}>
          {item.title}
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold text-primary">${item.price}</Text>
          <Text className="text-xs text-muted">{item.location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScreenContainer className="p-0">
      {/* Header */}
      <View className="px-4 pt-4 pb-3 border-b border-border">
        <Text className="text-2xl font-bold text-foreground">Local Swap</Text>
        <Text className="text-sm text-muted">Buy, Sell & Connect Locally</Text>
      </View>

      {/* Listings Grid */}
      <FlatList
        data={listings}
        renderItem={renderListing}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingVertical: 8 }}
        scrollEnabled={true}
      />
    </ScreenContainer>
  );
}
