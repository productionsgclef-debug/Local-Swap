import { FlatList, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";
import * as Haptics from "expo-haptics";

interface Channel {
  id: string;
  name: string;
  description: string;
  members: number;
  isJoined?: boolean;
  icon: string;
}

const MOCK_CHANNELS: Channel[] = [
  {
    id: "1",
    name: "Local Tech",
    description: "Tech enthusiasts and gadget lovers",
    members: 1250,
    icon: "💻",
  },
  {
    id: "2",
    name: "Furniture Swap",
    description: "Buy, sell, and trade furniture",
    members: 890,
    icon: "🛋️",
  },
  {
    id: "3",
    name: "Sports & Fitness",
    description: "Sports equipment and fitness gear",
    members: 650,
    icon: "⚽",
  },
  {
    id: "4",
    name: "Books & Reading",
    description: "Share and exchange books",
    members: 420,
    icon: "📚",
  },
  {
    id: "5",
    name: "Local Services",
    description: "Find and offer local services",
    members: 780,
    icon: "🔧",
  },
  {
    id: "6",
    name: "Community Events",
    description: "Local events and meetups",
    members: 1100,
    icon: "🎉",
  },
];

export default function ChannelsScreen() {
  const [channels, setChannels] = useState<Channel[]>(MOCK_CHANNELS);

  const toggleJoin = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setChannels((prev) =>
      prev.map((channel) =>
        channel.id === id ? { ...channel, isJoined: !channel.isJoined } : channel
      )
    );
  };

  const renderChannel = ({ item }: { item: Channel }) => (
    <View className="mx-4 my-2 bg-surface rounded-xl p-4 border border-border">
      <View className="flex-row justify-between items-start gap-3">
        <View className="flex-1">
          <View className="flex-row items-center gap-2">
            <Text className="text-2xl">{item.icon}</Text>
            <Text className="text-lg font-bold text-foreground flex-1">{item.name}</Text>
          </View>
          <Text className="text-sm text-muted mt-2">{item.description}</Text>
          <Text className="text-xs text-muted mt-3">👥 {item.members.toLocaleString()} members</Text>
        </View>
      </View>
      <Pressable
        onPress={() => toggleJoin(item.id)}
        className={item.isJoined ? "mt-4 bg-muted rounded-lg py-2 px-4 active:opacity-80" : "mt-4 bg-primary rounded-lg py-2 px-4 active:opacity-80"}
      >
        <Text className={item.isJoined ? "text-center text-sm font-semibold text-foreground" : "text-center text-sm font-semibold text-background"}>
          {item.isJoined ? "Joined" : "Join Channel"}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <ScreenContainer className="p-0">
      {/* Header */}
      <View className="px-4 pt-4 pb-3 border-b border-border">
        <Text className="text-2xl font-bold text-foreground">Channels</Text>
        <Text className="text-sm text-muted">Join communities and connect</Text>
      </View>

      {/* Channels List */}
      <FlatList
        data={channels}
        renderItem={renderChannel}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 8 }}
        scrollEnabled={true}
      />
    </ScreenContainer>
  );
}
