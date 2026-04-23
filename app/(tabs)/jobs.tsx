import { FlatList, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";
import * as Haptics from "expo-haptics";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  isSaved?: boolean;
}

const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "Tech Startup Inc",
    location: "Downtown",
    salary: "$80K - $120K",
    type: "Full-time",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "Design Studio",
    location: "Midtown",
    salary: "$60K - $90K",
    type: "Full-time",
  },
  {
    id: "3",
    title: "Freelance Writer",
    company: "Content Agency",
    location: "Remote",
    salary: "$30 - $60/hr",
    type: "Freelance",
  },
  {
    id: "4",
    title: "Marketing Manager",
    company: "E-Commerce Co",
    location: "Uptown",
    salary: "$70K - $100K",
    type: "Full-time",
  },
  {
    id: "5",
    title: "Data Analyst",
    company: "Finance Corp",
    location: "Downtown",
    salary: "$75K - $110K",
    type: "Full-time",
  },
];

export default function JobsScreen() {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);

  const toggleSave = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, isSaved: !job.isSaved } : job
      )
    );
  };

  const renderJob = ({ item }: { item: Job }) => (
    <View className="mx-4 my-2 bg-surface rounded-xl p-4 border border-border">
      <View className="flex-row justify-between items-start gap-3">
        <View className="flex-1">
          <Text className="text-lg font-bold text-foreground">{item.title}</Text>
          <Text className="text-sm text-muted mt-1">{item.company}</Text>
          <View className="flex-row gap-2 mt-3">
            <View className="bg-primary/10 rounded-full px-3 py-1">
              <Text className="text-xs font-semibold text-primary">{item.type}</Text>
            </View>
            <View className="bg-warning/10 rounded-full px-3 py-1">
              <Text className="text-xs font-semibold text-warning">{item.salary}</Text>
            </View>
          </View>
          <Text className="text-xs text-muted mt-2">📍 {item.location}</Text>
        </View>
        <Pressable
          onPress={() => toggleSave(item.id)}
          className="p-2"
          style={({ pressed }) => [pressed && { opacity: 0.7 }]}
        >
          <Text className="text-xl">{item.isSaved ? "⭐" : "☆"}</Text>
        </Pressable>
      </View>
      <Pressable className="mt-4 bg-primary rounded-lg py-2 px-4 active:opacity-80">
        <Text className="text-center text-sm font-semibold text-background">Apply Now</Text>
      </Pressable>
    </View>
  );

  return (
    <ScreenContainer className="p-0">
      {/* Header */}
      <View className="px-4 pt-4 pb-3 border-b border-border">
        <Text className="text-2xl font-bold text-foreground">Jobs</Text>
        <Text className="text-sm text-muted">Find opportunities near you</Text>
      </View>

      {/* Jobs List */}
      <FlatList
        data={jobs}
        renderItem={renderJob}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 8 }}
        scrollEnabled={true}
      />
    </ScreenContainer>
  );
}
