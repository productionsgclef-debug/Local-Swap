import { FlatList, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar: string;
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "Are you still selling the iPhone?",
    timestamp: "2 min ago",
    unread: 1,
    avatar: "👨",
  },
  {
    id: "2",
    name: "Sarah Smith",
    lastMessage: "Great! I'll pick it up tomorrow",
    timestamp: "1 hour ago",
    unread: 0,
    avatar: "👩",
  },
  {
    id: "3",
    name: "Mike Johnson",
    lastMessage: "What's the condition of the sofa?",
    timestamp: "3 hours ago",
    unread: 2,
    avatar: "👨",
  },
  {
    id: "4",
    name: "Emma Wilson",
    lastMessage: "Thanks for the quick response!",
    timestamp: "Yesterday",
    unread: 0,
    avatar: "👩",
  },
  {
    id: "5",
    name: "Alex Brown",
    lastMessage: "Can you negotiate on the price?",
    timestamp: "2 days ago",
    unread: 0,
    avatar: "👨",
  },
];

export default function MessagesScreen() {
  const [conversations, setConversations] = useState<Conversation[]>(MOCK_CONVERSATIONS);

  const renderConversation = ({ item }: { item: Conversation }) => (
    <Pressable className="active:opacity-70">
      <View className="mx-4 my-2 bg-surface rounded-xl p-4 border border-border flex-row items-center gap-3">
        <Text className="text-3xl">{item.avatar}</Text>
        <View className="flex-1">
          <View className="flex-row justify-between items-center">
            <Text className="text-base font-semibold text-foreground">{item.name}</Text>
            <Text className="text-xs text-muted">{item.timestamp}</Text>
          </View>
          <Text className="text-sm text-muted mt-1" numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>
        {item.unread > 0 && (
          <View className="bg-primary rounded-full w-6 h-6 items-center justify-center">
            <Text className="text-xs font-bold text-background">{item.unread}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );

  return (
    <ScreenContainer className="p-0">
      {/* Header */}
      <View className="px-4 pt-4 pb-3 border-b border-border">
        <Text className="text-2xl font-bold text-foreground">Messages</Text>
        <Text className="text-sm text-muted">Your conversations</Text>
      </View>

      {/* Conversations List */}
      <FlatList
        data={conversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 8 }}
        scrollEnabled={true}
      />
    </ScreenContainer>
  );
}
