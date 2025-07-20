import { Tabs } from "expo-router";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export default function TabLayouts() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Reddit",
          headerTintColor: "#ff5700",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          headerTintColor: "#ff5700",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerTintColor: "#ff5700",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chat",
          headerTintColor: "#ff5700",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerTintColor: "#ff5700",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Feather name="bell" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
